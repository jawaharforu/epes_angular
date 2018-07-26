import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ValidationsService } from '../../services/validations.service';
import { ContactusService } from '../../admin/frontend/contactus/contactus.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  classer = "hi";

  public field_email_id: String = '';
  public field_phone_number: String = '';
  // public field_password: String = '';
  // public field_confirm_password: String = '';
  public field_first_name: String = '';
  public field_middle_name: String = '';
  public field_last_name: String = '';

  public field_job_title: String = '';
  public field_company_name: String = '';
  public field_contact_number: String = '';
  public field_company_address: String = '';

  public field_industry_name: String = '';
  public field_no_of_employee: String = '';
  public field_country_name: String = '';
  public field_state_name: String = '';
  public field_city_name: String = '';
  public countrycode: String = '+91';

  public countryList : any;

  

  //Validation start here
  
  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private contactusService: ContactusService
  ) { }

  ngOnInit() {
    this.getCountryList();
  }

  getCountryList() {
    this.contactusService.getCountryList()
    .subscribe(res => {
      console.log(res);
      this.countryList = res.data;
    });
  }

 
  industries: any[]= [
    {id:0,industryname:"Agriculture & Forestry/Wildlife"},
    {id:1,industryname:"Business & Information"},
    {id:2,industryname:"Construction/Utilities/Contracting"},
    {id:3,industryname:"Education"},
    {id:4,industryname:"Finance & Insurance"},
    {id:5,industryname:"Food & Hospitality"},
	{id:6,industryname:"Gaming"},
    {id:7,industryname:"Health Services"},
    {id:8,industryname:"Motor Vehicle"},
    {id:9,industryname:"Natural Resources/Environmental"},
    {id:10,industryname:"Other"},
    {id:11,industryname:"Personal Services"},
	{id:12,industryname:"Real Estate & Housing"},
    {id:13,industryname:"Safety/Security & Legal"},
    {id:14,industryname:"Transportation"}
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

    // if (this._validationsService.isEmpty(this.field_password)) {
    //   this._commonService.showMessage('error', 'Password field should not be empty!');
    //   return false;
    // }

    // if (this._validationsService.isPassword(this.field_password)) {
    //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
    //   return false;
    // }

    // if (this._validationsService.isEmpty(this.field_confirm_password)) {
    //   this._commonService.showMessage('error', 'Confirm Password field should not be empty!');
    //   return false;
    // }

    // if (this._validationsService.isPassword(this.field_confirm_password)) {
    //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
    //   return false;
    // }

    // if(this.field_password !== this.field_confirm_password){
    //   this._commonService.showMessage('error', 'password and confirm password fields should be same');
    //   return false;
    // }

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
