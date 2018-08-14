import { Component, OnInit } from '@angular/core';
import { ProducttourService } from '../producttour.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-producttour-list',
  templateUrl: './producttour-list.component.html',
  styleUrls: ['./producttour-list.component.scss']
})
export class ProducttourListComponent implements OnInit {

  public producttourList: any = '';

  constructor(
    private _commonService: CommonService,
    private producttourService: ProducttourService
  ) { }

  ngOnInit() {
    this.getProducttourList();
  }

  updateStatus(event: boolean, c: any) {
    const fieldProducttour = {
      firstname: c.firstname,
      lastname: c.lastname,
      industry: c.industry,
      email: c.email,
      noofemployees: c.noofemployees,
      company: c.company,
      countrycode: c.countrycode,
      contact: c.contact,
      country: c.country,
      status: event,
      producttourid: c._id
    };
    this.producttourService.addProducttour(fieldProducttour)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
  
  getProducttourList() {
    this.producttourService.getProducttour()
    .subscribe(res => {
      this.producttourList = res.data;
    });
  }

  editProducttour(Producttour: any) {
    this._commonService.redirectTo(`/admin/producttours/edit/${Producttour._id}`);
  }

  deleteProducttour(Producttourid: any) {
    this.producttourService.deleteProducttour(Producttourid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getProducttourList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
