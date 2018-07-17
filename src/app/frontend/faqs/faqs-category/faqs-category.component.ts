import { Component, OnInit } from '@angular/core';
import { FaqCategoryService } from '../../../admin/frontend/faq/services/faq-category.service';
import { FaqService } from '../../../admin/frontend/faq/services/faq.service';

@Component({
  selector: 'app-faqs-category',
  templateUrl: './faqs-category.component.html',
  styleUrls: ['./faqs-category.component.scss']
})
export class FaqsCategoryComponent implements OnInit {

  public faqcategoryList: any;
  public faqList: any;

  constructor(
    private faqService: FaqService,
    private faqCategoryService: FaqCategoryService
  ) { }

  ngOnInit() {
    this.getFaqCategory();
  }


  getFaqCategory() {
    this.faqCategoryService.getFaqCategory()
    .subscribe(res => {
      this.faqcategoryList = res.data;
      let j = 0;
      for (const prop of res.data) {
        if ( j === 0 ) {
          this.getFaqByCategory(prop._id);
        }
        j++;
      }
    });
  }

  getFaqByCategory(faqcategoryid: string) {
    this.faqService.getFaqByCategory(faqcategoryid)
    .subscribe(res => {
      this.faqList = res.data;
    });
  }

}
