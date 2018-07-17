import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../admin/frontend/product/product.service';


@Component({
  selector: 'app-products-features',
  templateUrl: './products-features.component.html',
  styleUrls: ['./products-features.component.scss']
})
export class ProductsFeaturesComponent implements OnInit {

  public productList: any;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.productService.getProductByStatus()
    .subscribe(res => {
      this.productList = res.data;
    });
  }

}
