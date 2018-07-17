import { Observable } from 'rxjs';
import { CompleterBaseData } from './base-data.service';
import { CompleterItem } from '../components/completer-item.component';
export declare class LocalData extends CompleterBaseData {
    private _data;
    private savedTerm;
    constructor();
    data(data: any[] | Observable<any[]>): this;
    search(term: string): void;
    convertToItem(data: any): CompleterItem | any;
}
