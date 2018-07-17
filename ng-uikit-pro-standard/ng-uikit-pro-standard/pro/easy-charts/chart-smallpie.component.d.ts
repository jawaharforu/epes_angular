import { ElementRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
export declare class EasyPieChartComponent implements OnInit, OnChanges {
    percent: any;
    options: any;
    element: any;
    pieChart: any;
    isBrowser: any;
    constructor(el: ElementRef, platformId: string);
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
}
