import { EventEmitter, OnDestroy, OnChanges } from '@angular/core';
import { Router } from '@angular/router';
import { PageScrollService } from './mdb-page-scroll.service';
import { EasingLogic } from './mdb-page-scroll.config';
export declare class PageScrollDirective implements OnChanges, OnDestroy {
    private pageScrollService;
    private router;
    routerLink: any;
    href: string;
    pageScrollHorizontal: boolean | any;
    pageScrollOffset: number | any;
    pageScrollDuration: number | any;
    pageScrollSpeed: number | any;
    pageScrollEasing: EasingLogic | any;
    pageScrollInterruptible: boolean;
    pageScrollAdjustHash: boolean;
    pageScroll: string | any;
    pageScrollFinish: EventEmitter<boolean>;
    private pageScrollInstance;
    private document;
    constructor(pageScrollService: PageScrollService, router: Router, document: any);
    ngOnChanges(): void;
    ngOnDestroy(): void;
    private generatePageScrollInstance();
    private pushRouterState();
    private scroll();
    handleClick(): boolean;
}
