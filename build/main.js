require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(3);


/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_body_parser___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_body_parser__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_compression__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_compression___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_compression__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_cors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_cors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helmet__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_morgan__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_morgan___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_morgan__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_mongoose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_colors__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_colors___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_colors__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__routes__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__bin_server__ = __webpack_require__(11);












__WEBPACK_IMPORTED_MODULE_7_colors___default.a.setTheme({
	silly: 'rainbow',
	input: 'grey',
	verbose: 'cyan',
	prompt: 'grey',
	info: 'green',
	data: 'grey',
	help: 'cyan',
	warn: 'yellow',
	debug: 'blue',
	error: 'red'
});

__WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.Promise = Promise;

var isDev = "development" === 'development';
var app = __WEBPACK_IMPORTED_MODULE_0_express___default()();

if (isDev) {
	__WEBPACK_IMPORTED_MODULE_6_mongoose___default.a.set('debug', true);
	app.use(__WEBPACK_IMPORTED_MODULE_5_morgan___default()('dev'));
}

app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.json());
app.use(__WEBPACK_IMPORTED_MODULE_1_body_parser___default.a.urlencoded({ extended: true }));
app.use(__WEBPACK_IMPORTED_MODULE_2_compression___default()());
app.use(__WEBPACK_IMPORTED_MODULE_3_cors___default()());
app.use(__WEBPACK_IMPORTED_MODULE_4_helmet___default()());
app.use('/', __WEBPACK_IMPORTED_MODULE_8__routes__["a" /* default */]);

app.use(function (req, res) {
	res.status(404).json({
		message: 'not found'
	});
});

app.use(function (err, req, res) {
	res.status(500).json(err);
});

__WEBPACK_IMPORTED_MODULE_9__bin_server__["a" /* default */].init(app);

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("compression");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("cors");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("helmet");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("morgan");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("colors");

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_server_express__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_apollo_server_express___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_apollo_server_express__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__schema__ = __webpack_require__(26);





var isDev = "development" === 'development';

var router = Object(__WEBPACK_IMPORTED_MODULE_0_express__["Router"])();

if (isDev) {
	router.get('/graphql', Object(__WEBPACK_IMPORTED_MODULE_1_apollo_server_express__["graphiqlExpress"])({
		endpointURL: '/graphql'
	}));
}

router.get('/', function (req, res) {
	res.send('123');
});

router.post('/graphql', Object(__WEBPACK_IMPORTED_MODULE_1_apollo_server_express__["graphqlExpress"])(function (_ref) {
	var user = _ref.user;
	return {
		schema: __WEBPACK_IMPORTED_MODULE_2__schema__["a" /* default */],
		context: { user: user }
	};
}));

/* harmony default export */ __webpack_exports__["a"] = (router);

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_mongoose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_mongoose__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }



var PORT = process.env.PORT || 3000;
var MONGO_URL = process.env.MONGO_URL || 'mongodb://localhost:27017/express-graphql-mongo-boilerplate';
var AttemptConnectDB = 5;

var init = function () {
	var _ref = _asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator___default.a.mark(function _callee(app) {
		var couter, interval;
		return __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
			while (1) {
				switch (_context.prev = _context.next) {
					case 0:
						_context.prev = 0;
						_context.next = 3;
						return __WEBPACK_IMPORTED_MODULE_1_mongoose___default.a.createConnection(MONGO_URL, { useMongoClient: true });

					case 3:
						app.listen(PORT, function () {
							console.log(('[INFO] Listening on *: ' + PORT).info);
						});
						_context.next = 11;
						break;

					case 6:
						_context.prev = 6;
						_context.t0 = _context['catch'](0);

						console.log('[Error] Cannot connect MongoDB'.error);
						couter = 0;
						interval = setInterval(function () {
							++couter;
							console.log(('MongoDB not ready, retry in ' + couter + ' seconds...').data);
							if (couter === AttemptConnectDB) {
								clearInterval(interval);
								init(app);
							}
						}, 1000);

					case 11:
					case 'end':
						return _context.stop();
				}
			}
		}, _callee, _this, [[0, 6]]);
	}));

	return function init(_x) {
		return _ref.apply(this, arguments);
	};
}();

