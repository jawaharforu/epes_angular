import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { CompanyInformationService } from './company-information.service';
import { ContactusService } from '../../frontend/contactus/contactus.service';
import { CompanyService} from '../../company/company.service';

@Component({
  selector: 'app-company-information',
  templateUrl: './company-information.component.html',
  styleUrls: ['./company-information.component.scss']
})
export class CompanyInformationComponent implements OnInit {

  public companyname: String;
  public jobtitle: String;
  // tslint:disable-next-line:member-ordering
  public industry: String;
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
  public noofemployees: String;
  public no_of_employees: any[] = [
    {employeesCount: '10-50'},
    {employeesCount: '50-100'},
    {employeesCount: '100-500'},
    {employeesCount: '500-1000'},
    {employeesCount: '1000-5000'},
    {employeesCount: '5000 above'}
  ];
  public countrycode: String;
  public companycontact: String;
  public companyaddress: String;
  public country: String;
  public state: String;
  public city: String;
  public uploader: FileUploader;
  public logo: String = '';
  public countryList: any;
  public companyid: String;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private companyInformationService: CompanyInformationService,
    private contactusService: ContactusService,
    private companyService: CompanyService,
  ) {
    this.logo = this._commonService.serverUrl + 'sample-logo-design.jpg';
    this.uploader = new FileUploader({url: this._commonService.uploadImage, itemAlias: 'file'});
  }

  ngOnInit() {
    this.getCountryList();
    this.getCompanyInfo();
    this.uploader.onAfterAddingFile = (file) => { file.withCredentials = false; };
    this.uploader.onCompleteItem = (_item: any, response: any, _status: any, _headers: any) => {
      const res: any = JSON.parse(response);
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.logo = this._commonService.serverUrl + res.filename;
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    };
  }

  getCountryList() {
    this.contactusService.getCountryList()
    .subscribe(res => {
      this.countryList = res.data;
    });
  }

  getCompanyInfo() {
    this.companyInformationService.getCompanyInfo()
    .subscribe(res => {
      this.companyid = res.data._id;
      this.companyname = res.data.companyname;
      this.jobtitle = res.data.jobtitle;
      this.industry = res.data.industry;
      this.noofemployees = res.data.noofemployees;
      this.countrycode = res.data.countrycode;
      this.companycontact = res.data.companycontact;
      this.companyaddress = res.data.companyaddress;
      this.country = res.data.country;
      this.state = res.data.state;
      this.city = res.data.city;
      // tslint:disable-next-line:max-line-length
      this.logo = (res.data.logo === '' || res.data.logo === undefined) ? this._commonService.serverUrl + 'sample-logo-design.jpg' : this._commonService.serverUrl + res.data.logo;
    });
  }

  companyinformationForm() {

    if (this._validationsService.isEmpty(this.jobtitle)) {
      this._commonService.showMessage('error', 'Job Title should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.companyname)) {
      this._commonService.showMessage('error', 'Company Name should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.industry)) {
      this._commonService.showMessage('error', 'Industry should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.noofemployees)) {
      this._commonService.showMessage('error', 'Number of Employees should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.companycontact)) {
      this._commonService.showMessage('error', 'Contact Number should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.companyaddress)) {
      this._commonService.showMessage('error', 'Company Address should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.country)) {
      this._commonService.showMessage('error', 'Country should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.state)) {
      this._commonService.showMessage('error', 'State should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.city)) {
      this._commonService.showMessage('error', 'City should not be empty!');
      return false;
    }

    const companyField = {
      jobtitle: this.jobtitle,
      companyname: this.companyname,
      industry: this.industry,
      noofemployees: this.noofemployees,
      companycontact: this.companycontact,
      companyaddress: this.companyaddress,
      country: this.country,
      state: this.state,
      city: this.city,
      countrycode: this.countrycode,
      status: true,
      logo: this.logo.replace(this._commonService.serverUrl, ''),
      companyid: this.companyid
    };

    this.companyService.addCompany(companyField)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });

  }

}
