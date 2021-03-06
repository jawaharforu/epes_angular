import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../../../ng-uikit-pro-standard';

import { CommonService } from '../../../../../services/common.service';
import { ValidationsService } from '../../../../../services/validations.service';
import { QuestionService } from '../services/question.service';
import { HeaderService } from '../../header/services/header.service';
import { ScaleService } from '../../scale/services/scale.service';
import { AssessmentTypeService } from '../../assessment-type/assessment-type.service';
import { JdService } from '../../services/jd.service';

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
  public question: String = '';
  public scale: String = '';
  public assessmenttype: String = '';
  public header: String = '';
  public questionList: any = '';
  public scaleList: any = '';
  public headerList: any = '';
  public assessmentTypeList: any = '';
  public type: any = '';
  public jdid: String = '';
  public jdList: any;
  public jdquestionList: any[] = [];

  constructor(
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private questionService: QuestionService,
    private scaleService: ScaleService,
    private headerService: HeaderService,
    private assessmentTypeService: AssessmentTypeService,
    private jdService: JdService,
  ) { }

  ngOnInit() {
    this.getJDList();
    this.getScaleList();
    this.getAssessmenttypeList();
    this.getQuestionList();
  }

  getQuestionToJDList() {
    this.questionService.getQuestionToJDList(this.jdid)
      .subscribe(res => {
        this.jdquestionList = [];
        for (const prop of res.data) {
          this.jdquestionList.push(prop.questionid);
        }
      });
  }

  getJDList() {
    this.jdService.getJD()
      .subscribe(res => {
        this.jdList = res.data;
      });
  }

  getQuestions() {
    if (this._validationsService.isEmpty(this.jdid)) {
      this._commonService.showMessage('error', 'JD should select!');
      return false;
    }
    this.getQuestionToJDList();
  }

  getQuestionList() {
    this.questionService.getQuestionList()
      .subscribe(res => {
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

  getHeader() {
    if (this._validationsService.isEmpty(this.assessmenttype)) {
      this._commonService.showMessage('error', 'Assessmenttype should not be empty!');
      return false;
    }
    this.getHeaderList();
  }

  getHeaderList() {
    if (this._validationsService.isEmpty(this.assessmenttype)) {
      this._commonService.showMessage('error', 'Assessmenttype should not be empty!');
      return false;
    }
    this.headerService.getHeaderByAssessmenttype(this.assessmenttype)
      .subscribe(res => {
        this.headerList = res.data;
      });
  }

  checkQuestion(questionid: any) {
    return this.jdquestionList.includes(questionid);
  }

  public showModal(modal: any): void {
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
      this._commonService.showMessage('error', 'Question should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.type)) {
      this._commonService.showMessage('error', 'Pleasse select Employee!');
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
    if (this._validationsService.isEmpty(this.type)) {
      this._commonService.showMessage('error', 'Pleasse select Employee!');
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
          this.getQuestionToJDList();
          this.getQuestionList();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

  editQuestion(q: any) {
    this.questionid = q._id;
    this.question = q.question;
    this.scale = q.scaleid;
    this.assessmenttype = q.assessmenttypeid;
    this.header = q.headerid;
    this.type = q.type;
    window.scrollTo(0, 0);
  }

  deleteQuestion(questionid: any) {
    this.questionService.deleteQuestion(questionid)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.getQuestionToJDList();
          this.getQuestionList();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

  updateStatus(event: boolean, q: any) {
    if (this._validationsService.isEmpty(this.jdid)) {
      this._commonService.showMessage('error', 'JD should select!');
      return false;
    }
    if (event === true) {
      const qjd = {
        jdid: this.jdid,
        questionid: q._id
      };
      this.questionService.setQuestionsToJD(qjd)
        .subscribe(res => {
          if (res.success) {
            this._commonService.showMessage('success', res.msg);
            // this.getQuestionToJDList();
          } else {
            this._commonService.showMessage('error', res.msg);
          }
        });
    } else {
      this.questionService.deleteQuestionsToJD(this.jdid + '::' + q._id)
        .subscribe(res => {
          if (res.success) {
            this._commonService.showMessage('success', res.msg);
            // this.getQuestionToJDList();
          } else {
            this._commonService.showMessage('error', res.msg);
          }
        });
    }
  }
}
