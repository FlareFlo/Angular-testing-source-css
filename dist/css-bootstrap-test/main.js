(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "+nPA":
/*!*************************************************!*\
  !*** ./src/app/register/register.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n\tfont-family: 'Source Sans Pro';\n\tfont-style: normal;\n\tfont-weight: 200;\n\tsrc: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlxdr.ttf) format('truetype');\n}\n\n@font-face {\n\tfont-family: 'Source Sans Pro';\n\tfont-style: normal;\n\tfont-weight: 300;\n\tsrc: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdr.ttf) format('truetype');\n}\n\n* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: 300;\n\tfont-family: 'Source Sans Pro', sans-serif;\n\tcolor: white;\n\toverflow: hidden;\n}\n\nbody {\n\tfont-family: 'Source Sans Pro', sans-serif;\n\tcolor: white;\n\tfont-weight: 300;\n}\n\n.wrapper-new.form-success .container-new h1 {\n\ttransform: translateY(85px);\n}\n\n.container-new {\n\tpadding-top: 10vh;\n\tz-index: 5;\n\tmax-width: 700px;\n\tmargin: 0 auto;\n\ttext-align: center;\n}\n\n.container-new h1 {\n\tfont-size: 70px;\n\tfont-weight: 200;\n}\n\nform {\n\tpadding: 20px 0;\n\tposition: relative;\n\tz-index: 2;\n\n}\n\nform input {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tborder: 1px solid rgba(255, 255, 255, 0.4);\n\tbackground-color: rgba(255, 255, 255, 0.2);\n\twidth: 250px;\n\tborder-radius: 3px;\n\tpadding: 10px 15px;\n\tmargin: 0 auto 10px auto;\n\tdisplay: block;\n\ttext-align: center;\n\tfont-size: 18px;\n\ttransition-duration: 0.25s;\n\tfont-weight: 300;\n}\n\nform input:hover {\n\tbackground-color: rgba(47, 47, 47, 0.4);\n\n\n}\n\nform input:focus {\n\tbackground-color: rgba(47, 47, 47, 0.4);\n\twidth: 260px;\n\tcolor: #ffffff;\n}\n\nform button {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tbackground-color: #49d496;\n\tborder: 0;\n\tpadding: 10px 15px;\n\tcolor: #000000;\n\tborder-radius: 3px;\n\twidth: 250px;\n\tcursor: pointer;\n\tfont-size: 18px;\n\ttransition-duration: 0.25s;\n}\n\nform button:hover {\n\tbackground-color: #3ce5ad;\n\twidth: 260px;\n}\n\n.register {\n\tmargin-top: 5px;\n\tdisplay: block;\n\tcursor: pointer;\n\ttext-decoration: none;\n\ttransition-duration: 0.25s;\n}\n\n.register:hover {\n\tcolor: #53e3a6;\n}\n\n.cube {\n\tz-index: -1;\n\tposition: absolute;\n\ttop: 80vh;\n\tleft: 45vw;\n\twidth: 10px;\n\theight: 10px;\n\tborder: solid 1px #a4a4a4;\n\ttransform-origin: top left;\n\ttransform: scale(0) rotate(0deg) translate(-50%, -50%);\n\tanimation: cube 12s ease-in forwards infinite;\n}\n\n.cube:nth-child(2n) {\n\tborder-color: #5f5f5f;\n}\n\n.cube:nth-child(2) {\n\tanimation-delay: 2s;\n\tleft: 25vw;\n\ttop: 40vh;\n}\n\n.cube:nth-child(3) {\n\tanimation-delay: 4s;\n\tleft: 75vw;\n\ttop: 50vh;\n}\n\n.cube:nth-child(4) {\n\tanimation-delay: 6s;\n\tleft: 90vw;\n\ttop: 10vh;\n}\n\n.cube:nth-child(5) {\n\tanimation-delay: 8s;\n\tleft: 10vw;\n\ttop: 85vh;\n}\n\n.cube:nth-child(6) {\n\tanimation-delay: 10s;\n\tleft: 50vw;\n\ttop: 10vh;\n}\n\n@keyframes cube {\n\tfrom {\n\t\ttransform: scale(0) rotate(0deg) translate(-50%, -50%);\n\t\topacity: 1;\n\t}\n\tto {\n\t\ttransform: scale(20) rotate(960deg) translate(-50%, -50%);\n\t\topacity: 0;\n\t}\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlZ2lzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtSEFBbUg7QUFDcEg7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtSEFBbUg7QUFDcEg7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsMENBQTBDO0NBQzFDLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFHQTtDQUNDLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxlQUFlO0NBQ2YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixVQUFVOztBQUVYOztBQUVBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDBDQUEwQztDQUMxQywwQ0FBMEM7Q0FDMUMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLDBCQUEwQjtDQUMxQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx1Q0FBdUM7OztBQUd4Qzs7QUFFQTtDQUNDLHVDQUF1QztDQUN2QyxZQUFZO0NBQ1osY0FBYztBQUNmOztBQUVBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLFlBQVk7QUFDYjs7QUFFQTtDQUNDLGVBQWU7Q0FDZixjQUFjO0NBQ2QsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyxjQUFjO0FBQ2Y7O0FBR0E7Q0FDQyxXQUFXO0NBQ1gsa0JBQWtCO0NBQ2xCLFNBQVM7Q0FDVCxVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWix5QkFBeUI7Q0FDekIsMEJBQTBCO0NBQzFCLHNEQUFzRDtDQUV0RCw2Q0FBNkM7QUFDOUM7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FFQyxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFNBQVM7QUFDVjs7QUFFQTtDQUVDLG1CQUFtQjtDQUNuQixVQUFVO0NBQ1YsU0FBUztBQUNWOztBQUVBO0NBRUMsbUJBQW1CO0NBQ25CLFVBQVU7Q0FDVixTQUFTO0FBQ1Y7O0FBRUE7Q0FFQyxtQkFBbUI7Q0FDbkIsVUFBVTtDQUNWLFNBQVM7QUFDVjs7QUFFQTtDQUVDLG9CQUFvQjtDQUNwQixVQUFVO0NBQ1YsU0FBUztBQUNWOztBQWFBO0NBQ0M7RUFDQyxzREFBc0Q7RUFDdEQsVUFBVTtDQUNYO0NBQ0E7RUFDQyx5REFBeUQ7RUFDekQsVUFBVTtDQUNYO0FBQ0QiLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyc7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDIwMDtcblx0c3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3NvdXJjZXNhbnNwcm8vdjE0LzZ4S3lkU0JZS2NTVi1MQ29lUXFmWDFSWU9vM2k5NF93bHhkci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJztcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc291cmNlc2Fuc3Byby92MTQvNnhLeWRTQllLY1NWLUxDb2VRcWZYMVJZT28zaWs0endseGRyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiB3aGl0ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYm9keSB7XG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4ud3JhcHBlci1uZXcuZm9ybS1zdWNjZXNzIC5jb250YWluZXItbmV3IGgxIHtcblx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKDg1cHgpO1xufVxuXG5cbi5jb250YWluZXItbmV3IHtcblx0cGFkZGluZy10b3A6IDEwdmg7XG5cdHotaW5kZXg6IDU7XG5cdG1heC13aWR0aDogNzAwcHg7XG5cdG1hcmdpbjogMCBhdXRvO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5jb250YWluZXItbmV3IGgxIHtcblx0Zm9udC1zaXplOiA3MHB4O1xuXHRmb250LXdlaWdodDogMjAwO1xufVxuXG5mb3JtIHtcblx0cGFkZGluZzogMjBweCAwO1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdHotaW5kZXg6IDI7XG5cbn1cblxuZm9ybSBpbnB1dCB7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdG91dGxpbmU6IDA7XG5cdGJvcmRlcjogMXB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC40KTtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjIpO1xuXHR3aWR0aDogMjUwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRtYXJnaW46IDAgYXV0byAxMHB4IGF1dG87XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmZvcm0gaW5wdXQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA0NywgNDcsIDAuNCk7XG5cblxufVxuXG5mb3JtIGlucHV0OmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNDcsIDQ3LCAwLjQpO1xuXHR3aWR0aDogMjYwcHg7XG5cdGNvbG9yOiAjZmZmZmZmO1xufVxuXG5mb3JtIGJ1dHRvbiB7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdG91dGxpbmU6IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0OWQ0OTY7XG5cdGJvcmRlcjogMDtcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRjb2xvcjogIzAwMDAwMDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHR3aWR0aDogMjUwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbn1cblxuZm9ybSBidXR0b246aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2NlNWFkO1xuXHR3aWR0aDogMjYwcHg7XG59XG5cbi5yZWdpc3RlciB7XG5cdG1hcmdpbi10b3A6IDVweDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbn1cblxuLnJlZ2lzdGVyOmhvdmVyIHtcblx0Y29sb3I6ICM1M2UzYTY7XG59XG5cblxuLmN1YmUge1xuXHR6LWluZGV4OiAtMTtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDgwdmg7XG5cdGxlZnQ6IDQ1dnc7XG5cdHdpZHRoOiAxMHB4O1xuXHRoZWlnaHQ6IDEwcHg7XG5cdGJvcmRlcjogc29saWQgMXB4ICNhNGE0YTQ7XG5cdHRyYW5zZm9ybS1vcmlnaW46IHRvcCBsZWZ0O1xuXHR0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdC13ZWJraXQtYW5pbWF0aW9uOiBjdWJlIDEycyBlYXNlLWluIGZvcndhcmRzIGluZmluaXRlO1xuXHRhbmltYXRpb246IGN1YmUgMTJzIGVhc2UtaW4gZm9yd2FyZHMgaW5maW5pdGU7XG59XG5cbi5jdWJlOm50aC1jaGlsZCgybikge1xuXHRib3JkZXItY29sb3I6ICM1ZjVmNWY7XG59XG5cbi5jdWJlOm50aC1jaGlsZCgyKSB7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcblx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0bGVmdDogMjV2dztcblx0dG9wOiA0MHZoO1xufVxuXG4uY3ViZTpudGgtY2hpbGQoMykge1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogNHM7XG5cdGFuaW1hdGlvbi1kZWxheTogNHM7XG5cdGxlZnQ6IDc1dnc7XG5cdHRvcDogNTB2aDtcbn1cblxuLmN1YmU6bnRoLWNoaWxkKDQpIHtcblx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDZzO1xuXHRhbmltYXRpb24tZGVsYXk6IDZzO1xuXHRsZWZ0OiA5MHZ3O1xuXHR0b3A6IDEwdmg7XG59XG5cbi5jdWJlOm50aC1jaGlsZCg1KSB7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA4cztcblx0YW5pbWF0aW9uLWRlbGF5OiA4cztcblx0bGVmdDogMTB2dztcblx0dG9wOiA4NXZoO1xufVxuXG4uY3ViZTpudGgtY2hpbGQoNikge1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTBzO1xuXHRhbmltYXRpb24tZGVsYXk6IDEwcztcblx0bGVmdDogNTB2dztcblx0dG9wOiAxMHZoO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgY3ViZSB7XG5cdGZyb20ge1xuXHRcdHRyYW5zZm9ybTogc2NhbGUoMCkgcm90YXRlKDBkZWcpIHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcblx0XHRvcGFjaXR5OiAxO1xuXHR9XG5cdHRvIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDIwKSByb3RhdGUoOTYwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0b3BhY2l0eTogMDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGN1YmUge1xuXHRmcm9tIHtcblx0XHR0cmFuc2Zvcm06IHNjYWxlKDApIHJvdGF0ZSgwZGVnKSB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cdFx0b3BhY2l0eTogMTtcblx0fVxuXHR0byB7XG5cdFx0dHJhbnNmb3JtOiBzY2FsZSgyMCkgcm90YXRlKDk2MGRlZykgdHJhbnNsYXRlKC01MCUsIC01MCUpO1xuXHRcdG9wYWNpdHk6IDA7XG5cdH1cbn1cblxuIl19 */");

/***/ }),

/***/ "/CHZ":
/*!************************************************************!*\
  !*** ./src/app/usermanagement/usermanagement.component.ts ***!
  \************************************************************/
/*! exports provided: UsermanagementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsermanagementComponent", function() { return UsermanagementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_usermanagement_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./usermanagement.component.html */ "Kx7i");
/* harmony import */ var _usermanagement_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./usermanagement.component.css */ "6hrG");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");






let UsermanagementComponent = class UsermanagementComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user/';
        this.packageobject = {
            username: '',
            emailAddress: '',
            password: ''
        };
        this.getStuff();
    }
    doPUT() {
        if (this.packageobject.password !== null) {
            this.token = this.cookieService.get('token');
            let headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
            headerS = headerS.append('Token', this.token);
            this.http.put(this.ROOT_URL_USR, this.packageobject, { headers: headerS })
                .subscribe((error) => {
                console.error(error);
            });
        }
        else {
            console.error('no password was provided');
        }
    }
    getStuff() {
        this.token = this.cookieService.get('token'); // get cookie from browser
        let headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define content as JSON
        headerS = headerS.append('Token', this.token); // add token to header
        this.http.get(this.ROOT_URL_USR, { headers: headerS })
            .toPromise()
            .then(res => {
            this.response = res;
            this.packageobject = this.response;
        }, (error) => {
            console.error(error);
        });
    }
    doUsername(userinput) {
        this.packageobject.username = userinput;
    }
    doEmail(emailinput) {
        this.packageobject.emailAddress = emailinput;
    }
    doPassword(passwordinput) {
        this.packageobject.password = passwordinput;
    }
    ngOnInit() {
    }
};
UsermanagementComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
UsermanagementComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-usermanagement',
        template: _raw_loader_usermanagement_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_usermanagement_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], UsermanagementComponent);



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/flareflo/IdeaProjects/Angular-testing-source-css/src/main.ts */"zUnb");


/***/ }),

/***/ "0Xa6":
/*!********************************************!*\
  !*** ./src/app/boards/boards.component.ts ***!
  \********************************************/
/*! exports provided: BoardsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardsComponent", function() { return BoardsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_boards_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./boards.component.html */ "TlxB");
/* harmony import */ var _boards_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./boards.component.css */ "y8XX");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");







let BoardsComponent = class BoardsComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL_BOARDS_USER = 'https://backend.yap.dragoncave.dev/boards/user';
        this.ROOT_URL_BOARD_ = 'https://backend.yap.dragoncave.dev/boards/';
        this.ROOT_URL_BOARD = 'https://backend.yap.dragoncave.dev/boards';
        this.boards = [
            {
                boardID: 0,
                name: 'No boards available or the server is offline',
                createDate: 0
            }
        ];
        this.board = {
            boardID: 0,
            name: '',
            createDate: 0
        };
        this.packet = {
            emailAddress: ''
        };
        this.runonce = true;
        this.clickID = 0;
        this.showEdit = false;
        this.showCreate = false;
        this.locale = 0;
        this.toggleSort = true;
    }
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.boards, event.previousIndex, event.currentIndex);
    }
    handleClickOpen($event) {
        if (this.boards[0].boardID !== 0) {
            // @ts-ignore
            this.locale = $event.target.id;
            // tslint:disable-next-line:triple-equals
            this.clickID = (this.boards.findIndex(x => x.boardID == this.locale));
            this.goToBoard();
        }
    }
    handleClickEdit($event) {
        if (this.boards[0].boardID !== 0) {
            // @ts-ignore
            this.locale = $event.target.id;
            // tslint:disable-next-line:triple-equals
            this.clickID = (this.boards.findIndex(x => x.boardID == this.locale));
            this.showEdit = true;
        }
    }
    getExistingBoards() {
        let header1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        header1 = header1.append('Token', this.cookieService.get('token'));
        this.http.get(this.ROOT_URL_BOARDS_USER, { headers: header1 })
            .subscribe(response => {
            // @ts-ignore
            this.availableBoards = response;
            this.getAllBoards();
        }, (error) => {
            console.error(error);
        });
    }
    getAllBoards() {
        for (let i = 0; i < this.availableBoards.length; i++) {
            this.getBoardByID(i);
        }
    }
    getBoardByID(i) {
        // tslint:disable-next-line:no-shadowed-variable
        const id = this.availableBoards[i];
        let header0 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        header0 = header0.append('Token', this.cookieService.get('token'));
        this.http.get(this.ROOT_URL_BOARD_ + id, { headers: header0 })
            .subscribe(response => {
            let pos;
            if (this.runonce) {
                pos = 0;
                this.runonce = false;
            }
            else {
                pos = this.boards.length;
            }
            this.placeholder = response;
            this.boards[pos] = {
                boardID: this.placeholder.boardID,
                name: this.placeholder.name,
                createDate: this.placeholder.createDate
            };
            this.sortByName();
        }, (error) => {
            console.error(error);
        });
    }
    postBoard(name) {
        if (name !== '' && name !== undefined) {
            let header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
            header2 = header2.append('Token', this.cookieService.get('token'));
            this.board.name = name;
            this.http.post(this.ROOT_URL_BOARD, this.board, { headers: header2 })
                .subscribe((res) => {
                console.log(res);
                this.boards[this.boards.length] = this.board;
                window.location.reload();
            }, (error) => {
                console.error(error);
            });
        }
    }
    postMember(emailAddress) {
        if (emailAddress !== '' && emailAddress !== undefined) {
            let header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
            header2 = header2.append('Token', this.cookieService.get('token'));
            this.packet.emailAddress = emailAddress;
            this.http.post(this.ROOT_URL_BOARD_ + this.locale + '/member', this.packet, { headers: header2 })
                .subscribe((res) => {
                console.log(res);
            }, (error) => {
                console.error(error);
            });
        }
    }
    postAdmin(emailAddress) {
        if (emailAddress !== '' && emailAddress !== undefined) {
            let header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
            header2 = header2.append('Token', this.cookieService.get('token'));
            this.packet.emailAddress = emailAddress;
            this.http.post(this.ROOT_URL_BOARD_ + this.locale + '/admin', this.packet, { headers: header2 })
                .subscribe((res) => {
                console.log(res);
            }, (error) => {
                console.error(error);
            });
        }
    }
    deleteBoard() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
        header = header.append('Token', this.cookieService.get('token'));
        this.http.delete(this.ROOT_URL_BOARD_ + this.boards[this.clickID].boardID, { headers: header })
            .subscribe((res) => {
            console.log(res);
            window.location.reload();
        });
    }
    putBoard(name) {
        let header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
        header2 = header2.append('Token', this.cookieService.get('token'));
        if (name !== '') {
            this.boards[this.clickID].name = name;
        }
        this.http.put(this.ROOT_URL_BOARD_ + this.locale, this.boards[this.clickID], { headers: header2 })
            .subscribe((res) => {
            console.log(res);
            this.showEdit = false;
        }, (error) => {
            console.error(error);
        });
    }
    goToBoard() {
        this.cookieService.put('activeBoard', this.locale.toString());
        location.href = '/entries';
    }
    sortByName() {
        if (this.toggleSort) {
            this.boards.sort((a, b) => (b.name > a.name) ? 1 : -1);
        }
        else {
            this.boards.sort((a, b) => (a.name > b.name) ? 1 : -1);
        }
        this.toggleSort = !this.toggleSort;
    }
    sortByCreateDate() {
        if (this.toggleSort) {
            this.boards.sort((a, b) => (b.createDate > a.createDate) ? 1 : -1);
        }
        else {
            this.boards.sort((a, b) => (a.createDate > b.createDate) ? 1 : -1);
        }
        this.toggleSort = !this.toggleSort;
    }
    convertToLocal() {
        const input = this.boards[this.clickID].createDate;
        return new Date(input);
    }
    toggleCreate() {
        this.showCreate = !this.showCreate;
    }
    toggleEdit() {
        this.showEdit = !this.showEdit;
    }
    ngOnInit() {
        this.getExistingBoards();
    }
};
BoardsComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
BoardsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-boards',
        template: _raw_loader_boards_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_boards_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], BoardsComponent);



/***/ }),

/***/ "1W4x":
/*!************************************************!*\
  !*** ./src/app/register/register.component.ts ***!
  \************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./register.component.html */ "OOnH");
/* harmony import */ var _register_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./register.component.css */ "+nPA");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");






let RegisterComponent = class RegisterComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user';
        this.ROOT_URL_SEC_TKN = 'https://backend.yap.dragoncave.dev/security/token';
        this.packageobject = {
            username: '',
            emailAddress: '',
            password: '',
        };
    }
    doPost(username, email, password, password2) {
        this.packageobject.username = username;
        this.packageobject.emailAddress = email;
        this.packageobject.password = password;
        if (this.packageobject.username !== ''
            && this.packageobject.emailAddress !== ''
            && this.packageobject.password !== '') {
            if (this.packageobject.password === password2) {
                this.post();
            }
            else {
                console.error('Passwords do not match');
            }
        }
        else {
            console.error('Input field(s) were left empty');
        }
    }
    post() {
        const headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
        this.http.post(this.ROOT_URL_USR, this.packageobject, { headers: headerS }) // send the POST to create the user account
            .subscribe(() => {
            this.cookieService.removeAll();
            this.gettoken();
        }, (error) => {
            console.error(error);
        });
    }
    gettoken() {
        const headerS1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
        // tslint:disable-next-line:max-line-length
        this.http.post(this.ROOT_URL_SEC_TKN, this.packageobject, {
            headers: headerS1,
            responseType: 'text'
        }) // send user data to generate token
            .subscribe(res1 => {
            this.cookieService.put('token', res1);
            this.getUdata();
        }, (error) => {
            console.error(error);
        });
    }
    getUdata() {
        // tslint:disable-next-line:prefer-const
        let header1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        header1 = header1.append('Token', this.cookieService.get('token'));
        this.http.get(this.ROOT_URL_USR, { headers: header1 })
            .subscribe(response => {
            this.cookieService.putObject('Udata', response);
            window.location.href = '/profile';
        }, (error) => {
            console.error(error);
        });
    }
    welcombeback() {
        if (this.cookieService.getObject('Udata') === undefined) {
            this.message = 'Register';
        }
        else {
            this.message = 'Register another account';
        }
    }
    ngOnInit() {
        this.welcombeback();
    }
};
RegisterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RegisterComponent);



/***/ }),

/***/ "1XXE":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "40DX":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/main/main.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-new\">\n\t<div class=\"container__text\">\n\t\t<h1><span class=\"flicker-medium\">Wel</span><span class=\"flicker-fast\">come</span> to <span class=\"flicker-slow\">YAP</span> </h1>\n\t</div>\n\t<ul class=\"bg-bubbles\">\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t</ul>\n</div>\n\n");

/***/ }),

/***/ "50u7":
/*!*******************************************************!*\
  !*** ./src/app/tokentester/tokentester.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');\n\ninput {\n\tbackground-color: #21252B;\n\tmargin-top: .75vh;\n}\n\ninput:hover {\n\tbackground-color: #282C34;\n}\n\ninput:focus {\n\tbackground-color: #282C34;\n}\n\nh1 {\n\ttext-align: center;\n\tfont-family: 'Roboto', sans-serif;\n\tcolor: white;\n}\n\n.btn {\n\tmargin-top: 1vh !important;\n\tmargin-left: 1vh !important;\n}\n\n.parent {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 1fr);\n}\n\n.div2 {\n\ttext-align: center;\n}\n\n.div1 {\n\tgrid-area: 1 / 1 / 2 / 2;\n}\n\n.div2 {\n\tgrid-area: 1 / 2 / 2 / 3;\n}\n\n.div3 {\n\tgrid-area: 1 / 3 / 2 / 4;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRva2VudGVzdGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsd0ZBQXdGOztBQUV4RjtDQUNDLHlCQUF5QjtDQUN6QixpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsaUNBQWlDO0NBQ2pDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDBCQUEwQjtDQUMxQiwyQkFBMkI7QUFDNUI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6QiIsImZpbGUiOiJ0b2tlbnRlc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMCZkaXNwbGF5PXN3YXAnKTtcblxuaW5wdXQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTJCO1xuXHRtYXJnaW4tdG9wOiAuNzV2aDtcbn1cblxuaW5wdXQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM0O1xufVxuXG5pbnB1dDpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyODJDMzQ7XG59XG5cbmgxIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0biB7XG5cdG1hcmdpbi10b3A6IDF2aCAhaW1wb3J0YW50O1xuXHRtYXJnaW4tbGVmdDogMXZoICFpbXBvcnRhbnQ7XG59XG5cbi5wYXJlbnQge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCAxZnIpO1xuXHRncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xufVxuXG4uZGl2MiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmRpdjEge1xuXHRncmlkLWFyZWE6IDEgLyAxIC8gMiAvIDI7XG59XG5cbi5kaXYyIHtcblx0Z3JpZC1hcmVhOiAxIC8gMiAvIDIgLyAzO1xufVxuXG4uZGl2MyB7XG5cdGdyaWQtYXJlYTogMSAvIDMgLyAyIC8gNDtcbn1cblxuIl19 */");

/***/ }),

/***/ "51gD":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/tokentester/tokentester.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent\">\n\t<div class=\"div1\"></div>\n\t<div class=\"div2\">\n\n\t\t<h1>Token Testing</h1>\n\t\t<form>\n\t\t\t<input #emailaddress (keyup)=doEmail(emailaddress.value) type=\"email\" class=\"form-control\"\n\t\t\t\t   placeholder=\"Email\">\n\t\t\t<input #password (keyup)=\"doPassword(password.value)\" type=\"password\" class=\"form-control\"\n\t\t\t\t   placeholder=\"Password\">\n\t\t\t<button (click)=\"doPost()\" type=\"button\" class=\"btn btn-primary\">Post!</button>\n\t\t\t<button (click)=\"doCheck()\" type=\"button\" class=\"btn btn-primary\">Validate!</button>\n\t\t\t<button (click)=\"doCookiewrite()\" type=\"button\" class=\"btn btn-primary\">Write to cookie!</button>\n\t\t</form>\n\n\t</div>\n\t<div class=\"div3\"></div>\n</div>\n\n");

/***/ }),

