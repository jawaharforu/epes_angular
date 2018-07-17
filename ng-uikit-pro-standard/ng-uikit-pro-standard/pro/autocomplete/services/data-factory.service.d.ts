import { Http } from '@angular/http';
import { LocalData } from './local-data.service';
import { RemoteData } from './remote-data.service';
export declare function localDataFactory(): () => LocalData;
export declare function remoteDataFactory(http: Http): () => RemoteData;
export declare let LocalDataFactoryProvider: {
    provide: typeof LocalData;
    useFactory: typeof localDataFactory;
};
export declare let RemoteDataFactoryProvider: {
    provide: typeof RemoteData;
    useFactory: typeof remoteDataFactory;
    deps: (typeof Http)[];
};
