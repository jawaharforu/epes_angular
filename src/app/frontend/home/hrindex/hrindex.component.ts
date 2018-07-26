import { Component, OnInit, ViewChild } from '@angular/core';
import { ModalDirective } from '../../../../../ng-uikit-pro-standard';

@Component({
  selector: 'app-hrindex',
  templateUrl: './hrindex.component.html',
  styleUrls: ['./hrindex.component.scss']
})
export class HRIndexComponent implements OnInit {

  @ViewChild('autoShownModal') public autoShownModal: ModalDirective;
  public isModalShownFirst: Boolean = false;
  public isModalShownSecont: Boolean = false;
  public isModalShownThired: Boolean = false;
  constructor() { }

  ngOnInit() {
  }

  public showModal(modal: any): void {
    if (modal === 'f') {
      this.isModalShownFirst = true;
    } else if (modal === 's') {
      this.isModalShownSecont = true;
    } else {
      this.isModalShownThired = true;
    }
  }

  public hideModal(): void {
      this.autoShownModal.hide();
  }

  public onHidden(modal: any): void {
    if (modal === 'f') {
      this.isModalShownFirst = false;
    } else if (modal === 's') {
      this.isModalShownSecont = false;
    } else if (modal === 't') {
      this.isModalShownThired = false;
    }
  }

  openSecond() {
    this.onHidden('f');
    this.onHidden('t');
    this.showModal('s');
  }

  openThird() {
    this.onHidden('f');
    this.onHidden('s');
    this.showModal('t');
  }

  closeThird() {
    this.onHidden('t');
  }
}
