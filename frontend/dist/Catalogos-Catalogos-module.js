(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Catalogos-Catalogos-module"],{

/***/ "./src/app/Catalogos/Catalogos.module.ts":
/*!***********************************************!*\
  !*** ./src/app/Catalogos/Catalogos.module.ts ***!
  \***********************************************/
/*! exports provided: highlightJsFactory, CatalogosModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogosModule", function() { return CatalogosModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/esm5/list.es5.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/esm5/stepper.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _Catalogos_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Catalogos.router */ "./src/app/Catalogos/Catalogos.router.ts");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! highlight.js */ "./node_modules/highlight.js/lib/index.js");
/* harmony import */ var highlight_js__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(highlight_js__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! angular-highlight-js */ "./node_modules/angular-highlight-js/dist/esm/src/index.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! highlight.js/lib/languages/typescript */ "./node_modules/highlight.js/lib/languages/typescript.js");
/* harmony import */ var highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _empleados_empleados_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./empleados/empleados.component */ "./src/app/Catalogos/empleados/empleados.component.ts");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/Catalogos/clientes/clientes.component.ts");
/* harmony import */ var _etiquetas_etiquetas_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./etiquetas/etiquetas.component */ "./src/app/Catalogos/etiquetas/etiquetas.component.ts");
/* harmony import */ var _impuestos_impuestos_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./impuestos/impuestos.component */ "./src/app/Catalogos/impuestos/impuestos.component.ts");
/* harmony import */ var _ilocales_ilocales_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./ilocales/ilocales.component */ "./src/app/Catalogos/ilocales/ilocales.component.ts");
/* harmony import */ var _mplantillas_mplantillas_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./mplantillas/mplantillas.component */ "./src/app/Catalogos/mplantillas/mplantillas.component.ts");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./productos/productos.component */ "./src/app/Catalogos/productos/productos.component.ts");
/* harmony import */ var _services_cprod_npro_service__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../services/cprod-npro.service */ "./src/app/services/cprod-npro.service.ts");





























function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_17__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_19__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_17__;
}
var CatalogosModule = /** @class */ (function () {
    function CatalogosModule() {
    }
    CatalogosModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__["FlexLayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatAutocompleteModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_5__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressSpinnerModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_7__["MatTabsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatRadioModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_8__["MatToolbarModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_9__["MatListModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_10__["MatStepperModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatMenuModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_13__["MatExpansionModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_14__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSliderModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSelectModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_15__["MatProgressBarModule"],
                angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HighlightJsModule"].forRoot({
                    provide: angular_highlight_js__WEBPACK_IMPORTED_MODULE_18__["HIGHLIGHT_JS"],
                    useFactory: highlightJsFactory
                }),
                _Catalogos_router__WEBPACK_IMPORTED_MODULE_16__["CatalogosRouterModule"]
            ],
            declarations: [
                _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_21__["Clientes"],
                _empleados_empleados_component__WEBPACK_IMPORTED_MODULE_20__["Empleados"],
                _etiquetas_etiquetas_component__WEBPACK_IMPORTED_MODULE_22__["EtiquetasPersonalizadas"],
                _impuestos_impuestos_component__WEBPACK_IMPORTED_MODULE_23__["Impuestos"],
                _ilocales_ilocales_component__WEBPACK_IMPORTED_MODULE_24__["ImpuestosLocales"],
                _mplantillas_mplantillas_component__WEBPACK_IMPORTED_MODULE_25__["PlantillasPDF"],
                _productos_productos_component__WEBPACK_IMPORTED_MODULE_26__["Productos"]
            ],
            providers: [
                _services_cprod_npro_service__WEBPACK_IMPORTED_MODULE_27__["CProdNProService"]
            ],
            exports: []
        })
    ], CatalogosModule);
    return CatalogosModule;
}());



/***/ }),

/***/ "./src/app/Catalogos/Catalogos.router.ts":
/*!***********************************************!*\
  !*** ./src/app/Catalogos/Catalogos.router.ts ***!
  \***********************************************/
/*! exports provided: CatalogosRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CatalogosRouterModule", function() { return CatalogosRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./clientes/clientes.component */ "./src/app/Catalogos/clientes/clientes.component.ts");
/* harmony import */ var _empleados_empleados_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./empleados/empleados.component */ "./src/app/Catalogos/empleados/empleados.component.ts");
/* harmony import */ var _etiquetas_etiquetas_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./etiquetas/etiquetas.component */ "./src/app/Catalogos/etiquetas/etiquetas.component.ts");
/* harmony import */ var _impuestos_impuestos_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./impuestos/impuestos.component */ "./src/app/Catalogos/impuestos/impuestos.component.ts");
/* harmony import */ var _ilocales_ilocales_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./ilocales/ilocales.component */ "./src/app/Catalogos/ilocales/ilocales.component.ts");
/* harmony import */ var _mplantillas_mplantillas_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mplantillas/mplantillas.component */ "./src/app/Catalogos/mplantillas/mplantillas.component.ts");
/* harmony import */ var _productos_productos_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./productos/productos.component */ "./src/app/Catalogos/productos/productos.component.ts");










var CatalogosRoutes = [
    { path: 'clientes', component: _clientes_clientes_component__WEBPACK_IMPORTED_MODULE_3__["Clientes"], data: { animation: 'clientes' } },
    { path: 'empleados', component: _empleados_empleados_component__WEBPACK_IMPORTED_MODULE_4__["Empleados"], data: { animation: 'empleados' } },
    { path: 'etiquetas', component: _etiquetas_etiquetas_component__WEBPACK_IMPORTED_MODULE_5__["EtiquetasPersonalizadas"], data: { animation: 'etiquetas' } },
    { path: 'impuestos', component: _impuestos_impuestos_component__WEBPACK_IMPORTED_MODULE_6__["Impuestos"], data: { animation: 'impuestos' } },
    { path: 'ilocales', component: _ilocales_ilocales_component__WEBPACK_IMPORTED_MODULE_7__["ImpuestosLocales"], data: { animation: 'ilocales' } },
    { path: 'mplantillas', component: _mplantillas_mplantillas_component__WEBPACK_IMPORTED_MODULE_8__["PlantillasPDF"], data: { animation: 'mplantillas' } },
    { path: 'productos', component: _productos_productos_component__WEBPACK_IMPORTED_MODULE_9__["Productos"], data: { animation: 'productos' } },
    { path: '', redirectTo: '/buttons', pathMatch: 'full', }
];
var CatalogosRouterModule = /** @class */ (function () {
    function CatalogosRouterModule() {
    }
    CatalogosRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(CatalogosRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], CatalogosRouterModule);
    return CatalogosRouterModule;
}());



/***/ }),

/***/ "./src/app/Catalogos/clientes/clientes.component.html":
/*!************************************************************!*\
  !*** ./src/app/Catalogos/clientes/clientes.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div><h1>clientes</h1></div>\n<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"button-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"button-header\">\n\t\t\t<h1 class=\"mat-headline center-align\">Generar CFDI 3.3</h1>\n\t\t</mat-toolbar>\n\t\n\t\t<div class=\"button-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">Raised Buttons</h4>\n\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-raised-button>Basic</button>\n\t\t\t\t    <button mat-raised-button color=\"primary\">Primary</button>\n\t\t\t\t    <button mat-raised-button color=\"accent\">Accent</button>\n\t\t\t\t    <button mat-raised-button color=\"warn\">Warn</button>\n\t\t\t\t    <button mat-raised-button disabled>Disabled</button>\n\t\t\t\t    <a mat-raised-button routerLink=\".\">Link</a>\t\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">Primary Buttons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\n\t\t\t\t\t<button mat-button >Basic</button>\n\t                <button mat-button color=\"primary\">Primary</button>\n\t                <button mat-button color=\"accent\">Accent</button>\n\t                <button mat-button color=\"warn\">Warn</button>\n\t                <button mat-button disabled>Disabled</button>\n\t                <a mat-button routerLink=\".\">Link</a>\t\t           \n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">Fab Buttons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-fab>Basic</button>\n\t                <button mat-fab color=\"primary\">Primary</button>\n\t                <button mat-fab color=\"accent\">Accent</button>\n\t                <button mat-fab color=\"warn\">Warn</button>\n\t                <button mat-fab disabled>Disabled</button>\n\t                <button mat-fab>\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <a mat-fab routerLink=\".\">Link</a>\t\n\t\t\t\t\t\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">Icon Buttons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-icon-button >\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <button mat-icon-button color=\"primary\">\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <button mat-icon-button color=\"accent\">\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <button mat-icon-button color=\"warn\">\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <button mat-icon-button disabled>\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\t\t\t           \n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-1 center-align\">MiniFab Buttons</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-mini-fab >Basic</button>\n\t                <button mat-mini-fab color=\"primary\">Primary</button>\n\t                <button mat-mini-fab color=\"accent\">Accent</button>\n\t                <button mat-mini-fab color=\"warn\">Warn</button>\n\t                <button mat-mini-fab disabled>Disabled</button>\n\t                <button mat-mini-fab>\n\t                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t                </button>\n\t                <a mat-mini-fab routerLink=\".\">Link</a>\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t\t\t           \n\t\t\t\t\t\n\t\t\t\t</div>\n\t\t\t</div>\n\n\t\t\t\t\t\t\n\n\t\t</div>\n\n\t</div>\n\n\t<div fxFlex class=\"button-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"button-header\" >\n\t\t\t<h1 class=\"mat-headline\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"buttonHelpers?.tsSourceRaisedButton\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"buttonHelpers?.htmlSourceRaisedButton\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<button mat-raised-button>Basic</button>\n\t\t\t\t\t<button mat-button color=\"primary\">Primary</button>\n\t\t\t\t\t<button mat-icon-button color=\"accent\">\n\t\t            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t\t                </button>\n\t\t\t\t  \t<button mat-raised-button disabled>Disabled</button>\n\t\t            <button mat-mini-fab>\n\t\t            <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n\t\t                </button>\n\t\t\t\t  \t<a mat-button routerLink=\".\">Link</a>\n\t\t\t  \t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/Catalogos/clientes/clientes.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Catalogos/clientes/clientes.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".button-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.button-container {\n  padding: 5px 15px 15px 15px; }\n\n.button-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.button-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.button-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0NhdGFsb2dvcy9jbGllbnRlcy9jbGllbnRlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVmO0VBQ0MsMkJBQTJCLEVBQUE7O0FBRTVCO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUZ4QjtJQUtFLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBTmhCO0lBVUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9DYXRhbG9nb3MvY2xpZW50ZXMvY2xpZW50ZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYnV0dG9uLWhlYWRlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG5cdGNvbG9yOiB3aGl0ZTtcblx0cGFkZGluZzogMCA1cHg7XG59XG4uYnV0dG9uLWNvbnRhaW5lciB7XG5cdHBhZGRpbmc6IDVweCAxNXB4IDE1cHggMTVweDtcbn1cbi5idXR0b24tY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG5cbiJdfQ== */"

/***/ }),

/***/ "./src/app/Catalogos/clientes/clientes.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Catalogos/clientes/clientes.component.ts ***!
  \**********************************************************/
/*! exports provided: Clientes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Clientes", function() { return Clientes; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Catalogos/clientes/helpers.data.ts");



// import { fadeAnimation } from '../animation';
var Clientes = /** @class */ (function () {
    function Clientes() {
        this.buttonHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["BUTTON_HELPERS"];
    }
    Clientes.prototype.ngOnInit = function () {
    };
    Clientes.prototype.getRouterOutletState = function (outlet) {
        return outlet.isActivated ? outlet.activatedRoute : '';
    };
    Clientes = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-buttons',
            template: __webpack_require__(/*! ./clientes.component.html */ "./src/app/Catalogos/clientes/clientes.component.html"),
            styles: [__webpack_require__(/*! ./clientes.component.scss */ "./src/app/Catalogos/clientes/clientes.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Clientes);
    return Clientes;
}());



/***/ }),

/***/ "./src/app/Catalogos/clientes/helpers.data.ts":
/*!****************************************************!*\
  !*** ./src/app/Catalogos/clientes/helpers.data.ts ***!
  \****************************************************/
/*! exports provided: BUTTON_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUTTON_HELPERS", function() { return BUTTON_HELPERS; });
var BUTTON_HELPERS = {
    tsSourceRaisedButton: "\n \t\timport { MatButtonModule } from '@angular/material/button';\n\n\t  \t@NgModule({\n\t\t  imports: [\n\t\t    MatButtonModule,\n\t\t})\n\t\texport class AppModule { }\n\n\t\timport { Component, OnInit } from '@angular/core';\n\n        @Component({\n          selector: 'cdk-buttons',\n          templateUrl: './buttons.component.html',\n          styleUrls: ['./buttons.component.scss']\n        })\n        export class ButtonsComponent implements OnInit {\n        }\n\n\t\t".trim(),
    htmlSourceRaisedButton: "\n  \t\t\n\t\t  <button mat-raised-button>Basic</button>\n\t\t  <button mat-button color=\"primary\">Primary</button>\n\t\t  <button mat-icon-button color=\"accent\">\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n                </button>\n\t\t  <button mat-raised-button disabled>Disabled</button>\n                <button mat-mini-fab>\n                <mat-icon aria-label=\"Example icon-button with a heart icon\">favorite</mat-icon>\n                </button>\n\t\t  <a mat-button routerLink=\".\">Link</a>\n\t\t".trim(),
};


/***/ }),

