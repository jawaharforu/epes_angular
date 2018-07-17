import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  classer = "hi";

  public field_email_id = "";
  public field_password = "";
  public field_confirm_password = "";
  public field_first_name = "";
  public field_last_name = "";

  public field_job_title = "";
  public field_company_name = "";
  public field_industry = "";
  public field_no_of_employees = "";
  public field_contact_number = "";
  public field_company_address = "";
  public field_city = "";

  public industry_name = "";
  public no_of_employee = 0;
  public country_name = "";
  public state_name = "";
  public city_name = "";

  industries: any[] = [
    {id:1, industryname:'select 1'},
    {id:2, industryname:'select 2'},
    {id:3, industryname:'select 3'}
  ];

  no_of_employees: any[] = [
    {id:1, employeesCount: 10},
    {id:2, employeesCount: 20},
    {id:3, employeesCount: 30}
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
  
  constructor() { }

  ngOnInit() {
  }

}
