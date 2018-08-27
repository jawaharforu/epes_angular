import { Component, OnInit } from '@angular/core';
import { WeightageService } from '../weightage.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-weightage-list',
  templateUrl: './weightage-list.component.html',
  styleUrls: ['./weightage-list.component.scss']
})
export class WeightageListComponent implements OnInit {

  public weightageList: any;
  public weightageid: any;

  constructor(
    private _commonService: CommonService,
    private weightageService: WeightageService
  ) { }

  ngOnInit() {
    this.getWeightageList();
  }

  getWeightageList() {
    this.weightageService.getWeightage()
      .subscribe(res => {
        this.weightageList = res.data;
        console.log(this.weightageList);
      });
  }

  editWeightage(weightage: any) {
    this._commonService.redirectTo(`/admin/weightage/edit/${weightage.jdid._id}`);
  }

  deleteWeightage(weightageid: any) {
    this.weightageService.deleteWeightage(weightageid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getWeightageList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }


}
