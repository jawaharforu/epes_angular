import { ElementRef, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { MDBUploaderService, UploadOutput } from '../classes/mdb-uploader.class';
export declare class MDBFileSelectDirective implements OnInit, OnDestroy {
    private platform_id;
    private elementRef;
    uploadInput: EventEmitter<any>;
    uploadOutput: EventEmitter<UploadOutput>;
    upload: MDBUploaderService;
    isServer: boolean;
    el: HTMLInputElement | any;
    constructor(platform_id: any, elementRef: ElementRef);
    ngOnInit(): void;
    ngOnDestroy(): void;
    fileListener: () => void;
}
