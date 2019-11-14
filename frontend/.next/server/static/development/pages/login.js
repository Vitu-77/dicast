module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/login.js":
/*!************************!*\
  !*** ./pages/login.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/services/Api */ "./src/services/Api.js");
/* harmony import */ var _src_global_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/global/contexts/UserContext */ "./src/global/contexts/UserContext.js");
var _jsxFileName = "c:\\Users\\marce\\Programa\xE7\xE3o\\Projetos\\dicast\\frontend\\pages\\login.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Login = () => {
  const {
    _setUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_global_contexts_UserContext__WEBPACK_IMPORTED_MODULE_2__["default"]);
  const {
    0: username,
    1: setUsername
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('vitu_77');
  const {
    0: password,
    1: setPassword
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('123');
  const {
    0: persistLogged,
    1: setPersistLogged
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false);
  const {
    0: loginError,
    1: setLoginError
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(0);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    const isAuthenticated = async () => await _src_services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].isAuthenticated(setLoading, true);

    isAuthenticated();
  }, []);

  const handleChange = event => {
    const type = event.target.type;

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

  const submit = async () => {
    setLoading(true);
    await _src_services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].authenticate(username, password, _setUser, setLoginError, persistLogged);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: undefined
  }, loading ? __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: undefined
  }, "Loading...") : __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: undefined
  }, __jsx("form", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    placeholder: "username",
    onChange: handleChange,
    value: username,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: undefined
  }), __jsx("input", {
    type: "password",
    placeholder: "password",
    onChange: handleChange,
    value: password,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: undefined
  }), "Remember me", __jsx("input", {
    type: "checkbox",
    onChange: () => setPersistLogged(!persistLogged),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: undefined
  }), __jsx("button", {
    onClick: submit,
    type: "button",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: undefined
  }, "Submit"), loginError === 1 ? __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: undefined
  }, "AAAAA") : loginError === 2 ? __jsx("span", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: undefined
  }, "NBBBBBB") : null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Login);

/***/ }),

/***/ "./src/global/contexts/UserContext.js":
/*!********************************************!*\
  !*** ./src/global/contexts/UserContext.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const UserContext = Object(react__WEBPACK_IMPORTED_MODULE_0__["createContext"])();
/* harmony default export */ __webpack_exports__["default"] = (UserContext);

/***/ }),

/***/ "./src/services/Api.js":
/*!*****************************!*\
  !*** ./src/services/Api.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);



const Fetch = axios__WEBPACK_IMPORTED_MODULE_1___default.a.create({
  baseURL: 'http://192.168.1.6:3333'
});
/* harmony default export */ __webpack_exports__["default"] = ({
  async isAuthenticated(setLoading, isLoginPage) {
    const token = js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.get('DICAST_AUTH_TOKEN');

    if (token === undefined || token === null || token === '') {
      isLoginPage ? setLoading(false) : next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
    } else {
      try {
        const response = await Fetch.get('/is_authenticated', {
          headers: {
            token
          }
        });
        const {
          isAuthenticated
        } = response.data;

        if (!isAuthenticated) {
          if (!isLoginPage) {
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/login');
          } else {
            setLoading(false);
          }
        } else {
          if (isLoginPage) {
            next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
          } else {
            setLoading(false);
          }
        }
      } catch (error) {
        console.log({
          error
        });
      }
    }
  },

  async authenticate(username, password, _setUser, setLoginError, persistLogged) {
    const {
      data
    } = await Fetch.post('/authenticate', {
      username,
      password
    });
    const {
      user,
      auth,
      error
    } = data;

    if (!error) {
      const {
        name,
        id,
        acess_level,
        avatar_src
      } = user;
      const userCookie = `${name.replace(" ", "#")}$${username}$${id}$${avatar_src}$${acess_level}`;
      await _setUser(name, username, id, acess_level, avatar_src);

      if (persistLogged) {
        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('DICAST_AUTH_TOKEN', auth, {
          expires: 50000
        });
        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('USER', userCookie, {
          expires: 50000
        }); //TODO colocar o resto das infos nos cookies
      } else {
        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('DICAST_AUTH_TOKEN', auth);
        js_cookie__WEBPACK_IMPORTED_MODULE_0___default.a.set('USER', userCookie); //TODO colocar o resto das infos nos cookies
      }

      next_router__WEBPACK_IMPORTED_MODULE_2___default.a.push('/');
    } else {
      switch (error) {
        case 'user not found':
          setLoginError(1);
          break;

        case 'invalid password':
          setLoginError(2);
          break;

        default:
          setLoginError(1);
          break;
      }
    }
  },

  async getPodcasts(search) {
    const response = await Fetch.get(`/podcasts?search=${search}`);
    const {
      podcasts
    } = response.data;
    return podcasts;
  }

});

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/login.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\marce\Programação\Projetos\dicast\frontend\pages\login.js */"./pages/login.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=login.js.map