(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('tslib'), require('@angular/core'), require('@angular/common'), require('@angular/animations'), require('rxjs'), require('@angular/platform-browser'), require('@angular/forms'), require('rxjs/operators'), require('@angular/http'), require('hammerjs'), require('@angular/router')) :
	typeof define === 'function' && define.amd ? define(['exports', 'tslib', '@angular/core', '@angular/common', '@angular/animations', 'rxjs', '@angular/platform-browser', '@angular/forms', 'rxjs/operators', '@angular/http', 'hammerjs', '@angular/router'], factory) :
	(factory((global['ng-uikit-pro-standard'] = {}),global.tslib,global.ng.core,global.ng.common,global.ng.animations,global.RX,global.ng.platformBrowser,global.ng.forms,global.Rx.Observable,global.ng.http,global.hammerjs,global.ng.router));
}(this, (function (exports,tslib_1,core,common,animations,rxjs,platformBrowser,forms,operators,http,hammerjs,router) { 'use strict';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SBItemBodyComponent = /** @class */ (function () {
    /**
     * @param {?} renderer
     */
    function SBItemBodyComponent(renderer) {
        this.renderer = renderer;
        this.height = '0';
    }
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemBodyComponent.prototype.toggle = function (collapsed) {
        var _this = this;
        var /** @type {?} */ height = '0';
        if (!collapsed) {
            this.renderer.setStyle(this.bodyEl.nativeElement, 'height', 'auto');
            height = this.bodyEl.nativeElement.offsetHeight + 'px';
            this.renderer.setStyle(this.bodyEl.nativeElement, 'height', '0');
        }
        setTimeout(function () { return _this.renderer.setStyle(_this.bodyEl.nativeElement, 'height', height); }, 50);
    };
    return SBItemBodyComponent;
}());
SBItemBodyComponent.decorators = [
    { type: core.Component, args: [{
                exportAs: 'sbItemBody',
                selector: 'mdb-item-body',
                template: "<div #body class=\"sb-item-body\" [style.height]=\"height\"> <div class=\"card-body\"> <ng-content></ng-content> </div> </div>"
            },] },
];
/** @nocollapse */
SBItemBodyComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
]; };
SBItemBodyComponent.propDecorators = {
    "bodyEl": [{ type: core.ViewChild, args: ['body',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var sbConfig = {
    serviceInstance: new Object()
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SBItemComponent = /** @class */ (function () {
    function SBItemComponent() {
        this.collapsed = true;
        this.squeezebox = sbConfig.serviceInstance;
    }
    /**
     * @return {?}
     */
    SBItemComponent.prototype.ngAfterViewInit = function () {
        this.body.toggle(this.collapsed);
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.toggle = function (collapsed) {
        this.squeezebox.didItemToggled(this);
        this.applyToggle(collapsed);
    };
    /**
     * @param {?} collapsed
     * @return {?}
     */
    SBItemComponent.prototype.applyToggle = function (collapsed) {
        this.collapsed = collapsed;
        this.body.toggle(collapsed);
    };
    return SBItemComponent;
}());
SBItemComponent.decorators = [
    { type: core.Component, args: [{
                exportAs: 'sbItem',
                selector: 'mdb-item',
                template: "<div class=\"card\" [ngClass]=\"{'is-collapsed': collapsed, 'active': !collapsed}\"> <ng-content></ng-content> </div>"
            },] },
];
/** @nocollapse */
SBItemComponent.ctorParameters = function () { return []; };
SBItemComponent.propDecorators = {
    "collapsed": [{ type: core.Input },],
    "body": [{ type: core.ContentChild, args: [SBItemBodyComponent,] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SBItemHeadComponent = /** @class */ (function () {
    /**
     * @param {?} sbItem
     */
    function SBItemHeadComponent(sbItem) {
        this.sbItem = sbItem;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    SBItemHeadComponent.prototype.toggleClick = function (event) {
        event.preventDefault();
        this.sbItem.collapsed = !this.sbItem.collapsed;
        this.sbItem.toggle(this.sbItem.collapsed);
    };
    return SBItemHeadComponent;
}());
SBItemHeadComponent.decorators = [
    { type: core.Component, args: [{
                exportAs: 'sbItemHead',
                selector: 'mdb-item-head',
                template: "<div class=\"card-header\"> <a role=\"button\" (click)=\"toggleClick($event)\"> <h5 class=\"mb-0\"> <ng-content></ng-content> <i class=\"fa fa-angle-down rotate-icon\"></i> </h5> </a> </div>"
            },] },
];
/** @nocollapse */
SBItemHeadComponent.ctorParameters = function () { return [
    { type: SBItemComponent, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SqueezeBoxComponent = /** @class */ (function () {
    function SqueezeBoxComponent() {
        this.multiple = true;
        sbConfig.serviceInstance = this;
    }
    /**
     * @param {?} item
     * @return {?}
     */
    SqueezeBoxComponent.prototype.didItemToggled = function (item) {
        // on not multiple, it will collpase the rest of items
        if (!this.multiple) {
            this.items.toArray().forEach(function (i) {
                if (i !== item) {
                    i.applyToggle(true);
                }
            });
        }
    };
    return SqueezeBoxComponent;
}());
SqueezeBoxComponent.decorators = [
    { type: core.Component, args: [{
                exportAs: 'squeezebox',
                selector: 'mdb-squeezebox',
                template: "<div class=\"accordion\"> <ng-content></ng-content> </div>"
            },] },
];
/** @nocollapse */
SqueezeBoxComponent.ctorParameters = function () { return []; };
SqueezeBoxComponent.propDecorators = {
    "multiple": [{ type: core.Input },],
    "items": [{ type: core.ContentChildren, args: [core.forwardRef(function () { return SBItemComponent; }),] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SQUEEZEBOX_COMPONENTS = [SqueezeBoxComponent, SBItemComponent, SBItemHeadComponent, SBItemBodyComponent];
var AccordionModule = /** @class */ (function () {
    function AccordionModule() {
    }
    return AccordionModule;
}());
AccordionModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
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
var OverlayContainer = /** @class */ (function () {
    function OverlayContainer() {
    }
    /**
     * This method returns the overlay container element.  It will lazily
     * create the element the first time  it is called to facilitate using
     * the container in non-browser environments.
     * @return {?} the container element
     */
    OverlayContainer.prototype.getContainerElement = function () {
        if (!this._containerElement) {
            this._createContainer();
        }
        return this._containerElement;
    };
    /**
     * Create the overlay container element, which is simply a div
     * with the 'cdk-overlay-container' class on the document body.
     * @return {?}
     */
    OverlayContainer.prototype._createContainer = function () {
        var /** @type {?} */ container = document.createElement('div');
        container.classList.add('overlay-container');
        document.body.appendChild(container);
        this._containerElement = container;
    };
    return OverlayContainer;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Reference to an overlay that has been created with the Overlay service.
 * Used to manipulate or dispose of said overlay.
 */
var OverlayRef = /** @class */ (function () {
    /**
     * @param {?} _portalHost
     */
    function OverlayRef(_portalHost) {
        this._portalHost = _portalHost;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    OverlayRef.prototype.attach = function (portal, newestOnTop) {
        return this._portalHost.attach(portal, newestOnTop);
    };
    /**
     * Detaches an overlay from a portal.
     * @return {?} Resolves when the overlay has been detached.
     */
    OverlayRef.prototype.detach = function () {
        return this._portalHost.detach();
    };
    return OverlayRef;
}());
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
var ComponentPortal = /** @class */ (function () {
    /**
     * @param {?} component
     * @param {?} injector
     */
    function ComponentPortal(component, injector) {
        this.component = component;
        this.injector = injector;
    }
    /**
     * Attach this portal to a host.
     * @param {?} host
     * @param {?} newestOnTop
     * @return {?}
     */
    ComponentPortal.prototype.attach = function (host, newestOnTop) {
        this._attachedHost = host;
        return host.attach(this, newestOnTop);
    };
    /**
     * Detach this portal from its host
     * @return {?}
     */
    ComponentPortal.prototype.detach = function () {
        var /** @type {?} */ host = this._attachedHost;
        this._attachedHost = null;
        return host.detach();
    };
    Object.defineProperty(ComponentPortal.prototype, "isAttached", {
        /**
         * Whether this portal is attached to a host.
         * @return {?}
         */
        get: function () {
            return this._attachedHost != null;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Sets the PortalHost reference without performing `attach()`. This is used directly by
     * the PortalHost when it is performing an `attach()` or `detach()`.
     * @param {?} host
     * @return {?}
     */
    ComponentPortal.prototype.setAttachedHost = function (host) {
        this._attachedHost = host;
    };
    return ComponentPortal;
}());
/**
 * Partial implementation of PortalHost that only deals with attaching a
 * ComponentPortal
 * @abstract
 */
var BasePortalHost = /** @class */ (function () {
    function BasePortalHost() {
        this.setToNullValue = null;
    }
    /**
     * @param {?} portal
     * @param {?} newestOnTop
     * @return {?}
     */
    BasePortalHost.prototype.attach = function (portal, newestOnTop) {
        this._attachedPortal = portal;
        return this.attachComponentPortal(portal, newestOnTop);
    };
    /**
     * @return {?}
     */
    BasePortalHost.prototype.detach = function () {
        if (this._attachedPortal) {
            this._attachedPortal.setAttachedHost(null);
        }
        this._attachedPortal = null;
        if (this._disposeFn != null) {
            this._disposeFn();
            // this._disposeFn = null;
            this._disposeFn = this.setToNullValue;
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    BasePortalHost.prototype.setDisposeFn = function (fn) {
        this._disposeFn = fn;
    };
    return BasePortalHost;
}());
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
var DomPortalHost = /** @class */ (function (_super) {
    tslib_1.__extends(DomPortalHost, _super);
    /**
     * @param {?} _hostDomElement
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     */
    function DomPortalHost(_hostDomElement, _componentFactoryResolver, _appRef) {
        var _this = _super.call(this) || this;
        _this._hostDomElement = _hostDomElement;
        _this._componentFactoryResolver = _componentFactoryResolver;
        _this._appRef = _appRef;
        return _this;
    }
    /**
     * Attach the given ComponentPortal to DOM element using the ComponentFactoryResolver.
     * @template T
     * @param {?} portal Portal to be attached
     * @param {?} newestOnTop
     * @return {?}
     */
    DomPortalHost.prototype.attachComponentPortal = function (portal, newestOnTop) {
        var _this = this;
        var /** @type {?} */ componentFactory = this._componentFactoryResolver.resolveComponentFactory(portal.component);
        var /** @type {?} */ componentRef;
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
        this.setDisposeFn(function () {
            _this._appRef.detachView(componentRef.hostView);
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
    };
    /**
     * Gets the root HTMLElement for an instantiated component.
     * @param {?} componentRef
     * @return {?}
     */
    DomPortalHost.prototype._getComponentRootNode = function (componentRef) {
        return /** @type {?} */ (((componentRef.hostView)).rootNodes[0]);
    };
    return DomPortalHost;
}(BasePortalHost));
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
var Overlay = /** @class */ (function () {
    /**
     * @param {?} _overlayContainer
     * @param {?} _componentFactoryResolver
     * @param {?} _appRef
     */
    function Overlay(_overlayContainer, _componentFactoryResolver, _appRef) {
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
    Overlay.prototype.create = function (positionClass, overlayContainer) {
        // get existing pane if possible
        return this._createOverlayRef(this.getPaneElement(positionClass, overlayContainer));
    };
    /**
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?}
     */
    Overlay.prototype.getPaneElement = function (positionClass, overlayContainer) {
        if (!this._paneElements[positionClass]) {
            this._paneElements[positionClass] = this._createPaneElement(positionClass, overlayContainer);
        }
        return this._paneElements[positionClass];
    };
    /**
     * Creates the DOM element for an overlay and appends it to the overlay container.
     * @param {?} positionClass
     * @param {?=} overlayContainer
     * @return {?} Newly-created pane element
     */
    Overlay.prototype._createPaneElement = function (positionClass, overlayContainer) {
        var /** @type {?} */ pane = document.createElement('div');
        pane.id = 'toast-container';
        pane.classList.add(positionClass);
        if (!overlayContainer) {
            this._overlayContainer.getContainerElement().appendChild(pane);
        }
        else {
            overlayContainer.getContainerElement().appendChild(pane);
        }
        return pane;
    };
    /**
     * Create a DomPortalHost into which the overlay content can be loaded.
     * @param {?} pane The DOM element to turn into a portal host.
     * @return {?} A portal host for the given DOM element.
     */
    Overlay.prototype._createPortalHost = function (pane) {
        return new DomPortalHost(pane, this._componentFactoryResolver, this._appRef);
    };
    /**
     * Creates an OverlayRef for an overlay in the given DOM element.
     * @param {?} pane DOM element for the overlay
     * @return {?}
     */
    Overlay.prototype._createOverlayRef = function (pane) {
        return new OverlayRef(this._createPortalHost(pane));
    };
    return Overlay;
}());
Overlay.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
Overlay.ctorParameters = function () { return [
    { type: OverlayContainer, },
    { type: core.ComponentFactoryResolver, },
    { type: core.ApplicationRef, },
]; };
/**
 * Providers for Overlay and its related injectables.
 */
var OVERLAY_PROVIDERS = [
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
var GlobalConfig = /** @class */ (function () {
    function GlobalConfig() {
    }
    return GlobalConfig;
}());
/**
 * Everything a toast needs to launch
 */
var ToastPackage = /** @class */ (function () {
    /**
     * @param {?} toastId
     * @param {?} config
     * @param {?} message
     * @param {?} title
     * @param {?} toastType
     * @param {?} toastRef
     */
    function ToastPackage(toastId, config, message, title, toastType, toastRef) {
        this.toastId = toastId;
        this.config = config;
        this.message = message;
        this.title = title;
        this.toastType = toastType;
        this.toastRef = toastRef;
        this._onTap = new rxjs.Subject();
        this._onAction = new rxjs.Subject();
    }
    /**
     * Fired on click
     * @return {?}
     */
    ToastPackage.prototype.triggerTap = function () {
        this._onTap.next();
        this._onTap.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onTap = function () {
        return this._onTap.asObservable();
    };
    /**
     * available for use in custom toast
     * @param {?=} action
     * @return {?}
     */
    ToastPackage.prototype.triggerAction = function (action) {
        this._onAction.next(action);
        this._onAction.complete();
    };
    /**
     * @return {?}
     */
    ToastPackage.prototype.onAction = function () {
        return this._onAction.asObservable();
    };
    return ToastPackage;
}());
var tsConfig = {
    serviceInstance: new Object()
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastComponent = /** @class */ (function () {
    /**
     * @param {?} toastPackage
     * @param {?} appRef
     */
    function ToastComponent(toastPackage, appRef) {
        var _this = this;
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
        this.toastClasses = toastPackage.toastType + " " + toastPackage.config.toastClass;
        this.sub = toastPackage.toastRef.afterActivate().subscribe(function () {
            _this.activateToast();
        });
        this.sub1 = toastPackage.toastRef.manualClosed().subscribe(function () {
            _this.remove();
        });
    }
    /**
     * @return {?}
     */
    ToastComponent.prototype.ngOnDestroy = function () {
        this.sub.unsubscribe();
        this.sub1.unsubscribe();
        clearInterval(this.intervalId);
        clearTimeout(this.timeout);
    };
    /**
     * activates toast and sets timeout
     * @return {?}
     */
    ToastComponent.prototype.activateToast = function () {
        var _this = this;
        this.state = 'active';
        if (this.options.timeOut !== 0) {
            this.timeout = setTimeout(function () {
                _this.remove();
            }, this.options.timeOut);
            this.hideTime = new Date().getTime() + this.options.timeOut;
            if (this.options.progressBar) {
                this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
            }
        }
        if (this.options.onActivateTick) {
            this.appRef.tick();
        }
    };
    /**
     * updates progress bar width
     * @return {?}
     */
    ToastComponent.prototype.updateProgress = function () {
        if (this.width === 0) {
            return;
        }
        var /** @type {?} */ now = new Date().getTime();
        var /** @type {?} */ remaining = this.hideTime - now;
        this.width = (remaining / this.options.timeOut) * 100;
        if (this.width <= 0) {
            this.width = 0;
        }
    };
    /**
     * tells toastrService to remove this toast after animation time
     * @return {?}
     */
    ToastComponent.prototype.remove = function () {
        var _this = this;
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.state = 'removed';
        this.timeout = setTimeout(function () { return _this.toastService.remove(_this.toastPackage.toastId); }, 300);
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.tapToast = function () {
        if (this.state === 'removed') {
            return;
        }
        this.toastPackage.triggerTap();
        if (this.options.tapToDismiss) {
            this.remove();
        }
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.stickAround = function () {
        if (this.state === 'removed') {
            return;
        }
        clearTimeout(this.timeout);
        this.options.timeOut = 0;
        this.hideTime = 0;
        // disable progressBar
        clearInterval(this.intervalId);
        this.width = 0;
    };
    /**
     * @return {?}
     */
    ToastComponent.prototype.delayedHideToast = function () {
        var _this = this;
        if (+this.options.extendedTimeOut === 0 || this.state === 'removed') {
            return;
        }
        this.timeout = setTimeout(function () { return _this.remove(); }, this.options.extendedTimeOut);
        this.options.timeOut = +this.options.extendedTimeOut;
        this.hideTime = new Date().getTime() + this.options.timeOut;
        this.width = 100;
        if (this.options.progressBar) {
            this.intervalId = setInterval(function () { return _this.updateProgress(); }, 10);
        }
    };
    return ToastComponent;
}());
ToastComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-toast-component',
                template: "<button *ngIf=\"options.closeButton\" (click)=\"remove()\" class=\"toast-close-button\"> &times; </button> <div *ngIf=\"title\" class=\"{{options.titleClass}}\" [attr.aria-label]=\"title\"> {{title}} </div> <div *ngIf=\"message && options.enableHtml\" class=\"{{options.messageClass}}\" [innerHTML]=\"message\"> </div> <div *ngIf=\"message && !options.enableHtml\" class=\"{{options.messageClass}}\" [attr.aria-label]=\"message\"> {{message}} </div> <div *ngIf=\"options.progressBar\"> <div class=\"toast-progress\" [style.width.%]=\"width\"></div> </div>",
                animations: [
                    animations.trigger('flyInOut', [
                        animations.state('inactive', animations.style({
                            display: 'none',
                            opacity: 0
                        })),
                        animations.state('active', animations.style({ opacity: .5 })),
                        animations.state('removed', animations.style({ opacity: 0 })),
                        animations.transition('inactive => active', animations.animate('300ms ease-in')),
                        animations.transition('active => removed', animations.animate('300ms ease-in')),
                    ]),
                ],
            },] },
];
/** @nocollapse */
ToastComponent.ctorParameters = function () { return [
    { type: ToastPackage, },
    { type: core.ApplicationRef, },
]; };
ToastComponent.propDecorators = {
    "toastClasses": [{ type: core.HostBinding, args: ['class',] },],
    "state": [{ type: core.HostBinding, args: ['@flyInOut',] },],
    "tapToast": [{ type: core.HostListener, args: ['click',] },],
    "stickAround": [{ type: core.HostListener, args: ['mouseenter',] },],
    "delayedHideToast": [{ type: core.HostListener, args: ['mouseleave',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastContainerDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function ToastContainerDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    ToastContainerDirective.prototype.getContainerElement = function () {
        return this.el.nativeElement;
    };
    return ToastContainerDirective;
}());
ToastContainerDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbToastContainer]',
                exportAs: 'mdb-toast-container',
            },] },
];
/** @nocollapse */
ToastContainerDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
var ToastContainerModule = /** @class */ (function () {
    function ToastContainerModule() {
    }
    /**
     * @return {?}
     */
    ToastContainerModule.forRoot = function () {
        return {
            ngModule: ToastContainerModule,
            providers: []
        };
    };
    return ToastContainerModule;
}());
ToastContainerModule.decorators = [
    { type: core.NgModule, args: [{
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
var ToastRef = /** @class */ (function () {
    /**
     * @param {?} _overlayRef
     */
    function ToastRef(_overlayRef) {
        this._overlayRef = _overlayRef;
        /**
         * Subject for notifying the user that the toast has finished closing.
         */
        this._afterClosed = new rxjs.Subject();
        this._activate = new rxjs.Subject();
        this._manualClose = new rxjs.Subject();
    }
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClose = function () {
        this._manualClose.next();
        this._manualClose.complete();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.manualClosed = function () {
        return this._manualClose.asObservable();
    };
    /**
     * Close the toast.
     * @return {?}
     */
    ToastRef.prototype.close = function () {
        this._overlayRef.detach();
        this._afterClosed.next();
        this._afterClosed.complete();
    };
    /**
     * Gets an observable that is notified when the toast is finished closing.
     * @return {?}
     */
    ToastRef.prototype.afterClosed = function () {
        return this._afterClosed.asObservable();
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.isInactive = function () {
        return this._activate.isStopped;
    };
    /**
     * @return {?}
     */
    ToastRef.prototype.activate = function () {
        this._activate.next();
        this._activate.complete();
    };
    /**
     * Gets an observable that is notified when the toast has started opening.
     * @return {?}
     */
    ToastRef.prototype.afterActivate = function () {
        return this._activate.asObservable();
    };
    return ToastRef;
}());
/**
 * Custom injector type specifically for instantiating components with a toast.
 */
var ToastInjector = /** @class */ (function () {
    /**
     * @param {?} _toastPackage
     * @param {?} _parentInjector
     */
    function ToastInjector(_toastPackage, _parentInjector) {
        this._toastPackage = _toastPackage;
        this._parentInjector = _parentInjector;
    }
    /**
     * @param {?} token
     * @param {?=} notFoundValue
     * @return {?}
     */
    ToastInjector.prototype.get = function (token, notFoundValue) {
        if (token === ToastPackage && this._toastPackage) {
            return this._toastPackage;
        }
        return this._parentInjector.get(token, notFoundValue);
    };
    return ToastInjector;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TOAST_CONFIG = new core.InjectionToken('ToastConfig');
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var ToastService = /** @class */ (function () {
    /**
     * @param {?} toastConfig
     * @param {?} overlay
     * @param {?} _injector
     * @param {?} sanitizer
     */
    function ToastService(
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
    ToastService.prototype.show = function (message, title, override, type) {
        if (type === void 0) { type = ''; }
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * show successful toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastService.prototype.success = function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.success;
        var /** @type {?} */ type = this.toastConfig.iconClasses.success;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * show error toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastService.prototype.error = function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.error;
        var /** @type {?} */ type = this.toastConfig.iconClasses.error;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * show info toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastService.prototype.info = function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.info;
        var /** @type {?} */ type = this.toastConfig.iconClasses.info;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * show warning toast
     * @param {?} message
     * @param {?=} title
     * @param {?=} override
     * @return {?}
     */
    ToastService.prototype.warning = function (message, title, override) {
        //   const type = this.toastConfig.iconClasses.warning;
        var /** @type {?} */ type = this.toastConfig.iconClasses.warning;
        return this._buildNotification(type, message, title, this.applyConfig(override));
    };
    /**
     * Remove all or a single toast by id
     * @param {?=} toastId
     * @return {?}
     */
    ToastService.prototype.clear = function (toastId) {
        // Call every toastRef manualClose function
        var /** @type {?} */ toast;
        for (var _i = 0, _a = this.toasts; _i < _a.length; _i++) {
            toast = _a[_i];
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
    };
    /**
     * Remove and destroy a single toast by id
     * @param {?} toastId
     * @return {?}
     */
    ToastService.prototype.remove = function (toastId) {
        // const found = this._findToast(toastId);
        var /** @type {?} */ found = this._findToast(toastId);
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
            var /** @type {?} */ p = this.toasts[this.currentlyActive].toastRef;
            if (!p.isInactive()) {
                this.currentlyActive = this.currentlyActive + 1;
                p.activate();
            }
        }
        return true;
    };
    /**
     * Determines if toast message is already shown
     * @param {?} message
     * @return {?}
     */
    ToastService.prototype.isDuplicate = function (message) {
        for (var /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].message === message) {
                return true;
            }
        }
        return false;
    };
    /**
     * create a clone of global config and apply individual settings
     * @param {?=} override
     * @return {?}
     */
    ToastService.prototype.applyConfig = function (override) {
        if (override === void 0) { override = {}; }
        /**
         * @template T
         * @param {?} source
         * @param {?} defaultValue
         * @return {?}
         */
        function use(source, defaultValue) {
            return override && source !== undefined ? source : defaultValue;
        }
        var /** @type {?} */ current = Object.assign({}, this.toastConfig);
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
    };
    /**
     * Find toast object by id
     * @param {?} toastId
     * @return {?}
     */
    ToastService.prototype._findToast = function (toastId) {
        for (var /** @type {?} */ i = 0; i < this.toasts.length; i++) {
            if (this.toasts[i].toastId === toastId) {
                return { index: i, activeToast: this.toasts[i] };
            }
        }
        return null;
    };
    /**
     * Creates and attaches toast data to component
     * returns null if toast is duplicate and preventDuplicates == True
     * @param {?} toastType
     * @param {?} message
     * @param {?} title
     * @param {?} config
     * @return {?}
     */
    ToastService.prototype._buildNotification = function (toastType, message, title, config) {
        var _this = this;
        // max opened and auto dismiss = true
        if (this.toastConfig.preventDuplicates && this.isDuplicate(message)) {
            return null;
        }
        this.previousToastMessage = message;
        var /** @type {?} */ keepInactive = false;
        if (this.toastConfig.maxOpened && this.currentlyActive >= this.toastConfig.maxOpened) {
            keepInactive = true;
            if (this.toastConfig.autoDismiss) {
                this.clear(this.toasts[this.toasts.length - 1].toastId);
            }
        }
        var /** @type {?} */ overlayRef = this.overlay.create(config.positionClass, this.overlayContainer);
        this.index = this.index + 1;
        // let sanitizedMessage = message;
        var /** @type {?} */ sanitizedMessage = message;
        if (message && config.enableHtml) {
            sanitizedMessage = this.sanitizer.sanitize(core.SecurityContext.HTML, message);
        }
        var /** @type {?} */ toastRef = new ToastRef(overlayRef);
        var /** @type {?} */ toastPackage = new ToastPackage(this.index, config, sanitizedMessage, title, toastType, toastRef);
        // const ins: ActiveToast = {
        var /** @type {?} */ ins = {
            toastId: this.index,
            message: message,
            toastRef: toastRef,
            onShown: toastRef.afterActivate(),
            onHidden: toastRef.afterActivate(),
            onTap: toastPackage.onTap(),
            onAction: toastPackage.onAction(),
        };
        var /** @type {?} */ toastInjector = new ToastInjector(toastPackage, this._injector);
        var /** @type {?} */ component = new ComponentPortal(config.toastComponent, toastInjector);
        ins.portal = overlayRef.attach(component, this.toastConfig.newestOnTop);
        if (!keepInactive) {
            setTimeout(function () {
                ins.toastRef.activate();
                _this.currentlyActive = _this.currentlyActive + 1;
            });
        }
        this.toasts.push(ins);
        return ins;
    };
    return ToastService;
}());
ToastService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
ToastService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [TOAST_CONFIG,] },] },
    { type: Overlay, },
    { type: core.Injector, },
    { type: platformBrowser.DomSanitizer, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ToastModule = /** @class */ (function () {
    /**
     * @param {?} parentModule
     */
    function ToastModule(parentModule) {
        if (parentModule) {
            throw new Error('ToastModule is already loaded. It should only be imported in your application\'s main module.');
        }
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    ToastModule.forRoot = function (config) {
        return {
            ngModule: ToastModule,
            providers: [
                { provide: TOAST_CONFIG, useValue: config },
                OverlayContainer,
                Overlay,
                ToastService,
            ]
        };
    };
    return ToastModule;
}());
ToastModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                exports: [ToastComponent],
                declarations: [ToastComponent],
                entryComponents: [ToastComponent],
            },] },
];
/** @nocollapse */
ToastModule.ctorParameters = function () { return [
    { type: ToastModule, decorators: [{ type: core.Optional }, { type: core.SkipSelf },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// SideNav
var slideIn = animations.trigger('slideIn', [
    animations.state('inactive', animations.style({ opacity: 0, transform: 'translateX(-300%)' })),
    animations.state('active', animations.style({ opacity: 1, transform: 'translateX(0)' })),
    animations.transition('inactive => active', animations.animate('500ms ease')),
    animations.transition('active => inactive', animations.animate('500ms ease')),
]);
var fadeIn = animations.trigger('fadeIn', [
    animations.state('inactive', animations.style({ opacity: 0 })),
    animations.state('active', animations.style({ opacity: 1 })),
    animations.transition('inactive => active', animations.animate('500ms ease')),
    animations.transition('active => inactive', animations.animate('500ms ease')),
]);
var slideOut = animations.trigger('slideOut', [
    animations.state('inactive', animations.style({ opacity: 0, transform: 'translateX(-300%)' })),
    animations.state('active', animations.style({ opacity: 1, transform: 'translateX(0)' })),
    animations.transition('inactive => active', animations.animate('500ms ease')),
    animations.transition('active => inactive', animations.animate('500ms ease')),
]);
var flipState = animations.trigger('flipState', [
    animations.state('active', animations.style({ transform: 'rotateY(179.9deg)' })),
    animations.state('inactive', animations.style({ transform: 'rotateY(0)' })),
]);
// Rotating animation animation
var turnState = animations.trigger('turnState', [
    animations.state('active', animations.style({ transform: 'rotateY(179.9deg)' })),
    animations.state('inactive', animations.style({ transform: 'rotateY(0)' })),
]);
// Social reveal animation
var iconsState = animations.trigger('iconsState', [
    animations.state('isactive', animations.style({ visibility: 'visible', transform: 'translate(-6%)' })),
    animations.state('isnotactive', animations.style({ visibility: 'hidden', transform: 'translate(27%)' })),
    animations.transition('isactive => isnotactive', animations.animate('100ms ease-in')),
    animations.transition('isnotactive => isactive', animations.animate('200ms ease-out')),
]);
// Reveal animation animation
var socialsState = animations.trigger('socialsState', [
    animations.state('active', animations.style({ visibility: 'visible', transform: 'translateY(-100%)' })),
    animations.state('inactive', animations.style({ visibility: 'hidden', transform: 'translateY(0)' })),
    animations.transition('* => void', animations.animate('200ms ease-in')),
    animations.transition('void => *', animations.animate('200ms ease-out')),
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
var flyInOut = animations.trigger('flyInOut', [
    animations.state('inactive', animations.style({ display: 'none', opacity: 0.7 })),
    animations.state('active', animations.style({ opacity: 0.7 })),
    animations.state('removed', animations.style({ opacity: 0 })),
    animations.transition('inactive => active', animations.animate('300ms ease-in')),
    animations.transition('active => removed', animations.animate('300ms ease-in')),
]);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var CompleterListItemComponent = /** @class */ (function () {
    function CompleterListItemComponent() {
        this.parts = [];
    }
    /**
     * @return {?}
     */
    CompleterListItemComponent.prototype.ngOnInit = function () {
        if (!this.searchStr) {
            this.parts.push({ isMatch: false, text: this.text });
            return;
        }
        var /** @type {?} */ matchStr = this.text.toLowerCase();
        var /** @type {?} */ matchPos = matchStr.indexOf(this.searchStr.toLowerCase());
        var /** @type {?} */ startIndex = 0;
        while (matchPos >= 0) {
            var /** @type {?} */ matchText = this.text.slice(matchPos, matchPos + this.searchStr.length);
            if (matchPos === 0) {
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length;
            }
            else if (matchPos > 0) {
                var /** @type {?} */ matchPart = this.text.slice(startIndex, matchPos);
                this.parts.push({ isMatch: false, text: matchPart });
                this.parts.push({ isMatch: true, text: matchText });
                startIndex += this.searchStr.length + matchPart.length;
            }
            matchPos = matchStr.indexOf(this.searchStr.toLowerCase(), startIndex);
        }
        if (startIndex < this.text.length) {
            this.parts.push({ isMatch: false, text: this.text.slice(startIndex, this.text.length) });
        }
    };
    return CompleterListItemComponent;
}());
CompleterListItemComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-completer-list-item',
                template: "<span class=\"completer-list-item-holder\" [ngClass]=\"{'completer-title': type === 'title', 'completer-description': type === 'description'}\" > <span class=\"completer-list-item\" *ngFor=\"let part of parts\" [ngClass]=\"part.isMatch ? matchClass : null\">{{part.text}}</span> </span> "
            },] },
];
/** @nocollapse */
CompleterListItemComponent.propDecorators = {
    "text": [{ type: core.Input },],
    "searchStr": [{ type: core.Input },],
    "matchClass": [{ type: core.Input },],
    "type": [{ type: core.Input },],
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
var MdbCompleterDirective = /** @class */ (function () {
    function MdbCompleterDirective() {
        this.selected = new core.EventEmitter();
        this.highlighted = new core.EventEmitter();
        this.opened = new core.EventEmitter();
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
    MdbCompleterDirective.prototype.registerList = function (list) {
        this.list = list;
    };
    /**
     * @param {?} dropdown
     * @return {?}
     */
    MdbCompleterDirective.prototype.registerDropdown = function (dropdown) {
        this.dropdown = dropdown;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbCompleterDirective.prototype.onHighlighted = function (item) {
        this.highlighted.emit(item);
        this._hasHighlighted = !!item;
    };
    /**
     * @param {?} item
     * @param {?=} clearList
     * @return {?}
     */
    MdbCompleterDirective.prototype.onSelected = function (item, clearList) {
        if (clearList === void 0) { clearList = true; }
        this.selected.emit(item);
        if (item) {
            this._hasSelected = true;
        }
        if (clearList) {
            this.clear();
        }
    };
    /**
     * @param {?} term
     * @return {?}
     */
    MdbCompleterDirective.prototype.search = function (term) {
        if (this._hasSelected) {
            // this.selected.emit(null);
            this.selected.emit(this.setToNullValue);
            this._hasSelected = false;
        }
        if (this.list) {
            this.list.search(term);
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.clear = function () {
        if (this.dropdown) {
            this.dropdown.clear();
        }
        if (this.list) {
            this.list.clear();
        }
        this._hasHighlighted = false;
        this.isOpen = false;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.selectCurrent = function () {
        if (this.dropdown) {
            this.dropdown.selectCurrent();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.nextRow = function () {
        if (this.dropdown) {
            this.dropdown.nextRow();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.prevRow = function () {
        if (this.dropdown) {
            this.dropdown.prevRow();
        }
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.hasHighlighted = function () {
        return this._hasHighlighted;
    };
    /**
     * @param {?} cancel
     * @return {?}
     */
    MdbCompleterDirective.prototype.cancelBlur = function (cancel) {
        this._cancelBlur = cancel;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.isCancelBlur = function () {
        return this._cancelBlur;
    };
    /**
     * @return {?}
     */
    MdbCompleterDirective.prototype.open = function () {
        if (!this._isOpen) {
            this.isOpen = true;
            this.list.open();
        }
    };
    Object.defineProperty(MdbCompleterDirective.prototype, "isOpen", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isOpen;
        },
        /**
         * @param {?} open
         * @return {?}
         */
        set: function (open) {
            this._isOpen = open;
            this.opened.emit(this._isOpen);
            if (this.list) {
                this.list.isOpen(open);
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "autoHighlightIndex", {
        /**
         * @return {?}
         */
        get: function () {
            return this._autoHighlightIndex;
        },
        /**
         * @param {?} index
         * @return {?}
         */
        set: function (index) {
            this._autoHighlightIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbCompleterDirective.prototype, "hasSelected", {
        /**
         * @return {?}
         */
        get: function () {
            return this._hasSelected;
        },
        enumerable: true,
        configurable: true
    });
    return MdbCompleterDirective;
}());
MdbCompleterDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbCompleter]',
            },] },
];
/** @nocollapse */
MdbCompleterDirective.propDecorators = {
    "selected": [{ type: core.Output },],
    "highlighted": [{ type: core.Output },],
    "opened": [{ type: core.Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MAX_CHARS = 524288; // the default max length per the html maxlength attribute
var MIN_SEARCH_LENGTH = 3;
var PAUSE = 100;
var TEXT_SEARCHING = 'Searching...';
var TEXT_NO_RESULTS = 'No results found';
var CLEAR_TIMEOUT = 50;
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
var CompleterBaseData = /** @class */ (function (_super) {
    tslib_1.__extends(CompleterBaseData, _super);
    function CompleterBaseData() {
        return _super.call(this) || this;
    }
    /**
     * @return {?}
     */
    CompleterBaseData.prototype.cancel = function () { };
    /**
     * @param {?} searchFields
     * @return {?}
     */
    CompleterBaseData.prototype.searchFields = function (searchFields) {
        this._searchFields = searchFields;
        return this;
    };
    /**
     * @param {?} titleField
     * @return {?}
     */
    CompleterBaseData.prototype.titleField = function (titleField) {
        this._titleField = titleField;
        return this;
    };
    /**
     * @param {?} descriptionField
     * @return {?}
     */
    CompleterBaseData.prototype.descriptionField = function (descriptionField) {
        this._descriptionField = descriptionField;
        return this;
    };
    /**
     * @param {?} imageField
     * @return {?}
     */
    CompleterBaseData.prototype.imageField = function (imageField) {
        this._imageField = imageField;
        return this;
    };
    /**
     * @param {?} data
     * @return {?}
     */
    CompleterBaseData.prototype.convertToItem = function (data) {
        // let image: string = null;
        var /** @type {?} */ image = null;
        var /** @type {?} */ formattedText;
        // let formattedDesc: string;
        var /** @type {?} */ formattedDesc;
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
    };
    /**
     * @param {?} data
     * @param {?} term
     * @return {?}
     */
    CompleterBaseData.prototype.extractMatches = function (data, term) {
        var _this = this;
        var /** @type {?} */ matches = [];
        var /** @type {?} */ searchFields = this._searchFields ? this._searchFields.split(',') : null;
        if (this._searchFields !== null && this._searchFields !== undefined && term !== '') {
            matches = data.filter(function (item) {
                var /** @type {?} */ values = searchFields ?
                    searchFields.map(function (searchField) { return _this.extractValue(item, searchField); }).filter(function (value) { return !!value; }) : [item];
                return values.some(function (value) { return value.toString().toLowerCase().indexOf(term.toString().toLowerCase()) >= 0; });
            });
        }
        else {
            matches = data;
        }
        return matches;
    };
    /**
     * @param {?} item
     * @return {?}
     */
    CompleterBaseData.prototype.extractTitle = function (item) {
        var _this = this;
        // split title fields and run extractValue for each and join with ' '
        return this._titleField.split(',')
            .map(function (field) {
            return _this.extractValue(item, field);
        })
            .reduce(function (acc, titlePart) { return acc ? acc + " " + titlePart : titlePart; });
    };
    /**
     * @param {?} obj
     * @param {?} key
     * @return {?}
     */
    CompleterBaseData.prototype.extractValue = function (obj, key) {
        var /** @type {?} */ keys;
        var /** @type {?} */ result;
        if (key) {
            keys = key.split('.');
            result = obj;
            for (var /** @type {?} */ i = 0; i < keys.length; i++) {
                if (result) {
                    result = result[keys[i]];
                }
            }
        }
        else {
            result = obj;
        }
        return result;
    };
    /**
     * @param {?} matches
     * @return {?}
     */
    CompleterBaseData.prototype.processResults = function (matches) {
        var /** @type {?} */ i;
        var /** @type {?} */ results = [];
        if (matches && matches.length > 0) {
            for (i = 0; i < matches.length; i++) {
                var /** @type {?} */ item = this.convertToItem(matches[i]);
                if (item) {
                    results.push(item);
                }
            }
        }
        return results;
    };
    return CompleterBaseData;
}(rxjs.Subject));
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LocalData = /** @class */ (function (_super) {
    tslib_1.__extends(LocalData, _super);
    function LocalData() {
        return _super.call(this) || this;
    }
    /**
     * @param {?} data
     * @return {?}
     */
    LocalData.prototype.data = function (data) {
        var _this = this;
        if (data instanceof rxjs.Observable) {
            ((data)).subscribe(function (res) {
                _this._data = res;
                if (_this.savedTerm) {
                    _this.search(_this.savedTerm);
                }
            });
        }
        else {
            this._data = /** @type {?} */ (data);
        }
        return this;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    LocalData.prototype.search = function (term) {
        if (!this._data) {
            this.savedTerm = term;
        }
        else {
            this.savedTerm = null;
            var /** @type {?} */ matches = this.extractMatches(this._data, term);
            this.next(this.processResults(matches));
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    LocalData.prototype.convertToItem = function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return LocalData;
}(CompleterBaseData));
LocalData.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
LocalData.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RemoteData = /** @class */ (function (_super) {
    tslib_1.__extends(RemoteData, _super);
    /**
     * @param {?} http
     */
    function RemoteData(http$$1) {
        var _this = _super.call(this) || this;
        _this.http = http$$1;
        _this.setToNullValue = null;
        _this._urlFormater = _this.setToNullValue;
        _this._dataField = null;
        return _this;
    }
    /**
     * @param {?} remoteUrl
     * @return {?}
     */
    RemoteData.prototype.remoteUrl = function (remoteUrl) {
        this._remoteUrl = remoteUrl;
        return this;
    };
    /**
     * @param {?} urlFormater
     * @return {?}
     */
    RemoteData.prototype.urlFormater = function (urlFormater) {
        this._urlFormater = urlFormater;
    };
    /**
     * @param {?} dataField
     * @return {?}
     */
    RemoteData.prototype.dataField = function (dataField) {
        this._dataField = dataField;
    };
    /**
     * @deprecated Please use the requestOptions to pass headers with the search request
     * @param {?} headers
     * @return {?}
     */
    RemoteData.prototype.headers = function (headers) {
        this._headers = headers;
    };
    /**
     * @param {?} requestOptions
     * @return {?}
     */
    RemoteData.prototype.requestOptions = function (requestOptions) {
        this._requestOptions = requestOptions;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    RemoteData.prototype.search = function (term) {
        var _this = this;
        this.cancel();
        // let params = {};
        var /** @type {?} */ url = '';
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
            this._requestOptions = new http.RequestOptions();
            this._requestOptions.headers = this._headers || new http.Headers();
        }
        this.remoteSearch = this.http.get(url, this._requestOptions).pipe(operators.map(function (res) { return res.json(); }), operators.map(function (data) {
            var /** @type {?} */ matches = _this.extractValue(data, _this._dataField);
            return _this.extractMatches(matches, term);
        }), operators.map(function (matches) {
            var /** @type {?} */ results = _this.processResults(matches);
            _this.next(results);
            return results;
        }), operators.catchError(function (err) {
            _this.error(err);
            // return null;
            return _this.setToNullValue;
        }))
            .subscribe();
    };
    /**
     * @return {?}
     */
    RemoteData.prototype.cancel = function () {
        if (this.remoteSearch) {
            this.remoteSearch.unsubscribe();
        }
    };
    /**
     * @param {?} data
     * @return {?}
     */
    RemoteData.prototype.convertToItem = function (data) {
        return _super.prototype.convertToItem.call(this, data);
    };
    return RemoteData;
}(CompleterBaseData));
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CompleterService = /** @class */ (function () {
    /**
     * @param {?} localDataFactory
     * @param {?} remoteDataFactory
     */
    function CompleterService(localDataFactory, 
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
    CompleterService.prototype.local = function (data, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ''; }
        if (titleField === void 0) { titleField = ''; }
        var /** @type {?} */ localData = this.localDataFactory();
        return localData
            .data(data)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    /**
     * @param {?} url
     * @param {?=} searchFields
     * @param {?=} titleField
     * @return {?}
     */
    CompleterService.prototype.remote = function (url, searchFields, titleField) {
        if (searchFields === void 0) { searchFields = ''; }
        if (titleField === void 0) { titleField = ''; }
        var /** @type {?} */ remoteData = this.remoteDataFactory();
        return remoteData
            .remoteUrl(url)
            .searchFields(searchFields)
            .titleField(titleField);
    };
    return CompleterService;
}());
CompleterService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
CompleterService.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [LocalData,] },] },
    { type: undefined, decorators: [{ type: core.Inject, args: [RemoteData,] },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var noop = function () { };
var COMPLETER_CONTROL_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return CompleterComponent; }),
    multi: true
};
var CompleterComponent = /** @class */ (function () {
    /**
     * @param {?} completerService
     * @param {?} renderer
     */
    function CompleterComponent(completerService, renderer) {
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
        this.selected = new core.EventEmitter();
        this.highlighted = new core.EventEmitter();
        this.blur = new core.EventEmitter();
        this.focusEvent = new core.EventEmitter();
        this.opened = new core.EventEmitter();
        this.keyup = new core.EventEmitter();
        this.keydown = new core.EventEmitter();
        this.searchStr = '';
        this.control = new forms.FormControl('');
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
    CompleterComponent.prototype.onkeyup = function (event) {
        if (event.target.value !== '') {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'visible');
        }
        else {
            this.renderer.setStyle(event.target.nextElementSibling, 'visibility', 'hidden');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onclick = function (event) {
        if (event.target.classList.contains('mdb-autocomplete-clear')) {
            event.target.previousElementSibling.value = '';
            this.searchStr = '';
            this.renderer.setStyle(event.target, 'visibility', 'hidden');
        }
    };
    Object.defineProperty(CompleterComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () { return this.searchStr; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v !== this.searchStr) {
                this.searchStr = v;
            }
            // Propagate the change in any case
            this._onChangeCallback(v);
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngAfterViewInit = function () {
        if (this.autofocus) {
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngAfterViewChecked = function () {
        if (this._focus) {
            this.mdbInput.nativeElement.focus();
            this._focus = false;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onTouched = function () {
        this._onTouchedCallback();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterComponent.prototype.writeValue = function (value) {
        this.searchStr = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterComponent.prototype.registerOnChange = function (fn) {
        this._onChangeCallback = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    CompleterComponent.prototype.registerOnTouched = function (fn) {
        this._onTouchedCallback = fn;
    };
    Object.defineProperty(CompleterComponent.prototype, "datasource", {
        /**
         * @param {?} source
         * @return {?}
         */
        set: function (source) {
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
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textNoResults", {
        /**
         * @param {?} text
         * @return {?}
         */
        set: function (text) {
            if (this._textNoResults !== text) {
                this._textNoResults = text;
                this.displayNoResults = this._textNoResults && this._textNoResults !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CompleterComponent.prototype, "textSearching", {
        /**
         * @param {?} text
         * @return {?}
         */
        set: function (text) {
            if (this._textSearching !== text) {
                this._textSearching = text;
                this.displaySearching = this._textSearching && this._textSearching !== 'false';
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CompleterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.completer.selected.subscribe(function (item) {
            _this.selected.emit(item);
        });
        this.completer.highlighted.subscribe(function (item) {
            _this.highlighted.emit(item);
        });
        this.completer.opened.subscribe(function (isOpen) {
            _this._open = isOpen;
            _this.opened.emit(isOpen);
        });
        if (this.initialValue) {
            // <- start workaround
            this.searchStr = this.initialValue; //
            this.onFocus(); // fix label
        } // <- end workaround
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onBlur = function () {
        this.blur.emit();
        this.onTouched();
        if (this.searchStr === undefined || this.searchStr === '') {
            this.focused = false;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.onFocus = function () {
        this.focusEvent.emit();
        this.onTouched();
        this.focused = true;
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onKeyup = function (event) {
        this.keyup.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CompleterComponent.prototype.onKeydown = function (event) {
        this.keydown.emit(event);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    CompleterComponent.prototype.onChange = function (value) {
        this.value = value;
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.open = function () {
        this.completer.open();
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.close = function () {
        this.completer.clear();
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.focus = function () {
        if (this.mdbInput) {
            this.mdbInput.nativeElement.focus();
        }
        else {
            this._focus = true;
        }
    };
    /**
     * @return {?}
     */
    CompleterComponent.prototype.isOpen = function () {
        return this._open;
    };
    return CompleterComponent;
}());
CompleterComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-completer',
                template: "<div class=\"completer-holder md-form\" mdbCompleter> <input #mdbInput [attr.id]=\"inputId.length > 0 ? inputId : null\" type=\"search\" class=\"completer-input form-control mdb-autocomplete\" mdbInput [ngClass]=\"inputClass\" [(ngModel)]=\"searchStr\" (ngModelChange)=\"onChange($event)\" [attr.name]=\"inputName\" [placeholder]=\"placeholder\" [attr.maxlength]=\"maxChars\" [tabindex]=\"fieldTabindex\" [disabled]=\"disableInput\" [clearSelected]=\"clearSelected\" [clearUnselected]=\"clearUnselected\" [overrideSuggested]=\"overrideSuggested\" [openOnFocus]=\"openOnFocus\" [fillHighlighted]=\"fillHighlighted\" (blur)=\"onBlur()\" (focus)=\"onFocus()\" (keyup)=\"onKeyup($event)\" (keydown)=\"onKeydown($event)\" autocomplete=\"off\" autocorrect=\"off\" autocapitalize=\"off\" /> <button class=\"mdb-autocomplete-clear\"> <svg fill=\"#000000\" height=\"24\" viewBox=\"0 0 24 24\" width=\"24\" xmlns=\"https://www.w3.org/2000/svg\"> <path d=\"M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\" /> <path d=\"M0 0h24v24H0z\" fill=\"none\" /> </svg> </button> <label [ngClass]=\"{'active': focused}\">{{ label }}</label> <div class=\"completer-dropdown-holder\" *mdbList=\"dataService; minSearchLength: minSearchLength; pause: pause; autoMatch: autoMatch; initialValue: initialValue; autoHighlight: autoHighlight; let items = results; let searchActive = searching; let isInitialized = searchInitialized; let isOpen = isOpen;\"> <div class=\"completer-dropdown\" mdbDropdown *ngIf=\"isInitialized && isOpen && ((items.length > 0 || displayNoResults) || (searchActive && displaySearching))\"> <div *ngIf=\"searchActive && displaySearching\" class=\"completer-searching\">{{_textSearching}}</div> <div *ngIf=\"!searchActive && (!items || items.length === 0)\" class=\"completer-no-results\">{{_textNoResults}}</div> <div class=\"completer-row-wrapper\" *ngFor=\"let item of items; let rowIndex=index\"> <div class=\"completer-row\" [mdbRow]=\"rowIndex\" [dataItem]=\"item\"> <div *ngIf=\"item.image || item.image === ''\" class=\"completer-image-holder\"> <img *ngIf=\"item.image != ''\" src=\"{{item.image}}\" class=\"completer-image\" /> <div *ngIf=\"item.image === ''\" class=\"completer-image-default\"></div> </div> <div class=\"completer-item-text\" [ngClass]=\"{'completer-item-text-image': item.image || item.image === '' }\"> <mdb-completer-list-item class=\"completer-title\" [text]=\"item.title\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'title'\"></mdb-completer-list-item> <mdb-completer-list-item *ngIf=\"item.description && item.description != ''\" class=\"completer-description\" [text]=\"item.description\" [matchClass]=\"matchClass\" [searchStr]=\"searchStr\" [type]=\"'description'\"> </mdb-completer-list-item> </div> </div> </div> </div> </div> </div> ",
                providers: [COMPLETER_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
CompleterComponent.ctorParameters = function () { return [
    { type: CompleterService, },
    { type: core.Renderer2, },
]; };
CompleterComponent.propDecorators = {
    "dataService": [{ type: core.Input },],
    "inputName": [{ type: core.Input },],
    "inputId": [{ type: core.Input },],
    "pause": [{ type: core.Input },],
    "minSearchLength": [{ type: core.Input },],
    "maxChars": [{ type: core.Input },],
    "overrideSuggested": [{ type: core.Input },],
    "clearSelected": [{ type: core.Input },],
    "clearUnselected": [{ type: core.Input },],
    "fillHighlighted": [{ type: core.Input },],
    "placeholder": [{ type: core.Input },],
    "matchClass": [{ type: core.Input },],
    "fieldTabindex": [{ type: core.Input },],
    "autoMatch": [{ type: core.Input },],
    "disableInput": [{ type: core.Input },],
    "inputClass": [{ type: core.Input },],
    "autofocus": [{ type: core.Input },],
    "openOnFocus": [{ type: core.Input },],
    "initialValue": [{ type: core.Input },],
    "autoHighlight": [{ type: core.Input },],
    "label": [{ type: core.Input },],
    "selected": [{ type: core.Output },],
    "highlighted": [{ type: core.Output },],
    "blur": [{ type: core.Output },],
    "focusEvent": [{ type: core.Output },],
    "opened": [{ type: core.Output },],
    "keyup": [{ type: core.Output },],
    "keydown": [{ type: core.Output },],
    "completer": [{ type: core.ViewChild, args: [MdbCompleterDirective,] },],
    "mdbInput": [{ type: core.ViewChild, args: ['mdbInput',] },],
    "onkeyup": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
    "onclick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "datasource": [{ type: core.Input },],
    "textNoResults": [{ type: core.Input },],
    "textSearching": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var CtrRowItem = /** @class */ (function () {
    /**
     * @param {?} row
     * @param {?} index
     */
    function CtrRowItem(row, index) {
        this.row = row;
        this.index = index;
    }
    return CtrRowItem;
}());
var MdbDropdownDirective = /** @class */ (function () {
    /**
     * @param {?} completer
     * @param {?} el
     */
    function MdbDropdownDirective(completer, el) {
        this.completer = completer;
        this.el = el;
        this.setToNullValue = null;
        this.rows = [];
        this.completer.registerDropdown(this);
    }
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngOnInit = function () {
        var /** @type {?} */ css = getComputedStyle(this.el.nativeElement);
        this.isScrollOn = css.maxHeight && css.overflowY === 'auto';
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngOnDestroy = function () {
        // this.completer.registerDropdown(null);
        this.completer.registerDropdown(this.setToNullValue);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        var /** @type {?} */ autoHighlightIndex = this.completer.autoHighlightIndex;
        if (autoHighlightIndex) {
            setTimeout(function () {
                _this.highlightRow(autoHighlightIndex);
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.onMouseDown = function () {
        var _this = this;
        // Support for canceling blur on IE (issue #158)
        this.completer.cancelBlur(true);
        setTimeout(function () {
            _this.completer.cancelBlur(false);
        }, 0);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    MdbDropdownDirective.prototype.registerRow = function (row) {
        this.rows.push(row);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    MdbDropdownDirective.prototype.highlightRow = function (index) {
        var /** @type {?} */ highlighted = this.rows.find(function (row) { return row.index === index; });
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
            var /** @type {?} */ rowTop = this.dropdownRowTop();
            if (rowTop < 0) {
                this.dropdownScrollTopTo(rowTop - 1);
            }
            else {
                var /** @type {?} */ row = this.currHighlighted.row.getNativeElement();
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
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.clear = function () {
        this.rows = [];
    };
    /**
     * @param {?} item
     * @return {?}
     */
    MdbDropdownDirective.prototype.onSelected = function (item) {
        this.completer.onSelected(item);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.selectCurrent = function () {
        if (this.currHighlighted) {
            this.onSelected(this.currHighlighted.row.getDataItem());
        }
        else if (this.rows.length > 0) {
            this.onSelected(this.rows[0].row.getDataItem());
        }
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.nextRow = function () {
        var /** @type {?} */ nextRowIndex = 0;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index + 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.prevRow = function () {
        var /** @type {?} */ nextRowIndex = -1;
        if (this.currHighlighted) {
            nextRowIndex = this.currHighlighted.index - 1;
        }
        this.highlightRow(nextRowIndex);
    };
    /**
     * @param {?} offset
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownScrollTopTo = function (offset) {
        this.el.nativeElement.scrollTop = this.el.nativeElement.scrollTop + offset;
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownRowTop = function () {
        return this.currHighlighted.row.getNativeElement().getBoundingClientRect().top -
            (this.el.nativeElement.getBoundingClientRect().top +
                // parseInt(getComputedStyle(this.el.nativeElement).paddingTop, 10));
                parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).paddingTop), 10));
    };
    /**
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownHeight = function () {
        return this.el.nativeElement.getBoundingClientRect().top +
            // parseInt(getComputedStyle(this.el.nativeElement).maxHeight, 10);
            parseInt(/** @type {?} */ (getComputedStyle(this.el.nativeElement).maxHeight), 10);
    };
    /**
     * @param {?} row
     * @return {?}
     */
    MdbDropdownDirective.prototype.dropdownRowOffsetHeight = function (row) {
        var /** @type {?} */ css = getComputedStyle(row);
        return row.offsetHeight +
            // parseInt(css.marginTop, 10) + parseInt(css.marginBottom, 10);
            parseInt(/** @type {?} */ (css.marginTop), 10) + parseInt(/** @type {?} */ (css.marginBottom), 10);
    };
    return MdbDropdownDirective;
}());
MdbDropdownDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDropdown]',
            },] },
];
/** @nocollapse */
MdbDropdownDirective.ctorParameters = function () { return [
    { type: MdbCompleterDirective, decorators: [{ type: core.Host },] },
    { type: core.ElementRef, },
]; };
MdbDropdownDirective.propDecorators = {
    "onMouseDown": [{ type: core.HostListener, args: ['mousedown', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// keyboard events
var KEY_DW = 40;
var KEY_RT = 39;
var KEY_UP = 38;
var KEY_LF = 37;
var KEY_ES = 27;
var KEY_EN = 13;
var KEY_TAB = 9;
var MdbInputCompleteDirective = /** @class */ (function () {
    /**
     * @param {?} completer
     * @param {?} tempngModel
     * @param {?} el
     */
    function MdbInputCompleteDirective(completer, tempngModel, el) {
        var _this = this;
        this.completer = completer;
        this.tempngModel = tempngModel;
        this.el = el;
        this.clearSelected = false;
        this.clearUnselected = false;
        this.overrideSuggested = false;
        this.fillHighlighted = true;
        this.openOnFocus = false;
        this.ngModelChange = new core.EventEmitter();
        this._searchStr = '';
        this._displayStr = '';
        this.blurTimer = null;
        this.ngModel = this.tempngModel;
        this.completer.selected.subscribe(function (item) {
            if (!item) {
                return;
            }
            if (_this.clearSelected) {
                _this.searchStr = '';
            }
            else {
                _this.searchStr = item.title;
            }
            _this.ngModelChange.emit(_this.searchStr);
        });
        this.completer.highlighted.subscribe(function (item) {
            if (_this.fillHighlighted) {
                if (item) {
                    _this._displayStr = item.title;
                    _this.ngModelChange.emit(item.title);
                }
                else {
                    _this._displayStr = _this.searchStr;
                    _this.ngModelChange.emit(_this.searchStr);
                }
            }
        });
        // this.ngModel.valueChanges.subscribe(value => {
        this.ngModel.valueChanges.subscribe(function (value) {
            if (!isNil(value) && _this._displayStr !== value) {
                if (_this.searchStr !== value) {
                    _this.completer.search(value);
                }
                _this.searchStr = value;
            }
        });
    }
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.keyupHandler = function (event) {
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.keydownHandler = function (event) {
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
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.onBlur = function () {
        var _this = this;
        // Check if we need to cancel Blur for IE
        if (this.completer.isCancelBlur()) {
            setTimeout(function () {
                // get the focus back
                _this.el.nativeElement.focus();
            }, 0);
            return;
        }
        this.blurTimer = rxjs.timer(200).subscribe(function () {
            _this.blurTimer.unsubscribe();
            _this.blurTimer = null;
            if (_this.overrideSuggested) {
                _this.completer.onSelected({ title: _this.searchStr, originalObject: null });
            }
            else {
                if (_this.clearUnselected && !_this.completer.hasSelected) {
                    _this.searchStr = '';
                    _this.el.nativeElement.value = '';
                }
                else {
                    _this.restoreSearchValue();
                }
            }
            _this.completer.clear();
        });
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.onfocus = function () {
        if (this.blurTimer) {
            this.blurTimer.unsubscribe();
            this.blurTimer = null;
        }
        if (this.openOnFocus) {
            this.completer.open();
        }
    };
    Object.defineProperty(MdbInputCompleteDirective.prototype, "searchStr", {
        /**
         * @return {?}
         */
        get: function () {
            return this._searchStr;
        },
        /**
         * @param {?} term
         * @return {?}
         */
        set: function (term) {
            this._searchStr = term;
            this._displayStr = term;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.handleSelection = function () {
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
    };
    /**
     * @return {?}
     */
    MdbInputCompleteDirective.prototype.restoreSearchValue = function () {
        if (this.fillHighlighted) {
            if (this._displayStr !== this.searchStr) {
                this._displayStr = this.searchStr;
                this.ngModelChange.emit(this.searchStr);
            }
        }
    };
    return MdbInputCompleteDirective;
}());
MdbInputCompleteDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbInput]',
            },] },
];
/** @nocollapse */
MdbInputCompleteDirective.ctorParameters = function () { return [
    { type: MdbCompleterDirective, decorators: [{ type: core.Host },] },
    { type: forms.NgModel, },
    { type: core.ElementRef, },
]; };
MdbInputCompleteDirective.propDecorators = {
    "clearSelected": [{ type: core.Input, args: ['clearSelected',] },],
    "clearUnselected": [{ type: core.Input, args: ['clearUnselected',] },],
    "overrideSuggested": [{ type: core.Input, args: ['overrideSuggested',] },],
    "fillHighlighted": [{ type: core.Input, args: ['fillHighlighted',] },],
    "openOnFocus": [{ type: core.Input, args: ['openOnFocus',] },],
    "ngModelChange": [{ type: core.Output },],
    "keyupHandler": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
    "keydownHandler": [{ type: core.HostListener, args: ['keydown', ['$event'],] },],
    "onBlur": [{ type: core.HostListener, args: ['blur', ['$event'],] },],
    "onfocus": [{ type: core.HostListener, args: ['focus', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// import { catchError } from 'rxjs/operators';
var CtrListContext = /** @class */ (function () {
    /**
     * @param {?} results
     * @param {?} searching
     * @param {?} searchInitialized
     * @param {?} isOpen
     */
    function CtrListContext(results, searching, searchInitialized, isOpen) {
        this.results = results;
        this.searching = searching;
        this.searchInitialized = searchInitialized;
        this.isOpen = isOpen;
    }
    return CtrListContext;
}());
var MdbListDirective = /** @class */ (function () {
    /**
     * @param {?} tmpCompleter
     * @param {?} templateRef
     * @param {?} viewContainer
     * @param {?} cd
     */
    function MdbListDirective(
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
    MdbListDirective.prototype.ngOnInit = function () {
        this.completer.registerList(this);
        this.viewContainer.createEmbeddedView(this.templateRef, new CtrListContext([], false, false, false));
    };
    Object.defineProperty(MdbListDirective.prototype, "dataService", {
        /**
         * @param {?} newService
         * @return {?}
         */
        set: function (newService) {
            var _this = this;
            this._dataService = newService;
            if (this._dataService) {
                this._dataService
                    .subscribe(function (results) {
                    try {
                        _this.ctx.searchInitialized = true;
                        _this.ctx.searching = false;
                        _this.ctx.results = results;
                        if (_this.mdbListAutoMatch && results.length === 1 && results[0].title && !isNil(_this.term) &&
                            results[0].title.toLocaleLowerCase() === _this.term.toLocaleLowerCase()) {
                            // Do automatch
                            _this.completer.onSelected(results[0]);
                        }
                        if (_this._initialValue) {
                            _this.initialValue = _this._initialValue;
                            // this._initialValue = null;
                            _this._initialValue = _this.setToNullValue;
                        }
                        if (_this.mdbListAutoHighlight) {
                            _this.completer.autoHighlightIndex = _this.getBestMatchIndex();
                        }
                        _this.refreshTemplate();
                    }
                    catch (err) {
                    }
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbListDirective.prototype, "initialValue", {
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            var _this = this;
            if (this._dataService && typeof this._dataService.convertToItem === 'function') {
                setTimeout(function () {
                    var /** @type {?} */ initialItem = _this._dataService.convertToItem(value);
                    if (initialItem) {
                        _this.completer.onSelected(initialItem, false);
                    }
                });
            }
            else if (!this._dataService) {
                this._initialValue = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    MdbListDirective.prototype.search = function (term) {
        var _this = this;
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
            this.searchTimer = rxjs.timer(this.mdbListPause).subscribe(function () {
                try {
                    _this.searchTimerComplete(term);
                }
                catch (err) {
                }
            });
        }
        else if (!isNil(term) && term.length < this.mdbListMinSearchLength) {
            this.clear();
        }
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.clear = function () {
        var _this = this;
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
        }
        this.clearTimer = rxjs.timer(CLEAR_TIMEOUT).subscribe(function () {
            _this._clear();
        });
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.open = function () {
        if (!this.ctx.searchInitialized) {
            this.search('');
        }
        this.refreshTemplate();
    };
    /**
     * @param {?} open
     * @return {?}
     */
    MdbListDirective.prototype.isOpen = function (open) {
        this.ctx.isOpen = open;
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype._clear = function () {
        if (this.searchTimer) {
            this.searchTimer.unsubscribe();
            this.searchTimer = null;
        }
        if (this.dataService) {
            this.dataService.cancel();
        }
        this.viewContainer.clear();
    };
    /**
     * @param {?} term
     * @return {?}
     */
    MdbListDirective.prototype.searchTimerComplete = function (term) {
        // Begin the search
        if (isNil(term) || term.length < this.mdbListMinSearchLength) {
            this.ctx.searching = false;
            return;
        }
        this.term = term;
        this._dataService.search(term);
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.refreshTemplate = function () {
        // Recreate the template
        this.viewContainer.clear();
        if (this.ctx.results && this.ctx.isOpen) {
            this.viewContainer.createEmbeddedView(this.templateRef, this.ctx);
        }
        this.cd.markForCheck();
    };
    /**
     * @return {?}
     */
    MdbListDirective.prototype.getBestMatchIndex = function () {
        var _this = this;
        if (!this.ctx.results) {
            return null;
        }
        // First try to find the exact term
        var /** @type {?} */ bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase() === _this.term.toLocaleLowerCase(); });
        // If not try to find the first item that starts with the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().startsWith(_this.term.toLocaleLowerCase()); });
        }
        // If not try to find the first item that includes the term
        if (bestMatch < 0) {
            bestMatch = this.ctx.results.findIndex(function (item) { return item.title.toLowerCase().includes(_this.term.toLocaleLowerCase()); });
        }
        return bestMatch < 0 ? null : bestMatch;
    };
    return MdbListDirective;
}());
MdbListDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbList]',
            },] },
];
/** @nocollapse */
MdbListDirective.ctorParameters = function () { return [
    { type: MdbCompleterDirective, decorators: [{ type: core.Host },] },
    { type: core.TemplateRef, },
    { type: core.ViewContainerRef, },
    { type: core.ChangeDetectorRef, },
]; };
MdbListDirective.propDecorators = {
    "mdbListMinSearchLength": [{ type: core.Input },],
    "mdbListPause": [{ type: core.Input },],
    "mdbListAutoMatch": [{ type: core.Input },],
    "mdbListAutoHighlight": [{ type: core.Input },],
    "dataService": [{ type: core.Input, args: ['mdbList',] },],
    "initialValue": [{ type: core.Input, args: ['mdbListInitialValue',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MdbRowDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} dropdown
     */
    function MdbRowDirective(el, renderer, dropdown) {
        this.el = el;
        this.renderer = renderer;
        this.dropdown = dropdown;
        this.selected = false;
    }
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.ngOnInit = function () {
        this.dropdown.registerRow(new CtrRowItem(this, this._rowIndex));
    };
    Object.defineProperty(MdbRowDirective.prototype, "mdbRow", {
        /**
         * @param {?} index
         * @return {?}
         */
        set: function (index) {
            this._rowIndex = index;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdbRowDirective.prototype, "dataItem", {
        /**
         * @param {?} item
         * @return {?}
         */
        set: function (item) {
            this._item = item;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.onClick = function () {
        this.dropdown.onSelected(this._item);
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.onMouseEnter = function () {
        this.dropdown.highlightRow(this._rowIndex);
    };
    /**
     * @param {?} selected
     * @return {?}
     */
    MdbRowDirective.prototype.setHighlighted = function (selected) {
        this.selected = selected;
        if (this.selected) {
            this.renderer.addClass(this.el.nativeElement, 'completer-selected-row');
        }
        else if (!this.selected) {
            this.renderer.removeClass(this.el.nativeElement, 'completer-selected-row');
        }
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.getNativeElement = function () {
        return this.el.nativeElement;
    };
    /**
     * @return {?}
     */
    MdbRowDirective.prototype.getDataItem = function () {
        return this._item;
    };
    return MdbRowDirective;
}());
MdbRowDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbRow]',
            },] },
];
/** @nocollapse */
MdbRowDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: MdbDropdownDirective, decorators: [{ type: core.Host },] },
]; };
MdbRowDirective.propDecorators = {
    "mdbRow": [{ type: core.Input },],
    "dataItem": [{ type: core.Input },],
    "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "onMouseEnter": [{ type: core.HostListener, args: ['mouseenter', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function localDataFactory() {
    return function () {
        return new LocalData();
    };
}
/**
 * @param {?} http
 * @return {?}
 */
function remoteDataFactory(http$$1) {
    return function () {
        return new RemoteData(http$$1);
    };
}
var LocalDataFactoryProvider = { provide: LocalData, useFactory: localDataFactory };
var RemoteDataFactoryProvider = { provide: RemoteData, useFactory: remoteDataFactory, deps: [http.Http] };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var AutocompleteModule = /** @class */ (function () {
    function AutocompleteModule() {
    }
    return AutocompleteModule;
}());
AutocompleteModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    common.CommonModule,
                    forms.FormsModule,
                    http.HttpModule
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
var CardRevealComponent = /** @class */ (function () {
    function CardRevealComponent() {
    }
    /**
     * @return {?}
     */
    CardRevealComponent.prototype.toggle = function () {
        this.show = !this.show;
        this.socials = (this.socials === 'active') ? 'inactive' : 'active';
    };
    return CardRevealComponent;
}());
CardRevealComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card-reveal',
                template: "<div class=\"card-overflow col-12\"> <div class=\"card-front\"> <ng-content select=\"card-front\" ></ng-content> </div> <div class=\"card-revealed\" *ngIf=\"show\" [@socialsState]=\"socials\" > <ng-content select=\"card-revealed\" ></ng-content> </div> </div> ",
                animations: [socialsState]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CardRotatingComponent = /** @class */ (function () {
    function CardRotatingComponent() {
        this.rotate = false;
    }
    /**
     * @return {?}
     */
    CardRotatingComponent.prototype.toggle = function () {
        this.rotate = !this.rotate;
    };
    return CardRotatingComponent;
}());
CardRotatingComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-card-rotating',
                template: "<div class=\"flip-container card-wrapper\" [ngClass]=\"{'rotate': rotate}\"> <div class=\"flipper card-rotating effect__click tp-box\"> <ng-content></ng-content> </div> </div> "
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CardsModule = /** @class */ (function () {
    function CardsModule() {
    }
    /**
     * @return {?}
     */
    CardsModule.forRoot = function () {
        return { ngModule: CardsModule, providers: [] };
    };
    return CardsModule;
}());
CardsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [CardRevealComponent, CardRotatingComponent],
                exports: [CardRevealComponent, CardRotatingComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var KeyCode = { backspace: 8, delete: 46, };
KeyCode[KeyCode.backspace] = "backspace";
KeyCode[KeyCode.delete] = "delete";
var InputAutoFillDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} rndr
     */
    function InputAutoFillDirective(el, rndr) {
        this.el = el;
        this.rndr = rndr;
    }
    /**
     * @param {?} evt
     * @return {?}
     */
    InputAutoFillDirective.prototype.onKeyUp = function (evt) {
        if (!this.opts.enabled || evt.keyCode === KeyCode.backspace || evt.keyCode === KeyCode.delete) {
            return;
        }
        var /** @type {?} */ val = this.getInputValue();
        var /** @type {?} */ ews = this.endsWith(val, this.opts.separator);
        var /** @type {?} */ parts = val.split(this.opts.separator);
        var /** @type {?} */ idx = parts.length - 1;
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
    };
    /**
     * @param {?} val
     * @param {?} suffix
     * @return {?}
     */
    InputAutoFillDirective.prototype.endsWith = function (val, suffix) {
        return val.indexOf(suffix, val.length - suffix.length) !== -1;
    };
    /**
     * @param {?} str
     * @param {?} idx
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.insertPos = function (str, idx, val) {
        return str.substr(0, idx) + val + str.substr(idx);
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.getPartLength = function (idx) {
        return this.opts.formatParts[idx].length;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.isNumber = function (val) {
        return val.match(/[1-9]/) !== null;
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.isDay = function (idx) {
        return this.opts.formatParts[idx].indexOf('d') !== -1;
    };
    /**
     * @param {?} idx
     * @return {?}
     */
    InputAutoFillDirective.prototype.isMonth = function (idx) {
        return this.opts.formatParts[idx].indexOf('m') !== -1 && this.opts.formatParts[idx].length === 2;
    };
    /**
     * @return {?}
     */
    InputAutoFillDirective.prototype.getInputValue = function () {
        return this.el.nativeElement.value;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    InputAutoFillDirective.prototype.setInputValue = function (val) {
        this.rndr.setProperty(this.el.nativeElement, 'value', val);
    };
    return InputAutoFillDirective;
}());
InputAutoFillDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbInputAutoFill]'
            },] },
];
/** @nocollapse */
InputAutoFillDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
InputAutoFillDirective.propDecorators = {
    "opts": [{ type: core.Input },],
    "onKeyUp": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FocusDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function FocusDirective(el) {
        this.el = el;
    }
    /**
     * @return {?}
     */
    FocusDirective.prototype.ngAfterViewInit = function () {
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
    };
    return FocusDirective;
}());
FocusDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDpFocus]'
            },] },
];
/** @nocollapse */
FocusDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
FocusDirective.propDecorators = {
    "value": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LocaleService = /** @class */ (function () {
    function LocaleService() {
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
    LocaleService.prototype.getLocaleOptions = function (locale) {
        if (locale && this.locales.hasOwnProperty(locale)) {
            // User given locale
            return this.locales[locale];
        }
        // Default: en
        return this.locales['en'];
    };
    return LocaleService;
}());
LocaleService.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var UtilService = /** @class */ (function () {
    function UtilService() {
    }
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
    UtilService.prototype.isDateValid = function (dateStr, dateFormat, minYear, maxYear, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, monthLabels, enableDays) {
        var /** @type {?} */ returnDate = { day: 0, month: 0, year: 0 };
        var /** @type {?} */ daysInMonth = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        var /** @type {?} */ isMonthStr = this.getDatePartIndex(dateFormat, 'mmm') !== -1;
        if (dateStr.length !== dateFormat.length) {
            return returnDate;
        }
        var /** @type {?} */ separator = this.getDateFormatSeparator(dateFormat);
        var /** @type {?} */ parts = dateStr.split(separator);
        if (parts.length !== 3) {
            return returnDate;
        }
        var /** @type {?} */ day = this.parseDatePartNumber(dateFormat, dateStr, 'dd');
        var /** @type {?} */ month = isMonthStr ?
            this.parseDatePartMonthName(dateFormat, dateStr, 'mmm', monthLabels) :
            this.parseDatePartNumber(dateFormat, dateStr, 'mm');
        var /** @type {?} */ year = this.parseDatePartNumber(dateFormat, dateStr, 'yyyy');
        if (day !== -1 && month !== -1 && year !== -1) {
            if (year < minYear || year > maxYear || month < 1 || month > 12) {
                return returnDate;
            }
            var /** @type {?} */ date = { year: year, month: month, day: day };
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
    };
    /**
     * @param {?} dateFormat
     * @return {?}
     */
    UtilService.prototype.getDateFormatSeparator = function (dateFormat) {
        return dateFormat.replace(/[dmy]/g, '')[0];
    };
    /**
     * @param {?} monthLabel
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.isMonthLabelValid = function (monthLabel, monthLabels) {
        for (var /** @type {?} */ key = 1; key <= 12; key++) {
            if (monthLabel.toLowerCase() === monthLabels[key].toLowerCase()) {
                return key;
            }
        }
        return -1;
    };
    /**
     * @param {?} yearLabel
     * @param {?} minYear
     * @param {?} maxYear
     * @return {?}
     */
    UtilService.prototype.isYearLabelValid = function (yearLabel, minYear, maxYear) {
        if (yearLabel >= minYear && yearLabel <= maxYear) {
            return yearLabel;
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @return {?}
     */
    UtilService.prototype.parseDatePartNumber = function (dateFormat, dateString, datePart) {
        var /** @type {?} */ pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            var /** @type {?} */ value = dateString.substring(pos, pos + datePart.length);
            if (!/^\d+$/.test(value)) {
                return -1;
            }
            return parseInt(value, 0);
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} dateString
     * @param {?} datePart
     * @param {?} monthLabels
     * @return {?}
     */
    UtilService.prototype.parseDatePartMonthName = function (dateFormat, dateString, datePart, monthLabels) {
        var /** @type {?} */ pos = this.getDatePartIndex(dateFormat, datePart);
        if (pos !== -1) {
            return this.isMonthLabelValid(dateString.substring(pos, pos + datePart.length), monthLabels);
        }
        return -1;
    };
    /**
     * @param {?} dateFormat
     * @param {?} datePart
     * @return {?}
     */
    UtilService.prototype.getDatePartIndex = function (dateFormat, datePart) {
        return dateFormat.indexOf(datePart);
    };
    /**
     * @param {?} monthString
     * @return {?}
     */
    UtilService.prototype.parseDefaultMonth = function (monthString) {
        var /** @type {?} */ month = { monthTxt: '', monthNbr: 0, year: 0 };
        if (monthString !== '') {
            var /** @type {?} */ split = monthString.split(monthString.match(/[^0-9]/)[0]);
            month.monthNbr = split[0].length === 2 ? parseInt(split[0], 0) : parseInt(split[1], 0);
            month.year = split[0].length === 2 ? parseInt(split[1], 0) : parseInt(split[0], 0);
        }
        return month;
    };
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
    UtilService.prototype.isDisabledDay = function (date, disableUntil, disableSince, disableWeekends, disableDays, disableDateRanges, enableDays) {
        for (var _i = 0, enableDays_1 = enableDays; _i < enableDays_1.length; _i++) {
            var e = enableDays_1[_i];
            if (e.year === date.year && e.month === date.month && e.day === date.day) {
                return false;
            }
        }
        var /** @type {?} */ dateMs = this.getTimeInMilliseconds(date);
        if (this.isInitializedDate(disableUntil) && dateMs <= this.getTimeInMilliseconds(disableUntil)) {
            return true;
        }
        if (this.isInitializedDate(disableSince) && dateMs >= this.getTimeInMilliseconds(disableSince)) {
            return true;
        }
        if (disableWeekends) {
            var /** @type {?} */ dn = this.getDayNumber(date);
            if (dn === 0 || dn === 6) {
                return true;
            }
        }
        for (var _a = 0, disableDays_1 = disableDays; _a < disableDays_1.length; _a++) {
            var d = disableDays_1[_a];
            if (d.year === date.year && d.month === date.month && d.day === date.day) {
                return true;
            }
        }
        for (var _b = 0, disableDateRanges_1 = disableDateRanges; _b < disableDateRanges_1.length; _b++) {
            var d = disableDateRanges_1[_b];
            if (this.isInitializedDate(d.begin) &&
                this.isInitializedDate(d.end) &&
                dateMs >= this.getTimeInMilliseconds(d.begin) &&
                dateMs <= this.getTimeInMilliseconds(d.end)) {
                return true;
            }
        }
        return false;
    };
    /**
     * @param {?} date
     * @param {?} markedDates
     * @param {?} markWeekends
     * @return {?}
     */
    UtilService.prototype.isMarkedDate = function (date, markedDates, markWeekends) {
        for (var _i = 0, markedDates_1 = markedDates; _i < markedDates_1.length; _i++) {
            var md = markedDates_1[_i];
            for (var _a = 0, _b = md.dates; _a < _b.length; _a++) {
                var d = _b[_a];
                if (d.year === date.year && d.month === date.month && d.day === date.day) {
                    return { marked: true, color: md.color };
                }
            }
        }
        if (markWeekends && markWeekends.marked) {
            var /** @type {?} */ dayNbr = this.getDayNumber(date);
            if (dayNbr === 0 || dayNbr === 6) {
                return { marked: true, color: markWeekends.color };
            }
        }
        return { marked: false, color: '' };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getWeekNumber = function (date) {
        var /** @type {?} */ d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        d.setDate(d.getDate() + (d.getDay() === 0 ? -3 : 4 - d.getDay()));
        return Math.round(((d.getTime() - new Date(d.getFullYear(), 0, 4).getTime()) / 86400000) / 7) + 1;
    };
    /**
     * @param {?} date
     * @param {?} disableUntil
     * @return {?}
     */
    UtilService.prototype.isMonthDisabledByDisableUntil = function (date, disableUntil) {
        return this.isInitializedDate(disableUntil) && this.getTimeInMilliseconds(date) <= this.getTimeInMilliseconds(disableUntil);
    };
    /**
     * @param {?} date
     * @param {?} disableSince
     * @return {?}
     */
    UtilService.prototype.isMonthDisabledByDisableSince = function (date, disableSince) {
        return this.isInitializedDate(disableSince) && this.getTimeInMilliseconds(date) >= this.getTimeInMilliseconds(disableSince);
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.isInitializedDate = function (date) {
        return date.year !== 0 && date.month !== 0 && date.day !== 0;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getTimeInMilliseconds = function (date) {
        return new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0).getTime();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    UtilService.prototype.getDayNumber = function (date) {
        var /** @type {?} */ d = new Date(date.year, date.month - 1, date.day, 0, 0, 0, 0);
        return d.getDay();
    };
    return UtilService;
}());
UtilService.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MYDP_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return MDBDatePickerComponent; }),
    multi: true
};
/** @enum {number} */
var CalToggle = { Open: 1, CloseByDateSel: 2, CloseByCalBtn: 3, CloseByOutClick: 4, };
CalToggle[CalToggle.Open] = "Open";
CalToggle[CalToggle.CloseByDateSel] = "CloseByDateSel";
CalToggle[CalToggle.CloseByCalBtn] = "CloseByCalBtn";
CalToggle[CalToggle.CloseByOutClick] = "CloseByOutClick";
/** @enum {number} */
var Year = { min: 1000, max: 9999, };
Year[Year.min] = "min";
Year[Year.max] = "max";
/** @enum {number} */
var InputFocusBlur = { focus: 1, blur: 2, };
InputFocusBlur[InputFocusBlur.focus] = "focus";
InputFocusBlur[InputFocusBlur.blur] = "blur";
/** @enum {number} */
var KeyCode$1 = { enter: 13, space: 32, };
KeyCode$1[KeyCode$1.enter] = "enter";
KeyCode$1[KeyCode$1.space] = "space";
/** @enum {number} */
var MonthId = { prev: 1, curr: 2, next: 3, };
MonthId[MonthId.prev] = "prev";
MonthId[MonthId.curr] = "curr";
MonthId[MonthId.next] = "next";
var MDBDatePickerComponent = /** @class */ (function () {
    /**
     * @param {?} elem
     * @param {?} renderer
     * @param {?} localeService
     * @param {?} utilService
     */
    function MDBDatePickerComponent(elem, renderer, localeService, utilService) {
        var _this = this;
        this.elem = elem;
        this.renderer = renderer;
        this.localeService = localeService;
        this.utilService = utilService;
        this.label = '';
        this.placeholder = '';
        this.dateChanged = new core.EventEmitter();
        this.inputFieldChanged = new core.EventEmitter();
        this.calendarViewChanged = new core.EventEmitter();
        this.calendarToggle = new core.EventEmitter();
        this.inputFocusBlur = new core.EventEmitter();
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
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        this.setLocaleOptions();
        renderer.listen(this.elem.nativeElement, 'click', function (event) {
            if (_this.showSelector &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.removeInlineStyle();
                _this.showSelector = false;
                _this.removeZIndex();
                _this.calendarToggle.emit(CalToggle.CloseByOutClick);
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.removeInlineStyle();
                _this.removeZIndex();
                _this.showSelector = false;
            }
            if (true && event.target && _this.elem.nativeElement.contains(event.target)) {
                _this.resetMonthYearEdit();
            }
        });
    }
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        if (this.opts.startDate) {
            setTimeout(function () {
                _this.onUserDateInput(_this.opts.startDate);
            }, 0);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.removeInlineStyle = function () {
        this.removeZIndex();
        setTimeout(function () {
            document.documentElement.style.removeProperty('overflow');
        }, 155);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setLocaleOptions = function () {
        var _this = this;
        var /** @type {?} */ opts = this.localeService.getLocaleOptions(this.locale);
        Object.keys(opts).forEach(function (k) {
            _this.opts[k] = opts[k];
        });
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setOptions = function () {
        var _this = this;
        var /** @type {?} */ thisYear = new Date();
        var /** @type {?} */ currentYear = thisYear.getFullYear();
        if (this.options !== undefined) {
            Object.keys(this.options).forEach(function (k) {
                _this.opts[k] = _this.options[k];
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
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.resetMonthYearEdit = function () {
        this.editMonth = false;
        this.editYear = false;
        this.invalidMonth = false;
        this.invalidYear = false;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserDateInput = function (value) {
        this.invalidDate = false;
        if (value.length === 0) {
            this.clearDate();
        }
        else {
            var /** @type {?} */ date = this.utilService.isDateValid(value, this.opts.dateFormat, this.opts.minYear, this.opts.maxYear, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.monthLabels, this.opts.enableDays);
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
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onFocusInput = function (event) {
        this.openBtnClicked();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.focus, value: event.target.value });
        document.documentElement.style.overflow = 'hidden';
        this.divFocus.nativeElement.focus();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onBlurInput = function (event) {
        this.selectionDayTxt = event.target.value;
        this.onTouchedCb();
        this.inputFocusBlur.emit({ reason: InputFocusBlur.blur, value: event.target.value });
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserMonthInput = function (value) {
        this.invalidMonth = false;
        var /** @type {?} */ m = this.utilService.isMonthLabelValid(value, this.opts.monthLabels);
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
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.onUserYearInput = function (value) {
        this.invalidYear = false;
        var /** @type {?} */ y = this.utilService.isYearLabelValid(Number(value), this.opts.minYear, this.opts.maxYear);
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
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.isTodayDisabled = function () {
        this.disableTodayBtn = this.utilService.isDisabledDay(this.getToday(), this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseOptions = function () {
        if (this.locale) {
            this.setLocaleOptions();
        }
        this.setOptions();
        this.isTodayDisabled();
        this.dayIdx = this.weekDayOpts.indexOf(this.opts.firstDayOfWeek);
        if (this.dayIdx !== -1) {
            var /** @type {?} */ idx = this.dayIdx;
            for (var /** @type {?} */ i = 0; i < this.weekDayOpts.length; i++) {
                this.weekDays.push(this.opts.dayLabels[this.weekDayOpts[idx]]);
                idx = this.weekDayOpts[idx] === 'sa' ? 0 : idx + 1;
            }
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MDBDatePickerComponent.prototype.writeValue = function (value) {
        if (value && typeof value === 'string') {
            this.updateDateValue(this.parseSelectedDate(value), false);
        }
        else if (value && value['date']) {
            this.updateDateValue(this.parseSelectedDate(value['date']), false);
        }
        else if (value === '') {
            this.updateDateValue({ year: 0, month: 0, day: 0 }, true);
        }
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MDBDatePickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MDBDatePickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MDBDatePickerComponent.prototype.ngOnChanges = function (changes) {
        var _this = this;
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
            var /** @type {?} */ dm = changes['defaultMonth'].currentValue;
            if (dm !== null && dm !== undefined && dm !== '') {
                this.selectedMonth = this.parseSelectedMonth(dm);
            }
            else {
                this.selectedMonth = { monthTxt: '', monthNbr: 0, year: 0 };
            }
        }
        if (changes.hasOwnProperty('selDate')) {
            var /** @type {?} */ sd = changes['selDate'];
            if (sd.currentValue !== null &&
                sd.currentValue !== undefined &&
                sd.currentValue !== '' &&
                Object.keys(sd.currentValue).length !== 0) {
                this.selectedDate = this.parseSelectedDate(sd.currentValue);
                setTimeout(function () {
                    _this.onChangeCb(_this.getDateModel(_this.selectedDate));
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
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.hideKeyboard = function () {
        var _this = this;
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        try {
            setTimeout(function () {
                // creating temp field
                // const field = document.createElement('input');
                var /** @type {?} */ field = _this.renderer.createElement('input');
                _this.renderer.appendChild(_this.elem.nativeElement, field);
                var /** @type {?} */ inputReference = _this.elem.nativeElement.lastElementChild;
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setStyle(inputReference, 'opacity', '0');
                _this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                // // hiding temp field from peoples eyes
                // // -webkit-user-modify is nessesary for Android 4.x
                // adding onfocus event handler for out temp field
                field.onfocus = function () {
                    // this timeout of 200ms is nessasary for Android 2.3.x
                    setTimeout(function () {
                        _this.renderer.setStyle(field, 'display', 'none');
                        setTimeout(function () {
                            _this.renderer.removeChild(_this.elem.nativeElement, field);
                            document.body.focus();
                        }, 0);
                    }, 0);
                };
                // focusing it
                field.focus();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.removeBtnClicked = function () {
        // Remove date button clicked
        this.clearDate();
        if (this.showSelector) {
            this.calendarToggle.emit(CalToggle.CloseByCalBtn);
            this.setZIndex();
        }
        // this.showSelector = false;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setZIndex = function () {
        for (var /** @type {?} */ i = 0; i <= this.elements.length; i++) {
            if (i === this.elements.length) {
                break;
            }
            this.renderer.setStyle(this.elements[i], 'z-index', '1');
            if (this.elements[i] === this.elem.nativeElement.childNodes[0] || this.elements[i] === this.elem.nativeElement.childNodes[1]) {
                this.elementNumber = i;
                this.renderer.setStyle(this.elements[i], 'z-index', '50');
            }
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.removeZIndex = function () {
        for (var /** @type {?} */ i = 0; i <= this.elements.length; i++) {
            if (i === this.elements.length) {
                break;
            }
            this.renderer.setStyle(this.elements[i], 'z-index', '50');
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.openBtnClicked = function () {
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
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setVisibleMonth = function () {
        // Sets visible month of calendar
        var /** @type {?} */ y = 0, /** @type {?} */ m = 0;
        if (!this.utilService.isInitializedDate(this.selectedDate)) {
            if (this.selectedMonth.year === 0 && this.selectedMonth.monthNbr === 0) {
                var /** @type {?} */ today = this.getToday();
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
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthList = function () {
        this.months = [];
        for (var /** @type {?} */ i = 1; i <= 12; i++) {
            this.months.push({ index: i, short: this.opts.monthLabels[i], label: this.opts.monthLabelsFull[i] });
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.yearsList = function () {
        this.years = [];
        var /** @type {?} */ firstYear = this.opts.minYear;
        var /** @type {?} */ lastYear = this.opts.maxYear;
        for (var /** @type {?} */ i = firstYear; i <= lastYear; i++) {
            this.years.push(i);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.prevMonth = function () {
        // Previous month from calendar
        var /** @type {?} */ d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() - 1);
        var /** @type {?} */ y = d.getFullYear();
        var /** @type {?} */ m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.nextMonth = function () {
        // Next month from calendar
        var /** @type {?} */ d = this.getDate(this.visibleMonth.year, this.visibleMonth.monthNbr, 1);
        d.setMonth(d.getMonth() + 1);
        var /** @type {?} */ y = d.getFullYear();
        var /** @type {?} */ m = d.getMonth() + 1;
        this.visibleMonth = { monthTxt: this.monthText(m), monthNbr: m, year: y };
        this.generateCalendar(m, y, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.prevYear = function () {
        // Previous year from calendar
        this.visibleMonth.year--;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.nextYear = function () {
        // Next year from calendar
        this.visibleMonth.year++;
        this.generateCalendar(this.visibleMonth.monthNbr, this.visibleMonth.year, true);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.todayClicked = function () {
        // Today button clicked
        var /** @type {?} */ today = this.getToday();
        if (!this.utilService.isDisabledDay(today, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays)) {
            this.selectDate(today);
        }
        if (today.year !== this.visibleMonth.year || today.month !== this.visibleMonth.monthNbr) {
            this.visibleMonth = { monthTxt: this.opts.monthLabels[today.month], monthNbr: today.month, year: today.year };
            this.generateCalendar(today.month, today.year, true);
        }
    };
    /**
     * @param {?} cell
     * @return {?}
     */
    MDBDatePickerComponent.prototype.cellClicked = function (cell) {
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
    };
    /**
     * @param {?} event
     * @param {?} cell
     * @return {?}
     */
    MDBDatePickerComponent.prototype.cellKeyDown = function (event, cell) {
        // Cell keyboard handling
        if ((event.keyCode === KeyCode$1.enter || event.keyCode === KeyCode$1.space) && !cell.disabled) {
            event.preventDefault();
            this.cellClicked(cell);
        }
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.clearDate = function () {
        // Clears the date and notifies parent using callbacks and value accessor
        var /** @type {?} */ date = { year: 0, month: 0, day: 0 };
        this.dateChanged.emit({ date: date, jsdate: null, formatted: '', epoc: 0 });
        this.onChangeCb('');
        this.onTouchedCb();
        this.updateDateValue(date, true);
        this.setZIndex();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.selectDate = function (date) {
        // Date selected, notifies parent using callbacks and value accessor
        this.tmp = date;
        var /** @type {?} */ dateModel = this.getDateModel(date);
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
    };
    /**
     * @param {?} date
     * @param {?} clear
     * @return {?}
     */
    MDBDatePickerComponent.prototype.updateDateValue = function (date, clear) {
        // Updates date values
        this.selectedDate = date;
        this.selectionDayTxt = clear ? '' : this.formatDate(date);
        this.inputFieldChanged.emit({ value: this.selectionDayTxt, dateFormat: this.opts.dateFormat, valid: !clear });
        this.invalidDate = false;
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getDateModel = function (date) {
        // Creates a date model object from the given parameter
        return this.formatDate(date);
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MDBDatePickerComponent.prototype.preZero = function (val) {
        // Prepend zero if smaller than 10
        return parseInt(val, 0) < 10 ? '0' + val : val;
    };
    /**
     * @param {?} val
     * @return {?}
     */
    MDBDatePickerComponent.prototype.formatDate = function (val) {
        // Returns formatted date string, if mmm is part of dateFormat returns month as a string
        // days
        var /** @type {?} */ d = val.day; // 1 - 31
        var /** @type {?} */ dd = this.preZero(val.day); // 01 - 31
        var /** @type {?} */ ddd = this.opts.dayLabels[this.getWeekday(val)]; // Sun-Sat
        var /** @type {?} */ dddd = this.opts.dayLabelsFull[this.getWeekday(val)]; // Sunday – Saturday
        var /** @type {?} */ m = val.month; // 1 - 12
        var /** @type {?} */ mm = this.preZero(val.month); // 01 - 12
        var /** @type {?} */ mmm = this.getMonthShort(val.month); // Jan - Dec
        var /** @type {?} */ mmmm = this.getMonthFull(val.month); // January – December
        var /** @type {?} */ yy = val.year.toString().slice(2, 4); // 00 - 99
        var /** @type {?} */ yyyy = val.year; // 2000 - 2999
        var /** @type {?} */ toReplace = this.opts.dateFormat.split(/(d{1,4}|m{1,4}|y{4}|yy|!.)/g);
        var /** @type {?} */ formatted = '';
        toReplace.forEach(function (el) {
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
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthText = function (m) {
        // Returns month as a text
        return this.opts.monthLabels[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.weekText = function (m) {
        // Returns month as a text
        return this.opts.dayLabelsFull[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getMonthShort = function (m) {
        return this.opts.monthLabels[m];
    };
    /**
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getMonthFull = function (m) {
        return this.opts.monthLabelsFull[m];
    };
    /**
     * @param {?} y
     * @param {?} m
     * @return {?}
     */
    MDBDatePickerComponent.prototype.monthStartIdx = function (y, m) {
        // Month start index
        var /** @type {?} */ d = new Date();
        d.setDate(1);
        d.setMonth(m - 1);
        d.setFullYear(y);
        var /** @type {?} */ idx = d.getDay() + this.sundayIdx();
        return idx >= 7 ? idx - 7 : idx;
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.daysInMonth = function (m, y) {
        // Return number of days of current month
        return new Date(y, m, 0).getDate();
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.daysInPrevMonth = function (m, y) {
        // Return number of days of the previous month
        var /** @type {?} */ d = this.getDate(y, m, 1);
        d.setMonth(d.getMonth() - 1);
        return this.daysInMonth(d.getMonth() + 1, d.getFullYear());
    };
    /**
     * @param {?} d
     * @param {?} m
     * @param {?} y
     * @param {?} cmo
     * @param {?} today
     * @return {?}
     */
    MDBDatePickerComponent.prototype.isCurrDay = function (d, m, y, cmo, today) {
        // Check is a given date the today
        return d === today.day && m === today.month && y === today.year && cmo === this.currMonthId;
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getToday = function () {
        var /** @type {?} */ date = new Date();
        return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getTimeInMilliseconds = function (date) {
        return this.getDate(date.year, date.month, date.day).getTime();
    };
    /**
     * @param {?} date
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getWeekday = function (date) {
        // Get weekday: su, mo, tu, we ...
        return this.weekDayOpts[this.utilService.getDayNumber(date)];
    };
    /**
     * @param {?} year
     * @param {?} month
     * @param {?} day
     * @return {?}
     */
    MDBDatePickerComponent.prototype.getDate = function (year, month, day) {
        // Creates a date object from given year, month and day
        return new Date(year, month - 1, day, 0, 0, 0, 0);
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.sundayIdx = function () {
        // Index of Sunday day
        return this.dayIdx > 0 ? 7 - this.dayIdx : 0;
    };
    /**
     * @param {?} m
     * @param {?} y
     * @param {?} notifyChange
     * @return {?}
     */
    MDBDatePickerComponent.prototype.generateCalendar = function (m, y, notifyChange) {
        this.dates.length = 0;
        var /** @type {?} */ today = this.getToday();
        var /** @type {?} */ monthStart = this.monthStartIdx(y, m);
        var /** @type {?} */ dInThisM = this.daysInMonth(m, y);
        var /** @type {?} */ dInPrevM = this.daysInPrevMonth(m, y);
        var /** @type {?} */ dayNbr = 1;
        var /** @type {?} */ cmo = this.prevMonthId;
        for (var /** @type {?} */ i = 1; i < 7; i++) {
            var /** @type {?} */ week = [];
            if (i === 1) {
                // First week
                var /** @type {?} */ pm = dInPrevM - monthStart + 1;
                // Previous month
                for (var /** @type {?} */ j = pm; j <= dInPrevM; j++) {
                    var /** @type {?} */ date = { year: y, month: m - 1, day: j };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(j, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                }
                cmo = this.currMonthId;
                // Current month
                var /** @type {?} */ daysLeft = 7 - week.length;
                for (var /** @type {?} */ j = 0; j < daysLeft; j++) {
                    var /** @type {?} */ date = { year: y, month: m, day: dayNbr };
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
                for (var /** @type {?} */ j = 1; j < 8; j++) {
                    if (dayNbr > dInThisM) {
                        // Next month
                        dayNbr = 1;
                        cmo = this.nextMonthId;
                    }
                    var /** @type {?} */ date = { year: y, month: cmo === this.currMonthId ? m : m + 1, day: dayNbr };
                    week.push({
                        dateObj: date, cmo: cmo, currDay: this.isCurrDay(dayNbr, m, y, cmo, today),
                        dayNbr: this.utilService.getDayNumber(date),
                        disabled: this.utilService.isDisabledDay(date, this.opts.disableUntil, this.opts.disableSince, this.opts.disableWeekends, this.opts.disableDays, this.opts.disableDateRanges, this.opts.enableDays),
                        markedDate: this.utilService.isMarkedDate(date, this.opts.markDates, this.opts.markWeekends)
                    });
                    dayNbr++;
                }
            }
            var /** @type {?} */ weekNbr = this.opts.showWeekNumbers &&
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
    };
    /**
     * @param {?} selDate
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseSelectedDate = function (selDate) {
        // Parse selDate value - it can be string or IMyDate object
        var /** @type {?} */ date = { day: 0, month: 0, year: 0 };
        if (typeof selDate === 'string') {
            var /** @type {?} */ sd = (selDate);
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
    };
    /**
     * @param {?} ms
     * @return {?}
     */
    MDBDatePickerComponent.prototype.parseSelectedMonth = function (ms) {
        return this.utilService.parseDefaultMonth(ms);
    };
    /**
     * @param {?} m
     * @param {?} y
     * @return {?}
     */
    MDBDatePickerComponent.prototype.setHeaderBtnDisabledState = function (m, y) {
        var /** @type {?} */ dpm = false;
        var /** @type {?} */ dpy = false;
        var /** @type {?} */ dnm = false;
        var /** @type {?} */ dny = false;
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
    };
    /**
     * @return {?}
     */
    MDBDatePickerComponent.prototype.checkActive = function () {
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
    };
    return MDBDatePickerComponent;
}());
MDBDatePickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-date-picker',
                exportAs: 'mdbdatepicker',
                template: "<!-- Line 27: Deleted (focus)=\"onFocusInput($event)\" for better use in Firefox. If other strange problems will occur, please paste it in line 27. --> <div class=\"mydp picker\" [ngClass]=\"{'picker--opened': showSelector}\" [ngStyle]=\"{'width': opts.width}\"> <div class=\"md-form\"> <label *ngIf=\"label.length > 0\"  [ngClass]=\"{ 'active': checkActive(), 'disabled': opts.componentDisabled }\">{{ label }}</label> <input  type=\"text\"  class=\"form-control mydp-date\"  [attr.aria-label]=\"opts.ariaLabelInputField\"  (click)=\"openBtnClicked()\"  [attr.maxlength]=\"opts.dateFormat.length\"  [ngClass]=\"{ 'selectiondisabled': opts.componentDisabled, 'disabled': opts.componentDisabled }\" placeholder=\"{{ placeholder }}\"  [ngModel]=\"selectionDayTxt\"  (ngModelChange)=\"onUserDateInput($event)\"  [value]=\"selectionDayTxt\"  [ngStyle]=\"{ 'height': opts.height,  'font-size': opts.selectionTxtFontSize }\" (blur)=\"onBlurInput($event)\"  [disabled]=\"opts.componentDisabled\"  autocomplete=\"off\"> </div> <div class=\"selector picker__holder selectorarrow selectorarrowleft selectorarrowright\" #divFocus [ngClass]=\"{'alignselectorright': opts.alignSelectorRight}\" tabindex=\"0\"> <div class=\"picker__frame picker__box\"> <div class=\"picker__header\"> <div class=\"picker__date-display\"> <div class=\"picker__weekday-display\"> {{ weekText(getWeekday(tmp)) }} </div> <div class=\"picker__month-display\"> <div>{{ monthText(tmp.month) }}</div> </div> <div class=\"picker__day-display\"> <div>{{ tmp.day }}</div> </div> <div class=\"picker__year-display\"> <div>{{ tmp.year }}</div> </div> </div> <select class=\"picker__select--year\" [(ngModel)]=\"visibleMonth.year\" (ngModelChange)=\"onUserYearInput($event)\" role=\"menu\" aria-label=\"Year selector\"> <option *ngFor=\"let year of years\" [value]=\"year\">{{ year }}</option> </select> <select class=\"picker__select--month\" [(ngModel)]=\"visibleMonth.monthTxt\" (ngModelChange)=\"onUserMonthInput($event)\" role=\"menu\" aria-label=\"Month selector\"> <option *ngFor=\"let month of months\" [value]=\"month.short\">{{ month.label }}</option> </select> <button class=\"picker__nav--prev\" data-nav=\"-1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Previous month\" (click)=\"prevMonth()\" [disabled]=\"prevMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !prevMonthDisabled, 'headerbtndisabled': prevMonthDisabled}\"></button> <button class=\"picker__nav--next\" data-nav=\"1\" type=\"button\" aria-controls=\"date-picker-example_table\" title=\"Next month\" (click)=\"nextMonth()\" [disabled]=\"nextMonthDisabled\" [ngClass]=\"{'headerbtnenabled': !nextMonthDisabled, 'headerbtndisabled': nextMonthDisabled}\"></button> </div> <table class=\"picker__table\"> <thead><tr><th class=\"picker__weekday weekdaytitleweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">#</th><th class=\"picker__weekday\" scope=\"col\" *ngFor=\"let d of weekDays\">{{d}}</th></tr></thead> <tbody> <tr *ngFor=\"let w of dates\"> <td class=\"picker__day daycellweeknbr\" *ngIf=\"opts.showWeekNumbers&&opts.firstDayOfWeek==='mo'\">{{w.weekNbr}}</td> <td class=\"picker__day\" *ngFor=\"let d of w.week\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId&&!d.disabled, 'disabled': d.disabled, 'tablesingleday': d.cmo===currMonthId&&!d.disabled}\"> <div *ngIf=\"d.markedDate.marked\" class=\"markdate\" [ngStyle]=\"{'background-color': d.markedDate.color}\"></div> <div class=\"picker__day\" [ngClass]=\"{'picker__day--infocus':d.cmo===currMonthId,'picker__day--outfocus': (d.cmo===nextMonthId || d.cmo===prevMonthId), 'picker__day--today':d.currDay&&opts.markCurrentDay, 'picker__day--selected picker__day--highlighted':selectedDate.day===d.dateObj.day && selectedDate.month===d.dateObj.month && selectedDate.year===d.dateObj.year && d.cmo===currMonthId}\" (click)=\"!d.disabled&&cellClicked(d);$event.stopPropagation()\" (keydown)=\"cellKeyDown($event, d)\" tabindex=\"0\"> {{d.dateObj.day}} </div> </td> </tr> </tbody> </table> <div class=\"picker__footer\"> <button type=\"button\"  *ngIf=\"opts.showTodayBtn\"  class=\"picker__button--today\" (click)=\"todayClicked()\" role=\"button\" [attr.aria-label]=\"opts.todayBtnTxt\"> {{opts.todayBtnTxt}} </button> <button type=\"button\" *ngIf=\"opts.showClearDateBtn\" class=\"picker__button--clear\" (click)=\"removeBtnClicked()\" role=\"button\" [attr.aria-label]=\"opts.clearBtnTxt\"> {{opts.clearBtnTxt}} </button> <button type=\"button\" [ngClass]=\"{'ml-auto': !opts.showTodayBtn}\" class=\"picker__button--close\" (click)=\"showSelector = false; removeInlineStyle();\" role=\"button\" [attr.aria-label]=\"opts.closeBtnTxt\"> {{opts.closeBtnTxt}} </button> </div> </div> </div> </div> ",
                providers: [LocaleService, UtilService, MYDP_VALUE_ACCESSOR],
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
MDBDatePickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: LocaleService, },
    { type: UtilService, },
]; };
MDBDatePickerComponent.propDecorators = {
    "options": [{ type: core.Input },],
    "locale": [{ type: core.Input },],
    "defaultMonth": [{ type: core.Input },],
    "selDate": [{ type: core.Input },],
    "label": [{ type: core.Input },],
    "placeholder": [{ type: core.Input },],
    "selector": [{ type: core.Input },],
    "disabled": [{ type: core.Input },],
    "dateChanged": [{ type: core.Output },],
    "inputFieldChanged": [{ type: core.Output },],
    "calendarViewChanged": [{ type: core.Output },],
    "calendarToggle": [{ type: core.Output },],
    "inputFocusBlur": [{ type: core.Output },],
    "divFocus": [{ type: core.ViewChild, args: ['divFocus',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DatepickerModule = /** @class */ (function () {
    function DatepickerModule() {
    }
    return DatepickerModule;
}());
DatepickerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, forms.FormsModule],
                declarations: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective],
                exports: [MDBDatePickerComponent, FocusDirective, InputAutoFillDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SimpleChartComponent = /** @class */ (function () {
    function SimpleChartComponent() {
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
    SimpleChartComponent.prototype.ngOnInit = function () {
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
    };
    return SimpleChartComponent;
}());
SimpleChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-simple-chart',
                template: "<span class=\"min-chart\"> <span class=\"percent\">{{ percent }}</span> <mdb-easy-pie-chart [percent]=\"percent\" [options]=\"options\"></mdb-easy-pie-chart> </span>",
                styles: []
            },] },
];
/** @nocollapse */
SimpleChartComponent.ctorParameters = function () { return []; };
SimpleChartComponent.propDecorators = {
    "percent": [{ type: core.Input, args: ['percent',] },],
    "barColor": [{ type: core.Input, args: ['barColor',] },],
    "trackColor": [{ type: core.Input, args: ['trackColor',] },],
    "scaleColor": [{ type: core.Input, args: ['scaleColor',] },],
    "scaleLength": [{ type: core.Input, args: ['scaleLength',] },],
    "lineCap": [{ type: core.Input, args: ['lineCap',] },],
    "lineWidth": [{ type: core.Input, args: ['lineWidth',] },],
    "trackWidth": [{ type: core.Input, args: ['trackWidth',] },],
    "size": [{ type: core.Input, args: ['size',] },],
    "rotate": [{ type: core.Input, args: ['rotate',] },],
    "animate": [{ type: core.Input, args: ['animate',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EasyPieChartComponent = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    function EasyPieChartComponent(el, platformId) {
        this.isBrowser = false;
        this.isBrowser = common.isPlatformBrowser(platformId);
        this.element = el;
        var /** @type {?} */ options = {
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
    EasyPieChartComponent.prototype.ngOnInit = function () {
        if (this.isBrowser) {
            this.element.nativeElement.innerHTML = '';
            this.pieChart = new EasyPieChart(this.element.nativeElement, this.options);
            this.pieChart.update(this.percent);
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    EasyPieChartComponent.prototype.ngOnChanges = function (changes) {
        if (!changes['percent'].isFirstChange()) {
            this.pieChart.update(this.percent);
        }
    };
    return EasyPieChartComponent;
}());
EasyPieChartComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-easy-pie-chart',
                template: '<div>Loading</div>'
            },] },
];
/** @nocollapse */
EasyPieChartComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
]; };
EasyPieChartComponent.propDecorators = {
    "percent": [{ type: core.Input, args: ['percent',] },],
    "options": [{ type: core.Input, args: ['options',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ChartSimpleModule = /** @class */ (function () {
    function ChartSimpleModule() {
    }
    return ChartSimpleModule;
}());
ChartSimpleModule.decorators = [
    { type: core.NgModule, args: [{
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
var UploadStatus = {
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
    var /** @type {?} */ k = 1024;
    var /** @type {?} */ sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB'];
    var /** @type {?} */ i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}
var MDBUploaderService = /** @class */ (function () {
    function MDBUploaderService() {
        this.setToNullValue = null;
        this.files = [];
        this.serviceEvents = new core.EventEmitter();
        this.uploads = [];
    }
    /**
     * @param {?} files
     * @return {?}
     */
    MDBUploaderService.prototype.handleFiles = function (files) {
        var _this = this;
        this.fileList = files;
        this.files = [].map.call(files, function (file, i) {
            // const uploadFile: UploadFile = {
            var /** @type {?} */ uploadFile = {
                fileIndex: i,
                id: _this.generateId(),
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
            _this.serviceEvents.emit({ type: 'addedToQueue', file: uploadFile });
            return uploadFile;
        });
        this.serviceEvents.emit({ type: 'allAddedToQueue' });
    };
    /**
     * @param {?} input
     * @return {?}
     */
    MDBUploaderService.prototype.initInputEvents = function (input) {
        var _this = this;
        // input.subscribe((event: UploadInput) => {
        // input.subscribe((event: UploadInput) => {
        input.subscribe(function (event) {
            switch (event.type) {
                case 'uploadFile':
                    _this.serviceEvents.emit({ type: 'start', file: event.file });
                    var /** @type {?} */ sub = _this.uploadFile(event.file, event).subscribe(function (data) {
                        _this.serviceEvents.emit(data);
                    });
                    _this.uploads.push({ file: event.file, sub: sub });
                    break;
                case 'uploadAll':
                    // Lines 118, 121 and 129 commented due to ts comipilator check “noUnusedLocals”: true, “noUnusedParameters”: true,
                    // const concurrency = event.concurrency > 0 ? event.concurrency : Number.POSITIVE_INFINITY;
                    // const subscriber = Subscriber.create((data: UploadOutput) => {
                    //   this.serviceEvents.emit(data);
                    // });
                    _this.uploads = _this.uploads.concat(_this.files.map(function (file) {
                        return { file: file, sub: _this.setToNullValue };
                    }));
                    // const subscription = Observable.from(this.files.map(file => this.uploadFile(file, event)))
                    //   .mergeAll(concurrency)
                    //   .combineLatest(data => data)
                    //   .subscribe(subscriber);
                    break;
                case 'cancel':
                    var /** @type {?} */ id_1 = event.id || null;
                    if (!id_1) {
                        return;
                    }
                    // const index = this.uploads.findIndex(upload => upload.file.id === id);
                    var /** @type {?} */ index = _this.uploads.findIndex(function (upload) { return upload.file.id === id_1; });
                    if (index !== -1) {
                        if (_this.uploads[index].sub) {
                            _this.uploads[index].sub.unsubscribe();
                        }
                        _this.serviceEvents.emit({ type: 'cancelled', file: _this.uploads[index].file });
                        _this.uploads[index].file.progress.status = UploadStatus.Canceled;
                    }
                    break;
                case 'cancelAll':
                    // this.uploads.forEach(upload => {
                    _this.uploads.forEach(function (upload) {
                        upload.file.progress.status = UploadStatus.Canceled;
                        _this.serviceEvents.emit({ type: 'cancelled', file: upload.file });
                    });
                    break;
            }
        });
    };
    /**
     * @param {?} file
     * @param {?} event
     * @return {?}
     */
    MDBUploaderService.prototype.uploadFile = function (file, event) {
        var _this = this;
        return new rxjs.Observable(function (observer) {
            var /** @type {?} */ url = event.url;
            var /** @type {?} */ method = event.method || 'POST';
            var /** @type {?} */ data = event.data || {};
            var /** @type {?} */ headers = event.headers || {};
            var /** @type {?} */ reader = new FileReader();
            var /** @type {?} */ xhr = new XMLHttpRequest();
            var /** @type {?} */ time = new Date().getTime();
            var /** @type {?} */ load = 0;
            xhr.upload.addEventListener('progress', function (e) {
                if (e.lengthComputable) {
                    var /** @type {?} */ percentage = Math.round((e.loaded * 100) / e.total);
                    var /** @type {?} */ diff = new Date().getTime() - time;
                    time += diff;
                    load = e.loaded - load;
                    var /** @type {?} */ speed = parseInt(/** @type {?} */ ((load / diff * 1000)), 10);
                    file.progress = {
                        status: UploadStatus.Uploading,
                        data: {
                            percentage: percentage,
                            speed: speed,
                            speedHuman: humanizeBytes(speed) + "/s"
                        }
                    };
                    observer.next({ type: 'uploading', file: file });
                }
            }, false);
            xhr.upload.addEventListener('error', function (e) {
                observer.error(e);
                observer.complete();
            });
            xhr.onreadystatechange = function () {
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
                    catch (e) {
                        file.response = xhr.response;
                    }
                    observer.next({ type: 'done', file: file });
                    observer.complete();
                }
            };
            xhr.open(method, url, true);
            var /** @type {?} */ form = new FormData();
            try {
                var /** @type {?} */ uploadFile_1 = _this.fileList.item(file.fileIndex);
                var /** @type {?} */ uploadIndex = _this.uploads.findIndex(function (upload) { return upload.file.size === uploadFile_1.size; });
                if (_this.uploads[uploadIndex].file.progress.status === UploadStatus.Canceled) {
                    observer.complete();
                }
                form.append('file', uploadFile_1, uploadFile_1.name);
                Object.keys(data).forEach(function (key) { return form.append(key, data[key]); });
                Object.keys(headers).forEach(function (key) { return xhr.setRequestHeader(key, headers[key]); });
                _this.serviceEvents.emit({ type: 'start', file: file });
                xhr.send(form);
            }
            catch (e) {
                observer.complete();
            }
            return function () {
                xhr.abort();
                reader.abort();
            };
        });
    };
    /**
     * @return {?}
     */
    MDBUploaderService.prototype.generateId = function () {
        return Math.random().toString(36).substring(7);
    };
    return MDBUploaderService;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MDBFileDropDirective = /** @class */ (function () {
    /**
     * @param {?} platform_id
     * @param {?} elementRef
     */
    function MDBFileDropDirective(platform_id, elementRef) {
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = common.isPlatformServer(this.platform_id);
        this.stopEvent = function (e) {
            e.stopPropagation();
            e.preventDefault();
        };
        this.upload = new MDBUploaderService();
        this.uploadOutput = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    MDBFileDropDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.upload.serviceEvents.subscribe(function (event) {
            _this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof core.EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
        this.el.addEventListener('drop', this.stopEvent, false);
        this.el.addEventListener('dragenter', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
        this.el.addEventListener('dragover', this.stopEvent, false);
    };
    /**
     * @return {?}
     */
    MDBFileDropDirective.prototype.ngOnDestroy = function () {
        if (this.isServer) {
            return;
        }
        this.uploadInput.unsubscribe();
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDrop = function (e) {
        e.stopPropagation();
        e.preventDefault();
        var /** @type {?} */ event = { type: 'drop' };
        this.uploadOutput.emit(event);
        this.upload.handleFiles(e.dataTransfer.files);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDragOver = function (e) {
        if (!e) {
            return;
        }
        var /** @type {?} */ event = { type: 'dragOver' };
        this.uploadOutput.emit(event);
    };
    /**
     * @param {?} e
     * @return {?}
     */
    MDBFileDropDirective.prototype.onDragLeave = function (e) {
        if (!e) {
            return;
        }
        var /** @type {?} */ event = { type: 'dragOut' };
        this.uploadOutput.emit(event);
    };
    return MDBFileDropDirective;
}());
MDBFileDropDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbFileDrop]'
            },] },
];
/** @nocollapse */
MDBFileDropDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
    { type: core.ElementRef, },
]; };
MDBFileDropDirective.propDecorators = {
    "uploadInput": [{ type: core.Input },],
    "uploadOutput": [{ type: core.Output },],
    "onDrop": [{ type: core.HostListener, args: ['drop', ['$event'],] },],
    "onDragOver": [{ type: core.HostListener, args: ['dragover', ['$event'],] },],
    "onDragLeave": [{ type: core.HostListener, args: ['dragleave', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MDBFileSelectDirective = /** @class */ (function () {
    /**
     * @param {?} platform_id
     * @param {?} elementRef
     */
    function MDBFileSelectDirective(platform_id, elementRef) {
        var _this = this;
        this.platform_id = platform_id;
        this.elementRef = elementRef;
        this.isServer = common.isPlatformServer(this.platform_id);
        this.fileListener = function () {
            _this.upload.handleFiles(_this.el.files);
        };
        this.upload = new MDBUploaderService();
        this.uploadOutput = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    MDBFileSelectDirective.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isServer) {
            return;
        }
        this.el = this.elementRef.nativeElement;
        this.el.addEventListener('change', this.fileListener, false);
        this.upload.serviceEvents.subscribe(function (event) {
            _this.uploadOutput.emit(event);
        });
        if (this.uploadInput instanceof core.EventEmitter) {
            this.upload.initInputEvents(this.uploadInput);
        }
    };
    /**
     * @return {?}
     */
    MDBFileSelectDirective.prototype.ngOnDestroy = function () {
        if (this.isServer) {
            return;
        }
        this.el.removeEventListener('change', this.fileListener, false);
        this.uploadInput.unsubscribe();
    };
    return MDBFileSelectDirective;
}());
MDBFileSelectDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbFileSelect]'
            },] },
];
/** @nocollapse */
MDBFileSelectDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
    { type: core.ElementRef, },
]; };
MDBFileSelectDirective.propDecorators = {
    "uploadInput": [{ type: core.Input },],
    "uploadOutput": [{ type: core.Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var FileInputModule = /** @class */ (function () {
    function FileInputModule() {
    }
    return FileInputModule;
}());
FileInputModule.decorators = [
    { type: core.NgModule, args: [{
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
var CharCounterDirective = /** @class */ (function () {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    function CharCounterDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.length = 20;
    }
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.ngOnInit = function () {
        // Inititalise a new <span> element for the count display and render it below the host component.
        this.textContainer = this._renderer.createElement('p');
        this._renderer.appendChild(this._elRef.nativeElement.parentElement, this.textContainer);
        this._renderer.addClass(this.textContainer, 'chars');
        this.textContainer.innerHTML = '0/' + this.length;
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.onKeyUp = function () {
        this.textContainer.innerHTML = this._elRef.nativeElement.value.length + '/' + this.length;
        if (this._elRef.nativeElement.value.length > this.length) {
            this._renderer.addClass(this._elRef.nativeElement, 'invalid');
        }
        else {
            this._renderer.removeClass(this._elRef.nativeElement, 'invalid');
        }
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.hide = function () {
        this._renderer.setStyle(this.textContainer, 'display', 'none');
    };
    /**
     * @return {?}
     */
    CharCounterDirective.prototype.show = function () {
        this.onKeyUp();
        this._renderer.setStyle(this.textContainer, 'display', 'block');
    };
    return CharCounterDirective;
}());
CharCounterDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbCharCounter]'
            },] },
];
/** @nocollapse */
CharCounterDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
CharCounterDirective.propDecorators = {
    "length": [{ type: core.Input },],
    "onKeyUp": [{ type: core.HostListener, args: ['input', ['$event'],] },],
    "hide": [{ type: core.HostListener, args: ['blur', ['$event'],] },],
    "show": [{ type: core.HostListener, args: ['focus', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CharCounterModule = /** @class */ (function () {
    function CharCounterModule() {
    }
    /**
     * @return {?}
     */
    CharCounterModule.forRoot = function () {
        return { ngModule: CharCounterModule, providers: [] };
    };
    return CharCounterModule;
}());
CharCounterModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [CharCounterDirective],
                exports: [CharCounterDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ImageModalComponent = /** @class */ (function () {
    /**
     * @param {?} platformId
     * @param {?} element
     * @param {?} renderer
     */
    function ImageModalComponent(platformId, element, renderer) {
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
        this.cancelEvent = new core.EventEmitter();
        this.isBrowser = common.isPlatformBrowser(platformId);
        this._element = this.element.nativeElement;
        try {
            document.createEvent('TouchEvent');
            this.isMobile = true;
        }
        catch (err) {
            this.isMobile = false;
            return;
        }
    }
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.toggleZoomed = function () {
        // this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
        // this.zoom = !this.zoom;
        var /** @type {?} */ imgRef = this.element.nativeElement.lastElementChild.lastElementChild.firstElementChild;
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
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.toggleRestart = function () {
        this.zoomed = (this.zoomed === 'inactive') ? 'active' : 'inactive';
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.ngOnInit = function () {
        this.loading = true;
        if (this.imagePointer >= 0) {
            this.showRepeat = false;
            this.openGallery(this.imagePointer);
        }
        else {
            this.showRepeat = true;
        }
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.closeGallery = function () {
        // this.smooth = false;
        this.zoom = false;
        if (screenfull.enabled) {
            screenfull.exit();
        }
        this.opened = false;
        this.cancelEvent.emit(null);
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.prevImage = function () {
        // this.smooth = false;
        // this.zoom = false;
        this.loading = true;
        this.currentImageIndex--;
        if (this.currentImageIndex < 0) {
            this.currentImageIndex = this.modalImages.length - 1;
        }
        this.openGallery(this.currentImageIndex);
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.nextImage = function () {
        // this.smooth = false;
        // this.zoom = false;
        this.loading = true;
        this.currentImageIndex++;
        if (this.modalImages.length === this.currentImageIndex) {
            this.currentImageIndex = 0;
        }
        this.openGallery(this.currentImageIndex);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    ImageModalComponent.prototype.openGallery = function (index) {
        if (!index) {
            this.currentImageIndex = 1;
        }
        this.currentImageIndex = index;
        this.opened = true;
        for (var /** @type {?} */ i = 0; i < this.modalImages.length; i++) {
            if (i === this.currentImageIndex) {
                this.imgSrc = this.modalImages[i].img;
                this.loading = false;
                break;
            }
        }
    };
    /**
     * @return {?}
     */
    ImageModalComponent.prototype.fullScreen = function () {
        if (screenfull.enabled) {
            screenfull.toggle();
        }
    };
    Object.defineProperty(ImageModalComponent.prototype, "is_iPhone_or_iPod", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.isBrowser) {
                if (navigator && navigator.userAgent && navigator.userAgent != null) {
                    var /** @type {?} */ strUserAgent = navigator.userAgent.toLowerCase();
                    var /** @type {?} */ arrMatches = strUserAgent.match(/ipad/);
                    if (arrMatches != null) {
                        return true;
                    }
                }
                return false;
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ImageModalComponent.prototype.keyboardControl = function (event) {
        if (event.keyCode === 39) {
            this.nextImage();
        }
        if (event.keyCode === 37) {
            this.prevImage();
        }
        if (event.keyCode === 27) {
            this.closeGallery();
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    ImageModalComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        // let thisImg = this._element.querySelector('.ng-gallery-content').querySelector('img[src="' + this.imgSrc + '"]');
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.nextImage();
            // console.log(event.distance, this.modalImages);
        }
        // previous
        if (action === this.SWIPE_ACTION.LEFT) {
            this.prevImage();
        }
    };
    return ImageModalComponent;
}());
ImageModalComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-image-modal',
                template: "<div class=\"ng-gallery mdb-lightbox {{ type }}\" *ngIf=\"showRepeat\">  <figure class=\"col-md-4\" *ngFor =\"let i of modalImages; let index = index\"> <img src=\"{{ !i.thumb ? i.img : i.thumb }}\" class=\"ng-thumb\" (click)=\"openGallery(index)\" alt=\"Image {{ index + 1 }}\" /> </figure> </div> <div  tabindex=\"0\" class=\"ng-overlay\" [class.hide_lightbox]=\"opened == false\"> <div class=\"top-bar\" style='z-index: 100000'> <span class=\"info-text\">{{ currentImageIndex + 1 }}/{{ modalImages.length }}</span>     <a class=\"close-popup\" (click)=\"closeGallery()\" (click)=\"toggleRestart()\"></a> <a *ngIf=\"!is_iPhone_or_iPod\" class=\"fullscreen-toogle\" [class.toggled]='fullscreen' (click)=\"fullScreen()\"></a> <a class=\"zoom-toogle\" [class.zoom]='zoom' (click)=\"toggleZoomed()\" *ngIf=\"!isMobile\"></a> </div> <div class=\"ng-gallery-content\"> <!--<img *ngIf=\"!loading\" src=\"{{imgSrc}}\" (mousedown)=\"checkEvent($event)\" (mouseup)=\"setZoom($event)\" [class.zoom]='zoom' [class.smooth]='smooth' class=\"effect\" (swipeleft)=\"swipe($event, $event.type)\" (swiperight)=\"swipe($event, $event.type)\"/>--> <img *ngIf=\"!loading\" src=\"{{imgSrc}}\" [class.smooth]='smooth' class=\"effect\" (swipeleft)=\"swipe($event, $event.type)\" (swiperight)=\"swipe($event, $event.type)\" (click)=\"toggleZoomed()\" style=\"transform: scale(0.9, 0.9)\"/> <div class=\"uil-ring-css\" *ngIf=\"loading\"> <div></div> </div>   <a class=\"nav-left\" *ngIf=\"modalImages.length >1 && !isMobile\" (click)=\"prevImage()\" > <span></span> </a> <a class=\"nav-right\" *ngIf=\"modalImages.length >1 && !isMobile\" (click)=\"nextImage()\"> <span></span> </a> </div> </div> <div *ngIf=\"openModalWindow\"> <mdb-image-modal [modalImages]=\"images\" [imagePointer]=\"imagePointer\" (cancelEvent)=\"cancelImageModel()\"></mdb-image-modal> </div>",
            },] },
];
/** @nocollapse */
ImageModalComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
ImageModalComponent.propDecorators = {
    "modalImages": [{ type: core.Input, args: ['modalImages',] },],
    "imagePointer": [{ type: core.Input, args: ['imagePointer',] },],
    "fullscreen": [{ type: core.Input, args: ['fullscreen',] },],
    "zoom": [{ type: core.Input, args: ['zoom',] },],
    "smooth": [{ type: core.Input, args: ['smooth',] },],
    "type": [{ type: core.Input, args: ['type',] },],
    "cancelEvent": [{ type: core.Output, args: ['cancelEvent',] },],
    "keyboardControl": [{ type: core.HostListener, args: ['document:keyup', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LightBoxModule = /** @class */ (function () {
    function LightBoxModule() {
    }
    return LightBoxModule;
}());
LightBoxModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, forms.FormsModule],
                declarations: [ImageModalComponent],
                exports: [ImageModalComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var Diacritics = /** @class */ (function () {
    function Diacritics() {
    }
    /**
     * @param {?} text
     * @return {?}
     */
    Diacritics.strip = function (text) {
        var _this = this;
        var /** @type {?} */ match = function (a) {
            return _this.DIACRITICS[a] || a;
        };
        return text.replace(/[^\u0000-\u007E]/g, match);
    };
    return Diacritics;
}());
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
var Option = /** @class */ (function () {
    /**
     * @param {?} option
     */
    function Option(option) {
        this.wrappedOption = option;
        this.disabled = false;
        this.highlighted = false;
        this.selected = false;
        this.shown = true;
        this.group = false;
    }
    Object.defineProperty(Option.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.wrappedOption.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "label", {
        /**
         * @return {?}
         */
        get: function () {
            return this.wrappedOption.label;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Option.prototype, "icon", {
        /**
         * @return {?}
         */
        get: function () {
            if (this.wrappedOption.icon !== '' && this.wrappedOption.icon !== undefined) {
                return this.wrappedOption.icon;
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    return Option;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var OptionList = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function OptionList(options) {
        this._highlightedOption = null;
        this.setToNullValue = null;
        if (typeof options === 'undefined' || options === null) {
            options = [];
        }
        this._options = options.map(function (option) {
            var /** @type {?} */ o = new Option(option);
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
    OptionList.equalValues = function (v0, v1) {
        if (v0.length !== v1.length) {
            return false;
        }
        var /** @type {?} */ a = v0.slice().sort();
        var /** @type {?} */ b = v1.slice().sort();
        return a.every(function (v, i) {
            return v === b[i];
        });
    };
    Object.defineProperty(OptionList.prototype, "options", {
        /**
         * Options. *
         * @return {?}
         */
        get: function () {
            return this._options;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} value
     * @return {?}
     */
    OptionList.prototype.getOptionsByValue = function (value) {
        return this.options.filter(function (option) {
            return option.value === value;
        });
    };
    Object.defineProperty(OptionList.prototype, "value", {
        /**
         * Value. *
         * @return {?}
         */
        get: function () {
            return this.selection.map(function (selectedOption) {
                return selectedOption.value;
            });
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            v = typeof v === 'undefined' || v === null ? [] : v;
            this.options.forEach(function (option) {
                option.selected = v.indexOf(option.value) > -1;
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OptionList.prototype, "selection", {
        /**
         * Selection. *
         * @return {?}
         */
        get: function () {
            return this.options.filter(function (option) {
                return option.selected;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} option
     * @param {?} multiple
     * @return {?}
     */
    OptionList.prototype.select = function (option, multiple) {
        if (!multiple) {
            this.clearSelection();
        }
        option.selected = true;
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.deselect = function (option) {
        option.selected = false;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearSelection = function () {
        this.options.forEach(function (option) {
            option.selected = false;
        });
    };
    Object.defineProperty(OptionList.prototype, "filtered", {
        /**
         * Filter. *
         * @return {?}
         */
        get: function () {
            return this.options.filter(function (option) {
                return option.shown;
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} term
     * @return {?}
     */
    OptionList.prototype.filter = function (term) {
        var /** @type {?} */ anyShown = false;
        if (term.trim() === '') {
            this.resetFilter();
            anyShown = this.options.length > 0;
        }
        else {
            this.options.forEach(function (option) {
                var /** @type {?} */ l = Diacritics.strip(option.label).toUpperCase();
                var /** @type {?} */ t = Diacritics.strip(term).toUpperCase();
                option.shown = l.indexOf(t) > -1;
            });
        }
        this.highlight();
        this._hasShown = anyShown;
        return anyShown;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.resetFilter = function () {
        this.options.forEach(function (option) {
            option.shown = true;
        });
    };
    Object.defineProperty(OptionList.prototype, "highlightedOption", {
        /**
         * Highlight. *
         * @return {?}
         */
        get: function () {
            return this._highlightedOption;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.highlight = function () {
        var /** @type {?} */ option = this.hasShownSelected() ?
            this.getFirstShownSelected() : this.getFirstShown();
        this.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    OptionList.prototype.highlightOption = function (option) {
        this.clearHighlightedOption();
        if (option !== null) {
            option.highlighted = true;
            this._highlightedOption = option;
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightNextOption = function () {
        var /** @type {?} */ shownOptions = this.filtered;
        var /** @type {?} */ index = this.getHighlightedIndexFromList(shownOptions);
        if (index > -1 && index < shownOptions.length - 1) {
            this.highlightOption(shownOptions[index + 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.highlightPreviousOption = function () {
        var /** @type {?} */ shownOptions = this.filtered;
        var /** @type {?} */ index = this.getHighlightedIndexFromList(shownOptions);
        if (index > 0) {
            this.highlightOption(shownOptions[index - 1]);
        }
    };
    /**
     * @return {?}
     */
    OptionList.prototype.clearHighlightedOption = function () {
        if (this.highlightedOption !== null) {
            this.highlightedOption.highlighted = false;
            this._highlightedOption = null;
        }
    };
    /**
     * @param {?} options
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndexFromList = function (options) {
        for (var /** @type {?} */ i = 0; i < options.length; i++) {
            if (options[i].highlighted) {
                return i;
            }
        }
        return -1;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getHighlightedIndex = function () {
        return this.getHighlightedIndexFromList(this.filtered);
    };
    Object.defineProperty(OptionList.prototype, "hasShown", {
        /**
         * Util. *
         * @return {?}
         */
        get: function () {
            return this._hasShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    OptionList.prototype.hasSelected = function () {
        return this.options.some(function (option) {
            return option.selected;
        });
    };
    /**
     * @return {?}
     */
    OptionList.prototype.hasShownSelected = function () {
        return this.options.some(function (option) {
            return option.shown && option.selected;
        });
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getFirstShown = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown) {
                return option;
            }
        }
        // return null;
        return this.setToNullValue;
    };
    /**
     * @return {?}
     */
    OptionList.prototype.getFirstShownSelected = function () {
        for (var _i = 0, _a = this.options; _i < _a.length; _i++) {
            var option = _a[_i];
            if (option.shown && option.selected) {
                return option;
            }
        }
        // return null;
        return this.setToNullValue;
    };
    return OptionList;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectDropdownComponent = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     */
    function SelectDropdownComponent(_elementRef) {
        this._elementRef = _elementRef;
        this.close = new core.EventEmitter();
        this.optionClicked = new core.EventEmitter();
        this.singleFilterClick = new core.EventEmitter();
        this.singleFilterInput = new core.EventEmitter();
        this.singleFilterKeydown = new core.EventEmitter();
        this.disabledColor = '#fff';
        this.disabledTextColor = '9e9e9e';
        this.hasOptionsItems = true;
    }
    /**
     * Event handlers. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.onkeyup = function () {
        this.hasOptionsItems = this._elementRef.nativeElement.childNodes[0].children[1].children[0].children.length >= 1 ? true : false;
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnInit = function () {
        this.optionsReset();
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('optionList')) {
            this.optionsReset();
        }
        var /** @type {?} */ container = this._elementRef.nativeElement.classList;
        setTimeout(function () { container.add('fadeInSelect'); }, 200);
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.ngAfterViewInit = function () {
        this.moveHighlightedIntoView();
        if (!this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterClick = function () {
        this.singleFilterClick.emit(null);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterInput = function (event) {
        this.singleFilterInput.emit(event.target.value);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onSingleFilterKeydown = function (event) {
        this.singleFilterKeydown.emit(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionsWheel = function (event) {
        this.handleOptionsWheel(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionMouseover = function (option) {
        this.optionList.highlightOption(option);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.onOptionClick = function (option) {
        this.optionClicked.emit(option);
    };
    /**
     * Initialization. *
     * @return {?}
     */
    SelectDropdownComponent.prototype.optionsReset = function () {
        this.optionList.filter('');
        this.optionList.highlight();
    };
    /**
     * View. *
     * @param {?} option
     * @return {?}
     */
    SelectDropdownComponent.prototype.getOptionStyle = function (option) {
        if (option.highlighted) {
            var /** @type {?} */ style$$1 = {};
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
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.clearFilterInput = function () {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
    };
    /**
     * @return {?}
     */
    SelectDropdownComponent.prototype.moveHighlightedIntoView = function () {
        var /** @type {?} */ list = this.optionsList.nativeElement;
        var /** @type {?} */ listHeight = list.offsetHeight;
        var /** @type {?} */ itemIndex = this.optionList.getHighlightedIndex();
        if (itemIndex > -1) {
            var /** @type {?} */ item = list.children[0].children[itemIndex];
            var /** @type {?} */ itemHeight = item.offsetHeight;
            var /** @type {?} */ itemTop = itemIndex * itemHeight;
            var /** @type {?} */ itemBottom = itemTop + itemHeight;
            var /** @type {?} */ viewTop = list.scrollTop;
            var /** @type {?} */ viewBottom = viewTop + listHeight;
            if (itemBottom > viewBottom) {
                list.scrollTop = itemBottom - listHeight;
            }
            else if (itemTop < viewTop) {
                list.scrollTop = itemTop;
            }
        }
    };
    /**
     * @param {?} e
     * @return {?}
     */
    SelectDropdownComponent.prototype.handleOptionsWheel = function (e) {
        var /** @type {?} */ div = this.optionsList.nativeElement;
        var /** @type {?} */ atTop = div.scrollTop === 0;
        var /** @type {?} */ atBottom = div.offsetHeight + div.scrollTop === div.scrollHeight;
        if (atTop && e.deltaY < 0) {
            e.preventDefault();
        }
        else if (atBottom && e.deltaY > 0) {
            e.preventDefault();
        }
    };
    return SelectDropdownComponent;
}());
SelectDropdownComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-select-dropdown',
                template: "<div class=\"dropdown-content\" [ngStyle]=\"{'top.px': top, 'left.px': left, 'width.px': width}\"> <div class=\"filter\" *ngIf=\"!multiple && filterEnabled\"> <input #filterInput autocomplete=\"on\" [placeholder]=\"placeholder\" (click)=\"onSingleFilterClick($event)\" (input)=\"onSingleFilterInput($event)\" (keydown)=\"onSingleFilterKeydown($event)\"> </div> <div class=\"options\" #optionsList> <ul class=\"select-dropdown\" [ngClass]=\"{'multiple-select-dropdown': multiple}\" (wheel)=\"onOptionsWheel($event)\"> <li *ngFor=\"let option of optionList.filtered\" [ngClass]=\"{'active': option.highlighted, 'selected': option.selected, 'disabled': option.disabled, 'optgroup': option.group}\" [ngStyle]=\"getOptionStyle(option)\" (click)=\"onOptionClick(option)\" (mouseover)=\"onOptionMouseover(option)\"> <img class=\"rounded-circle\" [src]=\"option.icon\" *ngIf=\"option.icon !== ''\"> <span class=\"select-option\" *ngIf=\"!multiple\">{{option.label}}</span> <span class=\"filtrable\" *ngIf=\"multiple\"> <input type=\"checkbox\" [checked]=\"option.selected\"> <label></label> {{option.label}} </span> </li> <li *ngIf=\"!this.hasOptionsItems\" class=\"message disabled\"> <span>{{notFoundMsg}}</span> </li> </ul> </div> </div>",
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
SelectDropdownComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
SelectDropdownComponent.propDecorators = {
    "filterEnabled": [{ type: core.Input },],
    "highlightColor": [{ type: core.Input },],
    "highlightTextColor": [{ type: core.Input },],
    "left": [{ type: core.Input },],
    "multiple": [{ type: core.Input },],
    "notFoundMsg": [{ type: core.Input },],
    "optionList": [{ type: core.Input },],
    "top": [{ type: core.Input },],
    "width": [{ type: core.Input },],
    "placeholder": [{ type: core.Input },],
    "close": [{ type: core.Output },],
    "optionClicked": [{ type: core.Output },],
    "singleFilterClick": [{ type: core.Output },],
    "singleFilterInput": [{ type: core.Output },],
    "singleFilterKeydown": [{ type: core.Output },],
    "filterInput": [{ type: core.ViewChild, args: ['filterInput',] },],
    "optionsList": [{ type: core.ViewChild, args: ['optionsList',] },],
    "onkeyup": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SELECT_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return SelectComponent; }),
    multi: true
};
var SelectComponent = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function SelectComponent(el, renderer) {
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
        this.opened = new core.EventEmitter();
        this.closed = new core.EventEmitter();
        this.selected = new core.EventEmitter();
        this.deselected = new core.EventEmitter();
        this.noOptionsFound = new core.EventEmitter();
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
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    /**
     * Event handlers. *
     * @param {?} $event
     * @return {?}
     */
    SelectComponent.prototype.closeSelect = function ($event) {
        if (!this.isChild($event.target) && this.isOpen) {
            this.closeDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngOnInit = function () {
        this.placeholderView = this.placeholder;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.ngAfterViewInit = function () {
        this.setArrowUpIcon();
        this.setArrowDownIcon();
        this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'hidden');
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    SelectComponent.prototype.ngOnChanges = function (changes) {
        if (changes.hasOwnProperty('options')) {
            this.updateOptionsList(changes['options'].isFirstChange());
        }
        if (changes.hasOwnProperty('noFilter')) {
            var /** @type {?} */ numOptions = this.optionList.options.length;
            var /** @type {?} */ minNumOptions = changes['noFilter'].currentValue;
            this.filterEnabled = numOptions >= minNumOptions;
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.setArrowUpIcon = function () {
        var /** @type {?} */ div = this.renderer.createElement('div');
        this.renderer.appendChild(this.selectionSpan.nativeElement.children[0], div);
        this.selectionSpan.nativeElement.children[0].lastChild.innerHTML = '&#x25BC;';
        this.renderer.addClass(this.selectionSpan.nativeElement.children[0].lastChild, 'toggle');
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.setArrowDownIcon = function () {
        var /** @type {?} */ div = this.renderer.createElement('div');
        this.renderer.appendChild(this.selectionSpan.nativeElement.children[0], div);
        this.selectionSpan.nativeElement.children[0].lastChild.innerHTML = '&#x25B2;';
        this.renderer.addClass(this.selectionSpan.nativeElement.children[0].lastChild, 'toggle');
    };
    /**
     * @param {?} elemnt
     * @return {?}
     */
    SelectComponent.prototype.isChild = function (elemnt) {
        var /** @type {?} */ node = elemnt.parentNode;
        while (node != null) {
            if (node === this.el.nativeElement) {
                return true;
            }
            node = node.parentNode;
        }
        return false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowClick = function () {
        if (!this.selectContainerClicked && !this.multiple) {
            this.closeDropdown();
        }
        this.clearClicked = false;
        this.selectContainerClicked = false;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onWindowResize = function () {
        this.updateWidth();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerClick = function () {
        this.selectContainerClicked = true;
        if (!this.clearClicked) {
            this.toggleDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerFocus = function () {
        this.onTouched();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSelectContainerKeydown = function (event) {
        this.handleSelectContainerKeydown(event);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDropdownOptionClicked = function (option) {
        this.multiple ?
            this.toggleSelectOption(option) : this.selectOption(option);
    };
    /**
     * @param {?} focus
     * @return {?}
     */
    SelectComponent.prototype.onDropdownClose = function (focus) {
        this.closeDropdown(focus);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterClick = function () {
        this.selectContainerClicked = true;
    };
    /**
     * @param {?} term
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterInput = function (term) {
        var /** @type {?} */ hasShown = this.optionList.filter(term);
        if (!hasShown) {
            this.noOptionsFound.emit(term);
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onSingleFilterKeydown = function (event) {
        this.handleSingleFilterKeydown(event);
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterInput = function (event) {
        var _this = this;
        if (!this.isOpen) {
            this.openDropdown();
        }
        this.updateFilterWidth();
        setTimeout(function () {
            var /** @type {?} */ term = event.target.value;
            var /** @type {?} */ hasShown = _this.optionList.filter(term);
            if (!hasShown) {
                _this.noOptionsFound.emit(term);
            }
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.onMultipleFilterKeydown = function (event) {
        this.handleMultipleFilterKeydown(event);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.onClearSelectionClick = function () {
        this.clearClicked = true;
        this.clearSelection();
        this.closeDropdown(true);
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.onDeselectOptionClick = function (option) {
        this.clearClicked = true;
        this.deselectOption(option);
    };
    /**
     * API. *
     * @return {?}
     */
    SelectComponent.prototype.open = function () {
        this.openDropdown();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.close = function () {
        this.closeDropdown();
    };
    Object.defineProperty(SelectComponent.prototype, "value", {
        /**
         * @return {?}
         */
        get: function () {
            return this.multiple ? this._value : this._value[0];
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
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
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    SelectComponent.prototype.clear = function () {
        this.clearSelection();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.select = function (value) {
        var _this = this;
        this.optionList.getOptionsByValue(value).forEach(function (option) {
            _this.selectOption(option);
        });
    };
    /**
     * ControlValueAccessor interface methods. *
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    SelectComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    SelectComponent.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.valueChanged = function () {
        this._value = this.optionList.value;
        this.hasSelected = this._value.length > 0;
        this.placeholderView = this.hasSelected ? '' : this.placeholder;
        this.updateFilterWidth();
        this.onChange(this.value);
    };
    /**
     * Initialization. *
     * @param {?} firstTime
     * @return {?}
     */
    SelectComponent.prototype.updateOptionsList = function (firstTime) {
        // let v: Array<string> | any;
        var /** @type {?} */ v;
        if (!firstTime) {
            v = this.optionList.value;
        }
        this.optionList = new OptionList(this.options);
        if (!firstTime) {
            this.optionList.value = v;
            this.valueChanged();
        }
    };
    /**
     * Dropdown. *
     * @return {?}
     */
    SelectComponent.prototype.toggleDropdown = function () {
        if (!this.isDisabled) {
            this.isOpen ? this.closeDropdown(true) : this.openDropdown();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.openDropdown = function () {
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
    };
    /**
     * @param {?=} focus
     * @return {?}
     */
    SelectComponent.prototype.closeDropdown = function (focus) {
        var _this = this;
        if (focus === void 0) { focus = false; }
        var /** @type {?} */ container = this.el.nativeElement.lastElementChild.classList;
        this.renderer.removeStyle(this.el.nativeElement, 'z-index');
        container.remove('fadeInSelect');
        if (this.isOpen) {
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].lastChild, 'visibility', 'hidden');
            // tslint:disable-next-line:max-line-length
            this.renderer.setStyle(this.selectionSpan.nativeElement.children[0].children[this.selectionSpan.nativeElement.children[0].children.length - 2], 'visibility', 'visible');
        }
        setTimeout(function () {
            if (_this.isOpen) {
                _this.clearFilterInput();
                _this.isOpen = false;
                if (focus) {
                    _this.focus();
                }
                _this.closed.emit(null);
            }
        }, 200);
    };
    /**
     * Select. *
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.selectOption = function (option) {
        if (!option.selected) {
            this.optionList.select(option, this.multiple);
            this.valueChanged();
            this.selected.emit(option.wrappedOption);
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.deselectOption = function (option) {
        if (option.selected) {
            this.optionList.deselect(option);
            this.valueChanged();
            this.deselected.emit(option.wrappedOption);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.clearSelection = function () {
        var /** @type {?} */ selection = this.optionList.selection;
        if (selection.length > 0) {
            this.optionList.clearSelection();
            this.valueChanged();
            if (selection.length === 1) {
                this.deselected.emit(selection[0].wrappedOption);
            }
            else {
                this.deselected.emit(selection.map(function (option) {
                    return option.wrappedOption;
                }));
            }
        }
    };
    /**
     * @param {?} option
     * @return {?}
     */
    SelectComponent.prototype.toggleSelectOption = function (option) {
        option.selected ?
            this.deselectOption(option) : this.selectOption(option);
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.selectHighlightedOption = function () {
        var /** @type {?} */ option = this.optionList.highlightedOption;
        if (option !== null) {
            this.selectOption(option);
            this.closeDropdown(true);
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.deselectLast = function () {
        var /** @type {?} */ sel = this.optionList.selection;
        if (sel.length > 0) {
            var /** @type {?} */ option = sel[sel.length - 1];
            this.deselectOption(option);
            this.setMultipleFilterInput(option.label + ' ');
        }
    };
    /**
     * Filter. *
     * @return {?}
     */
    SelectComponent.prototype.clearFilterInput = function () {
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.value = '';
        }
        else {
            this.dropdown.clearFilterInput();
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SelectComponent.prototype.setMultipleFilterInput = function (value) {
        if (this.filterEnabled) {
            this.filterInput.nativeElement.value = value;
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSelectContainerKeydown = function (event) {
        var _this = this;
        var /** @type {?} */ key = event.which;
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
                setTimeout(function () { _this.openDropdown(); });
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleMultipleFilterKeydown = function (event) {
        var /** @type {?} */ key = event.which;
        if (key === this.KEYS.BACKSPACE) {
            if (this.hasSelected && this.filterEnabled &&
                this.filterInput.nativeElement.value === '') {
                this.deselectLast();
            }
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    SelectComponent.prototype.handleSingleFilterKeydown = function (event) {
        var /** @type {?} */ key = event.which;
        if (key === this.KEYS.ESC || key === this.KEYS.TAB
            || key === this.KEYS.UP || key === this.KEYS.DOWN
            || key === this.KEYS.ENTER) {
            this.handleSelectContainerKeydown(event);
        }
    };
    /**
     * View. *
     * @return {?}
     */
    SelectComponent.prototype.focus = function () {
        this.hasFocus = true;
        if (this.multiple && this.filterEnabled) {
            this.filterInput.nativeElement.focus();
        }
        else {
            this.selectionSpan.nativeElement.focus();
        }
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.blur = function () {
        this.hasFocus = false;
        this.selectionSpan.nativeElement.blur();
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateWidth = function () {
        this.width = this.selectionSpan.nativeElement.offsetWidth;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updatePosition = function () {
        var /** @type {?} */ e = this.selectionSpan.nativeElement;
        this.left = e.offsetLeft;
        this.top = e.offsetTop + e.offsetHeight;
    };
    /**
     * @return {?}
     */
    SelectComponent.prototype.updateFilterWidth = function () {
        if (typeof this.filterInput !== 'undefined') {
            var /** @type {?} */ value = this.filterInput.nativeElement.value;
            this.filterInputWidth = value.length === 0 ?
                1 + this.placeholderView.length * 10 : 1 + value.length * 10;
        }
    };
    return SelectComponent;
}());
SelectComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-select',
                template: "<label *ngIf=\"label !== ''\"> {{label}} </label> <div #selection [attr.tabindex]=\"disabled ? null : 0\" [ngClass]=\"{'open': isOpen, 'focus': hasFocus, 'below': isBelow, 'disabled': disabled}\" (click)=\"onSelectContainerClick()\" (focus)=\"onSelectContainerFocus()\" (keydown)=\"onSelectContainerKeydown($event)\" (window:click)=\"onWindowClick()\" (window:resize)=\"onWindowResize()\"> <div class=\"single\" *ngIf=\"!multiple\"> <div class=\"value\" *ngIf=\"optionList.hasSelected()\"> {{optionList.selection[0].label}} </div> <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\"> {{placeholderView}} </div> <div class=\"clear\" *ngIf=\"allowClear && hasSelected\" (click)=\"onClearSelectionClick($event)\"> &#x2715; </div> </div> <div class=\"multiple\" *ngIf=\"multiple\"> <div class=\"placeholder\" *ngIf=\"!optionList.hasSelected()\"> {{placeholderView}} </div> <div class=\"option\"  *ngFor=\"let option of optionList.selection\"> <span class=\"deselect-option\">, </span>{{option.label}} </div> </div> </div> <mdb-select-dropdown *ngIf=\"isOpen\" #dropdown [multiple]=\"multiple\" [optionList]=\"optionList\" [notFoundMsg]=\"notFoundMsg\" [highlightColor]=\"highlightColor\" [highlightTextColor]=\"highlightTextColor\" [filterEnabled]=\"filterEnabled\" [placeholder]=\"filterPlaceholder\" [top]=\"top\" [left]=\"left\" (close)=\"onDropdownClose($event)\" (optionClicked)=\"onDropdownOptionClicked($event)\" (singleFilterClick)=\"onSingleFilterClick()\" (singleFilterInput)=\"onSingleFilterInput($event)\" (singleFilterKeydown)=\"onSingleFilterKeydown($event)\"> </mdb-select-dropdown>",
                providers: [SELECT_VALUE_ACCESSOR],
                encapsulation: core.ViewEncapsulation.None
            },] },
];
/** @nocollapse */
SelectComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
SelectComponent.propDecorators = {
    "options": [{ type: core.Input },],
    "allowClear": [{ type: core.Input },],
    "disabled": [{ type: core.Input },],
    "highlightColor": [{ type: core.Input },],
    "highlightTextColor": [{ type: core.Input },],
    "multiple": [{ type: core.Input },],
    "noFilter": [{ type: core.Input },],
    "notFoundMsg": [{ type: core.Input },],
    "placeholder": [{ type: core.Input },],
    "filterPlaceholder": [{ type: core.Input },],
    "label": [{ type: core.Input },],
    "filterEnabled": [{ type: core.Input },],
    "opened": [{ type: core.Output },],
    "closed": [{ type: core.Output },],
    "selected": [{ type: core.Output },],
    "deselected": [{ type: core.Output },],
    "noOptionsFound": [{ type: core.Output },],
    "selectionSpan": [{ type: core.ViewChild, args: ['selection',] },],
    "dropdown": [{ type: core.ViewChild, args: ['dropdown',] },],
    "filterInput": [{ type: core.ViewChild, args: ['filterInput',] },],
    "closeSelect": [{ type: core.HostListener, args: ['document:click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SelectModule = /** @class */ (function () {
    function SelectModule() {
    }
    return SelectModule;
}());
SelectModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    SelectComponent,
                    SelectDropdownComponent
                ],
                exports: [
                    SelectComponent
                ],
                imports: [
                    common.CommonModule,
                    forms.FormsModule
                ]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CONTAINER_CLASS_NAME = 'spinning-preloader-container';
var COMPLETE_CLASS_NAME = 'complete';
var CONTAINER_QUERY = "." + CONTAINER_CLASS_NAME;
var CONTAINER_NAME = CONTAINER_CLASS_NAME.split('-').join(' ');
var TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE = "The " + CONTAINER_NAME + " was not found";
var EMULATE_ELEMENT_NAME = 'div';
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MDBSpinningPreloader = /** @class */ (function () {
    /**
     * @param {?} document
     */
    function MDBSpinningPreloader(document) {
        this.document = document;
        this.container = this.document.querySelector(CONTAINER_QUERY);
    }
    /**
     * @return {?}
     */
    MDBSpinningPreloader.errorHandler = function () {
        throw new TypeError(TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE);
    };
    /**
     * @return {?}
     */
    MDBSpinningPreloader.prototype.start = function () {
        this.container.classList.remove(COMPLETE_CLASS_NAME);
    };
    /**
     * @return {?}
     */
    MDBSpinningPreloader.prototype.stop = function () {
        this.container.classList.add(COMPLETE_CLASS_NAME);
    };
    Object.defineProperty(MDBSpinningPreloader.prototype, "container", {
        /**
         * @return {?}
         */
        get: function () {
            return this._container;
        },
        /**
         * @param {?} element
         * @return {?}
         */
        set: function (element) {
            this._container = element || this.document.createElement(EMULATE_ELEMENT_NAME);
        },
        enumerable: true,
        configurable: true
    });
    return MDBSpinningPreloader;
}());
MDBSpinningPreloader.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
MDBSpinningPreloader.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [platformBrowser.DOCUMENT,] },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * <md-progress-bar> component.
 */
var ProgressBarComponent = /** @class */ (function () {
    function ProgressBarComponent() {
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
    Object.defineProperty(ProgressBarComponent.prototype, "value", {
        /**
         * Value of the progressbar. Defaults to zero. Mirrored to aria-valuenow.
         * @return {?}
         */
        get: function () { return this._value; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this._value = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProgressBarComponent.prototype, "bufferValue", {
        /**
         * Buffer value of the progress bar. Defaults to zero.
         * @return {?}
         */
        get: function () { return this._bufferValue; },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) { this._bufferValue = clamp(v || 0); },
        enumerable: true,
        configurable: true
    });
    /**
     * Gets the current transform value for the progress bar's primary indicator.
     * @return {?}
     */
    ProgressBarComponent.prototype._primaryTransform = function () {
        var /** @type {?} */ scale = this.value / 100;
        return { transform: "scaleX(" + scale + ")" };
    };
    /**
     * Gets the current transform value for the progress bar's buffer indicator.  Only used if the
     * progress mode is set to buffer, otherwise returns an undefined, causing no transformation.
     * @return {?}
     */
    ProgressBarComponent.prototype._bufferTransform = function () {
        if (this.mode === 'buffer') {
            var /** @type {?} */ scale = this.bufferValue / 100;
            return { transform: "scaleX(" + scale + ")" };
        }
    };
    return ProgressBarComponent;
}());
ProgressBarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-progress-bar, mat-progress-bar',
                template: "<!-- The background div is named as such because it appears below the other divs and is not sized based on values. --> <div class=\"mat-progress-bar-background mat-progress-bar-element\"></div> <div class=\"mat-progress-bar-buffer mat-progress-bar-element\" [ngStyle]=\"_bufferTransform()\"></div> <div class=\"mat-progress-bar-primary mat-progress-bar-fill mat-progress-bar-element\" [ngStyle]=\"_primaryTransform()\"></div> <div class=\"mat-progress-bar-secondary mat-progress-bar-fill mat-progress-bar-element\"></div> ",
                styles: [":host { display:block; height:5px; overflow:hidden; position:relative; transform:translateZ(0); transition:opacity 250ms linear; width:100%; } :host .mat-progress-bar-element,:host .mat-progress-bar-fill::after { height:100%; position:absolute; width:100%; } :host .mat-progress-bar-background { background-repeat:repeat-x; background-size:10px 4px; display:none; } :host .mat-progress-bar-buffer { transform-origin:top left; transition:transform 250ms ease,stroke .3s cubic-bezier(.35,0,.25,1); } :host .mat-progress-bar-secondary { display:none; }  :host .mat-progress-bar-fill { animation:none; transform-origin:top left; transition:transform 250ms ease,stroke .3s cubic-bezier(.35,0,.25,1); } :host .mat-progress-bar-fill::after { animation:none; content:''; display:inline-block; left:0; } :host[mode=query] { transform:rotateZ(180deg); } :host[mode=indeterminate] .mat-progress-bar-fill,:host[mode=query] .mat-progress-bar-fill { transition:none; } :host[mode=indeterminate] .mat-progress-bar-primary,:host[mode=query] .mat-progress-bar-primary { animation:mat-progress-bar-primary-indeterminate-translate 2s infinite linear; left:-145.166611%; } :host[mode=indeterminate] .mat-progress-bar-primary.mat-progress-bar-fill::after,:host[mode=query]  .mat-progress-bar-primary.mat-progress-bar-fill::after { animation:mat-progress-bar-primary-indeterminate-scale 2s infinite linear; } :host[mode=indeterminate] .mat-progress-bar-secondary,:host[mode=query] .mat-progress-bar-secondary { animation:mat-progress-bar-secondary-indeterminate-translate 2s infinite linear; left:-54.888891%; display:block; } :host[mode=indeterminate] .mat-progress-bar-secondary.mat-progress-bar-fill::after,:host[mode=query]  .mat-progress-bar-secondary.mat-progress-bar-fill::after { animation:mat-progress-bar-secondary-indeterminate-scale 2s infinite linear; } :host[mode=buffer] .mat-progress-bar-background { animation:mat-progress-bar-background-scroll 250ms infinite linear; display:block; } :host-context([dir=rtl]) { transform:rotateY(180deg); } @keyframes mat-progress-bar-primary-indeterminate-translate { 0% { transform:translateX(0); } 20% { animation-timing-function:cubic-bezier(.5,0,.70173,.49582); transform:translateX(0); } 59.15% { animation-timing-function:cubic-bezier(.30244,.38135,.55,.95635); transform:translateX(83.67142%); } 100% { transform:translateX(200.61106%); } } @keyframes mat-progress-bar-primary-indeterminate-scale { 0% { transform:scaleX(.08); } 36.65% { animation-timing-function:cubic-bezier(.33473,.12482,.78584,1); transform:scaleX(.08); } 69.15% { animation-timing-function:cubic-bezier(.06,.11,.6,1); transform:scaleX(.66148); }  100% { transform:scaleX(.08); } } @keyframes mat-progress-bar-secondary-indeterminate-translate { 0% { animation-timing-function:cubic-bezier(.15,0,.51506,.40969); transform:translateX(0); } 25% { animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371); transform:translateX(37.65191%); } 48.35% { animation-timing-function:cubic-bezier(.4,.62704,.6,.90203); transform:translateX(84.38617%); } 100% { transform:translateX(160.27778%); } } @keyframes mat-progress-bar-secondary-indeterminate-scale { 0% { animation-timing-function:cubic-bezier(.15,0,.51506,.40969); transform:scaleX(.08); } 19.15% { animation-timing-function:cubic-bezier(.31033,.28406,.8,.73371); transform:scaleX(.4571) }  44.15% { animation-timing-function:cubic-bezier(.4,.62704,.6,.90203); transform:scaleX(.72796); } 100% { transform:scaleX(.08); } } @keyframes mat-progress-bar-background-scroll { to { transform:translateX(-10px) } }  "],
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
ProgressBarComponent.propDecorators = {
    "color": [{ type: core.Input },],
    "value": [{ type: core.Input }, { type: core.HostBinding, args: ['attr.aria-valuenow',] },],
    "bufferValue": [{ type: core.Input },],
    "mode": [{ type: core.Input }, { type: core.HostBinding, args: ['attr.mode',] },],
};
/**
 * Clamps a value to be between two numbers, by default 0 and 100.
 * @param {?} v
 * @param {?=} min
 * @param {?=} max
 * @return {?}
 */
function clamp(v, min, max) {
    if (min === void 0) { min = 0; }
    if (max === void 0) { max = 100; }
    return Math.max(min, Math.min(max, v));
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A single degree in radians.
 */
var DEGREE_IN_RADIANS = Math.PI / 180;
/**
 * Duration of the indeterminate animation.
 */
var DURATION_INDETERMINATE = 667;
/**
 * Duration of the indeterminate animation.
 */
var DURATION_DETERMINATE = 225;
/**
 * Start animation value of the indeterminate animation
 */
var startIndeterminate = 3;
/**
 * End animation value of the indeterminate animation
 */
var endIndeterminate = 80;
/* Maximum angle for the arc. The angle can't be exactly 360, because the arc becomes hidden. */
var MAX_ANGLE = 359.99 / 100;
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
var MdProgressSpinnerCssMatStylerDirective = /** @class */ (function () {
    function MdProgressSpinnerCssMatStylerDirective() {
    }
    return MdProgressSpinnerCssMatStylerDirective;
}());
MdProgressSpinnerCssMatStylerDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbSpinners], mat-progress-spinner'
            },] },
];
/** @nocollapse */
MdProgressSpinnerCssMatStylerDirective.propDecorators = {
    "true": [{ type: core.HostBinding, args: ['class.mat-progress-spinner',] },],
};
/**
 * <md-progress-spinner> component.
 */
var MdProgressSpinnerComponent = /** @class */ (function () {
    /**
     * @param {?} _ngZone
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?=} platformId
     */
    function MdProgressSpinnerComponent(_ngZone, _elementRef, _renderer, platformId) {
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
        this.isBrowser = common.isPlatformBrowser(platformId);
    }
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMin", {
        /**
         * Values for aria max and min are only defined as numbers when in a determinate mode.  We do this
         * because voiceover does not report the progress indicator as indeterminate if the aria min
         * and/or max value are number values.
         * @return {?}
         */
        get: function () {
            return this.mode === 'determinate' ? 0 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "_ariaValueMax", {
        /**
         * @return {?}
         */
        get: function () {
            return this.mode === 'determinate' ? 100 : null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "interdeterminateInterval", {
        /**
         * \@docs-private
         * @return {?}
         */
        get: function () {
            return this._interdeterminateInterval;
        },
        /**
         * \@docs-private
         * @param {?} interval
         * @return {?}
         */
        set: function (interval) {
            clearInterval(this._interdeterminateInterval);
            this._interdeterminateInterval = interval;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Clean up any animations that were running.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype.ngOnDestroy = function () {
        this._cleanupIndeterminateAnimation();
    };
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "color", {
        /**
         * The color of the progress-spinner. Can be primary, accent, or warn.
         * @return {?}
         */
        get: function () { return this._color; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._updateColor(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "value", {
        /**
         * Value of the progress circle. It is bound to the host as the attribute aria-valuenow.
         * @return {?}
         */
        get: function () {
            if (this.mode === 'determinate') {
                return this._value;
            }
            return;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (v != null && this.mode === 'determinate') {
                var /** @type {?} */ newValue = clamp$1(v);
                this._animateCircle(this.value || 0, newValue);
                this._value = newValue;
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MdProgressSpinnerComponent.prototype, "mode", {
        /**
         * Mode of the progress circle
         *
         * Input must be one of the values from ProgressMode, defaults to 'determinate'.
         * mode is bound to the host as the attribute host.
         * @return {?}
         */
        get: function () {
            return this._mode;
        },
        /**
         * @param {?} mode
         * @return {?}
         */
        set: function (mode) {
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
        },
        enumerable: true,
        configurable: true
    });
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
    MdProgressSpinnerComponent.prototype._animateCircle = function (animateFrom, animateTo, ease, duration, rotation) {
        var _this = this;
        if (ease === void 0) { ease = linearEase; }
        if (duration === void 0) { duration = DURATION_DETERMINATE; }
        if (rotation === void 0) { rotation = 0; }
        var /** @type {?} */ id = ++this._lastAnimationId;
        var /** @type {?} */ startTime = Date.now();
        var /** @type {?} */ changeInValue = animateTo - animateFrom;
        // No need to animate it if the values are the same
        if (animateTo === animateFrom) {
            this._renderArc(animateTo, rotation);
        }
        else {
            var /** @type {?} */ animation_1 = function () {
                var /** @type {?} */ elapsedTime = Math.max(0, Math.min(Date.now() - startTime, duration));
                _this._renderArc(ease(elapsedTime, animateFrom, changeInValue, duration), rotation);
                // Prevent overlapping animations by checking if a new animation has been called for and
                // if the animation has lasted longer than the animation duration.
                if (id === _this._lastAnimationId && elapsedTime < duration) {
                    requestAnimationFrame(animation_1);
                }
            };
            // Run the animation outside of Angular's zone, in order to avoid
            // hitting ZoneJS and change detection on each frame.
            this._ngZone.runOutsideAngular(animation_1);
        }
    };
    /**
     * Starts the indeterminate animation interval, if it is not already running.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._startIndeterminateAnimation = function () {
        var _this = this;
        var /** @type {?} */ rotationStartPoint = 0;
        var /** @type {?} */ start = startIndeterminate;
        var /** @type {?} */ end = endIndeterminate;
        var /** @type {?} */ duration = DURATION_INDETERMINATE;
        var /** @type {?} */ animate$$1 = function () {
            _this._animateCircle(start, end, materialEase, duration, rotationStartPoint);
            // Prevent rotation from reaching Number.MAX_SAFE_INTEGER.
            rotationStartPoint = (rotationStartPoint + end) % 100;
            var /** @type {?} */ temp = start;
            start = -end;
            end = -temp;
        };
        if (this.isBrowser) {
            if (!this.interdeterminateInterval) {
                this._ngZone.runOutsideAngular(function () {
                    _this.interdeterminateInterval = setInterval(animate$$1, duration + 50, 0, false);
                    animate$$1();
                });
            }
        }
    };
    /**
     * Removes interval, ending the animation.
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._cleanupIndeterminateAnimation = function () {
        this.interdeterminateInterval = null;
    };
    /**
     * Renders the arc onto the SVG element. Proxies `getArc` while setting the proper
     * DOM attribute on the `<path>`.
     * @param {?} currentValue
     * @param {?=} rotation
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._renderArc = function (currentValue, rotation) {
        if (rotation === void 0) { rotation = 0; }
        // Caches the path reference so it doesn't have to be looked up every time.
        var /** @type {?} */ path = this._path = this._path || this._elementRef.nativeElement.querySelector('path');
        // Ensure that the path was found. This may not be the case if the
        // animation function fires too early.
        if (path) {
            path.setAttribute('d', getSvgArc(currentValue, rotation));
        }
    };
    /**
     * Updates the color of the progress-spinner by adding the new palette class to the element
     * and removing the old one.
     * @param {?} newColor
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._updateColor = function (newColor) {
        this._setElementColor(this._color, false);
        this._setElementColor(newColor, true);
        this._color = newColor;
    };
    /**
     * Sets the given palette class on the component element.
     * @param {?} color
     * @param {?} isAdd
     * @return {?}
     */
    MdProgressSpinnerComponent.prototype._setElementColor = function (color, isAdd) {
        if (color != null && color !== '') {
            // this._renderer.setElementClass(this._elementRef.nativeElement, `mat-${color}`, isAdd);
            if (isAdd) {
                this._renderer.addClass(this._elementRef.nativeElement, "mat-" + color);
            }
        }
    };
    return MdProgressSpinnerComponent;
}());
MdProgressSpinnerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-Spinners, mat-progress-spinner',
                template: "<!-- preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's center. The center of the circle will remain at the center of the md-progress-spinner element containing the SVG. --> <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <path></path> </svg>",
                changeDetection: core.ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
MdProgressSpinnerComponent.ctorParameters = function () { return [
    { type: core.NgZone, },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
]; };
MdProgressSpinnerComponent.propDecorators = {
    "platformId": [{ type: core.Inject, args: [core.PLATFORM_ID,] },],
    "color": [{ type: core.Input },],
    "value": [{ type: core.Input }, { type: core.HostBinding, args: ['attr.aria-valuenow',] },],
    "mode": [{ type: core.HostBinding, args: ['attr.mode',] }, { type: core.Input },],
};
/**
 * <md-spinner> component.
 *
 * This is a component definition to be used as a convenience reference to create an
 * indeterminate <md-progress-spinner> instance.
 */
var MdSpinnerComponent = /** @class */ (function (_super) {
    tslib_1.__extends(MdSpinnerComponent, _super);
    /**
     * @param {?} elementRef
     * @param {?} ngZone
     * @param {?} renderer
     */
    function MdSpinnerComponent(elementRef, ngZone, renderer) {
        var _this = _super.call(this, ngZone, elementRef, renderer) || this;
        _this.mode = 'indeterminate';
        return _this;
    }
    /**
     * @return {?}
     */
    MdSpinnerComponent.prototype.ngOnDestroy = function () {
        // The `ngOnDestroy` from `MdProgressSpinner` should be called explicitly, because
        // in certain cases Angular won't call it (e.g. when using AoT and in unit tests).
        _super.prototype.ngOnDestroy.call(this);
    };
    return MdSpinnerComponent;
}(MdProgressSpinnerComponent));
MdSpinnerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-spinners, mat-spinner, mdb-progress-spinner',
                template: "<!-- preserveAspectRatio of xMidYMid meet as the center of the viewport is the circle's center. The center of the circle will remain at the center of the md-progress-spinner element containing the SVG. --> <svg viewBox=\"0 0 100 100\" preserveAspectRatio=\"xMidYMid meet\"> <path></path> </svg>",
                styles: [":host { display: block; height: 100px; width: 100px; overflow: hidden; } :host svg { height: 100%; width: 100%; transform-origin: center; } :host path { fill: transparent; stroke-width: 10px; transition: stroke .3s cubic-bezier(.35, 0, .25, 1); } :host[mode=indeterminate] svg { animation-duration: 5.25s, 2.887s; animation-name: mat-progress-spinner-sporadic-rotate, mat-progress-spinner-linear-rotate; animation-timing-function: cubic-bezier(.35, 0, .25, 1), linear; animation-iteration-count: infinite; transition: none; } @keyframes mat-progress-spinner-linear-rotate { 0% { transform: rotate(0) } 100% { transform: rotate(360deg) } } @keyframes mat-progress-spinner-sporadic-rotate { 12.5% { transform: rotate(135deg) } 25% { transform: rotate(270deg) } 37.5% { transform: rotate(405deg) } 50% { transform: rotate(540deg) } 62.5% { transform: rotate(675deg) } 75% { transform: rotate(810deg) } 87.5% { transform: rotate(945deg) } 100% { transform: rotate(1080deg) } }"],
            },] },
];
/** @nocollapse */
MdSpinnerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.NgZone, },
    { type: core.Renderer2, },
]; };
MdSpinnerComponent.propDecorators = {
    "true": [{ type: core.HostBinding, args: ['class.mat-spinner',] },],
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
    var /** @type {?} */ angleInRadians = (angleInDegrees - 90) * DEGREE_IN_RADIANS;
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
    var /** @type {?} */ time = currentTime / duration;
    var /** @type {?} */ timeCubed = Math.pow(time, 3);
    var /** @type {?} */ timeQuad = Math.pow(time, 4);
    var /** @type {?} */ timeQuint = Math.pow(time, 5);
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
    var /** @type {?} */ startPoint = rotation || 0;
    var /** @type {?} */ radius = 50;
    var /** @type {?} */ pathRadius = 40;
    var /** @type {?} */ startAngle = startPoint * MAX_ANGLE;
    var /** @type {?} */ endAngle = currentValue * MAX_ANGLE;
    var /** @type {?} */ start = polarToCartesian(radius, pathRadius, startAngle);
    var /** @type {?} */ end = polarToCartesian(radius, pathRadius, endAngle + startAngle);
    var /** @type {?} */ arcSweep = endAngle < 0 ? 0 : 1;
    var /** @type {?} */ largeArcFlag;
    if (endAngle < 0) {
        largeArcFlag = endAngle >= -180 ? 0 : 1;
    }
    else {
        largeArcFlag = endAngle <= 180 ? 0 : 1;
    }
    return "M" + start + "A" + pathRadius + "," + pathRadius + " 0 " + largeArcFlag + "," + arcSweep + " " + end;
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressDirective = /** @class */ (function () {
    function ProgressDirective() {
        this.addClass = true;
        this.bars = [];
        this._max = 100;
    }
    Object.defineProperty(ProgressDirective.prototype, "max", {
        /**
         * maximum total value of progress element
         * @return {?}
         */
        get: function () {
            return this._max;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            this._max = v;
            this.bars.forEach(function (bar) {
                bar.recalculatePercentage();
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressDirective.prototype.addBar = function (bar) {
        if (!this.animate) {
            bar.transition = 'none';
        }
        this.bars.push(bar);
    };
    /**
     * @param {?} bar
     * @return {?}
     */
    ProgressDirective.prototype.removeBar = function (bar) {
        this.bars.splice(this.bars.indexOf(bar), 1);
    };
    return ProgressDirective;
}());
ProgressDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'mdbProgress, [mdbProgress]' },] },
];
/** @nocollapse */
ProgressDirective.propDecorators = {
    "animate": [{ type: core.Input },],
    "max": [{ type: core.HostBinding, args: ['attr.max',] }, { type: core.Input },],
    "addClass": [{ type: core.HostBinding, args: ['class.progress',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BarComponent = /** @class */ (function () {
    /**
     * @param {?} progress
     */
    function BarComponent(progress) {
        this.percent = 0;
        this.progress = progress;
    }
    Object.defineProperty(BarComponent.prototype, "value", {
        /**
         * current value of progress bar
         * @return {?}
         */
        get: function () {
            return this._value;
        },
        /**
         * @param {?} v
         * @return {?}
         */
        set: function (v) {
            if (!v && v !== 0) {
                return;
            }
            this._value = v;
            this.recalculatePercentage();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnInit = function () {
        this.progress.addBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.ngOnDestroy = function () {
        this.progress.removeBar(this);
    };
    /**
     * @return {?}
     */
    BarComponent.prototype.recalculatePercentage = function () {
        this.percent = +(100 * this.value / this.progress.max).toFixed(2);
        var /** @type {?} */ totalPercentage = this.progress.bars.reduce(function (total, bar) {
            return total + bar.percent;
        }, 0);
        if (totalPercentage > 100) {
            this.percent -= totalPercentage - 100;
        }
    };
    return BarComponent;
}());
BarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-bar',
                template: "<div class=\"progress-bar\" style=\"min-width: 0;\" role=\"progressbar\" [ngClass]=\"type && 'progress-bar-' + type\" [ngStyle]=\"{width: (percent < 100 ? percent : 100) + '%', transition: transition}\" aria-valuemin=\"0\" [attr.aria-valuenow]=\"value\" [attr.aria-valuetext]=\"percent.toFixed(0) + '%'\" [attr.aria-valuemax]=\"max\"> <ng-content></ng-content> </div> "
            },] },
];
/** @nocollapse */
BarComponent.ctorParameters = function () { return [
    { type: ProgressDirective, decorators: [{ type: core.Host },] },
]; };
BarComponent.propDecorators = {
    "type": [{ type: core.Input },],
    "value": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressSpinnerComponent = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function ProgressSpinnerComponent(el) {
        this.addClass = 'spinner-blue-only';
        this.spinnerType = '';
        this.spinnerColor = 'rainbow';
        this.el = el;
    }
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ hostElem = this.el.nativeElement;
        var /** @type {?} */ colorClass = this.spinnerColor;
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
    };
    /**
     * @return {?}
     */
    ProgressSpinnerComponent.prototype.spinerRun = function () {
        var _this = this;
        var /** @type {?} */ counter = 0;
        var /** @type {?} */ hostElem = this.el.nativeElement;
        setInterval(function () {
            switch (counter) {
                case 0:
                    _this.addClass = 'spinner-red-only mat-progress-spinner ';
                    break;
                case 1:
                    _this.addClass = 'spinner-yellow-only mat-progress-spinner';
                    break;
                case 2:
                    _this.addClass = 'spinner-blue-only mat-progress-spinner';
                    break;
                case 3:
                    _this.addClass = 'spinner-green-only mat-progress-spinner';
                    break;
            }
            hostElem.children[0].children[0].className = ' ' + _this.addClass;
            if (counter < 3) {
                counter++;
            }
            else {
                counter = 0;
            }
        }, 1333);
    };
    return ProgressSpinnerComponent;
}());
ProgressSpinnerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-spinner',
                template: "<div class=\"preloader-wrapper active  {{spinnerType}}\"> <mdb-Spinners mdbSpinners mode=\"indeterminate\"></mdb-Spinners> </div>"
            },] },
];
/** @nocollapse */
ProgressSpinnerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
ProgressSpinnerComponent.propDecorators = {
    "spinnerType": [{ type: core.Input },],
    "spinnerColor": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarConfigComponent = /** @class */ (function () {
    function ProgressbarConfigComponent() {
        /**
         * if `true` changing value of progress bar will be animated (note: not supported by Bootstrap 4)
         */
        this.animate = true;
        /**
         * maximum total value of progress element
         */
        this.max = 100;
    }
    return ProgressbarConfigComponent;
}());
ProgressbarConfigComponent.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarComponent = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function ProgressbarComponent(config) {
        Object.assign(this, config);
    }
    return ProgressbarComponent;
}());
ProgressbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-progressbar',
                template: "<div mdbProgress [animate]=\"animate\" [max]=\"max\"> <mdb-bar [type]=\"type\" [value]=\"value\"> <ng-content></ng-content> </mdb-bar> </div> "
            },] },
];
/** @nocollapse */
ProgressbarComponent.ctorParameters = function () { return [
    { type: ProgressbarConfigComponent, },
]; };
ProgressbarComponent.propDecorators = {
    "animate": [{ type: core.Input },],
    "max": [{ type: core.Input },],
    "type": [{ type: core.Input },],
    "value": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ProgressbarModule = /** @class */ (function () {
    function ProgressbarModule() {
    }
    /**
     * @return {?}
     */
    ProgressbarModule.forRoot = function () {
        return { ngModule: ProgressbarModule, providers: [ProgressbarConfigComponent] };
    };
    return ProgressbarModule;
}());
ProgressbarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [ProgressDirective, BarComponent, ProgressbarComponent],
                exports: [ProgressDirective, BarComponent, ProgressbarComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MdProgressSpinnerModule = /** @class */ (function () {
    function MdProgressSpinnerModule() {
    }
    /**
     * @deprecated
     * @return {?}
     */
    MdProgressSpinnerModule.forRoot = function () {
        return {
            ngModule: MdProgressSpinnerModule,
            providers: []
        };
    };
    return MdProgressSpinnerModule;
}());
MdProgressSpinnerModule.decorators = [
    { type: core.NgModule, args: [{
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
var MdProgressBarModule = /** @class */ (function () {
    function MdProgressBarModule() {
    }
    /**
     * @deprecated
     * @return {?}
     */
    MdProgressBarModule.forRoot = function () {
        return {
            ngModule: MdProgressBarModule,
            providers: []
        };
    };
    return MdProgressBarModule;
}());
MdProgressBarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                exports: [ProgressBarComponent],
                declarations: [ProgressBarComponent],
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MATERIAL_MODULES = [
    MdProgressBarModule,
    MdProgressSpinnerModule,
    ProgressbarModule
];
var PreloadersModule = /** @class */ (function () {
    function PreloadersModule() {
    }
    return PreloadersModule;
}());
PreloadersModule.decorators = [
    { type: core.NgModule, args: [{
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
var ProgressBars = /** @class */ (function () {
    function ProgressBars() {
    }
    /**
     * @deprecated
     * @return {?}
     */
    ProgressBars.forRoot = function () {
        return { ngModule: PreloadersModule };
    };
    return ProgressBars;
}());
ProgressBars.decorators = [
    { type: core.NgModule, args: [{
                imports: MATERIAL_MODULES,
                exports: MATERIAL_MODULES,
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidenavComponent = /** @class */ (function () {
    /**
     * @param {?} platformId
     * @param {?} el
     * @param {?} renderer
     */
    function SidenavComponent(platformId, el, renderer) {
        this.el = el;
        this.renderer = renderer;
        this.isBrowser = false;
        this.fixed = true;
        this.isBrowser = common.isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    SidenavComponent.prototype.ngAfterViewInit = function () {
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
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.windwosResize = function () {
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
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.show = function () {
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
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.hide = function () {
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
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.toggle = function () {
        if (this.shown) {
            this.hide();
        }
        else {
            this.show();
        }
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.showOverlay = function () {
        var _this = this;
        this.renderer.setStyle(this.overlay.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.renderer.setStyle(_this.overlay.nativeElement, 'opacity', '1');
        }, 0);
    };
    /**
     * @return {?}
     */
    SidenavComponent.prototype.hideOverlay = function () {
        var _this = this;
        this.renderer.setStyle(this.overlay.nativeElement, 'opacity', '0');
        setTimeout(function () {
            _this.renderer.setStyle(_this.overlay.nativeElement, 'display', 'none');
        }, 200);
    };
    /**
     * @param {?} value
     * @return {?}
     */
    SidenavComponent.prototype.setShown = function (value) {
        var _this = this;
        setTimeout(function () {
            _this.shown = value;
        }, 510);
    };
    return SidenavComponent;
}());
SidenavComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-sidenav',
                template: "<ul #sidenav id=\"slide-out\" class=\"{{ class }} side-nav\" > <ng-content></ng-content> <!-- <div class=\"sidenav-bg mask-strong\"></div>     --> </ul> <div (click)=\"hide()\" #overlay id=\"sidenav-overlay\" style=\"display: none;\"></div>"
            },] },
];
/** @nocollapse */
SidenavComponent.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
SidenavComponent.propDecorators = {
    "class": [{ type: core.Input },],
    "fixed": [{ type: core.Input },],
    "sideNav": [{ type: core.ViewChild, args: ['sidenav',] },],
    "overlay": [{ type: core.ViewChild, args: ['overlay',] },],
    "windwosResize": [{ type: core.HostListener, args: ['window:resize',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SidenavModule = /** @class */ (function () {
    function SidenavModule() {
    }
    return SidenavModule;
}());
SidenavModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [
                    SidenavComponent,
                ],
                exports: [
                    SidenavComponent
                ],
                imports: [
                    common.CommonModule,
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
var PageScrollUtilService = /** @class */ (function () {
    function PageScrollUtilService() {
    }
    /**
     * Util method to check whether a given variable is either undefined or null
     * @param {?} variable
     * true the variable is undefined or null
     * @return {?}
     */
    PageScrollUtilService.isUndefinedOrNull = function (variable) {
        return (typeof variable === 'undefined') || variable === undefined || variable === null;
    };
    /**
     * @param {?} document
     * @param {?} scrollTargetElement
     * @return {?}
     */
    PageScrollUtilService.extractElementPosition = function (document, scrollTargetElement) {
        var /** @type {?} */ body = document.body;
        var /** @type {?} */ docEl = document.documentElement;
        // const windowPageYOffset: number = document.defaultView && document.defaultView.pageYOffset || undefined;
        var /** @type {?} */ windowPageYOffset = document.defaultView && /** @type {?} */ (document.defaultView.pageYOffset) || undefined;
        // const windowPageXOffset: number = document.defaultView && document.defaultView.pageXOffset || undefined;
        var /** @type {?} */ windowPageXOffset = document.defaultView && /** @type {?} */ (document.defaultView.pageXOffset) || undefined;
        var /** @type {?} */ scrollTop = windowPageYOffset || docEl.scrollTop || body.scrollTop;
        var /** @type {?} */ scrollLeft = windowPageXOffset || docEl.scrollLeft || body.scrollLeft;
        var /** @type {?} */ clientTop = docEl.clientTop || body.clientTop || 0;
        var /** @type {?} */ clientLeft = docEl.clientLeft || body.clientLeft || 0;
        if (PageScrollUtilService.isUndefinedOrNull(scrollTargetElement)) {
            // No element found, so return the current position to not cause any change in scroll position
            return { top: scrollTop, left: scrollLeft };
        }
        var /** @type {?} */ box = scrollTargetElement.getBoundingClientRect();
        var /** @type {?} */ top = box.top + scrollTop - clientTop;
        var /** @type {?} */ left = box.left + scrollLeft - clientLeft;
        return { top: Math.round(top), left: Math.round(left) };
    };
    return PageScrollUtilService;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @abstract
 */
var EasingLogic = /** @class */ (function () {
    function EasingLogic() {
    }
    return EasingLogic;
}());
var PageScrollConfig = /** @class */ (function () {
    function PageScrollConfig() {
    }
    Object.defineProperty(PageScrollConfig, "defaultEasingLogic", {
        /**
         * @return {?}
         */
        get: function () {
            return PageScrollConfig._easingLogic;
        },
        /**
         * @param {?} easingLogic
         * @return {?}
         */
        set: function (easingLogic) {
            PageScrollConfig._easingLogic = easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollConfig;
}());
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
    ease: function (t, b, c, d) {
        // Linear easing
        return c * t / d + b;
    }
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PageScrollService = /** @class */ (function () {
    function PageScrollService() {
        var _this = this;
        this.runningInstances = [];
        this.onInterrupted = {
            report: function (event, pageScrollInstance) {
                if (!pageScrollInstance.interruptible) {
                    // Non-interruptible anyway, so do not stop anything
                    return;
                }
                var /** @type {?} */ shouldStop = true;
                if (event.type === 'keyup') {
                    // Only stop if specific keys have been pressed, for all others don't stop anything
                    if (PageScrollConfig._interruptKeys.indexOf(((event)).keyCode) === -1) {
                        // The pressed key is not in the list of interrupting keys
                        shouldStop = false;
                    }
                }
                else if (event.type === 'mousedown') {
                    // For mousedown events we only stop the scroll animation of the mouse has
                    // been clicked inside the scrolling container
                    if (!pageScrollInstance.scrollingViews.some(function (scrollingView) { return scrollingView.contains(event.target); })) {
                        // Mouse clicked an element which is not inside any of the the scrolling containers
                        shouldStop = false;
                    }
                }
                if (shouldStop) {
                    _this.stopAll(pageScrollInstance.namespace);
                }
            }
        };
        if (PageScrollService.instanceCounter > 0 && core.isDevMode()) {
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
    PageScrollService.prototype.stopInternal = function (interrupted, pageScrollInstance) {
        var /** @type {?} */ index = this.runningInstances.indexOf(pageScrollInstance);
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
    };
    /**
     * Start a scroll animation. All properties of the animation are stored in the given {\@link PageScrollInstance} object.
     *
     * This is the core functionality of the whole library.
     *
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.start = function (pageScrollInstance) {
        var _this = this;
        // Stop all possibly running scroll animations in the same namespace
        this.stopAll(pageScrollInstance.namespace);
        if (pageScrollInstance.scrollingViews === null || pageScrollInstance.scrollingViews.length === 0) {
            // No scrollingViews specified, thus we can't animate anything
            if (core.isDevMode()) {
                console.warn('No scrollingViews specified, this ng2-page-scroll does not know which DOM elements to scroll');
            }
            return;
        }
        var /** @type {?} */ startScrollPositionFound = false;
        // Reset start scroll position to 0. If any of the scrollingViews has a different one, it will be extracted next
        pageScrollInstance.startScrollPosition = 0;
        // Get the start scroll position from the scrollingViews (e.g. if the user already scrolled down the content)
        pageScrollInstance.scrollingViews.forEach(function (scrollingView) {
            if (PageScrollUtilService.isUndefinedOrNull(scrollingView)) {
                return;
            }
            // Get the scrollTop or scrollLeft value of the first scrollingView that returns a value for its "scrollTop"
            // or "scrollLeft" property that is not undefined and unequal to 0
            var /** @type {?} */ scrollPosition = pageScrollInstance.getScrollPropertyValue(scrollingView);
            if (!startScrollPositionFound && scrollPosition) {
                // We found a scrollingView that does not have scrollTop or scrollLeft 0
                // Return the scroll position value, as this will be our startScrollPosition
                pageScrollInstance.startScrollPosition = scrollPosition;
                startScrollPositionFound = true;
            }
        });
        var /** @type {?} */ pageScrollOffset = pageScrollInstance.getCurrentOffset();
        // Calculate the target position that the scroll animation should go to
        var /** @type {?} */ scrollTargetPosition = pageScrollInstance.extractScrollTargetPosition();
        pageScrollInstance.targetScrollPosition = Math.round((pageScrollInstance.verticalScrolling ? scrollTargetPosition.top : scrollTargetPosition.left) - pageScrollOffset);
        // Calculate the distance we need to go in total
        pageScrollInstance.distanceToScroll = pageScrollInstance.targetScrollPosition - pageScrollInstance.startScrollPosition;
        if (isNaN(pageScrollInstance.distanceToScroll)) {
            // We weren't able to find the target position, maybe the element does not exist?
            if (core.isDevMode()) {
                // console.log('Scrolling not possible, as we can\'t find the specified target');
            }
            pageScrollInstance.fireEvent(false);
            return;
        }
        // We're at the final destination already
        // OR we need to scroll down but are already at the end
        // OR we need to scroll up but are at the top already
        var /** @type {?} */ allReadyAtDestination = Math.abs(pageScrollInstance.distanceToScroll) < PageScrollConfig._minScrollDistance;
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
        var /** @type {?} */ tooShortInterval = pageScrollInstance.executionDuration <= PageScrollConfig._interval;
        if (allReadyAtDestination || tooShortInterval) {
            if (core.isDevMode()) {
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
        pageScrollInstance.timer = setInterval(function (_pageScrollInstance) {
            // Take the current time
            var /** @type {?} */ currentTime = new Date().getTime();
            // Determine the new scroll position
            var /** @type {?} */ newScrollPosition;
            var /** @type {?} */ stopNow = false;
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
                _this.stopInternal(false, _pageScrollInstance);
            }
        }, PageScrollConfig._interval, pageScrollInstance);
        // Register the instance as running one
        this.runningInstances.push(pageScrollInstance);
    };
    /**
     * Stop all running scroll animations. Optionally limit to stop only the ones of specific namespace.
     *
     * @param {?=} namespace
     * @return {?}
     */
    PageScrollService.prototype.stopAll = function (namespace) {
        if (this.runningInstances.length > 0) {
            var /** @type {?} */ stoppedSome = false;
            for (var /** @type {?} */ i = 0; i < this.runningInstances.length; ++i) {
                var /** @type {?} */ pageScrollInstance = this.runningInstances[i];
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
    };
    /**
     * @param {?} pageScrollInstance
     * @return {?}
     */
    PageScrollService.prototype.stop = function (pageScrollInstance) {
        return this.stopInternal(true, pageScrollInstance);
    };
    return PageScrollService;
}());
PageScrollService.instanceCounter = 0;
PageScrollService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
PageScrollService.ctorParameters = function () { return []; };
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
var PageScrollInstance = /** @class */ (function () {
    /**
     * Private constructor, requires the properties assumed to be the bare minimum.
     * Use the factory methods to create instances:
     *      {\@link PageScrollInstance#simpleInstance}
     *      {\@link PageScrollInstance#newInstance}
     * @param {?} namespace
     * @param {?} document
     */
    function PageScrollInstance(namespace, document) {
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
        this._pageScrollFinish = new core.EventEmitter();
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
    PageScrollInstance.simpleInstance = function (document, scrollTarget, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace
        });
    };
    /**
     * @param {?} options
     * @return {?}
     */
    PageScrollInstance.newInstance = function (options) {
        if (PageScrollUtilService.isUndefinedOrNull(options.namespace) || options.namespace.length <= 0) {
            options.namespace = PageScrollConfig._defaultNamespace;
        }
        // const pageScrollInstance: PageScrollInstance = new PageScrollInstance(options.namespace, document);
        var /** @type {?} */ pageScrollInstance = new PageScrollInstance(options.namespace, document);
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
    };
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
    PageScrollInstance.simpleDirectionInstance = function (document, scrollTarget, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
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
    PageScrollInstance.simpleInlineInstance = function (document, scrollTarget, scrollingView, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            verticalScrolling: true,
            namespace: namespace
        });
    };
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
    PageScrollInstance.simpleInlineDirectionInstance = function (document, scrollTarget, scrollingView, verticalScrolling, namespace) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: [scrollingView],
            namespace: namespace,
            verticalScrolling: verticalScrolling,
        });
    };
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
    PageScrollInstance.advancedInstance = function (document, scrollTarget, scrollingViews, namespace, verticalScrolling, pageScrollOffset, pageScrollInterruptible, pageScrollEasingLogic, pageScrollDuration, pageScrollFinishListener) {
        return PageScrollInstance.newInstance({
            document: document,
            scrollTarget: scrollTarget,
            scrollingViews: scrollingViews,
            namespace: namespace,
            verticalScrolling: verticalScrolling,
            pageScrollOffset: pageScrollOffset,
            pageScrollInterruptible: pageScrollInterruptible,
            pageScrollEasingLogic: pageScrollEasingLogic,
            pageScrollDuration: pageScrollDuration,
            pageScrollFinishListener: pageScrollFinishListener
        });
    };
    /**
     * @param {?} scrollingView
     * @return {?}
     */
    PageScrollInstance.prototype.getScrollPropertyValue = function (scrollingView) {
        if (!this.verticalScrolling) {
            return scrollingView.scrollLeft;
        }
        return scrollingView.scrollTop;
    };
    /**
     * Extract the exact location of the scrollTarget element.
     *
     * Extract the scrollTarget HTMLElement from the given PageScrollTarget object. The latter one may be
     * a string like "#heading2", then this method returns the corresponding DOM element for that id.
     *
     * @return {?}
     */
    PageScrollInstance.prototype.extractScrollTargetPosition = function () {
        // let scrollTargetElement: HTMLElement;
        var /** @type {?} */ scrollTargetElement;
        if (typeof this._scrollTarget === 'string') {
            scrollTargetElement = this.document.getElementById(((this._scrollTarget)).substr(1));
        }
        else {
            scrollTargetElement = /** @type {?} */ (this._scrollTarget);
        }
        if (scrollTargetElement === null || scrollTargetElement === undefined) {
            // Scroll target not found
            return { top: NaN, left: NaN };
        }
        if (this._isInlineScrolling) {
            var /** @type {?} */ position = { top: scrollTargetElement.offsetTop, left: scrollTargetElement.offsetLeft };
            if (this._advancedInlineOffsetCalculation && this.scrollingViews.length === 1) {
                var /** @type {?} */ accumulatedParentsPos = { top: 0, left: 0 };
                // not named window to make sure we're not getting the global window variable by accident
                var /** @type {?} */ theWindow = scrollTargetElement.ownerDocument.defaultView;
                var /** @type {?} */ parentFound = false;
                // Start parent is the immediate parent
                // let parent = scrollTargetElement.parentElement;
                var /** @type {?} */ parent = scrollTargetElement.parentElement;
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
    };
    /**
     * Get the top offset of the scroll animation.
     * This automatically takes the offset location of the scrolling container/scrolling view
     * into account (for nested/inline scrolling).
     *
     * @return {?}
     */
    PageScrollInstance.prototype.getCurrentOffset = function () {
        return this._offset;
    };
    /**
     * Sets the "scrollTop" or "scrollLeft" property for all scrollingViews to the provided value
     * @param {?} position
     * @return {?} true if at least for one ScrollTopSource the scrollTop/scrollLeft value could be set and it kept the new value.
     *          false if it failed for all ScrollingViews, meaning that we should stop the animation
     *          (probably because we're at the end of the scrolling region)
     */
    PageScrollInstance.prototype.setScrollPosition = function (position) {
        var _this = this;
        if (PageScrollConfig._logLevel >= 5) {
            console.warn('Scroll Position: ' + position);
        }
        // Set the new scrollTop/scrollLeft to all scrollingViews elements
        return this.scrollingViews.reduce(function (oneAlreadyWorked, scrollingView) {
            var /** @type {?} */ startScrollPropertyValue = _this.getScrollPropertyValue(scrollingView);
            if (scrollingView && !PageScrollUtilService.isUndefinedOrNull(startScrollPropertyValue)) {
                var /** @type {?} */ scrollDistance = Math.abs(startScrollPropertyValue - position);
                // The movement we need to perform is less than 2px
                // This we consider a small movement which some browser may not perform when
                // changing the scrollTop/scrollLeft property
                // Thus in this cases we do not stop the scroll animation, although setting the
                // scrollTop/scrollLeft value "fails"
                var /** @type {?} */ isSmallMovement = scrollDistance < PageScrollConfig._minScrollDistance;
                if (!_this.verticalScrolling) {
                    scrollingView.scrollLeft = position;
                }
                else {
                    scrollingView.scrollTop = position;
                }
                // Return true of setting the new scrollTop/scrollLeft value worked
                // We consider that it worked if the new scrollTop/scrollLeft value is closer to the
                // desired scrollTop/scrollLeft than before (it might not be exactly the value we
                // set due to dpi or rounding irregularities)
                if (isSmallMovement || scrollDistance > Math.abs(_this.getScrollPropertyValue(scrollingView) - position)) {
                    return true;
                }
            }
            return oneAlreadyWorked;
        }, false);
    };
    /**
     * Trigger firing a animation finish event
     * @param {?} value Whether the animation finished at the target (true) or got interrupted (false)
     * @return {?}
     */
    PageScrollInstance.prototype.fireEvent = function (value) {
        if (this._pageScrollFinish) {
            this._pageScrollFinish.emit(value);
        }
    };
    /**
     * Attach the interrupt listeners to the PageScrollInstance body. The given interruptReporter
     * will be called if any of the attached events is fired.
     *
     * Possibly attached interruptListeners are automatically removed from the body before the new one will be attached.
     *
     * @param {?} interruptReporter
     * @return {?}
     */
    PageScrollInstance.prototype.attachInterruptListeners = function (interruptReporter) {
        var _this = this;
        if (this._interruptListenersAttached) {
            // Detach possibly existing listeners first
            this.detachInterruptListeners();
        }
        this._interruptListener = function (event) {
            interruptReporter.report(event, _this);
        };
        PageScrollConfig._interruptEvents.forEach(function (event) { return _this.document.body.addEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = true;
    };
    /**
     * Remove event listeners from the body and stop listening for events that might be treated as "animation
     * interrupt" events.
     * @return {?}
     */
    PageScrollInstance.prototype.detachInterruptListeners = function () {
        var _this = this;
        PageScrollConfig._interruptEvents.forEach(function (event) { return _this.document.body.removeEventListener(event, _this._interruptListener); });
        this._interruptListenersAttached = false;
    };
    Object.defineProperty(PageScrollInstance.prototype, "namespace", {
        /**
         * @return {?}
         */
        get: function () {
            return this._namespace;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollTarget", {
        /**
         * @return {?}
         */
        get: function () {
            return this._scrollTarget;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "verticalScrolling", {
        /**
         * @return {?}
         */
        get: function () {
            return this._verticalScrolling;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "scrollingViews", {
        /**
         * @return {?}
         */
        get: function () {
            return this._scrollingViews;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startScrollPosition", {
        /**
         * @return {?}
         */
        get: function () {
            return this._startScrollPosition;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._startScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "targetScrollPosition", {
        /**
         * @return {?}
         */
        get: function () {
            return this._targetScrollPosition;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._targetScrollPosition = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "distanceToScroll", {
        /**
         * @return {?}
         */
        get: function () {
            return this._distanceToScroll;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._distanceToScroll = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "executionDuration", {
        /**
         * @return {?}
         */
        get: function () {
            return this._executionDuration;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._executionDuration = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "duration", {
        /**
         * @return {?}
         */
        get: function () {
            return this._duration;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "speed", {
        /**
         * @return {?}
         */
        get: function () {
            return this._speed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "easingLogic", {
        /**
         * @return {?}
         */
        get: function () {
            return this._easingLogic;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptible", {
        /**
         * @return {?}
         */
        get: function () {
            return this._interruptible;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "startTime", {
        /**
         * @return {?}
         */
        get: function () {
            return this._startTime;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._startTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "endTime", {
        /**
         * @return {?}
         */
        get: function () {
            return this._endTime;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._endTime = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "timer", {
        /**
         * @return {?}
         */
        get: function () {
            return this._timer;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._timer = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(PageScrollInstance.prototype, "interruptListenersAttached", {
        /**
         * @return {?}
         */
        get: function () {
            return this._interruptListenersAttached;
        },
        enumerable: true,
        configurable: true
    });
    return PageScrollInstance;
}());
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
var PageScrollDirective = /** @class */ (function () {
    /**
     * @param {?} pageScrollService
     * @param {?} router
     * @param {?} document
     */
    function PageScrollDirective(pageScrollService, router$$1, document) {
        this.pageScrollService = pageScrollService;
        this.router = router$$1;
        this.pageScrollHorizontal = null;
        this.pageScrollOffset = null;
        this.pageScrollDuration = null;
        this.pageScrollSpeed = null;
        this.pageScrollEasing = null;
        this.pageScrollAdjustHash = false;
        this.pageScroll = null;
        this.pageScrollFinish = new core.EventEmitter();
        this.document = /** @type {?} */ (document);
    }
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnChanges = function () {
        // Some inputs changed, reset the pageScrollInstance
        this.pageScrollInstance = undefined;
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.ngOnDestroy = function () {
        if (this.pageScrollInstance) {
            this.pageScrollService.stop(this.pageScrollInstance);
        }
        return undefined;
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.generatePageScrollInstance = function () {
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
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.pushRouterState = function () {
        if (this.pageScrollAdjustHash && typeof this.pageScrollInstance.scrollTarget === 'string'
            && this.pageScrollInstance.scrollTarget.substr(0, 1) === '#') {
            // "Navigate" to the current route again and this time set the fragment/hash
            this.router.navigate([], {
                fragment: /** @type {?} */ (this.pageScrollInstance.scrollTarget.substr(1)),
                preserveQueryParams: true
            });
        }
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.scroll = function () {
        var /** @type {?} */ pageScrollInstance = this.generatePageScrollInstance();
        this.pushRouterState();
        this.pageScrollService.start(pageScrollInstance);
    };
    /**
     * @return {?}
     */
    PageScrollDirective.prototype.handleClick = function () {
        var _this = this;
        if (this.routerLink && this.router !== null && this.router !== undefined) {
            var /** @type {?} */ urlTree = void 0;
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
                var /** @type {?} */ subscription_1 = (this.router.events.subscribe(function (routerEvent) {
                    if (routerEvent instanceof router.NavigationEnd) {
                        subscription_1.unsubscribe();
                        _this.scroll();
                    }
                    else if (routerEvent instanceof router.NavigationError || routerEvent instanceof router.NavigationCancel) {
                        subscription_1.unsubscribe();
                    }
                }));
                return false; // to preventDefault()
            }
        }
        this.scroll();
        return false; // to preventDefault()
    };
    return PageScrollDirective;
}());
PageScrollDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbPageScroll]'
            },] },
];
/** @nocollapse */
PageScrollDirective.ctorParameters = function () { return [
    { type: PageScrollService, },
    { type: router.Router, decorators: [{ type: core.Optional },] },
    { type: undefined, decorators: [{ type: core.Inject, args: [platformBrowser.DOCUMENT,] },] },
]; };
PageScrollDirective.propDecorators = {
    "routerLink": [{ type: core.Input },],
    "href": [{ type: core.Input },],
    "pageScrollHorizontal": [{ type: core.Input },],
    "pageScrollOffset": [{ type: core.Input },],
    "pageScrollDuration": [{ type: core.Input },],
    "pageScrollSpeed": [{ type: core.Input },],
    "pageScrollEasing": [{ type: core.Input },],
    "pageScrollInterruptible": [{ type: core.Input },],
    "pageScrollAdjustHash": [{ type: core.Input },],
    "pageScroll": [{ type: core.Input },],
    "pageScrollFinish": [{ type: core.Output },],
    "handleClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
* Created by sebastianfuss on 03.09.16.
*/
var SmoothscrollModule = /** @class */ (function () {
    function SmoothscrollModule() {
    }
    /**
     * @return {?}
     */
    SmoothscrollModule.forRoot = function () {
        return {
            ngModule: SmoothscrollModule,
            providers: [
                { provide: PageScrollService, useClass: PageScrollService }
            ]
        };
    };
    return SmoothscrollModule;
}());
SmoothscrollModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
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
    var /** @type {?} */ el;
    el = (typeof element === 'string') ? ((document.querySelector(/** @type {?} */ (element)))) : element;
    var /** @type {?} */ value;
    var /** @type {?} */ defaultView = (el.ownerDocument || document).defaultView;
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
                var /** @type {?} */ oldLeft = el.style.left, /** @type {?} */ oldRsLeft = el['runtimeStyle'].left;
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
var MdbStickyDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} platformId
     */
    function MdbStickyDirective(el, platformId) {
        var _this = this;
        this.isBrowser = false;
        this.stickyOffsetTop = 0;
        this.scrollHandler = function () {
            // let elRect: ClientRect = this.el.getBoundingClientRect();
            var /** @type {?} */ parentRect = _this.el.parentElement.getBoundingClientRect();
            var /** @type {?} */ bodyRect = document.body.getBoundingClientRect();
            var /** @type {?} */ dynProps;
            if (_this.original.float === 'right') {
                var /** @type {?} */ right = bodyRect.right - parentRect.right + _this.original.marginRight;
                dynProps = { right: right + 'px' };
            }
            else if (_this.original.float === 'left') {
                var /** @type {?} */ left = parentRect.left - bodyRect.left + _this.original.marginLeft;
                dynProps = { left: left + 'px' };
            }
            else {
                // console.log('parentRect..............', parentRect.width);
                dynProps = { width: parentRect.width + 'px' };
            }
            // console.log('dynProps', dynProps);
            if (_this.original.marginTop + _this.original.marginBottom +
                _this.original.boundingClientRect.height + _this.stickyOffsetTop >= parentRect.bottom) {
                /**
                 * stikcy element reached to the bottom of the container
                 */
                var /** @type {?} */ floatAdjustment = _this.original.float === 'right' ? { right: 0 } :
                    _this.original.float === 'left' ? { left: 0 } : {};
                Object.assign(_this.el.style, {
                    position: 'absolute',
                    float: 'none',
                    top: 'inherit',
                    bottom: 0
                }, dynProps, floatAdjustment);
            }
            else if (parentRect.top * -1 + _this.original.marginTop + _this.stickyOffsetTop > _this.original.offsetTop) {
                /**
                            * stikcy element is in the middle of container
                            */
                // console.log('case 2 (fixed)', parentRect.top * -1, this.original.marginTop, this.original.offsetTop);
                // if not floating, add an empty filler element, since the original elements becames 'fixed'
                if (_this.original.float !== 'left' && _this.original.float !== 'right' && !_this.fillerEl) {
                    _this.fillerEl = document.createElement('div');
                    _this.fillerEl.style.height = _this.el.offsetHeight + 'px';
                    _this.parentEl.insertBefore(_this.fillerEl, _this.el);
                }
                Object.assign(_this.el.style, {
                    position: 'fixed',
                    // fixed is a lot smoother than absolute
                    float: 'none',
                    top: _this.stickyOffsetTop + 'px',
                    bottom: 'inherit'
                }, dynProps);
            }
            else {
                /**
                            * stikcy element is in the original position
                            */
                // console.log('case 3 (original)');
                if (_this.fillerEl) {
                    _this.parentEl.removeChild(_this.fillerEl); // IE11 does not work with el.remove()
                    _this.fillerEl = undefined;
                }
                Object.assign(_this.el.style, {
                    position: _this.original.position,
                    float: _this.original.float,
                    top: _this.original.top,
                    bottom: _this.original.bottom,
                    width: _this.original.width,
                    left: _this.original.left
                }, dynProps);
            }
        };
        this.el = this.el = el.nativeElement;
        this.parentEl = this.el.parentElement;
        this.isBrowser = common.isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngAfterViewInit = function () {
        this.el.style.boxSizing = 'border-box';
        if (this.stickyAfter) {
            var /** @type {?} */ cetStickyAfterEl = document.querySelector(this.stickyAfter);
            if (cetStickyAfterEl) {
                this.stickyOffsetTop = cetStickyAfterEl.getBoundingClientRect().bottom;
            }
        }
        // set the parent relatively positioned
        var /** @type {?} */ allowedPositions = ['absolute', 'fixed', 'relative'];
        var /** @type {?} */ parentElPosition = computedStyle(this.parentEl, 'position');
        if (allowedPositions.indexOf(parentElPosition) === -1) {
            // inherit, initial, unset
            this.parentEl.style.position = 'relative';
        }
        this.diff = {
            top: this.el.offsetTop - this.parentEl.offsetTop,
            left: this.el.offsetLeft - this.parentEl.offsetLeft
        };
        if (this.isBrowser) {
            var /** @type {?} */ elRect = this.el.getBoundingClientRect();
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
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.ngOnDestroy = function () {
        this.detach();
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.attach = function () {
        window.addEventListener('scroll', this.scrollHandler);
        window.addEventListener('resize', this.scrollHandler);
    };
    /**
     * @return {?}
     */
    MdbStickyDirective.prototype.detach = function () {
        window.removeEventListener('scroll', this.scrollHandler);
        window.removeEventListener('resize', this.scrollHandler);
    };
    return MdbStickyDirective;
}());
MdbStickyDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbSticky]'
            },] },
];
/** @nocollapse */
MdbStickyDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
]; };
MdbStickyDirective.propDecorators = {
    "stickyAfter": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var StickyContentModule = /** @class */ (function () {
    function StickyContentModule() {
    }
    return StickyContentModule;
}());
StickyContentModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, forms.FormsModule],
                declarations: [MdbStickyDirective],
                exports: [MdbStickyDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsetConfig = /** @class */ (function () {
    function TabsetConfig() {
        /**
         * provides default navigation context class: 'tabs' or 'pills'
         */
        this.type = 'tabs';
    }
    return TabsetConfig;
}());
TabsetConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WavesDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function WavesDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    WavesDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var /** @type {?} */ button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var /** @type {?} */ xPos = event.clientX - button.getBoundingClientRect().left;
            var /** @type {?} */ yPos = event.clientY - button.getBoundingClientRect().top;
            var /** @type {?} */ tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var /** @type {?} */ ripple = button.appendChild(tmp);
            var /** @type {?} */ top = yPos + 'px';
            var /** @type {?} */ left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            var /** @type {?} */ scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var /** @type {?} */ duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    WavesDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return WavesDirective;
}());
WavesDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbWavesEffect]'
            },] },
];
/** @nocollapse */
WavesDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
WavesDirective.propDecorators = {
    "click": [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsetComponent = /** @class */ (function () {
    /**
     * @param {?} config
     * @param {?} ripple
     */
    function TabsetComponent(config, ripple) {
        this.ripple = ripple;
        this.tabs = [];
        this.classMap = {};
        this.clazz = true;
        this.showBsTab = new core.EventEmitter();
        this.shownBsTab = new core.EventEmitter();
        this.hideBsTab = new core.EventEmitter();
        this.hiddenBsTab = new core.EventEmitter();
        Object.assign(this, config);
    }
    Object.defineProperty(TabsetComponent.prototype, "vertical", {
        /**
         * @return {?}
         */
        get: function () {
            return this._vertical;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._vertical = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.setActiveTab = function (index) {
        this.tabs[index - 1].active = true;
    };
    Object.defineProperty(TabsetComponent.prototype, "justified", {
        /**
         * if true tabs fill the container and have a consistent width
         * @return {?}
         */
        get: function () {
            return this._justified;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._justified = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(TabsetComponent.prototype, "type", {
        /**
         * navigation context class: 'tabs' or 'pills'
         * @return {?}
         */
        get: function () {
            return this._type;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._type = value;
            this.setClassMap();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.click = function (event, index) {
        var /** @type {?} */ prev = this.tabEl.toArray()[this.getActive()];
        var /** @type {?} */ clicked = this.tabEl.toArray()[index];
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
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnDestroy = function () {
        this.isDestroyed = true;
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.getActive = function () {
        var /** @type {?} */ tabs = this.tabs.map(function (object, index) {
            return {
                index: index,
                object: object
            };
        });
        for (var _i = 0, tabs_1 = tabs; _i < tabs_1.length; _i++) {
            var tab = tabs_1[_i];
            if (tab.object.active) {
                return tab.index;
            }
        }
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.addTab = function (tab) {
        this.tabs.push(tab);
        tab.active = this.tabs.length === 1 && tab.active !== false;
    };
    /**
     * @param {?} tab
     * @return {?}
     */
    TabsetComponent.prototype.removeTab = function (tab) {
        var /** @type {?} */ index = this.tabs.indexOf(tab);
        if (index === -1 || this.isDestroyed) {
            return;
        }
        // Select a new tab if the tab to be removed is selected and not destroyed
        if (tab.active && this.hasAvailableTabs(index)) {
            var /** @type {?} */ newActiveIndex = this.getClosestTabIndex(index);
            this.tabs[newActiveIndex].active = true;
        }
        tab.removed.emit(tab);
        this.tabs.splice(index, 1);
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.getClosestTabIndex = function (index) {
        var /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return -1;
        }
        for (var /** @type {?} */ step = 1; step <= tabsLength; step += 1) {
            var /** @type {?} */ prevIndex = index - step;
            var /** @type {?} */ nextIndex = index + step;
            if (this.tabs[prevIndex] && !this.tabs[prevIndex].disabled) {
                return prevIndex;
            }
            if (this.tabs[nextIndex] && !this.tabs[nextIndex].disabled) {
                return nextIndex;
            }
        }
        return -1;
    };
    /**
     * @param {?} index
     * @return {?}
     */
    TabsetComponent.prototype.hasAvailableTabs = function (index) {
        var /** @type {?} */ tabsLength = this.tabs.length;
        if (!tabsLength) {
            return false;
        }
        for (var /** @type {?} */ i = 0; i < tabsLength; i += 1) {
            if (!this.tabs[i].disabled && i !== index) {
                return true;
            }
        }
        return false;
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.setClassMap = function () {
        this.classMap = {
            'nav-stacked': this.vertical,
            'nav-justified': this.justified,
        };
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.listGet = function () {
        if (this.vertical) {
            this.listGetClass = 'col-md-3';
        }
        else {
            this.listGetClass = 'col-md-12';
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.tabsGet = function () {
        if (this.vertical) {
            this.tabsGetClass = 'col-md-9';
        }
        else {
            this.tabsGetClass = 'col-md-12';
        }
    };
    /**
     * @return {?}
     */
    TabsetComponent.prototype.ngOnInit = function () {
        this.listGet();
        this.tabsGet();
    };
    return TabsetComponent;
}());
TabsetComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-tabset',
                template: "<div class=\"container-fluid\">  <div class=\"row\"> <div class=\"{{ listGetClass }}\"> <ul class=\"nav {{ buttonClass }}\" [ngClass]=\"classMap\" (click)=\"$event.preventDefault()\"> <li *ngFor=\"let tabz of tabs;let i = index\" [ngClass]=\"['nav-item', tabz.customClass || '']\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\" (click)=\"click($event, i)\"> <a #tabEl href=\"javascript:void(0);\" class=\"nav-link waves-light\" [class.active]=\"tabz.active\" [class.disabled]=\"tabz.disabled\"> <span [mdbNgTransclude]=\"tabz.headingRef\" [innerHTML]=\"tabz.heading\"></span> <span *ngIf=\"tabz.removable\"> <span (click)=\"$event.preventDefault(); removeTab(tabz);\" class=\"glyphicon glyphicon-remove-circle\"> </span> </span> </a> </li> </ul> </div> <div class=\"{{ tabsGetClass }}\"> <div class=\"tab-content {{ contentClass }}\"> <ng-content></ng-content> </div> </div> </div> </div>",
                providers: [WavesDirective]
            },] },
];
/** @nocollapse */
TabsetComponent.ctorParameters = function () { return [
    { type: TabsetConfig, },
    { type: WavesDirective, },
]; };
TabsetComponent.propDecorators = {
    "clazz": [{ type: core.HostBinding, args: ['class.tab-container',] },],
    "buttonClass": [{ type: core.Input },],
    "contentClass": [{ type: core.Input },],
    "tabEl": [{ type: core.ViewChildren, args: ['tabEl', { read: core.ElementRef },] },],
    "showBsTab": [{ type: core.Output },],
    "shownBsTab": [{ type: core.Output },],
    "hideBsTab": [{ type: core.Output },],
    "hiddenBsTab": [{ type: core.Output },],
    "vertical": [{ type: core.Input },],
    "justified": [{ type: core.Input },],
    "type": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabDirective = /** @class */ (function () {
    /**
     * @param {?} tabset
     * @param {?} el
     */
    function TabDirective(tabset, el) {
        /**
         * fired when tab became active, $event:Tab equals to selected instance of Tab component
         */
        this.select = new core.EventEmitter();
        /**
         * fired when tab became inactive, $event:Tab equals to deselected instance of Tab component
         */
        this.deselect = new core.EventEmitter();
        /**
         * fired before tab will be removed
         */
        this.removed = new core.EventEmitter();
        this.addClass = true;
        this.test = true;
        this.el = null;
        this.el = el;
        this.tabset = tabset;
        this.tabset.addTab(this);
    }
    Object.defineProperty(TabDirective.prototype, "active", {
        /**
         * tab active state toggle
         * @return {?}
         */
        get: function () {
            return this._active;
        },
        /**
         * @param {?} active
         * @return {?}
         */
        set: function (active) {
            var _this = this;
            if (this.disabled && active || !active) {
                if (!active) {
                    this.removeClass(this.el.nativeElement, 'show');
                    setTimeout(function () {
                        _this._active = active;
                        _this.deselect.emit(_this);
                    }, 150);
                }
                return;
            }
            setTimeout(function () {
                _this._active = active;
                _this.classAdd(_this.el.nativeElement, 'show');
            }, 150);
            this.select.emit(this);
            this.tabset.tabs.forEach(function (mdbTab) {
                if (mdbTab !== _this) {
                    mdbTab.active = false;
                }
            });
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TabDirective.prototype.ngOnInit = function () {
        this.removable = this.removable;
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    TabDirective.prototype.hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    TabDirective.prototype.classAdd = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    TabDirective.prototype.removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            var /** @type {?} */ reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    return TabDirective;
}());
TabDirective.decorators = [
    { type: core.Directive, args: [{ selector: 'mdb-tab, [mdbTab]' },] },
];
/** @nocollapse */
TabDirective.ctorParameters = function () { return [
    { type: TabsetComponent, },
    { type: core.ElementRef, },
]; };
TabDirective.propDecorators = {
    "heading": [{ type: core.Input },],
    "disabled": [{ type: core.Input },],
    "removable": [{ type: core.Input },],
    "customClass": [{ type: core.Input },],
    "active": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.Input },],
    "select": [{ type: core.Output },],
    "deselect": [{ type: core.Output },],
    "removed": [{ type: core.Output },],
    "addClass": [{ type: core.HostBinding, args: ['class.tab-pane',] },],
    "test": [{ type: core.HostBinding, args: ['class.fade',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Should be used to mark <template> element as a template for tab heading
 */
var TabHeadingDirective = /** @class */ (function () {
    /**
     * @param {?} templateRef
     * @param {?} tab
     */
    function TabHeadingDirective(templateRef, tab) {
        tab.headingRef = templateRef;
    }
    return TabHeadingDirective;
}());
TabHeadingDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[mdbTabHeading]' },] },
];
/** @nocollapse */
TabHeadingDirective.ctorParameters = function () { return [
    { type: core.TemplateRef, },
    { type: TabDirective, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NgTranscludeDirective = /** @class */ (function () {
    /**
     * @param {?} viewRef
     */
    function NgTranscludeDirective(viewRef) {
        this.viewRef = viewRef;
    }
    Object.defineProperty(NgTranscludeDirective.prototype, "mdbNgTransclude", {
        /**
         * @return {?}
         */
        get: function () {
            return this._ngTransclude;
        },
        /**
         * @param {?} templateRef
         * @return {?}
         */
        set: function (templateRef) {
            this._ngTransclude = templateRef;
            if (templateRef) {
                this.viewRef.createEmbeddedView(templateRef);
            }
        },
        enumerable: true,
        configurable: true
    });
    return NgTranscludeDirective;
}());
NgTranscludeDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbNgTransclude]'
            },] },
];
/** @nocollapse */
NgTranscludeDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
]; };
NgTranscludeDirective.propDecorators = {
    "mdbNgTransclude": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TabsModule = /** @class */ (function () {
    function TabsModule() {
    }
    /**
     * @return {?}
     */
    TabsModule.forRoot = function () {
        return {
            ngModule: TabsModule,
            providers: [TabsetConfig]
        };
    };
    return TabsModule;
}());
TabsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [NgTranscludeDirective, TabDirective, TabsetComponent, TabHeadingDirective],
                exports: [TabDirective, TabsetComponent, TabHeadingDirective, NgTranscludeDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return MaterialChipsComponent; }),
    multi: true
};
var MaterialChipsComponent = /** @class */ (function () {
    function MaterialChipsComponent() {
        this.placeholder = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange = new core.EventEmitter();
        this.labelsChange = new core.EventEmitter();
        this.onTouchedCallback = this.noop;
        this.onChangeCallback = this.noop;
        this.onTouchedCallback = this.onTouchedCallback === undefined ? this.noop : this.onTouchedCallback;
        this.onChangeCallback = this.onChangeCallback === undefined ? this.noop : this.onChangeCallback;
    }
    Object.defineProperty(MaterialChipsComponent.prototype, "tagsfocused", {
        /**
         * @return {?}
         */
        get: function () {
            return this.isTagsFocused;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} fn
     * @return {?}
     */
    MaterialChipsComponent.prototype.registerOnChange = function (fn) { this.onChangeCallback = fn; };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaterialChipsComponent.prototype.registerOnTouched = function (fn) { this.onTouchedCallback = fn; };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.removeValue = function (value) {
        var /** @type {?} */ index = this.values.indexOf(value, 0);
        if (index !== undefined) {
            this.values.splice(index, 1);
            this.labelsChange.emit(this.values);
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.addValue = function (value) {
        if (!value || value.trim() === '') {
            return;
        }
        this.values.push(value);
        this.labelsChange.emit(this.values);
        this.labelToAdd = '';
    };
    /**
     * @param {?} value
     * @return {?}
     */
    MaterialChipsComponent.prototype.writeValue = function (value) {
        if (value !== this.values) {
            this.values = value;
        }
    };
    /**
     * @return {?}
     */
    MaterialChipsComponent.prototype.onFocus = function () {
        this.focused = 'md-focused';
        this.isTagsFocused = true;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    /**
     * @return {?}
     */
    MaterialChipsComponent.prototype.focusOutFunction = function () {
        this.focused = '';
        this.isTagsFocused = false;
        this.tagsfocusedChange.emit(this.isTagsFocused);
    };
    return MaterialChipsComponent;
}());
MaterialChipsComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-material-chips',
                template: "<div *ngIf=\"values && values.length\" class=\"md-chip-list\"  [ngClass]=\"focused\"> <span *ngFor=\"let value of values\" class=\"md-chip\" selected >          {{value}} <i class=\"close fa fa-times\" aria-hidden=\"true\" (click)=\"removeValue(value)\" ></i> </span> <span> <input  [(ngModel)]=\"labelToAdd\"  (keyup.enter)=\"addValue(box.value, $event);$event.preventDefault()\" (focus)=\"onFocus()\"  (focusout)=\"focusOutFunction()\"   #box /> </span> </div> <div *ngIf=\"!values || !values.length\"> <input class=\"md-chips-input\" placeholder=\"{{ placeholder }}\" #tbox  (keyup.enter)=\"addValue(tbox.value, $event);$event.preventDefault()\"/> </div>",
                providers: [CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR]
            },] },
];
/** @nocollapse */
MaterialChipsComponent.ctorParameters = function () { return []; };
MaterialChipsComponent.propDecorators = {
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "tagsfocusedChange": [{ type: core.Output },],
    "labelsChange": [{ type: core.Output },],
    "tagsfocused": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MaterialChipsModule = /** @class */ (function () {
    function MaterialChipsModule() {
    }
    return MaterialChipsModule;
}());
MaterialChipsModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, forms.FormsModule],
                declarations: [MaterialChipsComponent],
                exports: [MaterialChipsComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TIME_PIRCKER_VALUE_ACCESSOT = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return ClockPickerComponent; }),
    multi: true
};
var ClockPickerComponent = /** @class */ (function () {
    /**
     * @param {?} elem
     * @param {?} renderer
     */
    function ClockPickerComponent(elem, renderer) {
        var _this = this;
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
        this.onChangeCb = function () { };
        this.onTouchedCb = function () { };
        renderer.listen(this.elem.nativeElement, 'click', function (event) {
            if (_this.showClock &&
                event.target &&
                _this.elem.nativeElement !== event.target &&
                !_this.elem.nativeElement.contains(event.target)) {
                _this.showClock = false;
            }
            if (event.target.classList.contains('picker__holder')) {
                _this.showClock = false;
            }
        });
    }
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.ngOnInit = function () {
        this.generateTick();
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.renderer.listen(this.elem.nativeElement.querySelector('.clockpicker-plate'), 'mousedown', function (event) {
            _this.mousedown(event, false);
        });
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.checkDraw = function () {
        var /** @type {?} */ value;
        var /** @type {?} */ isHours = this.showHours;
        if (isHours) {
            value = parseInt(this.selectedHours.h, 0);
        }
        else {
            value = parseInt(this.selectedHours.m, 0);
        }
        var /** @type {?} */ unit = Math.PI / (isHours ? 6 : 30), /** @type {?} */ radian = value * unit, /** @type {?} */ radius = isHours && value > 0 && value < 13 ? this.innerRadius : this.outerRadius, /** @type {?} */ xd = Math.sin(radian) * radius, /** @type {?} */ yd = -Math.cos(radian) * radius;
        this.setHand(xd, yd, false);
    };
    /**
     * @param {?} e
     * @param {?} space
     * @return {?}
     */
    ClockPickerComponent.prototype.mousedown = function (e, space) {
        var _this = this;
        var /** @type {?} */ offset = this.plate.nativeElement.getBoundingClientRect(), /** @type {?} */ isTouch = /^touch/.test(e.type), /** @type {?} */ x0 = offset.left + this.dialRadius, /** @type {?} */ y0 = offset.top + this.dialRadius, /** @type {?} */ dx = (isTouch ? e.originalEvent.touches[0] : e).clientX - x0, /** @type {?} */ dy = (isTouch ? e.originalEvent.touches[0] : e).clientY - y0, /** @type {?} */ z = Math.sqrt(dx * dx + dy * dy);
        var /** @type {?} */ moved = false;
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
        var /** @type {?} */ mousemoveEventMethod = function (event) {
            event.preventDefault();
            event.stopPropagation();
            var /** @type {?} */ x = event.clientX - x0, /** @type {?} */ y = event.clientY - y0;
            if (!moved && x === dx && y === dy) {
                return;
            }
            moved = true;
            _this.setHand(x, y, false);
        };
        var /** @type {?} */ mouseupEventMethod = function (event) {
            document.removeEventListener(_this.mousemoveEvent, mousemoveEventMethod);
            e.preventDefault();
            var /** @type {?} */ x = event.clientX - x0, /** @type {?} */ y = event.clientX - y0;
            if ((space || moved) && x === dx && y === dy) {
                _this.setHand(x, y, false);
            }
            _this.showMinutesClock();
            document.removeEventListener(_this.mouseupEvent, mouseupEventMethod);
        };
        document.addEventListener(this.mousemoveEvent, mousemoveEventMethod);
        document.addEventListener('mouseup', mouseupEventMethod);
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.hideKeyboard = function () {
        var _this = this;
        // this set timeout needed for case when hideKeyborad
        // is called inside of 'onfocus' event handler
        try {
            setTimeout(function () {
                // creating temp field
                // const field = document.createElement('input');
                var /** @type {?} */ field = _this.renderer.createElement('input');
                _this.renderer.appendChild(_this.elem.nativeElement, field);
                var /** @type {?} */ inputReference = _this.elem.nativeElement.lastElementChild;
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setAttribute(inputReference, 'type', 'text');
                _this.renderer.setStyle(inputReference, 'opacity', '0');
                _this.renderer.setStyle(inputReference, '-webkit-user-modify', 'read-write-plaintext-only');
                // // hiding temp field from peoples eyes
                // // -webkit-user-modify is nessesary for Android 4.x
                // adding onfocus event handler for out temp field
                field.onfocus = function () {
                    // this timeout of 200ms is nessasary for Android 2.3.x
                    setTimeout(function () {
                        _this.renderer.setStyle(field, 'display', 'none');
                        setTimeout(function () {
                            _this.renderer.removeChild(_this.elem.nativeElement, field);
                            document.body.focus();
                        }, 0);
                    }, 0);
                };
                // focusing it
                field.focus();
            }, 0);
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.openBtnClicked = function () {
        this.showClock = true;
        this.showHours = true;
        this.checkDraw();
        if (this.isMobile) {
            this.hideKeyboard();
        }
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.closeBtnClicked = function () {
        var /** @type {?} */ h = this.selectedHours.h;
        var /** @type {?} */ m = this.selectedHours.m;
        var /** @type {?} */ ampm = this.selectedHours.ampm;
        if (this.twelvehour) {
            this.endHours = h + ':' + m + ampm;
        }
        else {
            this.endHours = h + ':' + m;
        }
        this.onChangeCb(this.endHours);
        this.onTouchedCb();
        this.showClock = false;
    };
    /**
     * @param {?} hour
     * @return {?}
     */
    ClockPickerComponent.prototype.setHour = function (hour) {
        this.selectedHours.h = hour;
    };
    /**
     * @param {?} min
     * @return {?}
     */
    ClockPickerComponent.prototype.setMinute = function (min) {
        // event.stopPropagation();
        this.selectedHours.m = min;
    };
    /**
     * @param {?} ampm
     * @return {?}
     */
    ClockPickerComponent.prototype.setAmPm = function (ampm) {
        // event.stopPropagation();
        this.selectedHours.ampm = ampm;
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.showHoursClock = function () {
        this.showHours = true;
        this.checkDraw();
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.showMinutesClock = function () {
        this.showHours = false;
        this.checkDraw();
    };
    /**
     * @return {?}
     */
    ClockPickerComponent.prototype.generateTick = function () {
        if (this.twelvehour) {
            for (var /** @type {?} */ i = 1; i < 13; i++) {
                var /** @type {?} */ radian = i / 6 * Math.PI;
                var /** @type {?} */ radius = this.outerRadius;
                var /** @type {?} */ tick = {
                    'hour': i,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        else {
            for (var /** @type {?} */ i = 0; i < 24; i++) {
                var /** @type {?} */ radian = i / 6 * Math.PI;
                var /** @type {?} */ inner = i > 0 && i < 13;
                var /** @type {?} */ radius = inner ? this.innerRadius : this.outerRadius;
                var /** @type {?} */ h = void 0;
                if (i === 0) {
                    h = '0' + i.toString();
                }
                else {
                    h = i;
                }
                var /** @type {?} */ tick = {
                    'hour': h,
                    'left': this.dialRadius + Math.sin(radian) * radius - this.tickRadius,
                    'top': this.dialRadius - Math.cos(radian) * radius - this.tickRadius,
                };
                this.hoursTicks.push(tick);
            }
        }
        for (var /** @type {?} */ i = 0; i < 60; i += 5) {
            var /** @type {?} */ radian = i / 30 * Math.PI;
            var /** @type {?} */ min = i.toString();
            if (i < 10) {
                min = '0' + i.toString();
            }
            var /** @type {?} */ tick = {
                'min': min,
                'left': this.dialRadius + Math.sin(radian) * this.outerRadius - this.tickRadius,
                'top': this.dialRadius - Math.cos(radian) * this.outerRadius - this.tickRadius,
            };
            this.minutesTicks.push(tick);
        }
    };
    /**
     * @param {?} x
     * @param {?} y
     * @param {?} roundBy5
     * @return {?}
     */
    ClockPickerComponent.prototype.setHand = function (x, y, roundBy5) {
        var /** @type {?} */ radian = Math.atan2(x, -y);
        var /** @type {?} */ isHours = this.showHours;
        var /** @type {?} */ unit = Math.PI / (isHours || roundBy5 ? 6 : 30);
        var /** @type {?} */ z = Math.sqrt(x * x + y * y);
        var /** @type {?} */ inner = isHours && z < (this.outerRadius + this.innerRadius) / 2;
        var /** @type {?} */ radius = inner ? this.innerRadius : this.outerRadius;
        var /** @type {?} */ value;
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
        var /** @type {?} */ cx1 = Math.sin(radian) * (radius - this.tickRadius), /** @type {?} */ cy1 = -Math.cos(radian) * (radius - this.tickRadius), /** @type {?} */ cx2 = Math.sin(radian) * radius, /** @type {?} */ cy2 = -Math.cos(radian) * radius;
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
    };
    /**
     * @param {?} obj
     * @return {?}
     */
    ClockPickerComponent.prototype.offset = function (obj) {
        var /** @type {?} */ left = 0, /** @type {?} */ top = 0;
        if (obj.offsetParent) {
            do {
                left += obj.offsetLeft;
                top += obj.offsetTop;
            } while (obj = obj.offsetParent);
        }
        return { left: left, top: top };
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ClockPickerComponent.prototype.writeValue = function (value) {
        this.endHours = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ClockPickerComponent.prototype.registerOnChange = function (fn) {
        this.onChangeCb = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ClockPickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouchedCb = fn;
    };
    return ClockPickerComponent;
}());
ClockPickerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-time-picker',
                template: "<div> <div class=\"md-form\"> <label class=\"active\">{{ label }}</label> <input [placeholder]=\"placeholder\" [value]=\"endHours\" type=\"text\" class=\"form-control timepicker\" (click)=\"openBtnClicked()\" [(ngModel)]=\"endHours\"> </div> <div class=\"clockpicker picker\" [hidden]=\"!showClock\" [ngClass]=\"{'picker--opened': showClock, 'darktheme': darktheme}\"> <div class=\"picker__holder\"> <div class=\"picker__frame\"> <div class=\"picker__wrap\"> <div class=\"picker__box\"> <div class=\"picker__date-display\"> <div class=\"clockpicker-display\"> <div class=\"clockpicker-display-column\"> <span class=\"clockpicker-span-hours text-primary\" [ngClass]=\"{'text-primary': showHours}\" (click)=\"showHoursClock()\"> {{ selectedHours.h }}</span>:<span class=\"clockpicker-span-minutes\" [ngClass]=\"{'text-primary': !showHours}\" (click)=\"showMinutesClock()\">{{selectedHours.m }}</span> </div> <div class=\"clockpicker-display-column clockpicker-display-am-pm\" *ngIf=\"twelvehour\"> <div class=\"clockpicker-span-am-pm\">{{ selectedHours.ampm }}</div> </div> </div> </div> <div class=\"picker__calendar-container\"> <div class=\"clockpicker-plate\" #plate> <div class=\"clockpicker-canvas\"> <svg class=\"clockpicker-svg\" width=\"270\" height=\"270\" #svg> <g transform=\"translate(135,135)\" #g> <line x1=\"0\" y1=\"0\" x2=\"77.94228634059948\" y2=\"-45.00000000000001\" #hand></line> <circle class=\"clockpicker-canvas-fg\" r=\"5\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #fg></circle> <circle class=\"clockpicker-canvas-bg\" r=\"20\" cx=\"95.26279441628824\" cy=\"-55.000000000000014\" #bg></circle> <circle class=\"clockpicker-canvas-bearing\" cx=\"0\" cy=\"0\" r=\"2\" #bearing></circle> </g> </svg> </div> <div class=\"clockpicker-dial clockpicker-hours\" #hoursPlate [ngClass]=\"{'clockpicker-dial-out': !showHours}\" [ngStyle]=\"{'visibility': !showHours ? 'hidden' : 'visible'}\"> <div *ngFor=\"let tick of hoursTicks\" class=\"clockpicker-tick\" style=\"font-size: 140%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\" id=\"{{ tick.hour }}\"> {{ tick.hour }} </div> </div> <div class=\"clockpicker-dial clockpicker-minutes\" #minutesPlate [ngClass]=\"{'clockpicker-dial-out': showHours}\" [ngStyle]=\"{'visibility': showHours ? 'hidden' : 'visible'}\"> <div *ngFor=\"let tick of minutesTicks\" class=\"clockpicker-tick\" style=\"font-size: 120%;\" [ngStyle]=\"{'left': tick.left+'px', 'top': tick.top+'px'}\"> {{ tick.min }} </div> </div> </div> <div class=\"clockpicker-am-pm-block\" *ngIf=\"twelvehour\"> <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button am-button\" [ngClass]=\"{'active': selectedHours.ampm=='AM'}\" (click)=\"setAmPm('AM')\"> AM </button> <button type=\"button\" class=\"btn-floating btn-flat clockpicker-button pm-button\" [ngClass]=\"{'active': selectedHours.ampm=='PM'}\" (click)=\"setAmPm('PM')\"> PM </button> </div> </div> <div class=\"picker__footer\"> <button type=\"button\" *ngIf=\"buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\"> {{buttonLabel}} </button> <button type=\"button\" *ngIf=\"!buttonLabel\" class=\"btn-flat clockpicker-button\" (click)=\"closeBtnClicked()\"> Done </button> </div> </div> </div> </div> </div> </div> </div>",
                providers: [TIME_PIRCKER_VALUE_ACCESSOT]
            },] },
];
/** @nocollapse */
ClockPickerComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
ClockPickerComponent.propDecorators = {
    "hoursPlate": [{ type: core.ViewChild, args: ['hoursPlate',] },],
    "minutesPlate": [{ type: core.ViewChild, args: ['minutesPlate',] },],
    "plate": [{ type: core.ViewChild, args: ['plate',] },],
    "svg": [{ type: core.ViewChild, args: ['svg',] },],
    "g": [{ type: core.ViewChild, args: ['g',] },],
    "hand": [{ type: core.ViewChild, args: ['hand',] },],
    "fg": [{ type: core.ViewChild, args: ['fg',] },],
    "bg": [{ type: core.ViewChild, args: ['bg',] },],
    "bearing": [{ type: core.ViewChild, args: ['bearing',] },],
    "twelvehour": [{ type: core.Input, args: ['twelvehour',] },],
    "darktheme": [{ type: core.Input, args: ['darktheme',] },],
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "label": [{ type: core.Input, args: ['label',] },],
    "duration": [{ type: core.Input, args: ['duration',] },],
    "showClock": [{ type: core.Input, args: ['showClock',] },],
    "buttonLabel": [{ type: core.Input, args: ['buttonlabel',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TimePickerModule = /** @class */ (function () {
    function TimePickerModule() {
    }
    return TimePickerModule;
}());
TimePickerModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule, forms.FormsModule],
                declarations: [ClockPickerComponent],
                exports: [ClockPickerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
// TODO: config: activeClass - Class to apply to the checked buttons
var CHECKBOX_CONTROL_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return ButtonCheckboxDirective; }),
    multi: true
};
/**
 * Add checkbox functionality to any element
 */
var ButtonCheckboxDirective = /** @class */ (function () {
    function ButtonCheckboxDirective() {
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
    ButtonCheckboxDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this.toggle(!this.state);
        this.onChange(this.value);
    };
    /**
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.ngOnInit = function () {
        this.toggle(this.trueValue === this.value);
    };
    Object.defineProperty(ButtonCheckboxDirective.prototype, "trueValue", {
        /**
         * @return {?}
         */
        get: function () {
            return typeof this.btnCheckboxTrue !== 'undefined'
                ? this.btnCheckboxTrue
                : true;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ButtonCheckboxDirective.prototype, "falseValue", {
        /**
         * @return {?}
         */
        get: function () {
            return typeof this.btnCheckboxFalse !== 'undefined'
                ? this.btnCheckboxFalse
                : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} state
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.toggle = function (state$$1) {
        this.state = state$$1;
        this.value = this.state ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.writeValue = function (value) {
        this.state = this.trueValue === value;
        this.value = value ? this.trueValue : this.falseValue;
    };
    /**
     * @param {?} isDisabled
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.setDisabledState = function (isDisabled) {
        this.isDisabled = isDisabled;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonCheckboxDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonCheckboxDirective;
}());
ButtonCheckboxDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[mdbCheckbox]', providers: [CHECKBOX_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonCheckboxDirective.propDecorators = {
    "btnCheckboxTrue": [{ type: core.Input },],
    "btnCheckboxFalse": [{ type: core.Input },],
    "state": [{ type: core.HostBinding, args: ['class.active',] },],
    "onClick": [{ type: core.HostListener, args: ['click',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RADIO_CONTROL_VALUE_ACCESSOR = {
    provide: forms.NG_VALUE_ACCESSOR,
    useExisting: core.forwardRef(function () { return ButtonRadioDirective; }),
    multi: true
};
/**
 * Create radio buttons or groups of buttons.
 * A value of a selected button is bound to a variable specified via ngModel.
 */
var ButtonRadioDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function ButtonRadioDirective(el, renderer) {
        this.renderer = renderer;
        this.onChange = Function.prototype;
        this.onTouched = Function.prototype;
        this.radioElementsArray = [];
        this.el = el;
    }
    Object.defineProperty(ButtonRadioDirective.prototype, "isActive", {
        /**
         * @return {?}
         */
        get: function () {
            return this.mdbRadio === this.value;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?=} event
     * @return {?}
     */
    ButtonRadioDirective.prototype.onClick = function (event) {
        var _this = this;
        try {
            this.el.nativeElement.parentElement.childNodes.forEach(function (element) {
                _this.radioElementsArray.push(element);
            });
            this.radioElementsArray.forEach(function (element) {
                _this.renderer.removeClass(element, 'active');
            });
            this.renderer.addClass(event.target, 'active');
        }
        catch (error) {
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
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.ngOnInit = function () {
        this.uncheckable = typeof this.uncheckable !== 'undefined';
    };
    /**
     * @return {?}
     */
    ButtonRadioDirective.prototype.onBlur = function () {
        this.onTouched();
    };
    /**
     * @param {?} value
     * @return {?}
     */
    ButtonRadioDirective.prototype.writeValue = function (value) {
        this.value = value;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnChange = function (fn) {
        this.onChange = fn;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    ButtonRadioDirective.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    return ButtonRadioDirective;
}());
ButtonRadioDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[mdbRadio]', providers: [RADIO_CONTROL_VALUE_ACCESSOR] },] },
];
/** @nocollapse */
ButtonRadioDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
ButtonRadioDirective.propDecorators = {
    "mdbRadio": [{ type: core.Input },],
    "uncheckable": [{ type: core.Input },],
    "value": [{ type: core.Input },],
    "isActive": [{ type: core.HostBinding, args: ['class.active',] },],
    "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ButtonsModule = /** @class */ (function () {
    function ButtonsModule() {
    }
    /**
     * @return {?}
     */
    ButtonsModule.forRoot = function () {
        return { ngModule: ButtonsModule, providers: [] };
    };
    return ButtonsModule;
}());
ButtonsModule.decorators = [
    { type: core.NgModule, args: [{
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
var gc = win['gc'] ? function () { return win['gc'](); } : function () { return null; };
var performance = win['performance'] ? win['performance'] : null;
var Event = win['Event'];
var MouseEvent = win['MouseEvent'];
var KeyboardEvent = win['KeyboardEvent'];
var EventTarget = win['EventTarget'];
var History = win['History'];
var Location = win['Location'];
var EventListener = win['EventListener'];
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
var LinkedList = /** @class */ (function () {
    function LinkedList() {
        this.length = 0;
        this.asArray = [];
    }
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.getNode = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.createInternalArrayRepresentation = function () {
        var /** @type {?} */ outArray = [];
        var /** @type {?} */ current = this.head;
        while (current) {
            outArray.push(current.value);
            current = current.next;
        }
        this.asArray = outArray;
    };
    /**
     * @param {?} position
     * @return {?}
     */
    LinkedList.prototype.get = function (position) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            return void 0;
        }
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < position; index++) {
            current = current.next;
        }
        return current.value;
    };
    /**
     * @param {?} value
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.add = function (value, position) {
        if (position === void 0) { position = this.length; }
        if (position < 0 || position > this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ node = {
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
                var /** @type {?} */ currentPreviousNode = this.getNode(position - 1);
                var /** @type {?} */ currentNextNode = currentPreviousNode.next;
                currentPreviousNode.next = node;
                currentNextNode.previous = node;
                node.previous = currentPreviousNode;
                node.next = currentNextNode;
            }
        }
        this.length++;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?=} position
     * @return {?}
     */
    LinkedList.prototype.remove = function (position) {
        if (position === void 0) { position = 0; }
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
            var /** @type {?} */ removedNode = this.getNode(position);
            removedNode.next.previous = removedNode.previous;
            removedNode.previous.next = removedNode.next;
        }
        this.length--;
        this.createInternalArrayRepresentation();
    };
    /**
     * @param {?} position
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.set = function (position, value) {
        if (this.length === 0 || position < 0 || position >= this.length) {
            throw new Error('Position is out of the list');
        }
        var /** @type {?} */ node = this.getNode(position);
        node.value = value;
        this.createInternalArrayRepresentation();
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toArray = function () {
        return this.asArray;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findAll = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = [];
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result.push({ index: index, value: current.value });
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.push = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.forEach(function (arg) {
            _this.add(arg);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.pop = function () {
        if (this.length === 0) {
            return undefined;
        }
        var /** @type {?} */ last = this.tail;
        this.remove(this.length - 1);
        return last.value;
    };
    /**
     * @param {...?} args
     * @return {?}
     */
    LinkedList.prototype.unshift = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        args.reverse();
        args.forEach(function (arg) {
            _this.add(arg, 0);
        });
        return this.length;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.shift = function () {
        if (this.length === 0) {
            return undefined;
        }
        var /** @type {?} */ lastItem = this.head.value;
        this.remove();
        return lastItem;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.forEach = function (fn) {
        var /** @type {?} */ current = this.head;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            fn(current.value, index);
            current = current.next;
        }
    };
    /**
     * @param {?} value
     * @return {?}
     */
    LinkedList.prototype.indexOf = function (value) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ position = 0;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (current.value === value) {
                position = index;
                break;
            }
            current = current.next;
        }
        return position;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.some = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = false;
        while (current && !result) {
            if (fn(current.value)) {
                result = true;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.every = function (fn) {
        var /** @type {?} */ current = this.head;
        var /** @type {?} */ result = true;
        while (current && result) {
            if (!fn(current.value)) {
                result = false;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @return {?}
     */
    LinkedList.prototype.toString = function () {
        return '[Linked List]';
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.find = function (fn) {
        var /** @type {?} */ current = this.head;
        // let result: T;
        var /** @type {?} */ result;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = current.value;
                break;
            }
            current = current.next;
        }
        return result;
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LinkedList.prototype.findIndex = function (fn) {
        var /** @type {?} */ current = this.head;
        // let result: number;
        var /** @type {?} */ result;
        for (var /** @type {?} */ index = 0; index < this.length; index++) {
            if (fn(current.value, index)) {
                result = index;
                break;
            }
            current = current.next;
        }
        return result;
    };
    return LinkedList;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CarouselConfig = /** @class */ (function () {
    function CarouselConfig() {
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
    return CarouselConfig;
}());
CarouselConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/** @enum {number} */
var Direction = { UNKNOWN: 0, NEXT: 1, PREV: 2, };
Direction[Direction.UNKNOWN] = "UNKNOWN";
Direction[Direction.NEXT] = "NEXT";
Direction[Direction.PREV] = "PREV";
/**
 * Base element to create carousel
 */
var CarouselComponent = /** @class */ (function () {
    /**
     * @param {?} config
     * @param {?} el
     */
    function CarouselComponent(config, el) {
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
        this.activeSlideChange = new core.EventEmitter(false);
        Object.assign(this, config);
        this.el = el;
    }
    Object.defineProperty(CarouselComponent.prototype, "slides", {
        /**
         * @return {?}
         */
        get: function () {
            return this._slides.toArray();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "activeSlide", {
        /**
         * @return {?}
         */
        get: function () {
            return this._currentActiveSlide;
        },
        /**
         * Index of currently displayed slide(started for 0)
         * @param {?} index
         * @return {?}
         */
        set: function (index) {
            if (this._slides.length && index !== this._currentActiveSlide) {
                this._select(index);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkNavigation = function () {
        if (this.type === 'carousel-multi-item') {
            return false;
        }
        return true;
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.checkDots = function () {
        if (this.type === 'carousel-thumbnails') {
            return false;
        }
        return true;
    };
    /**
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.getImg = function (slide) {
        return slide.el.nativeElement.querySelector('img').src;
    };
    Object.defineProperty(CarouselComponent.prototype, "interval", {
        /**
         * Delay of item cycling in milliseconds. If false, carousel won't cycle automatically.
         * @return {?}
         */
        get: function () {
            return this._interval;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._interval = value;
            this.restartTimer();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarouselComponent.prototype, "isBs4", {
        /**
         * @return {?}
         */
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    CarouselComponent.prototype.ngOnDestroy = function () {
        this.destroyed = true;
    };
    /**
     * Adds new slide. If this slide is first in collection - set it as active and starts auto changing
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.addSlide = function (slide) {
        this._slides.add(slide);
        if (this._slides.length === 1) {
            this._currentActiveSlide = void 0;
            this.activeSlide = 0;
            this.play();
        }
    };
    /**
     * Removes specified slide. If this slide is active - will roll to another slide
     * @param {?} slide
     * @return {?}
     */
    CarouselComponent.prototype.removeSlide = function (slide) {
        var _this = this;
        var /** @type {?} */ remIndex = this._slides.indexOf(slide);
        if (this._currentActiveSlide === remIndex) {
            // removing of active slide
            //  let nextSlideIndex: number = void 0;
            var /** @type {?} */ nextSlideIndex_1 = void 0;
            if (this._slides.length > 1) {
                // if this slide last - will roll to first slide, if noWrap flag is FALSE or to previous, if noWrap is TRUE
                // in case, if this slide in middle of collection, index of next slide is same to removed
                nextSlideIndex_1 = !this.isLast(remIndex) ? remIndex :
                    this.noWrap ? remIndex - 1 : 0;
            }
            this._slides.remove(remIndex);
            // prevents exception with changing some value after checking
            setTimeout(function () {
                _this._select(nextSlideIndex_1);
            }, 0);
        }
        else {
            this._slides.remove(remIndex);
            var /** @type {?} */ currentSlideIndex_1 = this.getCurrentSlideIndex();
            setTimeout(function () {
                // after removing, need to actualize index of current active slide
                _this._currentActiveSlide = currentSlideIndex_1;
                _this.activeSlideChange.emit(_this._currentActiveSlide);
            }, 0);
        }
    };
    /**
     * @param {?=} action
     * @return {?}
     */
    CarouselComponent.prototype.swipe = function (action) {
        if (action === void 0) { action = this.SWIPE_ACTION.RIGHT; }
        if (action === this.SWIPE_ACTION.RIGHT) {
            this.previousSlide();
        }
        if (action === this.SWIPE_ACTION.LEFT) {
            this.nextSlide();
        }
    };
    /**
     * Rolling to next slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.nextSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var /** @type {?} */ direction = Direction.NEXT;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.NEXT, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.NEXT, force);
        }
    };
    /**
     * Rolling to previous slide
     * @param {?=} force
     * @return {?}
     */
    CarouselComponent.prototype.previousSlide = function (force) {
        if (force === void 0) { force = false; }
        if (this.animation === 'slide') {
            this.pause();
            var /** @type {?} */ direction = Direction.PREV;
            this.slideAnimation(this.findNextSlideIndex(direction, force), direction);
        }
        else if (this.animation === 'fade') {
            this.pause();
            this.fadeAnimation(this.findNextSlideIndex(Direction.PREV, force));
        }
        else {
            this.activeSlide = this.findNextSlideIndex(Direction.PREV, force);
        }
    };
    /**
     * @param {?} goToIndex
     * @return {?}
     */
    CarouselComponent.prototype.fadeAnimation = function (goToIndex) {
        var _this = this;
        //const currentSlide = this._slides.get(this._currentActiveSlide);
        var /** @type {?} */ goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            this.animationEnd = false;
            goToSlide.directionNext = true;
            setTimeout(function () {
                goToSlide.directionNext = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                _this.play();
            }, 100);
        }
    };
    /**
     * @param {?} goToIndex
     * @param {?} direction
     * @return {?}
     */
    CarouselComponent.prototype.slideAnimation = function (goToIndex, direction) {
        var _this = this;
        var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        var /** @type {?} */ goToSlide = this._slides.get(goToIndex);
        if (this.animationEnd) {
            if (direction === Direction.NEXT) {
                this.animationEnd = false;
                goToSlide.directionNext = true;
                setTimeout(function () {
                    goToSlide.directionLeft = true;
                    currentSlide.directionLeft = true;
                }, 100);
            }
            if (direction === Direction.PREV) {
                this.animationEnd = false;
                goToSlide.directionPrev = true;
                setTimeout(function () {
                    goToSlide.directionRight = true;
                    currentSlide.directionRight = true;
                }, 100);
            }
            setTimeout(function () {
                goToSlide.directionLeft = false;
                goToSlide.directionNext = false;
                currentSlide.directionLeft = false;
                currentSlide.directionNext = false;
                goToSlide.directionRight = false;
                goToSlide.directionPrev = false;
                currentSlide.directionRight = false;
                currentSlide.directionPrev = false;
                _this.animationEnd = true;
                _this.activeSlide = goToIndex;
                var /** @type {?} */ directionName;
                if (direction === Direction.NEXT) {
                    directionName = 'Next';
                }
                else if (direction === Direction.PREV) {
                    directionName = 'Prev';
                }
                _this.activeSlideChange.emit({ 'direction': directionName, 'relatedTarget': _this.activeSlide });
                _this.play();
            }, 700);
        }
    };
    /**
     * Rolling to specified slide
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.selectSlide = function (index) {
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
    };
    /**
     * Starts a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.play = function () {
        if (!this.isPlaying) {
            this.isPlaying = true;
            this.restartTimer();
        }
    };
    /**
     * Stops a auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.pause = function () {
        if (!this.noPause) {
            this.isPlaying = false;
            this.resetTimer();
        }
    };
    /**
     * Finds and returns index of currently displayed slide
     * @return {?}
     */
    CarouselComponent.prototype.getCurrentSlideIndex = function () {
        return this._slides.findIndex(function (slide) { return slide.active; });
    };
    /**
     * Defines, whether the specified index is last in collection
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype.isLast = function (index) {
        return index + 1 >= this._slides.length;
    };
    /**
     * Defines next slide index, depending of direction
     * @param {?} direction
     * @param {?} force
     * @return {?}
     */
    CarouselComponent.prototype.findNextSlideIndex = function (direction, force) {
        var /** @type {?} */ nextSlideIndex = 0;
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
    };
    /**
     * Sets a slide, which specified through index, as active
     * @param {?} index
     * @return {?}
     */
    CarouselComponent.prototype._select = function (index) {
        if (isNaN(index)) {
            this.pause();
            return;
        }
        var /** @type {?} */ currentSlide = this._slides.get(this._currentActiveSlide);
        if (currentSlide) {
            currentSlide.active = false;
        }
        var /** @type {?} */ nextSlide = this._slides.get(index);
        if (nextSlide) {
            this._currentActiveSlide = index;
            nextSlide.active = true;
            this.activeSlide = index;
            // this.activeSlideChange.emit(index);
        }
    };
    /**
     * Starts loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.restartTimer = function () {
        var _this = this;
        this.resetTimer();
        var /** @type {?} */ interval = +this.interval;
        if (!isNaN(interval) && interval > 0) {
            this.currentInterval = setInterval(function () {
                var /** @type {?} */ nInterval = +_this.interval;
                if (_this.isPlaying && !isNaN(_this.interval) && nInterval > 0 && _this.slides.length) {
                    _this.nextSlide();
                }
                else {
                    _this.pause();
                }
            }, interval);
        }
    };
    /**
     * Stops loop of auto changing of slides
     * @return {?}
     */
    CarouselComponent.prototype.resetTimer = function () {
        if (this.currentInterval) {
            clearInterval(this.currentInterval);
            this.currentInterval = void 0;
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.hasClass = function (el, className) {
        if (el.classList) {
            return el.classList.contains(className);
        }
        else {
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.classAdd = function (el, className) {
        if (el.classList) {
            el.classList.add(className);
        }
        else if (!this.hasClass(el, className)) {
            el.className += ' ' + className;
        }
    };
    /**
     * @param {?} el
     * @param {?} className
     * @return {?}
     */
    CarouselComponent.prototype.removeClass = function (el, className) {
        if (el.classList) {
            el.classList.remove(className);
        }
        else if (this.hasClass(el, className)) {
            var /** @type {?} */ reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
            el.className = el.className.replace(reg, ' ');
        }
    };
    /**
     * @param {?} event
     * @return {?}
     */
    CarouselComponent.prototype.keyboardControl = function (event) {
        if (this.keyboard) {
            if (event.keyCode === 39) {
                this.nextSlide();
            }
            if (event.keyCode === 37) {
                this.previousSlide();
            }
        }
    };
    /**
     * @return {?}
     */
    CarouselComponent.prototype.focus = function () {
        this.el.nativeElement.focus();
    };
    return CarouselComponent;
}());
CarouselComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-carousel',
                template: "<div tabindex=\"0\" (swipeleft)=\"swipe($event.type)\" (swiperight)=\"swipe($event.type)\" (mouseenter)=\"pause()\" (mouseleave)=\"play()\" (mouseup)=\"play()\" class=\"carousel {{ class }} {{ type }}\"> <div class=\"controls-top\" *ngIf=\"slides.length > 1 && !checkNavigation() && isControls\"> <a class=\"btn-floating\" [class.disabled]=\"activeSlide===0&&noWrap\" (click)=\"previousSlide()\"><i class=\"fa fa-chevron-left\"></i></a> <a class=\"btn-floating\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\"><i class=\"fa fa-chevron-right\"></i></a> </div> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"></li> </ol> <ol class=\"carousel-indicators\" *ngIf=\"slides.length > 1 && !checkDots() && isControls\"> <li *ngFor=\"let slidez of slides; let i = index;\" [class.active]=\"slidez.active === true\" (click)=\"selectSlide(i)\"> <img class=\"img-fluid\" src=\"{{ getImg(slidez) }}\"> </li> </ol> <div class=\"carousel-inner\"><ng-content></ng-content></div> <a class=\"carousel-control-prev\" [class.disabled]=\"activeSlide === 0 && noWrap\" (click)=\"previousSlide()\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span> <span  class=\"sr-only\">Previous</span> </a> <a class=\"carousel-control-next\" (click)=\"nextSlide()\" [class.disabled]=\"isLast(activeSlide) && noWrap\" *ngIf=\"slides.length > 1 && checkNavigation() && isControls\"> <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span> <span class=\"sr-only\">Next</span> </a> </div>",
            },] },
];
/** @nocollapse */
CarouselComponent.ctorParameters = function () { return [
    { type: CarouselConfig, },
    { type: core.ElementRef, },
]; };
CarouselComponent.propDecorators = {
    "noWrap": [{ type: core.Input },],
    "noPause": [{ type: core.Input },],
    "isControls": [{ type: core.Input, args: ['isControls',] },],
    "keyboard": [{ type: core.Input },],
    "class": [{ type: core.Input, args: ['class',] },],
    "type": [{ type: core.Input, args: ['type',] },],
    "animation": [{ type: core.Input, args: ['animation',] },],
    "activeSlideChange": [{ type: core.Output },],
    "activeSlide": [{ type: core.Input },],
    "interval": [{ type: core.Input },],
    "play": [{ type: core.HostListener, args: ['mouseleave',] },],
    "pause": [{ type: core.HostListener, args: ['mouseenter',] },],
    "keyboardControl": [{ type: core.HostListener, args: ['keyup', ['$event'],] },],
    "focus": [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var SlideComponent = /** @class */ (function () {
    /**
     * @param {?} carousel
     * @param {?} el
     */
    function SlideComponent(carousel, el) {
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
    SlideComponent.prototype.ngOnInit = function () {
        this.carousel.addSlide(this);
    };
    /**
     * Fires changes in container collection after removing of this slide instance
     * @return {?}
     */
    SlideComponent.prototype.ngOnDestroy = function () {
        this.carousel.removeSlide(this);
    };
    return SlideComponent;
}());
SlideComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-slide',
                template: "\n  <ng-content></ng-content>\n  "
            },] },
];
/** @nocollapse */
SlideComponent.ctorParameters = function () { return [
    { type: CarouselComponent, },
    { type: core.ElementRef, },
]; };
SlideComponent.propDecorators = {
    "active": [{ type: core.HostBinding, args: ['class.active',] }, { type: core.Input },],
    "animated": [{ type: core.HostBinding, args: ['class.animated',] },],
    "directionNext": [{ type: core.HostBinding, args: ['class.carousel-item-next',] },],
    "directionLeft": [{ type: core.HostBinding, args: ['class.carousel-item-left',] },],
    "directionPrev": [{ type: core.HostBinding, args: ['class.carousel-item-prev',] },],
    "directionRight": [{ type: core.HostBinding, args: ['class.carousel-item-right',] },],
    "carousel": [{ type: core.HostBinding, args: ['class.carousel-item',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CarouselModule = /** @class */ (function () {
    function CarouselModule() {
    }
    /**
     * @return {?}
     */
    CarouselModule.forRoot = function () {
        return { ngModule: CarouselModule, providers: [] };
    };
    return CarouselModule;
}());
CarouselModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [SlideComponent, CarouselComponent],
                exports: [SlideComponent, CarouselComponent],
                providers: [CarouselConfig]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BaseChartDirective = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} platformId
     */
    function BaseChartDirective(element, platformId) {
        this.labels = [];
        this.options = {
            legend: { display: false }
        };
        this.legend = false;
        this.chartClick = new core.EventEmitter();
        this.chartHover = new core.EventEmitter();
        this.initFlag = false;
        this.isBrowser = false;
        this.element = element;
        this.isBrowser = common.isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnInit = function () {
        if (this.isBrowser) {
            this.ctx = this.element.nativeElement.getContext('2d');
            this.cvs = this.element.nativeElement;
            this.initFlag = true;
            if (this.data || this.datasets) {
                this.refresh();
            }
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnChanges = function (changes) {
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
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.ngOnDestroy = function () {
        if (this.chart) {
            this.chart.destroy();
            this.chart = void 0;
        }
    };
    /**
     * @param {?} ctx
     * @return {?}
     */
    BaseChartDirective.prototype.getChartBuilder = function (ctx /*, data:Array<any>, options:any*/) {
        var _this = this;
        var /** @type {?} */ datasets = this.getDatasets();
        var /** @type {?} */ options = Object.assign({}, this.options);
        if (this.legend === false) {
            options.legend = { display: false };
        }
        // hock for onHover and onClick events
        options.hover = options.hover || {};
        if (!options.hover.onHover) {
            options.hover.onHover = function (event, active) {
                if (active && active.length) {
                    _this.chartHover.emit({ event: event, active: active });
                }
            };
        }
        if (!options.onClick) {
            options.onClick = function (event, active) {
                _this.chartClick.emit({ event: event, active: active });
            };
        }
        var /** @type {?} */ opts = {
            type: this.chartType,
            data: {
                labels: this.labels,
                datasets: datasets
            },
            options: options
        };
        return new Chart(ctx, opts);
    };
    /**
     * @param {?} newDataValues
     * @return {?}
     */
    BaseChartDirective.prototype.updateChartData = function (newDataValues) {
        if (Array.isArray(newDataValues[0].data)) {
            this.chart.data.datasets.forEach(function (dataset, i) {
                dataset.data = newDataValues[i].data;
                if (newDataValues[i].label) {
                    dataset.label = newDataValues[i].label;
                }
            });
        }
        else {
            this.chart.data.datasets[0].data = newDataValues;
        }
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.getDatasets = function () {
        var _this = this;
        var /** @type {?} */ datasets = void 0;
        // in case if datasets is not provided, but data is present
        if (!this.datasets || !this.datasets.length && (this.data && this.data.length)) {
            if (Array.isArray(this.data[0])) {
                datasets = ((this.data)).map(function (data, index) {
                    return { data: data, label: _this.labels[index] || "Label " + index };
                });
            }
            else {
                datasets = [{ data: this.data, label: "Label 0" }];
            }
        }
        if (this.datasets && this.datasets.length ||
            (datasets && datasets.length)) {
            datasets = (this.datasets || datasets)
                .map(function (elm, index) {
                var /** @type {?} */ newElm = Object.assign({}, elm);
                if (_this.colors && _this.colors.length) {
                    Object.assign(newElm, _this.colors[index]);
                }
                else {
                    Object.assign(newElm, getColors(_this.chartType, index, newElm.data.length));
                }
                return newElm;
            });
        }
        if (!datasets) {
            throw new Error("ng-charts configuration error,\n      data or datasets field are required to render char " + this.chartType);
        }
        return datasets;
    };
    /**
     * @return {?}
     */
    BaseChartDirective.prototype.refresh = function () {
        this.ngOnDestroy();
        this.chart = this.getChartBuilder(this.ctx /*, data, this.options*/);
    };
    return BaseChartDirective;
}());
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
    { type: core.Directive, args: [{ selector: 'canvas[mdbChart]', exportAs: 'mdb-base-chart' },] },
];
/** @nocollapse */
BaseChartDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
]; };
BaseChartDirective.propDecorators = {
    "data": [{ type: core.Input },],
    "datasets": [{ type: core.Input },],
    "labels": [{ type: core.Input },],
    "options": [{ type: core.Input },],
    "chartType": [{ type: core.Input },],
    "colors": [{ type: core.Input },],
    "legend": [{ type: core.Input },],
    "chartClick": [{ type: core.Output },],
    "chartHover": [{ type: core.Output },],
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
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function () { return '#fff'; }),
        pointBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointBorderColor: colors.map(function () { return '#fff'; }),
        pointHoverBackgroundColor: colors.map(function (color) { return rgba(color, 1); }),
        pointHoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
    };
}
/**
 * @param {?} colors
 * @return {?}
 */
function formatPolarAreaColors(colors) {
    return {
        backgroundColor: colors.map(function (color) { return rgba(color, 0.6); }),
        borderColor: colors.map(function (color) { return rgba(color, 1); }),
        hoverBackgroundColor: colors.map(function (color) { return rgba(color, 0.8); }),
        hoverBorderColor: colors.map(function (color) { return rgba(color, 1); })
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
    var /** @type {?} */ colorsArr = new Array(count);
    for (var /** @type {?} */ i = 0; i < count; i++) {
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
var ChartsModule = /** @class */ (function () {
    function ChartsModule() {
    }
    return ChartsModule;
}());
ChartsModule.decorators = [
    { type: core.NgModule, args: [{
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
var CollapseDirective = /** @class */ (function () {
    /**
     * @param {?} _el
     * @param {?} _renderer
     */
    function CollapseDirective(_el, _renderer) {
        this.showBsCollapse = new core.EventEmitter();
        this.shownBsCollapse = new core.EventEmitter();
        this.hideBsCollapse = new core.EventEmitter();
        this.hiddenBsCollapse = new core.EventEmitter();
        /**
         * This event fires as soon as content collapses
         */
        this.collapsed = new core.EventEmitter();
        /**
         * This event fires as soon as content becomes visible
         */
        this.expanded = new core.EventEmitter();
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
    CollapseDirective.prototype.ngOnInit = function () {
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
    };
    /**
     * @return {?}
     */
    CollapseDirective.prototype.ngAfterViewInit = function () {
        this.maxHeight = this._el.nativeElement.scrollHeight;
    };
    /**
     * @return {?}
     */
    CollapseDirective.prototype.resize = function () {
        var /** @type {?} */ container = this._el.nativeElement;
        this.maxHeight = this._el.nativeElement.scrollHeight;
        this._renderer.setStyle(container, 'height', this.maxHeight + 'px');
    };
    /**
     * allows to manually toggle content visibility
     * @param {?=} event
     * @return {?}
     */
    CollapseDirective.prototype.toggle = function (event) {
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
        catch (error) { }
    };
    /**
     * allows to manually hide content
     * @return {?}
     */
    CollapseDirective.prototype.hide = function () {
        var _this = this;
        this.collapsing = true;
        this.hideBsCollapse.emit();
        this.isCollapse = false;
        this.isCollapsing = true;
        this.isExpanded = false;
        this.isCollapsed = true;
        var /** @type {?} */ container = this._el.nativeElement;
        container.classList.remove('collapse');
        container.classList.remove('show');
        container.classList.add('collapsing');
        this._renderer.setStyle(container, 'height', '0px');
        setTimeout(function () {
            container.classList.remove('collapsing');
            container.classList.add('collapse');
            _this.hiddenBsCollapse.emit();
            _this.collapsing = false;
        }, this.animationTime);
        this.collapsed.emit(this);
    };
    /**
     * allows to manually show collapsed content
     * @return {?}
     */
    CollapseDirective.prototype.show = function () {
        var _this = this;
        if (!this.isExpanded) {
            this.collapsing = true;
            this.showBsCollapse.emit();
            this.isCollapse = false;
            this.isCollapsing = true;
            this.isExpanded = true;
            this.isCollapsed = false;
            var /** @type {?} */ container_1 = this._el.nativeElement;
            container_1.classList.remove('collapse');
            container_1.classList.add('collapsing');
            setTimeout(function () {
                _this._renderer.setStyle(container_1, 'height', _this.maxHeight + 'px');
            }, 10);
            setTimeout(function () {
                container_1.classList.remove('collapsing');
                container_1.classList.add('collapse');
                container_1.classList.add('show');
                _this.shownBsCollapse.emit();
                _this.collapsing = false;
            }, this.animationTime - (this.animationTime * 0.5));
            this.expanded.emit(this);
        }
    };
    return CollapseDirective;
}());
CollapseDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbCollapse]',
                exportAs: 'bs-collapse',
            },] },
];
/** @nocollapse */
CollapseDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
CollapseDirective.propDecorators = {
    "showBsCollapse": [{ type: core.Output, args: ['showBsCollapse',] },],
    "shownBsCollapse": [{ type: core.Output, args: ['shownBsCollapse',] },],
    "hideBsCollapse": [{ type: core.Output, args: ['hideBsCollapse',] },],
    "hiddenBsCollapse": [{ type: core.Output, args: ['hiddenBsCollapse',] },],
    "collapsed": [{ type: core.Output },],
    "expanded": [{ type: core.Output },],
    "collapse": [{ type: core.Input },],
    "animationTime": [{ type: core.Input },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var CollapseModule = /** @class */ (function () {
    function CollapseModule() {
    }
    /**
     * @return {?}
     */
    CollapseModule.forRoot = function () {
        return { ngModule: CollapseModule, providers: [] };
    };
    return CollapseModule;
}());
CollapseModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [CollapseDirective],
                exports: [CollapseDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownState = /** @class */ (function () {
    function BsDropdownState() {
        var _this = this;
        this.direction = 'down';
        this.isOpenChange = new core.EventEmitter();
        this.isDisabledChange = new core.EventEmitter();
        this.toggleClick = new core.EventEmitter();
        this.dropdownMenu = new Promise(function (resolve) {
            _this.resolveDropdownMenu = resolve;
        });
    }
    return BsDropdownState;
}());
BsDropdownState.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
BsDropdownState.ctorParameters = function () { return []; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownContainerComponent = /** @class */ (function () {
    /**
     * @param {?} _state
     */
    function BsDropdownContainerComponent(_state) {
        var _this = this;
        this._state = _state;
        this.isOpen = false;
        this.display = 'block';
        this.position = 'absolute';
        this._subscription = _state.isOpenChange.subscribe(function (value) {
            _this.isOpen = value;
        });
    }
    Object.defineProperty(BsDropdownContainerComponent.prototype, "direction", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state.direction;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownContainerComponent.prototype.ngOnDestroy = function () {
        this._subscription.unsubscribe();
    };
    return BsDropdownContainerComponent;
}());
BsDropdownContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-dropdown-container',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n  <div [class.dropup]=\"direction === 'up'\"\n  [class.dropdown]=\"direction === 'down'\"\n  [class.show]=\"isOpen\"\n  [class.open]=\"isOpen\">\n    <ng-content></ng-content>\n  </div>\n  "
            },] },
];
/** @nocollapse */
BsDropdownContainerComponent.ctorParameters = function () { return [
    { type: BsDropdownState, },
]; };
BsDropdownContainerComponent.propDecorators = {
    "display": [{ type: core.HostBinding, args: ['style.display',] },],
    "position": [{ type: core.HostBinding, args: ['style.position',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownMenuDirective = /** @class */ (function () {
    /**
     * @param {?} _state
     * @param {?} _viewContainer
     * @param {?} _templateRef
     */
    function BsDropdownMenuDirective(_state, _viewContainer, _templateRef) {
        _state.resolveDropdownMenu({
            templateRef: _templateRef,
            viewContainer: _viewContainer
        });
    }
    return BsDropdownMenuDirective;
}());
BsDropdownMenuDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDropdownMenu],[dropdownMenu]',
                exportAs: 'bs-dropdown-menu'
            },] },
];
/** @nocollapse */
BsDropdownMenuDirective.ctorParameters = function () { return [
    { type: BsDropdownState, },
    { type: core.ViewContainerRef, },
    { type: core.TemplateRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownToggleDirective = /** @class */ (function () {
    /**
     * @param {?} _state
     * @param {?} _element
     */
    function BsDropdownToggleDirective(_state, _element) {
        var _this = this;
        this._state = _state;
        this._element = _element;
        this._subscriptions = [];
        this.ariaHaspopup = true;
        // @HostBinding('attr.disabled') isDisabled: boolean = null;
        this.isDisabled = null;
        // sync is open value with state
        this._subscriptions.push(this._state
            .isOpenChange.subscribe(function (value) { return _this.isOpen = value; }));
        // populate disabled state
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (value) { return _this.isDisabled = value || null; }));
    }
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onClick = function () {
        if (this.isDisabled) {
            return;
        }
        this._state.toggleClick.emit();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onDocumentClick = function (event) {
        if (this._state.autoClose && event.button !== 2 &&
            !this._element.nativeElement.contains(event.target)) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.onEsc = function () {
        if (this._state.autoClose) {
            this._state.toggleClick.emit(false);
        }
    };
    /**
     * @return {?}
     */
    BsDropdownToggleDirective.prototype.ngOnDestroy = function () {
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
    };
    return BsDropdownToggleDirective;
}());
BsDropdownToggleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDropdownToggle],[dropdownToggle]',
                exportAs: 'bs-dropdown-toggle'
            },] },
];
/** @nocollapse */
BsDropdownToggleDirective.ctorParameters = function () { return [
    { type: BsDropdownState, },
    { type: core.ElementRef, },
]; };
BsDropdownToggleDirective.propDecorators = {
    "ariaHaspopup": [{ type: core.HostBinding, args: ['attr.aria-haspopup',] },],
    "isDisabled": [{ type: core.HostBinding, args: ['attr.disabled',] },],
    "isOpen": [{ type: core.HostBinding, args: ['attr.aria-expanded',] },],
    "onClick": [{ type: core.HostListener, args: ['click',] },],
    "onDocumentClick": [{ type: core.HostListener, args: ['document:click', ['$event'],] },],
    "onEsc": [{ type: core.HostListener, args: ['keyup.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * Default dropdown configuration
 */
var BsDropdownConfig = /** @class */ (function () {
    function BsDropdownConfig() {
        /**
         * default dropdown auto closing behavior
         */
        this.autoClose = true;
    }
    return BsDropdownConfig;
}());
BsDropdownConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Trigger = /** @class */ (function () {
    /**
     * @param {?} open
     * @param {?=} close
     */
    function Trigger(open, close) {
        this.open = open;
        this.close = close || open;
    }
    /**
     * @return {?}
     */
    Trigger.prototype.isManual = function () { return this.open === 'manual' || this.close === 'manual'; };
    return Trigger;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DEFAULT_ALIASES = {
    hover: ['mouseover', 'mouseout'],
    focus: ['focusin', 'focusout']
};
/**
 * @param {?} triggers
 * @param {?=} aliases
 * @return {?}
 */
function parseTriggers(triggers, aliases) {
    if (aliases === void 0) { aliases = DEFAULT_ALIASES; }
    var /** @type {?} */ trimmedTriggers = (triggers || '').trim();
    if (trimmedTriggers.length === 0) {
        return [];
    }
    var /** @type {?} */ parsedTriggers = trimmedTriggers.split(/\s+/)
        .map(function (trigger$$1) { return trigger$$1.split(':'); })
        .map(function (triggerPair) {
        var /** @type {?} */ alias = aliases[triggerPair[0]] || triggerPair;
        return new Trigger(alias[0], alias[1]);
    });
    var /** @type {?} */ manualTriggers = parsedTriggers
        .filter(function (triggerPair) { return triggerPair.isManual(); });
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
    var /** @type {?} */ parsedTriggers = parseTriggers(triggers);
    var /** @type {?} */ listeners = [];
    if (parsedTriggers.length === 1 && parsedTriggers[0].isManual()) {
        return Function.prototype;
    }
    //  parsedTriggers.forEach((trigger: Trigger) => {
    parsedTriggers.forEach(function (trigger$$1) {
        if (trigger$$1.open === trigger$$1.close) {
            listeners.push(renderer.listen(target, trigger$$1.open, function () {
                toggleFn();
            }));
            // listeners.push(renderer.listen(target, trigger.open, toggleFn));
            return;
        }
        listeners.push(renderer.listen(target, trigger$$1.open, function () {
            showFn();
        }), 
        // renderer.listen(target, trigger.open, showFn),
        renderer.listen(target, trigger$$1.close, function () {
            hideFn();
        }));
        // renderer.listen(target, trigger.close, hideFn));
    });
    return function () { listeners.forEach(function (unsubscribeFn) { return unsubscribeFn(); }); };
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var ContentRef = /** @class */ (function () {
    /**
     * @param {?} nodes
     * @param {?=} viewRef
     * @param {?=} componentRef
     */
    function ContentRef(nodes, viewRef, componentRef) {
        this.nodes = nodes;
        this.viewRef = viewRef;
        this.componentRef = componentRef;
    }
    return ContentRef;
}());
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
var ComponentLoader = /** @class */ (function () {
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
    function ComponentLoader(_viewContainerRef, _renderer, _elementRef, _injector, _componentFactoryResolver, _ngZone, _applicationRef, _posService) {
        this._viewContainerRef = _viewContainerRef;
        this._renderer = _renderer;
        this._elementRef = _elementRef;
        this._injector = _injector;
        this._componentFactoryResolver = _componentFactoryResolver;
        this._ngZone = _ngZone;
        this._applicationRef = _applicationRef;
        this._posService = _posService;
        this.onBeforeShow = new core.EventEmitter();
        this.onShown = new core.EventEmitter();
        this.onBeforeHide = new core.EventEmitter();
        this.onHidden = new core.EventEmitter();
        this._providers = [];
    }
    Object.defineProperty(ComponentLoader.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return !!this._componentRef;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} compType
     * @return {?}
     */
    ComponentLoader.prototype.attach = function (compType) {
        this._componentFactory = this._componentFactoryResolver
            .resolveComponentFactory(compType);
        return this;
    };
    /**
     * @param {?=} container
     * @return {?}
     */
    ComponentLoader.prototype.to = function (container) {
        this.container = container || this.container;
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.position = function (opts) {
        this.attachment = opts.attachment || this.attachment;
        this._elementRef = /** @type {?} */ (opts.target) || this._elementRef;
        return this;
    };
    /**
     * @param {?} provider
     * @return {?}
     */
    ComponentLoader.prototype.provide = function (provider) {
        this._providers.push(provider);
        return this;
    };
    /**
     * @param {?=} opts
     * @return {?}
     */
    ComponentLoader.prototype.show = function (opts) {
        if (opts === void 0) { opts = {}; }
        this._subscribePositioning();
        this._innerComponent = null;
        if (!this._componentRef) {
            this.onBeforeShow.emit();
            this._contentRef = this._getContentRef(opts.content);
            var /** @type {?} */ injector = core.ReflectiveInjector.resolveAndCreate(this._providers, this._injector);
            this._componentRef = this._componentFactory.create(injector, this._contentRef.nodes);
            this._applicationRef.attachView(this._componentRef.hostView);
            // this._componentRef = this._viewContainerRef
            //   .createComponent(this._componentFactory, 0, injector, this._contentRef.nodes);
            this.instance = this._componentRef.instance;
            Object.assign(this._componentRef.instance, opts);
            if (this.container instanceof core.ElementRef) {
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
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.hide = function () {
        if (!this._componentRef) {
            return this;
        }
        this.onBeforeHide.emit(this._componentRef.instance);
        var /** @type {?} */ componentEl = this._componentRef.location.nativeElement;
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
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.toggle = function () {
        if (this.isShown) {
            this.hide();
            return;
        }
        this.show();
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.dispose = function () {
        if (this.isShown) {
            this.hide();
        }
        this._unsubscribePositioning();
        if (this._unregisterListenersFn) {
            this._unregisterListenersFn();
        }
    };
    /**
     * @param {?} listenOpts
     * @return {?}
     */
    ComponentLoader.prototype.listen = function (listenOpts) {
        var _this = this;
        this.triggers = listenOpts.triggers || this.triggers;
        listenOpts.target = listenOpts.target || this._elementRef;
        listenOpts.show = listenOpts.show || (function () { return _this.show(); });
        listenOpts.hide = listenOpts.hide || (function () { return _this.hide(); });
        listenOpts.toggle = listenOpts.toggle || (function () { return _this.isShown
            ? listenOpts.hide()
            : listenOpts.show(); });
        this._unregisterListenersFn = listenToTriggers(this._renderer, listenOpts.target.nativeElement, this.triggers, listenOpts.show, listenOpts.hide, listenOpts.toggle);
        return this;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype.getInnerComponent = function () {
        return this._innerComponent;
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._subscribePositioning = function () {
        var _this = this;
        if (this._zoneSubscription || !this.attachment) {
            return;
        }
        this._zoneSubscription = this._ngZone
            .onStable.subscribe(function () {
            if (!_this._componentRef) {
                return;
            }
            _this._posService.position({
                element: _this._componentRef.location,
                target: _this._elementRef,
                attachment: _this.attachment,
                appendToBody: _this.container === 'body'
            });
        });
    };
    /**
     * @return {?}
     */
    ComponentLoader.prototype._unsubscribePositioning = function () {
        if (!this._zoneSubscription) {
            return;
        }
        this._zoneSubscription.unsubscribe();
        this._zoneSubscription = null;
    };
    /**
     * @param {?} content
     * @return {?}
     */
    ComponentLoader.prototype._getContentRef = function (content) {
        if (!content) {
            return new ContentRef([]);
        }
        if (content instanceof core.TemplateRef) {
            if (this._viewContainerRef) {
                var /** @type {?} */ viewRef_1 = this._viewContainerRef.createEmbeddedView(content);
                return new ContentRef([viewRef_1.rootNodes], viewRef_1);
            }
            var /** @type {?} */ viewRef = content.createEmbeddedView({});
            this._applicationRef.attachView(viewRef);
            return new ContentRef([viewRef.rootNodes], viewRef);
        }
        if (typeof content === 'function') {
            var /** @type {?} */ contentCmptFactory = this._componentFactoryResolver.resolveComponentFactory(content);
            var /** @type {?} */ modalContentInjector = core.ReflectiveInjector.resolveAndCreate(this._providers.concat([content]), this._injector);
            var /** @type {?} */ componentRef = contentCmptFactory.create(modalContentInjector);
            this._applicationRef.attachView(componentRef.hostView);
            return new ContentRef([[componentRef.location.nativeElement]], componentRef.hostView, componentRef);
        }
        return new ContentRef([[this._renderer.createText("" + content)]]);
    };
    return ComponentLoader;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @copyright Valor Software
 * @copyright Angular ng-bootstrap team
 */
var Positioning = /** @class */ (function () {
    function Positioning() {
    }
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.position = function (element, round) {
        if (round === void 0) { round = true; }
        var /** @type {?} */ elPosition;
        var /** @type {?} */ parentOffset = { width: 0, height: 0, top: 0, bottom: 0, left: 0, right: 0 };
        if (this.getStyle(element, 'position') === 'fixed') {
            var /** @type {?} */ bcRect = element.getBoundingClientRect();
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
            var /** @type {?} */ offsetParentEl = this.offsetParent(element);
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
    };
    /**
     * @param {?} element
     * @param {?=} round
     * @return {?}
     */
    Positioning.prototype.offset = function (element, round) {
        if (round === void 0) { round = true; }
        var /** @type {?} */ elBcr = element.getBoundingClientRect();
        var /** @type {?} */ viewportOffset = {
            top: window.pageYOffset - document.documentElement.clientTop,
            left: window.pageXOffset - document.documentElement.clientLeft
        };
        var /** @type {?} */ elOffset = {
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
    };
    /**
     * @param {?} hostElement
     * @param {?} targetElement
     * @param {?} placement
     * @param {?=} appendToBody
     * @return {?}
     */
    Positioning.prototype.positionElements = function (hostElement, targetElement, placement, appendToBody) {
        var /** @type {?} */ hostElPosition = appendToBody ? this.offset(hostElement, false) : this.position(hostElement, false);
        var /** @type {?} */ shiftWidth = {
            left: hostElPosition.left,
            center: hostElPosition.left + hostElPosition.width / 2 - targetElement.offsetWidth / 2,
            right: hostElPosition.left + hostElPosition.width
        };
        var /** @type {?} */ shiftHeight = {
            top: hostElPosition.top,
            center: hostElPosition.top + hostElPosition.height / 2 - targetElement.offsetHeight / 2,
            bottom: hostElPosition.top + hostElPosition.height
        };
        var /** @type {?} */ targetElBCR = targetElement.getBoundingClientRect();
        var /** @type {?} */ placementPrimary = placement.split(' ')[0] || 'top';
        var /** @type {?} */ placementSecondary = placement.split(' ')[1] || 'center';
        var /** @type {?} */ targetElPosition = {
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
    };
    /**
     * @param {?} element
     * @param {?} prop
     * @return {?}
     */
    Positioning.prototype.getStyle = function (element, prop) { return ((window.getComputedStyle(element)))[prop]; };
    /**
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.isStaticPositioned = function (element) {
        return (this.getStyle(element, 'position') || 'static') === 'static';
    };
    /**
     * @param {?} element
     * @return {?}
     */
    Positioning.prototype.offsetParent = function (element) {
        var /** @type {?} */ offsetParentEl = (element.offsetParent) || document.documentElement;
        while (offsetParentEl && offsetParentEl !== document.documentElement && this.isStaticPositioned(offsetParentEl)) {
            offsetParentEl = /** @type {?} */ (offsetParentEl.offsetParent);
        }
        return offsetParentEl || document.documentElement;
    };
    return Positioning;
}());
var positionService = new Positioning();
/**
 * @param {?} hostElement
 * @param {?} targetElement
 * @param {?} placement
 * @param {?=} appendToBody
 * @return {?}
 */
function positionElements(hostElement, targetElement, placement, appendToBody) {
    var /** @type {?} */ pos = positionService.positionElements(hostElement, targetElement, placement, appendToBody);
    targetElement.style.top = pos.top + "px";
    targetElement.style.left = pos.left + "px";
}
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @record
 */
var PositioningService = /** @class */ (function () {
    function PositioningService() {
    }
    /**
     * @param {?} options
     * @return {?}
     */
    PositioningService.prototype.position = function (options) {
        var element = options.element, target = options.target, attachment = options.attachment, appendToBody = options.appendToBody;
        positionElements(this._getHtmlElement(target), this._getHtmlElement(element), attachment, appendToBody);
    };
    /**
     * @param {?} element
     * @return {?}
     */
    PositioningService.prototype._getHtmlElement = function (element) {
        // it means that we got a selector
        if (typeof element === 'string') {
            return /** @type {?} */ (document.querySelector(element));
        }
        if (element instanceof core.ElementRef) {
            return element.nativeElement;
        }
        return /** @type {?} */ (element);
    };
    return PositioningService;
}());
PositioningService.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ComponentLoaderFactory = /** @class */ (function () {
    /**
     * @param {?} _componentFactoryResolver
     * @param {?} _ngZone
     * @param {?} _injector
     * @param {?} _posService
     * @param {?} _applicationRef
     */
    function ComponentLoaderFactory(_componentFactoryResolver, _ngZone, _injector, _posService, _applicationRef) {
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
    ComponentLoaderFactory.prototype.createLoader = function (_elementRef, _viewContainerRef, _renderer) {
        return new ComponentLoader(_viewContainerRef, _renderer, _elementRef, this._injector, this._componentFactoryResolver, this._ngZone, this._applicationRef, this._posService);
    };
    return ComponentLoaderFactory;
}());
ComponentLoaderFactory.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
ComponentLoaderFactory.ctorParameters = function () { return [
    { type: core.ComponentFactoryResolver, },
    { type: core.NgZone, },
    { type: core.Injector, },
    { type: PositioningService, },
    { type: core.ApplicationRef, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var BsDropdownDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _cis
     * @param {?} _config
     * @param {?} _state
     */
    function BsDropdownDirective(_elementRef, _renderer, _viewContainerRef, _cis, _config, _state) {
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
    Object.defineProperty(BsDropdownDirective.prototype, "autoClose", {
        /**
         * @return {?}
         */
        get: function () {
            return this._state.autoClose;
        },
        /**
         * Indicates that dropdown will be closed on item or document click,
         * and after pressing ESC
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (typeof value === 'boolean') {
                this._state.autoClose = value;
            }
        },
        enumerable: true,
        configurable: true
    });
    
    Object.defineProperty(BsDropdownDirective.prototype, "isDisabled", {
        /**
         * @return {?}
         */
        get: function () { return this._isDisabled; },
        /**
         * Disables dropdown toggle and hides dropdown menu if opened
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isDisabled = value;
            this._state.isDisabledChange.emit(value);
            if (value) {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        get: function () {
            if (this._showInline) {
                return this._isInlineOpen;
            }
            return this._dropdown.isShown;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BsDropdownDirective.prototype, "isBs4", {
        /**
         * @return {?}
         */
        get: function () {
            return !isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnInit = function () {
        var _this = this;
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
            show: function () { return _this.show(); }
        });
        // toggle visibility on toggle element click
        this._subscriptions.push(this._state
            .toggleClick.subscribe(function (value) { return _this.toggle(value); }));
        // hide dropdown if set disabled while opened
        this._subscriptions.push(this._state
            .isDisabledChange
            .subscribe(function (element) {
            if (element === true) {
                _this.hide();
            }
        }));
        // attach dropdown menu inside of dropdown
        if (this._showInline) {
            this._state.dropdownMenu
                .then(function (dropdownMenu) {
                _this._inlinedMenu = dropdownMenu.viewContainer.createEmbeddedView(dropdownMenu.templateRef);
            });
        }
    };
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled) {
            return;
        }
        // material and dropup dropdown animation
        //const parent = this._elementRef.nativeElement.classList;
        var /** @type {?} */ container = this._elementRef.nativeElement.lastElementChild;
        setTimeout(function () { container.classList.add('fadeInDropdown'); }, 200);
        if (this._showInline) {
            this._isInlineOpen = true;
            this.onShown.emit(true);
            this._state.isOpenChange.emit(true);
            return;
        }
        this._state.dropdownMenu
            .then(function (dropdownMenu) {
            // check direction in which dropdown should be opened
            var /** @type {?} */ _dropup = _this.dropup === true ||
                (typeof _this.dropup !== 'undefined' && _this.dropup !== false);
            _this._state.direction = _dropup ? 'up' : 'down';
            var /** @type {?} */ _placement = _this.placement ||
                (_dropup ? 'top left' : 'bottom left');
            // show dropdown
            _this._dropdown
                .attach(BsDropdownContainerComponent)
                .to(_this.container)
                .position({ attachment: _placement })
                .show({
                content: dropdownMenu.templateRef,
                placement: _placement
            });
            _this._state.isOpenChange.emit(true);
        });
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    BsDropdownDirective.prototype.hide = function () {
        var _this = this;
        if (!this.isOpen) {
            return;
        }
        var /** @type {?} */ parent = this._elementRef.nativeElement.classList;
        var /** @type {?} */ container = this._elementRef.nativeElement.lastElementChild;
        if ((parent.value === 'dropdown open show') || (parent.value === 'btn-group dropup open show')) {
            container.classList.remove('fadeInDropdown');
            setTimeout(function () {
                if (_this._showInline) {
                    _this._isInlineOpen = false;
                    _this.onHidden.emit(true);
                }
                else {
                    _this._dropdown.hide();
                }
                _this._state.isOpenChange.emit(false);
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
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @param {?=} value
     * @return {?}
     */
    BsDropdownDirective.prototype.toggle = function (value) {
        if (this.isOpen || value === false) {
            return this.hide();
        }
        return this.show();
    };
    /**
     * @return {?}
     */
    BsDropdownDirective.prototype.ngOnDestroy = function () {
        // clean up subscriptions and destroy dropdown
        for (var _i = 0, _a = this._subscriptions; _i < _a.length; _i++) {
            var sub = _a[_i];
            sub.unsubscribe();
        }
        this._dropdown.dispose();
    };
    return BsDropdownDirective;
}());
BsDropdownDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDropdown],[dropdown]',
                exportAs: 'bs-dropdown',
                providers: [BsDropdownState]
            },] },
];
/** @nocollapse */
BsDropdownDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: ComponentLoaderFactory, },
    { type: BsDropdownConfig, },
    { type: BsDropdownState, },
]; };
BsDropdownDirective.propDecorators = {
    "placement": [{ type: core.Input },],
    "triggers": [{ type: core.Input },],
    "container": [{ type: core.Input },],
    "dropup": [{ type: core.HostBinding, args: ['class.dropup',] }, { type: core.Input },],
    "autoClose": [{ type: core.Input },],
    "isDisabled": [{ type: core.Input },],
    "isOpen": [{ type: core.HostBinding, args: ['class.open',] }, { type: core.HostBinding, args: ['class.show',] }, { type: core.Input },],
    "isOpenChange": [{ type: core.Output },],
    "onShown": [{ type: core.Output },],
    "onHidden": [{ type: core.Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DropdownModule = /** @class */ (function () {
    function DropdownModule() {
    }
    /**
     * @param {?=} config
     * @return {?}
     */
    DropdownModule.forRoot = function (config) {
        return {
            ngModule: DropdownModule, providers: [
                ComponentLoaderFactory,
                PositioningService,
                BsDropdownState,
                { provide: BsDropdownConfig, useValue: config ? config : { autoClose: true } }
            ]
        };
    };
    
    return DropdownModule;
}());
DropdownModule.decorators = [
    { type: core.NgModule, args: [{
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
var MdbInputDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} platformId
     */
    function MdbInputDirective(el, renderer, platformId) {
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
        this.isBrowser = common.isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onfocus = function () {
        try {
            this.renderer.addClass(this.elLabel, 'active');
            this.isClicked = true;
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onBlur = function () {
        try {
            if (this.el.nativeElement.value === '') {
                this.renderer.removeClass(this.elLabel, 'active');
            }
            this.isClicked = false;
        }
        catch (error) {
        }
        try {
            // Validation:
            if (this.mdbValidate) {
                var /** @type {?} */ inputType = this.el.nativeElement.type;
                if (inputType === 'email') {
                    if (this.customRegex) {
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
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
                        var /** @type {?} */ re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
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
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
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
                    for (var /** @type {?} */ i = 0; i < this.el.nativeElement.parentElement.length; i++) {
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
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
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
                        var /** @type {?} */ re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
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
                        var /** @type {?} */ re = new RegExp(this.el.nativeElement.getAttribute('customRegex'));
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
                        var /** @type {?} */ re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
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
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.onchange = function () {
        try {
            this.checkValue();
        }
        catch (error) {
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngOnInit = function () {
        if (this.mdbValidate) {
            // Inititalise a new <span> wrong/right elements and render it below the host component.
            // this.wrongTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.wrongTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.wrongTextContainer, 'inputVal');
            this.renderer.addClass(this.wrongTextContainer, 'text-danger');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.wrongTextContainer);
            var /** @type {?} */ textWrong = this.el.nativeElement.getAttribute('data-error');
            this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
            this.renderer.setStyle(this.wrongTextContainer, 'visibility', 'hidden');
            // this.rightTextContainer = this.renderer.createElement(this.el.nativeElement.parentElement, 'span');
            this.rightTextContainer = this.renderer.createElement('span');
            this.renderer.addClass(this.rightTextContainer, 'inputVal');
            this.renderer.addClass(this.rightTextContainer, 'text-success');
            this.renderer.appendChild(this.el.nativeElement.parentElement, this.rightTextContainer);
            var /** @type {?} */ textSuccess = this.el.nativeElement.getAttribute('data-success');
            this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
            this.renderer.setStyle(this.rightTextContainer, 'visibility', 'hidden');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewInit = function () {
        var /** @type {?} */ type = this.el.nativeElement.type;
        if (this.focusCheckbox && type === 'checkbox') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
        if (this.focusRadio && type === 'radio') {
            this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
        // tslint:disable-next-line:max-line-length
        if (this.el.nativeElement.tagName === 'MDB-COMPLETER' && this.el.nativeElement.getAttribute('ng-reflect-model') == null && !this.isClicked) {
            this.renderer.removeClass(this.elLabel, 'active');
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.initComponent = function () {
        var /** @type {?} */ inputId;
        var /** @type {?} */ inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel && this.el.nativeElement.value !== '') {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @return {?}
     */
    MdbInputDirective.prototype.checkValue = function () {
        var /** @type {?} */ value = '';
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
    };
    return MdbInputDirective;
}());
MdbInputDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbInputDirective]'
            },] },
];
/** @nocollapse */
MdbInputDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
]; };
MdbInputDirective.propDecorators = {
    "mdbInputDirective": [{ type: core.Input, args: ['mdbInputDirective',] },],
    "placeholder": [{ type: core.Input, args: ['placeholder',] },],
    "minLength": [{ type: core.Input, args: ['minLength',] },],
    "maxLength": [{ type: core.Input, args: ['maxLength',] },],
    "customRegex": [{ type: core.Input, args: ['customRegex',] },],
    "mdbValidate": [{ type: core.Input, args: ['mdbValidate',] },],
    "focusCheckbox": [{ type: core.Input, args: ['focusCheckbox',] },],
    "focusRadio": [{ type: core.Input, args: ['focusRadio',] },],
    "onfocus": [{ type: core.HostListener, args: ['focus',] },],
    "onBlur": [{ type: core.HostListener, args: ['blur',] },],
    "onchange": [{ type: core.HostListener, args: ['change',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var EqualValidatorDirective = /** @class */ (function () {
    /**
     * @param {?} validateEqual
     * @param {?} reverse
     */
    function EqualValidatorDirective(validateEqual, reverse) {
        this.validateEqual = validateEqual;
        this.reverse = reverse;
    }
    Object.defineProperty(EqualValidatorDirective.prototype, "isReverse", {
        /**
         * @return {?}
         */
        get: function () {
            if (!this.reverse) {
                return false;
            }
            return this.reverse === 'true' ? true : false;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidatorDirective.prototype.validate = function (c) {
        var /** @type {?} */ setToNullValue = null;
        // self value (e.g. retype password)
        var /** @type {?} */ v = c.value;
        // control value (e.g. password)
        // const e: any = c.root.get(this.validateEqual);
        var /** @type {?} */ e = c.root.get(this.validateEqual);
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
    };
    return EqualValidatorDirective;
}());
EqualValidatorDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdb-validateEqual][formControlName],[validateEqual][formControl],[validateEqual][ngModel]',
                providers: [
                    { provide: forms.NG_VALIDATORS, useExisting: core.forwardRef(function () { return EqualValidatorDirective; }), multi: true }
                ]
            },] },
];
/** @nocollapse */
EqualValidatorDirective.ctorParameters = function () { return [
    { type: undefined, decorators: [{ type: core.Attribute, args: ['validateEqual',] },] },
    { type: undefined, decorators: [{ type: core.Attribute, args: ['reverse',] },] },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputsModule = /** @class */ (function () {
    function InputsModule() {
    }
    /**
     * @return {?}
     */
    InputsModule.forRoot = function () {
        return { ngModule: InputsModule, providers: [] };
    };
    return InputsModule;
}());
InputsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [MdbInputDirective, EqualValidatorDirective],
                exports: [MdbInputDirective, EqualValidatorDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeepDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     */
    function DeepDirective(el, renderer) {
        this.el = el;
        this.renderer = renderer;
    }
    /**
     * @return {?}
     */
    DeepDirective.prototype.ngAfterViewInit = function () {
        this.renderer.addClass(this.el.nativeElement, 'onFocusSelect');
    };
    return DeepDirective;
}());
DeepDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbDeepDirective]',
            },] },
];
/** @nocollapse */
DeepDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var DeepModule = /** @class */ (function () {
    function DeepModule() {
    }
    /**
     * @return {?}
     */
    DeepModule.forRoot = function () {
        return { ngModule: DeepModule, providers: [] };
    };
    return DeepModule;
}());
DeepModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [DeepDirective],
                exports: [DeepDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var InputValidateDirective = /** @class */ (function () {
    /**
     * @param {?} _elRef
     * @param {?} _renderer
     */
    function InputValidateDirective(_elRef, _renderer) {
        this._elRef = _elRef;
        this._renderer = _renderer;
        this.value = '';
        this.minLength = '0';
        this.maxLength = '524288';
    }
    /**
     * @return {?}
     */
    InputValidateDirective.prototype.ngOnInit = function () {
        // Inititalise a new <span> wrong/right elements and render it below the host component.
        this.wrongTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.wrongTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.wrongTextContainer, 'text-danger', true);
        var /** @type {?} */ textWrong = this._elRef.nativeElement.getAttribute('data-error');
        this.wrongTextContainer.innerHTML = (textWrong ? textWrong : 'wrong');
        this._renderer.setElementStyle(this.wrongTextContainer, 'visibility', 'hidden');
        this.rightTextContainer = this._renderer.createElement(this._elRef.nativeElement.parentElement, 'span');
        this._renderer.setElementClass(this.rightTextContainer, 'inputVal', true);
        this._renderer.setElementClass(this.rightTextContainer, 'text-success', true);
        var /** @type {?} */ textSuccess = this._elRef.nativeElement.getAttribute('data-success');
        this.rightTextContainer.innerHTML = (textSuccess ? textSuccess : 'success');
        this._renderer.setElementStyle(this.rightTextContainer, 'visibility', 'hidden');
    };
    /**
     * @return {?}
     */
    InputValidateDirective.prototype.onBlur = function () {
        var /** @type {?} */ inputType = this._elRef.nativeElement.type;
        if (inputType === 'email') {
            if (this.customRegex) {
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
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
                var /** @type {?} */ re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
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
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
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
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
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
            for (var /** @type {?} */ i = 0; i < this._elRef.nativeElement.parentElement.length; i++) {
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
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
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
                var /** @type {?} */ re = /^(1[ \-\+]{0,3}|\+1[ -\+]{0,3}|\+1|\+)?((\(\+?1-[2-9][0-9]{1,2}\))|(\(\+?[2-8][0-9][0-9]\))|(\(\+?[1-9][0-9]\))|(\(\+?[17]\))|(\([2-9][2-9]\))|([ \-\.]{0,3}[0-9]{2,4}))?([ \-\.][0-9])?([ \-\.]{0,3}[0-9]{2,4}){2,3}$/;
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
                var /** @type {?} */ re = new RegExp(this._elRef.nativeElement.getAttribute('customRegex'));
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
                var /** @type {?} */ re = /^-?(?:\d+|\d{1,3}(?:,\d{3})+)(?:(\.|,)\d+)?$/;
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
    };
    return InputValidateDirective;
}());
InputValidateDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbInputValidate]',
            },] },
];
/** @nocollapse */
InputValidateDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer, },
]; };
InputValidateDirective.propDecorators = {
    "value": [{ type: core.Input },],
    "minLength": [{ type: core.Input, args: ['minLength',] },],
    "maxLength": [{ type: core.Input, args: ['maxLength',] },],
    "customRegex": [{ type: core.Input, args: ['customRegex',] },],
    "onBlur": [{ type: core.HostListener, args: ['blur', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ActiveDirective = /** @class */ (function () {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} platformId
     */
    function ActiveDirective(el, renderer, platformId) {
        this.renderer = renderer;
        this.isBrowser = false;
        this.isClicked = false;
        this.el = null;
        this.elLabel = null;
        this.elIcon = null;
        this.el = el;
        this.isBrowser = common.isPlatformBrowser(platformId);
    }
    /**
     * @return {?}
     */
    ActiveDirective.prototype.onClick = function () {
        this.initComponent();
        this.isClicked = true;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.Click = function () {
        this.isClicked = true;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.onBlur = function () {
        this.checkValue();
        this.isClicked = false;
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.initComponent();
        setTimeout(function () {
            _this.checkValue();
        }, 0);
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.ngAfterViewChecked = function () {
        this.initComponent();
        this.checkValue();
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.initComponent = function () {
        var /** @type {?} */ inputId;
        var /** @type {?} */ inputP;
        if (this.isBrowser) {
            try {
                inputId = this.el.nativeElement.id;
            }
            catch (err) { }
            try {
                inputP = this.el.nativeElement.parentNode;
            }
            catch (err) { }
            this.elLabel = inputP.querySelector('label[for="' + inputId + '"]') || inputP.querySelector('label');
            if (this.elLabel != null) {
                this.renderer.addClass(this.elLabel, 'active');
            }
            this.elIcon = inputP.querySelector('i') || false;
            if (this.elIcon) {
                this.renderer.addClass(this.elIcon, 'active');
            }
        }
    };
    /**
     * @return {?}
     */
    ActiveDirective.prototype.checkValue = function () {
        var /** @type {?} */ value = '';
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
    };
    return ActiveDirective;
}());
ActiveDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbActive]'
            },] },
];
/** @nocollapse */
ActiveDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: undefined, decorators: [{ type: core.Inject, args: [core.PLATFORM_ID,] },] },
]; };
ActiveDirective.propDecorators = {
    "mdbActive": [{ type: core.Input },],
    "onClick": [{ type: core.HostListener, args: ['focus', ['$event'],] },],
    "Click": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "onBlur": [{ type: core.HostListener, args: ['blur', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ActiveModule = /** @class */ (function () {
    function ActiveModule() {
    }
    /**
     * @return {?}
     */
    ActiveModule.forRoot = function () {
        return { ngModule: ActiveModule, providers: [] };
    };
    return ActiveModule;
}());
ActiveModule.decorators = [
    { type: core.NgModule, args: [{
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
var Utils = /** @class */ (function () {
    function Utils() {
    }
    /**
     * @param {?} element
     * @return {?}
     */
    Utils.reflow = function (element) {
        (function (bs) { return bs; })(element.offsetHeight);
    };
    /**
     * @param {?} elem
     * @return {?}
     */
    Utils.getStyles = function (elem) {
        // Support: IE <=11 only, Firefox <=30 (#15098, #14150)
        // IE throws on elements created in popups
        // FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
        var /** @type {?} */ view = elem.ownerDocument.defaultView;
        if (!view || !view.opener) {
            view = win;
        }
        return view.getComputedStyle(elem);
    };
    return Utils;
}());
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalOptions = /** @class */ (function () {
    function ModalOptions() {
    }
    return ModalOptions;
}());
ModalOptions.decorators = [
    { type: core.Injectable },
];
var MDBModalRef = /** @class */ (function () {
    function MDBModalRef() {
    }
    /**
     * Hides the modal
     * @return {?}
     */
    MDBModalRef.prototype.hide = function () { };
    return MDBModalRef;
}());
MDBModalRef.decorators = [
    { type: core.Injectable },
];
var modalConfigDefaults = {
    backdrop: true,
    keyboard: true,
    focus: true,
    show: false,
    ignoreBackdropClick: false,
    class: '',
    animated: true
};
var ClassName = {
    SCROLLBAR_MEASURER: 'modal-scrollbar-measure',
    BACKDROP: 'modal-backdrop',
    OPEN: 'modal-open',
    FADE: 'fade',
    IN: 'in',
    // bs3
    SHOW: 'show' // bs4
};
var Selector = {
    DIALOG: '.modal-dialog',
    DATA_TOGGLE: '[data-toggle="modal"]',
    DATA_DISMISS: '[data-dismiss="modal"]',
    FIXED_CONTENT: '.navbar-fixed-top, .navbar-fixed-bottom, .is-fixed'
};
var TransitionDurations = {
    MODAL: 300,
    BACKDROP: 150
};
var DISMISS_REASONS = {
    BACKRDOP: 'backdrop-click',
    ESC: 'esc'
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalBackdropOptions = /** @class */ (function () {
    /**
     * @param {?} options
     */
    function ModalBackdropOptions(options) {
        this.animate = true;
        Object.assign(this, options);
    }
    return ModalBackdropOptions;
}());
/**
 * This component will be added as background layout for modals if enabled
 */
var ModalBackdropComponent = /** @class */ (function () {
    /**
     * @param {?} element
     * @param {?} renderer
     */
    function ModalBackdropComponent(element, renderer) {
        this.classNameBackDrop = true;
        this._isShown = false;
        this.element = element;
        this.renderer = renderer;
    }
    Object.defineProperty(ModalBackdropComponent.prototype, "isAnimated", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isAnimated;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isAnimated = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalBackdropComponent.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isShown;
        },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            this._isShown = value;
            this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.IN, value);
            if (!isBs3()) {
                this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.SHOW, value);
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    ModalBackdropComponent.prototype.ngOnInit = function () {
        if (this.isAnimated) {
            this.renderer.setElementClass(this.element.nativeElement, "" + ClassName.FADE, this.isAnimated);
            Utils.reflow(this.element.nativeElement);
        }
        this.isShown = true;
    };
    return ModalBackdropComponent;
}());
ModalBackdropComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-modal-backdrop',
                template: "",
            },] },
];
/** @nocollapse */
ModalBackdropComponent.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer, },
]; };
ModalBackdropComponent.propDecorators = {
    "classNameBackDrop": [{ type: core.HostBinding, args: ['class.modal-backdrop',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TRANSITION_DURATION = 300;
var BACKDROP_TRANSITION_DURATION = 150;
/**
 * Mark any code with directive to show it's content in modal
 */
var ModalDirective = /** @class */ (function () {
    /**
     * @param {?} _element
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} clf
     */
    function ModalDirective(_element, _viewContainerRef, _renderer, clf) {
        /**
         * This event fires immediately when the `show` instance method is called.
         */
        this.onShow = new core.EventEmitter();
        /**
         * This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete)
         */
        this.onShown = new core.EventEmitter();
        /**
         * This event is fired immediately when the hide instance method has been called.
         */
        this.onHide = new core.EventEmitter();
        /**
         * This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).
         */
        this.onHidden = new core.EventEmitter();
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
    Object.defineProperty(ModalDirective.prototype, "config", {
        /**
         * @return {?}
         */
        get: function () {
            return this._config;
        },
        /**
         * allows to set modal configuration via element property
         * @param {?} conf
         * @return {?}
         */
        set: function (conf) {
            this._config = this.getConfig(conf);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ModalDirective.prototype, "isShown", {
        /**
         * @return {?}
         */
        get: function () {
            return this._isShown;
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    ModalDirective.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.dismissReason = DISMISS_REASONS.BACKRDOP;
        this.hide(event);
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.onEsc = function () {
        if (this.config.keyboard) {
            this.dismissReason = DISMISS_REASONS.ESC;
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngOnDestroy = function () {
        this.config = void 0;
        if (this._isShown) {
            this._isShown = false;
            this.hideModal();
            this._backdrop.dispose();
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.ngAfterViewInit = function () {
        var _this = this;
        this._config = this._config || this.getConfig();
        setTimeout(function () {
            if (_this._config.show) {
                _this.show();
            }
        }, 0);
    };
    /**
     * Allows to manually toggle modal visibility
     * @return {?}
     */
    ModalDirective.prototype.toggle = function () {
        return this._isShown ? this.hide() : this.show();
    };
    /**
     * Allows to manually open modal
     * @return {?}
     */
    ModalDirective.prototype.show = function () {
        var _this = this;
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
        this.showBackdrop(function () {
            _this.showElement();
        });
    };
    /**
     * Allows to manually close modal
     * @param {?=} event
     * @return {?}
     */
    ModalDirective.prototype.hide = function (event) {
        var _this = this;
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
            this.timerHideModal = setTimeout(function () { return _this.hideModal(); }, TRANSITION_DURATION);
        }
        else {
            this.hideModal();
        }
    };
    /**
     * Private methods \@internal
     * @param {?=} config
     * @return {?}
     */
    ModalDirective.prototype.getConfig = function (config) {
        return Object.assign({}, modalConfigDefaults, config);
    };
    /**
     *  Show dialog
     *  \@internal
     * @return {?}
     */
    ModalDirective.prototype.showElement = function () {
        var _this = this;
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
        var /** @type {?} */ transitionComplete = function () {
            if (_this._config.focus) {
                _this._element.nativeElement.focus();
            }
            _this.onShown.emit(_this);
        };
        if (this.isAnimated) {
            setTimeout(transitionComplete, TRANSITION_DURATION);
        }
        else {
            transitionComplete();
        }
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.hideModal = function () {
        var _this = this;
        this._renderer.setAttribute(this._element.nativeElement, 'aria-hidden', 'true');
        this._renderer.setStyle(this._element.nativeElement, 'display', 'none');
        this.showBackdrop(function () {
            if (!_this.isNested) {
                if (document$1 && document$1.body) {
                    _this._renderer.removeClass(document$1.body, ClassName.OPEN);
                }
                _this.resetScrollbar();
            }
            _this.resetAdjustments();
            _this.focusOtherModal();
            _this.onHidden.emit(_this);
        });
    };
    /**
     * \@internal
     * @param {?=} callback
     * @return {?}
     */
    ModalDirective.prototype.showBackdrop = function (callback) {
        var _this = this;
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
            var /** @type {?} */ callbackRemove = function () {
                _this.removeBackdrop();
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
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.removeBackdrop = function () {
        this._backdrop.hide();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.focusOtherModal = function () {
        var /** @type {?} */ otherOpenedModals = this._element.nativeElement.parentElement.querySelectorAll('.in[mdbModal]');
        if (!otherOpenedModals.length) {
            return;
        }
        //  this._renderer.invokeElementMethod(otherOpenedModals[otherOpenedModals.length - 1], 'focus');
        otherOpenedModals[otherOpenedModals.length - 1].nativeElement.focus();
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.resetAdjustments = function () {
        this._renderer.setStyle(this._element.nativeElement, 'paddingLeft', '');
        this._renderer.setStyle(this._element.nativeElement, 'paddingRight', '');
    };
    /**
     * \@internal
     * @return {?}
     */
    ModalDirective.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document$1.body.clientWidth < win.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.setScrollbar = function () {
        if (!document$1) {
            return;
        }
        this.originalBodyPadding = parseInt(win.getComputedStyle(document$1.body).getPropertyValue('padding-right') || 0, 10);
        if (this.isBodyOverflowing) {
            document$1.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.resetScrollbar = function () {
        document$1.body.style.paddingRight = this.originalBodyPadding;
    };
    /**
     * @return {?}
     */
    ModalDirective.prototype.getScrollbarWidth = function () {
        var /** @type {?} */ scrollDiv = this._renderer.createElement('div', void 0);
        this._renderer.appendChild(document$1.body, scrollDiv);
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document$1.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    return ModalDirective;
}());
ModalDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbModal]',
                exportAs: 'mdb-modal'
            },] },
];
/** @nocollapse */
ModalDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.ViewContainerRef, },
    { type: core.Renderer2, },
    { type: ComponentLoaderFactory, },
]; };
ModalDirective.propDecorators = {
    "config": [{ type: core.Input },],
    "onShow": [{ type: core.Output },],
    "onShown": [{ type: core.Output },],
    "onHide": [{ type: core.Output },],
    "onHidden": [{ type: core.Output },],
    "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "onEsc": [{ type: core.HostListener, args: ['keydown.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var msConfig = {
    serviceInstance: new Object()
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalContainerComponent = /** @class */ (function () {
    /**
     * @param {?} options
     * @param {?} _element
     * @param {?} _renderer
     */
    function ModalContainerComponent(options, _element, _renderer) {
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
    ModalContainerComponent.prototype.onClick = function (event) {
        if (this.config.ignoreBackdropClick || this.config.backdrop === 'static' || event.target !== this._element.nativeElement) {
            return;
        }
        this.mdbModalService.setDismissReason(DISMISS_REASONS.BACKRDOP);
        this.hide();
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.onEsc = function () {
        if (this.config.keyboard && this.level === this.mdbModalService.getModalsCount()) {
            this.mdbModalService.setDismissReason(DISMISS_REASONS.ESC);
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.isAnimated) {
            this._renderer.setElementClass(this._element.nativeElement, ClassName.FADE, true);
        }
        this._renderer.setElementStyle(this._element.nativeElement, 'display', 'block');
        setTimeout(function () {
            _this.isShown = true;
            _this._renderer.setElementClass(_this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW, true);
        }, this.isAnimated ? TransitionDurations.BACKDROP : 0);
        if (document && document.body) {
            if (this.mdbModalService.getModalsCount() === 1) {
                this.mdbModalService.checkScrollbar();
                this.mdbModalService.setScrollbar();
            }
            this._renderer.setElementClass(document.body, ClassName.OPEN, true);
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.ngOnDestroy = function () {
        if (this.isShown) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    ModalContainerComponent.prototype.hide = function () {
        var _this = this;
        if (this.isModalHiding || !this.isShown) {
            return;
        }
        this.isModalHiding = true;
        this._renderer.setElementClass(this._element.nativeElement, isBs3() ? ClassName.IN : ClassName.SHOW, false);
        setTimeout(function () {
            _this.isShown = false;
            if (document && document.body && _this.mdbModalService.getModalsCount() === 1) {
                _this._renderer.setElementClass(document.body, ClassName.OPEN, false);
            }
            _this.mdbModalService.hide(_this.level);
            _this.isModalHiding = false;
        }, this.isAnimated ? TransitionDurations.MODAL : 0);
    };
    return ModalContainerComponent;
}());
ModalContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-modal-container',
                template: "\n  <div [class]=\"'modal-dialog' + (config.class ? ' ' + config.class : '')\" role=\"document\">\n  <div class=\"modal-content\"><ng-content></ng-content></div>\n</div>"
            },] },
];
/** @nocollapse */
ModalContainerComponent.ctorParameters = function () { return [
    { type: ModalOptions, },
    { type: core.ElementRef, },
    { type: core.Renderer, },
]; };
ModalContainerComponent.propDecorators = {
    "tabindex": [{ type: core.HostBinding, args: ['tabindex',] },],
    "role": [{ type: core.HostBinding, args: ['role',] },],
    "modla": [{ type: core.HostBinding, args: ['class.modal',] },],
    "onClick": [{ type: core.HostListener, args: ['click', ['$event'],] },],
    "onEsc": [{ type: core.HostListener, args: ['window:keydown.esc',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MDBModalService = /** @class */ (function () {
    /**
     * @param {?} clf
     * @param {?} el
     * @param {?} v
     * @param {?} r
     */
    function MDBModalService(clf, el, v, r) {
        this.clf = clf;
        this.el = el;
        this.v = v;
        this.r = r;
        this.config = modalConfigDefaults;
        this.onShow = new core.EventEmitter();
        this.onShown = new core.EventEmitter();
        this.onHide = new core.EventEmitter();
        this.onHidden = new core.EventEmitter();
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
    MDBModalService.prototype.show = function (content, config) {
        this.modalsCount++;
        this._createLoaders();
        this.config = Object.assign({}, modalConfigDefaults, config);
        this._showBackdrop();
        this.lastDismissReason = null;
        return this._showModal(content);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.hide = function (level) {
        var _this = this;
        if (this.modalsCount === 1) {
            this._hideBackdrop();
            this.resetScrollbar();
        }
        this.modalsCount = this.modalsCount >= 1 ? this.modalsCount - 1 : 0;
        setTimeout(function () {
            _this._hideModal(level);
            _this.removeLoaders(level);
        }, this.config.animated ? TransitionDurations.BACKDROP : 0);
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._showBackdrop = function () {
        var /** @type {?} */ isBackdropEnabled = this.config.backdrop || this.config.backdrop === 'static';
        var /** @type {?} */ isBackdropInDOM = !this.backdropRef || !this.backdropRef.instance.isShown;
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
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._hideBackdrop = function () {
        var _this = this;
        if (!this.backdropRef) {
            return;
        }
        this.backdropRef.instance.isShown = false;
        var /** @type {?} */ duration = this.config.animated ? TransitionDurations.BACKDROP : 0;
        setTimeout(function () { return _this.removeBackdrop(); }, duration);
    };
    /**
     * @param {?} content
     * @return {?}
     */
    MDBModalService.prototype._showModal = function (content) {
        var /** @type {?} */ modalLoader = this.loaders[this.loaders.length - 1];
        var /** @type {?} */ mdbModalRef = new MDBModalRef();
        var /** @type {?} */ modalContainerRef = modalLoader
            .provide({ provide: ModalOptions, useValue: this.config })
            .provide({ provide: MDBModalRef, useValue: mdbModalRef })
            .attach(ModalContainerComponent)
            .to('body')
            .show({ content: content, isAnimated: this.config.animated });
        modalContainerRef.instance.level = this.getModalsCount();
        mdbModalRef.hide = function () {
            modalContainerRef.instance.hide();
        };
        mdbModalRef.content = modalLoader.getInnerComponent() || null;
        return mdbModalRef;
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype._hideModal = function (level) {
        var /** @type {?} */ modalLoader = this.loaders[level - 1];
        if (modalLoader) {
            modalLoader.hide();
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getModalsCount = function () {
        return this.modalsCount;
    };
    /**
     * @param {?} reason
     * @return {?}
     */
    MDBModalService.prototype.setDismissReason = function (reason) {
        this.lastDismissReason = reason;
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.removeBackdrop = function () {
        this._backdropLoader.hide();
        this.backdropRef = null;
    };
    /**
     * \@internal
     * @return {?}
     */
    MDBModalService.prototype.checkScrollbar = function () {
        this.isBodyOverflowing = document.body.clientWidth < window.innerWidth;
        this.scrollbarWidth = this.getScrollbarWidth();
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.setScrollbar = function () {
        if (!document) {
            return;
        }
        this.originalBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right') || '0', 10);
        if (this.isBodyOverflowing) {
            document.body.style.paddingRight = this.originalBodyPadding + this.scrollbarWidth + "px";
        }
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.resetScrollbar = function () {
        document.body.style.paddingRight = this.originalBodyPadding + 'px';
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype.getScrollbarWidth = function () {
        var /** @type {?} */ scrollDiv = document.createElement('div');
        scrollDiv.className = ClassName.SCROLLBAR_MEASURER;
        document.body.appendChild(scrollDiv);
        var /** @type {?} */ scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    /**
     * @return {?}
     */
    MDBModalService.prototype._createLoaders = function () {
        // const loader = this.clf.createLoader<ModalContainerComponent>(null, null, null);
        var /** @type {?} */ loader = this.clf.createLoader(this.el, this.v, this.r);
        this.copyEvent(loader.onBeforeShow, this.onShow);
        this.copyEvent(loader.onShown, this.onShown);
        this.copyEvent(loader.onBeforeHide, this.onHide);
        this.copyEvent(loader.onHidden, this.onHidden);
        this.loaders.push(loader);
    };
    /**
     * @param {?} level
     * @return {?}
     */
    MDBModalService.prototype.removeLoaders = function (level) {
        this.loaders.splice(level - 1, 1);
        this.loaders.forEach(function (loader, i) {
            loader.instance.level = i + 1;
        });
    };
    /**
     * @param {?} from
     * @param {?} to
     * @return {?}
     */
    MDBModalService.prototype.copyEvent = function (from, to) {
        var _this = this;
        from.subscribe(function () {
            to.emit(_this.lastDismissReason);
        });
    };
    return MDBModalService;
}());
MDBModalService.decorators = [
    { type: core.Injectable },
];
/** @nocollapse */
MDBModalService.ctorParameters = function () { return [
    { type: ComponentLoaderFactory, },
    { type: core.ElementRef, },
    { type: core.ViewContainerRef, },
    { type: core.Renderer2, },
]; };
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var ModalModule = /** @class */ (function () {
    function ModalModule() {
    }
    /**
     * @return {?}
     */
    ModalModule.forRoot = function () {
        return { ngModule: ModalModule, providers: [MDBModalService, ComponentLoaderFactory, PositioningService] };
    };
    return ModalModule;
}());
ModalModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [ModalBackdropComponent, ModalDirective, ModalContainerComponent],
                exports: [ModalBackdropComponent, ModalDirective],
                entryComponents: [ModalBackdropComponent, ModalContainerComponent],
                schemas: [core.NO_ERRORS_SCHEMA]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarService = /** @class */ (function () {
    function NavbarService() {
        this.navbarLinkClicks = new rxjs.Subject();
    }
    /**
     * @return {?}
     */
    NavbarService.prototype.getNavbarLinkClicks = function () {
        return this.navbarLinkClicks.asObservable();
    };
    /**
     * @return {?}
     */
    NavbarService.prototype.setNavbarLinkClicks = function () {
        this.navbarLinkClicks.next();
    };
    return NavbarService;
}());
NavbarService.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LinksComponent = /** @class */ (function () {
    /**
     * @param {?} _navbarService
     */
    function LinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterContentInit = function () {
        var /** @type {?} */ that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    LinksComponent.prototype.ngAfterViewInit = function () {
    };
    return LinksComponent;
}());
LinksComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'links',
                template: "\n        <ng-content></ng-content>\n    ",
            },] },
];
/** @nocollapse */
LinksComponent.ctorParameters = function () { return [
    { type: NavbarService, },
]; };
LinksComponent.propDecorators = {
    "links": [{ type: core.ContentChildren, args: [router.RouterLinkWithHref, { read: core.ElementRef, descendants: true },] },],
    "linkClick": [{ type: core.Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var LogoComponent = /** @class */ (function () {
    function LogoComponent() {
    }
    return LogoComponent;
}());
LogoComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'logo',
                template: "\n  <ng-content></ng-content>\n  "
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarComponent = /** @class */ (function () {
    /**
     * @param {?} renderer
     * @param {?} _navbarService
     */
    function NavbarComponent(renderer, _navbarService) {
        var _this = this;
        this.renderer = renderer;
        this._navbarService = _navbarService;
        this.containerInside = true;
        this.shown = false;
        this.duration = 350;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = false;
        // tslint:disable-next-line:max-line-length
        this.subscription = this._navbarService.getNavbarLinkClicks().subscribe(function (navbarLinkClicks) { _this.closeNavbarOnClick(navbarLinkClicks); });
    }
    /**
     * @param {?} navbarLinkClicks
     * @return {?}
     */
    NavbarComponent.prototype.closeNavbarOnClick = function (navbarLinkClicks) {
        this.navbarLinkClicks = navbarLinkClicks;
        if (this.showClass) {
            this.hide();
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngOnInit = function () {
        var /** @type {?} */ isDoubleNav = this.SideClass.split(' ');
        if (isDoubleNav.indexOf('double-nav') !== -1) {
            this.doubleNav = true;
        }
        else {
            this.doubleNav = false;
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        /* bugfix - bez tego sypie ExpressionChangedAfterItHasBeenCheckedError -
            https://github.com/angular/angular/issues/6005#issuecomment-165951692 */
        setTimeout(function () {
            _this.height = _this.el.nativeElement.scrollHeight;
            _this.collapse = true;
            if (!_this.containerInside) {
                var /** @type {?} */ childrens = Array.from(_this.container.nativeElement.children);
                childrens.forEach(function (child) {
                    // this.navbar.nativeElement.append(child);
                    _this.renderer.appendChild(_this.navbar.nativeElement, child);
                    _this.container.nativeElement.remove();
                });
            }
            if (_this.el.nativeElement.children.length === 0) {
                _this.el.nativeElement.remove();
            }
        });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.toggle = function (event) {
        event.preventDefault();
        if (!this.collapsing) {
            if (this.shown) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.show = function () {
        var _this = this;
        this.shown = true;
        this.collapse = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', _this.height + 'px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
            _this.showClass = true;
        }, this.duration);
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.hide = function () {
        var _this = this;
        this.shown = false;
        this.collapse = false;
        this.showClass = false;
        this.collapsing = true;
        setTimeout(function () {
            _this.renderer.setStyle(_this.el.nativeElement, 'height', '0px');
        }, 10);
        setTimeout(function () {
            _this.collapsing = false;
            _this.collapse = true;
        }, this.duration);
    };
    Object.defineProperty(NavbarComponent.prototype, "displayStyle", {
        /**
         * @return {?}
         */
        get: function () {
            // if(!this.containerInside) {
            //  return 'flex';
            // } else {
            return '';
            // }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @param {?} event
     * @return {?}
     */
    NavbarComponent.prototype.onResize = function (event) {
        var _this = this;
        var /** @type {?} */ breakpoit = 0;
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
                setTimeout(function () {
                    _this.height = _this.el.nativeElement.scrollHeight;
                    _this.collapse = true;
                    _this.renderer.setStyle(_this.el.nativeElement, 'opacity', '');
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
    };
    /**
     * @return {?}
     */
    NavbarComponent.prototype.onScroll = function () {
        if (this.navbar.nativeElement.classList.contains('scrolling-navbar')) {
            if (window.pageYOffset > 120) {
                this.renderer.addClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
            else {
                this.renderer.removeClass(this.navbar.nativeElement, 'top-nav-collapse');
            }
        }
    };
    return NavbarComponent;
}());
NavbarComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-navbar',
                template: "<nav class=\"{{SideClass}}\" #nav> <div [ngClass]=\"{'container': containerInside}\" [ngStyle]=\"{'display': displayStyle}\" #container> <ng-content select=\"logo\"></ng-content> <ng-content *ngIf=\"this.doubleNav == true\" select=\"navlinks\"></ng-content> <div *ngIf=\"this.doubleNav == false\"> <button class=\"navbar-toggler\" type=\"button\" (click)=\"toggle($event)\" mdbWavesEffect *ngIf=\"this.el.nativeElement.children.length !== 0\"> <span class=\"navbar-toggler-icon\"> </span> </button> </div> <div #navbar [style.height]=\"height\" class=\"navbar-collapse collapse\" [ngClass]=\"{'collapse': collapse, 'show': showClass, 'collapsing': collapsing}\"> <ng-content select=\"links\"></ng-content> </div> </div> </nav> ",
            },] },
];
/** @nocollapse */
NavbarComponent.ctorParameters = function () { return [
    { type: core.Renderer2, },
    { type: NavbarService, },
]; };
NavbarComponent.propDecorators = {
    "SideClass": [{ type: core.Input },],
    "containerInside": [{ type: core.Input },],
    "el": [{ type: core.ViewChild, args: ['navbar',] },],
    "mobile": [{ type: core.ViewChild, args: ['mobile',] },],
    "navbar": [{ type: core.ViewChild, args: ['nav',] },],
    "container": [{ type: core.ViewChild, args: ['container',] },],
    "onResize": [{ type: core.HostListener, args: ['window:resize', ['$event'],] },],
    "onScroll": [{ type: core.HostListener, args: ['document:scroll', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavlinksComponent = /** @class */ (function () {
    /**
     * @param {?} _navbarService
     */
    function NavlinksComponent(_navbarService) {
        this._navbarService = _navbarService;
        this.linkClick = new core.EventEmitter();
    }
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterContentInit = function () {
        var /** @type {?} */ that = this;
        setTimeout(function () {
            that.links.forEach(function (element) {
                element.nativeElement.onclick = function () {
                    that._navbarService.setNavbarLinkClicks();
                };
            });
        }, 0);
    };
    /**
     * @return {?}
     */
    NavlinksComponent.prototype.ngAfterViewInit = function () {
    };
    return NavlinksComponent;
}());
NavlinksComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'navlinks',
                template: "\n        <ng-content></ng-content>\n    ",
            },] },
];
/** @nocollapse */
NavlinksComponent.ctorParameters = function () { return [
    { type: NavbarService, },
]; };
NavlinksComponent.propDecorators = {
    "links": [{ type: core.ContentChildren, args: [router.RouterLinkWithHref, { read: core.ElementRef, descendants: true },] },],
    "linkClick": [{ type: core.Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var NavbarModule = /** @class */ (function () {
    function NavbarModule() {
    }
    return NavbarModule;
}());
NavbarModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
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
var PopoverConfig = /** @class */ (function () {
    function PopoverConfig() {
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
    return PopoverConfig;
}());
PopoverConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverContainerComponent = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function PopoverContainerComponent(config) {
        this.show = '!isBs3';
        this.role = 'tooltip';
        Object.assign(this, config);
    }
    Object.defineProperty(PopoverContainerComponent.prototype, "isBs3", {
        /**
         * @return {?}
         */
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    PopoverContainerComponent.prototype.ngOnInit = function () {
        this.class = 'popover-fadeIn popover in popover-' + this.placement + ' ' + this.placement + ' bs-popover-' + this.placement;
    };
    return PopoverContainerComponent;
}());
PopoverContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-popover-container',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                template: "\n <h3 class=\"popover-header\" *ngIf=\"title\">{{title}}</h3>\n <div class=\"popover-body\">\n <ng-content></ng-content>\n </div>"
            },] },
];
/** @nocollapse */
PopoverContainerComponent.ctorParameters = function () { return [
    { type: PopoverConfig, },
]; };
PopoverContainerComponent.propDecorators = {
    "placement": [{ type: core.Input },],
    "title": [{ type: core.Input },],
    "show": [{ type: core.HostBinding, args: ['class.show',] },],
    "role": [{ type: core.HostBinding, args: ['attr.role',] },],
    "class": [{ type: core.HostBinding, args: ['class',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * A lightweight, extensible directive for fancy popover creation.
 */
var PopoverDirective = /** @class */ (function () {
    /**
     * @param {?} _elementRef
     * @param {?} _renderer
     * @param {?} _viewContainerRef
     * @param {?} _config
     * @param {?} cis
     */
    function PopoverDirective(_elementRef, _renderer, _viewContainerRef, _config, cis) {
        this._popover = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: PopoverConfig, useValue: _config });
        Object.assign(this, _config);
        this.onShown = this._popover.onShown;
        this.onHidden = this._popover.onHidden;
    }
    Object.defineProperty(PopoverDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the popover is currently being shown
         * @return {?}
         */
        get: function () { return this._popover.isShown; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * Opens an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.show = function () {
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
    };
    /**
     * Closes an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.hide = function () {
        if (this.isOpen) {
            this._popover.hide();
            this.isOpen = false;
        }
    };
    /**
     * Toggles an element’s popover. This is considered a “manual” triggering of
     * the popover.
     * @return {?}
     */
    PopoverDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._popover.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.dispose = function () {
        this._popover.dispose();
    };
    /**
     * @return {?}
     */
    PopoverDirective.prototype.ngOnDestroy = function () {
        this._popover.dispose();
    };
    return PopoverDirective;
}());
PopoverDirective.decorators = [
    { type: core.Directive, args: [{ selector: '[mdbPopover]', exportAs: 'bs-mdbPopover' },] },
];
/** @nocollapse */
PopoverDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
    { type: core.Renderer2, },
    { type: core.ViewContainerRef, },
    { type: PopoverConfig, },
    { type: ComponentLoaderFactory, },
]; };
PopoverDirective.propDecorators = {
    "mdbPopover": [{ type: core.Input },],
    "popoverTitle": [{ type: core.Input },],
    "placement": [{ type: core.Input },],
    "triggers": [{ type: core.Input },],
    "container": [{ type: core.Input },],
    "isOpen": [{ type: core.Input },],
    "onShown": [{ type: core.Output },],
    "onHidden": [{ type: core.Output },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var PopoverModule = /** @class */ (function () {
    function PopoverModule() {
    }
    /**
     * @return {?}
     */
    PopoverModule.forRoot = function () {
        return {
            ngModule: PopoverModule,
            providers: [PopoverConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    return PopoverModule;
}());
PopoverModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
                declarations: [PopoverDirective, PopoverContainerComponent],
                exports: [PopoverDirective],
                entryComponents: [PopoverContainerComponent]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RippleDirective = /** @class */ (function () {
    /**
     * @param {?} el
     */
    function RippleDirective(el) {
        this.el = el;
    }
    /**
     * @param {?} event
     * @return {?}
     */
    RippleDirective.prototype.click = function (event) {
        // event.stopPropagation();
        if (!this.el.nativeElement.classList.contains('disabled')) {
            var /** @type {?} */ button = this.el.nativeElement;
            if (!button.classList.contains('waves-effect')) {
                button.className += ' waves-effect';
            }
            var /** @type {?} */ xPos = event.clientX - button.getBoundingClientRect().left;
            var /** @type {?} */ yPos = event.clientY - button.getBoundingClientRect().top;
            var /** @type {?} */ tmp = document.createElement('div');
            tmp.className += 'waves-ripple waves-rippling';
            var /** @type {?} */ ripple = button.appendChild(tmp);
            var /** @type {?} */ top = yPos + 'px';
            var /** @type {?} */ left = xPos + 'px';
            tmp.style.top = top;
            tmp.style.left = left;
            var /** @type {?} */ scale = 'scale(' + ((button.clientWidth / 100) * 3) + ') translate(0,0)';
            tmp.style.webkitTransform = scale;
            tmp.style.transform = scale;
            tmp.style.opacity = '1';
            var /** @type {?} */ duration = 750;
            tmp.style.webkitTransitionDuration = duration + 'ms';
            tmp.style.transitionDuration = duration + 'ms';
            this.removeRipple(button, ripple);
        }
    };
    /**
     * @param {?} button
     * @param {?} ripple
     * @return {?}
     */
    RippleDirective.prototype.removeRipple = function (button, ripple) {
        ripple.classList.remove('waves-rippling');
        setTimeout(function () {
            ripple.style.opacity = '0';
            setTimeout(function () {
                button.removeChild(ripple);
            }, 750);
        }, 200);
    };
    return RippleDirective;
}());
RippleDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbRippleRadius]'
            },] },
];
/** @nocollapse */
RippleDirective.ctorParameters = function () { return [
    { type: core.ElementRef, },
]; };
RippleDirective.propDecorators = {
    "click": [{ type: core.HostListener, args: ['click', ['$event'],] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var RippleModule = /** @class */ (function () {
    function RippleModule() {
    }
    /**
     * @return {?}
     */
    RippleModule.forRoot = function () {
        return { ngModule: RippleModule, providers: [] };
    };
    return RippleModule;
}());
RippleModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [RippleDirective],
                exports: [RippleDirective]
            },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var WavesModule = /** @class */ (function () {
    function WavesModule() {
    }
    /**
     * @return {?}
     */
    WavesModule.forRoot = function () {
        return { ngModule: WavesModule, providers: [] };
    };
    return WavesModule;
}());
WavesModule.decorators = [
    { type: core.NgModule, args: [{
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
var TooltipConfig = /** @class */ (function () {
    function TooltipConfig() {
        /**
         * tooltip placement, supported positions: 'top', 'bottom', 'left', 'right'
         */
        this.placement = 'top';
        /**
         * array of event names which triggers tooltip opening
         */
        this.triggers = 'hover focus';
    }
    return TooltipConfig;
}());
TooltipConfig.decorators = [
    { type: core.Injectable },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipContainerComponent = /** @class */ (function () {
    /**
     * @param {?} config
     */
    function TooltipContainerComponent(config) {
        this.show = !this.isBs3;
        Object.assign(this, config);
    }
    Object.defineProperty(TooltipContainerComponent.prototype, "isBs3", {
        /**
         * @return {?}
         */
        get: function () {
            return isBs3();
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipContainerComponent.prototype.ngAfterViewInit = function () {
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
    };
    return TooltipContainerComponent;
}());
TooltipContainerComponent.decorators = [
    { type: core.Component, args: [{
                selector: 'mdb-tooltip-container',
                changeDetection: core.ChangeDetectionStrategy.OnPush,
                // tslint:disable-next-line
                host: {
                    '[class]': '"tooltip-fadeIn tooltip in tooltip-" + placement'
                },
                template: "\n  <div class=\"tooltip-arrow\"></div>\n  <div class=\"tooltip-inner\"><ng-content></ng-content></div>\n  "
            },] },
];
/** @nocollapse */
TooltipContainerComponent.ctorParameters = function () { return [
    { type: TooltipConfig, },
]; };
TooltipContainerComponent.propDecorators = {
    "show": [{ type: core.HostBinding, args: ['class.show',] },],
};
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
/**
 * @return {?}
 */
function OnChange() {
    var /** @type {?} */ sufix = 'Change';
    return function OnChangeHandler(target, propertyKey) {
        var /** @type {?} */ _key = " __" + propertyKey + "Value";
        Object.defineProperty(target, propertyKey, {
            /**
             * @return {?}
             */
            get: function () { return this[_key]; },
            /**
             * @param {?} value
             * @return {?}
             */
            set: function (value) {
                var /** @type {?} */ prevValue = this[_key];
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
var TooltipDirective = /** @class */ (function () {
    /**
     * @param {?} _viewContainerRef
     * @param {?} _renderer
     * @param {?} _elementRef
     * @param {?} cis
     * @param {?} config
     */
    function TooltipDirective(_viewContainerRef, _renderer, _elementRef, cis, config) {
        /**
         * Fired when tooltip content changes
         */
        this.tooltipChange = new core.EventEmitter();
        this.delay = 0;
        this.fadeDuration = 150;
        this._tooltip = cis
            .createLoader(_elementRef, _viewContainerRef, _renderer)
            .provide({ provide: TooltipConfig, useValue: config });
        Object.assign(this, config);
        this.onShown = this._tooltip.onShown;
        this.onHidden = this._tooltip.onHidden;
    }
    Object.defineProperty(TooltipDirective.prototype, "isOpen", {
        /**
         * Returns whether or not the tooltip is currently being shown
         * @return {?}
         */
        get: function () { return this._tooltip.isShown; },
        /**
         * @param {?} value
         * @return {?}
         */
        set: function (value) {
            if (value) {
                this.show();
            }
            else {
                this.hide();
            }
        },
        enumerable: true,
        configurable: true
    });
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnInit = function () {
        var _this = this;
        this._tooltip.listen({
            triggers: this.triggers,
            show: function () { return _this.show(); }
        });
        this.tooltipChange.subscribe(function (value) {
            if (!value) {
                _this._tooltip.hide();
            }
        });
    };
    /**
     * Toggles an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.toggle = function () {
        if (this.isOpen) {
            return this.hide();
        }
        this.show();
    };
    /**
     * Opens an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.show = function () {
        var _this = this;
        if (this.isOpen || this.isDisabled || this._delayTimeoutId || !this.mdbTooltip) {
            return;
        }
        var /** @type {?} */ showTooltip = function () { return _this._tooltip
            .attach(TooltipContainerComponent)
            .to(_this.container)
            .position({ attachment: _this.placement })
            .show({
            content: _this.mdbTooltip,
            placement: _this.placement
        }); };
        if (this.delay) {
            this._delayTimeoutId = setTimeout(function () { showTooltip(); }, this.delay);
        }
        else {
            showTooltip();
        }
    };
    /**
     * Closes an element’s tooltip. This is considered a “manual” triggering of
     * the tooltip.
     * @return {?}
     */
    TooltipDirective.prototype.hide = function () {
        var _this = this;
        if (this._delayTimeoutId) {
            clearTimeout(this._delayTimeoutId);
            this._delayTimeoutId = undefined;
        }
        if (!this._tooltip.isShown) {
            return;
        }
        this._tooltip.instance.classMap.in = false;
        setTimeout(function () {
            _this._tooltip.hide();
        }, this.fadeDuration);
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.dispose = function () {
        this._tooltip.dispose();
    };
    /**
     * @return {?}
     */
    TooltipDirective.prototype.ngOnDestroy = function () {
        this._tooltip.dispose();
    };
    return TooltipDirective;
}());
TooltipDirective.decorators = [
    { type: core.Directive, args: [{
                selector: '[mdbTooltip]',
                exportAs: 'mdb-tooltip'
            },] },
];
/** @nocollapse */
TooltipDirective.ctorParameters = function () { return [
    { type: core.ViewContainerRef, },
    { type: core.Renderer2, },
    { type: core.ElementRef, },
    { type: ComponentLoaderFactory, },
    { type: TooltipConfig, },
]; };
TooltipDirective.propDecorators = {
    "mdbTooltip": [{ type: core.Input },],
    "tooltipChange": [{ type: core.Output },],
    "placement": [{ type: core.Input },],
    "triggers": [{ type: core.Input },],
    "container": [{ type: core.Input },],
    "isOpen": [{ type: core.Input },],
    "isDisabled": [{ type: core.Input },],
    "onShown": [{ type: core.Output },],
    "onHidden": [{ type: core.Output },],
    "delay": [{ type: core.Input },],
    "fadeDuration": [{ type: core.Input },],
};
tslib_1.__decorate([
    OnChange(),
    tslib_1.__metadata("design:type", Object)
], TooltipDirective.prototype, "mdbTooltip", void 0);
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var TooltipModule = /** @class */ (function () {
    function TooltipModule() {
    }
    /**
     * @return {?}
     */
    TooltipModule.forRoot = function () {
        return {
            ngModule: TooltipModule,
            providers: [TooltipConfig, ComponentLoaderFactory, PositioningService]
        };
    };
    
    return TooltipModule;
}());
TooltipModule.decorators = [
    { type: core.NgModule, args: [{
                imports: [common.CommonModule],
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
var BsComponentRef = /** @class */ (function () {
    function BsComponentRef() {
    }
    return BsComponentRef;
}());
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
var MODULES = [
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
var MDBRootModule = /** @class */ (function () {
    function MDBRootModule() {
    }
    return MDBRootModule;
}());
MDBRootModule.decorators = [
    { type: core.NgModule, args: [{
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
                schemas: [core.NO_ERRORS_SCHEMA]
            },] },
];
var MDBBootstrapModule = /** @class */ (function () {
    function MDBBootstrapModule() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModule.forRoot = function () {
        return { ngModule: MDBRootModule };
    };
    return MDBBootstrapModule;
}());
MDBBootstrapModule.decorators = [
    { type: core.NgModule, args: [{ exports: MODULES },] },
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
var MODULES$1 = [
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
var MDBRootModulePro = /** @class */ (function () {
    function MDBRootModulePro() {
    }
    return MDBRootModulePro;
}());
MDBRootModulePro.decorators = [
    { type: core.NgModule, args: [{
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
                schemas: [core.NO_ERRORS_SCHEMA]
            },] },
];
var MDBBootstrapModulePro = /** @class */ (function () {
    function MDBBootstrapModulePro() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModulePro.forRoot = function () {
        return { ngModule: MDBRootModulePro };
    };
    return MDBBootstrapModulePro;
}());
MDBBootstrapModulePro.decorators = [
    { type: core.NgModule, args: [{ exports: [MODULES$1] },] },
];
/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes} checked by tsc
 */
var MODULES$2 = [
    MDBBootstrapModule,
    MDBBootstrapModulePro
];
var MDBRootModules = /** @class */ (function () {
    function MDBRootModules() {
    }
    return MDBRootModules;
}());
MDBRootModules.decorators = [
    { type: core.NgModule, args: [{
                imports: [
                    MDBBootstrapModule.forRoot(),
                    MDBBootstrapModulePro.forRoot(),
                ],
                exports: MODULES$2,
                providers: [],
                schemas: [core.NO_ERRORS_SCHEMA]
            },] },
];
var MDBBootstrapModulesPro = /** @class */ (function () {
    function MDBBootstrapModulesPro() {
    }
    /**
     * @return {?}
     */
    MDBBootstrapModulesPro.forRoot = function () {
        return { ngModule: MDBRootModules };
    };
    return MDBBootstrapModulesPro;
}());
MDBBootstrapModulesPro.decorators = [
    { type: core.NgModule, args: [{ exports: MODULES$2 },] },
];

exports.SBItemBodyComponent = SBItemBodyComponent;
exports.SBItemHeadComponent = SBItemHeadComponent;
exports.SBItemComponent = SBItemComponent;
exports.sbConfig = sbConfig;
exports.SqueezeBoxComponent = SqueezeBoxComponent;
exports.SQUEEZEBOX_COMPONENTS = SQUEEZEBOX_COMPONENTS;
exports.AccordionModule = AccordionModule;
exports.OverlayContainer = OverlayContainer;
exports.OverlayRef = OverlayRef;
exports.Overlay = Overlay;
exports.OVERLAY_PROVIDERS = OVERLAY_PROVIDERS;
exports.DomPortalHost = DomPortalHost;
exports.ComponentPortal = ComponentPortal;
exports.BasePortalHost = BasePortalHost;
exports.ToastComponent = ToastComponent;
exports.GlobalConfig = GlobalConfig;
exports.ToastPackage = ToastPackage;
exports.tsConfig = tsConfig;
exports.ToastContainerDirective = ToastContainerDirective;
exports.ToastContainerModule = ToastContainerModule;
exports.ToastRef = ToastRef;
exports.ToastInjector = ToastInjector;
exports.ToastModule = ToastModule;
exports.ToastService = ToastService;
exports.TOAST_CONFIG = TOAST_CONFIG;
exports.slideIn = slideIn;
exports.fadeIn = fadeIn;
exports.slideOut = slideOut;
exports.flipState = flipState;
exports.turnState = turnState;
exports.iconsState = iconsState;
exports.socialsState = socialsState;
exports.flyInOut = flyInOut;
exports.CompleterListItemComponent = CompleterListItemComponent;
exports.CompleterComponent = CompleterComponent;
exports.MdbCompleterDirective = MdbCompleterDirective;
exports.CtrRowItem = CtrRowItem;
exports.MdbDropdownDirective = MdbDropdownDirective;
exports.MdbInputCompleteDirective = MdbInputCompleteDirective;
exports.CtrListContext = CtrListContext;
exports.MdbListDirective = MdbListDirective;
exports.MdbRowDirective = MdbRowDirective;
exports.CompleterBaseData = CompleterBaseData;
exports.CompleterService = CompleterService;
exports.localDataFactory = localDataFactory;
exports.remoteDataFactory = remoteDataFactory;
exports.LocalDataFactoryProvider = LocalDataFactoryProvider;
exports.RemoteDataFactoryProvider = RemoteDataFactoryProvider;
exports.LocalData = LocalData;
exports.RemoteData = RemoteData;
exports.MAX_CHARS = MAX_CHARS;
exports.MIN_SEARCH_LENGTH = MIN_SEARCH_LENGTH;
exports.PAUSE = PAUSE;
exports.TEXT_SEARCHING = TEXT_SEARCHING;
exports.TEXT_NO_RESULTS = TEXT_NO_RESULTS;
exports.CLEAR_TIMEOUT = CLEAR_TIMEOUT;
exports.isNil = isNil;
exports.AutocompleteModule = AutocompleteModule;
exports.CardRevealComponent = CardRevealComponent;
exports.CardRotatingComponent = CardRotatingComponent;
exports.CardsModule = CardsModule;
exports.InputAutoFillDirective = InputAutoFillDirective;
exports.FocusDirective = FocusDirective;
exports.LocaleService = LocaleService;
exports.UtilService = UtilService;
exports.DatepickerModule = DatepickerModule;
exports.MYDP_VALUE_ACCESSOR = MYDP_VALUE_ACCESSOR;
exports.MDBDatePickerComponent = MDBDatePickerComponent;
exports.SimpleChartComponent = SimpleChartComponent;
exports.EasyPieChartComponent = EasyPieChartComponent;
exports.ChartSimpleModule = ChartSimpleModule;
exports.UploadStatus = UploadStatus;
exports.humanizeBytes = humanizeBytes;
exports.MDBUploaderService = MDBUploaderService;
exports.MDBFileDropDirective = MDBFileDropDirective;
exports.MDBFileSelectDirective = MDBFileSelectDirective;
exports.FileInputModule = FileInputModule;
exports.CharCounterDirective = CharCounterDirective;
exports.CharCounterModule = CharCounterModule;
exports.ImageModalComponent = ImageModalComponent;
exports.LightBoxModule = LightBoxModule;
exports.Diacritics = Diacritics;
exports.OptionList = OptionList;
exports.Option = Option;
exports.SelectDropdownComponent = SelectDropdownComponent;
exports.SELECT_VALUE_ACCESSOR = SELECT_VALUE_ACCESSOR;
exports.SelectComponent = SelectComponent;
exports.SelectModule = SelectModule;
exports.TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE = TYPE_ERROR_CONTAINER_WAS_NOT_FOUND_MESSAGE;
exports.EMULATE_ELEMENT_NAME = EMULATE_ELEMENT_NAME;
exports.CONTAINER_QUERY = CONTAINER_QUERY;
exports.COMPLETE_CLASS_NAME = COMPLETE_CLASS_NAME;
exports.CONTAINER_CLASS_NAME = CONTAINER_CLASS_NAME;
exports.CONTAINER_NAME = CONTAINER_NAME;
exports.MDBSpinningPreloader = MDBSpinningPreloader;
exports.ProgressBarComponent = ProgressBarComponent;
exports.MdProgressSpinnerCssMatStylerDirective = MdProgressSpinnerCssMatStylerDirective;
exports.MdProgressSpinnerComponent = MdProgressSpinnerComponent;
exports.MdSpinnerComponent = MdSpinnerComponent;
exports.BarComponent = BarComponent;
exports.ProgressSpinnerComponent = ProgressSpinnerComponent;
exports.ProgressDirective = ProgressDirective;
exports.ProgressbarComponent = ProgressbarComponent;
exports.ProgressbarConfigComponent = ProgressbarConfigComponent;
exports.ProgressbarModule = ProgressbarModule;
exports.PreloadersModule = PreloadersModule;
exports.ProgressBars = ProgressBars;
exports.SidenavComponent = SidenavComponent;
exports.SidenavModule = SidenavModule;
exports.PageScrollUtilService = PageScrollUtilService;
exports.EasingLogic = EasingLogic;
exports.PageScrollConfig = PageScrollConfig;
exports.PageScrollDirective = PageScrollDirective;
exports.PageScrollInstance = PageScrollInstance;
exports.SmoothscrollModule = SmoothscrollModule;
exports.PageScrollService = PageScrollService;
exports.computedStyle = computedStyle;
exports.MdbStickyDirective = MdbStickyDirective;
exports.StickyContentModule = StickyContentModule;
exports.TabHeadingDirective = TabHeadingDirective;
exports.TabDirective = TabDirective;
exports.TabsetComponent = TabsetComponent;
exports.TabsetConfig = TabsetConfig;
exports.NgTranscludeDirective = NgTranscludeDirective;
exports.TabsModule = TabsModule;
exports.CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR = CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR;
exports.MaterialChipsComponent = MaterialChipsComponent;
exports.MaterialChipsModule = MaterialChipsModule;
exports.TimePickerModule = TimePickerModule;
exports.TIME_PIRCKER_VALUE_ACCESSOT = TIME_PIRCKER_VALUE_ACCESSOT;
exports.ClockPickerComponent = ClockPickerComponent;
exports.ButtonsModule = ButtonsModule;
exports.CHECKBOX_CONTROL_VALUE_ACCESSOR = CHECKBOX_CONTROL_VALUE_ACCESSOR;
exports.ButtonCheckboxDirective = ButtonCheckboxDirective;
exports.RADIO_CONTROL_VALUE_ACCESSOR = RADIO_CONTROL_VALUE_ACCESSOR;
exports.ButtonRadioDirective = ButtonRadioDirective;
exports.Direction = Direction;
exports.CarouselComponent = CarouselComponent;
exports.CarouselConfig = CarouselConfig;
exports.SlideComponent = SlideComponent;
exports.CarouselModule = CarouselModule;
exports.BaseChartDirective = BaseChartDirective;
exports.ChartsModule = ChartsModule;
exports.CollapseDirective = CollapseDirective;
exports.CollapseModule = CollapseModule;
exports.BsDropdownContainerComponent = BsDropdownContainerComponent;
exports.BsDropdownMenuDirective = BsDropdownMenuDirective;
exports.BsDropdownToggleDirective = BsDropdownToggleDirective;
exports.BsDropdownConfig = BsDropdownConfig;
exports.BsDropdownDirective = BsDropdownDirective;
exports.BsDropdownState = BsDropdownState;
exports.DropdownModule = DropdownModule;
exports.InputsModule = InputsModule;
exports.MdbInputDirective = MdbInputDirective;
exports.DeepModule = DeepModule;
exports.DeepDirective = DeepDirective;
exports.InputValidateDirective = InputValidateDirective;
exports.EqualValidatorDirective = EqualValidatorDirective;
exports.ActiveDirective = ActiveDirective;
exports.ActiveModule = ActiveModule;
exports.ModalDirective = ModalDirective;
exports.ModalOptions = ModalOptions;
exports.MDBModalRef = MDBModalRef;
exports.modalConfigDefaults = modalConfigDefaults;
exports.ClassName = ClassName;
exports.Selector = Selector;
exports.TransitionDurations = TransitionDurations;
exports.DISMISS_REASONS = DISMISS_REASONS;
exports.MDBModalService = MDBModalService;
exports.ModalBackdropOptions = ModalBackdropOptions;
exports.ModalBackdropComponent = ModalBackdropComponent;
exports.ModalContainerComponent = ModalContainerComponent;
exports.msConfig = msConfig;
exports.ModalModule = ModalModule;
exports.LinksComponent = LinksComponent;
exports.LogoComponent = LogoComponent;
exports.NavbarComponent = NavbarComponent;
exports.NavbarService = NavbarService;
exports.NavlinksComponent = NavlinksComponent;
exports.NavbarModule = NavbarModule;
exports.PopoverContainerComponent = PopoverContainerComponent;
exports.PopoverConfig = PopoverConfig;
exports.PopoverDirective = PopoverDirective;
exports.PopoverModule = PopoverModule;
exports.RippleDirective = RippleDirective;
exports.RippleModule = RippleModule;
exports.WavesDirective = WavesDirective;
exports.WavesModule = WavesModule;
exports.TooltipContainerComponent = TooltipContainerComponent;
exports.TooltipDirective = TooltipDirective;
exports.TooltipConfig = TooltipConfig;
exports.TooltipModule = TooltipModule;
exports.BsComponentRef = BsComponentRef;
exports.ComponentLoader = ComponentLoader;
exports.ComponentLoaderFactory = ComponentLoaderFactory;
exports.ContentRef = ContentRef;
exports.window = win;
exports.document = document$1;
exports.location = location;
exports.gc = gc;
exports.performance = performance;
exports.Event = Event;
exports.MouseEvent = MouseEvent;
exports.KeyboardEvent = KeyboardEvent;
exports.EventTarget = EventTarget;
exports.History = History;
exports.Location = Location;
exports.EventListener = EventListener;
exports.Positioning = Positioning;
exports.positionElements = positionElements;
exports.PositioningService = PositioningService;
exports.OnChange = OnChange;
exports.LinkedList = LinkedList;
exports.isBs3 = isBs3;
exports.Trigger = Trigger;
exports.parseTriggers = parseTriggers;
exports.listenToTriggers = listenToTriggers;
exports.Utils = Utils;
exports.MDBBootstrapModule = MDBBootstrapModule;
exports.MDBBootstrapModulePro = MDBBootstrapModulePro;
exports.MDBRootModules = MDBRootModules;
exports.MDBBootstrapModulesPro = MDBBootstrapModulesPro;
exports.ɵcq1 = ButtonsModule;
exports.ɵcr1 = ButtonCheckboxDirective;
exports.ɵcs1 = ButtonRadioDirective;
exports.ɵct1 = CarouselComponent;
exports.ɵcu1 = CarouselConfig;
exports.ɵcw1 = CarouselModule;
exports.ɵcv1 = SlideComponent;
exports.ɵcx1 = BaseChartDirective;
exports.ɵcy1 = ChartsModule;
exports.ɵcz1 = CollapseDirective;
exports.ɵda1 = CollapseModule;
exports.ɵdb1 = BsDropdownContainerComponent;
exports.ɵdc1 = BsDropdownMenuDirective;
exports.ɵdd1 = BsDropdownToggleDirective;
exports.ɵde1 = BsDropdownConfig;
exports.ɵdf1 = BsDropdownDirective;
exports.ɵdh1 = DropdownModule;
exports.ɵdg1 = BsDropdownState;
exports.ɵdn1 = ActiveDirective;
exports.ɵdo1 = ActiveModule;
exports.ɵdl1 = DeepDirective;
exports.ɵdk1 = DeepModule;
exports.ɵdm1 = InputValidateDirective;
exports.ɵdi1 = InputsModule;
exports.ɵdj1 = MdbInputDirective;
exports.ɵek1 = MDBRootModule;
exports.ɵdp1 = ModalDirective;
exports.ɵdv1 = ModalModule;
exports.ɵdq1 = ModalOptions;
exports.ɵdr1 = MDBModalService;
exports.ɵdt1 = ModalBackdropComponent;
exports.ɵds1 = ModalBackdropOptions;
exports.ɵdu1 = ModalContainerComponent;
exports.ɵdw1 = NavbarComponent;
exports.ɵdx1 = NavbarModule;
exports.ɵdy1 = PopoverContainerComponent;
exports.ɵdz1 = PopoverConfig;
exports.ɵea1 = PopoverDirective;
exports.ɵeb1 = PopoverModule;
exports.ɵec1 = RippleDirective;
exports.ɵed1 = RippleModule;
exports.ɵeg1 = TooltipContainerComponent;
exports.ɵeh1 = TooltipDirective;
exports.ɵej1 = TooltipModule;
exports.ɵei1 = TooltipConfig;
exports.ɵee1 = WavesDirective;
exports.ɵef1 = WavesModule;
exports.ɵc1 = SBItemComponent;
exports.ɵa1 = SBItemBodyComponent;
exports.ɵb1 = SBItemHeadComponent;
exports.ɵd1 = SqueezeBoxComponent;
exports.ɵe1 = AccordionModule;
exports.ɵf1 = CompleterListItemComponent;
exports.ɵg1 = CompleterComponent;
exports.ɵh1 = MdbCompleterDirective;
exports.ɵi1 = MdbDropdownDirective;
exports.ɵj1 = MdbInputCompleteDirective;
exports.ɵk1 = MdbListDirective;
exports.ɵl1 = MdbRowDirective;
exports.ɵp1 = AutocompleteModule;
exports.ɵm1 = CompleterService;
exports.ɵn1 = LocalDataFactoryProvider;
exports.ɵo1 = RemoteDataFactoryProvider;
exports.ɵq1 = CardRevealComponent;
exports.ɵr1 = CardRotatingComponent;
exports.ɵs1 = CardsModule;
exports.ɵz1 = MDBDatePickerComponent;
exports.ɵy1 = MYDP_VALUE_ACCESSOR;
exports.ɵx1 = DatepickerModule;
exports.ɵt1 = InputAutoFillDirective;
exports.ɵu1 = FocusDirective;
exports.ɵv1 = LocaleService;
exports.ɵw1 = UtilService;
exports.ɵba1 = SimpleChartComponent;
exports.ɵbc1 = ChartSimpleModule;
exports.ɵbb1 = EasyPieChartComponent;
exports.ɵbd1 = MDBFileDropDirective;
exports.ɵbe1 = MDBFileSelectDirective;
exports.ɵbf1 = FileInputModule;
exports.ɵbg1 = CharCounterDirective;
exports.ɵbh1 = CharCounterModule;
exports.ɵbi1 = ImageModalComponent;
exports.ɵbj1 = LightBoxModule;
exports.ɵbl1 = SelectDropdownComponent;
exports.ɵbm1 = SELECT_VALUE_ACCESSOR;
exports.ɵbn1 = SelectComponent;
exports.ɵbo1 = SelectModule;
exports.ɵel1 = MDBRootModulePro;
exports.ɵbp1 = BarComponent;
exports.ɵbv1 = ProgressBars;
exports.ɵem1 = MdProgressBarModule;
exports.ɵen1 = MdProgressSpinnerModule;
exports.ɵbq1 = ProgressSpinnerComponent;
exports.ɵbr1 = ProgressDirective;
exports.ɵbs1 = ProgressbarComponent;
exports.ɵbt1 = ProgressbarConfigComponent;
exports.ɵbu1 = ProgressbarModule;
exports.ɵbw1 = SidenavComponent;
exports.ɵbx1 = SidenavModule;
exports.ɵby1 = PageScrollDirective;
exports.ɵbz1 = PageScrollInstance;
exports.ɵca1 = SmoothscrollModule;
exports.ɵcb1 = PageScrollService;
exports.ɵcc1 = MdbStickyDirective;
exports.ɵcd1 = StickyContentModule;
exports.ɵce1 = TabHeadingDirective;
exports.ɵcf1 = TabDirective;
exports.ɵcg1 = TabsetComponent;
exports.ɵch1 = TabsetConfig;
exports.ɵcj1 = TabsModule;
exports.ɵci1 = NgTranscludeDirective;
exports.ɵck1 = CUSTOM_INPUT_CONTROL_VALUE_ACCESSOR;
exports.ɵcl1 = MaterialChipsComponent;
exports.ɵcm1 = MaterialChipsModule;
exports.ɵcp1 = ClockPickerComponent;
exports.ɵco1 = TIME_PIRCKER_VALUE_ACCESSOT;
exports.ɵcn1 = TimePickerModule;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng-uikit-pro-standard.umd.js.map
