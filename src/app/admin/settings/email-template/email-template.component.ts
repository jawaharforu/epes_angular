import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { EmailTemplateService } from './email-template.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-email-template',
  templateUrl: './email-template.component.html',
  styleUrls: ['./email-template.component.scss']
})
export class EmailTemplateComponent implements OnInit {

  public emailtemplateid: String;
  public name: String;
  public description: String;
  public status: Boolean;
  public emailTemplateList:String;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private emailtemplateService: EmailTemplateService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.emailtemplateid = params['emailtemplateid'];
      if (!this._validationsService.isEmpty(this.emailtemplateid)) {
        this.getBlogById(this.emailtemplateid);
      }
    });
  }

  getBlogById(emailtemplateid: any) {
    this.emailtemplateService.getEmailTemplateById(emailtemplateid)
    .subscribe(res => {
      this.name = res.data.name;
      this.description = res.data.description;
      this.emailtemplateid = res.data._id;
    });
  } 

  

  

  emailTemplateForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Email Template should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description)) {
      this._commonService.showMessage('error', 'Email Template Description should not be empty!');
      return false;
    }
    let emailTemplate;
    if (!this._validationsService.isEmpty(this.emailtemplateid)) {
      emailTemplate = {
        name: this.name,
        description: this.description,
        status: this.status,
        emailtemplateid: this.emailtemplateid
      };
    } else {
      emailTemplate = {
        name: this.name,
        description: this.description,
        status: this.status
      };
    }
    this.emailtemplateService.addEmailTemplate(emailTemplate)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.name = '';
          this.description = '';
        
          // this.status = false;
          this._commonService.redirectTo('/admin/settings/email-template/list');
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });



  }

}
