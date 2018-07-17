import { ElementRef, Renderer2 } from '@angular/core';
export declare class SBItemBodyComponent {
    private renderer;
    height: string;
    bodyEl: ElementRef;
    constructor(renderer: Renderer2);
    toggle(collapsed: boolean): void;
}
