import { Component, OnInit } from '@angular/core';
import { PressreleaseService } from '../pressrelease.service';
import { CommonService } from '../../../../services/common.service';

@Component({
  selector: 'app-pressrelease-list',
  templateUrl: './pressrelease-list.component.html',
  styleUrls: ['./pressrelease-list.component.scss']
})
export class PressreleaseListComponent implements OnInit {

  public pressReleaseList: any; 

  constructor(
    private _commonService: CommonService,
    private pressReleaseService: PressreleaseService
  ) { }

  ngOnInit() {
    this.getPressReleaseList();
  }

  getPressReleaseList() {
    this.pressReleaseService.getPressRelease()
    .subscribe(res => {
      this.pressReleaseList = res.data;
    });
  }

  editPressRelease(PressRelease: any) {
    this._commonService.redirectTo(`/admin/press-release/edit/${PressRelease._id}`);
  }

  updateStatus(event: boolean, c: any) {
    const fieldPressRelease = {
      name: c.name,
      description: c.description,
      status: event,
      pressreleaseid: c._id
    };
    this.pressReleaseService.addPressRelease(fieldPressRelease)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  deletePressRelease(PressReleaseid: any) {
    this.pressReleaseService.deletePressRelease(PressReleaseid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getPressReleaseList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

}
