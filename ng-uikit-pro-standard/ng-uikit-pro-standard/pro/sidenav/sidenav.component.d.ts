import { ElementRef, Renderer2, AfterViewInit } from '@angular/core';
export declare class SidenavComponent implements AfterViewInit {
    el: ElementRef;
    renderer: Renderer2;
    windwosWidth: number;
    shown: boolean;
    isBrowser: any;
    class: string;
    fixed: boolean;
    sideNav: ElementRef;
    overlay: any;
    constructor(platformId: string, el: ElementRef, renderer: Renderer2);
    ngAfterViewInit(): void;
    windwosResize(): void;
    show(): void;
    hide(): void;
    toggle(): void;
    showOverlay(): void;
    hideOverlay(): void;
    setShown(value: boolean): void;
}
