/**
 * Created by sebastianfuss on 02.09.16.
 */
export declare class PageScrollUtilService {
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param variable
  true the variable is undefined or null
     */
    static isUndefinedOrNull(variable: any): boolean;
    static extractElementPosition(document: Document, scrollTargetElement: HTMLElement): {
        top: number;
        left: number;
    };
}
