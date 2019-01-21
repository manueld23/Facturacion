(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Herramientas-Herramientas-module"],{

/***/ "./src/app/Herramientas/Herramientas.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/Herramientas/Herramientas.module.ts ***!
  \*****************************************************/
/*! exports provided: highlightJsFactory, HerramientasModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerramientasModule", function() { return HerramientasModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _Herramientas_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Herramientas.router */ "./src/app/Herramientas/Herramientas.router.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var angular_highlight_js__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! angular-highlight-js */ "./node_modules/angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var _prefacturas_prefacturas_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./prefacturas/prefacturas.component */ "./src/app/Herramientas/prefacturas/prefacturas.component.ts");
/* harmony import */ var _bridge32_bridge32_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./bridge32/bridge32.component */ "./src/app/Herramientas/bridge32/bridge32.component.ts");
/* harmony import */ var _buzon_buzon_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./buzon/buzon.component */ "./src/app/Herramientas/buzon/buzon.component.ts");
/* harmony import */ var _bridge33_bridge33_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./bridge33/bridge33.component */ "./src/app/Herramientas/bridge33/bridge33.component.ts");
/* harmony import */ var _prenomina_prenomina_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./prenomina/prenomina.component */ "./src/app/Herramientas/prenomina/prenomina.component.ts");
/* harmony import */ var _prenomina32_prenomina32_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./prenomina32/prenomina32.component */ "./src/app/Herramientas/prenomina32/prenomina32.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/Herramientas/tickets/tickets.component.ts");





























function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_18__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_18__;
}
var HerramientasModule = /** @class */ (function () {
    function HerramientasModule() {
    }
    HerramientasModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_8__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_9__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_10__["MatListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_11__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_13__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_12__["MatInputModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_15__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatNativeDateModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_17__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatPaginatorModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatSortModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                angular_highlight_js__WEBPACK_IMPORTED_MODULE_19__["HighlightJsModule"].forRoot({
                    provide: angular_highlight_js__WEBPACK_IMPORTED_MODULE_19__["HIGHLIGHT_JS"],
                    useFactory: highlightJsFactory
                }),
                _Herramientas_router__WEBPACK_IMPORTED_MODULE_5__["HerramientasRouterModule"]
            ],
            declarations: [
                _prefacturas_prefacturas_component__WEBPACK_IMPORTED_MODULE_21__["Prefacturas"],
                _bridge32_bridge32_component__WEBPACK_IMPORTED_MODULE_22__["BridgeT32"],
                _buzon_buzon_component__WEBPACK_IMPORTED_MODULE_23__["Buzon"],
                _bridge33_bridge33_component__WEBPACK_IMPORTED_MODULE_24__["BridgeTXT"],
                _prenomina_prenomina_component__WEBPACK_IMPORTED_MODULE_25__["PreNomina"],
                _prenomina32_prenomina32_component__WEBPACK_IMPORTED_MODULE_26__["PreNomina32"],
                _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_27__["Tickets"]
            ],
            exports: []
        })
    ], HerramientasModule);
    return HerramientasModule;
}());



/***/ }),

/***/ "./src/app/Herramientas/Herramientas.router.ts":
/*!*****************************************************!*\
  !*** ./src/app/Herramientas/Herramientas.router.ts ***!
  \*****************************************************/
/*! exports provided: HerramientasRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HerramientasRouterModule", function() { return HerramientasRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bridge33_bridge33_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./bridge33/bridge33.component */ "./src/app/Herramientas/bridge33/bridge33.component.ts");
/* harmony import */ var _bridge32_bridge32_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./bridge32/bridge32.component */ "./src/app/Herramientas/bridge32/bridge32.component.ts");
/* harmony import */ var _buzon_buzon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./buzon/buzon.component */ "./src/app/Herramientas/buzon/buzon.component.ts");
/* harmony import */ var _prefacturas_prefacturas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./prefacturas/prefacturas.component */ "./src/app/Herramientas/prefacturas/prefacturas.component.ts");
/* harmony import */ var _prenomina_prenomina_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./prenomina/prenomina.component */ "./src/app/Herramientas/prenomina/prenomina.component.ts");
/* harmony import */ var _prenomina32_prenomina32_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./prenomina32/prenomina32.component */ "./src/app/Herramientas/prenomina32/prenomina32.component.ts");
/* harmony import */ var _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./tickets/tickets.component */ "./src/app/Herramientas/tickets/tickets.component.ts");










var materialWidgetRoutes = [
    { path: 'bridge33', component: _bridge33_bridge33_component__WEBPACK_IMPORTED_MODULE_3__["BridgeTXT"], data: { animation: 'bridge33' } },
    { path: 'bridge32', component: _bridge32_bridge32_component__WEBPACK_IMPORTED_MODULE_4__["BridgeT32"], data: { animation: 'bridge32' } },
    { path: 'buzon', component: _buzon_buzon_component__WEBPACK_IMPORTED_MODULE_5__["Buzon"], data: { animation: 'buzon' } },
    { path: 'prefacturas', component: _prefacturas_prefacturas_component__WEBPACK_IMPORTED_MODULE_6__["Prefacturas"], data: { animation: 'prefacturas' } },
    { path: 'prenomina', component: _prenomina_prenomina_component__WEBPACK_IMPORTED_MODULE_7__["PreNomina"], data: { animation: 'prenomina' } },
    { path: 'prenomina32', component: _prenomina32_prenomina32_component__WEBPACK_IMPORTED_MODULE_8__["PreNomina32"], data: { animation: 'prenomina32' } },
    { path: 'tickets', component: _tickets_tickets_component__WEBPACK_IMPORTED_MODULE_9__["Tickets"], data: { animation: 'tickets' } }
];
var HerramientasRouterModule = /** @class */ (function () {
    function HerramientasRouterModule() {
    }
    HerramientasRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(materialWidgetRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], HerramientasRouterModule);
    return HerramientasRouterModule;
}());



/***/ }),

/***/ "./src/app/Herramientas/bridge32/bridge32.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Herramientas/bridge32/bridge32.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"table-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"table-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Retenciones</h1>\n\t\t</mat-toolbar>\n\t\t<div class=\"table-container\">\n\t\t\t<div class=\"example-header\" style=\"padding: 0 20px;\">\n\t\t\t\t<mat-form-field floatPlaceholder=\"never\" style=\"color: black; width: 100%;\">\n\t\t\t\t\t<input matInput #filter placeholder=\"Filter users\">\n\t\t\t\t</mat-form-field>\n\t\t\t</div>\n\t\t\t<div fxLayout=\"row\" class=\"example-header example-selection-header mat-headline center-align \"\n\t\t\t\t*ngIf=\"!selection.isEmpty()\">\n\t\t\t\t{{selection.selected.length}}\n\t\t\t\t{{selection.selected.length == 1 ? 'user' : 'users'}}\n\t\t\t\tselected\n\t\t\t</div>\n\n\t\t\t<mat-table #table [dataSource]=\"dataSource\" matSort style=\"margin-top: 20px;\">\n\n\t\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t\t<!-- Checkbox Column -->\n\t\t\t\t<ng-container matColumnDef=\"select\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef>\n\t\t\t\t\t\t<mat-checkbox (change)=\"$event ? masterToggle() : null\"\n\t\t\t\t\t\t\t[checked]=\"isAllSelected()\"\n\t\t\t\t\t\t\t[indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n\t\t\t\t\t\t\t</mat-checkbox>\n\t\t\t\t\t</mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\">\n\t\t\t\t\t\t<mat-checkbox (click)=\"$event.stopPropagation()\"\n\t\t\t\t\t\t\t(change)=\"$event ? selection.toggle(row.id) : null\"\n\t\t\t\t\t\t\t[checked]=\"selection.isSelected(row.id)\">\n\t\t\t\t\t\t\t</mat-checkbox>\n\t\t\t\t\t</mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- ID Column -->\n\t\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Progress Column -->\n\t\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Name Column -->\n\t\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Color Column -->\n\t\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n\t\t\t\t[class.example-selected-row]=\"selection.isSelected(row.id)\"\n\t\t\t\t(click)=\"selection.toggle(row.id)\">\n\t\t\t\t</mat-row>\n\t\t\t</mat-table>\n\n\t\t\t<div class=\"example-no-results\"\n\t\t\t\t[style.display]=\"dataSource?.renderedData.length == 0 ? '' : 'none'\">\n\t\t\t\tNo users found matching filter.\n\t\t\t</div>\n\n\t\t\t<mat-paginator #paginator\n\t\t\t\t[length]=\"100\"\n\t\t\t\t[pageIndex]=\"0\"\n\t\t\t\t[pageSize]=\"25\"\n\t\t\t\t[pageSizeOptions]=\"[5, 10, 25, 100]\">\n\t\t\t</mat-paginator>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/Herramientas/bridge32/bridge32.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Herramientas/bridge32/bridge32.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.table-container {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0hlcnJhbWllbnRhcy9icmlkZ2UzMi9icmlkZ2UzMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVmO0VBQ0MsMkJBQTJCLEVBQUE7O0FBRTVCO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvSGVycmFtaWVudGFzL2JyaWRnZTMyL2JyaWRnZTMyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG5cdGNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogMCA1cHg7XG59XG4udGFibGUtY29udGFpbmVyIHtcblx0cGFkZGluZzogNXB4IDE1cHggMTVweCAxNXB4O1xufVxuLnRhYmxlLWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Herramientas/bridge32/bridge32.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Herramientas/bridge32/bridge32.component.ts ***!
  \*************************************************************/
