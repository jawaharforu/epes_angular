import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../../ng-uikit-pro-standard';

import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { QuestionService } from '../services/question.service';
import { HeaderService } from '../../header/services/header.service';
import { ScaleService } from '../../scale/services/scale.service';
import { AssessmentTypeService } from '../../assessment-type/assessment-type.service';

@Component({
  selector: 'app-question-assign',
  templateUrl: './question-assign.component.html',
  styleUrls: ['./question-assign.component.scss']
})
export class QuestionAssignComponent implements OnInit {

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShownScale: Boolean = false;
  public isModalShownHeader: Boolean = false;
  public isModalShownAssess: Boolean = false;
  public questionid: String = '';
  public name: String = '';
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
    this.getQuestionList();
    this.getScaleList();
    this.getHeaderList();
  }

  public getQuestionList() {
    this.questionService.getQuestion()
    .subscribe(res => {
      this.questionList = res.data;
      console.log(this.questionList);
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
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
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
        name: this.name,
        scaleid: this.scale,
        assessmenttypeid: this.assessmenttype,
        headerid: this.header
      };
    } else {
      fields = {
        name: this.name,
        scaleid: this.scale,
        assessmenttypeid: this.assessmenttype,
        headerid: this.header
      };
    }
    this.questionService.addQuestion(fields)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        // this._commonService.redirectTo('/admin/jd/');
        this.questionid = '';
        this.name = '';
        this.scale = '';
        this.assessmenttype = '';
        this.header = '';
        this.getQuestionList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
