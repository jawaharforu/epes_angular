import { Component, OnInit, ViewChild } from '@angular/core';
import { JdService } from '../../../JD/services/jd.service';
import { ModalDirective } from '../../../../../../ng-uikit-pro-standard';

@Component({
  selector: 'app-jdlist',
  templateUrl: './jdlist.component.html',
  styleUrls: ['./jdlist.component.scss']
})
export class JDListComponent implements OnInit {

  public jdList: any;
  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: Boolean = false;
  public passjdid: String = '';

  constructor(
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

  public showModal(jdid: any): void {
    this.passjdid = jdid;
    this.isModalShown = true;
  }

  public hideModal(): void {
      this.autoShownModal.hide();
  }

  public onHidden(): void {
      this.isModalShown = false;
  }
}