/*! exports provided: BridgeT32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeT32", function() { return BridgeT32; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Herramientas/bridge32/helpers.data.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");







var BridgeT32 = /** @class */ (function () {
    function BridgeT32() {
        this.displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDatabase"]();
        this.selection = new _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_6__["SelectionModel"](true, []);
        this.allfeatures = _helpers_data__WEBPACK_IMPORTED_MODULE_4__["TABLE_HELPERS"];
    }
    BridgeT32.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDataSource"](this.exampleDatabase, this.paginator, this.sort);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    BridgeT32.prototype.isAllSelected = function () {
        if (!this.dataSource) {
            return false;
        }
        if (this.selection.isEmpty()) {
            return false;
        }
        if (this.filter.nativeElement.value) {
            return this.selection.selected.length == this.dataSource.renderedData.length;
        }
        else {
            return this.selection.selected.length == this.exampleDatabase.data.length;
        }
    };
    BridgeT32.prototype.masterToggle = function () {
        var _this = this;
        if (!this.dataSource) {
            return;
        }
        if (this.isAllSelected()) {
            this.selection.clear();
        }
        else if (this.filter.nativeElement.value) {
            this.dataSource.renderedData.forEach(function (data) { return _this.selection.select(data.id); });
        }
        else {
            this.exampleDatabase.data.forEach(function (data) { return _this.selection.select(data.id); });
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatPaginator"])
    ], BridgeT32.prototype, "paginator", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSort"])
    ], BridgeT32.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('filter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], BridgeT32.prototype, "filter", void 0);
    BridgeT32 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'cdk-feature-table',
            template: __webpack_require__(/*! ./bridge32.component.html */ "./src/app/Herramientas/bridge32/bridge32.component.html"),
            styles: [__webpack_require__(/*! ./bridge32.component.scss */ "./src/app/Herramientas/bridge32/bridge32.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BridgeT32);
    return BridgeT32;
}());



/***/ }),

/***/ "./src/app/Herramientas/bridge32/helpers.data.ts":
/*!*******************************************************!*\
  !*** ./src/app/Herramientas/bridge32/helpers.data.ts ***!
  \*******************************************************/
