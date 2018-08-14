import { Component, OnInit } from '@angular/core';
import { CareerService } from '../career.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-career-list',
  templateUrl: './career-list.component.html',
  styleUrls: ['./career-list.component.scss']
})
export class CareerListComponent implements OnInit {

  public careerList: any = '';

  constructor(
    private _commonService: CommonService,
    private careerService: CareerService
  ) { }

  ngOnInit() {
    this.getCareerList();
  }

  updateStatus(event: boolean, c: any) {
    const fieldCareer = {
      name: c.name,
      description: c.description,
      status: event,
      careerid: c._id
    };
    this.careerService.addCareer(fieldCareer)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
  
  getCareerList() {
    this.careerService.getCareer()
    .subscribe(res => {
      this.careerList = res.data;
    });
  }

  editCareer(Career: any) {
    this._commonService.redirectTo(`/admin/career/edit/${Career._id}`);
  }

  deleteCareer(Careerid: any) {
    this.careerService.deleteCareer(Careerid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getCareerList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }
 
}
