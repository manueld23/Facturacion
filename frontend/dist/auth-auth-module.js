(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["auth-auth-module"],{

/***/ "./src/app/auth/auth.component.html":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <mat-sidenav-container class=\"container\" fullscreen>\n    <mat-sidenav [mode]=\"sideNavMode\" class=\"sidenav\" #sidenav [opened]=\"sideNavOpened\" style=\"overflow: hidden;\">\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n            <img src=\"./assets/logo.codetok.png\" width=\"36px\">\n            <h1 class=\"logo\">\n                CODETOK.\n                <span style=\"font-size: 12px;\">com</span>\n            </h1>\n        </mat-toolbar>\n\n        <cdk-sidemenu></cdk-sidemenu>\n    </mat-sidenav>\n    <mat-sidenav-content>\n        <cdk-toolbar [sidenav]=\"sidenav\" [drawer]=\"drawer\" [sidebar]=\"sidenav2\" [matDrawerShow]=\"matDrawerShow\" style=\"z-index: 500\"></cdk-toolbar>\n        <perfect-scrollbar>\n            <router-outlet></router-outlet>\n        </perfect-scrollbar>\n    </mat-sidenav-content>\n    <mat-sidenav #sidenav2 position=\"end\" mode=\"over\">\n        <cdk-sidebar></cdk-sidebar>\n    </mat-sidenav>\n</mat-sidenav-container> -->\n        \n <!-- Below is another example of the home page that has a smaller menu that shows up when the main menu is hidden -->\n\n<mat-sidenav-container class=\"container\" fullscreen>\n    <mat-sidenav [mode]=\"sideNavMode\" class=\"sidenav\" #sidenav [opened]=\"sideNavOpened\" style=\"overflow: hidden;\">\n        <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n            <img src=\"https://dl.dropboxusercontent.com/s/hif2o583vyy4srf/emp.jpg?dl=0\" width=\"36px\">\n            <h1 class=\"logo\">\n                Facturacion.\n                <span style=\"font-size: 12px;\">com</span>\n            </h1>\n        </mat-toolbar>\n        <cdk-sidemenu></cdk-sidemenu>\n    </mat-sidenav>\n    <mat-sidenav-content style=\"z-index: unset;overflow: hidden;\">\n        <mat-drawer-container fullscreen>\n            <mat-drawer mode=\"side\" #drawer class=\"drawer\" [opened]=\"matDrawerOpened\" style=\"overflow: hidden;\">\n                <mat-toolbar color=\"primary\" class=\"mat-elevation-z4\">\n                    <img src=\"https://dl.dropboxusercontent.com/s/hif2o583vyy4srf/emp.jpg?dl=0\" width=\"36px\">\n                </mat-toolbar>\n                <cdk-sidemenu [iconOnly]=\"true\"></cdk-sidemenu>\n            </mat-drawer>\n            <mat-drawer-content style=\"overflow: hidden;\">\n\n                <cdk-toolbar [sidenav]=\"sidenav\" [drawer]=\"drawer\" [sidebar]=\"sidenav2\" [matDrawerShow]=\"matDrawerShow\" style=\"z-index: 500\"></cdk-toolbar>\n\n\n                <perfect-scrollbar  style=\"height: calc(100% - 33px);\" >\n                    <router-outlet></router-outlet>\n                </perfect-scrollbar>\n\n           \n            </mat-drawer-content>\n        </mat-drawer-container>\n    </mat-sidenav-content>\n\n    <mat-sidenav #sidenav2 position=\"end\" mode=\"over\">\n        <cdk-sidebar></cdk-sidebar>\n    </mat-sidenav>\n\n</mat-sidenav-container>\n                 \n            \n            \n    \n    \n\n\n\n\n\n\n\n\n\n"

/***/ }),

