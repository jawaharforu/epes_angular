import { AfterViewInit, EventEmitter, OnChanges, OnInit, ElementRef } from '@angular/core';
import { Option } from './option';
import { OptionList } from './option-list';
export declare class SelectDropdownComponent implements AfterViewInit, OnChanges, OnInit {
    private _elementRef;
    filterEnabled: boolean;
    highlightColor: string;
    highlightTextColor: string;
    left: number;
    multiple: boolean;
    notFoundMsg: string;
    optionList: OptionList;
    top: number;
    width: number;
    placeholder: string;
    close: EventEmitter<boolean>;
    optionClicked: EventEmitter<Option>;
    singleFilterClick: EventEmitter<null>;
    singleFilterInput: EventEmitter<string>;
    singleFilterKeydown: EventEmitter<any>;
    filterInput: any;
    optionsList: any;
    disabledColor: string;
    disabledTextColor: string;
    hasOptionsItems: boolean;
    constructor(_elementRef: ElementRef);
    /** Event handlers. **/
    onkeyup(): void;
    ngOnInit(): void;
    ngOnChanges(changes: any): void;
    ngAfterViewInit(): void;
    onSingleFilterClick(): void;
    onSingleFilterInput(event: any): void;
    onSingleFilterKeydown(event: any): void;
    onOptionsWheel(event: any): void;
    onOptionMouseover(option: Option): void;
    onOptionClick(option: Option): void;
    /** Initialization. **/
    private optionsReset();
    /** View. **/
    getOptionStyle(option: Option): any;
    clearFilterInput(): void;
    moveHighlightedIntoView(): void;
    private handleOptionsWheel(e);
}