/***/ "./src/app/Catalogos/empleados/empleados.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Catalogos/empleados/empleados.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\t<!-- Primer panel Emisor -->   \n\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t\t<div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Emisor</font></div>\n\t\t\t\t\t<div class=\"panel-body d-flex justify-content-center\"> \n\t\n\t\t\t\t\t\n\t\t\t\t\t<form #emisorForm=\"ngForm\" (ngSubmit)=\"addEmisor\n\t\t\t\t\t\t(emisorForm)\">\n\t\t\t\t\t\t<input type=\"hidden\" name=\"idEmisor\" #_idEmisor=\"ngModel\" [(ngModel)]=\"emisorService.selectedEmisor.idEmisor\">\n\t\t\t\t\t\t <div>\n\t\t\t\t\t\t\t\t\t<input name=\"emisor\" #name=\"ngModel\" [(ngModel)]=\"emisorService.selectedEmisor.emisor\"\n\t\t\t\t\t\t\t\t\t type=\"checkbox\" value=\"\"><label>Agregar emisor</label>\n\t\t\t\t\t\t </div>\n\t\t\t\t\t\n\t\t\t\t\t\t\t<div class=\"c\"><p>\n\t\n\t\t\t\t\t\t\t <form>\n\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t <div class=\"form-group col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t<font>\n\t\t\t\t\t\t\t\t\t\t\tCURP:\n\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"curp\" #name=\"ngModel\" [(ngModel)]=\"emisorService.selectedEmisor.curp\" \n\t\t\t\t\t\t\t\t\t\t type=\"text\" class=\"form-control\" placeholder=\"AAAA010203MPLBCD11\"> \n\t\t\t\t\t\t\t\t        </div> \n\t\t\t\t\t\t\t\t </div>\n\n\t\t\t\t\t\t\t\t <div class=\"form-group col-lg-4\">\n\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t<font>\n\t\t\t\t\t\t\t\t\t\t\tRegistro patronal:\n\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"rPatronal\" #name=\"ngModel\" [(ngModel)]=\"emisorService.selectedEmisor.rPatronal\"\n\t\t\t\t\t\t\t\t\t\t type=\"text\" class=\"form-control\" placeholder=\"Registro patronal\">\n\t\t\t\t\t\t\t\t\t\t</div>\t\n\t\t\t\t\t\t\t\t </div>\n\n\t\t\t\t\t\t\t\t <div class=\"form-group col-lg-4\">\n\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t<font>\n\t\t\t\t\t\t\t\t\t\t\tRFC patrón de origen:\n\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"rfcOrigen\" #name=\"ngModel\" [(ngModel)]=\"emisorService.selectedEmisor.rfcOrigen\" \n\t\t\t\t\t\t\t\t\t\t type=\"text\" class=\"form-control\" placeholder=\"AAAA010203AAA\">\n\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"sncf\" #name=\"ngModel\" [(ngModel)]=\"emisorService.selectedEmisor.sncf\"\n\t\t\t\t\t\t\t\t\t\t type=\"checkbox\" class=\"form-control\">\n\t\t\t\t\t\t\t\t\t\t<h6>Agregar Entidad Sistema Nacional de Coordinación Fiscal(SNFC)</h6>\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t </form>\t\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t</form>\n\t\t\t\t\t</div>\n\t\t\t</div>\n\t\t\t\t\n\t\t\t\n\t<!--Segundo panel Empleado-->\n\t<div class=\"panel panel-primary\">\n\t\t<div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Empleado</font></div>\n\t\t\t <div class=\"panel-body d-flex justify-content-center\">\n\t\t\t\t\t<div class=\"c\"> <p></p>\n\n\t\t\t\t\t\t\t<form>\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">       \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-5\">        \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-7 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"activo\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.activo\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\" class=\"form-control\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\"> Activo</font> \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>                    \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">   \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-5\">                 \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-7\">                  \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>    \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">           \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-5\">                  \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>   \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t</div> \n\t\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">       \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-7 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"domEmpleado\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.domEmpleado\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"checkbox\" class=\"form-control\" >\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\">Llenar domicilio del empleado</font> \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>                    \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">   \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-7\">          \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>    \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">           \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-7\">         \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>   \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">       \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t >*RFC empleado\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"rfcEmpleado\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.rfcEmpleado\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t type=\"text\" class=\"form-control\" placeholder=\"AAAA010203AAA\" maxlength=\"13\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>                    \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">   \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *Nombre empleado:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </font>    \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"nomEmpleado\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.nomEmpleado\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Nombre empleado\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>    \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">           \n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t E-Mail:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>    \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"email\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.email\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"ejemplo@sucorreo.com\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>   \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *No. empleado:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"noEmpleado\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.noEmpleado\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Número del empleado\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>    \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *CURP\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>:   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"curpEmp\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.curp\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"AAAA010203MPLBCD11\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>     \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *Tipo de nómina:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select class=\"custon-select form-control\" name=\"tnomina\"#name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.tNomina\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\" disabled selected>Sin Selección</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"ordinaria\">O-Nomina ordinaria</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"extraordinaria\">E-Nomina extraordinaria</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>  \n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\" >\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *Periodicidad del pago:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select name=\"perioPago\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.perioPago\"\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\tstyle=\"width:155%\" class=\"custon-select form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"option\" value=\"\" disabled selected>Sin Selección</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"diario\">01 Diario</option> \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"semanal\">02 Semanal</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"catorcenal\">03 Catorcenal</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"quincenal\">04 Quincenal</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"mensual\">05 Mensual</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"bimestral\">06 Bimestral</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"unidad\">07 Unidad obra</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"comision\">08 Comision</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"precio\">09 Precio alzado</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"docenal\">10 Docenal</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"otro periodicidad\">99 Otra periodicidad</option>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *Entidad federativa:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select name=\"entFederativa\" #name=\"ngModel\" [(ngModel)]=\"empleadoService.selectedEmpleado.entFederativa\" style=\"width:155%\" class=\"custon-select form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\" disabled selected>Sin Selección</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"aguasCalientes\">Aguas Calientes</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"bajaCalifornia\">Baja California</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"bajaCaliSur\">Baja California Sur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">MEX Campeche</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Chiapas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Chihuahua</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Coahila</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Colima</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Ciudad de Mexico</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Durango</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Guanajuato</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Guerrero</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Hidalgo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Jalisco</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Estado de Mexico</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Michoacan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Morelos</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nayarit</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nuevo Leon</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Oaxaca</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Puebla</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Queretaro</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Quintana Roo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>San Luis Potosi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Sinaloa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Sonora</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Tabasco</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Tamaulipas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Tlaxcala</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Veracruz</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Yucatan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Zacatecas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>USA Alabama</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Alaska</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Arizona</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Arkansas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>California</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Carolina del norte</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Carolina del Sur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Colorado</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Connecticut</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Dakota del Norte</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Dakota del Sur</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Delaware</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Florida</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Georgia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Hawai</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Idaho</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Lllinois</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>indiana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>lowa</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Kansas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Kentucky</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Luisiana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Maine</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Maryland</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Massachusetts</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Michigan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Minnesota</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Misisipi</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Misuri</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Montana</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nebraska</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nevada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nueva Jersey</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nueva York</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nuevo Hampshire</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nuevo Mexico</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Ohio</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Oklahoma</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Oregon</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Pensilvania</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Rhode Island</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Tennessee</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Texas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Utah</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Vermont</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Virginia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Virginia Occidental</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Whashington</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Wisconsin</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Wyoming</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>CAN Ontario</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Quebec</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nueva Escocia</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nuevo Brunswick</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Manitoba</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Columbia Britanica</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Isla del Principe Eduardo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Saskatchewan</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Alberta</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Terranova y Labrador</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Territorio del Noroeste</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Yukon</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>Nuvavut</option>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *Tipo de contrato:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select class=\"custon-select form-control\" name=\"contarto\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\" disabled selected>Sin Selección</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"indeterminado\">01 Contrato de trabajo por tiempo indeterminado</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"determinada\">02 Contrato de trabajo por obra determinada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"tiempo\">03 Contrato de trabajo por tiempo determinado</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"temporada\">04 Contrato de trabajo por temporada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"prueba\">05 Contrato de trabajo sujeto a prueba</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"inicial\">06 Contrato de trabajo con capacitacion inicial</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"hora\">07 Modalidad de contratacion por pago de hora laborada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"comision\">08 Modalidad de trabajo por comision laboral</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"modalidad\">09 Modalidades de contratacion donde no existe relacion de trabajo</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"Jubilacion\">10 Jubilacion, pension, retiro</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option id=\"otro contrato\">99 Otro contrato</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select> \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t \n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"2\" class=\"r\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *Tipo de régimen:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select class=\"custon-select form-control\" name=\"regimen\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\" disabled selected>Sin Selección</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">02 Sueldos</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">03 Jubilados</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">04 Pensionados</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">05 Asimilados Miembros Sociedades Cooperativas Produccion</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">06 Asimilados Integrantes Sociedades Asocioaciones Civiles</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">07 Asimilidados Miembros Consejos</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">08 Asimilados Comisionistas</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">09 Asimilados Honorarios</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">10 Asimilidados Acciones</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">11 Asimilados Otros</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">12 Jubilados o Pensionados</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">99 Otro regimen</option>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t NSS:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"nss\" type=\"text\" class=\"form-control\" placeholder=\"Número de seguro social\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Salario base, cuotas y aportaciones:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"sbcAporta\" type=\"text\" class=\"form-control\" placeholder=\"0.00\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>                   \n\t\t\t\t\t\t\t\t\t\t\t </div> \n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Riesgo del puesto:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select name=\"rPuesto\" style=\"width:155%\" class=\"custon-select form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\" disabled selected>Sin Selección</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">1 Clase I</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">2 Clase II</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">3 Clase III</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">4 Clase IV</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">5 Clase V</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">No aplica</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t *Salario diario integrado:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>  \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"sdIntegrado\" type=\"text\" class=\"form-control\" placeholder=\"0.00\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Tipo de jornada:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select name=\"tJornada\" style=\"width:155%\" class=\"custon-select form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\" disabled selected>Sin Selección</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">01.- Diurna</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">02.- Nocturna</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">03.- Mixta</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">04.- Por hora</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">05.- Reducida</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">06.- Continuada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">07.- Partida</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">08.- Por turnos</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">99.- Otra jornada</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>                   \n\t\t\t\t\t\t\t\t\t\t\t </div> \n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Departamento:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"departamento\" type=\"text\" class=\"form-control\" placeholder=\"Departamento empleado\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Puesto:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"puesto\" type=\"text\" class=\"form-control\" placeholder=\"Puesto empleado\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Sindicalizado:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select name=\"sindicalizado\" style=\"width:155%\" class=\"custon-select form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\" disabled selected>Sin Seleccionar</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">SI</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\">NO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>                   \n\t\t\t\t\t\t\t\t\t\t\t </div>  \n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"row\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Cuenta bancaria:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <input name=\"cBancaria\" type=\"text\" class=\"form-control\" placeholder=\"123456789012345678\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Banco:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <select name=\"banco\" style=\"width:155%\" class=\"custon-select form-control\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option value=\"\" disabled selected>Sin Selección</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>002 BANAMEX</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>006 BANCOMEXT</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>009 BANCOBRAS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>012 BBVA BANCOMER</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>014 SANTANDER</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>019 BANJERCITO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>021 HSBC</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>030 BAJIO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>032 IXE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>036 INBURSA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>037 INTERACCIONES</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>042 MIFEL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>044 SCOTIABANK</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>058 BANREGIO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>059 INVEX</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>060 BANSI</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>062 AFIRME</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>072 BANORTE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>102 THE ROYAL BANK</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>103 AMERICAN EXPRESS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>106 BAMSA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>108 TOKIO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>110 JP MORGAN</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>112 BMONEX</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>113 VE POR MAS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>116 ING</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>124 DEUTSCHE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>126 CREDIT SUISSE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>127 AZTECA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>128 AUTOFIN</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>129 BARCLAYS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>130 COMPARTAMOS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>131 BANCO FAMSA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>132 BMULTIVA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>133 ACTINVER</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>134 WAL-MART</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>135 NAFIN</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>136 INTERBANCO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>137 BANCOPPEL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>138 ABC CAPITAL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>139 UBS BANK</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>140 CONSUBANCO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>141 VOLKSWAGEN</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>143 CIBANCO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>145 BBASE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>147 BANKAOOL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>148 PAGATODO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>149 FORJADORES</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>150 INMOBILIARIO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>151 DONDE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>152 BANCREA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>153 PROGRESO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>154 BANCO FINTERRA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>155 ICBC</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>156 SABADELL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>157 SHINHAN</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>158 MIZUHO BANK</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>159 BANK OF CHINA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>160 BANCO S3</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>166 BANSEFI</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>168 HIPOTECARIA FEDERAL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>600 MONEXCB</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>601 GBM</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>602 MASARI</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>605 VAKUE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>606 ESTRUCTURADORES</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>607 TIBER</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>608 VECTOR</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>610 B&B</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>614 ACCIVAL</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>615 MERRILL LYNCH</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>616 FINAMEX</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>617 VALMEX</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>618 UNICA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>619 MAPFRE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>620 PROFUTURO</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>621 CB ACTINVER</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>622 OACTIN</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>623 SKANDIA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>626 CBDEUTSCHE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>627 ZURICH</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>628 ZURICHVI</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>629 SU CASITA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>630 CB INTERCAM</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>631 CI BOLSA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>632 BULLTICK CB</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>633 STERLING</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>634 FINCOMUN</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>636 HDI SEGUROS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>637 ORDER</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>638 AKALA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>640 CB JPMORGAN</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>642 REFOMRA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>646 STP</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>647 TELECOMM</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>648 EVERCORE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>649 SKANDIA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>651 SEGMTY</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>652 ASEA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>653 KUSPIT</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>655 SOFIEXPRESS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>656 UNAGRA</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>659 OPCIONES EMPRESARIALES DEL NOROESTE</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>670 LIBERTAD</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>901 CLS</option>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <option>902 INDEVAL</option>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t </select> \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-lg-4 form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t <font size=\"1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t Fecha inicio relación laboral:\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</font>   \n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" type=\"date\" name=\"fecha\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t </div>                   \n\t\t\t\t\t\t\t\t\t\t\t </div> \n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t </form> <br>\n\t\t\t\t\t</div> \n\t\t\t\t\t\n\t\t\t </div>\n\t\n\t\t\t <form class=\"form-inline\" role=\"form\">\n\t\t\t\t\t<div class=\"form-group col-lg-3\">\n\t\t\t\t\t\t<input name=\"aSubcontra\" type=\"checkbox\" class=\"form-control\"><h6>Agregar subcontratación</h6><br><br>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-lg-3\">\n\t\t\t\t\t \n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-lg-3\">\n\t\t\t\t\t\t\t \n\t\t\t\t\t</div><br>\n\t\t\t\t\t<div class=\"form-group col-lg-3\">\n\t\t\t\t\t\t\t\n\t\t\t\t\t</div> \n\t\t\t\t</form>\n\t\n\t\n\t\t\t\t <form class=\"form-inline\" role=\"form\">\n\t\t\t\t\t<div class=\"form-group col-lg-3\">\n\t\t\t\t\t\t\n\t\t\t\t\t\t<input name=\"aPercepciones\" type=\"checkbox\" class=\"form-control\"><h6> Agregar percepciones</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-lg-3\">\n\t\t\t\t\t\t<input name=\"aDeducciones\" type=\"checkbox\" class=\"form-control\"><h6> Agregar deducciones:</h6>\n\t\t\t\t\t</div>\n\t\t\t\t\t<div class=\"form-group col-lg-3\">\n\t\t\t\t\t\t\t<input name=\"aPagos\" type=\"checkbox\" class=\"form-control\"><h6> Agregar otros pagos</h6> \n\t\t\t\t\t</div><br>\n\t\t\t\t\t<div class=\"form-group col-lg-3\">\n\t\t\t\t\t\t\t<input name=\"aIncapacidades\" type=\"checkbox\" class=\"form-control\"><h6> Agregar incapacidades</h6>\n\t\t\t\t\t</div> \n\t\t\t\t</form>\n\t\n\t\n\t</div>\n\t\t\n<!------------------------------------Tercer panel Totales----------------------------------------------->   \n\t\t\t\t\t\t<div class=\"panel panel-primary\">\n\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Totales</font></div>\n\t\n\t\t\t\t\t\t\t\t\t<div class=\"panel-body\"> \n\t\t\t\t\t\t\t\t\t<div class=\"form-horizontal\">\n\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 control-label\">Total de percepciones:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"tPercepciones\" id=\"tPercepciones\" class=\"form-control\" type=\"text\" placeholder=\"0.00\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-sm-3 control-label\">Subtotal:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-1\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-sm-4 control-label\">0.00</label><p></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 for=\"MainContent_text_reg_cp\" class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 control-label\">Total de deducciones</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"tDeducciones\" id=\"tDeducciones\" class=\"form-control\" type=\"text\" placeholder=\"0.00\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-sm-3 control-label\">Descuento:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-sm-4 control-label\">0.00</label><p></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 for=\"MainContent_text_reg_cp\" class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 control-label\">Total de otros de pagos</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"toPagos\" id=\"toPagos\" class=\"form-control\" type=\"text\" placeholder=\"0.00\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>    \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-sm-3 control-label\">Total:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-lg-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-sm-4 control-label\">0.00</label><p></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\n<!--------------------------------------- Cuarto panel---------------------------------------->    \n\t\t\t\t\t\t\t <div class=\"panel panel-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\" id=\"panels\"></div>\n\t\t\t\t\t\t\t\t\t\t\t <div id=\"panel\" class=\"panel-body\">\n\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t <button id=\"btn1\" type=\"button\" class=\"btn btn-secondary\" style=\"margin-left: 4px;\">Regresar</button>\n\t\t\t\t\t\t\t\t\t\t\t\t &nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t <button id=\"btn2\" type=\"button\" class=\"btn btn-secondary\">Limpiar</button>\n\t\t\t\t\t\t\t\t\t\t\t\t &nbsp;\n\t\t\t\t\t\t\t\t\t\t\t\t <button id=\"btn3\" type=\"button\" class=\"btn btn-success\">Agregar</button>\n\t\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\n<!-------------------------------------------Quinto panel Filtrado Empleado------------------------->\n\t\t\t\t\t\t\t\t <div class=\"panel panel-primary\">\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Filtrado de empleados 1.2</font></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<form>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 control-label\">RFC:</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"rfc2\" id=\"rfc2\" type=\"text\" placeholder=\"AAAA010203AAA\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 for=\"MainContent_text_reg_cp\" class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 control-label\">Nombre:</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"nombreEmp\" id=\"nombreEmp\" type=\"text\" placeholder=\"Nombre del empleado\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<h6 for=\"MainContent_text_reg_cp\" class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5 control-label\">No. empleado:</h6>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<input class=\"form-control\" name=\"noEmpleado\" id=\"noEmpleado\" type=\"text\" placeholder=\"Número del empleado\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t</form>  \n\t\t\t\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t\t </div>\n\t\n\t\n<!-----------------------------------------Sexto panel Catalogo empleado----------------------------->\n\t\t\t\t\t\t\t\t <div class=\"panel panel-primary\">\n\t\t\t\t\t\t\t\t\t <div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Catálogo de empleados 1.2</font></div>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"panel-body\"> \n\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\">Agregar empleado</button> <p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"table\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<table id=\"tabla2\" border=\"1\" class=\"table table-resposive\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Activo</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>RFC</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Nombre</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>No. de empleado</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<th>Edit/Delete</th>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"Activo\">1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"RFC\">CANA860507RI8</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"Nombre\">NA GISELA CASTILLO NAVA</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"No. De empleado\">5</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"Edit/Delete\"><i class=\"fas fa-pencil-alt\" style=\"font-size: 15px;\"></i> &nbsp; <i class=\"fas fa-trash-alt\" style=\"font-size: 15px;\"></i></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"Activo\">1</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"RFC\">CANA860507RI8</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"Nombre\">NA GISELA CASTILLO NAVA</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"No. De empleado\">5</td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<td data-th=\"Edit/Delete\"><i class=\"fas fa-pencil-alt\" style=\"font-size: 15px;\"></i> &nbsp; <i class=\"fas fa-trash-alt\" style=\"font-size: 15px;\"></i></td>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</tr>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</table>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\n\t\n\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-horizontal\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<label>Pagina 1 de 1, 6 registros</label>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-4 right\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-circle\" id=\"btn1\"><i class=\"glyphicon glyphicon-backward\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-circle\" id=\"btn2\"><i class=\"glyphicon glyphicon-triangle-left\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-circle\" id=\"btn3\"><i class=\"glyphicon glyphicon-triangle-right\"></i></button>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button class=\"btn btn-default btn-circle\" id=\"btn4\"><i class=\"glyphicon glyphicon-forward\"></i></button> <p></p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<br>     \n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" id=\"btn5\">Exportar empleados</button> <p>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\t\t \n\t\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t </div>\n\t</div>\n\t"

