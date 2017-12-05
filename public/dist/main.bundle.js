webpackJsonp(["main"],{

/***/ "../../../../../src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var routes = [
    { path: '', pathMatch: 'full', component: __WEBPACK_IMPORTED_MODULE_0__login_login_component__["a" /* LoginComponent */] },
    { path: 'wall', component: __WEBPACK_IMPORTED_MODULE_1__main_main_component__["a" /* MainComponent */] }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
        imports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n\r\n\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <app-navbar></app-navbar>\n</header>\n<main>\n  <router-outlet></router-outlet>\n</main>\n<footer class=\"page-footer grey darken-2\">\n  <app-footer></app-footer>\n</footer>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

// declare var jquery: any;
// declare var $: any;
var AppComponent = (function () {
    function AppComponent() {
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__main_main_component__ = __webpack_require__("../../../../../src/app/main/main.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_angular2_materialize__ = __webpack_require__("../../../../angular2-materialize/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__login_login_component__ = __webpack_require__("../../../../../src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ngx_carousel__ = __webpack_require__("../../../../ngx-carousel/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs__ = __webpack_require__("../../../../hammerjs/hammer.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_hammerjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_hammerjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};















var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_8__main_main_component__["a" /* MainComponent */],
            __WEBPACK_IMPORTED_MODULE_10__login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_13__navbar_navbar_component__["a" /* NavbarComponent */],
            __WEBPACK_IMPORTED_MODULE_14__footer_footer_component__["a" /* FooterComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_4__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_9_angular2_materialize__["a" /* MaterializeModule */],
            __WEBPACK_IMPORTED_MODULE_1_angular2_flash_messages__["FlashMessagesModule"],
            __WEBPACK_IMPORTED_MODULE_11_ngx_carousel__["a" /* NgxCarouselModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_0__main_service__["a" /* MainService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#remove-margin{\r\n  margin-bottom: 0px;\r\n}\r\n#remove-margin-all{\r\n  margin: 0px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container center-align\">\n  <p class='center-align' id='remove-margin'>© 2017 created by Myron Navarrete</p>\n  <p class='center-align' id='remove-margin-all'>created with MEAN and materialize</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    return FooterComponent;
}());
FooterComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-footer',
        template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
        styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
    }),
    __metadata("design:paramtypes", [])
], FooterComponent);

//# sourceMappingURL=footer.component.js.map

/***/ }),

/***/ "../../../../../src/app/login/login.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".parallax-container {\r\n  height: 450px;\r\n}\r\n#title{\r\n  margin-top: 5%;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"parallax-container\">\n  <div class=\"container white darken-2\" id='title'>\n    <div class=\"row\">\n      <div class='col s12 center-align'>\n        <h3>The Wall</h3>\n        <p class=\"flow-text\">Post, Reply, Like, Delete</p>\n      </div>\n    </div>\n  </div>\n  <div materialize=\"parallax\">\n    <img class='responsive-img' src=\"../../assets/img/social-2.jpg\">\n  </div>\n</div>\n<div class='container'>\n  <div class=\"row\">\n    <div class='col s12 m4 l4 center'>\n      <h3>Post</h3>\n      <div class=\"divider\"></div>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, tempora. Quidem aperiam voluptate magni sunt, omnis magnam\n      voluptas explicabo sapiente, fugit nobis fuga repudiandae laudantium repellat repellendus obcaecati nostrum accusantium.</p>\n    </div>\n    <div class='col s12 m4 l4 center'>\n      <h3>Reply</h3>\n      <div class=\"divider\"></div>\n      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam nihil necessitatibus, neque dicta rem corrupti illum asperiores\n      quaerat, non maiores eligendi cumque excepturi quasi. Adipisci nemo iste quidem. Harum, odit.</p>\n    </div>\n    <div class='col s12 m4 l4 center'>\n      <h3>Like</h3>\n      <div class=\"divider\"></div>\n      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aperiam provident quia vero quaerat porro incidunt. Asperiores\n      eum amet repudiandae rem hic repellat ut aut perspiciatis rerum ratione. Doloribus, quaerat!</p>\n    </div>\n    <div class=\"col s12 center\">\n      <h2>Start Posting Now</h2>\n      <a [routerLink]=\"['wall']\" class=\"waves-effect waves-light btn-large\">Go To Wall</a>\n    </div>\n  </div>\n</div>\n<div class=\"grey darken-2\">\n  <div class=\"container\">\n    <div class=\"section\">\n      <div class=\"row\">\n        <div class=\"col s12 m6\">\n          <img id='img-margin' class=\"circle responsive-img\" src=\"../../assets/img/social-1.jpg\" alt=\"\">\n        </div>\n        <div class=\"col s12 m4 push-m1 white-text\">\n          <h4 class=\"center\">Post Like Never Before</h4>\n          <div class=\"divider\"></div>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eius ipsa impedit vitae vero, qui veritatis perspiciatis,\n            esse enim doloribus doloremque eos voluptatem? Consectetur, qui iure quas suscipit porro nobis.\n          </p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n<div class=\"white\">\n  <div class=\"container\">\n    <div class=\"section\">\n      <div class=\"row\">\n        <div class=\"col s12 m4\">\n          <h4 class=\"center\">Seemless Design</h4>\n          <div class=\"divider\"></div>\n          <p>\n            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis ad, impedit esse laborum mollitia nobis deleniti nihil\n            dolorem alias vel distinctio ullam molestias porro sequi veniam incidunt sint vitae, perspiciatis dolorum obcaecati\n            ipsa quas hic. Laudantium sunt perferendis reprehenderit adipisci veniam fuga excepturi esse, nostrum earum accusantium\n            praesentium excepturi!\n          </p>\n        </div>\n        <div class=\"col s12 m6 push-m1\">\n          <img id='img-margin' class=\"circle responsive-img\" src=\"../../assets/img/social-3.jpg\" alt=\"\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginComponent = (function () {
    function LoginComponent(_router) {
        this._router = _router;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/login/login.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* Router */]) === "function" && _a || Object])
], LoginComponent);

var _a;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/main.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MainService = (function () {
    function MainService(_http) {
        this._http = _http;
    }
    MainService.prototype.addPost = function (post, callback) {
        return this._http.post("/api/posts", post)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.retrievePosts = function (callback) {
        this._http.get('/api/posts').subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.getOnePost = function (id, callback) {
        this._http.get('/api/posts/' + id).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.getOneReply = function (id, callback) {
        this._http.get('/api/replies/' + id).subscribe(function (res) {
            callback(res.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.addReply = function (id, reply, callback) {
        this._http.put('/api/posts/add/' + id, reply)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.updatePost = function (id, post, callback) {
        this._http.put('/api/posts/' + id, post)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.updateReply = function (id, reply, callback) {
        this._http.put('/api/replies/' + id, reply)
            .subscribe(function (response) {
            console.log('Successful response from the server');
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.deletePost = function (id, callback) {
        this._http.delete('/api/posts/' + id).subscribe(function (response) {
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    MainService.prototype.deleteReply = function (id, callback) {
        this._http.delete('/api/replies/' + id).subscribe(function (response) {
            callback(response.json());
        }, function (err) {
            console.log(err);
        });
    };
    return MainService;
}());
MainService = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_http__["a" /* Http */]) === "function" && _a || Object])
], MainService);

var _a;
//# sourceMappingURL=main.service.js.map

/***/ }),

/***/ "../../../../../src/app/main/main.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#like-align{\r\n  padding-left: 7.5px;\r\n}\r\ni.material-icons.left{\r\n  margin-right: 5px;\r\n}\r\n#heart{\r\n  width: 24px;\r\n  margin-right: 5px;\r\n}\r\n.card-content{\r\n  word-wrap: break-word;\r\n}\r\n#opacity{\r\n  background-color:white;\r\n  opacity: 0.8;\r\n  margin-top: 5%;\r\n}\r\n#inlineBlock{\r\n  display: inline-block;\r\n}\r\n#clickable{\r\n  cursor: pointer;\r\n}\r\n#fixedTop{\r\n  position: fixed; /* Set the navbar to fixed position */\r\n  top: 2; /* Position the navbar at the top of the page */\r\n  width: 100%; /* Full width */\r\n  z-index:1000;\r\n  border-radius: 15px;\r\n  opacity:0.7;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/main/main.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"green center\" id='fixedTop'>\n  <flash-messages class=\"white-text\"></flash-messages>\n</div>\n\n<section id=\"addPost\">\n  <div class=\"parallax-container\">\n    <div class=\"section\"></div>\n    <div class=\"container center-align\" id=\"opacity\">\n      <div class=\"section\"></div>\n      <h4 class='flow-text'>Post Here:</h4>\n      <div class=\"row\">\n        <form (submit)='onSubmit()' #formData='ngForm' class='col s12'>\n          <div class=\"row\">\n            <div class=\"input-field col s4 push-s4\">\n              <input id=\"name\" type=\"text\" name='name' class='validate' required [(ngModel)]='post.name' #name='ngModel'>\n              <label for=\"name\" data-error=\"Name is required\" data-success=\"Success\" class='center-align'>Name</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <div class=\"input-field col s10 push-s1\">\n              <input id=\"text\" type=\"text\" class=\"validate\" name=\"text\" required [(ngModel)]='post.text' #text='ngModel'>\n              <label for=\"text\" data-error=\"Field must not be left empty\" data-success=\"Success\">What's on your mind?</label>\n            </div>\n          </div>\n          <div class=\"row\">\n            <button type=\"submit\" value=\"Post to Wall\" class='btn waves-effect waves-light blue' [disabled]='!formData.valid'>\n                <i class=\"material-icons right\">send</i>Post To Wall\n              </button>\n          </div>\n        </form>\n      </div>\n    </div>\n    <div materialize=\"parallax\">\n      <img class='responsive-img' src=\"../../assets/img/postit.png\">\n    </div>\n  </div>\n</section>\n\n\n<div class=\"divider\"></div>\n<div class=\"section\"></div>\n\n<div class=\"container\">\n  <div class=\"row\" *ngFor='let post of posts'>\n    <div class=\"col s10\">\n      <div class=\"card grey darken-2\">\n        <div class=\"card-content white-text\">\n          <span class=\"card-title flow-text\" id=\"inlineBlock\">{{post.name}} says:</span>\n          <i [attr.data-target]=\"'delete' + post._id\" class=\"small material-icons grey darken-2 red-text right modal-trigger\" id=\"clickable\"\n            (click)=\"openModal\">close</i>\n          <div class=\"divider\"></div>\n          <div class=\"section\"></div>\n          <p>{{post.text}}</p>\n          <div class=\"section\"></div>\n          <p class='right-align'>Posted On: {{post.createdAt | date:'yMMMdjms'}}</p>\n          <p class=\"right-align\"><i id=\"heart\" class=\"material-icons pink-text\">favorite_icon</i>: {{post.likes}}</p>\n          <p class=\"right-align\">Replies: {{post.replies.length}}</p>\n        </div>\n        <div class=\"card-action center-align\">\n          <button id='like-align' class=\"btn-floating waves-effect waves-light pink\" (click)=\"like(post._id)\"><i class=\"material-icons\">favorite_icon</i></button>\n          <button [attr.data-target]=\"'modal' + post._id\" class=\"waves-effect waves-light btn modal-trigger\" (click)=\"openModal\">\n            <i class=\"material-icons right\">send</i>Reply\n          </button>\n          <button class='btn waves-effect waves-light grey' id=\"slide{{post._id}}\" (click)=\"slide(post._id)\"><i class=\"material-icons right\" id=\"icon{{post._id}}\">arrow_upward</i>Hide Replies</button>\n        </div>\n      </div>\n\n      <div id=\"modal{{post._id}}\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n        <div class=\"modal-content\">\n          <h5>Reply to {{post.name}}'s Post:</h5>\n          <div id=\"addCommet\">\n            <div class=\"row\">\n              <form (submit)='addReply(post._id)' #formData='ngForm' class='col s12'>\n                <div class=\"row\">\n                  <div class=\"input-field col s4\">\n                    <input id=\"name\" type=\"text\" name='replyName' class='validate' required [(ngModel)]='reply.name' #replyName='ngModel'>\n                    <label for=\"name\" data-error=\"Name is required\" data-success=\"Success\">Name</label>\n                  </div>\n                </div>\n                <div class=\"row\">\n                  <div class=\"input-field col s12\">\n                    <input id=\"text\" type=\"text\" class=\"materialize-textarea validate\" name=\"replyText\" required [(ngModel)]='reply.text' #text='ngModel'>\n                    <label for=\"text\" data-error=\"Field must not be left empty\" data-success=\"Success\">What would you like to say to {{post.name}}?</label>\n                  </div>\n                </div>\n                <div class=\"modal-footer\">\n                  <a class=\"btn waves-effect waves-light red\" (click)=\"closeModal()\">Cancel</a>\n                  <button type=\"submit\" value=\"Post to Wall\" class='btn waves-effect waves-light blue' [disabled]='!formData.valid'>\n                  <i class=\"material-icons right\">send</i>Add Reply\n                </button>\n                </div>\n              </form>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div id=\"delete{{post._id}}\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n        <div class=\"modal-content\">\n          <h4>Delete {{post.name}}'s Post?</h4>\n          <div class=\"modal-footer\">\n            <button class=\"btn green\" (click)=\"delete(post._id)\">Yes</button>\n            <button class=\"btn red\" (click)=\"closeModal()\">No</button>\n          </div>\n        </div>\n      </div>\n\n    </div>\n\n    <div id=\"replies{{post._id}}\">\n      <div class=\"col s10 push-s1\" *ngFor=\"let reply of post.replies\">\n        <div class=\"card grey\">\n          <div class=\"card-content white-text\">\n            <span class=\"card-title flow-text\" id=\"inlineBlock\">{{reply.name}} replies:</span>\n            <i [attr.data-target]=\"'deleteReply' + reply._id\" class=\"small material-icons grey red-text right modal-trigger\" id=\"clickable\"\n              (click)=\"openModal\">close</i>\n            <div class=\"divider\"></div>\n            <div class=\"section\"></div>\n            <p>{{reply.text}}</p>\n            <div class=\"section\"></div>\n            <p class='right-align'>Replied to {{post.name}} on: {{reply.createdAt | date:'yMMMdjms'}}</p>\n        </div>\n\n        <div id=\"deleteReply{{reply._id}}\" class=\"modal\" materialize=\"modal\" [materializeParams]=\"[{dismissible: false}]\" [materializeActions]=\"modalActions\">\n          <div class=\"modal-content\">\n            <h4>Delete {{reply.name}}'s Reply?</h4>\n            <div class=\"modal-footer\">\n              <button class=\"btn green\" (click)=\"deleteReply(reply._id)\">Yes</button>\n              <button class=\"btn red\" (click)=\"closeModal()\">No</button>\n            </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n<div class='fixed-action-btn'>\n  <button id=\"toPost\" (click)=\"toPost()\" class=\"btn grey btn-floating\"><i class=\"material-icons\">arrow_upward</i></button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/main/main.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__reply__ = __webpack_require__("../../../../../src/app/reply.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main_service__ = __webpack_require__("../../../../../src/app/main.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__post__ = __webpack_require__("../../../../../src/app/post.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__ = __webpack_require__("../../../../angular2-flash-messages/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MainComponent = (function () {
    function MainComponent(_mainService, _flashMessagesService) {
        this._mainService = _mainService;
        this._flashMessagesService = _flashMessagesService;
        this.post = new __WEBPACK_IMPORTED_MODULE_2__post__["a" /* Post */]();
        this.modalActions = new __WEBPACK_IMPORTED_MODULE_3__angular_core__["EventEmitter"]();
        this.reply = new __WEBPACK_IMPORTED_MODULE_0__reply__["a" /* Reply */]();
        this.postIds = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._mainService.retrievePosts(function (posts) {
            _this.posts = posts;
        });
    };
    MainComponent.prototype.onSubmit = function () {
        var _this = this;
        console.log('hello');
        this._flashMessagesService.show('Post added sucessfully!', { timeout: 1000 });
        this._mainService.addPost(this.post, function (post) {
            _this._mainService.retrievePosts(function (posts) {
                _this.posts = posts;
            });
        });
        this.post = new __WEBPACK_IMPORTED_MODULE_2__post__["a" /* Post */]();
    };
    MainComponent.prototype.openModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['open'] });
    };
    MainComponent.prototype.closeModal = function () {
        this.modalActions.emit({ action: 'modal', params: ['close'] });
    };
    MainComponent.prototype.delete = function (id) {
        var _this = this;
        this._mainService.deletePost(id, function (posts) {
            _this.posts = posts;
            _this.closeModal();
            _this._flashMessagesService.show('Post deleted sucessfully!', { timeout: 1000 });
        });
    };
    MainComponent.prototype.like = function (id) {
        var _this = this;
        this._mainService.getOnePost(id, function (post) {
            _this.post = post;
            _this.post.likes++;
            _this._mainService.updatePost(id, _this.post, function (posted) {
                console.log('liked');
            });
            _this._mainService.retrievePosts(function (posts) {
                _this.posts = posts;
            });
            _this.post = new __WEBPACK_IMPORTED_MODULE_2__post__["a" /* Post */]();
        });
    };
    MainComponent.prototype.toPost = function () {
        $('html,body').animate({
            scrollTop: $('#addPost').offset().top
        }, 'slow');
    };
    MainComponent.prototype.addReply = function (id) {
        var _this = this;
        this._mainService.addReply(id, this.reply, function (posts) {
            _this.posts = posts;
            _this.reply = new __WEBPACK_IMPORTED_MODULE_0__reply__["a" /* Reply */]();
            _this.closeModal();
        });
    };
    MainComponent.prototype.slide = function (id) {
        $('#replies' + id).toggle();
        console.log($('#icon' + id).html());
        if ($('#icon' + id).html() === 'arrow_upward') {
            $('#slide' + id).html("<i id=\"icon" + id + "\" class=\"material-icons right\">arrow_downward</i>Show Replies");
        }
        else {
            console.log('in else');
            $('#slide' + id).html("<i id=\"icon" + id + "\" class=\"material-icons right\">arrow_upward</i>Hide Replies");
        }
    };
    MainComponent.prototype.deleteReply = function (id) {
        var _this = this;
        this._mainService.deleteReply(id, function (posts) {
            _this.posts = posts;
            _this.closeModal();
            _this._flashMessagesService.show('Reply deleted sucessfully!', { timeout: 1000 });
        });
    };
    return MainComponent;
}());
MainComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_3__angular_core__["Component"])({
        selector: 'app-main',
        template: __webpack_require__("../../../../../src/app/main/main.component.html"),
        styles: [__webpack_require__("../../../../../src/app/main/main.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main_service__["a" /* MainService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_flash_messages__["FlashMessagesService"]) === "function" && _b || Object])
], MainComponent);

var _a, _b;
//# sourceMappingURL=main.component.js.map

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-fixed {\r\n  z-index: 999;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"navbar-fixed\">\n  <nav>\n    <div class=\"nav-wrapper grey darken-2\">\n      <a href=\"#\" class=\"brand-logo\">Basic Wall</a>\n      <ul class=\"right hide-on-med-and-down\">\n        <li><a [routerLink]=\"['']\">Home</a></li>\n        <li><a [routerLink]=\"['wall']\">Wall</a></li>\n      </ul>\n      <a href=\"#\" materialize=\"sideNav\" data-activates=\"nav-mobile\" class=\"button-collapse right\" (click)=\"sideNav()\"><i class=\"material-icons\">menu</i></a>\n    </div>\n  </nav>\n</div>\n<ul id=\"nav-mobile\" class=\"side-nav hide-on-med-and-up\">\n  <li><a [routerLink]=\"['']\" (click)=\"sideNavClose()\">Home</a></li>\n  <li><a [routerLink]=\"['wall']\" (click)=\"sideNavClose()\">Wall</a></li>\n</ul>\n"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NavbarComponent = (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.sideNav = function () {
        $('.button-collapse').sideNav('toggle');
    };
    NavbarComponent.prototype.sideNavClose = function () {
        $('.button-collapse').sideNav('hide');
    };
    return NavbarComponent;
}());
NavbarComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
    }),
    __metadata("design:paramtypes", [])
], NavbarComponent);

//# sourceMappingURL=navbar.component.js.map

/***/ }),

/***/ "../../../../../src/app/post.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Post; });
var Post = (function () {
    function Post(name, text, likes) {
        if (name === void 0) { name = ''; }
        if (text === void 0) { text = ''; }
        if (likes === void 0) { likes = 0; }
        this.name = name;
        this.text = text;
        this.likes = likes;
    }
    return Post;
}());

//# sourceMappingURL=post.js.map

/***/ }),

/***/ "../../../../../src/app/reply.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Reply; });
var Reply = (function () {
    function Reply(name, text, likes) {
        if (name === void 0) { name = ''; }
        if (text === void 0) { text = ''; }
        if (likes === void 0) { likes = 0; }
        this.name = name;
        this.text = text;
        this.likes = likes;
    }
    return Reply;
}());

//# sourceMappingURL=reply.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map