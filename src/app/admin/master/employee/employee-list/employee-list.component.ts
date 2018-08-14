import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  public employeeList: any = '';

  constructor(
    private _commonService: CommonService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.getEmployeeList();
  }

  getEmployeeList() {
    this.employeeService.getEmployee()
    .subscribe(res => {
      this.employeeList = res.data;
    });
  }

  editEmployee(employee: any) {
    this._commonService.redirectTo(`/admin/employee/edit/${employee._id}`);
  }

  deleteEmployee(employeeid: any) {
    this.employeeService.deleteEmployee(employeeid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getEmployeeList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  updateStatus(event: boolean, c: any) {
    const fieldEmployee = {
      employeenum: c.employeenum,
      employeename: c.employeename,
      employeetype: c.employeetype,
      designation: c.designation,
      email: c.email,
      countrycode: c.countrycode,
      mobile: c.mobile,
      address: c.address,
      status: event,
      organogramid: c.organogramid,
      employeeid: c._id
    };
    this.employeeService.addEmployee(fieldEmployee)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