/*! exports provided: TABLE_HELPERS, ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TABLE_HELPERS", function() { return TABLE_HELPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");




var TABLE_HELPERS = {
    allFeaturesTablehtmlsource: "<div class=\"example-header\" [style.display]=\"selection.isEmpty() ? '' : 'none'\">\n  <mat-form-field floatPlaceholder=\"never\">\n    <input matInput #filter placeholder=\"Filter users\">\n  </mat-form-field>\n</div>\n<div class=\"example-header example-selection-header\"\n     *ngIf=\"!selection.isEmpty()\">\n  {{selection.selected.length}}\n  {{selection.selected.length == 1 ? 'user' : 'users'}}\n  selected\n</div>\n\n<div class=\"example-container mat-elevation-z8\">\n\n  <mat-table #table [dataSource]=\"dataSource\" matSort>\n\n    <!--- Note that these columns can be defined in any order.\n          The actual rendered columns are set as a property on the row definition\" -->\n\n    <!-- Checkbox Column -->\n    <ng-container matColumnDef=\"select\">\n      <mat-header-cell *matHeaderCellDef>\n        <mat-checkbox (change)=\"$event ? masterToggle() : null\"\n                     [checked]=\"isAllSelected()\"\n                     [indeterminate]=\"selection.hasValue() && !isAllSelected()\">\n        </mat-checkbox>\n      </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\">\n        <mat-checkbox (click)=\"$event.stopPropagation()\"\n                     (change)=\"$event ? selection.toggle(row.id) : null\"\n                     [checked]=\"selection.isSelected(row.id)\">\n        </mat-checkbox>\n      </mat-cell>\n    </ng-container>\n\n    <!-- ID Column -->\n    <ng-container matColumnDef=\"userId\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> ID </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n    </ng-container>\n\n    <!-- Progress Column -->\n    <ng-container matColumnDef=\"progress\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Progress </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n    </ng-container>\n\n    <!-- Name Column -->\n    <ng-container matColumnDef=\"userName\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Name </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n    </ng-container>\n\n    <!-- Color Column -->\n    <ng-container matColumnDef=\"color\">\n      <mat-header-cell *matHeaderCellDef mat-sort-header> Color </mat-header-cell>\n      <mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n    </ng-container>\n\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n    <mat-row *matRowDef=\"let row; columns: displayedColumns;\"\n            [class.example-selected-row]=\"selection.isSelected(row.id)\"\n            (click)=\"selection.toggle(row.id)\">\n    </mat-row>\n  </mat-table>\n\n  <div class=\"example-no-results\"\n       [style.display]=\"dataSource.renderedData.length == 0 ? '' : 'none'\">\n    No users found matching filter.\n  </div>\n\n  <mat-paginator #paginator\n                [length]=\"dataSource.filteredData.length\"\n                [pageIndex]=\"0\"\n                [pageSize]=\"25\"\n                [pageSizeOptions]=\"[5, 10, 25, 100]\">\n  </mat-paginator>\n</div>\n".trim(),
    allFeaturesTabletssource: "import {Component, ElementRef, ViewChild} from '@angular/core';\nimport {DataSource} from '@angular/cdk/collections';\nimport {MatPaginator, MatSort} from '@angular/material';\nimport {SelectionModel} from '@angular/cdk/collections';\nimport {BehaviorSubject} from 'rxjs/BehaviorSubject';\nimport {Observable} from 'rxjs/Observable';\nimport 'rxjs/add/operator/startWith';\nimport 'rxjs/add/observable/merge';\nimport 'rxjs/add/observable/fromEvent';\nimport 'rxjs/add/operator/map';\nimport 'rxjs/add/operator/distinctUntilChanged';\nimport 'rxjs/add/operator/debounceTime';\n\n/**\n * @title Feature-rich data table\n */\n@Component({\n  selector: 'table-overview-example',\n  styleUrls: ['table-overview-example.css'],\n  templateUrl: 'table-overview-example.html',\n})\nexport class TableOverviewExample {\n  displayedColumns = ['select', 'userId', 'userName', 'progress', 'color'];\n  exampleDatabase = new ExampleDatabase();\n  selection = new SelectionModel<string>(true, []);\n  dataSource: ExampleDataSource | null;\n\n  @ViewChild(MatPaginator) paginator: MatPaginator;\n  @ViewChild(MatSort) sort: MatSort;\n  @ViewChild('filter') filter: ElementRef;\n\n  ngOnInit() {\n    this.dataSource = new ExampleDataSource(this.exampleDatabase, this.paginator, this.sort);\n    Observable.fromEvent(this.filter.nativeElement, 'keyup')\n        .debounceTime(150)\n        .distinctUntilChanged()\n        .subscribe(() => {\n          if (!this.dataSource) { return; }\n          this.dataSource.filter = this.filter.nativeElement.value;\n        });\n  }\n\n  isAllSelected(): boolean {\n    if (!this.dataSource) { return false; }\n    if (this.selection.isEmpty()) { return false; }\n\n    if (this.filter.nativeElement.value) {\n      return this.selection.selected.length == this.dataSource.renderedData.length;\n    } else {\n      return this.selection.selected.length == this.exampleDatabase.data.length;\n    }\n  }\n\n  masterToggle() {\n    if (!this.dataSource) { return; }\n\n    if (this.isAllSelected()) {\n      this.selection.clear();\n    } else if (this.filter.nativeElement.value) {\n      this.dataSource.renderedData.forEach(data => this.selection.select(data.id));\n    } else {\n      this.exampleDatabase.data.forEach(data => this.selection.select(data.id));\n    }\n  }\n}\n\n/** Constants used to fill up our data base. */\nconst COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',\n  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];\nconst NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',\n  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',\n  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];\n\nexport interface UserData {\n  id: string;\n  name: string;\n  progress: string;\n  color: string;\n}\n\n/** An example database that the data source uses to retrieve data for the table. */\nexport class ExampleDatabase {\n  /** Stream that emits whenever the data has been modified. */\n  dataChange: BehaviorSubject<UserData[]> = new BehaviorSubject<UserData[]>([]);\n  get data(): UserData[] { return this.dataChange.value; }\n\n  constructor() {\n    // Fill up the database with 100 users.\n    for (let i = 0; i < 100; i++) { this.addUser(); }\n  }\n\n  /** Adds a new user to the database. */\n  addUser() {\n    const copiedData = this.data.slice();\n    copiedData.push(this.createNewUser());\n    this.dataChange.next(copiedData);\n  }\n\n  /** Builds and returns a new User. */\n  private createNewUser() {\n    const name =\n        NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +\n        NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';\n\n    return {\n      id: (this.data.length + 1).toString(),\n      name: name,\n      progress: Math.round(Math.random() * 100).toString(),\n      color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]\n    };\n  }\n}\n\n/**\n * Data source to provide what data should be rendered in the table. Note that the data source\n * can retrieve its data in any way. In this case, the data source is provided a reference\n * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage\n * the underlying data. Instead, it only needs to take the data and send the table exactly what\n * should be rendered.\n */\nexport class ExampleDataSource extends DataSource<any> {\n  _filterChange = new BehaviorSubject('');\n  get filter(): string { return this._filterChange.value; }\n  set filter(filter: string) { this._filterChange.next(filter); }\n\n  filteredData: UserData[] = [];\n  renderedData: UserData[] = [];\n\n  constructor(private _exampleDatabase: ExampleDatabase,\n              private _paginator: MatPaginator,\n              private _sort: MatSort) {\n    super();\n\n    // Reset to the first page when the user changes the filter.\n    this._filterChange.subscribe(() => this._paginator.pageIndex = 0);\n  }\n\n  /** Connect function called by the table to retrieve one stream containing the data to render. */\n  connect(): Observable<UserData[]> {\n    // Listen for any changes in the base data, sorting, filtering, or pagination\n    const displayDataChanges = [\n      this._exampleDatabase.dataChange,\n      this._sort.sortChange,\n      this._filterChange,\n      this._paginator.page,\n    ];\n\n    return Observable.merge(...displayDataChanges).map(() => {\n      // Filter data\n      this.filteredData = this._exampleDatabase.data.slice().filter((item: UserData) => {\n        let searchStr = (item.name + item.color).toLowerCase();\n        return searchStr.indexOf(this.filter.toLowerCase()) != -1;\n      });\n\n      // Sort filtered data\n      const sortedData = this.sortData(this.filteredData.slice());\n\n      // Grab the page's slice of the filtered sorted data.\n      const startIndex = this._paginator.pageIndex * this._paginator.pageSize;\n      this.renderedData = sortedData.splice(startIndex, this._paginator.pageSize);\n      return this.renderedData;\n    });\n  }\n\n  disconnect() {}\n\n  /** Returns a sorted copy of the database data. */\n  sortData(data: UserData[]): UserData[] {\n    if (!this._sort.active || this._sort.direction == '') { return data; }\n\n    return data.sort((a, b) => {\n      let propertyA: number|string = '';\n      let propertyB: number|string = '';\n\n      switch (this._sort.active) {\n        case 'userId': [propertyA, propertyB] = [a.id, b.id]; break;\n        case 'userName': [propertyA, propertyB] = [a.name, b.name]; break;\n        case 'progress': [propertyA, propertyB] = [a.progress, b.progress]; break;\n        case 'color': [propertyA, propertyB] = [a.color, b.color]; break;\n      }\n\n      let valueA = isNaN(+propertyA) ? propertyA : +propertyA;\n      let valueB = isNaN(+propertyB) ? propertyB : +propertyB;\n\n      return (valueA < valueB ? -1 : 1) * (this._sort.direction == 'asc' ? 1 : -1);\n    });\n  }\n}\n",
    allFeaturesTablecsssource: "/* Structure */\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px;\n}\n\n.example-header {\n  min-height: 56px;\n  max-height: 56px;\n  display: flex;\n  align-items: center;\n  padding: 8px 24px 0;\n  font-size: 20px;\n  justify-content: space-between;\n  border-bottom: 1px solid transparent;\n}\n\n.mat-form-field {\n  font-size: 14px;\n  flex-grow: 1;\n  margin-top: 8px;\n}\n\n.example-no-results {\n  display: flex;\n  justify-content: center;\n  padding: 24px;\n  font-size: 12px;\n  font-style: italic;\n}\n\n/** Selection styles */\n.example-selection-header {\n  font-size: 18px;\n}\n\n.mat-column-select {\n  max-width: 54px;\n}\n\n.mat-row:hover, .example-selected-row {\n  background: #f5f5f5;\n}\n\n.mat-row:active, .mat-row.example-selected-row {\n  background: #eaeaea;\n}\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px;\n}\n"
};
/** Constants used to fill up our data base. */
var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase, _paginator, _sort) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._paginator = _paginator;
        _this._sort = _sort;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        _this.filteredData = [];
        _this.renderedData = [];
        // Reset to the first page when the user changes the filter.
        _this._filterChange.subscribe(function () { return _this._paginator.pageIndex = 0; });
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        // Listen for any changes in the base data, sorting, filtering, or pagination
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._sort.sortChange,
            this._filterChange,
            this._paginator.page,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            // Filter data
            _this.filteredData = _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
            // Sort filtered data
            var sortedData = _this.sortData(_this.filteredData.slice());
            // Grab the page's slice of the filtered sorted data.
            var startIndex = _this._paginator.pageIndex * _this._paginator.pageSize;
            _this.renderedData = sortedData.splice(startIndex, _this._paginator.pageSize);
            return _this.renderedData;
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    /** Returns a sorted copy of the database data. */
    ExampleDataSource.prototype.sortData = function (data) {
        var _this = this;
        if (!this._sort.active || this._sort.direction == '') {
            return data;
        }
        return data.sort(function (a, b) {
            var propertyA = '';
            var propertyB = '';
            switch (_this._sort.active) {
                case 'userId':
                    _a = [a.id, b.id], propertyA = _a[0], propertyB = _a[1];
                    break;
                case 'userName':
                    _b = [a.name, b.name], propertyA = _b[0], propertyB = _b[1];
                    break;
                case 'progress':
                    _c = [a.progress, b.progress], propertyA = _c[0], propertyB = _c[1];
                    break;
                case 'color':
                    _d = [a.color, b.color], propertyA = _d[0], propertyB = _d[1];
                    break;
            }
            var valueA = isNaN(+propertyA) ? propertyA : +propertyA;
            var valueB = isNaN(+propertyB) ? propertyB : +propertyB;
            return (valueA < valueB ? -1 : 1) * (_this._sort.direction == 'asc' ? 1 : -1);
            var _a, _b, _c, _d;
        });
    };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/Herramientas/bridge33/bridge33.component.html":
/*!***************************************************************!*\
  !*** ./src/app/Herramientas/bridge33/bridge33.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"table-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"table-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >CFDI 3.3</h1>\n\t\t</mat-toolbar>\n\t\t<div class=\"table-container\">\n\t\t\t<mat-table #table [dataSource]=\"dataSource\">\n\n\t\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t\t<!-- ID Column -->\n\t\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Progress Column -->\n\t\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Name Column -->\n\t\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<!-- Color Column -->\n\t\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t\t<mat-header-cell *matHeaderCellDef> Color </mat-header-cell>\n\t\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t\t</ng-container>\n\n\t\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\t\n\t\t\t</mat-table>\n\t\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/Herramientas/bridge33/bridge33.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/Herramientas/bridge33/bridge33.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-container {\n  position: relative;\n  margin-top: 50px; }\n\n.table-container .mat-table {\n  max-height: calc(100vh - 200px);\n  overflow-y: auto; }\n\n.table-container .mat-table .mat-header-row {\n  position: absolute;\n  top: -50px;\n  left: 0px;\n  right: 18px;\n  background: #fff; }\n\n.table-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.table-container {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0hlcnJhbWllbnRhcy9icmlkZ2UzMy9icmlkZ2UzMy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNBLGtCQUFrQjtFQUNsQixnQkFBZSxFQUFBOztBQUVmO0VBQ0EsK0JBQStCO0VBQy9CLGdCQUFnQixFQUFBOztBQUVoQjtFQUNBLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFFaEI7RUFDQyx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLGNBQWMsRUFBQTs7QUFFZjtFQUNDLDJCQUEyQixFQUFBOztBQUU1QjtFQUNDLHlCQUF5QjtFQUN6Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0hlcnJhbWllbnRhcy9icmlkZ2UzMy9icmlkZ2UzMy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuLnRhYmxlLWNvbnRhaW5lciB7XG5wb3NpdGlvbjogcmVsYXRpdmU7XG5tYXJnaW4tdG9wOjUwcHg7XG59XG4udGFibGUtY29udGFpbmVyIC5tYXQtdGFibGUge1xubWF4LWhlaWdodDogY2FsYygxMDB2aCAtIDIwMHB4KTtcbm92ZXJmbG93LXk6IGF1dG87XG59XG4udGFibGUtY29udGFpbmVyIC5tYXQtdGFibGUgLm1hdC1oZWFkZXItcm93IHtcbnBvc2l0aW9uOiBhYnNvbHV0ZTtcbnRvcDogLTUwcHg7XG5sZWZ0OiAwcHg7XG5yaWdodDogMThweDtcbmJhY2tncm91bmQ6ICNmZmY7XG59XG4udGFibGUtaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xuXHRwYWRkaW5nOiAwIDVweDtcbn1cbi50YWJsZS1jb250YWluZXIge1xuXHRwYWRkaW5nOiA1cHggMTVweCAxNXB4IDE1cHg7XG59XG4udGFibGUtY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xufVxuIl19 */"

