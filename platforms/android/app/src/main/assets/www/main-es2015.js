(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/peter/App/ionic-demo/src/main.ts */"zUnb");


/***/ }),

/***/ "10F6":
/*!************************************************!*\
  !*** ./src/app/pages/dictation/dictation.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  padding: 50px;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0);\n}\nion-content div#dictationEdit {\n  border: 3px solid var(--bory-blue);\n  box-shadow: 5px 5px 5px !important;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0;\n  padding: 0em;\n  background: white;\n}\nion-content div#dictationEdit div.close {\n  width: 100%;\n  height: 5%;\n}\nion-content div#dictationEdit div.close ion-button {\n  float: right;\n}\nion-content div#dictationEdit div.close ion-button button {\n  color: white;\n}\nion-content div#dictationEdit div.video-player {\n  width: 100%;\n  height: 80%;\n}\nion-content div#dictationEdit div.reaction {\n  width: 100%;\n  height: 15%;\n}\nion-content div#dictationEdit div.reaction ion-grid ion-row ion-col ion-button.hot {\n  background-color: var(--ion-color-secondary) !important;\n  width: 100%;\n}\nion-content div#dictationEdit div.reaction ion-grid ion-row ion-col ion-button.cool {\n  background-color: var(--ion-bory-blue) !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RpY3RhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBREo7QUFJSTtFQUNJLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDSSxpQkFBQTtBQUZaO0FBS1E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUhaO0FBSVk7RUFDSSxZQUFBO0FBRmhCO0FBR2dCO0VBQ0ksWUFBQTtBQURwQjtBQU9RO0VBRUksV0FBQTtFQUNBLFdBQUE7QUFOWjtBQVVRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFSWjtBQWNvQjtFQUNJLHVEQUFBO0VBQ0EsV0FBQTtBQVp4QjtBQWNvQjtFQUNJLGlEQUFBO0VBQ0EsV0FBQTtBQVp4QiIsImZpbGUiOiJkaWN0YXRpb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tY29udGVudHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKSA7XG4gICAgXG5cbiAgICBkaXYjZGljdGF0aW9uRWRpdCB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcnktYmx1ZSkgO1xuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgcGFkZGluZzowZW07ICAgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICBkaXYuY2xvc2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlIDtcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGRpdi52aWRlby1wbGF5ZXIge1xuXG4gICAgICAgICAgICB3aWR0aDogMTAwJSA7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwJSA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5yZWFjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDoxMDAlIDtcbiAgICAgICAgICAgIGhlaWdodDoxNSU7XG5cblxuICAgICAgICAgICAgaW9uLWdyaWQgeyAgIFxuICAgICAgICAgICAgICAgIGlvbi1yb3cge1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1jb2wgaW9uLWJ1dHRvbi5ob3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tY29sIGlvbi1idXR0b24uY29vbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYm9yeS1ibHVlKSAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSAgIFxuICAgIH1cbn0iXX0= */");

/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    apiHostUrl: 'http://localhost:8080',
    webHostUrl: 'http://localhost',
    assetRoot: '/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "B0ZR":
/*!****************************!*\
  !*** ./src/app/i18n/en.ts ***!
  \****************************/
/*! exports provided: en */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "en", function() { return en; });
const en = {
    'click.prev.button.to.exit': 'Please click back button to exit this app.',
    'login.fails': 'Login fails. Please check login id and password.',
    'cannot.load.alaysis.stat': 'cannot load statistc data: Please ask to administrator.',
    'login.session.invalid': 'Login session is not valid.',
    'cannot.load.analysis': 'cannot load analysis  data: Please ask to the administrator.',
    'cannot.delete.analysis.row': 'cannot delete a line from the analysis data list : Please ask to the administrator.',
    'cannot.insert.analysis.row': 'cannot insert a new line into the current positoon of analysis data list: Please ask to the administrator.',
    'cannot.add.analysis.row': 'cannot add a new line to analysis  data list: Please ask to the administrator.',
    'cannot.video.analysis.error': '???????????? ????????? ????????? ????????????????????? :  ??????????????? ???????????? ????????????!!!',
    'video.analysis.doing': 'The video is now doing in analysis !!!',
    'cannot.redo.video.analysis': 'The video analysis redo fails : Please ask to the administrator.',
    'cannot.delete.video': 'cannot delete the video : Please ask to the administrator.',
    'cannot.load.video.list': 'cannot load video list : Please ask to the administrator.',
    'cannot.load.user.list': 'cannot load user list : Please ask to the administrator.',
    'filetransfer.success': 'File transfer is done successfully.',
    'filetransfer.fail': 'File transfer fails',
    'filetransfer.desc.needed': 'Please input description for the video to transfer.',
    'signup.fails': 'Singup fails',
    'signup': 'Signup',
    'form.field.invalid': 'The input field is invalid.',
    'cannot.update.dictation': 'cannot update the dictation detail data.',
    'password.invalid': 'The password is invalid',
    'mobile': 'mobile',
    'title': "SDUA",
    'login': "Login",
    'country': "Country",
    'email': 'Email',
    'password': 'Password',
    'name': 'Name',
    'update': 'update',
    'close': 'close',
    'ok': 'ok',
    'cancel': 'cancel',
    'play': 'play',
    'videoList': 'Video List',
    'userList': 'User List',
    'stat': 'Statistics',
    'record': 'Record',
    'transfer': 'Movie Transfer',
    'userlist.cannot.get.video': 'cannot get a video.'
};


