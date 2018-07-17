import { Injector, ComponentRef } from '@angular/core';
import { Observable } from 'rxjs';
import { Overlay } from '../overlay/overlay';
import { GlobalConfig, IndividualConfig } from './toast.config';
import { ToastRef } from './toast.injector';
import { ToastContainerDirective } from './toast.directive';
import { DomSanitizer } from '@angular/platform-browser';
export interface ActiveToast {
    toastId?: number;
    message?: string;
    portal?: ComponentRef<any>;
    toastRef?: ToastRef<any>;
    onShown?: Observable<any>;
    onHidden?: Observable<any>;
    onTap?: Observable<any>;
    onAction?: Observable<any>;
}
export declare class ToastService {
    toastConfig: GlobalConfig | any;
    private overlay;
    private _injector;
    private sanitizer;
    index: number;
    previousToastMessage: string;
    currentlyActive: number;
    toasts: ActiveToast[];
    overlayContainer: ToastContainerDirective;
    constructor(toastConfig: GlobalConfig | any, overlay: Overlay, _injector: Injector, sanitizer: DomSanitizer);
    /** show successful toast */
    show(message: string, title?: string | any, override?: IndividualConfig, type?: string): any;
    /** show successful toast */
    success(message: string, title?: string | any, override?: IndividualConfig): any;
    /** show error toast */
    error(message: string, title?: string | any, override?: IndividualConfig): any;
    /** show info toast */
    info(message: string, title?: string | any, override?: IndividualConfig): any;
    /** show warning toast */
    warning(message: string, title?: string | any, override?: IndividualConfig): any;
    /**
     * Remove all or a single toast by id
     */
    clear(toastId?: number): void;
    /**
     * Remove and destroy a single toast by id
     */
    remove(toastId: number): boolean;
    /**
     * Determines if toast message is already shown
     */
    isDuplicate(message: string): boolean;
    /** create a clone of global config and apply individual settings */
    private applyConfig(override?);
    /**
     * Find toast object by id
     */
    private _findToast(toastId);
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     */
    private _buildNotification(toastType, message, title, config);
}