/***/ }),

/***/ "./src/app/Catalogos/empleados/empleados.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Catalogos/empleados/empleados.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Table 2 */\n.table {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  table-layout: fixed; }\n.table caption {\n  font-size: 1.5em;\n  margin: .5em 0 .75em; }\n.table tr {\n  border: 1px solid #ddd;\n  padding: .35em; }\n.table th,\n.table td {\n  padding: .625em;\n  text-align: center;\n  font-size: 11px; }\n.table th {\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase; }\n.table th {\n  background-color: #2980B9; }\n.table tr:nth-child(odd) {\n  background-color: #85C1E9; }\n.table tr:nth-child(even) {\n  background-color: #AED6F1; }\n.rwd-table th {\n  font-size: 11px; }\n@media screen and (max-width: 600px) {\n  .table {\n    border: 0; }\n  .table caption {\n    font-size: 1.3em; }\n  .table thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n  .table tr {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: .625em; }\n  .table td {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: .8em;\n    text-align: right; }\n  .table td::before {\n    /*\n\t  * aria-label has no advantage, it won't be read inside a table\n\t  content: attr(aria-label);\n\t  */\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase; }\n  .table td:last-child {\n    border-bottom: 0; } }\n#btn1 {\n  float: right; }\n#btn2 {\n  float: right; }\n#btn3 {\n  float: right; }\n#btn4 {\n  float: right; }\n#btn5 {\n  float: right; }\nselect {\n  background: transparent;\n  border: none;\n  font-size: 12px;\n  height: 30px;\n  width: 250px; }\n#sele {\n  margin: 20px auto 40px auto;\n  border: 1px solid #d9d9d9;\n  height: 25px;\n  overflow: hidden;\n  width: 147px;\n  position: relative; }\n#boton {\n  float: right; }\n.c {\n  padding: 3px 10px;\n  border: #006666 solid;\n  border-radius: 20px; }\n#panels {\n  background-color: #333366; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0NhdGFsb2dvcy9lbXBsZWFkb3MvZW1wbGVhZG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DYXRhbG9nb3MvZW1wbGVhZG9zL2VtcGxlYWRvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFBO0FBQ0E7RUFDQyxzQkFBc0I7RUFDdEIseUJBQXlCO0VBQ3pCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsV0FBVztFQUNYLG1CQUFtQixFQUFBO0FBR2xCO0VBQ0QsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBO0FBR25CO0VBQ0Qsc0JBQXNCO0VBQ3RCLGNBQWMsRUFBQTtBQUdiOztFQUVELGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBO0FBSWQ7RUFDRCxnQkFBZ0I7RUFDaEIsb0JBQW9CO0VBQ3BCLHlCQUF5QixFQUFBO0FBR3hCO0VBQ0QseUJBQXlCLEVBQUE7QUFHeEI7RUFDRCx5QkFBeUIsRUFBQTtBQUd4QjtFQUNELHlCQUF5QixFQUFBO0FBR3hCO0VBQ0EsZUFBZSxFQUFBO0FBRWY7RUFDQTtJQUNDLFNBQVMsRUFBQTtFQUdYO0lBQ0UsZ0JBQWdCLEVBQUE7RUFHbEI7SUFDRSxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLFdBQVc7SUFDWCxZQUFZO0lBQ1osZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixrQkFBa0I7SUFDbEIsVUFBVSxFQUFBO0VBR1o7SUFDRSw2QkFBNkI7SUFDN0IsY0FBYztJQUNkLHFCQUFxQixFQUFBO0VBR3ZCO0lBQ0UsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxlQUFlO0lBQ2YsaUJBQWlCLEVBQUE7RUFHbkI7SUFDRTs7O0lDaEJDO0lEb0JELHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLHlCQUF5QixFQUFBO0VBRzNCO0lBQ0UsZ0JBQWdCLEVBQUEsRUFDakI7QUFJQTtFQUNBLFlBQVksRUFBQTtBQUlaO0VBQ0EsWUFBWSxFQUFBO0FBR1o7RUFDQSxZQUFZLEVBQUE7QUFHWDtFQUNGLFlBQVksRUFBQTtBQUdWO0VBQ0YsWUFBWSxFQUFBO0FBR1Y7RUFDRix1QkFBdUI7RUFDdkIsWUFBVztFQUNYLGVBQWU7RUFDZixZQUFZO0VBQ1osWUFBWSxFQUFBO0FBR1Y7RUFDRiwyQkFBMEI7RUFDekIseUJBQXdCO0VBQ3hCLFlBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGtCQUFpQixFQUFBO0FBR2hCO0VBQ0YsWUFBWSxFQUFBO0FBR1Y7RUFDRixpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBO0FBSWxCO0VBQ0QseUJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9DYXRhbG9nb3MvZW1wbGVhZG9zL2VtcGxlYWRvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFRhYmxlIDIgKi9cbi50YWJsZSB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG5cdGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdG1hcmdpbjogMDtcblx0cGFkZGluZzogMDtcblx0d2lkdGg6IDEwMCU7XG5cdHRhYmxlLWxheW91dDogZml4ZWQ7XG4gIH1cbiAgXG4gIC50YWJsZSBjYXB0aW9uIHtcblx0Zm9udC1zaXplOiAxLjVlbTtcblx0bWFyZ2luOiAuNWVtIDAgLjc1ZW07XG4gIH1cbiAgXG4gIC50YWJsZSB0ciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG5cdHBhZGRpbmc6IC4zNWVtO1xuICB9XG4gIFxuICAudGFibGUgdGgsXG4gIC50YWJsZSB0ZCB7XG5cdHBhZGRpbmc6IC42MjVlbTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDExcHg7XG4gIFxuICB9XG4gIFxuICAudGFibGUgdGgge1xuXHRmb250LXNpemU6IC44NWVtO1xuXHRsZXR0ZXItc3BhY2luZzogLjFlbTtcblx0dGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBcbiAgLnRhYmxlIHRoIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTtcblx0IH1cbiAgXG4gIC50YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4NUMxRTk7XG4gIH1cbiAgXG4gIC50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjQUVENkYxO1xuICB9XG4gIFxuICAucndkLXRhYmxlIHRoe1xuICBmb250LXNpemU6IDExcHg7XG4gIH1cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRhYmxlIHtcblx0ICBib3JkZXI6IDA7XG5cdH1cbiAgXG5cdC50YWJsZSBjYXB0aW9uIHtcblx0ICBmb250LXNpemU6IDEuM2VtO1xuXHR9XG5cdFxuXHQudGFibGUgdGhlYWQge1xuXHQgIGJvcmRlcjogbm9uZTtcblx0ICBjbGlwOiByZWN0KDAgMCAwIDApO1xuXHQgIGhlaWdodDogMXB4O1xuXHQgIG1hcmdpbjogLTFweDtcblx0ICBvdmVyZmxvdzogaGlkZGVuO1xuXHQgIHBhZGRpbmc6IDA7XG5cdCAgcG9zaXRpb246IGFic29sdXRlO1xuXHQgIHdpZHRoOiAxcHg7XG5cdH1cblx0XG5cdC50YWJsZSB0ciB7XG5cdCAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZGQ7XG5cdCAgZGlzcGxheTogYmxvY2s7XG5cdCAgbWFyZ2luLWJvdHRvbTogLjYyNWVtO1xuXHR9XG5cdFxuXHQudGFibGUgdGQge1xuXHQgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xuXHQgIGRpc3BsYXk6IGJsb2NrO1xuXHQgIGZvbnQtc2l6ZTogLjhlbTtcblx0ICB0ZXh0LWFsaWduOiByaWdodDtcblx0fVxuXHRcblx0LnRhYmxlIHRkOjpiZWZvcmUge1xuXHQgIC8qXG5cdCAgKiBhcmlhLWxhYmVsIGhhcyBubyBhZHZhbnRhZ2UsIGl0IHdvbid0IGJlIHJlYWQgaW5zaWRlIGEgdGFibGVcblx0ICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xuXHQgICovXG5cdCAgY29udGVudDogYXR0cihkYXRhLWxhYmVsKTtcblx0ICBmbG9hdDogbGVmdDtcblx0ICBmb250LXdlaWdodDogYm9sZDtcblx0ICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHR9XG5cdFxuXHQudGFibGUgdGQ6bGFzdC1jaGlsZCB7XG5cdCAgYm9yZGVyLWJvdHRvbTogMDtcblx0fVxuICB9ICAgXG4gIFxuICBcbiAgI2J0bjF7XG4gIGZsb2F0OiByaWdodDtcbiAgXG4gIH1cbiAgXG4gICNidG4ye1xuICBmbG9hdDogcmlnaHQ7O1xuICB9XG4gIFxuICAjYnRuM3sgXG4gIGZsb2F0OiByaWdodDtcbiAgIH1cbiAgXG4gICAjYnRuNHtcblx0ZmxvYXQ6IHJpZ2h0O1xuICAgfVxuICBcbiAgICNidG41e1xuXHRmbG9hdDogcmlnaHQ7XG4gICB9XG4gIFxuICAgc2VsZWN0e1xuXHRiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudDtcblx0Ym9yZGVyOm5vbmU7XG5cdGZvbnQtc2l6ZTogMTJweDtcblx0aGVpZ2h0OiAzMHB4O1xuXHR3aWR0aDogMjUwcHg7XG4gICB9XG4gIFxuICAgI3NlbGV7XG5cdG1hcmdpbjoyMHB4IGF1dG8gNDBweCBhdXRvOyBcblx0IGJvcmRlcjoxcHggc29saWQgI2Q5ZDlkOTtcblx0IGhlaWdodDoyNXB4O1xuXHQgb3ZlcmZsb3c6IGhpZGRlbjtcblx0IHdpZHRoOiAxNDdweDtcblx0IHBvc2l0aW9uOnJlbGF0aXZlO1xuICAgfVxuICBcbiAgICNib3Rvbntcblx0ZmxvYXQ6IHJpZ2h0OyBcbiAgIH1cbiAgXG4gICAuYyB7IFxuXHRwYWRkaW5nOiAzcHggMTBweDtcblx0Ym9yZGVyOiAjMDA2NjY2IHNvbGlkO1xuXHRib3JkZXItcmFkaXVzOiAyMHB4O1xuXHRcbiAgfVxuICBcbiAgI3BhbmVsc3tcblx0YmFja2dyb3VuZC1jb2xvcjogIzMzMzM2NiAgO1xuICB9IiwiLyogVGFibGUgMiAqL1xuLnRhYmxlIHtcbiAgYm9yZGVyOiAxcHggc29saWQgI2NjYztcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xuICB3aWR0aDogMTAwJTtcbiAgdGFibGUtbGF5b3V0OiBmaXhlZDsgfVxuXG4udGFibGUgY2FwdGlvbiB7XG4gIGZvbnQtc2l6ZTogMS41ZW07XG4gIG1hcmdpbjogLjVlbSAwIC43NWVtOyB9XG5cbi50YWJsZSB0ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IC4zNWVtOyB9XG5cbi50YWJsZSB0aCxcbi50YWJsZSB0ZCB7XG4gIHBhZGRpbmc6IC42MjVlbTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDExcHg7IH1cblxuLnRhYmxlIHRoIHtcbiAgZm9udC1zaXplOiAuODVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLnRhYmxlIHRoIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBCOTsgfVxuXG4udGFibGUgdHI6bnRoLWNoaWxkKG9kZCkge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVDMUU5OyB9XG5cbi50YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVENkYxOyB9XG5cbi5yd2QtdGFibGUgdGgge1xuICBmb250LXNpemU6IDExcHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnRhYmxlIHtcbiAgICBib3JkZXI6IDA7IH1cbiAgLnRhYmxlIGNhcHRpb24ge1xuICAgIGZvbnQtc2l6ZTogMS4zZW07IH1cbiAgLnRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4OyB9XG4gIC50YWJsZSB0ciB7XG4gICAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgbWFyZ2luLWJvdHRvbTogLjYyNWVtOyB9XG4gIC50YWJsZSB0ZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAuOGVtO1xuICAgIHRleHQtYWxpZ246IHJpZ2h0OyB9XG4gIC50YWJsZSB0ZDo6YmVmb3JlIHtcbiAgICAvKlxuXHQgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXG5cdCAgY29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcblx0ICAqL1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAudGFibGUgdGQ6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLWJvdHRvbTogMDsgfSB9XG5cbiNidG4xIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbiNidG4yIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbiNidG4zIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbiNidG40IHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbiNidG41IHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbnNlbGVjdCB7XG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xuICBib3JkZXI6IG5vbmU7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICB3aWR0aDogMjUwcHg7IH1cblxuI3NlbGUge1xuICBtYXJnaW46IDIwcHggYXV0byA0MHB4IGF1dG87XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkOWQ5ZDk7XG4gIGhlaWdodDogMjVweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDE0N3B4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7IH1cblxuI2JvdG9uIHtcbiAgZmxvYXQ6IHJpZ2h0OyB9XG5cbi5jIHtcbiAgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogIzAwNjY2NiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDsgfVxuXG4jcGFuZWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzM2NjsgfVxuIl19 */"

