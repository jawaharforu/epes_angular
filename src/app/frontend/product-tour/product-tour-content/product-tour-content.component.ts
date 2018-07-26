import { Component, OnInit } from '@angular/core';
import { Registration_content } from './product-tour-content';
import { Job } from './product-tour-job';
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

  content_image = "../../../assets/img/360 EPES.png";

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
  select_list_job: Job[]= [
    {id:0,label:"Agriculture & Forestry/Wildlife"},
    {id:1,label:"Business & Information"},
    {id:2,label:"Construction/Utilities/Contracting"},
    {id:3,label:"Education"},
    {id:4,label:"Finance & Insurance"},
    {id:5,label:"Food & Hospitality"},
	  {id:6,label:"Gaming"},
    {id:7,label:"Health Services"},
    {id:8,label:"Motor Vehicle"},
    {id:9,label:"Natural Resources/Environmental"},
    {id:10,label:"Other"},
    {id:11,label:"Personal Services"},
	  {id:12,label:"Real Estate & Housing"},
    {id:13,label:"Safety/Security & Legal"},
    {id:14,label:"Transportation"}
  ];
  

  select_list_employee: Employee[]= [
    {id:0,label:"10-50"},
    {id:1,label:"50-100"},
    {id:2,label:"100-500"},
    {id:3,label:"500-1000"},
    {id:4,label:"1000-5000"},
    {id:5,label:"5000 above"}
  ];
  contact_us:any = "0088 3325 5545";

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


  producttourform(){
    if (this._validationsService.isEmpty(this.field_first_name)) {
      this._commonService.showMessage('error', 'First Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_last_name)) {
      this._commonService.showMessage('error', 'Last Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_job)) {
      this._commonService.showMessage('error', 'Job Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_email)) {
      this._commonService.showMessage('error', 'Email Address field should not be empty!');
      return false;
    }

    if(!this._validationsService.isEmail(this.field_email)){
      this._commonService.showMessage('error','Not an Email Address!');
      return false;
    }

    if(this._validationsService.isEmpty(this.field_country_code)){
      this._commonService.showMessage('error','Please select the Dial Code');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_phone)) {
      this._commonService.showMessage('error', 'Phone Number field should not be empty!');
      return false;
    }

    if(this._validationsService.isDigit(this.field_phone)){
      this._commonService.showMessage('error','Should have only Digits!');
      return false;
    }

    if(this._validationsService.isMinimum(this.field_phone)){
      this._commonService.showMessage('error','Should have atleast 10 digits!');
      return false;
    }

    if(!this._validationsService.isEmail(this.field_email)){
      this._commonService.showMessage('error','Not an Email Address!');
      return false;
    }

    if(this._validationsService.isMaximum(this.field_phone)){
      this._commonService.showMessage('error','Should not have greater than 13 digits!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_company)) {
      this._commonService.showMessage('error', 'Company Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_no_of_employee)) {
      this._commonService.showMessage('error', 'Employee field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_select_country)) {
      this._commonService.showMessage('error', 'Country field should not be empty!');
      return false;
    }

    if(!this.field_agree){
      this._commonService.showMessage('error', 'Please Accept terms and conditions!');
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
        company:this.field_company,
        country:this.field_select_country,
        countrycode:this.field_country_code,
        _id:this.producttourid
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
        company:this.field_company,
        country:this.field_select_country,
        countrycode:this.field_country_code,
      };
    }
    this.producttourService.addProducttour(fieldproducttourid)
    .subscribe(res => {
        if (res.success) {
            this._commonService.showMessage('success', res.msg);
            this.field_first_name = '';
            this.field_last_name = '';
            this.field_job= '';
            this.field_email = '';
            this.field_phone = '';
            this.field_no_of_employee = '';
            this.field_company= '';
            this.field_phone = '';
            this.field_select_country ='';
            this.field_country_code = '+91';
            this._commonService.redirectTo('/product-tour');
        } else {
            this._commonService.showMessage('error', res.msg);
        }
    });
  }



  }

  
