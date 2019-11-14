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

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "core-js/library/fn/date/now");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../src/services/Api */ "./src/services/Api.js");
/* harmony import */ var _src_components_Podcasts_Podcasts__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../src/components/Podcasts/Podcasts */ "./src/components/Podcasts/Podcasts.js");
/* harmony import */ var _src_global_contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/global/contexts/UserContext */ "./src/global/contexts/UserContext.js");
var _jsxFileName = "c:\\Users\\marce\\Programa\xE7\xE3o\\Projetos\\dicast\\frontend\\pages\\index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





const Index = () => {
  const {
    user,
    initUser
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useContext"])(_src_global_contexts_UserContext__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const {
    0: loading,
    1: setLoading
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(true);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    initUser();

    const isAuthenticated = async () => await _src_services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].isAuthenticated(setLoading, false);

    isAuthenticated();
  }, []);
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: undefined
  }, loading ? __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, "Loading...") : __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, __jsx("h1", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: undefined
  }, user.name), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    },
    __self: undefined
  }, user.username), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, user.id), __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  }, user.userAvatar), __jsx("img", {
    style: {
      'borderRadius': '100%'
    },
    width: "300px",
    src: user.userAvatar,
    alt: user.name,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }), user.acess_level === 2 ? __jsx("button", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: undefined
  }, "New Podcast") : null, __jsx(_src_components_Podcasts_Podcasts__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: undefined
  })), __jsx("a", {
    href: "/redirect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: undefined
  }, "link"));
};

/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./src/components/PodcastCard/PodcastCard.js":
/*!***************************************************!*\
  !*** ./src/components/PodcastCard/PodcastCard.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _helpers_DateHandler__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/DateHandler */ "./src/helpers/DateHandler.js");
/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Style.css */ "./src/components/PodcastCard/Style.css");
/* harmony import */ var _Style_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_Style_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_h5_audio_player__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-h5-audio-player */ "react-h5-audio-player");
/* harmony import */ var react_h5_audio_player__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_h5_audio_player__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "c:\\Users\\marce\\Programa\xE7\xE3o\\Projetos\\dicast\\frontend\\src\\components\\PodcastCard\\PodcastCard.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;





const PodcastCard = ({
  id,
  podcastName,
  src,
  createdAt
}) => {
  const currentDate = new Date(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_0___default()());
  const podcastDate = new Date(`${createdAt}`);
  const {
    0: podcastAge,
    1: setPodcastAge
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(Number);
  const formatedDate = _helpers_DateHandler__WEBPACK_IMPORTED_MODULE_2__["default"].formatDate(createdAt);
  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    const differenceBetweenDates = Math.abs(podcastDate - currentDate);
    const daysBetweenDates = Math.ceil(differenceBetweenDates / (1000 * 60 * 60 * 24));
    setPodcastAge(daysBetweenDates);
  }, [currentDate]);
  return __jsx("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }, podcastName), __jsx(react_h5_audio_player__WEBPACK_IMPORTED_MODULE_4___default.a, {
    src: src,
    controls: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }), podcastAge <= 2 ? __jsx("time", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: undefined
  }, "NOVO") : podcastAge > 2 && podcastAge <= 9 ? __jsx("time", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 31
    },
    __self: undefined
  }, podcastAge, " ", podcastAge > 1 ? 'dias atrás' : 'dia atrás') : __jsx("time", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: undefined
  }, formatedDate));
};

/* harmony default export */ __webpack_exports__["default"] = (PodcastCard);

/***/ }),

/***/ "./src/components/PodcastCard/Style.css":
/*!**********************************************!*\
  !*** ./src/components/PodcastCard/Style.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/components/Podcasts/Podcasts.js":
/*!*********************************************!*\
  !*** ./src/components/Podcasts/Podcasts.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _services_Api__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Api */ "./src/services/Api.js");
/* harmony import */ var _PodcastCard_PodcastCard__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../PodcastCard/PodcastCard */ "./src/components/PodcastCard/PodcastCard.js");
var _jsxFileName = "c:\\Users\\marce\\Programa\xE7\xE3o\\Projetos\\dicast\\frontend\\src\\components\\Podcasts\\Podcasts.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const Podcasts = () => {
  const {
    0: podcasts,
    1: setPodcasts
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])([]);
  const {
    0: search,
    1: setSearch
  } = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])('');
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(() => {
    fetchData('');
  }, []);

  const fetchData = async search => {
    const data = await _services_Api__WEBPACK_IMPORTED_MODULE_1__["default"].getPodcasts(search);
    setPodcasts(data);
  };

  const handleChange = e => {
    setSearch(e.target.value);
  };

  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: undefined
  }, __jsx("input", {
    type: "text",
    onChange: handleChange,
    value: search,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: undefined
  }), __jsx("button", {
    onClick: () => fetchData(search),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: undefined
  }, "SEARCH"), podcasts ? podcasts.map(podcast => __jsx(_PodcastCard_PodcastCard__WEBPACK_IMPORTED_MODULE_2__["default"], {
    key: podcast.id,
    id: podcast.id,
    podcastName: podcast.podcast_name,
    src: podcast.src,
    createdAt: podcast.createdAt,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    },
    __self: undefined
  })) : __jsx("h3", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: undefined
  }, "Loading Podcasts..."));
};

/* harmony default export */ __webpack_exports__["default"] = (Podcasts);

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

/***/ "./src/helpers/DateHandler.js":
/*!************************************!*\
  !*** ./src/helpers/DateHandler.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  formatDate(date) {
    const strDate = date.toString().replace('T', "-");
    const day = strDate.split('-')[2];
    const mouth = strDate.split('-')[1];
    const year = strDate.split('-')[0];
    return `${day} - ${mouth} - ${year}`;
  }

});

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
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! c:\Users\marce\Programação\Projetos\dicast\frontend\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "core-js/library/fn/date/now":
/*!**********************************************!*\
  !*** external "core-js/library/fn/date/now" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/date/now");

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

/***/ }),

/***/ "react-h5-audio-player":
/*!****************************************!*\
  !*** external "react-h5-audio-player" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-h5-audio-player");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map