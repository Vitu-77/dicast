webpackHotUpdate("static\\development\\pages\\login.js",{

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Api */ "./services/Api.js");
/* harmony import */ var _global_contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../global/contexts/UserContext */ "./global/contexts/UserContext.js");


var _jsxFileName = "C:\\Users\\marce\\Programa\xE7\xE3o\\Projetos\\dicast\\frontend\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;




var Login = function Login() {
  var _useContext = Object(react__WEBPACK_IMPORTED_MODULE_2__["useContext"])(_global_contexts_UserContext__WEBPACK_IMPORTED_MODULE_4__["default"]),
      _setUser = _useContext._setUser;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('Vitu_77sC'),
      username = _useState[0],
      setUsername = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])('12345'),
      password = _useState2[0],
      setPassword = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      persistLogged = _useState3[0],
      setPersistLogged = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(0),
      loginError = _useState4[0],
      setLoginError = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false),
      loading = _useState5[0],
      setLoading = _useState5[1];

  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var isAuthenticated =
    /*#__PURE__*/
    function () {
      var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
      /*#__PURE__*/
      _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].isAuthenticated(setLoading, true);

              case 2:
                return _context.abrupt("return", _context.sent);

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));

      return function isAuthenticated() {
        return _ref.apply(this, arguments);
      };
    }();

    isAuthenticated();
  }, []);

  var handleChange = function handleChange(event) {
    var type = event.target.type;

    switch (type) {
      case 'text':
        setUsername(event.target.value);
        break;

      case 'password':
        setPassword(event.target.value);
        break;

      default:
        console.log(event.target);
        break;
    }
  };

  var submit = function submit() {
    return _services_Api__WEBPACK_IMPORTED_MODULE_3__["default"].authenticate(username, password, _setUser, setLoginError, persistLogged);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, loading ? __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Loading...") : __jsx(react__WEBPACK_IMPORTED_MODULE_2___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("input", {
    type: "text",
    placeholder: "username",
    onChange: handleChange,
    value: username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    onChange: handleChange,
    value: password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }), "Remember me", __jsx("input", {
    type: "checkbox",
    onChange: function onChange() {
      return setPersistLogged(!persistLogged);
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }), __jsx("button", {
    onClick: submit,
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Submit"), loginError === 1 ? __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, "AAAAA") : loginError === 2 ? __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "NBBBBBB") : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ })

})
//# sourceMappingURL=login.js.2ba5b7cff975d6a18e5e.hot-update.js.map