/***/ }),

/***/ "Riba":
/*!*****************************************************!*\
  !*** ./src/app/pages/dictation/dictation.module.ts ***!
  \*****************************************************/
/*! exports provided: DictationPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictationPageModule", function() { return DictationPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _dictation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dictation */ "gZlB");







let DictationPageModule = class DictationPageModule {
};
DictationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _dictation__WEBPACK_IMPORTED_MODULE_6__["DictationPage"]
                }
            ])
        ],
        declarations: [_dictation__WEBPACK_IMPORTED_MODULE_6__["DictationPage"]]
    })
], DictationPageModule);



/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./app.component.html */ "VzVu");
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.scss */ "ynWL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./../environments/environment */ "AytR");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var src_app_providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/providers/auth-service/auth-service */ "oNol");








let AppComponent = class AppComponent {
    constructor(platform, router, auth) {
        this.platform = platform;
        this.router = router;
        this.auth = auth;
        this.assetRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].assetRoot;
        this.selectedIndex = 0;
        this.appPages = null;
        this.appPages = [
            {
                title: 'PopupDemo',
                url: '/MainPage',
                icon: 'home.svg'
            },
            {
                title: 'DatePicker',
                url: '/DatePickupPage',
                icon: 'date.svg'
            },
        ];
    }
    /**
       * ????????? ???????????? ????????? ?????? ??????
       */
    login() {
        this.auth.navigateRoot('/LoginPage');
    }
    /**
     * ????????? ????????? ???????????? ????????? ???????????? ????????? ?????? ??????
     */
    logout() {
        this.auth.logout();
        this.auth.navigateRoot('/LoginPage');
    }
    // initializeApp() {
    //   this.platform.ready().then(() => {
    //     this.statusBar.styleDefault();
    //     this.splashScreen.hide();
    //   });
    // }
    ngOnInit() {
        this.selectedIndex = 0;
        // const path = window.location.pathname.split('folder/')[1];
        // if (path !== undefined) {
        //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
        // }
    }
};
AppComponent.ctorParameters = () => [
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] },
    { type: src_app_providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceProvider"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list class=\"ion-no-padding\" >\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item class=\"menuList\" [routerLink]=\"['/LoginPage']\" class=\"ion-no-padding\" class=\"ion-no-margin\">\n              <ion-row class=\"menuList\">\n                <ion-col class=\"defaultMenu\" class=\"ion-no-padding\">\n                  <div class=\"defaultMenu\">????????????</div>\n                </ion-col>\n                <ion-col class=\"arrowRight\" size=\"auto\" class=\"ion-no-padding\">\n                  <div class=\"arrowRight\">\n                    <div class=\"arrowRight\">\n                      <ion-img class=\"arrowRight\" src=\"/assets/icon/logout.svg\"></ion-img>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list id=\"inbox-list\">\n          <!--ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note-->\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n\n<!-- --------------------------------------------------------------------------------------------------------- -->\n\n\n<style>\n  ion-menu {\n    --width: 90%;\n    --max-width: 25rem;\n  }\n\n  ion-item.menuList {\n    --padding-start: 0rem;\n    --inner-padding-end: 0rem;\n  }\n\n  div.menu {\n    position: absolute;\n    background: white;\n    height: 100%;\n  }\n\n  div.menuContent {\n    height: 100%;\n  }\n\n  div.header {\n    background-color: var(--bory-blue);\n  }\n\n  ion-row.header {\n    background-color: var(--bory-blue);\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: solid 0.in rgb(204, 204, 204);\n  }\n\n  ion-label.headerTitle {\n    font-size: 1.7rem;\n    text-align: center;\n    color: white;\n    margin-right: 5rem;\n  }\n\n  ion-thumbnail.thumbnail {\n    width: 5.0rem;\n    height: 5.0rem;\n    background: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  ion-img.thumbnail {\n    width: 3.0rem;\n    height: 3.0rem;\n    border-radius: 50%;\n  }\n\n  button.alert {\n    width: 5.0rem;\n    height: 5.0rem;\n    background: inherit;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  ion-img.alert {\n    width: 1.5rem;\n    height: auto;\n    position: absolute;\n  }\n\n  ion-badge.alert {\n    width: 1rem;\n    height: 1rem;\n    background: var(--pplus-red);\n    border-radius: 50%;\n    color: white;\n    font-size: 0.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    margin: 0rem;\n    margin-left: 0.7rem;\n    margin-bottom: 1rem;\n  }\n\n  div.inner {\n    vertical-align: top;\n  }\n\n  ion-row.menuTitle {\n    padding-left: 2.0rem;\n    padding-top: 2.0rem;\n    padding-bottom: 1.0rem;\n    border-top: solid 0.4rem #f0f0f0;\n    display: flex;\n    align-items: center;\n    background: white;\n  }\n\n  ion-label.menuTitle {\n    width: 100%;\n    font-size: 1.7rem;\n    font-weight: bold;\n    text-align: left;\n  }\n\n  .item-inner {\n    -webkit-padding-end: 0rem;\n    padding-inline-end: 0rem;\n  }\n\n  ion-row.menuList {\n    width: 100%;\n    padding: 1rem 2rem;\n  }\n\n  ion-col.defaultMenu {\n    background: white;\n  }\n\n  div.defaultMenu {\n    color: #737373;\n    background-color: inherit;\n    width: 100%;\n    height: 100%;\n    font-size: 1.3rem;\n    text-align: left;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  div.arrowRight {\n    width: 4.0rem;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: white;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  ion-img.arrowRight {\n    width: 3rem;\n    height: auto;\n  }\n</style>\n");

