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

/***/ "./lib/actions.js":
/*!************************!*\
  !*** ./lib/actions.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var build = function build(type, payload) {
  return {
    payload: payload,
    type: type
  };
};

/* harmony default export */ __webpack_exports__["default"] = (function (actionName) {
  var failed = "".concat(actionName, "_FAILED");
  var requested = "".concat(actionName, "_REQUESTED");
  var succeeded = "".concat(actionName, "_SUCCEEDED");
  return {
    failed: failed,
    requested: requested,
    succeeded: succeeded,
    fail: function fail(payload) {
      return build(failed, payload);
    },
    request: function request(payload) {
      return build(requested, payload);
    },
    succeed: function succeed(payload) {
      return build(succeeded, payload);
    }
  };
});

/***/ }),

/***/ "./lib/api.js":
/*!********************!*\
  !*** ./lib/api.js ***!
  \********************/
/*! exports provided: fetchContacts, fetchContact, updateContact, deleteContact */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchContacts", function() { return fetchContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetchContact", function() { return fetchContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContact", function() { return updateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContact", function() { return deleteContact; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! querystring */ "querystring");
/* harmony import */ var querystring__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(querystring__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../src/config */ "./src/config.json");
var _src_config__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../src/config */ "./src/config.json", 1);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }




var fetchContacts =
/*#__PURE__*/
function () {
  var _ref = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
    var params,
        config,
        data,
        _args = arguments;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            params = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};
            config = _args.length > 1 ? _args[1] : undefined;

            if (config.lazyLoad) {
              params.limit = _src_config__WEBPACK_IMPORTED_MODULE_3__["PAGINATION"];
            } else {
              params.limit = undefined;
              params.skip = undefined;
            }

            _context.next = 5;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_src_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/contacts?").concat(querystring__WEBPACK_IMPORTED_MODULE_2___default.a.stringify(params)), {
              cors: true
            });

          case 5:
            data = _context.sent;
            return _context.abrupt("return", data.json());

          case 7:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function fetchContacts() {
    return _ref.apply(this, arguments);
  };
}();
var fetchContact =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(id) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_src_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/contacts/").concat(id), {
              cors: true
            });

          case 2:
            data = _context2.sent;
            return _context2.abrupt("return", data.json());

          case 4:
          case "end":
            return _context2.stop();
        }
      }
    }, _callee2, this);
  }));

  return function fetchContact(_x) {
    return _ref2.apply(this, arguments);
  };
}();
var updateContact =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(contact) {
    var data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_src_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/contacts/").concat(contact._id), {
              cors: true,
              headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
              },
              method: 'PUT',
              body: JSON.stringify(contact)
            });

          case 2:
            data = _context3.sent;
            return _context3.abrupt("return", data.json());

          case 4:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3, this);
  }));

  return function updateContact(_x2) {
    return _ref3.apply(this, arguments);
  };
}();
var deleteContact = function deleteContact(contactId) {
  return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_1___default()("".concat(_src_config__WEBPACK_IMPORTED_MODULE_3__["API_URL"], "/contacts/").concat(contactId), {
    cors: true,
    method: 'DELETE'
  });
};

/***/ }),

/***/ "./lib/contacts.js":
/*!*************************!*\
  !*** ./lib/contacts.js ***!
  \*************************/
/*! exports provided: initialState, loadContacts, viewContact, setCurrent, setLazyLoad, setQuery, updateContact, deleteContact, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadContacts", function() { return loadContacts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "viewContact", function() { return viewContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrent", function() { return setCurrent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLazyLoad", function() { return setLazyLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setQuery", function() { return setQuery; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateContact", function() { return updateContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteContact", function() { return deleteContact; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.chunk */ "lodash.chunk");
/* harmony import */ var lodash_chunk__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_chunk__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./actions */ "./lib/actions.js");
/* harmony import */ var _api__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./api */ "./lib/api.js");


function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }






var getStorage = function getStorage() {
  return typeof Storage !== 'undefined' ? localStorage : {
    getItem: function getItem() {
      return null;
    },
    setItem: function setItem() {
      return null;
    },
    removeItem: function removeItem() {
      return null;
    }
  };
};

var initialState = {
  contacts: [],
  current: {},
  currentId: null,
  query: null,
  count: 0,
  lazyLoad: getStorage().getItem('lazyLoad') || true
};

var wait = function wait() {
  var duration = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
  return new Promise(function (resolve) {
    return setTimeout(resolve, duration);
  });
};

var _loadContacts = Object(_actions__WEBPACK_IMPORTED_MODULE_3__["default"])('LOAD_CONTACTS');

