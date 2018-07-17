import { ElementRef, AfterViewInit } from '@angular/core';
export declare class ProgressSpinnerComponent implements AfterViewInit {
    el: ElementRef;
    addClass: String;
    spinnerType: string;
    spinnerColor: string;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
    spinerRun(): void;
}
