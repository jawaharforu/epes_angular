import { Component, OnInit } from '@angular/core';
import { Registration_content } from './product-tour-content';
// import { Job } from './product-tour-job';
import { Employee } from './product-tour-job';

import { ValidationsService } from '../../../services/validations.service';
import { CommonService } from '../../../services/common.service';
import { ContactusService } from '../../../admin/frontend/contactus/contactus.service';
import { ProducttourService } from '../../../admin/frontend/producttour/producttour.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-product-tour-content',
  templateUrl: './product-tour-content.component.html',
  styleUrls: ['./product-tour-content.component.scss']
})
export class ProductTourContentComponent implements OnInit {

  public producttourid: String = '';
  public field_first_name:String = '';
  public field_last_name: String = '';
  public field_job:String = '';
  public field_email:String = '';
  public field_phone:String = '';
  public field_company:String = '';
  public field_no_of_employee:String = '';
  public field_select_country:String = '';
  public field_agree: Boolean = false;
  public field_country_code: String = '+91';

  public countryList : any;

  content_image = '../../../assets/img/360 EPES.png';

  registration_content1: Registration_content[] = [
    {
      id:1,
      title:'Accusantinum dloremqu',
      description:'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
      fa_name:'fa-gavel'
    },
    {
      id:2,
      title:'Accusantinum dloremqu',
      description:'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
      fa_name:'fa-globe'
    }
  ];

  registration_content2: Registration_content[] = [
    {
      id:1,
      title:'Accusantinum dloremqu',
      description:'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
      fa_name:'fa-share-alt'
    },
    {
      id:2,
      title:'Accusantinum dloremqu',
      description:'When you next make a booking, we guarantee that you will always receive the best possible rates providing you book directly through the hotel',
      fa_name:'fa-calculator'
    }
  ];


  classmyclass = "col-my-1";
  public select_list_job: any[]= [
    {label: 'Agriculture & Forestry/Wildlife'},
    {label: 'Business & Information'},
    {label: 'Construction/Utilities/Contracting'},
    {label: 'Education'},
    {label: 'Finance & Insurance'},
    {label: 'Food & Hospitality'},
    {label: 'Gaming'},
    {label: 'Health Services'},
    {label: 'Motor Vehicle'},
    {label: 'Natural Resources/Environmental'},
    {label: 'Other'},
    {label: 'Personal Services'},
    {label: 'Real Estate & Housing'},
    {label: 'Safety/Security & Legal'},
    {label: 'Transportation'}
  ];


  select_list_employee: Employee[]= [
    {id: 0, label: '10-50'},
    {id: 1, label: '50-100'},
    {id: 2, label: '100-500'},
    {id: 3, label: '500-1000'},
    {id: 4, label: '1000-5000'},
    {id: 5, label: '5000 above'}
  ];
  contact_us: any = '0088 3325 5545';

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private contactusService: ContactusService,
    private producttourService: ProducttourService,
    private activatedRoute: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getCountryList();

    this.activatedRoute.params.subscribe((params) => {
      this.producttourid = params['producttourid'];
      if (!this._validationsService.isEmpty(this.producttourid)) {
        this.getProducttourById(this.producttourid);
      }
    });
  }

  getProducttourById(producttourid: any) {
    this.producttourService.getProducttourById(producttourid)
    .subscribe(res => {
      this.field_first_name = res.data.firstname;
      this.field_last_name = res.data.lastname;
      this.field_job = res.data.industry;
      this.field_email = res.data.email;
      this.field_phone = res.data.contact;
      this.field_no_of_employee = res.data.noofemployees;
      this.field_company = res.data.company;
      this.field_select_country = res.data.country;
      this.field_country_code = res.data.countrycode;
      this.producttourid = res.data._id;
    });
  }

  getCountryList() {
    this.contactusService.getCountryList()
    .subscribe(res => {
      console.log(res);
      this.countryList = res.data;
    });
  }


  producttourform() {
    if (this._validationsService.isEmpty(this.field_first_name)) {
      this._commonService.showMessage('error', 'First Name should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_last_name)) {
      this._commonService.showMessage('error', 'Last Name should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_job)) {
      this._commonService.showMessage('error', 'Job Name should not be empty!');
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

    // tslint:disable-next-line:one-line
    if (this._validationsService.isEmpty(this.field_country_code)) {
      this._commonService.showMessage('error', 'Please select the Country Code');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone Number should not be empty!');
      return false;
    }

    if (this._validationsService.isDigit(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone number Should have only Digits!');
      return false;
    }

    if (this._validationsService.isMinimum(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone number Should have atleast 10 digits!');
      return false;
    }

    if (!this._validationsService.isEmail(this.field_email)) {
      this._commonService.showMessage('error', 'Enter valide Email Address!');
      return false;
    }

    if (this._validationsService.isMaximum(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone number Should not exceed 13 digits!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_company)) {
      this._commonService.showMessage('error', 'Company Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_no_of_employee)) {
      this._commonService.showMessage('error', 'No. of Employee should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_select_country)) {
      this._commonService.showMessage('error', 'Country should not be empty!');
      return false;
    }

    if (!this.field_agree) {
      this._commonService.showMessage('error', 'Please Accept Terms and Conditions!');
      return false;
    }

    let fieldproducttourid;
    if (!this._validationsService.isEmpty(this.producttourid)) {
      fieldproducttourid = {
        firstname: this.field_first_name,
        lastname: this.field_last_name,
        industry: this.field_job,
        email: this.field_email,
        contact: this.field_phone,
        noofemployees: this.field_no_of_employee,
        company: this.field_company,
        country: this.field_select_country,
        countrycode: this.field_country_code,
        _id: this.producttourid
      };
      console.log(fieldproducttourid);
    } else {
      fieldproducttourid = {
        firstname: this.field_first_name,
        lastname: this.field_last_name,
        industry: this.field_job,
        email: this.field_email,
        contact: this.field_phone,
        noofemployees: this.field_no_of_employee,
        company: this.field_company,
        country: this.field_select_country,
        countrycode: this.field_country_code,
      };
    }
    this.producttourService.addProducttour(fieldproducttourid)
    .subscribe(res => {
        if (res.success) {
            this._commonService.showMessage('success', res.msg);
            this.field_first_name = '';
            this.field_last_name = '';
            this.field_job = '';
            this.field_email = '';
            this.field_phone = '';
            this.field_no_of_employee = '';
            this.field_company = '';
            this.field_phone = '';
            this.field_select_country = '';
            this.field_country_code = '+91';
            this._commonService.redirectTo('/product-tour');
        } else {
            this._commonService.showMessage('error', res.msg);
        }
    });
  }



  }