/***/ "5VkC":
/*!********************************************!*\
  !*** ./src/app/legacy/legacy.component.ts ***!
  \********************************************/
/*! exports provided: LegacyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LegacyComponent", function() { return LegacyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_legacy_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./legacy.component.html */ "OpD2");
/* harmony import */ var _legacy_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./legacy.component.css */ "VR7F");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let LegacyComponent = class LegacyComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
LegacyComponent.ctorParameters = () => [];
LegacyComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-legacy',
        template: _raw_loader_legacy_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_legacy_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LegacyComponent);



/***/ }),

/***/ "6hrG":
/*!*************************************************************!*\
  !*** ./src/app/usermanagement/usermanagement.component.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n\tcolor: white;\n\toverflow: hidden !important;\n}\n\ninput {\n\tbackground-color: #21252B;\n\tmargin-top: .75vh;\n}\n\ninput:hover {\n\tbackground-color: #282C34;\n}\n\ninput:focus {\n\tbackground-color: #282C34;\n}\n\nh1 {\n\ttext-align: center;\n\tfont-family: 'Roboto', sans-serif;\n\tcolor: white;\n}\n\n.btn {\n\tmargin-top: 1vh !important;\n\tmargin-left: 1vh !important;\n}\n\n.parent {\n\toverflow: hidden !important;\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 1fr);\n}\n\n.div2 {\n\ttext-align: center;\n\tdisplay: block !important;\n}\n\n.div1 {\n\tgrid-area: 1 / 1 / 2 / 2;\n}\n\n.div2 {\n\tgrid-area: 1 / 2 / 2 / 3;\n}\n\n.div3 {\n\tgrid-area: 1 / 3 / 2 / 4;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInVzZXJtYW5hZ2VtZW50LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyxZQUFZO0NBQ1osMkJBQTJCO0FBQzVCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQ0FBaUM7Q0FDakMsWUFBWTtBQUNiOztBQUVBO0NBQ0MsMEJBQTBCO0NBQzFCLDJCQUEyQjtBQUM1Qjs7QUFHQTtDQUNDLDJCQUEyQjtDQUMzQixhQUFhO0NBQ2IscUNBQXFDO0NBQ3JDLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQix5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekIiLCJmaWxlIjoidXNlcm1hbmFnZW1lbnQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuXHRjb2xvcjogd2hpdGU7XG5cdG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcbn1cblxuaW5wdXQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjEyNTJCO1xuXHRtYXJnaW4tdG9wOiAuNzV2aDtcbn1cblxuaW5wdXQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM0O1xufVxuXG5pbnB1dDpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyODJDMzQ7XG59XG5cbmgxIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuLmJ0biB7XG5cdG1hcmdpbi10b3A6IDF2aCAhaW1wb3J0YW50O1xuXHRtYXJnaW4tbGVmdDogMXZoICFpbXBvcnRhbnQ7XG59XG5cblxuLnBhcmVudCB7XG5cdG92ZXJmbG93OiBoaWRkZW4gIWltcG9ydGFudDtcblx0ZGlzcGxheTogZ3JpZDtcblx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcblx0Z3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMywgMWZyKTtcbn1cblxuLmRpdjIge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGRpc3BsYXk6IGJsb2NrICFpbXBvcnRhbnQ7XG59XG5cbi5kaXYxIHtcblx0Z3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xufVxuXG4uZGl2MiB7XG5cdGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbn1cblxuLmRpdjMge1xuXHRncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XG59XG5cbiJdfQ== */");

/***/ }),

/***/ "96dj":
/*!**********************************************!*\
  !*** ./src/app/GETtest/GETtest.component.ts ***!
  \**********************************************/
/*! exports provided: GETtestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GETtestComponent", function() { return GETtestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_GETtest_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./GETtest.component.html */ "MWml");
/* harmony import */ var _GETtest_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./GETtest.component.css */ "Cja4");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");






let GETtestComponent = class GETtestComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL = 'https://backend.yap.dragoncave.dev';
    }
    getStuff(input) {
        this.token = this.cookieService.get('token');
        let headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
        headerS = headerS.append('Token', this.token);
        this.returnvalue = this.http.get(this.ROOT_URL + input, { headers: headerS })
            .toPromise()
            .then(data => {
            this.returnvalue = data;
        }, (error) => {
            console.error(error);
        });
    }
    // tslint:disable-next-line:use-lifecycle-interface
    ngOnInit() {
    }
};
GETtestComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
GETtestComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        // tslint:disable-next-line:component-selector
        selector: 'app-GETtest',
        template: _raw_loader_GETtest_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_GETtest_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], GETtestComponent);



/***/ }),

/***/ "A3xY":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("body {\n\tbackground-color: #1c1c1c;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MseUJBQXlCO0FBQzFCIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYm9keSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XG59XG4iXX0= */");

/***/ }),

/***/ "Aqmg":
/*!*****************************************!*\
  !*** ./src/app/main/main.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: 300;\n\tfont-family: 'Source Sans Pro', sans-serif;\n\tcolor: white;\n\toverflow: hidden;\n}\n\nbody {\n\tcolor: white;\n\tfont-weight: 300;\n}\n\n.container__text {\n\tdisplay: grid;\n\tplace-items: center;\n}\n\nh1 {\n\tpadding-left: 20vw;\n\tpadding-right: 20vw;\n\tposition: relative;\n\tpadding-top: 35vh;\n\tpadding-bottom: 65vh;\n\tfont-size: 70pt;\n\tcolor: rgba(255, 255, 255, 0.5);\n\ttransition-duration: 0s;\n\ttext-shadow: 1px 0 4px #53e3a6,\n\t2px 0 4px #53e3a6,\n\t3px 0 4px #53e3a6,\n\t2px 0 3px #21faa1,\n\t2px 3px 15px #21faa1\n}\n\n.flicker-slow {\n\tcolor: rgba(255, 255, 255, 0.5);\n\tanimation: flicker 3s forwards;\n\tanimation-delay: 1s;\n\ttext-shadow: 1px 0 4px #53e3a6,\n\t2px 0 4px #53e3a6,\n\t3px 0 4px #53e3a6,\n\t2px 0 3px #21faa1,\n\t2px 3px 15px #21faa1\n}\n\n.flicker-fast {\n\tcolor: rgba(255, 255, 255, 0.5);\n\tanimation: flicker 1s forwards;\n\tanimation-delay: 2s;\n\ttext-shadow: 1px 0 4px #53e3a6,\n\t2px 0 4px #53e3a6,\n\t3px 0 4px #53e3a6,\n\t2px 0 3px #21faa1,\n\t2px 0 15px #21faa1\n}\n\n.flicker-medium {\n\tcolor: rgba(255, 255, 255, 0.5);\n\tanimation: flicker 2s forwards;\n\tanimation-delay: 1.5s;\n\ttext-shadow: 1px 0 4px #53e3a6,\n\t2px 0 4px #53e3a6,\n\t3px 0 4px #53e3a6,\n\t2px 0 3px #21faa1,\n\t2px 0 15px #21faa1\n}\n\n@keyframes flicker {\n\t0% {\n\t\topacity: 0;\n\t}\n\t19.999%, 23%, 64.999%, 65%, 66.999%, 71%, 85%, 100% {\n\t\topacity: .99;\n\n\t}\n\t20%, 21.999%, 63%, 63.999%, 65%, 84.5%, 69.999% {\n\t\topacity: 0.4;\n\t}\n}\n\n.bg-bubbles {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: -1;\n}\n\n.bg-bubbles li {\n\tposition: absolute;\n\tlist-style: none;\n\tdisplay: block;\n\twidth: 40px;\n\theight: 40px;\n\tbackground-color: rgba(255, 255, 255, 0.15);\n\tbottom: -160px;\n\tanimation: square 25s infinite;\n\ttransition-timing-function: linear;\n}\n\n.bg-bubbles li:nth-child(1) {\n\tleft: 10%;\n}\n\n.bg-bubbles li:nth-child(2) {\n\tleft: 20%;\n\twidth: 80px;\n\theight: 80px;\n\tanimation-delay: 2s;\n\tanimation-duration: 17s;\n}\n\n.bg-bubbles li:nth-child(3) {\n\tleft: 25%;\n\tanimation-delay: 4s;\n}\n\n.bg-bubbles li:nth-child(4) {\n\tleft: 40%;\n\twidth: 60px;\n\theight: 60px;\n\tanimation-duration: 22s;\n\tbackground-color: rgba(255, 255, 255, 0.25);\n}\n\n.bg-bubbles li:nth-child(5) {\n\tleft: 70%;\n}\n\n.bg-bubbles li:nth-child(6) {\n\tleft: 80%;\n\twidth: 120px;\n\theight: 120px;\n\tanimation-delay: 3s;\n\tbackground-color: rgba(255, 255, 255, 0.2);\n}\n\n.bg-bubbles li:nth-child(7) {\n\tleft: 32%;\n\twidth: 160px;\n\theight: 160px;\n\tanimation-delay: 7s;\n}\n\n.bg-bubbles li:nth-child(8) {\n\tleft: 55%;\n\twidth: 20px;\n\theight: 20px;\n\tanimation-delay: 15s;\n\tanimation-duration: 40s;\n}\n\n.bg-bubbles li:nth-child(9) {\n\tleft: 25%;\n\twidth: 10px;\n\theight: 10px;\n\tanimation-delay: 2s;\n\tanimation-duration: 40s;\n\tbackground-color: rgba(255, 255, 255, 0.3);\n}\n\n.bg-bubbles li:nth-child(10) {\n\tleft: 90%;\n\twidth: 160px;\n\theight: 160px;\n\tanimation-delay: 11s;\n}\n\n@keyframes square {\n\t0% {\n\t\ttransform: translateY(0);\n\t}\n\t100% {\n\t\ttransform: translateY(-700px) rotate(600deg);\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHNCQUFzQjtDQUN0QixTQUFTO0NBQ1QsVUFBVTtDQUNWLGdCQUFnQjtDQUNoQiwwQ0FBMEM7Q0FDMUMsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLG1CQUFtQjtDQUNuQixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLG9CQUFvQjtDQUNwQixlQUFlO0NBQ2YsK0JBQStCO0NBQy9CLHVCQUF1QjtDQUN2Qjs7Ozs7QUFLRDs7QUFFQTtDQUNDLCtCQUErQjtDQUMvQiw4QkFBOEI7Q0FDOUIsbUJBQW1CO0NBQ25COzs7OztBQUtEOztBQUVBO0NBQ0MsK0JBQStCO0NBQy9CLDhCQUE4QjtDQUM5QixtQkFBbUI7Q0FDbkI7Ozs7O0FBS0Q7O0FBRUE7Q0FDQywrQkFBK0I7Q0FDL0IsOEJBQThCO0NBQzlCLHFCQUFxQjtDQUNyQjs7Ozs7QUFLRDs7QUFFQTtDQUNDO0VBQ0MsVUFBVTtDQUNYO0NBQ0E7RUFDQyxZQUFZOztDQUViO0NBQ0E7RUFDQyxZQUFZO0NBQ2I7QUFDRDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sT0FBTztDQUNQLFdBQVc7Q0FDWCxZQUFZO0NBQ1osV0FBVztBQUNaOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixjQUFjO0NBQ2QsV0FBVztDQUNYLFlBQVk7Q0FDWiwyQ0FBMkM7Q0FDM0MsY0FBYztDQUVkLDhCQUE4QjtDQUM5QixrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FFWixtQkFBbUI7Q0FFbkIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsU0FBUztDQUVULG1CQUFtQjtBQUNwQjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUVaLHVCQUF1QjtDQUN2QiwyQ0FBMkM7QUFDNUM7O0FBRUE7Q0FDQyxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsWUFBWTtDQUNaLGFBQWE7Q0FFYixtQkFBbUI7Q0FDbkIsMENBQTBDO0FBQzNDOztBQUVBO0NBQ0MsU0FBUztDQUNULFlBQVk7Q0FDWixhQUFhO0NBRWIsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsU0FBUztDQUNULFdBQVc7Q0FDWCxZQUFZO0NBRVosb0JBQW9CO0NBRXBCLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUVaLG1CQUFtQjtDQUVuQix1QkFBdUI7Q0FDdkIsMENBQTBDO0FBQzNDOztBQUVBO0NBQ0MsU0FBUztDQUNULFlBQVk7Q0FDWixhQUFhO0NBRWIsb0JBQW9CO0FBQ3JCOztBQVdBO0NBQ0M7RUFDQyx3QkFBd0I7Q0FDekI7Q0FDQTtFQUNDLDRDQUE0QztDQUM3QztBQUNEIiwiZmlsZSI6Im1haW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRtYXJnaW46IDA7XG5cdHBhZGRpbmc6IDA7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcblx0Y29sb3I6IHdoaXRlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5ib2R5IHtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4uY29udGFpbmVyX190ZXh0IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuaDEge1xuXHRwYWRkaW5nLWxlZnQ6IDIwdnc7XG5cdHBhZGRpbmctcmlnaHQ6IDIwdnc7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0cGFkZGluZy10b3A6IDM1dmg7XG5cdHBhZGRpbmctYm90dG9tOiA2NXZoO1xuXHRmb250LXNpemU6IDcwcHQ7XG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IDBzO1xuXHR0ZXh0LXNoYWRvdzogMXB4IDAgNHB4ICM1M2UzYTYsXG5cdDJweCAwIDRweCAjNTNlM2E2LFxuXHQzcHggMCA0cHggIzUzZTNhNixcblx0MnB4IDAgM3B4ICMyMWZhYTEsXG5cdDJweCAzcHggMTVweCAjMjFmYWExXG59XG5cbi5mbGlja2VyLXNsb3cge1xuXHRjb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpO1xuXHRhbmltYXRpb246IGZsaWNrZXIgM3MgZm9yd2FyZHM7XG5cdGFuaW1hdGlvbi1kZWxheTogMXM7XG5cdHRleHQtc2hhZG93OiAxcHggMCA0cHggIzUzZTNhNixcblx0MnB4IDAgNHB4ICM1M2UzYTYsXG5cdDNweCAwIDRweCAjNTNlM2E2LFxuXHQycHggMCAzcHggIzIxZmFhMSxcblx0MnB4IDNweCAxNXB4ICMyMWZhYTFcbn1cblxuLmZsaWNrZXItZmFzdCB7XG5cdGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSk7XG5cdGFuaW1hdGlvbjogZmxpY2tlciAxcyBmb3J3YXJkcztcblx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0dGV4dC1zaGFkb3c6IDFweCAwIDRweCAjNTNlM2E2LFxuXHQycHggMCA0cHggIzUzZTNhNixcblx0M3B4IDAgNHB4ICM1M2UzYTYsXG5cdDJweCAwIDNweCAjMjFmYWExLFxuXHQycHggMCAxNXB4ICMyMWZhYTFcbn1cblxuLmZsaWNrZXItbWVkaXVtIHtcblx0Y29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41KTtcblx0YW5pbWF0aW9uOiBmbGlja2VyIDJzIGZvcndhcmRzO1xuXHRhbmltYXRpb24tZGVsYXk6IDEuNXM7XG5cdHRleHQtc2hhZG93OiAxcHggMCA0cHggIzUzZTNhNixcblx0MnB4IDAgNHB4ICM1M2UzYTYsXG5cdDNweCAwIDRweCAjNTNlM2E2LFxuXHQycHggMCAzcHggIzIxZmFhMSxcblx0MnB4IDAgMTVweCAjMjFmYWExXG59XG5cbkBrZXlmcmFtZXMgZmxpY2tlciB7XG5cdDAlIHtcblx0XHRvcGFjaXR5OiAwO1xuXHR9XG5cdDE5Ljk5OSUsIDIzJSwgNjQuOTk5JSwgNjUlLCA2Ni45OTklLCA3MSUsIDg1JSwgMTAwJSB7XG5cdFx0b3BhY2l0eTogLjk5O1xuXG5cdH1cblx0MjAlLCAyMS45OTklLCA2MyUsIDYzLjk5OSUsIDY1JSwgODQuNSUsIDY5Ljk5OSUge1xuXHRcdG9wYWNpdHk6IDAuNDtcblx0fVxufVxuXG4uYmctYnViYmxlcyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLmJnLWJ1YmJsZXMgbGkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuXHRib3R0b206IC0xNjBweDtcblx0LXdlYmtpdC1hbmltYXRpb246IHNxdWFyZSAyNXMgaW5maW5pdGU7XG5cdGFuaW1hdGlvbjogc3F1YXJlIDI1cyBpbmZpbml0ZTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDEpIHtcblx0bGVmdDogMTAlO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMikge1xuXHRsZWZ0OiAyMCU7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcblx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE3cztcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XG59XG5cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCgzKSB7XG5cdGxlZnQ6IDI1JTtcblx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDRzO1xuXHRhbmltYXRpb24tZGVsYXk6IDRzO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNCkge1xuXHRsZWZ0OiA0MCU7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDYwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyMnM7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMjJzO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNSkge1xuXHRsZWZ0OiA3MCU7XG59XG5cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg2KSB7XG5cdGxlZnQ6IDgwJTtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogM3M7XG5cdGFuaW1hdGlvbi1kZWxheTogM3M7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDcpIHtcblx0bGVmdDogMzIlO1xuXHR3aWR0aDogMTYwcHg7XG5cdGhlaWdodDogMTYwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3cztcblx0YW5pbWF0aW9uLWRlbGF5OiA3cztcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDgpIHtcblx0bGVmdDogNTUlO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTVzO1xuXHRhbmltYXRpb24tZGVsYXk6IDE1cztcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDQwcztcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XG59XG5cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg5KSB7XG5cdGxlZnQ6IDI1JTtcblx0d2lkdGg6IDEwcHg7XG5cdGhlaWdodDogMTBweDtcblx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xuXHRhbmltYXRpb24tZGVsYXk6IDJzO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xuXHRhbmltYXRpb24tZHVyYXRpb246IDQwcztcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMTApIHtcblx0bGVmdDogOTAlO1xuXHR3aWR0aDogMTYwcHg7XG5cdGhlaWdodDogMTYwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMXM7XG5cdGFuaW1hdGlvbi1kZWxheTogMTFzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3F1YXJlIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwMHB4KSByb3RhdGUoNjAwZGVnKTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHNxdWFyZSB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgcm90YXRlKDYwMGRlZyk7XG5cdH1cbn1cbiJdfQ== */");

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
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "Cja4":
/*!***********************************************!*\
  !*** ./src/app/GETtest/GETtest.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');\n\n\n.button {\n\tbackground-color: #4CAF50 !important; /* Green */\n\tborder: none;\n\tcolor: white;\n\tpadding: 15px 32px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline-block;\n\tfont-size: 16px;\n\n}\n\n\nh1 {\n\ttext-align: center;\n\tfont-family: 'Roboto', sans-serif;\n}\n\n\n* {\n\tcolor: white;\n\tbackground-color: #1c1c1c;\n}\n\n\ninput {\n\tbackground-color: #21252B;\n\n}\n\n\ninput:hover {\n\tcolor: white;\n\tbackground-color: #282C34;\n}\n\n\ninput:focus {\n\tcolor: white;\n\tbackground-color: #282C34;\n}\n\n\n.parent {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 1fr);\n}\n\n\n.div1 {\n\tgrid-area: 1 / 1 / 2 / 2;\n}\n\n\n.div2 {\n\tgrid-area: 1 / 2 / 2 / 3;\n}\n\n\n.div3 {\n\tgrid-area: 1 / 3 / 2 / 4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkdFVHRlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3RkFBd0Y7OztBQUd4RjtDQUNDLG9DQUFvQyxFQUFFLFVBQVU7Q0FDaEQsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixxQkFBcUI7Q0FDckIsZUFBZTs7QUFFaEI7OztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGlDQUFpQztBQUNsQzs7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0FBQzFCOzs7QUFFQTtDQUNDLHlCQUF5Qjs7QUFFMUI7OztBQUVBO0NBQ0MsWUFBWTtDQUNaLHlCQUF5QjtBQUMxQjs7O0FBRUE7Q0FDQyxZQUFZO0NBQ1oseUJBQXlCO0FBQzFCOzs7QUFHQTtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsa0NBQWtDO0FBQ25DOzs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7OztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCIiwiZmlsZSI6IkdFVHRlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDAmZGlzcGxheT1zd2FwJyk7XG5cblxuLmJ1dHRvbiB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0Q0FGNTAgIWltcG9ydGFudDsgLyogR3JlZW4gKi9cblx0Ym9yZGVyOiBub25lO1xuXHRjb2xvcjogd2hpdGU7XG5cdHBhZGRpbmc6IDE1cHggMzJweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGRpc3BsYXk6IGlubGluZS1ibG9jaztcblx0Zm9udC1zaXplOiAxNnB4O1xuXG59XG5cbmgxIHtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XG59XG5cbioge1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMxYzFjMWM7XG59XG5cbmlucHV0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzIxMjUyQjtcblxufVxuXG5pbnB1dDpob3ZlciB7XG5cdGNvbG9yOiB3aGl0ZTtcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4MkMzNDtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuXHRjb2xvcjogd2hpdGU7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyODJDMzQ7XG59XG5cblxuLnBhcmVudCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG59XG5cbi5kaXYxIHtcblx0Z3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xufVxuXG4uZGl2MiB7XG5cdGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbn1cblxuLmRpdjMge1xuXHRncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XG59XG4iXX0= */");

/***/ }),

