import { EventEmitter, TemplateRef, ElementRef, OnInit } from '@angular/core';
import { TabsetComponent } from './tabset.component';
export declare class TabDirective implements OnInit {
    /** tab header text */
    heading: string;
    /** if true tab can not be activated */
    disabled: boolean;
    /** if true tab can be removable, additional button will appear */
    removable: boolean;
    /** if set, will be added to the tab's class atribute */
    customClass: string;
    /** tab active state toggle */
    active: boolean;
    /** fired when tab became active, $event:Tab equals to selected instance of Tab component */
    select: EventEmitter<TabDirective>;
    /** fired when tab became inactive, $event:Tab equals to deselected instance of Tab component */
    deselect: EventEmitter<TabDirective>;
    /** fired before tab will be removed */
    removed: EventEmitter<TabDirective>;
    addClass: boolean;
    test: boolean;
    headingRef: TemplateRef<any>;
    tabset: TabsetComponent;
    el: ElementRef | any;
    protected _active: boolean;
    constructor(tabset: TabsetComponent, el: ElementRef);
    ngOnInit(): void;
    protected hasClass(el: any, className: any): any;
    protected classAdd(el: any, className: any): void;
    protected removeClass(el: any, className: any): void;
}