/***/ }),

/***/ "./src/app/Herramientas/bridge33/bridge33.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/Herramientas/bridge33/bridge33.component.ts ***!
  \*************************************************************/
/*! exports provided: BridgeTXT */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BridgeTXT", function() { return BridgeTXT; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Herramientas/bridge33/helpers.data.ts");



var BridgeTXT = /** @class */ (function () {
    function BridgeTXT() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_2__["ExampleDatabase"]();
    }
    BridgeTXT.prototype.ngOnInit = function () {
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_2__["ExampleDataSource"](this.exampleDatabase);
    };
    BridgeTXT = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-fixed-table',
            template: __webpack_require__(/*! ./bridge33.component.html */ "./src/app/Herramientas/bridge33/bridge33.component.html"),
            styles: [__webpack_require__(/*! ./bridge33.component.scss */ "./src/app/Herramientas/bridge33/bridge33.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BridgeTXT);
    return BridgeTXT;
}());



/***/ }),

/***/ "./src/app/Herramientas/bridge33/helpers.data.ts":
/*!*******************************************************!*\
  !*** ./src/app/Herramientas/bridge33/helpers.data.ts ***!
  \*******************************************************/
/*! exports provided: ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");




var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/Herramientas/buzon/buzon.component.html":
/*!*********************************************************!*\
  !*** ./src/app/Herramientas/buzon/buzon.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"table-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"table-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Responsive Tables</h1>\n\t\t</mat-toolbar>\n\t\t<div class=\"table-container\">\n\t\t\n\t\t<table  matSort (matSortChange)=\"sortData($event)\">\n\t\t\t\t\t<thead>\n\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t<th mat-sort-header=\"{{th.key}}\" scope=\"col\" *ngFor=\"let th of helpers?.header\">{{th.name}}</th>\n\t\t\t\t\t\t</tr>\n\t\t\t\t\t</thead>\n\t\t\t\t\t<tbody>\n\t\t\t\t\t\t<tr *ngFor=\"let row of rows let i=index\" >\n\t\t\t\t\t\t\t<td [attr.data-label]=\"th.name\" *ngFor=\"let th of helpers?.header\" >\n\n\t\t\t\t\t\t\t\t<span *ngIf=\"th.key!='action'\">\n\n\t\t\t\t\t\t\t\t\t{{row[th.key]}}\n\n\t\t\t\t\t\t\t\t\t<mat-chip  (click)=\"findDuplicates(row)\"\n\t\t\t\t\t\t\t\t\tselected=\"true\"\n\t\t\t\t\t\t\t\t\tcolor=\"warn\"  matTooltip=\"{{row['duplicate_applications'].length}} duplicate entries\" matTooltipPosition=\"right\" *ngIf=\"th.key=='applicationNumber' && row['duplicate_applications'] != 'undefined' && row['duplicate_applications'] && row['duplicate_applications'].length > 0\" >\n\t\t\t\t\t\t\t\t\t{{row['duplicate_applications'].length }}\n\t\t\t\t\t\t\t\t\t</mat-chip>\n\n\t\t\t\t\t\t\t\t</span>\n          \n\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t<tr *ngIf=\"rows?.length==0 && status==false\">\n\t\t\t\t\t\t\t\t<td [colSpan]=\"header.length\" style=\"text-align: center;\">\n\t\t\t\t\t\t\t\tNo records found\n\t\t\t\t\t\t\t\t</td>\n\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t</tbody>\n\t\t\t\t\t<thead *matHeaderRowDef=\"displayedColumns\"></thead>\n\t\t\t\t\t<tr *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n\t\t\t\t</table>\n\t\t\t\t<mat-paginator [length]=\"pageLength\"\n\t\t              [pageSize]=\"pageSize\"\n\t\t              [pageSizeOptions]=\"[1, 5, 10, 25, 100, 150, 200]\"  (page)=\"next($event)\">\n\t\t\t\t</mat-paginator>\n\n\t</div>\n\t</div>\n</div>\n"

/***/ }),

