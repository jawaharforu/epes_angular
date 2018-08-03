import { Component, OnInit } from '@angular/core';
// import { IMyDate } from 'ng-uikit-pro-standard/public_api';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../services/common.service';
import { ValidationsService } from '../../services/validations.service';
import { AssessmentService } from './assessment.service';

@Component({
  selector: 'app-assessment',
  templateUrl: './assessment.component.html',
  styleUrls: ['./assessment.component.scss']
})
export class AssessmentComponent implements OnInit {

  // public duration: IMyDate;

  public name: String;
  public periodoftime: String;
  public duration: String;
  public duedate: String;
  public description: String;

  public assessmentid: String;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private assessmentService: AssessmentService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.assessmentid = params['assessmentid'];
      // console.log(this.primaryemailid);
      if (!this._validationsService.isEmpty(this.assessmentid)) {
        this.getAssessmentById(this.assessmentid);
      }
    });


  }

  getAssessmentById(assessmentid: any) {
    this.assessmentService.getAssessmentById(assessmentid)
    .subscribe(res => {
      this.name = res.data.title;
      this.periodoftime = res.data.periodoftime;
      this.duration = res.data.duration;
      this.duedate = res.data.duedate;
      this.description = res.data.description;
      this.assessmentid = res.data._id;
    });
  } 

  assessmentForm(){
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.periodoftime)) {
      this._commonService.showMessage('error', 'Period of Time should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.duration)) {
      this._commonService.showMessage('error', 'Duration should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.duedate)) {
      this._commonService.showMessage('error', 'Due Date should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description)) {
      this._commonService.showMessage('error', 'Description should not be empty!');
      return false;
    }

    let fieldassessmentid;
    if (!this._validationsService.isEmpty(this.assessmentid)) {
      fieldassessmentid = {
        title: this.name,
        periodoftime: this.periodoftime,
        duration: this.duration,
        duedate: this.duedate,
        description: this.description,
        assessmentid: this.assessmentid
      };
    } else {
      fieldassessmentid = {
        title: this.name,
        periodoftime: this.periodoftime,
        duration: this.duration,
        duedate: this.duedate,
        description: this.description
      };
    }
    // console.log(fieldemailid);
    this.assessmentService.addAssessment(fieldassessmentid)
    .subscribe(res => {
      // console.log(res);
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.name = '';
        this.periodoftime = '';
        this.duration = '';
        this.duedate = '';
        this.description = '';
        this._commonService.redirectTo('/admin/assessment/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
