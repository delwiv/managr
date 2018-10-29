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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "/Users/delwiv/dev/managr-web/pages/contact.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* eslint-disable jsx-a11y/anchor-is-valid */




var API_URL = 'http://localhost:3038';

var fetchContact =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(id) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(API_URL, "/contacts/").concat(id), {
              cors: true
            });

          case 2:
            data = _context.sent;
            return _context.abrupt("return", data.json());

          case 4:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchContact(_x) {
    return _ref.apply(this, arguments);
  };
}();

var labelStyle = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'stretch'
};

var Contact =
/*#__PURE__*/
function (_Component) {
  _inherits(Contact, _Component);

  function Contact(props) {
    var _this;

    _classCallCheck(this, Contact);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Contact).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleChange", function (field) {
      return function (event) {
        console.log(_defineProperty({}, field, event.target.value));
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getDepartment", function () {
      return _this.state.contact.departement || '44 - Loire Atlantique';
    });

    _this.state = {
      contact: props.contact
    };
    return _this;
  }

  _createClass(Contact, [{
    key: "render",
    value: function render() {
      var contact = this.state.contact,
          handleChange = this.handleChange,
          getDepartment = this.getDepartment;
      console.log({
        contact: contact
      });
      return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 55
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("h1", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 62
        },
        __self: this
      }, contact.nom), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 63
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 64
        },
        __self: this
      }, contact.adresse)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("p", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 66
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("strong", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 67
        },
        __self: this
      }, contact.cp, " ", contact.ville)), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 71
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("form", {
        style: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          // alignItems: 'center',
          width: '90%'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 81
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 88
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 89
        },
        __self: this
      }, "Adresse"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 91
        },
        __self: this
      }, "nom", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "nom",
        value: contact.nom,
        onChange: handleChange('nom'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 93
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 95
        },
        __self: this
      }, "adresse", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "adresse",
        value: contact.adresse,
        onChange: handleChange('adresse'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 97
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 99
        },
        __self: this
      }, "cp", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "cp",
        value: contact.cp,
        onChange: handleChange('cp'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 101
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "departement", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "departement",
        value: contact.departement,
        onChange: handleChange('departement'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 105
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "ville", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "ville",
        value: contact.ville,
        onChange: handleChange('ville'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 114
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 117
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 118
        },
        __self: this
      }, "Infos"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 119
        },
        __self: this
      }, "cible", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: contact.cible,
        name: "cible",
        onChange: handleChange('cible'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 121
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 123
        },
        __self: this
      }, "vu", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: contact.vu,
        name: "vu",
        onChange: handleChange('vu'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 125
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 127
        },
        __self: this
      }, "date", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: contact.date,
        name: "date",
        onChange: handleChange('date'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 129
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 131
        },
        __self: this
      }, "mois", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: contact.mois,
        name: "mois",
        onChange: handleChange('mois'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 133
        },
        __self: this
      })))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          display: 'flex',
          flexDirection: 'column',
          flex: 1
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 137
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 144
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 145
        },
        __self: this
      }, "Responsable"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 146
        },
        __self: this
      }, "Nom", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: contact.responsable,
        name: "Nom_resp1",
        onChange: handleChange('responsable1'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 148
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, "Tel", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: contact.tel_pro,
        name: "Tel_resp1",
        onChange: handleChange('tel1'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 159
        },
        __self: this
      }, "Mail", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: contact.mail,
        name: "Mail_resp1",
        onChange: handleChange('mail1'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Responsable 2"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Nom", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "Nom_resp2",
        onChange: handleChange('responsable2'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 168
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, "Tel", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        value: contact.tel_perso,
        name: "Tel_resp2",
        onChange: handleChange('tel2'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 172
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 174
        },
        __self: this
      }, "Mail", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "Mail_resp2",
        onChange: handleChange('mail2'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 176
        },
        __self: this
      }))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("fieldset", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 179
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("legend", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 180
        },
        __self: this
      }, "Responsable 3"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 181
        },
        __self: this
      }, "Nom", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "Nom_resp3",
        onChange: handleChange('responsable3'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 183
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 185
        },
        __self: this
      }, "Tel", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "Tel_resp3",
        onChange: handleChange('tel3'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 187
        },
        __self: this
      })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("label", {
        style: labelStyle,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 189
        },
        __self: this
      }, "Mail", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("input", {
        type: "text",
        name: "Mail_resp3",
        onChange: handleChange('mail3'),
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        },
        __self: this
      })))))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
        style: {
          width: '50%',
          alignSelf: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center'
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 197
        },
        __self: this
      }));
    }
  }]);

  return Contact;
}(react__WEBPACK_IMPORTED_MODULE_2__["Component"]);

_defineProperty(Contact, "propTypes", {
  classes: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired,
  contact: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.object.isRequired
});

_defineProperty(Contact, "getInitialProps",
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(params) {
    var contact;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            console.log({
              params: params
            });
            _context2.next = 3;
            return fetchContact(params.query.contactId);

          case 3:
            contact = _context2.sent;
            return _context2.abrupt("return", {
              contact: contact
            });

          case 5:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function (_x2) {
    return _ref2.apply(this, arguments);
  };
}());

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ 4:
/*!********************************!*\
  !*** multi ./pages/contact.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/contact.js */"./pages/contact.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

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
//# sourceMappingURL=contact.js.map