/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _pages_dictation_dictation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/dictation/dictation.module */ "Riba");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./message */ "oqF8");
/* harmony import */ var _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./providers/auth-service/auth-service */ "oNol");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @ionic/storage */ "e8h1");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @ionic-native/date-picker/ngx */ "ya1t");















let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"],
            _pages_dictation_dictation_module__WEBPACK_IMPORTED_MODULE_1__["DictationPageModule"],
            _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot({
                name: '__mydb',
                driverOrder: ['indexeddb', 'sqlite', 'websql']
            })
        ],
        providers: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"],
            _message__WEBPACK_IMPORTED_MODULE_9__["Message"],
            _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthServiceProvider"],
            ScreenOrientation,
            _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["DatePicker"],
            _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"],
            { provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"], useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"] }
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "fhi6":
/*!****************************!*\
  !*** ./src/app/i18n/ko.ts ***!
  \****************************/
/*! exports provided: ko */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ko", function() { return ko; });
const ko = {
    'click.prev.button.to.exit': '?????? ?????? ?????? ??? ???????????? ???????????????',
    'login.fails': '???????????? ?????????????????????. ???????????? ??????????????? ????????? ?????????',
    'cannot.load.stat': '?????? ???????????? ???????????? ???????????????: ??????????????? ????????? ?????????',
    'login.session.invalid': '????????? ?????? ????????? ???????????? ????????????',
    'cannot.load.analysis': '?????????????????? ??????????????? ?????????????????????.: ??????????????? ????????? ?????????',
    'cannot.delete.analysis.row': '???????????? ??? ????????? ??????????????? ?????????????????????: ??????????????? ????????? ?????????',
    'cannot.insert.analysis.row': '???????????? ??? ????????? ??????????????? ?????????????????????: ??????????????? ????????? ?????????',
    'cannot.add.analysis.row': '???????????? ??? ????????? ??? ?????? ??????????????? ?????????????????????: ??????????????? ????????? ?????????',
    'cannot.video.analysis.error': '???????????? ????????? ????????? ????????????????????? :  ??????????????? ???????????? ????????????!!!',
    'video.analysis.doing': '?????? ???????????? ?????? ???????????? !!!',
    'cannot.redo.video.analysis': '?????? ????????? ????????? ?????????????????? : ??????????????? ????????? ?????????',
    'cannot.delete.video': '????????? ??????????????? ?????????????????? : ??????????????? ????????? ?????????',
    'cannot.load.video.list': '????????? ???????????? ??????????????? ?????????????????? : ??????????????? ????????? ?????????',
    'cannot.load.user.list': '????????? ?????? ???????????? ??????????????? ?????????????????? : ??????????????? ????????? ?????????',
    'filetransfer.success': '?????? ????????? ?????????????????????.',
    'filetransfer.fail': '?????? ?????? ??? ????????? ?????????????????????.',
    'filetransfer.desc.needed': '????????? ???????????? ?????? ????????? ???????????????.',
    'signup.fails': '??????????????? ?????????????????????.',
    'signup': '????????????',
    'form.field.invalid': '?????? ????????? ???????????? ????????????.',
    'cannot.update.dictation': '?????? ???????????? ?????? ??? ????????? ?????????????????????.',
    'password.invalid': '????????? ???????????? ????????????',
    'mobile': '????????? ??????',
    'title': "SDUA",
    'login': "?????????",
    'country': "??????",
    'email': '?????????',
    'password': '??????',
    'name': '??????',
    'update': '??????',
    'close': '??????',
    'ok': '??????',
    'cancel': '??????',
    'play': '??????',
    'videoList': '????????? ?????????',
    'userList': '????????? ?????????',
    'stat': '??????',
    'record': '??????',
    'transfer': '????????? ??????',
    'userlist.cannot.get.video': '????????? ???????????? ????????? ???????????? ????????????.'
};


