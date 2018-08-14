import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { EmailTemplateService } from '../email-template.service';

@Component({
  selector: 'app-emailtemplatelist',
  templateUrl: './emailtemplatelist.component.html',
  styleUrls: ['./emailtemplatelist.component.scss']
})
export class EmailtemplatelistComponent implements OnInit {

  public emaitemplateIdid: String;
  public name: String;
  public description: String;
  public status: Boolean;
  public emailTemplateList: String;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private emailtemplateService: EmailTemplateService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.emaitemplateIdid = params['emailtemplateid'];
      if (!this._validationsService.isEmpty(this.emaitemplateIdid)) {
        this.getEmailTemplateById(this.emaitemplateIdid);
      }
    });
    this.getEmailTemplateList();
  }

  getEmailTemplateList() {
    this.emailtemplateService.getEmailTemplate()
      .subscribe(res => {
        this.emailTemplateList = res.data;
        // console.log(this.trainingHeadList);
      });
  }

  getEmailTemplateById(emaitemplateIdid: any) {
    this.emailtemplateService.getEmailTemplateById(emaitemplateIdid)
      .subscribe(res => {
        this.name = res.data.name;
        this.description = res.data.description;
        this.status = res.data.status;
        this.emaitemplateIdid = res.data._id;
      });
  }

  editEmailTemplate(Emailhead: any) {
    this._commonService.redirectTo(`/admin/settings/email-template/edit/${Emailhead._id}`);
    // this.emaitemplateIdid = Emailhead._id;
    // this.name = Emailhead.name;
    // this.description = Emailhead.description;
    // window.scrollTo(0, 0);
  }

  deleteEmailTemplate(Emailheadid: any) {
    this.emailtemplateService.deleteEmailTemplate(Emailheadid)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.name = '';
          this.getEmailTemplateList();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

}
