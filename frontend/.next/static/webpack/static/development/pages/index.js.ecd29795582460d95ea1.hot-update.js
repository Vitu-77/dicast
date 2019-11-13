webpackHotUpdate("static\\development\\pages\\index.js",{

/***/ "./services/Api.js":
/*!*************************!*\
  !*** ./services/Api.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "./node_modules/js-cookie/src/js.cookie.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var jwt_simple__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jwt-simple */ "./node_modules/jwt-simple/index.js");
/* harmony import */ var jwt_simple__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(jwt_simple__WEBPACK_IMPORTED_MODULE_5__);






var Fetch = axios__WEBPACK_IMPORTED_MODULE_3___default.a.create({
  baseURL: 'http://localhost:3333'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  isAuthenticated: function () {
    var _isAuthenticated = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(setLoading, isLoginPage) {
      var token, SECRET, decodedToken, response, _isAuthenticated2;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              token = js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.get('DICAST_AUTH_TOKEN');

              if (!(token === undefined || token === null || token === '')) {
                _context.next = 5;
                break;
              }

              isLoginPage ? setLoading(false) : next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
              _context.next = 19;
              break;

            case 5:
              _context.prev = 5;
              SECRET = '26sys323nosi188xzSXa98ZAA';
              decodedToken = jwt_simple__WEBPACK_IMPORTED_MODULE_5___default.a.decode(token, SECRET, true);
              console.log({
                decodedToken: decodedToken
              });
              _context.next = 11;
              return axios__WEBPACK_IMPORTED_MODULE_3___default.a.get('http://localhost:3333/is_authenticated', {
                headers: {
                  decodedToken: decodedToken
                }
              });

            case 11:
              response = _context.sent;
              _isAuthenticated2 = response.data.isAuthenticated;

              if (!_isAuthenticated2) {
                if (!isLoginPage) {
                  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');
                } else {
                  setLoading(false);
                }
              } else {
                if (isLoginPage) {
                  next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/');
                } else {
                  setLoading(false);
                }
              }

              _context.next = 19;
              break;

            case 16:
              _context.prev = 16;
              _context.t0 = _context["catch"](5);
              next_router__WEBPACK_IMPORTED_MODULE_4___default.a.push('/login');

            case 19:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[5, 16]]);
    }));

    function isAuthenticated(_x, _x2) {
      return _isAuthenticated.apply(this, arguments);
    }

    return isAuthenticated;
  }(),
  authenticate: function () {
    var _authenticate = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(username, password, _setUser, setLoginError, persistLogged) {
      var _ref, data, user, auth, error, payload, SECRET, token;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return Fetch.post('/authenticate', {
                username: username,
                password: password
              });

            case 2:
              _ref = _context2.sent;
              data = _ref.data;
              user = data.user, auth = data.auth, error = data.error;
              payload = {
                auth: auth
              };
              SECRET = '26sys323nosi188xzSXa98ZAA';
              token = jwt_simple__WEBPACK_IMPORTED_MODULE_5___default.a.encode(payload, SECRET);

              if (error) {
                _context2.next = 14;
                break;
              }

              _context2.next = 11;
              return _setUser(user);

            case 11:
              if (persistLogged) {
                js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('DICAST_AUTH_TOKEN', token, {
                  expires: 50000
                });
                js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('USERNAME', user.username, {
                  expires: 50000
                }); //TODO colocar o resto das infos nos cookies
              } else {
                js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('DICAST_AUTH_TOKEN', token);
                js_cookie__WEBPACK_IMPORTED_MODULE_2___default.a.set('USERNAME', user.username); //TODO colocar o resto das infos nos cookies
              } // Router.push('/');


              _context2.next = 23;
              break;

            case 14:
              _context2.t0 = error;
              _context2.next = _context2.t0 === 'user not found' ? 17 : _context2.t0 === 'invalid password' ? 19 : 21;
              break;

            case 17:
              setLoginError(1);
              return _context2.abrupt("break", 23);

            case 19:
              setLoginError(2);
              return _context2.abrupt("break", 23);

            case 21:
              setLoginError(1);
              return _context2.abrupt("break", 23);

            case 23:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function authenticate(_x3, _x4, _x5, _x6, _x7) {
      return _authenticate.apply(this, arguments);
    }

    return authenticate;
  }(),
  getUser: function () {
    var _getUser = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(userId, setUser) {
      var _ref2, data, user;

      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return Fetch.get("/users?user_id=".concat(userId));

            case 2:
              _ref2 = _context3.sent;
              data = _ref2.data;
              user = data.user;
              setUser(user);

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));

    function getUser(_x8, _x9) {
      return _getUser.apply(this, arguments);
    }

    return getUser;
  }()
});

/***/ })

})
//# sourceMappingURL=index.js.ecd29795582460d95ea1.hot-update.js.map