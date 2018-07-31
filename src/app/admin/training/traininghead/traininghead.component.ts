import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';

@Component({
  selector: 'app-traininghead',
  templateUrl: './traininghead.component.html',
  styleUrls: ['./traininghead.component.scss']
})
export class TrainingheadComponent implements OnInit {

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShown: Boolean = false;
  constructor(
    // private activatedRoute: ActivatedRoute,
    // private _commonService: CommonService,
    // private _validationsService: ValidationsService,
  ) { }

  ngOnInit() {

  }

    public showModal():void {
        this.isModalShown = true;
    }

    public hideModal():void {
        this.autoShownModal.hide();
    }

    public onHidden():void {
        this.isModalShown = false;
    }


}
