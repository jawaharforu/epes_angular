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

  public contactusid: String = '';
  public name: String = '';
  public field_email: String = '';
  public field_phone: String = '';
  public field_message: String = '';
  public field_country_code: String = '+91';

  public countryList : any;

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

    this.getCountryList();
  }

  getCountryList() {
    this.contactusService.getCountryList()
    .subscribe(res => {
      this.countryList = res.data;
    });
  }

  getContacusById(contactusid: any) {
    this.contactusService.getContactusById(contactusid)
    .subscribe(res => {
      this.name = res.data.name;
      this.field_email = res.data.email;
      this.field_phone = res.data.mobile;
      this.field_message = res.data.message;
      this.field_country_code = res.data.countrycode;
      this.contactusid = res.data._id;
    });
  }

  contactusForm(){
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.field_email)) {
      this._commonService.showMessage('error', 'Email Address should not be empty!');
      return false;
    }
    if (!this._validationsService.isEmail(this.field_email)) {
      this._commonService.showMessage('error', 'Enter Valid Email Address!');
      return false;
    }
    if (this._validationsService.isEmpty(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone Number should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone Number should contain only digits!');
      return false;
    }
    if (this._validationsService.isMinimum(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone Number should have atleast 10 digits!');
      return false;
    }
    if (this._validationsService.isMaximum(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone number should not exceed 13 digits!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_country_code)) {
      this._commonService.showMessage('error', 'Please Select Dialing Code!');
      return false;
    }


    let fieldcontactusid;
    if (!this._validationsService.isEmpty(this.contactusid)) {
      fieldcontactusid = {
        name: this.name,
        mobile: this.field_phone,
        email: this.field_email,
        message: this.field_message,
        countrycode: this.field_country_code,
        contactusid: this.contactusid
      };
      console.log(fieldcontactusid);
    } else {
      fieldcontactusid = {
        name: this.name,
        mobile: this.field_phone,
        email: this.field_email,
        message: this.field_message,
        countrycode: this.field_country_code
      };
    }
    this.contactusService.addContactus(fieldcontactusid)
    .subscribe(res => {
        if (res.success) {
            this._commonService.showMessage('success', res.msg);
            this.name = '';
            this.field_message = '';
            this.field_email= '';
            this.field_phone = '';
            this.field_country_code = '+91';
            this._commonService.redirectTo('/contact-us');
        } else {
            this._commonService.showMessage('error', res.msg);
        }
    });
  }
}
