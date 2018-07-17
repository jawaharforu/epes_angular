import { ModuleWithProviders } from '@angular/core';
import { GlobalConfig } from './toast.config';
export declare class ToastModule {
    static forRoot(config?: GlobalConfig): ModuleWithProviders;
    constructor(parentModule: ToastModule);
}