/***/ "DN7M":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url(https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css);\n\n@import url(https://fonts.googleapis.com/css?family=Titillium+Web:300);\n\n.fa-2x {\n\tfont-size: 2em;\n}\n\n.fa {\n\tposition: relative;\n\tdisplay: table-cell;\n\twidth: 60px;\n\theight: 36px;\n\ttext-align: center;\n\tvertical-align: middle;\n\tfont-size: 20px;\n}\n\n.main-menu:hover, nav.main-menu.expanded {\n\twidth: 250px;\n\toverflow: visible;\n}\n\n.main-menu {\n\n\tbackground: #212121;\n\tborder-right: 1px solid #53e3a6;\n\tborder-bottom: 1px solid #53e3a6;\n\tposition: absolute;\n\ttop: 0;\n\tbottom: 0;\n\theight: 100%;\n\tleft: 0;\n\twidth: 60px;\n\toverflow: hidden;\n\ttransition: width .2s;\n\t-webkit-transform: translateZ(0) scale(1, 1);\n\tz-index: 1000;\n}\n\n.main-menu > ul {\n\tmargin: 7px 0;\n}\n\n.main-menu li {\n\tposition: relative;\n\tdisplay: block;\n\twidth: 250px;\n}\n\n.main-menu li > a {\n\tposition: relative;\n\tdisplay: table;\n\tborder-collapse: collapse;\n\tborder-spacing: 0;\n\tcolor: #999;\n\tfont-family: arial;\n\tfont-size: 14px;\n\ttext-decoration: none;\n\t-webkit-transform: translateZ(0) scale(1, 1);\n\ttransition: all .5s linear;\n\n}\n\n.main-menu .nav-icon {\n\tposition: relative;\n\tdisplay: table-cell;\n\twidth: 60px;\n\theight: 36px;\n\ttext-align: center;\n\tvertical-align: middle;\n\tfont-size: 18px;\n}\n\n.main-menu .nav-text {\n\tposition: relative;\n\tdisplay: table-cell;\n\tvertical-align: middle;\n\twidth: 190px;\n\tfont-family: 'Titillium Web', sans-serif;\n}\n\n.main-menu > ul.logout {\n\tposition: absolute;\n\tleft: 0;\n\tbottom: 0;\n}\n\n.no-touch .scrollable.hover {\n\toverflow-y: hidden;\n}\n\n.no-touch .scrollable.hover:hover {\n\toverflow: visible;\n}\n\na:hover, a:focus {\n\ttext-decoration: none;\n}\n\nnav {\n\t-webkit-user-select: none;\n\t-o-user-select: none;\n\tuser-select: none;\n}\n\nnav ul, nav li {\n\toutline: 0;\n\tmargin: 0;\n\tpadding: 0;\n}\n\n.main-menu li:hover > a, nav.main-menu li.active > a, .dropdown-menu > li > a:hover, .dropdown-menu > li > a:focus, .dropdown-menu > .active > a, .dropdown-menu > .active > a:hover, .dropdown-menu > .active > a:focus, .no-touch .dashboard-page nav.dashboard-menu ul li:hover a, .dashboard-page nav.dashboard-menu ul li.active a {\n\tcolor: #fff;\n\tbackground-color: #53e3a6;\n}\n\n.area {\n\tfloat: left;\n\tbackground: #e2e2e2;\n\twidth: 100%;\n\theight: 100%;\n}\n\n@font-face {\n\tfont-family: 'Titillium Web';\n\tfont-style: normal;\n\tfont-weight: 300;\n\tsrc: local('Titillium WebLight'), local('TitilliumWeb-Light'), url(https://themes.googleusercontent.com/static/fonts/titilliumweb/v2/anMUvcNT0H1YN4FII8wpr24bNCNEoFTpS2BTjF6FB5E.woff) format('woff');\n}\n\n@media only screen and (max-width: 600px) {\n\t.mobile {\n\t\tvisibility: hidden;\n\t}\n}\n\n@media only screen and (min-width: 600px) {\n\t.mobile {\n\t\tvisibility: hidden;\n\t}\n}\n\n/* New Navbar\n\n.drop-item, .drop-button {\n  background: #3ce5ad;\n  border-radius: 100%;\n  width: 80px;\n  height: 80px;\n  margin-left: -40px;\n  position: absolute;\n  top: 20px;\n  color: white;\n  text-align: center;\n  line-height: 80px;\n  transform: translate3d(0, 0, 0);\n  transition: transform ease-out 200ms;\n}\n\n.drop {\n  display: none;\n}\n\n.hamburger {\n  width: 25px;\n  height: 3px;\n  background: white;\n  display: block;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin-left: -15px;\n  margin-top: -1px;\n  transition: transform 200ms;\n}\n.hamburger-1 {\n  transform: translate3d(0, -8px, 0);\n}\n.hamburger-2 {\n  transform: translate3d(0, 0px, 0);\n}\n.hamburger-3 {\n  transform: translate3d(0, 8px, 0);\n}\n\n.drop:checked + .drop-button .hamburger-1 {\n  transform: translate3d(0, 0, 0) rotate(45deg);\n}\n.drop:checked + .drop-button .hamburger-2 {\n  transform: translate3d(0, 0, 0) scale(0.1, 1);\n}\n.drop:checked + .drop-button .hamburger-3 {\n  transform: translate3d(0, 0, 0) rotate(-45deg);\n}\n\n.mobile{\n  position: relative;\n  left: 20%;\n  margin-left: -80px;\n  padding-top: 20px;\n  padding-left: 80px;\n  width: 650px;\n  height: 150px;\n  box-sizing: border-box;\n  font-size: 20px;\n  text-align: left;\n}\n\n.drop-item:hover{\n  background: white;\n  color: #1c1c1c;\n}\n\n.drop-item:nth-child(3) {\n  transition-duration: 108ms;\n}\n.drop-item:nth-child(4) {\n  transition-duration: 108ms;\n}\n.drop-item:nth-child(5) {\n  transition-duration: 108ms;\n}\n.drop-item:nth-child(6) {\n  transition-duration: 108ms;\n}\n\n.drop-button {\n  z-index: 2;\n  transition-timing-function: cubic-bezier(0.180, 0.880, 0.30, 1.300);\n  transition-duration: 400ms;\n  transform: scale(1.1, 1.1) translate3d(0, 0, 0);\n  cursor: pointer;\n}\n\n.drop-button:hover{\n  transform: scale(1.2, 1.2) translate3d(0, 0, 0);\n}\n\n.drop:checked + .drop-button {\n  transition-timing-function: linear;\n  transition-duration: 200ms;\n  transform: scale(0.8, 0.8) translate3d(0, 0, 0);\n}\n\n.drop:checked ~ .drop-item {\n  transition-timing-function: cubic-bezier(0.165, 0.84, 0.44, 1);\n}\n\n.drop:checked ~ .drop-item:nth-child(3) {\n  transition-duration: 190ms;\n  transform: translate3d(110px, 0 ,0);\n}\n.drop:checked ~ .drop-item:nth-child(4) {\n  transition-duration: 290ms;\n  transform: translate3d(220px, 0 ,0);\n}\n.drop:checked ~ .drop-item:nth-child(5) {\n  transition-duration: 390ms;\n  transform: translate3d(330px, 0 ,0);\n}\n.drop:checked ~ .drop-item:nth-child(6) {\n  transition-duration: 490ms;\n  transform: translate3d(440px, 0 ,0);\n}\n} */\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDJGQUEyRjs7QUFFM0Ysc0VBQXNFOztBQUV0RTtDQUNDLGNBQWM7QUFDZjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGVBQWU7QUFDaEI7O0FBR0E7Q0FDQyxZQUFZO0NBQ1osaUJBQWlCO0FBQ2xCOztBQUVBOztDQUVDLG1CQUFtQjtDQUNuQiwrQkFBK0I7Q0FDL0IsZ0NBQWdDO0NBQ2hDLGtCQUFrQjtDQUNsQixNQUFNO0NBQ04sU0FBUztDQUNULFlBQVk7Q0FDWixPQUFPO0NBQ1AsV0FBVztDQUNYLGdCQUFnQjtDQUVoQixxQkFBcUI7Q0FDckIsNENBQTRDO0NBQzVDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGFBQWE7QUFDZDs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixjQUFjO0NBQ2QsWUFBWTtBQUNiOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLHFCQUFxQjtDQUNyQiw0Q0FBNEM7Q0FFNUMsMEJBQTBCOztBQUUzQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsbUJBQW1CO0NBQ25CLHNCQUFzQjtDQUN0QixZQUFZO0NBQ1osd0NBQXdDO0FBQ3pDOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE9BQU87Q0FDUCxTQUFTO0FBQ1Y7O0FBRUE7Q0FDQyxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyxpQkFBaUI7QUFDbEI7O0FBRUE7Q0FDQyxxQkFBcUI7QUFDdEI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FHekIsb0JBQW9CO0NBQ3BCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixTQUFTO0NBQ1QsVUFBVTtBQUNYOztBQUVBO0NBQ0MsV0FBVztDQUNYLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxtQkFBbUI7Q0FDbkIsV0FBVztDQUNYLFlBQVk7QUFDYjs7QUFFQTtDQUNDLDRCQUE0QjtDQUM1QixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLHFNQUFxTTtBQUN0TTs7QUFHQTtDQUNDO0VBQ0Msa0JBQWtCO0NBQ25CO0FBQ0Q7O0FBRUE7Q0FDQztFQUNDLGtCQUFrQjtDQUNuQjtBQUNEOztBQUdBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQTBIRyIsImZpbGUiOiJoZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKGh0dHBzOi8vc3RhY2twYXRoLmJvb3RzdHJhcGNkbi5jb20vZm9udC1hd2Vzb21lLzQuNy4wL2Nzcy9mb250LWF3ZXNvbWUubWluLmNzcyk7XG5cbkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1UaXRpbGxpdW0rV2ViOjMwMCk7XG5cbi5mYS0yeCB7XG5cdGZvbnQtc2l6ZTogMmVtO1xufVxuXG4uZmEge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IHRhYmxlLWNlbGw7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDM2cHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dmVydGljYWwtYWxpZ246IG1pZGRsZTtcblx0Zm9udC1zaXplOiAyMHB4O1xufVxuXG5cbi5tYWluLW1lbnU6aG92ZXIsIG5hdi5tYWluLW1lbnUuZXhwYW5kZWQge1xuXHR3aWR0aDogMjUwcHg7XG5cdG92ZXJmbG93OiB2aXNpYmxlO1xufVxuXG4ubWFpbi1tZW51IHtcblxuXHRiYWNrZ3JvdW5kOiAjMjEyMTIxO1xuXHRib3JkZXItcmlnaHQ6IDFweCBzb2xpZCAjNTNlM2E2O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgIzUzZTNhNjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG5cdGJvdHRvbTogMDtcblx0aGVpZ2h0OiAxMDAlO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogNjBweDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0LXdlYmtpdC10cmFuc2l0aW9uOiB3aWR0aCAuMDdzIGxpbmVhcjtcblx0dHJhbnNpdGlvbjogd2lkdGggLjJzO1xuXHQtd2Via2l0LXRyYW5zZm9ybTogdHJhbnNsYXRlWigwKSBzY2FsZSgxLCAxKTtcblx0ei1pbmRleDogMTAwMDtcbn1cblxuLm1haW4tbWVudSA+IHVsIHtcblx0bWFyZ2luOiA3cHggMDtcbn1cblxuLm1haW4tbWVudSBsaSB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHdpZHRoOiAyNTBweDtcbn1cblxuLm1haW4tbWVudSBsaSA+IGEge1xuXHRwb3NpdGlvbjogcmVsYXRpdmU7XG5cdGRpc3BsYXk6IHRhYmxlO1xuXHRib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xuXHRib3JkZXItc3BhY2luZzogMDtcblx0Y29sb3I6ICM5OTk7XG5cdGZvbnQtZmFtaWx5OiBhcmlhbDtcblx0Zm9udC1zaXplOiAxNHB4O1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApIHNjYWxlKDEsIDEpO1xuXHQtd2Via2l0LXRyYW5zaXRpb246IGFsbCAuMXMgbGluZWFyO1xuXHR0cmFuc2l0aW9uOiBhbGwgLjVzIGxpbmVhcjtcblxufVxuXG4ubWFpbi1tZW51IC5uYXYtaWNvbiB7XG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcblx0ZGlzcGxheTogdGFibGUtY2VsbDtcblx0d2lkdGg6IDYwcHg7XG5cdGhlaWdodDogMzZweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRmb250LXNpemU6IDE4cHg7XG59XG5cbi5tYWluLW1lbnUgLm5hdi10ZXh0IHtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHRkaXNwbGF5OiB0YWJsZS1jZWxsO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHR3aWR0aDogMTkwcHg7XG5cdGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XG59XG5cbi5tYWluLW1lbnUgPiB1bC5sb2dvdXQge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxlZnQ6IDA7XG5cdGJvdHRvbTogMDtcbn1cblxuLm5vLXRvdWNoIC5zY3JvbGxhYmxlLmhvdmVyIHtcblx0b3ZlcmZsb3cteTogaGlkZGVuO1xufVxuXG4ubm8tdG91Y2ggLnNjcm9sbGFibGUuaG92ZXI6aG92ZXIge1xuXHRvdmVyZmxvdzogdmlzaWJsZTtcbn1cblxuYTpob3ZlciwgYTpmb2N1cyB7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxubmF2IHtcblx0LXdlYmtpdC11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1vei11c2VyLXNlbGVjdDogbm9uZTtcblx0LW1zLXVzZXItc2VsZWN0OiBub25lO1xuXHQtby11c2VyLXNlbGVjdDogbm9uZTtcblx0dXNlci1zZWxlY3Q6IG5vbmU7XG59XG5cbm5hdiB1bCwgbmF2IGxpIHtcblx0b3V0bGluZTogMDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xufVxuXG4ubWFpbi1tZW51IGxpOmhvdmVyID4gYSwgbmF2Lm1haW4tbWVudSBsaS5hY3RpdmUgPiBhLCAuZHJvcGRvd24tbWVudSA+IGxpID4gYTpob3ZlciwgLmRyb3Bkb3duLW1lbnUgPiBsaSA+IGE6Zm9jdXMsIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGEsIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6aG92ZXIsIC5kcm9wZG93bi1tZW51ID4gLmFjdGl2ZSA+IGE6Zm9jdXMsIC5uby10b3VjaCAuZGFzaGJvYXJkLXBhZ2UgbmF2LmRhc2hib2FyZC1tZW51IHVsIGxpOmhvdmVyIGEsIC5kYXNoYm9hcmQtcGFnZSBuYXYuZGFzaGJvYXJkLW1lbnUgdWwgbGkuYWN0aXZlIGEge1xuXHRjb2xvcjogI2ZmZjtcblx0YmFja2dyb3VuZC1jb2xvcjogIzUzZTNhNjtcbn1cblxuLmFyZWEge1xuXHRmbG9hdDogbGVmdDtcblx0YmFja2dyb3VuZDogI2UyZTJlMjtcblx0d2lkdGg6IDEwMCU7XG5cdGhlaWdodDogMTAwJTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYic7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDMwMDtcblx0c3JjOiBsb2NhbCgnVGl0aWxsaXVtIFdlYkxpZ2h0JyksIGxvY2FsKCdUaXRpbGxpdW1XZWItTGlnaHQnKSwgdXJsKGh0dHBzOi8vdGhlbWVzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9zdGF0aWMvZm9udHMvdGl0aWxsaXVtd2ViL3YyL2FuTVV2Y05UMEgxWU40RklJOHdwcjI0Yk5DTkVvRlRwUzJCVGpGNkZCNUUud29mZikgZm9ybWF0KCd3b2ZmJyk7XG59XG5cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA2MDBweCkge1xuXHQubW9iaWxlIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cbn1cblxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA2MDBweCkge1xuXHQubW9iaWxlIHtcblx0XHR2aXNpYmlsaXR5OiBoaWRkZW47XG5cdH1cbn1cblxuXG4vKiBOZXcgTmF2YmFyXG5cbi5kcm9wLWl0ZW0sIC5kcm9wLWJ1dHRvbiB7XG4gIGJhY2tncm91bmQ6ICMzY2U1YWQ7XG4gIGJvcmRlci1yYWRpdXM6IDEwMCU7XG4gIHdpZHRoOiA4MHB4O1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAtNDBweDtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDIwcHg7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBsaW5lLWhlaWdodDogODBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGVhc2Utb3V0IDIwMG1zO1xufVxuXG4uZHJvcCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5cbi5oYW1idXJnZXIge1xuICB3aWR0aDogMjVweDtcbiAgaGVpZ2h0OiAzcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICBtYXJnaW4tbGVmdDogLTE1cHg7XG4gIG1hcmdpbi10b3A6IC0xcHg7XG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyMDBtcztcbn1cbi5oYW1idXJnZXItMSB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgLThweCwgMCk7XG59XG4uaGFtYnVyZ2VyLTIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDBweCwgMCk7XG59XG4uaGFtYnVyZ2VyLTMge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDhweCwgMCk7XG59XG5cbi5kcm9wOmNoZWNrZWQgKyAuZHJvcC1idXR0b24gLmhhbWJ1cmdlci0xIHtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgwLCAwLCAwKSByb3RhdGUoNDVkZWcpO1xufVxuLmRyb3A6Y2hlY2tlZCArIC5kcm9wLWJ1dHRvbiAuaGFtYnVyZ2VyLTIge1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNkKDAsIDAsIDApIHNjYWxlKDAuMSwgMSk7XG59XG4uZHJvcDpjaGVja2VkICsgLmRyb3AtYnV0dG9uIC5oYW1idXJnZXItMyB7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM2QoMCwgMCwgMCkgcm90YXRlKC00NWRlZyk7XG59XG5cbi5tb2JpbGV7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgbGVmdDogMjAlO1xuICBtYXJnaW4tbGVmdDogLTgwcHg7XG4gIHBhZGRpbmctdG9wOiAyMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDgwcHg7XG4gIHdpZHRoOiA2NTBweDtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xufVxuXG4uZHJvcC1pdGVtOmhvdmVye1xuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgY29sb3I6ICMxYzFjMWM7XG59XG5cbi5kcm9wLWl0ZW06bnRoLWNoaWxkKDMpIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTA4bXM7XG59XG4uZHJvcC1pdGVtOm50aC1jaGlsZCg0KSB7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDEwOG1zO1xufVxuLmRyb3AtaXRlbTpudGgtY2hpbGQoNSkge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxMDhtcztcbn1cbi5kcm9wLWl0ZW06bnRoLWNoaWxkKDYpIHtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMTA4bXM7XG59XG5cbi5kcm9wLWJ1dHRvbiB7XG4gIHotaW5kZXg6IDI7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xODAsIDAuODgwLCAwLjMwLCAxLjMwMCk7XG4gIHRyYW5zaXRpb24tZHVyYXRpb246IDQwMG1zO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMSwgMS4xKSB0cmFuc2xhdGUzZCgwLCAwLCAwKTtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uZHJvcC1idXR0b246aG92ZXJ7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4yLCAxLjIpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uZHJvcDpjaGVja2VkICsgLmRyb3AtYnV0dG9uIHtcbiAgdHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbiAgdHJhbnNpdGlvbi1kdXJhdGlvbjogMjAwbXM7XG4gIHRyYW5zZm9ybTogc2NhbGUoMC44LCAwLjgpIHRyYW5zbGF0ZTNkKDAsIDAsIDApO1xufVxuXG4uZHJvcDpjaGVja2VkIH4gLmRyb3AtaXRlbSB7XG4gIHRyYW5zaXRpb24tdGltaW5nLWZ1bmN0aW9uOiBjdWJpYy1iZXppZXIoMC4xNjUsIDAuODQsIDAuNDQsIDEpO1xufVxuXG4uZHJvcDpjaGVja2VkIH4gLmRyb3AtaXRlbTpudGgtY2hpbGQoMykge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAxOTBtcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgxMTBweCwgMCAsMCk7XG59XG4uZHJvcDpjaGVja2VkIH4gLmRyb3AtaXRlbTpudGgtY2hpbGQoNCkge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAyOTBtcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgyMjBweCwgMCAsMCk7XG59XG4uZHJvcDpjaGVja2VkIH4gLmRyb3AtaXRlbTpudGgtY2hpbGQoNSkge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiAzOTBtcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCgzMzBweCwgMCAsMCk7XG59XG4uZHJvcDpjaGVja2VkIH4gLmRyb3AtaXRlbTpudGgtY2hpbGQoNikge1xuICB0cmFuc2l0aW9uLWR1cmF0aW9uOiA0OTBtcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzZCg0NDBweCwgMCAsMCk7XG59XG59ICovXG4iXX0= */");

/***/ }),

/***/ "DnCC":
/*!*********************************************!*\
  !*** ./src/app/roller/roller.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJyb2xsZXIuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "Guj5":
/*!******************************************************!*\
  !*** ./src/app/tokentester/tokentester.component.ts ***!
  \******************************************************/
/*! exports provided: TokentesterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokentesterComponent", function() { return TokentesterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_tokentester_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./tokentester.component.html */ "51gD");
/* harmony import */ var _tokentester_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tokentester.component.css */ "50u7");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");






let TokentesterComponent = class TokentesterComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL_SEC_TKN = 'https://backend.yap.dragoncave.dev/security/token';
        this.ROOT_URL_TKN_CV = 'https://backend.yap.dragoncave.dev/security/token/checkValid ';
        this.packageobject = {
            emailAddress: 'test@mail.com',
            password: 'testpassword'
        };
    }
    doPost() {
        const headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
        console.log(this.packageobject);
        this.http.post(this.ROOT_URL_SEC_TKN, this.packageobject, { headers: headerS, responseType: 'text' })
            .subscribe(res => {
            this.token = res;
            console.log(this.token);
        }, (error) => {
            console.error(error);
        });
    }
    doCookiewrite() {
        this.cookieService.put('token', this.token);
    }
    doCheck() {
        let headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headerS = headerS.append('Token', this.token);
        console.log(headerS);
        this.http.get(this.ROOT_URL_TKN_CV, { headers: headerS })
            .subscribe(data => {
            console.log(data);
        }, (error) => {
            console.error(error);
        });
    }
    doPassword(passwordinput) {
        this.packageobject.password = passwordinput;
    }
    doEmail(emailinput) {
        this.packageobject.emailAddress = emailinput;
    }
    ngOnInit() {
    }
};
TokentesterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
TokentesterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-tokentester',
        template: _raw_loader_tokentester_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_tokentester_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], TokentesterComponent);



/***/ }),

/***/ "HhuZ":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");

/***/ }),

/***/ "IQLi":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/roller/roller.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"embed-responsive embed-responsive-16by9\">\n\t<iframe width=\"560\" height=\"315\" src=\"https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1\"\n\t\t\ttitle=\"YouTube video player\" frameborder=\"0\"\n\t\t\tallow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\"\n\t\t\tallowfullscreen></iframe>\n</div>\n");

/***/ }),

/***/ "Jy7l":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/poster/poster.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent\">\n\t<div class=\"div1\"></div>\n\t<div class=\"div2\">\n\n\t\t<form>\n\t\t\t<h1>User creation</h1>\n\t\t\t<input #username type=\"text\" class=\"form-control\" placeholder=\"Username\"\n\t\t\t\t   (keyup)=\"doUsername(username.value)\" (keyup.enter)=\"doPOST()\">\n\t\t\t<input #email type=\"email\" class=\"form-control\" placeholder=\"Email\" (keyup)=\"doEmail(email.value)\"\n\t\t\t\t   (keyup.enter)=\"doPOST()\">\n\t\t\t<input #password type=\"password\" class=\"form-control\" placeholder=\"Password\"\n\t\t\t\t   (keyup)=\"doPassword(password.value)\" (keyup.enter)=\"doPOST()\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"doPOST()\">Post!</button>\n\t\t</form>\n\n\t</div>\n\t<div class=\"div3\"></div>\n</div>\n");

/***/ }),

/***/ "Kx7i":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/usermanagement/usermanagement.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent\">\n\t<div class=\"div1\"></div>\n\t<div class=\"div2\">\n\t\t<h1>User management</h1>\n\t\t<form>\n\t\t\t<input #username type=\"text\" class=\"form-control\" placeholder=\"{{packageobject.username}}\"\n\t\t\t\t   (keyup)=\"doUsername(username.value)\">\n\t\t\t<input #email type=\"email\" class=\"form-control\" placeholder=\"{{packageobject.emailAddress}}\"\n\t\t\t\t   (keyup)=\"doEmail(email.value)\">\n\t\t\t<input #password type=\"password\" class=\"form-control\" placeholder=\"Password\"\n\t\t\t\t   (keyup)=\"doPassword(password.value)\">\n\t\t\t<button type=\"button\" class=\"btn btn-primary\" (click)=\"doPUT()\">Put!</button>\n\t\t</form>\n\t\t<h1>Current data</h1>\n\t\t<pre>\n      <code>{{packageobject | json}}</code>\n    </pre>\n\t</div>\n\t<div class=\"div3\"></div>\n</div>\n");

/***/ }),

/***/ "MWml":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/GETtest/GETtest.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"parent\">\n\t<div class=\"div1\"></div>\n\t<div class=\"div2\">\n\n\n\t\t<h1>Get object from database</h1>\n\t\t<form class=\"ngForm\">\n\t\t\t<input #URL type=\"text\" class=\"form-control\" placeholder=\"Enter GET URL\"\n\t\t\t\t   (keyup.enter)=\"getStuff(URL.value)\">\n\t\t</form>\n\t\t<pre>\n  <code>\n     {{ returnvalue | json }}\n  </code>\n</pre>\n\t</div>\n\t<div class=\"div3\"></div>\n</div>\n");

/***/ }),

/***/ "OOnH":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/register/register.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-new\">\n\t<div class=\"container-new\">\n\t\t<h1>Register</h1>\n\n\t\t<form class=\"loginform\">\n\t\t\t<input #username placeholder=\"Username\" required type=\"text\">\n\t\t\t<input #email pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" placeholder=\"Email\" required type=\"email\"/>\n\t\t\t<input #password placeholder=\"Password (>= 10 characters)\" required type=\"password\">\n\t\t\t<input #password2 type=\"password\" placeholder=\"Confirm password\" required>\n\t\t\t<button type=\"submit\" value=\"submit\" id=\"login-button\"\n\t\t\t\t\t(click)=\"doPost(username.value, email.value, password.value, password2.value)\"\n\t\t\t\t\t(keyup.enter)=\"doPost(username.value, email.value, password.value, password2.value)\">{{message}}</button>\n\t\t\t<a class=\"register\" routerLink=\"/login\">Login</a>\n\t\t</form>\n\t</div>\n</div>\n\n<div class=\"hero\">\n\t<div class=\"cube\"></div>\n\t<div class=\"cube\"></div>\n\t<div class=\"cube\"></div>\n\t<div class=\"cube\"></div>\n\t<div class=\"cube\"></div>\n\t<div class=\"cube\"></div>\n</div>\n\n\n\n");

/***/ }),

/***/ "OpD2":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/legacy/legacy.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"logout\">\n\t<li>\n\t\t<a href=\"/gettester\">\n\t\t\t<i class=\"fa fa-2x\"></i>\n\t\t\t<span class=\"nav-text\">experimental GET, first steps to learning HTTP requests</span>\n\t\t</a>\n\t</li>\n\n\t<li>\n\t\t<a href=\"/poster\">\n\t\t\t<i class=\"fa fa-2x\"></i>\n\t\t\t<span class=\"nav-text\">experimental POST (user creation), learning how to POST with HTTP</span>\n\t\t</a>\n\t</li>\n\n\t<li>\n\t\t<a href=\"/tokentester\">\n\t\t\t<i class=\"fa fa-2x\"></i>\n\t\t\t<span class=\"nav-text\">experimental GET/PUT token generator, testing chained HTTP requests</span>\n\t\t</a>\n\t</li>\n\n\t<li>\n\t\t<a href=\"/usermanagement\">\n\t\t\t<i class=\"fa fa-2x\"></i>\n\t\t\t<span class=\"nav-text\">experimental GET/PUT user management, learning multipart HTTP requests </span>\n\t\t</a>\n\t</li>\n\n\t<li>\n\t\t<a href=\"/datatabletest\">\n\t\t\t<i class=\"fa fa-2x\"></i>\n\t\t\t<span class=\"nav-text\">Testing datatable, deprecated component that served for boards</span>\n\t\t</a>\n\t</li>\n</div>\n");

/***/ }),

/***/ "QoDe":
/*!********************************************!*\
  !*** ./src/app/forgot/forgot.component.ts ***!
  \********************************************/
/*! exports provided: ForgotComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ForgotComponent", function() { return ForgotComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_forgot_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./forgot.component.html */ "hKte");
/* harmony import */ var _forgot_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./forgot.component.css */ "U9HW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





let ForgotComponent = class ForgotComponent {
    constructor(http) {
        this.http = http;
        this.ROOT_URL_SECURITY_RESETPASSWORDREQUEST = 'https://backend.yap.dragoncave.dev/security/resetPasswordRequest';
        this.resetBody = {
            emailAddress: ''
        };
    }
    checkReset(emailAddress) {
        if (emailAddress !== undefined && emailAddress !== '') {
            this.resetBody.emailAddress = emailAddress;
            this.postReset();
        }
        else {
            console.log('The input field was left empty');
        }
    }
    postReset() {
        this.http.post(this.ROOT_URL_SECURITY_RESETPASSWORDREQUEST, this.resetBody)
            .subscribe(response => {
            console.log(response);
            window.location.href = '/reset';
        }, (error) => {
            console.error(error);
        });
    }
    ngOnInit() {
    }
};
ForgotComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ForgotComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-forgot',
        template: _raw_loader_forgot_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_forgot_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ForgotComponent);



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
/* harmony import */ var _app_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component.css */ "A3xY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let AppComponent = class AppComponent {
    constructor() {
        this.title = 'css-bootstrap-test';
    }
};
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
        styles: [_app_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], AppComponent);



/***/ }),

