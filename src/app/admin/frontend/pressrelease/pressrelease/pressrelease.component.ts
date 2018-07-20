import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '../../../../../../node_modules/@angular/router';
import { CommonService } from '../../../../services/common.service';
import { ValidationsService } from '../../../../services/validations.service';
import { PressreleaseService } from '../pressrelease.service';

@Component({
  selector: 'app-pressrelease',
  templateUrl: './pressrelease.component.html',
  styleUrls: ['./pressrelease.component.scss']
})
export class PressreleaseComponent implements OnInit {

  public pressreleaseid: String;
  public name: String;
  public status: Boolean; 

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private pressreleaseService: PressreleaseService
  ) { }
 
  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.pressreleaseid = params['pressreleaseid'];
      if (!this._validationsService.isEmpty(this.pressreleaseid)) {
        this.getPressreleaseById(this.pressreleaseid);
      }
    });
  }

  getPressreleaseById(pressreleaseid: any) {
    this.pressreleaseService.getPressreleaseById(pressreleaseid) 
    .subscribe(res => {
      console.log('jai sai ram');
      console.log(res);
      this.name = res.data.name;
      this.status = res.data.status;
      this.pressreleaseid = res.data._id;
    });
  }

  pressreleaseForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    
    let fieldPressReleaseid;
    if (!this._validationsService.isEmpty(this.pressreleaseid)) {
      fieldPressReleaseid = {
        name: this.name,        
        status: this.status,
        pressreleaseid: this.pressreleaseid
      };
    } else {
      fieldPressReleaseid = {
        name: this.name,        
        status: this.status,
      };
    } 
    this.pressreleaseService.addPressRelease(fieldPressReleaseid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.name = '';     
        this.status = false;
        this._commonService.redirectTo('/admin/press-release/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });

  }

}
