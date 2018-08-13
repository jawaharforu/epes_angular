import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { FaqCategoryService } from '../services/faq-category.service';

@Component({
  selector: 'app-faq-category',
  templateUrl: './faq-category.component.html',
  styleUrls: ['./faq-category.component.scss']
})
export class FaqCategoryComponent implements OnInit {

  public faqcategoryid: String;
  public name: String;
  public faqCategoryList: any;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private faqCategoryService: FaqCategoryService

  ) { }

  ngOnInit() {
    this.getFaqCategoryList();
  }

  getFaqCategoryList() {
    this.faqCategoryService.getFaqCategory()
    .subscribe(res => {
      this.faqCategoryList = res.data;
    });
  }

  faqCategoryForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'FAQ category name should not be empty!');
      return false;
    }
    let newFaqCategory;
    if (!this._validationsService.isEmpty(this.faqcategoryid)) {
      newFaqCategory = {
        name: this.name,
        faqcategoryid: this.faqcategoryid
      };
    } else {
      newFaqCategory = {
        name: this.name
      };
    }
    this.faqCategoryService.addFaqCategory(newFaqCategory)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.faqcategoryid = '';
        this.name = '';
        this.getFaqCategoryList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editFaqCategory(a: any) {
    this.faqcategoryid = a._id;
    this.name = a.name;
    window.scrollTo(0, 0);
  }

  deleteFaqCategory(faqcategoryid: any) {
    this.faqCategoryService.deleteFaqCategory(faqcategoryid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getFaqCategoryList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
