import { Component, OnDestroy, Input, ViewEncapsulation } from '@angular/core';
import { Ng4LoadingSpinnerService } from './ng4LoadingSpinner.service';
import { Subscription } from 'rxjs';

/**
 * @description
 * @author Amit Mahida
 * @export
 * @class Ng4LoadingSpinnerComponent
 * @implements {OnDestroy}
 */
@Component({
  selector: 'ng4-loading-spinner',
  templateUrl: './ng4LoadingSpinner.component.html',
  styleUrls: ['./ng4LoadingSpinner.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class Ng4LoadingSpinnerComponent implements OnDestroy {

  /**
   * @description Default loading spinner template
   * @type {string}
   * @memberof Ng4LoadingSpinnerComponent
   */
  _template = `
  <div class="lds-roller"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>`;

  /**
   * @description Loading text
   * @type {string}
   * @memberof Ng4LoadingSpinnerComponent
   */
  _loadingText = '';


  /**
   * @description Defines threhold for not to diplay if time is less than 500ms
   * @type {number}
   * @memberof Ng4LoadingSpinnerComponent
   */
  _threshold = 500;

  /**
   * @description Defines z-index property of the loading text
   * @type {number}
   * @memberof Ng4LoadingSpinnerComponent
   */
  _zIndex = 9999;

  /**
   * @description Sets z-index for input text
   * @memberof Ng4LoadingSpinnerComponent
   */
  @Input() public set zIndex(value: number) {
    this._zIndex = value;
  }

  /**
   * @description returns z-index for input text
   * @readonly
   * @type {number}
   * @memberof Ng4LoadingSpinnerComponent
   */
  public get zIndex(): number {
    return this._zIndex;
  }

  /**
   * @description Accepts custom template
   * @memberof Ng4LoadingSpinnerComponent
   */
  @Input()
  public set template(value: string) {
    this._template = value;
  }


  /**
   * @description Gives the current template
   * @readonly
   * @type {string}
   * @memberof Ng4LoadingSpinnerComponent
   */
  public get template(): string {
    return this._template;
  }


  /**
   * @description Accepts loading text string
   * @memberof Ng4LoadingSpinnerComponent
   */
  @Input()
  public set loadingText(value: string) {
    this._loadingText = value;
  }


  /**
   * @description Gives loading text
   * @readonly
   * @type {string}
   * @memberof Ng4LoadingSpinnerComponent
   */
  public get loadingText(): string {
    return this._loadingText;
  }


  /**
   * @description Accepts external threshold
   * @memberof Ng4LoadingSpinnerComponent
   */
  @Input()
  public set threshold(value: number) {
    this._threshold = value;
  }


  /**
   * @description
   * @readonly
   * @type {number}
   * @memberof Ng4LoadingSpinnerComponent
   */
  public get threshold(): number {
    return this._threshold;
  }

  /**
   * Subscription
   * @type {Subscription}
   * @memberof Ng4LoadingSpinnerComponent
   */
  subscription: Subscription;

  /**
   * @description Show/hide spinner
   * @memberof Ng4LoadingSpinnerComponent
   */
  showSpinner = false;

  /**
   * Constructor
   * @param {Ng4LoadingSpinnerService} spinnerService Spinner Service
   * @memberof Ng4LoadingSpinnerComponent
   */
  constructor(
    private spinnerService: Ng4LoadingSpinnerService
  ) {
    this.createServiceSubscription();
  }

  /**
   * Destroy function
   * @memberof Ng4LoadingSpinnerComponent
   */
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  /**
   * Create service subscription
   * @memberof Ng4LoadingSpinnerComponent
   */
  createServiceSubscription() {
    let timer: any;

    this.subscription =
      this.spinnerService.getMessage().subscribe(show => {
        if (show) {
          if (timer) {
            return;
          }
          timer = setTimeout(function () {
            timer = null;
            this.showSpinner = show;
          }.bind(this), this.threshold);
        } else {
          if (timer) {
            clearTimeout(timer);
            timer = null;
          }
          this.showSpinner = false;
        }
      });
  }
}
