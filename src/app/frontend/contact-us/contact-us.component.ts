import { Component, OnInit } from '@angular/core';
import { ValidationsService } from '../../services/validations.service';
import { CommonService } from '../../services/common.service';
import { ActivatedRoute } from '../../../../node_modules/@angular/router';
import { ContactusService } from '../../admin/frontend/contactus/contactus.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contactusid: String;
  public name = "";
  public field_email = "";
  public field_phone = "";
  public field_message = "";

  constructor(
    public _validationsService: ValidationsService,
    public _commonService: CommonService,
    private activatedRoute: ActivatedRoute,
    private contactusService: ContactusService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.contactusid = params['contactusid'];
      if (!this._validationsService.isEmpty(this.contactusid)) {
        this.getContacusById(this.contactusid);
      }
    });
  }

  getContacusById(contactusid: any) {
    this.contactusService.getContactusById(contactusid)
    .subscribe(res => {
      this.name = res.data.name;
      this.field_email = res.data.email;
      this.field_phone = res.data.mobile;
      this.field_message = res.data.message;
      this.contactusid = res.data._id;
    });
}

  contactusForm(){
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.field_email)) {
      this._commonService.showMessage('error', 'Email Address field should not be empty!');
      return false;
    }
    if (!this._validationsService.isEmail(this.field_email)) {
      this._commonService.showMessage('error', 'Enter the valid Email address!');
      return false;
    }
    if (this._validationsService.isEmpty(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone number field should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.field_phone)) {
      this._commonService.showMessage('error', 'phone number should contain only digits!');
      return false;
    }
    if (this._validationsService.isMinimum(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone number field should have 10 digits and above!');
      return false;
    } 
    if (this._validationsService.isMaximum(this.field_phone)) {
      this._commonService.showMessage('error', 'phone number should not exceed more than 13 digits!');
      return false;
    }


    let fieldcontactusid;
        if (!this._validationsService.isEmpty(this.contactusid)) {
          fieldcontactusid = {
            name: this.name,
            mobile: this.field_phone,
            email: this.field_email,
            message: this.field_message,
            contactusid: this.contactusid
          };
          console.log(fieldcontactusid);
        } else {
          fieldcontactusid = {
            name: this.name,
            mobile: this.field_phone,
            email: this.field_email,
            message: this.field_message
            
          };
          console.log(fieldcontactusid);
        }
        this.contactusService.addContactus(fieldcontactusid)
        .subscribe(res => {
            if (res.success) {
                this._commonService.showMessage('success', res.msg);
                this.name = '';
                this.field_message = '';
                this.field_email= '';
                this.field_phone = '';
                this._commonService.redirectTo('/contact-us');
            } else {
                this._commonService.showMessage('error', res.msg);
            }
        });
      
       
  }
}
