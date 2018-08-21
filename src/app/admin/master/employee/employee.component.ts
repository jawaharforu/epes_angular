import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrganogramService } from '../organogram/organogram.service';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { EmployeeService } from './employee.service';
import { ContactusService } from '../../frontend/contactus/contactus.service';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  public organogramList: any = '';
  public type: String = 'others';
  public organogramid: String = '';
  public employeenum: String = '';
  public employeename: String = '';
  public designation: String = '';
  public email: String = '';
  public countrycode: String = '+91';
  public mobile: String = '';
 // public address: String = '';
  public employeetype: String = 'others';
  public employeeid: String = '';
  public countryList: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private organogramService: OrganogramService,
    private contactusService: ContactusService,
    private employeeService: EmployeeService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.employeeid = params['employeeid'];
      if (!this._validationsService.isEmpty(this.employeeid)) {
        this.getEmployeeById(this.employeeid);
      }
    });
    this.getOrganogramFullList();
    this.getCountryList();
  }

  getCountryList() {
    this.contactusService.getCountryList()
      .subscribe(res => {
        this.countryList = res.data;
      });
  }

  getEmployeeById(employeeid: any) {
    this.employeeService.getEmployeeById(employeeid)
      .subscribe(res => {
        this.employeenum = res.data.employeenum;
        this.employeename = res.data.employeename;
        this.employeetype = res.data.employeetype;
        this.designation = res.data.designation;
        this.email = res.data.email;
        this.countrycode = res.data.countrycode;
        this.mobile = res.data.mobile;
        //this.address = res.data.address;
        this.organogramid = res.data.organogramid;
      });
  }

  getOrganogramFullList() {
    this.organogramService.getOrganogramFullList()
      .subscribe(res => {
        this.organogramList = res.data;
      });
  }

  employeeForm() {
    if (this._validationsService.isEmpty(this.organogramid)) {
      this._commonService.showMessage('error', 'Please select Head Name!');
      return false;
    }
    if (this._validationsService.isEmpty(this.employeenum)) {
      this._commonService.showMessage('error', 'Employee No. should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.employeename)) {
      this._commonService.showMessage('error', 'Employeename should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.designation)) {
      this._commonService.showMessage('error', 'Designation should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.email)) {
      this._commonService.showMessage('error', 'Email should not be empty!');
      return false;
    }
    if (!this._validationsService.isEmail(this.email)) {
      this._commonService.showMessage('error', 'Enter Valid Email Address!');
      return false;
    }
    if (this._validationsService.isEmpty(this.countrycode)) {
      this._commonService.showMessage('error', 'countrycode should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.mobile)) {
      this._commonService.showMessage('error', 'Phone number should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.mobile)) {
      this._commonService.showMessage('error', 'Phone number should have only digits!');
      return false;
    }
    if (this._validationsService.isMinimum(this.mobile)) {
      this._commonService.showMessage('error', 'Phone number should have atleast 10 digits!');
      return false;
    }
    if (this._validationsService.isMaximum(this.mobile)) {
      this._commonService.showMessage('error', 'Phone number should not exceed 13 digits!');
      return false;
    }
  /*  if (this._validationsService.isEmpty(this.address)) {
      this._commonService.showMessage('error', 'address should not be empty!');
      return false;
    }*/
    let fieldEmployee;
    if (!this._validationsService.isEmpty(this.employeeid)) {
      fieldEmployee = {
        employeenum: this.employeenum,
        employeename: this.employeename,
        employeetype: this.employeetype,
        designation: this.designation,
        email: this.email,
        countrycode: this.countrycode,
        mobile: this.mobile,
      //  address: this.address,
        status: true,
        organogramid: this.organogramid,
        employeeid: this.employeeid
      };
    } else {
      fieldEmployee = {
        employeenum: this.employeenum,
        employeename: this.employeename,
        employeetype: this.employeetype,
        designation: this.designation,
        email: this.email,
        countrycode: this.countrycode,
        mobile: this.mobile,
     //   address: this.address,
        status: true,
        organogramid: this.organogramid
      };
    }

    this.employeeService.addEmployee(fieldEmployee)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this._commonService.redirectTo('/admin/employee/list');
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });

  }

}
