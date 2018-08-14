import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { AssessmentTypeService } from './assessment-type.service';

@Component({
  selector: 'app-assessment-type',
  templateUrl: './assessment-type.component.html',
  styleUrls: ['./assessment-type.component.scss']
})
export class AssessmentTypeComponent implements OnInit {

  public name: String = '';
  public assessmenttypeid: String = '';
  public assessmentTypeList: any = '';
  @Output() getAssessmentType = new EventEmitter<any>();

  constructor(
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private assessmentTypeService: AssessmentTypeService
  ) { }

  ngOnInit() {
    this.getAssessmenttypeList();
  }

  getAssessmenttypeList() {
    this.assessmentTypeService.getAssessmenttype()
    .subscribe(res => {
      this.assessmentTypeList = res.data;
      this.getAssessmentType.emit();
    });
  }

  assessmentForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Assessment type should not be empty!');
      return false;
    }
    let field;
    if (!this._validationsService.isEmail(this.assessmenttypeid)) {
      field = {
        name: this.name,
        assessmenttypeid: this.assessmenttypeid
      };
    } else {
      field = {
        name: this.name
      };
    }
    this.assessmentTypeService.addAssessmenttype(field)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        // this._commonService.redirectTo('/admin/jd/');
        this.name = '';
        this.assessmenttypeid = '';
        this.getAssessmenttypeList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editAssessmentType(a: any) {
    this.name = a.name;
    this.assessmenttypeid = a._id;
    window.scrollTo(0, 0);
  }

  deleteAssessmentType(assessmenttypeid: any) {
    this.assessmentTypeService.deleteAssessmenttype(assessmenttypeid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getAssessmenttypeList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
