import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { CompanyService } from './company.service';

@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.scss']
})
export class CompanyComponent implements OnInit {

  public companyList: any;

  constructor(
    private _commonService: CommonService,
    private companyService: CompanyService,
  ) { }

  ngOnInit() {
    this.getCompanyList();
  }

  getCompanyList() {
    this.companyService.getCompany()
    .subscribe(res => {
      this.companyList = res.data;
    });
  }

  deleteCompany(companyid: any) {
    this.companyService.deleteCompany(companyid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getCompanyList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
