import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ValidationsService } from '../../services/validations.service';
import { ApproverService } from '../services/approver.service';


@Component({
  selector: 'app-approver',
  templateUrl: './approver.component.html',
  styleUrls: ['./approver.component.scss']
})
export class ApproverComponent implements OnInit {
  public isLoading = true;
  public approverid: String;
  public name: String;
  public email: String;
  public designation: String = 'MD';
  public approverList: any;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private approverService: ApproverService
  ) { }

  ngOnInit() {
    this.getApproverList();
  }

  getApproverList() {
    this.approverService.getApprover()
    .subscribe(res => {
      this.approverList = res.data;
    });
  }

  approverForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.email)) {
      this._commonService.showMessage('error', 'Email field should not be empty!');
      return false;
    }
    if (!this._validationsService.isEmail(this.email)) {
      this._commonService.showMessage('error', 'Invalied Email!');
      return false;
    }
    let newApprover;
    if (!this._validationsService.isEmpty(this.approverid)) {
      newApprover = {
        name: this.name,
        email: this.email,
        designation: this.designation,
        approverid: this.approverid
      };
    } else {
      newApprover = {
        name: this.name,
        email: this.email,
        designation: this.designation
      };
    }
    this.approverService.addApprover(newApprover)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        // this._commonService.redirectTo('/admin/jd/');
        this.approverid = '';
        this.name = '';
        this.email = '';
        this.designation = '';
        this.getApproverList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editApprover(a: any) {
    this.approverid = a._id;
    this.name = a.name;
    this.email = a.email;
    this.designation = a.designation;
    window.scrollTo(0, 0);
  }

  deleteApprover(approverid: any) {
    this.approverService.deleteApprover(approverid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getApproverList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
