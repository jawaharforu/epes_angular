import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../admin/frontend/feature/feature.service';
import {ActivatedRoute} from '@angular/router';
import { ValidationsService } from '../../services/validations.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public featureList: any;
  public featuresData: any[] = [];
  public faqid: any = 0;

  constructor(
    private featureService: FeatureService,
    private activatedRoute: ActivatedRoute,
    private _validationsService: ValidationsService
  ) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe((params) => {
      if (!this._validationsService.isEmpty(params['faqid'])) {
        this.faqid = params['faqid'];
      }
    });
    this.getFeatureList();
  }

  getFeatureList() {
    this.featureService.getFeatureByStatus()
    .subscribe(res => {
      this.featureList = res.data;
      console.log(this.faqid);
      for (let j = 0; j < res.data.length; j++) {
        (j === parseInt(this.faqid)) ? this.featuresData.push(true) : this.featuresData.push(false);
      }
    });
  }

  showFeature(i: number) {
    for (let j = 0; j < this.featuresData.length; j++) {
      (j === i) ? this.featuresData[j] = true : this.featuresData[j] = false;
    }
  }

}