/***/ }),

/***/ "gZlB":
/*!**********************************************!*\
  !*** ./src/app/pages/dictation/dictation.ts ***!
  \**********************************************/
/*! exports provided: DictationPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DictationPage", function() { return DictationPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_dictation_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./dictation.html */ "n3kl");
/* harmony import */ var _dictation_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dictation.scss */ "10F6");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../providers/auth-service/auth-service */ "oNol");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ionic/angular */ "TEn/");






let DictationPage = class DictationPage {
    constructor(auth, navParams) {
        this.auth = auth;
        this.navParams = navParams;
        this.callback = null;
        this.hotCount = 0;
        this.coolCount = 0;
        this.params = this.navParams.data;
    }
    /**
     * ?????? ???????????? ???????????? ???????????? ??????
     */
    ionViewDidLoad() {
        this.auth.hot().then((res) => {
            this.hotCount = res;
        });
        this.auth.cool().then((res) => {
            this.coolCount = res;
        });
    }
    /**
     * ?????? ????????? ??? ?????? ???????????? ???????????? ?????? : ?????? ???????????? callback ????????? ????????? ?????? ????????? ???????????? ???????????? ??? ?????? ??????.
     */
    ionViewWillEnter() {
    }
    /**
     * ????????? ?????? ??? ?????? ???????????? ???????????? ?????? : ?????? ???????????? callback ????????? ????????? ??????????????? ??????????????? ????????????.
     */
    ionViewWillLeave() {
    }
    /**
     * ?????? ??????(x) ????????? ????????? ??? ???????????? ????????? ?????? ??????
     */
    onClose() {
        this.auth.modal.dismiss(null);
    }
    onHot() {
        this.params.reaction = 'Hot';
        this.auth.hot(this.hotCount).then((res) => {
            this.hotCount = res;
        });
        this.auth.modal.dismiss(this.params);
    }
    onCool() {
        this.params.reaction = 'Cool';
        this.auth.cool(this.coolCount).then((res) => {
            this.coolCount = res;
        });
        this.auth.modal.dismiss(this.params);
    }
};
DictationPage.ctorParameters = () => [
    { type: _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceProvider"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"] }
];
DictationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-dictation',
        template: _raw_loader_dictation_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_dictation_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * ???????????? ?????? ?????? ?????????
     */
], DictationPage);



/***/ }),

