import { Component, OnInit } from '@angular/core';
import { AssessmentService } from '../assessment.service';
import { CommonService } from '../../../services/common.service';

@Component({
  selector: 'app-assessment-list',
  templateUrl: './assessment-list.component.html',
  styleUrls: ['./assessment-list.component.scss']
})
export class AssessmentListComponent implements OnInit {

  public assessmentList: String;

  constructor(
    private _commonService: CommonService,
    private assessmentService: AssessmentService
  ) { }

  ngOnInit() {
    this.getAssessmentList();
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
  
  getAssessmentList() {
    this.assessmentService.getAssessment()
    .subscribe(res => {
      console.log(res);
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
        this.getAssessmentList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
