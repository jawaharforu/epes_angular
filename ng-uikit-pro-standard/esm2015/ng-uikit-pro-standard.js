import { ApplicationRef, Attribute, ChangeDetectionStrategy, ChangeDetectorRef, Component, ComponentFactoryResolver, ContentChild, ContentChildren, Directive, ElementRef, EventEmitter, Host, HostBinding, HostListener, Inject, Injectable, InjectionToken, Injector, Input, NO_ERRORS_SCHEMA, NgModule, NgZone, Optional, Output, PLATFORM_ID, ReflectiveInjector, Renderer, Renderer2, SecurityContext, SkipSelf, TemplateRef, ViewChild, ViewChildren, ViewContainerRef, ViewEncapsulation, forwardRef, isDevMode } from '@angular/core';
import { CommonModule, isPlatformBrowser, isPlatformServer } from '@angular/common';
import { animate, state, style, transition, trigger } from '@angular/animations';
import { Observable, Subject, timer } from 'rxjs';
import { DOCUMENT, DomSanitizer } from '@angular/platform-browser';
import { FormControl, FormsModule, NG_VALIDATORS, NG_VALUE_ACCESSOR, NgModel } from '@angular/forms';
import { catchError, map } from 'rxjs/operators';
import { Headers, Http, HttpModule, RequestOptions } from '@angular/http';
import 'hammerjs';
import { NavigationCancel, NavigationEnd, NavigationError, Router, RouterLinkWithHref } from '@angular/router';
import { __decorate, __metadata } from 'tslib';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SBItemBodyComponent {
    /**
     * @param {?} renderer
     */
    constructor(renderer) {
        this.renderer = renderer;
        this.height = '0';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        let /** @type {?} */ height = '0';
        if (!collapsed) {
            this.renderer.setStyle(this.bodyEl.nativeElement, 'height', 'auto');
            height = this.bodyEl.nativeElement.offsetHeight + 'px';
            this.renderer.setStyle(this.bodyEl.nativeElement, 'height', '0');
        }
        setTimeout(() => this.renderer.setStyle(this.bodyEl.nativeElement, 'height', height), 50);
    }
}
SBItemBodyComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemBody',
                selector: 'mdb-item-body',
                template: "<div #body class=\"sb-item-body\" [style.height]=\"height\"> <div class=\"card-body\"> <ng-content></ng-content> </div> </div>"
            },] },
];
/** @nocollapse */
SBItemBodyComponent.ctorParameters = () => [
    { type: Renderer2, },
];
SBItemBodyComponent.propDecorators = {
    "bodyEl": [{ type: ViewChild, args: ['body',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const sbConfig = {
    serviceInstance: new Object()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SBItemComponent {
    constructor() {
        this.collapsed = true;
        this.squeezebox = sbConfig.serviceInstance;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.body.toggle(this.collapsed);
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    toggle(collapsed) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    applyToggle(collapsed) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    }
}
SBItemComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItem',
                selector: 'mdb-item',
                template: "<div class=\"card\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\"> <ng-content></ng-content> </div>"
            },] },
];
/** @nocollapse */
SBItemComponent.ctorParameters = () => [];
SBItemComponent.propDecorators = {
    "collapsed": [{ type: Input },],
    "body": [{ type: ContentChild, args: [SBItemBodyComponent,] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SBItemHeadComponent {
    /**
     * @param {?} sbItem
     */
    constructor(sbItem) {
        this.sbItem = sbItem;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggleClick(event) {
        event.preventDefault();
        this.sbItem.collapsed = !this.sbItem.collapsed;
        this.sbItem.toggle(this.sbItem.collapsed);
    }
}
SBItemHeadComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'mdb-item-head',
                template: "<div class=\"card-header\"> <a role=\"button\" (click)=\"toggleClick($event)\"> <h5 class=\"mb-0\"> <ng-content></ng-content> <i class=\"fa fa-angle-down rotate-icon\"></i> </h5> </a> </div>"
            },] },
];
/** @nocollapse */
SBItemHeadComponent.ctorParameters = () => [
    { type: SBItemComponent, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SqueezeBoxComponent {
    constructor() {
        this.multiple = true;
        sbConfig.serviceInstance = this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    didItemToggled(item) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item) {
                    i.applyToggle(true);
                }
            });
        }
    }
}
SqueezeBoxComponent.decorators = [
    { type: Component, args: [{
                exportAs: 'squeezebox',
                selector: 'mdb-squeezebox',
                template: "<div class=\"accordion\"> <ng-content></ng-content> </div>"
            },] },
];
/** @nocollapse */
SqueezeBoxComponent.ctorParameters = () => [];
SqueezeBoxComponent.propDecorators = {
    "multiple": [{ type: Input },],
    "items": [{ type: ContentChildren, args: [forwardRef(() => SBItemComponent),] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const SQUEEZEBOX_COMPONENTS = [SqueezeBoxComponent, SBItemComponent, SBItemHeadComponent, SBItemBodyComponent];
class AccordionModule {
}
AccordionModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SQUEEZEBOX_COMPONENTS],
                exports: [SQUEEZEBOX_COMPONENTS]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * The OverlayContainer is the container in which all overlays will load.
 * It should be provided in the root component to ensure it is properly shared.
 */
class OverlayContainer {
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    getContainerElement() {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    }
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    _createContainer() {
        const /** @type {?} */ container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
class OverlayRef {
    /**
     * @param {?} _portalHost
     */
    constructor(_portalHost) {
        this._portalHost = _portalHost;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    attach(portal, newestOnTop) {
        return this._portalHost.attach(portal, newestOnTop);
    }
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    detach() {
        return this._portalHost.detach();
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 * @template T
 */

/**
 * A `ComponentPortal` is a portal that instantiates some Component upon attachment.
 * @template T
 */
class ComponentPortal {
    /**
     * @param {?} component
     * @param {?} injector
     */
    constructor(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    attach(host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    }
    /**
     * Detach this portal from its host
     * @return {?}
     */
    detach() {
        const /** @type {?} */ host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    }
    /**
     * Whether this portal is attached to a host.
     * @return {?}
     */
    get isAttached() {
        return this._attachedHost != null;
    }
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    setAttachedHost(host) {
        this._attachedHost = host;
    }
}
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
class BasePortalHost {
    constructor() {
        this.setToNullValue = null;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    attach(portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    }
    /**
     * @return {?}
     */
    detach() {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            // this._disposeFn = null;
            this._disposeFn = this.setToNullValue;
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    setDisposeFn(fn) {
        this._disposeFn = fn;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A PortalHost for attaching portals to an arbitrary DOM element outside of the Angular
 * application context.
 *
 * This is the only part of the portal core that directly touches the DOM.
 */
class DomPortalHost extends BasePortalHost {
    /**
     * @param {?} _hostDomElement
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     */
    constructor(_hostDomElement, _componentFactoryResolver, _appRef) {
        super();
        this._hostDomElement = _hostDomElement;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    attachComponentPortal(portal, newestOnTop) {
        const /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        let /** @type {?} */ componentRef;
        // If the portal specifies a ViewContainerRef, we will use that as the attachment point
        // for the component (in terms of Angular's component tree, not rendering).
        // When the ViewContainerRef is missing, we use the factory to create the component directly
        // and then manually attach the ChangeDetector for that component to the application (which
        // happens automatically when using a ViewContainer).
        componentRef = componentFactory.create(portal.injector);
        // When creating a component outside of a ViewContainer, we need to manually register
        // its ChangeDetector with the application. This API is unfortunately not yet published
        // in Angular core. The change detector must also be deregistered when the component
        // is destroyed to prevent memory leaks.
        this._appRef.attachView(componentRef.hostView);
        this.setDisposeFn(() => {
            this._appRef.detachView(componentRef.hostView);
            componentRef.destroy();
        });
        // At this point the component has been instantiated, so we move it to the location in the DOM
        // where we want it to be rendered.
        if (newestOnTop) {
            this._hostDomElement.insertBefore(this._getComponentRootNode(componentRef), this._hostDomElement.firstChild);
        }
        else {
            this._hostDomElement.appendChild(this._getComponentRootNode(componentRef));
        }
        return componentRef;
    }
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    _getComponentRootNode(componentRef) {
        return /** @type {?} */ ((/** @type {?} */ (componentRef.hostView)).rootNodes[0]);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Service to create Overlays. Overlays are dynamically added pieces of floating UI, meant to be
 * used as a low-level building building block for other components. Dialogs, tooltips, menus,
 * selects, etc. can all be built using overlays. The service should primarily be used by authors
 * of re-usable components rather than developers building end-user applications.
 *
 * An overlay *is* a PortalHost, so any kind of Portal can be loaded into one.
 */
class Overlay {
    /**
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     */
    constructor(_overlayContainer, _componentFactoryResolver, _appRef) {
        this._overlayContainer = _overlayContainer;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._appRef = _appRef;
        this._paneElements = {};
    }
    /**
     * Creates an overlay.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} A reference to the created overlay.
     */
    create(positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    }
    /**
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    getPaneElement(positionClass, overlayContainer) {
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    }
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    _createPaneElement(positionClass, overlayContainer) {
        const /** @type {?} */ pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    }
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    _createPortalHost(pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    }
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    _createOverlayRef(pane) {
        return new OverlayRef(this._createPortalHost(pane));
    }
}
Overlay.decorators = [
    { type: Injectable },
];
/** @nocollapse */
Overlay.ctorParameters = () => [
    { type: OverlayContainer, },
    { type: ComponentFactoryResolver, },
    { type: ApplicationRef, },
];
/**
 * Providers for Overlay and its related injectables.
 */
const OVERLAY_PROVIDERS = [
    Overlay,
    OverlayContainer,
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration for an individual toast.
 * @record
 */

/**
 * @record
 */

/**
 * Remove warning message from angular-cli
 */
class GlobalConfig {
}
/**
 * Everything a toast needs to launch
 */
class ToastPackage {
    /**
     * @param {?} toastId
     * @param {?} config
     * @param {?} message
     * @param {?} title
     * @param {?} toastType
     * @param {?} toastRef
     */
    constructor(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new Subject();
        this._onAction = new Subject();
    }
    /**
     * Fired on click
     * @return {?}
     */
    triggerTap() {
        this._onTap.next();
        this._onTap.complete();
    }
    /**
     * @return {?}
     */
    onTap() {
        return this._onTap.asObservable();
    }
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    triggerAction(action) {
        this._onAction.next(action);
        this._onAction.complete();
    }
    /**
     * @return {?}
     */
    onAction() {
        return this._onAction.asObservable();
    }
}
const tsConfig = {
    serviceInstance: new Object()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastComponent {
    /**
     * @param {?} toastPackage
     * @param {?} appRef
     */
    constructor(toastPackage, appRef) {
        this.toastPackage = toastPackage;
        this.appRef = appRef;
        /**
         * width of progress bar
         */
        this.width = -1;
        /**
         * a combination of toast type and options.toastClass
         */
        this.toastClasses = '';
        /**
         * controls animation
         */
        this.state = 'inactive';
        this.toastService = tsConfig.serviceInstance;
        this.message = toastPackage.message;
        this.title = toastPackage.title;
        this.options = toastPackage.config;
        this.toastClasses = `${toastPackage.toastType} ${toastPackage.config.toastClass}`;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(() => {
            this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(() => {
            this.remove();
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    }
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    activateToast() {
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout(() => {
                this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(() => this.updateProgress(), 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    }
    /**
     * updates progress bar width
     * @return {?}
     */
    updateProgress() {
        if (this.width === 0) {
            return;
        }
        const /** @type {?} */ now = new Date().getTime();
        const /** @type {?} */ remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    }
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    remove() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(() => this.toastService.remove(this.toastPackage.toastId), 300);
    }
    /**
     * @return {?}
     */
    tapToast() {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    }
    /**
     * @return {?}
     */
    stickAround() {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    }
    /**
     * @return {?}
     */
    delayedHideToast() {
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(() => this.remove(), this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval(() => this.updateProgress(), 10);
        }
    }
}
ToastComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-toast-component',
                template: "<button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\"> &times; </button> <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\"> {{title}} </div> <div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\"> </div> <div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\"> {{message}} </div> <div *ngIf=\"options.progressBar\"> <div class=\"toast-progress\" [style.width.%]=\"width\"></div> </div>",
                animations: [
                    trigger('flyInOut', [
                        state('inactive', style({
                            display: 'none',
                            opacity: 0
                        })),
                        state('active', style({ opacity: .5 })),
                        state('removed', style({ opacity: 0 })),
                        transition('inactive => active', animate('300ms ease-in')),
                        transition('active => removed', animate('300ms ease-in')),
                    ]),
                ],
            },] },
];
/** @nocollapse */
ToastComponent.ctorParameters = () => [
    { type: ToastPackage, },
    { type: ApplicationRef, },
];
ToastComponent.propDecorators = {
    "toastClasses": [{ type: HostBinding, args: ['class',] },],
    "state": [{ type: HostBinding, args: ['@flyInOut',] },],
    "tapToast": [{ type: HostListener, args: ['click',] },],
    "stickAround": [{ type: HostListener, args: ['mouseenter',] },],
    "delayedHideToast": [{ type: HostListener, args: ['mouseleave',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastContainerDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    getContainerElement() {
        return this.el.nativeElement;
    }
}
ToastContainerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbToastContainer]',
                exportAs: 'mdb-toast-container',
            },] },
];
/** @nocollapse */
ToastContainerDirective.ctorParameters = () => [
    { type: ElementRef, },
];
class ToastContainerModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    }
}
ToastContainerModule.decorators = [
    { type: NgModule, args: [{
                exports: [ToastContainerDirective],
                declarations: [ToastContainerDirective],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to a toast opened via the Toast service.
 * @template T
 */
class ToastRef {
    /**
     * @param {?} _overlayRef
     */
    constructor(_overlayRef) {
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the toast has finished closing.
         */
        this._afterClosed = new Subject();
        this._activate = new Subject();
        this._manualClose = new Subject();
    }
    /**
     * @return {?}
     */
    manualClose() {
        this._manualClose.next();
        this._manualClose.complete();
    }
    /**
     * @return {?}
     */
    manualClosed() {
        return this._manualClose.asObservable();
    }
    /**
     * Close the toast.
     * @return {?}
     */
    close() {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    }
    /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    afterClosed() {
        return this._afterClosed.asObservable();
    }
    /**
     * @return {?}
     */
    isInactive() {
        return this._activate.isStopped;
    }
    /**
     * @return {?}
     */
    activate() {
        this._activate.next();
        this._activate.complete();
    }
    /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    afterActivate() {
        return this._activate.asObservable();
    }
}
/**
 * Custom injector type specifically for instantiating components with a toast.
 */
class ToastInjector {
    /**
     * @param {?} _toastPackage
     * @param {?} _parentInjector
     */
    constructor(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    get(token, notFoundValue) {
        if (token === ToastPackage && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TOAST_CONFIG = new InjectionToken('ToastConfig');

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class ToastService {
    /**
     * @param {?} toastConfig
     * @param {?} overlay
     * @param {?} _injector
     * @param {?} sanitizer
     */
    constructor(
    // @Inject(TOAST_CONFIG) public toastConfig: GlobalConfig,
    toastConfig, overlay, _injector, sanitizer) {
        this.toastConfig = toastConfig;
        this.overlay = overlay;
        this._injector = _injector;
        this.sanitizer = sanitizer;
        this.index = 0;
        this.previousToastMessage = '';
        this.currentlyActive = 0;
        this.toasts = [];
        tsConfig.serviceInstance = this;
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return toastConfig && source !== undefined ? source : defaultValue;
        }
        this.toastConfig = this.applyConfig(toastConfig);
        // Global
        this.toastConfig.maxOpened = use(this.toastConfig.maxOpened, 0);
        this.toastConfig.autoDismiss = use(this.toastConfig.autoDismiss, false);
        this.toastConfig.newestOnTop = use(this.toastConfig.newestOnTop, true);
        this.toastConfig.preventDuplicates = use(this.toastConfig.preventDuplicates, false);
        if (!this.toastConfig.iconClasses) {
            this.toastConfig.iconClasses = {};
        }
        this.toastConfig.iconClasses.error = this.toastConfig.iconClasses.error || 'toast-error';
        this.toastConfig.iconClasses.info = this.toastConfig.iconClasses.info || 'toast-info';
        this.toastConfig.iconClasses.success = this.toastConfig.iconClasses.success || 'toast-success';
        this.toastConfig.iconClasses.warning = this.toastConfig.iconClasses.warning || 'toast-warning';
        // Individual
        this.toastConfig.timeOut = use(this.toastConfig.timeOut, 5000);
        this.toastConfig.closeButton = use(this.toastConfig.closeButton, false);
        this.toastConfig.extendedTimeOut = use(this.toastConfig.extendedTimeOut, 1000);
        this.toastConfig.progressBar = use(this.toastConfig.progressBar, false);
        this.toastConfig.enableHtml = use(this.toastConfig.enableHtml, false);
        this.toastConfig.toastClass = use(this.toastConfig.toastClass, 'toast');
        this.toastConfig.positionClass = use(this.toastConfig.positionClass, 'toast-top-right');
        this.toastConfig.titleClass = use(this.toastConfig.titleClass, 'toast-title');
        this.toastConfig.messageClass = use(this.toastConfig.messageClass, 'toast-message');
        this.toastConfig.tapToDismiss = use(this.toastConfig.tapToDismiss, true);
        this.toastConfig.toastComponent = use(this.toastConfig.toastComponent, ToastComponent);
        this.toastConfig.onActivateTick = use(this.toastConfig.onActivateTick, false);
    }
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @param {?=} type
     * @return {?}
     */
    show(message, title, override, type = '') {
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    success(message, title, override) {
        //   const type = this.toastConfig.iconClasses.success;
        const /** @type {?} */ type = this.toastConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    error(message, title, override) {
        //   const type = this.toastConfig.iconClasses.error;
        const /** @type {?} */ type = this.toastConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    info(message, title, override) {
        //   const type = this.toastConfig.iconClasses.info;
        const /** @type {?} */ type = this.toastConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    warning(message, title, override) {
        //   const type = this.toastConfig.iconClasses.warning;
        const /** @type {?} */ type = this.toastConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    }
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    clear(toastId) {
        // Call every toastRef manualClose function
        let /** @type {?} */ toast;
        for (toast of this.toasts) {
            if (toastId !== undefined) {
                if (toast.toastId === toastId) {
                    toast.toastRef.manualClose();
                    return;
                }
            }
            else {
                toast.toastRef.manualClose();
            }
        }
    }
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    remove(toastId) {
        // const found = this._findToast(toastId);
        const /** @type {?} */ found = this._findToast(toastId);
        if (!found) {
            return false;
        }
        found.activeToast.toastRef.close();
        this.toasts.splice(found.index, 1);
        this.currentlyActive = this.currentlyActive - 1;
        if (!this.toastConfig.maxOpened || !this.toasts.length) {
            return false;
        }
        if (this.currentlyActive <= +this.toastConfig.maxOpened && this.toasts[this.currentlyActive]) {
            // const p = this.toasts[this.currentlyActive].toastRef;
            const /** @type {?} */ p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    }
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    isDuplicate(message) {
        for (let /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    }
    /**
     * create a clone of global config and apply individual settings
     * @param {?=} override
     * @return {?}
     */
    applyConfig(override = {}) {
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return override && source !== undefined ? source : defaultValue;
        }
        const /** @type {?} */ current = Object.assign({}, this.toastConfig);
        current.closeButton = use(override.closeButton, current.closeButton);
        current.extendedTimeOut = use(override.extendedTimeOut, current.extendedTimeOut);
        current.progressBar = use(override.progressBar, current.progressBar);
        current.timeOut = use(override.timeOut, current.timeOut);
        current.enableHtml = use(override.enableHtml, current.enableHtml);
        current.toastClass = use(override.toastClass, current.toastClass);
        current.positionClass = use(override.positionClass, current.positionClass);
        current.titleClass = use(override.titleClass, current.titleClass);
        current.messageClass = use(override.messageClass, current.messageClass);
        current.tapToDismiss = use(override.tapToDismiss, current.tapToDismiss);
        current.toastComponent = use(override.toastComponent, current.toastComponent);
        current.onActivateTick = use(override.onActivateTick, current.onActivateTick);
        return current;
    }
    /**
     * Find toast object by id
     * @param {?} toastId
     * @return {?}
     */
    _findToast(toastId) {
        for (let /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    }
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    _buildNotification(toastType, message, title, config) {
        // max opened and auto dismiss = true
        if (this.toastConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        let /** @type {?} */ keepInactive = false;
        if (this.toastConfig.maxOpened && this.currentlyActive >= this.toastConfig.maxOpened) {
            keepInactive = true;
            if (this.toastConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        const /** @type {?} */ overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        // let sanitizedMessage = message;
        let /** @type {?} */ sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(SecurityContext.HTML, message);
        }
        const /** @type {?} */ toastRef = new ToastRef(overlayRef);
        const /** @type {?} */ toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        // const ins: ActiveToast = {
        const /** @type {?} */ ins = {
            toastId: this.index,
            message,
            toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterActivate(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        const /** @type {?} */ toastInjector = new ToastInjector(toastPackage, this._injector);
        const /** @type {?} */ component = new ComponentPortal(config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout(() => {
                ins.toastRef.activate();
                this.currentlyActive = this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    }
}
ToastService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ToastService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [TOAST_CONFIG,] },] },
    { type: Overlay, },
    { type: Injector, },
    { type: DomSanitizer, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ToastModule {
    /**
     * @param {?} parentModule
     */
    constructor(parentModule) {
        if (parentModule) {
            throw new Error('ToastModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: ToastModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                OverlayContainer,
                Overlay,
                ToastService,
            ]
        };
    }
}
ToastModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [ToastComponent],
                declarations: [ToastComponent],
                entryComponents: [ToastComponent],
            },] },
];
/** @nocollapse */
ToastModule.ctorParameters = () => [
    { type: ToastModule, decorators: [{ type: Optional }, { type: SkipSelf },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// SideNav
const slideIn = trigger('slideIn', [
    state('inactive', style({ opacity: 0, transform: 'translateX(-300%)' })),
    state('active', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
const fadeIn = trigger('fadeIn', [
    state('inactive', style({ opacity: 0 })),
    state('active', style({ opacity: 1 })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
const slideOut = trigger('slideOut', [
    state('inactive', style({ opacity: 0, transform: 'translateX(-300%)' })),
    state('active', style({ opacity: 1, transform: 'translateX(0)' })),
    transition('inactive => active', animate('500ms ease')),
    transition('active => inactive', animate('500ms ease')),
]);
const flipState = trigger('flipState', [
    state('active', style({ transform: 'rotateY(179.9deg)' })),
    state('inactive', style({ transform: 'rotateY(0)' })),
]);
// Rotating animation animation
const turnState = trigger('turnState', [
    state('active', style({ transform: 'rotateY(179.9deg)' })),
    state('inactive', style({ transform: 'rotateY(0)' })),
]);
// Social reveal animation
const iconsState = trigger('iconsState', [
    state('isactive', style({ visibility: 'visible', transform: 'translate(-6%)' })),
    state('isnotactive', style({ visibility: 'hidden', transform: 'translate(27%)' })),
    transition('isactive => isnotactive', animate('100ms ease-in')),
    transition('isnotactive => isactive', animate('200ms ease-out')),
]);
// Reveal animation animation
const socialsState = trigger('socialsState', [
    state('active', style({ visibility: 'visible', transform: 'translateY(-100%)' })),
    state('inactive', style({ visibility: 'hidden', transform: 'translateY(0)' })),
    transition('* => void', animate('200ms ease-in')),
    transition('void => *', animate('200ms ease-out')),
]);
// image popup
// export const zoomState: any = trigger('zoomState', [
//   state('active', style({ transform: 'scale(1, 1)', cursor: 'zoom-out' })),
//   state('inactive', style({ transform: 'scale(0.9, 0.9)', cursor: 'zoom-in' })),
//   transition('active => inactive', animate('300ms ease-in')),
//   transition('inactive => active', animate('300ms ease-out')),
// ]);
// export const restartState: any = trigger('restartState', [
//   state('inactive', style({ transform: 'scale(0.9, 0.9)' })),
// ]);
// alerts
const flyInOut = trigger('flyInOut', [
    state('inactive', style({ display: 'none', opacity: 0.7 })),
    state('active', style({ opacity: 0.7 })),
    state('removed', style({ opacity: 0 })),
    transition('inactive => active', animate('300ms ease-in')),
    transition('active => removed', animate('300ms ease-in')),
]);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class CompleterListItemComponent {
    constructor() {
        this.parts = [];
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        const /** @type {?} */ matchStr = this.text.toLowerCase();
        let /** @type {?} */ matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        let /** @type {?} */ startIndex = 0;
        while (matchPos >= 0) {
            const /** @type {?} */ matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                const /** @type {?} */ matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    }
}
CompleterListItemComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-completer-list-item',
                template: "<span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" > <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span> </span> "
            },] },
];
/** @nocollapse */
CompleterListItemComponent.propDecorators = {
    "text": [{ type: Input },],
    "searchStr": [{ type: Input },],
    "matchClass": [{ type: Input },],
    "type": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @record
 */

class MdbCompleterDirective {
    constructor() {
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.opened = new EventEmitter();
        this._hasHighlighted = false;
        this._hasSelected = false;
        this._cancelBlur = false;
        this._isOpen = false;
        this.setToNullValue = null;
    }
    /**
     * @param {?} list
     * @return {?}
     */
    registerList(list) {
        this.list = list;
    }
    /**
     * @param {?} dropdown
     * @return {?}
     */
    registerDropdown(dropdown) {
        this.dropdown = dropdown;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onHighlighted(item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    }
    /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    onSelected(item, clearList = true) {
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (this._hasSelected) {
            // this.selected.emit(null);
            this.selected.emit(this.setToNullValue);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlighted = false;
        this.isOpen = false;
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    }
    /**
     * @return {?}
     */
    prevRow() {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    }
    /**
     * @return {?}
     */
    hasHighlighted() {
        return this._hasHighlighted;
    }
    /**
     * @param {?} cancel
     * @return {?}
     */
    cancelBlur(cancel) {
        this._cancelBlur = cancel;
    }
    /**
     * @return {?}
     */
    isCancelBlur() {
        return this._cancelBlur;
    }
    /**
     * @return {?}
     */
    open() {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    }
    /**
     * @return {?}
     */
    get isOpen() {
        return this._isOpen;
    }
    /**
     * @param {?} open
     * @return {?}
     */
    set isOpen(open) {
        this._isOpen = open;
        this.opened.emit(this._isOpen);
        if (this.list) {
            this.list.isOpen(open);
        }
    }
    /**
     * @return {?}
     */
    get autoHighlightIndex() {
        return this._autoHighlightIndex;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set autoHighlightIndex(index) {
        this._autoHighlightIndex = index;
    }
    /**
     * @return {?}
     */
    get hasSelected() {
        return this._hasSelected;
    }
}
MdbCompleterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCompleter]',
            },] },
];
/** @nocollapse */
MdbCompleterDirective.propDecorators = {
    "selected": [{ type: Output },],
    "highlighted": [{ type: Output },],
    "opened": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const MAX_CHARS = 524288; // the default max length per the html maxlength attribute
const MIN_SEARCH_LENGTH = 3;
const PAUSE = 100;
const TEXT_SEARCHING = 'Searching...';
const TEXT_NO_RESULTS = 'No results found';
const CLEAR_TIMEOUT = 50;
/**
 * @param {?} value
 * @return {?}
 */
function isNil(value) {
    return typeof value === 'undefined' || value === null;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class CompleterBaseData extends Subject {
    constructor() {
        super();
    }
    /**
     * @return {?}
     */
    cancel() { }
    /**
     * @param {?} searchFields
     * @return {?}
     */
    searchFields(searchFields) {
        this._searchFields = searchFields;
        return this;
    }
    /**
     * @param {?} titleField
     * @return {?}
     */
    titleField(titleField) {
        this._titleField = titleField;
        return this;
    }
    /**
     * @param {?} descriptionField
     * @return {?}
     */
    descriptionField(descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    }
    /**
     * @param {?} imageField
     * @return {?}
     */
    imageField(imageField) {
        this._imageField = imageField;
        return this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        // let image: string = null;
        let /** @type {?} */ image = null;
        let /** @type {?} */ formattedText;
        // let formattedDesc: string;
        let /** @type {?} */ formattedDesc;
        if (this._titleField) {
            formattedText = this.extractTitle(data);
        }
        else {
            formattedText = data;
        }
        if (this._descriptionField) {
            formattedDesc = this.extractValue(data, this._descriptionField);
        }
        if (this._imageField) {
            image = this.extractValue(data, this._imageField);
        }
        if (isNil(formattedText)) {
            return null;
        }
        return /** @type {?} */ ({
            title: formattedText,
            description: formattedDesc,
            image: image,
            originalObject: data
        });
    }
    /**
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    extractMatches(data, term) {
        let /** @type {?} */ matches = [];
        const /** @type {?} */ searchFields = this._searchFields ? this._searchFields.split(',') : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== '') {
            matches = data.filter(item => {
                const /** @type {?} */ values = searchFields ?
                    searchFields.map(searchField => this.extractValue(item, searchField)).filter(value => !!value) : [item];
                return values.some(value => value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0);
            });
        }
        else {
            matches = data;
        }
        return matches;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    extractTitle(item) {
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(',')
            .map((field) => {
            return this.extractValue(item, field);
        })
            .reduce((acc, titlePart) => acc ? `${acc} ${titlePart}` : titlePart);
    }
    /**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    extractValue(obj, key) {
        let /** @type {?} */ keys;
        let /** @type {?} */ result;
        if (key) {
            keys = key.split('.');
            result = obj;
            for (let /** @type {?} */ i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    }
    /**
     * @param {?} matches
     * @return {?}
     */
    processResults(matches) {
        let /** @type {?} */ i;
        const /** @type {?} */ results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                const /** @type {?} */ item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LocalData extends CompleterBaseData {
    constructor() {
        super();
    }
    /**
     * @param {?} data
     * @return {?}
     */
    data(data) {
        if (data instanceof Observable) {
            (/** @type {?} */ (data)).subscribe((res) => {
                this._data = res;
                if (this.savedTerm) {
                    this.search(this.savedTerm);
                }
            });
        }
        else {
            this._data = /** @type {?} */ (data);
        }
        return this;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            const /** @type {?} */ matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        return super.convertToItem(data);
    }
}
LocalData.decorators = [
    { type: Injectable },
];
/** @nocollapse */
LocalData.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RemoteData extends CompleterBaseData {
    /**
     * @param {?} http
     */
    constructor(http$$1) {
        super();
        this.http = http$$1;
        this.setToNullValue = null;
        this._urlFormater = this.setToNullValue;
        this._dataField = null;
    }
    /**
     * @param {?} remoteUrl
     * @return {?}
     */
    remoteUrl(remoteUrl) {
        this._remoteUrl = remoteUrl;
        return this;
    }
    /**
     * @param {?} urlFormater
     * @return {?}
     */
    urlFormater(urlFormater) {
        this._urlFormater = urlFormater;
    }
    /**
     * @param {?} dataField
     * @return {?}
     */
    dataField(dataField) {
        this._dataField = dataField;
    }
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     * @param {?} headers
     * @return {?}
     */
    headers(headers) {
        this._headers = headers;
    }
    /**
     * @param {?} requestOptions
     * @return {?}
     */
    requestOptions(requestOptions) {
        this._requestOptions = requestOptions;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        this.cancel();
        // let params = {};
        let /** @type {?} */ url = '';
        if (this._urlFormater) {
            url = this._urlFormater(term);
        }
        else {
            url = this._remoteUrl + encodeURIComponent(term);
        }
        /*
             * If requestOptions are provided, they will override anything set in headers.
             *
             * If no requestOptions are provided, a new RequestOptions object will be instantiated,
             * and either the provided headers or a new Headers() object will be sent.
             */
        if (!this._requestOptions) {
            this._requestOptions = new RequestOptions();
            this._requestOptions.headers = this._headers || new Headers();
        }
        this.remoteSearch = this.http.get(url, this._requestOptions).pipe(map((res) => res.json()), map((data) => {
            const /** @type {?} */ matches = this.extractValue(data, this._dataField);
            return this.extractMatches(matches, term);
        }), map((matches) => {
            const /** @type {?} */ results = this.processResults(matches);
            this.next(results);
            return results;
        }), catchError((err) => {
            this.error(err);
            // return null;
            return this.setToNullValue;
        }))
            .subscribe();
    }
    /**
     * @return {?}
     */
    cancel() {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    }
    /**
     * @param {?} data
     * @return {?}
     */
    convertToItem(data) {
        return super.convertToItem(data);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CompleterService {
    /**
     * @param {?} localDataFactory
     * @param {?} remoteDataFactory
     */
    constructor(localDataFactory, 
    // Using any instead of () => LocalData because on AoT errors
    remoteDataFactory // Using any instead of () => LocalData because on AoT errors
    ) {
        this.localDataFactory = localDataFactory;
        this.remoteDataFactory = remoteDataFactory;
    }
    /**
     * @param {?} data
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    local(data, searchFields = '', titleField = '') {
        const /** @type {?} */ localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    }
    /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    remote(url, searchFields = '', titleField = '') {
        const /** @type {?} */ remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    }
}
CompleterService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
CompleterService.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [LocalData,] },] },
    { type: undefined, decorators: [{ type: Inject, args: [RemoteData,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const noop = () => { };
const COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => CompleterComponent),
    multi: true
};
class CompleterComponent {
    /**
     * @param {?} completerService
     * @param {?} renderer
     */
    constructor(completerService, renderer) {
        this.completerService = completerService;
        this.renderer = renderer;
        this.inputName = '';
        this.inputId = '';
        this.pause = PAUSE;
        this.minSearchLength = MIN_SEARCH_LENGTH;
        this.maxChars = MAX_CHARS;
        this.overrideSuggested = false;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.fillHighlighted = true;
        this.placeholder = '';
        this.autoMatch = false;
        this.disableInput = false;
        this.autofocus = false;
        this.openOnFocus = false;
        this.autoHighlight = false;
        this.focused = false;
        this.selected = new EventEmitter();
        this.highlighted = new EventEmitter();
        this.blur = new EventEmitter();
        this.focusEvent = new EventEmitter();
        this.opened = new EventEmitter();
        this.keyup = new EventEmitter();
        this.keydown = new EventEmitter();
        this.searchStr = '';
        this.control = new FormControl('');
        //  displaySearching = true;
        this.displaySearching = true;
        //  displayNoResults = true;
        this.displayNoResults = true;
        this._onTouchedCallback = noop;
        this._onChangeCallback = noop;
        this._focus = false;
        this._open = false;
        this._textNoResults = TEXT_NO_RESULTS;
        this._textSearching = TEXT_SEARCHING;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onkeyup(event) {
        if (event.target.value !== '') {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'visible');
        }
        else {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'hidden');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onclick(event) {
        if (event.target.classList.contains('mdb-autocomplete-clear')) {
            event.target.previousElementSibling.value = '';
            this.searchStr = '';
            this.renderer.setStyle(event.target, 'visibility', 'hidden');
        }
    }
    /**
     * @return {?}
     */
    get value() { return this.searchStr; }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v !== this.searchStr) {
            this.searchStr = v;
        }
        // Propagate the change in any case
        this._onChangeCallback(v);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.autofocus) {
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        if (this._focus) {
            this.mdbInput.nativeElement.focus();
            this._focus = false;
        }
    }
    /**
     * @return {?}
     */
    onTouched() {
        this._onTouchedCallback();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.searchStr = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChangeCallback = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouchedCallback = fn;
    }
    /**
     * @param {?} source
     * @return {?}
     */
    set datasource(source) {
        if (source) {
            if (source instanceof Array) {
                this.dataService = this.completerService.local(source);
            }
            else if (typeof (source) === 'string') {
                this.dataService = this.completerService.remote(source);
            }
            else {
                this.dataService = source;
            }
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textNoResults(text) {
        if (this._textNoResults !== text) {
            this._textNoResults = text;
            this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
        }
    }
    /**
     * @param {?} text
     * @return {?}
     */
    set textSearching(text) {
        if (this._textSearching !== text) {
            this._textSearching = text;
            this.displaySearching = this._textSearching && this._textSearching !== 'false';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.completer.selected.subscribe((item) => {
            this.selected.emit(item);
        });
        this.completer.highlighted.subscribe((item) => {
            this.highlighted.emit(item);
        });
        this.completer.opened.subscribe((isOpen) => {
            this._open = isOpen;
            this.opened.emit(isOpen);
        });
        if (this.initialValue) {
            // <- start workaround
            this.searchStr = this.initialValue; //
            this.onFocus(); // fix label
        } // <- end workaround
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.blur.emit();
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focusEvent.emit();
        this.onTouched();
        this.focused = true;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeyup(event) {
        this.keyup.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onKeydown(event) {
        this.keydown.emit(event);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onChange(value) {
        this.value = value;
    }
    /**
     * @return {?}
     */
    open() {
        this.completer.open();
    }
    /**
     * @return {?}
     */
    close() {
        this.completer.clear();
    }
    /**
     * @return {?}
     */
    focus() {
        if (this.mdbInput) {
            this.mdbInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    }
    /**
     * @return {?}
     */
    isOpen() {
        return this._open;
    }
}
CompleterComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-completer',
                template: "<div class=\"completer-holder md-form\" mdbCompleter> <input #mdbInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\" class=\"completer-input form-control mdb-autocomplete\" mdbInput [ngClass]=\"inputClass\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\" [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\" [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\" (blur)=\"onBlur()\" (focus)=\"onFocus()\" (keyup)=\"onKeyup($event)\" (keydown)=\"onKeydown($event)\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" /> <button class=\"mdb-autocomplete-clear\"> <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"https://www.w3.org/2000/svg\"> <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" /> <path d=\"M0 0h24v24H0z\" fill=\"none\" /> </svg> </button> <label [ngClass]=\"{'active': focused}\">{{ label }}</label> <div class=\"completer-dropdown-holder\" *mdbList=\"dataService; minSearchLength: minSearchLength; pause: pause; autoMatch: autoMatch; initialValue: initialValue; autoHighlight: autoHighlight; let items = results; let searchActive = searching; let isInitialized = searchInitialized; let isOpen = isOpen;\"> <div class=\"completer-dropdown\" mdbDropdown *ngIf=\"isInitialized && isOpen && ((items.length > 0 || displayNoResults) || (searchActive && displaySearching))\"> <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{_textSearching}}</div> <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{_textNoResults}}</div> <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\"> <div class=\"completer-row\" [mdbRow]=\"rowIndex\" [dataItem]=\"item\"> <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\"> <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" /> <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div> </div> <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\"> <mdb-completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></mdb-completer-list-item> <mdb-completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\"> </mdb-completer-list-item> </div> </div> </div> </div> </div> </div> ",
                providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CompleterComponent.ctorParameters = () => [
    { type: CompleterService, },
    { type: Renderer2, },
];
CompleterComponent.propDecorators = {
    "dataService": [{ type: Input },],
    "inputName": [{ type: Input },],
    "inputId": [{ type: Input },],
    "pause": [{ type: Input },],
    "minSearchLength": [{ type: Input },],
    "maxChars": [{ type: Input },],
    "overrideSuggested": [{ type: Input },],
    "clearSelected": [{ type: Input },],
    "clearUnselected": [{ type: Input },],
    "fillHighlighted": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "matchClass": [{ type: Input },],
    "fieldTabindex": [{ type: Input },],
    "autoMatch": [{ type: Input },],
    "disableInput": [{ type: Input },],
    "inputClass": [{ type: Input },],
    "autofocus": [{ type: Input },],
    "openOnFocus": [{ type: Input },],
    "initialValue": [{ type: Input },],
    "autoHighlight": [{ type: Input },],
    "label": [{ type: Input },],
    "selected": [{ type: Output },],
    "highlighted": [{ type: Output },],
    "blur": [{ type: Output },],
    "focusEvent": [{ type: Output },],
    "opened": [{ type: Output },],
    "keyup": [{ type: Output },],
    "keydown": [{ type: Output },],
    "completer": [{ type: ViewChild, args: [MdbCompleterDirective,] },],
    "mdbInput": [{ type: ViewChild, args: ['mdbInput',] },],
    "onkeyup": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    "onclick": [{ type: HostListener, args: ['click', ['$event'],] },],
    "datasource": [{ type: Input },],
    "textNoResults": [{ type: Input },],
    "textSearching": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class CtrRowItem {
    /**
     * @param {?} row
     * @param {?} index
     */
    constructor(row, index) {
        this.row = row;
        this.index = index;
    }
}
class MdbDropdownDirective {
    /**
     * @param {?} completer
     * @param {?} el
     */
    constructor(completer, el) {
        this.completer = completer;
        this.el = el;
        this.setToNullValue = null;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // this.completer.registerDropdown(null);
        this.completer.registerDropdown(this.setToNullValue);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout(() => {
                this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    }
    /**
     * @return {?}
     */
    onMouseDown() {
        // Support for canceling blur on IE (issue #158)
        this.completer.cancelBlur(true);
        setTimeout(() => {
            this.completer.cancelBlur(false);
        }, 0);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    registerRow(row) {
        this.rows.push(row);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    highlightRow(index) {
        const /** @type {?} */ highlighted = this.rows.find(row => row.index === index);
        if (index < 0) {
            if (this.currHighlighted) {
                this.currHighlighted.row.setHighlighted(false);
            }
            this.currHighlighted = undefined;
            this.completer.onHighlighted(this.setToNullValue);
            return;
        }
        if (!highlighted) {
            return;
        }
        if (this.currHighlighted) {
            this.currHighlighted.row.setHighlighted(false);
        }
        this.currHighlighted = highlighted;
        this.currHighlighted.row.setHighlighted(true);
        this.completer.onHighlighted(this.currHighlighted.row.getDataItem());
        if (this.isScrollOn && this.currHighlighted) {
            const /** @type {?} */ rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                const /** @type {?} */ row = this.currHighlighted.row.getNativeElement();
                if (this.dropdownHeight() < row.getBoundingClientRect().bottom) {
                    this.dropdownScrollTopTo(this.dropdownRowOffsetHeight(row));
                    if (this.el.nativeElement.getBoundingClientRect().bottom - this.dropdownRowOffsetHeight(row)
                        < row.getBoundingClientRect().top) {
                        this.dropdownScrollTopTo(row.getBoundingClientRect().top - (this.el.nativeElement.getBoundingClientRect().top
                            // + parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10)));
                            + parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10)));
                    }
                }
            }
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.rows = [];
    }
    /**
     * @param {?} item
     * @return {?}
     */
    onSelected(item) {
        this.completer.onSelected(item);
    }
    /**
     * @return {?}
     */
    selectCurrent() {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    }
    /**
     * @return {?}
     */
    nextRow() {
        let /** @type {?} */ nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @return {?}
     */
    prevRow() {
        let /** @type {?} */ nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    }
    /**
     * @param {?} offset
     * @return {?}
     */
    dropdownScrollTopTo(offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    }
    /**
     * @return {?}
     */
    dropdownRowTop() {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                // parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
                parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10));
    }
    /**
     * @return {?}
     */
    dropdownHeight() {
        return this.el.nativeElement.getBoundingClientRect().top +
            // parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
            parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight), 10);
    }
    /**
     * @param {?} row
     * @return {?}
     */
    dropdownRowOffsetHeight(row) {
        const /** @type {?} */ css = getComputedStyle(row);
        return row.offsetHeight +
            // parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
            parseInt(/** @type {?} */ (css.marginTop), 10) + parseInt(/** @type {?} */ (css.marginBottom), 10);
    }
}
MdbDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdown]',
            },] },
];
/** @nocollapse */
MdbDropdownDirective.ctorParameters = () => [
    { type: MdbCompleterDirective, decorators: [{ type: Host },] },
    { type: ElementRef, },
];
MdbDropdownDirective.propDecorators = {
    "onMouseDown": [{ type: HostListener, args: ['mousedown', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// keyboard events
const KEY_DW = 40;
const KEY_RT = 39;
const KEY_UP = 38;
const KEY_LF = 37;
const KEY_ES = 27;
const KEY_EN = 13;
const KEY_TAB = 9;
class MdbInputCompleteDirective {
    /**
     * @param {?} completer
     * @param {?} tempngModel
     * @param {?} el
     */
    constructor(completer, tempngModel, el) {
        this.completer = completer;
        this.tempngModel = tempngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.ngModelChange = new EventEmitter();
        this._searchStr = '';
        this._displayStr = '';
        this.blurTimer = null;
        this.ngModel = this.tempngModel;
        this.completer.selected.subscribe((item) => {
            if (!item) {
                return;
            }
            if (this.clearSelected) {
                this.searchStr = '';
            }
            else {
                this.searchStr = item.title;
            }
            this.ngModelChange.emit(this.searchStr);
        });
        this.completer.highlighted.subscribe((item) => {
            if (this.fillHighlighted) {
                if (item) {
                    this._displayStr = item.title;
                    this.ngModelChange.emit(item.title);
                }
                else {
                    this._displayStr = this.searchStr;
                    this.ngModelChange.emit(this.searchStr);
                }
            }
        });
        // this.ngModel.valueChanges.subscribe(value => {
        this.ngModel.valueChanges.subscribe((value) => {
            if (!isNil(value) && this._displayStr !== value) {
                if (this.searchStr !== value) {
                    this.completer.search(value);
                }
                this.searchStr = value;
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyupHandler(event) {
        if (event.keyCode === KEY_LF || event.keyCode === KEY_RT || event.keyCode === KEY_TAB) {
            // do nothing
            return;
        }
        if (event.keyCode === KEY_UP || event.keyCode === KEY_EN) {
            event.preventDefault();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.search(this.searchStr);
        }
        else if (event.keyCode === KEY_ES) {
            this.restoreSearchValue();
            this.completer.clear();
        }
        else {
            if (this.searchStr) {
                this.completer.open();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keydownHandler(event) {
        if (event.keyCode === KEY_EN) {
            if (this.completer.hasHighlighted()) {
                event.preventDefault();
            }
            this.handleSelection();
        }
        else if (event.keyCode === KEY_DW) {
            event.preventDefault();
            this.completer.open();
            this.completer.nextRow();
        }
        else if (event.keyCode === KEY_UP) {
            event.preventDefault();
            this.completer.prevRow();
        }
        else if (event.keyCode === KEY_TAB) {
            this.handleSelection();
        }
        else if (event.keyCode === KEY_ES) {
            // This is very specific to IE10/11 #272
            // without this, IE clears the input text
            event.preventDefault();
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(() => {
                // get the focus back
                this.el.nativeElement.focus();
            }, 0);
            return;
        }
        this.blurTimer = timer(200).subscribe(() => {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
            if (this.overrideSuggested) {
                this.completer.onSelected({ title: this.searchStr, originalObject: null });
            }
            else {
                if (this.clearUnselected && !this.completer.hasSelected) {
                    this.searchStr = '';
                    this.el.nativeElement.value = '';
                }
                else {
                    this.restoreSearchValue();
                }
            }
            this.completer.clear();
        });
    }
    /**
     * @return {?}
     */
    onfocus() {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    }
    /**
     * @return {?}
     */
    get searchStr() {
        return this._searchStr;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    set searchStr(term) {
        this._searchStr = term;
        this._displayStr = term;
    }
    /**
     * @return {?}
     */
    handleSelection() {
        if (this.completer.hasHighlighted()) {
            this._searchStr = '';
            this.completer.selectCurrent();
        }
        else if (this.overrideSuggested) {
            this.completer.onSelected({ title: this.searchStr, originalObject: null });
        }
        else {
            this.completer.clear();
        }
    }
    /**
     * @return {?}
     */
    restoreSearchValue() {
        if (this.fillHighlighted) {
            if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    }
}
MdbInputCompleteDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInput]',
            },] },
];
/** @nocollapse */
MdbInputCompleteDirective.ctorParameters = () => [
    { type: MdbCompleterDirective, decorators: [{ type: Host },] },
    { type: NgModel, },
    { type: ElementRef, },
];
MdbInputCompleteDirective.propDecorators = {
    "clearSelected": [{ type: Input, args: ['clearSelected',] },],
    "clearUnselected": [{ type: Input, args: ['clearUnselected',] },],
    "overrideSuggested": [{ type: Input, args: ['overrideSuggested',] },],
    "fillHighlighted": [{ type: Input, args: ['fillHighlighted',] },],
    "openOnFocus": [{ type: Input, args: ['openOnFocus',] },],
    "ngModelChange": [{ type: Output },],
    "keyupHandler": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    "keydownHandler": [{ type: HostListener, args: ['keydown', ['$event'],] },],
    "onBlur": [{ type: HostListener, args: ['blur', ['$event'],] },],
    "onfocus": [{ type: HostListener, args: ['focus', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// import { catchError } from 'rxjs/operators';
class CtrListContext {
    /**
     * @param {?} results
     * @param {?} searching
     * @param {?} searchInitialized
     * @param {?} isOpen
     */
    constructor(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
}
class MdbListDirective {
    /**
     * @param {?} tmpCompleter
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} cd
     */
    constructor(
    // @Host() private completer: MdbCompleterDirective,
    tmpCompleter, templateRef, viewContainer, cd) {
        this.tmpCompleter = tmpCompleter;
        this.templateRef = templateRef;
        this.viewContainer = viewContainer;
        this.cd = cd;
        this.mdbListMinSearchLength = MIN_SEARCH_LENGTH;
        this.mdbListPause = PAUSE;
        this.mdbListAutoMatch = false;
        this.mdbListAutoHighlight = false;
        this.setToNullValue = null;
        this.term = null;
        this.searchTimer = null;
        this.clearTimer = null;
        this.ctx = new CtrListContext([], false, false, false);
        this._initialValue = null;
        this.completer = this.tmpCompleter;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    }
    /**
     * @param {?} newService
     * @return {?}
     */
    set dataService(newService) {
        this._dataService = newService;
        if (this._dataService) {
            this._dataService
                .subscribe((results) => {
                try {
                    this.ctx.searchInitialized = true;
                    this.ctx.searching = false;
                    this.ctx.results = results;
                    if (this.mdbListAutoMatch && results.length === 1 && results[0].title && !isNil(this.term) &&
                        results[0].title.toLocaleLowerCase() === this.term.toLocaleLowerCase()) {
                        // Do automatch
                        this.completer.onSelected(results[0]);
                    }
                    if (this._initialValue) {
                        this.initialValue = this._initialValue;
                        // this._initialValue = null;
                        this._initialValue = this.setToNullValue;
                    }
                    if (this.mdbListAutoHighlight) {
                        this.completer.autoHighlightIndex = this.getBestMatchIndex();
                    }
                    this.refreshTemplate();
                }
                catch (/** @type {?} */ err) {
                }
            });
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set initialValue(value) {
        if (this._dataService && typeof this._dataService.convertToItem === 'function') {
            setTimeout(() => {
                const /** @type {?} */ initialItem = this._dataService.convertToItem(value);
                if (initialItem) {
                    this.completer.onSelected(initialItem, false);
                }
            });
        }
        else if (!this._dataService) {
            this._initialValue = value;
        }
    }
    /**
     * @param {?} term
     * @return {?}
     */
    search(term) {
        if (!isNil(term) && term.length >= this.mdbListMinSearchLength && this.term !== term) {
            if (this.searchTimer) {
                this.searchTimer.unsubscribe();
                this.searchTimer = null;
            }
            if (!this.ctx.searching) {
                this.ctx.results = [];
                this.ctx.searching = true;
                this.ctx.searchInitialized = true;
                this.refreshTemplate();
            }
            if (this.clearTimer) {
                this.clearTimer.unsubscribe();
            }
            this.searchTimer = timer(this.mdbListPause).subscribe(() => {
                try {
                    this.searchTimerComplete(term);
                }
                catch (/** @type {?} */ err) {
                }
            });
        }
        else if (!isNil(term) && term.length < this.mdbListMinSearchLength) {
            this.clear();
        }
    }
    /**
     * @return {?}
     */
    clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = timer(CLEAR_TIMEOUT).subscribe(() => {
            this._clear();
        });
    }
    /**
     * @return {?}
     */
    open() {
        if (!this.ctx.searchInitialized) {
            this.search('');
        }
        this.refreshTemplate();
    }
    /**
     * @param {?} open
     * @return {?}
     */
    isOpen(open) {
        this.ctx.isOpen = open;
    }
    /**
     * @return {?}
     */
    _clear() {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    }
    /**
     * @param {?} term
     * @return {?}
     */
    searchTimerComplete(term) {
        // Begin the search
        if (isNil(term) || term.length < this.mdbListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    }
    /**
     * @return {?}
     */
    refreshTemplate() {
        // Recreate the template
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    }
    /**
     * @return {?}
     */
    getBestMatchIndex() {
        if (!this.ctx.results) {
            return null;
        }
        // First try to find the exact term
        let /** @type {?} */ bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase() === this.term.toLocaleLowerCase());
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase().startsWith(this.term.toLocaleLowerCase()));
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(item => item.title.toLowerCase().includes(this.term.toLocaleLowerCase()));
        }
        return bestMatch < 0 ? null : bestMatch;
    }
}
MdbListDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbList]',
            },] },
];
/** @nocollapse */
MdbListDirective.ctorParameters = () => [
    { type: MdbCompleterDirective, decorators: [{ type: Host },] },
    { type: TemplateRef, },
    { type: ViewContainerRef, },
    { type: ChangeDetectorRef, },
];
MdbListDirective.propDecorators = {
    "mdbListMinSearchLength": [{ type: Input },],
    "mdbListPause": [{ type: Input },],
    "mdbListAutoMatch": [{ type: Input },],
    "mdbListAutoHighlight": [{ type: Input },],
    "dataService": [{ type: Input, args: ['mdbList',] },],
    "initialValue": [{ type: Input, args: ['mdbListInitialValue',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MdbRowDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} dropdown
     */
    constructor(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
    }
    /**
     * @param {?} index
     * @return {?}
     */
    set mdbRow(index) {
        this._rowIndex = index;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    set dataItem(item) {
        this._item = item;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.dropdown.onSelected(this._item);
    }
    /**
     * @return {?}
     */
    onMouseEnter() {
        this.dropdown.highlightRow(this._rowIndex);
    }
    /**
     * @param {?} selected
     * @return {?}
     */
    setHighlighted(selected) {
        this.selected = selected;
        if (this.selected) {
            this.renderer.addClass(this.el.nativeElement, 'completer-selected-row');
        }
        else if (!this.selected) {
            this.renderer.removeClass(this.el.nativeElement, 'completer-selected-row');
        }
    }
    /**
     * @return {?}
     */
    getNativeElement() {
        return this.el.nativeElement;
    }
    /**
     * @return {?}
     */
    getDataItem() {
        return this._item;
    }
}
MdbRowDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbRow]',
            },] },
];
/** @nocollapse */
MdbRowDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: MdbDropdownDirective, decorators: [{ type: Host },] },
];
MdbRowDirective.propDecorators = {
    "mdbRow": [{ type: Input },],
    "dataItem": [{ type: Input },],
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
    "onMouseEnter": [{ type: HostListener, args: ['mouseenter', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function localDataFactory() {
    return () => {
        return new LocalData();
    };
}
/**
 * @param {?} http
 * @return {?}
 */
function remoteDataFactory(http$$1) {
    return () => {
        return new RemoteData(http$$1);
    };
}
let LocalDataFactoryProvider = { provide: LocalData, useFactory: localDataFactory };
let RemoteDataFactoryProvider = { provide: RemoteData, useFactory: remoteDataFactory, deps: [Http] };

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class AutocompleteModule {
}
AutocompleteModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    CommonModule,
                    FormsModule,
                    HttpModule
                ],
                declarations: [
                    CompleterListItemComponent,
                    MdbCompleterDirective,
                    MdbDropdownDirective,
                    MdbInputCompleteDirective,
                    MdbListDirective,
                    MdbRowDirective,
                    CompleterComponent
                ],
                exports: [
                    CompleterComponent,
                    CompleterListItemComponent,
                    MdbCompleterDirective,
                    MdbDropdownDirective,
                    MdbInputCompleteDirective,
                    MdbListDirective,
                    MdbRowDirective
                ],
                providers: [
                    CompleterService,
                    LocalDataFactoryProvider,
                    RemoteDataFactoryProvider
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CardRevealComponent {
    /**
     * @return {?}
     */
    toggle() {
        this.show = !this.show;
        this.socials = (this.socials === 'active') ? 'inactive' : 'active';
    }
}
CardRevealComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-reveal',
                template: "<div class=\"card-overflow col-12\"> <div class=\"card-front\"> <ng-content select=\"card-front\" ></ng-content> </div> <div class=\"card-revealed\" *ngIf=\"show\" [@socialsState]=\"socials\" > <ng-content select=\"card-revealed\" ></ng-content> </div> </div> ",
                animations: [socialsState]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CardRotatingComponent {
    constructor() {
        this.rotate = false;
    }
    /**
     * @return {?}
     */
    toggle() {
        this.rotate = !this.rotate;
    }
}
CardRotatingComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-card-rotating',
                template: "<div class=\"flip-container card-wrapper\" [ngClass]=\"{'rotate': rotate}\"> <div class=\"flipper card-rotating effect__click tp-box\"> <ng-content></ng-content> </div> </div> "
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CardsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CardsModule, providers: [] };
    }
}
CardsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [CardRevealComponent, CardRotatingComponent],
                exports: [CardRevealComponent, CardRotatingComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const KeyCode = { backspace: 8, delete: 46, };
KeyCode[KeyCode.backspace] = "backspace";
KeyCode[KeyCode.delete] = "delete";
class InputAutoFillDirective {
    /**
     * @param {?} el
     * @param {?} rndr
     */
    constructor(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    onKeyUp(evt) {
        if (!this.opts.enabled || evt.keyCode === KeyCode.backspace || evt.keyCode === KeyCode.delete) {
            return;
        }
        const /** @type {?} */ val = this.getInputValue();
        const /** @type {?} */ ews = this.endsWith(val, this.opts.separator);
        const /** @type {?} */ parts = val.split(this.opts.separator);
        const /** @type {?} */ idx = parts.length - 1;
        if (val.indexOf(this.opts.separator + this.opts.separator) !== -1 || idx > 2) {
            return;
        }
        if (!ews &&
            (val.length === this.getPartLength(0) ||
                val.length === this.getPartLength(0) + this.getPartLength(1) + this.opts.separator.length)) {
            this.setInputValue(val + this.opts.separator);
        }
        else if (ews &&
            parts[idx - 1].length < this.getPartLength(idx - 1) &&
            this.isNumber(parts[idx - 1]) && (this.isDay(idx - 1) || this.isMonth(idx - 1))) {
            this.setInputValue(this.insertPos(val, val.length - 2, '0'));
        }
        else if (parts[idx].length < this.getPartLength(idx) &&
            this.isNumber(parts[idx]) &&
            (Number(parts[idx]) > 3 &&
                this.isDay(idx) ||
                Number(parts[idx]) > 1 &&
                    this.isMonth(idx))) {
            this.setInputValue(this.insertPos(val, val.length - 1, '0') + (idx < 2 ? this.opts.separator : ''));
        }
    }
    /**
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    endsWith(val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    }
    /**
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    insertPos(str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    getPartLength(idx) {
        return this.opts.formatParts[idx].length;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    isNumber(val) {
        return val.match(/[1-9]/) !== null;
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    isDay(idx) {
        return this.opts.formatParts[idx].indexOf('d') !== -1;
    }
    /**
     * @param {?} idx
     * @return {?}
     */
    isMonth(idx) {
        return this.opts.formatParts[idx].indexOf('m') !== -1 && this.opts.formatParts[idx].length === 2;
    }
    /**
     * @return {?}
     */
    getInputValue() {
        return this.el.nativeElement.value;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    setInputValue(val) {
        this.rndr.setProperty(this.el.nativeElement, 'value', val);
    }
}
InputAutoFillDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInputAutoFill]'
            },] },
];
/** @nocollapse */
InputAutoFillDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
InputAutoFillDirective.propDecorators = {
    "opts": [{ type: Input },],
    "onKeyUp": [{ type: HostListener, args: ['keyup', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FocusDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        // if (this.value === "0") {
        //     return;
        // }
        // this.renderer.invokeElementMethod(this.el.nativeElement, 'focus', []);
        this.el.nativeElement.focus();
        // // Set cursor position at the end of text if input element
        // if (this.value === "2") {
        //     let len = this.el.nativeElement.value.length;
        //     this.el.nativeElement.setSelectionRange(len, len);
        // }
    }
}
FocusDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDpFocus]'
            },] },
];
/** @nocollapse */
FocusDirective.ctorParameters = () => [
    { type: ElementRef, },
];
FocusDirective.propDecorators = {
    "value": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LocaleService {
    constructor() {
        this.locales = {
            'en': {
                dayLabelsFull: {
                    su: 'Sunday',
                    mo: 'Monday',
                    tu: 'Tuesday',
                    we: 'Wednesday',
                    th: 'Thursday',
                    fr: 'Friday',
                    sa: 'Saturday'
                },
                dayLabels: {
                    su: 'Sun',
                    mo: 'Mon',
                    tu: 'Tue',
                    we: 'Wed',
                    th: 'Thu',
                    fr: 'Fri',
                    sa: 'Sat'
                },
                monthLabelsFull: {
                    1: 'January',
                    2: 'February',
                    3: 'March',
                    4: 'April',
                    5: 'May',
                    6: 'June',
                    7: 'July',
                    8: 'August',
                    9: 'September',
                    10: 'October',
                    11: 'November',
                    12: 'December'
                },
                monthLabels: {
                    1: 'Jan',
                    2: 'Feb',
                    3: 'Mar',
                    4: 'Apr',
                    5: 'May',
                    6: 'Jun',
                    7: 'Jul',
                    8: 'Aug',
                    9: 'Sep',
                    10: 'Oct',
                    11: 'Nov',
                    12: 'Dec'
                },
                dateFormat: 'yyyy-mm-dd',
                todayBtnTxt: 'Today',
                clearBtnTxt: 'Clear',
                closeBtnTxt: 'Close',
                firstDayOfWeek: 'mo',
                sunHighlight: true,
            }
        };
    }
    /**
     * @param {?} locale
     * @return {?}
     */
    getLocaleOptions(locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales['en'];
    }
}
LocaleService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class UtilService {
    /**
     * @param {?} dateStr
     * @param {?} dateFormat
     * @param {?} minYear
     * @param {?} maxYear
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} monthLabels
     * @param {?} enableDays
     * @return {?}
     */
    isDateValid(dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, monthLabels, enableDays) {
        const /** @type {?} */ returnDate = { day: 0, month: 0, year: 0 };
        const /** @type {?} */ daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        const /** @type {?} */ isMonthStr = this.getDatePartIndex(dateFormat, 'mmm') !== -1;
        if (dateStr.length !== dateFormat.length) {
            return returnDate;
        }
        const /** @type {?} */ separator = this.getDateFormatSeparator(dateFormat);
        const /** @type {?} */ parts = dateStr.split(separator);
        if (parts.length !== 3) {
            return returnDate;
        }
        const /** @type {?} */ day = this.parseDatePartNumber(dateFormat, dateStr, 'dd');
        const /** @type {?} */ month = isMonthStr ?
            this.parseDatePartMonthName(dateFormat, dateStr, 'mmm', monthLabels) :
            this.parseDatePartNumber(dateFormat, dateStr, 'mm');
        const /** @type {?} */ year = this.parseDatePartNumber(dateFormat, dateStr, 'yyyy');
        if (day !== -1 && month !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            const /** @type {?} */ date = { year: year, month: month, day: day };
            if (this.isDisabledDay(date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays)) {
                return returnDate;
            }
            if (year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0)) {
                daysInMonth[1] = 29;
            }
            if (day < 1 || day > daysInMonth[month - 1]) {
                return returnDate;
            }
            // Valid date
            return date;
        }
        return returnDate;
    }
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    getDateFormatSeparator(dateFormat) {
        return dateFormat.replace(/[dmy]/g, '')[0];
    }
    /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    isMonthLabelValid(monthLabel, monthLabels) {
        for (let /** @type {?} */ key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    }
    /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    isYearLabelValid(yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    parseDatePartNumber(dateFormat, dateString, datePart) {
        const /** @type {?} */ pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            const /** @type {?} */ value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value, 0);
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    parseDatePartMonthName(dateFormat, dateString, datePart, monthLabels) {
        const /** @type {?} */ pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            return this.isMonthLabelValid(dateString.substring(pos, pos + datePart.length), monthLabels);
        }
        return -1;
    }
    /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    getDatePartIndex(dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    }
    /**
     * @param {?} monthString
     * @return {?}
     */
    parseDefaultMonth(monthString) {
        const /** @type {?} */ month = { monthTxt: '', monthNbr: 0, year: 0 };
        if (monthString !== '') {
            const /** @type {?} */ split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0], 0) : parseInt(split[1], 0);
            month.year = split[0].length === 2 ? parseInt(split[1], 0) : parseInt(split[0], 0);
        }
        return month;
    }
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @param {?} disableSince
     * @param {?} disableWeekends
     * @param {?} disableDays
     * @param {?} disableDateRanges
     * @param {?} enableDays
     * @return {?}
     */
    isDisabledDay(date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays) {
        for (const /** @type {?} */ e of enableDays) {
            if (e.year === date.year && e.month === date.month && e.day === date.day) {
                return false;
            }
        }
        const /** @type {?} */ dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            const /** @type {?} */ dn = this.getDayNumber(date);
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        for (const /** @type {?} */ d of disableDays) {
            if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        for (const /** @type {?} */ d of disableDateRanges) {
            if (this.isInitializedDate(d.begin) &&
                this.isInitializedDate(d.end) &&
                dateMs >= this.getTimeInMilliseconds(d.begin) &&
                dateMs <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    }
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    isMarkedDate(date, markedDates, markWeekends) {
        for (const /** @type {?} */ md of markedDates) {
            for (const /** @type {?} */ d of md.dates) {
                if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return { marked: true, color: md.color };
                }
            }
        }
        if (markWeekends && markWeekends.marked) {
            const /** @type {?} */ dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: '' };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekNumber(date) {
        const /** @type {?} */ d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    }
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    isMonthDisabledByDisableUntil(date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    }
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    isMonthDisabledByDisableSince(date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    }
    /**
     * @param {?} date
     * @return {?}
     */
    isInitializedDate(date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTimeInMilliseconds(date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDayNumber(date) {
        const /** @type {?} */ d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    }
}
UtilService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const MYDP_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MDBDatePickerComponent),
    multi: true
};
/** @enum {number} */
const CalToggle = { Open: 1, CloseByDateSel: 2, CloseByCalBtn: 3, CloseByOutClick: 4, };
CalToggle[CalToggle.Open] = "Open";
CalToggle[CalToggle.CloseByDateSel] = "CloseByDateSel";
CalToggle[CalToggle.CloseByCalBtn] = "CloseByCalBtn";
CalToggle[CalToggle.CloseByOutClick] = "CloseByOutClick";
/** @enum {number} */
const Year = { min: 1000, max: 9999, };
Year[Year.min] = "min";
Year[Year.max] = "max";
/** @enum {number} */
const InputFocusBlur = { focus: 1, blur: 2, };
InputFocusBlur[InputFocusBlur.focus] = "focus";
InputFocusBlur[InputFocusBlur.blur] = "blur";
/** @enum {number} */
const KeyCode$1 = { enter: 13, space: 32, };
KeyCode$1[KeyCode$1.enter] = "enter";
KeyCode$1[KeyCode$1.space] = "space";
/** @enum {number} */
const MonthId = { prev: 1, curr: 2, next: 3, };
MonthId[MonthId.prev] = "prev";
MonthId[MonthId.curr] = "curr";
MonthId[MonthId.next] = "next";
class MDBDatePickerComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} localeService
     * @param {?} utilService
     */
    constructor(elem, renderer, localeService, utilService) {
        this.elem = elem;
        this.renderer = renderer;
        this.localeService = localeService;
        this.utilService = utilService;
        this.label = '';
        this.placeholder = '';
        this.dateChanged = new EventEmitter();
        this.inputFieldChanged = new EventEmitter();
        this.calendarViewChanged = new EventEmitter();
        this.calendarToggle = new EventEmitter();
        this.inputFocusBlur = new EventEmitter();
        this.showSelector = false;
        this.visibleMonth = { monthTxt: '', monthNbr: 0, year: 1 };
        this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
        this.selectedDate = { year: 0, month: 0, day: 0 };
        this.weekDays = [];
        this.dates = [];
        this.selectionDayTxt = '';
        this.invalidDate = false;
        this.disableTodayBtn = false;
        this.dayIdx = 0;
        this.weekDayOpts = ['su', 'mo', 'tu', 'we', 'th', 'fr', 'sa'];
        this.editMonth = false;
        this.invalidMonth = false;
        this.editYear = false;
        this.invalidYear = false;
        this.prevMonthDisabled = false;
        this.nextMonthDisabled = false;
        this.prevYearDisabled = false;
        this.nextYearDisabled = false;
        this.prevMonthId = MonthId.prev;
        this.currMonthId = MonthId.curr;
        this.nextMonthId = MonthId.next;
        this.tmp = { year: this.getToday().year, month: this.getToday().month, day: this.getToday().day };
        this.opts = {
            closeAfterSelect: /** @type {?} */ (false),
            dayLabelsFull: /** @type {?} */ ({}),
            dayLabels: /** @type {?} */ ({}),
            monthLabelsFull: /** @type {?} */ ({}),
            monthLabels: /** @type {?} */ ({}),
            dateFormat: /** @type {?} */ (''),
            showTodayBtn: /** @type {?} */ (true),
            todayBtnTxt: /** @type {?} */ (''),
            firstDayOfWeek: /** @type {?} */ (''),
            sunHighlight: /** @type {?} */ (true),
            markCurrentDay: /** @type {?} */ (true),
            disableUntil: /** @type {?} */ ({ year: 0, month: 0, day: 0 }),
            disableSince: /** @type {?} */ ({ year: 0, month: 0, day: 0 }),
            disableDays: /** @type {?} */ ([]),
            enableDays: /** @type {?} */ ([]),
            markDates: /** @type {?} */ ([]),
            markWeekends: /** @type {?} */ ({}),
            disableDateRanges: /** @type {?} */ ([]),
            disableWeekends: /** @type {?} */ (false),
            showWeekNumbers: /** @type {?} */ (false),
            height: /** @type {?} */ ('32px'),
            width: /** @type {?} */ ('100%'),
            selectionTxtFontSize: /** @type {?} */ ('1rem'),
            showClearDateBtn: /** @type {?} */ (true),
            alignSelectorRight: /** @type {?} */ (false),
            disableHeaderButtons: /** @type {?} */ (true),
            minYear: /** @type {?} */ (Year.min),
            maxYear: /** @type {?} */ (Year.max),
            componentDisabled: /** @type {?} */ (false),
            showSelectorArrow: /** @type {?} */ (true),
            ariaLabelInputField: /** @type {?} */ ('Date input field'),
            ariaLabelClearDate: /** @type {?} */ ('Clear Date'),
            ariaLabelOpenCalendar: /** @type {?} */ ('Open Calendar'),
            ariaLabelPrevMonth: /** @type {?} */ ('Previous Month'),
            ariaLabelNextMonth: /** @type {?} */ ('Next Month'),
            ariaLabelPrevYear: /** @type {?} */ ('Previous Year'),
            ariaLabelNextYear: /** @type {?} */ ('Next Year')
        };
        this.months = [];
        this.years = [];
        this.elements = document.getElementsByClassName('mydp picker');
        this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        this.onChangeCb = () => { };
        this.onTouchedCb = () => { };
        this.setLocaleOptions();
        renderer.listen(this.elem.nativeElement, 'click', (event) => {
            if (this.showSelector &&
                event.target &&
                this.elem.nativeElement !== event.target &&
                !this.elem.nativeElement.contains(event.target)) {
                this.removeInlineStyle();
                this.showSelector = false;
                this.removeZIndex();
                this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                this.removeInlineStyle();
                this.removeZIndex();
                this.showSelector = false;
            }
            if (true && event.target && this.elem.nativeElement.contains(event.target)) {
                this.resetMonthYearEdit();
            }
        });
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.opts.startDate) {
            setTimeout(() => {
                this.onUserDateInput(this.opts.startDate);
            }, 0);
        }
    }
    /**
     * @return {?}
     */
    removeInlineStyle() {
        this.removeZIndex();
        setTimeout(() => {
            document.documentElement.style.removeProperty('overflow');
        }, 155);
    }
    /**
     * @return {?}
     */
    setLocaleOptions() {
        const /** @type {?} */ opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach((k) => {
            this.opts[k] = opts[k];
        });
    }
    /**
     * @return {?}
     */
    setOptions() {
        const /** @type {?} */ thisYear = new Date();
        const /** @type {?} */ currentYear = thisYear.getFullYear();
        if (this.options !== undefined) {
            Object.keys(this.options).forEach((k) => {
                this.opts[k] = this.options[k];
            });
        }
        if (this.disabled !== undefined) {
            this.opts.componentDisabled = this.disabled;
        }
        if (this.opts.minYear === 1000) {
            this.opts.minYear = currentYear - 7;
        }
        if (this.opts.maxYear === 9999) {
            this.opts.maxYear = currentYear + 7;
        }
    }
    /**
     * @return {?}
     */
    resetMonthYearEdit() {
        this.editMonth = false;
        this.editYear = false;
        this.invalidMonth = false;
        this.invalidYear = false;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserDateInput(value) {
        this.invalidDate = false;
        if (value.length === 0) {
            this.clearDate();
        }
        else {
            const /** @type {?} */ date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
            if (date.day !== 0 && date.month !== 0 && date.year !== 0) {
                this.selectDate(date);
            }
            else {
                this.invalidDate = true;
            }
        }
        if (this.invalidDate) {
            this.inputFieldChanged.emit({ value: value, dateFormat: this.opts.dateFormat, valid: !(value.length === 0 || this.invalidDate) });
            this.onChangeCb('');
            this.onTouchedCb();
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onFocusInput(event) {
        this.openBtnClicked();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        document.documentElement.style.overflow = 'hidden';
        this.divFocus.nativeElement.focus();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onBlurInput(event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserMonthInput(value) {
        this.invalidMonth = false;
        const /** @type {?} */ m = this.utilService.isMonthLabelValid(value, this.opts.monthLabels);
        if (m !== -1) {
            this.editMonth = false;
            if (m !== this.visibleMonth.monthNbr) {
                this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: this.visibleMonth.year };
                this.generateCalendar(m, this.visibleMonth.year, true);
            }
        }
        else {
            this.invalidMonth = true;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    onUserYearInput(value) {
        this.invalidYear = false;
        const /** @type {?} */ y = this.utilService.isYearLabelValid(Number(value), this.opts.minYear, this.opts.maxYear);
        if (y !== -1) {
            this.editYear = false;
            if (y !== this.visibleMonth.year) {
                this.visibleMonth = { monthTxt: this.visibleMonth.monthTxt, monthNbr: this.visibleMonth.monthNbr, year: y };
                this.generateCalendar(this.visibleMonth.monthNbr, y, true);
            }
        }
        else {
            this.invalidYear = true;
        }
    }
    /**
     * @return {?}
     */
    isTodayDisabled() {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    }
    /**
     * @return {?}
     */
    parseOptions() {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        this.isTodayDisabled();
        this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            let /** @type {?} */ idx = this.dayIdx;
            for (let /** @type {?} */ i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value && typeof value === 'string') {
            this.updateDateValue(this.parseSelectedDate(value), false);
        }
        else if (value && value['date']) {
            this.updateDateValue(this.parseSelectedDate(value['date']), false);
        }
        else if (value === '') {
            this.updateDateValue({ year: 0, month: 0, day: 0 }, true);
        }
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('selector') && changes['selector'].currentValue > 0) {
            this.openBtnClicked();
        }
        if (changes.hasOwnProperty('placeholder')) {
            this.placeholder = changes['placeholder'].currentValue;
        }
        if (changes.hasOwnProperty('locale')) {
            this.locale = changes['locale'].currentValue;
        }
        if (changes.hasOwnProperty('disabled')) {
            this.disabled = changes['disabled'].currentValue;
        }
        if (changes.hasOwnProperty('options')) {
            this.options = changes['options'].currentValue;
        }
        this.weekDays.length = 0;
        this.parseOptions();
        if (changes.hasOwnProperty('defaultMonth')) {
            const /** @type {?} */ dm = changes['defaultMonth'].currentValue;
            if (dm !== null && dm !== undefined && dm !== '') {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
            }
        }
        if (changes.hasOwnProperty('selDate')) {
            const /** @type {?} */ sd = changes['selDate'];
            if (sd.currentValue !== null &&
                sd.currentValue !== undefined &&
                sd.currentValue !== '' &&
                Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout(() => {
                    this.onChangeCb(this.getDateModel(this.selectedDate));
                });
            }
            else {
                // Do not clear on init
                if (!sd.isFirstChange()) {
                    this.clearDate();
                }
            }
        }
        if (this.showSelector) {
            this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, false);
        }
    }
    /**
     * @return {?}
     */
    hideKeyboard() {
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        try {
            setTimeout(() => {
                // creating temp field
                // const field = document.createElement('input');
                const /** @type {?} */ field = this.renderer.createElement('input');
                this.renderer.appendChild(this.elem.nativeElement, field);
                const /** @type {?} */ inputReference = this.elem.nativeElement.lastElementChild;
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setStyle(inputReference, 'opacity', '0');
                this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                // // hiding temp field from peoples eyes
                // // -webkit-user-modify is nessesary for Android 4.x
                // adding onfocus event handler for out temp field
                field.onfocus = () => {
                    // this timeout of 200ms is nessasary for Android 2.3.x
                    setTimeout(() => {
                        this.renderer.setStyle(field, 'display', 'none');
                        setTimeout(() => {
                            this.renderer.removeChild(this.elem.nativeElement, field);
                            document.body.focus();
                        }, 0);
                    }, 0);
                };
                // focusing it
                field.focus();
            }, 0);
        }
        catch (/** @type {?} */ error) {
        }
    }
    /**
     * @return {?}
     */
    removeBtnClicked() {
        // Remove date button clicked
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
            this.setZIndex();
        }
        // this.showSelector = false;
    }
    /**
     * @return {?}
     */
    setZIndex() {
        for (let /** @type {?} */ i = 0; i <= this.elements.length; i++) {
            if (i === this.elements.length) {
                break;
            }
            this.renderer.setStyle(this.elements[i], 'z-index', '1');
            if (this.elements[i] === this.elem.nativeElement.childNodes[0] || this.elements[i] === this.elem.nativeElement.childNodes[1]) {
                this.elementNumber = i;
                this.renderer.setStyle(this.elements[i], 'z-index', '50');
            }
        }
    }
    /**
     * @return {?}
     */
    removeZIndex() {
        for (let /** @type {?} */ i = 0; i <= this.elements.length; i++) {
            if (i === this.elements.length) {
                break;
            }
            this.renderer.setStyle(this.elements[i], 'z-index', '50');
        }
    }
    /**
     * @return {?}
     */
    openBtnClicked() {
        // Open selector button clicked
        this.showSelector = !this.showSelector;
        if (this.showSelector) {
            this.setVisibleMonth();
            this.calendarToggle.emit(CalToggle.Open);
            this.setZIndex();
        }
        else {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
        }
        if (this.isMobile) {
            this.hideKeyboard();
        }
    }
    /**
     * @return {?}
     */
    setVisibleMonth() {
        // Sets visible month of calendar
        let /** @type {?} */ y = 0, /** @type {?} */ m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                const /** @type {?} */ today = this.getToday();
                y = today.year;
                m = today.month;
            }
            else {
                y = this.selectedMonth.year;
                m = this.selectedMonth.monthNbr;
            }
        }
        else {
            y = this.selectedDate.year;
            m = this.selectedDate.month;
        }
        this.visibleMonth = { monthTxt: this.opts.monthLabels[m], monthNbr: m, year: y };
        // Create current month
        this.generateCalendar(m, y, true);
    }
    /**
     * @return {?}
     */
    monthList() {
        this.months = [];
        for (let /** @type {?} */ i = 1; i <= 12; i++) {
            this.months.push({ index: i, short: this.opts.monthLabels[i], label: this.opts.monthLabelsFull[i] });
        }
    }
    /**
     * @return {?}
     */
    yearsList() {
        this.years = [];
        const /** @type {?} */ firstYear = this.opts.minYear;
        const /** @type {?} */ lastYear = this.opts.maxYear;
        for (let /** @type {?} */ i = firstYear; i <= lastYear; i++) {
            this.years.push(i);
        }
    }
    /**
     * @return {?}
     */
    prevMonth() {
        // Previous month from calendar
        const /** @type {?} */ d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        const /** @type {?} */ y = d.getFullYear();
        const /** @type {?} */ m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    }
    /**
     * @return {?}
     */
    nextMonth() {
        // Next month from calendar
        const /** @type {?} */ d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        const /** @type {?} */ y = d.getFullYear();
        const /** @type {?} */ m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    }
    /**
     * @return {?}
     */
    prevYear() {
        // Previous year from calendar
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    }
    /**
     * @return {?}
     */
    nextYear() {
        // Next year from calendar
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    }
    /**
     * @return {?}
     */
    todayClicked() {
        // Today button clicked
        const /** @type {?} */ today = this.getToday();
        if (!this.utilService.isDisabledDay(today, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays)) {
            this.selectDate(today);
        }
        if (today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
    }
    /**
     * @param {?} cell
     * @return {?}
     */
    cellClicked(cell) {
        // Cell clicked on the calendar
        if (cell.cmo === this.prevMonthId) {
            // Previous month day
            this.prevMonth();
        }
        else if (cell.cmo === this.currMonthId) {
            // Current month day - if date is already selected clear it
            if (cell.dateObj.year === this.selectedDate.year &&
                cell.dateObj.month === this.selectedDate.month &&
                cell.dateObj.day === this.selectedDate.day) {
                this.clearDate();
            }
            else {
                this.selectDate(cell.dateObj);
            }
        }
        else if (cell.cmo === this.nextMonthId) {
            // Next month day
            this.nextMonth();
        }
        this.resetMonthYearEdit();
    }
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    cellKeyDown(event, cell) {
        // Cell keyboard handling
        if ((event.keyCode === KeyCode$1.enter || event.keyCode === KeyCode$1.space) && !cell.disabled) {
            event.preventDefault();
            this.cellClicked(cell);
        }
    }
    /**
     * @return {?}
     */
    clearDate() {
        // Clears the date and notifies parent using callbacks and value accessor
        const /** @type {?} */ date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: '', epoc: 0 });
        this.onChangeCb('');
        this.onTouchedCb();
        this.updateDateValue(date, true);
        this.setZIndex();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    selectDate(date) {
        // Date selected, notifies parent using callbacks and value accessor
        this.tmp = date;
        const /** @type {?} */ dateModel = this.getDateModel(date);
        this.dateChanged.emit(dateModel);
        this.onChangeCb(dateModel);
        this.onTouchedCb();
        this.updateDateValue(date, false);
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByDateSel);
        }
        if (this.opts.closeAfterSelect) {
            this.showSelector = false;
            this.removeInlineStyle();
        }
        // hide calendar when date was clicked
        // this.showSelector = false;
    }
    /**
     * @param {?} date
     * @param {?} clear
     * @return {?}
     */
    updateDateValue(date, clear) {
        // Updates date values
        this.selectedDate = date;
        this.selectionDayTxt = clear ? '' : this.formatDate(date);
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getDateModel(date) {
        // Creates a date model object from the given parameter
        return this.formatDate(date);
    }
    /**
     * @param {?} val
     * @return {?}
     */
    preZero(val) {
        // Prepend zero if smaller than 10
        return parseInt(val, 0) < 10 ? '0' + val : val;
    }
    /**
     * @param {?} val
     * @return {?}
     */
    formatDate(val) {
        // Returns formatted date string, if mmm is part of dateFormat returns month as a string
        // days
        const /** @type {?} */ d = val.day; // 1 - 31
        const /** @type {?} */ dd = this.preZero(val.day); // 01 - 31
        const /** @type {?} */ ddd = this.opts.dayLabels[this.getWeekday(val)]; // Sun-Sat
        const /** @type {?} */ dddd = this.opts.dayLabelsFull[this.getWeekday(val)]; // Sunday – Saturday
        const /** @type {?} */ m = val.month; // 1 - 12
        const /** @type {?} */ mm = this.preZero(val.month); // 01 - 12
        const /** @type {?} */ mmm = this.getMonthShort(val.month); // Jan - Dec
        const /** @type {?} */ mmmm = this.getMonthFull(val.month); // January – December
        const /** @type {?} */ yy = val.year.toString().slice(2, 4); // 00 - 99
        const /** @type {?} */ yyyy = val.year; // 2000 - 2999
        const /** @type {?} */ toReplace = this.opts.dateFormat.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        let /** @type {?} */ formatted = '';
        toReplace.forEach((el) => {
            switch (el) {
                case 'dddd':
                    el = el.replace(el, dddd);
                    break;
                case 'ddd':
                    el = el.replace(el, ddd);
                    break;
                case 'dd':
                    el = el.replace(el, dd);
                    break;
                case 'd':
                    el = el.replace(el, d);
                    break;
                case 'mmmm':
                    el = el.replace(el, mmmm);
                    break;
                case 'mmm':
                    el = el.replace(el, mmm);
                    break;
                case 'mm':
                    el = el.replace(el, mm);
                    break;
                case 'm':
                    el = el.replace(el, m);
                    break;
                case 'yyyy':
                    el = el.replace(el, yyyy);
                    break;
                case 'yy':
                    el = el.replace(el, yy);
                    break;
            }
            formatted += el;
        });
        return formatted;
    }
    /**
     * @param {?} m
     * @return {?}
     */
    monthText(m) {
        // Returns month as a text
        return this.opts.monthLabels[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    weekText(m) {
        // Returns month as a text
        return this.opts.dayLabelsFull[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    getMonthShort(m) {
        return this.opts.monthLabels[m];
    }
    /**
     * @param {?} m
     * @return {?}
     */
    getMonthFull(m) {
        return this.opts.monthLabelsFull[m];
    }
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    monthStartIdx(y, m) {
        // Month start index
        const /** @type {?} */ d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        const /** @type {?} */ idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    daysInMonth(m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    daysInPrevMonth(m, y) {
        // Return number of days of the previous month
        const /** @type {?} */ d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    }
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} cmo
     * @param {?} today
     * @return {?}
     */
    isCurrDay(d, m, y, cmo, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    }
    /**
     * @return {?}
     */
    getToday() {
        const /** @type {?} */ date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getTimeInMilliseconds(date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    }
    /**
     * @param {?} date
     * @return {?}
     */
    getWeekday(date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.utilService.getDayNumber(date)];
    }
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    getDate(year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    }
    /**
     * @return {?}
     */
    sundayIdx() {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    }
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    generateCalendar(m, y, notifyChange) {
        this.dates.length = 0;
        const /** @type {?} */ today = this.getToday();
        const /** @type {?} */ monthStart = this.monthStartIdx(y, m);
        const /** @type {?} */ dInThisM = this.daysInMonth(m, y);
        const /** @type {?} */ dInPrevM = this.daysInPrevMonth(m, y);
        let /** @type {?} */ dayNbr = 1;
        let /** @type {?} */ cmo = this.prevMonthId;
        for (let /** @type {?} */ i = 1; i < 7; i++) {
            const /** @type {?} */ week = [];
            if (i === 1) {
                // First week
                const /** @type {?} */ pm = dInPrevM - monthStart + 1;
                // Previous month
                for (let /** @type {?} */ j = pm; j <= dInPrevM; j++) {
                    const /** @type {?} */ date = { year: y, month: m - 1, day: j };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                }
                cmo = this.currMonthId;
                // Current month
                const /** @type {?} */ daysLeft = 7 - week.length;
                for (let /** @type {?} */ j = 0; j < daysLeft; j++) {
                    const /** @type {?} */ date = { year: y, month: m, day: dayNbr };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                    dayNbr++;
                }
            }
            else {
                // Rest of the weeks
                for (let /** @type {?} */ j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    const /** @type {?} */ date = { year: y, month: cmo === this.currMonthId ? m : m + 1, day: dayNbr };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                    dayNbr++;
                }
            }
            const /** @type {?} */ weekNbr = this.opts.showWeekNumbers &&
                this.opts.firstDayOfWeek === 'mo' ?
                this.utilService.getWeekNumber(week[0].dateObj) : 0;
            this.dates.push({ week: week, weekNbr: weekNbr });
        }
        this.setHeaderBtnDisabledState(m, y);
        if (notifyChange) {
            // Notify parent
            this.calendarViewChanged.emit({
                year: y,
                month: m,
                first: {
                    number: 1,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: 1
                    })
                },
                last: {
                    number: dInThisM,
                    weekday: this.getWeekday({
                        year: y,
                        month: m,
                        day: dInThisM
                    })
                }
            });
        }
        this.monthList();
        this.yearsList();
    }
    /**
     * @param {?} selDate
     * @return {?}
     */
    parseSelectedDate(selDate) {
        // Parse selDate value - it can be string or IMyDate object
        let /** @type {?} */ date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === 'string') {
            const /** @type {?} */ sd = /** @type {?} */ (selDate);
            date.day = this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'dd');
            date.month = this.opts.dateFormat.indexOf('mmm') !== -1
                ? this.utilService.parseDatePartMonthName(this.opts.dateFormat, sd, 'mmm', this.opts.monthLabels)
                : this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'mm');
            date.year = this.utilService.parseDatePartNumber(this.opts.dateFormat, sd, 'yyyy');
        }
        else if (typeof selDate === 'object') {
            date = selDate;
        }
        this.selectionDayTxt = this.formatDate(date);
        return date;
    }
    /**
     * @param {?} ms
     * @return {?}
     */
    parseSelectedMonth(ms) {
        return this.utilService.parseDefaultMonth(ms);
    }
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    setHeaderBtnDisabledState(m, y) {
        let /** @type {?} */ dpm = false;
        let /** @type {?} */ dpy = false;
        let /** @type {?} */ dnm = false;
        let /** @type {?} */ dny = false;
        if (this.opts.disableHeaderButtons) {
            dpm = this.utilService.isMonthDisabledByDisableUntil({
                year: m === 1 ? y - 1 : y,
                month: m === 1 ? 12 : m - 1,
                day: this.daysInMonth(m === 1 ? 12 : m - 1, m === 1 ? y - 1 : y)
            }, this.opts.disableUntil);
            dpy = this.utilService.isMonthDisabledByDisableUntil({
                year: y - 1,
                month: m,
                day: this.daysInMonth(m, y - 1)
            }, this.opts.disableUntil);
            dnm = this.utilService.isMonthDisabledByDisableSince({
                year: m === 12 ? y + 1 : y,
                month: m === 12 ? 1 : m + 1,
                day: 1
            }, this.opts.disableSince);
            dny = this.utilService.isMonthDisabledByDisableSince({ year: y + 1, month: m, day: 1 }, this.opts.disableSince);
        }
        this.prevMonthDisabled = m === 1 && y === this.opts.minYear || dpm;
        this.prevYearDisabled = y - 1 < this.opts.minYear || dpy;
        this.nextMonthDisabled = m === 12 && y === this.opts.maxYear || dnm;
        this.nextYearDisabled = y + 1 > this.opts.maxYear || dny;
    }
    /**
     * @return {?}
     */
    checkActive() {
        if (this.placeholder.length > 0) {
            return true;
        }
        else {
            if (this.showSelector) {
                return true;
            }
            else {
                return false;
            }
        }
    }
}
MDBDatePickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-date-picker',
                exportAs: 'mdbdatepicker',
                template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. --> <div class=\"mydp picker\" [ngClass]=\"{'picker--opened': showSelector}\" [ngStyle]=\"{'width': opts.width}\"> <div class=\"md-form\"> <label *ngIf=\"label.length > 0\"  [ngClass]=\"{ 'active': checkActive(), 'disabled': opts.componentDisabled }\">{{ label }}</label> <input  type=\"text\"  class=\"form-control mydp-date\"  [attr.aria-label]=\"opts.ariaLabelInputField\"  (click)=\"openBtnClicked()\"  [attr.maxlength]=\"opts.dateFormat.length\"  [ngClass]=\"{ 'selectiondisabled': opts.componentDisabled, 'disabled': opts.componentDisabled }\" placeholder=\"{{ placeholder }}\"  [ngModel]=\"selectionDayTxt\"  (ngModelChange)=\"onUserDateInput($event)\"  [value]=\"selectionDayTxt\"  [ngStyle]=\"{ 'height': opts.height,  'font-size': opts.selectionTxtFontSize }\" (blur)=\"onBlurInput($event)\"  [disabled]=\"opts.componentDisabled\"  autocomplete=\"off\"> </div> <div class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\" #divFocus [ngClass]=\"{'alignselectorright': opts.alignSelectorRight}\" tabindex=\"0\"> <div class=\"picker__frame picker__box\"> <div class=\"picker__header\"> <div class=\"picker__date-display\"> <div class=\"picker__weekday-display\"> {{ weekText(getWeekday(tmp)) }} </div> <div class=\"picker__month-display\"> <div>{{ monthText(tmp.month) }}</div> </div> <div class=\"picker__day-display\"> <div>{{ tmp.day }}</div> </div> <div class=\"picker__year-display\"> <div>{{ tmp.year }}</div> </div> </div> <select class=\"picker__select--year\" [(ngModel)]=\"visibleMonth.year\" (ngModelChange)=\"onUserYearInput($event)\" role=\"menu\" aria-label=\"Year selector\"> <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option> </select> <select class=\"picker__select--month\" [(ngModel)]=\"visibleMonth.monthTxt\" (ngModelChange)=\"onUserMonthInput($event)\" role=\"menu\" aria-label=\"Month selector\"> <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option> </select> <button class=\"picker__nav--prev\" data-nav=\"-1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Previous month\" (click)=\"prevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button> <button class=\"picker__nav--next\" data-nav=\"1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Next month\" (click)=\"nextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button> </div> <table class=\"picker__table\"> <thead><tr><th class=\"picker__weekday weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th><th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th></tr></thead> <tbody> <tr *ngFor=\"let w of dates\"> <td class=\"picker__day daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td> <td class=\"picker__day\" *ngFor=\"let d of w.week\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId&&!d.disabled, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\"> <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div> <div class=\"picker__day\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId,'picker__day--outfocus': (d.cmo===nextMonthId || d.cmo===prevMonthId), 'picker__day--today':d.currDay&&opts.markCurrentDay, 'picker__day--selected picker__day--highlighted':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId}\" (click)=\"!d.disabled&&cellClicked(d);$event.stopPropagation()\" (keydown)=\"cellKeyDown($event, d)\" tabindex=\"0\"> {{d.dateObj.day}} </div> </td> </tr> </tbody> </table> <div class=\"picker__footer\"> <button type=\"button\"  *ngIf=\"opts.showTodayBtn\"  class=\"picker__button--today\" (click)=\"todayClicked()\" role=\"button\" [attr.aria-label]=\"opts.todayBtnTxt\"> {{opts.todayBtnTxt}} </button> <button type=\"button\" *ngIf=\"opts.showClearDateBtn\" class=\"picker__button--clear\" (click)=\"removeBtnClicked()\" role=\"button\" [attr.aria-label]=\"opts.clearBtnTxt\"> {{opts.clearBtnTxt}} </button> <button type=\"button\" [ngClass]=\"{'ml-auto': !opts.showTodayBtn}\" class=\"picker__button--close\" (click)=\"showSelector = false; removeInlineStyle();\" role=\"button\" [attr.aria-label]=\"opts.closeBtnTxt\"> {{opts.closeBtnTxt}} </button> </div> </div> </div> </div> ",
                providers: [LocaleService, UtilService, MYDP_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MDBDatePickerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: LocaleService, },
    { type: UtilService, },
];
MDBDatePickerComponent.propDecorators = {
    "options": [{ type: Input },],
    "locale": [{ type: Input },],
    "defaultMonth": [{ type: Input },],
    "selDate": [{ type: Input },],
    "label": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "selector": [{ type: Input },],
    "disabled": [{ type: Input },],
    "dateChanged": [{ type: Output },],
    "inputFieldChanged": [{ type: Output },],
    "calendarViewChanged": [{ type: Output },],
    "calendarToggle": [{ type: Output },],
    "inputFocusBlur": [{ type: Output },],
    "divFocus": [{ type: ViewChild, args: ['divFocus',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DatepickerModule {
}
DatepickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
                exports: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SimpleChartComponent {
    constructor() {
        this.options = {
            barColor: null,
            trackColor: null,
            scaleColor: null,
            scaleLength: '',
            lineCap: null,
            lineWidth: null,
            trackWidth: null,
            size: null,
            rotate: null,
            duration: null,
            enableAnimation: null,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.options.barColor = '#' + this.barColor;
        this.options.trackColor = '#' + this.trackColor;
        this.options.scaleColor = '#' + this.scaleColor;
        this.options.scaleLength = this.scaleLength;
        this.options.lineCap = this.lineCap;
        this.options.lineWidth = this.lineWidth;
        this.options.trackWidth = this.trackWidth;
        this.options.size = this.size;
        this.options.rotate = this.rotate;
        this.options.animate.duration = this.animate.duration;
        this.options.animate.enabled = this.animate.enabled;
    }
}
SimpleChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-simple-chart',
                template: "<span class=\"min-chart\"> <span class=\"percent\">{{ percent }}</span> <mdb-easy-pie-chart [percent]=\"percent\" [options]=\"options\"></mdb-easy-pie-chart> </span>",
                styles: []
            },] },
];
/** @nocollapse */
SimpleChartComponent.ctorParameters = () => [];
SimpleChartComponent.propDecorators = {
    "percent": [{ type: Input, args: ['percent',] },],
    "barColor": [{ type: Input, args: ['barColor',] },],
    "trackColor": [{ type: Input, args: ['trackColor',] },],
    "scaleColor": [{ type: Input, args: ['scaleColor',] },],
    "scaleLength": [{ type: Input, args: ['scaleLength',] },],
    "lineCap": [{ type: Input, args: ['lineCap',] },],
    "lineWidth": [{ type: Input, args: ['lineWidth',] },],
    "trackWidth": [{ type: Input, args: ['trackWidth',] },],
    "size": [{ type: Input, args: ['size',] },],
    "rotate": [{ type: Input, args: ['rotate',] },],
    "animate": [{ type: Input, args: ['animate',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EasyPieChartComponent {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
        this.element = el;
        const /** @type {?} */ options = {
            barColor: '#ef1e25',
            trackColor: '#f9f9f9',
            scaleColor: '#dfe0e0',
            scaleLength: 5,
            lineCap: 'round',
            lineWidth: 3,
            size: 110,
            rotate: 0,
            animate: {
                duration: 1000,
                enabled: true
            }
        };
        this.options = Object.assign(options, this.options);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isBrowser) {
            this.element.nativeElement.innerHTML = '';
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    }
}
EasyPieChartComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-easy-pie-chart',
                template: '<div>Loading</div>'
            },] },
];
/** @nocollapse */
EasyPieChartComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
EasyPieChartComponent.propDecorators = {
    "percent": [{ type: Input, args: ['percent',] },],
    "options": [{ type: Input, args: ['options',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChartSimpleModule {
}
ChartSimpleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SimpleChartComponent, EasyPieChartComponent
                ],
                exports: [
                    SimpleChartComponent, EasyPieChartComponent
                ],
                imports: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const UploadStatus = {
    Queue: 0,
    Uploading: 1,
    Done: 2,
    Canceled: 3,
};
UploadStatus[UploadStatus.Queue] = "Queue";
UploadStatus[UploadStatus.Uploading] = "Uploading";
UploadStatus[UploadStatus.Done] = "Done";
UploadStatus[UploadStatus.Canceled] = "Canceled";
/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @record
 */

/**
 * @param {?} bytes
 * @return {?}
 */
function humanizeBytes(bytes) {
    if (bytes === 0) {
        return '0 Byte';
    }
    const /** @type {?} */ k = 1024;
    const /** @type {?} */ sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    const /** @type {?} */ i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
class MDBUploaderService {
    constructor() {
        this.setToNullValue = null;
        this.files = [];
        this.serviceEvents = new EventEmitter();
        this.uploads = [];
    }
    /**
     * @param {?} files
     * @return {?}
     */
    handleFiles(files) {
        this.fileList = files;
        this.files = [].map.call(files, (file, i) => {
            // const uploadFile: UploadFile = {
            const /** @type {?} */ uploadFile = {
                fileIndex: i,
                id: this.generateId(),
                name: file.name,
                size: file.size,
                type: file.type,
                progress: {
                    status: UploadStatus.Queue,
                    data: {
                        percentage: 0,
                        speed: null,
                        speedHuman: null
                    }
                },
                lastModifiedDate: file.lastModifiedDate
            };
            this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        });
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    }
    /**
     * @param {?} input
     * @return {?}
     */
    initInputEvents(input) {
        // input.subscribe((event: UploadInput) => {
        // input.subscribe((event: UploadInput) => {
        input.subscribe((event) => {
            switch (event.type) {
                case 'uploadFile':
                    this.serviceEvents.emit({ type: 'start', file: event.file });
                    const /** @type {?} */ sub = this.uploadFile(event.file, event).subscribe((data) => {
                        this.serviceEvents.emit(data);
                    });
                    this.uploads.push({ file: event.file, sub: sub });
                    break;
                case 'uploadAll':
                    // Lines 118, 121 and 129 commented due to ts comipilator check “noUnusedLocals”: true, “noUnusedParameters”: true,
                    // const concurrency = event.concurrency > 0 ? event.concurrency : Number.POSITIVE_INFINITY;
                    // const subscriber = Subscriber.create((data: UploadOutput) => {
                    //   this.serviceEvents.emit(data);
                    // });
                    this.uploads = this.uploads.concat(this.files.map((file) => {
                        return { file: file, sub: this.setToNullValue };
                    }));
                    // const subscription = Observable.from(this.files.map(file => this.uploadFile(file, event)))
                    //   .mergeAll(concurrency)
                    //   .combineLatest(data => data)
                    //   .subscribe(subscriber);
                    break;
                case 'cancel':
                    const /** @type {?} */ id = event.id || null;
                    if (!id) {
                        return;
                    }
                    // const index = this.uploads.findIndex(upload => upload.file.id === id);
                    const /** @type {?} */ index = this.uploads.findIndex((upload) => upload.file.id === id);
                    if (index !== -1) {
                        if (this.uploads[index].sub) {
                            this.uploads[index].sub.unsubscribe();
                        }
                        this.serviceEvents.emit({ type: 'cancelled', file: this.uploads[index].file });
                        this.uploads[index].file.progress.status = UploadStatus.Canceled;
                    }
                    break;
                case 'cancelAll':
                    // this.uploads.forEach(upload => {
                    this.uploads.forEach((upload) => {
                        upload.file.progress.status = UploadStatus.Canceled;
                        this.serviceEvents.emit({ type: 'cancelled', file: upload.file });
                    });
                    break;
            }
        });
    }
    /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    uploadFile(file, event) {
        return new Observable(observer => {
            const /** @type {?} */ url = event.url;
            const /** @type {?} */ method = event.method || 'POST';
            const /** @type {?} */ data = event.data || {};
            const /** @type {?} */ headers = event.headers || {};
            const /** @type {?} */ reader = new FileReader();
            const /** @type {?} */ xhr = new XMLHttpRequest();
            let /** @type {?} */ time = new Date().getTime();
            let /** @type {?} */ load = 0;
            xhr.upload.addEventListener('progress', (e) => {
                if (e.lengthComputable) {
                    const /** @type {?} */ percentage = Math.round((e.loaded * 100) / e.total);
                    const /** @type {?} */ diff = new Date().getTime() - time;
                    time += diff;
                    load = e.loaded - load;
                    const /** @type {?} */ speed = parseInt(/** @type {?} */ ((load / diff * 1000)), 10);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: `${humanizeBytes(speed)}/s`
                        }
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }, false);
            xhr.upload.addEventListener('error', (e) => {
                observer.error(e);
                observer.complete();
            });
            xhr.onreadystatechange = () => {
                if (xhr.readyState === XMLHttpRequest.DONE) {
                    file.progress = {
                        status: UploadStatus.Done,
                        data: {
                            percentage: 100,
                            speed: null,
                            speedHuman: null
                        }
                    };
                    try {
                        file.response = JSON.parse(xhr.response);
                    }
                    catch (/** @type {?} */ e) {
                        file.response = xhr.response;
                    }
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            };
            xhr.open(method, url, true);
            const /** @type {?} */ form = new FormData();
            try {
                const /** @type {?} */ uploadFile = this.fileList.item(file.fileIndex);
                const /** @type {?} */ uploadIndex = this.uploads.findIndex((upload) => upload.file.size === uploadFile.size);
                if (this.uploads[uploadIndex].file.progress.status === UploadStatus.Canceled) {
                    observer.complete();
                }
                form.append('file', uploadFile, uploadFile.name);
                Object.keys(data).forEach(key => form.append(key, data[key]));
                Object.keys(headers).forEach(key => xhr.setRequestHeader(key, headers[key]));
                this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(form);
            }
            catch (/** @type {?} */ e) {
                observer.complete();
            }
            return () => {
                xhr.abort();
                reader.abort();
            };
        });
    }
    /**
     * @return {?}
     */
    generateId() {
        return Math.random().toString(36).substring(7);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MDBFileDropDirective {
    /**
     * @param {?} platform_id
     * @param {?} elementRef
     */
    constructor(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = isPlatformServer(this.platform_id);
        this.stopEvent = (e) => {
            e.stopPropagation();
            e.preventDefault();
        };
        this.upload = new MDBUploaderService();
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.upload.serviceEvents.subscribe((event) => {
            this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
        this.el.addEventListener('drop', this.stopEvent, false);
        this.el.addEventListener('dragenter', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isServer) {
            return;
        }
        this.uploadInput.unsubscribe();
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDrop(e) {
        e.stopPropagation();
        e.preventDefault();
        const /** @type {?} */ event = { type: 'drop' };
        this.uploadOutput.emit(event);
        this.upload.handleFiles(e.dataTransfer.files);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDragOver(e) {
        if (!e) {
            return;
        }
        const /** @type {?} */ event = { type: 'dragOver' };
        this.uploadOutput.emit(event);
    }
    /**
     * @param {?} e
     * @return {?}
     */
    onDragLeave(e) {
        if (!e) {
            return;
        }
        const /** @type {?} */ event = { type: 'dragOut' };
        this.uploadOutput.emit(event);
    }
}
MDBFileDropDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbFileDrop]'
            },] },
];
/** @nocollapse */
MDBFileDropDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: ElementRef, },
];
MDBFileDropDirective.propDecorators = {
    "uploadInput": [{ type: Input },],
    "uploadOutput": [{ type: Output },],
    "onDrop": [{ type: HostListener, args: ['drop', ['$event'],] },],
    "onDragOver": [{ type: HostListener, args: ['dragover', ['$event'],] },],
    "onDragLeave": [{ type: HostListener, args: ['dragleave', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MDBFileSelectDirective {
    /**
     * @param {?} platform_id
     * @param {?} elementRef
     */
    constructor(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = isPlatformServer(this.platform_id);
        this.fileListener = () => {
            this.upload.handleFiles(this.el.files);
        };
        this.upload = new MDBUploaderService();
        this.uploadOutput = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.subscribe((event) => {
            this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isServer) {
            return;
        }
        this.el.removeEventListener('change', this.fileListener, false);
        this.uploadInput.unsubscribe();
    }
}
MDBFileSelectDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbFileSelect]'
            },] },
];
/** @nocollapse */
MDBFileSelectDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: ElementRef, },
];
MDBFileSelectDirective.propDecorators = {
    "uploadInput": [{ type: Input },],
    "uploadOutput": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class FileInputModule {
}
FileInputModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    MDBFileSelectDirective,
                    MDBFileDropDirective
                ],
                exports: [
                    MDBFileSelectDirective,
                    MDBFileDropDirective
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CharCounterDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Inititalise a new <span> element for the count display and render it below the host component.
        this.textContainer = this._renderer.createElement('p');
        this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.textContainer);
        this._renderer.addClass(this.textContainer, 'chars');
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    }
    /**
     * @return {?}
     */
    onKeyUp() {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.addClass(this._elRef.nativeElement, 'invalid');
        }
        else {
            this._renderer.removeClass(this._elRef.nativeElement, 'invalid');
        }
    }
    /**
     * @return {?}
     */
    hide() {
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    }
    /**
     * @return {?}
     */
    show() {
        this.onKeyUp();
        this._renderer.setStyle(this.textContainer, 'display', 'block');
    }
}
CharCounterDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCharCounter]'
            },] },
];
/** @nocollapse */
CharCounterDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
CharCounterDirective.propDecorators = {
    "length": [{ type: Input },],
    "onKeyUp": [{ type: HostListener, args: ['input', ['$event'],] },],
    "hide": [{ type: HostListener, args: ['blur', ['$event'],] },],
    "show": [{ type: HostListener, args: ['focus', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CharCounterModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CharCounterModule, providers: [] };
    }
}
CharCounterModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CharCounterDirective],
                exports: [CharCounterDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ImageModalComponent {
    /**
     * @param {?} platformId
     * @param {?} element
     * @param {?} renderer
     */
    constructor(platformId, element, renderer) {
        this.element = element;
        this.renderer = renderer;
        this.opened = false;
        this.loading = false;
        this.showRepeat = false;
        this.isMobile = false;
        this.clicked = false;
        this.isBrowser = false;
        this.zoomed = 'inactive';
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this.smooth = true;
        this.cancelEvent = new EventEmitter();
        this.isBrowser = isPlatformBrowser(platformId);
        this._element = this.element.nativeElement;
        try {
            document.createEvent('TouchEvent');
            this.isMobile = true;
        }
        catch (/** @type {?} */ err) {
            this.isMobile = false;
            return;
        }
    }
    /**
     * @return {?}
     */
    toggleZoomed() {
        // this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
        // this.zoom = !this.zoom;
        const /** @type {?} */ imgRef = this.element.nativeElement.lastElementChild.lastElementChild.firstElementChild;
        if (!this.clicked) {
            this.renderer.setStyle(imgRef, 'transform', 'scale(1.0, 1.0');
            this.renderer.setStyle(imgRef, 'animate', '300ms ease-out');
            this.renderer.setStyle(imgRef, 'cursor', 'zoom-out');
            this.clicked = true;
        }
        else if (this.clicked) {
            this.renderer.setStyle(imgRef, 'transform', 'scale(0.9, 0.9');
            this.renderer.setStyle(imgRef, 'animate', '300ms ease-in');
            this.renderer.setStyle(imgRef, 'cursor', 'zoom-in');
            this.clicked = false;
        }
    }
    /**
     * @return {?}
     */
    toggleRestart() {
        this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    }
    /**
     * @return {?}
     */
    closeGallery() {
        // this.smooth = false;
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    }
    /**
     * @return {?}
     */
    prevImage() {
        // this.smooth = false;
        // this.zoom = false;
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    }
    /**
     * @return {?}
     */
    nextImage() {
        // this.smooth = false;
        // this.zoom = false;
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    openGallery(index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (let /** @type {?} */ i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.modalImages[i].img;
                this.loading = false;
                break;
            }
        }
    }
    /**
     * @return {?}
     */
    fullScreen() {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    }
    /**
     * @return {?}
     */
    get is_iPhone_or_iPod() {
        if (this.isBrowser) {
            if (navigator && navigator.userAgent && navigator.userAgent != null) {
                const /** @type {?} */ strUserAgent = navigator.userAgent.toLowerCase();
                const /** @type {?} */ arrMatches = strUserAgent.match(/ipad/);
                if (arrMatches != null) {
                    return true;
                }
            }
            return false;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyboardControl(event) {
        if (event.keyCode === 39) {
            this.nextImage();
        }
        if (event.keyCode === 37) {
            this.prevImage();
        }
        if (event.keyCode === 27) {
            this.closeGallery();
        }
    }
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        // let thisImg = this._element.querySelector('.ng-gallery-content').querySelector('img[src="' + this.imgSrc + '"]');
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.nextImage();
            // console.log(event.distance, this.modalImages);
        }
        // previous
        if (action === this.SWIPE_ACTION.LEFT) {
            this.prevImage();
        }
    }
}
ImageModalComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-image-modal',
                template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"showRepeat\">  <figure class=\"col-md-4\" *ngFor =\"let i of modalImages; let index = index\"> <img src=\"{{ !i.thumb ? i.img : i.thumb }}\" class=\"ng-thumb\" (click)=\"openGallery(index)\" alt=\"Image {{ index + 1 }}\" /> </figure> </div> <div  tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\"> <div class=\"top-bar\" style='z-index: 100000'> <span class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span>     <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a> <a *ngIf=\"!is_iPhone_or_iPod\" class=\"fullscreen-toogle\" [class.toggled]='fullscreen' (click)=\"fullScreen()\"></a> <a class=\"zoom-toogle\" [class.zoom]='zoom' (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a> </div> <div class=\"ng-gallery-content\"> <!--<img *ngIf=\"!loading\" src=\"{{imgSrc}}\" (mousedown)=\"checkEvent($event)\" (mouseup)=\"setZoom($event)\" [class.zoom]='zoom' [class.smooth]='smooth' class=\"effect\" (swipeleft)=\"swipe($event, $event.type)\" (swiperight)=\"swipe($event, $event.type)\"/>--> <img *ngIf=\"!loading\" src=\"{{imgSrc}}\" [class.smooth]='smooth' class=\"effect\" (swipeleft)=\"swipe($event, $event.type)\" (swiperight)=\"swipe($event, $event.type)\" (click)=\"toggleZoomed()\" style=\"transform: scale(0.9, 0.9)\"/> <div class=\"uil-ring-css\" *ngIf=\"loading\"> <div></div> </div>   <a class=\"nav-left\" *ngIf=\"modalImages.length >1 && !isMobile\" (click)=\"prevImage()\" > <span></span> </a> <a class=\"nav-right\" *ngIf=\"modalImages.length >1 && !isMobile\" (click)=\"nextImage()\"> <span></span> </a> </div> </div> <div *ngIf=\"openModalWindow\"> <mdb-image-modal [modalImages]=\"images\" [imagePointer]=\"imagePointer\" (cancelEvent)=\"cancelImageModel()\"></mdb-image-modal> </div>",
            },] },
];
/** @nocollapse */
ImageModalComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: ElementRef, },
    { type: Renderer2, },
];
ImageModalComponent.propDecorators = {
    "modalImages": [{ type: Input, args: ['modalImages',] },],
    "imagePointer": [{ type: Input, args: ['imagePointer',] },],
    "fullscreen": [{ type: Input, args: ['fullscreen',] },],
    "zoom": [{ type: Input, args: ['zoom',] },],
    "smooth": [{ type: Input, args: ['smooth',] },],
    "type": [{ type: Input, args: ['type',] },],
    "cancelEvent": [{ type: Output, args: ['cancelEvent',] },],
    "keyboardControl": [{ type: HostListener, args: ['document:keyup', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LightBoxModule {
}
LightBoxModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [ImageModalComponent],
                exports: [ImageModalComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Diacritics {
    /**
     * @param {?} text
     * @return {?}
     */
    static strip(text) {
        const /** @type {?} */ match = (a) => {
            return this.DIACRITICS[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    }
}
Diacritics.DIACRITICS = {
    '\u24B6': 'A',
    '\uFF21': 'A',
    '\u00C0': 'A',
    '\u00C1': 'A',
    '\u00C2': 'A',
    '\u1EA6': 'A',
    '\u1EA4': 'A',
    '\u1EAA': 'A',
    '\u1EA8': 'A',
    '\u00C3': 'A',
    '\u0100': 'A',
    '\u0102': 'A',
    '\u1EB0': 'A',
    '\u1EAE': 'A',
    '\u1EB4': 'A',
    '\u1EB2': 'A',
    '\u0226': 'A',
    '\u01E0': 'A',
    '\u00C4': 'A',
    '\u01DE': 'A',
    '\u1EA2': 'A',
    '\u00C5': 'A',
    '\u01FA': 'A',
    '\u01CD': 'A',
    '\u0200': 'A',
    '\u0202': 'A',
    '\u1EA0': 'A',
    '\u1EAC': 'A',
    '\u1EB6': 'A',
    '\u1E00': 'A',
    '\u0104': 'A',
    '\u023A': 'A',
    '\u2C6F': 'A',
    '\uA732': 'AA',
    '\u00C6': 'AE',
    '\u01FC': 'AE',
    '\u01E2': 'AE',
    '\uA734': 'AO',
    '\uA736': 'AU',
    '\uA738': 'AV',
    '\uA73A': 'AV',
    '\uA73C': 'AY',
    '\u24B7': 'B',
    '\uFF22': 'B',
    '\u1E02': 'B',
    '\u1E04': 'B',
    '\u1E06': 'B',
    '\u0243': 'B',
    '\u0182': 'B',
    '\u0181': 'B',
    '\u24B8': 'C',
    '\uFF23': 'C',
    '\u0106': 'C',
    '\u0108': 'C',
    '\u010A': 'C',
    '\u010C': 'C',
    '\u00C7': 'C',
    '\u1E08': 'C',
    '\u0187': 'C',
    '\u023B': 'C',
    '\uA73E': 'C',
    '\u24B9': 'D',
    '\uFF24': 'D',
    '\u1E0A': 'D',
    '\u010E': 'D',
    '\u1E0C': 'D',
    '\u1E10': 'D',
    '\u1E12': 'D',
    '\u1E0E': 'D',
    '\u0110': 'D',
    '\u018B': 'D',
    '\u018A': 'D',
    '\u0189': 'D',
    '\uA779': 'D',
    '\u01F1': 'DZ',
    '\u01C4': 'DZ',
    '\u01F2': 'Dz',
    '\u01C5': 'Dz',
    '\u24BA': 'E',
    '\uFF25': 'E',
    '\u00C8': 'E',
    '\u00C9': 'E',
    '\u00CA': 'E',
    '\u1EC0': 'E',
    '\u1EBE': 'E',
    '\u1EC4': 'E',
    '\u1EC2': 'E',
    '\u1EBC': 'E',
    '\u0112': 'E',
    '\u1E14': 'E',
    '\u1E16': 'E',
    '\u0114': 'E',
    '\u0116': 'E',
    '\u00CB': 'E',
    '\u1EBA': 'E',
    '\u011A': 'E',
    '\u0204': 'E',
    '\u0206': 'E',
    '\u1EB8': 'E',
    '\u1EC6': 'E',
    '\u0228': 'E',
    '\u1E1C': 'E',
    '\u0118': 'E',
    '\u1E18': 'E',
    '\u1E1A': 'E',
    '\u0190': 'E',
    '\u018E': 'E',
    '\u24BB': 'F',
    '\uFF26': 'F',
    '\u1E1E': 'F',
    '\u0191': 'F',
    '\uA77B': 'F',
    '\u24BC': 'G',
    '\uFF27': 'G',
    '\u01F4': 'G',
    '\u011C': 'G',
    '\u1E20': 'G',
    '\u011E': 'G',
    '\u0120': 'G',
    '\u01E6': 'G',
    '\u0122': 'G',
    '\u01E4': 'G',
    '\u0193': 'G',
    '\uA7A0': 'G',
    '\uA77D': 'G',
    '\uA77E': 'G',
    '\u24BD': 'H',
    '\uFF28': 'H',
    '\u0124': 'H',
    '\u1E22': 'H',
    '\u1E26': 'H',
    '\u021E': 'H',
    '\u1E24': 'H',
    '\u1E28': 'H',
    '\u1E2A': 'H',
    '\u0126': 'H',
    '\u2C67': 'H',
    '\u2C75': 'H',
    '\uA78D': 'H',
    '\u24BE': 'I',
    '\uFF29': 'I',
    '\u00CC': 'I',
    '\u00CD': 'I',
    '\u00CE': 'I',
    '\u0128': 'I',
    '\u012A': 'I',
    '\u012C': 'I',
    '\u0130': 'I',
    '\u00CF': 'I',
    '\u1E2E': 'I',
    '\u1EC8': 'I',
    '\u01CF': 'I',
    '\u0208': 'I',
    '\u020A': 'I',
    '\u1ECA': 'I',
    '\u012E': 'I',
    '\u1E2C': 'I',
    '\u0197': 'I',
    '\u24BF': 'J',
    '\uFF2A': 'J',
    '\u0134': 'J',
    '\u0248': 'J',
    '\u24C0': 'K',
    '\uFF2B': 'K',
    '\u1E30': 'K',
    '\u01E8': 'K',
    '\u1E32': 'K',
    '\u0136': 'K',
    '\u1E34': 'K',
    '\u0198': 'K',
    '\u2C69': 'K',
    '\uA740': 'K',
    '\uA742': 'K',
    '\uA744': 'K',
    '\uA7A2': 'K',
    '\u24C1': 'L',
    '\uFF2C': 'L',
    '\u013F': 'L',
    '\u0139': 'L',
    '\u013D': 'L',
    '\u1E36': 'L',
    '\u1E38': 'L',
    '\u013B': 'L',
    '\u1E3C': 'L',
    '\u1E3A': 'L',
    '\u0141': 'L',
    '\u023D': 'L',
    '\u2C62': 'L',
    '\u2C60': 'L',
    '\uA748': 'L',
    '\uA746': 'L',
    '\uA780': 'L',
    '\u01C7': 'LJ',
    '\u01C8': 'Lj',
    '\u24C2': 'M',
    '\uFF2D': 'M',
    '\u1E3E': 'M',
    '\u1E40': 'M',
    '\u1E42': 'M',
    '\u2C6E': 'M',
    '\u019C': 'M',
    '\u24C3': 'N',
    '\uFF2E': 'N',
    '\u01F8': 'N',
    '\u0143': 'N',
    '\u00D1': 'N',
    '\u1E44': 'N',
    '\u0147': 'N',
    '\u1E46': 'N',
    '\u0145': 'N',
    '\u1E4A': 'N',
    '\u1E48': 'N',
    '\u0220': 'N',
    '\u019D': 'N',
    '\uA790': 'N',
    '\uA7A4': 'N',
    '\u01CA': 'NJ',
    '\u01CB': 'Nj',
    '\u24C4': 'O',
    '\uFF2F': 'O',
    '\u00D2': 'O',
    '\u00D3': 'O',
    '\u00D4': 'O',
    '\u1ED2': 'O',
    '\u1ED0': 'O',
    '\u1ED6': 'O',
    '\u1ED4': 'O',
    '\u00D5': 'O',
    '\u1E4C': 'O',
    '\u022C': 'O',
    '\u1E4E': 'O',
    '\u014C': 'O',
    '\u1E50': 'O',
    '\u1E52': 'O',
    '\u014E': 'O',
    '\u022E': 'O',
    '\u0230': 'O',
    '\u00D6': 'O',
    '\u022A': 'O',
    '\u1ECE': 'O',
    '\u0150': 'O',
    '\u01D1': 'O',
    '\u020C': 'O',
    '\u020E': 'O',
    '\u01A0': 'O',
    '\u1EDC': 'O',
    '\u1EDA': 'O',
    '\u1EE0': 'O',
    '\u1EDE': 'O',
    '\u1EE2': 'O',
    '\u1ECC': 'O',
    '\u1ED8': 'O',
    '\u01EA': 'O',
    '\u01EC': 'O',
    '\u00D8': 'O',
    '\u01FE': 'O',
    '\u0186': 'O',
    '\u019F': 'O',
    '\uA74A': 'O',
    '\uA74C': 'O',
    '\u01A2': 'OI',
    '\uA74E': 'OO',
    '\u0222': 'OU',
    '\u24C5': 'P',
    '\uFF30': 'P',
    '\u1E54': 'P',
    '\u1E56': 'P',
    '\u01A4': 'P',
    '\u2C63': 'P',
    '\uA750': 'P',
    '\uA752': 'P',
    '\uA754': 'P',
    '\u24C6': 'Q',
    '\uFF31': 'Q',
    '\uA756': 'Q',
    '\uA758': 'Q',
    '\u024A': 'Q',
    '\u24C7': 'R',
    '\uFF32': 'R',
    '\u0154': 'R',
    '\u1E58': 'R',
    '\u0158': 'R',
    '\u0210': 'R',
    '\u0212': 'R',
    '\u1E5A': 'R',
    '\u1E5C': 'R',
    '\u0156': 'R',
    '\u1E5E': 'R',
    '\u024C': 'R',
    '\u2C64': 'R',
    '\uA75A': 'R',
    '\uA7A6': 'R',
    '\uA782': 'R',
    '\u24C8': 'S',
    '\uFF33': 'S',
    '\u1E9E': 'S',
    '\u015A': 'S',
    '\u1E64': 'S',
    '\u015C': 'S',
    '\u1E60': 'S',
    '\u0160': 'S',
    '\u1E66': 'S',
    '\u1E62': 'S',
    '\u1E68': 'S',
    '\u0218': 'S',
    '\u015E': 'S',
    '\u2C7E': 'S',
    '\uA7A8': 'S',
    '\uA784': 'S',
    '\u24C9': 'T',
    '\uFF34': 'T',
    '\u1E6A': 'T',
    '\u0164': 'T',
    '\u1E6C': 'T',
    '\u021A': 'T',
    '\u0162': 'T',
    '\u1E70': 'T',
    '\u1E6E': 'T',
    '\u0166': 'T',
    '\u01AC': 'T',
    '\u01AE': 'T',
    '\u023E': 'T',
    '\uA786': 'T',
    '\uA728': 'TZ',
    '\u24CA': 'U',
    '\uFF35': 'U',
    '\u00D9': 'U',
    '\u00DA': 'U',
    '\u00DB': 'U',
    '\u0168': 'U',
    '\u1E78': 'U',
    '\u016A': 'U',
    '\u1E7A': 'U',
    '\u016C': 'U',
    '\u00DC': 'U',
    '\u01DB': 'U',
    '\u01D7': 'U',
    '\u01D5': 'U',
    '\u01D9': 'U',
    '\u1EE6': 'U',
    '\u016E': 'U',
    '\u0170': 'U',
    '\u01D3': 'U',
    '\u0214': 'U',
    '\u0216': 'U',
    '\u01AF': 'U',
    '\u1EEA': 'U',
    '\u1EE8': 'U',
    '\u1EEE': 'U',
    '\u1EEC': 'U',
    '\u1EF0': 'U',
    '\u1EE4': 'U',
    '\u1E72': 'U',
    '\u0172': 'U',
    '\u1E76': 'U',
    '\u1E74': 'U',
    '\u0244': 'U',
    '\u24CB': 'V',
    '\uFF36': 'V',
    '\u1E7C': 'V',
    '\u1E7E': 'V',
    '\u01B2': 'V',
    '\uA75E': 'V',
    '\u0245': 'V',
    '\uA760': 'VY',
    '\u24CC': 'W',
    '\uFF37': 'W',
    '\u1E80': 'W',
    '\u1E82': 'W',
    '\u0174': 'W',
    '\u1E86': 'W',
    '\u1E84': 'W',
    '\u1E88': 'W',
    '\u2C72': 'W',
    '\u24CD': 'X',
    '\uFF38': 'X',
    '\u1E8A': 'X',
    '\u1E8C': 'X',
    '\u24CE': 'Y',
    '\uFF39': 'Y',
    '\u1EF2': 'Y',
    '\u00DD': 'Y',
    '\u0176': 'Y',
    '\u1EF8': 'Y',
    '\u0232': 'Y',
    '\u1E8E': 'Y',
    '\u0178': 'Y',
    '\u1EF6': 'Y',
    '\u1EF4': 'Y',
    '\u01B3': 'Y',
    '\u024E': 'Y',
    '\u1EFE': 'Y',
    '\u24CF': 'Z',
    '\uFF3A': 'Z',
    '\u0179': 'Z',
    '\u1E90': 'Z',
    '\u017B': 'Z',
    '\u017D': 'Z',
    '\u1E92': 'Z',
    '\u1E94': 'Z',
    '\u01B5': 'Z',
    '\u0224': 'Z',
    '\u2C7F': 'Z',
    '\u2C6B': 'Z',
    '\uA762': 'Z',
    '\u24D0': 'a',
    '\uFF41': 'a',
    '\u1E9A': 'a',
    '\u00E0': 'a',
    '\u00E1': 'a',
    '\u00E2': 'a',
    '\u1EA7': 'a',
    '\u1EA5': 'a',
    '\u1EAB': 'a',
    '\u1EA9': 'a',
    '\u00E3': 'a',
    '\u0101': 'a',
    '\u0103': 'a',
    '\u1EB1': 'a',
    '\u1EAF': 'a',
    '\u1EB5': 'a',
    '\u1EB3': 'a',
    '\u0227': 'a',
    '\u01E1': 'a',
    '\u00E4': 'a',
    '\u01DF': 'a',
    '\u1EA3': 'a',
    '\u00E5': 'a',
    '\u01FB': 'a',
    '\u01CE': 'a',
    '\u0201': 'a',
    '\u0203': 'a',
    '\u1EA1': 'a',
    '\u1EAD': 'a',
    '\u1EB7': 'a',
    '\u1E01': 'a',
    '\u0105': 'a',
    '\u2C65': 'a',
    '\u0250': 'a',
    '\uA733': 'aa',
    '\u00E6': 'ae',
    '\u01FD': 'ae',
    '\u01E3': 'ae',
    '\uA735': 'ao',
    '\uA737': 'au',
    '\uA739': 'av',
    '\uA73B': 'av',
    '\uA73D': 'ay',
    '\u24D1': 'b',
    '\uFF42': 'b',
    '\u1E03': 'b',
    '\u1E05': 'b',
    '\u1E07': 'b',
    '\u0180': 'b',
    '\u0183': 'b',
    '\u0253': 'b',
    '\u24D2': 'c',
    '\uFF43': 'c',
    '\u0107': 'c',
    '\u0109': 'c',
    '\u010B': 'c',
    '\u010D': 'c',
    '\u00E7': 'c',
    '\u1E09': 'c',
    '\u0188': 'c',
    '\u023C': 'c',
    '\uA73F': 'c',
    '\u2184': 'c',
    '\u24D3': 'd',
    '\uFF44': 'd',
    '\u1E0B': 'd',
    '\u010F': 'd',
    '\u1E0D': 'd',
    '\u1E11': 'd',
    '\u1E13': 'd',
    '\u1E0F': 'd',
    '\u0111': 'd',
    '\u018C': 'd',
    '\u0256': 'd',
    '\u0257': 'd',
    '\uA77A': 'd',
    '\u01F3': 'dz',
    '\u01C6': 'dz',
    '\u24D4': 'e',
    '\uFF45': 'e',
    '\u00E8': 'e',
    '\u00E9': 'e',
    '\u00EA': 'e',
    '\u1EC1': 'e',
    '\u1EBF': 'e',
    '\u1EC5': 'e',
    '\u1EC3': 'e',
    '\u1EBD': 'e',
    '\u0113': 'e',
    '\u1E15': 'e',
    '\u1E17': 'e',
    '\u0115': 'e',
    '\u0117': 'e',
    '\u00EB': 'e',
    '\u1EBB': 'e',
    '\u011B': 'e',
    '\u0205': 'e',
    '\u0207': 'e',
    '\u1EB9': 'e',
    '\u1EC7': 'e',
    '\u0229': 'e',
    '\u1E1D': 'e',
    '\u0119': 'e',
    '\u1E19': 'e',
    '\u1E1B': 'e',
    '\u0247': 'e',
    '\u025B': 'e',
    '\u01DD': 'e',
    '\u24D5': 'f',
    '\uFF46': 'f',
    '\u1E1F': 'f',
    '\u0192': 'f',
    '\uA77C': 'f',
    '\u24D6': 'g',
    '\uFF47': 'g',
    '\u01F5': 'g',
    '\u011D': 'g',
    '\u1E21': 'g',
    '\u011F': 'g',
    '\u0121': 'g',
    '\u01E7': 'g',
    '\u0123': 'g',
    '\u01E5': 'g',
    '\u0260': 'g',
    '\uA7A1': 'g',
    '\u1D79': 'g',
    '\uA77F': 'g',
    '\u24D7': 'h',
    '\uFF48': 'h',
    '\u0125': 'h',
    '\u1E23': 'h',
    '\u1E27': 'h',
    '\u021F': 'h',
    '\u1E25': 'h',
    '\u1E29': 'h',
    '\u1E2B': 'h',
    '\u1E96': 'h',
    '\u0127': 'h',
    '\u2C68': 'h',
    '\u2C76': 'h',
    '\u0265': 'h',
    '\u0195': 'hv',
    '\u24D8': 'i',
    '\uFF49': 'i',
    '\u00EC': 'i',
    '\u00ED': 'i',
    '\u00EE': 'i',
    '\u0129': 'i',
    '\u012B': 'i',
    '\u012D': 'i',
    '\u00EF': 'i',
    '\u1E2F': 'i',
    '\u1EC9': 'i',
    '\u01D0': 'i',
    '\u0209': 'i',
    '\u020B': 'i',
    '\u1ECB': 'i',
    '\u012F': 'i',
    '\u1E2D': 'i',
    '\u0268': 'i',
    '\u0131': 'i',
    '\u24D9': 'j',
    '\uFF4A': 'j',
    '\u0135': 'j',
    '\u01F0': 'j',
    '\u0249': 'j',
    '\u24DA': 'k',
    '\uFF4B': 'k',
    '\u1E31': 'k',
    '\u01E9': 'k',
    '\u1E33': 'k',
    '\u0137': 'k',
    '\u1E35': 'k',
    '\u0199': 'k',
    '\u2C6A': 'k',
    '\uA741': 'k',
    '\uA743': 'k',
    '\uA745': 'k',
    '\uA7A3': 'k',
    '\u24DB': 'l',
    '\uFF4C': 'l',
    '\u0140': 'l',
    '\u013A': 'l',
    '\u013E': 'l',
    '\u1E37': 'l',
    '\u1E39': 'l',
    '\u013C': 'l',
    '\u1E3D': 'l',
    '\u1E3B': 'l',
    '\u017F': 'l',
    '\u0142': 'l',
    '\u019A': 'l',
    '\u026B': 'l',
    '\u2C61': 'l',
    '\uA749': 'l',
    '\uA781': 'l',
    '\uA747': 'l',
    '\u01C9': 'lj',
    '\u24DC': 'm',
    '\uFF4D': 'm',
    '\u1E3F': 'm',
    '\u1E41': 'm',
    '\u1E43': 'm',
    '\u0271': 'm',
    '\u026F': 'm',
    '\u24DD': 'n',
    '\uFF4E': 'n',
    '\u01F9': 'n',
    '\u0144': 'n',
    '\u00F1': 'n',
    '\u1E45': 'n',
    '\u0148': 'n',
    '\u1E47': 'n',
    '\u0146': 'n',
    '\u1E4B': 'n',
    '\u1E49': 'n',
    '\u019E': 'n',
    '\u0272': 'n',
    '\u0149': 'n',
    '\uA791': 'n',
    '\uA7A5': 'n',
    '\u01CC': 'nj',
    '\u24DE': 'o',
    '\uFF4F': 'o',
    '\u00F2': 'o',
    '\u00F3': 'o',
    '\u00F4': 'o',
    '\u1ED3': 'o',
    '\u1ED1': 'o',
    '\u1ED7': 'o',
    '\u1ED5': 'o',
    '\u00F5': 'o',
    '\u1E4D': 'o',
    '\u022D': 'o',
    '\u1E4F': 'o',
    '\u014D': 'o',
    '\u1E51': 'o',
    '\u1E53': 'o',
    '\u014F': 'o',
    '\u022F': 'o',
    '\u0231': 'o',
    '\u00F6': 'o',
    '\u022B': 'o',
    '\u1ECF': 'o',
    '\u0151': 'o',
    '\u01D2': 'o',
    '\u020D': 'o',
    '\u020F': 'o',
    '\u01A1': 'o',
    '\u1EDD': 'o',
    '\u1EDB': 'o',
    '\u1EE1': 'o',
    '\u1EDF': 'o',
    '\u1EE3': 'o',
    '\u1ECD': 'o',
    '\u1ED9': 'o',
    '\u01EB': 'o',
    '\u01ED': 'o',
    '\u00F8': 'o',
    '\u01FF': 'o',
    '\u0254': 'o',
    '\uA74B': 'o',
    '\uA74D': 'o',
    '\u0275': 'o',
    '\u01A3': 'oi',
    '\u0223': 'ou',
    '\uA74F': 'oo',
    '\u24DF': 'p',
    '\uFF50': 'p',
    '\u1E55': 'p',
    '\u1E57': 'p',
    '\u01A5': 'p',
    '\u1D7D': 'p',
    '\uA751': 'p',
    '\uA753': 'p',
    '\uA755': 'p',
    '\u24E0': 'q',
    '\uFF51': 'q',
    '\u024B': 'q',
    '\uA757': 'q',
    '\uA759': 'q',
    '\u24E1': 'r',
    '\uFF52': 'r',
    '\u0155': 'r',
    '\u1E59': 'r',
    '\u0159': 'r',
    '\u0211': 'r',
    '\u0213': 'r',
    '\u1E5B': 'r',
    '\u1E5D': 'r',
    '\u0157': 'r',
    '\u1E5F': 'r',
    '\u024D': 'r',
    '\u027D': 'r',
    '\uA75B': 'r',
    '\uA7A7': 'r',
    '\uA783': 'r',
    '\u24E2': 's',
    '\uFF53': 's',
    '\u00DF': 's',
    '\u015B': 's',
    '\u1E65': 's',
    '\u015D': 's',
    '\u1E61': 's',
    '\u0161': 's',
    '\u1E67': 's',
    '\u1E63': 's',
    '\u1E69': 's',
    '\u0219': 's',
    '\u015F': 's',
    '\u023F': 's',
    '\uA7A9': 's',
    '\uA785': 's',
    '\u1E9B': 's',
    '\u24E3': 't',
    '\uFF54': 't',
    '\u1E6B': 't',
    '\u1E97': 't',
    '\u0165': 't',
    '\u1E6D': 't',
    '\u021B': 't',
    '\u0163': 't',
    '\u1E71': 't',
    '\u1E6F': 't',
    '\u0167': 't',
    '\u01AD': 't',
    '\u0288': 't',
    '\u2C66': 't',
    '\uA787': 't',
    '\uA729': 'tz',
    '\u24E4': 'u',
    '\uFF55': 'u',
    '\u00F9': 'u',
    '\u00FA': 'u',
    '\u00FB': 'u',
    '\u0169': 'u',
    '\u1E79': 'u',
    '\u016B': 'u',
    '\u1E7B': 'u',
    '\u016D': 'u',
    '\u00FC': 'u',
    '\u01DC': 'u',
    '\u01D8': 'u',
    '\u01D6': 'u',
    '\u01DA': 'u',
    '\u1EE7': 'u',
    '\u016F': 'u',
    '\u0171': 'u',
    '\u01D4': 'u',
    '\u0215': 'u',
    '\u0217': 'u',
    '\u01B0': 'u',
    '\u1EEB': 'u',
    '\u1EE9': 'u',
    '\u1EEF': 'u',
    '\u1EED': 'u',
    '\u1EF1': 'u',
    '\u1EE5': 'u',
    '\u1E73': 'u',
    '\u0173': 'u',
    '\u1E77': 'u',
    '\u1E75': 'u',
    '\u0289': 'u',
    '\u24E5': 'v',
    '\uFF56': 'v',
    '\u1E7D': 'v',
    '\u1E7F': 'v',
    '\u028B': 'v',
    '\uA75F': 'v',
    '\u028C': 'v',
    '\uA761': 'vy',
    '\u24E6': 'w',
    '\uFF57': 'w',
    '\u1E81': 'w',
    '\u1E83': 'w',
    '\u0175': 'w',
    '\u1E87': 'w',
    '\u1E85': 'w',
    '\u1E98': 'w',
    '\u1E89': 'w',
    '\u2C73': 'w',
    '\u24E7': 'x',
    '\uFF58': 'x',
    '\u1E8B': 'x',
    '\u1E8D': 'x',
    '\u24E8': 'y',
    '\uFF59': 'y',
    '\u1EF3': 'y',
    '\u00FD': 'y',
    '\u0177': 'y',
    '\u1EF9': 'y',
    '\u0233': 'y',
    '\u1E8F': 'y',
    '\u00FF': 'y',
    '\u1EF7': 'y',
    '\u1E99': 'y',
    '\u1EF5': 'y',
    '\u01B4': 'y',
    '\u024F': 'y',
    '\u1EFF': 'y',
    '\u24E9': 'z',
    '\uFF5A': 'z',
    '\u017A': 'z',
    '\u1E91': 'z',
    '\u017C': 'z',
    '\u017E': 'z',
    '\u1E93': 'z',
    '\u1E95': 'z',
    '\u01B6': 'z',
    '\u0225': 'z',
    '\u0240': 'z',
    '\u2C6C': 'z',
    '\uA763': 'z',
    '\u0386': '\u0391',
    '\u0388': '\u0395',
    '\u0389': '\u0397',
    '\u038A': '\u0399',
    '\u03AA': '\u0399',
    '\u038C': '\u039F',
    '\u038E': '\u03A5',
    '\u03AB': '\u03A5',
    '\u038F': '\u03A9',
    '\u03AC': '\u03B1',
    '\u03AD': '\u03B5',
    '\u03AE': '\u03B7',
    '\u03AF': '\u03B9',
    '\u03CA': '\u03B9',
    '\u0390': '\u03B9',
    '\u03CC': '\u03BF',
    '\u03CD': '\u03C5',
    '\u03CB': '\u03C5',
    '\u03B0': '\u03C5',
    '\u03C9': '\u03C9',
    '\u03C2': '\u03C3'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Option {
    /**
     * @param {?} option
     */
    constructor(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
        this.group = false;
    }
    /**
     * @return {?}
     */
    get value() {
        return this.wrappedOption.value;
    }
    /**
     * @return {?}
     */
    get label() {
        return this.wrappedOption.label;
    }
    /**
     * @return {?}
     */
    get icon() {
        if (this.wrappedOption.icon !== '' && this.wrappedOption.icon !== undefined) {
            return this.wrappedOption.icon;
        }
        else {
            return '';
        }
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class OptionList {
    /**
     * @param {?} options
     */
    constructor(options) {
        this._highlightedOption = null;
        this.setToNullValue = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map((option) => {
            const /** @type {?} */ o = new Option(option);
            if (option.disabled) {
                o.disabled = true;
            }
            if (option.group) {
                o.disabled = true;
                o.group = true;
            }
            return o;
        });
        this._hasShown = this._options.length > 0;
        this.highlight();
    }
    /**
     * @param {?} v0
     * @param {?} v1
     * @return {?}
     */
    static equalValues(v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        const /** @type {?} */ a = v0.slice().sort();
        const /** @type {?} */ b = v1.slice().sort();
        return a.every((v, i) => {
            return v === b[i];
        });
    }
    /**
     * Options. *
     * @return {?}
     */
    get options() {
        return this._options;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    getOptionsByValue(value) {
        return this.options.filter((option) => {
            return option.value === value;
        });
    }
    /**
     * Value. *
     * @return {?}
     */
    get value() {
        return this.selection.map((selectedOption) => {
            return selectedOption.value;
        });
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        v = typeof v === 'undefined' || v === null ? [] : v;
        this.options.forEach((option) => {
            option.selected = v.indexOf(option.value) > -1;
        });
    }
    /**
     * Selection. *
     * @return {?}
     */
    get selection() {
        return this.options.filter((option) => {
            return option.selected;
        });
    }
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    select(option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselect(option) {
        option.selected = false;
    }
    /**
     * @return {?}
     */
    clearSelection() {
        this.options.forEach((option) => {
            option.selected = false;
        });
    }
    /**
     * Filter. *
     * @return {?}
     */
    get filtered() {
        return this.options.filter((option) => {
            return option.shown;
        });
    }
    /**
     * @param {?} term
     * @return {?}
     */
    filter(term) {
        let /** @type {?} */ anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach((option) => {
                const /** @type {?} */ l = Diacritics.strip(option.label).toUpperCase();
                const /** @type {?} */ t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
            });
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    }
    /**
     * @return {?}
     */
    resetFilter() {
        this.options.forEach((option) => {
            option.shown = true;
        });
    }
    /**
     * Highlight. *
     * @return {?}
     */
    get highlightedOption() {
        return this._highlightedOption;
    }
    /**
     * @return {?}
     */
    highlight() {
        const /** @type {?} */ option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    highlightOption(option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    }
    /**
     * @return {?}
     */
    highlightNextOption() {
        const /** @type {?} */ shownOptions = this.filtered;
        const /** @type {?} */ index = this.getHighlightedIndexFromList(shownOptions);
        if (index > -1 && index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    }
    /**
     * @return {?}
     */
    highlightPreviousOption() {
        const /** @type {?} */ shownOptions = this.filtered;
        const /** @type {?} */ index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    }
    /**
     * @return {?}
     */
    clearHighlightedOption() {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    }
    /**
     * @param {?} options
     * @return {?}
     */
    getHighlightedIndexFromList(options) {
        for (let /** @type {?} */ i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    }
    /**
     * @return {?}
     */
    getHighlightedIndex() {
        return this.getHighlightedIndexFromList(this.filtered);
    }
    /**
     * Util. *
     * @return {?}
     */
    get hasShown() {
        return this._hasShown;
    }
    /**
     * @return {?}
     */
    hasSelected() {
        return this.options.some((option) => {
            return option.selected;
        });
    }
    /**
     * @return {?}
     */
    hasShownSelected() {
        return this.options.some((option) => {
            return option.shown && option.selected;
        });
    }
    /**
     * @return {?}
     */
    getFirstShown() {
        for (const /** @type {?} */ option of this.options) {
            if (option.shown) {
                return option;
            }
        }
        // return null;
        return this.setToNullValue;
    }
    /**
     * @return {?}
     */
    getFirstShownSelected() {
        for (const /** @type {?} */ option of this.options) {
            if (option.shown && option.selected) {
                return option;
            }
        }
        // return null;
        return this.setToNullValue;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectDropdownComponent {
    /**
     * @param {?} _elementRef
     */
    constructor(_elementRef) {
        this._elementRef = _elementRef;
        this.close = new EventEmitter();
        this.optionClicked = new EventEmitter();
        this.singleFilterClick = new EventEmitter();
        this.singleFilterInput = new EventEmitter();
        this.singleFilterKeydown = new EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
        this.hasOptionsItems = true;
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    onkeyup() {
        this.hasOptionsItems = this._elementRef.nativeElement.childNodes[0].children[1].children[0].children.length >= 1 ? true : false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.optionsReset();
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        const /** @type {?} */ container = this._elementRef.nativeElement.classList;
        setTimeout(() => { container.add('fadeInSelect'); }, 200);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.singleFilterClick.emit(null);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterInput(event) {
        this.singleFilterInput.emit(event.target.value);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.singleFilterKeydown.emit(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onOptionsWheel(event) {
        this.handleOptionsWheel(event);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onOptionMouseover(option) {
        this.optionList.highlightOption(option);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onOptionClick(option) {
        this.optionClicked.emit(option);
    }
    /**
     * Initialization. *
     * @return {?}
     */
    optionsReset() {
        this.optionList.filter('');
        this.optionList.highlight();
    }
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    getOptionStyle(option) {
        if (option.highlighted) {
            const /** @type {?} */ style$$1 = {};
            if (typeof this.highlightColor !== 'undefined') {
                style$$1['background-color'] = this.highlightColor;
            }
            if (typeof this.highlightTextColor !== 'undefined') {
                style$$1['color'] = this.highlightTextColor;
            }
            return style$$1;
        }
        else {
            return {};
        }
    }
    /**
     * @return {?}
     */
    clearFilterInput() {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    }
    /**
     * @return {?}
     */
    moveHighlightedIntoView() {
        const /** @type {?} */ list = this.optionsList.nativeElement;
        const /** @type {?} */ listHeight = list.offsetHeight;
        const /** @type {?} */ itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            const /** @type {?} */ item = list.children[0].children[itemIndex];
            const /** @type {?} */ itemHeight = item.offsetHeight;
            const /** @type {?} */ itemTop = itemIndex * itemHeight;
            const /** @type {?} */ itemBottom = itemTop + itemHeight;
            const /** @type {?} */ viewTop = list.scrollTop;
            const /** @type {?} */ viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    }
    /**
     * @param {?} e
     * @return {?}
     */
    handleOptionsWheel(e) {
        const /** @type {?} */ div = this.optionsList.nativeElement;
        const /** @type {?} */ atTop = div.scrollTop === 0;
        const /** @type {?} */ atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    }
}
SelectDropdownComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-select-dropdown',
                template: "<div class=\"dropdown-content\" [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\"> <div class=\"filter\" *ngIf=\"!multiple && filterEnabled\"> <input #filterInput autocomplete=\"on\" [placeholder]=\"placeholder\" (click)=\"onSingleFilterClick($event)\" (input)=\"onSingleFilterInput($event)\" (keydown)=\"onSingleFilterKeydown($event)\"> </div> <div class=\"options\" #optionsList> <ul class=\"select-dropdown\" [ngClass]=\"{'multiple-select-dropdown': multiple}\" (wheel)=\"onOptionsWheel($event)\"> <li *ngFor=\"let option of optionList.filtered\" [ngClass]=\"{'active': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, 'optgroup': option.group}\" [ngStyle]=\"getOptionStyle(option)\" (click)=\"onOptionClick(option)\" (mouseover)=\"onOptionMouseover(option)\"> <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\"> <span class=\"select-option\" *ngIf=\"!multiple\">{{option.label}}</span> <span class=\"filtrable\" *ngIf=\"multiple\"> <input type=\"checkbox\" [checked]=\"option.selected\"> <label></label> {{option.label}} </span> </li> <li *ngIf=\"!this.hasOptionsItems\" class=\"message disabled\"> <span>{{notFoundMsg}}</span> </li> </ul> </div> </div>",
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
SelectDropdownComponent.ctorParameters = () => [
    { type: ElementRef, },
];
SelectDropdownComponent.propDecorators = {
    "filterEnabled": [{ type: Input },],
    "highlightColor": [{ type: Input },],
    "highlightTextColor": [{ type: Input },],
    "left": [{ type: Input },],
    "multiple": [{ type: Input },],
    "notFoundMsg": [{ type: Input },],
    "optionList": [{ type: Input },],
    "top": [{ type: Input },],
    "width": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "close": [{ type: Output },],
    "optionClicked": [{ type: Output },],
    "singleFilterClick": [{ type: Output },],
    "singleFilterInput": [{ type: Output },],
    "singleFilterKeydown": [{ type: Output },],
    "filterInput": [{ type: ViewChild, args: ['filterInput',] },],
    "optionsList": [{ type: ViewChild, args: ['optionsList',] },],
    "onkeyup": [{ type: HostListener, args: ['keyup', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const SELECT_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SelectComponent),
    multi: true
};
class SelectComponent {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.allowClear = false;
        this.disabled = false;
        this.multiple = false;
        this.noFilter = 0;
        this.notFoundMsg = 'No results found';
        this.placeholder = '';
        this.filterPlaceholder = '';
        this.label = '';
        this.filterEnabled = false;
        this.opened = new EventEmitter();
        this.closed = new EventEmitter();
        this.selected = new EventEmitter();
        this.deselected = new EventEmitter();
        this.noOptionsFound = new EventEmitter();
        // Angular lifecycle hooks.
        this.KEYS = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            ESC: 27,
            SPACE: 32,
            UP: 38,
            DOWN: 40
        };
        this._value = [];
        // Selection state variables.
        this.hasSelected = false;
        // View state variables.
        this.hasFocus = false;
        this.isOpen = false;
        this.isBelow = true;
        this.filterInputWidth = 1;
        this.isDisabled = false;
        this.placeholderView = '';
        this.clearClicked = false;
        this.selectContainerClicked = false;
        this.onChange = (_) => { };
        this.onTouched = () => { };
    }
    /**
     * Event handlers. *
     * @param {?} $event
     * @return {?}
     */
    closeSelect($event) {
        if (!this.isChild($event.target) && this.isOpen) {
            this.closeDropdown();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.placeholderView = this.placeholder;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.setArrowUpIcon();
        this.setArrowDownIcon();
        this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'hidden');
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes['options'].isFirstChange());
        }
        if (changes.hasOwnProperty('noFilter')) {
            const /** @type {?} */ numOptions = this.optionList.options.length;
            const /** @type {?} */ minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
    }
    /**
     * @return {?}
     */
    setArrowUpIcon() {
        const /** @type {?} */ div = this.renderer.createElement('div');
        this.renderer.appendChild(this.selectionSpan.nativeElement.children[0], div);
        this.selectionSpan.nativeElement.children[0].lastChild.innerHTML = '&#x25BC;';
        this.renderer.addClass(this.selectionSpan.nativeElement.children[0].lastChild, 'toggle');
    }
    /**
     * @return {?}
     */
    setArrowDownIcon() {
        const /** @type {?} */ div = this.renderer.createElement('div');
        this.renderer.appendChild(this.selectionSpan.nativeElement.children[0], div);
        this.selectionSpan.nativeElement.children[0].lastChild.innerHTML = '&#x25B2;';
        this.renderer.addClass(this.selectionSpan.nativeElement.children[0].lastChild, 'toggle');
    }
    /**
     * @param {?} elemnt
     * @return {?}
     */
    isChild(elemnt) {
        let /** @type {?} */ node = elemnt.parentNode;
        while (node != null) {
            if (node === this.el.nativeElement) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    }
    /**
     * @return {?}
     */
    onWindowClick() {
        if (!this.selectContainerClicked && !this.multiple) {
            this.closeDropdown();
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
    }
    /**
     * @return {?}
     */
    onWindowResize() {
        this.updateWidth();
    }
    /**
     * @return {?}
     */
    onSelectContainerClick() {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    }
    /**
     * @return {?}
     */
    onSelectContainerFocus() {
        this.onTouched();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSelectContainerKeydown(event) {
        this.handleSelectContainerKeydown(event);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onDropdownOptionClicked(option) {
        this.multiple ?
            this.toggleSelectOption(option) : this.selectOption(option);
    }
    /**
     * @param {?} focus
     * @return {?}
     */
    onDropdownClose(focus) {
        this.closeDropdown(focus);
    }
    /**
     * @return {?}
     */
    onSingleFilterClick() {
        this.selectContainerClicked = true;
    }
    /**
     * @param {?} term
     * @return {?}
     */
    onSingleFilterInput(term) {
        const /** @type {?} */ hasShown = this.optionList.filter(term);
        if (!hasShown) {
            this.noOptionsFound.emit(term);
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onSingleFilterKeydown(event) {
        this.handleSingleFilterKeydown(event);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMultipleFilterInput(event) {
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        setTimeout(() => {
            const /** @type {?} */ term = event.target.value;
            const /** @type {?} */ hasShown = this.optionList.filter(term);
            if (!hasShown) {
                this.noOptionsFound.emit(term);
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onMultipleFilterKeydown(event) {
        this.handleMultipleFilterKeydown(event);
    }
    /**
     * @return {?}
     */
    onClearSelectionClick() {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    }
    /**
     * @param {?} option
     * @return {?}
     */
    onDeselectOptionClick(option) {
        this.clearClicked = true;
        this.deselectOption(option);
    }
    /**
     * API. *
     * @return {?}
     */
    open() {
        this.openDropdown();
    }
    /**
     * @return {?}
     */
    close() {
        this.closeDropdown();
    }
    /**
     * @return {?}
     */
    get value() {
        return this.multiple ? this._value : this._value[0];
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (typeof v === 'undefined' || v === null || v === '') {
            v = [];
        }
        else if (typeof v === 'string' || typeof v === 'number' || typeof v === 'boolean') {
            v = [v];
        }
        else if (!Array.isArray(v)) {
            throw new TypeError('Value must be a string or an array.');
        }
        if (!OptionList.equalValues(v, this._value)) {
            this.optionList.value = v;
            this.valueChanged();
        }
    }
    /**
     * @return {?}
     */
    clear() {
        this.clearSelection();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    select(value) {
        this.optionList.getOptionsByValue(value).forEach((option) => {
            this.selectOption(option);
        });
    }
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * @return {?}
     */
    valueChanged() {
        this._value = this.optionList.value;
        this.hasSelected = this._value.length > 0;
        this.placeholderView = this.hasSelected ? '' : this.placeholder;
        this.updateFilterWidth();
        this.onChange(this.value);
    }
    /**
     * Initialization. *
     * @param {?} firstTime
     * @return {?}
     */
    updateOptionsList(firstTime) {
        // let v: Array<string> | any;
        let /** @type {?} */ v;
        if (!firstTime) {
            v = this.optionList.value;
        }
        this.optionList = new OptionList(this.options);
        if (!firstTime) {
            this.optionList.value = v;
            this.valueChanged();
        }
    }
    /**
     * Dropdown. *
     * @return {?}
     */
    toggleDropdown() {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    }
    /**
     * @return {?}
     */
    openDropdown() {
        this.renderer.setStyle(this.el.nativeElement, 'z-index', '1000');
        if (!this.isOpen) {
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'visible');
            // tslint:disable-next-line:max-line-length
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].children[this.selectionSpan.nativeElement.children[0].children.length - 2], 'visibility', 'hidden');
            this.updateWidth();
            this.updatePosition();
            this.isOpen = true;
            if (this.multiple && this.filterEnabled) {
                this.filterInput.nativeElement.focus();
            }
            this.opened.emit(null);
        }
    }
    /**
     * @param {?=} focus
     * @return {?}
     */
    closeDropdown(focus = false) {
        const /** @type {?} */ container = this.el.nativeElement.lastElementChild.classList;
        this.renderer.removeStyle(this.el.nativeElement, 'z-index');
        container.remove('fadeInSelect');
        if (this.isOpen) {
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'hidden');
            // tslint:disable-next-line:max-line-length
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].children[this.selectionSpan.nativeElement.children[0].children.length - 2], 'visibility', 'visible');
        }
        setTimeout(() => {
            if (this.isOpen) {
                this.clearFilterInput();
                this.isOpen = false;
                if (focus) {
                    this.focus();
                }
                this.closed.emit(null);
            }
        }, 200);
    }
    /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    selectOption(option) {
        if (!option.selected) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    deselectOption(option) {
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
        }
    }
    /**
     * @return {?}
     */
    clearSelection() {
        const /** @type {?} */ selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map((option) => {
                    return option.wrappedOption;
                }));
            }
        }
    }
    /**
     * @param {?} option
     * @return {?}
     */
    toggleSelectOption(option) {
        option.selected ?
            this.deselectOption(option) : this.selectOption(option);
    }
    /**
     * @return {?}
     */
    selectHighlightedOption() {
        const /** @type {?} */ option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    }
    /**
     * @return {?}
     */
    deselectLast() {
        const /** @type {?} */ sel = this.optionList.selection;
        if (sel.length > 0) {
            const /** @type {?} */ option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    }
    /**
     * Filter. *
     * @return {?}
     */
    clearFilterInput() {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
        else {
            this.dropdown.clearFilterInput();
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setMultipleFilterInput(value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSelectContainerKeydown(event) {
        const /** @type {?} */ key = event.which;
        if (this.isOpen) {
            if (key === this.KEYS.ESC ||
                (key === this.KEYS.UP && event.altKey)) {
                this.closeDropdown(true);
            }
            else if (key === this.KEYS.TAB) {
                this.closeDropdown();
            }
            else if (key === this.KEYS.ENTER) {
                this.selectHighlightedOption();
            }
            else if (key === this.KEYS.UP) {
                this.optionList.highlightPreviousOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
            else if (key === this.KEYS.DOWN) {
                this.optionList.highlightNextOption();
                this.dropdown.moveHighlightedIntoView();
                if (!this.filterEnabled) {
                    event.preventDefault();
                }
            }
        }
        else {
            if (key === this.KEYS.ENTER || key === this.KEYS.SPACE ||
                (key === this.KEYS.DOWN && event.altKey)) {
                /* FIREFOX HACK:
                         *
                         * The setTimeout is added to prevent the enter keydown event
                         * to be triggered for the filter input field, which causes
                         * the dropdown to be closed again.
                         */
                setTimeout(() => { this.openDropdown(); });
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleMultipleFilterKeydown(event) {
        const /** @type {?} */ key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    handleSingleFilterKeydown(event) {
        const /** @type {?} */ key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    }
    /**
     * View. *
     * @return {?}
     */
    focus() {
        this.hasFocus = true;
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
        else {
            this.selectionSpan.nativeElement.focus();
        }
    }
    /**
     * @return {?}
     */
    blur() {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    }
    /**
     * @return {?}
     */
    updateWidth() {
        this.width = this.selectionSpan.nativeElement.offsetWidth;
    }
    /**
     * @return {?}
     */
    updatePosition() {
        const /** @type {?} */ e = this.selectionSpan.nativeElement;
        this.left = e.offsetLeft;
        this.top = e.offsetTop + e.offsetHeight;
    }
    /**
     * @return {?}
     */
    updateFilterWidth() {
        if (typeof this.filterInput !== 'undefined') {
            const /** @type {?} */ value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    }
}
SelectComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-select',
                template: "<label *ngIf=\"label !== ''\"> {{label}} </label> <div #selection [attr.tabindex]=\"disabled ? null : 0\" [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\" (click)=\"onSelectContainerClick()\" (focus)=\"onSelectContainerFocus()\" (keydown)=\"onSelectContainerKeydown($event)\" (window:click)=\"onWindowClick()\" (window:resize)=\"onWindowResize()\"> <div class=\"single\" *ngIf=\"!multiple\"> <div class=\"value\" *ngIf=\"optionList.hasSelected()\"> {{optionList.selection[0].label}} </div> <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\"> {{placeholderView}} </div> <div class=\"clear\" *ngIf=\"allowClear && hasSelected\" (click)=\"onClearSelectionClick($event)\"> &#x2715; </div> </div> <div class=\"multiple\" *ngIf=\"multiple\"> <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\"> {{placeholderView}} </div> <div class=\"option\"  *ngFor=\"let option of optionList.selection\"> <span class=\"deselect-option\">, </span>{{option.label}} </div> </div> </div> <mdb-select-dropdown *ngIf=\"isOpen\" #dropdown [multiple]=\"multiple\" [optionList]=\"optionList\" [notFoundMsg]=\"notFoundMsg\" [highlightColor]=\"highlightColor\" [highlightTextColor]=\"highlightTextColor\" [filterEnabled]=\"filterEnabled\" [placeholder]=\"filterPlaceholder\" [top]=\"top\" [left]=\"left\" (close)=\"onDropdownClose($event)\" (optionClicked)=\"onDropdownOptionClicked($event)\" (singleFilterClick)=\"onSingleFilterClick()\" (singleFilterInput)=\"onSingleFilterInput($event)\" (singleFilterKeydown)=\"onSingleFilterKeydown($event)\"> </mdb-select-dropdown>",
                providers: [SELECT_VALUE_ACCESSOR],
                encapsulation: ViewEncapsulation.None
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
SelectComponent.propDecorators = {
    "options": [{ type: Input },],
    "allowClear": [{ type: Input },],
    "disabled": [{ type: Input },],
    "highlightColor": [{ type: Input },],
    "highlightTextColor": [{ type: Input },],
    "multiple": [{ type: Input },],
    "noFilter": [{ type: Input },],
    "notFoundMsg": [{ type: Input },],
    "placeholder": [{ type: Input },],
    "filterPlaceholder": [{ type: Input },],
    "label": [{ type: Input },],
    "filterEnabled": [{ type: Input },],
    "opened": [{ type: Output },],
    "closed": [{ type: Output },],
    "selected": [{ type: Output },],
    "deselected": [{ type: Output },],
    "noOptionsFound": [{ type: Output },],
    "selectionSpan": [{ type: ViewChild, args: ['selection',] },],
    "dropdown": [{ type: ViewChild, args: ['dropdown',] },],
    "filterInput": [{ type: ViewChild, args: ['filterInput',] },],
    "closeSelect": [{ type: HostListener, args: ['document:click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SelectModule {
}
SelectModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SelectComponent,
                    SelectDropdownComponent
                ],
                exports: [
                    SelectComponent
                ],
                imports: [
                    CommonModule,
                    FormsModule
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const CONTAINER_CLASS_NAME = 'spinning-preloader-container';
const COMPLETE_CLASS_NAME = 'complete';
const CONTAINER_QUERY = `.${CONTAINER_CLASS_NAME}`;
const CONTAINER_NAME = CONTAINER_CLASS_NAME.split('-').join(' ');
const TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE = `The ${CONTAINER_NAME} was not found`;
const EMULATE_ELEMENT_NAME = 'div';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MDBSpinningPreloader {
    /**
     * @param {?} document
     */
    constructor(document) {
        this.document = document;
        this.container = this.document.querySelector(CONTAINER_QUERY);
    }
    /**
     * @return {?}
     */
    static errorHandler() {
        throw new TypeError(TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE);
    }
    /**
     * @return {?}
     */
    start() {
        this.container.classList.remove(COMPLETE_CLASS_NAME);
    }
    /**
     * @return {?}
     */
    stop() {
        this.container.classList.add(COMPLETE_CLASS_NAME);
    }
    /**
     * @return {?}
     */
    get container() {
        return this._container;
    }
    /**
     * @param {?} element
     * @return {?}
     */
    set container(element) {
        this._container = element || this.document.createElement(EMULATE_ELEMENT_NAME);
    }
}
MDBSpinningPreloader.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MDBSpinningPreloader.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * <md-progress-bar> component.
 */
class ProgressBarComponent {
    constructor() {
        /**
         * Color of the progress bar.
         */
        this.color = 'primary';
        this._value = 0;
        this._bufferValue = 0;
        /**
         * Mode of the progress bar.
         *
         * Input must be one of these values: determinate, indeterminate, buffer, query, defaults to
         * 'determinate'.
         * Mirrored to mode attribute.
         */
        this.mode = 'determinate';
    }
    /**
     * Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow.
     * @return {?}
     */
    get value() { return this._value; }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) { this._value = clamp(v || 0); }
    /**
     * Buffer value of the progress bar. Defaults to zero.
     * @return {?}
     */
    get bufferValue() { return this._bufferValue; }
    /**
     * @param {?} v
     * @return {?}
     */
    set bufferValue(v) { this._bufferValue = clamp(v || 0); }
    /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    _primaryTransform() {
        const /** @type {?} */ scale = this.value / 100;
        return { transform: `scaleX(${scale})` };
    }
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    _bufferTransform() {
        if (this.mode === 'buffer') {
            const /** @type {?} */ scale = this.bufferValue / 100;
            return { transform: `scaleX(${scale})` };
        }
    }
}
ProgressBarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-progress-bar, mat-progress-bar',
                template: "<!-- The background div is named as such because it appears below the other divs and is not sized based on values. --> <div class=\"mat-progress-bar-background mat-progress-bar-element\"></div> <div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div> <div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\"></div> <div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div> ",
                styles: [":host { display:block; height:5px; overflow:hidden; position:relative; transform:translateZ(0); transition:opacity 250ms linear; width:100%; } :host .mat-progress-bar-element,:host .mat-progress-bar-fill::after { height:100%; position:absolute; width:100%; } :host .mat-progress-bar-background { background-repeat:repeat-x; background-size:10px 4px; display:none; } :host .mat-progress-bar-buffer { transform-origin:top left; transition:transform 250ms ease,stroke .3s cubic-bezier(.35,0,.25,1); } :host .mat-progress-bar-secondary { display:none; }  :host .mat-progress-bar-fill { animation:none; transform-origin:top left; transition:transform 250ms ease,stroke .3s cubic-bezier(.35,0,.25,1); } :host .mat-progress-bar-fill::after { animation:none; content:''; display:inline-block; left:0; } :host[mode=query] { transform:rotateZ(180deg); } :host[mode=indeterminate] .mat-progress-bar-fill,:host[mode=query] .mat-progress-bar-fill { transition:none; } :host[mode=indeterminate] .mat-progress-bar-primary,:host[mode=query] .mat-progress-bar-primary { animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear; left:-145.166611%; } :host[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,:host[mode=query]  .mat-progress-bar-primary.mat-progress-bar-fill::after { animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear; } :host[mode=indeterminate] .mat-progress-bar-secondary,:host[mode=query] .mat-progress-bar-secondary { animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear; left:-54.888891%; display:block; } :host[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,:host[mode=query]  .mat-progress-bar-secondary.mat-progress-bar-fill::after { animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear; } :host[mode=buffer] .mat-progress-bar-background { animation:mat-progress-bar-background-scroll 250ms infinite linear; display:block; } :host-context([dir=rtl]) { transform:rotateY(180deg); } @keyframes mat-progress-bar-primary-indeterminate-translate { 0% { transform:translateX(0); } 20% { animation-timing-function:cubic-bezier(.5,0,.70173,.49582); transform:translateX(0); } 59.15% { animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635); transform:translateX(83.67142%); } 100% { transform:translateX(200.61106%); } } @keyframes mat-progress-bar-primary-indeterminate-scale { 0% { transform:scaleX(.08); } 36.65% { animation-timing-function:cubic-bezier(.33473,.12482,.78584,1); transform:scaleX(.08); } 69.15% { animation-timing-function:cubic-bezier(.06,.11,.6,1); transform:scaleX(.66148); }  100% { transform:scaleX(.08); } } @keyframes mat-progress-bar-secondary-indeterminate-translate { 0% { animation-timing-function:cubic-bezier(.15,0,.51506,.40969); transform:translateX(0); } 25% { animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371); transform:translateX(37.65191%); } 48.35% { animation-timing-function:cubic-bezier(.4,.62704,.6,.90203); transform:translateX(84.38617%); } 100% { transform:translateX(160.27778%); } } @keyframes mat-progress-bar-secondary-indeterminate-scale { 0% { animation-timing-function:cubic-bezier(.15,0,.51506,.40969); transform:scaleX(.08); } 19.15% { animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371); transform:scaleX(.4571) }  44.15% { animation-timing-function:cubic-bezier(.4,.62704,.6,.90203); transform:scaleX(.72796); } 100% { transform:scaleX(.08); } } @keyframes mat-progress-bar-background-scroll { to { transform:translateX(-10px) } }  "],
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
ProgressBarComponent.propDecorators = {
    "color": [{ type: Input },],
    "value": [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] },],
    "bufferValue": [{ type: Input },],
    "mode": [{ type: Input }, { type: HostBinding, args: ['attr.mode',] },],
};
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min = 0, max = 100) {
    return Math.max(min, Math.min(max, v));
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A single degree in radians.
 */
const DEGREE_IN_RADIANS = Math.PI / 180;
/**
 * Duration of the indeterminate animation.
 */
const DURATION_INDETERMINATE = 667;
/**
 * Duration of the indeterminate animation.
 */
const DURATION_DETERMINATE = 225;
/**
 * Start animation value of the indeterminate animation
 */
const startIndeterminate = 3;
/**
 * End animation value of the indeterminate animation
 */
const endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
const MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
class MdProgressSpinnerCssMatStylerDirective {
}
MdProgressSpinnerCssMatStylerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSpinners], mat-progress-spinner'
            },] },
];
/** @nocollapse */
MdProgressSpinnerCssMatStylerDirective.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.mat-progress-spinner',] },],
};
/**
 * <md-progress-spinner> component.
 */
class MdProgressSpinnerComponent {
    /**
     * @param {?} _ngZone
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?=} platformId
     */
    constructor(_ngZone, _elementRef, _renderer, platformId) {
        this._ngZone = _ngZone;
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        /**
         * The id of the last requested animation.
         */
        this._lastAnimationId = 0;
        this._mode = 'determinate';
        this._color = 'primary';
        this.isBrowser = false;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
     * because voiceover does not report the progress indicator as indeterminate if the aria min
     * and/or max value are number values.
     * @return {?}
     */
    get _ariaValueMin() {
        return this.mode === 'determinate' ? 0 : null;
    }
    /**
     * @return {?}
     */
    get _ariaValueMax() {
        return this.mode === 'determinate' ? 100 : null;
    }
    /**
     * \@docs-private
     * @return {?}
     */
    get interdeterminateInterval() {
        return this._interdeterminateInterval;
    }
    /**
     * \@docs-private
     * @param {?} interval
     * @return {?}
     */
    set interdeterminateInterval(interval) {
        clearInterval(this._interdeterminateInterval);
        this._interdeterminateInterval = interval;
    }
    /**
     * Clean up any animations that were running.
     * @return {?}
     */
    ngOnDestroy() {
        this._cleanupIndeterminateAnimation();
    }
    /**
     * The color of the progress-spinner. Can be primary, accent, or warn.
     * @return {?}
     */
    get color() { return this._color; }
    /**
     * @param {?} value
     * @return {?}
     */
    set color(value) {
        this._updateColor(value);
    }
    /**
     * Value of the progress circle. It is bound to the host as the attribute aria-valuenow.
     * @return {?}
     */
    get value() {
        if (this.mode === 'determinate') {
            return this._value;
        }
        return;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (v != null && this.mode === 'determinate') {
            const /** @type {?} */ newValue = clamp$1(v);
            this._animateCircle(this.value || 0, newValue);
            this._value = newValue;
        }
    }
    /**
     * Mode of the progress circle
     *
     * Input must be one of the values from ProgressMode, defaults to 'determinate'.
     * mode is bound to the host as the attribute host.
     * @return {?}
     */
    get mode() {
        return this._mode;
    }
    /**
     * @param {?} mode
     * @return {?}
     */
    set mode(mode) {
        if (mode !== this._mode) {
            if (mode === 'indeterminate') {
                this._startIndeterminateAnimation();
            }
            else {
                this._cleanupIndeterminateAnimation();
                this._animateCircle(0, this._value);
            }
            this._mode = mode;
        }
    }
    /**
     * Animates the circle from one percentage value to another.
     *
     * @param {?} animateFrom The percentage of the circle filled starting the animation.
     * @param {?} animateTo The percentage of the circle filled ending the animation.
     * @param {?=} ease The easing function to manage the pace of change in the animation.
     * @param {?=} duration The length of time to show the animation, in milliseconds.
     * @param {?=} rotation The starting angle of the circle fill, with 0° represented at the top center
     *    of the circle.
     * @return {?}
     */
    _animateCircle(animateFrom, animateTo, ease = linearEase, duration = DURATION_DETERMINATE, rotation = 0) {
        const /** @type {?} */ id = ++this._lastAnimationId;
        const /** @type {?} */ startTime = Date.now();
        const /** @type {?} */ changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            const /** @type {?} */ animation = () => {
                const /** @type {?} */ elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation);
                }
            };
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation);
        }
    }
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @return {?}
     */
    _startIndeterminateAnimation() {
        let /** @type {?} */ rotationStartPoint = 0;
        let /** @type {?} */ start = startIndeterminate;
        let /** @type {?} */ end = endIndeterminate;
        const /** @type {?} */ duration = DURATION_INDETERMINATE;
        const /** @type {?} */ animate$$1 = () => {
            this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            const /** @type {?} */ temp = start;
            start = -end;
            end = -temp;
        };
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular(() => {
                    this.interdeterminateInterval = setInterval(animate$$1, duration + 50, 0, false);
                    animate$$1();
                });
            }
        }
    }
    /**
     * Removes interval, ending the animation.
     * @return {?}
     */
    _cleanupIndeterminateAnimation() {
        this.interdeterminateInterval = null;
    }
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    _renderArc(currentValue, rotation = 0) {
        // Caches the path reference so it doesn't have to be looked up every time.
        const /** @type {?} */ path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    }
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @param {?} newColor
     * @return {?}
     */
    _updateColor(newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    }
    /**
     * Sets the given palette class on the component element.
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    _setElementColor(color, isAdd) {
        if (color != null && color !== '') {
            // this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, `mat-${color}`);
            }
        }
    }
}
MdProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-Spinners, mat-progress-spinner',
                template: "<!-- preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's center. The center of the circle will remain at the center of the md-progress-spinner element containing the SVG. --> <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <path></path> </svg>",
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
MdProgressSpinnerComponent.ctorParameters = () => [
    { type: NgZone, },
    { type: ElementRef, },
    { type: Renderer2, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
MdProgressSpinnerComponent.propDecorators = {
    "platformId": [{ type: Inject, args: [PLATFORM_ID,] },],
    "color": [{ type: Input },],
    "value": [{ type: Input }, { type: HostBinding, args: ['attr.aria-valuenow',] },],
    "mode": [{ type: HostBinding, args: ['attr.mode',] }, { type: Input },],
};
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
class MdSpinnerComponent extends MdProgressSpinnerComponent {
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} renderer
     */
    constructor(elementRef, ngZone, renderer) {
        super(ngZone, elementRef, renderer);
        this.mode = 'indeterminate';
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        super.ngOnDestroy();
    }
}
MdSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                template: "<!-- preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's center. The center of the circle will remain at the center of the md-progress-spinner element containing the SVG. --> <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <path></path> </svg>",
                styles: [":host { display: block; height: 100px; width: 100px; overflow: hidden; } :host svg { height: 100%; width: 100%; transform-origin: center; } :host path { fill: transparent; stroke-width: 10px; transition: stroke .3s cubic-bezier(.35, 0, .25, 1); } :host[mode=indeterminate] svg { animation-duration: 5.25s, 2.887s; animation-name: mat-progress-spinner-sporadic-rotate, mat-progress-spinner-linear-rotate; animation-timing-function: cubic-bezier(.35, 0, .25, 1), linear; animation-iteration-count: infinite; transition: none; } @keyframes mat-progress-spinner-linear-rotate { 0% { transform: rotate(0) } 100% { transform: rotate(360deg) } } @keyframes mat-progress-spinner-sporadic-rotate { 12.5% { transform: rotate(135deg) } 25% { transform: rotate(270deg) } 37.5% { transform: rotate(405deg) } 50% { transform: rotate(540deg) } 62.5% { transform: rotate(675deg) } 75% { transform: rotate(810deg) } 87.5% { transform: rotate(945deg) } 100% { transform: rotate(1080deg) } }"],
            },] },
];
/** @nocollapse */
MdSpinnerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: NgZone, },
    { type: Renderer2, },
];
MdSpinnerComponent.propDecorators = {
    "true": [{ type: HostBinding, args: ['class.mat-spinner',] },],
};
/**
 * Clamps a value to be between 0 and 100.
 * @param {?} v
 * @return {?}
 */
function clamp$1(v) {
    return Math.max(0, Math.min(100, v));
}
/**
 * Converts Polar coordinates to Cartesian.
 * @param {?} radius
 * @param {?} pathRadius
 * @param {?} angleInDegrees
 * @return {?}
 */
function polarToCartesian(radius, pathRadius, angleInDegrees) {
    const /** @type {?} */ angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
    return (radius + (pathRadius * Math.cos(angleInRadians))) +
        ',' + (radius + (pathRadius * Math.sin(angleInRadians)));
}
/**
 * Easing function for linear animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function linearEase(currentTime, startValue, changeInValue, duration) {
    return changeInValue * currentTime / duration + startValue;
}
/**
 * Easing function to match material design indeterminate animation.
 * @param {?} currentTime
 * @param {?} startValue
 * @param {?} changeInValue
 * @param {?} duration
 * @return {?}
 */
function materialEase(currentTime, startValue, changeInValue, duration) {
    const /** @type {?} */ time = currentTime / duration;
    const /** @type {?} */ timeCubed = Math.pow(time, 3);
    const /** @type {?} */ timeQuad = Math.pow(time, 4);
    const /** @type {?} */ timeQuint = Math.pow(time, 5);
    return startValue + changeInValue * ((6 * timeQuint) + (-15 * timeQuad) + (10 * timeCubed));
}
/**
 * Determines the path value to define the arc.  Converting percentage values to to polar
 * coordinates on the circle, and then to cartesian coordinates in the viewport.
 *
 * @param {?} currentValue The current percentage value of the progress circle, the percentage of the
 *    circle to fill.
 * @param {?} rotation The starting point of the circle with 0 being the 0 degree point.
 * @return {?} A string for an SVG path representing a circle filled from the starting point to the
 *    percentage value provided.
 */
function getSvgArc(currentValue, rotation) {
    const /** @type {?} */ startPoint = rotation || 0;
    const /** @type {?} */ radius = 50;
    const /** @type {?} */ pathRadius = 40;
    const /** @type {?} */ startAngle = startPoint * MAX_ANGLE;
    const /** @type {?} */ endAngle = currentValue * MAX_ANGLE;
    const /** @type {?} */ start = polarToCartesian(radius, pathRadius, startAngle);
    const /** @type {?} */ end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    const /** @type {?} */ arcSweep = endAngle < 0 ? 0 : 1;
    let /** @type {?} */ largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return `M${start}A${pathRadius},${pathRadius} 0 ${largeArcFlag},${arcSweep} ${end}`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressDirective {
    constructor() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    /**
     * maximum total value of progress element
     * @return {?}
     */
    get max() {
        return this._max;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set max(v) {
        this._max = v;
        this.bars.forEach((bar) => {
            bar.recalculatePercentage();
        });
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    addBar(bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    }
    /**
     * @param {?} bar
     * @return {?}
     */
    removeBar(bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    }
}
ProgressDirective.decorators = [
    { type: Directive, args: [{ selector: 'mdbProgress, [mdbProgress]' },] },
];
/** @nocollapse */
ProgressDirective.propDecorators = {
    "animate": [{ type: Input },],
    "max": [{ type: HostBinding, args: ['attr.max',] }, { type: Input },],
    "addClass": [{ type: HostBinding, args: ['class.progress',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BarComponent {
    /**
     * @param {?} progress
     */
    constructor(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    /**
     * current value of progress bar
     * @return {?}
     */
    get value() {
        return this._value;
    }
    /**
     * @param {?} v
     * @return {?}
     */
    set value(v) {
        if (!v && v !== 0) {
            return;
        }
        this._value = v;
        this.recalculatePercentage();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.progress.addBar(this);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.progress.removeBar(this);
    }
    /**
     * @return {?}
     */
    recalculatePercentage() {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        const /** @type {?} */ totalPercentage = this.progress.bars.reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    }
}
BarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-bar',
                template: "<div class=\"progress-bar\" style=\"min-width: 0;\" role=\"progressbar\" [ngClass]=\"type && 'progress-bar-' + type\" [ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\" [attr.aria-valuemax]=\"max\"> <ng-content></ng-content> </div> "
            },] },
];
/** @nocollapse */
BarComponent.ctorParameters = () => [
    { type: ProgressDirective, decorators: [{ type: Host },] },
];
BarComponent.propDecorators = {
    "type": [{ type: Input },],
    "value": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressSpinnerComponent {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.addClass = 'spinner-blue-only';
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.el = el;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ hostElem = this.el.nativeElement;
        const /** @type {?} */ colorClass = this.spinnerColor;
        this.addClass = 'spinner-rainbow';
        switch (colorClass) {
            case 'green':
                this.addClass = 'spinner-green-only';
                break;
            case 'blue':
                this.addClass = 'spinner-blue-only';
                break;
            case 'yellow':
                this.addClass = 'spinner-yellow-only';
                break;
            case 'red':
                this.addClass = 'spinner-red-only';
                break;
            case 'rainbow':
                this.addClass = 'spinner-rainbow spinner-blue-only mat-progress-spinner';
                this.spinerRun();
                break;
        }
        hostElem.children[0].children[0].className += ' ' + this.addClass;
    }
    /**
     * @return {?}
     */
    spinerRun() {
        let /** @type {?} */ counter = 0;
        const /** @type {?} */ hostElem = this.el.nativeElement;
        setInterval(() => {
            switch (counter) {
                case 0:
                    this.addClass = 'spinner-red-only mat-progress-spinner ';
                    break;
                case 1:
                    this.addClass = 'spinner-yellow-only mat-progress-spinner';
                    break;
                case 2:
                    this.addClass = 'spinner-blue-only mat-progress-spinner';
                    break;
                case 3:
                    this.addClass = 'spinner-green-only mat-progress-spinner';
                    break;
            }
            hostElem.children[0].children[0].className = ' ' + this.addClass;
            if (counter < 3) {
                counter++;
            }
            else {
                counter = 0;
            }
        }, 1333);
    }
}
ProgressSpinnerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-spinner',
                template: "<div class=\"preloader-wrapper active  {{spinnerType}}\"> <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners> </div>"
            },] },
];
/** @nocollapse */
ProgressSpinnerComponent.ctorParameters = () => [
    { type: ElementRef, },
];
ProgressSpinnerComponent.propDecorators = {
    "spinnerType": [{ type: Input },],
    "spinnerColor": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarConfigComponent {
    constructor() {
        /**
         * if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4)
         */
        this.animate = true;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
}
ProgressbarConfigComponent.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        Object.assign(this, config);
    }
}
ProgressbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-progressbar',
                template: "<div mdbProgress [animate]=\"animate\" [max]=\"max\"> <mdb-bar [type]=\"type\" [value]=\"value\"> <ng-content></ng-content> </mdb-bar> </div> "
            },] },
];
/** @nocollapse */
ProgressbarComponent.ctorParameters = () => [
    { type: ProgressbarConfigComponent, },
];
ProgressbarComponent.propDecorators = {
    "animate": [{ type: Input },],
    "max": [{ type: Input },],
    "type": [{ type: Input },],
    "value": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ProgressbarModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfigComponent] };
    }
}
ProgressbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [ProgressDirective, BarComponent, ProgressbarComponent],
                exports: [ProgressDirective, BarComponent, ProgressbarComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MdProgressSpinnerModule {
    /**
     * @deprecated
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MdProgressSpinnerModule,
            providers: []
        };
    }
}
MdProgressSpinnerModule.decorators = [
    { type: NgModule, args: [{
                exports: [
                    MdProgressSpinnerComponent,
                    MdSpinnerComponent,
                    MdProgressSpinnerCssMatStylerDirective,
                    ProgressSpinnerComponent
                ],
                declarations: [
                    MdProgressSpinnerComponent,
                    MdSpinnerComponent,
                    MdProgressSpinnerCssMatStylerDirective,
                    ProgressSpinnerComponent
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MdProgressBarModule {
    /**
     * @deprecated
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: MdProgressBarModule,
            providers: []
        };
    }
}
MdProgressBarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                exports: [ProgressBarComponent],
                declarations: [ProgressBarComponent],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const MATERIAL_MODULES = [
    MdProgressBarModule,
    MdProgressSpinnerModule,
    ProgressbarModule
];
class PreloadersModule {
}
PreloadersModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MdProgressBarModule.forRoot(),
                    MdProgressSpinnerModule.forRoot(),
                    ProgressbarModule.forRoot()
                ],
                exports: MATERIAL_MODULES,
            },] },
];
/**
 * @deprecated
 */
class ProgressBars {
    /**
     * @deprecated
     * @return {?}
     */
    static forRoot() {
        return { ngModule: PreloadersModule };
    }
}
ProgressBars.decorators = [
    { type: NgModule, args: [{
                imports: MATERIAL_MODULES,
                exports: MATERIAL_MODULES,
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SidenavComponent {
    /**
     * @param {?} platformId
     * @param {?} el
     * @param {?} renderer
     */
    constructor(platformId, el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isBrowser = false;
        this.fixed = true;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        if (this.isBrowser) {
            // pobraneie szerokosci okna po init
            this.windwosWidth = window.innerWidth;
            if (this.fixed) {
                this.renderer.addClass(document.body, 'fixed-sn');
                if (this.windwosWidth < 1441) {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.setShown(false);
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                }
            }
            else {
                this.renderer.addClass(document.body, 'hidden-sn');
                this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
            }
        }
    }
    /**
     * @return {?}
     */
    windwosResize() {
        if (this.isBrowser) {
            this.windwosWidth = window.innerWidth;
            if (this.fixed) {
                if (this.windwosWidth < 1441) {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.setShown(false);
                }
                if (this.windwosWidth > 1440 && this.shown) {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.hideOverlay();
                    this.setShown(true);
                }
                else if (this.windwosWidth > 1440) {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.hideOverlay();
                    this.setShown(true);
                }
            }
            else {
                if (this.windwosWidth > 1440) {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.hideOverlay();
                    this.setShown(false);
                }
            }
        }
    }
    /**
     * @return {?}
     */
    show() {
        if (this.isBrowser) {
            if (this.fixed) {
                if (this.windwosWidth < 1441) {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                    this.showOverlay();
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                    this.setShown(true);
                }
            }
            else {
                this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(0%)');
                this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(0%)');
                this.setShown(true);
                this.showOverlay();
            }
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isBrowser) {
            if (this.fixed) {
                if (this.windwosWidth < 1441) {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.setShown(false);
                    this.hideOverlay();
                }
                else {
                    this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                    this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                    this.setShown(false);
                }
            }
            else {
                this.renderer.setStyle(this.sideNav.nativeElement, 'transform', 'translateX(-100%)');
                this.renderer.setStyle(this.el.nativeElement, 'transform', 'translateX(-100%)');
                this.setShown(false);
                this.hideOverlay();
            }
        }
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.shown) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    /**
     * @return {?}
     */
    showOverlay() {
        this.renderer.setStyle(this.overlay.nativeElement, 'display', 'block');
        setTimeout(() => {
            this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '1');
        }, 0);
    }
    /**
     * @return {?}
     */
    hideOverlay() {
        this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '0');
        setTimeout(() => {
            this.renderer.setStyle(this.overlay.nativeElement, 'display', 'none');
        }, 200);
    }
    /**
     * @param {?} value
     * @return {?}
     */
    setShown(value) {
        setTimeout(() => {
            this.shown = value;
        }, 510);
    }
}
SidenavComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-sidenav',
                template: "<ul #sidenav id=\"slide-out\" class=\"{{ class }} side-nav\" > <ng-content></ng-content> <!-- <div class=\"sidenav-bg mask-strong\"></div>     --> </ul> <div (click)=\"hide()\" #overlay id=\"sidenav-overlay\" style=\"display: none;\"></div>"
            },] },
];
/** @nocollapse */
SidenavComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
    { type: ElementRef, },
    { type: Renderer2, },
];
SidenavComponent.propDecorators = {
    "class": [{ type: Input },],
    "fixed": [{ type: Input },],
    "sideNav": [{ type: ViewChild, args: ['sidenav',] },],
    "overlay": [{ type: ViewChild, args: ['overlay',] },],
    "windwosResize": [{ type: HostListener, args: ['window:resize',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SidenavModule {
}
SidenavModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    SidenavComponent,
                ],
                exports: [
                    SidenavComponent
                ],
                imports: [
                    CommonModule,
                ]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Created by sebastianfuss on 02.09.16.
 */
class PageScrollUtilService {
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param {?} variable
     * true the variable is undefined or null
     * @return {?}
     */
    static isUndefinedOrNull(variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    }
    /**
     * @param {?} document
     * @param {?} scrollTargetElement
     * @return {?}
     */
    static extractElementPosition(document, scrollTargetElement) {
        const /** @type {?} */ body = document.body;
        const /** @type {?} */ docEl = document.documentElement;
        // const windowPageYOffset: number = document.defaultView && document.defaultView.pageYOffset || undefined;
        const /** @type {?} */ windowPageYOffset = document.defaultView && /** @type {?} */ (document.defaultView.pageYOffset) || undefined;
        // const windowPageXOffset: number = document.defaultView && document.defaultView.pageXOffset || undefined;
        const /** @type {?} */ windowPageXOffset = document.defaultView && /** @type {?} */ (document.defaultView.pageXOffset) || undefined;
        const /** @type {?} */ scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        const /** @type {?} */ scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        const /** @type {?} */ clientTop = docEl.clientTop || body.clientTop || 0;
        const /** @type {?} */ clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        const /** @type {?} */ box = scrollTargetElement.getBoundingClientRect();
        const /** @type {?} */ top = box.top + scrollTop - clientTop;
        const /** @type {?} */ left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
class EasingLogic {
}
class PageScrollConfig {
    /**
     * @return {?}
     */
    static get defaultEasingLogic() {
        return PageScrollConfig._easingLogic;
    }
    /**
     * @param {?} easingLogic
     * @return {?}
     */
    static set defaultEasingLogic(easingLogic) {
        PageScrollConfig._easingLogic = easingLogic;
    }
}
/**
 * The number of milliseconds to wait till updating the scroll position again.
 * Small amounts may produce smoother animations but require more processing power.
 */
PageScrollConfig._interval = 10;
/**
 * The amount of pixels that need to be between the current scrollTop/scrollLeft position
 * and the target position the cause a scroll animation. In case distance is below
 * this threshold, an immediate jump will be performed.
 * Due to dpi or rounding irregularities in browsers floating point numbers for scrollTop/scrollLeft values
 * are possible, making a === comparison of current scrollTop or scrollLeft and target scrollPosition error-prone.
 */
PageScrollConfig._minScrollDistance = 2;
/**
 * Name of the default namespace.
 */
PageScrollConfig._defaultNamespace = 'default';
/**
 * Whether by default the scrolling should happen in vertical direction (by manipulating the scrollTop property)
 * (= true; default) or in horizontal direction (by manipulating the scrollLeft property) (= false
 */
PageScrollConfig.defaultIsVerticalScrolling = true;
/**
 * How many console logs should be emitted.
 * 0: None
 * 2: If animation could not be started due to missing target, "already at destination" or similar reasons
 * 5: All scroll position values that get set
 */
PageScrollConfig._logLevel = 2;
/**
 * The duration how long a scrollTo animation should last by default.
 * May be overridden using the page-scroll-duration attribute on a single ng2PageScroll instance.
 */
PageScrollConfig.defaultDuration = 1250;
/**
 * The distance in pixels above scroll target where the animation should stop. Setting a positive number results in
 * the scroll target being more in the middle of the screen, negative numbers will produce scrolling "too far"
 */
PageScrollConfig.defaultScrollOffset = 0;
/**
 * Whether by default for inline scroll animations the advanced offset calculation should take place (true) or
 * not (false). Default is false.
 * The advanced offset calculation will traverse the DOM tree upwards, starting at the scrollTarget, until it finds
 * the scrollingView container element. Along the way the offset positions of the relative positioned
 * (position: relative) elements will be taken into account for calculating the target elements position.
 */
PageScrollConfig.defaultAdvancedInlineOffsetCalculation = false;
/**
 * The events that are listened to on the body to decide whether a scroll animation has been interfered/interrupted by the user
 */
PageScrollConfig._interruptEvents = ['mousedown', 'wheel', 'DOMMouseScroll', 'mousewheel', 'keyup', 'touchmove'];
/**
 * The keys that are considered to interrupt a scroll animation (mainly the arrow keys). All other key presses will not stop the
 * scroll animation.
 */
PageScrollConfig._interruptKeys = [33, 34, 35, 36, 38, 40];
/**
 * Whether a scroll animation should be interruptible by user interaction (true) or not (false). If the user performs an
 * interrupting event while a scroll animation takes place, the scroll animation stops.
 */
PageScrollConfig.defaultInterruptible = true;
PageScrollConfig._easingLogic = {
    ease: (t, b, c, d) => {
        // Linear easing
        return c * t / d + b;
    }
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PageScrollService {
    constructor() {
        this.runningInstances = [];
        this.onInterrupted = {
            report: (event, pageScrollInstance) => {
                if (!pageScrollInstance.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                let /** @type {?} */ shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    if (PageScrollConfig._interruptKeys.indexOf((/** @type {?} */ (event)).keyCode) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.scrollingViews.some(scrollingView => scrollingView.contains(event.target))) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    this.stopAll(pageScrollInstance.namespace);
                }
            }
        };
        if (PageScrollService.instanceCounter > 0 && isDevMode()) {
            console.warn('An instance of PageScrollService already exists, usually ' +
                'including one provider should be enough, so double check.');
        }
        PageScrollService.instanceCounter++;
    }
    /**
     * @param {?} interrupted
     * @param {?} pageScrollInstance
     * @return {?}
     */
    stopInternal(interrupted, pageScrollInstance) {
        const /** @type {?} */ index = this.runningInstances.indexOf(pageScrollInstance);
        if (index >= 0) {
            this.runningInstances.splice(index, 1);
        }
        if (pageScrollInstance.interruptListenersAttached) {
            pageScrollInstance.detachInterruptListeners();
        }
        if (pageScrollInstance.timer) {
            // Clear/Stop the timer
            clearInterval(pageScrollInstance.timer);
            // Clear the reference to this timer
            pageScrollInstance.timer = undefined;
            pageScrollInstance.fireEvent(!interrupted);
            return true;
        }
        return false;
    }
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    start(pageScrollInstance) {
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollingViews === null || pageScrollInstance.scrollingViews.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (isDevMode()) {
                console.warn('No scrollingViews specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        let /** @type {?} */ startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollingViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollingViews.forEach((scrollingView) => {
            if (PageScrollUtilService.isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            const /** @type {?} */ scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        });
        const /** @type {?} */ pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        const /** @type {?} */ scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (isDevMode()) {
                // console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        const /** @type {?} */ allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < PageScrollConfig._minScrollDistance;
        // Check how long we need to scroll if a speed option is given
        // Default executionDuration is the specified duration
        pageScrollInstance.executionDuration = pageScrollInstance.duration;
        // Maybe we need to pay attention to the speed option?
        if (!PageScrollUtilService.isUndefinedOrNull(pageScrollInstance.speed) && PageScrollUtilService.isUndefinedOrNull(pageScrollInstance.duration)) {
            // Speed option is set and no duration => calculate duration based on speed and scroll distance
            pageScrollInstance.executionDuration = pageScrollInstance.distanceToScroll / pageScrollInstance.speed * 1000;
        }
        // We should go there directly, as our "animation" would have one big step
        // only anyway and this way we save the interval stuff
        const /** @type {?} */ tooShortInterval = pageScrollInstance.executionDuration <= PageScrollConfig._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (isDevMode()) {
                
            }
            pageScrollInstance.setScrollPosition(pageScrollInstance.targetScrollPosition);
            pageScrollInstance.fireEvent(true);
            return;
        }
        // Register the interrupt listeners if we want an interruptible scroll animation
        if (pageScrollInstance.interruptible ||
            (PageScrollUtilService.isUndefinedOrNull(pageScrollInstance.interruptible) && PageScrollConfig.defaultInterruptible)) {
            pageScrollInstance.attachInterruptListeners(this.onInterrupted);
        }
        // Let's get started, get the start time...
        pageScrollInstance.startTime = new Date().getTime();
        // .. and calculate the end time (when we need to finish at last)
        pageScrollInstance.endTime = pageScrollInstance.startTime + pageScrollInstance.executionDuration;
        pageScrollInstance.timer = setInterval((_pageScrollInstance) => {
            // Take the current time
            const /** @type {?} */ currentTime = new Date().getTime();
            // Determine the new scroll position
            let /** @type {?} */ newScrollPosition;
            let /** @type {?} */ stopNow = false;
            if (_pageScrollInstance.endTime <= currentTime) {
                // We're over the time already, so go the targetScrollPosition (aka destination)
                newScrollPosition = _pageScrollInstance.targetScrollPosition;
                stopNow = true;
            }
            else {
                // Calculate the scroll position based on the current time using the easing function
                newScrollPosition = Math.round(_pageScrollInstance.easingLogic.ease(currentTime - _pageScrollInstance.startTime, _pageScrollInstance.startScrollPosition, _pageScrollInstance.distanceToScroll, _pageScrollInstance.executionDuration));
            }
            // Set the new scrollPosition to all scrollingViews elements
            if (!_pageScrollInstance.setScrollPosition(newScrollPosition)) {
                // Setting the new scrollTop/scrollLeft value failed for all ScrollingViews
                // early stop the scroll animation to save resources
                stopNow = true;
            }
            // At the end do the internal stop maintenance and fire the pageScrollFinish event
            // (otherwise the event might arrive at "too early")
            if (stopNow) {
                this.stopInternal(false, _pageScrollInstance);
            }
        }, PageScrollConfig._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    }
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    stopAll(namespace) {
        if (this.runningInstances.length > 0) {
            let /** @type {?} */ stoppedSome = false;
            for (let /** @type {?} */ i = 0; i < this.runningInstances.length; ++i) {
                const /** @type {?} */ pageScrollInstance = this.runningInstances[i];
                if (PageScrollUtilService.isUndefinedOrNull(namespace) || namespace.length === 0 ||
                    pageScrollInstance.namespace === namespace) {
                    stoppedSome = true;
                    this.stopInternal(true, pageScrollInstance);
                    // Decrease the counter, as we removed an item from the array we iterate over
                    i--;
                }
            }
            return stoppedSome;
        }
        return false;
    }
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    stop(pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    }
}
PageScrollService.instanceCounter = 0;
PageScrollService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
PageScrollService.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
* Created by sebastianfuss on 29.08.16.
*/
/**
 * An Interface specifying the possible options to be passed into the newInstance() factory method
 * @record
 */

/**
 * Represents a scrolling action
 */
class PageScrollInstance {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {\@link PageScrollInstance#simpleInstance}
     *      {\@link PageScrollInstance#newInstance}
     * @param {?} namespace
     * @param {?} document
     */
    constructor(namespace, document) {
        /**
         * These properties will be set during instance construction and default to their defaults from PageScrollConfig
         */
        this._namespace = PageScrollConfig._defaultNamespace;
        this._verticalScrolling = PageScrollConfig.defaultIsVerticalScrolling;
        this._offset = PageScrollConfig.defaultScrollOffset;
        this._duration = PageScrollConfig.defaultDuration;
        this._easingLogic = PageScrollConfig.defaultEasingLogic;
        this._interruptible = PageScrollConfig.defaultInterruptible;
        this._advancedInlineOffsetCalculation = PageScrollConfig.defaultAdvancedInlineOffsetCalculation;
        this._pageScrollFinish = new EventEmitter();
        /**
         * These properties will be set/manipulated if the scroll animation starts
         */
        this._startScrollPosition = 0;
        this._interruptListenersAttached = false;
        this._timer = null;
        this._namespace = namespace;
        this.document = document;
    }
    /**
     * @param {?} document
     * @param {?} scrollTarget
     * @param {?=} namespace
     * @return {?}
     */
    static simpleInstance(document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace
        });
    }
    /**
     * @param {?} options
     * @return {?}
     */
    static newInstance(options) {
        if (PageScrollUtilService.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        // const pageScrollInstance: PageScrollInstance = new PageScrollInstance(options.namespace, document);
        const /** @type {?} */ pageScrollInstance = new PageScrollInstance(options.namespace, document);
        if (PageScrollUtilService.isUndefinedOrNull(options.scrollingViews) || options.scrollingViews.length === 0) {
            pageScrollInstance._isInlineScrolling = false;
            pageScrollInstance._scrollingViews = [document.documentElement, document.body, document.body.parentNode];
        }
        else {
            pageScrollInstance._isInlineScrolling = true;
            pageScrollInstance._scrollingViews = options.scrollingViews;
        }
        pageScrollInstance._scrollTarget = options.scrollTarget;
        if (!PageScrollUtilService.isUndefinedOrNull(options.verticalScrolling)) {
            pageScrollInstance._verticalScrolling = options.verticalScrolling;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(options.pageScrollOffset)) {
            pageScrollInstance._offset = options.pageScrollOffset;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(options.pageScrollEasingLogic)) {
            pageScrollInstance._easingLogic = options.pageScrollEasingLogic;
        }
        if (PageScrollUtilService.isUndefinedOrNull(options.pageScrollDuration) && !PageScrollUtilService.isUndefinedOrNull(options.pageScrollSpeed)) {
            // No duration specified in the options, only in this case we use the speed option when present
            pageScrollInstance._speed = options.pageScrollSpeed;
            pageScrollInstance._duration = undefined;
        }
        else if (!PageScrollUtilService.isUndefinedOrNull(options.pageScrollDuration)) {
            pageScrollInstance._duration = options.pageScrollDuration;
        }
        if (!PageScrollUtilService.isUndefinedOrNull(options.pageScrollFinishListener)) {
            pageScrollInstance._pageScrollFinish = options.pageScrollFinishListener;
        }
        pageScrollInstance._interruptible = options.pageScrollInterruptible ||
            (PageScrollUtilService.isUndefinedOrNull(options.pageScrollInterruptible) && PageScrollConfig.defaultInterruptible);
        pageScrollInstance._advancedInlineOffsetCalculation = options.advancedInlineOffsetCalculation ||
            (PageScrollUtilService.isUndefinedOrNull(options.advancedInlineOffsetCalculation) &&
                PageScrollConfig.defaultAdvancedInlineOffsetCalculation);
        return pageScrollInstance;
    }
    /**
     * Create a PageScrollInstance representing a scroll animation on the documents body.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} verticalScrolling
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     *
     * @return {?}
     */
    static simpleDirectionInstance(document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            namespace,
            verticalScrolling,
        });
    }
    /**
     * Create a PageScrollInstance representing a scroll animation to the target element where the scrollingView
     * elements get scrolled (like a div container with fixed height, resulting in scrollbars in it).
     *
     * Make sure that the scrollTarget is located inside the scrollingView in the DOM hierarchy, otherwise the
     * scrollingView will be scrolled to an apparently arbitrary position.
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    static simpleInlineInstance(document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace
        });
    }
    /**
     *
     * @deprecated Use {\@link newInstance(options: PageScrollOptions)}
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?} scrollingView The element that should be scrolled
     * @param {?} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} namespace Optional namespace to group scroll animations logically
     *
     * @return {?}
     */
    static simpleInlineDirectionInstance(document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews: [scrollingView],
            namespace,
            verticalScrolling,
        });
    }
    /**
     *
     * @param {?} document The document that contains the body to be scrolled and the scrollTarget elements
     * @param {?} scrollTarget Where to scroll to. Can be a HTMLElement reference or a string like '#elementId'
     * @param {?=} scrollingViews The elements that should be scrolled. Null to use the default elements of document and body.
     * @param {?=} namespace Optional namespace to group scroll animations logically
     * @param {?=} verticalScrolling whether the scrolling should be performed in vertical direction (true, default) or horizontal (false)
     * @param {?=} pageScrollOffset The offset to be attached to the top of the target element or
     *                          null/undefined to use application default
     * @param {?=} pageScrollInterruptible Whether this scroll animation should be interruptible.
     *                                 Null/undefined for application default
     * @param {?=} pageScrollEasingLogic Easing function to be used for manipulating the scroll position
     *                          over time. Null/undefined for application default
     * @param {?=} pageScrollDuration The duration in milliseconds the animation should last.
     *                            Null/undefined for application default
     * @param {?=} pageScrollFinishListener Listener to be called to notify other parts of the application
     *                                  that the scroll animation has finishe
     *
     * @return {?}
     */
    static advancedInstance(document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document,
            scrollTarget,
            scrollingViews,
            namespace,
            verticalScrolling,
            pageScrollOffset,
            pageScrollInterruptible,
            pageScrollEasingLogic,
            pageScrollDuration,
            pageScrollFinishListener
        });
    }
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    getScrollPropertyValue(scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    }
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    extractScrollTargetPosition() {
        // let scrollTargetElement: HTMLElement;
        let /** @type {?} */ scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById((/** @type {?} */ (this._scrollTarget)).substr(1));
        }
        else {
            scrollTargetElement = /** @type {?} */ (this._scrollTarget);
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            const /** @type {?} */ position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                const /** @type {?} */ accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                const /** @type {?} */ theWindow = scrollTargetElement.ownerDocument.defaultView;
                let /** @type {?} */ parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                let /** @type {?} */ parent = scrollTargetElement.parentElement;
                // Iterate upwards all parents
                while (!parentFound && !PageScrollUtilService.isUndefinedOrNull(parent)) {
                    if (theWindow.getComputedStyle(parent).getPropertyValue('position') === 'relative') {
                        accumulatedParentsPos.top += parent.offsetTop;
                        accumulatedParentsPos.left += parent.offsetLeft;
                    }
                    // Next iteration
                    parent = parent.parentElement;
                    parentFound = parent === this.scrollingViews[0];
                }
                if (parentFound) {
                    // Only use the results if we found the parent, otherwise we accumulated too much anyway
                    position.top += accumulatedParentsPos.top;
                    position.left += accumulatedParentsPos.left;
                }
                else {
                    if (PageScrollConfig._logLevel >= 2) {
                        console.warn('Unable to find nested scrolling targets parent!');
                    }
                }
            }
            return position;
        }
        return PageScrollUtilService.extractElementPosition(this.document, scrollTargetElement);
    }
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    getCurrentOffset() {
        return this._offset;
    }
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    setScrollPosition(position) {
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce((oneAlreadyWorked, scrollingView) => {
            const /** @type {?} */ startScrollPropertyValue = this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !PageScrollUtilService.isUndefinedOrNull(startScrollPropertyValue)) {
                const /** @type {?} */ scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                const /** @type {?} */ isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement || scrollDistance > Math.abs(this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }, false);
    }
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    fireEvent(value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    }
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    attachInterruptListeners(interruptReporter) {
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = (event) => {
            interruptReporter.report(event, this);
        };
        PageScrollConfig._interruptEvents.forEach((event) => this.document.body.addEventListener(event, this._interruptListener));
        this._interruptListenersAttached = true;
    }
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    detachInterruptListeners() {
        PageScrollConfig._interruptEvents.forEach((event) => this.document.body.removeEventListener(event, this._interruptListener));
        this._interruptListenersAttached = false;
    }
    /**
     * @return {?}
     */
    get namespace() {
        return this._namespace;
    }
    /**
     * @return {?}
     */
    get scrollTarget() {
        return this._scrollTarget;
    }
    /**
     * @return {?}
     */
    get verticalScrolling() {
        return this._verticalScrolling;
    }
    /**
     * @return {?}
     */
    get scrollingViews() {
        return this._scrollingViews;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startScrollPosition(value) {
        this._startScrollPosition = value;
    }
    /**
     * @return {?}
     */
    get startScrollPosition() {
        return this._startScrollPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set targetScrollPosition(value) {
        this._targetScrollPosition = value;
    }
    /**
     * @return {?}
     */
    get targetScrollPosition() {
        return this._targetScrollPosition;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set distanceToScroll(value) {
        this._distanceToScroll = value;
    }
    /**
     * @return {?}
     */
    get distanceToScroll() {
        return this._distanceToScroll;
    }
    /**
     * @return {?}
     */
    get executionDuration() {
        return this._executionDuration;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set executionDuration(value) {
        this._executionDuration = value;
    }
    /**
     * @return {?}
     */
    get duration() {
        return this._duration;
    }
    /**
     * @return {?}
     */
    get speed() {
        return this._speed;
    }
    /**
     * @return {?}
     */
    get easingLogic() {
        return this._easingLogic;
    }
    /**
     * @return {?}
     */
    get interruptible() {
        return this._interruptible;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set startTime(value) {
        this._startTime = value;
    }
    /**
     * @return {?}
     */
    get startTime() {
        return this._startTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set endTime(value) {
        this._endTime = value;
    }
    /**
     * @return {?}
     */
    get endTime() {
        return this._endTime;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set timer(value) {
        this._timer = value;
    }
    /**
     * @return {?}
     */
    get timer() {
        return this._timer;
    }
    /**
     * @return {?}
     */
    get interruptListenersAttached() {
        return this._interruptListenersAttached;
    }
}
/**
 * An Interface a listener should implement to be notified about possible interrupt events
 * that happened due to user interaction while a scroll animation takes place.
 *
 * The PageScrollService provides an implementation to a PageScrollInstance to be notified
 * about scroll animation interrupts and stop related animations.
 * @record
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PageScrollDirective {
    /**
     * @param {?} pageScrollService
     * @param {?} router
     * @param {?} document
     */
    constructor(pageScrollService, router$$1, document) {
        this.pageScrollService = pageScrollService;
        this.router = router$$1;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new EventEmitter();
        this.document = /** @type {?} */ (document);
    }
    /**
     * @return {?}
     */
    ngOnChanges() {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    }
    /**
     * @return {?}
     */
    generatePageScrollInstance() {
        if (PageScrollUtilService.isUndefinedOrNull(this.pageScrollInstance)) {
            this.pageScrollInstance = PageScrollInstance.newInstance({
                document: this.document,
                scrollTarget: this.href,
                scrollingViews: null,
                namespace: this.pageScroll,
                verticalScrolling: !this.pageScrollHorizontal,
                pageScrollOffset: this.pageScrollOffset,
                pageScrollInterruptible: this.pageScrollInterruptible,
                pageScrollEasingLogic: this.pageScrollEasing,
                pageScrollDuration: this.pageScrollDuration,
                pageScrollSpeed: this.pageScrollSpeed,
                pageScrollFinishListener: this.pageScrollFinish
            });
        }
        return this.pageScrollInstance;
    }
    /**
     * @return {?}
     */
    pushRouterState() {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: /** @type {?} */ (this.pageScrollInstance.scrollTarget.substr(1)),
                preserveQueryParams: true
            });
        }
    }
    /**
     * @return {?}
     */
    scroll() {
        const /** @type {?} */ pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    }
    /**
     * @return {?}
     */
    handleClick() {
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            let /** @type {?} */ urlTree;
            if (typeof this.routerLink === 'string') {
                urlTree = this.router.parseUrl(this.routerLink);
            }
            else {
                urlTree = this.router.createUrlTree(this.routerLink);
            }
            if (!this.router.isActive(urlTree, true)) {
                // We need to navigate their first.
                // Navigation is handled by the routerLink directive
                // so we only need to listen for route change
                const /** @type {?} */ subscription = /** @type {?} */ (this.router.events.subscribe((routerEvent) => {
                    if (routerEvent instanceof NavigationEnd) {
                        subscription.unsubscribe();
                        this.scroll();
                    }
                    else if (routerEvent instanceof NavigationError || routerEvent instanceof NavigationCancel) {
                        subscription.unsubscribe();
                    }
                }));
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    }
}
PageScrollDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbPageScroll]'
            },] },
];
/** @nocollapse */
PageScrollDirective.ctorParameters = () => [
    { type: PageScrollService, },
    { type: Router, decorators: [{ type: Optional },] },
    { type: undefined, decorators: [{ type: Inject, args: [DOCUMENT,] },] },
];
PageScrollDirective.propDecorators = {
    "routerLink": [{ type: Input },],
    "href": [{ type: Input },],
    "pageScrollHorizontal": [{ type: Input },],
    "pageScrollOffset": [{ type: Input },],
    "pageScrollDuration": [{ type: Input },],
    "pageScrollSpeed": [{ type: Input },],
    "pageScrollEasing": [{ type: Input },],
    "pageScrollInterruptible": [{ type: Input },],
    "pageScrollAdjustHash": [{ type: Input },],
    "pageScroll": [{ type: Input },],
    "pageScrollFinish": [{ type: Output },],
    "handleClick": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
* Created by sebastianfuss on 03.09.16.
*/
class SmoothscrollModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: SmoothscrollModule,
            providers: [
                { provide: PageScrollService, useClass: PageScrollService }
            ]
        };
    }
}
SmoothscrollModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PageScrollDirective],
                exports: [PageScrollDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * returns coumputed style of given element
 * @param {?} element
 * @param {?} styleProp
 * @return {?}
 */
function computedStyle(element, styleProp) {
    let /** @type {?} */ el;
    el = (typeof element === 'string') ? (/** @type {?} */ (document.querySelector(/** @type {?} */ (element)))) : element;
    let /** @type {?} */ value;
    const /** @type {?} */ defaultView = (el.ownerDocument || document).defaultView;
    // W3C standard way:
    if (defaultView && defaultView.getComputedStyle) {
        // sanitize property name to css notation
        // (hypen separated words eg. font-Size)
        styleProp = styleProp.replace(/([A-Z])/g, '-$1').toLowerCase();
        return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
    }
    else if (el['currentStyle']) {
        // IE
        // sanitize property name to camelCase
        styleProp = styleProp.replace(/\-(\w)/g, function (letter) {
            return letter.toUpperCase();
        });
        value = el['currentStyle'][styleProp];
        // convert other units to pixels on IE
        if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
            return (function (val) {
                const /** @type {?} */ oldLeft = el.style.left, /** @type {?} */ oldRsLeft = el['runtimeStyle'].left;
                el['runtimeStyle'].left = el['currentStyle'].left;
                el.style.left = val || 0;
                val = el.style['pixelLeft'] + 'px';
                el.style.left = oldLeft;
                el['runtimeStyle'].left = oldRsLeft;
                return val;
            })(value);
        }
        return value;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MdbStickyDirective {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    constructor(el, platformId) {
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = () => {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            const /** @type {?} */ parentRect = this.el.parentElement.getBoundingClientRect();
            const /** @type {?} */ bodyRect = document.body.getBoundingClientRect();
            let /** @type {?} */ dynProps;
            if (this.original.float === 'right') {
                const /** @type {?} */ right = bodyRect.right - parentRect.right + this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (this.original.float === 'left') {
                const /** @type {?} */ left = parentRect.left - bodyRect.left + this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (this.original.marginTop + this.original.marginBottom +
                this.original.boundingClientRect.height + this.stickyOffsetTop >= parentRect.bottom) {
                /**
                 * stikcy element reached to the bottom of the container
                 */
                const /** @type {?} */ floatAdjustment = this.original.float === 'right' ? { right: 0 } :
                    this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + this.original.marginTop + this.stickyOffsetTop > this.original.offsetTop) {
                /**
                            * stikcy element is in the middle of container
                            */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (this.original.float !== 'left' && this.original.float !== 'right' && !this.fillerEl) {
                    this.fillerEl = document.createElement('div');
                    this.fillerEl.style.height = this.el.offsetHeight + 'px';
                    this.parentEl.insertBefore(this.fillerEl, this.el);
                }
                Object.assign(this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                /**
                            * stikcy element is in the original position
                            */
                // console.log('case 3 (original)');
                if (this.fillerEl) {
                    this.parentEl.removeChild(this.fillerEl); // IE11 does not work with el.remove()
                    this.fillerEl = undefined;
                }
                Object.assign(this.el.style, {
                    position: this.original.position,
                    float: this.original.float,
                    top: this.original.top,
                    bottom: this.original.bottom,
                    width: this.original.width,
                    left: this.original.left
                }, dynProps);
            }
        };
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            const /** @type {?} */ cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        const /** @type {?} */ allowedPositions = ['absolute', 'fixed', 'relative'];
        const /** @type {?} */ parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) {
            // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        if (this.isBrowser) {
            const /** @type {?} */ elRect = this.el.getBoundingClientRect();
            this.el.getBoundingClientRect();
            this.original = {
                boundingClientRect: elRect,
                position: computedStyle(this.el, 'position'),
                float: computedStyle(this.el, 'float'),
                top: computedStyle(this.el, 'top'),
                bottom: computedStyle(this.el, 'bottom'),
                left: computedStyle(this.el, 'left'),
                width: computedStyle(this.el, 'width'),
                offsetTop: this.el.offsetTop,
                offsetLeft: this.el.offsetLeft,
                marginTop: parseInt(computedStyle(this.el, 'marginTop'), 10),
                marginBottom: parseInt(computedStyle(this.el, 'marginBottom'), 10),
                marginLeft: parseInt(computedStyle(this.el, 'marginLeft'), 10),
                marginRight: parseInt(computedStyle(this.el, 'marginLeft'), 10)
            };
        }
        this.attach();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.detach();
    }
    /**
     * @return {?}
     */
    attach() {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    }
    /**
     * @return {?}
     */
    detach() {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    }
}
MdbStickyDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbSticky]'
            },] },
];
/** @nocollapse */
MdbStickyDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
MdbStickyDirective.propDecorators = {
    "stickyAfter": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class StickyContentModule {
}
StickyContentModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [MdbStickyDirective],
                exports: [MdbStickyDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabsetConfig {
    constructor() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
}
TabsetConfig.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WavesDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            const /** @type {?} */ button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            const /** @type {?} */ xPos = event.clientX - button.getBoundingClientRect().left;
            const /** @type {?} */ yPos = event.clientY - button.getBoundingClientRect().top;
            const /** @type {?} */ tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            const /** @type {?} */ ripple = button.appendChild(tmp);
            const /** @type {?} */ top = yPos + 'px';
            const /** @type {?} */ left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            const /** @type {?} */ scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            const /** @type {?} */ duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    }
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    removeRipple(button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(() => {
            ripple.style.opacity = '0';
            setTimeout(() => {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    }
}
WavesDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbWavesEffect]'
            },] },
];
/** @nocollapse */
WavesDirective.ctorParameters = () => [
    { type: ElementRef, },
];
WavesDirective.propDecorators = {
    "click": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabsetComponent {
    /**
     * @param {?} config
     * @param {?} ripple
     */
    constructor(config, ripple) {
        this.ripple = ripple;
        this.tabs = [];
        this.classMap = {};
        this.clazz = true;
        this.showBsTab = new EventEmitter();
        this.shownBsTab = new EventEmitter();
        this.hideBsTab = new EventEmitter();
        this.hiddenBsTab = new EventEmitter();
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get vertical() {
        return this._vertical;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set vertical(value) {
        this._vertical = value;
        this.setClassMap();
    }
    /**
     * @param {?} index
     * @return {?}
     */
    setActiveTab(index) {
        this.tabs[index - 1].active = true;
    }
    /**
     * if true tabs fill the container and have a consistent width
     * @return {?}
     */
    get justified() {
        return this._justified;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set justified(value) {
        this._justified = value;
        this.setClassMap();
    }
    /**
     * navigation context class: 'tabs' or 'pills'
     * @return {?}
     */
    get type() {
        return this._type;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set type(value) {
        this._type = value;
        this.setClassMap();
    }
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    click(event, index) {
        const /** @type {?} */ prev = this.tabEl.toArray()[this.getActive()];
        const /** @type {?} */ clicked = this.tabEl.toArray()[index];
        this.hideBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.showBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.setActiveTab(index + 1);
        if (this.contentClass !== 'vertical') {
            this.ripple.el = clicked;
            this.ripple.click(event);
        }
        this.hiddenBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
        this.shownBsTab.emit({
            target: clicked,
            relatedTarget: prev
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.isDestroyed = true;
    }
    /**
     * @return {?}
     */
    getActive() {
        const /** @type {?} */ tabs = this.tabs.map((object, index) => {
            return {
                index: index,
                object: object
            };
        });
        for (const /** @type {?} */ tab of tabs) {
            if (tab.object.active) {
                return tab.index;
            }
        }
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    addTab(tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    }
    /**
     * @param {?} tab
     * @return {?}
     */
    removeTab(tab) {
        const /** @type {?} */ index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            const /** @type {?} */ newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    }
    /**
     * @param {?} index
     * @return {?}
     */
    getClosestTabIndex(index) {
        const /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (let /** @type {?} */ step = 1; step <= tabsLength; step += 1) {
            const /** @type {?} */ prevIndex = index - step;
            const /** @type {?} */ nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    }
    /**
     * @param {?} index
     * @return {?}
     */
    hasAvailableTabs(index) {
        const /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (let /** @type {?} */ i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    }
    /**
     * @return {?}
     */
    setClassMap() {
        this.classMap = {
            'nav-stacked': this.vertical,
            'nav-justified': this.justified,
        };
    }
    /**
     * @return {?}
     */
    listGet() {
        if (this.vertical) {
            this.listGetClass = 'col-md-3';
        }
        else {
            this.listGetClass = 'col-md-12';
        }
    }
    /**
     * @return {?}
     */
    tabsGet() {
        if (this.vertical) {
            this.tabsGetClass = 'col-md-9';
        }
        else {
            this.tabsGetClass = 'col-md-12';
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.listGet();
        this.tabsGet();
    }
}
TabsetComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-tabset',
                template: "<div class=\"container-fluid\">  <div class=\"row\"> <div class=\"{{ listGetClass }}\"> <ul class=\"nav {{ buttonClass }}\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\"> <li *ngFor=\"let tabz of tabs;let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"click($event, i)\"> <a #tabEl href=\"javascript:void(0);\" class=\"nav-link waves-light\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"> <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span> <span *ngIf=\"tabz.removable\"> <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"glyphicon glyphicon-remove-circle\"> </span> </span> </a> </li> </ul> </div> <div class=\"{{ tabsGetClass }}\"> <div class=\"tab-content {{ contentClass }}\"> <ng-content></ng-content> </div> </div> </div> </div>",
                providers: [WavesDirective]
            },] },
];
/** @nocollapse */
TabsetComponent.ctorParameters = () => [
    { type: TabsetConfig, },
    { type: WavesDirective, },
];
TabsetComponent.propDecorators = {
    "clazz": [{ type: HostBinding, args: ['class.tab-container',] },],
    "buttonClass": [{ type: Input },],
    "contentClass": [{ type: Input },],
    "tabEl": [{ type: ViewChildren, args: ['tabEl', { read: ElementRef },] },],
    "showBsTab": [{ type: Output },],
    "shownBsTab": [{ type: Output },],
    "hideBsTab": [{ type: Output },],
    "hiddenBsTab": [{ type: Output },],
    "vertical": [{ type: Input },],
    "justified": [{ type: Input },],
    "type": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabDirective {
    /**
     * @param {?} tabset
     * @param {?} el
     */
    constructor(tabset, el) {
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.select = new EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new EventEmitter();
        /**
         * fired before tab will be removed
         */
        this.removed = new EventEmitter();
        this.addClass = true;
        this.test = true;
        this.el = null;
        this.el = el;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    /**
     * tab active state toggle
     * @return {?}
     */
    get active() {
        return this._active;
    }
    /**
     * @param {?} active
     * @return {?}
     */
    set active(active) {
        if (this.disabled && active || !active) {
            if (!active) {
                this.removeClass(this.el.nativeElement, 'show');
                setTimeout(() => {
                    this._active = active;
                    this.deselect.emit(this);
                }, 150);
            }
            return;
        }
        setTimeout(() => {
            this._active = active;
            this.classAdd(this.el.nativeElement, 'show');
        }, 150);
        this.select.emit(this);
        this.tabset.tabs.forEach((mdbTab) => {
            if (mdbTab !== this) {
                mdbTab.active = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.removable = this.removable;
    }
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    }
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    classAdd(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
        
    }
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            const /** @type {?} */ reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    }
}
TabDirective.decorators = [
    { type: Directive, args: [{ selector: 'mdb-tab, [mdbTab]' },] },
];
/** @nocollapse */
TabDirective.ctorParameters = () => [
    { type: TabsetComponent, },
    { type: ElementRef, },
];
TabDirective.propDecorators = {
    "heading": [{ type: Input },],
    "disabled": [{ type: Input },],
    "removable": [{ type: Input },],
    "customClass": [{ type: Input },],
    "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
    "select": [{ type: Output },],
    "deselect": [{ type: Output },],
    "removed": [{ type: Output },],
    "addClass": [{ type: HostBinding, args: ['class.tab-pane',] },],
    "test": [{ type: HostBinding, args: ['class.fade',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Should be used to mark <template> element as a template for tab heading
 */
class TabHeadingDirective {
    /**
     * @param {?} templateRef
     * @param {?} tab
     */
    constructor(templateRef, tab) {
        tab.headingRef = templateRef;
    }
}
TabHeadingDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbTabHeading]' },] },
];
/** @nocollapse */
TabHeadingDirective.ctorParameters = () => [
    { type: TemplateRef, },
    { type: TabDirective, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NgTranscludeDirective {
    /**
     * @param {?} viewRef
     */
    constructor(viewRef) {
        this.viewRef = viewRef;
    }
    /**
     * @param {?} templateRef
     * @return {?}
     */
    set mdbNgTransclude(templateRef) {
        this._ngTransclude = templateRef;
        if (templateRef) {
            this.viewRef.createEmbeddedView(templateRef);
        }
    }
    /**
     * @return {?}
     */
    get mdbNgTransclude() {
        return this._ngTransclude;
    }
}
NgTranscludeDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbNgTransclude]'
            },] },
];
/** @nocollapse */
NgTranscludeDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
];
NgTranscludeDirective.propDecorators = {
    "mdbNgTransclude": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TabsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    }
}
TabsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
                exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MaterialChipsComponent),
    multi: true
};
class MaterialChipsComponent {
    constructor() {
        this.placeholder = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange = new EventEmitter();
        this.labelsChange = new EventEmitter();
        this.onTouchedCallback = this.noop;
        this.onChangeCallback = this.noop;
        this.onTouchedCallback = this.onTouchedCallback === undefined ? this.noop : this.onTouchedCallback;
        this.onChangeCallback = this.onChangeCallback === undefined ? this.noop : this.onChangeCallback;
    }
    /**
     * @return {?}
     */
    get tagsfocused() {
        return this.isTagsFocused;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) { this.onChangeCallback = fn; }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) { this.onTouchedCallback = fn; }
    /**
     * @param {?} value
     * @return {?}
     */
    removeValue(value) {
        const /** @type {?} */ index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    addValue(value) {
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        if (value !== this.values) {
            this.values = value;
        }
    }
    /**
     * @return {?}
     */
    onFocus() {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
    /**
     * @return {?}
     */
    focusOutFunction() {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    }
}
MaterialChipsComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-material-chips',
                template: "<div *ngIf=\"values && values.length\" class=\"md-chip-list\"  [ngClass]=\"focused\"> <span *ngFor=\"let value of values\" class=\"md-chip\" selected >          {{value}} <i class=\"close fa fa-times\" aria-hidden=\"true\" (click)=\"removeValue(value)\" ></i> </span> <span> <input  [(ngModel)]=\"labelToAdd\"  (keyup.enter)=\"addValue(box.value, $event);$event.preventDefault()\" (focus)=\"onFocus()\"  (focusout)=\"focusOutFunction()\"   #box /> </span> </div> <div *ngIf=\"!values || !values.length\"> <input class=\"md-chips-input\" placeholder=\"{{ placeholder }}\" #tbox  (keyup.enter)=\"addValue(tbox.value, $event);$event.preventDefault()\"/> </div>",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
MaterialChipsComponent.ctorParameters = () => [];
MaterialChipsComponent.propDecorators = {
    "placeholder": [{ type: Input, args: ['placeholder',] },],
    "tagsfocusedChange": [{ type: Output },],
    "labelsChange": [{ type: Output },],
    "tagsfocused": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MaterialChipsModule {
}
MaterialChipsModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [MaterialChipsComponent],
                exports: [MaterialChipsComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ClockPickerComponent),
    multi: true
};
class ClockPickerComponent {
    /**
     * @param {?} elem
     * @param {?} renderer
     */
    constructor(elem, renderer) {
        this.elem = elem;
        this.renderer = renderer;
        this.twelvehour = false;
        this.darktheme = false;
        this.placeholder = '';
        this.label = '';
        this.duration = 300;
        this.showClock = false;
        this.isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        this.touchDevice = ('ontouchstart' in document.documentElement);
        this.showHours = false;
        this.dialRadius = 135;
        this.outerRadius = 110;
        this.innerRadius = 80;
        this.tickRadius = 20;
        this.diameter = this.dialRadius * 2;
        this.hoursTicks = [];
        this.minutesTicks = [];
        this.selectedHours = { 'h': '12', 'm': '00', 'ampm': 'AM' };
        this.endHours = '';
        this.touchSupported = 'ontouchstart' in window;
        this.mousedownEvent = 'mousedown' + (this.touchSupported ? ' touchstart' : '');
        this.mousemoveEvent = 'mousemove' + (this.touchSupported ? ' touchmove' : '');
        this.mouseupEvent = 'mouseup' + (this.touchSupported ? ' touchend' : '');
        this.onChangeCb = () => { };
        this.onTouchedCb = () => { };
        renderer.listen(this.elem.nativeElement, 'click', (event) => {
            if (this.showClock &&
                event.target &&
                this.elem.nativeElement !== event.target &&
                !this.elem.nativeElement.contains(event.target)) {
                this.showClock = false;
            }
            if (event.target.classList.contains('picker__holder')) {
                this.showClock = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.generateTick();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.listen(this.elem.nativeElement.querySelector('.clockpicker-plate'), 'mousedown', (event) => {
            this.mousedown(event, false);
        });
    }
    /**
     * @return {?}
     */
    checkDraw() {
        let /** @type {?} */ value;
        const /** @type {?} */ isHours = this.showHours;
        if (isHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        const /** @type {?} */ unit = Math.PI / (isHours ? 6 : 30), /** @type {?} */
        radian = value * unit, /** @type {?} */
        radius = isHours && value > 0 && value < 13 ? this.innerRadius : this.outerRadius, /** @type {?} */
        xd = Math.sin(radian) * radius, /** @type {?} */
        yd = -Math.cos(radian) * radius;
        this.setHand(xd, yd, false);
    }
    /**
     * @param {?} e
     * @param {?} space
     * @return {?}
     */
    mousedown(e, space) {
        const /** @type {?} */ offset = this.plate.nativeElement.getBoundingClientRect(), /** @type {?} */
        isTouch = /^touch/.test(e.type), /** @type {?} */
        x0 = offset.left + this.dialRadius, /** @type {?} */
        y0 = offset.top + this.dialRadius, /** @type {?} */
        dx = (isTouch ? e.originalEvent.touches[0] : e).clientX - x0, /** @type {?} */
        dy = (isTouch ? e.originalEvent.touches[0] : e).clientY - y0, /** @type {?} */
        z = Math.sqrt(dx * dx + dy * dy);
        let /** @type {?} */ moved = false;
        if (space && (z < this.outerRadius - this.tickRadius || z > this.outerRadius + this.tickRadius)) {
            return;
        }
        e.preventDefault();
        e.stopPropagation();
        if (this.showHours) {
            this.setHand(dx, dy, true);
        }
        else {
            this.setHand(dx, dy, false);
        }
        const /** @type {?} */ mousemoveEventMethod = (event) => {
            event.preventDefault();
            event.stopPropagation();
            const /** @type {?} */ x = event.clientX - x0, /** @type {?} */
            y = event.clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            this.setHand(x, y, false);
        };
        const /** @type {?} */ mouseupEventMethod = (event) => {
            document.removeEventListener(this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            const /** @type {?} */ x = event.clientX - x0, /** @type {?} */
            y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                this.setHand(x, y, false);
            }
            this.showMinutesClock();
            document.removeEventListener(this.mouseupEvent, mouseupEventMethod);
        };
        document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
        document.addEventListener('mouseup', mouseupEventMethod);
    }
    /**
     * @return {?}
     */
    hideKeyboard() {
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        try {
            setTimeout(() => {
                // creating temp field
                // const field = document.createElement('input');
                const /** @type {?} */ field = this.renderer.createElement('input');
                this.renderer.appendChild(this.elem.nativeElement, field);
                const /** @type {?} */ inputReference = this.elem.nativeElement.lastElementChild;
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setAttribute(inputReference, 'type', 'text');
                this.renderer.setStyle(inputReference, 'opacity', '0');
                this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                // // hiding temp field from peoples eyes
                // // -webkit-user-modify is nessesary for Android 4.x
                // adding onfocus event handler for out temp field
                field.onfocus = () => {
                    // this timeout of 200ms is nessasary for Android 2.3.x
                    setTimeout(() => {
                        this.renderer.setStyle(field, 'display', 'none');
                        setTimeout(() => {
                            this.renderer.removeChild(this.elem.nativeElement, field);
                            document.body.focus();
                        }, 0);
                    }, 0);
                };
                // focusing it
                field.focus();
            }, 0);
        }
        catch (/** @type {?} */ error) {
        }
    }
    /**
     * @return {?}
     */
    openBtnClicked() {
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
        if (this.isMobile) {
            this.hideKeyboard();
        }
    }
    /**
     * @return {?}
     */
    closeBtnClicked() {
        const /** @type {?} */ h = this.selectedHours.h;
        const /** @type {?} */ m = this.selectedHours.m;
        const /** @type {?} */ ampm = this.selectedHours.ampm;
        if (this.twelvehour) {
            this.endHours = h + ':' + m + ampm;
        }
        else {
            this.endHours = h + ':' + m;
        }
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.showClock = false;
    }
    /**
     * @param {?} hour
     * @return {?}
     */
    setHour(hour) {
        this.selectedHours.h = hour;
    }
    /**
     * @param {?} min
     * @return {?}
     */
    setMinute(min) {
        // event.stopPropagation();
        this.selectedHours.m = min;
    }
    /**
     * @param {?} ampm
     * @return {?}
     */
    setAmPm(ampm) {
        // event.stopPropagation();
        this.selectedHours.ampm = ampm;
    }
    /**
     * @return {?}
     */
    showHoursClock() {
        this.showHours = true;
        this.checkDraw();
    }
    /**
     * @return {?}
     */
    showMinutesClock() {
        this.showHours = false;
        this.checkDraw();
    }
    /**
     * @return {?}
     */
    generateTick() {
        if (this.twelvehour) {
            for (let /** @type {?} */ i = 1; i < 13; i++) {
                const /** @type {?} */ radian = i / 6 * Math.PI;
                const /** @type {?} */ radius = this.outerRadius;
                const /** @type {?} */ tick = {
                    'hour': i,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (let /** @type {?} */ i = 0; i < 24; i++) {
                const /** @type {?} */ radian = i / 6 * Math.PI;
                const /** @type {?} */ inner = i > 0 && i < 13;
                const /** @type {?} */ radius = inner ? this.innerRadius : this.outerRadius;
                let /** @type {?} */ h;
                if (i === 0) {
                    h = '0' + i.toString();
                }
                else {
                    h = i;
                }
                const /** @type {?} */ tick = {
                    'hour': h,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (let /** @type {?} */ i = 0; i < 60; i += 5) {
            const /** @type {?} */ radian = i / 30 * Math.PI;
            let /** @type {?} */ min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            const /** @type {?} */ tick = {
                'min': min,
                'left': this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                'top': this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
            };
            this.minutesTicks.push(tick);
        }
    }
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} roundBy5
     * @return {?}
     */
    setHand(x, y, roundBy5) {
        let /** @type {?} */ radian = Math.atan2(x, -y);
        const /** @type {?} */ isHours = this.showHours;
        const /** @type {?} */ unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
        const /** @type {?} */ z = Math.sqrt(x * x + y * y);
        const /** @type {?} */ inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
        let /** @type {?} */ radius = inner ? this.innerRadius : this.outerRadius;
        let /** @type {?} */ value;
        if (this.showHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        if (this.twelvehour) {
            radius = this.outerRadius;
        }
        if (radian < 0) {
            radian = Math.PI * 2 + radian;
        }
        value = Math.round(radian / unit);
        radian = value * unit;
        if (this.twelvehour) {
            if (isHours) {
                if (value === 0) {
                    value = 12;
                }
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        else {
            if (isHours) {
                value = !inner ? value + 12 : value;
                value = value === 24 ? 0 : value;
                value = (inner && value === 0) ? 12 : value;
                value = (!inner && value === 12) ? 0 : value;
            }
            else {
                if (roundBy5) {
                    value *= 5;
                }
                if (value === 60) {
                    value = 0;
                }
            }
        }
        if (isHours) {
            this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
        }
        else {
            if (value % 5 === 0) {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg');
            }
            else {
                this.fg.nativeElement.setAttribute('class', 'clockpicker-canvas-fg active');
            }
        }
        const /** @type {?} */ cx1 = Math.sin(radian) * (radius - this.tickRadius), /** @type {?} */
        cy1 = -Math.cos(radian) * (radius - this.tickRadius), /** @type {?} */
        cx2 = Math.sin(radian) * radius, /** @type {?} */
        cy2 = -Math.cos(radian) * radius;
        this.hand.nativeElement.setAttribute('x2', cx1);
        this.hand.nativeElement.setAttribute('y2', cy1);
        this.bg.nativeElement.setAttribute('cx', cx2);
        this.bg.nativeElement.setAttribute('cy', cy2);
        this.fg.nativeElement.setAttribute('cx', cx2);
        this.fg.nativeElement.setAttribute('cy', cy2);
        if (this.showHours) {
            if (value < 10) {
                this.setHour('0' + value.toString());
            }
            else {
                this.setHour(value.toString());
            }
        }
        else {
            if (value < 10) {
                this.setMinute('0' + value.toString());
            }
            else {
                this.setMinute(value.toString());
            }
        }
    }
    /**
     * @param {?} obj
     * @return {?}
     */
    offset(obj) {
        let /** @type {?} */ left = 0, /** @type {?} */
        top = 0;
        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return { left, top };
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.endHours = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChangeCb = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouchedCb = fn;
    }
}
ClockPickerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-time-picker',
                template: "<div> <div class=\"md-form\"> <label class=\"active\">{{ label }}</label> <input [placeholder]=\"placeholder\" [value]=\"endHours\" type=\"text\" class=\"form-control timepicker\" (click)=\"openBtnClicked()\" [(ngModel)]=\"endHours\"> </div> <div class=\"clockpicker picker\" [hidden]=\"!showClock\" [ngClass]=\"{'picker--opened': showClock, 'darktheme': darktheme}\"> <div class=\"picker__holder\"> <div class=\"picker__frame\"> <div class=\"picker__wrap\"> <div class=\"picker__box\"> <div class=\"picker__date-display\"> <div class=\"clockpicker-display\"> <div class=\"clockpicker-display-column\"> <span class=\"clockpicker-span-hours text-primary\" [ngClass]=\"{'text-primary': showHours}\" (click)=\"showHoursClock()\"> {{ selectedHours.h }}</span>:<span class=\"clockpicker-span-minutes\" [ngClass]=\"{'text-primary': !showHours}\" (click)=\"showMinutesClock()\">{{selectedHours.m }}</span> </div> <div class=\"clockpicker-display-column clockpicker-display-am-pm\" *ngIf=\"twelvehour\"> <div class=\"clockpicker-span-am-pm\">{{ selectedHours.ampm }}</div> </div> </div> </div> <div class=\"picker__calendar-container\"> <div class=\"clockpicker-plate\" #plate> <div class=\"clockpicker-canvas\"> <svg class=\"clockpicker-svg\" width=\"270\" height=\"270\" #svg> <g transform=\"translate(135,135)\" #g> <line x1=\"0\" y1=\"0\" x2=\"77.94228634059948\" y2=\"-45.00000000000001\" #hand></line> <circle class=\"clockpicker-canvas-fg\" r=\"5\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #fg></circle> <circle class=\"clockpicker-canvas-bg\" r=\"20\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #bg></circle> <circle class=\"clockpicker-canvas-bearing\" cx=\"0\" cy=\"0\" r=\"2\" #bearing></circle> </g> </svg> </div> <div class=\"clockpicker-dial clockpicker-hours\" #hoursPlate [ngClass]=\"{'clockpicker-dial-out': !showHours}\" [ngStyle]=\"{'visibility': !showHours ? 'hidden' : 'visible'}\"> <div *ngFor=\"let tick of hoursTicks\" class=\"clockpicker-tick\" style=\"font-size: 140%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\" id=\"{{ tick.hour }}\"> {{ tick.hour }} </div> </div> <div class=\"clockpicker-dial clockpicker-minutes\" #minutesPlate [ngClass]=\"{'clockpicker-dial-out': showHours}\" [ngStyle]=\"{'visibility': showHours ? 'hidden' : 'visible'}\"> <div *ngFor=\"let tick of minutesTicks\" class=\"clockpicker-tick\" style=\"font-size: 120%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\"> {{ tick.min }} </div> </div> </div> <div class=\"clockpicker-am-pm-block\" *ngIf=\"twelvehour\"> <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button am-button\" [ngClass]=\"{'active': selectedHours.ampm=='AM'}\" (click)=\"setAmPm('AM')\"> AM </button> <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button pm-button\" [ngClass]=\"{'active': selectedHours.ampm=='PM'}\" (click)=\"setAmPm('PM')\"> PM </button> </div> </div> <div class=\"picker__footer\"> <button type=\"button\" *ngIf=\"buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\"> {{buttonLabel}} </button> <button type=\"button\" *ngIf=\"!buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\"> Done </button> </div> </div> </div> </div> </div> </div> </div>",
                providers: [TIME_PIRCKER_VALUE_ACCESSOT]
            },] },
];
/** @nocollapse */
ClockPickerComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
ClockPickerComponent.propDecorators = {
    "hoursPlate": [{ type: ViewChild, args: ['hoursPlate',] },],
    "minutesPlate": [{ type: ViewChild, args: ['minutesPlate',] },],
    "plate": [{ type: ViewChild, args: ['plate',] },],
    "svg": [{ type: ViewChild, args: ['svg',] },],
    "g": [{ type: ViewChild, args: ['g',] },],
    "hand": [{ type: ViewChild, args: ['hand',] },],
    "fg": [{ type: ViewChild, args: ['fg',] },],
    "bg": [{ type: ViewChild, args: ['bg',] },],
    "bearing": [{ type: ViewChild, args: ['bearing',] },],
    "twelvehour": [{ type: Input, args: ['twelvehour',] },],
    "darktheme": [{ type: Input, args: ['darktheme',] },],
    "placeholder": [{ type: Input, args: ['placeholder',] },],
    "label": [{ type: Input, args: ['label',] },],
    "duration": [{ type: Input, args: ['duration',] },],
    "showClock": [{ type: Input, args: ['showClock',] },],
    "buttonLabel": [{ type: Input, args: ['buttonlabel',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TimePickerModule {
}
TimePickerModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule, FormsModule],
                declarations: [ClockPickerComponent],
                exports: [ClockPickerComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
const CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonCheckboxDirective),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
class ButtonCheckboxDirective {
    constructor() {
        /**
         * Truthy value, will be set to ngModel
         */
        this.btnCheckboxTrue = true;
        /**
         * Falsy value, will be set to ngModel
         */
        this.btnCheckboxFalse = false;
        this.state = false;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.toggle(this.trueValue === this.value);
    }
    /**
     * @return {?}
     */
    get trueValue() {
        return typeof this.btnCheckboxTrue !== 'undefined'
            ? this.btnCheckboxTrue
            : true;
    }
    /**
     * @return {?}
     */
    get falseValue() {
        return typeof this.btnCheckboxFalse !== 'undefined'
            ? this.btnCheckboxFalse
            : false;
    }
    /**
     * @param {?} state
     * @return {?}
     */
    toggle(state$$1) {
        this.state = state$$1;
        this.value = this.state ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    }
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.isDisabled = isDisabled;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonCheckboxDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonCheckboxDirective.propDecorators = {
    "btnCheckboxTrue": [{ type: Input },],
    "btnCheckboxFalse": [{ type: Input },],
    "state": [{ type: HostBinding, args: ['class.active',] },],
    "onClick": [{ type: HostListener, args: ['click',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => ButtonRadioDirective),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
class ButtonRadioDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
        this.el = el;
    }
    /**
     * @return {?}
     */
    get isActive() {
        return this.mdbRadio === this.value;
    }
    /**
     * @param {?=} event
     * @return {?}
     */
    onClick(event) {
        try {
            this.el.nativeElement.parentElement.childNodes.forEach(element => {
                this.radioElementsArray.push(element);
            });
            this.radioElementsArray.forEach(element => {
                this.renderer.removeClass(element, 'active');
            });
            this.renderer.addClass(event.target, 'active');
        }
        catch (/** @type {?} */ error) {
        }
        if (this.el.nativeElement.attributes.disabled) {
            return;
        }
        if (this.uncheckable && this.mdbRadio === this.value) {
            this.value = undefined;
        }
        else {
            this.value = this.mdbRadio;
        }
        this.onTouched();
        this.onChange(this.value);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.onTouched();
    }
    /**
     * @param {?} value
     * @return {?}
     */
    writeValue(value) {
        this.value = value;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this.onChange = fn;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this.onTouched = fn;
    }
}
ButtonRadioDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonRadioDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
ButtonRadioDirective.propDecorators = {
    "mdbRadio": [{ type: Input },],
    "uncheckable": [{ type: Input },],
    "value": [{ type: Input },],
    "isActive": [{ type: HostBinding, args: ['class.active',] },],
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ButtonsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ButtonsModule, providers: [] };
    }
}
ButtonsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ButtonCheckboxDirective, ButtonRadioDirective],
                exports: [ButtonCheckboxDirective, ButtonRadioDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/*tslint:disable */
/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
/**
 * JS version of browser APIs. This library can only run in the browser.
 */
var win = typeof window !== 'undefined' && window || /** @type {?} */ ({});
var document$1 = win.document;
var location = win.location;
var gc = win['gc'] ? () => win['gc']() : () => null;
var performance = win['performance'] ? win['performance'] : null;
const Event = win['Event'];
const MouseEvent = win['MouseEvent'];
const KeyboardEvent = win['KeyboardEvent'];
const EventTarget = win['EventTarget'];
const History = win['History'];
const Location = win['Location'];
const EventListener = win['EventListener'];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function isBs3() {
    return win.__theme === 'bs4';
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class LinkedList {
    constructor() {
        this.length = 0;
        this.asArray = [];
    }
    /**
     * @param {?} position
     * @return {?}
     */
    getNode(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    }
    /**
     * @return {?}
     */
    createInternalArrayRepresentation() {
        const /** @type {?} */ outArray = [];
        let /** @type {?} */ current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    }
    /**
     * @param {?} position
     * @return {?}
     */
    get(position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    }
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    add(value, position = this.length) {
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        const /** @type {?} */ node = {
            value: /** @type {?} */ (value),
            next: /** @type {?} */ (undefined),
            previous: /** @type {?} */ (undefined)
        };
        if (this.length === 0) {
            this.head = node;
            this.tail = node;
            this.current = node;
        }
        else {
            if (position === 0) {
                // first node
                node.next = this.head;
                this.head.previous = node;
                this.head = node;
            }
            else if (position === this.length) {
                // last node
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            }
            else {
                // node in middle
                const /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                const /** @type {?} */ currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?=} position
     * @return {?}
     */
    remove(position = 0) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        if (position === 0) {
            // first node
            this.head = this.head.next;
            if (this.head) {
                // there is no second node
                this.head.previous = undefined;
            }
            else {
                // there is no second node
                this.tail = undefined;
            }
        }
        else if (position === this.length - 1) {
            // last node
            this.tail = this.tail.previous;
            this.tail.next = undefined;
        }
        else {
            // middle node
            const /** @type {?} */ removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    }
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    set(position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        const /** @type {?} */ node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    }
    /**
     * @return {?}
     */
    toArray() {
        return this.asArray;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    findAll(fn) {
        let /** @type {?} */ current = this.head;
        const /** @type {?} */ result = [];
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index, value: current.value });
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    push(...args) {
        args.forEach((arg) => {
            this.add(arg);
        });
        return this.length;
    }
    /**
     * @return {?}
     */
    pop() {
        if (this.length === 0) {
            return undefined;
        }
        const /** @type {?} */ last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    }
    /**
     * @param {...?} args
     * @return {?}
     */
    unshift(...args) {
        args.reverse();
        args.forEach((arg) => {
            this.add(arg, 0);
        });
        return this.length;
    }
    /**
     * @return {?}
     */
    shift() {
        if (this.length === 0) {
            return undefined;
        }
        const /** @type {?} */ lastItem = this.head.value;
        this.remove();
        return lastItem;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    forEach(fn) {
        let /** @type {?} */ current = this.head;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    }
    /**
     * @param {?} value
     * @return {?}
     */
    indexOf(value) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ position = 0;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    some(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    every(fn) {
        let /** @type {?} */ current = this.head;
        let /** @type {?} */ result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @return {?}
     */
    toString() {
        return '[Linked List]';
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    find(fn) {
        let /** @type {?} */ current = this.head;
        // let result: T;
        let /** @type {?} */ result;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    findIndex(fn) {
        let /** @type {?} */ current = this.head;
        // let result: number;
        let /** @type {?} */ result;
        for (let /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CarouselConfig {
    constructor() {
        /**
         * Default interval of auto changing of slides
         */
        this.interval = 5000;
        /**
         * Is loop of auto changing of slides can be paused
         */
        this.noPause = false;
        /**
         * Is slides can wrap from the last to the first slide
         */
        this.noWrap = false;
        this.keyboard = false;
    }
}
CarouselConfig.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
const Direction = { UNKNOWN: 0, NEXT: 1, PREV: 2, };
Direction[Direction.UNKNOWN] = "UNKNOWN";
Direction[Direction.NEXT] = "NEXT";
Direction[Direction.PREV] = "PREV";
/**
 * Base element to create carousel
 */
class CarouselComponent {
    /**
     * @param {?} config
     * @param {?} el
     */
    constructor(config, el) {
        this.SWIPE_ACTION = { LEFT: 'swipeleft', RIGHT: 'swiperight' };
        this._slides = new LinkedList();
        this.destroyed = false;
        // protected el: ElementRef = null;
        this.el = null;
        this.animationEnd = true;
        this.isControls = true;
        this.class = '';
        this.type = '';
        this.animation = '';
        /**
         * Will be emitted when active slide has been changed. Part of two-way-bindable [(activeSlide)] property
         */
        this.activeSlideChange = new EventEmitter(false);
        Object.assign(this, config);
        this.el = el;
    }
    /**
     * @return {?}
     */
    get slides() {
        return this._slides.toArray();
    }
    /**
     * Index of currently displayed slide(started for 0)
     * @param {?} index
     * @return {?}
     */
    set activeSlide(index) {
        if (this._slides.length && index !== this._currentActiveSlide) {
            this._select(index);
        }
    }
    /**
     * @return {?}
     */
    get activeSlide() {
        return this._currentActiveSlide;
    }
    /**
     * @return {?}
     */
    checkNavigation() {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    }
    /**
     * @return {?}
     */
    checkDots() {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    }
    /**
     * @param {?} slide
     * @return {?}
     */
    getImg(slide) {
        return slide.el.nativeElement.querySelector('img').src;
    }
    /**
     * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
     * @return {?}
     */
    get interval() {
        return this._interval;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set interval(value) {
        this._interval = value;
        this.restartTimer();
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.destroyed = true;
    }
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    addSlide(slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    }
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param {?} slide
     * @return {?}
     */
    removeSlide(slide) {
        const /** @type {?} */ remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            //  let nextSlideIndex: number = void 0;
            let /** @type {?} */ nextSlideIndex = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(() => {
                this._select(nextSlideIndex);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            const /** @type {?} */ currentSlideIndex = this.getCurrentSlideIndex();
            setTimeout(() => {
                // after removing, need to actualize index of current active slide
                this._currentActiveSlide = currentSlideIndex;
                this.activeSlideChange.emit(this._currentActiveSlide);
            }, 0);
        }
    }
    /**
     * @param {?=} action
     * @return {?}
     */
    swipe(action = this.SWIPE_ACTION.RIGHT) {
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
        }
    }
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    nextSlide(force = false) {
        if (this.animation === 'slide') {
            this.pause();
            const /** @type {?} */ direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
        }
    }
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    previousSlide(force = false) {
        if (this.animation === 'slide') {
            this.pause();
            const /** @type {?} */ direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
        }
    }
    /**
     * @param {?} goToIndex
     * @return {?}
     */
    fadeAnimation(goToIndex) {
        //const currentSlide = this._slides.get(this._currentActiveSlide);
        const /** @type {?} */ goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            setTimeout(() => {
                goToSlide.directionNext = false;
                this.animationEnd = true;
                this.activeSlide = goToIndex;
                this.play();
            }, 100);
        }
    }
    /**
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    slideAnimation(goToIndex, direction) {
        const /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        const /** @type {?} */ goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                setTimeout(() => {
                    goToSlide.directionLeft = true;
                    currentSlide.directionLeft = true;
                }, 100);
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                setTimeout(() => {
                    goToSlide.directionRight = true;
                    currentSlide.directionRight = true;
                }, 100);
            }
            setTimeout(() => {
                goToSlide.directionLeft = false;
                goToSlide.directionNext = false;
                currentSlide.directionLeft = false;
                currentSlide.directionNext = false;
                goToSlide.directionRight = false;
                goToSlide.directionPrev = false;
                currentSlide.directionRight = false;
                currentSlide.directionPrev = false;
                this.animationEnd = true;
                this.activeSlide = goToIndex;
                let /** @type {?} */ directionName;
                if (direction === Direction.NEXT) {
                    directionName = 'Next';
                }
                else if (direction === Direction.PREV) {
                    directionName = 'Prev';
                }
                this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': this.activeSlide });
                this.play();
            }, 700);
        }
    }
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    selectSlide(index) {
        this.pause();
        if (this.animation === 'slide') {
            if (this.activeSlide < index) {
                this.slideAnimation(index, Direction.NEXT);
            }
            else if (this.activeSlide > index) {
                this.slideAnimation(index, Direction.PREV);
            }
        }
        else if (this.animation === 'fade') {
            if (index !== this.activeSlide) {
                this.fadeAnimation(index);
            }
        }
        this.play();
    }
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    play() {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    }
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    pause() {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    }
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    getCurrentSlideIndex() {
        return this._slides.findIndex((slide) => slide.active);
    }
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    isLast(index) {
        return index + 1 >= this._slides.length;
    }
    /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    findNextSlideIndex(direction, force) {
        let /** @type {?} */ nextSlideIndex = 0;
        if (!force && (this.isLast(this.activeSlide) && direction !== Direction.PREV && this.noWrap)) {
            return void 0;
        }
        switch (direction) {
            case Direction.NEXT:
                // if this is last slide, not force, looping is disabled and need to going forward - select current slide, as a next
                nextSlideIndex = (!this.isLast(this._currentActiveSlide)) ? this._currentActiveSlide + 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : 0;
                break;
            case Direction.PREV:
                // if this is first slide, not force, looping is disabled and need to going backward - select current slide, as a next
                nextSlideIndex = (this._currentActiveSlide > 0) ? this._currentActiveSlide - 1 :
                    (!force && this.noWrap) ? this._currentActiveSlide : this._slides.length - 1;
                break;
            default:
                throw new Error('Unknown direction');
        }
        return nextSlideIndex;
    }
    /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    _select(index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        const /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        const /** @type {?} */ nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            // this.activeSlideChange.emit(index);
        }
    }
    /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    restartTimer() {
        this.resetTimer();
        const /** @type {?} */ interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(() => {
                const /** @type {?} */ nInterval = +this.interval;
                if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
                    this.nextSlide();
                }
                else {
                    this.pause();
                }
            }, interval);
        }
    }
    /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    resetTimer() {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    }
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    hasClass(el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    }
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    classAdd(el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    }
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    removeClass(el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            const /** @type {?} */ reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    keyboardControl(event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    }
    /**
     * @return {?}
     */
    focus() {
        this.el.nativeElement.focus();
    }
}
CarouselComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-carousel',
                template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\"> <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\"> <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fa fa-chevron-left\"></i></a> <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fa fa-chevron-right\"></i></a> </div> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"> <img class=\"img-fluid\" src=\"{{ getImg(slidez) }}\"> </li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span  class=\"sr-only\">Previous</span> </a> <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div>",
            },] },
];
/** @nocollapse */
CarouselComponent.ctorParameters = () => [
    { type: CarouselConfig, },
    { type: ElementRef, },
];
CarouselComponent.propDecorators = {
    "noWrap": [{ type: Input },],
    "noPause": [{ type: Input },],
    "isControls": [{ type: Input, args: ['isControls',] },],
    "keyboard": [{ type: Input },],
    "class": [{ type: Input, args: ['class',] },],
    "type": [{ type: Input, args: ['type',] },],
    "animation": [{ type: Input, args: ['animation',] },],
    "activeSlideChange": [{ type: Output },],
    "activeSlide": [{ type: Input },],
    "interval": [{ type: Input },],
    "play": [{ type: HostListener, args: ['mouseleave',] },],
    "pause": [{ type: HostListener, args: ['mouseenter',] },],
    "keyboardControl": [{ type: HostListener, args: ['keyup', ['$event'],] },],
    "focus": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class SlideComponent {
    /**
     * @param {?} carousel
     * @param {?} el
     */
    constructor(carousel, el) {
        this.animated = false;
        this.directionNext = false;
        this.directionLeft = false;
        this.directionPrev = false;
        this.directionRight = false;
        this.el = null;
        this.carousel = carousel;
        this.el = el;
    }
    /**
     * Fires changes in container collection after adding a new slide instance
     * @return {?}
     */
    ngOnInit() {
        this.carousel.addSlide(this);
    }
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    ngOnDestroy() {
        this.carousel.removeSlide(this);
    }
}
SlideComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-slide',
                template: `
  <ng-content></ng-content>
  `
            },] },
];
/** @nocollapse */
SlideComponent.ctorParameters = () => [
    { type: CarouselComponent, },
    { type: ElementRef, },
];
SlideComponent.propDecorators = {
    "active": [{ type: HostBinding, args: ['class.active',] }, { type: Input },],
    "animated": [{ type: HostBinding, args: ['class.animated',] },],
    "directionNext": [{ type: HostBinding, args: ['class.carousel-item-next',] },],
    "directionLeft": [{ type: HostBinding, args: ['class.carousel-item-left',] },],
    "directionPrev": [{ type: HostBinding, args: ['class.carousel-item-prev',] },],
    "directionRight": [{ type: HostBinding, args: ['class.carousel-item-right',] },],
    "carousel": [{ type: HostBinding, args: ['class.carousel-item',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CarouselModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CarouselModule, providers: [] };
    }
}
CarouselModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BaseChartDirective {
    /**
     * @param {?} element
     * @param {?} platformId
     */
    constructor(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new EventEmitter();
        this.chartHover = new EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        if (this.initFlag) {
            // Check if the changes are in the data or datasets
            if (changes.hasOwnProperty('data') || changes.hasOwnProperty('datasets')) {
                if (changes['data']) {
                    this.updateChartData(changes['data'].currentValue);
                }
                else {
                    this.updateChartData(changes['datasets'].currentValue);
                }
                this.chart.update();
            }
            else {
                // otherwise rebuild the chart
                this.refresh();
            }
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    }
    /**
     * @param {?} ctx
     * @return {?}
     */
    getChartBuilder(ctx /*, data:Array<any>, options:any*/) {
        const /** @type {?} */ datasets = this.getDatasets();
        const /** @type {?} */ options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = (event, active) => {
                if (active && active.length) {
                    this.chartHover.emit({ event, active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = (event, active) => {
                this.chartClick.emit({ event, active });
            };
        }
        const /** @type {?} */ opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    }
    /**
     * @param {?} newDataValues
     * @return {?}
     */
    updateChartData(newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach((dataset, i) => {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    }
    /**
     * @return {?}
     */
    getDatasets() {
        let /** @type {?} */ datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = (/** @type {?} */ (this.data)).map((data, index) => {
                    return { data, label: this.labels[index] || `Label ${index}` };
                });
            }
            else {
                datasets = [{ data: this.data, label: `Label 0` }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map((elm, index) => {
                const /** @type {?} */ newElm = Object.assign({}, elm);
                if (this.colors && this.colors.length) {
                    Object.assign(newElm, this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error(`ng-charts configuration error,
      data or datasets field are required to render char ${this.chartType}`);
        }
        return datasets;
    }
    /**
     * @return {?}
     */
    refresh() {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    }
}
BaseChartDirective.defaultColors = [
    [255, 99, 132],
    [54, 162, 235],
    [255, 206, 86],
    [231, 233, 237],
    [75, 192, 192],
    [151, 187, 205],
    [220, 220, 220],
    [247, 70, 74],
    [70, 191, 189],
    [253, 180, 92],
    [148, 159, 177],
    [77, 83, 96]
];
BaseChartDirective.decorators = [
    { type: Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] },
];
/** @nocollapse */
BaseChartDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
BaseChartDirective.propDecorators = {
    "data": [{ type: Input },],
    "datasets": [{ type: Input },],
    "labels": [{ type: Input },],
    "options": [{ type: Input },],
    "chartType": [{ type: Input },],
    "colors": [{ type: Input },],
    "legend": [{ type: Input },],
    "chartClick": [{ type: Output },],
    "chartHover": [{ type: Output },],
};
/**
 * @param {?} colour
 * @param {?} alpha
 * @return {?}
 */
function rgba(colour, alpha) {
    return 'rgba(' + colour.concat(alpha).join(',') + ')';
}
/**
 * @param {?} min
 * @param {?} max
 * @return {?}
 */
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatLineColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.4),
        borderColor: rgba(colors, 1),
        pointBackgroundColor: rgba(colors, 1),
        pointBorderColor: '#fff',
        pointHoverBackgroundColor: '#fff',
        pointHoverBorderColor: rgba(colors, 0.8)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatBarColor(colors) {
    return {
        backgroundColor: rgba(colors, 0.6),
        borderColor: rgba(colors, 1),
        hoverBackgroundColor: rgba(colors, 0.8),
        hoverBorderColor: rgba(colors, 1)
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPieColors(colors) {
    return {
        backgroundColor: colors.map((color) => rgba(color, 0.6)),
        borderColor: colors.map(() => '#fff'),
        pointBackgroundColor: colors.map((color) => rgba(color, 1)),
        pointBorderColor: colors.map(() => '#fff'),
        pointHoverBackgroundColor: colors.map((color) => rgba(color, 1)),
        pointHoverBorderColor: colors.map((color) => rgba(color, 1))
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map((color) => rgba(color, 0.6)),
        borderColor: colors.map((color) => rgba(color, 1)),
        hoverBackgroundColor: colors.map((color) => rgba(color, 0.8)),
        hoverBorderColor: colors.map((color) => rgba(color, 1))
    };
}
/**
 * @return {?}
 */
function getRandomColor() {
    return [getRandomInt(0, 255), getRandomInt(0, 255), getRandomInt(0, 255)];
}
/**
 * Generate colors for line|bar charts
 * @param {?} index
 * @return {?}
 */
function generateColor(index) {
    return BaseChartDirective.defaultColors[index] || getRandomColor();
}
/**
 * Generate colors for pie|doughnut charts
 * @param {?} count
 * @return {?}
 */
function generateColors(count) {
    const /** @type {?} */ colorsArr = new Array(count);
    for (let /** @type {?} */ i = 0; i < count; i++) {
        colorsArr[i] = BaseChartDirective.defaultColors[i] || getRandomColor();
    }
    return colorsArr;
}
/**
 * Generate colors by chart type
 * @param {?} chartType
 * @param {?} index
 * @param {?} count
 * @return {?}
 */
function getColors(chartType, index, count) {
    if (chartType === 'pie' || chartType === 'doughnut') {
        return formatPieColors(generateColors(count));
    }
    if (chartType === 'polarArea') {
        return formatPolarAreaColors(generateColors(count));
    }
    if (chartType === 'line' || chartType === 'radar') {
        return formatLineColor(generateColor(index));
    }
    if (chartType === 'bar' || chartType === 'horizontalBar') {
        return formatBarColor(generateColor(index));
    }
    return generateColor(index);
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ChartsModule {
}
ChartsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BaseChartDirective
                ],
                exports: [
                    BaseChartDirective
                ],
                imports: []
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CollapseDirective {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    constructor(_el, _renderer) {
        this.showBsCollapse = new EventEmitter();
        this.shownBsCollapse = new EventEmitter();
        this.hideBsCollapse = new EventEmitter();
        this.hiddenBsCollapse = new EventEmitter();
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new EventEmitter();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new EventEmitter();
        this.isExpanded = true;
        this.isCollapsed = false;
        this.isCollapse = true;
        this.isCollapsing = false;
        this.collapsing = false;
        this.animationTime = 500;
        this._el = _el;
        this._renderer = _renderer;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._el.nativeElement.classList.add('show');
        this._el.nativeElement.style.transition = this.animationTime + 'ms ease';
        if (!this.collapse) {
            this._el.nativeElement.classList.remove('show');
            this.hide();
        }
        else {
            this.show();
        }
        this.isExpanded = this.collapse;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.maxHeight = this._el.nativeElement.scrollHeight;
    }
    /**
     * @return {?}
     */
    resize() {
        const /** @type {?} */ container = this._el.nativeElement;
        this.maxHeight = this._el.nativeElement.scrollHeight;
        this._renderer.setStyle(container, 'height', this.maxHeight + 'px');
    }
    /**
     * allows to manually toggle content visibility
     * @param {?=} event
     * @return {?}
     */
    toggle(event) {
        if (!this.collapsing) {
            if (this.isExpanded) {
                this.hide();
            }
            else {
                this.show();
            }
        }
        try {
            if (event.type === 'click') {
                this.maxHeight = event.target.parentElement.nextElementSibling.scrollHeight;
            }
            else if (event.type === 'mouseenter' || event.type === 'mouseleave') {
                this.maxHeight = event.target.nextElementSibling.scrollHeight;
            }
        }
        catch (/** @type {?} */ error) { }
    }
    /**
     * allows to manually hide content
     * @return {?}
     */
    hide() {
        this.collapsing = true;
        this.hideBsCollapse.emit();
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        const /** @type {?} */ container = this._el.nativeElement;
        container.classList.remove('collapse');
        container.classList.remove('show');
        container.classList.add('collapsing');
        this._renderer.setStyle(container, 'height', '0px');
        setTimeout(() => {
            container.classList.remove('collapsing');
            container.classList.add('collapse');
            this.hiddenBsCollapse.emit();
            this.collapsing = false;
        }, this.animationTime);
        this.collapsed.emit(this);
    }
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    show() {
        if (!this.isExpanded) {
            this.collapsing = true;
            this.showBsCollapse.emit();
            this.isCollapse = false;
            this.isCollapsing = true;
            this.isExpanded = true;
            this.isCollapsed = false;
            const /** @type {?} */ container = this._el.nativeElement;
            container.classList.remove('collapse');
            container.classList.add('collapsing');
            setTimeout(() => {
                this._renderer.setStyle(container, 'height', this.maxHeight + 'px');
            }, 10);
            setTimeout(() => {
                container.classList.remove('collapsing');
                container.classList.add('collapse');
                container.classList.add('show');
                this.shownBsCollapse.emit();
                this.collapsing = false;
            }, this.animationTime - (this.animationTime * 0.5));
            this.expanded.emit(this);
        }
    }
}
CollapseDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbCollapse]',
                exportAs: 'bs-collapse',
            },] },
];
/** @nocollapse */
CollapseDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];
CollapseDirective.propDecorators = {
    "showBsCollapse": [{ type: Output, args: ['showBsCollapse',] },],
    "shownBsCollapse": [{ type: Output, args: ['shownBsCollapse',] },],
    "hideBsCollapse": [{ type: Output, args: ['hideBsCollapse',] },],
    "hiddenBsCollapse": [{ type: Output, args: ['hiddenBsCollapse',] },],
    "collapsed": [{ type: Output },],
    "expanded": [{ type: Output },],
    "collapse": [{ type: Input },],
    "animationTime": [{ type: Input },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class CollapseModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: CollapseModule, providers: [] };
    }
}
CollapseModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDropdownState {
    constructor() {
        this.direction = 'down';
        this.isOpenChange = new EventEmitter();
        this.isDisabledChange = new EventEmitter();
        this.toggleClick = new EventEmitter();
        this.dropdownMenu = new Promise((resolve) => {
            this.resolveDropdownMenu = resolve;
        });
    }
}
BsDropdownState.decorators = [
    { type: Injectable },
];
/** @nocollapse */
BsDropdownState.ctorParameters = () => [];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDropdownContainerComponent {
    /**
     * @param {?} _state
     */
    constructor(_state) {
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe((value) => {
            this.isOpen = value;
        });
    }
    /**
     * @return {?}
     */
    get direction() {
        return this._state.direction;
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._subscription.unsubscribe();
    }
}
BsDropdownContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-dropdown-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
  <div [class.dropup]="direction === 'up'"
  [class.dropdown]="direction === 'down'"
  [class.show]="isOpen"
  [class.open]="isOpen">
    <ng-content></ng-content>
  </div>
  `
            },] },
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = () => [
    { type: BsDropdownState, },
];
BsDropdownContainerComponent.propDecorators = {
    "display": [{ type: HostBinding, args: ['style.display',] },],
    "position": [{ type: HostBinding, args: ['style.position',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDropdownMenuDirective {
    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    constructor(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
}
BsDropdownMenuDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] },
];
/** @nocollapse */
BsDropdownMenuDirective.ctorParameters = () => [
    { type: BsDropdownState, },
    { type: ViewContainerRef, },
    { type: TemplateRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDropdownToggleDirective {
    /**
     * @param {?} _state
     * @param {?} _element
     */
    constructor(_state, _element) {
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe((value) => this.isOpen = value));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe((value) => this.isDisabled = value || null));
    }
    /**
     * @return {?}
     */
    onClick() {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onDocumentClick(event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    }
    /**
     * @return {?}
     */
    onEsc() {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        for (const /** @type {?} */ sub of this._subscriptions) {
            sub.unsubscribe();
        }
    }
}
BsDropdownToggleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle'
            },] },
];
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = () => [
    { type: BsDropdownState, },
    { type: ElementRef, },
];
BsDropdownToggleDirective.propDecorators = {
    "ariaHaspopup": [{ type: HostBinding, args: ['attr.aria-haspopup',] },],
    "isDisabled": [{ type: HostBinding, args: ['attr.disabled',] },],
    "isOpen": [{ type: HostBinding, args: ['attr.aria-expanded',] },],
    "onClick": [{ type: HostListener, args: ['click',] },],
    "onDocumentClick": [{ type: HostListener, args: ['document:click', ['$event'],] },],
    "onEsc": [{ type: HostListener, args: ['keyup.esc',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default dropdown configuration
 */
class BsDropdownConfig {
    constructor() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
    }
}
BsDropdownConfig.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class Trigger {
    /**
     * @param {?} open
     * @param {?=} close
     */
    constructor(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    isManual() { return this.open === 'manual' || this.close === 'manual'; }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases = DEFAULT_ALIASES) {
    const /** @type {?} */ trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    const /** @type {?} */ parsedTriggers = trimmedTriggers.split(/\s+/)
        .map((trigger$$1) => trigger$$1.split(':'))
        .map((triggerPair) => {
        const /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    const /** @type {?} */ manualTriggers = parsedTriggers
        .filter((triggerPair) => triggerPair.isManual());
    if (manualTriggers.length > 1) {
        throw new Error('Triggers parse error: only one manual trigger is allowed');
    }
    if (manualTriggers.length === 1 && parsedTriggers.length > 1) {
        throw new Error('Triggers parse error: manual trigger can\'t be mixed with other triggers');
    }
    return parsedTriggers;
}
/**
 * @param {?} renderer
 * @param {?} target
 * @param {?} triggers
 * @param {?} showFn
 * @param {?} hideFn
 * @param {?} toggleFn
 * @return {?}
 */
function listenToTriggers(renderer, target, triggers, showFn, hideFn, toggleFn) {
    const /** @type {?} */ parsedTriggers = parseTriggers(triggers);
    const /** @type {?} */ listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach((trigger$$1) => {
        if (trigger$$1.open === trigger$$1.close) {
            listeners.push(renderer.listen(target, trigger$$1.open, () => {
                toggleFn();
            }));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger$$1.open, () => {
            showFn();
        }), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger$$1.close, () => {
            hideFn();
        }));
        // renderer.listen(target, trigger.close, hideFn));
    });
    return () => { listeners.forEach((unsubscribeFn) => unsubscribeFn()); };
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class ContentRef {
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    constructor(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

/**
 * @template T
 */
class ComponentLoader {
    /**
     * Do not use this directly, it should be instanced via
     * `ComponentLoadFactory.attach`
     * \@internal
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} _injector
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _applicationRef
     * @param {?} _posService
     */
    constructor(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new EventEmitter();
        this.onShown = new EventEmitter();
        this.onBeforeHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this._providers = [];
    }
    /**
     * @return {?}
     */
    get isShown() {
        return !!this._componentRef;
    }
    /**
     * @param {?} compType
     * @return {?}
     */
    attach(compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    }
    /**
     * @param {?=} container
     * @return {?}
     */
    to(container) {
        this.container = container || this.container;
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    position(opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = /** @type {?} */ (opts.target) || this._elementRef;
        return this;
    }
    /**
     * @param {?} provider
     * @return {?}
     */
    provide(provider) {
        this._providers.push(provider);
        return this;
    }
    /**
     * @param {?=} opts
     * @return {?}
     */
    show(opts = {}) {
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            const /** @type {?} */ injector = ReflectiveInjector.resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof ElementRef) {
                this.container.nativeElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (this.container === 'body' && typeof document !== 'undefined') {
                //  document.querySelector(this.container as string)
                document.querySelector(/** @type {?} */ (this.container))
                    .appendChild(this._componentRef.location.nativeElement);
            }
            if (!this.container && this._elementRef && this._elementRef.nativeElement.parentElement) {
                this._elementRef.nativeElement.parentElement
                    .appendChild(this._componentRef.location.nativeElement);
            }
            // we need to manually invoke change detection since events registered
            // via
            // Renderer::listen() are not picked up by change detection with the
            // OnPush strategy
            if (this._contentRef.componentRef) {
                this._innerComponent = this._contentRef.componentRef.instance;
                this._contentRef.componentRef.changeDetectorRef.markForCheck();
                this._contentRef.componentRef.changeDetectorRef.detectChanges();
            }
            this._componentRef.changeDetectorRef.markForCheck();
            this._componentRef.changeDetectorRef.detectChanges();
            this.onShown.emit(this._componentRef.instance);
        }
        return this._componentRef;
    }
    /**
     * @return {?}
     */
    hide() {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        const /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
        componentEl.parentNode.removeChild(componentEl);
        if (this._contentRef.componentRef) {
            this._contentRef.componentRef.destroy();
        }
        this._componentRef.destroy();
        if (this._viewContainerRef && this._contentRef.viewRef) {
            this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        }
        // this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._componentRef.hostView));
        //
        // if (this._contentRef.viewRef && this._viewContainerRef.indexOf(this._contentRef.viewRef) !== -1) {
        //   this._viewContainerRef.remove(this._viewContainerRef.indexOf(this._contentRef.viewRef));
        // }
        this._contentRef = null;
        this._componentRef = null;
        this.onHidden.emit();
        return this;
    }
    /**
     * @return {?}
     */
    toggle() {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    }
    /**
     * @return {?}
     */
    dispose() {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    }
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    listen(listenOpts) {
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (() => this.show());
        listenOpts.hide = listenOpts.hide || (() => this.hide());
        listenOpts.toggle = listenOpts.toggle || (() => this.isShown
            ? listenOpts.hide()
            : listenOpts.show());
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    }
    /**
     * @return {?}
     */
    getInnerComponent() {
        return this._innerComponent;
    }
    /**
     * @return {?}
     */
    _subscribePositioning() {
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(() => {
            if (!this._componentRef) {
                return;
            }
            this._posService.position({
                element: this._componentRef.location,
                target: this._elementRef,
                attachment: this.attachment,
                appendToBody: this.container === 'body'
            });
        });
    }
    /**
     * @return {?}
     */
    _unsubscribePositioning() {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    }
    /**
     * @param {?} content
     * @return {?}
     */
    _getContentRef(content) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof TemplateRef) {
            if (this._viewContainerRef) {
                const /** @type {?} */ viewRef = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef.rootNodes], viewRef);
            }
            const /** @type {?} */ viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            const /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            const /** @type {?} */ modalContentInjector = ReflectiveInjector.resolveAndCreate([...this._providers, content], this._injector);
            const /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText(`${content}`)]]);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
class Positioning {
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    position(element, round = true) {
        let /** @type {?} */ elPosition;
        let /** @type {?} */ parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            const /** @type {?} */ bcRect = element.getBoundingClientRect();
            elPosition = {
                width: bcRect.width,
                height: bcRect.height,
                top: bcRect.top,
                bottom: bcRect.bottom,
                left: bcRect.left,
                right: bcRect.right
            };
        }
        else {
            const /** @type {?} */ offsetParentEl = this.offsetParent(element);
            elPosition = this.offset(element, false);
            if (offsetParentEl !== document.documentElement) {
                parentOffset = this.offset(offsetParentEl, false);
            }
            parentOffset.top += offsetParentEl.clientTop;
            parentOffset.left += offsetParentEl.clientLeft;
        }
        elPosition.top -= parentOffset.top;
        elPosition.bottom -= parentOffset.top;
        elPosition.left -= parentOffset.left;
        elPosition.right -= parentOffset.left;
        if (round) {
            elPosition.top = Math.round(elPosition.top);
            elPosition.bottom = Math.round(elPosition.bottom);
            elPosition.left = Math.round(elPosition.left);
            elPosition.right = Math.round(elPosition.right);
        }
        return elPosition;
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    offset(element, round = true) {
        const /** @type {?} */ elBcr = element.getBoundingClientRect();
        const /** @type {?} */ viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        let /** @type {?} */ elOffset = {
            height: elBcr.height || element.offsetHeight,
            width: elBcr.width || element.offsetWidth,
            top: elBcr.top + viewportOffset.top,
            bottom: elBcr.bottom + viewportOffset.top,
            left: elBcr.left + viewportOffset.left,
            right: elBcr.right + viewportOffset.left
        };
        if (round) {
            elOffset.height = Math.round(elOffset.height);
            elOffset.width = Math.round(elOffset.width);
            elOffset.top = Math.round(elOffset.top);
            elOffset.bottom = Math.round(elOffset.bottom);
            elOffset.left = Math.round(elOffset.left);
            elOffset.right = Math.round(elOffset.right);
        }
        return elOffset;
    }
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    positionElements(hostElement, targetElement, placement, appendToBody) {
        const /** @type {?} */ hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        const /** @type {?} */ shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        const /** @type {?} */ shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        const /** @type {?} */ targetElBCR = targetElement.getBoundingClientRect();
        const /** @type {?} */ placementPrimary = placement.split(' ')[0] || 'top';
        const /** @type {?} */ placementSecondary = placement.split(' ')[1] || 'center';
        let /** @type {?} */ targetElPosition = {
            height: targetElBCR.height || targetElement.offsetHeight,
            width: targetElBCR.width || targetElement.offsetWidth,
            top: 0,
            bottom: targetElBCR.height || targetElement.offsetHeight,
            left: 0,
            right: targetElBCR.width || targetElement.offsetWidth
        };
        switch (placementPrimary) {
            case 'top':
                targetElPosition.top = hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.bottom += hostElPosition.top - targetElement.offsetHeight;
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'bottom':
                targetElPosition.top = shiftHeight[placementPrimary];
                targetElPosition.bottom += shiftHeight[placementPrimary];
                targetElPosition.left = shiftWidth[placementSecondary];
                targetElPosition.right += shiftWidth[placementSecondary];
                break;
            case 'left':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = hostElPosition.left - targetElement.offsetWidth;
                targetElPosition.right += hostElPosition.left - targetElement.offsetWidth;
                break;
            case 'right':
                targetElPosition.top = shiftHeight[placementSecondary];
                targetElPosition.bottom += shiftHeight[placementSecondary];
                targetElPosition.left = shiftWidth[placementPrimary];
                targetElPosition.right += shiftWidth[placementPrimary];
                break;
        }
        targetElPosition.top = Math.round(targetElPosition.top);
        targetElPosition.bottom = Math.round(targetElPosition.bottom);
        targetElPosition.left = Math.round(targetElPosition.left);
        targetElPosition.right = Math.round(targetElPosition.right);
        return targetElPosition;
    }
    /**
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    getStyle(element, prop) { return (/** @type {?} */ (window.getComputedStyle(element)))[prop]; }
    /**
     * @param {?} element
     * @return {?}
     */
    isStaticPositioned(element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    }
    /**
     * @param {?} element
     * @return {?}
     */
    offsetParent(element) {
        let /** @type {?} */ offsetParentEl = /** @type {?} */ (element.offsetParent) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = /** @type {?} */ (offsetParentEl.offsetParent);
        }
        return offsetParentEl || document.documentElement;
    }
}
const positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    const /** @type {?} */ pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = `${pos.top}px`;
    targetElement.style.left = `${pos.left}px`;
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */

class PositioningService {
    /**
     * @param {?} options
     * @return {?}
     */
    position(options) {
        const { element, target, attachment, appendToBody } = options;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    }
    /**
     * @param {?} element
     * @return {?}
     */
    _getHtmlElement(element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return /** @type {?} */ (document.querySelector(element));
        }
        if (element instanceof ElementRef) {
            return element.nativeElement;
        }
        return /** @type {?} */ (element);
    }
}
PositioningService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ComponentLoaderFactory {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    constructor(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._injector = _injector;
        this._posService = _posService;
        this._applicationRef = _applicationRef;
    }
    /**
     *
     * @template T
     * @param {?} _elementRef
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @return {?}
     */
    createLoader(_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    }
}
ComponentLoaderFactory.decorators = [
    { type: Injectable },
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = () => [
    { type: ComponentFactoryResolver, },
    { type: NgZone, },
    { type: Injector, },
    { type: PositioningService, },
    { type: ApplicationRef, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class BsDropdownDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _config
     * @param {?} _state
     */
    constructor(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
        this._elementRef = _elementRef;
        this._renderer = _renderer;
        this._viewContainerRef = _viewContainerRef;
        this._cis = _cis;
        this._config = _config;
        this._state = _state;
        // todo: move to component loader
        this._isInlineOpen = false;
        this._subscriptions = [];
        this._isInited = false;
        // create dropdown component loader
        this._dropdown = this._cis
            .createLoader(this._elementRef, this._viewContainerRef, this._renderer)
            .provide({ provide: BsDropdownState, useValue: this._state });
        this.onShown = this._dropdown.onShown;
        this.onHidden = this._dropdown.onHidden;
        this.isOpenChange = this._state.isOpenChange;
        // set initial dropdown state from config
        this._state.autoClose = this._config.autoClose;
    }
    /**
     * Indicates that dropdown will be closed on item or document click,
     * and after pressing ESC
     * @param {?} value
     * @return {?}
     */
    set autoClose(value) {
        if (typeof value === 'boolean') {
            this._state.autoClose = value;
        }
    }
    ;
    /**
     * @return {?}
     */
    get autoClose() {
        return this._state.autoClose;
    }
    /**
     * Disables dropdown toggle and hides dropdown menu if opened
     * @param {?} value
     * @return {?}
     */
    set isDisabled(value) {
        this._isDisabled = value;
        this._state.isDisabledChange.emit(value);
        if (value) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    get isDisabled() { return this._isDisabled; }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() {
        if (this._showInline) {
            return this._isInlineOpen;
        }
        return this._dropdown.isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    get isBs4() {
        return !isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // fix: seems there are an issue with `routerLinkActive`
        // which result in duplicated call ngOnInit without call to ngOnDestroy
        // read more: https://github.com/valor-software/ngx-bootstrap/issues/1885
        if (this._isInited) {
            return;
        }
        this._isInited = true;
        this._showInline = !this.container;
        // attach DOM listeners
        this._dropdown.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe((value) => this.toggle(value)));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe((element) => {
            if (element === true) {
                this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then((dropdownMenu) => {
                this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        //const parent = this._elementRef.nativeElement.classList;
        const /** @type {?} */ container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(() => { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then((dropdownMenu) => {
            // check direction in which dropdown should be opened
            const /** @type {?} */ _dropup = this.dropup === true ||
                (typeof this.dropup !== 'undefined' && this.dropup !== false);
            this._state.direction = _dropup ? 'up' : 'down';
            const /** @type {?} */ _placement = this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            this._state.isOpenChange.emit(true);
        });
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (!this.isOpen) {
            return;
        }
        const /** @type {?} */ parent = this._elementRef.nativeElement.classList;
        const /** @type {?} */ container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(() => {
                if (this._showInline) {
                    this._isInlineOpen = false;
                    this.onHidden.emit(true);
                }
                else {
                    this._dropdown.hide();
                }
                this._state.isOpenChange.emit(false);
            }, 560);
        }
        else {
            if (this._showInline) {
                this._isInlineOpen = false;
                this.onHidden.emit(true);
            }
            else {
                this._dropdown.hide();
            }
            this._state.isOpenChange.emit(false);
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    toggle(value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        // clean up subscriptions and destroy dropdown
        for (const /** @type {?} */ sub of this._subscriptions) {
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    }
}
BsDropdownDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState]
            },] },
];
/** @nocollapse */
BsDropdownDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: ComponentLoaderFactory, },
    { type: BsDropdownConfig, },
    { type: BsDropdownState, },
];
BsDropdownDirective.propDecorators = {
    "placement": [{ type: Input },],
    "triggers": [{ type: Input },],
    "container": [{ type: Input },],
    "dropup": [{ type: HostBinding, args: ['class.dropup',] }, { type: Input },],
    "autoClose": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "isOpen": [{ type: HostBinding, args: ['class.open',] }, { type: HostBinding, args: ['class.show',] }, { type: Input },],
    "isOpenChange": [{ type: Output },],
    "onShown": [{ type: Output },],
    "onHidden": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DropdownModule {
    /**
     * @param {?=} config
     * @return {?}
     */
    static forRoot(config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    }
    ;
}
DropdownModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownContainerComponent,
                    BsDropdownDirective
                ],
                exports: [
                    BsDropdownMenuDirective,
                    BsDropdownToggleDirective,
                    BsDropdownDirective
                ],
                entryComponents: [BsDropdownContainerComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MdbInputDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(el, renderer, platformId) {
        this.renderer = renderer;
        this.minLength = '0';
        this.maxLength = '524288';
        this.mdbValidate = true;
        this.focusCheckbox = true;
        this.focusRadio = true;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    onfocus() {
        try {
            this.renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (/** @type {?} */ error) {
        }
    }
    /**
     * @return {?}
     */
    onBlur() {
        try {
            if (this.el.nativeElement.value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (/** @type {?} */ error) {
        }
        try {
            // Validation:
            if (this.mdbValidate) {
                const /** @type {?} */ inputType = this.el.nativeElement.type;
                if (inputType === 'email') {
                    if (this.customRegex) {
                        const /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            /*tslint:disable:max-line-length*/
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        }
                    }
                    else if (!this.customRegex) {
                        /*tslint:disable:max-line-length*/
                        const /** @type {?} */ re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                        }
                    }
                }
                else if (inputType === 'password') {
                    if (this.customRegex) {
                        const /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(re) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(re) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'text') {
                    if (this.customRegex) {
                        const /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(re) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(re) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (this.el.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this.el.nativeElement.value.length >= this.minLength && this.el.nativeElement.value.length <= this.maxLength) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                            // tslint:disable-next-line:max-line-length
                        }
                        else if (!this.el.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this.el.nativeElement.value.length < this.minLength || this.el.nativeElement.value.length > this.maxLength) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'submit') {
                    for (let /** @type {?} */ i = 0; i < this.el.nativeElement.parentElement.length; i++) {
                        if (this.el.nativeElement.parentElement[i].value == null || this.el.nativeElement.parentElement[i].value === '') {
                            this.renderer.addClass(this.el.nativeElement.parentElement[i], 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement.parentElement[i], 'counter-success');
                        }
                        else if (!this.el.nativeElement.parentElement[i].value == null) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'tel') {
                    if (this.customRegex) {
                        const /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= 8 && this.el.nativeElement.value.length <= 20) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length > 20) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        const /** @type {?} */ re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length >= 8 && this.el.nativeElement.value.length <= 20) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length > 20) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
                else if (inputType === 'number') {
                    if (this.customRegex) {
                        const /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length > 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < 1) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                    else if (!this.customRegex) {
                        const /** @type {?} */ re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                        if (this.el.nativeElement.length === 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (re.test(this.el.nativeElement.value) && this.el.nativeElement.value.length > 0) {
                            this.renderer.removeClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.addClass(this.el.nativeElement, 'counter-success');
                        }
                        else if (!re.test(this.el.nativeElement.value) || this.el.nativeElement.value.length < 1) {
                            this.renderer.addClass(this.el.nativeElement, 'counter-danger');
                            this.renderer.removeClass(this.el.nativeElement, 'counter-success');
                        }
                    }
                }
            }
        }
        catch (/** @type {?} */ error) {
        }
    }
    /**
     * @return {?}
     */
    onchange() {
        try {
            this.checkValue();
        }
        catch (/** @type {?} */ error) {
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.mdbValidate) {
            // Inititalise a new <span> wrong/right elements and render it below the host component.
            // this.wrongTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.wrongTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.wrongTextContainer, 'inputVal');
            this.renderer.addClass(this.wrongTextContainer, 'text-danger');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.wrongTextContainer);
            const /** @type {?} */ textWrong = this.el.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
            this.renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            // this.rightTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.rightTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.rightTextContainer, 'inputVal');
            this.renderer.addClass(this.rightTextContainer, 'text-success');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.rightTextContainer);
            const /** @type {?} */ textSuccess = this.el.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
            this.renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        const /** @type {?} */ type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
            this.renderer.removeClass(this.elLabel, 'active');
        }
    }
    /**
     * @return {?}
     */
    initComponent() {
        let /** @type {?} */ inputId;
        let /** @type {?} */ inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (/** @type {?} */ err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (/** @type {?} */ err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    }
    /**
     * @return {?}
     */
    checkValue() {
        let /** @type {?} */ value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked ||
                value === '' && this.el.nativeElement.placeholder ||
                value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            if (this.el.nativeElement.getAttribute('ng-reflect-model') != null) {
                if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model').length !== 0) {
                    this.renderer.addClass(this.elLabel, 'active');
                }
            }
        }
    }
}
MdbInputDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInputDirective]'
            },] },
];
/** @nocollapse */
MdbInputDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
MdbInputDirective.propDecorators = {
    "mdbInputDirective": [{ type: Input, args: ['mdbInputDirective',] },],
    "placeholder": [{ type: Input, args: ['placeholder',] },],
    "minLength": [{ type: Input, args: ['minLength',] },],
    "maxLength": [{ type: Input, args: ['maxLength',] },],
    "customRegex": [{ type: Input, args: ['customRegex',] },],
    "mdbValidate": [{ type: Input, args: ['mdbValidate',] },],
    "focusCheckbox": [{ type: Input, args: ['focusCheckbox',] },],
    "focusRadio": [{ type: Input, args: ['focusRadio',] },],
    "onfocus": [{ type: HostListener, args: ['focus',] },],
    "onBlur": [{ type: HostListener, args: ['blur',] },],
    "onchange": [{ type: HostListener, args: ['change',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class EqualValidatorDirective {
    /**
     * @param {?} validateEqual
     * @param {?} reverse
     */
    constructor(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    /**
     * @return {?}
     */
    get isReverse() {
        if (!this.reverse) {
            return false;
        }
        return this.reverse === 'true' ? true : false;
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        const /** @type {?} */ setToNullValue = null;
        // self value (e.g. retype password)
        const /** @type {?} */ v = c.value;
        // control value (e.g. password)
        // const e: any = c.root.get(this.validateEqual);
        const /** @type {?} */ e = c.root.get(this.validateEqual);
        // value not equal
        if (e && v !== e.value) {
            return { validateEqual: false };
        }
        // value equal and reverse
        if (e && v === e.value && this.isReverse) {
            delete e.errors['validateEqual'];
            if (!Object.keys(e.errors).length) {
                e.setErrors(null);
            }
        }
        // value not equal and reverse
        if (e && v !== e.value && this.isReverse) {
            e.setErrors({
                validateEqual: false
            });
        }
        // return null;
        return setToNullValue;
    }
}
EqualValidatorDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: NG_VALIDATORS, useExisting: forwardRef(() => EqualValidatorDirective), multi: true }
                ]
            },] },
];
/** @nocollapse */
EqualValidatorDirective.ctorParameters = () => [
    { type: undefined, decorators: [{ type: Attribute, args: ['validateEqual',] },] },
    { type: undefined, decorators: [{ type: Attribute, args: ['reverse',] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InputsModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: InputsModule, providers: [] };
    }
}
InputsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [MdbInputDirective, EqualValidatorDirective],
                exports: [MdbInputDirective, EqualValidatorDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DeepDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    constructor(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
    }
}
DeepDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbDeepDirective]',
            },] },
];
/** @nocollapse */
DeepDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class DeepModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: DeepModule, providers: [] };
    }
}
DeepModule.decorators = [
    { type: NgModule, args: [{
                declarations: [DeepDirective],
                exports: [DeepDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class InputValidateDirective {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    constructor(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.value = '';
        this.minLength = '0';
        this.maxLength = '524288';
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        this.wrongTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.wrongTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.wrongTextContainer, 'text-danger', true);
        const /** @type {?} */ textWrong = this._elRef.nativeElement.getAttribute('data-error');
        this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
        this._renderer.setElementStyle(this.wrongTextContainer, 'visibility', 'hidden');
        this.rightTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.rightTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.rightTextContainer, 'text-success', true);
        const /** @type {?} */ textSuccess = this._elRef.nativeElement.getAttribute('data-success');
        this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
        this._renderer.setElementStyle(this.rightTextContainer, 'visibility', 'hidden');
    }
    /**
     * @return {?}
     */
    onBlur() {
        const /** @type {?} */ inputType = this._elRef.nativeElement.type;
        if (inputType === 'email') {
            if (this.customRegex) {
                const /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    /*tslint:disable:max-line-length*/
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
            else if (!this.customRegex) {
                /*tslint:disable:max-line-length*/
                const /** @type {?} */ re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                }
            }
        }
        else if (inputType === 'password') {
            if (this.customRegex) {
                const /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^(?=(.*\d){1})(.*\S)(?=.*[a-zA-Z\S])[0-9a-zA-Z\S]/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'text') {
            if (this.customRegex) {
                const /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(re) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(re) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                    // tslint:disable-next-line:max-line-length
                }
                else if (this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) && this._elRef.nativeElement.value.length >= this.minLength && this._elRef.nativeElement.value.length <= this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                    // tslint:disable-next-line:max-line-length
                }
                else if (!this._elRef.nativeElement.value.match(/^[a-zA-Z0-9]+$/g) || this._elRef.nativeElement.value.length < this.minLength || this._elRef.nativeElement.value.length > this.maxLength) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'submit') {
            for (let /** @type {?} */ i = 0; i < this._elRef.nativeElement.parentElement.length; i++) {
                if (this._elRef.nativeElement.parentElement[i].value == null || this._elRef.nativeElement.parentElement[i].value === '') {
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement.parentElement[i], 'counter-success', false);
                }
                else if (!this._elRef.nativeElement.parentElement[i].value == null) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'tel') {
            if (this.customRegex) {
                const /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                const /** @type {?} */ re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length >= 8 && this._elRef.nativeElement.value.length <= 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length > 20) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
        else if (inputType === 'number') {
            if (this.customRegex) {
                const /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
            else if (!this.customRegex) {
                const /** @type {?} */ re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
                if (this._elRef.nativeElement.length === 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
                else if (re.test(this._elRef.nativeElement.value) && this._elRef.nativeElement.value.length > 0) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', false);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', true);
                }
                else if (!re.test(this._elRef.nativeElement.value) || this._elRef.nativeElement.value.length < 1) {
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-danger', true);
                    this._renderer.setElementClass(this._elRef.nativeElement, 'counter-success', false);
                }
            }
        }
    }
}
InputValidateDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbInputValidate]',
            },] },
];
/** @nocollapse */
InputValidateDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
InputValidateDirective.propDecorators = {
    "value": [{ type: Input },],
    "minLength": [{ type: Input, args: ['minLength',] },],
    "maxLength": [{ type: Input, args: ['maxLength',] },],
    "customRegex": [{ type: Input, args: ['customRegex',] },],
    "onBlur": [{ type: HostListener, args: ['blur', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ActiveDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} platformId
     */
    constructor(el, renderer, platformId) {
        this.renderer = renderer;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    onClick() {
        this.initComponent();
        this.isClicked = true;
    }
    /**
     * @return {?}
     */
    Click() {
        this.isClicked = true;
    }
    /**
     * @return {?}
     */
    onBlur() {
        this.checkValue();
        this.isClicked = false;
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.initComponent();
        setTimeout(() => {
            this.checkValue();
        }, 0);
    }
    /**
     * @return {?}
     */
    ngAfterViewChecked() {
        this.initComponent();
        this.checkValue();
    }
    /**
     * @return {?}
     */
    initComponent() {
        let /** @type {?} */ inputId;
        let /** @type {?} */ inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (/** @type {?} */ err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (/** @type {?} */ err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel != null) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    }
    /**
     * @return {?}
     */
    checkValue() {
        let /** @type {?} */ value = '';
        if (this.elLabel != null) {
            value = this.el.nativeElement.value || '';
            if (value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
                if (this.elIcon) {
                    this.renderer.removeClass(this.elIcon, 'active');
                }
                // tslint:disable-next-line:max-line-length
            }
            if (value === '' && this.isClicked || value === '' && this.el.nativeElement.placeholder || value === '' && this.el.nativeElement.attributes.placeholder) {
                this.renderer.addClass(this.elLabel, 'active');
            }
        }
    }
}
ActiveDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbActive]'
            },] },
];
/** @nocollapse */
ActiveDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: undefined, decorators: [{ type: Inject, args: [PLATFORM_ID,] },] },
];
ActiveDirective.propDecorators = {
    "mdbActive": [{ type: Input },],
    "onClick": [{ type: HostListener, args: ['focus', ['$event'],] },],
    "Click": [{ type: HostListener, args: ['click', ['$event'],] },],
    "onBlur": [{ type: HostListener, args: ['blur', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ActiveModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ActiveModule, providers: [] };
    }
}
ActiveModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ActiveDirective, InputValidateDirective],
                exports: [ActiveDirective, InputValidateDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class Utils {
    /**
     * @param {?} element
     * @return {?}
     */
    static reflow(element) {
        ((bs) => bs)(element.offsetHeight);
    }
    /**
     * @param {?} elem
     * @return {?}
     */
    static getStyles(elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        let /** @type {?} */ view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    }
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalOptions {
}
ModalOptions.decorators = [
    { type: Injectable },
];
class MDBModalRef {
    /**
     * Hides the modal
     * @return {?}
     */
    hide() { }
}
MDBModalRef.decorators = [
    { type: Injectable },
];
const modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
const ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
const Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
const TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
const DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalBackdropOptions {
    /**
     * @param {?} options
     */
    constructor(options) {
        this.animate = true;
        Object.assign(this, options);
    }
}
/**
 * This component will be added as background layout for modals if enabled
 */
class ModalBackdropComponent {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    constructor(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    get isAnimated() {
        return this._isAnimated;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isAnimated(value) {
        this._isAnimated = value;
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} value
     * @return {?}
     */
    set isShown(value) {
        this._isShown = value;
        this.renderer.setElementClass(this.element.nativeElement, `${ClassName.IN}`, value);
        if (!isBs3()) {
            this.renderer.setElementClass(this.element.nativeElement, `${ClassName.SHOW}`, value);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this.renderer.setElementClass(this.element.nativeElement, `${ClassName.FADE}`, this.isAnimated);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    }
}
ModalBackdropComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-modal-backdrop',
                template: ``,
            },] },
];
/** @nocollapse */
ModalBackdropComponent.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer, },
];
ModalBackdropComponent.propDecorators = {
    "classNameBackDrop": [{ type: HostBinding, args: ['class.modal-backdrop',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const TRANSITION_DURATION = 300;
const BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
class ModalDirective {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    constructor(_element, _viewContainerRef, _renderer, clf) {
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new EventEmitter();
        /**
         * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete)
         */
        this.onShown = new EventEmitter();
        /**
         * This event is fired immediately when the hide instance method has been called.
         */
        this.onHide = new EventEmitter();
        /**
         * This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new EventEmitter();
        this.isAnimated = true;
        this._isShown = false;
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.timerHideModal = 0;
        this.timerRmBackDrop = 0;
        this.isNested = false;
        this._element = _element;
        this._renderer = _renderer;
        this._backdrop = clf.createLoader(_element, _viewContainerRef, _renderer);
    }
    /**
     * allows to set modal configuration via element property
     * @param {?} conf
     * @return {?}
     */
    set config(conf) {
        this._config = this.getConfig(conf);
    }
    /**
     * @return {?}
     */
    get config() {
        return this._config;
    }
    /**
     * @return {?}
     */
    get isShown() {
        return this._isShown;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    }
    /**
     * @return {?}
     */
    onEsc() {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this._config = this._config || this.getConfig();
        setTimeout(() => {
            if (this._config.show) {
                this.show();
            }
        }, 0);
    }
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    toggle() {
        return this._isShown ? this.hide() : this.show();
    }
    /**
     * Allows to manually open modal
     * @return {?}
     */
    show() {
        this.dismissReason = null;
        this.onShow.emit(this);
        if (this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = true;
        this.checkScrollbar();
        this.setScrollbar();
        if (document$1 && document$1.body) {
            if (document$1.body.classList.contains(ClassName.OPEN)) {
                this.isNested = true;
            }
            else {
                this._renderer.addClass(document$1.body, ClassName.OPEN);
            }
        }
        this.showBackdrop(() => {
            this.showElement();
        });
    }
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    hide(event) {
        if (event) {
            event.preventDefault();
        }
        this.onHide.emit(this);
        // todo: add an option to prevent hiding
        if (!this._isShown) {
            return;
        }
        clearTimeout(this.timerHideModal);
        clearTimeout(this.timerRmBackDrop);
        this._isShown = false;
        this._renderer.removeClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.removeClass(this._element.nativeElement, ClassName.SHOW);
        }
        if (this.isAnimated) {
            this.timerHideModal = setTimeout(() => this.hideModal(), TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    }
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    getConfig(config) {
        return Object.assign({}, modalConfigDefaults, config);
    }
    /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    showElement() {
        // todo: replace this with component loader usage
        if (!this._element.nativeElement.parentNode ||
            (this._element.nativeElement.parentNode.nodeType !== Node.ELEMENT_NODE)) {
            // don't move modals dom position
            if (document$1 && document$1.body) {
                document$1.body.appendChild(this._element.nativeElement);
            }
        }
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'false');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'block');
        this._renderer.setProperty(this._element.nativeElement, 'scrollTop', 0);
        if (this.isAnimated) {
            Utils.reflow(this._element.nativeElement);
        }
        this._renderer.addClass(this._element.nativeElement, ClassName.IN);
        if (!isBs3()) {
            this._renderer.addClass(this._element.nativeElement, ClassName.SHOW);
        }
        const /** @type {?} */ transitionComplete = () => {
            if (this._config.focus) {
                this._element.nativeElement.focus();
            }
            this.onShown.emit(this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    hideModal() {
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(() => {
            if (!this.isNested) {
                if (document$1 && document$1.body) {
                    this._renderer.removeClass(document$1.body, ClassName.OPEN);
                }
                this.resetScrollbar();
            }
            this.resetAdjustments();
            this.focusOtherModal();
            this.onHidden.emit(this);
        });
    }
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    showBackdrop(callback) {
        if (this._isShown && this.config.backdrop && (!this.backdrop || !this.backdrop.instance.isShown)) {
            this.removeBackdrop();
            this._backdrop
                .attach(ModalBackdropComponent)
                .to('body')
                .show({ isAnimated: this.isAnimated });
            this.backdrop = this._backdrop._componentRef;
            if (!callback) {
                return;
            }
            if (!this.isAnimated) {
                callback();
                return;
            }
            setTimeout(callback, BACKDROP_TRANSITION_DURATION);
        }
        else if (!this._isShown && this.backdrop) {
            this.backdrop.instance.isShown = false;
            const /** @type {?} */ callbackRemove = () => {
                this.removeBackdrop();
                if (callback) {
                    callback();
                }
            };
            if (this.backdrop.instance.isAnimated) {
                this.timerRmBackDrop = setTimeout(callbackRemove, BACKDROP_TRANSITION_DURATION);
            }
            else {
                callbackRemove();
            }
        }
        else if (callback) {
            callback();
        }
    }
    /**
     * \@internal
     * @return {?}
     */
    removeBackdrop() {
        this._backdrop.hide();
    }
    /**
     * @return {?}
     */
    focusOtherModal() {
        const /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        //  this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
        otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
    }
    /**
     * \@internal
     * @return {?}
     */
    resetAdjustments() {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    }
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`;
        }
    }
    /**
     * @return {?}
     */
    resetScrollbar() {
        document$1.body.style.paddingRight = this.originalBodyPadding;
    }
    /**
     * @return {?}
     */
    getScrollbarWidth() {
        const /** @type {?} */ scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(document$1.body, scrollDiv);
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        const /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document$1.body.removeChild(scrollDiv);
        return scrollbarWidth;
    }
}
ModalDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbModal]',
                exportAs: 'mdb-modal'
            },] },
];
/** @nocollapse */
ModalDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer2, },
    { type: ComponentLoaderFactory, },
];
ModalDirective.propDecorators = {
    "config": [{ type: Input },],
    "onShow": [{ type: Output },],
    "onShown": [{ type: Output },],
    "onHide": [{ type: Output },],
    "onHidden": [{ type: Output },],
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
    "onEsc": [{ type: HostListener, args: ['keydown.esc',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const msConfig = {
    serviceInstance: new Object()
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalContainerComponent {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    constructor(options, _element, _renderer) {
        this._renderer = _renderer;
        this.tabindex = -1;
        this.role = 'dialog';
        this.modla = true;
        this.isShown = false;
        this.isModalHiding = false;
        this.mdbModalService = msConfig.serviceInstance;
        this._element = _element;
        this.config = Object.assign({}, options);
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onClick(event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    }
    /**
     * @return {?}
     */
    onEsc() {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (this.isAnimated) {
            this._renderer.setElementClass(this._element.nativeElement, ClassName.FADE, true);
        }
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(() => {
            this.isShown = true;
            this._renderer.setElementClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW, true);
        }, this.isAnimated ? TransitionDurations.BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.setElementClass(document.body, ClassName.OPEN, true);
        }
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.isShown) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    hide() {
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.setElementClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW, false);
        setTimeout(() => {
            this.isShown = false;
            if (document && document.body && this.mdbModalService.getModalsCount() === 1) {
                this._renderer.setElementClass(document.body, ClassName.OPEN, false);
            }
            this.mdbModalService.hide(this.level);
            this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    }
}
ModalContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-modal-container',
                template: `
  <div [class]="'modal-dialog' + (config.class ? ' ' + config.class : '')" role="document">
  <div class="modal-content"><ng-content></ng-content></div>
</div>`
            },] },
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = () => [
    { type: ModalOptions, },
    { type: ElementRef, },
    { type: Renderer, },
];
ModalContainerComponent.propDecorators = {
    "tabindex": [{ type: HostBinding, args: ['tabindex',] },],
    "role": [{ type: HostBinding, args: ['role',] },],
    "modla": [{ type: HostBinding, args: ['class.modal',] },],
    "onClick": [{ type: HostListener, args: ['click', ['$event'],] },],
    "onEsc": [{ type: HostListener, args: ['window:keydown.esc',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class MDBModalService {
    /**
     * @param {?} clf
     * @param {?} el
     * @param {?} v
     * @param {?} r
     */
    constructor(clf, el, v, r) {
        this.clf = clf;
        this.el = el;
        this.v = v;
        this.r = r;
        this.config = modalConfigDefaults;
        this.onShow = new EventEmitter();
        this.onShown = new EventEmitter();
        this.onHide = new EventEmitter();
        this.onHidden = new EventEmitter();
        this.isBodyOverflowing = false;
        this.originalBodyPadding = 0;
        this.scrollbarWidth = 0;
        this.modalsCount = 0;
        this.lastDismissReason = '';
        this.loaders = [];
        //   this._backdropLoader = this.clf.createLoader<ModalBackdropComponent>(null, null, null);
        this._backdropLoader = this.clf.createLoader(this.el, this.v, this.r);
        msConfig.serviceInstance = this;
    }
    /**
     * Shows a modal
     * @param {?} content
     * @param {?=} config
     * @return {?}
     */
    show(content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    }
    /**
     * @param {?} level
     * @return {?}
     */
    hide(level) {
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(() => {
            this._hideModal(level);
            this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    }
    /**
     * @return {?}
     */
    _showBackdrop() {
        const /** @type {?} */ isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        const /** @type {?} */ isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
        if (this.modalsCount === 1) {
            this.removeBackdrop();
            if (isBackdropEnabled && isBackdropInDOM) {
                this._backdropLoader
                    .attach(ModalBackdropComponent)
                    .to('body')
                    .show({ isAnimated: this.config.animated });
                this.backdropRef = this._backdropLoader._componentRef;
            }
        }
    }
    /**
     * @return {?}
     */
    _hideBackdrop() {
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        const /** @type {?} */ duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(() => this.removeBackdrop(), duration);
    }
    /**
     * @param {?} content
     * @return {?}
     */
    _showModal(content) {
        const /** @type {?} */ modalLoader = this.loaders[this.loaders.length - 1];
        const /** @type {?} */ mdbModalRef = new MDBModalRef();
        const /** @type {?} */ modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content, isAnimated: this.config.animated });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = () => {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    }
    /**
     * @param {?} level
     * @return {?}
     */
    _hideModal(level) {
        const /** @type {?} */ modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    }
    /**
     * @return {?}
     */
    getModalsCount() {
        return this.modalsCount;
    }
    /**
     * @param {?} reason
     * @return {?}
     */
    setDismissReason(reason) {
        this.lastDismissReason = reason;
    }
    /**
     * @return {?}
     */
    removeBackdrop() {
        this._backdropLoader.hide();
        this.backdropRef = null;
    }
    /**
     * \@internal
     * @return {?}
     */
    checkScrollbar() {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    }
    /**
     * @return {?}
     */
    setScrollbar() {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = `${this.originalBodyPadding + this.scrollbarWidth}px`;
        }
    }
    /**
     * @return {?}
     */
    resetScrollbar() {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    }
    /**
     * @return {?}
     */
    getScrollbarWidth() {
        const /** @type {?} */ scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        const /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    }
    /**
     * @return {?}
     */
    _createLoaders() {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        const /** @type {?} */ loader = this.clf.createLoader(this.el, this.v, this.r);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    }
    /**
     * @param {?} level
     * @return {?}
     */
    removeLoaders(level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach((loader, i) => {
            loader.instance.level = i + 1;
        });
    }
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    copyEvent(from, to) {
        from.subscribe(() => {
            to.emit(this.lastDismissReason);
        });
    }
}
MDBModalService.decorators = [
    { type: Injectable },
];
/** @nocollapse */
MDBModalService.ctorParameters = () => [
    { type: ComponentLoaderFactory, },
    { type: ElementRef, },
    { type: ViewContainerRef, },
    { type: Renderer2, },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class ModalModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: ModalModule, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
    }
}
ModalModule.decorators = [
    { type: NgModule, args: [{
                declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                schemas: [NO_ERRORS_SCHEMA]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NavbarService {
    constructor() {
        this.navbarLinkClicks = new Subject();
    }
    /**
     * @return {?}
     */
    getNavbarLinkClicks() {
        return this.navbarLinkClicks.asObservable();
    }
    /**
     * @return {?}
     */
    setNavbarLinkClicks() {
        this.navbarLinkClicks.next();
    }
}
NavbarService.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LinksComponent {
    /**
     * @param {?} _navbarService
     */
    constructor(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        const /** @type {?} */ that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
LinksComponent.decorators = [
    { type: Component, args: [{
                selector: 'links',
                template: `
        <ng-content></ng-content>
    `,
            },] },
];
/** @nocollapse */
LinksComponent.ctorParameters = () => [
    { type: NavbarService, },
];
LinksComponent.propDecorators = {
    "links": [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] },],
    "linkClick": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class LogoComponent {
}
LogoComponent.decorators = [
    { type: Component, args: [{
                selector: 'logo',
                template: `
  <ng-content></ng-content>
  `
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NavbarComponent {
    /**
     * @param {?} renderer
     * @param {?} _navbarService
     */
    constructor(renderer, _navbarService) {
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(navbarLinkClicks => { this.closeNavbarOnClick(navbarLinkClicks); });
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    closeNavbarOnClick(navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        const /** @type {?} */ isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        /* bugfix - bez tego sypie ExpressionChangedAfterItHasBeenCheckedError -
            https://github.com/angular/angular/issues/6005#issuecomment-165951692 */
        setTimeout(() => {
            this.height = this.el.nativeElement.scrollHeight;
            this.collapse = true;
            if (!this.containerInside) {
                const /** @type {?} */ childrens = Array.from(this.container.nativeElement.children);
                childrens.forEach(child => {
                    // this.navbar.nativeElement.append(child);
                    this.renderer.appendChild(this.navbar.nativeElement, child);
                    this.container.nativeElement.remove();
                });
            }
            if (this.el.nativeElement.children.length === 0) {
                this.el.nativeElement.remove();
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    toggle(event) {
        event.preventDefault();
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    }
    /**
     * @return {?}
     */
    show() {
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(() => {
            this.renderer.setStyle(this.el.nativeElement, 'height', this.height + 'px');
        }, 10);
        setTimeout(() => {
            this.collapsing = false;
            this.collapse = true;
            this.showClass = true;
        }, this.duration);
    }
    /**
     * @return {?}
     */
    hide() {
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(() => {
            this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
        }, 10);
        setTimeout(() => {
            this.collapsing = false;
            this.collapse = true;
        }, this.duration);
    }
    /**
     * @return {?}
     */
    get displayStyle() {
        // if(!this.containerInside) {
        //  return 'flex';
        // } else {
        return '';
        // }
    }
    /**
     * @param {?} event
     * @return {?}
     */
    onResize(event) {
        let /** @type {?} */ breakpoit = 0;
        if (this.SideClass.includes('navbar-expand-xl')) {
            breakpoit = 1200;
        }
        else if (this.SideClass.includes('navbar-expand-lg')) {
            breakpoit = 992;
        }
        else if (this.SideClass.includes('navbar-expand-md')) {
            breakpoit = 768;
        }
        else if (this.SideClass.includes('navbar-expand-sm')) {
            breakpoit = 576;
        }
        else {
            breakpoit = event.target.innerWidth + 1;
        }
        if (event.target.innerWidth < breakpoit) {
            if (!this.shown) {
                this.collapse = false;
                this.renderer.setStyle(this.el.nativeElement, 'height', '0px');
                this.renderer.setStyle(this.el.nativeElement, 'opacity', '0');
                setTimeout(() => {
                    this.height = this.el.nativeElement.scrollHeight;
                    this.collapse = true;
                    this.renderer.setStyle(this.el.nativeElement, 'opacity', '');
                }, 4);
            }
        }
        else {
            this.collapsing = false;
            this.shown = false;
            this.showClass = false;
            this.collapse = true;
            this.renderer.setStyle(this.el.nativeElement, 'height', '');
        }
    }
    /**
     * @return {?}
     */
    onScroll() {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    }
}
NavbarComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-navbar',
                template: "<nav class=\"{{SideClass}}\" #nav> <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container> <ng-content select=\"logo\"></ng-content> <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content> <div *ngIf=\"this.doubleNav == false\"> <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggle($event)\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\"> <span class=\"navbar-toggler-icon\"> </span> </button> </div> <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\"> <ng-content select=\"links\"></ng-content> </div> </div> </nav> ",
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = () => [
    { type: Renderer2, },
    { type: NavbarService, },
];
NavbarComponent.propDecorators = {
    "SideClass": [{ type: Input },],
    "containerInside": [{ type: Input },],
    "el": [{ type: ViewChild, args: ['navbar',] },],
    "mobile": [{ type: ViewChild, args: ['mobile',] },],
    "navbar": [{ type: ViewChild, args: ['nav',] },],
    "container": [{ type: ViewChild, args: ['container',] },],
    "onResize": [{ type: HostListener, args: ['window:resize', ['$event'],] },],
    "onScroll": [{ type: HostListener, args: ['document:scroll', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NavlinksComponent {
    /**
     * @param {?} _navbarService
     */
    constructor(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new EventEmitter();
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        const /** @type {?} */ that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
    }
}
NavlinksComponent.decorators = [
    { type: Component, args: [{
                selector: 'navlinks',
                template: `
        <ng-content></ng-content>
    `,
            },] },
];
/** @nocollapse */
NavlinksComponent.ctorParameters = () => [
    { type: NavbarService, },
];
NavlinksComponent.propDecorators = {
    "links": [{ type: ContentChildren, args: [RouterLinkWithHref, { read: ElementRef, descendants: true },] },],
    "linkClick": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class NavbarModule {
}
NavbarModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                exports: [NavbarComponent, LinksComponent, LogoComponent, NavlinksComponent],
                providers: [NavbarService]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Configuration service for the Popover directive.
 * You can inject this service, typically in your root component, and customize
 * the values of its properties in order to provide default values for all the
 * popovers used in the application.
 */
class PopoverConfig {
    constructor() {
        /**
         * Placement of a popover. Accepts: "top", "bottom", "left", "right"
         */
        this.placement = 'top';
        /**
         * Specifies events that should trigger. Supports a space separated list of
         * event names.
         */
        this.triggers = 'click';
    }
}
PopoverConfig.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PopoverContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    }
}
PopoverContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-popover-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                template: `
 <h3 class="popover-header" *ngIf="title">{{title}}</h3>
 <div class="popover-body">
 <ng-content></ng-content>
 </div>`
            },] },
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = () => [
    { type: PopoverConfig, },
];
PopoverContainerComponent.propDecorators = {
    "placement": [{ type: Input },],
    "title": [{ type: Input },],
    "show": [{ type: HostBinding, args: ['class.show',] },],
    "role": [{ type: HostBinding, args: ['attr.role',] },],
    "class": [{ type: HostBinding, args: ['class',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
class PopoverDirective {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _config
     * @param {?} cis
     */
    constructor(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    /**
     * Returns whether or not the popover is currently being shown
     * @return {?}
     */
    get isOpen() { return this._popover.isShown; }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    show() {
        if (this._popover.isShown) {
            return;
        }
        this._popover
            .attach(PopoverContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbPopover,
            placement: this.placement,
            title: this.popoverTitle
        });
        this.isOpen = true;
    }
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    hide() {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    }
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._popover.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
    }
    /**
     * @return {?}
     */
    dispose() {
        this._popover.dispose();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._popover.dispose();
    }
}
PopoverDirective.decorators = [
    { type: Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] },
];
/** @nocollapse */
PopoverDirective.ctorParameters = () => [
    { type: ElementRef, },
    { type: Renderer2, },
    { type: ViewContainerRef, },
    { type: PopoverConfig, },
    { type: ComponentLoaderFactory, },
];
PopoverDirective.propDecorators = {
    "mdbPopover": [{ type: Input },],
    "popoverTitle": [{ type: Input },],
    "placement": [{ type: Input },],
    "triggers": [{ type: Input },],
    "container": [{ type: Input },],
    "isOpen": [{ type: Input },],
    "onShown": [{ type: Output },],
    "onHidden": [{ type: Output },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class PopoverModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    }
}
PopoverModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RippleDirective {
    /**
     * @param {?} el
     */
    constructor(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    click(event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            const /** @type {?} */ button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            const /** @type {?} */ xPos = event.clientX - button.getBoundingClientRect().left;
            const /** @type {?} */ yPos = event.clientY - button.getBoundingClientRect().top;
            const /** @type {?} */ tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            const /** @type {?} */ ripple = button.appendChild(tmp);
            const /** @type {?} */ top = yPos + 'px';
            const /** @type {?} */ left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            const /** @type {?} */ scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            const /** @type {?} */ duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    }
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    removeRipple(button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(() => {
            ripple.style.opacity = '0';
            setTimeout(() => {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    }
}
RippleDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbRippleRadius]'
            },] },
];
/** @nocollapse */
RippleDirective.ctorParameters = () => [
    { type: ElementRef, },
];
RippleDirective.propDecorators = {
    "click": [{ type: HostListener, args: ['click', ['$event'],] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class RippleModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: RippleModule, providers: [] };
    }
}
RippleModule.decorators = [
    { type: NgModule, args: [{
                declarations: [RippleDirective],
                exports: [RippleDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class WavesModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: WavesModule, providers: [] };
    }
}
WavesModule.decorators = [
    { type: NgModule, args: [{
                declarations: [WavesDirective],
                exports: [WavesDirective]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default values provider for tooltip
 */
class TooltipConfig {
    constructor() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
    }
}
TooltipConfig.decorators = [
    { type: Injectable },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TooltipContainerComponent {
    /**
     * @param {?} config
     */
    constructor(config) {
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    /**
     * @return {?}
     */
    get isBs3() {
        return isBs3();
    }
    /**
     * @return {?}
     */
    ngAfterViewInit() {
        this.classMap = { in: false, fade: false };
        this.classMap[this.placement] = true;
        this.classMap['tooltip-' + this.placement] = true;
        this.classMap.in = true;
        if (this.animation) {
            this.classMap.fade = true;
        }
        if (this.popupClass) {
            this.classMap[this.popupClass] = true;
        }
    }
}
TooltipContainerComponent.decorators = [
    { type: Component, args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                },
                template: `
  <div class="tooltip-arrow"></div>
  <div class="tooltip-inner"><ng-content></ng-content></div>
  `
            },] },
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = () => [
    { type: TooltipConfig, },
];
TooltipContainerComponent.propDecorators = {
    "show": [{ type: HostBinding, args: ['class.show',] },],
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function OnChange() {
    const /** @type {?} */ sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        const /** @type {?} */ _key = ` __${propertyKey}Value`;
        Object.defineProperty(target, propertyKey, {
            /**
             * @return {?}
             */
            get() { return this[_key]; },
            /**
             * @param {?} value
             * @return {?}
             */
            set(value) {
                const /** @type {?} */ prevValue = this[_key];
                this[_key] = value;
                if (prevValue !== value && this[propertyKey + sufix]) {
                    this[propertyKey + sufix].emit(value);
                }
            }
        });
    };
}
/* tslint:enable */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TooltipDirective {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} cis
     * @param {?} config
     */
    constructor(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new EventEmitter();
        this.delay = 0;
        this.fadeDuration = 150;
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    /**
     * Returns whether or not the tooltip is currently being shown
     * @return {?}
     */
    get isOpen() { return this._tooltip.isShown; }
    /**
     * @param {?} value
     * @return {?}
     */
    set isOpen(value) {
        if (value) {
            this.show();
        }
        else {
            this.hide();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        this._tooltip.listen({
            triggers: this.triggers,
            show: () => this.show()
        });
        this.tooltipChange.subscribe((value) => {
            if (!value) {
                this._tooltip.hide();
            }
        });
    }
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    toggle() {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    }
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    show() {
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        const /** @type {?} */ showTooltip = () => this._tooltip
            .attach(TooltipContainerComponent)
            .to(this.container)
            .position({ attachment: this.placement })
            .show({
            content: this.mdbTooltip,
            placement: this.placement
        });
        if (this.delay) {
            this._delayTimeoutId = setTimeout(() => { showTooltip(); }, this.delay);
        }
        else {
            showTooltip();
        }
    }
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    hide() {
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(() => {
            this._tooltip.hide();
        }, this.fadeDuration);
    }
    /**
     * @return {?}
     */
    dispose() {
        this._tooltip.dispose();
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._tooltip.dispose();
    }
}
TooltipDirective.decorators = [
    { type: Directive, args: [{
                selector: '[mdbTooltip]',
                exportAs: 'mdb-tooltip'
            },] },
];
/** @nocollapse */
TooltipDirective.ctorParameters = () => [
    { type: ViewContainerRef, },
    { type: Renderer2, },
    { type: ElementRef, },
    { type: ComponentLoaderFactory, },
    { type: TooltipConfig, },
];
TooltipDirective.propDecorators = {
    "mdbTooltip": [{ type: Input },],
    "tooltipChange": [{ type: Output },],
    "placement": [{ type: Input },],
    "triggers": [{ type: Input },],
    "container": [{ type: Input },],
    "isOpen": [{ type: Input },],
    "isDisabled": [{ type: Input },],
    "onShown": [{ type: Output },],
    "onHidden": [{ type: Output },],
    "delay": [{ type: Input },],
    "fadeDuration": [{ type: Input },],
};
__decorate([
    OnChange(),
    __metadata("design:type", Object)
], TooltipDirective.prototype, "mdbTooltip", void 0);

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
class TooltipModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    }
    ;
}
TooltipModule.decorators = [
    { type: NgModule, args: [{
                imports: [CommonModule],
                declarations: [TooltipDirective, TooltipContainerComponent],
                exports: [TooltipDirective],
                entryComponents: [TooltipContainerComponent]
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @template T
 */
class BsComponentRef {
}

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const MODULES = [
    DeepModule,
    ButtonsModule,
    RippleModule,
    WavesModule,
    InputsModule,
    ActiveModule,
    NavbarModule,
    DropdownModule,
    CarouselModule,
    ChartsModule,
    CollapseModule,
    ModalModule,
    TooltipModule,
    PopoverModule,
];
class MDBRootModule {
}
MDBRootModule.decorators = [
    { type: NgModule, args: [{
                imports: [
                    ButtonsModule,
                    DeepModule,
                    RippleModule.forRoot(),
                    WavesModule.forRoot(),
                    InputsModule.forRoot(),
                    ActiveModule.forRoot(),
                    NavbarModule,
                    DropdownModule.forRoot(),
                    CarouselModule.forRoot(),
                    ChartsModule,
                    CollapseModule.forRoot(),
                    ModalModule.forRoot(),
                    TooltipModule.forRoot(),
                    PopoverModule.forRoot(),
                ],
                exports: MODULES,
                schemas: [NO_ERRORS_SCHEMA]
            },] },
];
class MDBBootstrapModule {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: MDBRootModule };
    }
}
MDBBootstrapModule.decorators = [
    { type: NgModule, args: [{ exports: MODULES },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const MODULES$1 = [
    AutocompleteModule,
    CardsModule,
    FileInputModule,
    MaterialChipsModule,
    ProgressBars,
    TabsModule,
    SelectModule,
    DatepickerModule,
    TimePickerModule,
    LightBoxModule,
    SidenavModule,
    ChartSimpleModule,
    AccordionModule,
    StickyContentModule,
    SmoothscrollModule,
    CharCounterModule
];
class MDBRootModulePro {
}
MDBRootModulePro.decorators = [
    { type: NgModule, args: [{
                imports: [
                    AutocompleteModule,
                    CardsModule.forRoot(),
                    MaterialChipsModule,
                    ProgressBars.forRoot(),
                    TabsModule.forRoot(),
                    SelectModule,
                    DatepickerModule,
                    TimePickerModule,
                    LightBoxModule,
                    SidenavModule,
                    ChartSimpleModule,
                    AccordionModule,
                    StickyContentModule,
                    SmoothscrollModule.forRoot(),
                    CharCounterModule.forRoot()
                ],
                exports: [MODULES$1],
                providers: [],
                schemas: [NO_ERRORS_SCHEMA]
            },] },
];
class MDBBootstrapModulePro {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: MDBRootModulePro };
    }
}
MDBBootstrapModulePro.decorators = [
    { type: NgModule, args: [{ exports: [MODULES$1] },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
const MODULES$2 = [
    MDBBootstrapModule,
    MDBBootstrapModulePro
];
class MDBRootModules {
}
MDBRootModules.decorators = [
    { type: NgModule, args: [{
                imports: [
                    MDBBootstrapModule.forRoot(),
                    MDBBootstrapModulePro.forRoot(),
                ],
                exports: MODULES$2,
                providers: [],
                schemas: [NO_ERRORS_SCHEMA]
            },] },
];
class MDBBootstrapModulesPro {
    /**
     * @return {?}
     */
    static forRoot() {
        return { ngModule: MDBRootModules };
    }
}
MDBBootstrapModulesPro.decorators = [
    { type: NgModule, args: [{ exports: MODULES$2 },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// NG-UIKIT-PRO-STANDARD
// Accordion

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Generated bundle index. Do not edit.
 */

export { SBItemBodyComponent, SBItemHeadComponent, SBItemComponent, sbConfig, SqueezeBoxComponent, SQUEEZEBOX_COMPONENTS, AccordionModule, OverlayContainer, OverlayRef, Overlay, OVERLAY_PROVIDERS, DomPortalHost, ComponentPortal, BasePortalHost, ToastComponent, GlobalConfig, ToastPackage, tsConfig, ToastContainerDirective, ToastContainerModule, ToastRef, ToastInjector, ToastModule, ToastService, TOAST_CONFIG, slideIn, fadeIn, slideOut, flipState, turnState, iconsState, socialsState, flyInOut, CompleterListItemComponent, CompleterComponent, MdbCompleterDirective, CtrRowItem, MdbDropdownDirective, MdbInputCompleteDirective, CtrListContext, MdbListDirective, MdbRowDirective, CompleterBaseData, CompleterService, localDataFactory, remoteDataFactory, LocalDataFactoryProvider, RemoteDataFactoryProvider, LocalData, RemoteData, MAX_CHARS, MIN_SEARCH_LENGTH, PAUSE, TEXT_SEARCHING, TEXT_NO_RESULTS, CLEAR_TIMEOUT, isNil, AutocompleteModule, CardRevealComponent, CardRotatingComponent, CardsModule, InputAutoFillDirective, FocusDirective, LocaleService, UtilService, DatepickerModule, MYDP_VALUE_ACCESSOR, MDBDatePickerComponent, SimpleChartComponent, EasyPieChartComponent, ChartSimpleModule, UploadStatus, humanizeBytes, MDBUploaderService, MDBFileDropDirective, MDBFileSelectDirective, FileInputModule, CharCounterDirective, CharCounterModule, ImageModalComponent, LightBoxModule, Diacritics, OptionList, Option, SelectDropdownComponent, SELECT_VALUE_ACCESSOR, SelectComponent, SelectModule, TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE, EMULATE_ELEMENT_NAME, CONTAINER_QUERY, COMPLETE_CLASS_NAME, CONTAINER_CLASS_NAME, CONTAINER_NAME, MDBSpinningPreloader, ProgressBarComponent, MdProgressSpinnerCssMatStylerDirective, MdProgressSpinnerComponent, MdSpinnerComponent, BarComponent, ProgressSpinnerComponent, ProgressDirective, ProgressbarComponent, ProgressbarConfigComponent, ProgressbarModule, PreloadersModule, ProgressBars, SidenavComponent, SidenavModule, PageScrollUtilService, EasingLogic, PageScrollConfig, PageScrollDirective, PageScrollInstance, SmoothscrollModule, PageScrollService, computedStyle, MdbStickyDirective, StickyContentModule, TabHeadingDirective, TabDirective, TabsetComponent, TabsetConfig, NgTranscludeDirective, TabsModule, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR, MaterialChipsComponent, MaterialChipsModule, TimePickerModule, TIME_PIRCKER_VALUE_ACCESSOT, ClockPickerComponent, ButtonsModule, CHECKBOX_CONTROL_VALUE_ACCESSOR, ButtonCheckboxDirective, RADIO_CONTROL_VALUE_ACCESSOR, ButtonRadioDirective, Direction, CarouselComponent, CarouselConfig, SlideComponent, CarouselModule, BaseChartDirective, ChartsModule, CollapseDirective, CollapseModule, BsDropdownContainerComponent, BsDropdownMenuDirective, BsDropdownToggleDirective, BsDropdownConfig, BsDropdownDirective, BsDropdownState, DropdownModule, InputsModule, MdbInputDirective, DeepModule, DeepDirective, InputValidateDirective, EqualValidatorDirective, ActiveDirective, ActiveModule, ModalDirective, ModalOptions, MDBModalRef, modalConfigDefaults, ClassName, Selector, TransitionDurations, DISMISS_REASONS, MDBModalService, ModalBackdropOptions, ModalBackdropComponent, ModalContainerComponent, msConfig, ModalModule, LinksComponent, LogoComponent, NavbarComponent, NavbarService, NavlinksComponent, NavbarModule, PopoverContainerComponent, PopoverConfig, PopoverDirective, PopoverModule, RippleDirective, RippleModule, WavesDirective, WavesModule, TooltipContainerComponent, TooltipDirective, TooltipConfig, TooltipModule, BsComponentRef, ComponentLoader, ComponentLoaderFactory, ContentRef, win as window, document$1 as document, location, gc, performance, Event, MouseEvent, KeyboardEvent, EventTarget, History, Location, EventListener, Positioning, positionElements, PositioningService, OnChange, LinkedList, isBs3, Trigger, parseTriggers, listenToTriggers, Utils, MDBBootstrapModule, MDBBootstrapModulePro, MDBRootModules, MDBBootstrapModulesPro, ButtonsModule as ɵcq1, ButtonCheckboxDirective as ɵcr1, ButtonRadioDirective as ɵcs1, CarouselComponent as ɵct1, CarouselConfig as ɵcu1, CarouselModule as ɵcw1, SlideComponent as ɵcv1, BaseChartDirective as ɵcx1, ChartsModule as ɵcy1, CollapseDirective as ɵcz1, CollapseModule as ɵda1, BsDropdownContainerComponent as ɵdb1, BsDropdownMenuDirective as ɵdc1, BsDropdownToggleDirective as ɵdd1, BsDropdownConfig as ɵde1, BsDropdownDirective as ɵdf1, DropdownModule as ɵdh1, BsDropdownState as ɵdg1, ActiveDirective as ɵdn1, ActiveModule as ɵdo1, DeepDirective as ɵdl1, DeepModule as ɵdk1, InputValidateDirective as ɵdm1, InputsModule as ɵdi1, MdbInputDirective as ɵdj1, MDBRootModule as ɵek1, ModalDirective as ɵdp1, ModalModule as ɵdv1, ModalOptions as ɵdq1, MDBModalService as ɵdr1, ModalBackdropComponent as ɵdt1, ModalBackdropOptions as ɵds1, ModalContainerComponent as ɵdu1, NavbarComponent as ɵdw1, NavbarModule as ɵdx1, PopoverContainerComponent as ɵdy1, PopoverConfig as ɵdz1, PopoverDirective as ɵea1, PopoverModule as ɵeb1, RippleDirective as ɵec1, RippleModule as ɵed1, TooltipContainerComponent as ɵeg1, TooltipDirective as ɵeh1, TooltipModule as ɵej1, TooltipConfig as ɵei1, WavesDirective as ɵee1, WavesModule as ɵef1, SBItemComponent as ɵc1, SBItemBodyComponent as ɵa1, SBItemHeadComponent as ɵb1, SqueezeBoxComponent as ɵd1, AccordionModule as ɵe1, CompleterListItemComponent as ɵf1, CompleterComponent as ɵg1, MdbCompleterDirective as ɵh1, MdbDropdownDirective as ɵi1, MdbInputCompleteDirective as ɵj1, MdbListDirective as ɵk1, MdbRowDirective as ɵl1, AutocompleteModule as ɵp1, CompleterService as ɵm1, LocalDataFactoryProvider as ɵn1, RemoteDataFactoryProvider as ɵo1, CardRevealComponent as ɵq1, CardRotatingComponent as ɵr1, CardsModule as ɵs1, MDBDatePickerComponent as ɵz1, MYDP_VALUE_ACCESSOR as ɵy1, DatepickerModule as ɵx1, InputAutoFillDirective as ɵt1, FocusDirective as ɵu1, LocaleService as ɵv1, UtilService as ɵw1, SimpleChartComponent as ɵba1, ChartSimpleModule as ɵbc1, EasyPieChartComponent as ɵbb1, MDBFileDropDirective as ɵbd1, MDBFileSelectDirective as ɵbe1, FileInputModule as ɵbf1, CharCounterDirective as ɵbg1, CharCounterModule as ɵbh1, ImageModalComponent as ɵbi1, LightBoxModule as ɵbj1, SelectDropdownComponent as ɵbl1, SELECT_VALUE_ACCESSOR as ɵbm1, SelectComponent as ɵbn1, SelectModule as ɵbo1, MDBRootModulePro as ɵel1, BarComponent as ɵbp1, ProgressBars as ɵbv1, MdProgressBarModule as ɵem1, MdProgressSpinnerModule as ɵen1, ProgressSpinnerComponent as ɵbq1, ProgressDirective as ɵbr1, ProgressbarComponent as ɵbs1, ProgressbarConfigComponent as ɵbt1, ProgressbarModule as ɵbu1, SidenavComponent as ɵbw1, SidenavModule as ɵbx1, PageScrollDirective as ɵby1, PageScrollInstance as ɵbz1, SmoothscrollModule as ɵca1, PageScrollService as ɵcb1, MdbStickyDirective as ɵcc1, StickyContentModule as ɵcd1, TabHeadingDirective as ɵce1, TabDirective as ɵcf1, TabsetComponent as ɵcg1, TabsetConfig as ɵch1, TabsModule as ɵcj1, NgTranscludeDirective as ɵci1, CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR as ɵck1, MaterialChipsComponent as ɵcl1, MaterialChipsModule as ɵcm1, ClockPickerComponent as ɵcp1, TIME_PIRCKER_VALUE_ACCESSOT as ɵco1, TimePickerModule as ɵcn1 };
//# sourceMappingURL=ng-uikit-pro-standard.js.map