/***/ }),

/***/ "./src/app/Catalogos/empleados/empleados.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Catalogos/empleados/empleados.component.ts ***!
  \************************************************************/
/*! exports provided: Empleados */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Empleados", function() { return Empleados; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Catalogos/empleados/helpers.data.ts");



var Empleados = /** @class */ (function () {
    function Empleados() {
        this.listHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["LIST_HELPERS"];
        this.links = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["Links"];
        this.showMultiListCode = false;
        this.messages = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["Messages"];
    }
    Empleados.prototype.ngOnInit = function () {
    };
    Empleados = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-list',
            template: __webpack_require__(/*! ./empleados.component.html */ "./src/app/Catalogos/empleados/empleados.component.html"),
            styles: [__webpack_require__(/*! ./empleados.component.scss */ "./src/app/Catalogos/empleados/empleados.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Empleados);
    return Empleados;
}());



/***/ }),

/***/ "./src/app/Catalogos/empleados/helpers.data.ts":
/*!*****************************************************!*\
  !*** ./src/app/Catalogos/empleados/helpers.data.ts ***!
  \*****************************************************/
/*! exports provided: LIST_HELPERS, Messages, Links */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LIST_HELPERS", function() { return LIST_HELPERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Messages", function() { return Messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Links", function() { return Links; });
var LIST_HELPERS = {
    tsSourceSelectionList: "\n\t\timport { MatListModule } from '@angular/material';\n\t\t@NgModule({\n\t\t  imports: [\n\t\t   MatListModule\n\t\t})\n\t\texport class AppModule { }\n\t\t\n\t\timport { Component, OnInit } from '@angular/core';\n\t\t@Component({\n\t\t\t  selector: 'cdk-list',\n\t\t\t  templateUrl: './list.component.html',\n\t\t\t  styleUrls: ['./list.component.scss']\n\t\t})\n\t\texport class ListComponent implements OnInit {\n\n\t\t\t  constructor() { }\n\n\t\t\t  ngOnInit() {\n\t\t\t  }\n\t\t }\n\t".trim(),
    htmlSourceSelectionList: "\n\t<mat-selection-list #shoes>\n\t\t<mat-list-option *ngFor=\"let shoe of ['Boots', 'Sneaker', 'Casual']\">\n\t\t\t{{shoe}}\n\t\t</mat-list-option>\n\t</mat-selection-list>\n\t<p>\n\t\tOptions selected: {{shoes.selectedOptions.selected.length}}\n\t</p>\n\t".trim(),
};
var Messages = [
    { from: 'codetok', subject: 'client', content: 'hi there' },
    { from: 'client', subject: 'codetok', content: 'yes' },
    { from: 'jay', subject: 'tom', content: 'yes please' }
];
var Links = ['/home', '/admin'];
//export const shoetypes: Array<any> = ['Boots', 'Sneaker', 'Casual'];


/***/ }),

/***/ "./src/app/Catalogos/etiquetas/etiquetas.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Catalogos/etiquetas/etiquetas.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div fxLayout=\"column\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\" >\n\n\t<div fxFlex class=\"stepper-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"stepper-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Generar complementos pagos</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"stepper-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Basic Stepper</h4>\n\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<button mat-raised-button color=\"accent\" (click)=\"isLinear = !isLinear\" id=\"toggle-linear\">Toggle linear mode</button> \n\t\t\t\t\t<span *ngIf=\"isLinear\">Linear mode enabled</span>\n\n\t\t\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\" fxFlexfill>\n\t\t\t\t\t  <mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t\t\t    <form [formGroup]=\"firstFormGroup\">\n\t\t\t\t\t      <ng-template matStepLabel >Fill out your name</ng-template>\n\t\t\t\t\t      <mat-form-field>\n\t\t\t\t\t        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n\t\t\t\t\t      </mat-form-field>\n\t\t\t\t\t      <div>\n\t\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t\t      </div>\n\t\t\t\t\t    </form>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t  <mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t\t\t    <form [formGroup]=\"secondFormGroup\">\n\t\t\t\t\t      <ng-template matStepLabel>Fill out your address</ng-template>\n\t\t\t\t\t      <mat-form-field>\n\t\t\t\t\t        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n\t\t\t\t\t      </mat-form-field>\n\t\t\t\t\t      <div>\n\t\t\t\t\t        <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t\t      </div>\n\t\t\t\t\t    </form>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t  <mat-step>\n\t\t\t\t\t\t<ng-template matStepLabel>Done</ng-template>\n\t\t\t\t\t    You are now done.\n\t\t\t\t\t    <div>\n\t\t\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t\t    </div>\n\t\t\t\t\t  </mat-step>\n\t\t\t\t\t</mat-horizontal-stepper>\t           \n\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t</div>\t\t\n\n\t</div>\n\n\t<div fxFlex class=\"stepper-component-holder mat-elevation-z4\">\n\t<mat-toolbar class=\"stepper-header\">\n\t\t<h1 class=\"mat-headline\" >Examples</h1>\n\t</mat-toolbar>\n\n\t<mat-tab-group fxFlexFill>\n\t\t<mat-tab label=\"TS\">\n\t\t\t<div class=\"component-preview\">\n            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"stepperHelpers?.tsSourceRaisedButton\" language=\"typescript\"></code></pre>\n        \t</div>\n        </mat-tab>\n        <mat-tab label=\"HTML\">\n        \t<div class=\"component-preview\">\n            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"stepperHelpers?.htmlSourceRaisedButton\" language=\"html\"></code></pre>\n            </div>\n        </mat-tab>\n\n        <mat-tab label=\"PREVIEW\">\n        \t<div >\n\t        \t<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\n\t\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\">\n\t\t\t\t  <mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t\t    <form [formGroup]=\"firstFormGroup\">\n\t\t\t\t      <ng-template matStepLabel>Fill out your name</ng-template>\n\t\t\t\t      <mat-form-field>\n\t\t\t\t        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n\t\t\t\t      </mat-form-field>\n\t\t\t\t      <div>\n\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t      </div>\n\t\t\t\t    </form>\n\t\t\t\t  </mat-step>\n\t\t\t\t  <mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t\t    <form [formGroup]=\"secondFormGroup\">\n\t\t\t\t      <ng-template matStepLabel>Fill out your address</ng-template>\n\t\t\t\t      <mat-form-field>\n\t\t\t\t        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n\t\t\t\t      </mat-form-field>\n\t\t\t\t      <div>\n\t\t\t\t        <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t\t      </div>\n\t\t\t\t    </form>\n\t\t\t\t  </mat-step>\n\t\t\t\t  <mat-step>\n\t\t\t\t    <ng-template matStepLabel>Done</ng-template>\n\t\t\t\t    You are now done.\n\t\t\t\t    <div>\n\t\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t\t    </div>\n\t\t\t\t  </mat-step>\n\t\t\t\t</mat-horizontal-stepper>\n\t\t  \t</div>\n        </mat-tab>\n    </mat-tab-group>\n\n</div>"

/***/ }),

/***/ "./src/app/Catalogos/etiquetas/etiquetas.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Catalogos/etiquetas/etiquetas.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".stepper-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.stepper-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.stepper-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.stepper-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n.stepper-container {\n  padding: 5px 15px 15px 15px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0NhdGFsb2dvcy9ldGlxdWV0YXMvZXRpcXVldGFzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWhCO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUZ4QjtJQUtFLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBTmhCO0lBVUUsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0MsMkJBQTJCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9DYXRhbG9nb3MvZXRpcXVldGFzL2V0aXF1ZXRhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdGVwcGVyLWhlYWRlciB7XG5cdFx0YmFja2dyb3VuZC1jb2xvcjogIzMyN2ViZDtcblx0XHRjb2xvcjogd2hpdGU7XG5cdFx0cGFkZGluZzogMCA1cHg7XG5cdH1cbi5zdGVwcGVyLWNvbXBvbmVudC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcblxuXHRoNCB7XG5cdFx0Y29sb3I6ICMzMjdlYmQ7XG5cdFx0bWFyZ2luOiAxNHB4IDA7XG5cdH1cblxuXHRtYXQtZGl2aWRlciB7XG5cdFx0bWFyZ2luLWJvdHRvbTogMTBweDtcblx0fVxufVxuLnN0ZXBwZXItY29udGFpbmVyIHtcblx0cGFkZGluZzogNXB4IDE1cHggMTVweCAxNXB4O1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/Catalogos/etiquetas/etiquetas.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Catalogos/etiquetas/etiquetas.component.ts ***!
  \************************************************************/
/*! exports provided: EtiquetasPersonalizadas */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EtiquetasPersonalizadas", function() { return EtiquetasPersonalizadas; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _etiquetas_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./etiquetas.data */ "./src/app/Catalogos/etiquetas/etiquetas.data.ts");




var EtiquetasPersonalizadas = /** @class */ (function () {
    function EtiquetasPersonalizadas(formBuilder) {
        this.formBuilder = formBuilder;
        this.isLinear = false;
        this.stepperHelpers = _etiquetas_data__WEBPACK_IMPORTED_MODULE_3__["STEPPER_HELPERS"];
    }
    EtiquetasPersonalizadas.prototype.ngOnInit = function () {
        this.firstFormGroup = this.formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
        this.secondFormGroup = this.formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    EtiquetasPersonalizadas = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'cdk-stepper',
            template: __webpack_require__(/*! ./etiquetas.component.html */ "./src/app/Catalogos/etiquetas/etiquetas.component.html"),
            styles: [__webpack_require__(/*! ./etiquetas.component.scss */ "./src/app/Catalogos/etiquetas/etiquetas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], EtiquetasPersonalizadas);
    return EtiquetasPersonalizadas;
}());



/***/ }),

/***/ "./src/app/Catalogos/etiquetas/etiquetas.data.ts":
/*!*******************************************************!*\
  !*** ./src/app/Catalogos/etiquetas/etiquetas.data.ts ***!
  \*******************************************************/
/*! exports provided: STEPPER_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "STEPPER_HELPERS", function() { return STEPPER_HELPERS; });
var STEPPER_HELPERS = {
    tsSourceRaisedButton: "\n \t\timport { MatStepperModule } from '@angular/material/button';\n\n\t  \t@NgModule({\n\t\t  imports: [\n\t\t    MatStepperModule,\n\t\t})\n\t\texport class AppModule { }\n\t\t\n\t\timport { Component, OnInit } from '@angular/core';\n\n        @Component({\n          selector: 'cdk-stepper',\n          templateUrl: './stepper.component.html',\n          styleUrls: ['./stepper.component.scss']\n        })\n        export class CardsComponent implements OnInit {\n        }".trim(),
    htmlSourceRaisedButton: "\n  \t\t\n\t\t  \t<button mat-raised-button (click)=\"isLinear = true\" id=\"toggle-linear\">Enable linear mode</button>\n\t\t\t<mat-horizontal-stepper [linear]=\"isLinear\">\n\t\t\t  <mat-step [stepControl]=\"firstFormGroup\">\n\t\t\t    <form [formGroup]=\"firstFormGroup\">\n\t\t\t      <ng-template matStepLabel>Fill out your name</ng-template>\n\t\t\t      <mat-form-field>\n\t\t\t        <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\n\t\t\t      </mat-form-field>\n\t\t\t      <div>\n\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t      </div>\n\t\t\t    </form>\n\t\t\t  </mat-step>\n\t\t\t  <mat-step [stepControl]=\"secondFormGroup\">\n\t\t\t    <form [formGroup]=\"secondFormGroup\">\n\t\t\t      <ng-template matStepLabel>Fill out your address</ng-template>\n\t\t\t      <mat-form-field>\n\t\t\t        <input matInput placeholder=\"Address\" formControlName=\"secondCtrl\" required>\n\t\t\t      </mat-form-field>\n\t\t\t      <div>\n\t\t\t        <button mat-button matStepperPrevious>Back</button>\n\t\t\t        <button mat-button matStepperNext>Next</button>\n\t\t\t      </div>\n\t\t\t    </form>\n\t\t\t  </mat-step>\n\t\t\t  <mat-step>\n\t\t\t    <ng-template matStepLabel>Done</ng-template>\n\t\t\t    You are now done.\n\t\t\t    <div>\n\t\t\t      <button mat-button matStepperPrevious>Back</button>\n\t\t\t    </div>\n\t\t\t  </mat-step>\n\t\t\t</mat-horizontal-stepper>\n\t\t".trim(),
};


/***/ }),

/***/ "./src/app/Catalogos/ilocales/helpers.data.ts":
/*!****************************************************!*\
  !*** ./src/app/Catalogos/ilocales/helpers.data.ts ***!
  \****************************************************/
/*! exports provided: SPINNER_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SPINNER_HELPERS", function() { return SPINNER_HELPERS; });
var SPINNER_HELPERS = {
    tsSourceProgressSpinner: "\nimport { MatProgressSpinnerModule } from '@angular/material';\n    @NgModule({\n      imports: [\n       MatProgressSpinnerModule]\n    })\n    export class AppModule { }\n\nimport { Component, OnInit } from '@angular/core';\n\n@Component({\n  selector: 'cdk-spinner',\n  templateUrl: './spinner.component.html',\n  styleUrls: ['./spinner.component.scss']\n})\n\nexport class SpinnerComponent implements OnInit {\n\tshowProgressBarCode;\n\tshowSource;\n\t\tcolor = 'primary';\n\t  \tmode = 'determinate';\n\t  \tvalue = 50;\n\n}\n".trim(),
    htmlSourceProgressSpinner: "\n<div fxLayout=\"column\" fxLayoutGap=15px>\n    <section class=\"example-section\">\n          <label class=\"example-margin\">Color:</label>\n          <mat-radio-group [(ngModel)]=\"color\" fxLayout=\"column\"  fxLayoutGap=10px>\n            <mat-radio-button class=\"example-margin\" value=\"primary\">\n              Primary\n            </mat-radio-button>\n            <mat-radio-button class=\"example-margin\" value=\"accent\">\n              Accent\n            </mat-radio-button>\n               <mat-radio-button class=\"example-margin\" value=\"warn\">\n              Warn\n            </mat-radio-button>\n        </mat-radio-group>\n    </section>\n\n    <section class=\"example-section\">\n        <label class=\"example-margin\">Mode:</label>\n        <mat-radio-group [(ngModel)]=\"mode\" fxLayout=\"column\"  fxLayoutGap=10px>\n            <mat-radio-button class=\"example-margin\" value=\"determinate\">\n              Determinate\n            </mat-radio-button>\n            <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n              Indeterminate\n            </mat-radio-button>\n        </mat-radio-group>\n    </section>\n\n    <section class=\"example-section \" *ngIf=\"mode == 'determinate'\">\n        <label class=\"mat-subheading-2 center-align\">Progress:</label>\n        <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n    </section>\n</div>\n\n<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n    <h4 class=\"mat-subheading-2 center-align\">Result</h4>\n    <mat-divider></mat-divider>\n        \n    <mat-progress-spinner\n        class=\"example-margin\"\n        [color]=\"color\"\n        [mode]=\"mode\"\n        [value]=\"value\">\n    </mat-progress-spinner>\n</div>\n\n".trim(),
};


/***/ }),