/***/ "TlxB":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/boards/boards.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"item__container\">\n\t<div class=\"item__list\">\n\t\t<div class=\"sorting__container\">\n\t\t\t<button class=\"button__sort\" (click)=\"sortByName()\">Sort by name</button>\n\t\t\t<button class=\"button__sort\" (click)=\"sortByCreateDate()\">Sort by create date</button>\n\t\t\t<div class=\"button__sort\" *ngIf=\"!toggleSort\">↓</div>\n\t\t\t<div class=\"button__sort\" *ngIf=\"toggleSort\">↑</div>\n\t\t</div>\n\t\t<div oncontextmenu=\"return false;\" class=\"item__box\" *ngFor=\"let boards of boards\" id=\"{{boards.boardID}}\"\n\t\t\t (click)=\"handleClickOpen($event)\" (contextmenu)=\"handleClickEdit($event)\">\n\t\t\t{{boards.name}}\n\t\t</div>\n\t\t<button class=\"button__addEntry\" (click)=\"toggleCreate()\">Create new board</button>\n\t</div>\n</div>\n<div class=\"md-form\" *ngIf=\"showEdit\">\n\t<div class=\"container__popup\">\n\t\t<h2 class=\"h2_popup\">Edit board</h2>\n\t\t<div>\n\t\t\t<input #name class=\"form-control\" data-custom-input=\"create\" type=\"text\" placeholder=\"{{boards[this.clickID].name}}\" value=\"{{boards[this.clickID].name}}\">\n\t\t\t<div class=\"due__text\">Created on:  {{convertToLocal()}}</div>\n\t\t\t<div class=\"buttons\">\n\t\t\t\t<button class=\"button__submit\" (click)=\"putBoard(name.value)\">Save</button>\n\t\t\t\t<button class=\"button__close\" (click)=\"toggleEdit()\">Discard and close</button>\n\t\t\t\t<button class=\"button__delete\" (click)=\"deleteBoard()\">Delete board</button>\n\t\t\t</div>\n\t\t\t<div>\n\t\t\t\t<input #emailAddress class=\"form-control\" data-custom-input=\"create\" type=\"text\" placeholder=\"Email address\">\n\t\t\t</div>\n\t\t\t<div class=\"buttons\">\n\t\t\t\t<button class=\"button__submit\" (click)=\"postMember(emailAddress.value)\">Add member</button>\n\t\t\t\t<button class=\"button__close\" (click)=\"postAdmin(emailAddress.value)\">Add as admin</button>\n\t\t\t\t<button class=\"button__delete\">Remove member</button>\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container__popup\" *ngIf=\"showCreate\">\n\t<h2>Create new board</h2>\n\t<div>\n\t\t<input #name mdbinput class=\"form-control\" data-custom-input=\"create\" type=\"text\" placeholder=\"Title\">\n\t\t<div class=\"buttons\">\n\t\t\t<button class=\"button__submit\" (click)=\"this.postBoard(name.value)\" mat-dialog-close=\"\">Create</button>\n\t\t\t<button class=\"button__close\" (click)=\"toggleCreate()\">Discard and close</button>\n\t\t</div>\n\t</div>\n</div>\n\n");

/***/ }),

/***/ "U9HW":
/*!*********************************************!*\
  !*** ./src/app/forgot/forgot.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("button {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tbackground-color: #49d496;\n\tborder: 0;\n\tpadding: 10px 15px;\n\tcolor: #000000;\n\tborder-radius: 3px;\n\twidth: 250px;\n\tcursor: pointer;\n\tfont-size: 18px;\n\ttransition-duration: 0.25s;\n}\n\nbutton:hover {\n\tbackground-color: #3ce5ad;\n}\n\n.container {\n\toverflow: hidden;\n\tmargin-top: 30vh;\n\tdisplay: grid;\n\tjustify-content: center;\n}\n\ninput {\n\tpadding: 20px 0;\n\tposition: relative;\n\tz-index: 2;\n\tcolor: white;\n}\n\ninput {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tborder: 1px solid rgba(255, 255, 255, 0.4);\n\tbackground-color: rgba(255, 255, 255, 0.2);\n\twidth: 250px;\n\tborder-radius: 3px;\n\tpadding: 10px 15px;\n\tmargin: 0 0 10px 0;\n\tdisplay: block;\n\ttext-align: center;\n\tfont-size: 18px;\n\tcolor: white;\n\ttransition-duration: 0.25s;\n\tfont-weight: 300;\n}\n\ninput:hover {\n\tbackground-color: rgba(47, 47, 47, 0.4);\n}\n\ninput:focus {\n\tbackground-color: rgba(47, 47, 47, 0.4);\n\tcolor: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvcmdvdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtBQUNiOztBQUVBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDBDQUEwQztDQUMxQywwQ0FBMEM7Q0FDMUMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsdUNBQXVDO0NBQ3ZDLGNBQWM7QUFDZiIsImZpbGUiOiJmb3Jnb3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImJ1dHRvbiB7XG5cdGFwcGVhcmFuY2U6IG5vbmU7XG5cdG91dGxpbmU6IDA7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0OWQ0OTY7XG5cdGJvcmRlcjogMDtcblx0cGFkZGluZzogMTBweCAxNXB4O1xuXHRjb2xvcjogIzAwMDAwMDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHR3aWR0aDogMjUwcHg7XG5cdGN1cnNvcjogcG9pbnRlcjtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjI1cztcbn1cblxuYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzNjZTVhZDtcbn1cblxuLmNvbnRhaW5lciB7XG5cdG92ZXJmbG93OiBoaWRkZW47XG5cdG1hcmdpbi10b3A6IDMwdmg7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG5pbnB1dCB7XG5cdHBhZGRpbmc6IDIwcHggMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0IHtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0b3V0bGluZTogMDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdHdpZHRoOiAyNTBweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdG1hcmdpbjogMCAwIDEwcHggMDtcblx0ZGlzcGxheTogYmxvY2s7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0Zm9udC1zaXplOiAxOHB4O1xuXHRjb2xvcjogd2hpdGU7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG5pbnB1dDpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDQ3LCA0NywgMC40KTtcbn1cblxuaW5wdXQ6Zm9jdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA0NywgNDcsIDAuNCk7XG5cdGNvbG9yOiAjZmZmZmZmO1xufVxuIl19 */");

/***/ }),

/***/ "V+94":
/*!******************************************!*\
  !*** ./src/app/reset/reset.component.ts ***!
  \******************************************/
/*! exports provided: ResetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResetComponent", function() { return ResetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_reset_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./reset.component.html */ "Z0w/");
/* harmony import */ var _reset_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reset.component.css */ "oOes");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");





let ResetComponent = class ResetComponent {
    constructor(http) {
        this.http = http;
        this.ROOT_URL_SECURITY_RESETPASSWORD = 'https://backend.yap.dragoncave.dev/security/resetPassword';
        this.resetBody = {
            emailAddress: '',
            newPassword: '',
            resetCode: ''
        };
    }
    checkReset(emailAddress, newPassword, newPasswordRepeat, resetCode) {
        if (newPasswordRepeat !== '' && newPassword !== '' && emailAddress !== '') {
            if (newPassword.length >= 10) {
                if (newPassword === newPassword) {
                    this.resetBody.emailAddress = emailAddress;
                    this.resetBody.newPassword = newPassword;
                    this.resetBody.resetCode = resetCode;
                    this.postReset();
                }
                else {
                    console.log('The passwords do not match');
                }
            }
            else {
                console.log('Password too short');
            }
        }
        else {
            console.log('One or more Input fields were left empty');
        }
    }
    postReset() {
        this.http.post(this.ROOT_URL_SECURITY_RESETPASSWORD, this.resetBody)
            .subscribe(response => {
            console.log(response);
            window.location.href = '/login';
        }, (error) => {
            console.error(error);
        });
    }
    getURLCode() {
        const URL = window.location.href;
        return URL.split('=')[1];
    }
    ngOnInit() {
        this.getURLCode();
    }
};
ResetComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }
];
ResetComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-reset',
        template: _raw_loader_reset_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_reset_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ResetComponent);



/***/ }),

/***/ "VR7F":
/*!*********************************************!*\
  !*** ./src/app/legacy/legacy.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("div {\n\tmargin-left: 100px;\n}\n\na, i, span{\n\tcolor: #FFFFFF;\n}\n\na, i, span:hover{\n\tcolor: #53e3a6;\n\tcursor: pointer;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxlZ2FjeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0Msa0JBQWtCO0FBQ25COztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztDQUNkLGVBQWU7QUFDaEIiLCJmaWxlIjoibGVnYWN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJkaXYge1xuXHRtYXJnaW4tbGVmdDogMTAwcHg7XG59XG5cbmEsIGksIHNwYW57XG5cdGNvbG9yOiAjRkZGRkZGO1xufVxuXG5hLCBpLCBzcGFuOmhvdmVye1xuXHRjb2xvcjogIzUzZTNhNjtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuIl19 */");

/***/ }),

/***/ "VzVu":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-header></app-header>\n<router-outlet></router-outlet>\n");

/***/ }),

/***/ "W6KJ":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./profile.component.html */ "xwfu");
/* harmony import */ var _profile_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./profile.component.css */ "fMGI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");






let ProfileComponent = class ProfileComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user';
        this.ROOT_URL_PWD = 'https://backend.yap.dragoncave.dev/security/changePassword';
        this.ROOT_URL_USER_PROFILEPICTURE = 'https://backend.yap.dragoncave.dev/user/profilePicture';
        this.packageobject = {
            username: '',
            emailAddress: '',
            newPassword: '',
            oldPassword: '',
            password: ''
        };
    }
    pwdchange(oldpassword, newpassword) {
        this.packageobject.oldPassword = oldpassword;
        this.packageobject.newPassword = newpassword;
        if (this.packageobject.newPassword !== null
            && this.packageobject.emailAddress !== null
            && this.packageobject.oldPassword !== null) {
            if (this.packageobject.newPassword.length <= 10) {
                this.cookieService.removeAll();
                this.postPwd();
            }
            else {
                console.error('Password too short, 10 characters minimum!');
            }
        }
        else {
            console.error('One or more input fields were left empty!');
        }
    }
    postPwd() {
        // this.token = this.cookieService.get('token');
        const headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
        // headerS = headerS.append('Token', this.token);
        this.http.post(this.ROOT_URL_PWD, this.packageobject, { headers: headerS })
            .subscribe(res => {
            this.cookieService.removeAll();
            console.log(res);
            window.location.href = '/login';
        }, (error) => {
            console.error(error);
        });
    }
    usrchange(username, email, password) {
        if (username === '') {
            let holder;
            holder = this.cookieService.getObject('Udata');
            this.packageobject.username = holder.username;
        }
        else {
            this.packageobject.username = username;
        }
        if (email === '') {
            let holder;
            holder = this.cookieService.getObject('Udata');
            this.packageobject.emailAddress = holder.emailAddress;
        }
        else {
            this.packageobject.emailAddress = email;
        }
        this.packageobject.oldPassword = password;
        if (
        // tslint:disable-next-line:max-line-length
        this.packageobject.newPassword !== null
            && this.packageobject.emailAddress !== null
            && this.packageobject.oldPassword !== null
            && this.packageobject.username !== null) {
            this.putUsr();
        }
        else {
            console.error('One or more input fields were left empty!');
        }
    }
    putUsr() {
        this.token = this.cookieService.get('token');
        let headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
        headerS = headerS.append('Token', this.token);
        this.http.put(this.ROOT_URL_USR, this.packageobject, { headers: headerS })
            .subscribe(() => {
            this.getUdata();
        }, (error) => {
            console.error(error);
        });
    }
    getUdata() {
        // tslint:disable-next-line:prefer-const
        let header1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        header1 = header1.append('Token', this.cookieService.get('token'));
        this.http.get(this.ROOT_URL_USR, { headers: header1 })
            .subscribe(response => {
            this.cookieService.remove('Udata');
            this.cookieService.putObject('Udata', response);
        }, (error) => {
            console.error(error);
        });
    }
    logout() {
        this.cookieService.removeAll();
        window.location.href = '/login';
    }
    getPFP() {
        if (this.cookieService.getObject('Udata') !== undefined) {
            return this.buildPFPUrl();
        }
        else {
            return 'https://dragoncave.dev:42069/cdn/default_profile_picture.png';
        }
    }
    buildPFPUrl() {
        const ROOT_URL = 'https://backend.yap.dragoncave.dev/user/';
        const Udata = this.cookieService.getObject('Udata');
        // @ts-ignore
        return ROOT_URL + Udata.userID + '/profilePicture';
    }
    postPFP(input) {
        this.token = this.cookieService.get('token');
        let headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        headerS = headerS.append('Token', this.token);
        const formData = new FormData();
        formData.append('file', input);
        this.http.post(this.ROOT_URL_USER_PROFILEPICTURE, formData, { headers: headerS })
            .subscribe(res => {
            console.log(res);
        });
    }
    /*
    deleteUser(oldPassword: string) {
        const prompt = 'Enter your username to confirm deleting your account, This action is not reversible.';
        if (window.prompt(prompt) === this.packageobject.username) {
            this.packageobject.password = oldPassword;
            let header2 = new HttpHeaders();
            header2 = header2.append('Token', this.cookieService.get('token'));
            console.log(this.packageobject);

            this.http.delete(this.ROOT_URL_USR, this.packageobject, {headers: header2})
                .subscribe(
                    response => {
                        console.log(response);
                        this.cookieService.removeAll();
                        window.location.href = '/login';
                    },
                    (error) => {
                        console.error(error);
                    }
                );

        }
    }
    */
    ngOnInit() {
        this.placeholder = this.cookieService.getObject('Udata');
        this.packageobject.emailAddress = this.placeholder.emailAddress;
        this.packageobject.username = this.placeholder.username;
        this.getPFP();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], ProfileComponent);



/***/ }),

/***/ "XSv0":
/*!****************************************!*\
  !*** ./src/app/info/info.component.ts ***!
  \****************************************/
/*! exports provided: InfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfoComponent", function() { return InfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_info_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./info.component.html */ "ed8f");
/* harmony import */ var _info_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./info.component.css */ "dqee");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let InfoComponent = class InfoComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
InfoComponent.ctorParameters = () => [];
InfoComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-info',
        template: _raw_loader_info_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_info_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], InfoComponent);



/***/ }),

/***/ "XcVX":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/entries/entries.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container__popup__Loading\" *ngIf=\"availableEntries.length !== entries.length\">\n\t<progress max=\"{{availableEntries.length}}\" value=\"{{entries.length}}\"></progress>\n</div>\n\n<div class=\"item__container\">\n\t<div cdkDropList class=\"item__list\" (cdkDropListDropped)=\"drop($event)\">\n\t\t<div class=\"sorting__container\">\n\t\t\t<button class=\"button__sort\" (click)=\"sortByTitle()\">Sort by title</button>\n\t\t\t<button class=\"button__sort\" (click)=\"sortByCreateDate()\">Sort by create date</button>\n\t\t\t<button class=\"button__sort\" (click)=\"sortByDueDate()\">Sort by Due date</button>\n\t\t\t<div class=\"button__sort\" *ngIf=\"!toggleSort\">↓</div>\n\t\t\t<div class=\"button__sort\" *ngIf=\"toggleSort\">↑</div>\n\t\t</div>\n\t\t<div oncontextmenu=\"return false;\" class=\"item__box\" *ngFor=\"let entries of entries\" cdkDrag\n\t\t\t id=\"{{entries.entryID}}\"\n\t\t\t (click)=\"handleClickEdit($event)\" (contextmenu)=\"handleClickEdit($event)\">\n\t\t\t{{entries.title}}\n\t\t</div>\n\t\t<button class=\"button__addEntry\" (click)=\"handleClickCreate($event)\">Add new entry</button>\n\t</div>\n</div>\n<div class=\"md-form\" *ngIf=\"showEdit\">\n\t<div class=\"container__popup\">\n\t\t<h2 class=\"h2_popup\">Edit entry</h2>\n\t\t<input #name class=\"form-control\" data-custom-input=\"create\" type=\"text\"\n\t\t\t   placeholder=\"{{this.entries[this.clickID].title}}\" value=\"{{this.entries[this.clickID].title}}\">\n\t\t<textarea #description class=\"form-control\" data-custom-input=\"create\"\n\t\t\t\t  placeholder=\"{{this.entries[this.clickID].description}}\">{{this.entries[this.clickID].description}}</textarea>\n\t\t<div class=\"due__text\">Due until: {{convertToLocal()}}</div>\n\t\t<div class=\"due__text\" *ngIf=\"this.entries[clickID].dueDate !== 0\">Time left: {{this.timeleft}} days</div>\n\t\t<input #dueDate class=\"form-control\" data-custom-input=\"create\" type=\"datetime-local\">\n\t\t<div class=\"buttons\">\n\t\t\t<button class=\"button__submit\" (click)=\"putEntry(name.value, description.value, dueDate.value)\">Save\n\t\t\t</button>\n\t\t\t<button class=\"button__close\" (click)=\"toggleEdit()\">Discard and close</button>\n\t\t\t<button class=\"button__delete\" (click)=\"deleteEntry()\">Delete entry</button>\n\t\t</div>\n\t</div>\n</div>\n<div class=\"container__popup\" *ngIf=\"showCreate\">\n\t<h2 class=\"h2_popup\">Create new entry</h2>\n\t<input #name class=\"form-control\" data-custom-input=\"create\" type=\"text\" placeholder=\"Title\">\n\t<input #description class=\"form-control\" data-custom-input=\"create\" type=\"text\" placeholder=\"Description\">\n\t<input #dueDate class=\"form-control\" data-custom-input=\"create\" type=\"datetime-local\">\n\t<div>\n\t\t<div class=\"buttons\">\n\t\t\t<button class=\"button__submit\" (click)=\"postEntry(name.value, description.value, dueDate.value)\">Create\n\t\t\t</button>\n\t\t\t<button class=\"button__close\" (click)=\"toggleCreate()\">Discard and close</button>\n\t\t</div>\n\t</div>\n</div>\n\n\n");

/***/ }),

/***/ "Z0w/":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/reset/reset.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<input #reset placeholder=\"Reset code\" value=\"{{getURLCode()}}\">\n\t<input #emailAddress placeholder=\"Email address\">\n\t<input #newPassword type=\"password\" placeholder=\"New password\">\n\t<input #repeatNewPassword type=\"password\" placeholder=\"Repeat new password\">\n\t<button class=\"button__reset\" (click)=\"checkReset(emailAddress.value, newPassword.value, repeatNewPassword.value, reset.value)\">Reset</button>\n</div>\n");

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./header/header.component */ "fECr");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _GETtest_GETtest_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./GETtest/GETtest.component */ "96dj");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _poster_poster_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./poster/poster.component */ "sMaH");
/* harmony import */ var _roller_roller_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./roller/roller.component */ "a8yv");
/* harmony import */ var _usermanagement_usermanagement_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./usermanagement/usermanagement.component */ "/CHZ");
/* harmony import */ var _tokentester_tokentester_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./tokentester/tokentester.component */ "Guj5");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-cookie */ "4pnn");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _entries_entries_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./entries/entries.component */ "pXWP");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/dialog */ "0IaG");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./boards/boards.component */ "0Xa6");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./reset/reset.component */ "V+94");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./forgot/forgot.component */ "QoDe");
/* harmony import */ var ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ngx-bootstrap/progressbar */ "yyhP");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _legacy_legacy_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./legacy/legacy.component */ "5VkC");





























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"],
            _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
            _info_info_component__WEBPACK_IMPORTED_MODULE_7__["InfoComponent"],
            _GETtest_GETtest_component__WEBPACK_IMPORTED_MODULE_8__["GETtestComponent"],
            _poster_poster_component__WEBPACK_IMPORTED_MODULE_11__["PosterComponent"],
            _roller_roller_component__WEBPACK_IMPORTED_MODULE_12__["RollerComponent"],
            _usermanagement_usermanagement_component__WEBPACK_IMPORTED_MODULE_13__["UsermanagementComponent"],
            _tokentester_tokentester_component__WEBPACK_IMPORTED_MODULE_14__["TokentesterComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_15__["LoginComponent"],
            _profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"],
            _register_register_component__WEBPACK_IMPORTED_MODULE_18__["RegisterComponent"],
            _entries_entries_component__WEBPACK_IMPORTED_MODULE_19__["EntriesComponent"],
            _boards_boards_component__WEBPACK_IMPORTED_MODULE_23__["BoardsComponent"],
            _reset_reset_component__WEBPACK_IMPORTED_MODULE_24__["ResetComponent"],
            _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_25__["ForgotComponent"],
            _main_main_component__WEBPACK_IMPORTED_MODULE_27__["MainComponent"],
            _legacy_legacy_component__WEBPACK_IMPORTED_MODULE_28__["LegacyComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
            ngx_cookie__WEBPACK_IMPORTED_MODULE_17__["CookieModule"].forRoot(),
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_20__["DragDropModule"],
            _angular_material_dialog__WEBPACK_IMPORTED_MODULE_21__["MatDialogModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_22__["BrowserAnimationsModule"],
            ngx_bootstrap_progressbar__WEBPACK_IMPORTED_MODULE_26__["ProgressbarModule"]
        ],
        providers: [ngx_cookie__WEBPACK_IMPORTED_MODULE_17__["CookieService"], _entries_entries_component__WEBPACK_IMPORTED_MODULE_19__["EntriesComponent"], _boards_boards_component__WEBPACK_IMPORTED_MODULE_23__["BoardsComponent"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "a8yv":
/*!********************************************!*\
  !*** ./src/app/roller/roller.component.ts ***!
  \********************************************/
/*! exports provided: RollerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RollerComponent", function() { return RollerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_roller_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./roller.component.html */ "IQLi");
/* harmony import */ var _roller_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./roller.component.css */ "DnCC");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let RollerComponent = class RollerComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
RollerComponent.ctorParameters = () => [];
RollerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-roller',
        template: _raw_loader_roller_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_roller_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], RollerComponent);



/***/ }),

/***/ "dDeW":
/*!*********************************************!*\
  !*** ./src/app/poster/poster.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300&display=swap');\n\n\ninput {\n\tbackground-color: #21252B;\n\tmargin-top: .75vh;\n}\n\n\ninput:hover {\n\tbackground-color: #282C34;\n}\n\n\ninput:focus {\n\tbackground-color: #282C34;\n}\n\n\nh1 {\n\ttext-align: center;\n\tfont-family: 'Roboto', sans-serif;\n\tcolor: white;\n}\n\n\n.btn {\n\tmargin-top: 1vh;\n}\n\n\n.div2 {\n\ttext-align: center;\n}\n\n\n.parent {\n\tdisplay: grid;\n\tgrid-template-columns: repeat(3, 1fr);\n\tgrid-template-rows: repeat(3, 1fr);\n}\n\n\n.div1 {\n\tgrid-area: 1 / 1 / 2 / 2;\n}\n\n\n.div2 {\n\tgrid-area: 1 / 2 / 2 / 3;\n}\n\n\n.div3 {\n\tgrid-area: 1 / 3 / 2 / 4;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBvc3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLHdGQUF3Rjs7O0FBR3hGO0NBQ0MseUJBQXlCO0NBQ3pCLGlCQUFpQjtBQUNsQjs7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7OztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOzs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixpQ0FBaUM7Q0FDakMsWUFBWTtBQUNiOzs7QUFFQTtDQUNDLGVBQWU7QUFDaEI7OztBQUVBO0NBQ0Msa0JBQWtCO0FBQ25COzs7QUFFQTtDQUNDLGFBQWE7Q0FDYixxQ0FBcUM7Q0FDckMsa0NBQWtDO0FBQ25DOzs7QUFFQTtDQUNDLHdCQUF3QjtBQUN6Qjs7O0FBRUE7Q0FDQyx3QkFBd0I7QUFDekI7OztBQUVBO0NBQ0Msd0JBQXdCO0FBQ3pCIiwiZmlsZSI6InBvc3Rlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMCZkaXNwbGF5PXN3YXAnKTtcblxuXG5pbnB1dCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyMTI1MkI7XG5cdG1hcmdpbi10b3A6IC43NXZoO1xufVxuXG5pbnB1dDpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyODJDMzQ7XG59XG5cbmlucHV0OmZvY3VzIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4MkMzNDtcbn1cblxuaDEge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcblx0Y29sb3I6IHdoaXRlO1xufVxuXG4uYnRuIHtcblx0bWFyZ2luLXRvcDogMXZoO1xufVxuXG4uZGl2MiB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnBhcmVudCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG5cdGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDMsIDFmcik7XG59XG5cbi5kaXYxIHtcblx0Z3JpZC1hcmVhOiAxIC8gMSAvIDIgLyAyO1xufVxuXG4uZGl2MiB7XG5cdGdyaWQtYXJlYTogMSAvIDIgLyAyIC8gMztcbn1cblxuLmRpdjMge1xuXHRncmlkLWFyZWE6IDEgLyAzIC8gMiAvIDQ7XG59XG4iXX0= */");

/***/ }),

/***/ "dqee":
/*!*****************************************!*\
  !*** ./src/app/info/info.component.css ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".wrapper {\n\theight: 15vh;\n\tdisplay: flex;\n\talign-items: center;\n\tjustify-content: center;\n}\n\n.typing-demo {\n\twidth: 30ch;\n\tanimation: typing 2s steps(22), blink .5s step-end infinite alternate;\n\twhite-space: nowrap;\n\toverflow: hidden;\n\tborder-right: 3px solid;\n\tfont-family: monospace;\n\tfont-size: 2em;\n\tcolor: white;\n}\n\n@keyframes typing {\n\tfrom {\n\t\twidth: 0;\n\t}\n}\n\n@keyframes blink {\n\t50% {\n\t\tborder-color: transparent;\n\t}\n\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZm8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLFlBQVk7Q0FDWixhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLHVCQUF1QjtBQUN4Qjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxxRUFBcUU7Q0FDckUsbUJBQW1CO0NBQ25CLGdCQUFnQjtDQUNoQix1QkFBdUI7Q0FDdkIsc0JBQXNCO0NBQ3RCLGNBQWM7Q0FDZCxZQUFZO0FBQ2I7O0FBRUE7Q0FDQztFQUNDLFFBQVE7Q0FDVDtBQUNEOztBQUVBO0NBQ0M7RUFDQyx5QkFBeUI7Q0FDMUI7O0FBRUQiLCJmaWxlIjoiaW5mby5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLndyYXBwZXIge1xuXHRoZWlnaHQ6IDE1dmg7XG5cdGRpc3BsYXk6IGZsZXg7XG5cdGFsaWduLWl0ZW1zOiBjZW50ZXI7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4udHlwaW5nLWRlbW8ge1xuXHR3aWR0aDogMzBjaDtcblx0YW5pbWF0aW9uOiB0eXBpbmcgMnMgc3RlcHMoMjIpLCBibGluayAuNXMgc3RlcC1lbmQgaW5maW5pdGUgYWx0ZXJuYXRlO1xuXHR3aGl0ZS1zcGFjZTogbm93cmFwO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRib3JkZXItcmlnaHQ6IDNweCBzb2xpZDtcblx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcblx0Zm9udC1zaXplOiAyZW07XG5cdGNvbG9yOiB3aGl0ZTtcbn1cblxuQGtleWZyYW1lcyB0eXBpbmcge1xuXHRmcm9tIHtcblx0XHR3aWR0aDogMDtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcblx0NTAlIHtcblx0XHRib3JkZXItY29sb3I6IHRyYW5zcGFyZW50O1xuXHR9XG5cbn1cbiJdfQ== */");

