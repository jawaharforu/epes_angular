import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';

@Component({
  selector: 'app-budgetmaster',
  templateUrl: './budgetmaster.component.html',
  styleUrls: ['./budgetmaster.component.scss']
})
export class BudgetmasterComponent implements OnInit {

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
