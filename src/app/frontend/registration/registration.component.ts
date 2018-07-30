import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { ValidationsService } from '../../services/validations.service';
import { ContactusService } from '../../admin/frontend/contactus/contactus.service';
import { CompanyService} from '../../admin/company/company.service';
import { UserService } from '../../admin/user/user.service'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

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

  public countryList: any;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private contactusService: ContactusService,
    private companyService: CompanyService,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.getCountryList();
  }

  getCountryList() {
    this.contactusService.getCountryList()
    .subscribe(res => {
      this.countryList = res.data;
    });
  }

  // tslint:disable-next-line:member-ordering
  public industries: any[]= [
    {industryname: 'Agriculture & Forestry/Wildlife'},
    {industryname: 'Business & Information'},
    {industryname: 'Construction/Utilities/Contracting'},
    {industryname: 'Education'},
    {industryname: 'Finance & Insurance'},
    {industryname: 'Food & Hospitality'},
    {industryname: 'Gaming'},
    {industryname: 'Health Services'},
    {industryname: 'Motor Vehicle'},
    {industryname: 'Natural Resources/Environmental'},
    {industryname: 'Other'},
    {industryname: 'Personal Services'},
    {industryname: 'Real Estate & Housing'},
    {industryname: 'Safety/Security & Legal'},
    {industryname: 'Transportation'}
  ];

  // tslint:disable-next-line:member-ordering
  public no_of_employees: any[] = [
    {employeesCount: '10-50'},
    {employeesCount: '50-100'},
    {employeesCount: '100-500'},
    {employeesCount: '500-1000'},
    {employeesCount: '1000-5000'},
    {employeesCount: '5000 above'}
  ];


  registrationForm() {

    if (this._validationsService.isEmpty(this.field_first_name)) {
      this._commonService.showMessage('error', 'First Name should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_middle_name)) {
      this._commonService.showMessage('error', 'Middle Name should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_last_name)) {
      this._commonService.showMessage('error', 'Last Name should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_phone_number)) {
      this._commonService.showMessage('error', 'Phone number should not be empty!');
      return false;
    }

    if (this._validationsService.isDigit(this.field_phone_number)) {
      this._commonService.showMessage('error', 'Phone Number should have only digits!');
      return false;
    }

    if (this._validationsService.isMinimum(this.field_phone_number)) {
      this._commonService.showMessage('error', 'Phone Number should have atleast 10 digits!');
      return false;
    }

    if (this._validationsService.isMaximum(this.field_phone_number)) {
      this._commonService.showMessage('error', 'Phone Number should not exceed 13 digits!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_email_id)) {
      this._commonService.showMessage('error', 'Email Address should not be empty!');
      return false;
    }

    if (!this._validationsService.isEmail(this.field_email_id)) {
      this._commonService.showMessage('error', 'Enter Valid Email Address!');
      return false;
    }

    // if (this._validationsService.isEmpty(this.field_password)) {
    //   this._commonService.showMessage('error', 'Password field should not be empty!');
    //   return false;
    // }

    // if (this._validationsService.isPassword(this.field_password)) {
    // tslint:disable-next-line:max-line-length
    //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
    //   return false;
    // }

    // if (this._validationsService.isEmpty(this.field_confirm_password)) {
    //   this._commonService.showMessage('error', 'Confirm Password field should not be empty!');
    //   return false;
    // }

    // if (this._validationsService.isPassword(this.field_confirm_password)) {
    // tslint:disable-next-line:max-line-length
    //   this._commonService.showMessage('error', 'Password Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!');
    //   return false;
    // }

    // if(this.field_password !== this.field_confirm_password){
    //   this._commonService.showMessage('error', 'password and confirm password fields should be same');
    //   return false;
    // }

    if (this._validationsService.isEmpty(this.field_job_title)) {
      this._commonService.showMessage('error', 'Job Title should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_company_name)) {
      this._commonService.showMessage('error', 'Company Name should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_industry_name)) {
      this._commonService.showMessage('error', 'Industry should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_no_of_employee)) {
      this._commonService.showMessage('error', 'Number of Employees should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_contact_number)) {
      this._commonService.showMessage('error', 'Contact Number should not be empty!');
      return false;
    }
    /*if (this._validationsService.isMobile(this.field_contact_number)) {
      this._commonService.showMessage('error', 'Contact Number should be a mobile number!');
      return false;
    }*/

    if (this._validationsService.isEmpty(this.field_company_address)) {
      this._commonService.showMessage('error', 'Company Address should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.field_country_name)) {
      this._commonService.showMessage('error', 'Country should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_state_name)) {
      this._commonService.showMessage('error', 'State should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_city_name)) {
      this._commonService.showMessage('error', 'City should not be empty!');
      return false;
    }

    const companyField = {
      jobtitle: this.field_job_title,
      companyname: this.field_company_name,
      industry: this.field_industry_name,
      noofemployees: this.field_no_of_employee,
      companycontact: this.field_contact_number,
      companyaddress: this.field_company_address,
      country: this.field_country_name,
      state: this.field_state_name,
      city: this.field_city_name,
      status: true
    };

    const email = {
      email: this.field_email_id
    };
    this.userService.checkUserExist(email)
    .subscribe(emailresult => {
      if (!emailresult.success) {
        this.companyService.addCompany(companyField)
        .subscribe(res => {
          if (res.success) {
            const userField = {
              companyid: res.data._id,
              firstname: this.field_first_name,
              middlename: this.field_middle_name,
              lastname: this.field_last_name,
              mobile: this.field_phone_number,
              email: this.field_email_id,
              password: 'Zolipe@123',
              role: 'companyadmin',
              status: true,
            };
            this.userService.addUser(userField)
            .subscribe(result => {
              if (result.success) {
                this._commonService.redirectTo('/login');
              } else {
                this._commonService.showMessage('error', result.msg);
              }
            });
          } else {
            this._commonService.showMessage('error', res.msg);
          }
        });
      } else {
        this._commonService.showMessage('error', 'User email already exist!!!');
      }
    });

  }

}
