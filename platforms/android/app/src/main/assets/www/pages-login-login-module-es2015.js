(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"],{

/***/ "F4UR":
/*!*********************************************!*\
  !*** ./src/app/pages/login/login.module.ts ***!
  \*********************************************/
/*! exports provided: LoginPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPageModule", function() { return LoginPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "TEn/");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login */ "VDsy");







let LoginPageModule = class LoginPageModule {
};
LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild([
                {
                    path: '',
                    component: _login__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]
                }
            ])
        ],
        declarations: [_login__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })
], LoginPageModule);



/***/ }),

/***/ "HJ8D":
/*!****************************************!*\
  !*** ./src/app/pages/login/login.scss ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("ion-content {\n  padding: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xvZ2luLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0FBQ0oiLCJmaWxlIjoibG9naW4uc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImlvbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAzMHB4O1xufSJdfQ== */");

/***/ }),

/***/ "VDsy":
/*!**************************************!*\
  !*** ./src/app/pages/login/login.ts ***!
  \**************************************/
/*! exports provided: LoginPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginPage", function() { return LoginPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.html */ "ZMpf");
/* harmony import */ var _login_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.scss */ "HJ8D");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../providers/auth-service/auth-service */ "oNol");
/* harmony import */ var _providers_common_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../providers/common/common */ "v5k/");







let LoginPage = class LoginPage {
    constructor(auth, formBuilder) {
        this.auth = auth;
        this.formBuilder = formBuilder;
        this.isFacebookLogin = false;
        this.registerCredentials = { email: '', password: '' };
        this.auth.logout();
        this.loginForm = this.formBuilder.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$')]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(7)]]
        });
    }
    /**
     * 회원가입 버튼 클릭 시 불려지는 이벤트 함수 : 회원가입 페이지로 전환해 준다.
     */
    signup() {
        this.auth.navigateForward('/SignupPage');
    }
    /**
     * 사용자가 입력한 로그인 정보(email & password)를 서버에서 인증해 준다.
     */
    login() {
        if (!this.loginForm.valid) {
            for (const key in this.loginForm.controls) {
                if (!this.loginForm.controls[key].valid) {
                    this.auth.showError(key + ' : ' + this.auth.message.get('form.field.invalid'));
                    //this.loginForm.get(key).focus() ;
                    return false;
                }
            }
        }
        /*
        if ( this.registerCredentials.email < 7 ||
          this.registerCredentials.email.replace('^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$','') !== '' ) {
          this.auth.showError('email : ' + this.auth.message.get('form.field.invalid')) ;
          return false;
        }
    
        if (this.registerCredentials.password < 7 ) {
          this.auth.showError('password : ' + this.auth.message.get('form.field.invalid'));
          return false ;
        }
        */
        //ToDo : This is just test code
        this.auth.user = { email: this.loginForm.controls['email'].value, name: 'demo' };
        this.auth.setStorage(_providers_common_common__WEBPACK_IMPORTED_MODULE_6__["common"].USER, this.auth.user);
        this.auth.navigateRoot('/MainPage');
        // ToDo : This is real login code
        // this.auth.login(this.registerCredentials)
        //   .then((res: any) => {
        //     this.auth.user = res ;
        //     this.auth.setStorage(common.USER, this.auth.user).then(user =>{
        //       this.auth.navigateRoot('/MainPage') ;
        //     }, err => {
        //         this.auth.presentAlert(this.auth.message.get('login.session.invalid')) ;
        //     }) ;
        //   }, err => {
        //     this.auth.removeStorage(common.USER) ;
        //     this.auth.user = null ;
        //     this.auth.presentAlert(this.auth.message.get('login.fails'));
        //   });
    }
};
LoginPage.ctorParameters = () => [
    { type: _providers_auth_service_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthServiceProvider"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] }
];
LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'page-login',
        template: _raw_loader_login_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
    /**
     * 로그인 페이지 클래스
     */
], LoginPage);



/***/ }),

