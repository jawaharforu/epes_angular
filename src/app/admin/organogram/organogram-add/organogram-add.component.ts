import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { OrganogramService } from '../organogram.service';

@Component({
  selector: 'app-organogram-add',
  templateUrl: './organogram-add.component.html',
  styleUrls: ['./organogram-add.component.scss']
})
export class OrganogramAddComponent implements OnInit {

  public name: String;
  public department: String;
  public designation: String;
  public parentid: any;
  public organogramid: String;
  public organogramList: any;
  public parentName: String;
  public parentDept: String;
  public parent: String = 'parent';
  public childCount: any[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private organogramService: OrganogramService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      const edit = params['edit'];
      if (!this._validationsService.isEmpty(edit) && !this._validationsService.isEmpty(params['organogramid'])) {
        this.getOrganogramById(params['organogramid'], 'edit');
        this.parent = params['organogramid'];
      } else if (!this._validationsService.isEmpty(params['organogramid'])) {
        this.getOrganogramById(params['organogramid'], 'parent');
        this.parent = params['organogramid'];
      }
    });
    this.getOrganogramList(this.parent);
  }

  getOrganogramById(organogramid: any, which: any) {
    this.organogramService.getOrganogramById(organogramid)
    .subscribe(res => {
      if (which === 'edit') {
        this.name = res.data.name;
        this.department = res.data.department;
        this.designation = res.data.designation;
        this.parentid = res.data.parentid;
        this.organogramid = res.data._id;
      } else {
        this.parentName = res.data.name;
        this.parentDept = res.data.department;
        this.parentid = res.data._id;
        this.organogramid = '';
      }
    });
  }

  getOrganogramList(parent: any) {
    this.organogramService.getOrganogram(parent)
    .subscribe(res => {
      this.organogramList = res.data;
      for (const prop of res.data) {
        this.getOrganogramChild(prop._id);
      }
    });
  }
  organogramForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.department)) {
      this._commonService.showMessage('error', 'Department field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.designation)) {
      this._commonService.showMessage('error', 'Designation field should not be empty!');
      return false;
    }
    let field;
    if (!this._validationsService.isEmpty(this.organogramid)) {
      field = {
        name: this.name,
        department: this.department,
        designation: this.designation,
        parentid: (this.parentid !== '') ? this.parentid : '',
        organogramid: this.organogramid
      };
    } else {
      field = {
        name: this.name,
        department: this.department,
        designation: this.designation,
        parentid: this.parentid
      };
    }
    this.organogramService.addOrganogram(field)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        // this._commonService.redirectTo('/admin/jd/');
        this.name = '';
        this.department = '';
        this.designation = '';
        this.parentid = undefined;
        this.organogramid = '';
        this.getOrganogramList(this.parent);
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
    this.department = h.department;
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

  getOrganogramChild(organogramid: any) {
    this.organogramService.getOrganogramChild(organogramid)
    .subscribe(res => {
      this.childCount[organogramid] = res.data.length;
    });
  }

}
