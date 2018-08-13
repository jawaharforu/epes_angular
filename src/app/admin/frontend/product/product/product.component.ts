import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray, FormBuilder } from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  public productForm: FormGroup;
  public productid: String;

  public type: String;
  public featurenumber: String;

  constructor(
    private _fb: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.productForm = this._fb.group({
      name: this._fb.control(null),
      type: this._fb.control('monthly'),
      amount: this._fb.control(null),
      numberofemployee: this._fb.control(null),
      amountperemployee: this._fb.control(null),
      additionfeatures: this._fb.array([this.initItemRows()]),
      status: this._fb.control(false)
    });
    this.activatedRoute.params.subscribe((params) => {
     this.productid = params['productid'];
     if (!this._validationsService.isEmpty(this.productid)) {
      this.getProductById(this.productid);
     }
    });
  }

  getProductById(productid: any) {
    this.productService.getProductById(productid)
    .subscribe(res => {
      for (let i = 1; i <= res.data.additionfeatures.length; i++) {
        if (i !== res.data.additionfeatures.length) {
          this.addNewRow();
        }
        if (i === res.data.additionfeatures.length) {
          this.productForm.setValue({
            name: res.data.name,
            type: res.data.type,
            amount: res.data.amount,
            numberofemployee: res.data.numberofemployee,
            amountperemployee: res.data.amountperemployee,
            additionfeatures: res.data.additionfeatures,
            status: res.data.status
          });
        }
      }
    });
  }

  initItemRows() {
    return this._fb.group({
        itemname: ['']
    });
  }

  addNewRow() {
      const control = <FormArray>this.productForm.controls['additionfeatures'];
      control.push(this.initItemRows());
  }

  deleteRow(index: number) {
      const control = <FormArray>this.productForm.controls['additionfeatures'];
      control.removeAt(index);
  }

  productSubmit() {
    if (this._validationsService.isEmpty(this.productForm.value.name)) {
      this._commonService.showMessage('error', 'Product Name  should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.productForm.value.amount)) {
      this._commonService.showMessage('error', 'Product Amount should not be empty!');
      return false;
    }else if (!this._validationsService.isNumber(this.productForm.value.amount)) {
      this._commonService.showMessage('error', 'Product Amount  should have only number!');
      return false;
    }
    if (this._validationsService.isEmpty(this.productForm.value.numberofemployee)) {
      this._commonService.showMessage('error', 'Number of employee should not be empty!');
      return false;
    } else if (! this._validationsService.isNumber(this.productForm.value.numberofemployee)) {
      this._commonService.showMessage('error', 'Number of employee should only number!');
      return false;
    }
    if (this._validationsService.isEmpty(this.productForm.value.amountperemployee)) {
      this._commonService.showMessage('error', 'Amount per employee should not be empty!');
      return false;
    } else if (! this._validationsService.isNumber(this.productForm.value.amountperemployee)) {
      this._commonService.showMessage('error', 'Amount per employee field should only number!');
      return false;
    }
    if (this._validationsService.isEmpty(this.type)) {
      this._commonService.showMessage('error', 'Please choose Period!');
      return false;
    }
    if (this._validationsService.isEmpty(this.featurenumber)) {
      this._commonService.showMessage('error', 'Features should not be empty!');
      return false;
    }

    let fieldProduct;
    if (!this._validationsService.isEmpty(this.productid)) {
      fieldProduct = {
        name: this.productForm.value.name,
        type: this.productForm.value.type,
        amount: this.productForm.value.amount,
        numberofemployee: this.productForm.value.numberofemployee,
        amountperemployee: this.productForm.value.amountperemployee,
        additionfeatures: this.productForm.value.additionfeatures,
        status: this.productForm.value.status,
        productid: this.productid
      };
    } else {
      fieldProduct = {
        name: this.productForm.value.name,
        type: this.productForm.value.type,
        amount: this.productForm.value.amount,
        numberofemployee: this.productForm.value.numberofemployee,
        amountperemployee: this.productForm.value.amountperemployee,
        additionfeatures: this.productForm.value.additionfeatures,
        status: this.productForm.value.status
      };
    }
    this.productService.addProduct(fieldProduct)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this._commonService.redirectTo('/admin/product/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
}
