import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { JdService } from '../../JD/services/jd.service';
import { WeightageService } from '../weightage.service';

@Component({
  selector: 'app-weightage',
  templateUrl: './weightage.component.html',
  styleUrls: ['./weightage.component.scss']
})
export class WeightageComponent implements OnInit {

  public jdList: any;
  public jdid: String;
  public assessment: any[] = [];

  constructor(
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
      for (const prop of res.data) {
        this.assessment.push(prop.questionid);
      }

    });
  }

}
