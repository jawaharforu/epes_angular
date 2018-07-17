import { OnDestroy, ApplicationRef } from '@angular/core';
import { SafeHtml } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { GlobalConfig, ToastPackage } from './toast.config';
export declare class ToastComponent implements OnDestroy {
    toastPackage: ToastPackage;
    protected appRef: ApplicationRef;
    message: string | SafeHtml;
    title: string;
    options: GlobalConfig;
    /** width of progress bar */
    width: number;
    /** a combination of toast type and options.toastClass */
    toastClasses: string;
    /** controls animation */
    state: string;
    timeout: any;
    intervalId: any;
    hideTime: number;
    sub: Subscription;
    sub1: Subscription;
    protected toastService: any;
    constructor(toastPackage: ToastPackage, appRef: ApplicationRef);
    ngOnDestroy(): void;
    /**
     * activates toast and sets timeout
     */
    activateToast(): void;
    /**
     * updates progress bar width
     */
    updateProgress(): void;
    /**
     * tells toastrService to remove this toast after animation time
     */
    remove(): void;
    tapToast(): void;
    stickAround(): void;
    delayedHideToast(): void;
}
