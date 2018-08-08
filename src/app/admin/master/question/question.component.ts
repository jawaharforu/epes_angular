import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';

import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { QuestionService } from '../JD/question/services/question.service';
import { HeaderService } from '../JD/header/services/header.service';
import { ScaleService } from '../JD/scale/services/scale.service';
import { AssessmentTypeService } from '../JD/assessment-type/assessment-type.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent implements OnInit {

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShownScale: Boolean = false;
  public isModalShownHeader: Boolean = false;
  public isModalShownAssess: Boolean = false;

  public type: String = '';
  public questionid: String = '';
  public question: String = '';
  public scale: String = '';
  public assessmenttype: String = '';
  public header: String = '';
  public questionList: any;
  public scaleList: any;
  public headerList: any;
  public assessmentTypeList: any;

  constructor(
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private questionService: QuestionService,
    private scaleService: ScaleService,
    private headerService: HeaderService,
    private assessmentTypeService: AssessmentTypeService,
  ) { }

  ngOnInit() {
    this.getScaleList();
    this.getHeaderList();
    this.getAssessmenttypeList();
    this.getQuestionList();
  }

  getQuestionList() {
    this.questionService.getQuestion()
    .subscribe(res => {
      console.log(res);
      this.questionList = res.data;
    });
  }

  getScaleList() {
    this.scaleService.getScaleList()
    .subscribe(res => {
      this.scaleList = res.data;
    });
  }

  getAssessmenttypeList() {
    this.assessmentTypeService.getAssessmenttype()
    .subscribe(res => {
      this.assessmentTypeList = res.data;
    });
  }

  getHeaderList() {
    this.headerService.getHeaderList()
    .subscribe(res => {
      this.headerList = res.data;
    });
  }

  public showModal(modal: any): void {
    console.log(modal);
    if (modal === 's') {
      this.isModalShownScale = true;
    } else if (modal === 'a') {
      this.isModalShownAssess = true;
    } else {
      this.isModalShownHeader = true;
    }
  }

  public hideModal(): void {
      this.autoShownModal.hide();
  }

  public onHidden(modal: any): void {
    if (modal === 's') {
      this.isModalShownScale = false;
    } else if (modal === 'a') {
      this.isModalShownAssess = false;
    } else {
      this.isModalShownHeader = false;
    }
  }

  questionForm() {
    if (this._validationsService.isEmpty(this.question)) {
      this._commonService.showMessage('error', 'Question field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.scale)) {
      this._commonService.showMessage('error', 'Pleasse select scale!');
      return false;
    }
    if (this._validationsService.isEmpty(this.assessmenttype)) {
      this._commonService.showMessage('error', 'Pleasse select assessment!');
      return false;
    }
    if (this._validationsService.isEmpty(this.header)) {
      this._commonService.showMessage('error', 'Pleasse select header!');
      return false;
    }

    let fields;
    if (!this._validationsService.isEmail(this.questionid)) {
      fields = {
        questionid: this.questionid,
        question: this.question,
        scaleid: this.scale,
        assessmenttypeid: this.assessmenttype,
        headerid: this.header,
        type: this.type
      };
    } else {
      fields = {
        question: this.question,
        scaleid: this.scale,
        assessmenttypeid: this.assessmenttype,
        headerid: this.header,
        type: this.type
      };
    }
    this.questionService.addQuestion(fields)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        // this._commonService.redirectTo('/admin/jd/');
        this.questionid = '';
        this.question = '';
        this.scale = '';
        this.assessmenttype = '';
        this.header = '';
        this.type = '';
        this.getQuestionList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editQuestion(q: any) {
    this.questionid = q._id;
    this.question = q.question;
    this.scale = q.scaleid._id;
    this.assessmenttype = q.assessmenttypeid._id;
    this.header = q.headerid._id;
    this.type = q.type;
    window.scrollTo(0, 0);
  }

  deleteQuestion(questionid: any) {
    this.questionService.deleteQuestion(questionid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getQuestionList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
