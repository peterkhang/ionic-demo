(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-main-main-module"], {
    /***/
    "3/XB":
    /*!**************************************!*\
      !*** ./src/app/pages/main/main.scss ***!
      \**************************************/

    /*! exports provided: default */

    /***/
    function XB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "ion-content {\n  position: relative !important;\n  width: 100%;\n  height: 100%;\n  margin-bottom: 0;\n}\nion-content .titleArea {\n  height: 30%;\n  width: 100%;\n  padding: 1em;\n  color: var(--bory-blue);\n  font-size: 1em;\n}\nion-content .menuArea {\n  height: 70%;\n  width: 100%;\n  padding: 1em;\n  text-align: center;\n}\nion-content .menuArea img {\n  width: 90%;\n  height: auto;\n}\nion-fab {\n  width: 50px;\n  height: 50px;\n}\nion-fab ion-fab-button {\n  margin-bottom: 7em;\n  background-color: var(--bory-blue);\n}\nion-fab ion-fab-button .fab ion-icon {\n  color: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL21haW4uc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtBQURKO0FBR1E7RUFDQSxXQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLGNBQUE7QUFEUjtBQUlJO0VBQ0ksV0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUFGUjtBQUlRO0VBQ0ksVUFBQTtFQUNBLFlBQUE7QUFGWjtBQU9BO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUFKSjtBQU9BO0VBQ0ksa0JBQUE7RUFDQSxrQ0FBQTtBQUpKO0FBTUk7RUFDSSxZQUFBO0FBSlIiLCJmaWxlIjoibWFpbi5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG4gICAgXG5pb24tY29udGVudCB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlICFpbXBvcnRhbnQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlIDtcbiAgICBtYXJnaW4tYm90dG9tOjA7XG4gICAgICAgIFxuICAgICAgICAudGl0bGVBcmVhIHtcbiAgICAgICAgaGVpZ2h0OjMwJTtcbiAgICAgICAgd2lkdGg6MTAwJTtcbiAgICAgICAgcGFkZGluZzogMWVtO1xuICAgICAgICBjb2xvcjogdmFyKC0tYm9yeS1ibHVlKSA7XG4gICAgICAgIGZvbnQtc2l6ZTogMWVtO1xuICAgIH1cblxuICAgIC5tZW51QXJlYSB7XG4gICAgICAgIGhlaWdodDo3MCU7XG4gICAgICAgIHdpZHRoOjEwMCU7XG4gICAgICAgIHBhZGRpbmc6IDFlbTtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGltZyB7XG4gICAgICAgICAgICB3aWR0aDogOTAlIDtcbiAgICAgICAgICAgIGhlaWdodDogYXV0byA7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmlvbi1mYWIge1xuICAgIHdpZHRoOiA1MHB4O1xuICAgIGhlaWdodDo1MHB4O1xufVxuXG5pb24tZmFiIGlvbi1mYWItYnV0dG9uIHtcbiAgICBtYXJnaW4tYm90dG9tOiA3ZW07ICAgICAgICAgIFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJvcnktYmx1ZSkgO1xuICAgIFxuICAgIC5mYWIgaW9uLWljb24gIHtcbiAgICAgICAgY29sb3I6IHdoaXRlO1xuICAgIH0gXG4gICAgXG59XG4iXX0= */";
      /***/
    },

    /***/
    "82nU":
    /*!*******************************************!*\
      !*** ./src/app/pages/main/main.module.ts ***!
      \*******************************************/

    /*! exports provided: MainPageModule */

    /***/
    function nU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPageModule", function () {
        return MainPageModule;
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


      var _main__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./main */
      "Qven");

      var MainPageModule = function MainPageModule() {
        _classCallCheck(this, MainPageModule);
      };

      MainPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([{
          path: '',
          component: _main__WEBPACK_IMPORTED_MODULE_6__["MainPage"]
        }])],
        declarations: [_main__WEBPACK_IMPORTED_MODULE_6__["MainPage"]]
      })], MainPageModule);
      /***/
    },

    /***/
    "Qven":
    /*!************************************!*\
      !*** ./src/app/pages/main/main.ts ***!
      \************************************/

    /*! exports provided: MainPage */

    /***/
    function Qven(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainPage", function () {
        return MainPage;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_main_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./main.html */
      "eiVF");
      /* harmony import */


      var _main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main.scss */
      "3/XB");
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
      /* harmony import */


      var _dictation_dictation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./../dictation/dictation */
      "gZlB");

      var MainPage = /*#__PURE__*/function () {
        function MainPage(platform, auth) {
          var _this = this;

          _classCallCheck(this, MainPage);

          this.platform = platform;
          this.auth = auth;
          /**
           * ?????? ?????? ?????? ??????????????? ??????????????? ????????? ????????? ????????? ?????? Callback ??????
           * @param {any} dictation ????????? ?????? ??????
           */

          this.callback = function (dictation) {
            if (dictation != null) {
              _this.auth.presentAlert(dictation.reaction);
            }
          };

          this.initializeApp();
        }

        _createClass(MainPage, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this2 = this;

            //this.splashScreen.show();
            this.auth.platform.ready().then(function () {
              // Okay, so the platform is ready and our plugins are available.
              // Here you can do any higher level native things you might need.
              _this2.auth.getUser().then(function (user) {
                _this2.auth.user = user;
              }, function (err) {
                _this2.auth.showError(err);

                _this2.auth.navigateRoot('LoginPage');
              }); // this.auth.getUser()
              //   .then((user) => {
              //     this.auth.get('/api/accessToken')
              //       .then((res: any) => {
              //         this.auth.user=res;
              //         this.auth.setStorage(common.USER,res);
              //       },(err) => {
              //         this.auth.removeStorage(common.USER);
              //         this.auth.user=null;
              //         this.auth.navigateRoot('/LoginPage');
              //       });
              //   },(err) => {
              //     this.auth.removeStorage(common.USER);
              //     this.auth.user=null;
              //     this.auth.navigateRoot('/LoginPage');
              //   });

            });
          }
          /**
           * ????????? ???????????? ????????? ?????? ??????
           */

        }, {
          key: "login",
          value: function login() {
            this.auth.navigateRoot('/LoginPage');
          }
          /**
           * ????????? ????????? ???????????? ????????? ???????????? ????????? ?????? ??????
           */

        }, {
          key: "logout",
          value: function logout() {
            this.auth.logout();
            this.auth.navigateRoot('/LoginPage');
          }
        }, {
          key: "ionViewWillEnter",
          value: function ionViewWillEnter() {
            var _this3 = this;

            this.auth.setTitle('???');
            this.auth.getUser().then(function (user) {
              if (user === undefined || user == null) {
                _this3.auth.navigateRoot('/LoginPage');
              }
            }, function (err) {
              _this3.auth.navigateRoot('/LoginPage');
            });
          }
        }, {
          key: "popupModalPage",
          value: function popupModalPage() {
            return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
              var _this4 = this;

              var data, modal;
              return regeneratorRuntime.wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      data = {
                        url: 'https://www.youtube.com/watch?v=VZR9TmL4-JQ',
                        email: this.auth.user.email,
                        reaction: null
                      };
                      _context.next = 3;
                      return this.auth.modal.create({
                        component: _dictation_dictation__WEBPACK_IMPORTED_MODULE_6__["DictationPage"],
                        componentProps: data
                      });

                    case 3:
                      modal = _context.sent;
                      modal.onDidDismiss().then(function (params) {
                        console.log(JSON.stringify(params.data));
                        if (params.data.reaction) _this4.auth.presentAlert(params.data.reaction);
                      });
                      _context.next = 7;
                      return modal.present();

                    case 7:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }]);

        return MainPage;
      }();

      MainPage.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_5__["Platform"]
        }, {
          type: _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthServiceProvider"]
        }];
      };

      MainPage.propDecorators = {
        splashDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['splashDiv', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"],
            "static": false
          }]
        }]
      };
      MainPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-main',
        template: _raw_loader_main_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })
      /**
       * SDUA ??? ?????? ?????? ?????? ????????? ?????????
       */
      ], MainPage);
      /***/
    },

    /***/
    "eiVF":
    /*!****************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/main/main.html ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function eiVF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"--bory-blue\">\n    <ion-buttons slot=\"start\">\n      <ion-menu-button></ion-menu-button>\n    </ion-buttons>\n    <ion-title>\n      IonicDemo::PopupDemo\n    </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n    <ion-content class=\"ion-padding\">\n\n\n      <div class=\"titleArea\">\n        <h3>IonicDemo</h3>\n      \n        <p>\n          Please click the below button\n        </p>\n      </div>\n\n      <div class=\"menuArea\">\n        <button (click)=\"popupModalPage()\"><img src=\"{{auth.root}}assets/icon/analysis.svg\"/></button>\n      </div>\n\n    </ion-content>";
      /***/
    }
  }]);
})();
//# sourceMappingURL=pages-main-main-module-es5.js.map