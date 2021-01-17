(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /Users/peter/App/ionic-demo/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "10F6":
    /*!************************************************!*\
      !*** ./src/app/pages/dictation/dictation.scss ***!
      \************************************************/

    /*! exports provided: default */

    /***/
    function F6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  padding: 50px;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  background-color: rgba(255, 255, 255, 0);\n}\nion-content div#dictationEdit {\n  border: 3px solid var(--bory-blue);\n  box-shadow: 5px 5px 5px !important;\n  margin: 0 0 0 0;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0;\n  padding: 0em;\n  background: white;\n}\nion-content div#dictationEdit div.close {\n  width: 100%;\n  height: 5%;\n}\nion-content div#dictationEdit div.close ion-button {\n  float: right;\n}\nion-content div#dictationEdit div.close ion-button button {\n  color: white;\n}\nion-content div#dictationEdit div.video-player {\n  width: 100%;\n  height: 80%;\n}\nion-content div#dictationEdit div.reaction {\n  width: 100%;\n  height: 15%;\n}\nion-content div#dictationEdit div.reaction ion-grid ion-row ion-col ion-button.hot {\n  background-color: var(--ion-color-secondary) !important;\n  width: 100%;\n}\nion-content div#dictationEdit div.reaction ion-grid ion-row ion-col ion-button.cool {\n  background-color: var(--ion-bory-blue) !important;\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2RpY3RhdGlvbi5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLHdDQUFBO0FBREo7QUFJSTtFQUNJLGtDQUFBO0VBQ0Esa0NBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDSSxpQkFBQTtBQUZaO0FBS1E7RUFDSSxXQUFBO0VBQ0EsVUFBQTtBQUhaO0FBSVk7RUFDSSxZQUFBO0FBRmhCO0FBR2dCO0VBQ0ksWUFBQTtBQURwQjtBQU9RO0VBRUksV0FBQTtFQUNBLFdBQUE7QUFOWjtBQVVRO0VBQ0ksV0FBQTtFQUNBLFdBQUE7QUFSWjtBQWNvQjtFQUNJLHVEQUFBO0VBQ0EsV0FBQTtBQVp4QjtBQWNvQjtFQUNJLGlEQUFBO0VBQ0EsV0FBQTtBQVp4QiIsImZpbGUiOiJkaWN0YXRpb24uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5pb24tY29udGVudHtcbiAgICBwYWRkaW5nOiA1MHB4O1xuICAgIG1hcmdpbjogMCAwIDAgMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsMjU1LDI1NSwwKSA7XG4gICAgXG5cbiAgICBkaXYjZGljdGF0aW9uRWRpdCB7XG4gICAgICAgIGJvcmRlcjogM3B4IHNvbGlkIHZhcigtLWJvcnktYmx1ZSkgO1xuICAgICAgICBib3gtc2hhZG93OiA1cHggNXB4IDVweCAhaW1wb3J0YW50O1xuICAgICAgICBtYXJnaW46IDAgMCAwIDA7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbi1ib3R0b206MDtcbiAgICAgICAgcGFkZGluZzowZW07ICAgXG4gICAgICAgICAgICBiYWNrZ3JvdW5kOiB3aGl0ZTsgICAgICAgIFxuXG4gICAgICAgIFxuICAgICAgICBkaXYuY2xvc2Uge1xuICAgICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgICBoZWlnaHQ6IDUlIDtcbiAgICAgICAgICAgIGlvbi1idXR0b24ge1xuICAgICAgICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICAgICAgICBidXR0b24ge1xuICAgICAgICAgICAgICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIGRpdi52aWRlby1wbGF5ZXIge1xuXG4gICAgICAgICAgICB3aWR0aDogMTAwJSA7XG4gICAgICAgICAgICBoZWlnaHQ6IDgwJSA7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGRpdi5yZWFjdGlvbiB7XG4gICAgICAgICAgICB3aWR0aDoxMDAlIDtcbiAgICAgICAgICAgIGhlaWdodDoxNSU7XG5cblxuICAgICAgICAgICAgaW9uLWdyaWQgeyAgIFxuICAgICAgICAgICAgICAgIGlvbi1yb3cge1xuXG4gICAgICAgICAgICAgICAgICAgIGlvbi1jb2wgaW9uLWJ1dHRvbi5ob3Qge1xuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXNlY29uZGFyeSkgICFpbXBvcnRhbnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpb24tY29sIGlvbi1idXR0b24uY29vbCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1pb24tYm9yeS1ibHVlKSAgIWltcG9ydGFudDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSAgXG4gICAgICAgICAgICB9ICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBcbiAgICAgICAgfSAgIFxuICAgIH1cbn0iXX0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
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

      /***/
    },

    /***/
    "B0ZR":
    /*!****************************!*\
      !*** ./src/app/i18n/en.ts ***!
      \****************************/

    /*! exports provided: en */

    /***/
    function B0ZR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "en", function () {
        return en;
      });

      var en = {
        'click.prev.button.to.exit': 'Please click back button to exit this app.',
        'login.fails': 'Login fails. Please check login id and password.',
        'cannot.load.alaysis.stat': 'cannot load statistc data: Please ask to administrator.',
        'login.session.invalid': 'Login session is not valid.',
        'cannot.load.analysis': 'cannot load analysis  data: Please ask to the administrator.',
        'cannot.delete.analysis.row': 'cannot delete a line from the analysis data list : Please ask to the administrator.',
        'cannot.insert.analysis.row': 'cannot insert a new line into the current positoon of analysis data list: Please ask to the administrator.',
        'cannot.add.analysis.row': 'cannot add a new line to analysis  data list: Please ask to the administrator.',
        'cannot.video.analysis.error': '서버에서 분석중 오류가 발생하였습니다 :  관리자에게 문의하여 주십시요!!!',
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
      /***/
    },

    /***/
    "Riba":
    /*!*****************************************************!*\
      !*** ./src/app/pages/dictation/dictation.module.ts ***!
      \*****************************************************/

    /*! exports provided: DictationPageModule */

    /***/
    function Riba(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DictationPageModule", function () {
        return DictationPageModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _dictation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./dictation */
      "gZlB");

      var DictationPageModule = function DictationPageModule() {
        _classCallCheck(this, DictationPageModule);
      };

      DictationPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _dictation__WEBPACK_IMPORTED_MODULE_6__["DictationPage"]
        }])],
        declarations: [_dictation__WEBPACK_IMPORTED_MODULE_6__["DictationPage"]]
      })], DictationPageModule);
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./../environments/environment */
      "AytR");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var src_app_providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! src/app/providers/auth-service/auth-service */
      "oNol");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, router, auth) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.router = router;
          this.auth = auth;
          this.assetRoot = _environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].assetRoot;
          this.selectedIndex = 0;
          this.appPages = null;
          this.appPages = [{
            title: 'PopupDemo',
            url: '/MainPage',
            icon: 'home.svg'
          }, {
            title: 'DatePicker',
            url: '/DatePickupPage',
            icon: 'date.svg'
          }];
        }
        /**
           * 로그인 페이지로 전환해 주는 함수
           */


        _createClass(AppComponent, [{
          key: "login",
          value: function login() {
            this.auth.navigateRoot('/LoginPage');
          }
          /**
           * 로그인 정보를 해제하고 로그인 화면으로 전환해 주는 함수
           */

        }, {
          key: "logout",
          value: function logout() {
            this.auth.logout();
            this.auth.navigateRoot('/LoginPage');
          } // initializeApp() {
          //   this.platform.ready().then(() => {
          //     this.statusBar.styleDefault();
          //     this.splashScreen.hide();
          //   });
          // }

        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            this.selectedIndex = 0; // const path = window.location.pathname.split('folder/')[1];
            // if (path !== undefined) {
            //   this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
            // }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }, {
          type: src_app_providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthServiceProvider"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-split-pane contentId=\"main-content\">\n    <ion-menu contentId=\"main-content\" type=\"overlay\">\n      <ion-content>\n        <ion-list class=\"ion-no-padding\" >\n          <ion-menu-toggle auto-hide=\"false\">\n            <ion-item class=\"menuList\" [routerLink]=\"['/LoginPage']\" class=\"ion-no-padding\" class=\"ion-no-margin\">\n              <ion-row class=\"menuList\">\n                <ion-col class=\"defaultMenu\" class=\"ion-no-padding\">\n                  <div class=\"defaultMenu\">로그아웃</div>\n                </ion-col>\n                <ion-col class=\"arrowRight\" size=\"auto\" class=\"ion-no-padding\">\n                  <div class=\"arrowRight\">\n                    <div class=\"arrowRight\">\n                      <ion-img class=\"arrowRight\" src=\"/assets/icon/logout.svg\"></ion-img>\n                    </div>\n                  </div>\n                </ion-col>\n              </ion-row>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n        <ion-list id=\"inbox-list\">\n          <!--ion-list-header>Inbox</ion-list-header>\n          <ion-note>hi@ionicframework.com</ion-note-->\n\n          <ion-menu-toggle auto-hide=\"false\" *ngFor=\"let p of appPages; let i = index\">\n            <ion-item (click)=\"selectedIndex = i\" routerDirection=\"root\" [routerLink]=\"[p.url]\" lines=\"none\" detail=\"false\" [class.selected]=\"selectedIndex == i\">\n              <ion-icon slot=\"start\" [ios]=\"p.icon + '-outline'\" [md]=\"p.icon + '-sharp'\"></ion-icon>\n              <ion-label>{{ p.title }}</ion-label>\n            </ion-item>\n          </ion-menu-toggle>\n        </ion-list>\n\n        <ion-list id=\"labels-list\">\n          <ion-list-header>Labels</ion-list-header>\n\n          <ion-item *ngFor=\"let label of labels\" lines=\"none\">\n            <ion-icon slot=\"start\" ios=\"bookmark-outline\" md=\"bookmark-sharp\"></ion-icon>\n            <ion-label>{{ label }}</ion-label>\n          </ion-item>\n        </ion-list>\n      </ion-content>\n    </ion-menu>\n    <ion-router-outlet id=\"main-content\"></ion-router-outlet>\n  </ion-split-pane>\n</ion-app>\n\n<!-- --------------------------------------------------------------------------------------------------------- -->\n\n\n<style>\n  ion-menu {\n    --width: 90%;\n    --max-width: 25rem;\n  }\n\n  ion-item.menuList {\n    --padding-start: 0rem;\n    --inner-padding-end: 0rem;\n  }\n\n  div.menu {\n    position: absolute;\n    background: white;\n    height: 100%;\n  }\n\n  div.menuContent {\n    height: 100%;\n  }\n\n  div.header {\n    background-color: var(--bory-blue);\n  }\n\n  ion-row.header {\n    background-color: var(--bory-blue);\n    text-align: center;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n    border-bottom: solid 0.in rgb(204, 204, 204);\n  }\n\n  ion-label.headerTitle {\n    font-size: 1.7rem;\n    text-align: center;\n    color: white;\n    margin-right: 5rem;\n  }\n\n  ion-thumbnail.thumbnail {\n    width: 5.0rem;\n    height: 5.0rem;\n    background: inherit;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n\n  ion-img.thumbnail {\n    width: 3.0rem;\n    height: 3.0rem;\n    border-radius: 50%;\n  }\n\n  button.alert {\n    width: 5.0rem;\n    height: 5.0rem;\n    background: inherit;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n  }\n\n  ion-img.alert {\n    width: 1.5rem;\n    height: auto;\n    position: absolute;\n  }\n\n  ion-badge.alert {\n    width: 1rem;\n    height: 1rem;\n    background: var(--pplus-red);\n    border-radius: 50%;\n    color: white;\n    font-size: 0.5rem;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n    position: absolute;\n    margin: 0rem;\n    margin-left: 0.7rem;\n    margin-bottom: 1rem;\n  }\n\n  div.inner {\n    vertical-align: top;\n  }\n\n  ion-row.menuTitle {\n    padding-left: 2.0rem;\n    padding-top: 2.0rem;\n    padding-bottom: 1.0rem;\n    border-top: solid 0.4rem #f0f0f0;\n    display: flex;\n    align-items: center;\n    background: white;\n  }\n\n  ion-label.menuTitle {\n    width: 100%;\n    font-size: 1.7rem;\n    font-weight: bold;\n    text-align: left;\n  }\n\n  .item-inner {\n    -webkit-padding-end: 0rem;\n    padding-inline-end: 0rem;\n  }\n\n  ion-row.menuList {\n    width: 100%;\n    padding: 1rem 2rem;\n  }\n\n  ion-col.defaultMenu {\n    background: white;\n  }\n\n  div.defaultMenu {\n    color: #737373;\n    background-color: inherit;\n    width: 100%;\n    height: 100%;\n    font-size: 1.3rem;\n    text-align: left;\n    display: flex;\n    justify-content: flex-start;\n    align-items: center;\n  }\n\n  div.arrowRight {\n    width: 4.0rem;\n    height: 100%;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background: white;\n    display: flex;\n    justify-content: flex-end;\n    align-items: center;\n  }\n\n  ion-img.arrowRight {\n    width: 3rem;\n    height: auto;\n  }\n</style>\n";
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _pages_dictation_dictation_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./pages/dictation/dictation.module */
      "Riba");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _message__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./message */
      "oqF8");
      /* harmony import */


      var _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./providers/auth-service/auth-service */
      "oNol");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @ionic-native/date-picker/ngx */
      "ya1t");

      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClientModule"], _pages_dictation_dictation_module__WEBPACK_IMPORTED_MODULE_1__["DictationPageModule"], _ionic_storage__WEBPACK_IMPORTED_MODULE_11__["IonicStorageModule"].forRoot({
          name: '__mydb',
          driverOrder: ['indexeddb', 'sqlite', 'websql']
        })],
        providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpClient"], _message__WEBPACK_IMPORTED_MODULE_9__["Message"], _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_10__["AuthServiceProvider"], ScreenOrientation, _ionic_native_date_picker_ngx__WEBPACK_IMPORTED_MODULE_13__["DatePicker"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["DatePipe"], {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouteReuseStrategy"],
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["IonicRouteStrategy"]
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
      })], AppModule);
      /***/
    },

    /***/
    "fhi6":
    /*!****************************!*\
      !*** ./src/app/i18n/ko.ts ***!
      \****************************/

    /*! exports provided: ko */

    /***/
    function fhi6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ko", function () {
        return ko;
      });

      var ko = {
        'click.prev.button.to.exit': '뒤로 버튼 한번 더 누르시면 종료됩니다',
        'login.fails': '로그인에 실패하였습니다. 아이디와 비밀번호를 확인해 주세요',
        'cannot.load.stat': '통계 데이타를 가져오지 못했습니다: 관리자에게 문의해 주세요',
        'login.session.invalid': '로그인 세션 정보가 유효하지 않습니다',
        'cannot.load.analysis': '분석리스트를 가져오는데 실패하였습니다.: 관리자에게 문의해 주세요',
        'cannot.delete.analysis.row': '분석결과 한 라인을 삭제하는데 실패하였습니다: 관리자에게 문의해 주세요',
        'cannot.insert.analysis.row': '분석결과 한 라인을 삽입하는데 실패하였습니다: 관리자에게 문의해 주세요',
        'cannot.add.analysis.row': '분석결과 한 라인을 맨 아래 추가하는데 실패하였습니다: 관리자에게 문의해 주세요',
        'cannot.video.analysis.error': '서버에서 분석중 오류가 발생하였습니다 :  관리자에게 문의하여 주십시요!!!',
        'video.analysis.doing': '아직 서버에서 분석 중입니다 !!!',
        'cannot.redo.video.analysis': '영상 재분석 요청에 실패했습니다 : 관리자에게 문의해 주세요',
        'cannot.delete.video': '영상을 삭제하는데 실패했습니다 : 관리자에게 문의해 주세요',
        'cannot.load.video.list': '비디오 리스트를 가져오는데 실패했습니다 : 관리자에게 문의해 주세요',
        'cannot.load.user.list': '사용자 정보 리스트를 가져오는데 실패했습니다 : 관리자에게 문의해 주세요',
        'filetransfer.success': '파일 전송에 성공하였습니다.',
        'filetransfer.fail': '파일 전송 중 오류가 발생하였습니다.',
        'filetransfer.desc.needed': '전송할 비디오에 대한 설명을 적어주세요.',
        'signup.fails': '회원가입에 실패하였습니다.',
        'signup': '회원가입',
        'form.field.invalid': '입력 필드가 유효하지 않습니다.',
        'cannot.update.dictation': '대화 상세정보 수정 중 오류가 발생하였습니다.',
        'password.invalid': '암호가 유효하지 않습니다',
        'mobile': '핸드폰 번호',
        'title': "SDUA",
        'login': "로그인",
        'country': "나라",
        'email': '이메일',
        'password': '암호',
        'name': '이름',
        'update': '수정',
        'close': '닫기',
        'ok': '확인',
        'cancel': '취소',
        'play': '재생',
        'videoList': '비디오 리스트',
        'userList': '사용자 리스트',
        'stat': '통계',
        'record': '녹화',
        'transfer': '동영상 전송',
        'userlist.cannot.get.video': '선택한 사용자가 등록한 비디오가 없습니다.'
      };
      /***/
    },

    /***/
    "gZlB":
    /*!**********************************************!*\
      !*** ./src/app/pages/dictation/dictation.ts ***!
      \**********************************************/

    /*! exports provided: DictationPage */

    /***/
    function gZlB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "DictationPage", function () {
        return DictationPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_dictation_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./dictation.html */
      "n3kl");
      /* harmony import */


      var _dictation_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./dictation.scss */
      "10F6");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../providers/auth-service/auth-service */
      "oNol");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");

      var DictationPage = /*#__PURE__*/function () {
        function DictationPage(auth, navParams) {
          _classCallCheck(this, DictationPage);

          this.auth = auth;
          this.navParams = navParams;
          this.callback = null;
          this.hotCount = 0;
          this.coolCount = 0;
          this.params = this.navParams.data;
        }
        /**
         * 뷰가 생성될때 자동으로 로드되는 함수
         */


        _createClass(DictationPage, [{
          key: "ionViewDidLoad",
          value: function ionViewDidLoad() {
            var _this = this;

            this.auth.hot().then(function (res) {
              _this.hotCount = res;
            });
            this.auth.cool().then(function (res) {
              _this.coolCount = res;
            });
          }
          /**
           * 뷰에 진입할 때 마다 자동으로 불려지는 함수 : 부모 클래스의 callback 함수를 등록해 주고 동영상 오디오를 자동으로 재 로드 한다.
           */

        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {}
          /**
           * 뷰에서 나올 때 마다 자동으로 불려지는 함수 : 부모 클래스의 callback 함수에 수정된 분석정보를 아규먼트로 전달한다.
           */

        }, {
          key: "ionViewWillLeave",
          value: function ionViewWillLeave() {}
          /**
           * 화면 닫기(x) 버튼을 클릭할 때 불려지는 이벤트 처리 함수
           */

        }, {
          key: "onClose",
          value: function onClose() {
            this.auth.modal.dismiss(null);
          }
        }, {
          key: "onHot",
          value: function onHot() {
            var _this2 = this;

            this.params.reaction = 'Hot';
            this.auth.hot(this.hotCount).then(function (res) {
              _this2.hotCount = res;
            });
            this.auth.modal.dismiss(this.params);
          }
        }, {
          key: "onCool",
          value: function onCool() {
            var _this3 = this;

            this.params.reaction = 'Cool';
            this.auth.cool(this.coolCount).then(function (res) {
              _this3.coolCount = res;
            });
            this.auth.modal.dismiss(this.params);
          }
        }]);

        return DictationPage;
      }();

      DictationPage.ctorParameters = function () {
        return [{
          type: _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceProvider"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["NavParams"]
        }];
      };

      DictationPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-dictation',
        template: _raw_loader_dictation_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
        styles: [_dictation_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })
      /**
       * 분성정보 상세 수정 펭이지
       */
      ], DictationPage);
      /***/
    },

    /***/
    "kLfG":
    /*!*****************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \*****************************************************************************************************************************************/

    /*! no static exports found */

    /***/
    function kLfG(module, exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": ["dUtr", "common", 0],
        "./ion-alert.entry.js": ["Q8AI", "common", 1],
        "./ion-app_8.entry.js": ["hgI1", "common", 2],
        "./ion-avatar_3.entry.js": ["CfoV", "common", 3],
        "./ion-back-button.entry.js": ["Nt02", "common", 4],
        "./ion-backdrop.entry.js": ["Q2Bp", 5],
        "./ion-button_2.entry.js": ["0Pbj", "common", 6],
        "./ion-card_5.entry.js": ["ydQj", "common", 7],
        "./ion-checkbox.entry.js": ["4fMi", "common", 8],
        "./ion-chip.entry.js": ["czK9", "common", 9],
        "./ion-col_3.entry.js": ["/CAe", 10],
        "./ion-datetime_3.entry.js": ["WgF3", "common", 11],
        "./ion-fab_3.entry.js": ["uQcF", "common", 12],
        "./ion-img.entry.js": ["wHD8", 13],
        "./ion-infinite-scroll_2.entry.js": ["2lz6", 14],
        "./ion-input.entry.js": ["ercB", "common", 15],
        "./ion-item-option_3.entry.js": ["MGMP", "common", 16],
        "./ion-item_8.entry.js": ["9bur", "common", 17],
        "./ion-loading.entry.js": ["cABk", "common", 18],
        "./ion-menu_3.entry.js": ["kyFE", "common", 19],
        "./ion-modal.entry.js": ["TvZU", "common", 20],
        "./ion-nav_2.entry.js": ["vnES", "common", 21],
        "./ion-popover.entry.js": ["qCuA", "common", 22],
        "./ion-progress-bar.entry.js": ["0tOe", "common", 23],
        "./ion-radio_2.entry.js": ["h11V", "common", 24],
        "./ion-range.entry.js": ["XGij", "common", 25],
        "./ion-refresher_2.entry.js": ["nYbb", "common", 26],
        "./ion-reorder_2.entry.js": ["smMY", "common", 27],
        "./ion-ripple-effect.entry.js": ["STjf", 28],
        "./ion-route_4.entry.js": ["k5eQ", "common", 29],
        "./ion-searchbar.entry.js": ["OR5t", "common", 30],
        "./ion-segment_2.entry.js": ["fSgp", "common", 31],
        "./ion-select_3.entry.js": ["lfGF", "common", 32],
        "./ion-slide_2.entry.js": ["5xYT", 33],
        "./ion-spinner.entry.js": ["nI0H", "common", 34],
        "./ion-split-pane.entry.js": ["NAQR", 35],
        "./ion-tab-bar_2.entry.js": ["knkW", "common", 36],
        "./ion-tab_2.entry.js": ["TpdJ", "common", 37],
        "./ion-text.entry.js": ["ISmu", "common", 38],
        "./ion-textarea.entry.js": ["U7LX", "common", 39],
        "./ion-toast.entry.js": ["L3sA", "common", 40],
        "./ion-toggle.entry.js": ["IUOf", "common", 41],
        "./ion-virtual-scroll.entry.js": ["8Mb5", 42]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "kLfG";
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    "n3kl":
    /*!**************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/dictation/dictation.html ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function n3kl(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n<div id=\"dictationEdit\">\n\n  <div class=\"close\">\n    <ion-button (click)=\"onClose()\">\n      <b>X</b>\n    </ion-button>\n  </div>\n  <!-- 문장 음성 파형 -->\n\n  <div class=\"video-player\">\n    <a href=\"{{params.url}}\" target=\"_blank\"><img src=\"{{auth.root}}assets/png/pwa.png\" /></a>\n    <iframe  width=\"100%\" height=\"100%\" [src]=\"params.url\" frameborder=\"0\" allowfullscreen></iframe>\n  </div>\n\n  <!-- 문장분석 컨텐츠 표 -->\n  <div class=\"reaction\">\n    <ion-grid>\n      <ion-row>\n        <ion-col><ion-label>{{hotCount}}</ion-label><ion-button class=\"hot\" (click)='onHot()'>Hot</ion-button></ion-col>\n        <ion-col><ion-label>{{coolCount}}</ion-label><ion-button class=\"cool\" (click)='onCool()'>Cool</ion-button></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n\n</div>\n</ion-content>\n\n\n<style>\n\n\n  ion-row.play ion-col ion-button.play {\n    width: 100%; \n  }  \n\n  ion-row.button   ion-col ion-button.cancel {\n    width: 100%;\n  }\n   \n  ion-row.button ion-col ion-button.update {\n    width: 100%;\n  }\n                             \n</style>";
      /***/
    },

    /***/
    "oNol":
    /*!********************************************************!*\
      !*** ./src/app/providers/auth-service/auth-service.ts ***!
      \********************************************************/

    /*! exports provided: AuthServiceProvider */

    /***/
    function oNol(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthServiceProvider", function () {
        return AuthServiceProvider;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./../../../environments/environment */
      "AytR");
      /* harmony import */


      var _common_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./../common/common */
      "v5k/");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @ionic/angular */
      "TEn/");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _message__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../message */
      "oqF8");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic/storage */
      "e8h1");
      /*
        Generated class for the this provider.
      
        See https://angular.io/guide/dependency-injection for more info on providers
        and Angular DI.
      */


      var AuthServiceProvider = /*#__PURE__*/function () {
        function AuthServiceProvider(router, modal, alertCtrl, navCtrl, loadingCtrl, ahttp, platform, message, storage, activateRoute) {
          var _this4 = this;

          _classCallCheck(this, AuthServiceProvider);

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
          this["package"] = null;
          this.version = null;
          this.root = "/";
          this.baseHref = "/";
          this.title = '';
          this.user = null;
          this.platform.ready().then(function (data) {
            _this4.storage.get(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].USER).then(function (user) {
              if (user !== undefined && user != null) _this4.user = user;
            }, function (err) {
              _this4.user = null;
            });

            _this4.okStr = _this4.message.get('ok');
            _this4.cancelStr = _this4.message.get('cancel');
            _this4.closeStr = _this4.message.get('close');
            _this4.root = "";
            _this4.baseHref = "./";
            _this4["package"] = 'com.youngplussoft.ionicdemo';
            _this4.version = '1.0.0';
          });
        }

        _createClass(AuthServiceProvider, [{
          key: "setTitle",
          value: function setTitle(title) {
            this.title = title;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.navCtrl.pop();
          }
        }, {
          key: "nvr",
          value: function nvr(data) {
            if (data === undefined || data == null) {
              return '';
            } else {
              return data;
            }
          }
        }, {
          key: "naviToMain",
          value: function naviToMain() {
            document.location.href = '/main';
          }
        }, {
          key: "getAccessToken",
          value: function getAccessToken() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              if (_this5.accessToken == null) {
                _this5.getStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].USER).then(function (user) {
                  if (user != null) {
                    resolve(user.accessToken);
                  } else {
                    resolve(null);
                  }
                });
              } else {
                resolve(_this5.accessToken);
              }
            });
          }
        }, {
          key: "goHome",
          value: function goHome() {
            if (this.navCtrl != null) {
              this.navCtrl.navigateRoot('/home');
            }
          }
        }, {
          key: "showError",
          value: function showError(err) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      try {
                        if (err.message !== undefined) {
                          this.presentAlert(err.message);
                        } else {
                          this.presentAlert(JSON.stringify(err));
                        }

                        if (err.status !== undefined && err.status === 400) {
                          this.navCtrl.navigateRoot('/LoginPage');
                        }
                      } catch (e) {
                        this.presentAlert(e);
                      }

                    case 1:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "showLoading",
          value: function showLoading() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
              var loading;
              return regeneratorRuntime.wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return this.loadingCtrl.create({
                        message: '',
                        spinner: 'bubbles',
                        cssClass: 'background-color: rgba( 255, 255, 255, 1.0 );',
                        translucent: true,
                        duration: 2000000000
                      });

                    case 2:
                      loading = _context2.sent;
                      loading.present();
                      return _context2.abrupt("return", loading);

                    case 5:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          }
        }, {
          key: "presentAlert",
          value: function presentAlert(message) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
              var alert;
              return regeneratorRuntime.wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      if (message === undefined || message == null || message === '') {
                        message = 'unreachable url: Please contact the administrator.';
                      } // const alertController = document.querySelector('ion-alert-controller');
                      // await alertController.componentOnReady();


                      _context3.next = 3;
                      return this.alertCtrl.create({
                        header: '안내',
                        subHeader: '',
                        message: message,
                        buttons: ['확인'] // this.auth.message.get('general', 'close')]

                      });

                    case 3:
                      alert = _context3.sent;
                      _context3.next = 6;
                      return alert.present();

                    case 6:
                      return _context3.abrupt("return", _context3.sent);

                    case 7:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "promptAlert",
          value: function promptAlert(prompt) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee4() {
              var _this6 = this;

              var resolveFunction, rejectFunction, promise, alert;
              return regeneratorRuntime.wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      promise = new Promise(function (resolve, reject) {
                        resolveFunction = resolve;
                        rejectFunction = reject;
                      });
                      _context4.next = 3;
                      return this.alertCtrl.create({
                        header: '알림',
                        subHeader: '',
                        inputs: [{
                          type: 'text',
                          name: 'description',
                          placeholder: '비디오 설명',
                          id: 'videoDescription'
                        }],
                        message: prompt,
                        cssClass: 'alertCustomCss',
                        buttons: [{
                          text: '취소',
                          role: 'cancel',
                          handler: function handler(data) {
                            rejectFunction(null);
                          }
                        }, {
                          text: '확인',
                          role: 'ok',
                          handler: function handler(data) {
                            if (data.description === undefined || data.description == null || data.description.trim() === '') {
                              _this6.presentAlert(_this6.message.get('filetransfer.desc.needed'));

                              return false;
                            } else {
                              resolveFunction(data.description);
                              return true;
                            }
                          }
                        }]
                      });

                    case 3:
                      alert = _context4.sent;
                      alert.present();
                      return _context4.abrupt("return", promise);

                    case 6:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "setStorage",
          value: function setStorage(key, value) {
            var _this7 = this;

            return new Promise(function (resolve) {
              _this7.storage.ready().then(function () {
                _this7.storage.set(key, value).then(function (res) {
                  resolve(res);
                });
              });
            });
          }
        }, {
          key: "getStorage",
          value: function getStorage(key) {
            var _this8 = this;

            return new Promise(function (resolve) {
              _this8.storage.ready().then(function () {
                _this8.storage.get(key).then(function (res) {
                  resolve(res);
                });
              });
            });
          }
        }, {
          key: "removeStorage",
          value: function removeStorage(key) {
            var _this9 = this;

            return new Promise(function (resolve) {
              _this9.storage.ready().then(function () {
                _this9.storage.remove(key).then(function (res) {
                  resolve(res);
                });
              });
            });
          } //common/http ================================================== [

        }, {
          key: "anyToFormData",
          value: function anyToFormData(model) {
            var _this10 = this;

            var form = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
            var namespace = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : '';
            var formData = form || new FormData();

            var _loop = function _loop() {
              if (!model.hasOwnProperty(propertyName) || model[propertyName] == undefined) return "continue";
              var formKey = namespace ? "".concat(namespace, "[").concat(propertyName, "]") : propertyName;

              if (model[propertyName] instanceof Date) {
                formData.append(formKey, model[propertyName].toString());
              } else if (model[propertyName] instanceof Array) {
                model[propertyName].forEach(function (element, index) {
                  if (typeof element != 'object') formData.append("".concat(formKey, "[]"), element);else {
                    var tempFormKey = "".concat(formKey, "[").concat(index, "]");

                    _this10.anyToFormData(element, formData, tempFormKey);
                  }
                });
              } else if (typeof model[propertyName] === 'object' && !(model[propertyName] instanceof File)) {
                _this10.anyToFormData(model[propertyName], formData, formKey);
              } else {
                formData.append(formKey, model[propertyName].toString());
              }
            };

            for (var propertyName in model) {
              var _ret = _loop();

              if (_ret === "continue") continue;
            }

            return formData;
          }
        }, {
          key: "get",
          value: function get(uri, params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee7() {
              var _this11 = this;

              return regeneratorRuntime.wrap(function _callee7$(_context7) {
                while (1) {
                  switch (_context7.prev = _context7.next) {
                    case 0:
                      return _context7.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this11, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee6() {
                          var _this12 = this;

                          return regeneratorRuntime.wrap(function _callee6$(_context6) {
                            while (1) {
                              switch (_context6.prev = _context6.next) {
                                case 0:
                                  this.getAccessToken().then(function (value) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this12, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee5() {
                                      var accessToken, headers, loading, options;
                                      return regeneratorRuntime.wrap(function _callee5$(_context5) {
                                        while (1) {
                                          switch (_context5.prev = _context5.next) {
                                            case 0:
                                              accessToken = value;

                                              if (this.isEmpty(accessToken)) {
                                                accessToken = '';
                                              }

                                              headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                                'Content-Type': 'application/x-www-form-urlencoded',
                                                'accessToken': accessToken
                                              });
                                              _context5.next = 5;
                                              return this.showLoading();

                                            case 5:
                                              loading = _context5.sent;
                                              options = {
                                                headers: headers
                                              };

                                              if (params !== undefined && params != null) {
                                                options = {
                                                  params: params,
                                                  headers: headers
                                                };
                                              }

                                              this.ahttp.get(this.apiHostUrl + uri, options).subscribe(function (res) {
                                                loading.dismiss();
                                                resolve(res);
                                              }, function (err) {
                                                loading.dismiss();
                                                reject(err);
                                              });

                                            case 9:
                                            case "end":
                                              return _context5.stop();
                                          }
                                        }
                                      }, _callee5, this);
                                    }));
                                  });

                                case 1:
                                case "end":
                                  return _context6.stop();
                              }
                            }
                          }, _callee6, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context7.stop();
                  }
                }
              }, _callee7);
            }));
          }
        }, {
          key: "delete",
          value: function _delete(uri, params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee10() {
              var _this13 = this;

              return regeneratorRuntime.wrap(function _callee10$(_context10) {
                while (1) {
                  switch (_context10.prev = _context10.next) {
                    case 0:
                      return _context10.abrupt("return", new Promise(function (resolve, reject) {
                        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this13, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee9() {
                          var _this14 = this;

                          return regeneratorRuntime.wrap(function _callee9$(_context9) {
                            while (1) {
                              switch (_context9.prev = _context9.next) {
                                case 0:
                                  this.getAccessToken().then(function (value) {
                                    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this14, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee8() {
                                      var accessToken, headers, loading, options;
                                      return regeneratorRuntime.wrap(function _callee8$(_context8) {
                                        while (1) {
                                          switch (_context8.prev = _context8.next) {
                                            case 0:
                                              accessToken = value;

                                              if (this.isEmpty(accessToken)) {
                                                accessToken = '';
                                              }

                                              headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                                'Content-Type': 'application/x-www-form-urlencoded',
                                                'accessToken': accessToken
                                              });
                                              _context8.next = 5;
                                              return this.showLoading();

                                            case 5:
                                              loading = _context8.sent;
                                              options = {
                                                headers: headers
                                              };

                                              if (params !== undefined && params != null) {
                                                options = {
                                                  params: params,
                                                  headers: headers
                                                };
                                              }

                                              this.ahttp["delete"](this.apiHostUrl + uri, options).subscribe(function (res) {
                                                loading.dismiss();
                                                resolve(res);
                                              }, function (err) {
                                                loading.dismiss();
                                                reject(err);
                                              });

                                            case 9:
                                            case "end":
                                              return _context8.stop();
                                          }
                                        }
                                      }, _callee8, this);
                                    }));
                                  });

                                case 1:
                                case "end":
                                  return _context9.stop();
                              }
                            }
                          }, _callee9, this);
                        }));
                      }));

                    case 1:
                    case "end":
                      return _context10.stop();
                  }
                }
              }, _callee10);
            }));
          }
        }, {
          key: "post2",
          value: function post2(uri, body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee12() {
              var _this15 = this;

              return regeneratorRuntime.wrap(function _callee12$(_context12) {
                while (1) {
                  switch (_context12.prev = _context12.next) {
                    case 0:
                      return _context12.abrupt("return", new Promise(function (resolve, reject) {
                        _this15.getAccessToken().then(function (value) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this15, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee11() {
                            var accessToken, headers, formData, loading;
                            return regeneratorRuntime.wrap(function _callee11$(_context11) {
                              while (1) {
                                switch (_context11.prev = _context11.next) {
                                  case 0:
                                    accessToken = value;

                                    if (this.isEmpty(accessToken)) {
                                      accessToken = '';
                                    }

                                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                      'Content-Type': 'multipart/form-data',
                                      'accessToken': accessToken
                                    });
                                    formData = this.anyToFormData(body);
                                    _context11.next = 6;
                                    return this.showLoading();

                                  case 6:
                                    loading = _context11.sent;
                                    this.ahttp.post(this.apiHostUrl + uri, formData, {
                                      headers: headers
                                    }).subscribe(function (res) {
                                      loading.dismiss();
                                      resolve(res);
                                    }, function (err) {
                                      loading.dismiss();
                                      reject(err);
                                    });

                                  case 8:
                                  case "end":
                                    return _context11.stop();
                                }
                              }
                            }, _callee11, this);
                          }));
                        });
                      }));

                    case 1:
                    case "end":
                      return _context12.stop();
                  }
                }
              }, _callee12);
            }));
          }
        }, {
          key: "post",
          value: function post(uri, body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee14() {
              var _this16 = this;

              return regeneratorRuntime.wrap(function _callee14$(_context14) {
                while (1) {
                  switch (_context14.prev = _context14.next) {
                    case 0:
                      return _context14.abrupt("return", new Promise(function (resolve, reject) {
                        _this16.getAccessToken().then(function (value) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this16, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee13() {
                            var accessToken, headers, loading;
                            return regeneratorRuntime.wrap(function _callee13$(_context13) {
                              while (1) {
                                switch (_context13.prev = _context13.next) {
                                  case 0:
                                    accessToken = value;

                                    if (this.isEmpty(accessToken)) {
                                      accessToken = '';
                                    }

                                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                      'Content-Type': 'application/json;charset=UTF-8',
                                      'accessToken': accessToken
                                    }); // headers.append('Content-Type', 'application/json;charset=UTF-8');
                                    // if( !this.isEmpty(accessToken) ) {
                                    //   headers.append('accessToken', accessToken) ;
                                    //   console.log('accessToken : '+accessToken);
                                    // }
                                    // console.log(headers.get('accessToken'));

                                    _context13.next = 5;
                                    return this.showLoading();

                                  case 5:
                                    loading = _context13.sent;
                                    this.ahttp.post(this.apiHostUrl + uri, body, {
                                      headers: headers
                                    }).subscribe(function (res) {
                                      loading.dismiss();
                                      resolve(res);
                                    }, function (err) {
                                      loading.dismiss();
                                      reject(err);
                                    });

                                  case 7:
                                  case "end":
                                    return _context13.stop();
                                }
                              }
                            }, _callee13, this);
                          }));
                        });
                      }));

                    case 1:
                    case "end":
                      return _context14.stop();
                  }
                }
              }, _callee14);
            }));
          }
        }, {
          key: "put",
          value: function put(uri, body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee16() {
              var _this17 = this;

              return regeneratorRuntime.wrap(function _callee16$(_context16) {
                while (1) {
                  switch (_context16.prev = _context16.next) {
                    case 0:
                      return _context16.abrupt("return", new Promise(function (resolve, reject) {
                        _this17.getAccessToken().then(function (value) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this17, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee15() {
                            var accessToken, headers, formData, loading;
                            return regeneratorRuntime.wrap(function _callee15$(_context15) {
                              while (1) {
                                switch (_context15.prev = _context15.next) {
                                  case 0:
                                    accessToken = value;

                                    if (this.isEmpty(accessToken)) {
                                      accessToken = '';
                                    }

                                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                      'Content-Type': 'application/json;charset=UTF-8',
                                      'accessToken': accessToken
                                    });
                                    formData = this.anyToFormData(body);
                                    _context15.next = 6;
                                    return this.showLoading();

                                  case 6:
                                    loading = _context15.sent;
                                    this.ahttp.put(this.apiHostUrl + uri, formData, {
                                      headers: headers
                                    }).subscribe(function (res) {
                                      loading.dismiss();
                                      resolve(res);
                                    }, function (err) {
                                      loading.dismiss();
                                      reject(err);
                                    });

                                  case 8:
                                  case "end":
                                    return _context15.stop();
                                }
                              }
                            }, _callee15, this);
                          }));
                        });
                      }));

                    case 1:
                    case "end":
                      return _context16.stop();
                  }
                }
              }, _callee16);
            }));
          }
        }, {
          key: "put2",
          value: function put2(uri, body) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee18() {
              var _this18 = this;

              return regeneratorRuntime.wrap(function _callee18$(_context18) {
                while (1) {
                  switch (_context18.prev = _context18.next) {
                    case 0:
                      return _context18.abrupt("return", new Promise(function (resolve, reject) {
                        _this18.getAccessToken().then(function (value) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this18, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee17() {
                            var accessToken, headers, loading;
                            return regeneratorRuntime.wrap(function _callee17$(_context17) {
                              while (1) {
                                switch (_context17.prev = _context17.next) {
                                  case 0:
                                    accessToken = value;

                                    if (this.isEmpty(accessToken)) {
                                      accessToken = '';
                                    }

                                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]({
                                      'Content-Type': 'application/json;charset=UTF-8',
                                      'accessToken': accessToken
                                    }); //const formData: FormData = this.anyToFormData(body) ;

                                    _context17.next = 5;
                                    return this.showLoading();

                                  case 5:
                                    loading = _context17.sent;
                                    this.ahttp.put(this.apiHostUrl + uri, body, {
                                      headers: headers
                                    }).subscribe(function (res) {
                                      loading.dismiss();
                                      resolve(res);
                                    }, function (err) {
                                      loading.dismiss();
                                      reject(err);
                                    });

                                  case 7:
                                  case "end":
                                    return _context17.stop();
                                }
                              }
                            }, _callee17, this);
                          }));
                        });
                      }));

                    case 1:
                    case "end":
                      return _context18.stop();
                  }
                }
              }, _callee18);
            }));
          }
        }, {
          key: "postMultipart",
          value: function postMultipart(uri, body, params) {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee20() {
              var _this19 = this;

              return regeneratorRuntime.wrap(function _callee20$(_context20) {
                while (1) {
                  switch (_context20.prev = _context20.next) {
                    case 0:
                      return _context20.abrupt("return", new Promise(function (resolve, reject) {
                        _this19.getAccessToken().then(function (value) {
                          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(_this19, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee19() {
                            var headers, accessToken, loading;
                            return regeneratorRuntime.wrap(function _callee19$(_context19) {
                              while (1) {
                                switch (_context19.prev = _context19.next) {
                                  case 0:
                                    headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpHeaders"]();

                                    if (params == null) {
                                      params = new URLSearchParams();
                                    }

                                    accessToken = value;

                                    if (accessToken !== undefined && accessToken != null) {
                                      headers.append('accessToken', accessToken);
                                    }

                                    headers.append('Accept', 'application/json;charset=UTF-8');
                                    headers.append('Content-Type', 'multipart/form-data');
                                    _context19.next = 8;
                                    return this.showLoading();

                                  case 8:
                                    loading = _context19.sent;
                                    this.ahttp.post(this.apiHostUrl + uri, body, {
                                      headers: headers
                                    }).subscribe(function (res) {
                                      loading.dismiss();
                                      resolve(res);
                                    }, function (err) {
                                      loading.dismiss();
                                      reject(err);
                                    });

                                  case 10:
                                  case "end":
                                    return _context19.stop();
                                }
                              }
                            }, _callee19, this);
                          }));
                        });
                      }));

                    case 1:
                    case "end":
                      return _context20.stop();
                  }
                }
              }, _callee20);
            }));
          }
        }, {
          key: "hot",
          value: function hot(count) {
            if (count) return this.setStorage('/hot', count);else return this.getStorage('/hot');
          }
        }, {
          key: "cool",
          value: function cool(count) {
            if (count) return this.setStorage('/hot', count);else return this.getStorage('/hot');
          }
        }, {
          key: "login",
          value: function login(credential) {
            return this.post('/login', {
              email: credential.email,
              password: credential.password
            });
          }
        }, {
          key: "signup",
          value: function signup(userInfo) {
            return this.post('/signup', userInfo);
          }
        }, {
          key: "logout",
          value: function logout() {
            this.storage.remove(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].USER);
            this.storage.remove(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].PARAMS);
            this.storage.remove(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].VIDEO);
            this.storage.remove(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].STAT_PARAMS);
            this.accessToken = null;
            this.user = null;
            this.navCtrl.navigateRoot('/LoginPage');
          }
        }, {
          key: "isEmpty",
          value: function isEmpty(value) {
            if (value == '' || value == null || value == undefined || value == 'null') {
              return true;
            } else {
              return false;
            }
          }
          /**
           * 사용자 정보를 Promise<user> 형식으로 스토리지에서 가져오는 함수
           */

        }, {
          key: "getUser",
          value: function getUser() {
            var _this20 = this;

            if (this.user !== undefined && this.user != null) {
              return new Promise(function (resolve, reject) {
                resolve(_this20.user);
              });
            } else {
              return new Promise(function (resolve, reject) {
                _this20.storage.get(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].USER).then(function (user) {
                  _this20.user = user;
                  resolve(_this20.user);
                }, function (err) {
                  reject(err);
                });
              });
            }
          }
        }, {
          key: "navigateRoot",
          value: function navigateRoot(uri, data) {
            this.navigate('root', uri, data);
          }
        }, {
          key: "navigateForward",
          value: function navigateForward(uri, data) {
            this.navigate('forward', uri, data);
          }
        }, {
          key: "navigateBack",
          value: function navigateBack(uri, data) {
            this.navigate('back', uri, data);
          }
        }, {
          key: "navigate",
          value: function navigate(direction, uri, data) {
            var _this21 = this;

            if (data === undefined || data == null) {
              this.removeStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].NAVIGATION_EXTRA).then(function (res) {
                switch (direction) {
                  case 'root':
                    _this21.navCtrl.navigateRoot(uri);

                    break;

                  case 'forward':
                    _this21.navCtrl.navigateForward(uri);

                    break;

                  case 'back':
                    _this21.navCtrl.navigateBack(uri);

                    break;
                }
              });
            } else {
              this.setStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].NAVIGATION_EXTRA, data).then(function (extraData) {
                switch (direction) {
                  case 'root':
                    _this21.navCtrl.navigateRoot(uri);

                    break;

                  case 'forward':
                    _this21.navCtrl.navigateForward(uri);

                    break;

                  case 'back':
                    _this21.navCtrl.navigateBack(uri);

                    break;
                }
              });
            }
          }
        }, {
          key: "getNavigationExtra",
          value: function getNavigationExtra() {
            var _this22 = this;

            return new Promise(function (resolve, reject) {
              _this22.getStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].NAVIGATION_EXTRA).then(function (data) {
                //this.removeStorage(common.NAVIGATION_EXTRA) ;
                resolve(data);
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "navigateWithParams",
          value: function navigateWithParams(uri, params) {
            var _this23 = this;

            var navigationExtras = {
              queryParams: params
            };
            this.setStorage(_common_common__WEBPACK_IMPORTED_MODULE_2__["common"].NAVIGATION_EXTRA, params).then(function (res) {
              _this23.router.navigate([uri], navigationExtras);
            });
          }
        }, {
          key: "isMobileNumber",
          value: function isMobileNumber(str) {
            return /^01(?:0|1|[6-9])(?:\d{3}|\d{4})\d{4}$/.test(str);
          }
        }, {
          key: "isValidEmail",
          value: function isValidEmail(str) {
            return /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\.)+\w+$/.test(str) || /^[_a-z0-9-]+(.[_a-z0-9-]+)*@(?:\w+\-)+\w+\.+\w+$/.test(str);
          }
        }, {
          key: "getImageUrl",
          value: function getImageUrl(id) {
            return this.apiHostUrl + 'api/attachment/image?id=' + id;
          }
        }]);

        return AuthServiceProvider;
      }();

      AuthServiceProvider.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["ModalController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["AlertController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["NavController"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["LoadingController"]
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["Platform"]
        }, {
          type: _message__WEBPACK_IMPORTED_MODULE_6__["Message"]
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_8__["Storage"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"]
        }];
      };

      AuthServiceProvider = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Injectable"])()], AuthServiceProvider);
      /***/
    },

    /***/
    "oqF8":
    /*!****************************!*\
      !*** ./src/app/message.ts ***!
      \****************************/

    /*! exports provided: Message */

    /***/
    function oqF8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "Message", function () {
        return Message;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _i18n_ko__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./i18n/ko */
      "fhi6");
      /* harmony import */


      var _i18n_en__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./i18n/en */
      "B0ZR");

      var Message = /*#__PURE__*/function () {
        function Message() {
          _classCallCheck(this, Message);

          this.lang = 'ko';
          this.langMapArr = {
            ko: _i18n_ko__WEBPACK_IMPORTED_MODULE_2__["ko"],
            en: _i18n_en__WEBPACK_IMPORTED_MODULE_3__["en"]
          };
        }

        _createClass(Message, [{
          key: "setLang",
          value: function setLang(newLang) {
            this.lang = newLang;
          }
        }, {
          key: "get",
          value: function get(nick) {
            return this.langMapArr[this.lang][nick];
          }
        }]);

        return Message;
      }();

      Message.ctorParameters = function () {
        return [];
      };

      Message = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], Message);
      /***/
    },

    /***/
    "v5k/":
    /*!********************************************!*\
      !*** ./src/app/providers/common/common.ts ***!
      \********************************************/

    /*! exports provided: common */

    /***/
    function v5k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "common", function () {
        return common;
      });

      var common = {
        USER: 'sdua.user',
        SIGN_UP: 'sign_up',
        PARAMS: 'params',
        STAT_PARAMS: 'stat_params',
        VIDEO: 'video',
        NAVIGATION_EXTRA: 'navigation_extra'
      };
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        redirectTo: 'MainPage',
        pathMatch: 'full'
      }, {
        path: 'LoginPage',
        loadChildren: './pages/login/login.module#LoginPageModule'
      }, {
        path: 'DatePickupPage',
        loadChildren: './pages/datepickup/datepickup.module#DatePickupPageModule'
      }, {
        path: 'MainPage',
        loadChildren: './pages/main/main.module#MainPageModule'
      }, {
        path: 'DictationPage',
        loadChildren: './pages/dictation/dictation.module#DictationPageModule'
      }];

      var AppRoutingModule = function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      };

      AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_2__["PreloadAllModules"]
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
      })], AppRoutingModule);
      /***/
    },

    /***/
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-menu ion-content {\n  --background: var(--ion-item-background, var(--ion-background-color, #fff));\n}\n\nion-menu.md ion-content {\n  --padding-start: 8px;\n  --padding-end: 8px;\n  --padding-top: 20px;\n  --padding-bottom: 20px;\n}\n\nion-menu.md ion-list {\n  padding: 20px 0;\n}\n\nion-menu.md ion-note {\n  margin-bottom: 30px;\n}\n\nion-menu.md ion-list-header,\nion-menu.md ion-note {\n  padding-left: 10px;\n}\n\nion-menu.md ion-list#inbox-list {\n  border-bottom: 1px solid var(--ion-color-step-150, #d7d8da);\n}\n\nion-menu.md ion-list#inbox-list ion-list-header {\n  font-size: 22px;\n  font-weight: 600;\n  min-height: 20px;\n}\n\nion-menu.md ion-list#labels-list ion-list-header {\n  font-size: 16px;\n  margin-bottom: 18px;\n  color: #757575;\n  min-height: 26px;\n}\n\nion-menu.md ion-item {\n  --padding-start: 10px;\n  --padding-end: 10px;\n  border-radius: 4px;\n}\n\nion-menu.md ion-item.selected {\n  --background: rgba(var(--ion-color-primary-rgb), 0.14);\n}\n\nion-menu.md ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.md ion-item ion-icon {\n  color: #616e7e;\n}\n\nion-menu.md ion-item ion-label {\n  font-weight: 500;\n}\n\nion-menu.ios ion-content {\n  --padding-bottom: 20px;\n}\n\nion-menu.ios ion-list {\n  padding: 20px 0 0 0;\n}\n\nion-menu.ios ion-note {\n  line-height: 24px;\n  margin-bottom: 20px;\n}\n\nion-menu.ios ion-item {\n  --padding-start: 16px;\n  --padding-end: 16px;\n  --min-height: 50px;\n}\n\nion-menu.ios ion-item.selected ion-icon {\n  color: var(--ion-color-primary);\n}\n\nion-menu.ios ion-item ion-icon {\n  font-size: 24px;\n  color: #73849a;\n}\n\nion-menu.ios ion-list#labels-list ion-list-header {\n  margin-bottom: 8px;\n}\n\nion-menu.ios ion-list-header,\nion-menu.ios ion-note {\n  padding-left: 16px;\n  padding-right: 16px;\n}\n\nion-menu.ios ion-note {\n  margin-bottom: 8px;\n}\n\nion-note {\n  display: inline-block;\n  font-size: 16px;\n  color: var(--ion-color-medium-shade);\n}\n\nion-item.selected {\n  --color: var(--ion-color-primary);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJFQUFBO0FBQ0Y7O0FBRUE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxzQkFBQTtBQUNGOztBQUVBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0UsbUJBQUE7QUFDRjs7QUFFQTs7RUFFRSxrQkFBQTtBQUNGOztBQUVBO0VBQ0UsMkRBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGdCQUFBO0FBQUY7O0FBR0E7RUFDRSxlQUFBO0VBRUEsbUJBQUE7RUFFQSxjQUFBO0VBRUEsZ0JBQUE7QUFIRjs7QUFNQTtFQUNFLHFCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0RBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxjQUFBO0FBSEY7O0FBTUE7RUFDRSxnQkFBQTtBQUhGOztBQU1BO0VBQ0Usc0JBQUE7QUFIRjs7QUFNQTtFQUNFLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxpQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFIRjs7QUFNQTtFQUNFLCtCQUFBO0FBSEY7O0FBTUE7RUFDRSxlQUFBO0VBQ0EsY0FBQTtBQUhGOztBQU1BO0VBQ0Usa0JBQUE7QUFIRjs7QUFNQTs7RUFFRSxrQkFBQTtFQUNBLG1CQUFBO0FBSEY7O0FBTUE7RUFDRSxrQkFBQTtBQUhGOztBQU1BO0VBQ0UscUJBQUE7RUFDQSxlQUFBO0VBRUEsb0NBQUE7QUFKRjs7QUFPQTtFQUNFLGlDQUFBO0FBSkYiLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaW9uLW1lbnUgaW9uLWNvbnRlbnQge1xuICAtLWJhY2tncm91bmQ6IHZhcigtLWlvbi1pdGVtLWJhY2tncm91bmQsIHZhcigtLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLCAjZmZmKSk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLXN0YXJ0OiA4cHg7XG4gIC0tcGFkZGluZy1lbmQ6IDhweDtcbiAgLS1wYWRkaW5nLXRvcDogMjBweDtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3Qge1xuICBwYWRkaW5nOiAyMHB4IDA7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1ub3RlIHtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUubWQgaW9uLW5vdGUge1xuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1saXN0I2luYm94LWxpc3Qge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdmFyKC0taW9uLWNvbG9yLXN0ZXAtMTUwLCAjZDdkOGRhKTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjaW5ib3gtbGlzdCBpb24tbGlzdC1oZWFkZXIge1xuICBmb250LXNpemU6IDIycHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG5cbiAgbWluLWhlaWdodDogMjBweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgZm9udC1zaXplOiAxNnB4O1xuXG4gIG1hcmdpbi1ib3R0b206IDE4cHg7XG5cbiAgY29sb3I6ICM3NTc1NzU7XG5cbiAgbWluLWhlaWdodDogMjZweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0ge1xuICAtLXBhZGRpbmctc3RhcnQ6IDEwcHg7XG4gIC0tcGFkZGluZy1lbmQ6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0uc2VsZWN0ZWQge1xuICAtLWJhY2tncm91bmQ6IHJnYmEodmFyKC0taW9uLWNvbG9yLXByaW1hcnktcmdiKSwgMC4xNCk7XG59XG5cbmlvbi1tZW51Lm1kIGlvbi1pdGVtLnNlbGVjdGVkIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBjb2xvcjogIzYxNmU3ZTtcbn1cblxuaW9uLW1lbnUubWQgaW9uLWl0ZW0gaW9uLWxhYmVsIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1jb250ZW50IHtcbiAgLS1wYWRkaW5nLWJvdHRvbTogMjBweDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1saXN0IHtcbiAgcGFkZGluZzogMjBweCAwIDAgMDtcbn1cblxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbmlvbi1tZW51LmlvcyBpb24taXRlbSB7XG4gIC0tcGFkZGluZy1zdGFydDogMTZweDtcbiAgLS1wYWRkaW5nLWVuZDogMTZweDtcbiAgLS1taW4taGVpZ2h0OiA1MHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0uc2VsZWN0ZWQgaW9uLWljb24ge1xuICBjb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWl0ZW0gaW9uLWljb24ge1xuICBmb250LXNpemU6IDI0cHg7XG4gIGNvbG9yOiAjNzM4NDlhO1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QjbGFiZWxzLWxpc3QgaW9uLWxpc3QtaGVhZGVyIHtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLWxpc3QtaGVhZGVyLFxuaW9uLW1lbnUuaW9zIGlvbi1ub3RlIHtcbiAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xufVxuXG5pb24tbWVudS5pb3MgaW9uLW5vdGUge1xuICBtYXJnaW4tYm90dG9tOiA4cHg7XG59XG5cbmlvbi1ub3RlIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBmb250LXNpemU6IDE2cHg7XG5cbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1tZWRpdW0tc2hhZGUpO1xufVxuXG5pb24taXRlbS5zZWxlY3RlZCB7XG4gIC0tY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn0iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.log(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports, __webpack_require__) {
      var map = {
        "./pages/datepickup/datepickup.module": ["+N1v", "pages-datepickup-datepickup-module"],
        "./pages/dictation/dictation.module": ["Riba"],
        "./pages/login/login.module": ["F4UR", "pages-login-login-module"],
        "./pages/main/main.module": ["82nU", "pages-main-main-module"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function webpackAsyncContextKeys() {
        return Object.keys(map);
      };

      webpackAsyncContext.id = "zn8P";
      module.exports = webpackAsyncContext;
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map