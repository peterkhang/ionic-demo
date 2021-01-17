(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-datepickup-datepickup-module"],{

/***/ "+N1v":
/*!*******************************************************!*\
  !*** ./src/app/pages/datepickup/datepickup.module.ts ***!
  \*******************************************************/
/*! exports provided: DatePickupPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickupPageModule", function() { return DatePickupPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _datepickup__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./datepickup */ "1lY0");







let DatePickupPageModule = class DatePickupPageModule {
};
DatePickupPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _datepickup__WEBPACK_IMPORTED_MODULE_6__["DatePickupPage"]
                }
            ])
        ],
        declarations: [_datepickup__WEBPACK_IMPORTED_MODULE_6__["DatePickupPage"]]
    })
], DatePickupPageModule);



/***/ }),

/***/ "1lY0":
/*!************************************************!*\
  !*** ./src/app/pages/datepickup/datepickup.ts ***!
  \************************************************/
/*! exports provided: DatePickupPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DatePickupPage", function() { return DatePickupPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_datepickup_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./datepickup.html */ "yfFj");
/* harmony import */ var _datepickup_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./datepickup.scss */ "UJOO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/auth-service/auth-service */ "oNol");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "ya1t");








let DatePickupPage = class DatePickupPage {
    constructor(datePicker, datePipe, platform, auth) {
        this.datePicker = datePicker;
        this.datePipe = datePipe;
        this.platform = platform;
        this.auth = auth;
        this.value = null;
        this.minDate = "0000-00-00";
        this.maxDate = "9999-12-31";
    }
    /**
     * 로그인 페이지로 전환해 주는 함수
     */
    login() {
        this.auth.navigateRoot('/LoginPage');
    }
    /**
     * 로그인 정보를 해제하고 로그인 화면으로 전환해 주는 함수
     */
    logout() {
        this.auth.logout();
        this.auth.navigateRoot('/LoginPage');
    }
    ionViewWillEnter() {
        this.auth.setTitle('DatePickup');
        this.auth.getUser().then(user => {
            if (user === undefined || user == null) {
                this.auth.navigateRoot('/LoginPage');
            }
        }, err => {
            this.auth.navigateRoot('/LoginPage');
        });
    }
    pickupDate() {
        this.showNativeDatePicker();
    }
    showNativeDatePicker() {
        // this.beforeClick.emit();
        this.datePicker.show({
            date: this.value ? new Date(this.value) : new Date(),
            mode: 'date',
            androidTheme: this.datePicker.ANDROID_THEMES.THEME_HOLO_LIGHT,
            minDate: new Date(this.minDate).getTime() || '',
            maxDate: new Date(this.maxDate).getTime() || '',
            allowOldDates: false,
            allowFutureDates: true
        }).then((date) => {
            const d = this.datePipe.transform(date, 'yyyy-MM-dd');
            this.value = d;
            //this.onClick.emit(d);
        }, err => console.log(err));
    }
};
DatePickupPage.ctorParameters = () => [
    { type: _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_7__["DatePicker"] },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_4__["DatePipe"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_6__["Platform"] },
    { type: _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceProvider"] }
];
DatePickupPage.propDecorators = {
    splashDiv: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"], args: ['splashDiv', { read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"], static: false },] }]
};
DatePickupPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-datepickup',
        template: _raw_loader_datepickup_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_datepickup_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * SDUA 앱 초기 메인 화면 페이지 클래스
     */
], DatePickupPage);



/***/ }),

/***/ "UJOO":
/*!**************************************************!*\
  !*** ./src/app/pages/datepickup/datepickup.scss ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  position: relative !important;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0;\n}\nion-content .titleArea {\n  height: 30%;\n  width: 100%;\n  padding: 1em;\n  color: var(--bory-blue);\n  font-size: 1em;\n}\nion-content .menuArea {\n  height: 70%;\n  width: 100%;\n  padding: 1em;\n  text-align: center;\n}\nion-content .menuArea img {\n  width: 90%;\n  height: auto;\n}\nion-fab {\n  width: 50px;\n  height: 50px;\n}\nion-fab ion-fab-button {\n  margin-bottom: 7em;\n  background-color: var(--bory-blue);\n}\nion-fab ion-fab-button .fab ion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RhdGVwaWNrdXAuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKO0FBR1E7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFGWjtBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFKSjtBQU9BO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtBQUpKO0FBTUk7RUFDSSxZQUFBO0FBSlIiLCJmaWxlIjoiZGF0ZXBpY2t1cC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgXG5pb24tY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlIDtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICAgIFxuICAgICAgICAudGl0bGVBcmVhIHtcbiAgICAgICAgaGVpZ2h0OjMwJTtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9yeS1ibHVlKSA7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cblxuICAgIC5tZW51QXJlYSB7XG4gICAgICAgIGhlaWdodDo3MCU7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogOTAlIDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0byA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mYWIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xufVxuXG5pb24tZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA3ZW07ICAgICAgICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcnktYmx1ZSkgO1xuICAgIFxuICAgIC5mYWIgaW9uLWljb24gIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH0gXG4gICAgXG59XG4iXX0= */");

/***/ }),

/***/ "yfFj":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/datepickup/datepickup.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-header>\n  <ion-toolbar color=\"--bory-blue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      IonicDemo::DatePicker\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n    <ion-content class=\"ion-padding\">\n\n\n      <div class=\"titleArea\">\n        <h3>Date-Pickup Demo</h3>\n      \n        <p>\n          Please select the date what you want\n        </p>\n      </div>\n\n      <div class=\"menuArea\">\n        <button (click)=\"pickupDate()\"><img src=\"{{auth.root}}assets/icon/date.svg\"/></button>\n      </div>\n\n    </ion-content>");

/***/ })

}]);
//# sourceMappingURL=pages-datepickup-datepickup-module-es2015.js.map