var _viewContact = Object(_actions__WEBPACK_IMPORTED_MODULE_3__["default"])('VIEW_CONTACT');

var _updateContact = Object(_actions__WEBPACK_IMPORTED_MODULE_3__["default"])('UPDATE_CONTACT');

var _deleteContact = Object(_actions__WEBPACK_IMPORTED_MODULE_3__["default"])('DELETE_CONTACT');

var loadContacts = function loadContacts() {
  var params = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return (
    /*#__PURE__*/
    function () {
      var _ref = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(dispatch, getState) {
        var _getState, lazyLoad, _ref2, contacts, count;

        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                dispatch(_loadContacts.request(params));
                _getState = getState(), lazyLoad = _getState.lazyLoad;
                _context.next = 4;
                return Object(_api__WEBPACK_IMPORTED_MODULE_4__["fetchContacts"])(params, {
                  lazyLoad: lazyLoad
                });

              case 4:
                _ref2 = _context.sent;
                contacts = _ref2.contacts;
                count = _ref2.count;
                // const chunks = chunk(contacts, 50)
                // let done = 0
                // for (const cur of chunks) {
                // await wait()
                // ++done
                dispatch(_loadContacts.succeed({
                  contacts: contacts,
                  count: count
                })); // }
                // if (acc.length === 10 || i === contacts.length - 1) {
                // await new Promise(resolve => setTimeout(resolve, 200))
                // dispatch(_loadContacts.succeed({ contacts: acc, count }))
                //   return []
                // }
                // dispatch(_loadContacts.succeed({ contacts, count }))

              case 8:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }()
  );
};
var viewContact = function viewContact(params) {
  return (
    /*#__PURE__*/
    function () {
      var _ref3 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(dispatch) {
        var contacts;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                dispatch(_viewContact.request());
                _context2.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_4__["fetchContact"])(params);

              case 3:
                contacts = _context2.sent;
                dispatch(_viewContact.succeed(contacts));

              case 5:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function (_x3) {
        return _ref3.apply(this, arguments);
      };
    }()
  );
};
var setCurrent = function setCurrent(pos) {
  return function (dispatch) {
    return dispatch({
      type: 'SET_CURRENT',
      payload: pos
    });
  };
};
var setLazyLoad = function setLazyLoad(lazyLoad) {
  return function (dispatch) {
    return dispatch({
      type: 'SET_LAZYLOAD',
      payload: lazyLoad
    });
  };
};
var setQuery = function setQuery(q) {
  return function (dispatch) {
    return dispatch({
      type: 'SET_QUERY',
      payload: q
    });
  };
};
var updateContact = function updateContact(contact) {
  return (
    /*#__PURE__*/
    function () {
      var _ref4 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(dispatch) {
        var updated;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                dispatch(_updateContact.request());
                _context3.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_4__["updateContact"])(contact);

              case 3:
                updated = _context3.sent;
                dispatch(_updateContact.succeed(updated));
                next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');

              case 6:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this);
      }));

      return function (_x4) {
        return _ref4.apply(this, arguments);
      };
    }()
  );
};
var deleteContact = function deleteContact(contactId) {
  return (
    /*#__PURE__*/
    function () {
      var _ref5 = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(dispatch) {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                dispatch(_deleteContact.request());
                _context4.next = 3;
                return Object(_api__WEBPACK_IMPORTED_MODULE_4__["deleteContact"])(contactId);

              case 3:
                dispatch(_deleteContact.succeed(contactId));
                next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push('/');

              case 5:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function (_x5) {
        return _ref5.apply(this, arguments);
      };
    }()
  );
};
var reducer = function reducer() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
  var action = arguments.length > 1 ? arguments[1] : undefined;

  switch (action.type) {
    case 'SET_QUERY':
      return _objectSpread({}, state, {
        query: action.payload
      });

    case _loadContacts.requested:
      return _objectSpread({}, state, {
        loadingContacts: true
      });

    case _loadContacts.succeeded:
      {
        var previousCount = state.count,
            lazyLoad = state.lazyLoad;
        var count = action.payload.count;
        var contacts = count === previousCount && lazyLoad ? _toConsumableArray(state.contacts).concat(_toConsumableArray(action.payload.contacts)) : action.payload.contacts;
        console.log({
          previousCount: previousCount,
          count: count,
          lazyLoad: lazyLoad,
          l: contacts.length
        });
        return _objectSpread({}, state, {
          loadingContacts: false,
          contacts: contacts,
          count: count
        });
      }

    case _viewContact.requested:
      return _objectSpread({}, state, {
        loadingContact: true
      });

    case _viewContact.succeeded:
      return _objectSpread({}, state, {
        loadingContact: false,
        current: action.payload
      });

    case _updateContact.requested:
      return _objectSpread({}, state, {
        updatingContact: true
      });

    case _updateContact.succeeded:
      return _objectSpread({}, state, {
        updatingContact: false,
        current: action.payload,
        contacts: state.contacts.map(function (c) {
          return c._id !== action.payload._id ? c : action.payload;
        })
      });

    case _deleteContact.requested:
      return _objectSpread({}, state, {
        deletingContact: true
      });

    case _deleteContact.succeeded:
      return _objectSpread({}, state, {
        deletingContact: false,
        contacts: state.contacts.filter(function (c) {
          return c._id !== action.payload;
        })
      });

    case 'SET_CURRENT':
      return _objectSpread({}, state, {
        currentId: action.payload
      });

    case 'SET_LAZYLOAD':
      getStorage().setItem('lazyLoad', action.payload);
      return _objectSpread({}, state, {
        lazyLoad: action.payload
      });

    default:
      return state;
  }
};

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "next/link");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./list.css */ "./pages/list.css");
/* harmony import */ var _list_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_list_css__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-redux */ "react-redux");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-materialize */ "react-materialize");
/* harmony import */ var react_materialize__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_materialize__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash.debounce */ "lodash.debounce");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _lib_contacts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lib/contacts */ "./lib/contacts.js");
/* harmony import */ var _src_config__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../src/config */ "./src/config.json");
var _src_config__WEBPACK_IMPORTED_MODULE_12___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../src/config */ "./src/config.json", 1);

