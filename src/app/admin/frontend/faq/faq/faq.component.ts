import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { FaqService } from '../services/faq.service';
import { FaqCategoryService } from '../services/faq-category.service';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss']
})
export class FaqComponent implements OnInit {

  public faqid: String;
  public faqcategoryid: String = '';
  public question: String;
  public answer: String;
  public faqcategoryList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private faqService: FaqService,
    private faqCategoryService: FaqCategoryService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
     this.faqid = params['faqid'];
     if (!this._validationsService.isEmpty(this.faqid)) {
      this.getFaqById(this.faqid);
     }
    });
    this.getFaqCategory();
  }

  getFaqCategory() {
    this.faqCategoryService.getFaqCategory()
    .subscribe(res => {
      this.faqcategoryList = res.data;
    });
  }

  getFaqById(Faqid: any) {
    this.faqService.getFaqById(Faqid)
    .subscribe(res => {
      this.faqcategoryid = res.data.faqcategoryid;
      this.question = res.data.question;
      this.answer = res.data.answer;
      this.faqid = res.data._id;
    });
  }

  faqForm() {
    if (this._validationsService.isEmpty(this.faqcategoryid)) {
      this._commonService.showMessage('error', 'Category field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.question)) {
      this._commonService.showMessage('error', 'Question field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.answer)) {
      this._commonService.showMessage('error', 'Answer field should not be empty!');
      return false;
    }
    let fieldFaq;
    if (!this._validationsService.isEmpty(this.faqid)) {
      fieldFaq = {
        faqcategoryid: this.faqcategoryid,
        question: this.question,
        answer: this.answer,
        faqid: this.faqid
      };
    } else {
      fieldFaq = {
        faqcategoryid: this.faqcategoryid,
        question: this.question,
        answer: this.answer
      };
    }

    this.faqService.addFaq(fieldFaq)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.faqcategoryid = '';
        this.question = '';
        this.answer = '';
        this._commonService.redirectTo('/admin/faq/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });

  }

}
