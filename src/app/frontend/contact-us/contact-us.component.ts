import { Component, OnInit } from '@angular/core';
import { ValidationsService } from '../../services/validations.service';
import { CommonService } from '../../services/common.service';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public name = "";
  public field_email = "";
  public field_phone = "";
  public field_comment = "";

  constructor(
    public _validationsService: ValidationsService,
    public _commonService: CommonService
  ) { }

  ngOnInit() {
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
      
       
  }
}