/***/ "./src/app/Catalogos/ilocales/ilocales.component.html":
/*!************************************************************!*\
  !*** ./src/app/Catalogos/ilocales/ilocales.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" class=\"components-container-gt-xs\"   fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"spinner-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar class=\"spinner-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Generar comercio exterior 1.1</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"spinner-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Configurable Progress Spinner</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\n\t\t\t\t\t\n\t\t\t\t\t<div fxLayout=\"column\" fxLayoutGap=15px>\n\t\t    \t\t\t<section class=\"example-section\" fxLayout=\"row\">\n\t\t      \t\t\t\t<label class=\"example-margin\">Color:</label>\n\t      \t\t\t\t\t<mat-radio-group [(ngModel)]=\"color\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t        \t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\n\t\t\t\t          \t\tPrimary\n\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t        \t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\n\t\t\t\t          \t\tAccent\n\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t       \t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\n\t\t\t\t          \t\tWarn\n\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t     \t\t</mat-radio-group>\n\t\t     \t\t\t</section>\n\t\t    \t\n\t\t\t\t\t    <section class=\"example-section\" fxLayout=\"row\">\n\t\t\t\t\t\t    <label class=\"example-margin\">Mode:</label>\n\t\t\t\t\t\t    <mat-radio-group [(ngModel)]=\"mode\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n\t\t\t\t\t\t          Determinate\n\t\t\t\t\t\t        </mat-radio-button>\n\t\t\t\t\t\t        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n\t\t\t\t\t\t          Indeterminate\n\t\t\t\t\t\t        </mat-radio-button>\n\t\t\t\t\t\t    </mat-radio-group>\n\t\t\t\t\t    </section>\n\t\t\t\t\t</div>\n\t\t\t\t\t\t\n\n\t\t\t\t\t<section class=\"example-section \" *ngIf=\"mode == 'determinate'\">\n\t\t\t\t\t    <label class=\"mat-subheading-2 center-align\">Progress:</label>\n\t\t\t\t\t    <mat-slider class=\"example-margin\" [(ngModel)]=\"value\"></mat-slider>\n\t\t\t\t\t</section>\n\t\t\t\t</div>\n\n\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Result</h4>\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\n\t\t\t\t\t<mat-progress-spinner\n\t\t\t\t        class=\"example-margin\"\n\t\t\t\t        [color]=\"color\"\n\t\t\t\t        [mode]=\"mode\"\n\t\t\t\t        [value]=\"value\">\n\t\t\t\t    </mat-progress-spinner>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n\t\n\n\t<div fxFlex class=\"spinner-component-holder mat-elevation-z4\">\n\n\t\t<mat-toolbar  class=\"spinner-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"spinnerHelpers?.tsSourceProgressSpinner\" language=\"typescript\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"spinnerHelpers?.htmlSourceProgressSpinner\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t\t        <div class=\"component-preview\">\n\t\t        \t<div style=\"padding: 20px;\">\n\t\t        \t\t<div class=\"spinner-container\">\n\t\t\t\t\n\t\t\t\t\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\n\t\t\t\t\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Configurable Progress Spinner</h4>\n\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<div fxLayout=\"column\" fxLayoutGap=15px>\n\t\t\t\t\t\t    \t\t\t<section class=\"example-section\">\n\t\t\t\t\t\t      \t\t\t\t<label class=\"example-margin\">Color:</label>\n\t\t\t\t\t      \t\t\t\t\t<mat-radio-group [(ngModel)]=\"colors\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t        \t\t<mat-radio-button class=\"example-margin\" value=\"primary\">\n\t\t\t\t\t\t\t\t          \t\tPrimary\n\t\t\t\t\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t        \t\t<mat-radio-button class=\"example-margin\" value=\"accent\">\n\t\t\t\t\t\t\t\t          \t\tAccent\n\t\t\t\t\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t       \t\t\t<mat-radio-button class=\"example-margin\" value=\"warn\">\n\t\t\t\t\t\t\t\t          \t\tWarn\n\t\t\t\t\t\t\t\t        \t\t</mat-radio-button>\n\t\t\t\t\t\t\t\t     \t\t</mat-radio-group>\n\t\t\t\t\t\t     \t\t\t</section>\n\t\t\t\t\t\t    \t\n\t\t\t\t\t\t\t\t\t    <section class=\"example-section\">\n\t\t\t\t\t\t\t\t\t\t    <label class=\"example-margin\">Mode:</label>\n\t\t\t\t\t\t\t\t\t\t    <mat-radio-group [(ngModel)]=\"modes\" fxLayout=\"column\"  fxLayoutGap=10px>\n\t\t\t\t\t\t\t\t\t\t        <mat-radio-button class=\"example-margin\" value=\"determinate\">\n\t\t\t\t\t\t\t\t\t\t          Determinate\n\t\t\t\t\t\t\t\t\t\t        </mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t        <mat-radio-button class=\"example-margin\" value=\"indeterminate\">\n\t\t\t\t\t\t\t\t\t\t          Indeterminate\n\t\t\t\t\t\t\t\t\t\t        </mat-radio-button>\n\t\t\t\t\t\t\t\t\t\t    </mat-radio-group>\n\t\t\t\t\t\t\t\t\t    </section>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t\n\n\t\t\t\t\t\t\t\t\t<section class=\"example-section \" *ngIf=\"modes == 'determinate'\">\n\t\t\t\t\t\t\t\t\t    <label class=\"mat-subheading-2 center-align\">Progress:</label>\n\t\t\t\t\t\t\t\t\t    <mat-slider class=\"example-margin\" [(ngModel)]=\"values\"></mat-slider>\n\t\t\t\t\t\t\t\t\t</section>\n\t\t\t\t\t\t\t\t</div>\n\n\t\t\t\t\t\t\t\t<div fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\" >\n\t\t\t\t\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Result</h4>\n\t\t\t\t\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\t\t\t\t\t\t\t\n\t\t\t\t\t\t\t\t\t<mat-progress-spinner\n\t\t\t\t\t\t\t\t        class=\"example-margin\"\n\t\t\t\t\t\t\t\t        [color]=\"colors\"\n\t\t\t\t\t\t\t\t        [mode]=\"modes\"\n\t\t\t\t\t\t\t\t        [value]=\"values\">\n\t\t\t\t\t\t\t\t    </mat-progress-spinner>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t</div>\n\t\t        \t</div>\t\n\t\t        </div>\n\t\t\t</mat-tab>\n\t    </mat-tab-group>\n\t</div>\n</div>"

/***/ }),

/***/ "./src/app/Catalogos/ilocales/ilocales.component.scss":
/*!************************************************************!*\
  !*** ./src/app/Catalogos/ilocales/ilocales.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".spinner-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.spinner-container {\n  padding: 5px 15px 15px 15px; }\n\n.spinner-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.spinner-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.spinner-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0NhdGFsb2dvcy9pbG9jYWxlcy9pbG9jYWxlcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVmO0VBQ0MsMkJBQTJCLEVBQUE7O0FBRTVCO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUZ4QjtJQUtFLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBTmhCO0lBVUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9DYXRhbG9nb3MvaWxvY2FsZXMvaWxvY2FsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc3Bpbm5lci1oZWFkZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZWJkO1xuXHRjb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDAgNXB4O1xufVxuLnNwaW5uZXItY29udGFpbmVyIHtcblx0cGFkZGluZzogNXB4IDE1cHggMTVweCAxNXB4O1xufVxuLnNwaW5uZXItY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59Il19 */"

/***/ }),

/***/ "./src/app/Catalogos/ilocales/ilocales.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/Catalogos/ilocales/ilocales.component.ts ***!
  \**********************************************************/
/*! exports provided: ImpuestosLocales */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpuestosLocales", function() { return ImpuestosLocales; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Catalogos/ilocales/helpers.data.ts");



var ImpuestosLocales = /** @class */ (function () {
    function ImpuestosLocales() {
        this.colors = 'primary';
        this.modes = 'determinate';
        this.values = 50;
        this.spinnerHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["SPINNER_HELPERS"];
    }
    ImpuestosLocales.prototype.ngOnInit = function () {
    };
    ImpuestosLocales = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-spinner',
            template: __webpack_require__(/*! ./ilocales.component.html */ "./src/app/Catalogos/ilocales/ilocales.component.html"),
            styles: [__webpack_require__(/*! ./ilocales.component.scss */ "./src/app/Catalogos/ilocales/ilocales.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImpuestosLocales);
    return ImpuestosLocales;
}());



/***/ }),

/***/ "./src/app/Catalogos/impuestos/helpers.data.ts":
/*!*****************************************************!*\
  !*** ./src/app/Catalogos/impuestos/helpers.data.ts ***!
  \*****************************************************/
/*! exports provided: EXPANSION_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EXPANSION_HELPERS", function() { return EXPANSION_HELPERS; });
var EXPANSION_HELPERS = {
    tsSourceRaisedButton: "\n \t\timport { MatExpansionModule } from '@angular/material/expansion';\n\t\t\n\t  \t@NgModule({\n\t\t  imports: [\n\t\t    MatExpansionModule\n\t\t})\n\t\texport class AppModule { }\n\t\t\n\t\timport { Component, OnInit } from '@angular/core';\n\t\timport { EXPANSION_HELPERS } from './helpers.data';\n\n\t\t@Component({\n\t\t  selector: 'cdk-expansion-panel',\n\t\t  templateUrl: './expansion-panel.component.html',\n\t\t  styleUrls: ['./expansion-panel.component.scss']\n\t\t})\n\t\texport class ExpansionPanelComponent implements OnInit {\n\t\t\tstep = 0;\n\t\t\tpublic basicPanelOpenState:any;\n\t\t\texpansionHelpers = EXPANSION_HELPERS;\n\t\t  \tconstructor() { }\n\n\t\t  \tngOnInit() {\n\t\t  \t}\n\t\t  \tsetStep(index: number) {\n\t\t\t    this.step = index;\n\t\t\t}\n\n\t\t\tnextStep() {\n\t\t\t    this.step++;\n\t\t\t}\n\n\t\t\tprevStep() {\n\t\t\t    this.step--;\n\t\t\t}\n\n\t\t}\n".trim(),
    htmlSourceRaisedButton: "\n  \t\t\n\t\t  <mat-accordion>\n\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\tPersonal data\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\tType your name and age\n\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"First name\">\n\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t<input matInput placeholder=\"Age\">\n\t\t\t\t\t</mat-form-field>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t\t<mat-expansion-panel (opened)=\"basicPanelOpenState = true\"\n\t\t\t\t\t(closed)=\"basicPanelOpenState = false\">\n\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\tSelf aware panel\n\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\tCurrently I am {{basicPanelOpenState ? 'open' : 'closed'}}\n\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t</mat-expansion-panel>\n\t\t\t</mat-accordion>\n\t\t".trim(),
};


/***/ }),

/***/ "./src/app/Catalogos/impuestos/impuestos.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Catalogos/impuestos/impuestos.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxFlex class=\"expansion-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"expansion-header\">\n\t\t\t<h1 class=\"mat-headline center-align\" >Generar retenciones</h1>\n\t\t</mat-toolbar>\n\t\t\n\t\t<div class=\"expansion-container\">\n\t\t\t\n\t\t\t<div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutGap=\"20px\">\n\t\t\t\t\n\t\t\t\t<div fxFlexLayoutWrap fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Basic expansion panel</h4>\n\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<mat-accordion>\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\tPersonal data\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\tType your name and age\n\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\n\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"Age\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel (opened)=\"basicPanelOpenState = true\"\n\t\t\t\t\t\t(closed)=\"basicPanelOpenState = false\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\tSelf aware panel\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\tCurrently I am {{basicPanelOpenState ? 'open' : 'closed'}}\n\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\n\t\t\t\t\t           \n\n\t\t\t\t</div>\n\n\n\t\t\t\t<div fxFlexLayoutWrap fxFlex.xs=\"100\" fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"50\">\n\n\t\t\t\t\t<h4 class=\"mat-subheading-2 center-align\">Expansion panel as accordion</h4>\n\n\t\t\t\t\t<mat-divider></mat-divider>\n\t\t\t\n\t\t\t\t\t<mat-accordion class=\"example-headers-align\">\n\t\t\t\t  \t<mat-expansion-panel [expanded]=\"step === 0\" (opened)=\"setStep(0)\" hideToggle=\"true\">\n\t\t\t\t    \t<mat-expansion-panel-header>\n\t\t\t\t      \t\t<mat-panel-title>\n\t\t\t\t        \tPersonal data\n\t\t\t\t     \t\t</mat-panel-title>\n\t\t\t\t      \t\t<mat-panel-description>\n\t\t\t\t\t       \t \tType your name and age\n\t\t\t\t\t        \t<mat-icon>account_circle</mat-icon>\n\t\t\t\t      \t\t</mat-panel-description>\n\t\t\t\t    \t</mat-expansion-panel-header>\n\n\t\t\t\t\t    <mat-form-field>\n\t\t\t\t\t      <input matInput placeholder=\"First name\">\n\t\t\t\t\t    </mat-form-field>\n\n\t\t\t\t\t    <mat-form-field>\n\t\t\t\t\t      <input matInput type=\"number\" min=\"1\" placeholder=\"Age\">\n\t\t\t\t\t    </mat-form-field>\n\n\t\t\t\t\t    <mat-action-row>\n\t\t\t\t\t      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n\t\t\t\t\t    </mat-action-row>\n\t\t\t\t  \t</mat-expansion-panel>\n\n\t\t\t\t  \t<mat-expansion-panel [expanded]=\"step === 1\" (opened)=\"setStep(1)\" hideToggle=\"true\">\n\t\t\t\t    <mat-expansion-panel-header>\n\t\t\t\t\t    <mat-panel-title>\n\t\t\t\t\t        Destination\n\t\t\t\t    \t</mat-panel-title>\n\t\t\t\t    \t<mat-panel-description>\n\t\t\t\t        \tType the country name\n\t\t\t\t        \t<mat-icon>map</mat-icon>\n\t\t\t\t   \t \t</mat-panel-description>\n\t\t\t\t \t</mat-expansion-panel-header>\n\n\t\t\t\t    <mat-form-field>\n\t\t\t\t      <input matInput placeholder=\"Country\">\n\t\t\t\t    </mat-form-field>\n\n\t\t\t\t    <mat-action-row>\n\t\t\t\t      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n\t\t\t\t      <button mat-button color=\"primary\" (click)=\"nextStep()\">Next</button>\n\t\t\t\t    </mat-action-row>\n\t\t\t\t  </mat-expansion-panel>\n\n\t\t\t\t  <mat-expansion-panel [expanded]=\"step === 2\" (opened)=\"setStep(2)\" hideToggle=\"true\">\n\t\t\t\t    <mat-expansion-panel-header>\n\t\t\t\t      <mat-panel-title>\n\t\t\t\t        Day of the trip\n\t\t\t\t      </mat-panel-title>\n\t\t\t\t      <mat-panel-description>\n\t\t\t\t        Inform the date you wish to travel\n\t\t\t\t        <mat-icon>date_range</mat-icon>\n\t\t\t\t      </mat-panel-description>\n\t\t\t\t    </mat-expansion-panel-header>\n\n\t\t\t\t    <mat-form-field>\n\t\t\t\t      <input matInput placeholder=\"Date\" [matDatepicker]=\"picker\" (focus)=\"picker.open()\" readonly>\n\t\t\t\t    </mat-form-field>\n\t\t\t\t    <mat-datepicker #picker></mat-datepicker>\n\n\t\t\t\t    <mat-action-row>\n\t\t\t\t      <button mat-button color=\"warn\" (click)=\"prevStep()\">Previous</button>\n\t\t\t\t      <button mat-button color=\"primary\" (click)=\"nextStep()\">End</button>\n\t\t\t\t    </mat-action-row>\n\t\t\t\t  </mat-expansion-panel>\n\n\t\t\t\t</mat-accordion>\n\t\t\t\t\n\t\t\t\t\t           \n\n\t\t\t\t</div>\n\t\t\t\t\n\t\t\t</div>\n\n\t\t\t\t\t\t\n\n\t\t</div>\n\t</div>\n\n\t<div fxFlex class=\"expansion-component-holder mat-elevation-z4\">\n\t\t<mat-toolbar class=\"expansion-header\"  >\n\t\t\t<h1 class=\"mat-headline center-align\" >Examples</h1>\n\t\t</mat-toolbar>\n\n\t\t<mat-tab-group fxFlexFill>\n\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"expansionHelpers?.tsSourceRaisedButton\" language=\"typescript\"></code></pre>\n\t        \t</div>\n\t        </mat-tab>\n\t        <mat-tab label=\"HTML\">\n\t        \t<div class=\"component-preview\">\n\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"expansionHelpers?.htmlSourceRaisedButton\" language=\"html\"></code></pre>\n\t            </div>\n\t        </mat-tab>\n\n\t        <mat-tab label=\"PREVIEW\">\n\t        \t<div class=\"component-preview\">\n\t\t        \t<mat-accordion>\n\t\t\t\t\t<mat-expansion-panel>\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\tPersonal data\n\t\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\tType your name and age\n\t\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t\t<input matInput placeholder=\"First name\">\n\t\t\t\t\t\t</mat-form-field>\n\n\t\t\t\t\t\t<mat-form-field>\n\t\t\t\t\t\t<input matInput placeholder=\"Age\">\n\t\t\t\t\t\t</mat-form-field>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t\t<mat-expansion-panel (opened)=\"basicPanelOpenState = true\"\n\t\t\t\t\t\t(closed)=\"basicPanelOpenState = false\">\n\t\t\t\t\t\t<mat-expansion-panel-header>\n\t\t\t\t\t\t<mat-panel-title>\n\t\t\t\t\t\t\tSelf aware panel\n\t\t\t\t\t\t</mat-panel-title>\n\t\t\t\t\t\t<mat-panel-description>\n\t\t\t\t\t\t\tCurrently I am {{basicPanelOpenState ? 'open' : 'closed'}}\n\t\t\t\t\t\t</mat-panel-description>\n\t\t\t\t\t\t</mat-expansion-panel-header>\n\t\t\t\t\t\t<p>I'm visible because I am open</p>\n\t\t\t\t\t</mat-expansion-panel>\n\t\t\t\t</mat-accordion>\n\t\t\t  \t</div>\n\t        </mat-tab>\n\t    </mat-tab-group>\n\t</div>\n\n</div>"

