/**
* Created by sebastianfuss on 29.08.16.
*/
import { EventEmitter } from '@angular/core';
import { EasingLogic, PageScrollTarget, PageScrollingViews } from './mdb-page-scroll.config';
/**
* An Interface specifying the possible options to be passed into the newInstance() factory method
*/
export interface PageScrollOptions {
    /**
     * The document object of the current app
     */
    document: Document;
    /**
     * A specification of the DOM element to scroll to. Either a string referring to an
     * object id (`#target`) or a HTMLElement that is attached to the document's DOM tree.
     */
    scrollTarget: PageScrollTarget;
    /**
     * Array of HTMLElements or the body object that should be manipulated while performing
     * the scroll animation.
     */
    scrollingViews?: PageScrollingViews[];
    /**
     * Namespace of the scroll animation
     */
    namespace?: string;
    /**
     * Whether that scroll animation scrolls in vertical direction (true) or
     * horizontal (false, default value)
     */
    verticalScrolling?: boolean;
    /**
     * Whether the an advanced offset calculation for inline scrollings should be applied
     */
    advancedInlineOffsetCalculation?: boolean;
    /**
     * Offset of target elements location and scroll location
     */
    pageScrollOffset?: number;
    /**
     * Whether the scroll animation should be interruptible
     */
    pageScrollInterruptible?: boolean;
    /**
     * The easing logic to be used
     */
    pageScrollEasingLogic?: EasingLogic;
    /**
     * Duration in milliseconds the scroll animation should last
     */
    pageScrollDuration?: number;
    /**
     * Maximum speed to be used for the scroll animation. Only taken
     * into account of no pageScrollDuration is provided
     */
    pageScrollSpeed?: number;
    /**
     * A listener to be called whenever the scroll animation stops
     */
    pageScrollFinishListener?: EventEmitter<boolean>;
}
/**
* Represents a scrolling action
*/
export declare class PageScrollInstance {
    /**
     * These properties will be set during instance construction and default to their defaults from PageScrollConfig
     */
    private _namespace;
    private document;
    private _scrollingViews;
    private _isInlineScrolling;
    private _scrollTarget;
    private _verticalScrolling;
    private _offset;
    private _duration;
    private _speed;
    private _easingLogic;
    private _interruptible;
    private _interruptListener;
    private _advancedInlineOffsetCalculation;
    private _pageScrollFinish;
    /**
     * These properties will be set/manipulated if the scroll animation starts
     */
    private _startScrollPosition;
    private _targetScrollPosition;
    private _distanceToScroll;
    private _startTime;
    private _endTime;
    private _executionDuration;
    private _interruptListenersAttached;
    private _timer;
    static simpleInstance(document: Document, scrollTarget: PageScrollTarget, namespace?: string): PageScrollInstance;
    static newInstance(options: PageScrollOptions | any): any;
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param verticalScrolling
     * @param namespace Optional namespace to group scroll animations logically
     *
     **/
    static simpleDirectionInstance(document: Document, scrollTarget: PageScrollTarget, verticalScrolling: boolean, namespace?: string): PageScrollInstance;
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param namespace Optional namespace to group scroll animations logically
     *
     */
    static simpleInlineInstance(document: Document, scrollTarget: PageScrollTarget, scrollingView: PageScrollingViews, namespace?: string): PageScrollInstance;
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingView The element that should be scrolled
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param namespace Optional namespace to group scroll animations logically
     *
     * @deprecated Use {@link newInstance(options: PageScrollOptions)}
     */
    static simpleInlineDirectionInstance(document: Document, scrollTarget: PageScrollTarget, scrollingView: PageScrollingViews, verticalScrolling: boolean, namespace?: string): PageScrollInstance;
    /**
     *
     * @param document The document that contains the body to be scrolled and the scrollTarget elements
     * @param scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param namespace Optional namespace to group scroll animations logically
     * @param verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     */
    static advancedInstance(document: Document, scrollTarget: PageScrollTarget, scrollingViews?: PageScrollingViews[], namespace?: string, verticalScrolling?: boolean, pageScrollOffset?: number, pageScrollInterruptible?: boolean, pageScrollEasingLogic?: EasingLogic, pageScrollDuration?: number, pageScrollFinishListener?: EventEmitter<boolean>): PageScrollInstance;
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {@link PageScrollInstance#simpleInstance}
     *      {@link PageScrollInstance#newInstance}
     * @param namespace
     * @param document
     */
    constructor(namespace: string, document: Document);
    getScrollPropertyValue(scrollingView: any): number;
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     */
    extractScrollTargetPosition(): {
        top: number;
        left: number;
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     */
    getCurrentOffset(): number;
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param position
     * @return true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    setScrollPosition(position: number): boolean;
    /**
     * Trigger firing a animation finish event
     * @param value Whether the animation finished at the target (true) or got interrupted (false)
     */
    fireEvent(value: boolean): void;
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param interruptReporter
     */
    attachInterruptListeners(interruptReporter: InterruptReporter): void;
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     */
    detachInterruptListeners(): void;
    readonly namespace: string;
    readonly scrollTarget: PageScrollTarget;
    readonly verticalScrolling: boolean;
    readonly scrollingViews: any[];
    startScrollPosition: number;
    targetScrollPosition: number;
    distanceToScroll: number;
    executionDuration: number;
    readonly duration: number;
    readonly speed: number;
    readonly easingLogic: EasingLogic;
    readonly interruptible: boolean;
    startTime: number;
    endTime: number;
    timer: any;
    readonly interruptListenersAttached: boolean;
}
/**
* An Interface a listener should implement to be notified about possible interrupt events
* that happened due to user interaction while a scroll animation takes place.
*
* The PageScrollService provides an implementation to a PageScrollInstance to be notified
* about scroll animation interrupts and stop related animations.
*/
export interface InterruptReporter {
    report: (event: Event, pageScrollInstance: PageScrollInstance) => any;
}