/***/ "./src/app/Herramientas/buzon/buzon.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/Herramientas/buzon/buzon.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.table-container {\n  padding: 5px 15px 15px 15px; }\n\n.table-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\ntable {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  table-layout: fixed; }\n\ntable caption {\n  font-size: 1.5em;\n  margin: .5em 0 .75em;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable tr {\n  background: #f8f8f8;\n  border: 1px solid #ddd;\n  padding: .35em; }\n\ntable tr:nth-child(odd) td {\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable tr:nth-child(even) td {\n  background: rgba(145, 151, 187, 0.34);\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\n/deep/ .mat-sort-header-container {\n  justify-content: center; }\n\ntable th,\ntable td {\n  padding: .625em;\n  text-align: center;\n  font-family: Roboto,\"Helvetica Neue\",sans-serif; }\n\ntable th {\n  background: #cfcfcf;\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase; }\n\n@media screen and (max-width: 600px) {\n  table {\n    border: 0; }\n  table caption {\n    font-size: 1.3em; }\n  table thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n  table tr {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: .625em; }\n  table td {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: .8em;\n    text-align: right; }\n  table td:before {\n    /*\n        * aria-label has no advantage, it won't be read inside a table\n        content: attr(aria-label);\n        */\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase; }\n  table td:last-child {\n    border-bottom: 0; } }\n\nmat-button-toggle-group {\n  cursor: pointer; }\n\n::ng-deep .mat-sort-header-container {\n  justify-content: center; }\n\n/* Structure */\n\n.example-container {\n  display: flex;\n  flex-direction: column;\n  min-width: 300px; }\n\n.example-header {\n  min-height: 64px;\n  display: flex;\n  align-items: center;\n  padding-left: 24px;\n  font-size: 20px; }\n\n.mat-table {\n  overflow: auto;\n  max-height: 500px; }\n\n.widgetHolder {\n  margin: 0 auto; }\n\n.widgetHolder .widgetHolder-content {\n    padding: 20px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0hlcnJhbWllbnRhcy9idXpvbi9idXpvbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvSGVycmFtaWVudGFzL2J1em9uL2J1em9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWxCO0VBQ0ksMkJBQTJCLEVBQUE7O0FBRS9CO0VBQ0kseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBRXZCO0VBQ0ksZ0JBQWdCO0VBQ2hCLG9CQUFvQjtFQUNwQiwrQ0FBOEMsRUFBQTs7QUFFbEQ7RUFDSSxtQkFBbUI7RUFDbkIsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTs7QUFFbEI7RUFDSSwrQ0FBOEMsRUFBQTs7QUFFbEQ7RUFDSSxxQ0FBb0M7RUFDcEMsK0NBQThDLEVBQUE7O0FBRWxEO0VBQ1EsdUJBQXVCLEVBQUE7O0FBRy9COztFQUVJLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsK0NBQThDLEVBQUE7O0FBRWxEO0VBQ0ksbUJBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIseUJBQXlCLEVBQUE7O0FBRTdCO0VBQ0k7SUFDSyxTQUFTLEVBQUE7RUFFZDtJQUNJLGdCQUFnQixFQUFBO0VBRXBCO0lBQ0ksWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQUVkO0lBQ0ksNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTtFQUV6QjtJQUNJLDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBRXJCO0lBQ0k7OztTQ0pDO0lEUUQseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIseUJBQXlCLEVBQUE7RUFFN0I7SUFDSSxnQkFBZ0IsRUFBQSxFQUNuQjs7QUFHTDtFQUNJLGVBQWMsRUFBQTs7QUFHbEI7RUFDSSx1QkFBdUIsRUFBQTs7QUFFM0IsY0FBQTs7QUFDQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsZ0JBQWdCLEVBQUE7O0FBR2xCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsa0JBQWtCO0VBQ2xCLGVBQWUsRUFBQTs7QUFHakI7RUFDRSxjQUFjO0VBQ2QsaUJBQWlCLEVBQUE7O0FBRW5CO0VBQ0UsY0FBYyxFQUFBOztBQURoQjtJQUdJLGFBQWEsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0hlcnJhbWllbnRhcy9idXpvbi9idXpvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDAgNXB4O1xufVxuLnRhYmxlLWNvbnRhaW5lciB7XG4gICAgcGFkZGluZzogNXB4IDE1cHggMTVweCAxNXB4O1xufVxuLnRhYmxlLWNvbXBvbmVudC1ob2xkZXIge1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XG59XG5cbnRhYmxlIHtcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuICAgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgdGFibGUtbGF5b3V0OiBmaXhlZDtcbn1cbnRhYmxlIGNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS41ZW07XG4gICAgbWFyZ2luOiAuNWVtIDAgLjc1ZW07XG4gICAgZm9udC1mYW1pbHk6Um9ib3RvLFwiSGVsdmV0aWNhIE5ldWVcIixzYW5zLXNlcmlmO1xufVxudGFibGUgdHIge1xuICAgIGJhY2tncm91bmQ6ICNmOGY4Zjg7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcbiAgICBwYWRkaW5nOiAuMzVlbTtcbn1cbnRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHRke1xuICAgIGZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcbiAgfVxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHRke1xuICAgIGJhY2tncm91bmQ6cmdiYSgxNDUsIDE1MSwgMTg3LCAwLjM0KTtcbiAgICBmb250LWZhbWlseTpSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7XG59XG4vZGVlcC8gLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXJ7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgICBwYWRkaW5nOiAuNjI1ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtZmFtaWx5OlJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjtcbn1cbnRhYmxlIHRoIHtcbiAgICBiYWNrZ3JvdW5kOiNjZmNmY2Y7XG4gICAgZm9udC1zaXplOiAuODVlbTtcbiAgICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xufVxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICB0YWJsZSB7XG4gICAgICAgICBib3JkZXI6IDA7XG4gICAgfVxuICAgIHRhYmxlIGNhcHRpb24ge1xuICAgICAgICBmb250LXNpemU6IDEuM2VtO1xuICAgIH1cbiAgICB0YWJsZSB0aGVhZCB7XG4gICAgICAgIGJvcmRlcjogbm9uZTtcbiAgICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICAgICAgaGVpZ2h0OiAxcHg7XG4gICAgICAgIG1hcmdpbjogLTFweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICB3aWR0aDogMXB4O1xuICAgIH1cbiAgICB0YWJsZSB0ciB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGRkO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogLjYyNWVtO1xuICAgIH1cbiAgICB0YWJsZSB0ZCB7XG4gICAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgZm9udC1zaXplOiAuOGVtO1xuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcbiAgICB9XG4gICAgdGFibGUgdGQ6YmVmb3JlIHtcbiAgICAgICAgLypcbiAgICAgICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcbiAgICAgICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcbiAgICAgICAgKi9cbiAgICAgICAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIH1cbiAgICB0YWJsZSB0ZDpsYXN0LWNoaWxkIHtcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMDtcbiAgICB9XG5cbn1cbm1hdC1idXR0b24tdG9nZ2xlLWdyb3Vwe1xuICAgIGN1cnNvcjpwb2ludGVyO1xufVxuXG46Om5nLWRlZXAgLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXJ7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG4vKiBTdHJ1Y3R1cmUgKi9cbi5leGFtcGxlLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG1pbi13aWR0aDogMzAwcHg7XG59XG5cbi5leGFtcGxlLWhlYWRlciB7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHBhZGRpbmctbGVmdDogMjRweDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4O1xufVxuLndpZGdldEhvbGRlcntcbiAgbWFyZ2luOiAwIGF1dG87XG4gIC53aWRnZXRIb2xkZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDtcbiAgfVxufVxuIiwiLnRhYmxlLWhlYWRlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgcGFkZGluZzogMCA1cHg7IH1cblxuLnRhYmxlLWNvbnRhaW5lciB7XG4gIHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMTVweDsgfVxuXG4udGFibGUtY29tcG9uZW50LWhvbGRlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlOyB9XG5cbnRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDsgfVxuXG50YWJsZSBjYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiAuNWVtIDAgLjc1ZW07XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7IH1cblxudGFibGUgdHIge1xuICBiYWNrZ3JvdW5kOiAjZjhmOGY4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuICBwYWRkaW5nOiAuMzVlbTsgfVxuXG50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB0ZCB7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7IH1cblxudGFibGUgdHI6bnRoLWNoaWxkKGV2ZW4pIHRkIHtcbiAgYmFja2dyb3VuZDogcmdiYSgxNDUsIDE1MSwgMTg3LCAwLjM0KTtcbiAgZm9udC1mYW1pbHk6IFJvYm90byxcIkhlbHZldGljYSBOZXVlXCIsc2Fucy1zZXJpZjsgfVxuXG4vZGVlcC8gLm1hdC1zb3J0LWhlYWRlci1jb250YWluZXIge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsgfVxuXG50YWJsZSB0aCxcbnRhYmxlIHRkIHtcbiAgcGFkZGluZzogLjYyNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8sXCJIZWx2ZXRpY2EgTmV1ZVwiLHNhbnMtc2VyaWY7IH1cblxudGFibGUgdGgge1xuICBiYWNrZ3JvdW5kOiAjY2ZjZmNmO1xuICBmb250LXNpemU6IC44NWVtO1xuICBsZXR0ZXItc3BhY2luZzogLjFlbTtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuICB0YWJsZSB7XG4gICAgYm9yZGVyOiAwOyB9XG4gIHRhYmxlIGNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07IH1cbiAgdGFibGUgdGhlYWQge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xuICAgIGhlaWdodDogMXB4O1xuICAgIG1hcmdpbjogLTFweDtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxcHg7IH1cbiAgdGFibGUgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC42MjVlbTsgfVxuICB0YWJsZSB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIHRhYmxlIHRkOmJlZm9yZSB7XG4gICAgLypcbiAgICAgICAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcbiAgICAgICAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcbiAgICAgICAgKi9cbiAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuICAgIGZsb2F0OiBsZWZ0O1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cbiAgdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDsgfSB9XG5cbm1hdC1idXR0b24tdG9nZ2xlLWdyb3VwIHtcbiAgY3Vyc29yOiBwb2ludGVyOyB9XG5cbjo6bmctZGVlcCAubWF0LXNvcnQtaGVhZGVyLWNvbnRhaW5lciB7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyOyB9XG5cbi8qIFN0cnVjdHVyZSAqL1xuLmV4YW1wbGUtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgbWluLXdpZHRoOiAzMDBweDsgfVxuXG4uZXhhbXBsZS1oZWFkZXIge1xuICBtaW4taGVpZ2h0OiA2NHB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwYWRkaW5nLWxlZnQ6IDI0cHg7XG4gIGZvbnQtc2l6ZTogMjBweDsgfVxuXG4ubWF0LXRhYmxlIHtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIG1heC1oZWlnaHQ6IDUwMHB4OyB9XG5cbi53aWRnZXRIb2xkZXIge1xuICBtYXJnaW46IDAgYXV0bzsgfVxuICAud2lkZ2V0SG9sZGVyIC53aWRnZXRIb2xkZXItY29udGVudCB7XG4gICAgcGFkZGluZzogMjBweDsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/Herramientas/buzon/buzon.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/Herramientas/buzon/buzon.component.ts ***!
  \*******************************************************/
