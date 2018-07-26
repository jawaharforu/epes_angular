import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../admin/frontend/product/product.service';

@Component({
  selector: 'app-ourproduct',
  templateUrl: './ourproduct.component.html',
  styleUrls: ['./ourproduct.component.scss']
})
export class OurproductComponent implements OnInit {

  public productList: any;
  public themeClass: any[] = ['product_bg1', 'product_bg2', 'product_bg3'];

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