/***/ "./src/app/auth/auth.component.scss":
/*!******************************************!*\
  !*** ./src/app/auth/auth.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGgvYXV0aC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/auth/auth.component.ts":
/*!****************************************!*\
  !*** ./src/app/auth/auth.component.ts ***!
  \****************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");



var AuthComponent = /** @class */ (function () {
    function AuthComponent(media) {
        this.media = media;
        this.isVisible = true;
        this.visibility = 'shown';
        this.sideNavOpened = true;
        this.matDrawerOpened = false;
        this.matDrawerShow = true;
        this.sideNavMode = 'side';
    }
    AuthComponent.prototype.ngOnChanges = function () {
        this.visibility = this.isVisible ? 'shown' : 'hidden';
    };
    AuthComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.media.subscribe(function (mediaChange) {
            _this.toggleView();
        });
    };
    AuthComponent.prototype.getRouteAnimation = function (outlet) {
        return outlet.activatedRouteData.animation;
        //return outlet.isActivated ? outlet.activatedRoute : ''
    };
    AuthComponent.prototype.toggleView = function () {
        if (this.media.isActive('gt-md')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = true;
            this.matDrawerOpened = false;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive('gt-xs')) {
            this.sideNavMode = 'side';
            this.sideNavOpened = false;
            this.matDrawerOpened = true;
            this.matDrawerShow = true;
        }
        else if (this.media.isActive('lt-sm')) {
            this.sideNavMode = 'over';
            this.sideNavOpened = false;
            this.matDrawerOpened = false;
            this.matDrawerShow = false;
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Boolean)
    ], AuthComponent.prototype, "isVisible", void 0);
    AuthComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-auth',
            template: __webpack_require__(/*! ./auth.component.html */ "./src/app/auth/auth.component.html"),
            styles: [__webpack_require__(/*! ./auth.component.scss */ "./src/app/auth/auth.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_flex_layout__WEBPACK_IMPORTED_MODULE_2__["ObservableMedia"]])
    ], AuthComponent);
    return AuthComponent;
}());



/***/ }),

/***/ "./src/app/auth/auth.module.ts":
/*!*************************************!*\
  !*** ./src/app/auth/auth.module.ts ***!
  \*************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-perfect-scrollbar */ "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
/* harmony import */ var _lazyloader_routes__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lazyloader.routes */ "./src/app/auth/lazyloader.routes.ts");
/* harmony import */ var _dashboard_crm_dashboard_crm_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../dashboard-crm/dashboard-crm.module */ "./src/app/dashboard-crm/dashboard-crm.module.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../login/login.module */ "./src/app/login/login.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");













var DEFAULT_PERFECT_SCROLLBAR_CONFIG = {
    suppressScrollX: true
};



var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(_lazyloader_routes__WEBPACK_IMPORTED_MODULE_11__["appRoutes"]),
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_5__["MatToolbarModule"],
                _dashboard_crm_dashboard_crm_module__WEBPACK_IMPORTED_MODULE_12__["DashboardCrmModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_13__["LoginModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatTabsModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_8__["MatSidenavModule"],
                ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PerfectScrollbarModule"],
            ],
            declarations: [_auth_component__WEBPACK_IMPORTED_MODULE_3__["AuthComponent"]],
            providers: [
                {
                    provide: ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_10__["PERFECT_SCROLLBAR_CONFIG"],
                    useValue: DEFAULT_PERFECT_SCROLLBAR_CONFIG
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/auth/lazyloader.routes.ts":
/*!*******************************************!*\
  !*** ./src/app/auth/lazyloader.routes.ts ***!
  \*******************************************/
/*! exports provided: appRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony import */ var _auth_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth.component */ "./src/app/auth/auth.component.ts");
/* harmony import */ var _dashboard_crm_dashboard_crm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dashboard-crm/dashboard-crm.component */ "./src/app/dashboard-crm/dashboard-crm.component.ts");


var appRoutes = [{
        path: '', component: _auth_component__WEBPACK_IMPORTED_MODULE_0__["AuthComponent"], children: [
            { path: 'dashboard', component: _dashboard_crm_dashboard_crm_component__WEBPACK_IMPORTED_MODULE_1__["DashboardCrmComponent"] },
            { path: 'Documentos', loadChildren: '../Documentos/Documentos.module#DocumentosModule' },
            { path: 'Catalogos', loadChildren: '../Catalogos/Catalogos.module#CatalogosModule' },
            { path: 'Herramientas', loadChildren: '../Herramientas/Herramientas.module#HerramientasModule' },
            { path: 'Registro', loadChildren: '../Registro/Registro.module#RegistroModule' },
            { path: 'maps', loadChildren: '../maps/maps.module#MapsModule' },
            { path: 'charts', loadChildren: '../charts/charts.module#ChartsModule' },
            // { path: 'chats', loadChildren: '../chats/chat.module#ChatsModule' }, // fix this
            //{ path: 'mail', loadChildren: '../mail/mail.module#MailModule' }, // fix this
            { path: 'ConfiguracionC', loadChildren: '../ConfiguracionC/ConfiguracionC.module#ConfiguracionCModule' },
            { path: 'forms', loadChildren: '../forms/forms.module#FormModule' },
            // { path: 'editor', loadChildren: '../editor/editor.module#EditorModule' }, 
            { path: 'scrumboard', loadChildren: '../scrumboard/scrumboard.module#ScrumboardModule' },
        ]
    }];


/***/ }),

/***/ "./src/app/dashboard-crm/dashboard-crm.component.html":
/*!************************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard-crm.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout=\"row wrap\" >\n    <cdk-world-map fxFlex=\"100\" [tableData]=\"tableData\"></cdk-world-map>\n</div>"

/***/ }),

