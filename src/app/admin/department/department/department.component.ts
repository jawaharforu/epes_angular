import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { DepartmentService } from '../department.service';

@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.scss']
})
export class DepartmentComponent implements OnInit {

  public departmentid: String;
  public name: String;
  public departmentList: any;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private departmentService: DepartmentService
  ) { }

  ngOnInit() {
    this.getDepartmentList();
  }

  getDepartmentList() {
    this.departmentService.getDepartment()
    .subscribe(res => {
      this.departmentList = res.data;
    });
  }

  departmentForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    let newDepartment;
    if (!this._validationsService.isEmpty(this.departmentid)) {
      newDepartment = {
        name: this.name,
        departmentid: this.departmentid
      };
    } else {
      newDepartment = {
        name: this.name
      };
    }
    this.departmentService.addDepartment(newDepartment)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.departmentid = '';
        this.name = '';
        this.getDepartmentList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editDepartment(a: any) {
    this.departmentid = a._id;
    this.name = a.name;
    window.scrollTo(0, 0);
  }

  deleteDepartment(faqcategoryid: any) {
    this.departmentService.deleteDepartment(faqcategoryid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getDepartmentList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
