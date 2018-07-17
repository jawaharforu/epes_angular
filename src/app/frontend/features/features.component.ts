import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../admin/frontend/feature/feature.service';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent implements OnInit {

  public featureList: any;
  public featuresData: any[] = [];

  constructor(
    private featureService: FeatureService
  ) { }

  ngOnInit() {
    this.getFeatureList();
  }

  getFeatureList() {
    this.featureService.getFeatureByStatus()
    .subscribe(res => {
      this.featureList = res.data;
      for (let j = 0; j < res.data.length; j++) {
        (j === 0) ? this.featuresData.push(true) : this.featuresData.push(false);
      }
    });
  }

  showFeature(i: number) {
    for (let j = 0; j < this.featuresData.length; j++) {
      (j === i) ? this.featuresData[j] = true : this.featuresData[j] = false;
    }
  }

}