/***/ "kLfG":
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./ion-action-sheet.entry.js": [
		"dUtr",
		"common",
		0
	],
	"./ion-alert.entry.js": [
		"Q8AI",
		"common",
		1
	],
	"./ion-app_8.entry.js": [
		"hgI1",
		"common",
		2
	],
	"./ion-avatar_3.entry.js": [
		"CfoV",
		"common",
		3
	],
	"./ion-back-button.entry.js": [
		"Nt02",
		"common",
		4
	],
	"./ion-backdrop.entry.js": [
		"Q2Bp",
		5
	],
	"./ion-button_2.entry.js": [
		"0Pbj",
		"common",
		6
	],
	"./ion-card_5.entry.js": [
		"ydQj",
		"common",
		7
	],
	"./ion-checkbox.entry.js": [
		"4fMi",
		"common",
		8
	],
	"./ion-chip.entry.js": [
		"czK9",
		"common",
		9
	],
	"./ion-col_3.entry.js": [
		"/CAe",
		10
	],
	"./ion-datetime_3.entry.js": [
		"WgF3",
		"common",
		11
	],
	"./ion-fab_3.entry.js": [
		"uQcF",
		"common",
		12
	],
	"./ion-img.entry.js": [
		"wHD8",
		13
	],
	"./ion-infinite-scroll_2.entry.js": [
		"2lz6",
		14
	],
	"./ion-input.entry.js": [
		"ercB",
		"common",
		15
	],
	"./ion-item-option_3.entry.js": [
		"MGMP",
		"common",
		16
	],
	"./ion-item_8.entry.js": [
		"9bur",
		"common",
		17
	],
	"./ion-loading.entry.js": [
		"cABk",
		"common",
		18
	],
	"./ion-menu_3.entry.js": [
		"kyFE",
		"common",
		19
	],
	"./ion-modal.entry.js": [
		"TvZU",
		"common",
		20
	],
	"./ion-nav_2.entry.js": [
		"vnES",
		"common",
		21
	],
	"./ion-popover.entry.js": [
		"qCuA",
		"common",
		22
	],
	"./ion-progress-bar.entry.js": [
		"0tOe",
		"common",
		23
	],
	"./ion-radio_2.entry.js": [
		"h11V",
		"common",
		24
	],
	"./ion-range.entry.js": [
		"XGij",
		"common",
		25
	],
	"./ion-refresher_2.entry.js": [
		"nYbb",
		"common",
		26
	],
	"./ion-reorder_2.entry.js": [
		"smMY",
		"common",
		27
	],
	"./ion-ripple-effect.entry.js": [
		"STjf",
		28
	],
	"./ion-route_4.entry.js": [
		"k5eQ",
		"common",
		29
	],
	"./ion-searchbar.entry.js": [
		"OR5t",
		"common",
		30
	],
	"./ion-segment_2.entry.js": [
		"fSgp",
		"common",
		31
	],
	"./ion-select_3.entry.js": [
		"lfGF",
		"common",
		32
	],
	"./ion-slide_2.entry.js": [
		"5xYT",
		33
	],
	"./ion-spinner.entry.js": [
		"nI0H",
		"common",
		34
	],
	"./ion-split-pane.entry.js": [
		"NAQR",
		35
	],
	"./ion-tab-bar_2.entry.js": [
		"knkW",
		"common",
		36
	],
	"./ion-tab_2.entry.js": [
		"TpdJ",
		"common",
		37
	],
	"./ion-text.entry.js": [
		"ISmu",
		"common",
		38
	],
	"./ion-textarea.entry.js": [
		"U7LX",
		"common",
		39
	],
	"./ion-toast.entry.js": [
		"L3sA",
		"common",
		40
	],
	"./ion-toggle.entry.js": [
		"IUOf",
		"common",
		41
	],
	"./ion-virtual-scroll.entry.js": [
		"8Mb5",
		42
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "kLfG";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "n3kl":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dictation/dictation.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<ion-content>\n<div id=\"dictationEdit\">\n\n  <div class=\"close\">\n    <ion-button (click)=\"onClose()\">\n      <b>X</b>\n    </ion-button>\n  </div>\n  <!-- ?????? ?????? ?????? -->\n\n  <div class=\"video-player\">\n    <a href=\"{{params.url}}\" target=\"_blank\"><img src=\"{{auth.root}}assets/png/pwa.png\" /></a>\n    <iframe  width=\"100%\" height=\"100%\" [src]=\"params.url\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n\n  <!-- ???????????? ????????? ??? -->\n  <div class=\"reaction\">\n    <ion-grid>\n      <ion-row>\n        <ion-col><ion-label>{{hotCount}}</ion-label><ion-button class=\"hot\" (click)='onHot()'>Hot</ion-button></ion-col>\n        <ion-col><ion-label>{{coolCount}}</ion-label><ion-button class=\"cool\" (click)='onCool()'>Cool</ion-button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</div>\n</ion-content>\n\n\n<style>\n\n\n  ion-row.play ion-col ion-button.play {\n    width: 100%; \n  }  \n\n  ion-row.button   ion-col ion-button.cancel {\n    width: 100%;\n  }\n   \n  ion-row.button ion-col ion-button.update {\n    width: 100%;\n  }\n                             \n</style>");

/***/ }),

/***/ "oNol":
/*!********************************************************!*\
  !*** ./src/app/providers/auth-service/auth-service.ts ***!
  \********************************************************/
/*! exports provided: AuthServiceProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthServiceProvider", function() { return AuthServiceProvider; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../environments/environment */ "AytR");
/* harmony import */ var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../common/common */ "v5k/");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../message */ "oqF8");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ionic/storage */ "e8h1");









