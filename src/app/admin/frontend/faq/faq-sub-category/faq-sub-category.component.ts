import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { FaqSubCategoryService } from '../services/faq-sub-category.service';
import { FaqCategoryService } from '../services/faq-category.service';

@Component({
  selector: 'app-faq-sub-category',
  templateUrl: './faq-sub-category.component.html',
  styleUrls: ['./faq-sub-category.component.scss']
})
export class FaqSubCategoryComponent implements OnInit {

  public faqsubcategoryid: String;
  public name: String;
  public faqSubCategoryList: any;
  public faqcategoryid: String;
  public faqCategoryList: any;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private faqSubCategoryService: FaqSubCategoryService,
    private faqCategoryService: FaqCategoryService
  ) { }

  ngOnInit() {
    this.getFaqCategoryList();
    this.getFaqSubCategoryList();
  }

  getFaqCategoryList() {
    this.faqCategoryService.getFaqCategory()
    .subscribe(res => {
      this.faqCategoryList = res.data;
    });
  }

  getFaqSubCategoryList() {
    this.faqSubCategoryService.getFaqSubCategory()
    .subscribe(res => {
      this.faqSubCategoryList = res.data;
    });
  }

  faqSubCategoryForm() {
    if (this._validationsService.isEmpty(this.faqcategoryid)) {
      this._commonService.showMessage('error', 'Faq category field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    let newFaqSubCategory;
    if (!this._validationsService.isEmpty(this.faqsubcategoryid)) {
      newFaqSubCategory = {
        name: this.name,
        faqcategoryid: this.faqcategoryid,
        faqsubcategoryid: this.faqsubcategoryid
      };
    } else {
      newFaqSubCategory = {
        name: this.name,
        faqcategoryid: this.faqcategoryid
      };
    }
    this.faqSubCategoryService.addFaqSubCategory(newFaqSubCategory)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.faqsubcategoryid = '';
        this.name = '';
        this.faqcategoryid = '';
        this.getFaqSubCategoryList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editFaqSubCategory(a: any) {
    this.faqsubcategoryid = a._id;
    this.name = a.name;
    this.faqcategoryid = a.faqcategoryid._id;
    window.scrollTo(0, 0);
  }

  deleteFaqSubCategory(faqsubcategoryid: any) {
    this.faqSubCategoryService.deleteFaqSubCategory(faqsubcategoryid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getFaqSubCategoryList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
