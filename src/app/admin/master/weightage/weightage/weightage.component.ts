import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { JdService } from '../../JD/services/jd.service';

// import { WeightageService } from '../weightage.service';
import { QuestionService } from '../../JD/question/services/question.service';

@Component({
  selector: 'app-weightage',
  templateUrl: './weightage.component.html',
  styleUrls: ['./weightage.component.scss']
})
export class WeightageComponent implements OnInit {

  public jdList: any;
  public jdid: String = '';
  public assessment: any[] = [];
  public fullList: any;

  constructor(
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private jdService: JdService,
    // private weightageService: WeightageService,
    private questionService: QuestionService
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
    this.questionService.getQuestionToJDListWithQu(this.jdid)
    .subscribe(res => {
      this.fullList = res.data;
      const assessment: any = new Array();
      for (const prop of res.data) {
        if (!assessment.includes(prop.questionid.assessmenttypeid._id)) {
          assessment.push(prop.questionid.assessmenttypeid._id);
          this.assessment.push(prop.questionid.assessmenttypeid);
        }
      }
    });
  }

  getAssess() {
    if (this._validationsService.isEmpty(this.jdid)) {
      this._commonService.showMessage('error', 'JD field should not be empty!');
      return false;
    }
    this.getAssessAndHeadList();
  }

}