/* harmony default export */ __webpack_exports__["a"] = ({
	init: init
});

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(13);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("regenerator-runtime");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var url = __webpack_require__(20);
var apollo_server_core_1 = __webpack_require__(21);
var GraphiQL = __webpack_require__(23);
function graphqlExpress(options) {
    if (!options) {
        throw new Error('Apollo Server requires options.');
    }
    if (arguments.length > 1) {
        throw new Error("Apollo Server expects exactly one argument, got " + arguments.length);
    }
    return function (req, res, next) {
        apollo_server_core_1.runHttpQuery([req, res], {
            method: req.method,
            options: options,
            query: req.method === 'POST' ? req.body : req.query,
        }).then(function (gqlResponse) {
            res.setHeader('Content-Type', 'application/json');
            res.write(gqlResponse);
            res.end();
        }, function (error) {
            if ('HttpQueryError' !== error.name) {
                return next(error);
            }
            if (error.headers) {
                Object.keys(error.headers).forEach(function (header) {
                    res.setHeader(header, error.headers[header]);
                });
            }
            res.statusCode = error.statusCode;
            res.write(error.message);
            res.end();
        });
    };
}
exports.graphqlExpress = graphqlExpress;
function graphiqlExpress(options) {
    return function (req, res, next) {
        var query = req.url && url.parse(req.url, true).query;
        GraphiQL.resolveGraphiQLString(query, options, req).then(function (graphiqlString) {
            res.setHeader('Content-Type', 'text/html');
            res.write(graphiqlString);
            res.end();
        }, function (error) { return next(error); });
    };
}
exports.graphiqlExpress = graphiqlExpress;
//# sourceMappingURL=expressApollo.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(16);
var LogAction;
(function (LogAction) {
    LogAction[LogAction["request"] = 0] = "request";
    LogAction[LogAction["parse"] = 1] = "parse";
    LogAction[LogAction["validation"] = 2] = "validation";
    LogAction[LogAction["execute"] = 3] = "execute";
})(LogAction = exports.LogAction || (exports.LogAction = {}));
var LogStep;
(function (LogStep) {
    LogStep[LogStep["start"] = 0] = "start";
    LogStep[LogStep["end"] = 1] = "end";
    LogStep[LogStep["status"] = 2] = "status";
})(LogStep = exports.LogStep || (exports.LogStep = {}));
var resolvedPromise = Promise.resolve();
function runQuery(options) {
    return resolvedPromise.then(function () { return doRunQuery(options); });
}
exports.runQuery = runQuery;
function doRunQuery(options) {
    var documentAST;
    var logFunction = options.logFunction || function () { return null; };
    var debugDefault = "development" !== 'production' && "development" !== 'test';
    var debug = typeof options.debug !== 'undefined' ? options.debug : debugDefault;
    logFunction({ action: LogAction.request, step: LogStep.start });
    function format(errors) {
        return errors.map(function (error) {
            if (options.formatError) {
                try {
                    return options.formatError(error);
                }
                catch (err) {
                    console.error('Error in formatError function:', err);
                    var newError = new Error('Internal server error');
                    return graphql_1.formatError(newError);
                }
            }
            else {
                return graphql_1.formatError(error);
            }
        });
    }
    function printStackTrace(error) {
        console.error(error.stack);
    }
    var qry = typeof options.query === 'string' ? options.query : graphql_1.print(options.query);
    logFunction({ action: LogAction.request, step: LogStep.status, key: 'query', data: qry });
    logFunction({ action: LogAction.request, step: LogStep.status, key: 'variables', data: options.variables });
    logFunction({ action: LogAction.request, step: LogStep.status, key: 'operationName', data: options.operationName });
    if (typeof options.query === 'string') {
        try {
            logFunction({ action: LogAction.parse, step: LogStep.start });
            documentAST = graphql_1.parse(options.query);
            logFunction({ action: LogAction.parse, step: LogStep.end });
        }
        catch (syntaxError) {
            logFunction({ action: LogAction.parse, step: LogStep.end });
            return Promise.resolve({ errors: format([syntaxError]) });
        }
    }
    else {
        documentAST = options.query;
    }
    var rules = graphql_1.specifiedRules;
    if (options.validationRules) {
        rules = rules.concat(options.validationRules);
    }
    logFunction({ action: LogAction.validation, step: LogStep.start });
    var validationErrors = graphql_1.validate(options.schema, documentAST, rules);
    logFunction({ action: LogAction.validation, step: LogStep.end });
    if (validationErrors.length) {
        return Promise.resolve({ errors: format(validationErrors) });
    }
    try {
        logFunction({ action: LogAction.execute, step: LogStep.start });
        return graphql_1.execute(options.schema, documentAST, options.rootValue, options.context, options.variables, options.operationName).then(function (gqlResponse) {
            logFunction({ action: LogAction.execute, step: LogStep.end });
            logFunction({ action: LogAction.request, step: LogStep.end });
            var response = {
                data: gqlResponse.data,
            };
            if (gqlResponse.errors) {
                response['errors'] = format(gqlResponse.errors);
                if (debug) {
                    gqlResponse.errors.map(printStackTrace);
                }
            }
            if (options.formatResponse) {
                response = options.formatResponse(response, options);
            }
            return response;
        });
    }
    catch (executionError) {
        logFunction({ action: LogAction.execute, step: LogStep.end });
        logFunction({ action: LogAction.request, step: LogStep.end });
        return Promise.resolve({ errors: format([executionError]) });
    }
}
//# sourceMappingURL=runQuery.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("graphql");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
function resolveGraphqlOptions(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isOptionsFunction(options)) return [3, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, options.apply(void 0, args)];
                case 2: return [2, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    throw new Error("Invalid options provided to ApolloServer: " + e_1.message);
                case 4: return [3, 6];
                case 5: return [2, options];
                case 6: return [2];
            }
        });
    });
}
exports.resolveGraphqlOptions = resolveGraphqlOptions;
function isOptionsFunction(arg) {
    return typeof arg === 'function';
}
exports.isOptionsFunction = isOptionsFunction;
//# sourceMappingURL=graphqlOptions.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var GRAPHIQL_VERSION = '0.11.2';
var SUBSCRIPTIONS_TRANSPORT_VERSION = '0.8.2';
function safeSerialize(data) {
    return data ? JSON.stringify(data).replace(/\//g, '\\/') : null;
}
function renderGraphiQL(data) {
    var endpointURL = data.endpointURL;
    var endpointWs = endpointURL.startsWith('ws://');
    var subscriptionsEndpoint = data.subscriptionsEndpoint;
    var usingHttp = !endpointWs;
    var usingWs = endpointWs || !!subscriptionsEndpoint;
    var endpointURLWs = usingWs && (endpointWs ? endpointURL : subscriptionsEndpoint);
    var queryString = data.query;
    var variablesString = data.variables ? JSON.stringify(data.variables, null, 2) : null;
    var resultString = null;
    var operationName = data.operationName;
    var passHeader = data.passHeader ? data.passHeader : '';
    var editorTheme = data.editorTheme;
    var usingEditorTheme = !!editorTheme;
    return "\n<!DOCTYPE html>\n<html>\n<head>\n  <meta charset=\"utf-8\" />\n  <title>GraphiQL</title>\n  <meta name=\"robots\" content=\"noindex\" />\n  <style>\n    html, body {\n      height: 100%;\n      margin: 0;\n      overflow: hidden;\n      width: 100%;\n    }\n  </style>\n  <link href=\"//unpkg.com/graphiql@" + GRAPHIQL_VERSION + "/graphiql.css\" rel=\"stylesheet\" />\n  <script src=\"//unpkg.com/react@15.6.1/dist/react.min.js\"></script>\n  <script src=\"//unpkg.com/react-dom@15.6.1/dist/react-dom.min.js\"></script>\n  <script src=\"//unpkg.com/graphiql@" + GRAPHIQL_VERSION + "/graphiql.min.js\"></script>\n  " + (usingEditorTheme ?
        "<link href=\"//cdn.jsdelivr.net/npm/codemirror@5/theme/" + editorTheme + ".min.css\" rel=\"stylesheet\" />"
        : '') + "\n  " + (usingHttp ?
        "<script src=\"//cdn.jsdelivr.net/fetch/2.0.1/fetch.min.js\"></script>"
        : '') + "\n  " + (usingWs ?
        "<script src=\"//unpkg.com/subscriptions-transport-ws@" + SUBSCRIPTIONS_TRANSPORT_VERSION + "/browser/client.js\"></script>"
        : '') + "\n  " + (usingWs && usingHttp ?
        '<script src="//unpkg.com/graphiql-subscriptions-fetcher@0.0.2/browser/client.js"></script>'
        : '') + "\n\n</head>\n<body>\n  <script>\n    // Collect the URL parameters\n    var parameters = {};\n    window.location.search.substr(1).split('&').forEach(function (entry) {\n      var eq = entry.indexOf('=');\n      if (eq >= 0) {\n        parameters[decodeURIComponent(entry.slice(0, eq))] =\n          decodeURIComponent(entry.slice(eq + 1));\n      }\n    });\n    // Produce a Location query string from a parameter object.\n    function locationQuery(params, location) {\n      return (location ? location: '') + '?' + Object.keys(params).map(function (key) {\n        return encodeURIComponent(key) + '=' +\n          encodeURIComponent(params[key]);\n      }).join('&');\n    }\n    // Derive a fetch URL from the current URL, sans the GraphQL parameters.\n    var graphqlParamNames = {\n      query: true,\n      variables: true,\n      operationName: true\n    };\n    var otherParams = {};\n    for (var k in parameters) {\n      if (parameters.hasOwnProperty(k) && graphqlParamNames[k] !== true) {\n        otherParams[k] = parameters[k];\n      }\n    }\n\n    " + (usingWs ? "\n    var subscriptionsClient = new window.SubscriptionsTransportWs.SubscriptionClient('" + endpointURLWs + "', {\n      reconnect: true\n    });\n\n    var graphQLWSFetcher = subscriptionsClient.request.bind(subscriptionsClient);\n    " : '') + "\n\n    " + (usingHttp ? "\n      // We don't use safe-serialize for location, because it's not client input.\n      var fetchURL = locationQuery(otherParams, '" + endpointURL + "');\n\n      // Defines a GraphQL fetcher using the fetch API.\n      function graphQLHttpFetcher(graphQLParams) {\n          return fetch(fetchURL, {\n            method: 'post',\n            headers: {\n              'Accept': 'application/json',\n              'Content-Type': 'application/json',\n              " + passHeader + "\n            },\n            body: JSON.stringify(graphQLParams),\n            credentials: 'include',\n          }).then(function (response) {\n            return response.text();\n          }).then(function (responseBody) {\n            try {\n              return JSON.parse(responseBody);\n            } catch (error) {\n              return responseBody;\n            }\n          });\n      }\n    " : '') + "\n\n    " + (usingWs && usingHttp ? "\n      var fetcher =\n        window.GraphiQLSubscriptionsFetcher.graphQLFetcher(subscriptionsClient, graphQLHttpFetcher);\n    " : "\n      var fetcher = " + (usingWs ? 'graphQLWSFetcher' : 'graphQLHttpFetcher') + ";\n    ") + "\n\n    // When the query and variables string is edited, update the URL bar so\n    // that it can be easily shared.\n    function onEditQuery(newQuery) {\n      parameters.query = newQuery;\n      updateURL();\n    }\n    function onEditVariables(newVariables) {\n      parameters.variables = newVariables;\n      updateURL();\n    }\n    function onEditOperationName(newOperationName) {\n      parameters.operationName = newOperationName;\n      updateURL();\n    }\n    function updateURL() {\n      var cleanParams = Object.keys(parameters).filter(function(v) {\n        return parameters[v] !== undefined;\n      }).reduce(function(old, v) {\n        old[v] = parameters[v];\n        return old;\n      }, {});\n\n      history.replaceState(null, null, locationQuery(cleanParams) + window.location.hash);\n    }\n    // Render <GraphiQL /> into the body.\n    ReactDOM.render(\n      React.createElement(GraphiQL, {\n        fetcher: fetcher,\n        onEditQuery: onEditQuery,\n        onEditVariables: onEditVariables,\n        onEditOperationName: onEditOperationName,\n        query: " + safeSerialize(queryString) + ",\n        response: " + safeSerialize(resultString) + ",\n        variables: " + safeSerialize(variablesString) + ",\n        operationName: " + safeSerialize(operationName) + ",\n        editorTheme: " + safeSerialize(editorTheme) + ",\n      }),\n      document.body\n    );\n  </script>\n</body>\n</html>";
}
exports.renderGraphiQL = renderGraphiQL;
//# sourceMappingURL=renderGraphiQL.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var expressApollo_1 = __webpack_require__(14);
exports.graphqlExpress = expressApollo_1.graphqlExpress;
exports.graphiqlExpress = expressApollo_1.graphiqlExpress;
var connectApollo_1 = __webpack_require__(25);
exports.graphqlConnect = connectApollo_1.graphqlConnect;
exports.graphiqlConnect = connectApollo_1.graphiqlConnect;
//# sourceMappingURL=index.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var runQuery_1 = __webpack_require__(15);
exports.runQuery = runQuery_1.runQuery;
exports.LogStep = runQuery_1.LogStep;
exports.LogAction = runQuery_1.LogAction;
var runHttpQuery_1 = __webpack_require__(22);
exports.runHttpQuery = runHttpQuery_1.runHttpQuery;
exports.HttpQueryError = runHttpQuery_1.HttpQueryError;
var graphqlOptions_1 = __webpack_require__(17);
exports.resolveGraphqlOptions = graphqlOptions_1.resolveGraphqlOptions;
//# sourceMappingURL=index.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var graphql_1 = __webpack_require__(16);
var runQuery_1 = __webpack_require__(15);
var graphqlOptions_1 = __webpack_require__(17);
var HttpQueryError = (function (_super) {
    __extends(HttpQueryError, _super);
    function HttpQueryError(statusCode, message, isGraphQLError, headers) {
        if (isGraphQLError === void 0) { isGraphQLError = false; }
        var _this = _super.call(this, message) || this;
        _this.name = 'HttpQueryError';
        _this.statusCode = statusCode;
        _this.isGraphQLError = isGraphQLError;
        _this.headers = headers;
        return _this;
    }
    return HttpQueryError;
}(Error));
exports.HttpQueryError = HttpQueryError;
function isQueryOperation(query, operationName) {
    var operationAST = graphql_1.getOperationAST(query, operationName);
    return operationAST.operation === 'query';
}
function runHttpQuery(handlerArguments, request) {
    return __awaiter(this, void 0, void 0, function () {
        var isGetRequest, optionsObject, e_1, formatErrorFn, requestPayload, isBatch, requests, responses, gqlResponse;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    isGetRequest = false;
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, graphqlOptions_1.resolveGraphqlOptions.apply(void 0, [request.options].concat(handlerArguments))];
                case 2:
                    optionsObject = _a.sent();
                    return [3, 4];
                case 3:
                    e_1 = _a.sent();
                    throw new HttpQueryError(500, e_1.message);
                case 4:
                    formatErrorFn = optionsObject.formatError || graphql_1.formatError;
                    switch (request.method) {
                        case 'POST':
                            if (!request.query) {
                                throw new HttpQueryError(500, 'POST body missing. Did you forget use body-parser middleware?');
                            }
                            requestPayload = request.query;
                            break;
                        case 'GET':
                            if (!request.query || (Object.keys(request.query).length === 0)) {
                                throw new HttpQueryError(400, 'GET query missing.');
                            }
                            isGetRequest = true;
                            requestPayload = request.query;
                            break;
                        default:
                            throw new HttpQueryError(405, 'Apollo Server supports only GET/POST requests.', false, {
                                'Allow': 'GET, POST',
                            });
                    }
                    isBatch = true;
                    if (!Array.isArray(requestPayload)) {
                        isBatch = false;
                        requestPayload = [requestPayload];
                    }
                    requests = requestPayload.map(function (requestParams) {
                        try {
                            var query = requestParams.query;
                            if (isGetRequest) {
                                if (typeof query === 'string') {
                                    query = graphql_1.parse(query);
                                }
                                if (!isQueryOperation(query, requestParams.operationName)) {
                                    throw new HttpQueryError(405, "GET supports only query operation", false, {
                                        'Allow': 'POST',
                                    });
                                }
                            }
                            var operationName = requestParams.operationName;
                            var variables = requestParams.variables;
                            if (typeof variables === 'string') {
                                try {
                                    variables = JSON.parse(variables);
                                }
                                catch (error) {
                                    throw new HttpQueryError(400, 'Variables are invalid JSON.');
                                }
                            }
                            var context_1 = optionsObject.context;
                            if (isBatch) {
                                context_1 = Object.assign({}, context_1 || {});
                            }
                            var params = {
                                schema: optionsObject.schema,
                                query: query,
                                variables: variables,
                                context: context_1,
                                rootValue: optionsObject.rootValue,
                                operationName: operationName,
                                logFunction: optionsObject.logFunction,
                                validationRules: optionsObject.validationRules,
                                formatError: formatErrorFn,
                                formatResponse: optionsObject.formatResponse,
                                debug: optionsObject.debug,
                            };
                            if (optionsObject.formatParams) {
                                params = optionsObject.formatParams(params);
                            }
                            return runQuery_1.runQuery(params);
                        }
                        catch (e) {
                            if (e.name === 'HttpQueryError') {
                                return Promise.reject(e);
                            }
                            return Promise.resolve({ errors: [formatErrorFn(e)] });
                        }
                    });
                    return [4, Promise.all(requests)];
                case 5:
                    responses = _a.sent();
                    if (!isBatch) {
                        gqlResponse = responses[0];
                        if (gqlResponse.errors && typeof gqlResponse.data === 'undefined') {
                            throw new HttpQueryError(400, JSON.stringify(gqlResponse), true, {
                                'Content-Type': 'application/json',
                            });
                        }
                        return [2, JSON.stringify(gqlResponse)];
                    }
                    return [2, JSON.stringify(responses)];
            }
        });
    });
}
exports.runHttpQuery = runHttpQuery;
//# sourceMappingURL=runHttpQuery.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var renderGraphiQL_1 = __webpack_require__(18);
exports.renderGraphiQL = renderGraphiQL_1.renderGraphiQL;
var resolveGraphiQLString_1 = __webpack_require__(24);
exports.resolveGraphiQLString = resolveGraphiQLString_1.resolveGraphiQLString;
//# sourceMappingURL=index.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var renderGraphiQL_1 = __webpack_require__(18);
function isOptionsFunction(arg) {
    return typeof arg === 'function';
}
function resolveGraphiQLOptions(options) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var e_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    if (!isOptionsFunction(options)) return [3, 5];
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, , 4]);
                    return [4, options.apply(void 0, args)];
                case 2: return [2, _a.sent()];
                case 3:
                    e_1 = _a.sent();
                    throw new Error("Invalid options provided for GraphiQL: " + e_1.message);
                case 4: return [3, 6];
                case 5: return [2, options];
                case 6: return [2];
            }
        });
    });
}
function createGraphiQLParams(query) {
    if (query === void 0) { query = {}; }
    return {
        query: query.query || '',
        variables: query.variables,
        operationName: query.operationName || '',
    };
}
function createGraphiQLData(params, options) {
    return {
        endpointURL: options.endpointURL,
        subscriptionsEndpoint: options.subscriptionsEndpoint,
        query: params.query || options.query,
        variables: params.variables && JSON.parse(params.variables) || options.variables,
        operationName: params.operationName || options.operationName,
        passHeader: options.passHeader,
        editorTheme: options.editorTheme,
    };
}
function resolveGraphiQLString(query, options) {
    if (query === void 0) { query = {}; }
    var args = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        args[_i - 2] = arguments[_i];
    }
    return __awaiter(this, void 0, void 0, function () {
        var graphiqlParams, graphiqlOptions, graphiqlData;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    graphiqlParams = createGraphiQLParams(query);
                    return [4, resolveGraphiQLOptions.apply(void 0, [options].concat(args))];
                case 1:
                    graphiqlOptions = _a.sent();
                    graphiqlData = createGraphiQLData(graphiqlParams, graphiqlOptions);
                    return [2, renderGraphiQL_1.renderGraphiQL(graphiqlData)];
            }
        });
    });
}
exports.resolveGraphiQLString = resolveGraphiQLString;
//# sourceMappingURL=resolveGraphiQLString.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var expressApollo_1 = __webpack_require__(14);
exports.graphqlConnect = expressApollo_1.graphqlExpress;
exports.graphiqlConnect = expressApollo_1.graphiqlExpress;
//# sourceMappingURL=connectApollo.js.map

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_graphql_tools___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__resolvers__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__typeDefs__ = __webpack_require__(29);





