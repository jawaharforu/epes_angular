import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public productList: any;

  constructor(
    private _commonService: CommonService,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProductList();
  }

  getProductList() {
    this.productService.getProduct()
    .subscribe(res => {
      this.productList = res.data;
    });
  }

  editProduct(product: any) {
    this._commonService.redirectTo(`/admin/product/edit/${product._id}`);
  }

  updateStatus(event: boolean, c: any) {
    const fieldProduct = {
      name: c.name,
      description: c.description,
      status: event,
      productid: c._id
    };
    this.productService.addProduct(fieldProduct)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  deleteProduct(productid: any) {
    this.productService.deleteProduct(productid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getProductList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
