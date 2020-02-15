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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _styles_global_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/global.js */ "./styles/global.js");
var _jsxFileName = "D:\\DeveloperSoftware\\HyperionDev\\Task41-42-NextJSII-III\\ImperialSurvey\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


function Layout(props) {
  return __jsx("div", {
    className: "page-layout",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, props.children, __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    id: _styles_global_js__WEBPACK_IMPORTED_MODULE_2__["default"].__hash,
    __self: this
  }, _styles_global_js__WEBPACK_IMPORTED_MODULE_2__["default"]));
}

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/next/app.js":
/*!**********************************!*\
  !*** ./node_modules/next/app.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/pages/_app */ "./node_modules/next/dist/pages/_app.js")


/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  var _a;

  if (true) {
    if ((_a = App.prototype) === null || _a === void 0 ? void 0 : _a.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SP = typeof performance !== 'undefined';
exports.ST = exports.SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/dist/pages/_app.js":
/*!**********************************************!*\
  !*** ./node_modules/next/dist/pages/_app.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.Container = Container;
exports.createUrl = createUrl;
exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

exports.AppInitialProps = _utils.AppInitialProps;
/**
* `App` component is used for initialize of pages. It allows for overwriting and full control of the `page` initialization.
* This allows for keeping state between navigation, custom error handling, injecting additional data.
*/

async function appGetInitialProps(_ref) {
  var {
    Component,
    ctx
  } = _ref;
  var pageProps = await (0, _utils.loadGetInitialProps)(Component, ctx);
  return {
    pageProps
  };
}

class App extends _react.default.Component {
  // Kept here for backwards compatibility.
  // When someone ended App they could call `super.componentDidCatch`.
  // @deprecated This method is no longer needed. Errors are caught at the top level
  componentDidCatch(error, _errorInfo) {
    throw error;
  }

  render() {
    var {
      router,
      Component,
      pageProps
    } = this.props;
    var url = createUrl(router);
    return _react.default.createElement(Component, Object.assign({}, pageProps, {
      url: url
    }));
  }

}

exports.default = App;
App.origGetInitialProps = appGetInitialProps;
App.getInitialProps = appGetInitialProps;
var warnContainer;
var warnUrl;

if (true) {
  warnContainer = (0, _utils.execOnce)(() => {
    console.warn("Warning: the `Container` in `_app` has been deprecated and should be removed. https://err.sh/zeit/next.js/app-container-deprecated");
  });
  warnUrl = (0, _utils.execOnce)(() => {
    console.error("Warning: the 'url' property is deprecated. https://err.sh/zeit/next.js/url-deprecated");
  });
} // @deprecated noop for now until removal


function Container(p) {
  if (true) warnContainer();
  return p.children;
}

function createUrl(router) {
  // This is to make sure we don't references the router object at call time
  var {
    pathname,
    asPath,
    query
  } = router;
  return {
    get query() {
      if (true) warnUrl();
      return query;
    },

    get pathname() {
      if (true) warnUrl();
      return pathname;
    },

    get asPath() {
      if (true) warnUrl();
      return asPath;
    },

    back: () => {
      if (true) warnUrl();
      router.back();
    },
    push: (url, as) => {
      if (true) warnUrl();
      return router.push(url, as);
    },
    pushTo: (href, as) => {
      if (true) warnUrl();
      var pushRoute = as ? href : '';
      var pushUrl = as || href;
      return router.push(pushRoute, pushUrl);
    },
    replace: (url, as) => {
      if (true) warnUrl();
      return router.replace(url, as);
    },
    replaceTo: (href, as) => {
      if (true) warnUrl();
      var replaceRoute = as ? href : '';
      var replaceUrl = as || href;
      return router.replace(replaceRoute, replaceUrl);
    }
  };
}

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/app */ "./node_modules/next/app.js");
/* harmony import */ var next_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "D:\\DeveloperSoftware\\HyperionDev\\Task41-42-NextJSII-III\\ImperialSurvey\\pages\\_app.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }





class MyApp extends next_app__WEBPACK_IMPORTED_MODULE_1___default.a {
  render() {
    const {
      Component,
      pageProps
    } = this.props;
    return __jsx(next_app__WEBPACK_IMPORTED_MODULE_1__["Container"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }, __jsx(Component, _extends({}, pageProps, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 12
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (MyApp);

/***/ }),

/***/ "./styles/global.js":
/*!**************************!*\
  !*** ./styles/global.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const _defaultExport = new String("*{margin:0;}body{overflow-x:hidden;z-index:1;margin:0;padding:0;}.fa-journal-whills{left:0;}.header-text{color:white;text-shadow:2px 2px 4px yellow;font-size:52px;text-align:center;}.header2-text{color:white;text-shadow:2px 2px 4px yellow;font-size:52px;text-align:center;}nav{z-index:20;position:fixed;}nav li{display:inline-block;margin-top:5px;margin-left:20px;}.nav-link{cursor:pointer;-webkit-text-decoration:none;text-decoration:none;color:white;opacity:.9;padding:10px;font-size:19px;}.nav-link:hover{opacity:1;}.header-section{min-height:100vh;background:url(\"/static/background3.jpg\");background-size:cover;width:100%;}.options-container{display:grid;grid-template-columns:50% 50%;}.options-image{border:1px solid #ddd;border-radius:4px;padding:10px 10px;margin:15px 15px;display:block;margin-left:auto;margin-right:auto;}.options-image:hover{cursor:pointer;opacity:.5;}.Planets-Container{min-height:100vh;background:url(\"/static/background1.jpg\");background-size:cover;width:100%;}.file-list{display:grid;grid-template-columns:25% 25% 25% 25%;}.file-list li{display:inline-block;background:rgb(230,230,230);border-radius:8px;border:1px solid black;padding:20px 20px;margin:0 auto;margin-top:50px;}.file-links{-webkit-text-decoration:none;text-decoration:none;font-size:25px;color:black;}.black-background{background:black;color:green;background-size:cover;width:100%;min-height:100vh;font-family:monospace;font-size:25px;}.blue-background{background:blue;color:white;background-size:cover;width:100%;min-height:100vh;font-family:monospace;font-size:25px;}#one{background:black;font-color:green;border:1px solid green;}#two{background:blue;font-color:white;border:1px solid white;}#three{background:black;font-color:green;border:1px solid green;}.Species-Container{min-height:100vh;background:url(\"/static/background2.jpg\");background-size:cover;width:100%;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkQ6XFxEZXZlbG9wZXJTb2Z0d2FyZVxcSHlwZXJpb25EZXZcXFRhc2s0MS00Mi1OZXh0SlNJSS1JSUlcXEltcGVyaWFsU3VydmV5XFxzdHlsZXNcXGdsb2JhbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFeUIsQUFHZ0IsQUFJTyxBQU9aLEFBSU0sQUFPQSxBQU9ELEFBS1UsQUFNTixBQVNMLEFBSU0sQUFPSCxBQUtTLEFBVVAsQUFLQyxBQU9ILEFBS1EsQUFVQSxBQU1KLEFBVUQsQUFVQSxBQU1ELEFBTUMsQUFNQSxPQXRJbEIsRUFYQSxDQWlEQSxDQXBCaUIsQ0FkZ0IsQUFPQSxDQXNDRCxBQTJCUSxFQS9DakIsQUFtQ1YsQ0EyQ0MsQUFnQkssQ0FqRnlCLEFBMkJBLEFBNEI5QixBQW9CSyxBQVlBLEFBTXlCLENBOUloQyxHQThCSyxBQTBEZSxDQTNCWixJQW5DcEIsQUE4Q0EsRUF2RVcsQUFrSGEsQ0FWQSxJQTBCQyxDQU5BLEFBWUEsRUExR04sQ0E3QlAsR0E0RFEsR0FsREgsQUFPQSxBQXNDakIsSUF0REEsRUFzRm9CLENBU0gsQUFrQkosQ0FoQ2IsQUFzQmEsRUExRWIsR0FvR0EsQ0FOQSxBQVlBLENBN0hvQixBQU9BLEFBMkNELENBYkssQUEyQkEsQUFrRUEsRUExQk4sQ0FWQSxHQXRFSixBQThEQSxFQVRXLFFBMUJULENBbERoQixBQU9BLENBaUJhLEFBOERiLENBa0J3QixDQVZBLEVBekRYLEFBMkJBLEFBa0VBLE9BekdFLENBMEJJLENBMEJDLEVBdkNwQixBQTJCQSxBQWtFQSxRQTFCaUIsQ0EvRUEsQUFxRUEsS0EzQ0csRUEwQkosT0E0QmhCLENBL0VBLEFBcUVBLE1BakJrQixFQTFCbEIsY0EyQkEiLCJmaWxlIjoiRDpcXERldmVsb3BlclNvZnR3YXJlXFxIeXBlcmlvbkRldlxcVGFzazQxLTQyLU5leHRKU0lJLUlJSVxcSW1wZXJpYWxTdXJ2ZXlcXHN0eWxlc1xcZ2xvYmFsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGNzcyBmcm9tICdzdHlsZWQtanN4L2NzcydcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNzcy5nbG9iYWxgXHJcbiAgKntcclxuICAgICAgbWFyZ2luOiAwO1xyXG4gIH1cclxuXHJcbiAgYm9keSB7XHJcbiAgICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgICB6LWluZGV4OiAxO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxuICB9XHJcblxyXG4gIC5mYS1qb3VybmFsLXdoaWxsc3tcclxuICAgIGxlZnQ6MDtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItdGV4dHtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDRweCB5ZWxsb3c7XHJcbiAgICBmb250LXNpemU6IDUycHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG5cclxuICAuaGVhZGVyMi10ZXh0e1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggNHB4IHllbGxvdztcclxuICAgIGZvbnQtc2l6ZTogNTJweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcblxyXG4gIG5hdntcclxuICAgIHotaW5kZXg6IDIwO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gIH1cclxuIFxyXG4gIG5hdiBsaXtcclxuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5re1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgb3BhY2l0eTogLjk7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgZm9udC1zaXplOiAxOXB4O1xyXG4gIH1cclxuXHJcbiAgLm5hdi1saW5rOmhvdmVye1xyXG4gICAgb3BhY2l0eTogMTtcclxuICB9XHJcblxyXG4gIC5oZWFkZXItc2VjdGlvbntcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICBiYWNrZ3JvdW5kOiB1cmwoXCIvc3RhdGljL2JhY2tncm91bmQzLmpwZ1wiKTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICB9XHJcblxyXG4gIC5vcHRpb25zLWNvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDUwJSA1MCU7XHJcbiAgfVxyXG5cclxuICAub3B0aW9ucy1pbWFnZXtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDEwcHg7XHJcbiAgICBtYXJnaW46IDE1cHggMTVweDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgfVxyXG5cclxuICAub3B0aW9ucy1pbWFnZTpob3ZlcntcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG9wYWNpdHk6IC41O1xyXG4gIH1cclxuXHJcbiAgLlBsYW5ldHMtQ29udGFpbmVye1xyXG4gICAgbWluLWhlaWdodDoxMDB2aDtcclxuICAgIGJhY2tncm91bmQ6IHVybChcIi9zdGF0aWMvYmFja2dyb3VuZDEuanBnXCIpO1xyXG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gIH1cclxuXHJcbiAgLmZpbGUtbGlzdHtcclxuICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDI1JSAyNSUgMjUlIDI1JTtcclxuICB9XHJcblxyXG4gIC5maWxlLWxpc3QgbGl7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICBiYWNrZ3JvdW5kOiByZ2IoMjMwLCAyMzAsIDIzMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcclxuICAgIHBhZGRpbmc6IDIwcHggMjBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICB9XHJcblxyXG4gIC5maWxlLWxpbmtze1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG4gIH1cclxuXHJcbiAgLmJsYWNrLWJhY2tncm91bmR7XHJcbiAgICBiYWNrZ3JvdW5kOiBibGFjaztcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1pbi1oZWlnaHQ6MTAwdmg7XHJcbiAgICBmb250LWZhbWlseTogbW9ub3NwYWNlO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gIH1cclxuXHJcbiAgLmJsdWUtYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6IGJsdWU7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgZm9udC1mYW1pbHk6IG1vbm9zcGFjZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICB9XHJcblxyXG4gICNvbmV7XHJcbiAgICBiYWNrZ3JvdW5kOmJsYWNrO1xyXG4gICAgZm9udC1jb2xvcjogZ3JlZW47XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBncmVlbjtcclxuICB9XHJcblxyXG4gICN0d297XHJcbiAgICBiYWNrZ3JvdW5kOmJsdWU7XHJcbiAgICBmb250LWNvbG9yOiB3aGl0ZTtcclxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHdoaXRlO1xyXG4gIH1cclxuXHJcbiAgI3RocmVle1xyXG4gICAgYmFja2dyb3VuZDpibGFjaztcclxuICAgIGZvbnQtY29sb3I6IGdyZWVuO1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgZ3JlZW47XHJcbiAgfVxyXG5cclxuICAuU3BlY2llcy1Db250YWluZXJ7XHJcbiAgICBtaW4taGVpZ2h0OjEwMHZoO1xyXG4gICAgYmFja2dyb3VuZDogdXJsKFwiL3N0YXRpYy9iYWNrZ3JvdW5kMi5qcGdcIik7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5gIl19 */\n/*@ sourceURL=D:\\\\DeveloperSoftware\\\\HyperionDev\\\\Task41-42-NextJSII-III\\\\ImperialSurvey\\\\styles\\\\global.js */");

_defaultExport.__hash = "269141420";
/* harmony default export */ __webpack_exports__["default"] = (_defaultExport);

/***/ }),

/***/ 0:
/*!****************************************!*\
  !*** multi private-next-pages/_app.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! private-next-pages/_app.js */"./pages/_app.js");


/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=_app.js.map