/*! exports provided: Buzon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buzon", function() { return Buzon; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Herramientas/buzon/helpers.data.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");




var Buzon = /** @class */ (function () {
    function Buzon() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.rows = [];
        this.pageLength = 0;
        this.pageSize = 15;
        this.helpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["ResponsiveTableHelpers"];
        this.edit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delete = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.view = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.page = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.sort = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dup = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    Buzon.prototype.ngOnInit = function () {
        this.getRows();
    };
    Buzon.prototype.next = function (event) {
        this.rows = [];
        for (var i = 1 * event.pageIndex * event.pageSize; i < event.pageSize + event.pageIndex * event.pageSize; i++) {
            this.rows = this.rows.concat([this.helpers.rows[i]]);
        }
    };
    Buzon.prototype.getRows = function () {
        for (var i = 0; i < this.pageSize; i++) {
            this.rows = this.rows.concat([this.helpers.rows[i]]);
        }
        this.pageLength = this.helpers.rows.length;
    };
    Buzon.prototype.sortData = function (val) {
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], Buzon.prototype, "paginator1", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Buzon.prototype, "status", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Buzon.prototype, "actionStatus", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Buzon.prototype, "edit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Buzon.prototype, "delete", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Buzon.prototype, "view", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Buzon.prototype, "page", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Buzon.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], Buzon.prototype, "dup", void 0);
    Buzon = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-responsive-table',
            template: __webpack_require__(/*! ./buzon.component.html */ "./src/app/Herramientas/buzon/buzon.component.html"),
            styles: [__webpack_require__(/*! ./buzon.component.scss */ "./src/app/Herramientas/buzon/buzon.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Buzon);
    return Buzon;
}());



/***/ }),

/***/ "./src/app/Herramientas/buzon/helpers.data.ts":
/*!****************************************************!*\
  !*** ./src/app/Herramientas/buzon/helpers.data.ts ***!
  \****************************************************/
/*! exports provided: ResponsiveTableHelpers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveTableHelpers", function() { return ResponsiveTableHelpers; });
var ResponsiveTableHelpers = {
    header: [
        {
            name: 'ID',
            key: 'id',
            order: 'asc'
        },
        {
            name: 'Name',
            key: 'name',
            order: 'asc'
        },
        {
            name: 'Progress',
            key: 'progress',
            order: 'asc'
        },
        {
            name: 'Color',
            key: 'color',
            order: 'asc'
        }
    ],
    rows: [{
            id: "1",
            name: "Isla A.",
            progress: "0",
            color: "aqua"
        }, {
            id: "2",
            name: "Arthur C.",
            progress: "56",
            color: "blue"
        }, {
            id: "3",
            name: "Theodore T.",
            progress: "67",
            color: "black"
        }, {
            id: "4",
            name: "Amelia O.",
            progress: "73",
            color: "black"
        }, {
            id: "5",
            name: "Mia T.",
            progress: "99",
            color: "red"
        }, {
            id: "6",
            name: "Maia A.",
            progress: "6",
            color: "red"
        }, {
            id: "7",
            name: "Isabella A.",
            progress: "31",
            color: "black"
        }, {
            id: "8",
            name: "Asher O.",
            progress: "35",
            color: "red"
        }, {
            id: "9",
            name: "Atticus V.",
            progress: "56",
            color: "purple"
        }, {
            id: "10",
            name: "Arthur I.",
            progress: "54",
            color: "purple"
        }, {
            id: "11",
            name: "Asher A.",
            progress: "77",
            color: "purple"
        }, {
            id: "12",
            name: "Arthur T.",
            progress: "48",
            color: "green"
        }, {
            id: "13",
            name: "Levi I.",
            progress: "12",
            color: "purple"
        }, {
            id: "14",
            name: "Thomas M.",
            progress: "16",
            color: "green"
        }, {
            id: "15",
            name: "Jasper C.",
            progress: "7",
            color: "orange"
        }, {
            id: "16",
            name: "Asher A.",
            progress: "98",
            color: "yellow"
        }, {
            id: "17",
            name: "Isla O.",
            progress: "27",
            color: "olive"
        }, {
            id: "18",
            name: "Atticus M.",
            progress: "17",
            color: "teal"
        }, {
            id: "19",
            name: "Asher A.",
            progress: "22",
            color: "olive"
        }, {
            id: "20",
            name: "Violet T.",
            progress: "29",
            color: "black"
        }, {
            id: "21",
            name: "Amelia M.",
            progress: "70",
            color: "black"
        }, {
            id: "22",
            name: "Atticus A.",
            progress: "61",
            color: "orange"
        }, {
            id: "23",
            name: "Cora A.",
            progress: "48",
            color: "olive"
        }, {
            id: "24",
            name: "Asher M.",
            progress: "94",
            color: "blue"
        }, {
            id: "25",
            name: "Cora T.",
            progress: "35",
            color: "navy"
        }, {
            id: "26",
            name: "Theodore O.",
            progress: "58",
            color: "aqua"
        }, {
            id: "27",
            name: "Atticus A.",
            progress: "12",
            color: "yellow"
        }, {
            id: "28",
            name: "Oliver J.",
            progress: "25",
            color: "black"
        }, {
            id: "29",
            name: "Jack I.",
            progress: "14",
            color: "green"
        }, {
            id: "30",
            name: "Jasper C.",
            progress: "27",
            color: "aqua"
        }, {
            id: "31",
            name: "Levi C.",
            progress: "16",
            color: "navy"
        }, {
            id: "32",
            name: "Olivia V.",
            progress: "45",
            color: "fuchsia"
        }, {
            id: "33",
            name: "Isabella V.",
            progress: "31",
            color: "orange"
        }, {
            id: "34",
            name: "Jasper J.",
            progress: "21",
            color: "yellow"
        }, {
            id: "35",
            name: "Atticus E.",
            progress: "44",
            color: "navy"
        }, {
            id: "36",
            name: "Isabella M.",
            progress: "21",
            color: "aqua"
        }, {
            id: "37",
            name: "Jasper T.",
            progress: "7",
            color: "orange"
        }, {
            id: "38",
            name: "Theodore A.",
            progress: "97",
            color: "aqua"
        }, {
            id: "39",
            name: "Amelia O.",
            progress: "6",
            color: "aqua"
        }, {
            id: "40",
            name: "Mia J.",
            progress: "30",
            color: "blue"
        }, {
            id: "41",
            name: "Theodore J.",
            progress: "87",
            color: "maroon"
        }, {
            id: "42",
            name: "Levi O.",
            progress: "38",
            color: "black"
        }, {
            id: "43",
            name: "Thomas T.",
            progress: "60",
            color: "maroon"
        }, {
            id: "44",
            name: "Olivia T.",
            progress: "80",
            color: "yellow"
        }, {
            id: "45",
            name: "Violet C.",
            progress: "66",
            color: "olive"
        }, {
            id: "46",
            name: "Elizabeth I.",
            progress: "4",
            color: "green"
        }, {
            id: "47",
            name: "Olivia T.",
            progress: "41",
            color: "yellow"
        }, {
            id: "48",
            name: "Amelia A.",
            progress: "75",
            color: "blue"
        }, {
            id: "49",
            name: "Isla A.",
            progress: "65",
            color: "aqua"
        }, {
            id: "50",
            name: "Oliver O.",
            progress: "29",
            color: "fuchsia"
        }, {
            id: "51",
            name: "Levi V.",
            progress: "10",
            color: "blue"
        }, {
            id: "52",
            name: "Asher V.",
            progress: "84",
            color: "teal"
        }, {
            id: "53",
            name: "Isla T.",
            progress: "75",
            color: "fuchsia"
        }, { id: "54",
            name: "Arthur C.",
            progress: "70",
            color: "teal"
        }, {
            id: "55",
            name: "Isabella I.",
            progress: "64",
            color: "teal"
        }, {
            id: "56",
            name: "Mia A.",
            progress: "37",
            color: "red"
        }, {
            id: "57",
            name: "Mia T.",
            progress: "38",
            color: "olive"
        }, {
            id: "58",
            name: "Arthur J.",
            progress: "52",
            color: "black"
        }, {
            id: "59",
            name: "Isla A.",
            progress: "61",
            color: "blue"
        }, {
            id: "60",
            name: "Theodore J.",
            progress: "63",
            color: "green"
        }, {
            id: "61",
            name: "Atticus O.",
            progress: "4",
            color: "olive"
        }, {
            id: "62",
            name: "Maia E.",
            progress: "61",
            color: "olive"
        }, {
            id: "63",
            name: "Mia T.",
            progress: "52",
            color: "olive"
        }, {
            id: "64",
            name: "Levi I.",
            progress: "51",
            color: "navy"
        }, {
            id: "65",
            name: "Amelia C.",
            progress: "34",
            color: "green"
        }, {
            id: "66",
            name: "Olivia A.",
            progress: "48",
            color: "maroon"
        }, {
            id: "67",
            name: "Charlotte J.",
            progress: "95",
            color: "green"
        }, {
            id: "68",
            name: "Jasper I.",
            progress: "36",
            color: "blue"
        }, {
            id: "69",
            name: "Isla J.",
            progress: "81",
            color: "fuchsia"
        }, {
            id: "70",
            name: "Jack A.",
            progress: "57",
            color: "aqua"
        }, {
            id: "71",
            name: "Theodore C.",
            progress: "92",
            color: "red"
        }, {
            id: "72",
            name: "Arthur V.",
            progress: "41",
            color: "green"
        }, {
            id: "73",
            name: "Isabella O.",
            progress: "98",
            color: "maroon"
        }, {
            id: "74",
            name: "Atticus J.",
            progress: "94",
            color: "blue"
        }, {
            id: "75",
            name: "Maia V.",
            progress: "93",
            color: "orange"
        }, {
            id: "76",
            name: "Thomas O.",
            progress: "87",
            color: "aqua"
        }, {
            id: "77",
            name: "Asher J.",
            progress: "0",
            color: "yellow"
        }, {
            id: "78",
            name: "Mia C.",
            progress: "21",
            color: "gray"
        }, {
            id: "79",
            name: "Isla T.",
            progress: "36",
            color: "teal"
        }, {
            id: "80",
            name: "Cora A.",
            progress: "23",
            color: "orange"
        }, {
            id: "81",
            name: "Jasper T.",
            progress: "41",
            color: "navy"
        }, {
            id: "82",
            name: "Theodore I.",
            progress: "6",
            color: "yellow"
        }, {
            id: "83",
            name: "Oliver O.",
            progress: "87",
            color: "red"
        }, {
            id: "84",
            name: "Asher O.",
            progress: "2",
            color: "blue"
        }, {
            id: "85",
            name: "Maia C.",
            progress: "2",
            color: "purple"
        }, {
            id: "86",
            name: "Olivia A.",
            progress: "4",
            color: "teal"
        }, {
            id: "87",
            name: "Jasper E.",
            progress: "21",
            color: "fuchsia"
        }, {
            id: "88",
            name: "Amelia I.",
            progress: "40",
            color: "teal"
        }, {
            id: "89",
            name: "Jack O.",
            progress: "4",
            color: "green"
        }, {
            id: "90",
            name: "Asher C.",
            progress: "22",
            color: "black"
        }, {
            id: "91",
            name: "Oliver A.",
            progress: "75",
            color: "teal"
        }, {
            id: "92",
            name: "Mia J.",
            progress: "10",
            color: "red"
        }, {
            id: "93",
            name: "Jasper A.",
            progress: "92",
            color: "yellow"
        }, {
            id: "94",
            name: "Atticus I.",
            progress: "1",
            color: "navy"
        }, {
            id: "95",
            name: "Jasper I.",
            progress: "46",
            color: "red"
        }, {
            id: "96",
            name: "Violet I.",
            progress: "85",
            color: "gray"
        }, {
            id: "97",
            name: "Olivia A.",
            progress: "33",
            color: "lime"
        }, {
            id: "98",
            name: "Atticus C.",
            progress: "24",
            color: "lime"
        }, {
            id: "99",
            name: "Asher V.",
            progress: "37",
            color: "aqua"
        }, {
            id: "100",
            name: "Isabella C.",
            progress: "10",
            color: "black"
        }]
};
/** Constants used to fill up our data base. */