/***/ "./src/app/dashboard-crm/dashboard-crm.component.scss":
/*!************************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard-crm.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  padding: 5px;\n  margin: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL2Rhc2hib2FyZC1jcm0vZGFzaGJvYXJkLWNybS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQVk7RUFDWixXQUFXLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9kYXNoYm9hcmQtY3JtL2Rhc2hib2FyZC1jcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtY2FyZCB7XG4gIHBhZGRpbmc6IDVweDtcbiAgbWFyZ2luOiA1cHg7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/dashboard-crm/dashboard-crm.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard-crm.component.ts ***!
  \**********************************************************/
/*! exports provided: DashboardCrmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCrmComponent", function() { return DashboardCrmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DashboardCrmComponent = /** @class */ (function () {
    function DashboardCrmComponent() {
        this.dashCard = [
            { colorDark: '#5C6BC0', colorLight: '#7986CB', number: 1221, title: 'SALES', icon: 'local_grocery_store' },
            { colorDark: '#42A5F5', colorLight: '#64B5F6', number: 1221, title: 'LEADS', icon: 'new_releases' },
            { colorDark: '#26A69A', colorLight: '#4DB6AC', number: 1221, title: 'ASSETS', icon: 'assignments' },
            { colorDark: '#66BB6A', colorLight: '#81C784', number: 1221, title: 'BANKING', icon: 'account_balance' }
        ];
        this.tableData = [
            { country: 'India', sales: 5400, percentage: '40%' },
            { country: 'Us', sales: 3200, percentage: '30.33%' },
            { country: 'Australia', sales: 2233, percentage: '18.056%' },
            { country: 'Spaim', sales: 600, percentage: '6%' },
            { country: 'China', sales: 200, percentage: '4.50%' },
            { country: 'Brazil', sales: 100, percentage: '2.50%' },
        ];
    }
    DashboardCrmComponent.prototype.ngOnInit = function () {
    };
    DashboardCrmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dashboard-crm',
            template: __webpack_require__(/*! ./dashboard-crm.component.html */ "./src/app/dashboard-crm/dashboard-crm.component.html"),
            styles: [__webpack_require__(/*! ./dashboard-crm.component.scss */ "./src/app/dashboard-crm/dashboard-crm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DashboardCrmComponent);
    return DashboardCrmComponent;
}());



/***/ }),

/***/ "./src/app/dashboard-crm/dashboard-crm.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/dashboard-crm/dashboard-crm.module.ts ***!
  \*******************************************************/
/*! exports provided: appRoutes, DashboardCrmModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appRoutes", function() { return appRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardCrmModule", function() { return DashboardCrmModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dashboard_crm_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard-crm.component */ "./src/app/dashboard-crm/dashboard-crm.component.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _Documentos_Documentos_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Documentos/Documentos.module */ "./src/app/Documentos/Documentos.module.ts");








var appRoutes = [
    { path: '', component: _dashboard_crm_component__WEBPACK_IMPORTED_MODULE_4__["DashboardCrmComponent"] },
];
var DashboardCrmModule = /** @class */ (function () {
    function DashboardCrmModule() {
    }
    DashboardCrmModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(appRoutes),
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _Documentos_Documentos_module__WEBPACK_IMPORTED_MODULE_7__["DocumentosModule"]
            ],
            declarations: [_dashboard_crm_component__WEBPACK_IMPORTED_MODULE_4__["DashboardCrmComponent"]],
            exports: []
        })
    ], DashboardCrmModule);
    return DashboardCrmModule;
}());



/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center center\"  style=\"height: 700px;\">\n\t\n\t<div fxLayout=\"column\" fxLayoutAlign=\"center center\"   >\n\n\t\t\t<div>\n\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t\t            <label>Username </label>\n\t\t            <input matInput>\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\n\t\t\t<div>\n\t\t\t\t<mat-form-field class=\"example-full-width\">\n\t            \t<label>Password</label>\n\t            \t<input matInput value=\"\" type=\"password\">\n\t        \t</mat-form-field>\n\t\t\t</div>\n\t        \n\t        <div>\n\t        \t<mat-card-actions>\n\t            \t<button mat-button full href=\"dashboard\">Login</button>\n\t        \t</mat-card-actions>\n\t        </div>\n\t        \n\t        \n\t</div>\n\n\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.scss":
/*!********************************************!*\
  !*** ./src/app/login/login.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");









var appRoutes = [
    { path: '', component: _login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_5__["MatInputModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(appRoutes),
            ],
            declarations: [_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ })

}]);
//# sourceMappingURL=auth-auth-module.js.map