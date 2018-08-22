import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { JdService } from '../../JD/services/jd.service';

import { WeightageService } from '../weightage.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-weightage',
  templateUrl: './weightage.component.html',
  styleUrls: ['./weightage.component.scss']
})
export class WeightageComponent implements OnInit {

  public jdList: any;
  public jdid: String = '';
  public assessmenttype: any;
  public weightagesList: any;
  public weightages: any[] = [];


  constructor(
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private jdService: JdService,
    private weightageService: WeightageService
  ) { }

  ngOnInit() {
    this.getJDList();
  }

  getJDList() {
    this.jdService.getJD()
    .subscribe(res => {
      this.jdList = res.data;
    });
  }

  getAssessAndHeadList() {
    this.weightageService.fetchassessandheadbyjd(this.jdid)
    .subscribe(res => {
      this.assessmenttype = res.data;
      this.getWeightageByJD();
    });
  }

  getWeightageByJD() {
    this.weightageService.getWeightageByJD(this.jdid)
    .subscribe(res => {
      if (res.success) {
        this.weightagesList = res.data;
        this.getvalue();
      }
    });
  }

  getAssess() {
    if (this._validationsService.isEmpty(this.jdid)) {
      this._commonService.showMessage('error', 'JD should not be empty!');
      return false;
    }
    this.getAssessAndHeadList();
  }

  getvalue() {
    let i = 0;
    for (const prop of this.assessmenttype) {
      _.filter(this.weightagesList.weightage, { assessmenttypeid: prop._id[0] })
      .map((aitem: any) => {
        let j = 0;
        for (const head of prop.heads) {
          _.filter(aitem.header, { headerid: head.item[0] })
          .map((hitem: any) => {
            this.assessmenttype[i].heads[j].value = hitem.weightagerate;
          });
          j++;
        }
      });
      i++;
    }
  }

  weightageForm() {
    for (const prop of this.assessmenttype) {
      const assessmenttypeid = prop._id[0];
      const headers = [];
      for (const head of prop.heads) {
        headers.push({
          headerid: head.item[0],
          weightagerate: head.value
        });
      }
      this.weightages.push({
        assessmenttypeid: assessmenttypeid,
        header: headers
      });
    }
    if (this._validationsService.isEmpty(this.jdid)) {
      this._commonService.showMessage('error', 'JD should not be empty!');
      return false;
    }
    const field = {
      jdid: this.jdid,
      weightage: this.weightages
    };
    console.log(field);

    this.weightageService.addWeightage(field)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this._commonService.redirectTo('/admin/weightage/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });

  }

}
