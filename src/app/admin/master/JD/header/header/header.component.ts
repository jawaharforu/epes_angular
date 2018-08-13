import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonService } from '../../../../../services/common.service';
import { ValidationsService } from '../../../../../services/validations.service';
import { HeaderService } from '../services/header.service';
import { AssessmentTypeService } from '../../assessment-type/assessment-type.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public headername: String;
  public description: String;
  public headerid: String;
  public headerList: any;
  public assessmenttypeid: String = '';
  public assessmentTypeList: any;
  @Output() getHeader = new EventEmitter<any>();

  constructor(
    private _validationsService: ValidationsService,
    private _commonService: CommonService,
    private headerService: HeaderService,
    private assessmentTypeService: AssessmentTypeService,
  ) { }

  ngOnInit() {
    this.getHeaderList();
    this.getAssessmenttypeList();
  }

  getHeaderList() {
    this.headerService.getHeader()
    .subscribe(res => {
      this.headerList = res.data;
      this.getHeader.emit();
    });
  }

  getAssessmenttypeList() {
    this.assessmentTypeService.getAssessmenttype()
      .subscribe(res => {
        this.assessmentTypeList = res.data;
      });
  }

  headerFormSubmit() {
    if (this._validationsService.isEmpty(this.assessmenttypeid)) {
      this._commonService.showMessage('error', 'Assessmenttype field should select!');
      return false;
    }
    if (this._validationsService.isEmpty(this.headername)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description)) {
      this._commonService.showMessage('error', 'Email field should not be empty!');
      return false;
    }
    let field;
    if (!this._validationsService.isEmpty(this.headerid)) {
      field = {
        assessmenttypeid: this.assessmenttypeid,
        headername: this.headername,
        description: this.description,
        headerid: this.headerid
      };
    } else {
      field = {
        assessmenttypeid: this.assessmenttypeid,
        headername: this.headername,
        description: this.description,
      };
    }
    this.headerService.addHeader(field)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        // this._commonService.redirectTo('/admin/jd/');
        this.headername = '';
        this.description = '';
        this.headerid = '';
        this.getHeaderList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  editHeader(h: any) {
    this.headername = h.headername;
    this.description = h.description;
    this.headerid = h._id;
    window.scrollTo(0, 0);
  }

  deleteHeader(headerid: any) {
    this.headerService.deleteHeader(headerid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getHeaderList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
}
