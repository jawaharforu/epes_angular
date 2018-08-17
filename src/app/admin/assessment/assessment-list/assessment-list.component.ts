import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { AssessmentService } from '../assessment.service';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.scss']
})
export class AssessmentListComponent implements OnInit {

  public assessmentList: String;
  public type: String;

  constructor(
    private _commonService: CommonService,
    private assessmentService: AssessmentService,
    private activatedRoute: ActivatedRoute,
    private _validationsService: ValidationsService,
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.type = params['type'];
      if (!this._validationsService.isEmpty(this.type)) {
        this.getAssessmentList(this.type);
      } else {
        this.getAssessmentList('others');
      }
    });
  }

  updateStatus(event: boolean, c: any) {
    const fieldAssessment = {
      name: c.name,
      description: c.description,
      status: event,
      blogid: c._id
    };
    this.assessmentService.addAssessment(fieldAssessment)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  getAssessmentList(type: any) {
    this.assessmentService.getAssessmentByType(type)
    .subscribe(res => {
      this.assessmentList = res.data;
    });
  }

  editAssessment(Assessment: any) {
    this._commonService.redirectTo(`/admin/assessment/edit/${Assessment._id}`);
  }

  deleteAssessment(AssessmentId: any) {
    this.assessmentService.deleteAssessment(AssessmentId)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getAssessmentList(this.type);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