/***/ }),

/***/ "./src/app/Catalogos/impuestos/impuestos.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Catalogos/impuestos/impuestos.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".expansion-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.expansion-container {\n  padding: 5px; }\n\n.expansion-component-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n.expansion-component-holder h4 {\n    color: #327ebd;\n    margin: 14px 0; }\n\n.expansion-component-holder mat-divider {\n    margin-bottom: 10px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0NhdGFsb2dvcy9pbXB1ZXN0b3MvaW1wdWVzdG9zLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBRWhCO0VBQ0UsWUFBWSxFQUFBOztBQUdkO0VBQ0MseUJBQXlCO0VBQ3pCLHVCQUF1QixFQUFBOztBQUZ4QjtJQUtFLGNBQWM7SUFDZCxjQUFjLEVBQUE7O0FBTmhCO0lBVUUsbUJBQW1CLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9DYXRhbG9nb3MvaW1wdWVzdG9zL2ltcHVlc3Rvcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leHBhbnNpb24taGVhZGVyIHtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzI3ZWJkO1xuXHRcdGNvbG9yOiB3aGl0ZTtcblx0XHRwYWRkaW5nOiAwIDVweDtcblx0fVxuLmV4cGFuc2lvbi1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDVweDtcblx0XHQvLyBjb2xvcjogd2hpdGU7XG5cdH1cbi5leHBhbnNpb24tY29tcG9uZW50LWhvbGRlciB7XG5cdGJvcmRlcjogMXB4IHNvbGlkICMzMjdlYmQ7XG5cdGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuXG5cdGg0IHtcblx0XHRjb2xvcjogIzMyN2ViZDtcblx0XHRtYXJnaW46IDE0cHggMDtcblx0fVxuXG5cdG1hdC1kaXZpZGVyIHtcblx0XHRtYXJnaW4tYm90dG9tOiAxMHB4O1xuXHR9XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/Catalogos/impuestos/impuestos.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Catalogos/impuestos/impuestos.component.ts ***!
  \************************************************************/
/*! exports provided: Impuestos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Impuestos", function() { return Impuestos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Catalogos/impuestos/helpers.data.ts");



var Impuestos = /** @class */ (function () {
    function Impuestos() {
        this.step = 0;
        this.expansionHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["EXPANSION_HELPERS"];
    }
    Impuestos.prototype.ngOnInit = function () {
    };
    Impuestos.prototype.setStep = function (index) {
        this.step = index;
    };
    Impuestos.prototype.nextStep = function () {
        this.step++;
    };
    Impuestos.prototype.prevStep = function () {
        this.step--;
    };
    Impuestos = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-expansion-panel',
            template: __webpack_require__(/*! ./impuestos.component.html */ "./src/app/Catalogos/impuestos/impuestos.component.html"),
            styles: [__webpack_require__(/*! ./impuestos.component.scss */ "./src/app/Catalogos/impuestos/impuestos.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Impuestos);
    return Impuestos;
}());



/***/ }),

/***/ "./src/app/Catalogos/mplantillas/helpers.data.ts":
/*!*******************************************************!*\
  !*** ./src/app/Catalogos/mplantillas/helpers.data.ts ***!
  \*******************************************************/
/*! exports provided: CARDS_HELPERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CARDS_HELPERS", function() { return CARDS_HELPERS; });
var CARDS_HELPERS = {
    tsSourceCards: "\n\n        import { MatCardModule } from '@angular/material/button';\n\n          @NgModule({\n          imports: [\n            MatCardModule,\n        })\n        export class AppModule { }\n\n        import { Component, OnInit } from '@angular/core';\n\n        @Component({\n          selector: 'cdk-cards',\n          templateUrl: './cards.component.html',\n          styleUrls: ['./cards.component.scss']\n        })\n        export class CardsComponent implements OnInit {\n        }\n".trim(),
    htmlSourceCards: "\n<div  fxLayoutAlign=\"space-around stretch\" fxLayoutWrap >\n    <mat-card>\n        <mat-card-header>\n            <div mat-card-avatar class=\"example-header-image\">\n            </div>\n            <mat-card-title>Shiba Inu</mat-card-title>\n            <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n        </mat-card-header>\n        <img mat-card-image src=\"/assets/220px-Taka_Shiba.jpg\" alt=\"Photo of a Shiba Inu\">\n\n        <mat-card-content>\n            <p>\n                The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n                A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n                bred for hunting.\n            </p>\n        </mat-card-content>\n        <mat-card-actions>\n            <button mat-button>LIKE</button>\n            <button mat-button>SHARE</button>\n        </mat-card-actions>\n    </mat-card>\n</div>\n".trim(),
};


/***/ }),

/***/ "./src/app/Catalogos/mplantillas/mplantillas.component.html":
/*!******************************************************************!*\
  !*** ./src/app/Catalogos/mplantillas/mplantillas.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\"  class=\"components-container-gt-xs\"  [ngClass.xs]=\"'components-container-xs'\"  fxLayoutGap=\"20px\">\n\n\t<div fxLayout=\"row\" fxLayout.sm=\"column\" fxLayout.lt-sm=\"column\" fxLayoutAlign=\"start space-between\"  fxLayoutGap=\"10px\">\n\n\t\t<div fxFlex.sm=\"100\" class=\"cdk-card-holder\"  fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\" >\n\n\t\t\t<mat-toolbar class=\"cards-header\">\n\t\t\t\t<h1 class=\"mat-headline center-align\" >........</h1>\n\t\t\t</mat-toolbar>\n\n\t\t\t<div class=\"cards-container\">\n\t            \n\t\t            <div  fxLayoutAlign=\"space-around stretch\" fxLayoutWrap >\n\t\t                <mat-card>\n\t\t                    <mat-card-header>\n\t\t                        <div mat-card-avatar class=\"example-header-image\">\n\t\t                        </div>\n\t\t                        <mat-card-title>Shiba Inu</mat-card-title>\n\t\t                        <mat-card-subtitle>Dog Breed</mat-card-subtitle>\n\t\t                    </mat-card-header>\n\t\t                    <img mat-card-image src=\"/assets/220px-Taka_Shiba.jpg\" alt=\"Photo of a Shiba Inu\">\n\n\t\t                    <mat-card-content>\n\t\t                        <p class=\"mat-body-1\">\n\t\t                            The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan.\n\t\t                            A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally\n\t\t                            bred for hunting.\n\t\t                        </p>\n\t\t                    </mat-card-content>\n\t\t                    <mat-card-actions>\n\t\t                        <button mat-button class=\"mat-subheading-1 center-align\" >LIKE</button>\n\t\t                        <button mat-button class=\"mat-subheading-1 center-align\">SHARE</button>\n\t\t                    </mat-card-actions>\n\t\t                </mat-card>\n\t\t            </div>\n\t        \t</div>\n\t     </div>\n\n\t    <div fxFlex.xs=\"100\"  class=\"cdk-card-holder\"  fxFlex.lg=\"50\" fxFlex.md=\"50\" fxFlex.sm=\"100\" >\n\t\t\t\t\t\n\t\t\t\t\t<mat-toolbar class=\"cards-header\">\n\t\t\t\t\t\t<h1 class=\"mat-headline center-align\" >Example</h1>\n\t\t\t\t\t</mat-toolbar>\n\t            \n\t\t            <div  fxLayoutAlign=\"space-around stretch\" fxLayoutWrap >\n\n\t\t                <mat-tab-group fxFlexFill>\n\t\t\t\n\t\t\t\t\t\t\t<mat-tab label=\"TS\">\n\t\t\t\t\t\t\t\t<div class=\"component-preview\">\n\t\t\t\t\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"cardsHelpers?.tsSourceCards\" language=\"typescript\"></code></pre>\n\t\t\t\t\t            </div>\n\t\t\t\t\t        </mat-tab>\n\t\t\t\t\t        <mat-tab label=\"HTML\">\n\t\t\t\t\t        \t<div class=\"component-preview\">\n\t\t\t\t\t            \t<pre style=\"white-space:pre-line;\"><code mwlHighlightJs [source]=\"cardsHelpers?.htmlSourceCards\" language=\"html\"></code></pre>\n\t\t\t\t\t            </div>\n\t\t\t\t\t        </mat-tab>\n\n\t\t\t\t\t    </mat-tab-group>\n\n\t\t            </div>\n\t        \t</div>\n\n\t        </div>\n</div>\n"

/***/ }),

/***/ "./src/app/Catalogos/mplantillas/mplantillas.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/Catalogos/mplantillas/mplantillas.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cards-header {\n  background-color: #327ebd;\n  color: white;\n  padding: 0 5px; }\n\n.cards-container {\n  padding: 5px; }\n\n.example-header-image {\n  background-image: url('shibainu.jpg');\n  background-size: cover; }\n\n.cdk-card-holder {\n  border: 1px solid #327ebd;\n  background-color: white; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0NhdGFsb2dvcy9tcGxhbnRpbGxhcy9tcGxhbnRpbGxhcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQztFQUNDLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osY0FBYyxFQUFBOztBQUVmO0VBQ0MsWUFBWSxFQUFBOztBQUdiO0VBQ0MscUNBQXFEO0VBQ3JELHNCQUFzQixFQUFBOztBQUl4QjtFQUNDLHlCQUF5QjtFQUN6Qix1QkFBdUIsRUFBQSIsImZpbGUiOiJzcmMvYXBwL0NhdGFsb2dvcy9tcGxhbnRpbGxhcy9tcGxhbnRpbGxhcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNkay1jYXJkcyB7XG5cdC5jYXJkcy1oZWFkZXIge1xuXHRcdGJhY2tncm91bmQtY29sb3I6ICMzMjdlYmQ7XG5cdFx0Y29sb3I6IHdoaXRlO1xuXHRcdHBhZGRpbmc6IDAgNXB4O1xuXHR9XG5cdC5jYXJkcy1jb250YWluZXIge1xuXHRcdHBhZGRpbmc6IDVweDtcblx0XHQvLyBjb2xvcjogd2hpdGU7XG5cdH1cblx0LmV4YW1wbGUtaGVhZGVyLWltYWdlIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKCcuLi8uLi8uLi9hc3NldHMvc2hpYmFpbnUuanBnJyk7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4vLyB9XG5cbi5jZGstY2FyZC1ob2xkZXIge1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMzI3ZWJkO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Catalogos/mplantillas/mplantillas.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Catalogos/mplantillas/mplantillas.component.ts ***!
  \****************************************************************/
/*! exports provided: PlantillasPDF */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlantillasPDF", function() { return PlantillasPDF; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _helpers_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers.data */ "./src/app/Catalogos/mplantillas/helpers.data.ts");



var PlantillasPDF = /** @class */ (function () {
    function PlantillasPDF() {
        this.cardsHelpers = _helpers_data__WEBPACK_IMPORTED_MODULE_2__["CARDS_HELPERS"];
    }
    PlantillasPDF.prototype.ngOnInit = function () {
    };
    PlantillasPDF = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'cdk-cards',
            template: __webpack_require__(/*! ./mplantillas.component.html */ "./src/app/Catalogos/mplantillas/mplantillas.component.html"),
            styles: [__webpack_require__(/*! ./mplantillas.component.scss */ "./src/app/Catalogos/mplantillas/mplantillas.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PlantillasPDF);
    return PlantillasPDF;
}());



/***/ }),

