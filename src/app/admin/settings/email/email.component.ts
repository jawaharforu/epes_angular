import { Component, OnInit } from '@angular/core';
import { EmailService } from './email.service';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {

  public primaryemailid: String;
  public email: String;

  public emailList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private emailService: EmailService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.primaryemailid = params['primaryemailid'];
      // console.log(this.primaryemailid);
      if (!this._validationsService.isEmpty(this.primaryemailid)) {
        this.getEmailById(this.primaryemailid);
      }
    });

    this.getEmailList();
  }


  //saving Code
  getEmailById(primaryemailid: any) {
    this.emailService.getEmailById(primaryemailid)
    .subscribe(res => {
      this.email = res.data.name;
      this.primaryemailid = res.data._id;
    });
  } 

  emailForm() {
    if (this._validationsService.isEmpty(this.email)) {
      this._commonService.showMessage('error', 'Email field should not be empty!');
      return false;
    }
    let fieldemailid;
    if (!this._validationsService.isEmpty(this.primaryemailid)) {
      fieldemailid = {
        email: this.email,
        primaryemailid: this.primaryemailid
      };
    } else {
      fieldemailid = {
        email: this.email,
      };
    }
    // console.log(fieldemailid);
    this.emailService.addEmail(fieldemailid)
    .subscribe(res => {
      // console.log(res);
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.email = '';
        this._commonService.redirectTo('/admin/email');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  //Displaying Code

  updateStatus(event: boolean, c: any) {
    const fieldEmail = {
      email: c.email,
      status: event,
      primaryemailid: c._id
    };
    this.emailService.addEmail(fieldEmail)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
  
  getEmailList() {
    this.emailService.getEmail()
    .subscribe(res => {
      this.emailList = res.data;
    });
  }

  editEmail(Email: any) {
    this._commonService.redirectTo(`/admin/email/edit/${Email._id}`);
  }

  deleteEmail(Emailid: any) {
    this.emailService.deleteEmail(Emailid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getEmailList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
