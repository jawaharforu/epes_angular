import { ElementRef, OnDestroy, AfterViewInit } from '@angular/core';
export declare class MdbStickyDirective implements OnDestroy, AfterViewInit {
    stickyAfter: string;
    isBrowser: boolean;
    el: HTMLElement | any;
    parentEl: HTMLElement | any;
    fillerEl: HTMLElement | any;
    stickyOffsetTop: number;
    diff: any;
    original: any;
    constructor(el: ElementRef, platformId: string);
    ngAfterViewInit(): void;
    ngOnDestroy(): void;
    attach(): void;
    detach(): void;
    scrollHandler: () => void;
}
