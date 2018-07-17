import { Component, OnInit } from '@angular/core';
import { FeatureService } from '../../../admin/frontend/feature/feature.service';


@Component({
  selector: 'app-ourfeatures',
  templateUrl: './ourfeatures.component.html',
  styleUrls: ['./ourfeatures.component.scss']
})
export class OurfeaturesComponent implements OnInit {

  // tslint:disable-next-line:max-line-length
  public imageArray: any[] = ['../../../assets/img/organisation.png', '../../../assets/img/organogram.png', '../../../assets/img/mapping.png', '../../../assets/img/assesment.png', '../../../assets/img/tollerence.png', '../../../assets/img/gap-=analysis.png'];
  public featureList: any;

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
    });
  }


}