/***/ "./src/app/Catalogos/productos/productos.component.html":
/*!**************************************************************!*\
  !*** ./src/app/Catalogos/productos/productos.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p></p>\n<div class=\"container\"> \n\t<!--Pr-----------------------imer panel Buscar productos------------------------------>\n\t  <div class=\"panel panel-primary\">\n\t   <div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Buscar productos</font></div>\n\t\t<div class=\"panel-body\">\n\t\t  No. identificacion: <input type=\"text\" name=\"identificacion\" placeholder=\"No. identificacion\">\n\t\t  Descripcion: <input type=\"text\" name=\"descripcion\" placeholder=\"Descripcion\">\n\t\n\t\t  <button class=\"btn right\" style=\"margin-left: 4px;\">Limpiar</button>\n\t\t  &nbsp;\n\t\t  <button type=\"button\" class=\"btn btn-success\">Buscar Producto</button>\n\t\t</div>\n\t  </div>\n\t\n\t <div class=\"panel panel-primary\">\n\t  <div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Productos</font></div>\n\t  <div class=\"panel-body\">\n\t\t<button type=\"button\" class=\"btn btn-success\" data-backdrop=\"false\"  data-toggle=\"modal\" data-target=\"#newProduct\">Nuevo producto</button> <p>\n\n\t\t\t\n\t\t  <div class=\"modal fade\" id=\"newProduct\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"newProductLabel\" aria-hidden=\"true\"   style=\"z-index: 1041\">\n\t\t\t<div class=\"modal-dialog \">\n\t\t\t  <div class=\"modal-content\">\n\t\n\t\t\t\t\t\t<div class=\"panel-heading\" id=\"newProductLabel\">Nuevo producto</div>\n\t\t\t\t\t\t<button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n\t\t\t\t\t\t\t\t<span aria-hidden=\"true\">&times;</span>\n\t\t\t\t\t\t\t</button>\n\t\t\t\t\n\t\t\t\t<div class=\"modal-body\"> \n\t\t\t\t\t<form #productoForm=\"ngForm\" (ngSubmit)=\"addCProdNPro \n\t\t\t\t\t  (productoForm)\">   \n\t\t\t\t\t  <input type=\"hidden\" name=\"id\" [(ngModel)]=\"cprodnproService.id\">\n\t\t\t\t\t  <!--<input type=\"hidden\" #_idCProdNPro=\"ngModel\" name=\"idCProdNPro\" [(ngModel)]=\"cprodnproService.idCProdNPro\">-->\n\t\t\t\t\t\t<div class=\"form-horizontal\">\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_nombre\" class=\"col-sm-4 control-label\">id</label>\n\t\t\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t\t\t<input name=\"idCProdNPro\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.idCProdNPro\"\n\t\t\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"id\"> \n\t\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_nombre\" class=\"col-sm-4 control-label\">*Descripcion de producto o</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"CPNPdPro\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.CPNPdPro\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"Buscar producto ó servicio\"> \n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_telefono\" class=\"col-sm-4 control-label\">Servicio:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<textarea name=\"CPNPserv\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.CPNPserv\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"Descripcion sobre la clave del producto\"></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_email\" class=\"col-sm-4 control-label\">*Descripción:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<textarea name=\"CPNPdesc\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.CPNPdesc\" \n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"Descripción\"></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_web\" class=\"col-sm-4 control-label\">*No. identificacion:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"CPNPnIden\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.CPNPnIden\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"No. identificacion\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t<div class=\"col-sm-6\">\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_direccion\" class=\"col-sm-4 control-label\">Descripcion unidad:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"CPNPdUni\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.CPNPdUni\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"Buscar unidad\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_localidad\" class=\"col-sm-4 control-label\"></label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<textarea name=\"CPNPcUni\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.CPNPcUni\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"Descripcion sobre la clave de la unidad\"></textarea>\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_provincia\" class=\"col-sm-4 control-label\">*Valor unitario:</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"CPNPvUni\" [(ngModel)]=\"cprodnproService.CPNPvUni\"\n\t\t\t\t\t\t\t\t\t\tclass=\"form-control\" type=\"text\" placeholder=\"0.00\">\n\t\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t\t\t\t<label for=\"MainContent_text_reg_cp\" class=\"col-sm-4 control-label\">Unidad</label>\n\t\t\t\t\t\t\t\t\t<div class=\"col-sm-8\">\n\t\t\t\t\t\t\t\t\t\t<input name=\"CPNPunidad\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.CPNPunidad\" class=\"form-control\" type=\"text\" placeholder=\"Unidad\">\n\t\t\t\t\t\t\t\t\t</div>\n                  <!--\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"createdAt\" [(ngModel)]=\"cprodnproService.createdAt\">\n\t\t\t\t\t\t\t\t\t<input type=\"hidden\" name=\"updatedAt\" [(ngModel)]=\"cprodnproService.updatedAt\"> -->\n\t\t\t\t\t\t\t\t\t<script>\n\t\t\t\t\t\t\t\t\t\t//var h = document.getElementById('CPNPdPro');\n\t\t\t\t\t\t\t\t\t\t//alert(h);\n\t\t\t\t\t\t\t\t\t\t//console.log(h); \n\t\t\t\t\t\t\t\t\t</script>\n\t\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t  <div class=\"modal-footer\">\n\t\t\t\t\t\t<div class=\"card-action\">\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn right\" (click)=\"resetForm(productoForm)\">Limpiar</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n\t\t\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"addCProdNPro(productoForm)\">Agregar</button>\n\t\t\t\t\t\t</div>\n\t\t\t\t\t  </div> \n\t\t\t\t\t</div>\n\t\t\t\t</form>\n\t\t\t\t</div> \n\t\t\t</div>\n\t\t  </div>\n\t\t  </div>\n\t\n\t\n\t\t <div class=\"table table-resposive\">\n\t\t   <table id=\"tabla1\" border=\"1\" class=\"rwd-table\">\n\t\t   <thead>\n\t\t\t   <tr>\n\t\t\t\t <th scope=\"col\">Clave, servicio o prod</th>\n\t\t\t\t <th scope=\"col\">No. identificacion</th>\n\t\t\t\t <th scope=\"çol\">Clave unidad</th>\n\t\t\t\t <th scope=\"col\">Unidad</th>\n\t\t\t\t <th scope=\"col\">Descripcion</th>\n\t\t\t\t <th scope=\"col\">Valor unitario</th>\n\t\t\t\t <th scope=\"col\">T, E, E</th>\n\t\t\t   </tr>\n\t\t\t   </thead>\n\t\n\t\t\t   <tbody>\n\t\t\t   <tr *ngFor=\"let producto of cprodnproService.cprodnpros\">\n\t\t\t\t <td data-label=\"Clave, servicio o prod\">{{ producto.CPNPdPro }}</td>\n\t\t\t\t <td data-label=\"No. indetificacion\">{{ producto.CPNPnIden }}</td>\n\t\t\t\t <td data-label=\"Clave unidad\">{{ producto.CPNPcUni }}</td>\n\t\t\t\t <td data-label=\"Unidad\">{{ producto.CPNPunidad }}</td>\n\t\t\t\t <td data-label=\"Descripcion\">{{ producto.CPNPdesc }}</td>\n\t\t\t\t <td data-label=\"Valor unitario\">{{ producto.CPNPvUni }}</td>\n\t\t\t\t <td data-label=\"T, E, E\">\n\t\t\t\t  <a>\n\t\t\t\t\t<i class=\"far fa-clock\" style=\"font-size: 15px;\"></i>\n\t\t\t\t  </a>\n\t\t\t\t  <a data-toggle=\"modal\" data-target=\".updateCProdNPro\">\n\t\t\t\t\t\t\t<i class=\"fas fa-pencil-alt\" style=\"font-size: 15px;\"> </i>\n\t\t\t\t  </a>\n\t\t\t\t  <a (click)=\"deleteCProdNPro(producto.idCProdNPro)\">\n\t\t\t\t\t  <i class=\"fas fa-trash-alt\" style=\"font-size: 15px;\"></i>\n\t\t\t\t  </a>\n\t\t\t\t </td>\n\t\t\t   </tr>\n\t\t\t </tbody>\n\n\t\t\t <i data-toggle=\"modal\" data-target=\".updateCProdNPro\"></i> \n\t\t\t <div class=\"modal fade updateCProdNPro\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"updateProductLabel\" aria-hidden=\"true\">\n<div class=\"modal-dialog modal-lg\">\n<div class=\"modal-content\">\n\t\t<div class=\"modal-header\">\n\n\t\t\t\t<h5 class=\"modal-title\" id=\"updateProductLabel\">Nuevo producto</h5>\n\t\t</div>\n\t\n\t<div class=\"modal-body\">\n\t\t\t<form class=\"form-inline col-lg-12 \" role=\"form-horizontal\">\n\t\t\t <input type=\"hidden\" name=\"idNueProducto\" #_idNueProducto=\"ngModel\" [(ngModel)]=\"cprodnproService.idNueProducto\">\n\t\t\t<div class=\"col-md-12 col-lg-12\">\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t <div class=\"col-lg-6 form-group\">       \n\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t <font size=\"2\">Descripción de producto o</font>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t <input name=\"desProducto\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.desProducto\"\n\t\t\t\t\t\t\t\t\t type=\"text\" class=\"form-control\" placeholder=\"Buscar producto ó servicio\">\n\t\t\t\t\t\t\t </div>                    \n\t\t\t\t\t </div>\n\n\t\t\t\t\t <div class=\"col-lg-6 form-group\">   \n\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t <font size=\"2\">Descripcion unidad:</font>    \n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t <input name=\"desUnidad\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.desUnidad\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Buscar unidad\">\n\t\t\t\t\t\t\t </div>    \n\t\t\t\t\t </div>\n\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t <div class=\"col-lg-6 form-group\">\n\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t <font size=\"2\">Servicio:</font>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t <input name=\"servicio\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.servicio\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Descripcion sobre la clave del producto\">\n\t\t\t\t\t\t\t </div>    \n\t\t\t\t\t </div>\n\n\t\t\t\t\t <div class=\"col-lg-6 form-group\">\n\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t <font size=\"2\"></font>   \n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t <input name=\"dClavUnidad\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.dClavUnidad\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Descripción sobre la clave de la unidad\">\n\t\t\t\t\t\t\t </div>     \n\t\t\t\t\t </div>\n\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"row\" >\n\n\t\t\t\t\t <div class=\"col-lg-6 form-group\">\n\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t <font size=\"2\">*Descripción:</font>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t <input name=\"descripcion\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.descripcion\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Descripción\">\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t </div>\n\n\t\t\t\t\t <div class=\"col-lg-6 form-group\">\n\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t <font size=\"2\">*Valor unitario:</font>   \n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t <input name=\"valUnitario\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.valUnitario\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"0\">\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t </div>\n\n\t\t\t\t</div>\n\n\n\t\t\t\t<div class=\"row\">\n\n\t\t\t\t\t <div class=\"col-lg-6 form-group\">\n\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t <font size=\"2\">*No identificacion:</font>\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t <input name=\"noIdentificacionP\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.noIdentificacionP\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"0\">\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t </div>\n\n\t\t\t\t\t <div class=\"col-lg-6 form-group\">\n\t\t\t\t\t\t\t <div class=\"col-lg-5\">\n\t\t\t\t\t\t\t\t\t <font size=\"1\">Unidad</font>   \n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t\t\t <div class=\"col-lg-7\">\n\t\t\t\t\t\t\t\t\t <input name=\"unidad\" #name=\"ngModel\" [(ngModel)]=\"cprodnproService.unidad\"\n\t\t\t\t\t\t\t\t\t\ttype=\"text\" class=\"form-control\" placeholder=\"Unidad\">\n\t\t\t\t\t\t\t </div>\n\t\t\t\t\t </div>\n\n\t\t\t\t</div>\n\t\t\t\t<div class=\"modal-footer\">  \n\t\t\t\t\t<button type=\"button\" class=\"btn btn-success\" (click)=\"addCProdNPro(productoForm)\">Actualizar</button>\n\t\t\t\t\t<button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Cancelar</button>\n\t\t\t\t</div>\n\n\n\t\t\t</div>\n\t </form>\n\t</div> \n</div>\n</div>\n</div>\n\n\t\t\t </table>\n\t\t </div>\n\t\t \n\t</div>\n\t</div>\n\t\t  \n\t</div> \n\t"

/***/ }),

