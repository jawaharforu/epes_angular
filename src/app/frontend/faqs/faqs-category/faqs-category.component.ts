import { Component, OnInit } from '@angular/core';
import { FaqCategoryService } from '../../../admin/frontend/faq/services/faq-category.service';
import { FaqService } from '../../../admin/frontend/faq/services/faq.service';
import { FaqSubCategoryService } from '../../../admin/frontend/faq/services/faq-sub-category.service';

@Component({
  selector: 'app-faqs-category',
  templateUrl: './faqs-category.component.html',
  styleUrls: ['./faqs-category.component.scss']
})
export class FaqsCategoryComponent implements OnInit {

  public faqcategoryList: any;
  public faqList: any;
  public ls: any[];
  public list: any[] = [];

  constructor(
    private faqService: FaqService,
    private faqCategoryService: FaqCategoryService,
    private faqSubCategoryService: FaqSubCategoryService
  ) { }

  ngOnInit() {
    this.getFaqCategory();
  }


  getFaqCategory() {
    this.faqSubCategoryService.getFaqSubCategory()
    .subscribe(res => {
      let j = 0;
      for (const prop of res.data) {
        if (this.list[prop.faqcategoryid._id] === undefined) {
          this.list[prop.faqcategoryid._id] = [];
        }
        this.list[prop.faqcategoryid._id].push(prop);
        if ( j === 0 ) {
          this.getFaqByCategory(prop._id);
        }
        j++;
      }
    });
    this.faqCategoryService.getFaqCategory()
    .subscribe(res => {
      this.faqcategoryList = res.data;
    });
  }

  getFaqByCategory(faqcategoryid: string) {
    this.faqService.getFaqByCategory(faqcategoryid)
    .subscribe(res => {
      this.faqList = res.data;
    });
  }

}
