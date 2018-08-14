import { Component, OnInit } from '@angular/core';
import { ProductroadmapService } from '../services/productroadmap.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-productroadmap-list',
  templateUrl: './productroadmap-list.component.html',
  styleUrls: ['./productroadmap-list.component.scss']
})
export class ProductroadmapListComponent implements OnInit {

  public roadmapList: any = '';

  constructor(
    private _commonService: CommonService,
    private productroadmapService: ProductroadmapService
  ) { }

  ngOnInit() {
    this.getProductroadmapList();
  }

  getProductroadmapList() {
    this.productroadmapService.getProductroadmap()
    .subscribe(res => {
      this.roadmapList = res.data;
    });
  }

  editProductroadmap(Roadmap: any) {
    this._commonService.redirectTo(`/admin/roadmap/edit/${Roadmap._id}`);
  }

  updateStatus(event: boolean, c: any) {
    const fieldRoadmap = {
      name: c.name,
      description: c.description,
      status: event,
      productroadmapid: c._id
    };
    this.productroadmapService.addProductroadmap(fieldRoadmap)
    .subscribe(res => {
      console.log(res);
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  deleteProductroadmap(Roadmapid: any) {
    this.productroadmapService.deleteProductroadmap(Roadmapid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getProductroadmapList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