var _jsxFileName = "/Users/delwiv/dev/managr-web/pages/index.js";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

/* eslint-disable jsx-a11y/anchor-is-valid */












var isClient = typeof window !== 'undefined';

var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index(props) {
    var _this;

    _classCallCheck(this, Index);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Index).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onScroll", function () {
      if (!_this.props.lazyLoad) return;
      if (_this.lastCall && Date.now() < _this.lastCall + 50) return;
      _this.lastCall = Date.now();

      if (!_this.props.loading && window.innerHeight + window.scrollY >= document.body.offsetHeight - 5000 && _this.props.contacts.length) {
        _this.loadMore();
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "sendEmails",
    /*#__PURE__*/
    _asyncToGenerator(
    /*#__PURE__*/
    _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var emails, result;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              emails = Array.from(document.querySelectorAll('input[name="mass_mail"]:checked')).map(function (i) {
                return i.value.trim();
              });
              console.log({
                emails: emails
              });
              _context.next = 4;
              return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()('http://localhost:3003/mails', {
                method: 'post',
                headers: {
                  'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                  emails: emails
                })
              });

            case 4:
              result = _context.sent;
              console.log({
                result: result
              });

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    })));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "loadMore", lodash_debounce__WEBPACK_IMPORTED_MODULE_10___default()(function () {
      var skip = _this.props.contacts.length;

      if (skip === _this.props.count) {
        return;
      }

      var q = _this.props.query;

      _this.loadContacts({
        skip: skip,
        q: q
      });
    }, 100));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onClickContact", function (contactId, i) {
      _this.props.setCurrent(i);

      next_router__WEBPACK_IMPORTED_MODULE_6___default.a.push("/contact?contactId=".concat(contactId));
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectAll", function (e) {
      var checked = e.target.checked;

      _this.setState({
        contacts: _this.state.contacts.map(function (c) {
          return _objectSpread({}, c, {
            checked: checked
          });
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "selectContact", function (contact, i) {
      return function (e) {
        var checked = e.target.checked;

        var contacts = _toConsumableArray(_this.state.contacts);

        contacts[i].checked = checked;

        _this.setState({
          contacts: contacts
        });
      };
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getRow", function (current) {
      return function (contact, i) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
          id: "contact_".concat(i),
          key: contact._id,
          className: current === i || contact.checked ? 'row highlight' : 'row',
          __source: {
            fileName: _jsxFileName,
            lineNumber: 119
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          align: "center",
          className: "action-checkbox",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 120
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 121
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
          checked: contact.checked,
          type: "checkbox",
          onChange: _this.selectContact(contact, i),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 122
          },
          __self: this
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 123
          },
          __self: this
        }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 126
          },
          __self: this
        }, contact.departement), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 127
          },
          __self: this
        }, contact.ville), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          className: "openContact",
          onClick: function onClick() {
            return _this.onClickContact(contact._id, i);
          },
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          },
          __self: this
        }, contact.nom), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 131
          },
          __self: this
        }, contact.responsable), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          },
          __self: this
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
          href: "mailto:".concat(contact.mail, "?SUBJECT=Jazz"),
          __source: {
            fileName: _jsxFileName,
            lineNumber: 133
          },
          __self: this
        }, contact.mail)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 135
          },
          __self: this
        }, contact.envoi_mail), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 136
          },
          __self: this
        }, _src_config__WEBPACK_IMPORTED_MODULE_12__["months"][+contact.mois_contact]), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("td", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 137
          },
          __self: this
        }, contact.vu_le));
      };
    });

    _this.state = {
      contacts: props.contacts
    };

    _this.loadContacts = function (params) {
      return _this.props.loadContacts(params);
    };

    return _this;
  }

  _createClass(Index, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (this.props.contacts.length !== this.state.contacts.length) {
        this.setState({
          contacts: this.props.contacts
        });
      }
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      if (isClient) {
        window.addEventListener('scroll', this.onScroll, false);

        try {
          window.M.AutoInit();
        } catch (err) {}
      }

      if (!this.props.contacts.length) {
        return this.loadContacts();
      }

      if (this.props.current) {
        var element = document.getElementById("contact_".concat(this.props.current));
        element.scrollIntoView({
          block: 'center'
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (isClient) {
        window.removeEventListener('scroll', this.onScroll, false);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var current = this.props.current,
          contacts = this.state.contacts,
          getRow = this.getRow,
          selectAll = this.selectAll;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        style: {
          paddingTop: 0
        },
        __source: {
          fileName: _jsxFileName,
          lineNumber: 150
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_materialize__WEBPACK_IMPORTED_MODULE_9__["Table"], {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 151
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("thead", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 152
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tr", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 153
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 154
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 155
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", {
        type: "checkbox",
        onChange: selectAll,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 156
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 157
        },
        __self: this
      }, "S\xE9l. tous"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 160
        },
        __self: this
      }, "D\xE9partement"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 161
        },
        __self: this
      }, "Ville"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 162
        },
        __self: this
      }, "Nom"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 163
        },
        __self: this
      }, "Responsable"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 164
        },
        __self: this
      }, "Mail"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 165
        },
        __self: this
      }, "Mail Envoy\xE9 le"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 166
        },
        __self: this
      }, "Contact"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("th", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 167
        },
        __self: this
      }, "Vu le"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("tbody", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 170
        },
        __self: this
      }, contacts.map(getRow(current)))));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_1___default.a.Component);

