import { Component, OnInit, ViewChild } from '@angular/core';
import { CommonService } from '../../../../services/common.service';
import { JdService } from '../../JD/services/jd.service';
import { ModalDirective } from '../../../../../../ng-uikit-pro-standard';

@Component({
  selector: 'app-jd-list',
  templateUrl: './jd-list.component.html',
  styleUrls: ['./jd-list.component.scss']
})
export class JdListComponent implements OnInit {

  public jdList: any;
  public passjdid: String = '';
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: Boolean = false;
  public isModalShownQuestion: Boolean = false;
  constructor(
    private _commonService: CommonService,
    private jdService: JdService
  ) { }

  ngOnInit() {
    this.getJDList();
  }

  getJDList() {
    this.jdService.getJD()
    .subscribe(res => {
      this.jdList = res.data;
    });
  }

  editJD(j: any) {
    this._commonService.redirectTo(`/admin/jd/edit/${j._id}`);
  }

  deleteJD(jdid: any) {
    this.jdService.deleteJD(jdid)
    .subscribe(res => {
      if (res.success) {
        this._commonService.showMessage('success', res.msg);
        this.getJDList();
      } else {
        this._commonService.showMessage('error', res.msg);
      }
    });
  }

  public showModal(which: any, jdid: any): void {
    if (which === 'a') {
      this.isModalShown = true;
    } else {
      this.isModalShownQuestion = true;
    }
    this.passjdid = jdid;
  }

  public hideModal(): void {
      this.autoShownModal.hide();
  }

  public onHidden(which: any): void {
    if (which === 'a') {
      this.isModalShown = false;
    } else {
      this.isModalShownQuestion = false;
    }
  }

}
