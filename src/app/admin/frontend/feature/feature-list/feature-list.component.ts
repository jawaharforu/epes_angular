import { Component, OnInit } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { FeatureService } from '../feature.service';

@Component({
  selector: 'app-feature-list',
  templateUrl: './feature-list.component.html',
  styleUrls: ['./feature-list.component.scss']
})
export class FeatureListComponent implements OnInit {

  public featureList: any;

  constructor(
    private _commonService: CommonService,
    private featureService: FeatureService
  ) { }

  ngOnInit() {
    this.getFeatureList();
  }

  getFeatureList() {
    this.featureService.getFeature()
    .subscribe(res => {
      this.featureList = res.data;
    });
  }

  editFeature(Feature: any) {
    this._commonService.redirectTo(`/admin/feature/edit/${Feature._id}`);
  }

  updateStatus(event: boolean, c: any) {
    const fieldFeature = {
      name: c.name,
      description: c.description,
      status: event,
      featureid: c.featureid
    };
    this.featureService.addFeature(fieldFeature)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  deleteFeature(Featureid: any) {
    this.featureService.deleteFeature(Featureid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getFeatureList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
}
