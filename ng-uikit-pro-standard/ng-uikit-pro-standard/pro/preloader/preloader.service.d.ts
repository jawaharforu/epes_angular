import { MDB_SPINNING_PRELOADER_TYPE } from './preloader.types';
export declare class MDBSpinningPreloader {
    document: any;
    _container: MDB_SPINNING_PRELOADER_TYPE;
    static errorHandler(): void;
    constructor(document: any);
    start(): void;
    stop(): void;
    container: MDB_SPINNING_PRELOADER_TYPE;
}
