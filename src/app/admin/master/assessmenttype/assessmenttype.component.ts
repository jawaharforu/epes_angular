import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { AssessmentTypeService } from '../JD/assessment-type/assessment-type.service';

@Component({
  selector: 'app-assessmenttype',
  templateUrl: './assessmenttype.component.html',
  styleUrls: ['./assessmenttype.component.scss']
})
export class AssessmenttypeComponent implements OnInit {

  public assessmenttypeid: any;
  public name: any;
  public assessmenttypeList: any;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private assessmentTypeService: AssessmentTypeService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.assessmenttypeid = params['assessmenttypeid'];
      if (!this._validationsService.isEmpty(this.assessmenttypeid)) {
        this.getAssessmenttypeById(this.assessmenttypeid);
      }
    });

    this.getAssessmenttypeList();
  }

  getAssessmenttypeById(assessmenttypeid: any) {
    this.assessmentTypeService.getAssessmenttypeById(assessmenttypeid)
      .subscribe(res => {
        // console.log(res);
        this.name = res.data.name;
      });
  }

  getAssessmenttypeList() {
    this.assessmentTypeService.getAssessmenttype()
      .subscribe(res => {
        this.assessmenttypeList = res.data;
        // console.log(this.trainingHeadList);
      });
  }

  assessmenttypeForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Assessment Type should not be empty!');
      return false;
    }
    let fieldAssessmenttypeid;
    if (!this._validationsService.isEmpty(this.assessmenttypeid)) {
      fieldAssessmenttypeid = {
        name: this.name,
        //status: this.status,
        assessmenttypeid: this.assessmenttypeid
      };
    } else {
      fieldAssessmenttypeid = {
        name: this.name,
        //status: this.status
      };
    }
    this.assessmentTypeService.addAssessmenttype(fieldAssessmenttypeid)
      .subscribe(res => {
        // console.log(this.name);
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.name = '';
          //  this.status = false;
          // this._commonService.redirectTo('/admin/training');
          this.getAssessmenttypeList();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

  editTraininghead(Assessmenttype: any) {
    // this._commonService.redirectTo(`/admin/training/edit/${Traininghead._id}`);
    this.assessmenttypeid = Assessmenttype._id;
    this.name = Assessmenttype.name;
    window.scrollTo(0, 0);
  }

  deleteTraininghead(Assessmenttypeid: any) {
    this.assessmentTypeService.deleteAssessmenttype(Assessmenttypeid)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.name = '';
          this.getAssessmenttypeList();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

}
