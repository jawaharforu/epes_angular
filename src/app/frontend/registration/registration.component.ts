import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ValidationsService } from '../../services/validations.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  classer = "hi";

  public field_email_id = "";
  public field_phone_number = "";
  public field_password = "";
  public field_confirm_password = "";
  public field_first_name = "";
  public field_middle_name = "";
  public field_last_name = "";

  public field_job_title = "";
  public field_company_name = "";
  public field_contact_number = "";
  public field_company_address = "";

  public field_industry_name = "";
  public field_no_of_employee = "";
  public field_country_name = "";
  public field_state_name = "";
  public field_city_name = "";

  industries: any[] = [
    {id:1, industryname:'Information Technology'},
    {id:2, industryname:'Civil Engineering'},
    {id:3, industryname:'Others'}
  ];

  no_of_employees: any[] = [
    {id:1, employeesCount: '10-50'},
    {id:2, employeesCount: '50-100'},
    {id:3, employeesCount: '100-500'},
    {id:3, employeesCount: '500-1000'},
    {id:3, employeesCount: '1000-5000'},
    {id:3, employeesCount: '5000 above'}
  ];

  country_list: any[] = [
    {id:1, countryName: 'India'},
    {id:2, countryName: 'Pakistan'},
    {id:3, countryName: 'SriLanka'},
  ];

  state_list: any[] = [
    {id:1, stateName: 'Karnataka'},
    {id:2, stateName: 'Kerala'},
    {id:3, stateName: 'Tamil Nadu'},
    {id:4, stateName: 'Andhra Pradesh'},
  ];

  city_list: any[] = [
    {id:1, cityName: 'Bangalore'},
    {id:2, cityName: 'Mangalore'},
    {id:3, cityName: 'Mysore'},
    {id:4, cityName: 'Raichur'},
  ];

  //Validation start here
  
  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
  ) { }

  ngOnInit() {
  }

  registrationForm(){    

    if (this._validationsService.isEmpty(this.field_first_name)) {
      this._commonService.showMessage('error', 'First Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_middle_name)) {
      this._commonService.showMessage('error', 'Middle Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_last_name)) {
      this._commonService.showMessage('error', 'Last Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_phone_number)) {
      this._commonService.showMessage('error', 'Phone number field should not be empty!');
      return false;
    }

    if (this._validationsService.isDigit(this.field_phone_number)) {
      this._commonService.showMessage('error', 'Phone number field should have only digits!');
      return false;
    }

    if (this._validationsService.isMinimum(this.field_phone_number)) {
      this._commonService.showMessage('error', 'Phone number field should have atleast 10 digits!');
      return false;
    }

    if (this._validationsService.isMaximum(this.field_phone_number)) {
      this._commonService.showMessage('error', 'Phone number field should exceed 13 digits!');
      return false;
    }    

    if (this._validationsService.isEmpty(this.field_email_id)) {
      this._commonService.showMessage('error', 'Email field should not be empty!');
      return false;
    }

    if (!this._validationsService.isEmail(this.field_email_id)) {
      this._commonService.showMessage('error', 'Field should be an Email Address!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_password)) {
      this._commonService.showMessage('error', 'Password field should not be empty!');
      return false;
    }

    if (this._validationsService.isPassword(this.field_password)) {
      this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_confirm_password)) {
      this._commonService.showMessage('error', 'Confirm Password field should not be empty!');
      return false;
    }

    if (this._validationsService.isPassword(this.field_confirm_password)) {
      this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
      return false;
    }

    if(this.field_password !== this.field_confirm_password){
      this._commonService.showMessage('error', 'password and confirm password fields should be same');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_job_title)) {
      this._commonService.showMessage('error', 'Job Title field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_company_name)) {
      this._commonService.showMessage('error', 'Company Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_industry_name)) {
      this._commonService.showMessage('error', 'Industry Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_no_of_employee)) {
      this._commonService.showMessage('error', 'Number of Employees field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_contact_number)) {
      this._commonService.showMessage('error', 'Contact Number field should not be empty!');
      return false;
    }
    /*if (this._validationsService.isMobile(this.field_contact_number)) {
      this._commonService.showMessage('error', 'Contact Number should be a mobile number!');
      return false;
    }*/

    if (this._validationsService.isEmpty(this.field_company_address)) {
      this._commonService.showMessage('error', 'Company Address field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.field_country_name)) {
      this._commonService.showMessage('error', 'Country Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_state_name)) {
      this._commonService.showMessage('error', 'State Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_city_name)) {
      this._commonService.showMessage('error', 'City Name field should not be empty!');
      return false;
    }
    
  }

}
