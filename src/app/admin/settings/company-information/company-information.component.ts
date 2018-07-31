import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.scss']
})
export class CompanyInformationComponent implements OnInit {

  public firstname: String;
  public lastname: String;
  public companyname: String;
  public jobtitle: String;
  public industry: String;
  public employees: String;
  public countrycode: String;
  public phone_number: String;
  public companyaddress: String;
  public country: String;
  public state: String;
  public city: String;
  public billingaddress: String;

  constructor() { }

  ngOnInit() {
  }

}