/***/ }),

/***/ "ed8f":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/info/info.component.html ***!
  \********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper\">\n\t<div class=\"typing-demo\">\n\t\tYAP - Informations about that.\n\t</div>\n\n</div>\n");

/***/ }),

/***/ "fECr":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./header.component.html */ "kjkU");
/* harmony import */ var _header_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./header.component.css */ "DN7M");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");






let HeaderComponent = class HeaderComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
    }
    redirectWhenLogged(input) {
        if (this.cookieService.get('token')) {
            window.location.href = input;
        }
        else {
            window.location.href = '/login';
        }
    }
    ngOnInit() {
        /*
        if (window.location.pathname !== '/login'
            && window.location.pathname !== '/forgot'
            && window.location.pathname !== '/reset'
            && window.location.pathname !== ''
            && this.cookieService.get('token') === undefined) {
            window.location.href = '/login';
        }
         */
    }
};
HeaderComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
HeaderComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-header',
        template: _raw_loader_header_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_header_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], HeaderComponent);



/***/ }),

/***/ "fMGI":
/*!***********************************************!*\
  !*** ./src/app/profile/profile.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("*, *:before, *:after {\n\tbox-sizing: border-box;\n\tcolor: #FFFFFF;\n}\n\nbody {\n\tbackground: #F0F1F2;\n\tfont-family: \"Montserrat\", sans-serif;\n}\n\n.container {\n\tmax-width: 90%;\n\tmargin-left: 10vw;\n}\n\n.main {\n\twidth: 70%;\n\tvertical-align: top;\n\tdisplay: inline-block;\n\tbackground: #222222;\n\tmargin-left: 3%;\n\tborder-radius: 3px;\n\toverflow: hidden;\n\tcolor: white;\n}\n\n.main__header {\n\tpadding: 20px;\n\tborder-bottom: 1px solid #F0F1F2;\n}\n\n.main__content {\n\tpadding: 20px;\n}\n\n.main__avatar {\n\t/*\n\tbackground: url(\"https://images.unsplash.com/photo-1610898564097-e28bd69740a4?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80\");\n\t*/\n\tbackground-size: cover;\n\twidth: 150px;\n\theight: 150px;\n\tdisplay: block;\n\tvertical-align: middle;\n\tmargin: 20px auto;\n\tborder-radius: 50%;\n\toverflow: hidden;\n}\n\nimg, object {\n\tmax-height: 25vh;\n\n}\n\n.pfp {\n\tdisplay: grid;\n\tplace-items: center;\n}\n\n/*\n.main__avatar:hover .main__avatar--overlay {\n\topacity: 1;\n\tborder-radius: 50%;\n}\n */\n\n.main__avatar--overlay {\n\topacity: 0;\n\tbackground: rgba(52, 138, 167, 0.6);\n\tcolor: #FFF;\n\ttext-align: center;\n\tline-height: 150px;\n\tborder-radius: 50%;\n\ttransition: all 0.3s ease;\n\tcursor: pointer;\n}\n\n.main__settings-form {\n\tmax-width: 80%;\n\tdisplay: block;\n\tmargin: 0 auto;\n}\n\n.main__input-label {\n\tfont-size: 80%;\n\tcolor: #C4C1C9;\n\tdisplay: block;\n\tmargin: 5px 5px 5px 5px;\n}\n\n.main__input {\n\tdisplay: inline-block;\n\twidth: 100%;\n\tborder: 1px solid #1c1c1c;\n\tmargin-bottom: 20px;\n\toutline: none;\n\tpadding: 15px;\n\tborder-radius: 3px;\n\tbackground-color: #494949;\n\tfont-family: \"Montserrat\", sans-serif;\n}\n\n.main__input:focus {\n\tborder: 1px solid #53e3a6;\n\ttransition: all 0.3s ease;\n}\n\n.btn {\n\tmargin-bottom: 20px;\n\tfont-family: \"Montserrat\", sans-serif;\n\tborder: none;\n\toutline: none;\n\tpadding: 15px 25px;\n\tborder-radius: 3px;\n\ttransition: all 0.3s ease;\n}\n\n@media (max-width: 764px) {\n\t.sidebar {\n\t\twidth: 100%;\n\t\tmargin-bottom: 20px;\n\t}\n\n\t.sidebar__menu-item {\n\t\tpadding: 15px;\n\t}\n\n\t.main {\n\t\twidth: 100%;\n\t\tmargin: 0;\n\t}\n\n\th1 {\n\t\tfont-size: 44px;\n\t}\n\n\tfooter {\n\t\ttext-align: center;\n\t}\n}\n\nbutton {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tborder: 0;\n\tcolor: #000000;\n\tborder-radius: 3px;\n\twidth: 20vw;\n\tcursor: pointer;\n\tfont-size: 18px;\n\ttransition-duration: 0.25s;\n\tdisplay: inline;\n}\n\n.main__save-button {\n\tbackground-color: #49d496;\n}\n\n.main__save-button:hover {\n\tbackground-color: #3ce5ad;\n}\n\n.main__logout-button {\n\tbackground-color: #d44949;\n\tmargin-left: 1em;\n}\n\n.main__logout-button:hover {\n\tbackground-color: #bf0000;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2ZpbGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLHNCQUFzQjtDQUN0QixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxtQkFBbUI7Q0FDbkIscUNBQXFDO0FBQ3RDOztBQUVBO0NBQ0MsY0FBYztDQUNkLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLFVBQVU7Q0FDVixtQkFBbUI7Q0FDbkIscUJBQXFCO0NBQ3JCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsZ0NBQWdDO0FBQ2pDOztBQUVBO0NBQ0MsYUFBYTtBQUNkOztBQUVBO0NBQ0M7O0VBRUM7Q0FDRCxzQkFBc0I7Q0FDdEIsWUFBWTtDQUNaLGFBQWE7Q0FDYixjQUFjO0NBQ2Qsc0JBQXNCO0NBQ3RCLGlCQUFpQjtDQUNqQixrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZ0JBQWdCOztBQUVqQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Ozs7O0VBS0U7O0FBRUY7Q0FDQyxVQUFVO0NBQ1YsbUNBQW1DO0NBQ25DLFdBQVc7Q0FDWCxrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGtCQUFrQjtDQUNsQix5QkFBeUI7Q0FDekIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsY0FBYztBQUNmOztBQUVBO0NBQ0MsY0FBYztDQUNkLGNBQWM7Q0FDZCxjQUFjO0NBQ2QsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MscUJBQXFCO0NBQ3JCLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsbUJBQW1CO0NBQ25CLGFBQWE7Q0FDYixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHlCQUF5QjtDQUN6QixxQ0FBcUM7QUFDdEM7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsbUJBQW1CO0NBQ25CLHFDQUFxQztDQUNyQyxZQUFZO0NBQ1osYUFBYTtDQUNiLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIseUJBQXlCO0FBQzFCOztBQUdBO0NBQ0M7RUFDQyxXQUFXO0VBQ1gsbUJBQW1CO0NBQ3BCOztDQUVBO0VBQ0MsYUFBYTtDQUNkOztDQUVBO0VBQ0MsV0FBVztFQUNYLFNBQVM7Q0FDVjs7Q0FFQTtFQUNDLGVBQWU7Q0FDaEI7O0NBRUE7RUFDQyxrQkFBa0I7Q0FDbkI7QUFDRDs7QUFFQTtDQUNDLHdCQUFnQjtJQUFoQixxQkFBZ0I7U0FBaEIsZ0JBQWdCO0NBQ2hCLFVBQVU7Q0FDVixTQUFTO0NBQ1QsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixXQUFXO0NBQ1gsZUFBZTtDQUNmLGVBQWU7Q0FDZiwwQkFBMEI7Q0FDMUIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUIiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRjb2xvcjogI0ZGRkZGRjtcbn1cblxuYm9keSB7XG5cdGJhY2tncm91bmQ6ICNGMEYxRjI7XG5cdGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLmNvbnRhaW5lciB7XG5cdG1heC13aWR0aDogOTAlO1xuXHRtYXJnaW4tbGVmdDogMTB2dztcbn1cblxuLm1haW4ge1xuXHR3aWR0aDogNzAlO1xuXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdGJhY2tncm91bmQ6ICMyMjIyMjI7XG5cdG1hcmdpbi1sZWZ0OiAzJTtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbi5tYWluX19oZWFkZXIge1xuXHRwYWRkaW5nOiAyMHB4O1xuXHRib3JkZXItYm90dG9tOiAxcHggc29saWQgI0YwRjFGMjtcbn1cblxuLm1haW5fX2NvbnRlbnQge1xuXHRwYWRkaW5nOiAyMHB4O1xufVxuXG4ubWFpbl9fYXZhdGFyIHtcblx0Lypcblx0YmFja2dyb3VuZDogdXJsKFwiaHR0cHM6Ly9pbWFnZXMudW5zcGxhc2guY29tL3Bob3RvLTE2MTA4OTg1NjQwOTctZTI4YmQ2OTc0MGE0P2l4aWQ9TVh3eE1qQTNmREI4TUh4d2FHOTBieTF3WVdkbGZIeDhmR1Z1ZkRCOGZIdyUzRCZpeGxpYj1yYi0xLjIuMSZhdXRvPWZvcm1hdCZmaXQ9Y3JvcCZ3PTYzNCZxPTgwXCIpO1xuXHQqL1xuXHRiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuXHR3aWR0aDogMTUwcHg7XG5cdGhlaWdodDogMTUwcHg7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xuXHRtYXJnaW46IDIwcHggYXV0bztcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5pbWcsIG9iamVjdCB7XG5cdG1heC1oZWlnaHQ6IDI1dmg7XG5cbn1cblxuLnBmcCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdHBsYWNlLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi8qXG4ubWFpbl9fYXZhdGFyOmhvdmVyIC5tYWluX19hdmF0YXItLW92ZXJsYXkge1xuXHRvcGFjaXR5OiAxO1xuXHRib3JkZXItcmFkaXVzOiA1MCU7XG59XG4gKi9cblxuLm1haW5fX2F2YXRhci0tb3ZlcmxheSB7XG5cdG9wYWNpdHk6IDA7XG5cdGJhY2tncm91bmQ6IHJnYmEoNTIsIDEzOCwgMTY3LCAwLjYpO1xuXHRjb2xvcjogI0ZGRjtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRsaW5lLWhlaWdodDogMTUwcHg7XG5cdGJvcmRlci1yYWRpdXM6IDUwJTtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcblx0Y3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubWFpbl9fc2V0dGluZ3MtZm9ybSB7XG5cdG1heC13aWR0aDogODAlO1xuXHRkaXNwbGF5OiBibG9jaztcblx0bWFyZ2luOiAwIGF1dG87XG59XG5cbi5tYWluX19pbnB1dC1sYWJlbCB7XG5cdGZvbnQtc2l6ZTogODAlO1xuXHRjb2xvcjogI0M0QzFDOTtcblx0ZGlzcGxheTogYmxvY2s7XG5cdG1hcmdpbjogNXB4IDVweCA1cHggNXB4O1xufVxuXG4ubWFpbl9faW5wdXQge1xuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG5cdHdpZHRoOiAxMDAlO1xuXHRib3JkZXI6IDFweCBzb2xpZCAjMWMxYzFjO1xuXHRtYXJnaW4tYm90dG9tOiAyMHB4O1xuXHRvdXRsaW5lOiBub25lO1xuXHRwYWRkaW5nOiAxNXB4O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdGJhY2tncm91bmQtY29sb3I6ICM0OTQ5NDk7XG5cdGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcbn1cblxuLm1haW5fX2lucHV0OmZvY3VzIHtcblx0Ym9yZGVyOiAxcHggc29saWQgIzUzZTNhNjtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuLmJ0biB7XG5cdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdGZvbnQtZmFtaWx5OiBcIk1vbnRzZXJyYXRcIiwgc2Fucy1zZXJpZjtcblx0Ym9yZGVyOiBub25lO1xuXHRvdXRsaW5lOiBub25lO1xuXHRwYWRkaW5nOiAxNXB4IDI1cHg7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0dHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbn1cblxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY0cHgpIHtcblx0LnNpZGViYXIge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbi1ib3R0b206IDIwcHg7XG5cdH1cblxuXHQuc2lkZWJhcl9fbWVudS1pdGVtIHtcblx0XHRwYWRkaW5nOiAxNXB4O1xuXHR9XG5cblx0Lm1haW4ge1xuXHRcdHdpZHRoOiAxMDAlO1xuXHRcdG1hcmdpbjogMDtcblx0fVxuXG5cdGgxIHtcblx0XHRmb250LXNpemU6IDQ0cHg7XG5cdH1cblxuXHRmb290ZXIge1xuXHRcdHRleHQtYWxpZ246IGNlbnRlcjtcblx0fVxufVxuXG5idXR0b24ge1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRvdXRsaW5lOiAwO1xuXHRib3JkZXI6IDA7XG5cdGNvbG9yOiAjMDAwMDAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdHdpZHRoOiAyMHZ3O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG5cdGRpc3BsYXk6IGlubGluZTtcbn1cblxuLm1haW5fX3NhdmUtYnV0dG9uIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzQ5ZDQ5Njtcbn1cblxuLm1haW5fX3NhdmUtYnV0dG9uOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzNjZTVhZDtcbn1cblxuLm1haW5fX2xvZ291dC1idXR0b24ge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZDQ0OTQ5O1xuXHRtYXJnaW4tbGVmdDogMWVtO1xufVxuXG4ubWFpbl9fbG9nb3V0LWJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNiZjAwMDA7XG59XG4iXX0= */");

/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./footer.component.html */ "HhuZ");
/* harmony import */ var _footer_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./footer.component.css */ "1XXE");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let FooterComponent = class FooterComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
FooterComponent.ctorParameters = () => [];
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-footer',
        template: _raw_loader_footer_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_footer_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], FooterComponent);



/***/ }),

/***/ "hKte":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/forgot/forgot.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"container\">\n\t<input #emailAddress placeholder=\"Email address\">\n\t<button class=\"button__reset\" (click)=\"checkReset(emailAddress.value)\">Request email</button>\n</div>\n");

/***/ }),

/***/ "in5m":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"wrapper-new\">\n\t<div class=\"container-new\">\n\t\t<h1 *ngIf=\"showWrongPassword == false\">{{message}}</h1>\n\t\t<h1 *ngIf=\"showWrongPassword\" id=\"wrong__password\">Wrong email address or password</h1>\n\n\t\t<form class=\"loginform\">\n\t\t\t<input #email pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" placeholder=\"Email\" type=\"email\">\n\t\t\t<input #password placeholder=\"Password\" type=\"password\" id=\"password__field\">\n\t\t\t<button type=\"submit\" id=\"login-button\"\n\t\t\t\t\t(click)=\"doPost(email.value, password.value)\">{{loginmessage}}</button>\n\t\t\t<a class=\"register\" routerLink=\"/register\">Register</a>\n\t\t\t<a class=\"register\" routerLink=\"/forgot\">Password reset</a>\n\t\t</form>\n\t</div>\n\n\t<ul class=\"bg-bubbles\">\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t\t<li></li>\n\t</ul>\n</div>\n\n");

/***/ }),

/***/ "kjkU":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<meta content=\"width=device-width, initial-scale=1.0\" name=\"viewport\"/>\n\n<div class=\"area\"></div>\n<nav class=\"main-menu\">\n\t<ul>\n\t\t<li>\n\t\t\t<a routerLink=\"\">\n\t\t\t\t<i class=\"fa fa-home fa-2x\"></i>\n\t\t\t\t<span class=\"nav-text\">Home</span>\n\t\t\t</a>\n\n\t\t<li>\n\t\t\t<a routerLink=\"/login\">\n\t\t\t\t<i class=\"fa fa-arrow-circle-o-right fa-2x\"></i>\n\t\t\t\t<span class=\"nav-text\">Login</span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li class=\"has-subnav\">\n\t\t\t<a (click)=\"redirectWhenLogged('/profile')\">\n\t\t\t\t<i class=\"fa fa-user fa-2x\"></i>\n\t\t\t\t<span class=\"nav-text\">My Profile</span>\n\t\t\t</a>\n\n\t\t</li>\n\t\t<li class=\"has-subnav\">\n\t\t\t<a (click)=\"redirectWhenLogged('/boards')\">\n\t\t\t\t<i class=\"fa fa-folder fa-2x\"></i>\n\t\t\t\t<span class=\"nav-text\">Boards</span>\n\t\t\t</a>\n\t\t</li>\n\n\t\t<li>\n\t\t\t<a\n\t\t\t\thref=\"https://github.com/flammenderdrache/yap-backend/blob/master/api-documentation/Documentation-main.md\"\n\t\t\t\trel=\"noreferrer noopener\" target=\"_blank\">\n\t\t\t\t<i class=\"fa fa-info fa-2x\"></i>\n\t\t\t\t<span class=\"nav-text\">API Documentation</span>\n\t\t\t</a>\n\t\t</li>\n\t\t<li>\n\t\t\t<a href=\"https://github.com/FlareFlo/Angular-testing-source-css\" rel=\"noreferrer noopener\" target=\"_blank\">\n\t\t\t\t<i class=\"fa fa-github fa-2x\"></i>\n\t\t\t\t<span class=\"nav-text\">Github</span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n\t<ul class=\"logout\">\n\t\t<li class=\"has-subnav\">\n\t\t\t<a (click)=\"redirectWhenLogged('/legacy')\">\n\t\t\t\t<i class=\"fa fa-folder fa-2x\"></i>\n\t\t\t\t<span class=\"nav-text\">Legacy testing</span>\n\t\t\t</a>\n\t\t</li>\n\t</ul>\n</nav>\n\n\n\n");

/***/ }),

