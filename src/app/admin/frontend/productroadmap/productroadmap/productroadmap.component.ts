import { Component, OnInit } from '@angular/core';
import { ProductroadmapService } from '../services/productroadmap.service';
import { ValidationsService } from '../../../../services/validations.service';
import { CommonService } from '../../../../services/common.service';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-productroadmap',
  templateUrl: './productroadmap.component.html',
  styleUrls: ['./productroadmap.component.scss']
})
export class ProductroadmapComponent implements OnInit {

  public productroadmapid: String;
  public name: String;
  public description: String;
  public status: Boolean; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private productroadmapService: ProductroadmapService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.productroadmapid = params['productroadmapid'];
      if (!this._validationsService.isEmpty(this.productroadmapid)) {
        this.getProductroadmapById(this.productroadmapid);
      }
    });
  }
  
  getProductroadmapById(productroadmapid: any) { 
    this.productroadmapService.getProductroadmapById(productroadmapid)
    .subscribe(res => {
      console.log(res);
      this.name = res.data.name;
      this.description = res.data.description;
      this.status = res.data.status;
      this.productroadmapid = res.data._id;
    });
  }

  productroadmapForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Product Roadmap Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description)) {
      this._commonService.showMessage('error', 'Description should not be empty!');
      return false;
    }
    let fieldProductroadmapid;
    if (!this._validationsService.isEmpty(this.productroadmapid)) {
      fieldProductroadmapid = {
        name: this.name,
        description: this.description,
        status: this.status,
        productroadmapid: this.productroadmapid
      };
    } else {
      fieldProductroadmapid = {
        name: this.name,
        description: this.description,
        status: this.status
      };
    } 
    this.productroadmapService.addProductroadmap(fieldProductroadmapid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.name = '';
        this.description = '';
        this.status = false;
        this._commonService.redirectTo('/admin/roadmap/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });

  }

}
