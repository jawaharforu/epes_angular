import { EventEmitter } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
export declare enum UploadStatus {
    Queue = 0,
    Uploading = 1,
    Done = 2,
    Canceled = 3,
}
export interface UploadProgress {
    status: UploadStatus;
    data?: {
        percentage: number;
        speed: number;
        speedHuman: string;
    };
}
export interface UploadFile {
    id: string;
    fileIndex: number;
    lastModifiedDate: Date;
    name: string;
    size: number;
    type: string;
    progress: UploadProgress | any;
    response?: any;
}
export interface UploadOutput {
    type: 'addedToQueue' | 'allAddedToQueue' | 'uploading' | 'done' | 'removed' | 'start' | 'cancelled' | 'dragOver' | 'dragOut' | 'drop';
    file?: UploadFile;
}
export interface UploadInput {
    type: 'uploadAll' | 'uploadFile' | 'cancel' | 'cancelAll';
    url?: string;
    method?: string;
    id?: string;
    fileIndex?: number;
    file?: UploadFile;
    data?: {
        [key: string]: string | Blob;
    };
    headers?: {
        [key: string]: string;
    };
    concurrency?: number;
}
export declare function humanizeBytes(bytes: number): string;
export declare class MDBUploaderService {
    setToNullValue: any;
    fileList: FileList;
    files: UploadFile[] | any;
    uploads: {
        file?: UploadFile;
        files?: UploadFile[];
        sub: Subscription;
    }[] | any;
    serviceEvents: EventEmitter<UploadOutput>;
    constructor();
    handleFiles(files: FileList): void;
    initInputEvents(input: EventEmitter<UploadInput>): void;
    uploadFile(file: UploadFile, event: UploadInput): Observable<UploadOutput> | any;
    generateId(): string;
}
