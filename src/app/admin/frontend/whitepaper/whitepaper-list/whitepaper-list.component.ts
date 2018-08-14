import { Component, OnInit } from '@angular/core';
import { WhitepaperService } from '../whitepaper.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-whitepaper-list',
  templateUrl: './whitepaper-list.component.html',
  styleUrls: ['./whitepaper-list.component.scss']
})
export class WhitepaperListComponent implements OnInit {

  public whitepaperList: any = '';

  constructor(
    private _commonService: CommonService,
    private whitepaperService: WhitepaperService
  ) { }

  ngOnInit() {
    this.getWhitepaperList();
  }

  updateStatus(event: boolean, c: any) {
    const fieldWhitepaper = {
      name: c.name,
      email: c.email,
      company: c.company,
      website: c.website,
      status: event,
      whitepaperid: c._id
    };
    this.whitepaperService.addWhitepaper(fieldWhitepaper)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
  
  getWhitepaperList() {
    this.whitepaperService.getWhitepaper()
    .subscribe(res => {
      this.whitepaperList = res.data;
    });
  }

  editWhitepaper(Whitepaper: any) {
    this._commonService.redirectTo(`/admin/whitepaper/edit/${Whitepaper._id}`);
  }

  deleteWhitepaper(Whitepaperid: any) {
    this.whitepaperService.deleteWhitepaper(Whitepaperid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getWhitepaperList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
