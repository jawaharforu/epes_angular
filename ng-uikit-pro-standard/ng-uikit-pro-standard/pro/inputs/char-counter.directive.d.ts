import { OnInit, ElementRef, Renderer2 } from '@angular/core';
export declare class CharCounterDirective implements OnInit {
    private _elRef;
    private _renderer;
    length: number;
    textContainer: any;
    constructor(_elRef: ElementRef, _renderer: Renderer2);
    ngOnInit(): void;
    onKeyUp(): void;
    hide(): void;
    show(): void;
}
