import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { JdService } from '../../JD/services/jd.service';

import { WeightageService } from '../weightage.service';

@Component({
  selector: 'app-weightage',
  templateUrl: './weightage.component.html',
  styleUrls: ['./weightage.component.scss']
})
export class WeightageComponent implements OnInit {

  public jdList: any;
  public jdid: String = '';

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
      console.log(res.data);
    });
  }

  getAssess() {
    if (this._validationsService.isEmpty(this.jdid)) {
      this._commonService.showMessage('error', 'Assessmenttype field should not be empty!');
      return false;
    }
    this.getAssessAndHeadList();
  }

  weightageForm() {

  }

}