/***/ "ZMpf":
/*!******************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.html ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n    <ion-content class=\"ion-padding\">\n      <div class=\"container\">\n\n        <form [formGroup]=\"loginForm\">\n        <!-- 제목(로그인) -->\n        <ion-row class=\"introTitle\">\n          <label class=\"introTitle\">{{auth.message.get('login')}}</label>\n        </ion-row>\n\n        <!-- 제목(아이디) -->\n        <ion-row class=\"defaultTitle\">\n          <label class=\"defaultTitle\">{{auth.message.get('email')}}</label>\n        </ion-row>\n\n        <!-- 아이디 입력란 -->\n        <ion-row class=\"defaultInput\">\n          <ion-col size=\"9\" class=\"ion-no-padding\">\n            <ion-input class=\"defaultInput\" type=\"text\" formControlName='email' [(ngModel)]='registerCredentials.email'\n              placeholder=\"{{auth.message.get('email')}}\" class=\"ion-no-padding\" required></ion-input>\n          </ion-col>\n        </ion-row>\n\n        <!-- 제목(비밀번호) -->\n        <ion-row class=\"defaultTitle\">\n          <label class=\"defaultTitle\">{{auth.message.get('password')}}</label>\n        </ion-row>\n\n        <!-- 비밀번호 입력란 -->\n        <ion-row class=\"defaultInput\">\n          <ion-col size=\"9\" class=\"ion-no-padding\">\n            <ion-input class=\"defaultInput\" required=\"\" type=\"password\" formControlName='password' [(ngModel)]='registerCredentials.password' type='password'\n              placeholder=\"{{auth.message.get('password')}}\" class=\"ion-no-padding\" required></ion-input>\n          </ion-col>\n        </ion-row>\n\n        </form>\n\n        <!-- 자동로그인 -->\n        <ion-row class=\"autoLogin\">\n          <button class=\"login\" (click)=\"login()\">{{auth.message.get('login')}}</button>\n        </ion-row>\n\n        \n\n        <!-- 회원가입  -->\n        <ion-row>\n          <button class=\"signup\" (click)='signup()'>{{auth.message.get('signup')}}</button>\n        </ion-row>\n      </div>\n    </ion-content>\n\n\n<!-- ----------------------------------------------------------------------------------------------------------------------------- -->\n\n\n\n<style>\n\n\n  div.container {\n    flex-direction: column;\n    padding: 0rem 1.5rem;\n  }\n\n  /* 제목 (로그인) */\n  label.introTitle {\n    font-size: 2.8rem;\n    margin-top: 6rem;\n    margin-bottom: 1rem;\n    margin-left: 0.3rem;\n  }\n\n  /* 아이디,비밀번호 제목*/\n  label.defaultTitle {\n    font-size: 1.2rem;\n    font-weight: bold;\n    margin-bottom: 1rem;\n  }\n\n  ion-row.defaultTitle {\n    margin-top: 4rem;\n  }\n\n  /* 아이디,비밀번호 입력 input */\n  ion-input.defaultInput {\n    text-align: left;\n    font-size: 1.5rem;\n    border: solid 0.1rem white;\n    border-bottom-color: var(--bory-border);\n    --placeholder-color: var(--bory-placeholder);\n    --padding-top: 0.3rem;\n    --padding-bottom: 0.3rem;\n    width: 22rem;\n    background: inherit;\n  }\n\n\n  ion-row.autoLogin {\n    margin-top: 2em;\n  }\n\n  ion-label.autoLogin {\n    font-size: 1.2rem;\n    display: flex;\n    align-items: center;\n    color: var(--bory-grey);\n    margin-left: 0.5rem;\n  }\n\n\n  /* 로그인 버튼 */\n  button.login {\n    width: 100%;\n    height: 3.6rem;\n    font-size: 1.2rem;\n    text-align: center;\n    display: block;\n    background-color: var(--ion-color-primary);\n    color: white;\n    border-radius: 1.8rem;\n    margin-left: auto;\n    margin-top: 1rem;\n  }\n\n\n  /* 아이디찾기 / 비밀번호찾기 버튼 */\n  ion-row.search {\n    margin-top: 1rem;\n  }\n\n  button.search {\n    color: var(--bory-placeholder);\n    font-size: 1.1rem;\n    background-color: white;\n  }\n\n\n  /*  회원가입 버튼 */\n  button.signup {\n    width: 100%;\n    height: 5rem;\n    font-size: 1.2rem;\n    font-weight: 400;\n    text-align: center;\n    color: var(--ion-color-primary);\n    background: white;\n    border: 0.2rem solid var(--ion-color-primary);\n    margin-top: 2rem;\n    margin-bottom: 1.5rem;\n  }\n\n  ion-row.snsLogin {\n    width: 100%;\n  }\n\n  ion-col.snsLogin {\n    display: flex;\n    align-items: center;\n  }\n\n  button.facebookLogin {\n    width: 100%;\n    height: 5rem;\n    font-size: 1.2rem;\n    text-align: center;\n    color: white;\n    background: var(--bory-facebook) !important;\n    display: flex;\n    align-items: center;\n    padding-right: 4rem;\n  }\n\n  button.googleLogin {\n    width: 100%;\n    height: 5rem;\n    font-size: 1.2rem;\n    text-align: center;\n    color: white;\n    background: var(--bory-google) !important;\n    display: flex;\n    align-items: center;\n    padding-right: 4rem;\n    margin-top: 0.5rem;\n  }\n\n  label.snsLogin {\n    width: 100%;\n    text-align: center;\n    padding-right: 1.2rem;\n  }\n\n  ion-img.facebookLogo {\n    width: 4rem;\n    height: 4rem;\n    text-align: left;\n    float: left;\n  }\n\n  ion-img.googleLogo {\n    width: 4rem;\n    height: 4rem;\n    text-align: left;\n    float: left;\n  }\n</style>\n");

/***/ })

}]);
//# sourceMappingURL=pages-login-login-module-es2015.js.map