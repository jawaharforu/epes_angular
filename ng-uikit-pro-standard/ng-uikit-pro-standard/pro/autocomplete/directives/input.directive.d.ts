import { ElementRef, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';
import { MdbCompleterDirective } from './completer.directive';
export declare class MdbInputCompleteDirective {
    private completer;
    private tempngModel;
    private el;
    clearSelected: boolean;
    clearUnselected: boolean;
    overrideSuggested: boolean;
    fillHighlighted: boolean;
    openOnFocus: boolean;
    ngModelChange: EventEmitter<any>;
    private _searchStr;
    private _displayStr;
    private ngModel;
    private blurTimer;
    constructor(completer: MdbCompleterDirective, tempngModel: NgModel, el: ElementRef);
    keyupHandler(event: any): any;
    keydownHandler(event: any): void;
    onBlur(): any;
    onfocus(): void;
    searchStr: string;
    private handleSelection();
    private restoreSearchValue();
}
