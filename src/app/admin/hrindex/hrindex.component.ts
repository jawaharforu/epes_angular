import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../services/common.service';
import { HrindexService } from './hrindex.service';

@Component({
  selector: 'app-hrindex',
  templateUrl: './hrindex.component.html',
  styleUrls: ['./hrindex.component.scss']
})
export class HrindexComponent implements OnInit {

  public hrindexList: any;


  constructor(
    private _commonService: CommonService,
    private hrindexService: HrindexService
  ) { }

  ngOnInit(  ) {
    this.getHrIndexList();
  }

  updateStatus(event: boolean, c: any) {
    const fieldContactus = {
      name: c.name,
      email: c.email,
      mobile: c.mobile,
      designation: c.designation,
      companyname: c.companyname,
      industry: c.industry,
      staffing: c.staffing,
      traininganddevelopment: c.traininganddevelopment,
      performancesystems: c.performancesystems,
      safetyandhealth: c.safetyandhealth,
      labourrelations: c.labourrelations,
      internalcommunication: c.internalcommunication,
      diversity: c.diversity,
      status: event,
      contactusid: c._id
    };
    this.hrindexService.addHrIndex(fieldContactus)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  getHrIndexList() {
    this.hrindexService.getHrIndex()
    .subscribe(res => {
      this.hrindexList = res.data;
    });
  }

  editHrIndex(Hrindex: any) {
    this._commonService.redirectTo(`/admin/hrindex/edit/${Hrindex._id}`);
  }

  deleteHrIndex(Hrindexid: any) {
    this.hrindexService.deleteHrIndex(Hrindexid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getHrIndexList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
