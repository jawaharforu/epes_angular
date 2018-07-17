import { Option } from './option';
import { IOption } from './option-interface';
export declare class OptionList {
    private _options;
    private _highlightedOption;
    private _hasShown;
    setToNullValue: any;
    static equalValues(v0: Array<string>, v1: Array<string>): boolean;
    constructor(options: Array<IOption>);
    /** Options. **/
    readonly options: Array<Option>;
    getOptionsByValue(value: string): Array<Option>;
    /** Value. **/
    value: Array<string>;
    /** Selection. **/
    readonly selection: Array<Option>;
    select(option: Option, multiple: boolean): void;
    deselect(option: Option): void;
    clearSelection(): void;
    /** Filter. **/
    readonly filtered: Array<Option>;
    filter(term: string): boolean;
    private resetFilter();
    /** Highlight. **/
    readonly highlightedOption: Option;
    highlight(): void;
    highlightOption(option: Option): void;
    highlightNextOption(): void;
    highlightPreviousOption(): void;
    private clearHighlightedOption();
    private getHighlightedIndexFromList(options);
    getHighlightedIndex(): number;
    /** Util. **/
    readonly hasShown: boolean;
    hasSelected(): boolean;
    hasShownSelected(): boolean;
    private getFirstShown();
    private getFirstShownSelected();
}
