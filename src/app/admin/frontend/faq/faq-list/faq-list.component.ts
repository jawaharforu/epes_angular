import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { FaqService } from '../services/faq.service';

@Component({
  selector: 'app-faq-list',
  templateUrl: './faq-list.component.html',
  styleUrls: ['./faq-list.component.scss']
})
export class FaqListComponent implements OnInit {

  public faqList: any;

  constructor(
    private _commonService: CommonService,
    private faqService: FaqService
  ) { }

  ngOnInit() {
    this.getFaqList();
  }

  getFaqList() {
    this.faqService.getFaq()
    .subscribe(res => {
      this.faqList = res.data;
    });
  }

  editFaq(Faq: any) {
    this._commonService.redirectTo(`/admin/faq/edit/${Faq._id}`);
  }

  deleteFaq(Faqid: any) {
    this.faqService.deleteFaq(Faqid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getFaqList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
