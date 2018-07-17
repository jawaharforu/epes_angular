import { EventEmitter, OnDestroy, OnInit } from '@angular/core';
import { TabDirective } from './tab.directive';
import { TabsetConfig } from './tabset.config';
import { WavesDirective } from './../../free/waves/waves-effect.directive';
export declare class TabsetComponent implements OnDestroy, OnInit {
    ripple: WavesDirective;
    tabs: TabDirective[];
    classMap: any;
    protected isDestroyed: boolean;
    protected _vertical: boolean;
    protected _justified: boolean;
    protected _type: string;
    listGetClass: String;
    tabsGetClass: String;
    clazz: boolean;
    buttonClass: String;
    contentClass: String;
    /** if true tabs will be placed vertically */
    tabEl: any;
    showBsTab: EventEmitter<any>;
    shownBsTab: EventEmitter<any>;
    hideBsTab: EventEmitter<any>;
    hiddenBsTab: EventEmitter<any>;
    vertical: boolean;
    setActiveTab(index: number): void;
    /** if true tabs fill the container and have a consistent width */
    justified: boolean;
    /** navigation context class: 'tabs' or 'pills' */
    type: string;
    constructor(config: TabsetConfig, ripple: WavesDirective);
    click(event: any, index: any): void;
    ngOnDestroy(): void;
    getActive(): any;
    addTab(tab: TabDirective): void;
    removeTab(tab: TabDirective): void;
    protected getClosestTabIndex(index: number): number;
    protected hasAvailableTabs(index: number): boolean;
    protected setClassMap(): void;
    listGet(): void;
    tabsGet(): void;
    ngOnInit(): void;
}