/***/ "./src/app/Catalogos/productos/productos.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/Catalogos/productos/productos.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#a {\n  padding: 0; }\n\n#a li {\n  display: inline; }\n\n#a li a {\n  font-family: Arial;\n  font-size: 15px;\n  text-decoration: none;\n  float: left;\n  padding: 10px;\n  background-color: #EBEEF0;\n  color: #757779;\n  width: 202px;\n  height: 65px; }\n\n#button li a:hover {\n  background-color: #2586d7;\n  margin-top: -2;\n  padding-bottom: 12px; }\n\n/* Table */\n\n.rwd-table {\n  border: 1px solid #ccc;\n  border-collapse: collapse;\n  margin: 0;\n  padding: 0;\n  width: 100%;\n  table-layout: fixed; }\n\n.rwd-table caption {\n  font-size: 1.5em;\n  margin: .5em 0 .75em; }\n\n.rwd-table tr {\n  border: 1px solid #ddd;\n  padding: .35em; }\n\n.rwd-table th,\n.rwd-table td {\n  padding: .625em;\n  text-align: center;\n  font-size: 11px; }\n\n.rwd-table th {\n  font-size: .85em;\n  letter-spacing: .1em;\n  text-transform: uppercase; }\n\n.rwd-table th {\n  background-color: #2980B9; }\n\n.rwd-table tr:nth-child(odd) {\n  background-color: #85C1E9; }\n\n.rwd-table tr:nth-child(even) {\n  background-color: #AED6F1; }\n\n.rwd-table th {\n  font-size: 11px; }\n\n@media screen and (max-width: 600px) {\n  .rwd-table {\n    border: 0; }\n  .rwd-table caption {\n    font-size: 1.3em; }\n  .rwd-table thead {\n    border: none;\n    clip: rect(0 0 0 0);\n    height: 1px;\n    margin: -1px;\n    overflow: hidden;\n    padding: 0;\n    position: absolute;\n    width: 1px; }\n  .rwd-table tr {\n    border-bottom: 3px solid #ddd;\n    display: block;\n    margin-bottom: .625em; }\n  .rwd-table td {\n    border-bottom: 1px solid #ddd;\n    display: block;\n    font-size: .8em;\n    text-align: right; }\n  .rwd-table td::before {\n    /*\n\t\t* aria-label has no advantage, it won't be read inside a table\n\t\tcontent: attr(aria-label);\n\t\t*/\n    content: attr(data-label);\n    float: left;\n    font-weight: bold;\n    text-transform: uppercase; }\n  .rwd-table td:last-child {\n    border-bottom: 0; } }\n\n#panels {\n  background-color: #333366; }\n\n#newProductLabel {\n  text-align: left;\n  background-color: #333366;\n  margin: 0em;\n  font-size: 15px;\n  color: #FFF; }\n\n#newProduct {\n  z-index: 1500; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL0NhdGFsb2dvcy9wcm9kdWN0b3MvcHJvZHVjdG9zLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9DYXRhbG9nb3MvcHJvZHVjdG9zL3Byb2R1Y3Rvcy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNDLFVBQVUsRUFBQTs7QUFHVjtFQUNBLGVBQWUsRUFBQTs7QUFJZjtFQUNBLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YscUJBQXFCO0VBQ3JCLFdBQVc7RUFDWCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxZQUFZO0VBQ1osWUFBWSxFQUFBOztBQUdaO0VBQ0MseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxvQkFBb0IsRUFBQTs7QUFHckIsVUFBQTs7QUFDQTtFQUNFLHNCQUFzQjtFQUN0Qix5QkFBeUI7RUFDekIsU0FBUztFQUNULFVBQVU7RUFDVixXQUFXO0VBQ1gsbUJBQW1CLEVBQUE7O0FBR3JCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG9CQUFvQixFQUFBOztBQUd0QjtFQUNFLHNCQUFzQjtFQUN0QixjQUFjLEVBQUE7O0FBR2hCOztFQUVFLGVBQWU7RUFDZixrQkFBa0I7RUFDbEIsZUFBZSxFQUFBOztBQUdqQjtFQUNFLGdCQUFnQjtFQUNoQixvQkFBb0I7RUFDcEIseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UseUJBQXlCLEVBQUE7O0FBRzNCO0VBQ0UsZUFBZSxFQUFBOztBQUVqQjtFQUNBO0lBQ0MsU0FBUyxFQUFBO0VBR1I7SUFDRCxnQkFBZ0IsRUFBQTtFQUdmO0lBQ0QsWUFBWTtJQUNaLG1CQUFtQjtJQUNuQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjtJQUNoQixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFVBQVUsRUFBQTtFQUdUO0lBQ0QsNkJBQTZCO0lBQzdCLGNBQWM7SUFDZCxxQkFBcUIsRUFBQTtFQUdwQjtJQUNELDZCQUE2QjtJQUM3QixjQUFjO0lBQ2QsZUFBZTtJQUNmLGlCQUFpQixFQUFBO0VBR2hCO0lBQ0Q7OztHQ3JCQztJRHlCRCx5QkFBeUI7SUFDekIsV0FBVztJQUNYLGlCQUFpQjtJQUNqQix5QkFBeUIsRUFBQTtFQUd4QjtJQUNELGdCQUFnQixFQUFBLEVBQ2Q7O0FBSUY7RUFDQyx5QkFBeUIsRUFBQTs7QUFHMUI7RUFDQSxnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxlQUFlO0VBQ2YsV0FBVyxFQUFBOztBQUdYO0VBQ0MsYUFBYSxFQUFBIiwiZmlsZSI6InNyYy9hcHAvQ2F0YWxvZ29zL3Byb2R1Y3Rvcy9wcm9kdWN0b3MuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcbiNheyAgICAgXG5cdHBhZGRpbmc6IDA7XG5cdH1cblx0XG5cdCNhIGxpe1xuXHRkaXNwbGF5OiBpbmxpbmU7XG5cdFxuXHR9XG5cdFxuXHQjYSBsaSBhe1xuXHRmb250LWZhbWlseTogQXJpYWw7XG5cdGZvbnQtc2l6ZTogMTVweDtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRmbG9hdDogbGVmdDtcblx0cGFkZGluZzogMTBweDtcblx0YmFja2dyb3VuZC1jb2xvcjogI0VCRUVGMDtcblx0Y29sb3I6ICM3NTc3Nzk7XG5cdHdpZHRoOiAyMDJweDtcblx0aGVpZ2h0OiA2NXB4OyAgIFxuXHR9XG5cdFxuXHQjYnV0dG9uIGxpIGE6aG92ZXIge1xuXHQgYmFja2dyb3VuZC1jb2xvcjogIzI1ODZkNztcblx0IG1hcmdpbi10b3A6IC0yO1xuXHQgcGFkZGluZy1ib3R0b206IDEycHg7XG5cdCB9XG5cdFxuXHQvKiBUYWJsZSAqL1xuXHQucndkLXRhYmxlIHtcblx0ICBib3JkZXI6IDFweCBzb2xpZCAjY2NjO1xuXHQgIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG5cdCAgbWFyZ2luOiAwO1xuXHQgIHBhZGRpbmc6IDA7XG5cdCAgd2lkdGg6IDEwMCU7XG5cdCAgdGFibGUtbGF5b3V0OiBmaXhlZDtcblx0fVxuXHRcblx0LnJ3ZC10YWJsZSBjYXB0aW9uIHtcblx0ICBmb250LXNpemU6IDEuNWVtO1xuXHQgIG1hcmdpbjogLjVlbSAwIC43NWVtO1xuXHR9XG5cdFxuXHQucndkLXRhYmxlIHRyIHtcblx0ICBib3JkZXI6IDFweCBzb2xpZCAjZGRkO1xuXHQgIHBhZGRpbmc6IC4zNWVtO1xuXHR9XG5cdFxuXHQucndkLXRhYmxlIHRoLFxuXHQucndkLXRhYmxlIHRkIHtcblx0ICBwYWRkaW5nOiAuNjI1ZW07XG5cdCAgdGV4dC1hbGlnbjogY2VudGVyO1xuXHQgIGZvbnQtc2l6ZTogMTFweDtcblx0fVxuXHRcblx0LnJ3ZC10YWJsZSB0aCB7XG5cdCAgZm9udC1zaXplOiAuODVlbTtcblx0ICBsZXR0ZXItc3BhY2luZzogLjFlbTtcblx0ICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuXHR9XG5cdFxuXHQucndkLXRhYmxlIHRoIHtcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MEI5O1xuXHQgICB9XG5cdFxuXHQucndkLXRhYmxlIHRyOm50aC1jaGlsZChvZGQpIHtcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjODVDMUU5O1xuXHR9XG5cdFxuXHQucndkLXRhYmxlIHRyOm50aC1jaGlsZChldmVuKSB7XG5cdCAgYmFja2dyb3VuZC1jb2xvcjogI0FFRDZGMTtcblx0fVxuXHRcblx0LnJ3ZC10YWJsZSB0aHtcblx0ICBmb250LXNpemU6IDExcHg7XG5cdH0gXG5cdEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYwMHB4KSB7XG5cdC5yd2QtdGFibGUge1xuXHRcdGJvcmRlcjogMDtcblx0ICB9XG5cdFxuXHQgIC5yd2QtdGFibGUgY2FwdGlvbiB7XG5cdFx0Zm9udC1zaXplOiAxLjNlbTtcblx0ICB9XG5cdCAgXG5cdCAgLnJ3ZC10YWJsZSB0aGVhZCB7XG5cdFx0Ym9yZGVyOiBub25lO1xuXHRcdGNsaXA6IHJlY3QoMCAwIDAgMCk7XG5cdFx0aGVpZ2h0OiAxcHg7XG5cdFx0bWFyZ2luOiAtMXB4O1xuXHRcdG92ZXJmbG93OiBoaWRkZW47XG5cdFx0cGFkZGluZzogMDtcblx0XHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdFx0d2lkdGg6IDFweDtcblx0ICB9XG5cdCAgXG5cdCAgLnJ3ZC10YWJsZSB0ciB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogM3B4IHNvbGlkICNkZGQ7XG5cdFx0ZGlzcGxheTogYmxvY2s7XG5cdFx0bWFyZ2luLWJvdHRvbTogLjYyNWVtO1xuXHQgIH1cblx0ICBcblx0ICAucndkLXRhYmxlIHRkIHtcblx0XHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcblx0XHRkaXNwbGF5OiBibG9jaztcblx0XHRmb250LXNpemU6IC44ZW07XG5cdFx0dGV4dC1hbGlnbjogcmlnaHQ7XG5cdCAgfVxuXHQgIFxuXHQgIC5yd2QtdGFibGUgdGQ6OmJlZm9yZSB7XG5cdFx0Lypcblx0XHQqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxuXHRcdGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XG5cdFx0Ki9cblx0XHRjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xuXHRcdGZsb2F0OiBsZWZ0O1xuXHRcdGZvbnQtd2VpZ2h0OiBib2xkO1xuXHRcdHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG5cdCAgfVxuXHQgIFxuXHQgIC5yd2QtdGFibGUgdGQ6bGFzdC1jaGlsZCB7XG5cdFx0Ym9yZGVyLWJvdHRvbTogMDtcblx0ICB9XG5cdH0gICBcblx0XG5cdFxuXHQgI3BhbmVsc3tcblx0ICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzY2O1xuXHQgfVxuXHRcblx0ICNuZXdQcm9kdWN0TGFiZWx7XG5cdFx0dGV4dC1hbGlnbjogbGVmdDtcblx0XHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzY2O1xuXHRcdG1hcmdpbjogMGVtO1xuXHRcdGZvbnQtc2l6ZTogMTVweDtcblx0XHRjb2xvcjogI0ZGRjtcblx0IH1cblxuXHQgI25ld1Byb2R1Y3R7XG5cdFx0IHotaW5kZXg6IDE1MDA7XG5cdCB9IiwiI2Ege1xuICBwYWRkaW5nOiAwOyB9XG5cbiNhIGxpIHtcbiAgZGlzcGxheTogaW5saW5lOyB9XG5cbiNhIGxpIGEge1xuICBmb250LWZhbWlseTogQXJpYWw7XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmbG9hdDogbGVmdDtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI0VCRUVGMDtcbiAgY29sb3I6ICM3NTc3Nzk7XG4gIHdpZHRoOiAyMDJweDtcbiAgaGVpZ2h0OiA2NXB4OyB9XG5cbiNidXR0b24gbGkgYTpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyNTg2ZDc7XG4gIG1hcmdpbi10b3A6IC0yO1xuICBwYWRkaW5nLWJvdHRvbTogMTJweDsgfVxuXG4vKiBUYWJsZSAqL1xuLnJ3ZC10YWJsZSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNjY2M7XG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRhYmxlLWxheW91dDogZml4ZWQ7IH1cblxuLnJ3ZC10YWJsZSBjYXB0aW9uIHtcbiAgZm9udC1zaXplOiAxLjVlbTtcbiAgbWFyZ2luOiAuNWVtIDAgLjc1ZW07IH1cblxuLnJ3ZC10YWJsZSB0ciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XG4gIHBhZGRpbmc6IC4zNWVtOyB9XG5cbi5yd2QtdGFibGUgdGgsXG4ucndkLXRhYmxlIHRkIHtcbiAgcGFkZGluZzogLjYyNWVtO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMTFweDsgfVxuXG4ucndkLXRhYmxlIHRoIHtcbiAgZm9udC1zaXplOiAuODVlbTtcbiAgbGV0dGVyLXNwYWNpbmc6IC4xZW07XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cblxuLnJ3ZC10YWJsZSB0aCB7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyOTgwQjk7IH1cblxuLnJ3ZC10YWJsZSB0cjpudGgtY2hpbGQob2RkKSB7XG4gIGJhY2tncm91bmQtY29sb3I6ICM4NUMxRTk7IH1cblxuLnJ3ZC10YWJsZSB0cjpudGgtY2hpbGQoZXZlbikge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjQUVENkYxOyB9XG5cbi5yd2QtdGFibGUgdGgge1xuICBmb250LXNpemU6IDExcHg7IH1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgLnJ3ZC10YWJsZSB7XG4gICAgYm9yZGVyOiAwOyB9XG4gIC5yd2QtdGFibGUgY2FwdGlvbiB7XG4gICAgZm9udC1zaXplOiAxLjNlbTsgfVxuICAucndkLXRhYmxlIHRoZWFkIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBtYXJnaW46IC0xcHg7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMXB4OyB9XG4gIC5yd2QtdGFibGUgdHIge1xuICAgIGJvcmRlci1ib3R0b206IDNweCBzb2xpZCAjZGRkO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1ib3R0b206IC42MjVlbTsgfVxuICAucndkLXRhYmxlIHRkIHtcbiAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RkZDtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IC44ZW07XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7IH1cbiAgLnJ3ZC10YWJsZSB0ZDo6YmVmb3JlIHtcbiAgICAvKlxuXHRcdCogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXG5cdFx0Y29udGVudDogYXR0cihhcmlhLWxhYmVsKTtcblx0XHQqL1xuICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxuICAucndkLXRhYmxlIHRkOmxhc3QtY2hpbGQge1xuICAgIGJvcmRlci1ib3R0b206IDA7IH0gfVxuXG4jcGFuZWxzIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzM2NjsgfVxuXG4jbmV3UHJvZHVjdExhYmVsIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzMzMzM2NjtcbiAgbWFyZ2luOiAwZW07XG4gIGZvbnQtc2l6ZTogMTVweDtcbiAgY29sb3I6ICNGRkY7IH1cblxuI25ld1Byb2R1Y3Qge1xuICB6LWluZGV4OiAxNTAwOyB9XG4iXX0= */"

/***/ }),

/***/ "./src/app/Catalogos/productos/productos.component.ts":
/*!************************************************************!*\
  !*** ./src/app/Catalogos/productos/productos.component.ts ***!
  \************************************************************/
/*! exports provided: Productos */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Productos", function() { return Productos; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_cprod_npro_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/cprod-npro.service */ "./src/app/services/cprod-npro.service.ts");



var Productos = /** @class */ (function () {
    function Productos(cprodnproService) {
        this.cprodnproService = cprodnproService;
    }
    Productos.prototype.ngOnInit = function () {
        this.getCProdNPro();
    };
    Productos.prototype.getCProdNPro = function () {
        var _this = this;
        this.cprodnproService.obtenerCProdNPro()
            .subscribe(function (res) {
            _this.cprodnproService.cprodnpros = res;
            // console.log(cprodnpros);
        });
    };
    Productos.prototype.deleteCProdNPro = function (_idCProdNPro, form) {
        var _this = this;
        this.cprodnproService.eliminarCProdNPro(_idCProdNPro)
            .subscribe(function (res) {
            _this.getCProdNPro();
            console.log('hola');
        });
    };
    Productos.prototype.addCProdNPro = function (form) {
        var _this = this;
        this.cprodnproService.agregarProducto(form.value)
            .subscribe(function (res) {
            _this.getCProdNPro();
            console.log(res);
        });
    };
    Productos = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            // tslint:disable-next-line:component-selector
            selector: 'cdk-icons',
            template: __webpack_require__(/*! ./productos.component.html */ "./src/app/Catalogos/productos/productos.component.html"),
            styles: [__webpack_require__(/*! ./productos.component.scss */ "./src/app/Catalogos/productos/productos.component.scss")]
        })
        // tslint:disable-next-line:component-class-suffix
        ,
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_cprod_npro_service__WEBPACK_IMPORTED_MODULE_2__["CProdNProService"]])
    ], Productos);
    return Productos;
}());

/*updateCProdNPro(form: NgForm): void {
    this.cprodnproService.putCProdNPro(form.value);
   .subscribe(res => {
     console.log(res);
   });
}*/
/*addCProdNPro(form: NgForm){
  console.log("agregado")
   /*if(form.value._id){
     /*this.CProdNProService.putcprodnpro(form.value)
     .subscribe(res => {
      this.resetForm();
      //M.toast({html: 'Updated Successfuly'});
      //this.getEmployees();
     })
     console.log("hola");
   } else {
    this.cprodnproService.addcprodnpro(form.value)
    .subscribe(res => {
      console.log("agregado");
     //this.resetForm();
     //M.toast({html: 'Save Successfuly'});
     //this.getEmployees();
    });
   }
}

}*/
/*
import { Component, OnInit } from '@angular/core';
import { ICON_HELPERS } from './helpers.data';
import { CProdNProService } from '../../services/cprod-npro.service';
import { CProdNPro } from '../../models/CProdNPro';
import { NgForm } from '@angular/forms';
import { HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Component({
  selector: 'cdk-icons',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [CProdNProService]
})
export class Productos implements OnInit {

  constructor(private cprodnproService: CProdNProService) { }

  ngOnInit() {

  }
  iconHelpers: any = ICON_HELPERS;

  resetForm(form?: NgForm){
    if(form){
      form.reset();
      this.cprodnproService.selectedCProdNPro = new CProdNPro();
    }
  }
}*/ 


/***/ }),

/***/ "./src/app/services/cprod-npro.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/cprod-npro.service.ts ***!
  \************************************************/
/*! exports provided: CProdNProService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CProdNProService", function() { return CProdNProService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");




var httpOptions = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({ 'Content-Type': 'application/json' })
};
var CProdNProService = /** @class */ (function () {
    function CProdNProService(http) {
        this.http = http;
        this.heroesUrl = 'http://localhost:3000/api/cprodnpro'; // URL to web api
    }
    //////// Save methods //////////
    /** POST: add a new hero to the server
    agregarProducto(CProdNPro: CProdNPro): Observable<CProdNPro> {
      return this.http.post<CProdNPro>(this.heroesUrl, CProdNPro, httpOptions).pipe(
        tap((CProdNPro: CProdNPro) => console.log(`added CProdNPro w/ id=${CProdNPro.idCProdNPro}`)),
        catchError(this.handleError<CProdNPro>('agregarProducto'))
      );
    } */
    CProdNProService.prototype.agregarProducto = function (cprodnpro) {
        return this.http.post(this.heroesUrl, cprodnpro, httpOptions);
    };
    CProdNProService.prototype.obtenerCProdNPro = function () {
        return this.http.get(this.heroesUrl);
    };
    CProdNProService.prototype.eliminarCProdNPro = function (idCProdNPro) {
        return this.http.delete(this.heroesUrl + ("/" + idCProdNPro), httpOptions);
    };
    CProdNProService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.log(error); // log to console instead
            // TODO: better job of transforming error for user consumption
            console.log(operation + " failed: " + error.message);
            // Let the app keep running by returning an empty result.
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(result);
        };
    };
    CProdNProService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({ providedIn: 'root' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], CProdNProService);
    return CProdNProService;
}());

/*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CProdNPro } from '../models/CProdNPro';
import { Productos } from '../Catalogos/productos/productos.component';


@Injectable({
  providedIn: 'root'
})
export class CProdNProService {

   selectedCProdNPro: CProdNPro;
   cprodnpro: CProdNPro[];
   readonly URL_API = 'http://localhost:10010/CProdNPro';

  constructor(private http: HttpClient) {
    this.selectedCProdNPro = new CProdNPro();
 }

  getCProdNPro(){
    return this.http.get(this.URL_API);
  }

  postCProdNPro(cprodnpro: CProdNPro){
    return this.http.post(this.URL_API, cprodnpro);
  }

  putCProdNPro(cprodnpro: CProdNPro){
    return this.http.put(this.URL_API + `/${cprodnpro.idCProdNPro}`, cprodnpro);
  }

  deleteCProdNPro(idCProdNPro: number){
    return this.http.delete(this.URL_API + `/${idCProdNPro}`);
  }
}
*/ 


/***/ })

}]);
//# sourceMappingURL=Catalogos-Catalogos-module.js.map