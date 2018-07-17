import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { CommonService } from '../../../services/common.service';
import { ValidationsService } from '../../../services/validations.service';
import { FeatureService } from './feature.service';

@Component({
  selector: 'app-feature',
  templateUrl: './feature.component.html',
  styleUrls: ['./feature.component.scss']
})
export class FeatureComponent implements OnInit {

  public featureid: String;
  public name: String;
  public description: String;
  public status: Boolean;

  constructor(
    private activatedRoute: ActivatedRoute,
    private _commonService: CommonService,
    private _validationsService: ValidationsService,
    private featureService: FeatureService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      this.featureid = params['featureid'];
      if (!this._validationsService.isEmpty(this.featureid)) {
        this.getFeatureById(this.featureid);
      }
    });
  }

  getFeatureById(featureid: any) {
    this.featureService.getFeatureById(featureid)
    .subscribe(res => {
      this.name = res.data.name;
      this.description = res.data.description;
      this.status = res.data.status;
      this.featureid = res.data._id;
    });
  }

  featureForm() {
    if (this._validationsService.isEmpty(this.name)) {
      this._commonService.showMessage('error', 'Name field should not be empty!');
      return false;
    }
    if (this._validationsService.isEmpty(this.description)) {
      this._commonService.showMessage('error', 'Description field should not be empty!');
      return false;
    }
    let fieldFeatureid;
    if (!this._validationsService.isEmpty(this.featureid)) {
      fieldFeatureid = {
        name: this.name,
        description: this.description,
        status: this.status,
        featureid: this.featureid
      };
    } else {
      fieldFeatureid = {
        name: this.name,
        description: this.description,
        status: this.status
      };
    }
    this.featureService.addFeature(fieldFeatureid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.name = '';
        this.description = '';
        this.status = false;
        this._commonService.redirectTo('/admin/feature/list');
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });

  }

}
