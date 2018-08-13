import { Component, OnInit } from '@angular/core';
import { GeneralSettingsService } from './general-settings.service';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';

@Component({
  selector: 'app-general-settings',
  templateUrl: './general-settings.component.html',
  styleUrls: ['./general-settings.component.scss']
})
export class GeneralSettingsComponent implements OnInit {

  public tolerance: String = '';
  public externalreference: String = '';
  public internalemployeereference: String = '';
  public managingdirectorsdescretion: String = '';
  public specialallowance: String = '';
  public cim: String = '';
  public nocim: String = '';
  public thirdpartyevaluation1: String = '';
  public thirdpartyevaluation2: String = '';
  public thirdpartyevaluation3: String = '';
  public controlsworkingaquantance05: String = '';
  public controlsworkingaquantance510: String = '';
  public controlsworkingaquantance10: String = '';
  public chairmansreference: String = '';
  public overworkingaquantance05: String = '';
  public overworkingaquantance510: String = '';
  public overworkingaquantance10: String = '';
  public overpriorrelevant05: String = '';
  public overpriorrelevant510: String = '';
  public overpriorrelevant10: String = '';
  public globalsettingsid: String = '';

  constructor(
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private globalsettingsService: GeneralSettingsService
  ) { }

  ngOnInit() {
    this.getGlobalSettingsList();
  }

  getGlobalSettingsList() {
    this.globalsettingsService.getGlobalsettings()
    .subscribe(res => {
      if (res.data.length > 0) {
        this.globalsettingsid = res.data[0]._id;
        this.tolerance = res.data[0].tolerance;
        this.externalreference = res.data[0].externalreference;
        this.internalemployeereference = res.data[0].internalemployeereference;
        this.managingdirectorsdescretion = res.data[0].managingdirectorsdescretion;
        this.specialallowance = res.data[0].specialallowance;
        this.cim = res.data[0].cim;
        this.nocim = res.data[0].nocim;
        this.thirdpartyevaluation1 = res.data[0].thirdpartyevaluation1;
        this.thirdpartyevaluation2 = res.data[0].thirdpartyevaluation2;

        this.thirdpartyevaluation3 = res.data[0].thirdpartyevaluation3;
        this.controlsworkingaquantance05 = res.data[0].controlsworkingaquantance05;
        this.controlsworkingaquantance510 = res.data[0].controlsworkingaquantance510;
        this.controlsworkingaquantance10 = res.data[0].controlsworkingaquantance10;
        this.chairmansreference = res.data[0].chairmansreference;
        this.overworkingaquantance05 = res.data[0].overworkingaquantance05;
        this.overworkingaquantance510 = res.data[0].overworkingaquantance510;
        this.overworkingaquantance10 = res.data[0].overworkingaquantance10;
        this.overpriorrelevant05 = res.data[0].overpriorrelevant05;
        this.overpriorrelevant510 = res.data[0].overpriorrelevant510;
        this.overpriorrelevant10 = res.data[0].overpriorrelevant10;
      }
    });
  }

