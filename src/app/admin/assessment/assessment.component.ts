import { Component, OnInit } from '@angular/core';
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

  public name: String = '';
  public periodoftime: String = '';
  public durationfrom: String = '';
  public durationto: String = '';
  public duedate: String = '';
  public description: String = '';
  public assessmentid: String = '';
  public type: String = 'others';

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
      this.type = res.data.type;
      this.periodoftime = res.data.periodoftime;
      this.durationfrom = res.data.durationfrom;
      this.durationto = res.data.durationto;
      this.duedate = res.data.duedate;
      this.description = res.data.description;
      this.assessmentid = res.data._id;
    });
  }

  assessmentForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Assessment Title should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.periodoftime)) {
      this._commonService.showMessage('error', 'Please select Period of time!');
      return false;
    }
    if (this._validationsService.isEmpty(this.durationfrom)) {
      this._commonService.showMessage('error', 'Duration From should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.durationto)) {
      this._commonService.showMessage('error', 'Duration To should not be empty!');
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
        durationfrom: this.durationfrom,
        durationto: this.durationto,
        type: this.type,
        duedate: this.duedate,
        description: this.description,
        assessmentid: this.assessmentid
      };
    } else {
      fieldassessmentid = {
        title: this.name,
        periodoftime: this.periodoftime,
        durationfrom: this.durationfrom,
        durationto: this.durationto,
        type: this.type,
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
        this.durationfrom = '';
        this.durationto = '';
        this.duedate = '';
        this.description = '';
        this._commonService.redirectTo('/admin/assessment/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
