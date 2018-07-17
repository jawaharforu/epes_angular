import { QueryList } from '@angular/core';
import { SBItemComponent } from './sb-item';
export declare class SqueezeBoxComponent {
    multiple: boolean;
    items: QueryList<SBItemComponent>;
    constructor();
    didItemToggled(item: SBItemComponent): void;
}
