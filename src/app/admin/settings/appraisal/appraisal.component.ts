import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { AppraisalService } from './appraisal.service';

@Component({
  selector: 'app-appraisal',
  templateUrl: './appraisal.component.html',
  styleUrls: ['./appraisal.component.scss']
})
export class AppraisalComponent implements OnInit {

  public appraisalid: String;
  public seniormanagerfixed: String;
  public seniormanagervariable: String;
  public seniormanagerbonus: String;
  public managerfixed: String;
  public managervariable: String;
  public managerbonus: String;
  public executivesfixed: String;
  public executivesvariable: String;
  public executivesbonus: String;
  public appraisallist: any;

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private appraisalService: AppraisalService
  ) { }

  ngOnInit() {
    this.getAprailsalList();
  }

  getAprailsalList() {
    this.appraisalService.getAppraisal()
      .subscribe(res => {
        if (res.data.length > 0) {
          this.appraisalid = res.data[0]._id;
          this.seniormanagerfixed = res.data[0].seniormanagerfixed;
          this.seniormanagervariable = res.data[0].seniormanagervariable;
          this.seniormanagerbonus = res.data[0].seniormanagerbonus;
          this.managerfixed = res.data[0].managerfixed;
          this.managervariable = res.data[0].managervariable;
          this.managerbonus = res.data[0].managerbonus;
          this.executivesfixed = res.data[0].executivesfixed;
          this.executivesvariable = res.data[0].executivesvariable;
          this.executivesbonus = res.data[0].executivesbonus;
        }
      });
  }

  appraisalform() {
    if (this._validationsService.isEmpty(this.seniormanagerfixed)) {
      this._commonService.showMessage('error', 'SeniorManager Fixed should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.seniormanagerfixed)) {
      this._commonService.showMessage('error', 'SeniorManager Fixed should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.seniormanagerfixed)) {
      this._commonService.showMessage('error', 'SeniorManager Fixed should not Exceed 100%!');
      return false;
    }
    if (this._validationsService.isEmpty(this.seniormanagervariable)) {
      this._commonService.showMessage('error', 'Senior Manager Variable should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.seniormanagervariable)) {
      this._commonService.showMessage('error', 'Senior Manager variable should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.seniormanagervariable)) {
      this._commonService.showMessage('error', 'Senior Manager variable should not Exceed 100%!');
      return false;
    }
    if (this._validationsService.isEmpty(this.seniormanagerbonus)) {
      this._commonService.showMessage('error', 'Senior Manager Bonus should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.seniormanagerbonus)) {
      this._commonService.showMessage('error', 'Senior Manager Bonus should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.seniormanagerbonus)) {
      this._commonService.showMessage('error', 'Senior Manager Bonus should not Exceed 100%!');
      return false;
    }
    if (this._validationsService.isEmpty(this.managerfixed)) {
      this._commonService.showMessage('error', 'Manager Fixed should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.managerfixed)) {
      this._commonService.showMessage('error', 'Manager Fixed should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.seniormanagerbonus)) {
      this._commonService.showMessage('error', 'Manager Fixed should not Exceed 100%!');
      return false;
    }
    if (this._validationsService.isEmpty(this.managervariable)) {
      this._commonService.showMessage('error', 'Manager variable should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.managervariable)) {
      this._commonService.showMessage('error', 'Manager variable should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.managervariable)) {
      this._commonService.showMessage('error', 'Senior variable should not Exceed 100%!');
      return false;
    }
    if (this._validationsService.isEmpty(this.managerbonus)) {
      this._commonService.showMessage('error', 'Manager bonus should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.managerbonus)) {
      this._commonService.showMessage('error', 'Manager bonus should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.managerbonus)) {
      this._commonService.showMessage('error', 'Manager bonus should not Exceed 100%!');
      return false;
    }
    if (this._validationsService.isEmpty(this.executivesfixed)) {
      this._commonService.showMessage('error', 'Executives fixed should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.executivesfixed)) {
      this._commonService.showMessage('error', 'Executives fixed should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.executivesfixed)) {
      this._commonService.showMessage('error', 'Executives fixed should not Exceed 100%!');
      return false;
    }
    if (this._validationsService.isEmpty(this.executivesvariable)) {
      this._commonService.showMessage('error', 'Executives variable should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.executivesvariable)) {
      this._commonService.showMessage('error', 'Executives variable should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.executivesvariable)) {
      this._commonService.showMessage('error', 'Executives variable should not Exceed 100%!');
      return false;
    }
    if (this._validationsService.isEmpty(this.executivesbonus)) {
      this._commonService.showMessage('error', 'Executives bonus should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.executivesbonus)) {
      this._commonService.showMessage('error', 'Executives bonus should have only digits!');
      return false;
    }
    if (!this._validationsService.isPercentage(this.executivesbonus)) {
      this._commonService.showMessage('error', 'Executives bonus should not Exceed 100%!');
      return false;
    }

    const fieldAppraisalid = {
      seniormanagerfixed: this.seniormanagerfixed,
      seniormanagervariable: this.seniormanagervariable,
      seniormanagerbonus: this.seniormanagerbonus,
      managerfixed: this.managerfixed,
      managervariable: this.managervariable,
      managerbonus: this.managerbonus,
      executivesfixed: this.executivesfixed,
      executivesvariable: this.executivesvariable,
      executivesbonus: this.executivesbonus
    };

    this.appraisalService.addAppraisal(fieldAppraisalid)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          // this.year = '';
          // this.amount = '';
          // this.status = false;
          this.getAprailsalList();
          //this._commonService.redirectTo('/admin/training/budgetmaster');
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });
  }

}