/***/ }),

/***/ "./src/app/Herramientas/prefacturas/helpers.data.ts":
/*!**********************************************************!*\
  !*** ./src/app/Herramientas/prefacturas/helpers.data.ts ***!
  \**********************************************************/
/*! exports provided: ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");




var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/Herramientas/prefacturas/prefacturas.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Herramientas/prefacturas/prefacturas.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\" >\n\t\t\n\t<div class=\"\" style=\"background-color: #4e9814\" >\n\t\t<div class=\"table-header\" style=\"padding: 0 20px;\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Tables with filtering</h1>\n\t\t</div>\n\t\t<div class=\"example-header\" style=\"padding: 0 20px;\">\n\t\t\t<mat-form-field floatPlaceholder=\"never\" style=\"color: white; width: 100%;\">\n\t\t\t\t<input matInput #filter placeholder=\"Filter users\">\n\t\t\t</mat-form-field>\n\t\t</div>\n\n\t\t<mat-table #table [dataSource]=\"dataSource\">\n\n\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t<!-- ID Column -->\n\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Progress Column -->\n\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Name Column -->\n\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Color Column -->\n\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Color </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\n\t\t</mat-table>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/Herramientas/prefacturas/prefacturas.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Herramientas/prefacturas/prefacturas.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0hlcnJhbWllbnRhcy9wcmVmYWN0dXJhcy9wcmVmYWN0dXJhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUF5QjtFQUN6QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9IZXJyYW1pZW50YXMvcHJlZmFjdHVyYXMvcHJlZmFjdHVyYXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Herramientas/prefacturas/prefacturas.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Herramientas/prefacturas/prefacturas.component.ts ***!
  \*******************************************************************/
/*! exports provided: Prefacturas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Prefacturas", function() { return Prefacturas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Herramientas/prefacturas/helpers.data.ts");





var Prefacturas = /** @class */ (function () {
    function Prefacturas() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDatabase"]();
    }
    Prefacturas.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDataSource"](this.exampleDatabase);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('filter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], Prefacturas.prototype, "filter", void 0);
    Prefacturas = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'cdk-filter-table',
            template: __webpack_require__(/*! ./prefacturas.component.html */ "./src/app/Herramientas/prefacturas/prefacturas.component.html"),
            styles: [__webpack_require__(/*! ./prefacturas.component.scss */ "./src/app/Herramientas/prefacturas/prefacturas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Prefacturas);
    return Prefacturas;
}());



/***/ }),

/***/ "./src/app/Herramientas/prenomina/helpers.data.ts":
/*!********************************************************!*\
  !*** ./src/app/Herramientas/prenomina/helpers.data.ts ***!
  \********************************************************/
/*! exports provided: ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");




var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/Herramientas/prenomina/prenomina.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Herramientas/prenomina/prenomina.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\" >\n\t\t\n\t<div class=\"\" style=\"background-color: #4e9814\" >\n\t\t<div class=\"table-header\" style=\"padding: 0 20px;\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Tables with filtering</h1>\n\t\t</div>\n\t\t<div class=\"example-header\" style=\"padding: 0 20px;\">\n\t\t\t<mat-form-field floatPlaceholder=\"never\" style=\"color: white; width: 100%;\">\n\t\t\t\t<input matInput #filter placeholder=\"Filter users\">\n\t\t\t</mat-form-field>\n\t\t</div>\n\n\t\t<mat-table #table [dataSource]=\"dataSource\">\n\n\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t<!-- ID Column -->\n\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Progress Column -->\n\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Name Column -->\n\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Color Column -->\n\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Color </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\n\t\t</mat-table>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/Herramientas/prenomina/prenomina.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Herramientas/prenomina/prenomina.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0hlcnJhbWllbnRhcy9wcmVub21pbmEvcHJlbm9taW5hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQXlCO0VBQ3pCLFlBQVksRUFBQSIsImZpbGUiOiJzcmMvYXBwL0hlcnJhbWllbnRhcy9wcmVub21pbmEvcHJlbm9taW5hLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG5cdGNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Herramientas/prenomina/prenomina.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Herramientas/prenomina/prenomina.component.ts ***!
  \***************************************************************/
/*! exports provided: PreNomina */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreNomina", function() { return PreNomina; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Herramientas/prenomina/helpers.data.ts");





var PreNomina = /** @class */ (function () {
    function PreNomina() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDatabase"]();
    }
    PreNomina.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDataSource"](this.exampleDatabase);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('filter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], PreNomina.prototype, "filter", void 0);
    PreNomina = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'cdk-filter-table',
            template: __webpack_require__(/*! ./prenomina.component.html */ "./src/app/Herramientas/prenomina/prenomina.component.html"),
            styles: [__webpack_require__(/*! ./prenomina.component.scss */ "./src/app/Herramientas/prenomina/prenomina.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreNomina);
    return PreNomina;
}());



/***/ }),

/***/ "./src/app/Herramientas/prenomina32/helpers.data.ts":
/*!**********************************************************!*\
  !*** ./src/app/Herramientas/prenomina32/helpers.data.ts ***!
  \**********************************************************/
