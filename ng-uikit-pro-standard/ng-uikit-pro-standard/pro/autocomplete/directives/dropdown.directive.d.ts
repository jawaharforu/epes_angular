import { AfterViewInit, ElementRef, OnDestroy, OnInit } from '@angular/core';
import { CompleterItem } from '../components/completer-item.component';
import { MdbCompleterDirective, CompleterDropdown } from './completer.directive';
export interface CtrRowElement {
    setHighlighted(selected: boolean): void;
    getNativeElement(): any;
    getDataItem(): CompleterItem;
}
export declare class CtrRowItem {
    row: CtrRowElement;
    index: number;
    constructor(row: CtrRowElement, index: number);
}
export declare class MdbDropdownDirective implements CompleterDropdown, OnDestroy, OnInit, AfterViewInit {
    private completer;
    private el;
    setToNullValue: any;
    private rows;
    private currHighlighted;
    private isScrollOn;
    constructor(completer: MdbCompleterDirective, el: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngAfterViewInit(): void;
    onMouseDown(): void;
    registerRow(row: CtrRowItem): void;
    highlightRow(index: number): any;
    clear(): void;
    onSelected(item: CompleterItem): void;
    selectCurrent(): void;
    nextRow(): void;
    prevRow(): void;
    private dropdownScrollTopTo(offset);
    private dropdownRowTop();
    private dropdownHeight();
    private dropdownRowOffsetHeight(row);
}
