import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { HrindexService } from '../../../admin/hrindex/hrindex.service';
// import { ActivatedRoute } from '../../../../../node_modules/@angular/router';

@Component({
  selector: 'app-hrindex',
  templateUrl: './hrindex.component.html',
  styleUrls: ['./hrindex.component.scss']
})
export class HRIndexComponent implements OnInit {

  public name: String = '';
  public email: String = '';
  public mobile: String = '';
  public designation: String = '';
  public companyname: String = '';
  public industry: String = '';


  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShownFirst: Boolean = false;
  public isModalShownSecont: Boolean = false;
  public isModalShownThired: Boolean = false;

  constructor(
    public _validationsService: ValidationsService,
    public _commonService: CommonService,
    // private activatedRoute: ActivatedRoute,
    private hrindexService: HrindexService
  ) { }

  ngOnInit() {
  }

  public showModal(modal: any): void {
    if (modal === 'f') {
      this.isModalShownFirst = true;
    } else if (modal === 's') {
      this.isModalShownSecont = true;
    } else {
      this.isModalShownThired = true;
    }
  }

  public hideModal(): void {
    this.autoShownModal.hide();
  }

  public onHidden(modal: any): void {
    if (modal === 'f') {
      this.isModalShownFirst = false;
    } else if (modal === 's') {
      this.isModalShownSecont = false;
    } else if (modal === 't') {
      this.isModalShownThired = false;
    }
  }

  openSecond() {
    this.onHidden('f');
    this.onHidden('t');
    this.showModal('s');
  }

  openThird() {
    this.onHidden('f');
    this.onHidden('s');
    this.showModal('t');
  }

  closeThird() {
    this.onHidden('t');
  }

  hrIndexForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.email)) {
      this._commonService.showMessage('error', 'Email should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.mobile)) {
      this._commonService.showMessage('error', 'Mobile should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.designation)) {
      this._commonService.showMessage('error', 'Designation should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.companyname)) {
      this._commonService.showMessage('error', 'Company Name should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.industry)) {
      this._commonService.showMessage('error', 'Industry should not be empty!');
      return false;
    }

    const hrindexField = {
      name: this.name,
      email: this.email,
      mobile: this.mobile,
      designation: this.designation,
      companyname: this.companyname,
      industry: this.industry,
      status: true
    };

    this.hrindexService.addHrIndex(hrindexField)
            .subscribe(res => {
                // console.log(res);
                if (res.success) {
                    this._commonService.showMessage('success', res.msg);
                    this.name = '';
                    this.email = '';
                    this.mobile = '';
                    this.designation = '';
                    this.industry = '';
                    //this.getTrainingSubheadList();
                    this.openThird();
                } else {
                    this._commonService.showMessage('error', res.msg);
                }
            });

  }
}
