import { Observable } from 'rxjs';
import { LocalData } from './local-data.service';
import { RemoteData } from './remote-data.service';
export declare class CompleterService {
    private localDataFactory;
    private remoteDataFactory;
    constructor(localDataFactory: any, remoteDataFactory: any);
    local(data: any[] | Observable<any>, searchFields?: string, titleField?: string): LocalData;
    remote(url: string, searchFields?: string, titleField?: string): RemoteData;
}
