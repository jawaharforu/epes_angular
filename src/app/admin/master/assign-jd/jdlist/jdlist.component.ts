import { Component, OnInit, ViewChild } from '@angular/core';
import { JdService } from '../../../master/JD/services/jd.service';
import { ModalDirective } from '../../../../../../ng-uikit-pro-standard';
import { AssignJDService } from '../assign-jd.service';

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
  public noofemp: any[] = [];

  constructor(
    private jdService: JdService,
    private assignJDService: AssignJDService,
  ) { }

  ngOnInit() {
    this.getJDList();
  }

  getJDList() {
    this.jdService.getJD()
    .subscribe(res => {
      this.jdList = res.data;
      let j = 0;
      for (const prop of res.data) {
        this.getAssignJDByJDId(prop._id, j);
        j++;
      }
    });
  }

  getAssignJDByJDId(jdid: any, j: any) {
    this.assignJDService.getAssignJDByJDId(jdid)
    .subscribe(res => {
      if (res.data[0]) {
        this.noofemp[j] = res.data[0].employeeid.length;
      } else {
        this.noofemp[j] = 0;
      }
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
