import { Component, OnInit } from '@angular/core';
import { FaqService } from '../../admin/frontend/faq/services/faq.service';
import { FaqCategoryService } from '../../admin/frontend/faq/services/faq-category.service';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent implements OnInit {

  public faqcategoryList: any;
  public faqList: any;
  public list: any[] = [];

  constructor(
    private faqService: FaqService,
    private faqCategoryService: FaqCategoryService,
  ) { }

  ngOnInit() {
    this.getCategory();
  }

  getCategory() {
    this.faqCategoryService.getFaqCategory()
    .subscribe(res => {
      this.faqcategoryList = res.data;
      this.getFaq();
    });
  }

  getFaq() {
    this.faqService.getFaq()
    .subscribe(res => {
      this.faqList = res.data;
      for (const prop of res.data) {
        if (this.list[prop.faqcategoryid._id] === undefined) {
          this.list[prop.faqcategoryid._id] = [];
        }
        this.list[prop.faqcategoryid._id].push(prop);
      }
      console.log(this.list);
    });
  }

}
