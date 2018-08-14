import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { DepartmentService } from '../department.service';
import { SubDepartmentService } from '../sub-department.service';

@Component({
  selector: 'app-sub-department',
  templateUrl: './sub-department.component.html',
  styleUrls: ['./sub-department.component.scss']
})
export class SubDepartmentComponent implements OnInit {

  public subdepartmentid: String = '';
  public name: String  = '';
  public subDepartmentList: any = '';
  public departmentid: String = '';
  public departmentList: any = '';

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private departmentService: DepartmentService,
    private subDepartmentService: SubDepartmentService
  ) { }

  ngOnInit() {
    this.getDepartmentList();
    this.getSubDepartmentList();
  }

  getDepartmentList() {
    this.departmentService.getDepartment()
    .subscribe(res => {
      this.departmentList = res.data;
    });
  }

  getSubDepartmentList() {
    this.subDepartmentService.getSubDepartment()
    .subscribe(res => {
      this.subDepartmentList = res.data;
    });
  }

  subDepartmentForm() {
    if (this._validationsService.isEmpty(this.departmentid)) {
      this._commonService.showMessage('error', 'Please select department!');
      return false;
    }
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Sub-Department Name should not be empty!');
      return false;
    }
    let newSubDepartment;
    if (!this._validationsService.isEmpty(this.subdepartmentid)) {
      newSubDepartment = {
        name: this.name,
        departmentid: this.departmentid,
        subdepartmentid: this.subdepartmentid
      };
    } else {
      newSubDepartment = {
        name: this.name,
        departmentid: this.departmentid
      };
    }
    this.subDepartmentService.addSubDepartment(newSubDepartment)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.subdepartmentid = '';
        this.name = '';
        this.departmentid = '';
        this.getSubDepartmentList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editSubDepartment(a: any) {
    this.subdepartmentid = a._id;
    this.name = a.name;
    this.departmentid = a.departmentid._id;
    window.scrollTo(0, 0);
  }

  deleteSubDepartment(SubDepartmentid: any) {
    this.subDepartmentService.deleteSubDepartment(SubDepartmentid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getSubDepartmentList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