/*
  Generated class for the this provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
let AuthServiceProvider = class AuthServiceProvider {
    constructor(router, modal, alertCtrl, navCtrl, loadingCtrl, ahttp, platform, message, storage, activateRoute) {
        this.router = router;
        this.modal = modal;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
        this.loadingCtrl = loadingCtrl;
        this.ahttp = ahttp;
        this.platform = platform;
        this.message = message;
        this.storage = storage;
        this.activateRoute = activateRoute;
        this.apiHostUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiHostUrl;
        this.webHostUrl = _environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].webHostUrl;
        this.accessToken = null;
        this.language = 'ko';
        this.okStr = null;
        this.cancelStr = null;
        this.closeStr = null;
        this.package = null;
        this.version = null;
        this.root = "/";
        this.baseHref = "/";
        this.title = '';
        this.user = null;
        this.platform.ready()
            .then((data) => {
            this.storage.get(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].USER)
                .then(user => {
                if (user !== undefined && user != null)
                    this.user = user;
            }, err => {
                this.user = null;
            });
            this.okStr = this.message.get('ok');
            this.cancelStr = this.message.get('cancel');
            this.closeStr = this.message.get('close');
            this.root = "";
            this.baseHref = "./";
            this.package = 'com.youngplussoft.ionicdemo';
            this.version = '1.0.0';
        });
    }
    setTitle(title) {
        this.title = title;
    }
    goBack() {
        this.navCtrl.pop();
    }
    nvr(data) {
        if (data === undefined || data == null) {
            return '';
        }
        else {
            return data;
        }
    }
    naviToMain() {
        document.location.href = '/main';
    }
    getAccessToken() {
        return new Promise((resolve, reject) => {
            if (this.accessToken == null) {
                this.getStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].USER).then((user) => {
                    if (user != null) {
                        resolve(user.accessToken);
                    }
                    else {
                        resolve(null);
                    }
                });
            }
            else {
                resolve(this.accessToken);
            }
        });
    }
    goHome() {
        if (this.navCtrl != null) {
            this.navCtrl.navigateRoot('/home');
        }
    }
    showError(err) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            try {
                if (err.message !== undefined) {
                    this.presentAlert(err.message);
                }
                else {
                    this.presentAlert(JSON.stringify(err));
                }
                if (err.status !== undefined && err.status === 400) {
                    this.navCtrl.navigateRoot('/LoginPage');
                }
            }
            catch (e) {
                this.presentAlert(e);
            }
        });
    }
    showLoading() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const loading = yield this.loadingCtrl.create({
                message: '',
                spinner: 'bubbles',
                cssClass: 'background-color: rgba( 255, 255, 255, 1.0 );',
                translucent: true,
                duration: 2000000000
            });
            loading.present();
            return loading;
        });
    }
    presentAlert(message) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (message === undefined || message == null || message === '') {
                message = 'unreachable url: Please contact the administrator.';
            }
            // const alertController = document.querySelector('ion-alert-controller');
            // await alertController.componentOnReady();
            const alert = yield this.alertCtrl.create({
                header: '??????',
                subHeader: '',
                message: message,
                buttons: ['??????'] // this.auth.message.get('general', 'close')]
            });
            return yield alert.present();
        });
    }
    promptAlert(prompt) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            let resolveFunction;
            let rejectFunction;
            let promise = new Promise((resolve, reject) => {
                resolveFunction = resolve;
                rejectFunction = reject;
            });
            const alert = yield this.alertCtrl.create({
                header: '??????',
                subHeader: '',
                inputs: [{ type: 'text', name: 'description', placeholder: '????????? ??????', id: 'videoDescription' }],
                message: prompt,
                cssClass: 'alertCustomCss',
                buttons: [{
                        text: '??????',
                        role: 'cancel',
                        handler: (data) => {
                            rejectFunction(null);
                        }
                    },
                    {
                        text: '??????',
                        role: 'ok',
                        handler: (data) => {
                            if (data.description === undefined || data.description == null || data.description.trim() === '') {
                                this.presentAlert(this.message.get('filetransfer.desc.needed'));
                                return false;
                            }
                            else {
                                resolveFunction(data.description);
                                return true;
                            }
                        }
                    }]
            });
            alert.present();
            return promise;
            // const alertController = document.querySelector('ion-alert-controller');
            // await alertController.componentOnReady();
        });
    }
    setStorage(key, value) {
        return new Promise(resolve => {
            this.storage.ready().then(() => {
                this.storage.set(key, value).then((res) => {
                    resolve(res);
                });
            });
        });
    }
    getStorage(key) {
        return new Promise(resolve => {
            this.storage.ready().then(() => {
                this.storage.get(key).then((res) => {
                    resolve(res);
                });
            });
        });
    }
    removeStorage(key) {
        return new Promise(resolve => {
            this.storage.ready().then(() => {
                this.storage.remove(key).then((res) => {
                    resolve(res);
                });
            });
        });
    }
    //common/http ================================================== [
    anyToFormData(model, form = null, namespace = '') {
        let formData = form || new FormData();
        for (var propertyName in model) {
            if (!model.hasOwnProperty(propertyName) || model[propertyName] == undefined)
                continue;
            let formKey = namespace ? `${namespace}[${propertyName}]` : propertyName;
            if (model[propertyName] instanceof Date) {
                formData.append(formKey, model[propertyName].toString());
            }
            else if (model[propertyName] instanceof Array) {
                model[propertyName].forEach((element, index) => {
                    if (typeof element != 'object')
                        formData.append(`${formKey}[]`, element);
                    else {
                        const tempFormKey = `${formKey}[${index}]`;
                        this.anyToFormData(element, formData, tempFormKey);
                    }
                });
            }
            else if (typeof model[propertyName] === 'object' && !(model[propertyName] instanceof File)) {
                this.anyToFormData(model[propertyName], formData, formKey);
            }
            else {
                formData.append(formKey, model[propertyName].toString());
            }
        }
        return formData;
    }
    get(uri, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.getAccessToken().then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    var accessToken = value;
                    if (this.isEmpty(accessToken)) {
                        accessToken = '';
                    }
                    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'accessToken': accessToken
                    });
                    const loading = yield this.showLoading();
                    let options = { headers: headers };
                    if (params !== undefined && params != null) {
                        options = { params: params, headers: headers };
                    }
                    this.ahttp.get(this.apiHostUrl + uri, options)
                        .subscribe((res) => {
                        loading.dismiss();
                        resolve(res);
                    }, (err) => {
                        loading.dismiss();
                        reject(err);
                    });
                }));
            }));
        });
    }
    delete(uri, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                this.getAccessToken().then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let accessToken = value;
                    if (this.isEmpty(accessToken)) {
                        accessToken = '';
                    }
                    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                        'Content-Type': 'application/x-www-form-urlencoded',
                        'accessToken': accessToken
                    });
                    let loading = yield this.showLoading();
                    let options = { headers: headers };
                    if (params !== undefined && params != null) {
                        options = { params: params, headers: headers };
                    }
                    this.ahttp.delete(this.apiHostUrl + uri, options)
                        .subscribe((res) => {
                        loading.dismiss();
                        resolve(res);
                    }, (err) => {
                        loading.dismiss();
                        reject(err);
                    });
                }));
            }));
        });
    }
    post2(uri, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getAccessToken().then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let accessToken = value;
                    if (this.isEmpty(accessToken)) {
                        accessToken = '';
                    }
                    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                        'Content-Type': 'multipart/form-data',
                        'accessToken': accessToken
                    });
                    const formData = this.anyToFormData(body);
                    const loading = yield this.showLoading();
                    this.ahttp.post(this.apiHostUrl + uri, formData, { headers: headers })
                        .subscribe((res) => {
                        loading.dismiss();
                        resolve(res);
                    }, (err) => {
                        loading.dismiss();
                        reject(err);
                    });
                }));
            });
        });
    }
    post(uri, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getAccessToken().then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let accessToken = value;
                    if (this.isEmpty(accessToken)) {
                        accessToken = '';
                    }
                    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                        'Content-Type': 'application/json;charset=UTF-8',
                        'accessToken': accessToken
                    });
                    // headers.append('Content-Type', 'application/json;charset=UTF-8');
                    // if( !this.isEmpty(accessToken) ) {
                    //   headers.append('accessToken', accessToken) ;
                    //   console.log('accessToken : '+accessToken);
                    // }
                    // console.log(headers.get('accessToken'));
                    const loading = yield this.showLoading();
                    this.ahttp.post(this.apiHostUrl + uri, body, { headers: headers })
                        .subscribe((res) => {
                        loading.dismiss();
                        resolve(res);
                    }, (err) => {
                        loading.dismiss();
                        reject(err);
                    });
                }));
            });
        });
    }
    put(uri, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getAccessToken().then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let accessToken = value;
                    if (this.isEmpty(accessToken)) {
                        accessToken = '';
                    }
                    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                        'Content-Type': 'application/json;charset=UTF-8',
                        'accessToken': accessToken
                    });
                    const formData = this.anyToFormData(body);
                    const loading = yield this.showLoading();
                    this.ahttp.put(this.apiHostUrl + uri, formData, { headers: headers })
                        .subscribe((res) => {
                        loading.dismiss();
                        resolve(res);
                    }, (err) => {
                        loading.dismiss();
                        reject(err);
                    });
                }));
            });
        });
    }
    put2(uri, body) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getAccessToken().then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    let accessToken = value;
                    if (this.isEmpty(accessToken)) {
                        accessToken = '';
                    }
                    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                        'Content-Type': 'application/json;charset=UTF-8',
                        'accessToken': accessToken
                    });
                    //const formData: FormData = this.anyToFormData(body) ;
                    const loading = yield this.showLoading();
                    this.ahttp.put(this.apiHostUrl + uri, body, { headers: headers })
                        .subscribe((res) => {
                        loading.dismiss();
                        resolve(res);
                    }, (err) => {
                        loading.dismiss();
                        reject(err);
                    });
                }));
            });
        });
    }
    postMultipart(uri, body, params) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            return new Promise((resolve, reject) => {
                this.getAccessToken().then((value) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                    const headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();
                    if (params == null) {
                        params = new URLSearchParams();
                    }
                    const accessToken = value;
                    if (accessToken !== undefined && accessToken != null) {
                        headers.append('accessToken', accessToken);
                    }
                    headers.append('Accept', 'application/json;charset=UTF-8');
                    headers.append('Content-Type', 'multipart/form-data');
                    const loading = yield this.showLoading();
                    this.ahttp.post(this.apiHostUrl + uri, body, { headers: headers })
                        .subscribe((res) => {
                        loading.dismiss();
                        resolve(res);
                    }, (err) => {
                        loading.dismiss();
                        reject(err);
                    });
                }));
            });
        });
    }
    hot(count) {
        if (count)
            return this.setStorage('/hot', count);
        else
            return this.getStorage('/hot');
    }
    cool(count) {
        if (count)
            return this.setStorage('/hot', count);
        else
            return this.getStorage('/hot');
    }
    login(credential) {
        return this.post('/login', { email: credential.email, password: credential.password });
    }
    signup(userInfo) {
        return this.post('/signup', userInfo);
    }
    logout() {
        this.storage.remove(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].USER);
        this.storage.remove(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].PARAMS);
        this.storage.remove(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].VIDEO);
        this.storage.remove(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].STAT_PARAMS);
        this.accessToken = null;
        this.user = null;
        this.navCtrl.navigateRoot('/LoginPage');
    }
    isEmpty(value) {
        if (value == '' || value == null || value == undefined || value == 'null') {
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * ????????? ????????? Promise<user> ???????????? ?????????????????? ???????????? ??????
     */
    getUser() {
        if (this.user !== undefined && this.user != null) {
            return new Promise((resolve, reject) => {
                resolve(this.user);
            });
        }
        else {
            return new Promise((resolve, reject) => {
                this.storage.get(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].USER)
                    .then((user) => {
                    this.user = user;
                    resolve(this.user);
                }, (err) => {
                    reject(err);
                });
            });
        }
    }
    navigateRoot(uri, data) {
        this.navigate('root', uri, data);
    }
    navigateForward(uri, data) {
        this.navigate('forward', uri, data);
    }
    navigateBack(uri, data) {
        this.navigate('back', uri, data);
    }
    navigate(direction, uri, data) {
        if (data === undefined || data == null) {
            this.removeStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].NAVIGATION_EXTRA).then(res => {
                switch (direction) {
                    case 'root':
                        this.navCtrl.navigateRoot(uri);
                        break;
                    case 'forward':
                        this.navCtrl.navigateForward(uri);
                        break;
                    case 'back':
                        this.navCtrl.navigateBack(uri);
                        break;
                }
            });
        }
        else {
            this.setStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].NAVIGATION_EXTRA, data)
                .then(extraData => {
                switch (direction) {
                    case 'root':
                        this.navCtrl.navigateRoot(uri);
                        break;
                    case 'forward':
                        this.navCtrl.navigateForward(uri);
                        break;
                    case 'back':
                        this.navCtrl.navigateBack(uri);
                        break;
                }
            });
        }
    }
    getNavigationExtra() {
        return new Promise((resolve, reject) => {
            this.getStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].NAVIGATION_EXTRA)
                .then(data => {
                //this.removeStorage(common.NAVIGATION_EXTRA) ;
                resolve(data);
            }, err => {
                reject(err);
            });
        });
    }
    navigateWithParams(uri, params) {
        let navigationExtras = {
            queryParams: params
        };
        this.setStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].NAVIGATION_EXTRA, params)
            .then(res => {
            this.router.navigate([uri], navigationExtras);
        });
    }
    isMobileNumber(str) {
        return /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/.test(str);
    }
    isValidEmail(str) {
        return (/^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/.test(str) || /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\-)+\w+\.+\w+$/.test(str));
    }
    getImageUrl(id) {
        return this.apiHostUrl + 'api/attachment/image?id=' + id;
    }
};
AuthServiceProvider.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"] },
    { type: _message__WEBPACK_IMPORTED_MODULE_6__["Message"] },
    { type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"] }
];
AuthServiceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()
], AuthServiceProvider);