/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_graphql_tools__["makeExecutableSchema"])({ typeDefs: __WEBPACK_IMPORTED_MODULE_2__typeDefs__["a" /* default */], resolvers: __WEBPACK_IMPORTED_MODULE_1__resolvers__["a" /* default */] }));

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("graphql-tools");

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__queries__ = __webpack_require__(34);



var rootResolvers = {
	RootQuery: __WEBPACK_IMPORTED_MODULE_1__queries__
};

/* harmony default export */ __webpack_exports__["a"] = (Object(__WEBPACK_IMPORTED_MODULE_0_lodash__["merge"])(rootResolvers));

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__RootQuery__ = __webpack_require__(31);
// import RootMutation from 'schema/typeDefs/RootMutation'


var Schema = '\n\tschema {\n\t\tquery: RootQuery\n\t}\n';

/* harmony default export */ __webpack_exports__["a"] = ([__WEBPACK_IMPORTED_MODULE_0__RootQuery__["a" /* default */], Schema]);

/***/ }),
/* 30 */,
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__types__ = __webpack_require__(35);


var RootQuery = '\n\ttype RootQuery {\n\t\tusers: [User]\n\t}\n';

/* harmony default export */ __webpack_exports__["a"] = (function () {
	return [RootQuery, __WEBPACK_IMPORTED_MODULE_0__types__["a" /* User */]];
});

