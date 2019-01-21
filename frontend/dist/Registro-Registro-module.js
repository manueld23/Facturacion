(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Registro-Registro-module"],{

/***/ "./src/app/Registro/Registro.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Registro/Registro.module.ts ***!
  \*********************************************/
/*! exports provided: highlightJsFactory, RegistroModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightJsFactory", function() { return highlightJsFactory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroModule", function() { return RegistroModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _Registro_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Registro.router */ "./src/app/Registro/Registro.router.ts");
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
/* harmony import */ var _cfdi33_cfdi33_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./cfdi33/cfdi33.component */ "./src/app/Registro/cfdi33/cfdi33.component.ts");
/* harmony import */ var _retenciones_retenciones_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./retenciones/retenciones.component */ "./src/app/Registro/retenciones/retenciones.component.ts");
























function highlightJsFactory() {
    highlight_js__WEBPACK_IMPORTED_MODULE_18__["registerLanguage"]('typescript', highlight_js_lib_languages_typescript__WEBPACK_IMPORTED_MODULE_20__);
    return highlight_js__WEBPACK_IMPORTED_MODULE_18__;
}
var RegistroModule = /** @class */ (function () {
    function RegistroModule() {
    }
    RegistroModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
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
                _Registro_router__WEBPACK_IMPORTED_MODULE_5__["RegistroRouterModule"]
            ],
            declarations: [
                _cfdi33_cfdi33_component__WEBPACK_IMPORTED_MODULE_21__["CFDI33"],
                _retenciones_retenciones_component__WEBPACK_IMPORTED_MODULE_22__["Retenciones"],
            ],
            exports: []
        })
    ], RegistroModule);
    return RegistroModule;
}());



/***/ }),

/***/ "./src/app/Registro/Registro.router.ts":
/*!*********************************************!*\
  !*** ./src/app/Registro/Registro.router.ts ***!
  \*********************************************/
/*! exports provided: RegistroRouterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistroRouterModule", function() { return RegistroRouterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _cfdi33_cfdi33_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cfdi33/cfdi33.component */ "./src/app/Registro/cfdi33/cfdi33.component.ts");
/* harmony import */ var _retenciones_retenciones_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./retenciones/retenciones.component */ "./src/app/Registro/retenciones/retenciones.component.ts");





var RegistroRoutes = [
    { path: 'cfdi33', component: _cfdi33_cfdi33_component__WEBPACK_IMPORTED_MODULE_3__["CFDI33"], data: { animation: 'cfdi33' } },
    { path: 'retenciones', component: _retenciones_retenciones_component__WEBPACK_IMPORTED_MODULE_4__["Retenciones"], data: { animation: 'retenciones' } }
];
var RegistroRouterModule = /** @class */ (function () {
    function RegistroRouterModule() {
    }
    RegistroRouterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(RegistroRoutes)
            ],
            exports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]
            ]
        })
    ], RegistroRouterModule);
    return RegistroRouterModule;
}());



/***/ }),