/***/ "lYKh":
/*!***********************************************!*\
  !*** ./src/app/entries/entries.component.css ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n\tcolor: #FFFFFF;\n\toverflow: hidden;\n}\n\n.sorting__container {\n\tdisplay: grid;\n\tjustify-content: center;\n\tgrid-auto-flow: column;\n}\n\nlabel {\n\tdisplay: block;\n\tfont: 1rem 'Fira Sans', sans-serif;\n}\n\n.due__text {\n\tdisplay: grid;\n\tjustify-content: center;\n\tgrid-auto-flow: column;\n\tfont-size: 10pt;\n}\n\n.container__popup__Loading {\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tposition: absolute;\n\ttop: 0;\n}\n\nprogress {\n\theight: 5px;\n\twidth: calc(100vw - 60px);\n\tmargin-left: 60px;\n\tbackground-color: #53e3a6 !important;\n\ttransition: all 5s ease-out;\n}\n\n.button__sort {\n\tbackground-color: #53e3a6 !important;\n\tborder: none;\n\tcolor: black;\n\tpadding: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline;\n\tfont-size: 10pt;\n\twidth: 100%;\n}\n\n.sorting__container {\n\tbackground-color: #53e3a6 ;\n}\n\n.button__addEntry {\n\tbackground-color: #53e3a6 !important;\n\tborder: none;\n\tcolor: black;\n\tpadding: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline;\n\twidth: 100%;\n\tfont-size: 15px;\n}\n\n.button__editEntry {\n\tbackground-color: rgba(0, 0, 0, 0);\n\tborder: none;\n\tcolor: rgba(0, 0, 0, 0);\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline;\n\twidth: 100%;\n\tfont-size: calc(12px + 0.5vw) !important;\n\tborder-radius: 4px;\n\ttransition: 0.25s;\n}\n\n.button__editEntry:hover {\n\tbackground-color: #53e3a6 !important;\n\tcolor: black;\n}\n\n.item__container {\n\twidth: 40vw;\n\tmax-width: 500px;\n\tmargin: 1rem 0 0 20vw;\n}\n\n.item__list {\n\tborder: solid 1px #ccc;\n\tmin-height: 60px;\n\tbackground: #1c1c1c;\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tdisplay: block;\n}\n\n.item__box {\n\tpadding: 20px 10px;\n\tborder-bottom: solid 1px #ccc;\n\tcolor: #FFFFFF;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbox-sizing: border-box;\n\tbackground-color: #818181;\n\tfont-size: 14px;\n\theight: calc(10px + 3vh);\n\tcursor: pointer;\n}\n\n.item__box:hover {\n\tbackground-color: #3ce5ad;\n}\n\n.cdk-drag-preview {\n\tbox-sizing: border-box;\n\tborder-radius: 4px;\n\tbox-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n\t0 8px 10px 1px rgba(0, 0, 0, 0.14),\n\t0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n\topacity: 0;\n}\n\n/*\n.cdk-drag-animating {\n\ttransition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n */\n\n.item__box:last-child {\n\tborder: none;\n}\n\n.item__list.cdk-drop-list-dragging .item__box:not(.cdk-drag-placeholder) {\n\ttransition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/* ------------------------------------------------------------------------------------------------------*/\n\n.container__popup {\n\tbackground-color: rgba(34, 34, 34, 0.69);\n\tborder-radius: 8px;\n\tbox-sizing: border-box;\n\toverflow: hidden;\n\t-webkit-backdrop-filter: blur(40px);\n\t        backdrop-filter: blur(40px);\n\tposition: fixed;\n\ttop: 5vh;\n\tleft: 29vw;\n\twidth: auto;\n\theight: auto;\n\tz-index: 1;\n\tbox-shadow: 0 0 1px rgba(0, 0, 0, 0.12),\n\t0 0 2px rgba(0, 0, 0, 0.12),\n\t0 0 4px rgba(0, 0, 0, 0.12),\n\t0 0 8px rgba(83, 227, 166, 0.12),\n\t0 0 16px rgba(83, 227, 166, 0.12);\n\ttransition: ease-in;\n\ttransition-duration: 0.2s;\n\n}\n\n.md-form {\n\tdisplay: grid;\n\tplace-items: center;\n}\n\n.container__popup:hover {\n\tbox-shadow: 0 0 2px rgba(0, 0, 0, 0.12),\n\t0 0 4px rgba(0, 0, 0, 0.12),\n\t0 0 8px rgba(0, 0, 0, 0.12),\n\t0 0 16px rgba(83, 227, 166, 0.12),\n\t0 0 32px rgba(83, 227, 166, 0.12);\n}\n\n.buttons {\n\tdisplay: grid;\n\tjustify-content: center;\n\talign-content: center;\n\tgap: 10px;\n\tgrid-auto-flow: column;\n}\n\ntextarea {\n\tbackground-color: #282C34;\n\tcolor: #FFFFFF;\n\tborder-color: #1c1c1c;\n\tfont-size: 15pt;\n\twidth: 95%;\n\theight: 100px;\n\tresize: both;\n\tmargin-bottom: 5px;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n\tdisplay: inline-grid;\n}\n\ntextarea:hover {\n\tbackground-color: #282C34;\n}\n\ntextarea:focus, textarea:active {\n\tbackground-color: #282C34;\n\tborder-color: #1c1c1c;\n\tcolor: #FFFFFF;\n\n}\n\ninput {\n\tbackground-color: #282C34;\n\tcolor: #FFFFFF;\n\tborder-color: #1c1c1c;\n\tfont-size: 20pt;\n\tmargin-bottom: 5px;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n\twidth: 95%;\n}\n\ninput:hover {\n\tbackground-color: #282C34;\n}\n\ninput:focus, input:active {\n\tbackground-color: #282C34;\n\tborder-color: #1c1c1c;\n\tcolor: #FFFFFF;\n}\n\n.h2_popup {\n\ttext-align: center;\n\tpadding-top: 1vh;\n}\n\n.button__submit, .button__close, .button__delete {\n\tborder: none;\n\tcolor: black;\n\ttext-align: center;\n\ttext-decoration: none;\n\twidth: 10em;\n\tfont-size: calc(10px + (4px * 1rem));\n\tborder-radius: 4px;\n\tmargin: 10px 4px;\n}\n\n.button__submit {\n\tbackground-color: rgb(83, 227, 166) !important;\n\tbox-shadow: 0 0 5px rgb(83, 227, 166);\n\ttransition: ease-in;\n\ttransition-duration: .1s;\n}\n\n.button__submit:hover {\n\tbox-shadow: 0 0 10px rgb(83, 227, 166);\n}\n\n.button__close {\n\tbackground-color: #e38d53 !important;\n\tbox-shadow: 0 0 5px #e38d53;\n\ttransition: ease-in;\n\ttransition-duration: .1s;\n}\n\n.button__close:hover {\n\tbox-shadow: 0 0 10px #e38d53;\n}\n\n.button__delete {\n\tbackground-color: #e35353 !important;\n\tbox-shadow: 0 0 5px #e35353;\n\ttransition: ease-in;\n\ttransition-duration: .1s;\n}\n\n.button__delete:hover {\n\tbox-shadow: 0 0 10px #e35353;\n}\n\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImVudHJpZXMuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtDQUNDLGNBQWM7Q0FDZCxnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxrQ0FBa0M7QUFDbkM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtDQUN0QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLE1BQU07QUFDUDs7QUFFQTtDQUNDLFdBQVc7Q0FDWCx5QkFBeUI7Q0FDekIsaUJBQWlCO0NBQ2pCLG9DQUFvQztDQUNwQywyQkFBMkI7QUFDNUI7O0FBR0E7Q0FDQyxvQ0FBb0M7Q0FDcEMsWUFBWTtDQUNaLFlBQVk7Q0FDWixhQUFhO0NBQ2Isa0JBQWtCO0NBQ2xCLHFCQUFxQjtDQUNyQixlQUFlO0NBQ2YsZUFBZTtDQUNmLFdBQVc7QUFDWjs7QUFFQTtDQUNDLDBCQUEwQjtBQUMzQjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLFdBQVc7Q0FDWCx3Q0FBd0M7Q0FDeEMsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxXQUFXO0NBQ1gsZ0JBQWdCO0NBQ2hCLHFCQUFxQjtBQUN0Qjs7QUFFQTtDQUNDLHNCQUFzQjtDQUN0QixnQkFBZ0I7Q0FDaEIsbUJBQW1CO0NBQ25CLGtCQUFrQjtDQUNsQixnQkFBZ0I7Q0FDaEIsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLDZCQUE2QjtDQUM3QixjQUFjO0NBQ2QsYUFBYTtDQUNiLG1CQUFtQjtDQUNuQixtQkFBbUI7Q0FDbkIsOEJBQThCO0NBQzlCLHNCQUFzQjtDQUN0Qix5QkFBeUI7Q0FDekIsZUFBZTtDQUNmLHdCQUF3QjtDQUN4QixlQUFlO0FBQ2hCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGtCQUFrQjtDQUNsQjs7bUNBRWtDO0FBQ25DOztBQUVBO0NBQ0MsVUFBVTtBQUNYOztBQUVBOzs7O0VBSUU7O0FBRUY7Q0FDQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxzREFBc0Q7QUFDdkQ7O0FBRUEsMEdBQTBHOztBQUcxRztDQUNDLHdDQUF3QztDQUN4QyxrQkFBa0I7Q0FDbEIsc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixtQ0FBMkI7U0FBM0IsMkJBQTJCO0NBQzNCLGVBQWU7Q0FDZixRQUFRO0NBQ1IsVUFBVTtDQUNWLFdBQVc7Q0FDWCxZQUFZO0NBQ1osVUFBVTtDQUNWOzs7O2tDQUlpQztDQUNqQyxtQkFBbUI7Q0FDbkIseUJBQXlCOztBQUUxQjs7QUFFQTtDQUNDLGFBQWE7Q0FDYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQzs7OztrQ0FJaUM7QUFDbEM7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHFCQUFxQjtDQUNyQixTQUFTO0NBQ1Qsc0JBQXNCO0FBQ3ZCOztBQUVBO0NBQ0MseUJBQXlCO0NBQ3pCLGNBQWM7Q0FDZCxxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLFVBQVU7Q0FDVixhQUFhO0NBQ2IsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixpQkFBaUI7Q0FDakIsa0JBQWtCO0NBQ2xCLG9CQUFvQjtBQUNyQjs7QUFFQTtDQUNDLHlCQUF5QjtBQUMxQjs7QUFFQTtDQUNDLHlCQUF5QjtDQUN6QixxQkFBcUI7Q0FDckIsY0FBYzs7QUFFZjs7QUFHQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFHQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLG9DQUFvQztDQUNwQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsOENBQThDO0NBQzlDLHFDQUFxQztDQUNyQyxtQkFBbUI7Q0FDbkIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0Msc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLDJCQUEyQjtDQUMzQixtQkFBbUI7Q0FDbkIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsNEJBQTRCO0FBQzdCIiwiZmlsZSI6ImVudHJpZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIioge1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuLnNvcnRpbmdfX2NvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG5sYWJlbCB7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHRmb250OiAxcmVtICdGaXJhIFNhbnMnLCBzYW5zLXNlcmlmO1xufVxuXG4uZHVlX190ZXh0IHtcblx0ZGlzcGxheTogZ3JpZDtcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG5cdGZvbnQtc2l6ZTogMTBwdDtcbn1cblxuLmNvbnRhaW5lcl9fcG9wdXBfX0xvYWRpbmcge1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24taXRlbXM6IGNlbnRlcjtcblx0cG9zaXRpb246IGFic29sdXRlO1xuXHR0b3A6IDA7XG59XG5cbnByb2dyZXNzIHtcblx0aGVpZ2h0OiA1cHg7XG5cdHdpZHRoOiBjYWxjKDEwMHZ3IC0gNjBweCk7XG5cdG1hcmdpbi1sZWZ0OiA2MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTNlM2E2ICFpbXBvcnRhbnQ7XG5cdHRyYW5zaXRpb246IGFsbCA1cyBlYXNlLW91dDtcbn1cblxuXG4uYnV0dG9uX19zb3J0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzUzZTNhNiAhaW1wb3J0YW50O1xuXHRib3JkZXI6IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGRpc3BsYXk6IGlubGluZTtcblx0Zm9udC1zaXplOiAxMHB0O1xuXHR3aWR0aDogMTAwJTtcbn1cblxuLnNvcnRpbmdfX2NvbnRhaW5lciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1M2UzYTYgO1xufVxuXG4uYnV0dG9uX19hZGRFbnRyeSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1M2UzYTYgIWltcG9ydGFudDtcblx0Ym9yZGVyOiBub25lO1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRkaXNwbGF5OiBpbmxpbmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IDE1cHg7XG59XG5cbi5idXR0b25fX2VkaXRFbnRyeSB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6IHJnYmEoMCwgMCwgMCwgMCk7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRkaXNwbGF5OiBpbmxpbmU7XG5cdHdpZHRoOiAxMDAlO1xuXHRmb250LXNpemU6IGNhbGMoMTJweCArIDAuNXZ3KSAhaW1wb3J0YW50O1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdHRyYW5zaXRpb246IDAuMjVzO1xufVxuXG4uYnV0dG9uX19lZGl0RW50cnk6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTNlM2E2ICFpbXBvcnRhbnQ7XG5cdGNvbG9yOiBibGFjaztcbn1cblxuLml0ZW1fX2NvbnRhaW5lciB7XG5cdHdpZHRoOiA0MHZ3O1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRtYXJnaW46IDFyZW0gMCAwIDIwdnc7XG59XG5cbi5pdGVtX19saXN0IHtcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2NjYztcblx0bWluLWhlaWdodDogNjBweDtcblx0YmFja2dyb3VuZDogIzFjMWMxYztcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW1fX2JveCB7XG5cdHBhZGRpbmc6IDIwcHggMTBweDtcblx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJhY2tncm91bmQtY29sb3I6ICM4MTgxODE7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0aGVpZ2h0OiBjYWxjKDEwcHggKyAzdmgpO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtX19ib3g6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2NlNWFkO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuXHQwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuXHRvcGFjaXR5OiAwO1xufVxuXG4vKlxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbiAqL1xuXG4uaXRlbV9fYm94Omxhc3QtY2hpbGQge1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5pdGVtX19saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW1fX2JveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cblxuXG4uY29udGFpbmVyX19wb3B1cCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzQsIDM0LCAzNCwgMC42OSk7XG5cdGJvcmRlci1yYWRpdXM6IDhweDtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcblx0YmFja2Ryb3AtZmlsdGVyOiBibHVyKDQwcHgpO1xuXHRwb3NpdGlvbjogZml4ZWQ7XG5cdHRvcDogNXZoO1xuXHRsZWZ0OiAyOXZ3O1xuXHR3aWR0aDogYXV0bztcblx0aGVpZ2h0OiBhdXRvO1xuXHR6LWluZGV4OiAxO1xuXHRib3gtc2hhZG93OiAwIDAgMXB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG5cdDAgMCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcblx0MCAwIDRweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuXHQwIDAgOHB4IHJnYmEoODMsIDIyNywgMTY2LCAwLjEyKSxcblx0MCAwIDE2cHggcmdiYSg4MywgMjI3LCAxNjYsIDAuMTIpO1xuXHR0cmFuc2l0aW9uOiBlYXNlLWluO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAwLjJzO1xuXG59XG5cbi5tZC1mb3JtIHtcblx0ZGlzcGxheTogZ3JpZDtcblx0cGxhY2UtaXRlbXM6IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lcl9fcG9wdXA6aG92ZXIge1xuXHRib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG5cdDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcblx0MCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuXHQwIDAgMTZweCByZ2JhKDgzLCAyMjcsIDE2NiwgMC4xMiksXG5cdDAgMCAzMnB4IHJnYmEoODMsIDIyNywgMTY2LCAwLjEyKTtcbn1cblxuLmJ1dHRvbnMge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRnYXA6IDEwcHg7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG59XG5cbnRleHRhcmVhIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4MkMzNDtcblx0Y29sb3I6ICNGRkZGRkY7XG5cdGJvcmRlci1jb2xvcjogIzFjMWMxYztcblx0Zm9udC1zaXplOiAxNXB0O1xuXHR3aWR0aDogOTUlO1xuXHRoZWlnaHQ6IDEwMHB4O1xuXHRyZXNpemU6IGJvdGg7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcblx0ZGlzcGxheTogaW5saW5lLWdyaWQ7XG59XG5cbnRleHRhcmVhOmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4MkMzNDtcbn1cblxudGV4dGFyZWE6Zm9jdXMsIHRleHRhcmVhOmFjdGl2ZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyODJDMzQ7XG5cdGJvcmRlci1jb2xvcjogIzFjMWMxYztcblx0Y29sb3I6ICNGRkZGRkY7XG5cbn1cblxuXG5pbnB1dCB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyODJDMzQ7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRib3JkZXItY29sb3I6ICMxYzFjMWM7XG5cdGZvbnQtc2l6ZTogMjBwdDtcblx0bWFyZ2luLWJvdHRvbTogNXB4O1xuXHRtYXJnaW4tbGVmdDogMTBweDtcblx0bWFyZ2luLXJpZ2h0OiAxMHB4O1xuXHR3aWR0aDogOTUlO1xufVxuXG5pbnB1dDpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMyODJDMzQ7XG59XG5cbmlucHV0OmZvY3VzLCBpbnB1dDphY3RpdmUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM0O1xuXHRib3JkZXItY29sb3I6ICMxYzFjMWM7XG5cdGNvbG9yOiAjRkZGRkZGO1xufVxuXG5cbi5oMl9wb3B1cCB7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0cGFkZGluZy10b3A6IDF2aDtcbn1cblxuLmJ1dHRvbl9fc3VibWl0LCAuYnV0dG9uX19jbG9zZSwgLmJ1dHRvbl9fZGVsZXRlIHtcblx0Ym9yZGVyOiBub25lO1xuXHRjb2xvcjogYmxhY2s7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHR3aWR0aDogMTBlbTtcblx0Zm9udC1zaXplOiBjYWxjKDEwcHggKyAoNHB4ICogMXJlbSkpO1xuXHRib3JkZXItcmFkaXVzOiA0cHg7XG5cdG1hcmdpbjogMTBweCA0cHg7XG59XG5cbi5idXR0b25fX3N1Ym1pdCB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYig4MywgMjI3LCAxNjYpICFpbXBvcnRhbnQ7XG5cdGJveC1zaGFkb3c6IDAgMCA1cHggcmdiKDgzLCAyMjcsIDE2Nik7XG5cdHRyYW5zaXRpb246IGVhc2UtaW47XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC4xcztcbn1cblxuLmJ1dHRvbl9fc3VibWl0OmhvdmVyIHtcblx0Ym94LXNoYWRvdzogMCAwIDEwcHggcmdiKDgzLCAyMjcsIDE2Nik7XG59XG5cbi5idXR0b25fX2Nsb3NlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogI2UzOGQ1MyAhaW1wb3J0YW50O1xuXHRib3gtc2hhZG93OiAwIDAgNXB4ICNlMzhkNTM7XG5cdHRyYW5zaXRpb246IGVhc2UtaW47XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC4xcztcbn1cblxuLmJ1dHRvbl9fY2xvc2U6aG92ZXIge1xuXHRib3gtc2hhZG93OiAwIDAgMTBweCAjZTM4ZDUzO1xufVxuXG4uYnV0dG9uX19kZWxldGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTM1MzUzICFpbXBvcnRhbnQ7XG5cdGJveC1zaGFkb3c6IDAgMCA1cHggI2UzNTM1Mztcblx0dHJhbnNpdGlvbjogZWFzZS1pbjtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjFzO1xufVxuXG4uYnV0dG9uX19kZWxldGU6aG92ZXIge1xuXHRib3gtc2hhZG93OiAwIDAgMTBweCAjZTM1MzUzO1xufVxuXG4iXX0= */");

/***/ }),

/***/ "n7sk":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@font-face {\n\tfont-family: 'Source Sans Pro';\n\tfont-style: normal;\n\tfont-weight: 200;\n\tsrc: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3i94_wlxdr.ttf) format('truetype');\n}\n\n@font-face {\n\tfont-family: 'Source Sans Pro';\n\tfont-style: normal;\n\tfont-weight: 300;\n\tsrc: url(https://fonts.gstatic.com/s/sourcesanspro/v14/6xKydSBYKcSV-LCoeQqfX1RYOo3ik4zwlxdr.ttf) format('truetype');\n}\n\n* {\n\tbox-sizing: border-box;\n\tmargin: 0;\n\tpadding: 0;\n\tfont-weight: 300;\n\tfont-family: 'Source Sans Pro', sans-serif;\n\tcolor: white;\n\toverflow: hidden;\n}\n\nbody {\n\tfont-family: 'Source Sans Pro', sans-serif;\n\tcolor: white;\n\tfont-weight: 300;\n}\n\n#wrong__password {\n\tcolor: red;\n}\n\n.wrapper-new.form-success .container-new h1 {\n\ttransform: translateY(85px);\n}\n\n.container-new {\n\tpadding-top: 10vh;\n\tz-index: 5;\n\tmax-width: 700px;\n\tmargin: 0 auto;\n\ttext-align: center;\n}\n\n.container-new h1 {\n\tfont-size: calc(30px + 1rem);\n\ttransition-duration: 1s;\n\t/*\n\ttransition-timing-function: ease-in-put;\n\t */\n\tfont-weight: 200;\n}\n\nform {\n\tpadding: 20px 0;\n\tposition: relative;\n\tz-index: 2;\n\tcolor: white;\n}\n\nform input {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tborder: 1px solid rgba(255, 255, 255, 0.4);\n\tbackground-color: rgba(255, 255, 255, 0.2);\n\twidth: 250px;\n\tborder-radius: 3px;\n\tpadding: 10px 15px;\n\tmargin: 0 auto 10px auto;\n\tdisplay: block;\n\ttext-align: center;\n\tfont-size: 18px;\n\tcolor: white;\n\ttransition-duration: 0.25s;\n\tfont-weight: 300;\n}\n\nform input:hover {\n\tbackground-color: rgba(47, 47, 47, 0.4);\n}\n\nform input:focus {\n\tbackground-color: rgba(47, 47, 47, 0.4);\n\twidth: 260px;\n\tcolor: #ffffff;\n}\n\nform button {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tbackground-color: #49d496;\n\tborder: 0;\n\tpadding: 10px 15px;\n\tcolor: #000000;\n\tborder-radius: 3px;\n\twidth: 250px;\n\tcursor: pointer;\n\tfont-size: 18px;\n\ttransition-duration: 0.25s;\n}\n\nform button:hover {\n\tbackground-color: #3ce5ad;\n\twidth: 260px;\n}\n\n.register {\n\tmargin-top: 5px;\n\tdisplay: block;\n\tcursor: pointer;\n\ttext-decoration: none;\n}\n\n.register:hover {\n\tcolor: #53e3a6;\n}\n\n.bg-bubbles {\n\tposition: absolute;\n\ttop: 0;\n\tleft: 0;\n\twidth: 100%;\n\theight: 100%;\n\tz-index: -1;\n}\n\n.bg-bubbles li {\n\tposition: absolute;\n\tlist-style: none;\n\tdisplay: block;\n\twidth: 40px;\n\theight: 40px;\n\tbackground-color: rgba(255, 255, 255, 0.15);\n\tbottom: -160px;\n\tanimation: square 25s infinite;\n\ttransition-timing-function: linear;\n}\n\n.bg-bubbles li:nth-child(1) {\n\tleft: 10%;\n}\n\n.bg-bubbles li:nth-child(2) {\n\tleft: 20%;\n\twidth: 80px;\n\theight: 80px;\n\tanimation-delay: 2s;\n\tanimation-duration: 17s;\n}\n\n.bg-bubbles li:nth-child(3) {\n\tleft: 25%;\n\tanimation-delay: 4s;\n}\n\n.bg-bubbles li:nth-child(4) {\n\tleft: 40%;\n\twidth: 60px;\n\theight: 60px;\n\tanimation-duration: 22s;\n\tbackground-color: rgba(255, 255, 255, 0.25);\n}\n\n.bg-bubbles li:nth-child(5) {\n\tleft: 70%;\n}\n\n.bg-bubbles li:nth-child(6) {\n\tleft: 80%;\n\twidth: 120px;\n\theight: 120px;\n\tanimation-delay: 3s;\n\tbackground-color: rgba(255, 255, 255, 0.2);\n}\n\n.bg-bubbles li:nth-child(7) {\n\tleft: 32%;\n\twidth: 160px;\n\theight: 160px;\n\tanimation-delay: 7s;\n}\n\n.bg-bubbles li:nth-child(8) {\n\tleft: 55%;\n\twidth: 20px;\n\theight: 20px;\n\tanimation-delay: 15s;\n\tanimation-duration: 40s;\n}\n\n.bg-bubbles li:nth-child(9) {\n\tleft: 25%;\n\twidth: 10px;\n\theight: 10px;\n\tanimation-delay: 2s;\n\tanimation-duration: 40s;\n\tbackground-color: rgba(255, 255, 255, 0.3);\n}\n\n.bg-bubbles li:nth-child(10) {\n\tleft: 90%;\n\twidth: 160px;\n\theight: 160px;\n\tanimation-delay: 11s;\n}\n\n@keyframes square {\n\t0% {\n\t\ttransform: translateY(0);\n\t}\n\t100% {\n\t\ttransform: translateY(-700px) rotate(600deg);\n\t}\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Q0FDQyw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtSEFBbUg7QUFDcEg7O0FBRUE7Q0FDQyw4QkFBOEI7Q0FDOUIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixtSEFBbUg7QUFDcEg7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsU0FBUztDQUNULFVBQVU7Q0FDVixnQkFBZ0I7Q0FDaEIsMENBQTBDO0NBQzFDLFlBQVk7Q0FDWixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQywwQ0FBMEM7Q0FDMUMsWUFBWTtDQUNaLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFVBQVU7QUFDWDs7QUFFQTtDQUNDLDJCQUEyQjtBQUM1Qjs7QUFFQTtDQUNDLGlCQUFpQjtDQUNqQixVQUFVO0NBQ1YsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxrQkFBa0I7QUFDbkI7O0FBRUE7Q0FDQyw0QkFBNEI7Q0FDNUIsdUJBQXVCO0NBQ3ZCOztHQUVFO0NBQ0YsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtBQUNiOztBQUVBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDBDQUEwQztDQUMxQywwQ0FBMEM7Q0FDMUMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsd0JBQXdCO0NBQ3hCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsdUNBQXVDO0NBQ3ZDLFlBQVk7Q0FDWixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyx3QkFBZ0I7SUFBaEIscUJBQWdCO1NBQWhCLGdCQUFnQjtDQUNoQixVQUFVO0NBQ1YseUJBQXlCO0NBQ3pCLFNBQVM7Q0FDVCxrQkFBa0I7Q0FDbEIsY0FBYztDQUNkLGtCQUFrQjtDQUNsQixZQUFZO0NBQ1osZUFBZTtDQUNmLGVBQWU7Q0FDZiwwQkFBMEI7QUFDM0I7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIsWUFBWTtBQUNiOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGNBQWM7Q0FDZCxlQUFlO0NBQ2YscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0MsY0FBYztBQUNmOztBQUVBO0NBQ0Msa0JBQWtCO0NBQ2xCLE1BQU07Q0FDTixPQUFPO0NBQ1AsV0FBVztDQUNYLFlBQVk7Q0FDWixXQUFXO0FBQ1o7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0NBQ2hCLGNBQWM7Q0FDZCxXQUFXO0NBQ1gsWUFBWTtDQUNaLDJDQUEyQztDQUMzQyxjQUFjO0NBRWQsOEJBQThCO0NBQzlCLGtDQUFrQztBQUNuQzs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxXQUFXO0NBQ1gsWUFBWTtDQUVaLG1CQUFtQjtDQUVuQix1QkFBdUI7QUFDeEI7O0FBRUE7Q0FDQyxTQUFTO0NBRVQsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsU0FBUztDQUNULFdBQVc7Q0FDWCxZQUFZO0NBRVosdUJBQXVCO0NBQ3ZCLDJDQUEyQztBQUM1Qzs7QUFFQTtDQUNDLFNBQVM7QUFDVjs7QUFFQTtDQUNDLFNBQVM7Q0FDVCxZQUFZO0NBQ1osYUFBYTtDQUViLG1CQUFtQjtDQUNuQiwwQ0FBMEM7QUFDM0M7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsWUFBWTtDQUNaLGFBQWE7Q0FFYixtQkFBbUI7QUFDcEI7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsV0FBVztDQUNYLFlBQVk7Q0FFWixvQkFBb0I7Q0FFcEIsdUJBQXVCO0FBQ3hCOztBQUVBO0NBQ0MsU0FBUztDQUNULFdBQVc7Q0FDWCxZQUFZO0NBRVosbUJBQW1CO0NBRW5CLHVCQUF1QjtDQUN2QiwwQ0FBMEM7QUFDM0M7O0FBRUE7Q0FDQyxTQUFTO0NBQ1QsWUFBWTtDQUNaLGFBQWE7Q0FFYixvQkFBb0I7QUFDckI7O0FBV0E7Q0FDQztFQUNDLHdCQUF3QjtDQUN6QjtDQUNBO0VBQ0MsNENBQTRDO0NBQzdDO0FBQ0QiLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBmb250LWZhY2Uge1xuXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybyc7XG5cdGZvbnQtc3R5bGU6IG5vcm1hbDtcblx0Zm9udC13ZWlnaHQ6IDIwMDtcblx0c3JjOiB1cmwoaHR0cHM6Ly9mb250cy5nc3RhdGljLmNvbS9zL3NvdXJjZXNhbnNwcm8vdjE0LzZ4S3lkU0JZS2NTVi1MQ29lUXFmWDFSWU9vM2k5NF93bHhkci50dGYpIGZvcm1hdCgndHJ1ZXR5cGUnKTtcbn1cblxuQGZvbnQtZmFjZSB7XG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJztcblx0Zm9udC1zdHlsZTogbm9ybWFsO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRzcmM6IHVybChodHRwczovL2ZvbnRzLmdzdGF0aWMuY29tL3Mvc291cmNlc2Fuc3Byby92MTQvNnhLeWRTQllLY1NWLUxDb2VRcWZYMVJZT28zaWs0endseGRyLnR0ZikgZm9ybWF0KCd0cnVldHlwZScpO1xufVxuXG4qIHtcblx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcblx0bWFyZ2luOiAwO1xuXHRwYWRkaW5nOiAwO1xuXHRmb250LXdlaWdodDogMzAwO1xuXHRmb250LWZhbWlseTogJ1NvdXJjZSBTYW5zIFBybycsIHNhbnMtc2VyaWY7XG5cdGNvbG9yOiB3aGl0ZTtcblx0b3ZlcmZsb3c6IGhpZGRlbjtcbn1cblxuYm9keSB7XG5cdGZvbnQtZmFtaWx5OiAnU291cmNlIFNhbnMgUHJvJywgc2Fucy1zZXJpZjtcblx0Y29sb3I6IHdoaXRlO1xuXHRmb250LXdlaWdodDogMzAwO1xufVxuXG4jd3JvbmdfX3Bhc3N3b3JkIHtcblx0Y29sb3I6IHJlZDtcbn1cblxuLndyYXBwZXItbmV3LmZvcm0tc3VjY2VzcyAuY29udGFpbmVyLW5ldyBoMSB7XG5cdHRyYW5zZm9ybTogdHJhbnNsYXRlWSg4NXB4KTtcbn1cblxuLmNvbnRhaW5lci1uZXcge1xuXHRwYWRkaW5nLXRvcDogMTB2aDtcblx0ei1pbmRleDogNTtcblx0bWF4LXdpZHRoOiA3MDBweDtcblx0bWFyZ2luOiAwIGF1dG87XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmNvbnRhaW5lci1uZXcgaDEge1xuXHRmb250LXNpemU6IGNhbGMoMzBweCArIDFyZW0pO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAxcztcblx0Lypcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGVhc2UtaW4tcHV0O1xuXHQgKi9cblx0Zm9udC13ZWlnaHQ6IDIwMDtcbn1cblxuZm9ybSB7XG5cdHBhZGRpbmc6IDIwcHggMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbmZvcm0gaW5wdXQge1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRvdXRsaW5lOiAwO1xuXHRib3JkZXI6IDFweCBzb2xpZCByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCk7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcblx0d2lkdGg6IDI1MHB4O1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcblx0bWFyZ2luOiAwIGF1dG8gMTBweCBhdXRvO1xuXHRkaXNwbGF5OiBibG9jaztcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmZvcm0gaW5wdXQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA0NywgNDcsIDAuNCk7XG59XG5cbmZvcm0gaW5wdXQ6Zm9jdXMge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQ3LCA0NywgNDcsIDAuNCk7XG5cdHdpZHRoOiAyNjBweDtcblx0Y29sb3I6ICNmZmZmZmY7XG59XG5cbmZvcm0gYnV0dG9uIHtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0b3V0bGluZTogMDtcblx0YmFja2dyb3VuZC1jb2xvcjogIzQ5ZDQ5Njtcblx0Ym9yZGVyOiAwO1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdGNvbG9yOiAjMDAwMDAwO1xuXHRib3JkZXItcmFkaXVzOiAzcHg7XG5cdHdpZHRoOiAyNTBweDtcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMjVzO1xufVxuXG5mb3JtIGJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzY2U1YWQ7XG5cdHdpZHRoOiAyNjBweDtcbn1cblxuLnJlZ2lzdGVyIHtcblx0bWFyZ2luLXRvcDogNXB4O1xuXHRkaXNwbGF5OiBibG9jaztcblx0Y3Vyc29yOiBwb2ludGVyO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5yZWdpc3Rlcjpob3ZlciB7XG5cdGNvbG9yOiAjNTNlM2E2O1xufVxuXG4uYmctYnViYmxlcyB7XG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcblx0dG9wOiAwO1xuXHRsZWZ0OiAwO1xuXHR3aWR0aDogMTAwJTtcblx0aGVpZ2h0OiAxMDAlO1xuXHR6LWluZGV4OiAtMTtcbn1cblxuLmJnLWJ1YmJsZXMgbGkge1xuXHRwb3NpdGlvbjogYWJzb2x1dGU7XG5cdGxpc3Qtc3R5bGU6IG5vbmU7XG5cdGRpc3BsYXk6IGJsb2NrO1xuXHR3aWR0aDogNDBweDtcblx0aGVpZ2h0OiA0MHB4O1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMTUpO1xuXHRib3R0b206IC0xNjBweDtcblx0LXdlYmtpdC1hbmltYXRpb246IHNxdWFyZSAyNXMgaW5maW5pdGU7XG5cdGFuaW1hdGlvbjogc3F1YXJlIDI1cyBpbmZpbml0ZTtcblx0dHJhbnNpdGlvbi10aW1pbmctZnVuY3Rpb246IGxpbmVhcjtcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDEpIHtcblx0bGVmdDogMTAlO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMikge1xuXHRsZWZ0OiAyMCU7XG5cdHdpZHRoOiA4MHB4O1xuXHRoZWlnaHQ6IDgwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAycztcblx0YW5pbWF0aW9uLWRlbGF5OiAycztcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDE3cztcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiAxN3M7XG59XG5cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCgzKSB7XG5cdGxlZnQ6IDI1JTtcblx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDRzO1xuXHRhbmltYXRpb24tZGVsYXk6IDRzO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNCkge1xuXHRsZWZ0OiA0MCU7XG5cdHdpZHRoOiA2MHB4O1xuXHRoZWlnaHQ6IDYwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWR1cmF0aW9uOiAyMnM7XG5cdGFuaW1hdGlvbi1kdXJhdGlvbjogMjJzO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMjUpO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoNSkge1xuXHRsZWZ0OiA3MCU7XG59XG5cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg2KSB7XG5cdGxlZnQ6IDgwJTtcblx0d2lkdGg6IDEyMHB4O1xuXHRoZWlnaHQ6IDEyMHB4O1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogM3M7XG5cdGFuaW1hdGlvbi1kZWxheTogM3M7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC4yKTtcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDcpIHtcblx0bGVmdDogMzIlO1xuXHR3aWR0aDogMTYwcHg7XG5cdGhlaWdodDogMTYwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiA3cztcblx0YW5pbWF0aW9uLWRlbGF5OiA3cztcbn1cblxuLmJnLWJ1YmJsZXMgbGk6bnRoLWNoaWxkKDgpIHtcblx0bGVmdDogNTUlO1xuXHR3aWR0aDogMjBweDtcblx0aGVpZ2h0OiAyMHB4O1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kZWxheTogMTVzO1xuXHRhbmltYXRpb24tZGVsYXk6IDE1cztcblx0LXdlYmtpdC1hbmltYXRpb24tZHVyYXRpb246IDQwcztcblx0YW5pbWF0aW9uLWR1cmF0aW9uOiA0MHM7XG59XG5cbi5iZy1idWJibGVzIGxpOm50aC1jaGlsZCg5KSB7XG5cdGxlZnQ6IDI1JTtcblx0d2lkdGg6IDEwcHg7XG5cdGhlaWdodDogMTBweDtcblx0LXdlYmtpdC1hbmltYXRpb24tZGVsYXk6IDJzO1xuXHRhbmltYXRpb24tZGVsYXk6IDJzO1xuXHQtd2Via2l0LWFuaW1hdGlvbi1kdXJhdGlvbjogNDBzO1xuXHRhbmltYXRpb24tZHVyYXRpb246IDQwcztcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjMpO1xufVxuXG4uYmctYnViYmxlcyBsaTpudGgtY2hpbGQoMTApIHtcblx0bGVmdDogOTAlO1xuXHR3aWR0aDogMTYwcHg7XG5cdGhlaWdodDogMTYwcHg7XG5cdC13ZWJraXQtYW5pbWF0aW9uLWRlbGF5OiAxMXM7XG5cdGFuaW1hdGlvbi1kZWxheTogMTFzO1xufVxuXG5ALXdlYmtpdC1rZXlmcmFtZXMgc3F1YXJlIHtcblx0MCUge1xuXHRcdHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwKTtcblx0fVxuXHQxMDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTcwMHB4KSByb3RhdGUoNjAwZGVnKTtcblx0fVxufVxuXG5Aa2V5ZnJhbWVzIHNxdWFyZSB7XG5cdDAlIHtcblx0XHR0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7XG5cdH1cblx0MTAwJSB7XG5cdFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVZKC03MDBweCkgcm90YXRlKDYwMGRlZyk7XG5cdH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "oOes":
/*!*******************************************!*\
  !*** ./src/app/reset/reset.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\nbutton {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tbackground-color: #49d496;\n\tborder: 0;\n\tpadding: 10px 15px;\n\tcolor: #000000;\n\tborder-radius: 3px;\n\twidth: 250px;\n\tcursor: pointer;\n\tfont-size: 18px;\n\ttransition-duration: 0.25s;\n}\n\nbutton:hover {\n\tbackground-color: #3ce5ad;\n}\n\n.container {\n\toverflow: hidden;\n\tmargin-top: 25vh;\n\tdisplay: grid;\n\tplace-items: center;\n}\n\ninput {\n\tpadding: 20px 0;\n\tposition: relative;\n\tz-index: 2;\n\tcolor: white;\n}\n\ninput {\n\t-webkit-appearance: none;\n\t   -moz-appearance: none;\n\t        appearance: none;\n\toutline: 0;\n\tborder: 1px solid rgba(255, 255, 255, 0.4);\n\tbackground-color: rgba(255, 255, 255, 0.2);\n\twidth: 250px;\n\tborder-radius: 3px;\n\tpadding: 10px 15px;\n\tmargin: 0 0 10px 0;\n\tdisplay: grid;\n\ttext-align: center;\n\tfont-size: 18px;\n\tcolor: white;\n\ttransition-duration: 0.25s;\n\tfont-weight: 300;\n}\n\ninput:hover {\n\tbackground-color: rgba(47, 47, 47, 0.4);\n}\n\ninput:focus {\n\tbackground-color: rgba(47, 47, 47, 0.4);\n\tcolor: #ffffff;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLHlCQUF5QjtDQUN6QixTQUFTO0NBQ1Qsa0JBQWtCO0NBQ2xCLGNBQWM7Q0FDZCxrQkFBa0I7Q0FDbEIsWUFBWTtDQUNaLGVBQWU7Q0FDZixlQUFlO0NBQ2YsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MseUJBQXlCO0FBQzFCOztBQUVBO0NBQ0MsZ0JBQWdCO0NBQ2hCLGdCQUFnQjtDQUNoQixhQUFhO0NBQ2IsbUJBQW1CO0FBQ3BCOztBQUVBO0NBQ0MsZUFBZTtDQUNmLGtCQUFrQjtDQUNsQixVQUFVO0NBQ1YsWUFBWTtBQUNiOztBQUVBO0NBQ0Msd0JBQWdCO0lBQWhCLHFCQUFnQjtTQUFoQixnQkFBZ0I7Q0FDaEIsVUFBVTtDQUNWLDBDQUEwQztDQUMxQywwQ0FBMEM7Q0FDMUMsWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixrQkFBa0I7Q0FDbEIsa0JBQWtCO0NBQ2xCLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIsZUFBZTtDQUNmLFlBQVk7Q0FDWiwwQkFBMEI7Q0FDMUIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsdUNBQXVDO0FBQ3hDOztBQUVBO0NBQ0MsdUNBQXVDO0NBQ3ZDLGNBQWM7QUFDZiIsImZpbGUiOiJyZXNldC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXG5idXR0b24ge1xuXHRhcHBlYXJhbmNlOiBub25lO1xuXHRvdXRsaW5lOiAwO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNDlkNDk2O1xuXHRib3JkZXI6IDA7XG5cdHBhZGRpbmc6IDEwcHggMTVweDtcblx0Y29sb3I6ICMwMDAwMDA7XG5cdGJvcmRlci1yYWRpdXM6IDNweDtcblx0d2lkdGg6IDI1MHB4O1xuXHRjdXJzb3I6IHBvaW50ZXI7XG5cdGZvbnQtc2l6ZTogMThweDtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG59XG5cbmJ1dHRvbjpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICMzY2U1YWQ7XG59XG5cbi5jb250YWluZXIge1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRtYXJnaW4tdG9wOiAyNXZoO1xuXHRkaXNwbGF5OiBncmlkO1xuXHRwbGFjZS1pdGVtczogY2VudGVyO1xufVxuXG5pbnB1dCB7XG5cdHBhZGRpbmc6IDIwcHggMDtcblx0cG9zaXRpb246IHJlbGF0aXZlO1xuXHR6LWluZGV4OiAyO1xuXHRjb2xvcjogd2hpdGU7XG59XG5cbmlucHV0IHtcblx0YXBwZWFyYW5jZTogbm9uZTtcblx0b3V0bGluZTogMDtcblx0Ym9yZGVyOiAxcHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjQpO1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMik7XG5cdHdpZHRoOiAyNTBweDtcblx0Ym9yZGVyLXJhZGl1czogM3B4O1xuXHRwYWRkaW5nOiAxMHB4IDE1cHg7XG5cdG1hcmdpbjogMCAwIDEwcHggMDtcblx0ZGlzcGxheTogZ3JpZDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHRmb250LXNpemU6IDE4cHg7XG5cdGNvbG9yOiB3aGl0ZTtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogMC4yNXM7XG5cdGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbmlucHV0OmhvdmVyIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSg0NywgNDcsIDQ3LCAwLjQpO1xufVxuXG5pbnB1dDpmb2N1cyB7XG5cdGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDcsIDQ3LCA0NywgMC40KTtcblx0Y29sb3I6ICNmZmZmZmY7XG59XG4iXX0= */");

/***/ }),

