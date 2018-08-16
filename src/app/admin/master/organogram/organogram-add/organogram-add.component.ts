import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { OrganogramService } from '../organogram.service';
import { DepartmentService } from '../../department/department.service';
import { SubDepartmentService } from '../../department/sub-department.service';

@Component({
  selector: 'app-organogram-add',
  templateUrl: './organogram-add.component.html',
  styleUrls: ['./organogram-add.component.scss']
})
export class OrganogramAddComponent implements OnInit {

  public name: String = '';
  public designation: String = '';
  public parentid: Number = 0;
  public organogramid: String = '';
  public organogramList: any = '';
  public parentName: String = '';
  public parentDept: String = '';
  public parent: Number = 0;
  public uniqueid: Number = 1;
  public childCount: any[] = [];
  public subdepartmentid: String = '';
  public subDepartmentList: any = '';
  public departmentid: String = '';
  public departmentList: any = '';

  constructor(
    private activatedRoute: ActivatedRoute,
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private organogramService: OrganogramService,
    private departmentService: DepartmentService,
    private subDepartmentService: SubDepartmentService
  ) { }

  ngOnInit() {
    this.getDepartmentList();
    this.activatedRoute.params.subscribe((params) => {
      const edit = params['edit'];
      if (!this._validationsService.isEmpty(edit) && !this._validationsService.isEmpty(params['organogramid'])) {
        this.getOrganogramById(params['organogramid'], 'edit');
      } else if (!this._validationsService.isEmpty(params['organogramid'])) {
        this.getOrganogramById(params['organogramid'], 0);
      } else if (this._validationsService.isEmpty(params['organogramid'])) {
        this.getOrganogramList(0);
      }
    });
  }

  getDepartmentList() {
    this.departmentService.getDepartment()
    .subscribe(res => {
      this.departmentList = res.data;
      
    });
  }

  getSubDepartmentList(departmentid: any) {
    this.subDepartmentService.getSubDepartmentByCategory(departmentid)
    .subscribe(res => {
      this.subDepartmentList = res.data;
      this.subdepartmentid = '';
    });
  }

  getSubDepartment() {
    if (this._validationsService.isEmpty(this.departmentid)) {
      this._commonService.showMessage('error', 'Department should not be empty!');
      return false;
    }
    this.getSubDepartmentList(this.departmentid);
  }

  getOrganogramById(organogramid: any, which: any) {
    this.organogramService.getOrganogramById(organogramid)
    .subscribe(res => {
      if (which === 'edit') {
        this.name = res.data.name;
        this.departmentid = res.data.departmentid;
        this.subdepartmentid = res.data.subdepartmentid;
        this.designation = res.data.designation;
        this.parentid = res.data.parentid;
        this.organogramid = res.data._id;
        this.uniqueid = res.data.uniqueid;
      } else {
        this.parentName = res.data.name;
        this.parentDept = res.data.departmentid;
        this.subdepartmentid = res.data.subdepartmentid;
        this.parentid = res.data.uniqueid;
        this.uniqueid = res.data.uniqueid;
        this.organogramid = '';
        // console.log(this.parentDept);
      }
      this.getOrganogramList(res.data.uniqueid);
    });
  }

  getOrganogramList(parent: any) {
    this.organogramService.getOrganogram(parent)
    .subscribe(res => {
      this.organogramList = res.data;
      // console.log(this.organogramList);
      for (const prop of res.data) {
        this.getOrganogramChild(prop.uniqueid);
      }
    });
  }
  organogramForm() {
    
    if (this._validationsService.isEmpty(this.departmentid)) {
      this._commonService.showMessage('error', 'Please select Department!');
      return false;
    }
    if (this._validationsService.isEmpty(this.subdepartmentid)) {
      this._commonService.showMessage('error', 'Please select Sub Department!');
      return false;
    }
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Head Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.designation)) {
      this._commonService.showMessage('error', 'Designation should not be empty!');
      return false;
    }
    let field;
    if (!this._validationsService.isEmpty(this.organogramid)) {
      field = {
        name: this.name,
        departmentid: this.departmentid,
        subdepartmentid: this.subdepartmentid,
        designation: this.designation,
        parentid: this.parentid,
        organogramid: this.organogramid,
        uniqueid: this.uniqueid
      };
    } else {
      field = {
        name: this.name,
        departmentid: this.departmentid,
        subdepartmentid: this.subdepartmentid,
        designation: this.designation,
        parentid: this.parentid,
        uniqueid: this.uniqueid,
      };
    }
    this.organogramService.addOrganogram(field)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        // this._commonService.redirectTo('/admin/jd/');
        this.name = '';
        this.departmentid = '';
        this.subdepartmentid = '';
        this.designation = '';
        this.parentid = (this.parentid !== undefined) ? this.parentid : 0;
        this.organogramid = '';
        this.getOrganogramList(this.parentid);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  addSublevel(id: any) {
    this._commonService.redirectTo(`/admin/organogram/${id}`);
  }

  editHeader(h: any) {
    this.name = h.name;
    this.departmentid = h.departmentid;
    this.subdepartmentid = h.subdepartmentid;
    this.designation = h.designation;
    this.parentid = h.parentid;
    this.organogramid = h._id;
    window.scrollTo(0, 0);
  }

  deleteHeader(headerid: any) {
    this.organogramService.deleteOrganogram(headerid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getOrganogramList(this.parent);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  getOrganogramChild(uniqueid: any) {
    this.organogramService.getOrganogramChild(uniqueid)
    .subscribe(res => {
      this.childCount[uniqueid] = res.data.length;
    });
  }

}