/***/ "./src/app/Registro/cfdi33/cfdi33.component.html":
/*!*******************************************************!*\
  !*** ./src/app/Registro/cfdi33/cfdi33.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--primer panel-->\n<div class=\"container\">\n    <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Filtrado de componentes fidcales digitales</font></div>\n         <div class=\"panel-body\">\n            \n            <form>\n    \n                <div class=\"row\">\n                 <div>\n                <input name=\"emisor\" type=\"radio\" value=\"\"><label> Agragar emisor</label> \n                &nbsp;\n                <input type=\"radio\" name=\"cfdi\" value=\"\"><label>Folio de CFDI</label>\n                </div>\n                \n                    <div class=\"col-lg-4\">    \n                        <input type=\"text\" name=\"busc\" class=\"form-comtrol\" placeholder=\"Buscar\">\n                        <button class=\"btn btn-success\" type=\"button\" value=\"\">Buscar</button>\n                    </div>\n                    \n    \n                    <div class=\"form-group\">\n                    <div class=\"col-lg-6\">\n                        <font>Buscar por RFC/Cliente/Razon social\n                        </font>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <input type=\"text\" name=\"busca\" class=\"form-control\" id=\"Brcr\" placeholder=\"AAWW890512MVZAVE6\">\n                    </div>\n                    </div>\n                    </div>\n    \n    \n                    <div class=\"form-group\">\n                    <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n                        <font> RFC\n                        </font>\n                    </div>    \n                    <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n                        <input type=\"text\" name=\"patron\" class=\"form-control\" id=\"patron\" placeholder=\"AAWW890512MVZAVE6\"> \n                    </div>\n                    </div>\n    \n    \n                    <div class=\"form-group\">\n                    <div class=\"col-xs-5 col-sm-5 col-md-5 col-lg-5\">\n                        <font>\n                            Cliente \n                        </font>\n                    </div>     \n                    <div class=\"col-xs-7 col-sm-7 col-md-7 col-lg-7\">\n                        <input type=\"text\" name=\"cli\" class=\"form-control\" id=\"cliente\" placeholder=\"0042 0042-MUICIPIO DE ATLAHUILCO\">\n                    </div>               \n                    </div>\n    \n                    <div>\n                        <button class=\"btn btn-success\" type=\"button\" value=\"\">Buscar</button>\n                    </div>                      \n            </form>\n    \n            <form>\n                <div class=\"row\">\n                    <div></div>\n                    &nbsp;\n                    &nbsp;\n                <div class=\"b\">\n                    \n                <div class=\"col-lg-4 form-group\">\n                    <div>\n                        <font>Dia</font>\n                    </div>\n                    <div>\n                        <select class=\"custon-select form-control\" name=\"dia\">\n                            <option>01</option>\n                            <option>02</option>\n                            <option>03</option>\n                            <option>04</option>\n                            <option>05</option>\n                            <option>06</option>\n                            <option>07</option>\n                            <option>08</option>\n                            <option>09</option>\n                            <option>10</option>\n                            <option>11</option>\n                            <option>12</option>\n                            <option>13</option>\n                            <option>14</option>\n                            <option>15</option>\n                            <option>16</option>\n                            <option>17</option>\n                            <option>18</option>\n                            <option>19</option>\n                            <option>20</option>\n                            <option>21</option>\n                            <option>22</option>\n                            <option>23</option>\n                            <option>24</option>\n                            <option>25</option>\n                            <option>26</option>\n                            <option>27</option>\n                            <option>28</option>\n                            <option>29</option>\n                            <option>30</option>\n                            <option>31</option>\n                        </select>\n                    </div>\n                </div>\n    \n                <div class=\"col-lg-4 form-group\">\n                    <div>\n                        <font>\n                        Mes\n                        </font>\n                    </div>\n                    <div>\n                        <select class=\"custon-select form-control\" name=\"Mes\">\n                            <option>Enero</option>\n                            <option>Febrero</option>\n                            <option>MArzo</option>\n                            <option>Abril</option>\n                            <option>Mayo</option>\n                            <option>Junio</option>\n                            <option>Julio</option>\n                            <option>Agosto</option>\n                            <option>Septiembre</option>\n                            <option>Octubre</option>\n                            <option>Noviembre</option>\n                            <option>Diciembre</option>\n                        </select>\n                    </div>\n                </div>\n    \n                <div class=\"col-lg-4 form-group\">\n                    <div>\n                        <font>\n                            Año\n                        </font>\n                    </div>\n                    <div>\n                        <select class=\"custon-select form-control\" name=\"Año\">\n                             <option>2000</option>\n                            <option>2001</option>\n                            <option>2002</option>\n                            <option>2003</option>\n                            <option>2004</option>\n                            <option>2005</option>\n                            <option>2006</option>\n                            <option>2007</option>\n                            <option>2008</option>\n                            <option>2009</option>\n                            <option>2010</option>\n                            <option>2011</option>\n                            <option>2012</option>\n                            <option>2013</option>\n                            <option>2014</option>\n                            <option>2015</option>\n                            <option>2016</option>\n                            <option>2017</option>\n                            <option>2018</option>\n                            <option>2019</option>\n                            <option>2020</option>\n                            <option>2021</option>\n                            <option>2022</option>\n                            <option>2023</option>\n                            <option>2024</option>\n                            <option>2025</option>\n                            <option>2026</option>\n                            <option>2027</option>\n                            <option>2028</option>\n                            <option>2029</option>\n                            <option>2030</option>\n                        </select>\n                    </div>\n                </div>\n                </div>\n    \n                &nbsp;\n                &nbsp;\n                &nbsp;\n                &nbsp;\n                &nbsp;\n    \n    \n                <div class=\"b\" id=\"bo\">\n                    \n                <div>\n                    <div class=\"col-lg-5\">\n                        <font>Por sucursal</font>\n                    </div>  \n                    <div class=\"col-sm-7\">\n                        <select class=\"custon-select form-control\" name=\"sucursal\">\n                            <option>Principal</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                        </select>\n                    </div>\n                </div>\n    \n                <div>\n                    <div class=\"col-lg-5\">\n                        <font>\n                            Serie\n                        </font>\n                    </div>\n                    <div class=\"col-sm-7\">\n                        <input type=\"text\" name=\"ser\" class=\"form-control\" id=\"serie\" placeholder=\"Serie de la sucursal\">\n                    </div>\n                </div>\n    \n                </div>\n                    \n                &nbsp;\n                &nbsp;\n                &nbsp;\n                &nbsp;\n                &nbsp;\n                \n    \n                <div class=\"b\">\n    \n                    <div>\n                        <div class=\"col-lg-5\">\n                            <font>\n                                Estado del comprobate\n                            </font>\n                        </div>\n                        <div class=\"col-sm-7\">\n                            <select class=\"custon-select form-control\" name=\"Ecomprobante\">\n                                <option>Todos</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                            </select>\n                        </div>\n                    </div>\n                    <br>\n                    <br>\n                    <div>\n                        <div class=\"col-lg-5\">\n                            <font>\n                                Uso de clave de confirmacion\n                            </font>\n                        </div>\n                        <div class=\"col-sm-7\">\n                            <select class=\"custon-select form-control\" name=\"Ecomprobante\">\n                                <option>Todos</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                                <option>PRUEBA</option>\n                            </select>\n                        </div>\n                    </div>\n                </div>\n                </div>\n    \n            </form>\n     </div>\n     </div>\n    \n    \n    <!--Segundo panel-->\n    <div class=\"panel panel-primary\">\n    <div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Comprobantes fiscales digitales emitidos</font></div>\n         <div class=\"panel-body\">\n            \n            <form>\n                <div class=\"row\">\n                        <div></div>\n                        &nbsp;\n                        &nbsp;\n                        &nbsp;\n                        &nbsp;\n                        &nbsp;\n                <div class=\"b\">\n                    \n               <div>\n                    <div class=\"col-lg-3\">\n                        <font>Plantilla</font>\n                    </div>  \n                    <div class=\"col-sm-7\">\n                        <select class=\"custon-select form-control\" name=\"sucursal\">\n                            <option>Por defecto</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                            <option>PRUEBA</option>\n                        </select>\n                    </div>\n                </div>\n    \n                <div>\n                    <button type=\"button\" class=\"btn btn-success\" value=\"\">Descargar XML</button>\n                    &nbsp;\n                    <button type=\"button\" class=\"btn btn-success\" value=\"\">Descargar PDF</button>\n                    &nbsp;\n                    <button type=\"button\" class=\"btn btn-success\" value=\"\">Descargar XML y PDF</button>\n                </div>\n    \n                </div>\n    \n                &nbsp;\n                &nbsp;\n                &nbsp;\n                &nbsp; \n                &nbsp;\n                &nbsp;\n                &nbsp;\n                \n    \n                <div class=\"b\">\n                        &nbsp;\n                    <div>\n                        <button type=\"button\" class=\"btn btn-secondary\" value=\"\">Cancelar CFDI</button>\n                        &nbsp;\n                        <button type=\"button\" class=\"btn btn-secondary\" value=\"\">Descargar XML cancelacion</button>\n                        &nbsp;\n                        <button type=\"button\" class=\"btn btn-success\" value=\"\">Descargar XML envio</button>\n                    </div>\n                    \n                </div>\n    \n                </div>\n            </form>\n    \n            <br>\n            <form>\n                \n            <div>\n                <input type=\"checkbox\" name=\"comprobantes\" value=\"\"><label>Enviar comprobantes por correo</label>\n            </div>\n            \n            <div>    \n                <input type=\"checkbox\" name=\"registros\" value=\"\"><label>Seleccionar todos los registros visibles</label>\n            </div>\n    \n            <div>    \n                <input type=\"checkbox\" name=\"Cfolios\" value=\"\"><label>Ordenar los comprobantes por folios</label>\n            </div>\n    \n            </form>\n    \n            <br>\n    \n            <table id=\"NSER\" class=\"table table-responsive\">\n                <tr>\n                    <th>NO SE ENCONTRARON REGISTROS</th>\n                </tr>\n            </table>\n    \n    \n            <form>\n                <div style=\"float: right;\">\n                    <input type=\"radio\" name=\"selecion\"><label>Por seleccion</label>\n                    <input type=\"radio\" name=\"rango\"><label>Por rango de fecha</label>\n                </div>\n    \n                <br>\n                <br>\n    \n                <div>\n                     <button class=\"btn btn-success\" type=\"button\" value=\"\" style=\"float: right;\">Ver reporte PDF</button>\n                    <button class=\"btn btn-success\" type=\"button\" value=\"\" style=\"float: right;\">Exportar Excel</button>\n                </div>\n    \n                <div class=\"col-sm-3\" style=\"float: right;\">\n                    <select class=\"custon-select form-control\"  name=\"sin\">\n                        <option>Sin seleccion</option>\n                        <option>PRUEBA</option>\n                        <option>PRUEBA</option>\n                        <option>PRUEBA</option>\n                        <option>PRUEBA</option>\n                        <option>PRUEBA</option>\n                        <option>PRUEBA</option>\n                    </select>               \n                </div>\n    \n                <br>\n                <br>\n            </form>\n    \n     </div>\n     </div>\n     </div>"

/***/ }),