/***/ "pXWP":
/*!**********************************************!*\
  !*** ./src/app/entries/entries.component.ts ***!
  \**********************************************/
/*! exports provided: EntriesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EntriesComponent", function() { return EntriesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_entries_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./entries.component.html */ "XcVX");
/* harmony import */ var _entries_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./entries.component.css */ "lYKh");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "5+WD");







let EntriesComponent = class EntriesComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL_ENTRY = 'https://backend.yap.dragoncave.dev/entry';
        this.ROOT_URL_ENTRY_ = 'https://backend.yap.dragoncave.dev/entry/';
        this.ROOT_URL_BOARDS_ = 'https://backend.yap.dragoncave.dev/boards/';
        this.entry = {
            dueDate: 0,
            title: 'No boards available or the server is offline',
            description: '',
            createDate: 0,
            entryID: 0,
        };
        this.entries = [
            {
                entryID: 0,
                createDate: 0,
                dueDate: 0,
                title: 'No Entries found!',
                description: 'Either the server is offline, or you cant see any entries yet.'
            }
        ];
        this.runonce = true;
        this.clickID = 0;
        this.showEdit = false;
        this.showCreate = false;
        this.boardSelect = this.cookieService.get('activeBoard');
        this.locale = 0;
        this.toggleSort = true;
    }
    // tslint:enable:max-line-length
    drop(event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_6__["moveItemInArray"])(this.entries, event.previousIndex, event.currentIndex);
        this.showEdit = false;
    }
    sortByDueDate() {
        if (this.toggleSort) {
            this.entries.sort((a, b) => (b.dueDate > a.dueDate) ? 1 : -1);
        }
        else {
            this.entries.sort((a, b) => (a.dueDate > b.dueDate) ? 1 : -1);
        }
        this.toggleSort = !this.toggleSort;
    }
    sortByTitle() {
        if (this.toggleSort) {
            this.entries.sort((a, b) => (b.title > a.title) ? 1 : -1);
        }
        else {
            this.entries.sort((a, b) => (a.title > b.title) ? 1 : -1);
        }
        this.toggleSort = !this.toggleSort;
    }
    sortByCreateDate() {
        if (this.toggleSort) {
            this.entries.sort((a, b) => (b.createDate > a.createDate) ? 1 : -1);
        }
        else {
            this.entries.sort((a, b) => (a.createDate > b.createDate) ? 1 : -1);
        }
        this.toggleSort = !this.toggleSort;
    }
    toggleCreate() {
        this.showCreate = !this.showCreate;
    }
    toggleEdit() {
        this.showEdit = !this.showEdit;
    }
    getEntryByID(i) {
        // tslint:disable-next-line:no-shadowed-variable
        const id = this.availableEntries[i];
        let header0 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        header0 = header0.append('Token', this.cookieService.get('token'));
        this.http.get(this.ROOT_URL_ENTRY + '/' + id, { headers: header0 })
            .subscribe(response => {
            let pos;
            if (this.runonce) {
                pos = 0;
                this.runonce = false;
            }
            else {
                pos = this.entries.length;
            }
            this.placeholder = response;
            this.entries[pos] = {
                entryID: this.placeholder.entryID,
                createDate: this.placeholder.createDate,
                dueDate: this.placeholder.dueDate,
                title: this.placeholder.title,
                description: this.placeholder.description
            };
            this.sortByTitle();
        }, (error) => {
            console.error(error);
        });
    }
    getExistingEntries() {
        if (this.boardSelect !== undefined && this.boardSelect !== '') {
            let header1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
            header1 = header1.append('Token', this.cookieService.get('token'));
            this.http.get(this.ROOT_URL_BOARDS_ + this.boardSelect + '/entries', { headers: header1 })
                .subscribe(response => {
                // @ts-ignore
                this.availableEntries = response;
                this.getAllEntries();
            }, (error) => {
                console.error(error);
            });
        }
    }
    getAllEntries() {
        for (let i = 0; i < this.availableEntries.length; i++) {
            this.getEntryByID(i);
        }
    }
    putEntry(title, description, dueDate) {
        let header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
        header2 = header2.append('Token', this.cookieService.get('token'));
        this.entries[this.clickID].dueDate = +new Date(dueDate);
        if (title !== '') {
            this.entries[this.clickID].title = title;
        }
        if (description !== '') {
            this.entries[this.clickID].description = description;
        }
        // tslint:disable-next-line:max-line-length
        this.http.put(this.ROOT_URL_ENTRY_ + this.entries[this.clickID].entryID, this.entries[this.clickID], { headers: header2 }) // send the POST to create the user account
            .subscribe((res) => {
            console.log(res);
            this.showEdit = false;
            window.location.reload();
        }, (error) => {
            console.error(error);
        });
    }
    postEntry(title, description, dueDate) {
        let header2 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
        header2 = header2.append('Token', this.cookieService.get('token'));
        this.entry.title = title;
        this.entry.description = description;
        // tslint:disable-next-line:radix
        this.entry.dueDate = +new Date(dueDate);
        this.http.post(this.ROOT_URL_BOARDS_ + this.boardSelect + '/entry', this.entry, { headers: header2 })
            .subscribe((res) => {
            console.log(res);
            this.showCreate = false;
            this.entries[this.entries.length] = this.entry;
            window.location.reload();
        }, (error) => {
            console.error(error);
        });
    }
    deleteEntry() {
        let header = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define the sent content to being a Json object
        header = header.append('Token', this.cookieService.get('token'));
        this.http.delete(this.ROOT_URL_ENTRY + '/' + this.entries[this.clickID].entryID, { headers: header })
            .subscribe((res) => {
            console.log(res);
            location.reload();
        });
    }
    handleClickCreate($event) {
        // @ts-ignore
        this.locale = $event.target.id;
        // tslint:disable-next-line:triple-equals
        this.clickID = (this.entries.findIndex(x => x.entryID == this.locale));
        this.showCreate = true;
    }
    handleClickEdit($event) {
        if (this.entries[0].entryID !== 0) {
            // @ts-ignore
            // tslint:disable-next-line:radix
            const locale = $event.target.id;
            this.locale = locale;
            // tslint:disable-next-line:triple-equals
            this.clickID = (this.entries.findIndex(x => x.entryID == locale));
            if (this.entries[this.clickID].dueDate > new Date().getTime()) {
                this.timeleft = new Date(this.entries[this.clickID].dueDate - new Date().getTime()).getDate() - 1;
            }
            else {
                this.timeleft = '0';
            }
            // @ts-ignore
            this.showEdit = true;
            if (this.dragging) {
                this.dragging = false;
                return;
            }
        }
    }
    convertToLocal() {
        const input = this.entries[this.clickID].dueDate;
        if (input === 0) {
            return 'No due date';
        }
        return new Date(input);
    }
    ngOnInit() {
        this.getExistingEntries();
    }
};
EntriesComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
EntriesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-datatabletest',
        template: _raw_loader_entries_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_entries_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], EntriesComponent);



/***/ }),

/***/ "sMaH":
/*!********************************************!*\
  !*** ./src/app/poster/poster.component.ts ***!
  \********************************************/
/*! exports provided: PosterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PosterComponent", function() { return PosterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_poster_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./poster.component.html */ "Jy7l");
/* harmony import */ var _poster_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poster.component.css */ "dDeW");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");






let PosterComponent = class PosterComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user';
        this.packageobject = {
            username: '',
            emailAddress: '',
            password: ''
        };
    }
    doPOST() {
        this.token = this.cookieService.get('token');
        let headerS = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json');
        headerS = headerS.append('Token', this.token);
        this.http.post(this.ROOT_URL_USR, this.packageobject, { headers: headerS })
            .subscribe((error) => {
            console.error(error);
        });
    }
    doUsername(userinput) {
        console.log('Writing: ' + userinput + ' over ' + this.packageobject.username);
        this.packageobject.username = userinput;
        console.log(this.packageobject);
    }
    doEmail(emailinput) {
        console.log('Writing: ' + emailinput + ' over ' + this.packageobject.emailAddress);
        this.packageobject.emailAddress = emailinput;
        console.log(this.packageobject);
    }
    doPassword(passwordinput) {
        console.log('Writing: ' + passwordinput + ' over ' + this.packageobject.password);
        this.packageobject.password = passwordinput;
        console.log(this.packageobject);
    }
    ngOnInit() {
    }
};
PosterComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
PosterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-poster',
        template: _raw_loader_poster_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_poster_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], PosterComponent);



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
/* harmony import */ var _info_info_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./info/info.component */ "XSv0");
/* harmony import */ var _GETtest_GETtest_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./GETtest/GETtest.component */ "96dj");
/* harmony import */ var _poster_poster_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./poster/poster.component */ "sMaH");
/* harmony import */ var _roller_roller_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./roller/roller.component */ "a8yv");
/* harmony import */ var _usermanagement_usermanagement_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./usermanagement/usermanagement.component */ "/CHZ");
/* harmony import */ var _tokentester_tokentester_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tokentester/tokentester.component */ "Guj5");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "vtpD");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./profile/profile.component */ "W6KJ");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./register/register.component */ "1W4x");
/* harmony import */ var _entries_entries_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./entries/entries.component */ "pXWP");
/* harmony import */ var _boards_boards_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./boards/boards.component */ "0Xa6");
/* harmony import */ var _reset_reset_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./reset/reset.component */ "V+94");
/* harmony import */ var _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./forgot/forgot.component */ "QoDe");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./main/main.component */ "wlho");
/* harmony import */ var _legacy_legacy_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./legacy/legacy.component */ "5VkC");


















const routes = [
    {
        path: '',
        component: _main_main_component__WEBPACK_IMPORTED_MODULE_16__["MainComponent"]
    },
    {
        path: 'gettester',
        component: _GETtest_GETtest_component__WEBPACK_IMPORTED_MODULE_4__["GETtestComponent"]
    },
    {
        path: 'info',
        component: _info_info_component__WEBPACK_IMPORTED_MODULE_3__["InfoComponent"]
    },
    {
        path: 'poster',
        component: _poster_poster_component__WEBPACK_IMPORTED_MODULE_5__["PosterComponent"]
    },
    {
        path: 'roller',
        component: _roller_roller_component__WEBPACK_IMPORTED_MODULE_6__["RollerComponent"]
    },
    {
        path: 'tokentester',
        component: _tokentester_tokentester_component__WEBPACK_IMPORTED_MODULE_8__["TokentesterComponent"]
    },
    {
        path: 'usermanagement',
        component: _usermanagement_usermanagement_component__WEBPACK_IMPORTED_MODULE_7__["UsermanagementComponent"]
    },
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"]
    },
    {
        path: 'profile',
        component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_10__["ProfileComponent"]
    },
    {
        path: 'register',
        component: _register_register_component__WEBPACK_IMPORTED_MODULE_11__["RegisterComponent"]
    },
    {
        path: 'entries',
        component: _entries_entries_component__WEBPACK_IMPORTED_MODULE_12__["EntriesComponent"]
    },
    {
        path: 'boards',
        component: _boards_boards_component__WEBPACK_IMPORTED_MODULE_13__["BoardsComponent"]
    },
    {
        path: 'reset',
        component: _reset_reset_component__WEBPACK_IMPORTED_MODULE_14__["ResetComponent"]
    },
    {
        path: 'forgot',
        component: _forgot_forgot_component__WEBPACK_IMPORTED_MODULE_15__["ForgotComponent"]
    },
    {
        path: 'legacy',
        component: _legacy_legacy_component__WEBPACK_IMPORTED_MODULE_17__["LegacyComponent"]
    }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "vtpD":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./login.component.html */ "in5m");
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.component.css */ "n7sk");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var ngx_cookie__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie */ "4pnn");






let LoginComponent = class LoginComponent {
    constructor(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.ROOT_URL_TKN = 'https://backend.yap.dragoncave.dev/security/token';
        this.ROOT_URL_USR = 'https://backend.yap.dragoncave.dev/user';
        this.packageobject = {
            emailAddress: '',
            password: ''
        };
        this.message = 'Welcome';
        this.loginmessage = 'Login';
        this.showWrongPassword = false;
    }
    doPost(email, password) {
        this.packageobject.emailAddress = email;
        this.packageobject.password = password;
        this.showWrongPassword = false;
        if (this.packageobject.emailAddress !== '' && this.packageobject.password !== '') {
            const header0 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set('Content-Type', 'application/json'); // define sent data to be JSON object
            this.http.post(this.ROOT_URL_TKN, this.packageobject, { headers: header0, responseType: 'text' }) // getting login token
                .subscribe(res => {
                this.cookieService.removeAll();
                this.cookieService.put('token', res);
                this.getUdata();
            }, (error) => {
                console.error(error);
                if (error.status === 403) {
                    this.showWrongPassword = true;
                    // @ts-ignore
                    document.getElementById('password__field').nodeValue = '';
                }
            });
        }
        else {
            console.error('One or more input fields were left empty');
            console.log(this.cookieService.get('token'));
            if (this.cookieService.get('token') !== undefined) {
                location.reload();
            }
            this.cookieService.removeAll();
        }
    }
    getUdata() {
        // tslint:disable-next-line:prefer-const
        let header1 = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]();
        header1 = header1.append('Token', this.cookieService.get('token'));
        this.http.get(this.ROOT_URL_USR, { headers: header1 })
            .subscribe(response => {
            this.cookieService.putObject('Udata', response);
            window.location.href = '/profile';
        }, (error) => {
            console.error(error);
        });
    }
    welcomebackmessage() {
        if (this.cookieService.getObject('Udata') !== undefined) {
            let tempmsg;
            tempmsg = this.cookieService.getObject('Udata');
            this.message = 'Welcome back ' + tempmsg.username;
        }
        if (this.cookieService.getObject('Udata') !== undefined) {
            this.loginmessage = 'Logout and Change user';
        }
    }
    ngOnInit() {
        this.welcomebackmessage();
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: ngx_cookie__WEBPACK_IMPORTED_MODULE_5__["CookieService"] }
];
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], LoginComponent);



/***/ }),

/***/ "wlho":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "mrSG");
/* harmony import */ var _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! raw-loader!./main.component.html */ "40DX");
/* harmony import */ var _main_component_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main.component.css */ "Aqmg");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "fXoL");




let MainComponent = class MainComponent {
    constructor() {
    }
    ngOnInit() {
    }
};
MainComponent.ctorParameters = () => [];
MainComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main',
        template: _raw_loader_main_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_component_css__WEBPACK_IMPORTED_MODULE_2__["default"]]
    })
], MainComponent);



/***/ }),

