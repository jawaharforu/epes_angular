import { ElementRef, AfterViewInit } from '@angular/core';
export declare class FocusDirective implements AfterViewInit {
    private el;
    value: string;
    constructor(el: ElementRef);
    ngAfterViewInit(): void;
}