/***/ "./src/app/Registro/cfdi33/cfdi33.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/Registro/cfdi33/cfdi33.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#panels {\n  background-color: #333366; }\n\n.b {\n  padding: 3px 10px;\n  border: #006666 solid;\n  border-radius: 20px; }\n\n#NSER {\n  color: #FBFCFC;\n  background-color: #006666; }\n\n#NSER th {\n  text-align: center; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL1JlZ2lzdHJvL2NmZGkzMy9jZmRpMzMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx5QkFBMkIsRUFBQTs7QUFHNUI7RUFDRSxpQkFBaUI7RUFDakIscUJBQXFCO0VBQ3JCLG1CQUFtQixFQUFBOztBQUlyQjtFQUNDLGNBQWM7RUFDZCx5QkFBeUIsRUFBQTs7QUFHMUI7RUFDQyxrQkFBa0IsRUFBQSIsImZpbGUiOiJzcmMvYXBwL1JlZ2lzdHJvL2NmZGkzMy9jZmRpMzMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFuZWxze1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzY2ICA7XG59XG5cbi5ie1xuXHQgcGFkZGluZzogM3B4IDEwcHg7XG4gIGJvcmRlcjogIzAwNjY2NiBzb2xpZDtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBcdFxufVxuXG4jTlNFUntcblx0Y29sb3I6ICNGQkZDRkM7IFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NjY2OyBcbn1cblxuI05TRVIgdGh7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Registro/cfdi33/cfdi33.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/Registro/cfdi33/cfdi33.component.ts ***!
  \*****************************************************/