/***/ }),

/***/ "oqF8":
/*!****************************!*\
  !*** ./src/app/message.ts ***!
  \****************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Message", function() { return Message; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _i18n_ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./i18n/ko */ "fhi6");
/* harmony import */ var _i18n_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./i18n/en */ "B0ZR");




let Message = class Message {
    constructor() {
        this.lang = 'ko';
        this.langMapArr = {
            ko: _i18n_ko__WEBPACK_IMPORTED_MODULE_2__["ko"],
            en: _i18n_en__WEBPACK_IMPORTED_MODULE_3__["en"]
        };
    }
    setLang(newLang) {
        this.lang = newLang;
    }
    get(nick) {
        return this.langMapArr[this.lang][nick];
    }
};
Message.ctorParameters = () => [];
Message = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], Message);



/***/ }),

/***/ "v5k/":
/*!********************************************!*\
  !*** ./src/app/providers/common/common.ts ***!
  \********************************************/
/*! exports provided: common */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "common", function() { return common; });
const common = {
    USER: 'sdua.user',
    SIGN_UP: 'sign_up',
    PARAMS: 'params',
    STAT_PARAMS: 'stat_params',
    VIDEO: 'video',
    NAVIGATION_EXTRA: 'navigation_extra'
};


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");



const routes = [
    { path: '', redirectTo: 'MainPage', pathMatch: 'full' },
    { path: 'LoginPage', loadChildren: './pages/login/login.module#LoginPageModule' },
    { path: 'DatePickupPage', loadChildren: './pages/datepickup/datepickup.module#DatePickupPageModule' },
    { path: 'MainPage', loadChildren: './pages/main/main.module#MainPageModule' },
    { path: 'DictationPage', loadChildren: './pages/dictation/dictation.module#DictationPageModule' },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, { preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"] })
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "ynWL":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */");

/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "a3Wg");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.log(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./pages/datepickup/datepickup.module": [
		"+N1v",
		"pages-datepickup-datepickup-module"
	],
	"./pages/dictation/dictation.module": [
		"Riba"
	],
	"./pages/login/login.module": [
		"F4UR",
		"pages-login-login-module"
	],
	"./pages/main/main.module": [
		"82nU",
		"pages-main-main-module"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "zn8P";
module.exports = webpackAsyncContext;

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map