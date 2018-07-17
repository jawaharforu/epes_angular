import { ElementRef, Renderer2 } from '@angular/core';
import { IMyInputAutoFill } from '../interfaces/inputAutofill.interface';
export declare class InputAutoFillDirective {
    private el;
    private rndr;
    opts: IMyInputAutoFill;
    constructor(el: ElementRef, rndr: Renderer2);
    onKeyUp(evt: KeyboardEvent): void;
    private endsWith(val, suffix);
    private insertPos(str, idx, val);
    private getPartLength(idx);
    private isNumber(val);
    private isDay(idx);
    private isMonth(idx);
    private getInputValue();
    private setInputValue(val);
}