/***/ "xwfu":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\n\t<div class='main'>\n\t\t<div class='main__header'>\n\t\t\t<h2>My profile</h2>\n\t\t</div>\n\t\t<div class=\"pfp\">\n\t\t\t\t<img src=\"{{this.getPFP()}}\"  onerror=\"if (this.src != 'error.jpg') this.src = 'https://dragoncave.dev:42069/cdn/default_profile_picture.png';\" alt=\"Your profile picture if you had one\">\n\t\t\t<!--\n\t\t\t<div class=\"pfp__options\">\n\t\t\t\t<button (click)=\"postPFP(image.value)\" class='btn main__save-button'>Save</button>\n\t\t\t\t<input #image type=\"file\" accept=\"\" onchange=\"console.log(event.target.files)\">\n\t\t\t</div>\n\t\t\t-->\n\t\t</div>\n\t\t<div class='main__content'>\n\t\t\t<div class='main__settings-form'>\n\t\t\t\t<div class='main__header'>\n\t\t\t\t\t<h3>General Information</h3>\n\t\t\t\t</div>\n\t\t\t\t<form action='#' method='post'>\n\t\t\t\t\t<label class='main__input-label'>Username:</label>\n\t\t\t\t\t<input #username class='main__input' placeholder='{{this.packageobject.username}}' type='text'>\n\t\t\t\t\t<label class='main__input-label'>Your e-mail:</label>\n\t\t\t\t\t<input #email class='main__input' placeholder='{{this.packageobject.emailAddress}}'\n\t\t\t\t\t\t   type='text'>\n\t\t\t\t\t<button class='btn main__save-button'\n\t\t\t\t\t\t\t(click)=\"usrchange(username.value, email.value, oldPassword.value)\">Save\n\t\t\t\t\t</button>\n\n\t\t\t\t\t<div class='main__header'>\n\t\t\t\t\t\t<h3>Change Password</h3>\n\t\t\t\t\t</div>\n\n\t\t\t\t\t<label class='main__input-label'>Password:</label>\n\t\t\t\t\t<input #oldPassword class='main__input' placeholder='Old password' type='password'>\n\t\t\t\t\t<input #newPassword class='main__input' placeholder='New password (only if you wish to change it)'\n\t\t\t\t\t\t   type='password'>\n\t\t\t\t</form>\n\t\t\t\t<div>\n\t\t\t\t\t<button class='btn main__save-button' id=\"Save\"\n\t\t\t\t\t\t\t(click)=\"pwdchange(oldPassword.value, newPassword.value)\">Save\n\t\t\t\t\t</button>\n\t\t\t\t\t<button class='btn main__logout-button' (click)=\"logout()\">Logout</button>\n\t\t\t\t</div>\n\t\t\t\t<!--\n\t\t\t\t<button class='btn main__logout-button' (click)=\"deleteUser(oldPassword.value)\">Delete account</button>\n\t\t\t\t-->\n\n\t\t\t</div>\n\t\t</div>\n\t</div>\n</div>\n\n");

/***/ }),

/***/ "y8XX":
/*!*********************************************!*\
  !*** ./src/app/boards/boards.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("* {\n\tcolor: #FFFFFF;\n\toverflow: hidden;\n}\n\nlabel {\n\tfont-size: 0.75rem;\n\tmargin-bottom: 0;\n}\n\n.sorting__container {\n\tdisplay: grid;\n\tjustify-content: center;\n\tgrid-auto-flow: column;\n}\n\n.button__sort {\n\tbackground-color: #53e3a6 !important;\n\tborder: black;\n\tcolor: black;\n\tpadding: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline;\n\tfont-size: 10pt;\n\twidth: 100%;\n}\n\n.sorting__container {\n\tbackground-color: #53e3a6 ;\n}\n\n.due__text {\n\tdisplay: grid;\n\tjustify-content: center;\n\tgrid-auto-flow: column;\n\tfont-size: 10pt;\n}\n\n.button__addEntry {\n\tbackground-color: #53e3a6 !important;\n\tborder: none;\n\tcolor: black;\n\tpadding: 10px;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline;\n\twidth: 100%;\n\tfont-size: 15px;\n}\n\n.button__editEntry {\n\tbackground-color: rgba(0, 0, 0, 0);\n\tborder: none;\n\tcolor: rgba(0, 0, 0, 0);\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline;\n\twidth: 100%;\n\tfont-size: calc(12px + 0.5vw) !important;\n\tborder-radius: 4px;\n\ttransition: 0.25s;\n}\n\n.button__editEntry:hover {\n\tbackground-color: #53e3a6 !important;\n\tcolor: black;\n}\n\n.button__submit {\n\tbackground-color: #53e3a6 !important;\n\tborder: none;\n\tcolor: black;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline;\n\twidth: 7em;\n\tfont-size: 1rem;\n\tborder-radius: 4px;\n}\n\n.button__close {\n\tbackground-color: #e35353 !important;\n\tborder: none;\n\tcolor: black;\n\ttext-align: center;\n\ttext-decoration: none;\n\tdisplay: inline;\n\twidth: 7em;\n\tfont-size: 1rem;\n\tborder-radius: 4px;\n\tmargin-left: 1vw;\n}\n\n.item__container {\n\twidth: 40vw;\n\tmax-width: 500px;\n\tmargin: 1rem 0 0 20vw;\n}\n\n.item__list {\n\tborder: solid 1px #ccc;\n\tmin-height: 60px;\n\tbackground: #1c1c1c;\n\tborder-radius: 4px;\n\toverflow: hidden;\n\tdisplay: block;\n}\n\n.item__box {\n\tpadding: 20px 10px;\n\tborder-bottom: solid 1px #ccc;\n\tcolor: #FFFFFF;\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n\tbox-sizing: border-box;\n\tbackground: #818181;\n\tfont-size: 14px;\n\theight: calc(10px + 3vh);\n\tcursor: pointer;\n}\n\n.item__box:hover {\n\tbackground-color: #3ce5ad;\n}\n\n.cdk-drag-preview {\n\tbox-sizing: border-box;\n\tborder-radius: 4px;\n\tbox-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\n\t0 8px 10px 1px rgba(0, 0, 0, 0.14),\n\t0 3px 14px 2px rgba(0, 0, 0, 0.12);\n}\n\n.cdk-drag-placeholder {\n\topacity: 0;\n}\n\n/*\n.cdk-drag-animating {\n\ttransition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n */\n\n.item__box:last-child {\n\tborder: none;\n}\n\n.item__list.cdk-drop-list-dragging .item__box:not(.cdk-drag-placeholder) {\n\ttransition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\n}\n\n/* ------------------------------------------------------------------------------------------------------*/\n\n.container__popup {\n\tbackground-color: rgba(34, 34, 34, 0.69);\n\tborder-radius: 8px;\n\tbox-sizing: border-box;\n\toverflow: hidden;\n\t-webkit-backdrop-filter: blur(40px);\n\t        backdrop-filter: blur(40px);\n\tposition: fixed;\n\ttop: 5vh;\n\tleft: 20vw;\n\twidth: auto;\n\theight: auto;\n\tz-index: 1;\n\tbox-shadow: 0 0 1px rgba(0, 0, 0, 0.12),\n\t0 0 2px rgba(0, 0, 0, 0.12),\n\t0 0 4px rgba(0, 0, 0, 0.12),\n\t0 0 8px rgba(83, 227, 166, 0.12),\n\t0 0 16px rgba(83, 227, 166, 0.12);\n\ttransition: ease-in;\n\ttransition-duration: 0.2s;\n\n}\n\n.container__popup:hover {\n\tbox-shadow: 0 0 2px rgba(0, 0, 0, 0.12),\n\t0 0 4px rgba(0, 0, 0, 0.12),\n\t0 0 8px rgba(0, 0, 0, 0.12),\n\t0 0 16px rgba(83, 227, 166, 0.12),\n\t0 0 32px rgba(83, 227, 166, 0.12);\n}\n\n.buttons {\n\tdisplay: grid;\n\tjustify-content: center;\n\talign-content: center;\n\tgap: 10px;\n\tgrid-auto-flow: column;\n}\n\ninput {\n\tbackground-color: #282C34;\n\tcolor: #FFFFFF;\n\tborder-color: #1c1c1c;\n\tfont-size: 20pt;\n\tmargin-bottom: 5px;\n\tmargin-left: 10px;\n\tmargin-right: 10px;\n\twidth: 95%;\n}\n\ninput:hover {\n\tbackground-color: #282C34;\n}\n\ninput:focus, input:active {\n\tbackground-color: #282C34;\n\tborder-color: #1c1c1c;\n\tcolor: #FFFFFF;\n}\n\n.h2_popup {\n\ttext-align: center;\n\tpadding-top: 1vh;\n}\n\n.button__submit, .button__close, .button__delete {\n\tborder: none;\n\tcolor: black;\n\ttext-align: center;\n\ttext-decoration: none;\n\twidth: 10em;\n\tfont-size: calc(10px + (4px * 1rem));\n\tborder-radius: 4px;\n\tmargin: 10px 4px;\n}\n\n.button__submit {\n\tbackground-color: rgb(83, 227, 166) !important;\n\tbox-shadow: 0 0 5px rgb(83, 227, 166);\n\ttransition: ease-in;\n\ttransition-duration: .1s;\n}\n\n.button__submit:hover {\n\tbox-shadow: 0 0 10px rgb(83, 227, 166);\n}\n\n.button__close {\n\tbackground-color: #e38d53 !important;\n\tbox-shadow:  0 0 5px #e38d53;\n\ttransition: ease-in;\n\ttransition-duration: .1s;\n}\n\n.button__close:hover {\n\tbox-shadow:  0 0 10px #e38d53;\n}\n\n.button__delete {\n\tbackground-color: #e35353 !important;\n\tbox-shadow:  0 0 5px #e35353;\n\ttransition: ease-in;\n\ttransition-duration: .1s;\n}\n\n.button__delete:hover {\n\tbox-shadow:  0 0 10px #e35353;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJvYXJkcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0NBQ0MsY0FBYztDQUNkLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxhQUFhO0NBQ2IsdUJBQXVCO0NBQ3ZCLHNCQUFzQjtBQUN2Qjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxhQUFhO0NBQ2IsWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixlQUFlO0NBQ2YsV0FBVztBQUNaOztBQUVBO0NBQ0MsMEJBQTBCO0FBQzNCOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixzQkFBc0I7Q0FDdEIsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGFBQWE7Q0FDYixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixXQUFXO0NBQ1gsZUFBZTtBQUNoQjs7QUFFQTtDQUNDLGtDQUFrQztDQUNsQyxZQUFZO0NBQ1osdUJBQXVCO0NBQ3ZCLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLFdBQVc7Q0FDWCx3Q0FBd0M7Q0FDeEMsa0JBQWtCO0NBQ2xCLGlCQUFpQjtBQUNsQjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0FBQ2I7O0FBRUE7Q0FDQyxvQ0FBb0M7Q0FDcEMsWUFBWTtDQUNaLFlBQVk7Q0FDWixrQkFBa0I7Q0FDbEIscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixVQUFVO0NBQ1YsZUFBZTtDQUNmLGtCQUFrQjtBQUNuQjs7QUFFQTtDQUNDLG9DQUFvQztDQUNwQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsZUFBZTtDQUNmLFVBQVU7Q0FDVixlQUFlO0NBQ2Ysa0JBQWtCO0NBQ2xCLGdCQUFnQjtBQUNqQjs7QUFFQTtDQUNDLFdBQVc7Q0FDWCxnQkFBZ0I7Q0FDaEIscUJBQXFCO0FBQ3RCOztBQUVBO0NBQ0Msc0JBQXNCO0NBQ3RCLGdCQUFnQjtDQUNoQixtQkFBbUI7Q0FDbkIsa0JBQWtCO0NBQ2xCLGdCQUFnQjtDQUNoQixjQUFjO0FBQ2Y7O0FBRUE7Q0FDQyxrQkFBa0I7Q0FDbEIsNkJBQTZCO0NBQzdCLGNBQWM7Q0FDZCxhQUFhO0NBQ2IsbUJBQW1CO0NBQ25CLG1CQUFtQjtDQUNuQiw4QkFBOEI7Q0FDOUIsc0JBQXNCO0NBQ3RCLG1CQUFtQjtDQUNuQixlQUFlO0NBQ2Ysd0JBQXdCO0NBQ3hCLGVBQWU7QUFDaEI7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyxzQkFBc0I7Q0FDdEIsa0JBQWtCO0NBQ2xCOzttQ0FFa0M7QUFDbkM7O0FBRUE7Q0FDQyxVQUFVO0FBQ1g7O0FBRUE7Ozs7RUFJRTs7QUFFRjtDQUNDLFlBQVk7QUFDYjs7QUFFQTtDQUNDLHNEQUFzRDtBQUN2RDs7QUFFQSwwR0FBMEc7O0FBQzFHO0NBQ0Msd0NBQXdDO0NBQ3hDLGtCQUFrQjtDQUNsQixzQkFBc0I7Q0FDdEIsZ0JBQWdCO0NBQ2hCLG1DQUEyQjtTQUEzQiwyQkFBMkI7Q0FDM0IsZUFBZTtDQUNmLFFBQVE7Q0FDUixVQUFVO0NBQ1YsV0FBVztDQUNYLFlBQVk7Q0FDWixVQUFVO0NBQ1Y7Ozs7a0NBSWlDO0NBQ2pDLG1CQUFtQjtDQUNuQix5QkFBeUI7O0FBRTFCOztBQUVBO0NBQ0M7Ozs7a0NBSWlDO0FBQ2xDOztBQUVBO0NBQ0MsYUFBYTtDQUNiLHVCQUF1QjtDQUN2QixxQkFBcUI7Q0FDckIsU0FBUztDQUNULHNCQUFzQjtBQUN2Qjs7QUFHQTtDQUNDLHlCQUF5QjtDQUN6QixjQUFjO0NBQ2QscUJBQXFCO0NBQ3JCLGVBQWU7Q0FDZixrQkFBa0I7Q0FDbEIsaUJBQWlCO0NBQ2pCLGtCQUFrQjtDQUNsQixVQUFVO0FBQ1g7O0FBRUE7Q0FDQyx5QkFBeUI7QUFDMUI7O0FBRUE7Q0FDQyx5QkFBeUI7Q0FDekIscUJBQXFCO0NBQ3JCLGNBQWM7QUFDZjs7QUFHQTtDQUNDLGtCQUFrQjtDQUNsQixnQkFBZ0I7QUFDakI7O0FBRUE7Q0FDQyxZQUFZO0NBQ1osWUFBWTtDQUNaLGtCQUFrQjtDQUNsQixxQkFBcUI7Q0FDckIsV0FBVztDQUNYLG9DQUFvQztDQUNwQyxrQkFBa0I7Q0FDbEIsZ0JBQWdCO0FBQ2pCOztBQUVBO0NBQ0MsOENBQThDO0NBQzlDLHFDQUFxQztDQUNyQyxtQkFBbUI7Q0FDbkIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0Msc0NBQXNDO0FBQ3ZDOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLDRCQUE0QjtDQUM1QixtQkFBbUI7Q0FDbkIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCOztBQUVBO0NBQ0Msb0NBQW9DO0NBQ3BDLDRCQUE0QjtDQUM1QixtQkFBbUI7Q0FDbkIsd0JBQXdCO0FBQ3pCOztBQUVBO0NBQ0MsNkJBQTZCO0FBQzlCIiwiZmlsZSI6ImJvYXJkcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiKiB7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRvdmVyZmxvdzogaGlkZGVuO1xufVxuXG5sYWJlbCB7XG5cdGZvbnQtc2l6ZTogMC43NXJlbTtcblx0bWFyZ2luLWJvdHRvbTogMDtcbn1cblxuLnNvcnRpbmdfX2NvbnRhaW5lciB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xufVxuXG4uYnV0dG9uX19zb3J0IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzUzZTNhNiAhaW1wb3J0YW50O1xuXHRib3JkZXI6IGJsYWNrO1xuXHRjb2xvcjogYmxhY2s7XG5cdHBhZGRpbmc6IDEwcHg7XG5cdHRleHQtYWxpZ246IGNlbnRlcjtcblx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXHRkaXNwbGF5OiBpbmxpbmU7XG5cdGZvbnQtc2l6ZTogMTBwdDtcblx0d2lkdGg6IDEwMCU7XG59XG5cbi5zb3J0aW5nX19jb250YWluZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTNlM2E2IDtcbn1cblxuLmR1ZV9fdGV4dCB7XG5cdGRpc3BsYXk6IGdyaWQ7XG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xuXHRncmlkLWF1dG8tZmxvdzogY29sdW1uO1xuXHRmb250LXNpemU6IDEwcHQ7XG59XG5cbi5idXR0b25fX2FkZEVudHJ5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzUzZTNhNiAhaW1wb3J0YW50O1xuXHRib3JkZXI6IG5vbmU7XG5cdGNvbG9yOiBibGFjaztcblx0cGFkZGluZzogMTBweDtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGRpc3BsYXk6IGlubGluZTtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtc2l6ZTogMTVweDtcbn1cblxuLmJ1dHRvbl9fZWRpdEVudHJ5IHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcblx0Ym9yZGVyOiBub25lO1xuXHRjb2xvcjogcmdiYSgwLCAwLCAwLCAwKTtcblx0dGV4dC1hbGlnbjogY2VudGVyO1xuXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cdGRpc3BsYXk6IGlubGluZTtcblx0d2lkdGg6IDEwMCU7XG5cdGZvbnQtc2l6ZTogY2FsYygxMnB4ICsgMC41dncpICFpbXBvcnRhbnQ7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0dHJhbnNpdGlvbjogMC4yNXM7XG59XG5cbi5idXR0b25fX2VkaXRFbnRyeTpob3ZlciB7XG5cdGJhY2tncm91bmQtY29sb3I6ICM1M2UzYTYgIWltcG9ydGFudDtcblx0Y29sb3I6IGJsYWNrO1xufVxuXG4uYnV0dG9uX19zdWJtaXQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjNTNlM2E2ICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6IGJsYWNrO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0ZGlzcGxheTogaW5saW5lO1xuXHR3aWR0aDogN2VtO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcbn1cblxuLmJ1dHRvbl9fY2xvc2Uge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTM1MzUzICFpbXBvcnRhbnQ7XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6IGJsYWNrO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0ZGlzcGxheTogaW5saW5lO1xuXHR3aWR0aDogN2VtO1xuXHRmb250LXNpemU6IDFyZW07XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0bWFyZ2luLWxlZnQ6IDF2dztcbn1cblxuLml0ZW1fX2NvbnRhaW5lciB7XG5cdHdpZHRoOiA0MHZ3O1xuXHRtYXgtd2lkdGg6IDUwMHB4O1xuXHRtYXJnaW46IDFyZW0gMCAwIDIwdnc7XG59XG5cbi5pdGVtX19saXN0IHtcblx0Ym9yZGVyOiBzb2xpZCAxcHggI2NjYztcblx0bWluLWhlaWdodDogNjBweDtcblx0YmFja2dyb3VuZDogIzFjMWMxYztcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRkaXNwbGF5OiBibG9jaztcbn1cblxuLml0ZW1fX2JveCB7XG5cdHBhZGRpbmc6IDIwcHggMTBweDtcblx0Ym9yZGVyLWJvdHRvbTogc29saWQgMXB4ICNjY2M7XG5cdGNvbG9yOiAjRkZGRkZGO1xuXHRkaXNwbGF5OiBmbGV4O1xuXHRmbGV4LWRpcmVjdGlvbjogcm93O1xuXHRhbGlnbi1pdGVtczogY2VudGVyO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJhY2tncm91bmQ6ICM4MTgxODE7XG5cdGZvbnQtc2l6ZTogMTRweDtcblx0aGVpZ2h0OiBjYWxjKDEwcHggKyAzdmgpO1xuXHRjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pdGVtX19ib3g6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjM2NlNWFkO1xufVxuXG4uY2RrLWRyYWctcHJldmlldyB7XG5cdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG5cdGJvcmRlci1yYWRpdXM6IDRweDtcblx0Ym94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxuXHQwIDhweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuMTQpLFxuXHQwIDNweCAxNHB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpO1xufVxuXG4uY2RrLWRyYWctcGxhY2Vob2xkZXIge1xuXHRvcGFjaXR5OiAwO1xufVxuXG4vKlxuLmNkay1kcmFnLWFuaW1hdGluZyB7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cbiAqL1xuXG4uaXRlbV9fYm94Omxhc3QtY2hpbGQge1xuXHRib3JkZXI6IG5vbmU7XG59XG5cbi5pdGVtX19saXN0LmNkay1kcm9wLWxpc3QtZHJhZ2dpbmcgLml0ZW1fX2JveDpub3QoLmNkay1kcmFnLXBsYWNlaG9sZGVyKSB7XG5cdHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcbn1cblxuLyogLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKi9cbi5jb250YWluZXJfX3BvcHVwIHtcblx0YmFja2dyb3VuZC1jb2xvcjogcmdiYSgzNCwgMzQsIDM0LCAwLjY5KTtcblx0Ym9yZGVyLXJhZGl1czogOHB4O1xuXHRib3gtc2l6aW5nOiBib3JkZXItYm94O1xuXHRvdmVyZmxvdzogaGlkZGVuO1xuXHRiYWNrZHJvcC1maWx0ZXI6IGJsdXIoNDBweCk7XG5cdHBvc2l0aW9uOiBmaXhlZDtcblx0dG9wOiA1dmg7XG5cdGxlZnQ6IDIwdnc7XG5cdHdpZHRoOiBhdXRvO1xuXHRoZWlnaHQ6IGF1dG87XG5cdHotaW5kZXg6IDE7XG5cdGJveC1zaGFkb3c6IDAgMCAxcHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcblx0MCAwIDJweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuXHQwIDAgNHB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG5cdDAgMCA4cHggcmdiYSg4MywgMjI3LCAxNjYsIDAuMTIpLFxuXHQwIDAgMTZweCByZ2JhKDgzLCAyMjcsIDE2NiwgMC4xMik7XG5cdHRyYW5zaXRpb246IGVhc2UtaW47XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IDAuMnM7XG5cbn1cblxuLmNvbnRhaW5lcl9fcG9wdXA6aG92ZXIge1xuXHRib3gtc2hhZG93OiAwIDAgMnB4IHJnYmEoMCwgMCwgMCwgMC4xMiksXG5cdDAgMCA0cHggcmdiYSgwLCAwLCAwLCAwLjEyKSxcblx0MCAwIDhweCByZ2JhKDAsIDAsIDAsIDAuMTIpLFxuXHQwIDAgMTZweCByZ2JhKDgzLCAyMjcsIDE2NiwgMC4xMiksXG5cdDAgMCAzMnB4IHJnYmEoODMsIDIyNywgMTY2LCAwLjEyKTtcbn1cblxuLmJ1dHRvbnMge1xuXHRkaXNwbGF5OiBncmlkO1xuXHRqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcblx0YWxpZ24tY29udGVudDogY2VudGVyO1xuXHRnYXA6IDEwcHg7XG5cdGdyaWQtYXV0by1mbG93OiBjb2x1bW47XG59XG5cblxuaW5wdXQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM0O1xuXHRjb2xvcjogI0ZGRkZGRjtcblx0Ym9yZGVyLWNvbG9yOiAjMWMxYzFjO1xuXHRmb250LXNpemU6IDIwcHQ7XG5cdG1hcmdpbi1ib3R0b206IDVweDtcblx0bWFyZ2luLWxlZnQ6IDEwcHg7XG5cdG1hcmdpbi1yaWdodDogMTBweDtcblx0d2lkdGg6IDk1JTtcbn1cblxuaW5wdXQ6aG92ZXIge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyQzM0O1xufVxuXG5pbnB1dDpmb2N1cywgaW5wdXQ6YWN0aXZlIHtcblx0YmFja2dyb3VuZC1jb2xvcjogIzI4MkMzNDtcblx0Ym9yZGVyLWNvbG9yOiAjMWMxYzFjO1xuXHRjb2xvcjogI0ZGRkZGRjtcbn1cblxuXG4uaDJfcG9wdXAge1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHBhZGRpbmctdG9wOiAxdmg7XG59XG5cbi5idXR0b25fX3N1Ym1pdCwgLmJ1dHRvbl9fY2xvc2UsIC5idXR0b25fX2RlbGV0ZSB7XG5cdGJvcmRlcjogbm9uZTtcblx0Y29sb3I6IGJsYWNrO1xuXHR0ZXh0LWFsaWduOiBjZW50ZXI7XG5cdHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblx0d2lkdGg6IDEwZW07XG5cdGZvbnQtc2l6ZTogY2FsYygxMHB4ICsgKDRweCAqIDFyZW0pKTtcblx0Ym9yZGVyLXJhZGl1czogNHB4O1xuXHRtYXJnaW46IDEwcHggNHB4O1xufVxuXG4uYnV0dG9uX19zdWJtaXQge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoODMsIDIyNywgMTY2KSAhaW1wb3J0YW50O1xuXHRib3gtc2hhZG93OiAwIDAgNXB4IHJnYig4MywgMjI3LCAxNjYpO1xuXHR0cmFuc2l0aW9uOiBlYXNlLWluO1xuXHR0cmFuc2l0aW9uLWR1cmF0aW9uOiAuMXM7XG59XG5cbi5idXR0b25fX3N1Ym1pdDpob3ZlciB7XG5cdGJveC1zaGFkb3c6IDAgMCAxMHB4IHJnYig4MywgMjI3LCAxNjYpO1xufVxuXG4uYnV0dG9uX19jbG9zZSB7XG5cdGJhY2tncm91bmQtY29sb3I6ICNlMzhkNTMgIWltcG9ydGFudDtcblx0Ym94LXNoYWRvdzogIDAgMCA1cHggI2UzOGQ1Mztcblx0dHJhbnNpdGlvbjogZWFzZS1pbjtcblx0dHJhbnNpdGlvbi1kdXJhdGlvbjogLjFzO1xufVxuXG4uYnV0dG9uX19jbG9zZTpob3ZlciB7XG5cdGJveC1zaGFkb3c6ICAwIDAgMTBweCAjZTM4ZDUzO1xufVxuXG4uYnV0dG9uX19kZWxldGUge1xuXHRiYWNrZ3JvdW5kLWNvbG9yOiAjZTM1MzUzICFpbXBvcnRhbnQ7XG5cdGJveC1zaGFkb3c6ICAwIDAgNXB4ICNlMzUzNTM7XG5cdHRyYW5zaXRpb246IGVhc2UtaW47XG5cdHRyYW5zaXRpb24tZHVyYXRpb246IC4xcztcbn1cblxuLmJ1dHRvbl9fZGVsZXRlOmhvdmVyIHtcblx0Ym94LXNoYWRvdzogIDAgMCAxMHB4ICNlMzUzNTM7XG59XG4iXX0= */");

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
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map