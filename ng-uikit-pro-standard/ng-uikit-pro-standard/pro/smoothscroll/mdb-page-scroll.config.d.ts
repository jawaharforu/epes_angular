export declare abstract class EasingLogic {
    /**
    * Examples may be found at https://github.com/gdsmith/jquery.easing/blob/master/jquery.easing.js
    * or http://gizma.com/easing/
    * @param t current time
    * @param b beginning value
    * @param c change In value
    * @param d duration
    */
    abstract ease(t: number, b: number, c: number, d: number): number;
}
export declare type PageScrollTarget = HTMLElement | string;
export declare type PageScrollingViews = HTMLElement | Document | HTMLBodyElement | Node;
export declare class PageScrollConfig {
    /**
    * The number of milliseconds to wait till updating the scroll position again.
    * Small amounts may produce smoother animations but require more processing power.
    */
    static _interval: number;
    /**
    * The amount of pixels that need to be between the current scrollTop/scrollLeft position
    * and the target position the cause a scroll animation. In case distance is below
    * this threshold, an immediate jump will be performed.
    * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
    * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
    */
    static _minScrollDistance: number;
    /**
    * Name of the default namespace.
    */
    static _defaultNamespace: string;
    /**
    * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
    * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
    */
    static defaultIsVerticalScrolling: boolean;
    /**
    * How many console logs should be emitted.
    * 0: None
    * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
    * 5: All scroll position values that get set
    */
    static _logLevel: number;
    /**
    * The duration how long a scrollTo animation should last by default.
    * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
    */
    static defaultDuration: number;
    /**
    * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
    * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
    */
    static defaultScrollOffset: number;
    /**
    * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
    * not (false). Default is false.
    * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
    * the scrollingView container element. Along the way the offset positions of the relative positioned
    * (position: relative) elements will be taken into account for calculating the target elements position.
    */
    static defaultAdvancedInlineOffsetCalculation: boolean;
    /**
    * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
    */
    static _interruptEvents: string[];
    /**
    * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
    * scroll animation.
    */
    static _interruptKeys: number[];
    /**
    * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
    * interrupting event while a scroll animation takes place, the scroll animation stops.
    */
    static defaultInterruptible: boolean;
    private static _easingLogic;
    static defaultEasingLogic: EasingLogic;
}