  globalsettings() {

    if (this._validationsService.isEmpty(this.tolerance)) {
      this._commonService.showMessage('error', 'Tolerance should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.tolerance)) {
      this._commonService.showMessage('error', 'Tolerance should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.externalreference)) {
      this._commonService.showMessage('error', 'External Reference should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.externalreference)) {
      this._commonService.showMessage('error', 'External Reference should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.internalemployeereference)) {
      this._commonService.showMessage('error', 'Internal Employee Reference should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.internalemployeereference)) {
      this._commonService.showMessage('error', 'Internal Employee Reference should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.managingdirectorsdescretion)) {
      this._commonService.showMessage('error', 'Managing Directors Descretion not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.managingdirectorsdescretion)) {
      this._commonService.showMessage('error', 'Managing Directors Descretion should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.specialallowance)) {
      this._commonService.showMessage('error', 'Special Allowance should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.specialallowance)) {
      this._commonService.showMessage('error', 'Special Allowance should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.cim)) {
      this._commonService.showMessage('error', 'CIM should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.cim)) {
      this._commonService.showMessage('error', 'CIM should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.nocim)) {
      this._commonService.showMessage('error', 'NO-CIM should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.nocim)) {
      this._commonService.showMessage('error', 'NO-CIM should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.thirdpartyevaluation1)) {
      this._commonService.showMessage('error', 'Third Party Evaluation 1 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.thirdpartyevaluation1)) {
      this._commonService.showMessage('error', 'Third Party Evaluation 1 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.thirdpartyevaluation2)) {
      this._commonService.showMessage('error', 'Third Party Evaluation 2 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.thirdpartyevaluation2)) {
      this._commonService.showMessage('error', 'Third Party Evaluation 2 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.thirdpartyevaluation3)) {
      this._commonService.showMessage('error', 'Third Party Evaluation 3 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.thirdpartyevaluation3)) {
      this._commonService.showMessage('error', 'Third Party Evaluation 3 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.controlsworkingaquantance05)) {
      this._commonService.showMessage('error', 'Controls Working aquantance 0-5 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.controlsworkingaquantance05)) {
      this._commonService.showMessage('error', 'Controls Working aquantance 0-5 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.controlsworkingaquantance510)) {
      this._commonService.showMessage('error', 'Controls Working aquantance 5-10 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.controlsworkingaquantance510)) {
      this._commonService.showMessage('error', 'Controls Working aquantance 5-10 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.controlsworkingaquantance10)) {
      this._commonService.showMessage('error', 'Controls Working aquantance 10> should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.controlsworkingaquantance10)) {
      this._commonService.showMessage('error', 'Controls Working aquantance 10> should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.chairmansreference)) {
      this._commonService.showMessage('error', 'Chairmans Reference should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.chairmansreference)) {
      this._commonService.showMessage('error', 'Chairmans Reference should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.overworkingaquantance05)) {
      this._commonService.showMessage('error', 'Over Working aquantance 0-5 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.overworkingaquantance05)) {
      this._commonService.showMessage('error', 'Over Working aquantance 0-5 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.overworkingaquantance510)) {
      this._commonService.showMessage('error', 'Over Working aquantance 5-10 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.overworkingaquantance510)) {
      this._commonService.showMessage('error', 'Over Working aquantance 5-10 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.overworkingaquantance10)) {
      this._commonService.showMessage('error', 'Over Working aquantance 10> should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.overworkingaquantance10)) {
      this._commonService.showMessage('error', 'Over Working aquantance 10> should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.overpriorrelevant05)) {
      this._commonService.showMessage('error', 'Prior Relevant 0-5 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.overpriorrelevant05)) {
      this._commonService.showMessage('error', 'Prior Relevant 0-5 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.overpriorrelevant510)) {
      this._commonService.showMessage('error', 'Prior Relevant 5-10 should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.overpriorrelevant510)) {
      this._commonService.showMessage('error', 'Prior Relevant 5-10 should have only digits!');
      return false;
    }
    if (this._validationsService.isEmpty(this.overpriorrelevant10)) {
      this._commonService.showMessage('error', 'Prior Relevant 10> should not be empty!');
      return false;
    }
    if (this._validationsService.isDigit(this.overpriorrelevant10)) {
      this._commonService.showMessage('error', 'Prior Relevant 10> should have only digits!');
      return false;
    }

    const fieldGlobalsettingsid = {
      tolerance: this.tolerance,
      externalreference: this.externalreference,
      internalemployeereference :this.internalemployeereference,
      managingdirectorsdescretion :this.managingdirectorsdescretion,
      specialallowance:this.specialallowance,
      cim:this.cim,
      nocim:this.nocim,
      thirdpartyevaluation1:this.thirdpartyevaluation1,
      thirdpartyevaluation2:this.thirdpartyevaluation2,
      thirdpartyevaluation3:this.thirdpartyevaluation3,
      controlsworkingaquantance05:this.controlsworkingaquantance05,
      controlsworkingaquantance510:this.controlsworkingaquantance510,
      controlsworkingaquantance10:this.controlsworkingaquantance10,
      chairmansreference:this.chairmansreference,
      overworkingaquantance05:this.overworkingaquantance05,
      overworkingaquantance510:this.overworkingaquantance510,
      overworkingaquantance10:this.overworkingaquantance10,
      overpriorrelevant05 :this.overpriorrelevant05,
      overpriorrelevant510 :this.overpriorrelevant510,
      overpriorrelevant10 :this.overpriorrelevant10,
    };

    this.globalsettingsService.addGlobalsettings(fieldGlobalsettingsid)
      .subscribe(res => {
        if (res.success) {
          this._commonService.showMessage('success', res.msg);
          this.getGlobalSettingsList();
        } else {
          this._commonService.showMessage('error', res.msg);
        }
      });

  }

}