/*! exports provided: CFDI33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CFDI33", function() { return CFDI33; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var CFDI33 = /** @class */ (function () {
    function CFDI33() {
    }
    CFDI33.prototype.ngOnInit = function () {
    };
    CFDI33 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-router',
            template: __webpack_require__(/*! ./cfdi33.component.html */ "./src/app/Registro/cfdi33/cfdi33.component.html"),
            styles: [__webpack_require__(/*! ./cfdi33.component.scss */ "./src/app/Registro/cfdi33/cfdi33.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CFDI33);
    return CFDI33;
}());



/***/ }),

/***/ "./src/app/Registro/retenciones/retenciones.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Registro/retenciones/retenciones.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <!--Primer panel-->    \n  <div class=\"panel panel-primary\">\n  <div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Filtrado de comprobantes de retenciones</font></div>\n       <div class=\"panel-body\">\n          \n          <form>\n           <div class=\"row\">\n            <div class=\"form-group col-lg-4\">  \n               <div class=\"col-sm-5 col-lg-2\">\n                      <font>\n                          Folio\n                      </font>\n               </div>\n               <div class=\"col-sm-7 col-lg-10\">  \n                      <input type=\"text\" name=\"busc\" class=\"form-control\" placeholder=\"Folio de retencion\">\n               </div>\n             </div>\n             <div class=\"form-group col-lg-8\">\n                 \n                  <button class=\"btn btn-success\" type=\"button\" value=\"\">Buscar</button>\n                                    \n             </div> \n           </div>                  \n          </form>\n  \n          <br>\n          <br>\n          \n  \n          <form>\n              <div class=\"row\">\n                    <div></div>\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n              <div class=\"b\">\n\n              <div class=\"col-lg-4 form-group\">\n                  <div>\n                      <font>Dia</font>\n                  </div>\n                  <div>\n                      <select class=\"custon-select form-control\" name=\"dia\">\n                          <option>01</option>\n                          <option>02</option>\n                          <option>03</option>\n                          <option>04</option>\n                          <option>05</option>\n                          <option>06</option>\n                          <option>07</option>\n                          <option>08</option>\n                          <option>09</option>\n                          <option>10</option>\n                          <option>11</option>\n                          <option>12</option>\n                          <option>13</option>\n                          <option>14</option>\n                          <option>15</option>\n                          <option>16</option>\n                          <option>17</option>\n                          <option>18</option>\n                          <option>19</option>\n                          <option>20</option>\n                          <option>21</option>\n                          <option>22</option>\n                          <option>23</option>\n                          <option>24</option>\n                          <option>25</option>\n                          <option>26</option>\n                          <option>27</option>\n                          <option>28</option>\n                          <option>29</option>\n                          <option>30</option>\n                          <option>31</option>\n                      </select>\n                  </div>\n              </div>\n  \n              <div class=\"col-lg-4 form-group\">\n                  <div>\n                      <font>\n                      Mes\n                      </font>\n                  </div>\n                  <div>\n                      <select class=\"custon-select form-control\" name=\"Mes\">\n                          <option>Enero</option>\n                          <option>Febrero</option>\n                          <option>MArzo</option>\n                          <option>Abril</option>\n                          <option>Mayo</option>\n                          <option>Junio</option>\n                          <option>Julio</option>\n                          <option>Agosto</option>\n                          <option>Septiembre</option>\n                          <option>Octubre</option>\n                          <option>Noviembre</option>\n                          <option>Diciembre</option>\n                      </select>\n                  </div>\n              </div>\n  \n              <div class=\"col-lg-4 form-group\">\n                  <div>\n                      <font>\n                          Año\n                      </font>\n                  </div>\n                  <div>\n                      <select class=\"custon-select form-control\" name=\"Año\">\n                           <option>2000</option>\n                          <option>2001</option>\n                          <option>2002</option>\n                          <option>2003</option>\n                          <option>2004</option>\n                          <option>2005</option>\n                          <option>2006</option>\n                          <option>2007</option>\n                          <option>2008</option>\n                          <option>2009</option>\n                          <option>2010</option>\n                          <option>2011</option>\n                          <option>2012</option>\n                          <option>2013</option>\n                          <option>2014</option>\n                          <option>2015</option>\n                          <option>2016</option>\n                          <option>2017</option>\n                          <option>2018</option>\n                          <option>2019</option>\n                          <option>2020</option>\n                          <option>2021</option>\n                          <option>2022</option>\n                          <option>2023</option>\n                          <option>2024</option>\n                          <option>2025</option>\n                          <option>2026</option>\n                          <option>2027</option>\n                          <option>2028</option>\n                          <option>2029</option>\n                          <option>2030</option>\n                      </select>\n                  </div>\n              </div>\n              </div>\n  \n  &nbsp;\n  &nbsp;\n              <div class=\"b\">\n                  &nbsp;\n              <div>\n                  <div class=\"col-lg-5\">\n                      <font>Por sucursal</font>\n                  </div>  \n                  <div class=\"col-sm-7\">\n                      <select class=\"custon-select form-control\" name=\"sucursal\">\n                          <option>Principal</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                      </select>\n                  </div>\n              </div>\n              </div>\n                  \n                  &nbsp;\n                  &nbsp;\n  \n  \n              <div class=\"b\">\n  \n                  <div class=\"row\">\n                      <div class=\"form-group col-lg-5\">\n                          <font>\n                              Buscar por RFC/Razon social\n                          </font>\n                      </div>\n                      <div class=\"col-lg-7\">\n                          <input type=\"text\" name=\"busc\" class=\"form-control\" id=\"Brfc\" placeholder=\"ADML159823MDI6\">\n                      </div>\n                  </div>\n  \n                  <div class=\"row\">                  \n                  \n                      <div class=\"form-group col-lg-5\">\n                          <font>\n                              RFC\n                          </font>\n                      </div>\n                      <div class=\"col-lg-7\">\n                         <input type=\"text\" name=\"rfc\" class=\"form-control\" id=\"rfc\" placeholder=\"ADML159823\">\n                      </div>\n                  \n                  </div>\n  \n                  <div class=\"row\">\n                  \n                      <div class=\"form-group col-lg-5\">\n                          <font>\n                              Razon social\n                          </font>\n                      </div>\n                      <div class=\"col-lg-7\">\n                          <input type=\"text\" name=\"Rso\" class=\"form-control\" id=\"Rsocial\" placeholder=\"0042 MUNICIPIO DE ATLAHUILCO\">\n                      </div>\n                  \n                  </div>\n  \n                  <div>\n                      <button class=\"btn btn-success\" type=\"button\" value=\"\">Buscar</button>\n                  </div>\n              </div>\n              </div>\n  \n          </form>\n   </div>\n   </div>\n  \n  \n  \n   <!-- segundo panel-->\n   <div class=\"panel panel-primary\">\n  <div class=\"panel-heading\" id=\"panels\"><font style=\"font-size: 15px\">Comprobantes retenciones emitidos</font></div>\n       <div class=\"panel-body\">\n          \n          <form>\n              <div class=\"row\">\n                    <div></div>\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n                    &nbsp;\n              <div class=\"b\">\n                  \n             <div>\n                  <div class=\"col-lg-3\">\n                      <font>Plantilla</font>\n                  </div>  \n                  <div class=\"col-sm-7\">\n                      <select class=\"custon-select form-control\" name=\"sucursal\">\n                          <option>Por defecto</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                          <option>PRUEBA</option>\n                      </select>\n                  </div>\n              </div>\n  \n              <div>\n                  <button type=\"button\" class=\"btn btn-success\" value=\"\">Descargar XML</button>\n                  &nbsp;\n                  <button type=\"button\" class=\"btn btn-success\" value=\"\">Descargar PDF</button>\n                  &nbsp;\n                  <button type=\"button\" class=\"btn btn-success\" value=\"\">Descargar XML y PDF</button>\n              </div>\n  \n              </div>\n  \n              &nbsp;\n              &nbsp;\n              &nbsp;\n  \n              <div class=\"b\">\n  \n                  <div>\n                      <button type=\"button\" class=\"btn btn-secondary\" value=\"\">Cancelar comprobante de retencion</button>\n                      <button type=\"button\" class=\"btn btn-secondary\" value=\"\">Descargar XML cancelacion</button>\n                      <button type=\"button\" class=\"btn btn-success\" value=\"\">Descargar XML envio</button>\n                  </div>\n                  \n              </div>\n  \n              &nbsp;\n              &nbsp;\n              &nbsp;\n          \n  \n              <div class=\"b\">\n                  <div class=\"\">\n                      <div class=\"col-lg-3\">\n                          <font>\n                              Folio inicial\n                          </font>\n                      </div>\n                      <div class=\"col-sm-9\">\n                          <input type=\"text\" name=\"Fol\" class=\"form-control\" id=\"FolioI\" placeholder=\"criterio de busqueda\">\n                      </div>\n                  </div>\n  \n                  <div>\n                  <button type=\"button\" class=\"btn btn-success\" value=\"\" style=\"float: right;\">Exportar excel</button>\n              </div>                    \n              </div>\n  \n              </div>\n          </form>\n  \n          <form>\n              \n          <div>\n              <input type=\"checkbox\" name=\"comprobantes\" value=\"\"><label>Enviar comprobantes por correo</label>\n          </div>\n          \n          <div>    \n              <input type=\"checkbox\" name=\"registros\" value=\"\"><label>Seleccionar todos los registros visibles</label>\n          </div>\n          </form>\n  \n          <br>\n          <br>\n          <table id=\"NSER\" class=\"table table-responsive\">\n                <tr>\n                    <th>NO SE ENCONTRARON REGISTROS</th>\n                </tr>\n            </table>\n          <br>\n          <br>\n   </div>\n   </div>\n   </div>\n   "