_defineProperty(Index, "propTypes", {
  contacts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.array.isRequired,
  current: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  query: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.string,
  loading: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  lazyLoad: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.bool,
  count: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.number,
  loadContacts: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired,
  setCurrent: prop_types__WEBPACK_IMPORTED_MODULE_3___default.a.func.isRequired // state = { contacts: [] }

});

var mapStateToProps = function mapStateToProps(state) {
  return {
    contacts: state.contacts,
    loading: state.loadingContacts,
    current: state.currentId,
    lazyLoad: state.lazyLoad,
    query: state.query,
    count: state.count
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch) {
  return {
    loadContacts: function loadContacts(params) {
      return dispatch(Object(_lib_contacts__WEBPACK_IMPORTED_MODULE_11__["loadContacts"])(params));
    },
    setCurrent: function setCurrent(pos) {
      return dispatch(Object(_lib_contacts__WEBPACK_IMPORTED_MODULE_11__["setCurrent"])(pos));
    }
  };
};

/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_8__["connect"])(mapStateToProps, mapDispatchToProps)(Index));

/***/ }),

/***/ "./pages/list.css":
/*!************************!*\
  !*** ./pages/list.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/config.json":
/*!*************************!*\
  !*** ./src/config.json ***!
  \*************************/
/*! exports provided: API_URL, PAGINATION, months, default */
/***/ (function(module) {

module.exports = {"API_URL":"http://localhost:3038","PAGINATION":"50","months":["Ignorer","Janvier","Février","Mars","Avril","Mai","Juin","Juillet","Août","Septembre","Octobre","Novembre","Décembre"]};

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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

/***/ "lodash.chunk":
/*!*******************************!*\
  !*** external "lodash.chunk" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.chunk");

/***/ }),

/***/ "lodash.debounce":
/*!**********************************!*\
  !*** external "lodash.debounce" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash.debounce");

/***/ }),

/***/ "next/link":
/*!****************************!*\
  !*** external "next/link" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "querystring":
/*!******************************!*\
  !*** external "querystring" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("querystring");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-dom":
/*!****************************!*\
  !*** external "react-dom" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),

/***/ "react-materialize":
/*!************************************!*\
  !*** external "react-materialize" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-materialize");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map