/*! exports provided: ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");




var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/Herramientas/prenomina32/prenomina32.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/Herramientas/prenomina32/prenomina32.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\" >\n\t\t\n\t<div class=\"\" style=\"background-color: #4e9814\" >\n\t\t<div class=\"table-header\" style=\"padding: 0 20px;\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Tables with filtering</h1>\n\t\t</div>\n\t\t<div class=\"example-header\" style=\"padding: 0 20px;\">\n\t\t\t<mat-form-field floatPlaceholder=\"never\" style=\"color: white; width: 100%;\">\n\t\t\t\t<input matInput #filter placeholder=\"Filter users\">\n\t\t\t</mat-form-field>\n\t\t</div>\n\n\t\t<mat-table #table [dataSource]=\"dataSource\">\n\n\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t<!-- ID Column -->\n\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Progress Column -->\n\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Name Column -->\n\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Color Column -->\n\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Color </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\n\t\t</mat-table>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/Herramientas/prenomina32/prenomina32.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/Herramientas/prenomina32/prenomina32.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0hlcnJhbWllbnRhcy9wcmVub21pbmEzMi9wcmVub21pbmEzMi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUF5QjtFQUN6QixZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9IZXJyYW1pZW50YXMvcHJlbm9taW5hMzIvcHJlbm9taW5hMzIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGFibGUtaGVhZGVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0Y29sb3I6IHdoaXRlO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Herramientas/prenomina32/prenomina32.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Herramientas/prenomina32/prenomina32.component.ts ***!
  \*******************************************************************/
/*! exports provided: PreNomina32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreNomina32", function() { return PreNomina32; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Herramientas/prenomina32/helpers.data.ts");





var PreNomina32 = /** @class */ (function () {
    function PreNomina32() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDatabase"]();
    }
    PreNomina32.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDataSource"](this.exampleDatabase);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('filter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], PreNomina32.prototype, "filter", void 0);
    PreNomina32 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'cdk-filter-table',
            template: __webpack_require__(/*! ./prenomina32.component.html */ "./src/app/Herramientas/prenomina32/prenomina32.component.html"),
            styles: [__webpack_require__(/*! ./prenomina32.component.scss */ "./src/app/Herramientas/prenomina32/prenomina32.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PreNomina32);
    return PreNomina32;
}());



/***/ }),

/***/ "./src/app/Herramientas/tickets/helpers.data.ts":
/*!******************************************************!*\
  !*** ./src/app/Herramientas/tickets/helpers.data.ts ***!
  \******************************************************/
/*! exports provided: ExampleDatabase, ExampleDataSource */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDatabase", function() { return ExampleDatabase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExampleDataSource", function() { return ExampleDataSource; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/collections */ "./node_modules/@angular/cdk/esm5/collections.es5.js");




var COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
    'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
var NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
    'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
    'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];
/** An example database that the data source uses to retrieve data for the table. */
var ExampleDatabase = /** @class */ (function () {
    function ExampleDatabase() {
        /** Stream that emits whenever the data has been modified. */
        this.dataChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        // Fill up the database with 100 users.
        for (var i = 0; i < 100; i++) {
            this.addUser();
        }
    }
    Object.defineProperty(ExampleDatabase.prototype, "data", {
        get: function () { return this.dataChange.value; },
        enumerable: true,
        configurable: true
    });
    /** Adds a new user to the database. */
    ExampleDatabase.prototype.addUser = function () {
        var copiedData = this.data.slice();
        copiedData.push(this.createNewUser());
        this.dataChange.next(copiedData);
    };
    /** Builds and returns a new User. */
    ExampleDatabase.prototype.createNewUser = function () {
        var name = NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
            NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';
        return {
            id: (this.data.length + 1).toString(),
            name: name,
            progress: Math.round(Math.random() * 100).toString(),
            color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
        };
    };
    return ExampleDatabase;
}());

/**
 * Data source to provide what data should be rendered in the table. Note that the data source
 * can retrieve its data in any way. In this case, the data source is provided a reference
 * to a common data base, ExampleDatabase. It is not the data source's responsibility to manage
 * the underlying data. Instead, it only needs to take the data and send the table exactly what
 * should be rendered.
 */
var ExampleDataSource = /** @class */ (function (_super) {
    tslib__WEBPACK_IMPORTED_MODULE_0__["__extends"](ExampleDataSource, _super);
    function ExampleDataSource(_exampleDatabase) {
        var _this = _super.call(this) || this;
        _this._exampleDatabase = _exampleDatabase;
        _this._filterChange = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        return _this;
    }
    Object.defineProperty(ExampleDataSource.prototype, "filter", {
        get: function () { return this._filterChange.value; },
        set: function (filter) { this._filterChange.next(filter); },
        enumerable: true,
        configurable: true
    });
    /** Connect function called by the table to retrieve one stream containing the data to render. */
    ExampleDataSource.prototype.connect = function () {
        var _this = this;
        var displayDataChanges = [
            this._exampleDatabase.dataChange,
            this._filterChange,
        ];
        return rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"].apply(void 0, displayDataChanges).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function () {
            return _this._exampleDatabase.data.slice().filter(function (item) {
                var searchStr = (item.name + item.color).toLowerCase();
                return searchStr.indexOf(_this.filter.toLowerCase()) != -1;
            });
        }));
    };
    ExampleDataSource.prototype.disconnect = function () { };
    return ExampleDataSource;
}(_angular_cdk_collections__WEBPACK_IMPORTED_MODULE_3__["DataSource"]));



/***/ }),

/***/ "./src/app/Herramientas/tickets/tickets.component.html":
/*!*************************************************************!*\
  !*** ./src/app/Herramientas/tickets/tickets.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"space-evenly stretch\" >\n\t\t\n\t<div class=\"\" style=\"background-color: #4e9814\" >\n\t\t<div class=\"table-header\" style=\"padding: 0 20px;\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Tables with filtering</h1>\n\t\t</div>\n\t\t<div class=\"example-header\" style=\"padding: 0 20px;\">\n\t\t\t<mat-form-field floatPlaceholder=\"never\" style=\"color: white; width: 100%;\">\n\t\t\t\t<input matInput #filter placeholder=\"Filter users\">\n\t\t\t</mat-form-field>\n\t\t</div>\n\n\t\t<mat-table #table [dataSource]=\"dataSource\">\n\n\t\t\t<!--- Note that these columns can be defined in any order.\n\t\t\tThe actual rendered columns are set as a property on the row definition\" -->\n\n\t\t\t<!-- ID Column -->\n\t\t\t<ng-container matColumnDef=\"userId\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> ID </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.id}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Progress Column -->\n\t\t\t<ng-container matColumnDef=\"progress\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Progress </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.progress}}% </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Name Column -->\n\t\t\t<ng-container matColumnDef=\"userName\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Name </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\"> {{row.name}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<!-- Color Column -->\n\t\t\t<ng-container matColumnDef=\"color\">\n\t\t\t\t<mat-header-cell *matHeaderCellDef> Color </mat-header-cell>\n\t\t\t\t<mat-cell *matCellDef=\"let row\" [style.color]=\"row.color\"> {{row.color}} </mat-cell>\n\t\t\t</ng-container>\n\n\t\t\t<mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\n\t\t\t<mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\n\t\t\t\n\t\t</mat-table>\n\t</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/Herramientas/tickets/tickets.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/Herramientas/tickets/tickets.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".table-header {\n  background-color: #327ebd;\n  color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0hlcnJhbWllbnRhcy90aWNrZXRzL3RpY2tldHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBeUI7RUFDekIsWUFBWSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvSGVycmFtaWVudGFzL3RpY2tldHMvdGlja2V0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50YWJsZS1oZWFkZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZWJkO1xuXHRjb2xvcjogd2hpdGU7XG59Il19 */"

/***/ }),

/***/ "./src/app/Herramientas/tickets/tickets.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Herramientas/tickets/tickets.component.ts ***!
  \***********************************************************/
/*! exports provided: Tickets */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tickets", function() { return Tickets; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Herramientas/tickets/helpers.data.ts");





var Tickets = /** @class */ (function () {
    function Tickets() {
        this.displayedColumns = ['userId', 'userName', 'progress', 'color'];
        this.exampleDatabase = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDatabase"]();
    }
    Tickets.prototype.ngOnInit = function () {
        var _this = this;
        this.dataSource = new _helpers_data__WEBPACK_IMPORTED_MODULE_4__["ExampleDataSource"](this.exampleDatabase);
        Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.filter.nativeElement, 'keyup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["debounceTime"])(150), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["distinctUntilChanged"])())
            .subscribe(function () {
            if (!_this.dataSource) {
                return;
            }
            _this.dataSource.filter = _this.filter.nativeElement.value;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])('filter'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"])
    ], Tickets.prototype, "filter", void 0);
    Tickets = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'cdk-filter-table',
            template: __webpack_require__(/*! ./tickets.component.html */ "./src/app/Herramientas/tickets/tickets.component.html"),
            styles: [__webpack_require__(/*! ./tickets.component.scss */ "./src/app/Herramientas/tickets/tickets.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Tickets);
    return Tickets;
}());



/***/ })

}]);
//# sourceMappingURL=Herramientas-Herramientas-module.js.map