import { Component, OnInit } from '@angular/core';
import { Registration_content } from './product-tour-content';
import { Job } from './product-tour-job';
import { Employee } from './product-tour-job';
import { Country } from './product-tour-job';

import { ValidationsService } from '../../../services/validations.service';
import { CommonService } from '../../../services/common.service';


@Component({
  selector: 'app-product-tour-content',
  templateUrl: './product-tour-content.component.html',
  styleUrls: ['./product-tour-content.component.scss']
})
export class ProductTourContentComponent implements OnInit {


  public field_first_name = "";
  public field_last_name = "";
  public field_job = "";
  public field_email = "";
  public field_phone = "";
  public field_company = "";
  public field_select_company = "";
  public field_select_country = "";
  public field_agree: Boolean = false;


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
    {id:0,label:"Find Industry"},
    {id:1,label:"Information Technology"},
    {id:2,label:"Student"},
    {id:3,label:"Others"},
    {id:4,label:"Option 4"},
    {id:5,label:"Option 5"}
  ];

  select_list_employee: Employee[]= [
    {id:0,label:"Employee"},
    {id:1,label:"10-50"},
    {id:2,label:"50-100"},
    {id:3,label:"100-500"},
    {id:4,label:"500-1000"},
    {id:5,label:"1000-5000"},
    {id:5,label:"5000 above"}
  ];

  select_list_country: Country[]= [
    {id:0,label:"Country"},
    {id:1,label:"India"},
    {id:2,label:"Pakistan"},
    {id:3,label:"Srilanka"},
    {id:4,label:"Indonesia"},
    {id:5,label:"Singapore"}
  ];

  contact_us:any = "0088 3325 5545";


  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
  ) { }

  ngOnInit() {
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

    if(this._validationsService.isMaximum(this.field_phone)){
      this._commonService.showMessage('error','Should not have greater than 13 digits!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_company)) {
      this._commonService.showMessage('error', 'Company Name field should not be empty!');
      return false;
    }

    if (this._validationsService.isEmpty(this.field_select_company)) {
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
  }

}
