import { OnChanges, OnInit, EventEmitter, ExistingProvider, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { ControlValueAccessor } from '@angular/forms';
import { SelectDropdownComponent } from './select-dropdown.component';
import { IOption } from './option-interface';
import { Option } from './option';
import { OptionList } from './option-list';
export declare const SELECT_VALUE_ACCESSOR: ExistingProvider;
export declare class SelectComponent implements ControlValueAccessor, OnChanges, OnInit, AfterViewInit {
    el: ElementRef;
    renderer: Renderer2;
    options: Array<IOption>;
    allowClear: boolean;
    disabled: boolean;
    highlightColor: string;
    highlightTextColor: string;
    multiple: boolean;
    noFilter: number;
    notFoundMsg: string;
    placeholder: string;
    filterPlaceholder: string;
    label: string;
    filterEnabled: boolean;
    opened: EventEmitter<null>;
    closed: EventEmitter<null>;
    selected: EventEmitter<IOption>;
    deselected: EventEmitter<IOption | IOption[]>;
    noOptionsFound: EventEmitter<string>;
    selectionSpan: any;
    dropdown: SelectDropdownComponent;
    filterInput: any;
    KEYS: any;
    _value: Array<any>;
    optionList: OptionList;
    hasSelected: boolean;
    hasFocus: boolean;
    isOpen: boolean;
    isBelow: boolean;
    filterInputWidth: number;
    isDisabled: boolean;
    placeholderView: string;
    clearClicked: boolean;
    selectContainerClicked: boolean;
    width: number;
    top: number;
    left: number;
    onChange: (_: any) => void;
    onTouched: () => void;
    /** Event handlers. **/
    closeSelect($event: any): void;
    constructor(el: ElementRef, renderer: Renderer2);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    setArrowUpIcon(): void;
    setArrowDownIcon(): void;
    isChild(elemnt: any): boolean;
    onWindowClick(): void;
    onWindowResize(): void;
    onSelectContainerClick(): void;
    onSelectContainerFocus(): void;
    onSelectContainerKeydown(event: any): void;
    onDropdownOptionClicked(option: Option): void;
    onDropdownClose(focus: any): void;
    onSingleFilterClick(): void;
    onSingleFilterInput(term: string): void;
    onSingleFilterKeydown(event: any): void;
    onMultipleFilterInput(event: any): void;
    onMultipleFilterKeydown(event: any): void;
    onClearSelectionClick(): void;
    onDeselectOptionClick(option: Option): void;
    /** API. **/
    open(): void;
    close(): void;
    value: string | string[];
    clear(): void;
    select(value: string): void;
    /** ControlValueAccessor interface methods. **/
    writeValue(value: any): void;
    registerOnChange(fn: (_: any) => void): void;
    registerOnTouched(fn: () => void): void;
    setDisabledState(isDisabled: boolean): void;
    valueChanged(): void;
    /** Initialization. **/
    updateOptionsList(firstTime: boolean): void;
    /** Dropdown. **/
    toggleDropdown(): void;
    openDropdown(): void;
    closeDropdown(focus?: boolean): void;
    /** Select. **/
    selectOption(option: Option): void;
    deselectOption(option: Option): void;
    clearSelection(): void;
    toggleSelectOption(option: Option): void;
    selectHighlightedOption(): void;
    deselectLast(): void;
    /** Filter. **/
    clearFilterInput(): void;
    setMultipleFilterInput(value: string): void;
    handleSelectContainerKeydown(event: any): void;
    handleMultipleFilterKeydown(event: any): void;
    handleSingleFilterKeydown(event: any): void;
    /** View. **/
    focus(): void;
    blur(): void;
    updateWidth(): void;
    updatePosition(): void;
    updateFilterWidth(): void;
}