/***/ }),

/***/ "./src/app/Registro/retenciones/retenciones.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Registro/retenciones/retenciones.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#panels {\n  background-color: #333366; }\n\n.b {\n  padding: 1em;\n  border: #006666 solid;\n  border-radius: 20px;\n  width: 25em; }\n\n#NSER {\n  color: #FBFCFC;\n  background-color: #006666; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL3NhbnRvcy9GYWN0dXJhY2lvbi9mcm9udGVuZC9zcmMvYXBwL1JlZ2lzdHJvL3JldGVuY2lvbmVzL3JldGVuY2lvbmVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0MseUJBQTJCLEVBQUE7O0FBRzVCO0VBQ0UsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBOztBQUdiO0VBQ0MsY0FBYztFQUNkLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvUmVnaXN0cm8vcmV0ZW5jaW9uZXMvcmV0ZW5jaW9uZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFuZWxze1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMzMzMzY2ICA7XG59XG5cbi5ie1xuXHQgcGFkZGluZzogMWVtO1xuICBib3JkZXI6ICMwMDY2NjYgc29saWQ7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIHdpZHRoOiAyNWVtO1xufVxuXG4jTlNFUntcblx0Y29sb3I6ICNGQkZDRkM7IFxuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMDA2NjY2OyBcbn0iXX0= */"

/***/ }),

/***/ "./src/app/Registro/retenciones/retenciones.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Registro/retenciones/retenciones.component.ts ***!
  \***************************************************************/
/*! exports provided: Retenciones */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Retenciones", function() { return Retenciones; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var Retenciones = /** @class */ (function () {
    function Retenciones() {
    }
    Retenciones.prototype.ngOnInit = function () {
    };
    Retenciones = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-router-deactivate',
            template: __webpack_require__(/*! ./retenciones.component.html */ "./src/app/Registro/retenciones/retenciones.component.html"),
            styles: [__webpack_require__(/*! ./retenciones.component.scss */ "./src/app/Registro/retenciones/retenciones.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], Retenciones);
    return Retenciones;
}());



/***/ })

}]);
//# sourceMappingURL=Registro-Registro-module.js.map