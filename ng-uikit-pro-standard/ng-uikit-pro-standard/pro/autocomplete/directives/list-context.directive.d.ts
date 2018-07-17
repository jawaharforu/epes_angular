import { ChangeDetectorRef, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { MdbCompleterDirective, CompleterList } from './completer.directive';
import { CompleterData } from '../services/completer-data.service';
import { CompleterItem } from '../components/completer-item.component';
export declare class CtrListContext {
    results: CompleterItem[];
    searching: boolean;
    searchInitialized: boolean;
    isOpen: boolean;
    constructor(results: CompleterItem[], searching: boolean, searchInitialized: boolean, isOpen: boolean);
}
export declare class MdbListDirective implements OnInit, CompleterList {
    private tmpCompleter;
    private templateRef;
    private viewContainer;
    private cd;
    mdbListMinSearchLength: number;
    mdbListPause: number;
    mdbListAutoMatch: boolean;
    mdbListAutoHighlight: any;
    private _dataService;
    setToNullValue: any;
    private term;
    private searchTimer;
    private clearTimer;
    private ctx;
    private _initialValue;
    private completer;
    constructor(tmpCompleter: MdbCompleterDirective, templateRef: TemplateRef<CtrListContext>, viewContainer: ViewContainerRef, cd: ChangeDetectorRef);
    ngOnInit(): void;
    dataService: CompleterData;
    initialValue: any;
    search(term: string): void;
    clear(): void;
    open(): void;
    isOpen(open: boolean): void;
    private _clear();
    private searchTimerComplete(term);
    private refreshTemplate();
    private getBestMatchIndex();
}