/***/ }),
/* 32 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 33 */,
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__users__ = __webpack_require__(39);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "users", function() { return __WEBPACK_IMPORTED_MODULE_0__users__["a"]; });



/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__User__ = __webpack_require__(36);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__User__["a"]; });



/***/ }),
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__interfaces__ = __webpack_require__(37);


var User = '\n\ttype User implements UserInterface {\n\t\tid: ID!\n\t\tusername: String!\n\t\tdescription: String\n\t}\n';

/* harmony default export */ __webpack_exports__["a"] = (function () {
	return [User, __WEBPACK_IMPORTED_MODULE_0__interfaces__["a" /* UserInterface */]];
});

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__UserInterface__ = __webpack_require__(38);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__UserInterface__["a"]; });



/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var UserInterface = "\n\tinterface UserInterface {\n\t\tid: ID!\n\t\tusername: String!\n\t\tdescription: String\n\t}\n";

/* harmony default export */ __webpack_exports__["a"] = (function () {
	return [UserInterface];
});

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator__);


var _this = this;

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

/* harmony default export */ __webpack_exports__["a"] = (_asyncToGenerator(__WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator___default.a.mark(function _callee() {
	return __WEBPACK_IMPORTED_MODULE_0__Users_chutiphon_k_GitHub_express_graphql_mongo_boilerplate_node_modules_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
		while (1) {
			switch (_context.prev = _context.next) {
				case 0:
					return _context.abrupt('return', [{
						id: 1,
						username: 'eieiza'
					}, {
						id: 2,
						username: 'eieiza'
					}]);

				case 1:
				case 'end':
					return _context.stop();
			}
		}
	}, _callee, _this);
})));

/***/ })
/******/ ]);
//# sourceMappingURL=main.map