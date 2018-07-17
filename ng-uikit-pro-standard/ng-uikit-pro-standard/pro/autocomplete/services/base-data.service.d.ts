import { Subject } from 'rxjs';
import { CompleterItem } from '../components/completer-item.component';
import { CompleterData } from './completer-data.service';
export declare abstract class CompleterBaseData extends Subject<CompleterItem[]> implements CompleterData {
    protected _searchFields: string;
    protected _titleField: string;
    protected _descriptionField: string;
    protected _imageField: string;
    constructor();
    abstract search(term: string): void;
    cancel(): void;
    searchFields(searchFields: string): this;
    titleField(titleField: string): this;
    descriptionField(descriptionField: string): this;
    imageField(imageField: string): this;
    convertToItem(data: any): CompleterItem;
    protected extractMatches(data: any[], term: string): any[];
    protected extractTitle(item: any): any;
    protected extractValue(obj: any, key: string): any;
    protected processResults(matches: string[]): CompleterItem[];
}
