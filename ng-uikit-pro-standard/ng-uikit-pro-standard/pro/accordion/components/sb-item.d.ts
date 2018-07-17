import { AfterViewInit } from '@angular/core';
import { SBItemBodyComponent } from './sb-item.body';
export declare class SBItemComponent implements AfterViewInit {
    private squeezebox;
    collapsed: boolean;
    body: SBItemBodyComponent;
    constructor();
    ngAfterViewInit(): void;
    toggle(collapsed: boolean): void;
    applyToggle(collapsed: boolean): void;
}
