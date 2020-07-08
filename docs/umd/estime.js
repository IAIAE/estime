(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["estime"] = factory();
	else
		root["estime"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
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

/***/ "./node_modules/@babel/runtime/helpers/construct.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/construct.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    module.exports = _construct = Reflect.construct;
  } else {
    module.exports = _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

module.exports = _construct;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/getPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _getPrototypeOf(o) {
  module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

module.exports = _getPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/inheritsLoose.js":
/*!**************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/inheritsLoose.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

module.exports = _inheritsLoose;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/isNativeFunction.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/isNativeFunction.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

module.exports = _isNativeFunction;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/setPrototypeOf.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _setPrototypeOf(o, p) {
  module.exports = _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

module.exports = _setPrototypeOf;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/wrapNativeSuper.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var getPrototypeOf = __webpack_require__(/*! ./getPrototypeOf */ "./node_modules/@babel/runtime/helpers/getPrototypeOf.js");

var setPrototypeOf = __webpack_require__(/*! ./setPrototypeOf */ "./node_modules/@babel/runtime/helpers/setPrototypeOf.js");

var isNativeFunction = __webpack_require__(/*! ./isNativeFunction */ "./node_modules/@babel/runtime/helpers/isNativeFunction.js");

var construct = __webpack_require__(/*! ./construct */ "./node_modules/@babel/runtime/helpers/construct.js");

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  module.exports = _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return construct(Class, arguments, getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

module.exports = _wrapNativeSuper;

/***/ }),

/***/ "./node_modules/@babel/runtime/regenerator/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/@babel/runtime/regenerator/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! regenerator-runtime */ "./node_modules/regenerator-runtime/runtime.js");


/***/ }),

/***/ "./node_modules/acorn-class-fields/index.js":
/*!**************************************************!*\
  !*** ./node_modules/acorn-class-fields/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const privateClassElements = __webpack_require__(/*! acorn-private-class-elements */ "./node_modules/acorn-private-class-elements/index.js")

module.exports = function(Parser) {
  const acorn = Parser.acorn || __webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs")
  const tt = acorn.tokTypes

  Parser = privateClassElements(Parser)
  return class extends Parser {
    _maybeParseFieldValue(field) {
      if (this.eat(tt.eq)) {
        const oldInFieldValue = this._inFieldValue
        this._inFieldValue = true
        field.value = this.parseExpression()
        this._inFieldValue = oldInFieldValue
      } else field.value = null
    }

    // Parse fields
    parseClassElement(_constructorAllowsSuper) {
      if (this.options.ecmaVersion >= 8 && (this.type == tt.name || this.type.keyword || this.type == this.privateNameToken || this.type == tt.bracketL || this.type == tt.string || this.type == tt.num)) {
        const branch = this._branch()
        if (branch.type == tt.bracketL) {
          let count = 0
          do {
            if (branch.eat(tt.bracketL)) ++count
            else if (branch.eat(tt.bracketR)) --count
            else branch.next()
          } while (count > 0)
        } else branch.next(true)
        if (branch.type == tt.eq || branch.canInsertSemicolon() || branch.type == tt.semi) {
          const node = this.startNode()
          if (this.type == this.privateNameToken) {
            this.parsePrivateClassElementName(node)
          } else {
            this.parsePropertyName(node)
          }
          if ((node.key.type === "Identifier" && node.key.name === "constructor") ||
              (node.key.type === "Literal" && node.key.value === "constructor")) {
            this.raise(node.key.start, "Classes may not have a field called constructor")
          }
          this.enterScope(64 | 2 | 1) // See acorn's scopeflags.js
          this._maybeParseFieldValue(node)
          this.exitScope()
          this.finishNode(node, "FieldDefinition")
          this.semicolon()
          return node
        }
      }

      return super.parseClassElement.apply(this, arguments)
    }

    // Prohibit arguments in class field initializers
    parseIdent(liberal, isBinding) {
      const ident = super.parseIdent(liberal, isBinding)
      if (this._inFieldValue && ident.name == "arguments") this.raise(ident.start, "A class field initializer may not contain arguments")
      return ident
    }
  }
}


/***/ }),

/***/ "./node_modules/acorn-jsx/index.js":
/*!*****************************************!*\
  !*** ./node_modules/acorn-jsx/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const XHTMLEntities = __webpack_require__(/*! ./xhtml */ "./node_modules/acorn-jsx/xhtml.js");

const hexNumber = /^[\da-fA-F]+$/;
const decimalNumber = /^\d+$/;

// The map to `acorn-jsx` tokens from `acorn` namespace objects.
const acornJsxMap = new WeakMap();

// Get the original tokens for the given `acorn` namespace object.
function getJsxTokens(acorn) {
  acorn = acorn.Parser.acorn || acorn;
  let acornJsx = acornJsxMap.get(acorn);
  if (!acornJsx) {
    const tt = acorn.tokTypes;
    const TokContext = acorn.TokContext;
    const TokenType = acorn.TokenType;
    const tc_oTag = new TokContext('<tag', false);
    const tc_cTag = new TokContext('</tag', false);
    const tc_expr = new TokContext('<tag>...</tag>', true, true);
    const tokContexts = {
      tc_oTag: tc_oTag,
      tc_cTag: tc_cTag,
      tc_expr: tc_expr
    };
    const tokTypes = {
      jsxName: new TokenType('jsxName'),
      jsxText: new TokenType('jsxText', {beforeExpr: true}),
      jsxTagStart: new TokenType('jsxTagStart'),
      jsxTagEnd: new TokenType('jsxTagEnd')
    };

    tokTypes.jsxTagStart.updateContext = function() {
      this.context.push(tc_expr); // treat as beginning of JSX expression
      this.context.push(tc_oTag); // start opening tag context
      this.exprAllowed = false;
    };
    tokTypes.jsxTagEnd.updateContext = function(prevType) {
      let out = this.context.pop();
      if (out === tc_oTag && prevType === tt.slash || out === tc_cTag) {
        this.context.pop();
        this.exprAllowed = this.curContext() === tc_expr;
      } else {
        this.exprAllowed = true;
      }
    };

    acornJsx = { tokContexts: tokContexts, tokTypes: tokTypes };
    acornJsxMap.set(acorn, acornJsx);
  }

  return acornJsx;
}

// Transforms JSX element name to string.

function getQualifiedJSXName(object) {
  if (!object)
    return object;

  if (object.type === 'JSXIdentifier')
    return object.name;

  if (object.type === 'JSXNamespacedName')
    return object.namespace.name + ':' + object.name.name;

  if (object.type === 'JSXMemberExpression')
    return getQualifiedJSXName(object.object) + '.' +
    getQualifiedJSXName(object.property);
}

module.exports = function(options) {
  options = options || {};
  return function(Parser) {
    return plugin({
      allowNamespaces: options.allowNamespaces !== false,
      allowNamespacedObjects: !!options.allowNamespacedObjects
    }, Parser);
  };
};

// This is `tokTypes` of the peer dep.
// This can be different instances from the actual `tokTypes` this plugin uses.
Object.defineProperty(module.exports, "tokTypes", {
  get: function get_tokTypes() {
    return getJsxTokens(__webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs")).tokTypes;
  },
  configurable: true,
  enumerable: true
});

function plugin(options, Parser) {
  const acorn = Parser.acorn || __webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs");
  const acornJsx = getJsxTokens(acorn);
  const tt = acorn.tokTypes;
  const tok = acornJsx.tokTypes;
  const tokContexts = acorn.tokContexts;
  const tc_oTag = acornJsx.tokContexts.tc_oTag;
  const tc_cTag = acornJsx.tokContexts.tc_cTag;
  const tc_expr = acornJsx.tokContexts.tc_expr;
  const isNewLine = acorn.isNewLine;
  const isIdentifierStart = acorn.isIdentifierStart;
  const isIdentifierChar = acorn.isIdentifierChar;

  return class extends Parser {
    // Expose actual `tokTypes` and `tokContexts` to other plugins.
    static get acornJsx() {
      return acornJsx;
    }

    // Reads inline JSX contents token.
    jsx_readToken() {
      let out = '', chunkStart = this.pos;
      for (;;) {
        if (this.pos >= this.input.length)
          this.raise(this.start, 'Unterminated JSX contents');
        let ch = this.input.charCodeAt(this.pos);

        switch (ch) {
        case 60: // '<'
        case 123: // '{'
          if (this.pos === this.start) {
            if (ch === 60 && this.exprAllowed) {
              ++this.pos;
              return this.finishToken(tok.jsxTagStart);
            }
            return this.getTokenFromCode(ch);
          }
          out += this.input.slice(chunkStart, this.pos);
          return this.finishToken(tok.jsxText, out);

        case 38: // '&'
          out += this.input.slice(chunkStart, this.pos);
          out += this.jsx_readEntity();
          chunkStart = this.pos;
          break;

        case 62: // '>'
        case 125: // '}'
          this.raise(
            this.pos,
            "Unexpected token `" + this.input[this.pos] + "`. Did you mean `" +
              (ch === 62 ? "&gt;" : "&rbrace;") + "` or " + "`{\"" + this.input[this.pos] + "\"}" + "`?"
          );

        default:
          if (isNewLine(ch)) {
            out += this.input.slice(chunkStart, this.pos);
            out += this.jsx_readNewLine(true);
            chunkStart = this.pos;
          } else {
            ++this.pos;
          }
        }
      }
    }

    jsx_readNewLine(normalizeCRLF) {
      let ch = this.input.charCodeAt(this.pos);
      let out;
      ++this.pos;
      if (ch === 13 && this.input.charCodeAt(this.pos) === 10) {
        ++this.pos;
        out = normalizeCRLF ? '\n' : '\r\n';
      } else {
        out = String.fromCharCode(ch);
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }

      return out;
    }

    jsx_readString(quote) {
      let out = '', chunkStart = ++this.pos;
      for (;;) {
        if (this.pos >= this.input.length)
          this.raise(this.start, 'Unterminated string constant');
        let ch = this.input.charCodeAt(this.pos);
        if (ch === quote) break;
        if (ch === 38) { // '&'
          out += this.input.slice(chunkStart, this.pos);
          out += this.jsx_readEntity();
          chunkStart = this.pos;
        } else if (isNewLine(ch)) {
          out += this.input.slice(chunkStart, this.pos);
          out += this.jsx_readNewLine(false);
          chunkStart = this.pos;
        } else {
          ++this.pos;
        }
      }
      out += this.input.slice(chunkStart, this.pos++);
      return this.finishToken(tt.string, out);
    }

    jsx_readEntity() {
      let str = '', count = 0, entity;
      let ch = this.input[this.pos];
      if (ch !== '&')
        this.raise(this.pos, 'Entity must start with an ampersand');
      let startPos = ++this.pos;
      while (this.pos < this.input.length && count++ < 10) {
        ch = this.input[this.pos++];
        if (ch === ';') {
          if (str[0] === '#') {
            if (str[1] === 'x') {
              str = str.substr(2);
              if (hexNumber.test(str))
                entity = String.fromCharCode(parseInt(str, 16));
            } else {
              str = str.substr(1);
              if (decimalNumber.test(str))
                entity = String.fromCharCode(parseInt(str, 10));
            }
          } else {
            entity = XHTMLEntities[str];
          }
          break;
        }
        str += ch;
      }
      if (!entity) {
        this.pos = startPos;
        return '&';
      }
      return entity;
    }

    // Read a JSX identifier (valid tag or attribute name).
    //
    // Optimized version since JSX identifiers can't contain
    // escape characters and so can be read as single slice.
    // Also assumes that first character was already checked
    // by isIdentifierStart in readToken.

    jsx_readWord() {
      let ch, start = this.pos;
      do {
        ch = this.input.charCodeAt(++this.pos);
      } while (isIdentifierChar(ch) || ch === 45); // '-'
      return this.finishToken(tok.jsxName, this.input.slice(start, this.pos));
    }

    // Parse next token as JSX identifier

    jsx_parseIdentifier() {
      let node = this.startNode();
      if (this.type === tok.jsxName)
        node.name = this.value;
      else if (this.type.keyword)
        node.name = this.type.keyword;
      else
        this.unexpected();
      this.next();
      return this.finishNode(node, 'JSXIdentifier');
    }

    // Parse namespaced identifier.

    jsx_parseNamespacedName() {
      let startPos = this.start, startLoc = this.startLoc;
      let name = this.jsx_parseIdentifier();
      if (!options.allowNamespaces || !this.eat(tt.colon)) return name;
      var node = this.startNodeAt(startPos, startLoc);
      node.namespace = name;
      node.name = this.jsx_parseIdentifier();
      return this.finishNode(node, 'JSXNamespacedName');
    }

    // Parses element name in any form - namespaced, member
    // or single identifier.

    jsx_parseElementName() {
      if (this.type === tok.jsxTagEnd) return '';
      let startPos = this.start, startLoc = this.startLoc;
      let node = this.jsx_parseNamespacedName();
      if (this.type === tt.dot && node.type === 'JSXNamespacedName' && !options.allowNamespacedObjects) {
        this.unexpected();
      }
      while (this.eat(tt.dot)) {
        let newNode = this.startNodeAt(startPos, startLoc);
        newNode.object = node;
        newNode.property = this.jsx_parseIdentifier();
        node = this.finishNode(newNode, 'JSXMemberExpression');
      }
      return node;
    }

    // Parses any type of JSX attribute value.

    jsx_parseAttributeValue() {
      switch (this.type) {
      case tt.braceL:
        let node = this.jsx_parseExpressionContainer();
        if (node.expression.type === 'JSXEmptyExpression')
          this.raise(node.start, 'JSX attributes must only be assigned a non-empty expression');
        return node;

      case tok.jsxTagStart:
      case tt.string:
        return this.parseExprAtom();

      default:
        this.raise(this.start, 'JSX value should be either an expression or a quoted JSX text');
      }
    }

    // JSXEmptyExpression is unique type since it doesn't actually parse anything,
    // and so it should start at the end of last read token (left brace) and finish
    // at the beginning of the next one (right brace).

    jsx_parseEmptyExpression() {
      let node = this.startNodeAt(this.lastTokEnd, this.lastTokEndLoc);
      return this.finishNodeAt(node, 'JSXEmptyExpression', this.start, this.startLoc);
    }

    // Parses JSX expression enclosed into curly brackets.

    jsx_parseExpressionContainer() {
      let node = this.startNode();
      this.next();
      node.expression = this.type === tt.braceR
        ? this.jsx_parseEmptyExpression()
        : this.parseExpression();
      this.expect(tt.braceR);
      return this.finishNode(node, 'JSXExpressionContainer');
    }

    // Parses following JSX attribute name-value pair.

    jsx_parseAttribute() {
      let node = this.startNode();
      if (this.eat(tt.braceL)) {
        this.expect(tt.ellipsis);
        node.argument = this.parseMaybeAssign();
        this.expect(tt.braceR);
        return this.finishNode(node, 'JSXSpreadAttribute');
      }
      node.name = this.jsx_parseNamespacedName();
      node.value = this.eat(tt.eq) ? this.jsx_parseAttributeValue() : null;
      return this.finishNode(node, 'JSXAttribute');
    }

    // Parses JSX opening tag starting after '<'.

    jsx_parseOpeningElementAt(startPos, startLoc) {
      let node = this.startNodeAt(startPos, startLoc);
      node.attributes = [];
      let nodeName = this.jsx_parseElementName();
      if (nodeName) node.name = nodeName;
      while (this.type !== tt.slash && this.type !== tok.jsxTagEnd)
        node.attributes.push(this.jsx_parseAttribute());
      node.selfClosing = this.eat(tt.slash);
      this.expect(tok.jsxTagEnd);
      return this.finishNode(node, nodeName ? 'JSXOpeningElement' : 'JSXOpeningFragment');
    }

    // Parses JSX closing tag starting after '</'.

    jsx_parseClosingElementAt(startPos, startLoc) {
      let node = this.startNodeAt(startPos, startLoc);
      let nodeName = this.jsx_parseElementName();
      if (nodeName) node.name = nodeName;
      this.expect(tok.jsxTagEnd);
      return this.finishNode(node, nodeName ? 'JSXClosingElement' : 'JSXClosingFragment');
    }

    // Parses entire JSX element, including it's opening tag
    // (starting after '<'), attributes, contents and closing tag.

    jsx_parseElementAt(startPos, startLoc) {
      let node = this.startNodeAt(startPos, startLoc);
      let children = [];
      let openingElement = this.jsx_parseOpeningElementAt(startPos, startLoc);
      let closingElement = null;

      if (!openingElement.selfClosing) {
        contents: for (;;) {
          switch (this.type) {
          case tok.jsxTagStart:
            startPos = this.start; startLoc = this.startLoc;
            this.next();
            if (this.eat(tt.slash)) {
              closingElement = this.jsx_parseClosingElementAt(startPos, startLoc);
              break contents;
            }
            children.push(this.jsx_parseElementAt(startPos, startLoc));
            break;

          case tok.jsxText:
            children.push(this.parseExprAtom());
            break;

          case tt.braceL:
            children.push(this.jsx_parseExpressionContainer());
            break;

          default:
            this.unexpected();
          }
        }
        if (getQualifiedJSXName(closingElement.name) !== getQualifiedJSXName(openingElement.name)) {
          this.raise(
            closingElement.start,
            'Expected corresponding JSX closing tag for <' + getQualifiedJSXName(openingElement.name) + '>');
        }
      }
      let fragmentOrElement = openingElement.name ? 'Element' : 'Fragment';

      node['opening' + fragmentOrElement] = openingElement;
      node['closing' + fragmentOrElement] = closingElement;
      node.children = children;
      if (this.type === tt.relational && this.value === "<") {
        this.raise(this.start, "Adjacent JSX elements must be wrapped in an enclosing tag");
      }
      return this.finishNode(node, 'JSX' + fragmentOrElement);
    }

    // Parse JSX text

    jsx_parseText() {
      let node = this.parseLiteral(this.value);
      node.type = "JSXText";
      return node;
    }

    // Parses entire JSX element from current position.

    jsx_parseElement() {
      let startPos = this.start, startLoc = this.startLoc;
      this.next();
      return this.jsx_parseElementAt(startPos, startLoc);
    }

    parseExprAtom(refShortHandDefaultPos) {
      if (this.type === tok.jsxText)
        return this.jsx_parseText();
      else if (this.type === tok.jsxTagStart)
        return this.jsx_parseElement();
      else
        return super.parseExprAtom(refShortHandDefaultPos);
    }

    readToken(code) {
      let context = this.curContext();

      if (context === tc_expr) return this.jsx_readToken();

      if (context === tc_oTag || context === tc_cTag) {
        if (isIdentifierStart(code)) return this.jsx_readWord();

        if (code == 62) {
          ++this.pos;
          return this.finishToken(tok.jsxTagEnd);
        }

        if ((code === 34 || code === 39) && context == tc_oTag)
          return this.jsx_readString(code);
      }

      if (code === 60 && this.exprAllowed && this.input.charCodeAt(this.pos + 1) !== 33) {
        ++this.pos;
        return this.finishToken(tok.jsxTagStart);
      }
      return super.readToken(code);
    }

    updateContext(prevType) {
      if (this.type == tt.braceL) {
        var curContext = this.curContext();
        if (curContext == tc_oTag) this.context.push(tokContexts.b_expr);
        else if (curContext == tc_expr) this.context.push(tokContexts.b_tmpl);
        else super.updateContext(prevType);
        this.exprAllowed = true;
      } else if (this.type === tt.slash && prevType === tok.jsxTagStart) {
        this.context.length -= 2; // do not consider JSX expr -> JSX open tag -> ... anymore
        this.context.push(tc_cTag); // reconsider as closing tag context
        this.exprAllowed = false;
      } else {
        return super.updateContext(prevType);
      }
    }
  };
}


/***/ }),

/***/ "./node_modules/acorn-jsx/xhtml.js":
/*!*****************************************!*\
  !*** ./node_modules/acorn-jsx/xhtml.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = {
  quot: '\u0022',
  amp: '&',
  apos: '\u0027',
  lt: '<',
  gt: '>',
  nbsp: '\u00A0',
  iexcl: '\u00A1',
  cent: '\u00A2',
  pound: '\u00A3',
  curren: '\u00A4',
  yen: '\u00A5',
  brvbar: '\u00A6',
  sect: '\u00A7',
  uml: '\u00A8',
  copy: '\u00A9',
  ordf: '\u00AA',
  laquo: '\u00AB',
  not: '\u00AC',
  shy: '\u00AD',
  reg: '\u00AE',
  macr: '\u00AF',
  deg: '\u00B0',
  plusmn: '\u00B1',
  sup2: '\u00B2',
  sup3: '\u00B3',
  acute: '\u00B4',
  micro: '\u00B5',
  para: '\u00B6',
  middot: '\u00B7',
  cedil: '\u00B8',
  sup1: '\u00B9',
  ordm: '\u00BA',
  raquo: '\u00BB',
  frac14: '\u00BC',
  frac12: '\u00BD',
  frac34: '\u00BE',
  iquest: '\u00BF',
  Agrave: '\u00C0',
  Aacute: '\u00C1',
  Acirc: '\u00C2',
  Atilde: '\u00C3',
  Auml: '\u00C4',
  Aring: '\u00C5',
  AElig: '\u00C6',
  Ccedil: '\u00C7',
  Egrave: '\u00C8',
  Eacute: '\u00C9',
  Ecirc: '\u00CA',
  Euml: '\u00CB',
  Igrave: '\u00CC',
  Iacute: '\u00CD',
  Icirc: '\u00CE',
  Iuml: '\u00CF',
  ETH: '\u00D0',
  Ntilde: '\u00D1',
  Ograve: '\u00D2',
  Oacute: '\u00D3',
  Ocirc: '\u00D4',
  Otilde: '\u00D5',
  Ouml: '\u00D6',
  times: '\u00D7',
  Oslash: '\u00D8',
  Ugrave: '\u00D9',
  Uacute: '\u00DA',
  Ucirc: '\u00DB',
  Uuml: '\u00DC',
  Yacute: '\u00DD',
  THORN: '\u00DE',
  szlig: '\u00DF',
  agrave: '\u00E0',
  aacute: '\u00E1',
  acirc: '\u00E2',
  atilde: '\u00E3',
  auml: '\u00E4',
  aring: '\u00E5',
  aelig: '\u00E6',
  ccedil: '\u00E7',
  egrave: '\u00E8',
  eacute: '\u00E9',
  ecirc: '\u00EA',
  euml: '\u00EB',
  igrave: '\u00EC',
  iacute: '\u00ED',
  icirc: '\u00EE',
  iuml: '\u00EF',
  eth: '\u00F0',
  ntilde: '\u00F1',
  ograve: '\u00F2',
  oacute: '\u00F3',
  ocirc: '\u00F4',
  otilde: '\u00F5',
  ouml: '\u00F6',
  divide: '\u00F7',
  oslash: '\u00F8',
  ugrave: '\u00F9',
  uacute: '\u00FA',
  ucirc: '\u00FB',
  uuml: '\u00FC',
  yacute: '\u00FD',
  thorn: '\u00FE',
  yuml: '\u00FF',
  OElig: '\u0152',
  oelig: '\u0153',
  Scaron: '\u0160',
  scaron: '\u0161',
  Yuml: '\u0178',
  fnof: '\u0192',
  circ: '\u02C6',
  tilde: '\u02DC',
  Alpha: '\u0391',
  Beta: '\u0392',
  Gamma: '\u0393',
  Delta: '\u0394',
  Epsilon: '\u0395',
  Zeta: '\u0396',
  Eta: '\u0397',
  Theta: '\u0398',
  Iota: '\u0399',
  Kappa: '\u039A',
  Lambda: '\u039B',
  Mu: '\u039C',
  Nu: '\u039D',
  Xi: '\u039E',
  Omicron: '\u039F',
  Pi: '\u03A0',
  Rho: '\u03A1',
  Sigma: '\u03A3',
  Tau: '\u03A4',
  Upsilon: '\u03A5',
  Phi: '\u03A6',
  Chi: '\u03A7',
  Psi: '\u03A8',
  Omega: '\u03A9',
  alpha: '\u03B1',
  beta: '\u03B2',
  gamma: '\u03B3',
  delta: '\u03B4',
  epsilon: '\u03B5',
  zeta: '\u03B6',
  eta: '\u03B7',
  theta: '\u03B8',
  iota: '\u03B9',
  kappa: '\u03BA',
  lambda: '\u03BB',
  mu: '\u03BC',
  nu: '\u03BD',
  xi: '\u03BE',
  omicron: '\u03BF',
  pi: '\u03C0',
  rho: '\u03C1',
  sigmaf: '\u03C2',
  sigma: '\u03C3',
  tau: '\u03C4',
  upsilon: '\u03C5',
  phi: '\u03C6',
  chi: '\u03C7',
  psi: '\u03C8',
  omega: '\u03C9',
  thetasym: '\u03D1',
  upsih: '\u03D2',
  piv: '\u03D6',
  ensp: '\u2002',
  emsp: '\u2003',
  thinsp: '\u2009',
  zwnj: '\u200C',
  zwj: '\u200D',
  lrm: '\u200E',
  rlm: '\u200F',
  ndash: '\u2013',
  mdash: '\u2014',
  lsquo: '\u2018',
  rsquo: '\u2019',
  sbquo: '\u201A',
  ldquo: '\u201C',
  rdquo: '\u201D',
  bdquo: '\u201E',
  dagger: '\u2020',
  Dagger: '\u2021',
  bull: '\u2022',
  hellip: '\u2026',
  permil: '\u2030',
  prime: '\u2032',
  Prime: '\u2033',
  lsaquo: '\u2039',
  rsaquo: '\u203A',
  oline: '\u203E',
  frasl: '\u2044',
  euro: '\u20AC',
  image: '\u2111',
  weierp: '\u2118',
  real: '\u211C',
  trade: '\u2122',
  alefsym: '\u2135',
  larr: '\u2190',
  uarr: '\u2191',
  rarr: '\u2192',
  darr: '\u2193',
  harr: '\u2194',
  crarr: '\u21B5',
  lArr: '\u21D0',
  uArr: '\u21D1',
  rArr: '\u21D2',
  dArr: '\u21D3',
  hArr: '\u21D4',
  forall: '\u2200',
  part: '\u2202',
  exist: '\u2203',
  empty: '\u2205',
  nabla: '\u2207',
  isin: '\u2208',
  notin: '\u2209',
  ni: '\u220B',
  prod: '\u220F',
  sum: '\u2211',
  minus: '\u2212',
  lowast: '\u2217',
  radic: '\u221A',
  prop: '\u221D',
  infin: '\u221E',
  ang: '\u2220',
  and: '\u2227',
  or: '\u2228',
  cap: '\u2229',
  cup: '\u222A',
  'int': '\u222B',
  there4: '\u2234',
  sim: '\u223C',
  cong: '\u2245',
  asymp: '\u2248',
  ne: '\u2260',
  equiv: '\u2261',
  le: '\u2264',
  ge: '\u2265',
  sub: '\u2282',
  sup: '\u2283',
  nsub: '\u2284',
  sube: '\u2286',
  supe: '\u2287',
  oplus: '\u2295',
  otimes: '\u2297',
  perp: '\u22A5',
  sdot: '\u22C5',
  lceil: '\u2308',
  rceil: '\u2309',
  lfloor: '\u230A',
  rfloor: '\u230B',
  lang: '\u2329',
  rang: '\u232A',
  loz: '\u25CA',
  spades: '\u2660',
  clubs: '\u2663',
  hearts: '\u2665',
  diams: '\u2666'
};


/***/ }),

/***/ "./node_modules/acorn-private-class-elements/index.js":
/*!************************************************************!*\
  !*** ./node_modules/acorn-private-class-elements/index.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const getPrototype = Object.getPrototypeOf || (o => o.__proto__)

const getAcorn = Parser => {
  if (Parser.acorn) return Parser.acorn

  const acorn = __webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs")

  if (acorn.version.indexOf("6.") != 0 && acorn.version.indexOf("6.0.") == 0 && acorn.version.indexOf("7.") != 0) {
    throw new Error(`acorn-private-class-elements requires acorn@^6.1.0 or acorn@7.0.0, not ${acorn.version}`)
  }

  // Make sure `Parser` comes from the same acorn as we `require`d,
  // otherwise the comparisons fail.
  for (let cur = Parser; cur && cur !== acorn.Parser; cur = getPrototype(cur)) {
    if (cur !== acorn.Parser) {
      throw new Error("acorn-private-class-elements does not support mixing different acorn copies")
    }
  }
  return acorn
}

module.exports = function(Parser) {
  // Only load this plugin once.
  if (Parser.prototype.parsePrivateName) {
    return Parser
  }

  const acorn = getAcorn(Parser)

  Parser = class extends Parser {
    _branch() {
      this.__branch = this.__branch || new Parser({ecmaVersion: this.options.ecmaVersion}, this.input)
      this.__branch.end = this.end
      this.__branch.pos = this.pos
      this.__branch.type = this.type
      this.__branch.value = this.value
      this.__branch.containsEsc = this.containsEsc
      return this.__branch
    }

    parsePrivateClassElementName(element) {
      element.computed = false
      element.key = this.parsePrivateName()
      if (element.key.name == "constructor") this.raise(element.key.start, "Classes may not have a private element named constructor")
      const accept = {get: "set", set: "get"}[element.kind]
      const privateBoundNames = this._privateBoundNames
      if (Object.prototype.hasOwnProperty.call(privateBoundNames, element.key.name) && privateBoundNames[element.key.name] !== accept) {
        this.raise(element.start, "Duplicate private element")
      }
      privateBoundNames[element.key.name] = element.kind || true
      delete this._unresolvedPrivateNames[element.key.name]
      return element.key
    }

    parsePrivateName() {
      const node = this.startNode()
      node.name = this.value
      this.next()
      this.finishNode(node, "PrivateName")
      if (this.options.allowReserved == "never") this.checkUnreserved(node)
      return node
    }

    // Parse # token
    getTokenFromCode(code) {
      if (code === 35) {
        ++this.pos
        const word = this.readWord1()
        return this.finishToken(this.privateNameToken, word)
      }
      return super.getTokenFromCode(code)
    }

    // Manage stacks and check for undeclared private names
    parseClass(node, isStatement) {
      const oldOuterPrivateBoundNames = this._outerPrivateBoundNames
      this._outerPrivateBoundNames = this._privateBoundNames
      this._privateBoundNames = Object.create(this._privateBoundNames || null)
      const oldOuterUnresolvedPrivateNames = this._outerUnresolvedPrivateNames
      this._outerUnresolvedPrivateNames = this._unresolvedPrivateNames
      this._unresolvedPrivateNames = Object.create(null)

      const _return = super.parseClass(node, isStatement)

      const unresolvedPrivateNames = this._unresolvedPrivateNames
      this._privateBoundNames = this._outerPrivateBoundNames
      this._outerPrivateBoundNames = oldOuterPrivateBoundNames
      this._unresolvedPrivateNames = this._outerUnresolvedPrivateNames
      this._outerUnresolvedPrivateNames = oldOuterUnresolvedPrivateNames
      if (!this._unresolvedPrivateNames) {
        const names = Object.keys(unresolvedPrivateNames)
        if (names.length) {
          names.sort((n1, n2) => unresolvedPrivateNames[n1] - unresolvedPrivateNames[n2])
          this.raise(unresolvedPrivateNames[names[0]], "Usage of undeclared private name")
        }
      } else Object.assign(this._unresolvedPrivateNames, unresolvedPrivateNames)
      return _return
    }

    // Class heritage is evaluated with outer private environment
    parseClassSuper(node) {
      const privateBoundNames = this._privateBoundNames
      this._privateBoundNames = this._outerPrivateBoundNames
      const unresolvedPrivateNames = this._unresolvedPrivateNames
      this._unresolvedPrivateNames = this._outerUnresolvedPrivateNames
      const _return = super.parseClassSuper(node)
      this._privateBoundNames = privateBoundNames
      this._unresolvedPrivateNames = unresolvedPrivateNames
      return _return
    }

    // Parse private element access
    parseSubscript(base, startPos, startLoc, _noCalls, _maybeAsyncArrow, _optionalChained) {
      const optionalSupported = this.options.ecmaVersion >= 11 && acorn.tokTypes.questionDot
      const branch = this._branch()
      if (!(
        (branch.eat(acorn.tokTypes.dot) || (optionalSupported && branch.eat(acorn.tokTypes.questionDot))) &&
        branch.type == this.privateNameToken
      )) {
        return super.parseSubscript.apply(this, arguments)
      }
      let optional = false
      if (!this.eat(acorn.tokTypes.dot)) {
        this.expect(acorn.tokTypes.questionDot)
        optional = true
      }
      let node = this.startNodeAt(startPos, startLoc)
      node.object = base
      node.computed = false
      if (optionalSupported) {
        node.optional = optional
      }
      if (this.type == this.privateNameToken) {
        if (base.type == "Super") {
          this.raise(this.start, "Cannot access private element on super")
        }
        node.property = this.parsePrivateName()
        if (!this._privateBoundNames || !this._privateBoundNames[node.property.name]) {
          if (!this._unresolvedPrivateNames) {
            this.raise(node.property.start, "Usage of undeclared private name")
          }
          this._unresolvedPrivateNames[node.property.name] = node.property.start
        }
      } else {
        node.property = this.parseIdent(true)
      }
      return this.finishNode(node, "MemberExpression")
    }

    // Prohibit delete of private class elements
    parseMaybeUnary(refDestructuringErrors, sawUnary) {
      const _return = super.parseMaybeUnary(refDestructuringErrors, sawUnary)
      if (_return.operator == "delete") {
        if (_return.argument.type == "MemberExpression" && _return.argument.property.type == "PrivateName") {
          this.raise(_return.start, "Private elements may not be deleted")
        }
      }
      return _return
    }
  }
  Parser.prototype.privateNameToken = new acorn.TokenType("privateName")
  return Parser
}


/***/ }),

/***/ "./node_modules/acorn-static-class-features/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/acorn-static-class-features/index.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


const privateClassElements = __webpack_require__(/*! acorn-private-class-elements */ "./node_modules/acorn-private-class-elements/index.js")

module.exports = function(Parser) {
  const ExtendedParser = privateClassElements(Parser)

  const acorn = Parser.acorn || __webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs")
  const tt = acorn.tokTypes

  return class extends ExtendedParser {
    _maybeParseFieldValue(field) {
      if (this.eat(tt.eq)) {
        const oldInFieldValue = this._inStaticFieldScope
        this._inStaticFieldScope = this.currentThisScope()
        field.value = this.parseExpression()
        this._inStaticFieldScope = oldInFieldValue
      } else field.value = null
    }

    // Parse fields
    parseClassElement(_constructorAllowsSuper) {
      if (this.options.ecmaVersion < 8 || !this.isContextual("static")) {
        return super.parseClassElement.apply(this, arguments)
      }

      const branch = this._branch()
      branch.next()
      if ([tt.name, tt.bracketL, tt.string, tt.num, this.privateNameToken].indexOf(branch.type) == -1) {
        return super.parseClassElement.apply(this, arguments)
      }
      if (branch.type == tt.bracketL) {
        let count = 0
        do {
          if (branch.eat(tt.bracketL)) ++count
          else if (branch.eat(tt.bracketR)) --count
          else branch.next()
        } while (count > 0)
      } else branch.next()
      if (branch.type != tt.eq && !branch.canInsertSemicolon() && branch.type != tt.semi) {
        return super.parseClassElement.apply(this, arguments)
      }

      const node = this.startNode()
      node.static = this.eatContextual("static")
      if (this.type == this.privateNameToken) {
        this.parsePrivateClassElementName(node)
      } else {
        this.parsePropertyName(node)
      }
      if ((node.key.type === "Identifier" && node.key.name === "constructor") ||
          (node.key.type === "Literal" && !node.computed && node.key.value === "constructor")) {
        this.raise(node.key.start, "Classes may not have a field called constructor")
      }
      if ((node.key.name || node.key.value) === "prototype" && !node.computed) {
        this.raise(node.key.start, "Classes may not have a static property named prototype")
      }

      this._maybeParseFieldValue(node)
      this.finishNode(node, "FieldDefinition")
      this.semicolon()
      return node
    }

    // Parse private static methods
    parsePropertyName(prop) {
      if (prop.static && this.type == this.privateNameToken) {
        this.parsePrivateClassElementName(prop)
      } else {
        super.parsePropertyName(prop)
      }
    }

    // Prohibit arguments in class field initializers
    parseIdent(liberal, isBinding) {
      const ident = super.parseIdent(liberal, isBinding)
      if (this._inStaticFieldScope && this.currentThisScope() === this._inStaticFieldScope && ident.name == "arguments") {
        this.raise(ident.start, "A static class field initializer may not contain arguments")
      }
      return ident
    }
  }
}


/***/ }),

/***/ "./node_modules/acorn/dist/acorn.mjs":
/*!*******************************************!*\
  !*** ./node_modules/acorn/dist/acorn.mjs ***!
  \*******************************************/
/*! exports provided: Node, Parser, Position, SourceLocation, TokContext, Token, TokenType, defaultOptions, getLineInfo, isIdentifierChar, isIdentifierStart, isNewLine, keywordTypes, lineBreak, lineBreakG, nonASCIIwhitespace, parse, parseExpressionAt, tokContexts, tokTypes, tokenizer, version */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Node", function() { return Node; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Parser", function() { return Parser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Position", function() { return Position; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SourceLocation", function() { return SourceLocation; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokContext", function() { return TokContext; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Token", function() { return Token; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TokenType", function() { return TokenType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultOptions", function() { return defaultOptions; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLineInfo", function() { return getLineInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdentifierChar", function() { return isIdentifierChar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isIdentifierStart", function() { return isIdentifierStart; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isNewLine", function() { return isNewLine; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "keywordTypes", function() { return keywords$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineBreak", function() { return lineBreak; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lineBreakG", function() { return lineBreakG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nonASCIIwhitespace", function() { return nonASCIIwhitespace; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parse", function() { return parse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseExpressionAt", function() { return parseExpressionAt; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokContexts", function() { return types$1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokTypes", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tokenizer", function() { return tokenizer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "version", function() { return version; });
// Reserved word lists for various dialects of the language

var reservedWords = {
  3: "abstract boolean byte char class double enum export extends final float goto implements import int interface long native package private protected public short static super synchronized throws transient volatile",
  5: "class enum extends super const export import",
  6: "enum",
  strict: "implements interface let package private protected public static yield",
  strictBind: "eval arguments"
};

// And the keywords

var ecma5AndLessKeywords = "break case catch continue debugger default do else finally for function if return switch throw try var while with null true false instanceof typeof void delete new in this";

var keywords = {
  5: ecma5AndLessKeywords,
  "5module": ecma5AndLessKeywords + " export import",
  6: ecma5AndLessKeywords + " const class extends export import super"
};

var keywordRelationalOperator = /^in(stanceof)?$/;

// ## Character categories

// Big ugly regular expressions that match characters in the
// whitespace, identifier, and identifier-start categories. These
// are only applied when a character is found to actually have a
// code point above 128.
// Generated by `bin/generate-identifier-regex.js`.
var nonASCIIidentifierStartChars = "\xaa\xb5\xba\xc0-\xd6\xd8-\xf6\xf8-\u02c1\u02c6-\u02d1\u02e0-\u02e4\u02ec\u02ee\u0370-\u0374\u0376\u0377\u037a-\u037d\u037f\u0386\u0388-\u038a\u038c\u038e-\u03a1\u03a3-\u03f5\u03f7-\u0481\u048a-\u052f\u0531-\u0556\u0559\u0560-\u0588\u05d0-\u05ea\u05ef-\u05f2\u0620-\u064a\u066e\u066f\u0671-\u06d3\u06d5\u06e5\u06e6\u06ee\u06ef\u06fa-\u06fc\u06ff\u0710\u0712-\u072f\u074d-\u07a5\u07b1\u07ca-\u07ea\u07f4\u07f5\u07fa\u0800-\u0815\u081a\u0824\u0828\u0840-\u0858\u0860-\u086a\u08a0-\u08b4\u08b6-\u08bd\u0904-\u0939\u093d\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098c\u098f\u0990\u0993-\u09a8\u09aa-\u09b0\u09b2\u09b6-\u09b9\u09bd\u09ce\u09dc\u09dd\u09df-\u09e1\u09f0\u09f1\u09fc\u0a05-\u0a0a\u0a0f\u0a10\u0a13-\u0a28\u0a2a-\u0a30\u0a32\u0a33\u0a35\u0a36\u0a38\u0a39\u0a59-\u0a5c\u0a5e\u0a72-\u0a74\u0a85-\u0a8d\u0a8f-\u0a91\u0a93-\u0aa8\u0aaa-\u0ab0\u0ab2\u0ab3\u0ab5-\u0ab9\u0abd\u0ad0\u0ae0\u0ae1\u0af9\u0b05-\u0b0c\u0b0f\u0b10\u0b13-\u0b28\u0b2a-\u0b30\u0b32\u0b33\u0b35-\u0b39\u0b3d\u0b5c\u0b5d\u0b5f-\u0b61\u0b71\u0b83\u0b85-\u0b8a\u0b8e-\u0b90\u0b92-\u0b95\u0b99\u0b9a\u0b9c\u0b9e\u0b9f\u0ba3\u0ba4\u0ba8-\u0baa\u0bae-\u0bb9\u0bd0\u0c05-\u0c0c\u0c0e-\u0c10\u0c12-\u0c28\u0c2a-\u0c39\u0c3d\u0c58-\u0c5a\u0c60\u0c61\u0c80\u0c85-\u0c8c\u0c8e-\u0c90\u0c92-\u0ca8\u0caa-\u0cb3\u0cb5-\u0cb9\u0cbd\u0cde\u0ce0\u0ce1\u0cf1\u0cf2\u0d05-\u0d0c\u0d0e-\u0d10\u0d12-\u0d3a\u0d3d\u0d4e\u0d54-\u0d56\u0d5f-\u0d61\u0d7a-\u0d7f\u0d85-\u0d96\u0d9a-\u0db1\u0db3-\u0dbb\u0dbd\u0dc0-\u0dc6\u0e01-\u0e30\u0e32\u0e33\u0e40-\u0e46\u0e81\u0e82\u0e84\u0e86-\u0e8a\u0e8c-\u0ea3\u0ea5\u0ea7-\u0eb0\u0eb2\u0eb3\u0ebd\u0ec0-\u0ec4\u0ec6\u0edc-\u0edf\u0f00\u0f40-\u0f47\u0f49-\u0f6c\u0f88-\u0f8c\u1000-\u102a\u103f\u1050-\u1055\u105a-\u105d\u1061\u1065\u1066\u106e-\u1070\u1075-\u1081\u108e\u10a0-\u10c5\u10c7\u10cd\u10d0-\u10fa\u10fc-\u1248\u124a-\u124d\u1250-\u1256\u1258\u125a-\u125d\u1260-\u1288\u128a-\u128d\u1290-\u12b0\u12b2-\u12b5\u12b8-\u12be\u12c0\u12c2-\u12c5\u12c8-\u12d6\u12d8-\u1310\u1312-\u1315\u1318-\u135a\u1380-\u138f\u13a0-\u13f5\u13f8-\u13fd\u1401-\u166c\u166f-\u167f\u1681-\u169a\u16a0-\u16ea\u16ee-\u16f8\u1700-\u170c\u170e-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176c\u176e-\u1770\u1780-\u17b3\u17d7\u17dc\u1820-\u1878\u1880-\u18a8\u18aa\u18b0-\u18f5\u1900-\u191e\u1950-\u196d\u1970-\u1974\u1980-\u19ab\u19b0-\u19c9\u1a00-\u1a16\u1a20-\u1a54\u1aa7\u1b05-\u1b33\u1b45-\u1b4b\u1b83-\u1ba0\u1bae\u1baf\u1bba-\u1be5\u1c00-\u1c23\u1c4d-\u1c4f\u1c5a-\u1c7d\u1c80-\u1c88\u1c90-\u1cba\u1cbd-\u1cbf\u1ce9-\u1cec\u1cee-\u1cf3\u1cf5\u1cf6\u1cfa\u1d00-\u1dbf\u1e00-\u1f15\u1f18-\u1f1d\u1f20-\u1f45\u1f48-\u1f4d\u1f50-\u1f57\u1f59\u1f5b\u1f5d\u1f5f-\u1f7d\u1f80-\u1fb4\u1fb6-\u1fbc\u1fbe\u1fc2-\u1fc4\u1fc6-\u1fcc\u1fd0-\u1fd3\u1fd6-\u1fdb\u1fe0-\u1fec\u1ff2-\u1ff4\u1ff6-\u1ffc\u2071\u207f\u2090-\u209c\u2102\u2107\u210a-\u2113\u2115\u2118-\u211d\u2124\u2126\u2128\u212a-\u2139\u213c-\u213f\u2145-\u2149\u214e\u2160-\u2188\u2c00-\u2c2e\u2c30-\u2c5e\u2c60-\u2ce4\u2ceb-\u2cee\u2cf2\u2cf3\u2d00-\u2d25\u2d27\u2d2d\u2d30-\u2d67\u2d6f\u2d80-\u2d96\u2da0-\u2da6\u2da8-\u2dae\u2db0-\u2db6\u2db8-\u2dbe\u2dc0-\u2dc6\u2dc8-\u2dce\u2dd0-\u2dd6\u2dd8-\u2dde\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303c\u3041-\u3096\u309b-\u309f\u30a1-\u30fa\u30fc-\u30ff\u3105-\u312f\u3131-\u318e\u31a0-\u31ba\u31f0-\u31ff\u3400-\u4db5\u4e00-\u9fef\ua000-\ua48c\ua4d0-\ua4fd\ua500-\ua60c\ua610-\ua61f\ua62a\ua62b\ua640-\ua66e\ua67f-\ua69d\ua6a0-\ua6ef\ua717-\ua71f\ua722-\ua788\ua78b-\ua7bf\ua7c2-\ua7c6\ua7f7-\ua801\ua803-\ua805\ua807-\ua80a\ua80c-\ua822\ua840-\ua873\ua882-\ua8b3\ua8f2-\ua8f7\ua8fb\ua8fd\ua8fe\ua90a-\ua925\ua930-\ua946\ua960-\ua97c\ua984-\ua9b2\ua9cf\ua9e0-\ua9e4\ua9e6-\ua9ef\ua9fa-\ua9fe\uaa00-\uaa28\uaa40-\uaa42\uaa44-\uaa4b\uaa60-\uaa76\uaa7a\uaa7e-\uaaaf\uaab1\uaab5\uaab6\uaab9-\uaabd\uaac0\uaac2\uaadb-\uaadd\uaae0-\uaaea\uaaf2-\uaaf4\uab01-\uab06\uab09-\uab0e\uab11-\uab16\uab20-\uab26\uab28-\uab2e\uab30-\uab5a\uab5c-\uab67\uab70-\uabe2\uac00-\ud7a3\ud7b0-\ud7c6\ud7cb-\ud7fb\uf900-\ufa6d\ufa70-\ufad9\ufb00-\ufb06\ufb13-\ufb17\ufb1d\ufb1f-\ufb28\ufb2a-\ufb36\ufb38-\ufb3c\ufb3e\ufb40\ufb41\ufb43\ufb44\ufb46-\ufbb1\ufbd3-\ufd3d\ufd50-\ufd8f\ufd92-\ufdc7\ufdf0-\ufdfb\ufe70-\ufe74\ufe76-\ufefc\uff21-\uff3a\uff41-\uff5a\uff66-\uffbe\uffc2-\uffc7\uffca-\uffcf\uffd2-\uffd7\uffda-\uffdc";
var nonASCIIidentifierChars = "\u200c\u200d\xb7\u0300-\u036f\u0387\u0483-\u0487\u0591-\u05bd\u05bf\u05c1\u05c2\u05c4\u05c5\u05c7\u0610-\u061a\u064b-\u0669\u0670\u06d6-\u06dc\u06df-\u06e4\u06e7\u06e8\u06ea-\u06ed\u06f0-\u06f9\u0711\u0730-\u074a\u07a6-\u07b0\u07c0-\u07c9\u07eb-\u07f3\u07fd\u0816-\u0819\u081b-\u0823\u0825-\u0827\u0829-\u082d\u0859-\u085b\u08d3-\u08e1\u08e3-\u0903\u093a-\u093c\u093e-\u094f\u0951-\u0957\u0962\u0963\u0966-\u096f\u0981-\u0983\u09bc\u09be-\u09c4\u09c7\u09c8\u09cb-\u09cd\u09d7\u09e2\u09e3\u09e6-\u09ef\u09fe\u0a01-\u0a03\u0a3c\u0a3e-\u0a42\u0a47\u0a48\u0a4b-\u0a4d\u0a51\u0a66-\u0a71\u0a75\u0a81-\u0a83\u0abc\u0abe-\u0ac5\u0ac7-\u0ac9\u0acb-\u0acd\u0ae2\u0ae3\u0ae6-\u0aef\u0afa-\u0aff\u0b01-\u0b03\u0b3c\u0b3e-\u0b44\u0b47\u0b48\u0b4b-\u0b4d\u0b56\u0b57\u0b62\u0b63\u0b66-\u0b6f\u0b82\u0bbe-\u0bc2\u0bc6-\u0bc8\u0bca-\u0bcd\u0bd7\u0be6-\u0bef\u0c00-\u0c04\u0c3e-\u0c44\u0c46-\u0c48\u0c4a-\u0c4d\u0c55\u0c56\u0c62\u0c63\u0c66-\u0c6f\u0c81-\u0c83\u0cbc\u0cbe-\u0cc4\u0cc6-\u0cc8\u0cca-\u0ccd\u0cd5\u0cd6\u0ce2\u0ce3\u0ce6-\u0cef\u0d00-\u0d03\u0d3b\u0d3c\u0d3e-\u0d44\u0d46-\u0d48\u0d4a-\u0d4d\u0d57\u0d62\u0d63\u0d66-\u0d6f\u0d82\u0d83\u0dca\u0dcf-\u0dd4\u0dd6\u0dd8-\u0ddf\u0de6-\u0def\u0df2\u0df3\u0e31\u0e34-\u0e3a\u0e47-\u0e4e\u0e50-\u0e59\u0eb1\u0eb4-\u0ebc\u0ec8-\u0ecd\u0ed0-\u0ed9\u0f18\u0f19\u0f20-\u0f29\u0f35\u0f37\u0f39\u0f3e\u0f3f\u0f71-\u0f84\u0f86\u0f87\u0f8d-\u0f97\u0f99-\u0fbc\u0fc6\u102b-\u103e\u1040-\u1049\u1056-\u1059\u105e-\u1060\u1062-\u1064\u1067-\u106d\u1071-\u1074\u1082-\u108d\u108f-\u109d\u135d-\u135f\u1369-\u1371\u1712-\u1714\u1732-\u1734\u1752\u1753\u1772\u1773\u17b4-\u17d3\u17dd\u17e0-\u17e9\u180b-\u180d\u1810-\u1819\u18a9\u1920-\u192b\u1930-\u193b\u1946-\u194f\u19d0-\u19da\u1a17-\u1a1b\u1a55-\u1a5e\u1a60-\u1a7c\u1a7f-\u1a89\u1a90-\u1a99\u1ab0-\u1abd\u1b00-\u1b04\u1b34-\u1b44\u1b50-\u1b59\u1b6b-\u1b73\u1b80-\u1b82\u1ba1-\u1bad\u1bb0-\u1bb9\u1be6-\u1bf3\u1c24-\u1c37\u1c40-\u1c49\u1c50-\u1c59\u1cd0-\u1cd2\u1cd4-\u1ce8\u1ced\u1cf4\u1cf7-\u1cf9\u1dc0-\u1df9\u1dfb-\u1dff\u203f\u2040\u2054\u20d0-\u20dc\u20e1\u20e5-\u20f0\u2cef-\u2cf1\u2d7f\u2de0-\u2dff\u302a-\u302f\u3099\u309a\ua620-\ua629\ua66f\ua674-\ua67d\ua69e\ua69f\ua6f0\ua6f1\ua802\ua806\ua80b\ua823-\ua827\ua880\ua881\ua8b4-\ua8c5\ua8d0-\ua8d9\ua8e0-\ua8f1\ua8ff-\ua909\ua926-\ua92d\ua947-\ua953\ua980-\ua983\ua9b3-\ua9c0\ua9d0-\ua9d9\ua9e5\ua9f0-\ua9f9\uaa29-\uaa36\uaa43\uaa4c\uaa4d\uaa50-\uaa59\uaa7b-\uaa7d\uaab0\uaab2-\uaab4\uaab7\uaab8\uaabe\uaabf\uaac1\uaaeb-\uaaef\uaaf5\uaaf6\uabe3-\uabea\uabec\uabed\uabf0-\uabf9\ufb1e\ufe00-\ufe0f\ufe20-\ufe2f\ufe33\ufe34\ufe4d-\ufe4f\uff10-\uff19\uff3f";

var nonASCIIidentifierStart = new RegExp("[" + nonASCIIidentifierStartChars + "]");
var nonASCIIidentifier = new RegExp("[" + nonASCIIidentifierStartChars + nonASCIIidentifierChars + "]");

nonASCIIidentifierStartChars = nonASCIIidentifierChars = null;

// These are a run-length and offset encoded representation of the
// >0xffff code points that are a valid part of identifiers. The
// offset starts at 0x10000, and each pair of numbers represents an
// offset to the next range, and then a size of the range. They were
// generated by bin/generate-identifier-regex.js

// eslint-disable-next-line comma-spacing
var astralIdentifierStartCodes = [0,11,2,25,2,18,2,1,2,14,3,13,35,122,70,52,268,28,4,48,48,31,14,29,6,37,11,29,3,35,5,7,2,4,43,157,19,35,5,35,5,39,9,51,157,310,10,21,11,7,153,5,3,0,2,43,2,1,4,0,3,22,11,22,10,30,66,18,2,1,11,21,11,25,71,55,7,1,65,0,16,3,2,2,2,28,43,28,4,28,36,7,2,27,28,53,11,21,11,18,14,17,111,72,56,50,14,50,14,35,477,28,11,0,9,21,155,22,13,52,76,44,33,24,27,35,30,0,12,34,4,0,13,47,15,3,22,0,2,0,36,17,2,24,85,6,2,0,2,3,2,14,2,9,8,46,39,7,3,1,3,21,2,6,2,1,2,4,4,0,19,0,13,4,159,52,19,3,21,0,33,47,21,1,2,0,185,46,42,3,37,47,21,0,60,42,14,0,72,26,230,43,117,63,32,0,161,7,3,38,17,0,2,0,29,0,11,39,8,0,22,0,12,45,20,0,35,56,264,8,2,36,18,0,50,29,113,6,2,1,2,37,22,0,26,5,2,1,2,31,15,0,328,18,270,921,103,110,18,195,2749,1070,4050,582,8634,568,8,30,114,29,19,47,17,3,32,20,6,18,689,63,129,74,6,0,67,12,65,1,2,0,29,6135,9,754,9486,286,50,2,18,3,9,395,2309,106,6,12,4,8,8,9,5991,84,2,70,2,1,3,0,3,1,3,3,2,11,2,0,2,6,2,64,2,3,3,7,2,6,2,27,2,3,2,4,2,0,4,6,2,339,3,24,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,30,2,24,2,7,2357,44,11,6,17,0,370,43,1301,196,60,67,8,0,1205,3,2,26,2,1,2,0,3,0,2,9,2,3,2,0,2,0,7,0,5,0,2,0,2,0,2,2,2,1,2,0,3,0,2,0,2,0,2,0,2,0,2,1,2,0,3,3,2,6,2,3,2,3,2,0,2,9,2,16,6,2,2,4,2,16,4421,42710,42,4148,12,221,3,5761,15,7472,3104,541];

// eslint-disable-next-line comma-spacing
var astralIdentifierCodes = [509,0,227,0,150,4,294,9,1368,2,2,1,6,3,41,2,5,0,166,1,574,3,9,9,525,10,176,2,54,14,32,9,16,3,46,10,54,9,7,2,37,13,2,9,6,1,45,0,13,2,49,13,9,3,4,9,83,11,7,0,161,11,6,9,7,3,56,1,2,6,3,1,3,2,10,0,11,1,3,6,4,4,193,17,10,9,5,0,82,19,13,9,214,6,3,8,28,1,83,16,16,9,82,12,9,9,84,14,5,9,243,14,166,9,232,6,3,6,4,0,29,9,41,6,2,3,9,0,10,10,47,15,406,7,2,7,17,9,57,21,2,13,123,5,4,0,2,1,2,6,2,0,9,9,49,4,2,1,2,4,9,9,330,3,19306,9,135,4,60,6,26,9,1014,0,2,54,8,3,19723,1,5319,4,4,5,9,7,3,6,31,3,149,2,1418,49,513,54,5,49,9,0,15,0,23,4,2,14,1361,6,2,16,3,6,2,1,2,4,262,6,10,9,419,13,1495,6,110,6,6,9,792487,239];

// This has a complexity linear to the value of the code. The
// assumption is that looking up astral identifier characters is
// rare.
function isInAstralSet(code, set) {
  var pos = 0x10000;
  for (var i = 0; i < set.length; i += 2) {
    pos += set[i];
    if (pos > code) { return false }
    pos += set[i + 1];
    if (pos >= code) { return true }
  }
}

// Test whether a given character code starts an identifier.

function isIdentifierStart(code, astral) {
  if (code < 65) { return code === 36 }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifierStart.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes)
}

// Test whether a given character is part of an identifier.

function isIdentifierChar(code, astral) {
  if (code < 48) { return code === 36 }
  if (code < 58) { return true }
  if (code < 65) { return false }
  if (code < 91) { return true }
  if (code < 97) { return code === 95 }
  if (code < 123) { return true }
  if (code <= 0xffff) { return code >= 0xaa && nonASCIIidentifier.test(String.fromCharCode(code)) }
  if (astral === false) { return false }
  return isInAstralSet(code, astralIdentifierStartCodes) || isInAstralSet(code, astralIdentifierCodes)
}

// ## Token types

// The assignment of fine-grained, information-carrying type objects
// allows the tokenizer to store the information it has about a
// token in a way that is very cheap for the parser to look up.

// All token type variables start with an underscore, to make them
// easy to recognize.

// The `beforeExpr` property is used to disambiguate between regular
// expressions and divisions. It is set on all token types that can
// be followed by an expression (thus, a slash after them would be a
// regular expression).
//
// The `startsExpr` property is used to check if the token ends a
// `yield` expression. It is set on all token types that either can
// directly start an expression (like a quotation mark) or can
// continue an expression (like the body of a string).
//
// `isLoop` marks a keyword as starting a loop, which is important
// to know when parsing a label, in order to allow or disallow
// continue jumps to that label.

var TokenType = function TokenType(label, conf) {
  if ( conf === void 0 ) conf = {};

  this.label = label;
  this.keyword = conf.keyword;
  this.beforeExpr = !!conf.beforeExpr;
  this.startsExpr = !!conf.startsExpr;
  this.isLoop = !!conf.isLoop;
  this.isAssign = !!conf.isAssign;
  this.prefix = !!conf.prefix;
  this.postfix = !!conf.postfix;
  this.binop = conf.binop || null;
  this.updateContext = null;
};

function binop(name, prec) {
  return new TokenType(name, {beforeExpr: true, binop: prec})
}
var beforeExpr = {beforeExpr: true}, startsExpr = {startsExpr: true};

// Map keyword names to token types.

var keywords$1 = {};

// Succinct definitions of keyword token types
function kw(name, options) {
  if ( options === void 0 ) options = {};

  options.keyword = name;
  return keywords$1[name] = new TokenType(name, options)
}

var types = {
  num: new TokenType("num", startsExpr),
  regexp: new TokenType("regexp", startsExpr),
  string: new TokenType("string", startsExpr),
  name: new TokenType("name", startsExpr),
  eof: new TokenType("eof"),

  // Punctuation token types.
  bracketL: new TokenType("[", {beforeExpr: true, startsExpr: true}),
  bracketR: new TokenType("]"),
  braceL: new TokenType("{", {beforeExpr: true, startsExpr: true}),
  braceR: new TokenType("}"),
  parenL: new TokenType("(", {beforeExpr: true, startsExpr: true}),
  parenR: new TokenType(")"),
  comma: new TokenType(",", beforeExpr),
  semi: new TokenType(";", beforeExpr),
  colon: new TokenType(":", beforeExpr),
  dot: new TokenType("."),
  question: new TokenType("?", beforeExpr),
  arrow: new TokenType("=>", beforeExpr),
  template: new TokenType("template"),
  invalidTemplate: new TokenType("invalidTemplate"),
  ellipsis: new TokenType("...", beforeExpr),
  backQuote: new TokenType("`", startsExpr),
  dollarBraceL: new TokenType("${", {beforeExpr: true, startsExpr: true}),

  // Operators. These carry several kinds of properties to help the
  // parser use them properly (the presence of these properties is
  // what categorizes them as operators).
  //
  // `binop`, when present, specifies that this operator is a binary
  // operator, and will refer to its precedence.
  //
  // `prefix` and `postfix` mark the operator as a prefix or postfix
  // unary operator.
  //
  // `isAssign` marks all of `=`, `+=`, `-=` etcetera, which act as
  // binary operators with a very low precedence, that should result
  // in AssignmentExpression nodes.

  eq: new TokenType("=", {beforeExpr: true, isAssign: true}),
  assign: new TokenType("_=", {beforeExpr: true, isAssign: true}),
  incDec: new TokenType("++/--", {prefix: true, postfix: true, startsExpr: true}),
  prefix: new TokenType("!/~", {beforeExpr: true, prefix: true, startsExpr: true}),
  logicalOR: binop("||", 1),
  logicalAND: binop("&&", 2),
  bitwiseOR: binop("|", 3),
  bitwiseXOR: binop("^", 4),
  bitwiseAND: binop("&", 5),
  equality: binop("==/!=/===/!==", 6),
  relational: binop("</>/<=/>=", 7),
  bitShift: binop("<</>>/>>>", 8),
  plusMin: new TokenType("+/-", {beforeExpr: true, binop: 9, prefix: true, startsExpr: true}),
  modulo: binop("%", 10),
  star: binop("*", 10),
  slash: binop("/", 10),
  starstar: new TokenType("**", {beforeExpr: true}),

  // Keyword token types.
  _break: kw("break"),
  _case: kw("case", beforeExpr),
  _catch: kw("catch"),
  _continue: kw("continue"),
  _debugger: kw("debugger"),
  _default: kw("default", beforeExpr),
  _do: kw("do", {isLoop: true, beforeExpr: true}),
  _else: kw("else", beforeExpr),
  _finally: kw("finally"),
  _for: kw("for", {isLoop: true}),
  _function: kw("function", startsExpr),
  _if: kw("if"),
  _return: kw("return", beforeExpr),
  _switch: kw("switch"),
  _throw: kw("throw", beforeExpr),
  _try: kw("try"),
  _var: kw("var"),
  _const: kw("const"),
  _while: kw("while", {isLoop: true}),
  _with: kw("with"),
  _new: kw("new", {beforeExpr: true, startsExpr: true}),
  _this: kw("this", startsExpr),
  _super: kw("super", startsExpr),
  _class: kw("class", startsExpr),
  _extends: kw("extends", beforeExpr),
  _export: kw("export"),
  _import: kw("import", startsExpr),
  _null: kw("null", startsExpr),
  _true: kw("true", startsExpr),
  _false: kw("false", startsExpr),
  _in: kw("in", {beforeExpr: true, binop: 7}),
  _instanceof: kw("instanceof", {beforeExpr: true, binop: 7}),
  _typeof: kw("typeof", {beforeExpr: true, prefix: true, startsExpr: true}),
  _void: kw("void", {beforeExpr: true, prefix: true, startsExpr: true}),
  _delete: kw("delete", {beforeExpr: true, prefix: true, startsExpr: true})
};

// Matches a whole line break (where CRLF is considered a single
// line break). Used to count lines.

var lineBreak = /\r\n?|\n|\u2028|\u2029/;
var lineBreakG = new RegExp(lineBreak.source, "g");

function isNewLine(code, ecma2019String) {
  return code === 10 || code === 13 || (!ecma2019String && (code === 0x2028 || code === 0x2029))
}

var nonASCIIwhitespace = /[\u1680\u2000-\u200a\u202f\u205f\u3000\ufeff]/;

var skipWhiteSpace = /(?:\s|\/\/.*|\/\*[^]*?\*\/)*/g;

var ref = Object.prototype;
var hasOwnProperty = ref.hasOwnProperty;
var toString = ref.toString;

// Checks if an object has a property.

function has(obj, propName) {
  return hasOwnProperty.call(obj, propName)
}

var isArray = Array.isArray || (function (obj) { return (
  toString.call(obj) === "[object Array]"
); });

function wordsRegexp(words) {
  return new RegExp("^(?:" + words.replace(/ /g, "|") + ")$")
}

// These are used when `options.locations` is on, for the
// `startLoc` and `endLoc` properties.

var Position = function Position(line, col) {
  this.line = line;
  this.column = col;
};

Position.prototype.offset = function offset (n) {
  return new Position(this.line, this.column + n)
};

var SourceLocation = function SourceLocation(p, start, end) {
  this.start = start;
  this.end = end;
  if (p.sourceFile !== null) { this.source = p.sourceFile; }
};

// The `getLineInfo` function is mostly useful when the
// `locations` option is off (for performance reasons) and you
// want to find the line/column position for a given character
// offset. `input` should be the code string that the offset refers
// into.

function getLineInfo(input, offset) {
  for (var line = 1, cur = 0;;) {
    lineBreakG.lastIndex = cur;
    var match = lineBreakG.exec(input);
    if (match && match.index < offset) {
      ++line;
      cur = match.index + match[0].length;
    } else {
      return new Position(line, offset - cur)
    }
  }
}

// A second optional argument can be given to further configure
// the parser process. These options are recognized:

var defaultOptions = {
  // `ecmaVersion` indicates the ECMAScript version to parse. Must be
  // either 3, 5, 6 (2015), 7 (2016), 8 (2017), 9 (2018), or 10
  // (2019). This influences support for strict mode, the set of
  // reserved words, and support for new syntax features. The default
  // is 10.
  ecmaVersion: 10,
  // `sourceType` indicates the mode the code should be parsed in.
  // Can be either `"script"` or `"module"`. This influences global
  // strict mode and parsing of `import` and `export` declarations.
  sourceType: "script",
  // `onInsertedSemicolon` can be a callback that will be called
  // when a semicolon is automatically inserted. It will be passed
  // the position of the comma as an offset, and if `locations` is
  // enabled, it is given the location as a `{line, column}` object
  // as second argument.
  onInsertedSemicolon: null,
  // `onTrailingComma` is similar to `onInsertedSemicolon`, but for
  // trailing commas.
  onTrailingComma: null,
  // By default, reserved words are only enforced if ecmaVersion >= 5.
  // Set `allowReserved` to a boolean value to explicitly turn this on
  // an off. When this option has the value "never", reserved words
  // and keywords can also not be used as property names.
  allowReserved: null,
  // When enabled, a return at the top level is not considered an
  // error.
  allowReturnOutsideFunction: false,
  // When enabled, import/export statements are not constrained to
  // appearing at the top of the program.
  allowImportExportEverywhere: false,
  // When enabled, await identifiers are allowed to appear at the top-level scope,
  // but they are still not allowed in non-async functions.
  allowAwaitOutsideFunction: false,
  // When enabled, hashbang directive in the beginning of file
  // is allowed and treated as a line comment.
  allowHashBang: false,
  // When `locations` is on, `loc` properties holding objects with
  // `start` and `end` properties in `{line, column}` form (with
  // line being 1-based and column 0-based) will be attached to the
  // nodes.
  locations: false,
  // A function can be passed as `onToken` option, which will
  // cause Acorn to call that function with object in the same
  // format as tokens returned from `tokenizer().getToken()`. Note
  // that you are not allowed to call the parser from the
  // callback—that will corrupt its internal state.
  onToken: null,
  // A function can be passed as `onComment` option, which will
  // cause Acorn to call that function with `(block, text, start,
  // end)` parameters whenever a comment is skipped. `block` is a
  // boolean indicating whether this is a block (`/* */`) comment,
  // `text` is the content of the comment, and `start` and `end` are
  // character offsets that denote the start and end of the comment.
  // When the `locations` option is on, two more parameters are
  // passed, the full `{line, column}` locations of the start and
  // end of the comments. Note that you are not allowed to call the
  // parser from the callback—that will corrupt its internal state.
  onComment: null,
  // Nodes have their start and end characters offsets recorded in
  // `start` and `end` properties (directly on the node, rather than
  // the `loc` object, which holds line/column data. To also add a
  // [semi-standardized][range] `range` property holding a `[start,
  // end]` array with the same numbers, set the `ranges` option to
  // `true`.
  //
  // [range]: https://bugzilla.mozilla.org/show_bug.cgi?id=745678
  ranges: false,
  // It is possible to parse multiple files into a single AST by
  // passing the tree produced by parsing the first file as
  // `program` option in subsequent parses. This will add the
  // toplevel forms of the parsed file to the `Program` (top) node
  // of an existing parse tree.
  program: null,
  // When `locations` is on, you can pass this to record the source
  // file in every node's `loc` object.
  sourceFile: null,
  // This value, if given, is stored in every node, whether
  // `locations` is on or off.
  directSourceFile: null,
  // When enabled, parenthesized expressions are represented by
  // (non-standard) ParenthesizedExpression nodes
  preserveParens: false
};

// Interpret and default an options object

function getOptions(opts) {
  var options = {};

  for (var opt in defaultOptions)
    { options[opt] = opts && has(opts, opt) ? opts[opt] : defaultOptions[opt]; }

  if (options.ecmaVersion >= 2015)
    { options.ecmaVersion -= 2009; }

  if (options.allowReserved == null)
    { options.allowReserved = options.ecmaVersion < 5; }

  if (isArray(options.onToken)) {
    var tokens = options.onToken;
    options.onToken = function (token) { return tokens.push(token); };
  }
  if (isArray(options.onComment))
    { options.onComment = pushComment(options, options.onComment); }

  return options
}

function pushComment(options, array) {
  return function(block, text, start, end, startLoc, endLoc) {
    var comment = {
      type: block ? "Block" : "Line",
      value: text,
      start: start,
      end: end
    };
    if (options.locations)
      { comment.loc = new SourceLocation(this, startLoc, endLoc); }
    if (options.ranges)
      { comment.range = [start, end]; }
    array.push(comment);
  }
}

// Each scope gets a bitset that may contain these flags
var
    SCOPE_TOP = 1,
    SCOPE_FUNCTION = 2,
    SCOPE_VAR = SCOPE_TOP | SCOPE_FUNCTION,
    SCOPE_ASYNC = 4,
    SCOPE_GENERATOR = 8,
    SCOPE_ARROW = 16,
    SCOPE_SIMPLE_CATCH = 32,
    SCOPE_SUPER = 64,
    SCOPE_DIRECT_SUPER = 128;

function functionFlags(async, generator) {
  return SCOPE_FUNCTION | (async ? SCOPE_ASYNC : 0) | (generator ? SCOPE_GENERATOR : 0)
}

// Used in checkLVal and declareName to determine the type of a binding
var
    BIND_NONE = 0, // Not a binding
    BIND_VAR = 1, // Var-style binding
    BIND_LEXICAL = 2, // Let- or const-style binding
    BIND_FUNCTION = 3, // Function declaration
    BIND_SIMPLE_CATCH = 4, // Simple (identifier pattern) catch binding
    BIND_OUTSIDE = 5; // Special case for function names as bound inside the function

var Parser = function Parser(options, input, startPos) {
  this.options = options = getOptions(options);
  this.sourceFile = options.sourceFile;
  this.keywords = wordsRegexp(keywords[options.ecmaVersion >= 6 ? 6 : options.sourceType === "module" ? "5module" : 5]);
  var reserved = "";
  if (options.allowReserved !== true) {
    for (var v = options.ecmaVersion;; v--)
      { if (reserved = reservedWords[v]) { break } }
    if (options.sourceType === "module") { reserved += " await"; }
  }
  this.reservedWords = wordsRegexp(reserved);
  var reservedStrict = (reserved ? reserved + " " : "") + reservedWords.strict;
  this.reservedWordsStrict = wordsRegexp(reservedStrict);
  this.reservedWordsStrictBind = wordsRegexp(reservedStrict + " " + reservedWords.strictBind);
  this.input = String(input);

  // Used to signal to callers of `readWord1` whether the word
  // contained any escape sequences. This is needed because words with
  // escape sequences must not be interpreted as keywords.
  this.containsEsc = false;

  // Set up token state

  // The current position of the tokenizer in the input.
  if (startPos) {
    this.pos = startPos;
    this.lineStart = this.input.lastIndexOf("\n", startPos - 1) + 1;
    this.curLine = this.input.slice(0, this.lineStart).split(lineBreak).length;
  } else {
    this.pos = this.lineStart = 0;
    this.curLine = 1;
  }

  // Properties of the current token:
  // Its type
  this.type = types.eof;
  // For tokens that include more information than their type, the value
  this.value = null;
  // Its start and end offset
  this.start = this.end = this.pos;
  // And, if locations are used, the {line, column} object
  // corresponding to those offsets
  this.startLoc = this.endLoc = this.curPosition();

  // Position information for the previous token
  this.lastTokEndLoc = this.lastTokStartLoc = null;
  this.lastTokStart = this.lastTokEnd = this.pos;

  // The context stack is used to superficially track syntactic
  // context to predict whether a regular expression is allowed in a
  // given position.
  this.context = this.initialContext();
  this.exprAllowed = true;

  // Figure out if it's a module code.
  this.inModule = options.sourceType === "module";
  this.strict = this.inModule || this.strictDirective(this.pos);

  // Used to signify the start of a potential arrow function
  this.potentialArrowAt = -1;

  // Positions to delayed-check that yield/await does not exist in default parameters.
  this.yieldPos = this.awaitPos = this.awaitIdentPos = 0;
  // Labels in scope.
  this.labels = [];
  // Thus-far undefined exports.
  this.undefinedExports = {};

  // If enabled, skip leading hashbang line.
  if (this.pos === 0 && options.allowHashBang && this.input.slice(0, 2) === "#!")
    { this.skipLineComment(2); }

  // Scope tracking for duplicate variable names (see scope.js)
  this.scopeStack = [];
  this.enterScope(SCOPE_TOP);

  // For RegExp validation
  this.regexpState = null;
};

var prototypeAccessors = { inFunction: { configurable: true },inGenerator: { configurable: true },inAsync: { configurable: true },allowSuper: { configurable: true },allowDirectSuper: { configurable: true },treatFunctionsAsVar: { configurable: true } };

Parser.prototype.parse = function parse () {
  var node = this.options.program || this.startNode();
  this.nextToken();
  return this.parseTopLevel(node)
};

prototypeAccessors.inFunction.get = function () { return (this.currentVarScope().flags & SCOPE_FUNCTION) > 0 };
prototypeAccessors.inGenerator.get = function () { return (this.currentVarScope().flags & SCOPE_GENERATOR) > 0 };
prototypeAccessors.inAsync.get = function () { return (this.currentVarScope().flags & SCOPE_ASYNC) > 0 };
prototypeAccessors.allowSuper.get = function () { return (this.currentThisScope().flags & SCOPE_SUPER) > 0 };
prototypeAccessors.allowDirectSuper.get = function () { return (this.currentThisScope().flags & SCOPE_DIRECT_SUPER) > 0 };
prototypeAccessors.treatFunctionsAsVar.get = function () { return this.treatFunctionsAsVarInScope(this.currentScope()) };

// Switch to a getter for 7.0.0.
Parser.prototype.inNonArrowFunction = function inNonArrowFunction () { return (this.currentThisScope().flags & SCOPE_FUNCTION) > 0 };

Parser.extend = function extend () {
    var plugins = [], len = arguments.length;
    while ( len-- ) plugins[ len ] = arguments[ len ];

  var cls = this;
  for (var i = 0; i < plugins.length; i++) { cls = plugins[i](cls); }
  return cls
};

Parser.parse = function parse (input, options) {
  return new this(options, input).parse()
};

Parser.parseExpressionAt = function parseExpressionAt (input, pos, options) {
  var parser = new this(options, input, pos);
  parser.nextToken();
  return parser.parseExpression()
};

Parser.tokenizer = function tokenizer (input, options) {
  return new this(options, input)
};

Object.defineProperties( Parser.prototype, prototypeAccessors );

var pp = Parser.prototype;

// ## Parser utilities

var literal = /^(?:'((?:\\.|[^'])*?)'|"((?:\\.|[^"])*?)")/;
pp.strictDirective = function(start) {
  for (;;) {
    // Try to find string literal.
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    var match = literal.exec(this.input.slice(start));
    if (!match) { return false }
    if ((match[1] || match[2]) === "use strict") { return true }
    start += match[0].length;

    // Skip semicolon, if any.
    skipWhiteSpace.lastIndex = start;
    start += skipWhiteSpace.exec(this.input)[0].length;
    if (this.input[start] === ";")
      { start++; }
  }
};

// Predicate that tests whether the next token is of the given
// type, and if yes, consumes it as a side effect.

pp.eat = function(type) {
  if (this.type === type) {
    this.next();
    return true
  } else {
    return false
  }
};

// Tests whether parsed token is a contextual keyword.

pp.isContextual = function(name) {
  return this.type === types.name && this.value === name && !this.containsEsc
};

// Consumes contextual keyword if possible.

pp.eatContextual = function(name) {
  if (!this.isContextual(name)) { return false }
  this.next();
  return true
};

// Asserts that following token is given contextual keyword.

pp.expectContextual = function(name) {
  if (!this.eatContextual(name)) { this.unexpected(); }
};

// Test whether a semicolon can be inserted at the current position.

pp.canInsertSemicolon = function() {
  return this.type === types.eof ||
    this.type === types.braceR ||
    lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

pp.insertSemicolon = function() {
  if (this.canInsertSemicolon()) {
    if (this.options.onInsertedSemicolon)
      { this.options.onInsertedSemicolon(this.lastTokEnd, this.lastTokEndLoc); }
    return true
  }
};

// Consume a semicolon, or, failing that, see if we are allowed to
// pretend that there is a semicolon at this position.

pp.semicolon = function() {
  if (!this.eat(types.semi) && !this.insertSemicolon()) { this.unexpected(); }
};

pp.afterTrailingComma = function(tokType, notNext) {
  if (this.type === tokType) {
    if (this.options.onTrailingComma)
      { this.options.onTrailingComma(this.lastTokStart, this.lastTokStartLoc); }
    if (!notNext)
      { this.next(); }
    return true
  }
};

// Expect a token of a given type. If found, consume it, otherwise,
// raise an unexpected token error.

pp.expect = function(type) {
  this.eat(type) || this.unexpected();
};

// Raise an unexpected token error.

pp.unexpected = function(pos) {
  this.raise(pos != null ? pos : this.start, "Unexpected token");
};

function DestructuringErrors() {
  this.shorthandAssign =
  this.trailingComma =
  this.parenthesizedAssign =
  this.parenthesizedBind =
  this.doubleProto =
    -1;
}

pp.checkPatternErrors = function(refDestructuringErrors, isAssign) {
  if (!refDestructuringErrors) { return }
  if (refDestructuringErrors.trailingComma > -1)
    { this.raiseRecoverable(refDestructuringErrors.trailingComma, "Comma is not permitted after the rest element"); }
  var parens = isAssign ? refDestructuringErrors.parenthesizedAssign : refDestructuringErrors.parenthesizedBind;
  if (parens > -1) { this.raiseRecoverable(parens, "Parenthesized pattern"); }
};

pp.checkExpressionErrors = function(refDestructuringErrors, andThrow) {
  if (!refDestructuringErrors) { return false }
  var shorthandAssign = refDestructuringErrors.shorthandAssign;
  var doubleProto = refDestructuringErrors.doubleProto;
  if (!andThrow) { return shorthandAssign >= 0 || doubleProto >= 0 }
  if (shorthandAssign >= 0)
    { this.raise(shorthandAssign, "Shorthand property assignments are valid only in destructuring patterns"); }
  if (doubleProto >= 0)
    { this.raiseRecoverable(doubleProto, "Redefinition of __proto__ property"); }
};

pp.checkYieldAwaitInDefaultParams = function() {
  if (this.yieldPos && (!this.awaitPos || this.yieldPos < this.awaitPos))
    { this.raise(this.yieldPos, "Yield expression cannot be a default value"); }
  if (this.awaitPos)
    { this.raise(this.awaitPos, "Await expression cannot be a default value"); }
};

pp.isSimpleAssignTarget = function(expr) {
  if (expr.type === "ParenthesizedExpression")
    { return this.isSimpleAssignTarget(expr.expression) }
  return expr.type === "Identifier" || expr.type === "MemberExpression"
};

var pp$1 = Parser.prototype;

// ### Statement parsing

// Parse a program. Initializes the parser, reads any number of
// statements, and wraps them in a Program node.  Optionally takes a
// `program` argument.  If present, the statements will be appended
// to its body instead of creating a new node.

pp$1.parseTopLevel = function(node) {
  var exports = {};
  if (!node.body) { node.body = []; }
  while (this.type !== types.eof) {
    var stmt = this.parseStatement(null, true, exports);
    node.body.push(stmt);
  }
  if (this.inModule)
    { for (var i = 0, list = Object.keys(this.undefinedExports); i < list.length; i += 1)
      {
        var name = list[i];

        this.raiseRecoverable(this.undefinedExports[name].start, ("Export '" + name + "' is not defined"));
      } }
  this.adaptDirectivePrologue(node.body);
  this.next();
  node.sourceType = this.options.sourceType;
  return this.finishNode(node, "Program")
};

var loopLabel = {kind: "loop"}, switchLabel = {kind: "switch"};

pp$1.isLet = function(context) {
  if (this.options.ecmaVersion < 6 || !this.isContextual("let")) { return false }
  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
  // For ambiguous cases, determine if a LexicalDeclaration (or only a
  // Statement) is allowed here. If context is not empty then only a Statement
  // is allowed. However, `let [` is an explicit negative lookahead for
  // ExpressionStatement, so special-case it first.
  if (nextCh === 91) { return true } // '['
  if (context) { return false }

  if (nextCh === 123) { return true } // '{'
  if (isIdentifierStart(nextCh, true)) {
    var pos = next + 1;
    while (isIdentifierChar(this.input.charCodeAt(pos), true)) { ++pos; }
    var ident = this.input.slice(next, pos);
    if (!keywordRelationalOperator.test(ident)) { return true }
  }
  return false
};

// check 'async [no LineTerminator here] function'
// - 'async /*foo*/ function' is OK.
// - 'async /*\n*/ function' is invalid.
pp$1.isAsyncFunction = function() {
  if (this.options.ecmaVersion < 8 || !this.isContextual("async"))
    { return false }

  skipWhiteSpace.lastIndex = this.pos;
  var skip = skipWhiteSpace.exec(this.input);
  var next = this.pos + skip[0].length;
  return !lineBreak.test(this.input.slice(this.pos, next)) &&
    this.input.slice(next, next + 8) === "function" &&
    (next + 8 === this.input.length || !isIdentifierChar(this.input.charAt(next + 8)))
};

// Parse a single statement.
//
// If expecting a statement and finding a slash operator, parse a
// regular expression literal. This is to handle cases like
// `if (foo) /blah/.exec(foo)`, where looking at the previous token
// does not help.

pp$1.parseStatement = function(context, topLevel, exports) {
  var starttype = this.type, node = this.startNode(), kind;

  if (this.isLet(context)) {
    starttype = types._var;
    kind = "let";
  }

  // Most types of statements are recognized by the keyword they
  // start with. Many are trivial to parse, some require a bit of
  // complexity.

  switch (starttype) {
  case types._break: case types._continue: return this.parseBreakContinueStatement(node, starttype.keyword)
  case types._debugger: return this.parseDebuggerStatement(node)
  case types._do: return this.parseDoStatement(node)
  case types._for: return this.parseForStatement(node)
  case types._function:
    // Function as sole body of either an if statement or a labeled statement
    // works, but not when it is part of a labeled statement that is the sole
    // body of an if statement.
    if ((context && (this.strict || context !== "if" && context !== "label")) && this.options.ecmaVersion >= 6) { this.unexpected(); }
    return this.parseFunctionStatement(node, false, !context)
  case types._class:
    if (context) { this.unexpected(); }
    return this.parseClass(node, true)
  case types._if: return this.parseIfStatement(node)
  case types._return: return this.parseReturnStatement(node)
  case types._switch: return this.parseSwitchStatement(node)
  case types._throw: return this.parseThrowStatement(node)
  case types._try: return this.parseTryStatement(node)
  case types._const: case types._var:
    kind = kind || this.value;
    if (context && kind !== "var") { this.unexpected(); }
    return this.parseVarStatement(node, kind)
  case types._while: return this.parseWhileStatement(node)
  case types._with: return this.parseWithStatement(node)
  case types.braceL: return this.parseBlock(true, node)
  case types.semi: return this.parseEmptyStatement(node)
  case types._export:
  case types._import:
    if (this.options.ecmaVersion > 10 && starttype === types._import) {
      skipWhiteSpace.lastIndex = this.pos;
      var skip = skipWhiteSpace.exec(this.input);
      var next = this.pos + skip[0].length, nextCh = this.input.charCodeAt(next);
      if (nextCh === 40) // '('
        { return this.parseExpressionStatement(node, this.parseExpression()) }
    }

    if (!this.options.allowImportExportEverywhere) {
      if (!topLevel)
        { this.raise(this.start, "'import' and 'export' may only appear at the top level"); }
      if (!this.inModule)
        { this.raise(this.start, "'import' and 'export' may appear only with 'sourceType: module'"); }
    }
    return starttype === types._import ? this.parseImport(node) : this.parseExport(node, exports)

    // If the statement does not start with a statement keyword or a
    // brace, it's an ExpressionStatement or LabeledStatement. We
    // simply start parsing an expression, and afterwards, if the
    // next token is a colon and the expression was a simple
    // Identifier node, we switch to interpreting it as a label.
  default:
    if (this.isAsyncFunction()) {
      if (context) { this.unexpected(); }
      this.next();
      return this.parseFunctionStatement(node, true, !context)
    }

    var maybeName = this.value, expr = this.parseExpression();
    if (starttype === types.name && expr.type === "Identifier" && this.eat(types.colon))
      { return this.parseLabeledStatement(node, maybeName, expr, context) }
    else { return this.parseExpressionStatement(node, expr) }
  }
};

pp$1.parseBreakContinueStatement = function(node, keyword) {
  var isBreak = keyword === "break";
  this.next();
  if (this.eat(types.semi) || this.insertSemicolon()) { node.label = null; }
  else if (this.type !== types.name) { this.unexpected(); }
  else {
    node.label = this.parseIdent();
    this.semicolon();
  }

  // Verify that there is an actual destination to break or
  // continue to.
  var i = 0;
  for (; i < this.labels.length; ++i) {
    var lab = this.labels[i];
    if (node.label == null || lab.name === node.label.name) {
      if (lab.kind != null && (isBreak || lab.kind === "loop")) { break }
      if (node.label && isBreak) { break }
    }
  }
  if (i === this.labels.length) { this.raise(node.start, "Unsyntactic " + keyword); }
  return this.finishNode(node, isBreak ? "BreakStatement" : "ContinueStatement")
};

pp$1.parseDebuggerStatement = function(node) {
  this.next();
  this.semicolon();
  return this.finishNode(node, "DebuggerStatement")
};

pp$1.parseDoStatement = function(node) {
  this.next();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("do");
  this.labels.pop();
  this.expect(types._while);
  node.test = this.parseParenExpression();
  if (this.options.ecmaVersion >= 6)
    { this.eat(types.semi); }
  else
    { this.semicolon(); }
  return this.finishNode(node, "DoWhileStatement")
};

// Disambiguating between a `for` and a `for`/`in` or `for`/`of`
// loop is non-trivial. Basically, we have to parse the init `var`
// statement or expression, disallowing the `in` operator (see
// the second parameter to `parseExpression`), and then check
// whether the next token is `in` or `of`. When there is no init
// part (semicolon immediately after the opening parenthesis), it
// is a regular `for` loop.

pp$1.parseForStatement = function(node) {
  this.next();
  var awaitAt = (this.options.ecmaVersion >= 9 && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction)) && this.eatContextual("await")) ? this.lastTokStart : -1;
  this.labels.push(loopLabel);
  this.enterScope(0);
  this.expect(types.parenL);
  if (this.type === types.semi) {
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, null)
  }
  var isLet = this.isLet();
  if (this.type === types._var || this.type === types._const || isLet) {
    var init$1 = this.startNode(), kind = isLet ? "let" : this.value;
    this.next();
    this.parseVar(init$1, true, kind);
    this.finishNode(init$1, "VariableDeclaration");
    if ((this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) && init$1.declarations.length === 1) {
      if (this.options.ecmaVersion >= 9) {
        if (this.type === types._in) {
          if (awaitAt > -1) { this.unexpected(awaitAt); }
        } else { node.await = awaitAt > -1; }
      }
      return this.parseForIn(node, init$1)
    }
    if (awaitAt > -1) { this.unexpected(awaitAt); }
    return this.parseFor(node, init$1)
  }
  var refDestructuringErrors = new DestructuringErrors;
  var init = this.parseExpression(true, refDestructuringErrors);
  if (this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of"))) {
    if (this.options.ecmaVersion >= 9) {
      if (this.type === types._in) {
        if (awaitAt > -1) { this.unexpected(awaitAt); }
      } else { node.await = awaitAt > -1; }
    }
    this.toAssignable(init, false, refDestructuringErrors);
    this.checkLVal(init);
    return this.parseForIn(node, init)
  } else {
    this.checkExpressionErrors(refDestructuringErrors, true);
  }
  if (awaitAt > -1) { this.unexpected(awaitAt); }
  return this.parseFor(node, init)
};

pp$1.parseFunctionStatement = function(node, isAsync, declarationPosition) {
  this.next();
  return this.parseFunction(node, FUNC_STATEMENT | (declarationPosition ? 0 : FUNC_HANGING_STATEMENT), false, isAsync)
};

pp$1.parseIfStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  // allow function declarations in branches, but only in non-strict mode
  node.consequent = this.parseStatement("if");
  node.alternate = this.eat(types._else) ? this.parseStatement("if") : null;
  return this.finishNode(node, "IfStatement")
};

pp$1.parseReturnStatement = function(node) {
  if (!this.inFunction && !this.options.allowReturnOutsideFunction)
    { this.raise(this.start, "'return' outside of function"); }
  this.next();

  // In `return` (and `break`/`continue`), the keywords with
  // optional arguments, we eagerly look for a semicolon or the
  // possibility to insert one.

  if (this.eat(types.semi) || this.insertSemicolon()) { node.argument = null; }
  else { node.argument = this.parseExpression(); this.semicolon(); }
  return this.finishNode(node, "ReturnStatement")
};

pp$1.parseSwitchStatement = function(node) {
  this.next();
  node.discriminant = this.parseParenExpression();
  node.cases = [];
  this.expect(types.braceL);
  this.labels.push(switchLabel);
  this.enterScope(0);

  // Statements under must be grouped (by label) in SwitchCase
  // nodes. `cur` is used to keep the node that we are currently
  // adding statements to.

  var cur;
  for (var sawDefault = false; this.type !== types.braceR;) {
    if (this.type === types._case || this.type === types._default) {
      var isCase = this.type === types._case;
      if (cur) { this.finishNode(cur, "SwitchCase"); }
      node.cases.push(cur = this.startNode());
      cur.consequent = [];
      this.next();
      if (isCase) {
        cur.test = this.parseExpression();
      } else {
        if (sawDefault) { this.raiseRecoverable(this.lastTokStart, "Multiple default clauses"); }
        sawDefault = true;
        cur.test = null;
      }
      this.expect(types.colon);
    } else {
      if (!cur) { this.unexpected(); }
      cur.consequent.push(this.parseStatement(null));
    }
  }
  this.exitScope();
  if (cur) { this.finishNode(cur, "SwitchCase"); }
  this.next(); // Closing brace
  this.labels.pop();
  return this.finishNode(node, "SwitchStatement")
};

pp$1.parseThrowStatement = function(node) {
  this.next();
  if (lineBreak.test(this.input.slice(this.lastTokEnd, this.start)))
    { this.raise(this.lastTokEnd, "Illegal newline after throw"); }
  node.argument = this.parseExpression();
  this.semicolon();
  return this.finishNode(node, "ThrowStatement")
};

// Reused empty array added for node fields that are always empty.

var empty = [];

pp$1.parseTryStatement = function(node) {
  this.next();
  node.block = this.parseBlock();
  node.handler = null;
  if (this.type === types._catch) {
    var clause = this.startNode();
    this.next();
    if (this.eat(types.parenL)) {
      clause.param = this.parseBindingAtom();
      var simple = clause.param.type === "Identifier";
      this.enterScope(simple ? SCOPE_SIMPLE_CATCH : 0);
      this.checkLVal(clause.param, simple ? BIND_SIMPLE_CATCH : BIND_LEXICAL);
      this.expect(types.parenR);
    } else {
      if (this.options.ecmaVersion < 10) { this.unexpected(); }
      clause.param = null;
      this.enterScope(0);
    }
    clause.body = this.parseBlock(false);
    this.exitScope();
    node.handler = this.finishNode(clause, "CatchClause");
  }
  node.finalizer = this.eat(types._finally) ? this.parseBlock() : null;
  if (!node.handler && !node.finalizer)
    { this.raise(node.start, "Missing catch or finally clause"); }
  return this.finishNode(node, "TryStatement")
};

pp$1.parseVarStatement = function(node, kind) {
  this.next();
  this.parseVar(node, false, kind);
  this.semicolon();
  return this.finishNode(node, "VariableDeclaration")
};

pp$1.parseWhileStatement = function(node) {
  this.next();
  node.test = this.parseParenExpression();
  this.labels.push(loopLabel);
  node.body = this.parseStatement("while");
  this.labels.pop();
  return this.finishNode(node, "WhileStatement")
};

pp$1.parseWithStatement = function(node) {
  if (this.strict) { this.raise(this.start, "'with' in strict mode"); }
  this.next();
  node.object = this.parseParenExpression();
  node.body = this.parseStatement("with");
  return this.finishNode(node, "WithStatement")
};

pp$1.parseEmptyStatement = function(node) {
  this.next();
  return this.finishNode(node, "EmptyStatement")
};

pp$1.parseLabeledStatement = function(node, maybeName, expr, context) {
  for (var i$1 = 0, list = this.labels; i$1 < list.length; i$1 += 1)
    {
    var label = list[i$1];

    if (label.name === maybeName)
      { this.raise(expr.start, "Label '" + maybeName + "' is already declared");
  } }
  var kind = this.type.isLoop ? "loop" : this.type === types._switch ? "switch" : null;
  for (var i = this.labels.length - 1; i >= 0; i--) {
    var label$1 = this.labels[i];
    if (label$1.statementStart === node.start) {
      // Update information about previous labels on this node
      label$1.statementStart = this.start;
      label$1.kind = kind;
    } else { break }
  }
  this.labels.push({name: maybeName, kind: kind, statementStart: this.start});
  node.body = this.parseStatement(context ? context.indexOf("label") === -1 ? context + "label" : context : "label");
  this.labels.pop();
  node.label = expr;
  return this.finishNode(node, "LabeledStatement")
};

pp$1.parseExpressionStatement = function(node, expr) {
  node.expression = expr;
  this.semicolon();
  return this.finishNode(node, "ExpressionStatement")
};

// Parse a semicolon-enclosed block of statements, handling `"use
// strict"` declarations when `allowStrict` is true (used for
// function bodies).

pp$1.parseBlock = function(createNewLexicalScope, node) {
  if ( createNewLexicalScope === void 0 ) createNewLexicalScope = true;
  if ( node === void 0 ) node = this.startNode();

  node.body = [];
  this.expect(types.braceL);
  if (createNewLexicalScope) { this.enterScope(0); }
  while (!this.eat(types.braceR)) {
    var stmt = this.parseStatement(null);
    node.body.push(stmt);
  }
  if (createNewLexicalScope) { this.exitScope(); }
  return this.finishNode(node, "BlockStatement")
};

// Parse a regular `for` loop. The disambiguation code in
// `parseStatement` will already have parsed the init statement or
// expression.

pp$1.parseFor = function(node, init) {
  node.init = init;
  this.expect(types.semi);
  node.test = this.type === types.semi ? null : this.parseExpression();
  this.expect(types.semi);
  node.update = this.type === types.parenR ? null : this.parseExpression();
  this.expect(types.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, "ForStatement")
};

// Parse a `for`/`in` and `for`/`of` loop, which are almost
// same from parser's perspective.

pp$1.parseForIn = function(node, init) {
  var isForIn = this.type === types._in;
  this.next();

  if (
    init.type === "VariableDeclaration" &&
    init.declarations[0].init != null &&
    (
      !isForIn ||
      this.options.ecmaVersion < 8 ||
      this.strict ||
      init.kind !== "var" ||
      init.declarations[0].id.type !== "Identifier"
    )
  ) {
    this.raise(
      init.start,
      ((isForIn ? "for-in" : "for-of") + " loop variable declaration may not have an initializer")
    );
  } else if (init.type === "AssignmentPattern") {
    this.raise(init.start, "Invalid left-hand side in for-loop");
  }
  node.left = init;
  node.right = isForIn ? this.parseExpression() : this.parseMaybeAssign();
  this.expect(types.parenR);
  node.body = this.parseStatement("for");
  this.exitScope();
  this.labels.pop();
  return this.finishNode(node, isForIn ? "ForInStatement" : "ForOfStatement")
};

// Parse a list of variable declarations.

pp$1.parseVar = function(node, isFor, kind) {
  node.declarations = [];
  node.kind = kind;
  for (;;) {
    var decl = this.startNode();
    this.parseVarId(decl, kind);
    if (this.eat(types.eq)) {
      decl.init = this.parseMaybeAssign(isFor);
    } else if (kind === "const" && !(this.type === types._in || (this.options.ecmaVersion >= 6 && this.isContextual("of")))) {
      this.unexpected();
    } else if (decl.id.type !== "Identifier" && !(isFor && (this.type === types._in || this.isContextual("of")))) {
      this.raise(this.lastTokEnd, "Complex binding patterns require an initialization value");
    } else {
      decl.init = null;
    }
    node.declarations.push(this.finishNode(decl, "VariableDeclarator"));
    if (!this.eat(types.comma)) { break }
  }
  return node
};

pp$1.parseVarId = function(decl, kind) {
  decl.id = this.parseBindingAtom();
  this.checkLVal(decl.id, kind === "var" ? BIND_VAR : BIND_LEXICAL, false);
};

var FUNC_STATEMENT = 1, FUNC_HANGING_STATEMENT = 2, FUNC_NULLABLE_ID = 4;

// Parse a function declaration or literal (depending on the
// `statement & FUNC_STATEMENT`).

// Remove `allowExpressionBody` for 7.0.0, as it is only called with false
pp$1.parseFunction = function(node, statement, allowExpressionBody, isAsync) {
  this.initFunction(node);
  if (this.options.ecmaVersion >= 9 || this.options.ecmaVersion >= 6 && !isAsync) {
    if (this.type === types.star && (statement & FUNC_HANGING_STATEMENT))
      { this.unexpected(); }
    node.generator = this.eat(types.star);
  }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  if (statement & FUNC_STATEMENT) {
    node.id = (statement & FUNC_NULLABLE_ID) && this.type !== types.name ? null : this.parseIdent();
    if (node.id && !(statement & FUNC_HANGING_STATEMENT))
      // If it is a regular function declaration in sloppy mode, then it is
      // subject to Annex B semantics (BIND_FUNCTION). Otherwise, the binding
      // mode depends on properties of the current scope (see
      // treatFunctionsAsVar).
      { this.checkLVal(node.id, (this.strict || node.generator || node.async) ? this.treatFunctionsAsVar ? BIND_VAR : BIND_LEXICAL : BIND_FUNCTION); }
  }

  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(node.async, node.generator));

  if (!(statement & FUNC_STATEMENT))
    { node.id = this.type === types.name ? this.parseIdent() : null; }

  this.parseFunctionParams(node);
  this.parseFunctionBody(node, allowExpressionBody, false);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, (statement & FUNC_STATEMENT) ? "FunctionDeclaration" : "FunctionExpression")
};

pp$1.parseFunctionParams = function(node) {
  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
};

// Parse a class declaration or literal (depending on the
// `isStatement` parameter).

pp$1.parseClass = function(node, isStatement) {
  this.next();

  // ecma-262 14.6 Class Definitions
  // A class definition is always strict mode code.
  var oldStrict = this.strict;
  this.strict = true;

  this.parseClassId(node, isStatement);
  this.parseClassSuper(node);
  var classBody = this.startNode();
  var hadConstructor = false;
  classBody.body = [];
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    var element = this.parseClassElement(node.superClass !== null);
    if (element) {
      classBody.body.push(element);
      if (element.type === "MethodDefinition" && element.kind === "constructor") {
        if (hadConstructor) { this.raise(element.start, "Duplicate constructor in the same class"); }
        hadConstructor = true;
      }
    }
  }
  node.body = this.finishNode(classBody, "ClassBody");
  this.strict = oldStrict;
  return this.finishNode(node, isStatement ? "ClassDeclaration" : "ClassExpression")
};

pp$1.parseClassElement = function(constructorAllowsSuper) {
  var this$1 = this;

  if (this.eat(types.semi)) { return null }

  var method = this.startNode();
  var tryContextual = function (k, noLineBreak) {
    if ( noLineBreak === void 0 ) noLineBreak = false;

    var start = this$1.start, startLoc = this$1.startLoc;
    if (!this$1.eatContextual(k)) { return false }
    if (this$1.type !== types.parenL && (!noLineBreak || !this$1.canInsertSemicolon())) { return true }
    if (method.key) { this$1.unexpected(); }
    method.computed = false;
    method.key = this$1.startNodeAt(start, startLoc);
    method.key.name = k;
    this$1.finishNode(method.key, "Identifier");
    return false
  };

  method.kind = "method";
  method.static = tryContextual("static");
  var isGenerator = this.eat(types.star);
  var isAsync = false;
  if (!isGenerator) {
    if (this.options.ecmaVersion >= 8 && tryContextual("async", true)) {
      isAsync = true;
      isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    } else if (tryContextual("get")) {
      method.kind = "get";
    } else if (tryContextual("set")) {
      method.kind = "set";
    }
  }
  if (!method.key) { this.parsePropertyName(method); }
  var key = method.key;
  var allowsDirectSuper = false;
  if (!method.computed && !method.static && (key.type === "Identifier" && key.name === "constructor" ||
      key.type === "Literal" && key.value === "constructor")) {
    if (method.kind !== "method") { this.raise(key.start, "Constructor can't have get/set modifier"); }
    if (isGenerator) { this.raise(key.start, "Constructor can't be a generator"); }
    if (isAsync) { this.raise(key.start, "Constructor can't be an async method"); }
    method.kind = "constructor";
    allowsDirectSuper = constructorAllowsSuper;
  } else if (method.static && key.type === "Identifier" && key.name === "prototype") {
    this.raise(key.start, "Classes may not have a static property named prototype");
  }
  this.parseClassMethod(method, isGenerator, isAsync, allowsDirectSuper);
  if (method.kind === "get" && method.value.params.length !== 0)
    { this.raiseRecoverable(method.value.start, "getter should have no params"); }
  if (method.kind === "set" && method.value.params.length !== 1)
    { this.raiseRecoverable(method.value.start, "setter should have exactly one param"); }
  if (method.kind === "set" && method.value.params[0].type === "RestElement")
    { this.raiseRecoverable(method.value.params[0].start, "Setter cannot use rest params"); }
  return method
};

pp$1.parseClassMethod = function(method, isGenerator, isAsync, allowsDirectSuper) {
  method.value = this.parseMethod(isGenerator, isAsync, allowsDirectSuper);
  return this.finishNode(method, "MethodDefinition")
};

pp$1.parseClassId = function(node, isStatement) {
  if (this.type === types.name) {
    node.id = this.parseIdent();
    if (isStatement)
      { this.checkLVal(node.id, BIND_LEXICAL, false); }
  } else {
    if (isStatement === true)
      { this.unexpected(); }
    node.id = null;
  }
};

pp$1.parseClassSuper = function(node) {
  node.superClass = this.eat(types._extends) ? this.parseExprSubscripts() : null;
};

// Parses module export declaration.

pp$1.parseExport = function(node, exports) {
  this.next();
  // export * from '...'
  if (this.eat(types.star)) {
    this.expectContextual("from");
    if (this.type !== types.string) { this.unexpected(); }
    node.source = this.parseExprAtom();
    this.semicolon();
    return this.finishNode(node, "ExportAllDeclaration")
  }
  if (this.eat(types._default)) { // export default ...
    this.checkExport(exports, "default", this.lastTokStart);
    var isAsync;
    if (this.type === types._function || (isAsync = this.isAsyncFunction())) {
      var fNode = this.startNode();
      this.next();
      if (isAsync) { this.next(); }
      node.declaration = this.parseFunction(fNode, FUNC_STATEMENT | FUNC_NULLABLE_ID, false, isAsync);
    } else if (this.type === types._class) {
      var cNode = this.startNode();
      node.declaration = this.parseClass(cNode, "nullableID");
    } else {
      node.declaration = this.parseMaybeAssign();
      this.semicolon();
    }
    return this.finishNode(node, "ExportDefaultDeclaration")
  }
  // export var|const|let|function|class ...
  if (this.shouldParseExportStatement()) {
    node.declaration = this.parseStatement(null);
    if (node.declaration.type === "VariableDeclaration")
      { this.checkVariableExport(exports, node.declaration.declarations); }
    else
      { this.checkExport(exports, node.declaration.id.name, node.declaration.id.start); }
    node.specifiers = [];
    node.source = null;
  } else { // export { x, y as z } [from '...']
    node.declaration = null;
    node.specifiers = this.parseExportSpecifiers(exports);
    if (this.eatContextual("from")) {
      if (this.type !== types.string) { this.unexpected(); }
      node.source = this.parseExprAtom();
    } else {
      for (var i = 0, list = node.specifiers; i < list.length; i += 1) {
        // check for keywords used as local names
        var spec = list[i];

        this.checkUnreserved(spec.local);
        // check if export is defined
        this.checkLocalExport(spec.local);
      }

      node.source = null;
    }
    this.semicolon();
  }
  return this.finishNode(node, "ExportNamedDeclaration")
};

pp$1.checkExport = function(exports, name, pos) {
  if (!exports) { return }
  if (has(exports, name))
    { this.raiseRecoverable(pos, "Duplicate export '" + name + "'"); }
  exports[name] = true;
};

pp$1.checkPatternExport = function(exports, pat) {
  var type = pat.type;
  if (type === "Identifier")
    { this.checkExport(exports, pat.name, pat.start); }
  else if (type === "ObjectPattern")
    { for (var i = 0, list = pat.properties; i < list.length; i += 1)
      {
        var prop = list[i];

        this.checkPatternExport(exports, prop);
      } }
  else if (type === "ArrayPattern")
    { for (var i$1 = 0, list$1 = pat.elements; i$1 < list$1.length; i$1 += 1) {
      var elt = list$1[i$1];

        if (elt) { this.checkPatternExport(exports, elt); }
    } }
  else if (type === "Property")
    { this.checkPatternExport(exports, pat.value); }
  else if (type === "AssignmentPattern")
    { this.checkPatternExport(exports, pat.left); }
  else if (type === "RestElement")
    { this.checkPatternExport(exports, pat.argument); }
  else if (type === "ParenthesizedExpression")
    { this.checkPatternExport(exports, pat.expression); }
};

pp$1.checkVariableExport = function(exports, decls) {
  if (!exports) { return }
  for (var i = 0, list = decls; i < list.length; i += 1)
    {
    var decl = list[i];

    this.checkPatternExport(exports, decl.id);
  }
};

pp$1.shouldParseExportStatement = function() {
  return this.type.keyword === "var" ||
    this.type.keyword === "const" ||
    this.type.keyword === "class" ||
    this.type.keyword === "function" ||
    this.isLet() ||
    this.isAsyncFunction()
};

// Parses a comma-separated list of module exports.

pp$1.parseExportSpecifiers = function(exports) {
  var nodes = [], first = true;
  // export { x, y as z } [from '...']
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node = this.startNode();
    node.local = this.parseIdent(true);
    node.exported = this.eatContextual("as") ? this.parseIdent(true) : node.local;
    this.checkExport(exports, node.exported.name, node.exported.start);
    nodes.push(this.finishNode(node, "ExportSpecifier"));
  }
  return nodes
};

// Parses import declaration.

pp$1.parseImport = function(node) {
  this.next();
  // import '...'
  if (this.type === types.string) {
    node.specifiers = empty;
    node.source = this.parseExprAtom();
  } else {
    node.specifiers = this.parseImportSpecifiers();
    this.expectContextual("from");
    node.source = this.type === types.string ? this.parseExprAtom() : this.unexpected();
  }
  this.semicolon();
  return this.finishNode(node, "ImportDeclaration")
};

// Parses a comma-separated list of module imports.

pp$1.parseImportSpecifiers = function() {
  var nodes = [], first = true;
  if (this.type === types.name) {
    // import defaultObj, { x, y as z } from '...'
    var node = this.startNode();
    node.local = this.parseIdent();
    this.checkLVal(node.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node, "ImportDefaultSpecifier"));
    if (!this.eat(types.comma)) { return nodes }
  }
  if (this.type === types.star) {
    var node$1 = this.startNode();
    this.next();
    this.expectContextual("as");
    node$1.local = this.parseIdent();
    this.checkLVal(node$1.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$1, "ImportNamespaceSpecifier"));
    return nodes
  }
  this.expect(types.braceL);
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var node$2 = this.startNode();
    node$2.imported = this.parseIdent(true);
    if (this.eatContextual("as")) {
      node$2.local = this.parseIdent();
    } else {
      this.checkUnreserved(node$2.imported);
      node$2.local = node$2.imported;
    }
    this.checkLVal(node$2.local, BIND_LEXICAL);
    nodes.push(this.finishNode(node$2, "ImportSpecifier"));
  }
  return nodes
};

// Set `ExpressionStatement#directive` property for directive prologues.
pp$1.adaptDirectivePrologue = function(statements) {
  for (var i = 0; i < statements.length && this.isDirectiveCandidate(statements[i]); ++i) {
    statements[i].directive = statements[i].expression.raw.slice(1, -1);
  }
};
pp$1.isDirectiveCandidate = function(statement) {
  return (
    statement.type === "ExpressionStatement" &&
    statement.expression.type === "Literal" &&
    typeof statement.expression.value === "string" &&
    // Reject parenthesized strings.
    (this.input[statement.start] === "\"" || this.input[statement.start] === "'")
  )
};

var pp$2 = Parser.prototype;

// Convert existing expression atom to assignable pattern
// if possible.

pp$2.toAssignable = function(node, isBinding, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 6 && node) {
    switch (node.type) {
    case "Identifier":
      if (this.inAsync && node.name === "await")
        { this.raise(node.start, "Cannot use 'await' as identifier inside an async function"); }
      break

    case "ObjectPattern":
    case "ArrayPattern":
    case "RestElement":
      break

    case "ObjectExpression":
      node.type = "ObjectPattern";
      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
      for (var i = 0, list = node.properties; i < list.length; i += 1) {
        var prop = list[i];

      this.toAssignable(prop, isBinding);
        // Early error:
        //   AssignmentRestProperty[Yield, Await] :
        //     `...` DestructuringAssignmentTarget[Yield, Await]
        //
        //   It is a Syntax Error if |DestructuringAssignmentTarget| is an |ArrayLiteral| or an |ObjectLiteral|.
        if (
          prop.type === "RestElement" &&
          (prop.argument.type === "ArrayPattern" || prop.argument.type === "ObjectPattern")
        ) {
          this.raise(prop.argument.start, "Unexpected token");
        }
      }
      break

    case "Property":
      // AssignmentProperty has type === "Property"
      if (node.kind !== "init") { this.raise(node.key.start, "Object pattern can't contain getter or setter"); }
      this.toAssignable(node.value, isBinding);
      break

    case "ArrayExpression":
      node.type = "ArrayPattern";
      if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
      this.toAssignableList(node.elements, isBinding);
      break

    case "SpreadElement":
      node.type = "RestElement";
      this.toAssignable(node.argument, isBinding);
      if (node.argument.type === "AssignmentPattern")
        { this.raise(node.argument.start, "Rest elements cannot have a default value"); }
      break

    case "AssignmentExpression":
      if (node.operator !== "=") { this.raise(node.left.end, "Only '=' operator can be used for specifying default value."); }
      node.type = "AssignmentPattern";
      delete node.operator;
      this.toAssignable(node.left, isBinding);
      // falls through to AssignmentPattern

    case "AssignmentPattern":
      break

    case "ParenthesizedExpression":
      this.toAssignable(node.expression, isBinding, refDestructuringErrors);
      break

    case "MemberExpression":
      if (!isBinding) { break }

    default:
      this.raise(node.start, "Assigning to rvalue");
    }
  } else if (refDestructuringErrors) { this.checkPatternErrors(refDestructuringErrors, true); }
  return node
};

// Convert list of expression atoms to binding list.

pp$2.toAssignableList = function(exprList, isBinding) {
  var end = exprList.length;
  for (var i = 0; i < end; i++) {
    var elt = exprList[i];
    if (elt) { this.toAssignable(elt, isBinding); }
  }
  if (end) {
    var last = exprList[end - 1];
    if (this.options.ecmaVersion === 6 && isBinding && last && last.type === "RestElement" && last.argument.type !== "Identifier")
      { this.unexpected(last.argument.start); }
  }
  return exprList
};

// Parses spread element.

pp$2.parseSpread = function(refDestructuringErrors) {
  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeAssign(false, refDestructuringErrors);
  return this.finishNode(node, "SpreadElement")
};

pp$2.parseRestBinding = function() {
  var node = this.startNode();
  this.next();

  // RestElement inside of a function parameter must be an identifier
  if (this.options.ecmaVersion === 6 && this.type !== types.name)
    { this.unexpected(); }

  node.argument = this.parseBindingAtom();

  return this.finishNode(node, "RestElement")
};

// Parses lvalue (assignable) atom.

pp$2.parseBindingAtom = function() {
  if (this.options.ecmaVersion >= 6) {
    switch (this.type) {
    case types.bracketL:
      var node = this.startNode();
      this.next();
      node.elements = this.parseBindingList(types.bracketR, true, true);
      return this.finishNode(node, "ArrayPattern")

    case types.braceL:
      return this.parseObj(true)
    }
  }
  return this.parseIdent()
};

pp$2.parseBindingList = function(close, allowEmpty, allowTrailingComma) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (first) { first = false; }
    else { this.expect(types.comma); }
    if (allowEmpty && this.type === types.comma) {
      elts.push(null);
    } else if (allowTrailingComma && this.afterTrailingComma(close)) {
      break
    } else if (this.type === types.ellipsis) {
      var rest = this.parseRestBinding();
      this.parseBindingListItem(rest);
      elts.push(rest);
      if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
      this.expect(close);
      break
    } else {
      var elem = this.parseMaybeDefault(this.start, this.startLoc);
      this.parseBindingListItem(elem);
      elts.push(elem);
    }
  }
  return elts
};

pp$2.parseBindingListItem = function(param) {
  return param
};

// Parses assignment pattern around given atom if possible.

pp$2.parseMaybeDefault = function(startPos, startLoc, left) {
  left = left || this.parseBindingAtom();
  if (this.options.ecmaVersion < 6 || !this.eat(types.eq)) { return left }
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.right = this.parseMaybeAssign();
  return this.finishNode(node, "AssignmentPattern")
};

// Verify that a node is an lval — something that can be assigned
// to.
// bindingType can be either:
// 'var' indicating that the lval creates a 'var' binding
// 'let' indicating that the lval creates a lexical ('let' or 'const') binding
// 'none' indicating that the binding should be checked for illegal identifiers, but not for duplicate references

pp$2.checkLVal = function(expr, bindingType, checkClashes) {
  if ( bindingType === void 0 ) bindingType = BIND_NONE;

  switch (expr.type) {
  case "Identifier":
    if (bindingType === BIND_LEXICAL && expr.name === "let")
      { this.raiseRecoverable(expr.start, "let is disallowed as a lexically bound name"); }
    if (this.strict && this.reservedWordsStrictBind.test(expr.name))
      { this.raiseRecoverable(expr.start, (bindingType ? "Binding " : "Assigning to ") + expr.name + " in strict mode"); }
    if (checkClashes) {
      if (has(checkClashes, expr.name))
        { this.raiseRecoverable(expr.start, "Argument name clash"); }
      checkClashes[expr.name] = true;
    }
    if (bindingType !== BIND_NONE && bindingType !== BIND_OUTSIDE) { this.declareName(expr.name, bindingType, expr.start); }
    break

  case "MemberExpression":
    if (bindingType) { this.raiseRecoverable(expr.start, "Binding member expression"); }
    break

  case "ObjectPattern":
    for (var i = 0, list = expr.properties; i < list.length; i += 1)
      {
    var prop = list[i];

    this.checkLVal(prop, bindingType, checkClashes);
  }
    break

  case "Property":
    // AssignmentProperty has type === "Property"
    this.checkLVal(expr.value, bindingType, checkClashes);
    break

  case "ArrayPattern":
    for (var i$1 = 0, list$1 = expr.elements; i$1 < list$1.length; i$1 += 1) {
      var elem = list$1[i$1];

    if (elem) { this.checkLVal(elem, bindingType, checkClashes); }
    }
    break

  case "AssignmentPattern":
    this.checkLVal(expr.left, bindingType, checkClashes);
    break

  case "RestElement":
    this.checkLVal(expr.argument, bindingType, checkClashes);
    break

  case "ParenthesizedExpression":
    this.checkLVal(expr.expression, bindingType, checkClashes);
    break

  default:
    this.raise(expr.start, (bindingType ? "Binding" : "Assigning to") + " rvalue");
  }
};

// A recursive descent parser operates by defining functions for all

var pp$3 = Parser.prototype;

// Check if property name clashes with already added.
// Object/class getters and setters are not allowed to clash —
// either with each other or with an init property — and in
// strict mode, init properties are also not allowed to be repeated.

pp$3.checkPropClash = function(prop, propHash, refDestructuringErrors) {
  if (this.options.ecmaVersion >= 9 && prop.type === "SpreadElement")
    { return }
  if (this.options.ecmaVersion >= 6 && (prop.computed || prop.method || prop.shorthand))
    { return }
  var key = prop.key;
  var name;
  switch (key.type) {
  case "Identifier": name = key.name; break
  case "Literal": name = String(key.value); break
  default: return
  }
  var kind = prop.kind;
  if (this.options.ecmaVersion >= 6) {
    if (name === "__proto__" && kind === "init") {
      if (propHash.proto) {
        if (refDestructuringErrors && refDestructuringErrors.doubleProto < 0) { refDestructuringErrors.doubleProto = key.start; }
        // Backwards-compat kludge. Can be removed in version 6.0
        else { this.raiseRecoverable(key.start, "Redefinition of __proto__ property"); }
      }
      propHash.proto = true;
    }
    return
  }
  name = "$" + name;
  var other = propHash[name];
  if (other) {
    var redefinition;
    if (kind === "init") {
      redefinition = this.strict && other.init || other.get || other.set;
    } else {
      redefinition = other.init || other[kind];
    }
    if (redefinition)
      { this.raiseRecoverable(key.start, "Redefinition of property"); }
  } else {
    other = propHash[name] = {
      init: false,
      get: false,
      set: false
    };
  }
  other[kind] = true;
};

// ### Expression parsing

// These nest, from the most general expression type at the top to
// 'atomic', nondivisible expression types at the bottom. Most of
// the functions will simply let the function(s) below them parse,
// and, *if* the syntactic construct they handle is present, wrap
// the AST node that the inner parser gave them in another node.

// Parse a full expression. The optional arguments are used to
// forbid the `in` operator (in for loops initalization expressions)
// and provide reference for storing '=' operator inside shorthand
// property assignment in contexts where both object expression
// and object pattern might appear (so it's possible to raise
// delayed syntax error at correct position).

pp$3.parseExpression = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeAssign(noIn, refDestructuringErrors);
  if (this.type === types.comma) {
    var node = this.startNodeAt(startPos, startLoc);
    node.expressions = [expr];
    while (this.eat(types.comma)) { node.expressions.push(this.parseMaybeAssign(noIn, refDestructuringErrors)); }
    return this.finishNode(node, "SequenceExpression")
  }
  return expr
};

// Parse an assignment expression. This includes applications of
// operators like `+=`.

pp$3.parseMaybeAssign = function(noIn, refDestructuringErrors, afterLeftParse) {
  if (this.isContextual("yield")) {
    if (this.inGenerator) { return this.parseYield(noIn) }
    // The tokenizer will assume an expression is allowed after
    // `yield`, but this isn't that kind of yield
    else { this.exprAllowed = false; }
  }

  var ownDestructuringErrors = false, oldParenAssign = -1, oldTrailingComma = -1, oldShorthandAssign = -1;
  if (refDestructuringErrors) {
    oldParenAssign = refDestructuringErrors.parenthesizedAssign;
    oldTrailingComma = refDestructuringErrors.trailingComma;
    oldShorthandAssign = refDestructuringErrors.shorthandAssign;
    refDestructuringErrors.parenthesizedAssign = refDestructuringErrors.trailingComma = refDestructuringErrors.shorthandAssign = -1;
  } else {
    refDestructuringErrors = new DestructuringErrors;
    ownDestructuringErrors = true;
  }

  var startPos = this.start, startLoc = this.startLoc;
  if (this.type === types.parenL || this.type === types.name)
    { this.potentialArrowAt = this.start; }
  var left = this.parseMaybeConditional(noIn, refDestructuringErrors);
  if (afterLeftParse) { left = afterLeftParse.call(this, left, startPos, startLoc); }
  if (this.type.isAssign) {
    var node = this.startNodeAt(startPos, startLoc);
    node.operator = this.value;
    node.left = this.type === types.eq ? this.toAssignable(left, false, refDestructuringErrors) : left;
    if (!ownDestructuringErrors) { DestructuringErrors.call(refDestructuringErrors); }
    refDestructuringErrors.shorthandAssign = -1; // reset because shorthand default was used correctly
    this.checkLVal(left);
    this.next();
    node.right = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "AssignmentExpression")
  } else {
    if (ownDestructuringErrors) { this.checkExpressionErrors(refDestructuringErrors, true); }
  }
  if (oldParenAssign > -1) { refDestructuringErrors.parenthesizedAssign = oldParenAssign; }
  if (oldTrailingComma > -1) { refDestructuringErrors.trailingComma = oldTrailingComma; }
  if (oldShorthandAssign > -1) { refDestructuringErrors.shorthandAssign = oldShorthandAssign; }
  return left
};

// Parse a ternary conditional (`?:`) operator.

pp$3.parseMaybeConditional = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprOps(noIn, refDestructuringErrors);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  if (this.eat(types.question)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.test = expr;
    node.consequent = this.parseMaybeAssign();
    this.expect(types.colon);
    node.alternate = this.parseMaybeAssign(noIn);
    return this.finishNode(node, "ConditionalExpression")
  }
  return expr
};

// Start the precedence parser.

pp$3.parseExprOps = function(noIn, refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseMaybeUnary(refDestructuringErrors, false);
  if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
  return expr.start === startPos && expr.type === "ArrowFunctionExpression" ? expr : this.parseExprOp(expr, startPos, startLoc, -1, noIn)
};

// Parse binary operators with the operator precedence parsing
// algorithm. `left` is the left-hand side of the operator.
// `minPrec` provides context that allows the function to stop and
// defer further parser to one of its callers when it encounters an
// operator that has a lower precedence than the set it is parsing.

pp$3.parseExprOp = function(left, leftStartPos, leftStartLoc, minPrec, noIn) {
  var prec = this.type.binop;
  if (prec != null && (!noIn || this.type !== types._in)) {
    if (prec > minPrec) {
      var logical = this.type === types.logicalOR || this.type === types.logicalAND;
      var op = this.value;
      this.next();
      var startPos = this.start, startLoc = this.startLoc;
      var right = this.parseExprOp(this.parseMaybeUnary(null, false), startPos, startLoc, prec, noIn);
      var node = this.buildBinary(leftStartPos, leftStartLoc, left, right, op, logical);
      return this.parseExprOp(node, leftStartPos, leftStartLoc, minPrec, noIn)
    }
  }
  return left
};

pp$3.buildBinary = function(startPos, startLoc, left, right, op, logical) {
  var node = this.startNodeAt(startPos, startLoc);
  node.left = left;
  node.operator = op;
  node.right = right;
  return this.finishNode(node, logical ? "LogicalExpression" : "BinaryExpression")
};

// Parse unary operators, both prefix and postfix.

pp$3.parseMaybeUnary = function(refDestructuringErrors, sawUnary) {
  var startPos = this.start, startLoc = this.startLoc, expr;
  if (this.isContextual("await") && (this.inAsync || (!this.inFunction && this.options.allowAwaitOutsideFunction))) {
    expr = this.parseAwait();
    sawUnary = true;
  } else if (this.type.prefix) {
    var node = this.startNode(), update = this.type === types.incDec;
    node.operator = this.value;
    node.prefix = true;
    this.next();
    node.argument = this.parseMaybeUnary(null, true);
    this.checkExpressionErrors(refDestructuringErrors, true);
    if (update) { this.checkLVal(node.argument); }
    else if (this.strict && node.operator === "delete" &&
             node.argument.type === "Identifier")
      { this.raiseRecoverable(node.start, "Deleting local variable in strict mode"); }
    else { sawUnary = true; }
    expr = this.finishNode(node, update ? "UpdateExpression" : "UnaryExpression");
  } else {
    expr = this.parseExprSubscripts(refDestructuringErrors);
    if (this.checkExpressionErrors(refDestructuringErrors)) { return expr }
    while (this.type.postfix && !this.canInsertSemicolon()) {
      var node$1 = this.startNodeAt(startPos, startLoc);
      node$1.operator = this.value;
      node$1.prefix = false;
      node$1.argument = expr;
      this.checkLVal(expr);
      this.next();
      expr = this.finishNode(node$1, "UpdateExpression");
    }
  }

  if (!sawUnary && this.eat(types.starstar))
    { return this.buildBinary(startPos, startLoc, expr, this.parseMaybeUnary(null, false), "**", false) }
  else
    { return expr }
};

// Parse call, dot, and `[]`-subscript expressions.

pp$3.parseExprSubscripts = function(refDestructuringErrors) {
  var startPos = this.start, startLoc = this.startLoc;
  var expr = this.parseExprAtom(refDestructuringErrors);
  var skipArrowSubscripts = expr.type === "ArrowFunctionExpression" && this.input.slice(this.lastTokStart, this.lastTokEnd) !== ")";
  if (this.checkExpressionErrors(refDestructuringErrors) || skipArrowSubscripts) { return expr }
  var result = this.parseSubscripts(expr, startPos, startLoc);
  if (refDestructuringErrors && result.type === "MemberExpression") {
    if (refDestructuringErrors.parenthesizedAssign >= result.start) { refDestructuringErrors.parenthesizedAssign = -1; }
    if (refDestructuringErrors.parenthesizedBind >= result.start) { refDestructuringErrors.parenthesizedBind = -1; }
  }
  return result
};

pp$3.parseSubscripts = function(base, startPos, startLoc, noCalls) {
  var maybeAsyncArrow = this.options.ecmaVersion >= 8 && base.type === "Identifier" && base.name === "async" &&
      this.lastTokEnd === base.end && !this.canInsertSemicolon() && this.input.slice(base.start, base.end) === "async";
  while (true) {
    var element = this.parseSubscript(base, startPos, startLoc, noCalls, maybeAsyncArrow);
    if (element === base || element.type === "ArrowFunctionExpression") { return element }
    base = element;
  }
};

pp$3.parseSubscript = function(base, startPos, startLoc, noCalls, maybeAsyncArrow) {
  var computed = this.eat(types.bracketL);
  if (computed || this.eat(types.dot)) {
    var node = this.startNodeAt(startPos, startLoc);
    node.object = base;
    node.property = computed ? this.parseExpression() : this.parseIdent(this.options.allowReserved !== "never");
    node.computed = !!computed;
    if (computed) { this.expect(types.bracketR); }
    base = this.finishNode(node, "MemberExpression");
  } else if (!noCalls && this.eat(types.parenL)) {
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;
    this.yieldPos = 0;
    this.awaitPos = 0;
    this.awaitIdentPos = 0;
    var exprList = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false, refDestructuringErrors);
    if (maybeAsyncArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      if (this.awaitIdentPos > 0)
        { this.raise(this.awaitIdentPos, "Cannot use 'await' as identifier inside an async function"); }
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      this.awaitIdentPos = oldAwaitIdentPos;
      return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList, true)
    }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;
    this.awaitIdentPos = oldAwaitIdentPos || this.awaitIdentPos;
    var node$1 = this.startNodeAt(startPos, startLoc);
    node$1.callee = base;
    node$1.arguments = exprList;
    base = this.finishNode(node$1, "CallExpression");
  } else if (this.type === types.backQuote) {
    var node$2 = this.startNodeAt(startPos, startLoc);
    node$2.tag = base;
    node$2.quasi = this.parseTemplate({isTagged: true});
    base = this.finishNode(node$2, "TaggedTemplateExpression");
  }
  return base
};

// Parse an atomic expression — either a single token that is an
// expression, an expression started by a keyword like `function` or
// `new`, or an expression wrapped in punctuation like `()`, `[]`,
// or `{}`.

pp$3.parseExprAtom = function(refDestructuringErrors) {
  // If a division operator appears in an expression position, the
  // tokenizer got confused, and we force it to read a regexp instead.
  if (this.type === types.slash) { this.readRegexp(); }

  var node, canBeArrow = this.potentialArrowAt === this.start;
  switch (this.type) {
  case types._super:
    if (!this.allowSuper)
      { this.raise(this.start, "'super' keyword outside a method"); }
    node = this.startNode();
    this.next();
    if (this.type === types.parenL && !this.allowDirectSuper)
      { this.raise(node.start, "super() call outside constructor of a subclass"); }
    // The `super` keyword can appear at below:
    // SuperProperty:
    //     super [ Expression ]
    //     super . IdentifierName
    // SuperCall:
    //     super ( Arguments )
    if (this.type !== types.dot && this.type !== types.bracketL && this.type !== types.parenL)
      { this.unexpected(); }
    return this.finishNode(node, "Super")

  case types._this:
    node = this.startNode();
    this.next();
    return this.finishNode(node, "ThisExpression")

  case types.name:
    var startPos = this.start, startLoc = this.startLoc, containsEsc = this.containsEsc;
    var id = this.parseIdent(false);
    if (this.options.ecmaVersion >= 8 && !containsEsc && id.name === "async" && !this.canInsertSemicolon() && this.eat(types._function))
      { return this.parseFunction(this.startNodeAt(startPos, startLoc), 0, false, true) }
    if (canBeArrow && !this.canInsertSemicolon()) {
      if (this.eat(types.arrow))
        { return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], false) }
      if (this.options.ecmaVersion >= 8 && id.name === "async" && this.type === types.name && !containsEsc) {
        id = this.parseIdent(false);
        if (this.canInsertSemicolon() || !this.eat(types.arrow))
          { this.unexpected(); }
        return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), [id], true)
      }
    }
    return id

  case types.regexp:
    var value = this.value;
    node = this.parseLiteral(value.value);
    node.regex = {pattern: value.pattern, flags: value.flags};
    return node

  case types.num: case types.string:
    return this.parseLiteral(this.value)

  case types._null: case types._true: case types._false:
    node = this.startNode();
    node.value = this.type === types._null ? null : this.type === types._true;
    node.raw = this.type.keyword;
    this.next();
    return this.finishNode(node, "Literal")

  case types.parenL:
    var start = this.start, expr = this.parseParenAndDistinguishExpression(canBeArrow);
    if (refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0 && !this.isSimpleAssignTarget(expr))
        { refDestructuringErrors.parenthesizedAssign = start; }
      if (refDestructuringErrors.parenthesizedBind < 0)
        { refDestructuringErrors.parenthesizedBind = start; }
    }
    return expr

  case types.bracketL:
    node = this.startNode();
    this.next();
    node.elements = this.parseExprList(types.bracketR, true, true, refDestructuringErrors);
    return this.finishNode(node, "ArrayExpression")

  case types.braceL:
    return this.parseObj(false, refDestructuringErrors)

  case types._function:
    node = this.startNode();
    this.next();
    return this.parseFunction(node, 0)

  case types._class:
    return this.parseClass(this.startNode(), false)

  case types._new:
    return this.parseNew()

  case types.backQuote:
    return this.parseTemplate()

  case types._import:
    if (this.options.ecmaVersion >= 11) {
      return this.parseExprImport()
    } else {
      return this.unexpected()
    }

  default:
    this.unexpected();
  }
};

pp$3.parseExprImport = function() {
  var node = this.startNode();
  this.next(); // skip `import`
  switch (this.type) {
  case types.parenL:
    return this.parseDynamicImport(node)
  default:
    this.unexpected();
  }
};

pp$3.parseDynamicImport = function(node) {
  this.next(); // skip `(`

  // Parse node.source.
  node.source = this.parseMaybeAssign();

  // Verify ending.
  if (!this.eat(types.parenR)) {
    var errorPos = this.start;
    if (this.eat(types.comma) && this.eat(types.parenR)) {
      this.raiseRecoverable(errorPos, "Trailing comma is not allowed in import()");
    } else {
      this.unexpected(errorPos);
    }
  }

  return this.finishNode(node, "ImportExpression")
};

pp$3.parseLiteral = function(value) {
  var node = this.startNode();
  node.value = value;
  node.raw = this.input.slice(this.start, this.end);
  if (node.raw.charCodeAt(node.raw.length - 1) === 110) { node.bigint = node.raw.slice(0, -1); }
  this.next();
  return this.finishNode(node, "Literal")
};

pp$3.parseParenExpression = function() {
  this.expect(types.parenL);
  var val = this.parseExpression();
  this.expect(types.parenR);
  return val
};

pp$3.parseParenAndDistinguishExpression = function(canBeArrow) {
  var startPos = this.start, startLoc = this.startLoc, val, allowTrailingComma = this.options.ecmaVersion >= 8;
  if (this.options.ecmaVersion >= 6) {
    this.next();

    var innerStartPos = this.start, innerStartLoc = this.startLoc;
    var exprList = [], first = true, lastIsComma = false;
    var refDestructuringErrors = new DestructuringErrors, oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, spreadStart;
    this.yieldPos = 0;
    this.awaitPos = 0;
    // Do not save awaitIdentPos to allow checking awaits nested in parameters
    while (this.type !== types.parenR) {
      first ? first = false : this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(types.parenR, true)) {
        lastIsComma = true;
        break
      } else if (this.type === types.ellipsis) {
        spreadStart = this.start;
        exprList.push(this.parseParenItem(this.parseRestBinding()));
        if (this.type === types.comma) { this.raise(this.start, "Comma is not permitted after the rest element"); }
        break
      } else {
        exprList.push(this.parseMaybeAssign(false, refDestructuringErrors, this.parseParenItem));
      }
    }
    var innerEndPos = this.start, innerEndLoc = this.startLoc;
    this.expect(types.parenR);

    if (canBeArrow && !this.canInsertSemicolon() && this.eat(types.arrow)) {
      this.checkPatternErrors(refDestructuringErrors, false);
      this.checkYieldAwaitInDefaultParams();
      this.yieldPos = oldYieldPos;
      this.awaitPos = oldAwaitPos;
      return this.parseParenArrowList(startPos, startLoc, exprList)
    }

    if (!exprList.length || lastIsComma) { this.unexpected(this.lastTokStart); }
    if (spreadStart) { this.unexpected(spreadStart); }
    this.checkExpressionErrors(refDestructuringErrors, true);
    this.yieldPos = oldYieldPos || this.yieldPos;
    this.awaitPos = oldAwaitPos || this.awaitPos;

    if (exprList.length > 1) {
      val = this.startNodeAt(innerStartPos, innerStartLoc);
      val.expressions = exprList;
      this.finishNodeAt(val, "SequenceExpression", innerEndPos, innerEndLoc);
    } else {
      val = exprList[0];
    }
  } else {
    val = this.parseParenExpression();
  }

  if (this.options.preserveParens) {
    var par = this.startNodeAt(startPos, startLoc);
    par.expression = val;
    return this.finishNode(par, "ParenthesizedExpression")
  } else {
    return val
  }
};

pp$3.parseParenItem = function(item) {
  return item
};

pp$3.parseParenArrowList = function(startPos, startLoc, exprList) {
  return this.parseArrowExpression(this.startNodeAt(startPos, startLoc), exprList)
};

// New's precedence is slightly tricky. It must allow its argument to
// be a `[]` or dot subscript expression, but not a call — at least,
// not without wrapping it in parentheses. Thus, it uses the noCalls
// argument to parseSubscripts to prevent it from consuming the
// argument list.

var empty$1 = [];

pp$3.parseNew = function() {
  var node = this.startNode();
  var meta = this.parseIdent(true);
  if (this.options.ecmaVersion >= 6 && this.eat(types.dot)) {
    node.meta = meta;
    var containsEsc = this.containsEsc;
    node.property = this.parseIdent(true);
    if (node.property.name !== "target" || containsEsc)
      { this.raiseRecoverable(node.property.start, "The only valid meta property for new is new.target"); }
    if (!this.inNonArrowFunction())
      { this.raiseRecoverable(node.start, "new.target can only be used in functions"); }
    return this.finishNode(node, "MetaProperty")
  }
  var startPos = this.start, startLoc = this.startLoc, isImport = this.type === types._import;
  node.callee = this.parseSubscripts(this.parseExprAtom(), startPos, startLoc, true);
  if (isImport && node.callee.type === "ImportExpression") {
    this.raise(startPos, "Cannot use new with import()");
  }
  if (this.eat(types.parenL)) { node.arguments = this.parseExprList(types.parenR, this.options.ecmaVersion >= 8, false); }
  else { node.arguments = empty$1; }
  return this.finishNode(node, "NewExpression")
};

// Parse template expression.

pp$3.parseTemplateElement = function(ref) {
  var isTagged = ref.isTagged;

  var elem = this.startNode();
  if (this.type === types.invalidTemplate) {
    if (!isTagged) {
      this.raiseRecoverable(this.start, "Bad escape sequence in untagged template literal");
    }
    elem.value = {
      raw: this.value,
      cooked: null
    };
  } else {
    elem.value = {
      raw: this.input.slice(this.start, this.end).replace(/\r\n?/g, "\n"),
      cooked: this.value
    };
  }
  this.next();
  elem.tail = this.type === types.backQuote;
  return this.finishNode(elem, "TemplateElement")
};

pp$3.parseTemplate = function(ref) {
  if ( ref === void 0 ) ref = {};
  var isTagged = ref.isTagged; if ( isTagged === void 0 ) isTagged = false;

  var node = this.startNode();
  this.next();
  node.expressions = [];
  var curElt = this.parseTemplateElement({isTagged: isTagged});
  node.quasis = [curElt];
  while (!curElt.tail) {
    if (this.type === types.eof) { this.raise(this.pos, "Unterminated template literal"); }
    this.expect(types.dollarBraceL);
    node.expressions.push(this.parseExpression());
    this.expect(types.braceR);
    node.quasis.push(curElt = this.parseTemplateElement({isTagged: isTagged}));
  }
  this.next();
  return this.finishNode(node, "TemplateLiteral")
};

pp$3.isAsyncProp = function(prop) {
  return !prop.computed && prop.key.type === "Identifier" && prop.key.name === "async" &&
    (this.type === types.name || this.type === types.num || this.type === types.string || this.type === types.bracketL || this.type.keyword || (this.options.ecmaVersion >= 9 && this.type === types.star)) &&
    !lineBreak.test(this.input.slice(this.lastTokEnd, this.start))
};

// Parse an object literal or binding pattern.

pp$3.parseObj = function(isPattern, refDestructuringErrors) {
  var node = this.startNode(), first = true, propHash = {};
  node.properties = [];
  this.next();
  while (!this.eat(types.braceR)) {
    if (!first) {
      this.expect(types.comma);
      if (this.options.ecmaVersion >= 5 && this.afterTrailingComma(types.braceR)) { break }
    } else { first = false; }

    var prop = this.parseProperty(isPattern, refDestructuringErrors);
    if (!isPattern) { this.checkPropClash(prop, propHash, refDestructuringErrors); }
    node.properties.push(prop);
  }
  return this.finishNode(node, isPattern ? "ObjectPattern" : "ObjectExpression")
};

pp$3.parseProperty = function(isPattern, refDestructuringErrors) {
  var prop = this.startNode(), isGenerator, isAsync, startPos, startLoc;
  if (this.options.ecmaVersion >= 9 && this.eat(types.ellipsis)) {
    if (isPattern) {
      prop.argument = this.parseIdent(false);
      if (this.type === types.comma) {
        this.raise(this.start, "Comma is not permitted after the rest element");
      }
      return this.finishNode(prop, "RestElement")
    }
    // To disallow parenthesized identifier via `this.toAssignable()`.
    if (this.type === types.parenL && refDestructuringErrors) {
      if (refDestructuringErrors.parenthesizedAssign < 0) {
        refDestructuringErrors.parenthesizedAssign = this.start;
      }
      if (refDestructuringErrors.parenthesizedBind < 0) {
        refDestructuringErrors.parenthesizedBind = this.start;
      }
    }
    // Parse argument.
    prop.argument = this.parseMaybeAssign(false, refDestructuringErrors);
    // To disallow trailing comma via `this.toAssignable()`.
    if (this.type === types.comma && refDestructuringErrors && refDestructuringErrors.trailingComma < 0) {
      refDestructuringErrors.trailingComma = this.start;
    }
    // Finish
    return this.finishNode(prop, "SpreadElement")
  }
  if (this.options.ecmaVersion >= 6) {
    prop.method = false;
    prop.shorthand = false;
    if (isPattern || refDestructuringErrors) {
      startPos = this.start;
      startLoc = this.startLoc;
    }
    if (!isPattern)
      { isGenerator = this.eat(types.star); }
  }
  var containsEsc = this.containsEsc;
  this.parsePropertyName(prop);
  if (!isPattern && !containsEsc && this.options.ecmaVersion >= 8 && !isGenerator && this.isAsyncProp(prop)) {
    isAsync = true;
    isGenerator = this.options.ecmaVersion >= 9 && this.eat(types.star);
    this.parsePropertyName(prop, refDestructuringErrors);
  } else {
    isAsync = false;
  }
  this.parsePropertyValue(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc);
  return this.finishNode(prop, "Property")
};

pp$3.parsePropertyValue = function(prop, isPattern, isGenerator, isAsync, startPos, startLoc, refDestructuringErrors, containsEsc) {
  if ((isGenerator || isAsync) && this.type === types.colon)
    { this.unexpected(); }

  if (this.eat(types.colon)) {
    prop.value = isPattern ? this.parseMaybeDefault(this.start, this.startLoc) : this.parseMaybeAssign(false, refDestructuringErrors);
    prop.kind = "init";
  } else if (this.options.ecmaVersion >= 6 && this.type === types.parenL) {
    if (isPattern) { this.unexpected(); }
    prop.kind = "init";
    prop.method = true;
    prop.value = this.parseMethod(isGenerator, isAsync);
  } else if (!isPattern && !containsEsc &&
             this.options.ecmaVersion >= 5 && !prop.computed && prop.key.type === "Identifier" &&
             (prop.key.name === "get" || prop.key.name === "set") &&
             (this.type !== types.comma && this.type !== types.braceR)) {
    if (isGenerator || isAsync) { this.unexpected(); }
    prop.kind = prop.key.name;
    this.parsePropertyName(prop);
    prop.value = this.parseMethod(false);
    var paramCount = prop.kind === "get" ? 0 : 1;
    if (prop.value.params.length !== paramCount) {
      var start = prop.value.start;
      if (prop.kind === "get")
        { this.raiseRecoverable(start, "getter should have no params"); }
      else
        { this.raiseRecoverable(start, "setter should have exactly one param"); }
    } else {
      if (prop.kind === "set" && prop.value.params[0].type === "RestElement")
        { this.raiseRecoverable(prop.value.params[0].start, "Setter cannot use rest params"); }
    }
  } else if (this.options.ecmaVersion >= 6 && !prop.computed && prop.key.type === "Identifier") {
    if (isGenerator || isAsync) { this.unexpected(); }
    this.checkUnreserved(prop.key);
    if (prop.key.name === "await" && !this.awaitIdentPos)
      { this.awaitIdentPos = startPos; }
    prop.kind = "init";
    if (isPattern) {
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else if (this.type === types.eq && refDestructuringErrors) {
      if (refDestructuringErrors.shorthandAssign < 0)
        { refDestructuringErrors.shorthandAssign = this.start; }
      prop.value = this.parseMaybeDefault(startPos, startLoc, prop.key);
    } else {
      prop.value = prop.key;
    }
    prop.shorthand = true;
  } else { this.unexpected(); }
};

pp$3.parsePropertyName = function(prop) {
  if (this.options.ecmaVersion >= 6) {
    if (this.eat(types.bracketL)) {
      prop.computed = true;
      prop.key = this.parseMaybeAssign();
      this.expect(types.bracketR);
      return prop.key
    } else {
      prop.computed = false;
    }
  }
  return prop.key = this.type === types.num || this.type === types.string ? this.parseExprAtom() : this.parseIdent(this.options.allowReserved !== "never")
};

// Initialize empty function node.

pp$3.initFunction = function(node) {
  node.id = null;
  if (this.options.ecmaVersion >= 6) { node.generator = node.expression = false; }
  if (this.options.ecmaVersion >= 8) { node.async = false; }
};

// Parse object or class method.

pp$3.parseMethod = function(isGenerator, isAsync, allowDirectSuper) {
  var node = this.startNode(), oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

  this.initFunction(node);
  if (this.options.ecmaVersion >= 6)
    { node.generator = isGenerator; }
  if (this.options.ecmaVersion >= 8)
    { node.async = !!isAsync; }

  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;
  this.enterScope(functionFlags(isAsync, node.generator) | SCOPE_SUPER | (allowDirectSuper ? SCOPE_DIRECT_SUPER : 0));

  this.expect(types.parenL);
  node.params = this.parseBindingList(types.parenR, false, this.options.ecmaVersion >= 8);
  this.checkYieldAwaitInDefaultParams();
  this.parseFunctionBody(node, false, true);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "FunctionExpression")
};

// Parse arrow function expression with given parameters.

pp$3.parseArrowExpression = function(node, params, isAsync) {
  var oldYieldPos = this.yieldPos, oldAwaitPos = this.awaitPos, oldAwaitIdentPos = this.awaitIdentPos;

  this.enterScope(functionFlags(isAsync, false) | SCOPE_ARROW);
  this.initFunction(node);
  if (this.options.ecmaVersion >= 8) { node.async = !!isAsync; }

  this.yieldPos = 0;
  this.awaitPos = 0;
  this.awaitIdentPos = 0;

  node.params = this.toAssignableList(params, true);
  this.parseFunctionBody(node, true, false);

  this.yieldPos = oldYieldPos;
  this.awaitPos = oldAwaitPos;
  this.awaitIdentPos = oldAwaitIdentPos;
  return this.finishNode(node, "ArrowFunctionExpression")
};

// Parse function body and check parameters.

pp$3.parseFunctionBody = function(node, isArrowFunction, isMethod) {
  var isExpression = isArrowFunction && this.type !== types.braceL;
  var oldStrict = this.strict, useStrict = false;

  if (isExpression) {
    node.body = this.parseMaybeAssign();
    node.expression = true;
    this.checkParams(node, false);
  } else {
    var nonSimple = this.options.ecmaVersion >= 7 && !this.isSimpleParamList(node.params);
    if (!oldStrict || nonSimple) {
      useStrict = this.strictDirective(this.end);
      // If this is a strict mode function, verify that argument names
      // are not repeated, and it does not try to bind the words `eval`
      // or `arguments`.
      if (useStrict && nonSimple)
        { this.raiseRecoverable(node.start, "Illegal 'use strict' directive in function with non-simple parameter list"); }
    }
    // Start a new scope with regard to labels and the `inFunction`
    // flag (restore them to their old value afterwards).
    var oldLabels = this.labels;
    this.labels = [];
    if (useStrict) { this.strict = true; }

    // Add the params to varDeclaredNames to ensure that an error is thrown
    // if a let/const declaration in the function clashes with one of the params.
    this.checkParams(node, !oldStrict && !useStrict && !isArrowFunction && !isMethod && this.isSimpleParamList(node.params));
    node.body = this.parseBlock(false);
    node.expression = false;
    this.adaptDirectivePrologue(node.body.body);
    this.labels = oldLabels;
  }
  this.exitScope();

  // Ensure the function name isn't a forbidden identifier in strict mode, e.g. 'eval'
  if (this.strict && node.id) { this.checkLVal(node.id, BIND_OUTSIDE); }
  this.strict = oldStrict;
};

pp$3.isSimpleParamList = function(params) {
  for (var i = 0, list = params; i < list.length; i += 1)
    {
    var param = list[i];

    if (param.type !== "Identifier") { return false
  } }
  return true
};

// Checks function params for various disallowed patterns such as using "eval"
// or "arguments" and duplicate parameters.

pp$3.checkParams = function(node, allowDuplicates) {
  var nameHash = {};
  for (var i = 0, list = node.params; i < list.length; i += 1)
    {
    var param = list[i];

    this.checkLVal(param, BIND_VAR, allowDuplicates ? null : nameHash);
  }
};

// Parses a comma-separated list of expressions, and returns them as
// an array. `close` is the token type that ends the list, and
// `allowEmpty` can be turned on to allow subsequent commas with
// nothing in between them to be parsed as `null` (which is needed
// for array literals).

pp$3.parseExprList = function(close, allowTrailingComma, allowEmpty, refDestructuringErrors) {
  var elts = [], first = true;
  while (!this.eat(close)) {
    if (!first) {
      this.expect(types.comma);
      if (allowTrailingComma && this.afterTrailingComma(close)) { break }
    } else { first = false; }

    var elt = (void 0);
    if (allowEmpty && this.type === types.comma)
      { elt = null; }
    else if (this.type === types.ellipsis) {
      elt = this.parseSpread(refDestructuringErrors);
      if (refDestructuringErrors && this.type === types.comma && refDestructuringErrors.trailingComma < 0)
        { refDestructuringErrors.trailingComma = this.start; }
    } else {
      elt = this.parseMaybeAssign(false, refDestructuringErrors);
    }
    elts.push(elt);
  }
  return elts
};

pp$3.checkUnreserved = function(ref) {
  var start = ref.start;
  var end = ref.end;
  var name = ref.name;

  if (this.inGenerator && name === "yield")
    { this.raiseRecoverable(start, "Cannot use 'yield' as identifier inside a generator"); }
  if (this.inAsync && name === "await")
    { this.raiseRecoverable(start, "Cannot use 'await' as identifier inside an async function"); }
  if (this.keywords.test(name))
    { this.raise(start, ("Unexpected keyword '" + name + "'")); }
  if (this.options.ecmaVersion < 6 &&
    this.input.slice(start, end).indexOf("\\") !== -1) { return }
  var re = this.strict ? this.reservedWordsStrict : this.reservedWords;
  if (re.test(name)) {
    if (!this.inAsync && name === "await")
      { this.raiseRecoverable(start, "Cannot use keyword 'await' outside an async function"); }
    this.raiseRecoverable(start, ("The keyword '" + name + "' is reserved"));
  }
};

// Parse the next token as an identifier. If `liberal` is true (used
// when parsing properties), it will also convert keywords into
// identifiers.

pp$3.parseIdent = function(liberal, isBinding) {
  var node = this.startNode();
  if (this.type === types.name) {
    node.name = this.value;
  } else if (this.type.keyword) {
    node.name = this.type.keyword;

    // To fix https://github.com/acornjs/acorn/issues/575
    // `class` and `function` keywords push new context into this.context.
    // But there is no chance to pop the context if the keyword is consumed as an identifier such as a property name.
    // If the previous token is a dot, this does not apply because the context-managing code already ignored the keyword
    if ((node.name === "class" || node.name === "function") &&
        (this.lastTokEnd !== this.lastTokStart + 1 || this.input.charCodeAt(this.lastTokStart) !== 46)) {
      this.context.pop();
    }
  } else {
    this.unexpected();
  }
  this.next();
  this.finishNode(node, "Identifier");
  if (!liberal) {
    this.checkUnreserved(node);
    if (node.name === "await" && !this.awaitIdentPos)
      { this.awaitIdentPos = node.start; }
  }
  return node
};

// Parses yield expression inside generator.

pp$3.parseYield = function(noIn) {
  if (!this.yieldPos) { this.yieldPos = this.start; }

  var node = this.startNode();
  this.next();
  if (this.type === types.semi || this.canInsertSemicolon() || (this.type !== types.star && !this.type.startsExpr)) {
    node.delegate = false;
    node.argument = null;
  } else {
    node.delegate = this.eat(types.star);
    node.argument = this.parseMaybeAssign(noIn);
  }
  return this.finishNode(node, "YieldExpression")
};

pp$3.parseAwait = function() {
  if (!this.awaitPos) { this.awaitPos = this.start; }

  var node = this.startNode();
  this.next();
  node.argument = this.parseMaybeUnary(null, true);
  return this.finishNode(node, "AwaitExpression")
};

var pp$4 = Parser.prototype;

// This function is used to raise exceptions on parse errors. It
// takes an offset integer (into the current `input`) to indicate
// the location of the error, attaches the position to the end
// of the error message, and then raises a `SyntaxError` with that
// message.

pp$4.raise = function(pos, message) {
  var loc = getLineInfo(this.input, pos);
  message += " (" + loc.line + ":" + loc.column + ")";
  var err = new SyntaxError(message);
  err.pos = pos; err.loc = loc; err.raisedAt = this.pos;
  throw err
};

pp$4.raiseRecoverable = pp$4.raise;

pp$4.curPosition = function() {
  if (this.options.locations) {
    return new Position(this.curLine, this.pos - this.lineStart)
  }
};

var pp$5 = Parser.prototype;

var Scope = function Scope(flags) {
  this.flags = flags;
  // A list of var-declared names in the current lexical scope
  this.var = [];
  // A list of lexically-declared names in the current lexical scope
  this.lexical = [];
  // A list of lexically-declared FunctionDeclaration names in the current lexical scope
  this.functions = [];
};

// The functions in this module keep track of declared variables in the current scope in order to detect duplicate variable names.

pp$5.enterScope = function(flags) {
  this.scopeStack.push(new Scope(flags));
};

pp$5.exitScope = function() {
  this.scopeStack.pop();
};

// The spec says:
// > At the top level of a function, or script, function declarations are
// > treated like var declarations rather than like lexical declarations.
pp$5.treatFunctionsAsVarInScope = function(scope) {
  return (scope.flags & SCOPE_FUNCTION) || !this.inModule && (scope.flags & SCOPE_TOP)
};

pp$5.declareName = function(name, bindingType, pos) {
  var redeclared = false;
  if (bindingType === BIND_LEXICAL) {
    var scope = this.currentScope();
    redeclared = scope.lexical.indexOf(name) > -1 || scope.functions.indexOf(name) > -1 || scope.var.indexOf(name) > -1;
    scope.lexical.push(name);
    if (this.inModule && (scope.flags & SCOPE_TOP))
      { delete this.undefinedExports[name]; }
  } else if (bindingType === BIND_SIMPLE_CATCH) {
    var scope$1 = this.currentScope();
    scope$1.lexical.push(name);
  } else if (bindingType === BIND_FUNCTION) {
    var scope$2 = this.currentScope();
    if (this.treatFunctionsAsVar)
      { redeclared = scope$2.lexical.indexOf(name) > -1; }
    else
      { redeclared = scope$2.lexical.indexOf(name) > -1 || scope$2.var.indexOf(name) > -1; }
    scope$2.functions.push(name);
  } else {
    for (var i = this.scopeStack.length - 1; i >= 0; --i) {
      var scope$3 = this.scopeStack[i];
      if (scope$3.lexical.indexOf(name) > -1 && !((scope$3.flags & SCOPE_SIMPLE_CATCH) && scope$3.lexical[0] === name) ||
          !this.treatFunctionsAsVarInScope(scope$3) && scope$3.functions.indexOf(name) > -1) {
        redeclared = true;
        break
      }
      scope$3.var.push(name);
      if (this.inModule && (scope$3.flags & SCOPE_TOP))
        { delete this.undefinedExports[name]; }
      if (scope$3.flags & SCOPE_VAR) { break }
    }
  }
  if (redeclared) { this.raiseRecoverable(pos, ("Identifier '" + name + "' has already been declared")); }
};

pp$5.checkLocalExport = function(id) {
  // scope.functions must be empty as Module code is always strict.
  if (this.scopeStack[0].lexical.indexOf(id.name) === -1 &&
      this.scopeStack[0].var.indexOf(id.name) === -1) {
    this.undefinedExports[id.name] = id;
  }
};

pp$5.currentScope = function() {
  return this.scopeStack[this.scopeStack.length - 1]
};

pp$5.currentVarScope = function() {
  for (var i = this.scopeStack.length - 1;; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR) { return scope }
  }
};

// Could be useful for `this`, `new.target`, `super()`, `super.property`, and `super[property]`.
pp$5.currentThisScope = function() {
  for (var i = this.scopeStack.length - 1;; i--) {
    var scope = this.scopeStack[i];
    if (scope.flags & SCOPE_VAR && !(scope.flags & SCOPE_ARROW)) { return scope }
  }
};

var Node = function Node(parser, pos, loc) {
  this.type = "";
  this.start = pos;
  this.end = 0;
  if (parser.options.locations)
    { this.loc = new SourceLocation(parser, loc); }
  if (parser.options.directSourceFile)
    { this.sourceFile = parser.options.directSourceFile; }
  if (parser.options.ranges)
    { this.range = [pos, 0]; }
};

// Start an AST node, attaching a start offset.

var pp$6 = Parser.prototype;

pp$6.startNode = function() {
  return new Node(this, this.start, this.startLoc)
};

pp$6.startNodeAt = function(pos, loc) {
  return new Node(this, pos, loc)
};

// Finish an AST node, adding `type` and `end` properties.

function finishNodeAt(node, type, pos, loc) {
  node.type = type;
  node.end = pos;
  if (this.options.locations)
    { node.loc.end = loc; }
  if (this.options.ranges)
    { node.range[1] = pos; }
  return node
}

pp$6.finishNode = function(node, type) {
  return finishNodeAt.call(this, node, type, this.lastTokEnd, this.lastTokEndLoc)
};

// Finish node at given position

pp$6.finishNodeAt = function(node, type, pos, loc) {
  return finishNodeAt.call(this, node, type, pos, loc)
};

// The algorithm used to determine whether a regexp can appear at a

var TokContext = function TokContext(token, isExpr, preserveSpace, override, generator) {
  this.token = token;
  this.isExpr = !!isExpr;
  this.preserveSpace = !!preserveSpace;
  this.override = override;
  this.generator = !!generator;
};

var types$1 = {
  b_stat: new TokContext("{", false),
  b_expr: new TokContext("{", true),
  b_tmpl: new TokContext("${", false),
  p_stat: new TokContext("(", false),
  p_expr: new TokContext("(", true),
  q_tmpl: new TokContext("`", true, true, function (p) { return p.tryReadTemplateToken(); }),
  f_stat: new TokContext("function", false),
  f_expr: new TokContext("function", true),
  f_expr_gen: new TokContext("function", true, false, null, true),
  f_gen: new TokContext("function", false, false, null, true)
};

var pp$7 = Parser.prototype;

pp$7.initialContext = function() {
  return [types$1.b_stat]
};

pp$7.braceIsBlock = function(prevType) {
  var parent = this.curContext();
  if (parent === types$1.f_expr || parent === types$1.f_stat)
    { return true }
  if (prevType === types.colon && (parent === types$1.b_stat || parent === types$1.b_expr))
    { return !parent.isExpr }

  // The check for `tt.name && exprAllowed` detects whether we are
  // after a `yield` or `of` construct. See the `updateContext` for
  // `tt.name`.
  if (prevType === types._return || prevType === types.name && this.exprAllowed)
    { return lineBreak.test(this.input.slice(this.lastTokEnd, this.start)) }
  if (prevType === types._else || prevType === types.semi || prevType === types.eof || prevType === types.parenR || prevType === types.arrow)
    { return true }
  if (prevType === types.braceL)
    { return parent === types$1.b_stat }
  if (prevType === types._var || prevType === types._const || prevType === types.name)
    { return false }
  return !this.exprAllowed
};

pp$7.inGeneratorContext = function() {
  for (var i = this.context.length - 1; i >= 1; i--) {
    var context = this.context[i];
    if (context.token === "function")
      { return context.generator }
  }
  return false
};

pp$7.updateContext = function(prevType) {
  var update, type = this.type;
  if (type.keyword && prevType === types.dot)
    { this.exprAllowed = false; }
  else if (update = type.updateContext)
    { update.call(this, prevType); }
  else
    { this.exprAllowed = type.beforeExpr; }
};

// Token-specific context update code

types.parenR.updateContext = types.braceR.updateContext = function() {
  if (this.context.length === 1) {
    this.exprAllowed = true;
    return
  }
  var out = this.context.pop();
  if (out === types$1.b_stat && this.curContext().token === "function") {
    out = this.context.pop();
  }
  this.exprAllowed = !out.isExpr;
};

types.braceL.updateContext = function(prevType) {
  this.context.push(this.braceIsBlock(prevType) ? types$1.b_stat : types$1.b_expr);
  this.exprAllowed = true;
};

types.dollarBraceL.updateContext = function() {
  this.context.push(types$1.b_tmpl);
  this.exprAllowed = true;
};

types.parenL.updateContext = function(prevType) {
  var statementParens = prevType === types._if || prevType === types._for || prevType === types._with || prevType === types._while;
  this.context.push(statementParens ? types$1.p_stat : types$1.p_expr);
  this.exprAllowed = true;
};

types.incDec.updateContext = function() {
  // tokExprAllowed stays unchanged
};

types._function.updateContext = types._class.updateContext = function(prevType) {
  if (prevType.beforeExpr && prevType !== types.semi && prevType !== types._else &&
      !(prevType === types._return && lineBreak.test(this.input.slice(this.lastTokEnd, this.start))) &&
      !((prevType === types.colon || prevType === types.braceL) && this.curContext() === types$1.b_stat))
    { this.context.push(types$1.f_expr); }
  else
    { this.context.push(types$1.f_stat); }
  this.exprAllowed = false;
};

types.backQuote.updateContext = function() {
  if (this.curContext() === types$1.q_tmpl)
    { this.context.pop(); }
  else
    { this.context.push(types$1.q_tmpl); }
  this.exprAllowed = false;
};

types.star.updateContext = function(prevType) {
  if (prevType === types._function) {
    var index = this.context.length - 1;
    if (this.context[index] === types$1.f_expr)
      { this.context[index] = types$1.f_expr_gen; }
    else
      { this.context[index] = types$1.f_gen; }
  }
  this.exprAllowed = true;
};

types.name.updateContext = function(prevType) {
  var allowed = false;
  if (this.options.ecmaVersion >= 6 && prevType !== types.dot) {
    if (this.value === "of" && !this.exprAllowed ||
        this.value === "yield" && this.inGeneratorContext())
      { allowed = true; }
  }
  this.exprAllowed = allowed;
};

// This file contains Unicode properties extracted from the ECMAScript
// specification. The lists are extracted like so:
// $$('#table-binary-unicode-properties > figure > table > tbody > tr > td:nth-child(1) code').map(el => el.innerText)

// #table-binary-unicode-properties
var ecma9BinaryProperties = "ASCII ASCII_Hex_Digit AHex Alphabetic Alpha Any Assigned Bidi_Control Bidi_C Bidi_Mirrored Bidi_M Case_Ignorable CI Cased Changes_When_Casefolded CWCF Changes_When_Casemapped CWCM Changes_When_Lowercased CWL Changes_When_NFKC_Casefolded CWKCF Changes_When_Titlecased CWT Changes_When_Uppercased CWU Dash Default_Ignorable_Code_Point DI Deprecated Dep Diacritic Dia Emoji Emoji_Component Emoji_Modifier Emoji_Modifier_Base Emoji_Presentation Extender Ext Grapheme_Base Gr_Base Grapheme_Extend Gr_Ext Hex_Digit Hex IDS_Binary_Operator IDSB IDS_Trinary_Operator IDST ID_Continue IDC ID_Start IDS Ideographic Ideo Join_Control Join_C Logical_Order_Exception LOE Lowercase Lower Math Noncharacter_Code_Point NChar Pattern_Syntax Pat_Syn Pattern_White_Space Pat_WS Quotation_Mark QMark Radical Regional_Indicator RI Sentence_Terminal STerm Soft_Dotted SD Terminal_Punctuation Term Unified_Ideograph UIdeo Uppercase Upper Variation_Selector VS White_Space space XID_Continue XIDC XID_Start XIDS";
var ecma10BinaryProperties = ecma9BinaryProperties + " Extended_Pictographic";
var ecma11BinaryProperties = ecma10BinaryProperties;
var unicodeBinaryProperties = {
  9: ecma9BinaryProperties,
  10: ecma10BinaryProperties,
  11: ecma11BinaryProperties
};

// #table-unicode-general-category-values
var unicodeGeneralCategoryValues = "Cased_Letter LC Close_Punctuation Pe Connector_Punctuation Pc Control Cc cntrl Currency_Symbol Sc Dash_Punctuation Pd Decimal_Number Nd digit Enclosing_Mark Me Final_Punctuation Pf Format Cf Initial_Punctuation Pi Letter L Letter_Number Nl Line_Separator Zl Lowercase_Letter Ll Mark M Combining_Mark Math_Symbol Sm Modifier_Letter Lm Modifier_Symbol Sk Nonspacing_Mark Mn Number N Open_Punctuation Ps Other C Other_Letter Lo Other_Number No Other_Punctuation Po Other_Symbol So Paragraph_Separator Zp Private_Use Co Punctuation P punct Separator Z Space_Separator Zs Spacing_Mark Mc Surrogate Cs Symbol S Titlecase_Letter Lt Unassigned Cn Uppercase_Letter Lu";

// #table-unicode-script-values
var ecma9ScriptValues = "Adlam Adlm Ahom Ahom Anatolian_Hieroglyphs Hluw Arabic Arab Armenian Armn Avestan Avst Balinese Bali Bamum Bamu Bassa_Vah Bass Batak Batk Bengali Beng Bhaiksuki Bhks Bopomofo Bopo Brahmi Brah Braille Brai Buginese Bugi Buhid Buhd Canadian_Aboriginal Cans Carian Cari Caucasian_Albanian Aghb Chakma Cakm Cham Cham Cherokee Cher Common Zyyy Coptic Copt Qaac Cuneiform Xsux Cypriot Cprt Cyrillic Cyrl Deseret Dsrt Devanagari Deva Duployan Dupl Egyptian_Hieroglyphs Egyp Elbasan Elba Ethiopic Ethi Georgian Geor Glagolitic Glag Gothic Goth Grantha Gran Greek Grek Gujarati Gujr Gurmukhi Guru Han Hani Hangul Hang Hanunoo Hano Hatran Hatr Hebrew Hebr Hiragana Hira Imperial_Aramaic Armi Inherited Zinh Qaai Inscriptional_Pahlavi Phli Inscriptional_Parthian Prti Javanese Java Kaithi Kthi Kannada Knda Katakana Kana Kayah_Li Kali Kharoshthi Khar Khmer Khmr Khojki Khoj Khudawadi Sind Lao Laoo Latin Latn Lepcha Lepc Limbu Limb Linear_A Lina Linear_B Linb Lisu Lisu Lycian Lyci Lydian Lydi Mahajani Mahj Malayalam Mlym Mandaic Mand Manichaean Mani Marchen Marc Masaram_Gondi Gonm Meetei_Mayek Mtei Mende_Kikakui Mend Meroitic_Cursive Merc Meroitic_Hieroglyphs Mero Miao Plrd Modi Modi Mongolian Mong Mro Mroo Multani Mult Myanmar Mymr Nabataean Nbat New_Tai_Lue Talu Newa Newa Nko Nkoo Nushu Nshu Ogham Ogam Ol_Chiki Olck Old_Hungarian Hung Old_Italic Ital Old_North_Arabian Narb Old_Permic Perm Old_Persian Xpeo Old_South_Arabian Sarb Old_Turkic Orkh Oriya Orya Osage Osge Osmanya Osma Pahawh_Hmong Hmng Palmyrene Palm Pau_Cin_Hau Pauc Phags_Pa Phag Phoenician Phnx Psalter_Pahlavi Phlp Rejang Rjng Runic Runr Samaritan Samr Saurashtra Saur Sharada Shrd Shavian Shaw Siddham Sidd SignWriting Sgnw Sinhala Sinh Sora_Sompeng Sora Soyombo Soyo Sundanese Sund Syloti_Nagri Sylo Syriac Syrc Tagalog Tglg Tagbanwa Tagb Tai_Le Tale Tai_Tham Lana Tai_Viet Tavt Takri Takr Tamil Taml Tangut Tang Telugu Telu Thaana Thaa Thai Thai Tibetan Tibt Tifinagh Tfng Tirhuta Tirh Ugaritic Ugar Vai Vaii Warang_Citi Wara Yi Yiii Zanabazar_Square Zanb";
var ecma10ScriptValues = ecma9ScriptValues + " Dogra Dogr Gunjala_Gondi Gong Hanifi_Rohingya Rohg Makasar Maka Medefaidrin Medf Old_Sogdian Sogo Sogdian Sogd";
var ecma11ScriptValues = ecma10ScriptValues + " Elymaic Elym Nandinagari Nand Nyiakeng_Puachue_Hmong Hmnp Wancho Wcho";
var unicodeScriptValues = {
  9: ecma9ScriptValues,
  10: ecma10ScriptValues,
  11: ecma11ScriptValues
};

var data = {};
function buildUnicodeData(ecmaVersion) {
  var d = data[ecmaVersion] = {
    binary: wordsRegexp(unicodeBinaryProperties[ecmaVersion] + " " + unicodeGeneralCategoryValues),
    nonBinary: {
      General_Category: wordsRegexp(unicodeGeneralCategoryValues),
      Script: wordsRegexp(unicodeScriptValues[ecmaVersion])
    }
  };
  d.nonBinary.Script_Extensions = d.nonBinary.Script;

  d.nonBinary.gc = d.nonBinary.General_Category;
  d.nonBinary.sc = d.nonBinary.Script;
  d.nonBinary.scx = d.nonBinary.Script_Extensions;
}
buildUnicodeData(9);
buildUnicodeData(10);
buildUnicodeData(11);

var pp$8 = Parser.prototype;

var RegExpValidationState = function RegExpValidationState(parser) {
  this.parser = parser;
  this.validFlags = "gim" + (parser.options.ecmaVersion >= 6 ? "uy" : "") + (parser.options.ecmaVersion >= 9 ? "s" : "");
  this.unicodeProperties = data[parser.options.ecmaVersion >= 11 ? 11 : parser.options.ecmaVersion];
  this.source = "";
  this.flags = "";
  this.start = 0;
  this.switchU = false;
  this.switchN = false;
  this.pos = 0;
  this.lastIntValue = 0;
  this.lastStringValue = "";
  this.lastAssertionIsQuantifiable = false;
  this.numCapturingParens = 0;
  this.maxBackReference = 0;
  this.groupNames = [];
  this.backReferenceNames = [];
};

RegExpValidationState.prototype.reset = function reset (start, pattern, flags) {
  var unicode = flags.indexOf("u") !== -1;
  this.start = start | 0;
  this.source = pattern + "";
  this.flags = flags;
  this.switchU = unicode && this.parser.options.ecmaVersion >= 6;
  this.switchN = unicode && this.parser.options.ecmaVersion >= 9;
};

RegExpValidationState.prototype.raise = function raise (message) {
  this.parser.raiseRecoverable(this.start, ("Invalid regular expression: /" + (this.source) + "/: " + message));
};

// If u flag is given, this returns the code point at the index (it combines a surrogate pair).
// Otherwise, this returns the code unit of the index (can be a part of a surrogate pair).
RegExpValidationState.prototype.at = function at (i) {
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return -1
  }
  var c = s.charCodeAt(i);
  if (!this.switchU || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
    return c
  }
  return (c << 10) + s.charCodeAt(i + 1) - 0x35FDC00
};

RegExpValidationState.prototype.nextIndex = function nextIndex (i) {
  var s = this.source;
  var l = s.length;
  if (i >= l) {
    return l
  }
  var c = s.charCodeAt(i);
  if (!this.switchU || c <= 0xD7FF || c >= 0xE000 || i + 1 >= l) {
    return i + 1
  }
  return i + 2
};

RegExpValidationState.prototype.current = function current () {
  return this.at(this.pos)
};

RegExpValidationState.prototype.lookahead = function lookahead () {
  return this.at(this.nextIndex(this.pos))
};

RegExpValidationState.prototype.advance = function advance () {
  this.pos = this.nextIndex(this.pos);
};

RegExpValidationState.prototype.eat = function eat (ch) {
  if (this.current() === ch) {
    this.advance();
    return true
  }
  return false
};

function codePointToString(ch) {
  if (ch <= 0xFFFF) { return String.fromCharCode(ch) }
  ch -= 0x10000;
  return String.fromCharCode((ch >> 10) + 0xD800, (ch & 0x03FF) + 0xDC00)
}

/**
 * Validate the flags part of a given RegExpLiteral.
 *
 * @param {RegExpValidationState} state The state to validate RegExp.
 * @returns {void}
 */
pp$8.validateRegExpFlags = function(state) {
  var validFlags = state.validFlags;
  var flags = state.flags;

  for (var i = 0; i < flags.length; i++) {
    var flag = flags.charAt(i);
    if (validFlags.indexOf(flag) === -1) {
      this.raise(state.start, "Invalid regular expression flag");
    }
    if (flags.indexOf(flag, i + 1) > -1) {
      this.raise(state.start, "Duplicate regular expression flag");
    }
  }
};

/**
 * Validate the pattern part of a given RegExpLiteral.
 *
 * @param {RegExpValidationState} state The state to validate RegExp.
 * @returns {void}
 */
pp$8.validateRegExpPattern = function(state) {
  this.regexp_pattern(state);

  // The goal symbol for the parse is |Pattern[~U, ~N]|. If the result of
  // parsing contains a |GroupName|, reparse with the goal symbol
  // |Pattern[~U, +N]| and use this result instead. Throw a *SyntaxError*
  // exception if _P_ did not conform to the grammar, if any elements of _P_
  // were not matched by the parse, or if any Early Error conditions exist.
  if (!state.switchN && this.options.ecmaVersion >= 9 && state.groupNames.length > 0) {
    state.switchN = true;
    this.regexp_pattern(state);
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Pattern
pp$8.regexp_pattern = function(state) {
  state.pos = 0;
  state.lastIntValue = 0;
  state.lastStringValue = "";
  state.lastAssertionIsQuantifiable = false;
  state.numCapturingParens = 0;
  state.maxBackReference = 0;
  state.groupNames.length = 0;
  state.backReferenceNames.length = 0;

  this.regexp_disjunction(state);

  if (state.pos !== state.source.length) {
    // Make the same messages as V8.
    if (state.eat(0x29 /* ) */)) {
      state.raise("Unmatched ')'");
    }
    if (state.eat(0x5D /* [ */) || state.eat(0x7D /* } */)) {
      state.raise("Lone quantifier brackets");
    }
  }
  if (state.maxBackReference > state.numCapturingParens) {
    state.raise("Invalid escape");
  }
  for (var i = 0, list = state.backReferenceNames; i < list.length; i += 1) {
    var name = list[i];

    if (state.groupNames.indexOf(name) === -1) {
      state.raise("Invalid named capture referenced");
    }
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Disjunction
pp$8.regexp_disjunction = function(state) {
  this.regexp_alternative(state);
  while (state.eat(0x7C /* | */)) {
    this.regexp_alternative(state);
  }

  // Make the same message as V8.
  if (this.regexp_eatQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  if (state.eat(0x7B /* { */)) {
    state.raise("Lone quantifier brackets");
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Alternative
pp$8.regexp_alternative = function(state) {
  while (state.pos < state.source.length && this.regexp_eatTerm(state))
    { }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Term
pp$8.regexp_eatTerm = function(state) {
  if (this.regexp_eatAssertion(state)) {
    // Handle `QuantifiableAssertion Quantifier` alternative.
    // `state.lastAssertionIsQuantifiable` is true if the last eaten Assertion
    // is a QuantifiableAssertion.
    if (state.lastAssertionIsQuantifiable && this.regexp_eatQuantifier(state)) {
      // Make the same message as V8.
      if (state.switchU) {
        state.raise("Invalid quantifier");
      }
    }
    return true
  }

  if (state.switchU ? this.regexp_eatAtom(state) : this.regexp_eatExtendedAtom(state)) {
    this.regexp_eatQuantifier(state);
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-Assertion
pp$8.regexp_eatAssertion = function(state) {
  var start = state.pos;
  state.lastAssertionIsQuantifiable = false;

  // ^, $
  if (state.eat(0x5E /* ^ */) || state.eat(0x24 /* $ */)) {
    return true
  }

  // \b \B
  if (state.eat(0x5C /* \ */)) {
    if (state.eat(0x42 /* B */) || state.eat(0x62 /* b */)) {
      return true
    }
    state.pos = start;
  }

  // Lookahead / Lookbehind
  if (state.eat(0x28 /* ( */) && state.eat(0x3F /* ? */)) {
    var lookbehind = false;
    if (this.options.ecmaVersion >= 9) {
      lookbehind = state.eat(0x3C /* < */);
    }
    if (state.eat(0x3D /* = */) || state.eat(0x21 /* ! */)) {
      this.regexp_disjunction(state);
      if (!state.eat(0x29 /* ) */)) {
        state.raise("Unterminated group");
      }
      state.lastAssertionIsQuantifiable = !lookbehind;
      return true
    }
  }

  state.pos = start;
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Quantifier
pp$8.regexp_eatQuantifier = function(state, noError) {
  if ( noError === void 0 ) noError = false;

  if (this.regexp_eatQuantifierPrefix(state, noError)) {
    state.eat(0x3F /* ? */);
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-QuantifierPrefix
pp$8.regexp_eatQuantifierPrefix = function(state, noError) {
  return (
    state.eat(0x2A /* * */) ||
    state.eat(0x2B /* + */) ||
    state.eat(0x3F /* ? */) ||
    this.regexp_eatBracedQuantifier(state, noError)
  )
};
pp$8.regexp_eatBracedQuantifier = function(state, noError) {
  var start = state.pos;
  if (state.eat(0x7B /* { */)) {
    var min = 0, max = -1;
    if (this.regexp_eatDecimalDigits(state)) {
      min = state.lastIntValue;
      if (state.eat(0x2C /* , */) && this.regexp_eatDecimalDigits(state)) {
        max = state.lastIntValue;
      }
      if (state.eat(0x7D /* } */)) {
        // SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-term
        if (max !== -1 && max < min && !noError) {
          state.raise("numbers out of order in {} quantifier");
        }
        return true
      }
    }
    if (state.switchU && !noError) {
      state.raise("Incomplete quantifier");
    }
    state.pos = start;
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-Atom
pp$8.regexp_eatAtom = function(state) {
  return (
    this.regexp_eatPatternCharacters(state) ||
    state.eat(0x2E /* . */) ||
    this.regexp_eatReverseSolidusAtomEscape(state) ||
    this.regexp_eatCharacterClass(state) ||
    this.regexp_eatUncapturingGroup(state) ||
    this.regexp_eatCapturingGroup(state)
  )
};
pp$8.regexp_eatReverseSolidusAtomEscape = function(state) {
  var start = state.pos;
  if (state.eat(0x5C /* \ */)) {
    if (this.regexp_eatAtomEscape(state)) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatUncapturingGroup = function(state) {
  var start = state.pos;
  if (state.eat(0x28 /* ( */)) {
    if (state.eat(0x3F /* ? */) && state.eat(0x3A /* : */)) {
      this.regexp_disjunction(state);
      if (state.eat(0x29 /* ) */)) {
        return true
      }
      state.raise("Unterminated group");
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatCapturingGroup = function(state) {
  if (state.eat(0x28 /* ( */)) {
    if (this.options.ecmaVersion >= 9) {
      this.regexp_groupSpecifier(state);
    } else if (state.current() === 0x3F /* ? */) {
      state.raise("Invalid group");
    }
    this.regexp_disjunction(state);
    if (state.eat(0x29 /* ) */)) {
      state.numCapturingParens += 1;
      return true
    }
    state.raise("Unterminated group");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedAtom
pp$8.regexp_eatExtendedAtom = function(state) {
  return (
    state.eat(0x2E /* . */) ||
    this.regexp_eatReverseSolidusAtomEscape(state) ||
    this.regexp_eatCharacterClass(state) ||
    this.regexp_eatUncapturingGroup(state) ||
    this.regexp_eatCapturingGroup(state) ||
    this.regexp_eatInvalidBracedQuantifier(state) ||
    this.regexp_eatExtendedPatternCharacter(state)
  )
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-InvalidBracedQuantifier
pp$8.regexp_eatInvalidBracedQuantifier = function(state) {
  if (this.regexp_eatBracedQuantifier(state, true)) {
    state.raise("Nothing to repeat");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-SyntaxCharacter
pp$8.regexp_eatSyntaxCharacter = function(state) {
  var ch = state.current();
  if (isSyntaxCharacter(ch)) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }
  return false
};
function isSyntaxCharacter(ch) {
  return (
    ch === 0x24 /* $ */ ||
    ch >= 0x28 /* ( */ && ch <= 0x2B /* + */ ||
    ch === 0x2E /* . */ ||
    ch === 0x3F /* ? */ ||
    ch >= 0x5B /* [ */ && ch <= 0x5E /* ^ */ ||
    ch >= 0x7B /* { */ && ch <= 0x7D /* } */
  )
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-PatternCharacter
// But eat eager.
pp$8.regexp_eatPatternCharacters = function(state) {
  var start = state.pos;
  var ch = 0;
  while ((ch = state.current()) !== -1 && !isSyntaxCharacter(ch)) {
    state.advance();
  }
  return state.pos !== start
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ExtendedPatternCharacter
pp$8.regexp_eatExtendedPatternCharacter = function(state) {
  var ch = state.current();
  if (
    ch !== -1 &&
    ch !== 0x24 /* $ */ &&
    !(ch >= 0x28 /* ( */ && ch <= 0x2B /* + */) &&
    ch !== 0x2E /* . */ &&
    ch !== 0x3F /* ? */ &&
    ch !== 0x5B /* [ */ &&
    ch !== 0x5E /* ^ */ &&
    ch !== 0x7C /* | */
  ) {
    state.advance();
    return true
  }
  return false
};

// GroupSpecifier[U] ::
//   [empty]
//   `?` GroupName[?U]
pp$8.regexp_groupSpecifier = function(state) {
  if (state.eat(0x3F /* ? */)) {
    if (this.regexp_eatGroupName(state)) {
      if (state.groupNames.indexOf(state.lastStringValue) !== -1) {
        state.raise("Duplicate capture group name");
      }
      state.groupNames.push(state.lastStringValue);
      return
    }
    state.raise("Invalid group");
  }
};

// GroupName[U] ::
//   `<` RegExpIdentifierName[?U] `>`
// Note: this updates `state.lastStringValue` property with the eaten name.
pp$8.regexp_eatGroupName = function(state) {
  state.lastStringValue = "";
  if (state.eat(0x3C /* < */)) {
    if (this.regexp_eatRegExpIdentifierName(state) && state.eat(0x3E /* > */)) {
      return true
    }
    state.raise("Invalid capture group name");
  }
  return false
};

// RegExpIdentifierName[U] ::
//   RegExpIdentifierStart[?U]
//   RegExpIdentifierName[?U] RegExpIdentifierPart[?U]
// Note: this updates `state.lastStringValue` property with the eaten name.
pp$8.regexp_eatRegExpIdentifierName = function(state) {
  state.lastStringValue = "";
  if (this.regexp_eatRegExpIdentifierStart(state)) {
    state.lastStringValue += codePointToString(state.lastIntValue);
    while (this.regexp_eatRegExpIdentifierPart(state)) {
      state.lastStringValue += codePointToString(state.lastIntValue);
    }
    return true
  }
  return false
};

// RegExpIdentifierStart[U] ::
//   UnicodeIDStart
//   `$`
//   `_`
//   `\` RegExpUnicodeEscapeSequence[?U]
pp$8.regexp_eatRegExpIdentifierStart = function(state) {
  var start = state.pos;
  var ch = state.current();
  state.advance();

  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierStart(ch)) {
    state.lastIntValue = ch;
    return true
  }

  state.pos = start;
  return false
};
function isRegExpIdentifierStart(ch) {
  return isIdentifierStart(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */
}

// RegExpIdentifierPart[U] ::
//   UnicodeIDContinue
//   `$`
//   `_`
//   `\` RegExpUnicodeEscapeSequence[?U]
//   <ZWNJ>
//   <ZWJ>
pp$8.regexp_eatRegExpIdentifierPart = function(state) {
  var start = state.pos;
  var ch = state.current();
  state.advance();

  if (ch === 0x5C /* \ */ && this.regexp_eatRegExpUnicodeEscapeSequence(state)) {
    ch = state.lastIntValue;
  }
  if (isRegExpIdentifierPart(ch)) {
    state.lastIntValue = ch;
    return true
  }

  state.pos = start;
  return false
};
function isRegExpIdentifierPart(ch) {
  return isIdentifierChar(ch, true) || ch === 0x24 /* $ */ || ch === 0x5F /* _ */ || ch === 0x200C /* <ZWNJ> */ || ch === 0x200D /* <ZWJ> */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-AtomEscape
pp$8.regexp_eatAtomEscape = function(state) {
  if (
    this.regexp_eatBackReference(state) ||
    this.regexp_eatCharacterClassEscape(state) ||
    this.regexp_eatCharacterEscape(state) ||
    (state.switchN && this.regexp_eatKGroupName(state))
  ) {
    return true
  }
  if (state.switchU) {
    // Make the same message as V8.
    if (state.current() === 0x63 /* c */) {
      state.raise("Invalid unicode escape");
    }
    state.raise("Invalid escape");
  }
  return false
};
pp$8.regexp_eatBackReference = function(state) {
  var start = state.pos;
  if (this.regexp_eatDecimalEscape(state)) {
    var n = state.lastIntValue;
    if (state.switchU) {
      // For SyntaxError in https://www.ecma-international.org/ecma-262/8.0/#sec-atomescape
      if (n > state.maxBackReference) {
        state.maxBackReference = n;
      }
      return true
    }
    if (n <= state.numCapturingParens) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatKGroupName = function(state) {
  if (state.eat(0x6B /* k */)) {
    if (this.regexp_eatGroupName(state)) {
      state.backReferenceNames.push(state.lastStringValue);
      return true
    }
    state.raise("Invalid named reference");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-CharacterEscape
pp$8.regexp_eatCharacterEscape = function(state) {
  return (
    this.regexp_eatControlEscape(state) ||
    this.regexp_eatCControlLetter(state) ||
    this.regexp_eatZero(state) ||
    this.regexp_eatHexEscapeSequence(state) ||
    this.regexp_eatRegExpUnicodeEscapeSequence(state) ||
    (!state.switchU && this.regexp_eatLegacyOctalEscapeSequence(state)) ||
    this.regexp_eatIdentityEscape(state)
  )
};
pp$8.regexp_eatCControlLetter = function(state) {
  var start = state.pos;
  if (state.eat(0x63 /* c */)) {
    if (this.regexp_eatControlLetter(state)) {
      return true
    }
    state.pos = start;
  }
  return false
};
pp$8.regexp_eatZero = function(state) {
  if (state.current() === 0x30 /* 0 */ && !isDecimalDigit(state.lookahead())) {
    state.lastIntValue = 0;
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlEscape
pp$8.regexp_eatControlEscape = function(state) {
  var ch = state.current();
  if (ch === 0x74 /* t */) {
    state.lastIntValue = 0x09; /* \t */
    state.advance();
    return true
  }
  if (ch === 0x6E /* n */) {
    state.lastIntValue = 0x0A; /* \n */
    state.advance();
    return true
  }
  if (ch === 0x76 /* v */) {
    state.lastIntValue = 0x0B; /* \v */
    state.advance();
    return true
  }
  if (ch === 0x66 /* f */) {
    state.lastIntValue = 0x0C; /* \f */
    state.advance();
    return true
  }
  if (ch === 0x72 /* r */) {
    state.lastIntValue = 0x0D; /* \r */
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ControlLetter
pp$8.regexp_eatControlLetter = function(state) {
  var ch = state.current();
  if (isControlLetter(ch)) {
    state.lastIntValue = ch % 0x20;
    state.advance();
    return true
  }
  return false
};
function isControlLetter(ch) {
  return (
    (ch >= 0x41 /* A */ && ch <= 0x5A /* Z */) ||
    (ch >= 0x61 /* a */ && ch <= 0x7A /* z */)
  )
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-RegExpUnicodeEscapeSequence
pp$8.regexp_eatRegExpUnicodeEscapeSequence = function(state) {
  var start = state.pos;

  if (state.eat(0x75 /* u */)) {
    if (this.regexp_eatFixedHexDigits(state, 4)) {
      var lead = state.lastIntValue;
      if (state.switchU && lead >= 0xD800 && lead <= 0xDBFF) {
        var leadSurrogateEnd = state.pos;
        if (state.eat(0x5C /* \ */) && state.eat(0x75 /* u */) && this.regexp_eatFixedHexDigits(state, 4)) {
          var trail = state.lastIntValue;
          if (trail >= 0xDC00 && trail <= 0xDFFF) {
            state.lastIntValue = (lead - 0xD800) * 0x400 + (trail - 0xDC00) + 0x10000;
            return true
          }
        }
        state.pos = leadSurrogateEnd;
        state.lastIntValue = lead;
      }
      return true
    }
    if (
      state.switchU &&
      state.eat(0x7B /* { */) &&
      this.regexp_eatHexDigits(state) &&
      state.eat(0x7D /* } */) &&
      isValidUnicode(state.lastIntValue)
    ) {
      return true
    }
    if (state.switchU) {
      state.raise("Invalid unicode escape");
    }
    state.pos = start;
  }

  return false
};
function isValidUnicode(ch) {
  return ch >= 0 && ch <= 0x10FFFF
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-IdentityEscape
pp$8.regexp_eatIdentityEscape = function(state) {
  if (state.switchU) {
    if (this.regexp_eatSyntaxCharacter(state)) {
      return true
    }
    if (state.eat(0x2F /* / */)) {
      state.lastIntValue = 0x2F; /* / */
      return true
    }
    return false
  }

  var ch = state.current();
  if (ch !== 0x63 /* c */ && (!state.switchN || ch !== 0x6B /* k */)) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalEscape
pp$8.regexp_eatDecimalEscape = function(state) {
  state.lastIntValue = 0;
  var ch = state.current();
  if (ch >= 0x31 /* 1 */ && ch <= 0x39 /* 9 */) {
    do {
      state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
      state.advance();
    } while ((ch = state.current()) >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */)
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClassEscape
pp$8.regexp_eatCharacterClassEscape = function(state) {
  var ch = state.current();

  if (isCharacterClassEscape(ch)) {
    state.lastIntValue = -1;
    state.advance();
    return true
  }

  if (
    state.switchU &&
    this.options.ecmaVersion >= 9 &&
    (ch === 0x50 /* P */ || ch === 0x70 /* p */)
  ) {
    state.lastIntValue = -1;
    state.advance();
    if (
      state.eat(0x7B /* { */) &&
      this.regexp_eatUnicodePropertyValueExpression(state) &&
      state.eat(0x7D /* } */)
    ) {
      return true
    }
    state.raise("Invalid property name");
  }

  return false
};
function isCharacterClassEscape(ch) {
  return (
    ch === 0x64 /* d */ ||
    ch === 0x44 /* D */ ||
    ch === 0x73 /* s */ ||
    ch === 0x53 /* S */ ||
    ch === 0x77 /* w */ ||
    ch === 0x57 /* W */
  )
}

// UnicodePropertyValueExpression ::
//   UnicodePropertyName `=` UnicodePropertyValue
//   LoneUnicodePropertyNameOrValue
pp$8.regexp_eatUnicodePropertyValueExpression = function(state) {
  var start = state.pos;

  // UnicodePropertyName `=` UnicodePropertyValue
  if (this.regexp_eatUnicodePropertyName(state) && state.eat(0x3D /* = */)) {
    var name = state.lastStringValue;
    if (this.regexp_eatUnicodePropertyValue(state)) {
      var value = state.lastStringValue;
      this.regexp_validateUnicodePropertyNameAndValue(state, name, value);
      return true
    }
  }
  state.pos = start;

  // LoneUnicodePropertyNameOrValue
  if (this.regexp_eatLoneUnicodePropertyNameOrValue(state)) {
    var nameOrValue = state.lastStringValue;
    this.regexp_validateUnicodePropertyNameOrValue(state, nameOrValue);
    return true
  }
  return false
};
pp$8.regexp_validateUnicodePropertyNameAndValue = function(state, name, value) {
  if (!has(state.unicodeProperties.nonBinary, name))
    { state.raise("Invalid property name"); }
  if (!state.unicodeProperties.nonBinary[name].test(value))
    { state.raise("Invalid property value"); }
};
pp$8.regexp_validateUnicodePropertyNameOrValue = function(state, nameOrValue) {
  if (!state.unicodeProperties.binary.test(nameOrValue))
    { state.raise("Invalid property name"); }
};

// UnicodePropertyName ::
//   UnicodePropertyNameCharacters
pp$8.regexp_eatUnicodePropertyName = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyNameCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== ""
};
function isUnicodePropertyNameCharacter(ch) {
  return isControlLetter(ch) || ch === 0x5F /* _ */
}

// UnicodePropertyValue ::
//   UnicodePropertyValueCharacters
pp$8.regexp_eatUnicodePropertyValue = function(state) {
  var ch = 0;
  state.lastStringValue = "";
  while (isUnicodePropertyValueCharacter(ch = state.current())) {
    state.lastStringValue += codePointToString(ch);
    state.advance();
  }
  return state.lastStringValue !== ""
};
function isUnicodePropertyValueCharacter(ch) {
  return isUnicodePropertyNameCharacter(ch) || isDecimalDigit(ch)
}

// LoneUnicodePropertyNameOrValue ::
//   UnicodePropertyValueCharacters
pp$8.regexp_eatLoneUnicodePropertyNameOrValue = function(state) {
  return this.regexp_eatUnicodePropertyValue(state)
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-CharacterClass
pp$8.regexp_eatCharacterClass = function(state) {
  if (state.eat(0x5B /* [ */)) {
    state.eat(0x5E /* ^ */);
    this.regexp_classRanges(state);
    if (state.eat(0x5D /* [ */)) {
      return true
    }
    // Unreachable since it threw "unterminated regular expression" error before.
    state.raise("Unterminated character class");
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassRanges
// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRanges
// https://www.ecma-international.org/ecma-262/8.0/#prod-NonemptyClassRangesNoDash
pp$8.regexp_classRanges = function(state) {
  while (this.regexp_eatClassAtom(state)) {
    var left = state.lastIntValue;
    if (state.eat(0x2D /* - */) && this.regexp_eatClassAtom(state)) {
      var right = state.lastIntValue;
      if (state.switchU && (left === -1 || right === -1)) {
        state.raise("Invalid character class");
      }
      if (left !== -1 && right !== -1 && left > right) {
        state.raise("Range out of order in character class");
      }
    }
  }
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtom
// https://www.ecma-international.org/ecma-262/8.0/#prod-ClassAtomNoDash
pp$8.regexp_eatClassAtom = function(state) {
  var start = state.pos;

  if (state.eat(0x5C /* \ */)) {
    if (this.regexp_eatClassEscape(state)) {
      return true
    }
    if (state.switchU) {
      // Make the same message as V8.
      var ch$1 = state.current();
      if (ch$1 === 0x63 /* c */ || isOctalDigit(ch$1)) {
        state.raise("Invalid class escape");
      }
      state.raise("Invalid escape");
    }
    state.pos = start;
  }

  var ch = state.current();
  if (ch !== 0x5D /* [ */) {
    state.lastIntValue = ch;
    state.advance();
    return true
  }

  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassEscape
pp$8.regexp_eatClassEscape = function(state) {
  var start = state.pos;

  if (state.eat(0x62 /* b */)) {
    state.lastIntValue = 0x08; /* <BS> */
    return true
  }

  if (state.switchU && state.eat(0x2D /* - */)) {
    state.lastIntValue = 0x2D; /* - */
    return true
  }

  if (!state.switchU && state.eat(0x63 /* c */)) {
    if (this.regexp_eatClassControlLetter(state)) {
      return true
    }
    state.pos = start;
  }

  return (
    this.regexp_eatCharacterClassEscape(state) ||
    this.regexp_eatCharacterEscape(state)
  )
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-ClassControlLetter
pp$8.regexp_eatClassControlLetter = function(state) {
  var ch = state.current();
  if (isDecimalDigit(ch) || ch === 0x5F /* _ */) {
    state.lastIntValue = ch % 0x20;
    state.advance();
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
pp$8.regexp_eatHexEscapeSequence = function(state) {
  var start = state.pos;
  if (state.eat(0x78 /* x */)) {
    if (this.regexp_eatFixedHexDigits(state, 2)) {
      return true
    }
    if (state.switchU) {
      state.raise("Invalid escape");
    }
    state.pos = start;
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-DecimalDigits
pp$8.regexp_eatDecimalDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isDecimalDigit(ch = state.current())) {
    state.lastIntValue = 10 * state.lastIntValue + (ch - 0x30 /* 0 */);
    state.advance();
  }
  return state.pos !== start
};
function isDecimalDigit(ch) {
  return ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigits
pp$8.regexp_eatHexDigits = function(state) {
  var start = state.pos;
  var ch = 0;
  state.lastIntValue = 0;
  while (isHexDigit(ch = state.current())) {
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return state.pos !== start
};
function isHexDigit(ch) {
  return (
    (ch >= 0x30 /* 0 */ && ch <= 0x39 /* 9 */) ||
    (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) ||
    (ch >= 0x61 /* a */ && ch <= 0x66 /* f */)
  )
}
function hexToInt(ch) {
  if (ch >= 0x41 /* A */ && ch <= 0x46 /* F */) {
    return 10 + (ch - 0x41 /* A */)
  }
  if (ch >= 0x61 /* a */ && ch <= 0x66 /* f */) {
    return 10 + (ch - 0x61 /* a */)
  }
  return ch - 0x30 /* 0 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-annexB-LegacyOctalEscapeSequence
// Allows only 0-377(octal) i.e. 0-255(decimal).
pp$8.regexp_eatLegacyOctalEscapeSequence = function(state) {
  if (this.regexp_eatOctalDigit(state)) {
    var n1 = state.lastIntValue;
    if (this.regexp_eatOctalDigit(state)) {
      var n2 = state.lastIntValue;
      if (n1 <= 3 && this.regexp_eatOctalDigit(state)) {
        state.lastIntValue = n1 * 64 + n2 * 8 + state.lastIntValue;
      } else {
        state.lastIntValue = n1 * 8 + n2;
      }
    } else {
      state.lastIntValue = n1;
    }
    return true
  }
  return false
};

// https://www.ecma-international.org/ecma-262/8.0/#prod-OctalDigit
pp$8.regexp_eatOctalDigit = function(state) {
  var ch = state.current();
  if (isOctalDigit(ch)) {
    state.lastIntValue = ch - 0x30; /* 0 */
    state.advance();
    return true
  }
  state.lastIntValue = 0;
  return false
};
function isOctalDigit(ch) {
  return ch >= 0x30 /* 0 */ && ch <= 0x37 /* 7 */
}

// https://www.ecma-international.org/ecma-262/8.0/#prod-Hex4Digits
// https://www.ecma-international.org/ecma-262/8.0/#prod-HexDigit
// And HexDigit HexDigit in https://www.ecma-international.org/ecma-262/8.0/#prod-HexEscapeSequence
pp$8.regexp_eatFixedHexDigits = function(state, length) {
  var start = state.pos;
  state.lastIntValue = 0;
  for (var i = 0; i < length; ++i) {
    var ch = state.current();
    if (!isHexDigit(ch)) {
      state.pos = start;
      return false
    }
    state.lastIntValue = 16 * state.lastIntValue + hexToInt(ch);
    state.advance();
  }
  return true
};

// Object type used to represent tokens. Note that normally, tokens
// simply exist as properties on the parser object. This is only
// used for the onToken callback and the external tokenizer.

var Token = function Token(p) {
  this.type = p.type;
  this.value = p.value;
  this.start = p.start;
  this.end = p.end;
  if (p.options.locations)
    { this.loc = new SourceLocation(p, p.startLoc, p.endLoc); }
  if (p.options.ranges)
    { this.range = [p.start, p.end]; }
};

// ## Tokenizer

var pp$9 = Parser.prototype;

// Move to the next token

pp$9.next = function() {
  if (this.options.onToken)
    { this.options.onToken(new Token(this)); }

  this.lastTokEnd = this.end;
  this.lastTokStart = this.start;
  this.lastTokEndLoc = this.endLoc;
  this.lastTokStartLoc = this.startLoc;
  this.nextToken();
};

pp$9.getToken = function() {
  this.next();
  return new Token(this)
};

// If we're in an ES6 environment, make parsers iterable
if (typeof Symbol !== "undefined")
  { pp$9[Symbol.iterator] = function() {
    var this$1 = this;

    return {
      next: function () {
        var token = this$1.getToken();
        return {
          done: token.type === types.eof,
          value: token
        }
      }
    }
  }; }

// Toggle strict mode. Re-reads the next number or string to please
// pedantic tests (`"use strict"; 010;` should fail).

pp$9.curContext = function() {
  return this.context[this.context.length - 1]
};

// Read a single token, updating the parser object's token-related
// properties.

pp$9.nextToken = function() {
  var curContext = this.curContext();
  if (!curContext || !curContext.preserveSpace) { this.skipSpace(); }

  this.start = this.pos;
  if (this.options.locations) { this.startLoc = this.curPosition(); }
  if (this.pos >= this.input.length) { return this.finishToken(types.eof) }

  if (curContext.override) { return curContext.override(this) }
  else { this.readToken(this.fullCharCodeAtPos()); }
};

pp$9.readToken = function(code) {
  // Identifier or keyword. '\uXXXX' sequences are allowed in
  // identifiers, so '\' also dispatches to that.
  if (isIdentifierStart(code, this.options.ecmaVersion >= 6) || code === 92 /* '\' */)
    { return this.readWord() }

  return this.getTokenFromCode(code)
};

pp$9.fullCharCodeAtPos = function() {
  var code = this.input.charCodeAt(this.pos);
  if (code <= 0xd7ff || code >= 0xe000) { return code }
  var next = this.input.charCodeAt(this.pos + 1);
  return (code << 10) + next - 0x35fdc00
};

pp$9.skipBlockComment = function() {
  var startLoc = this.options.onComment && this.curPosition();
  var start = this.pos, end = this.input.indexOf("*/", this.pos += 2);
  if (end === -1) { this.raise(this.pos - 2, "Unterminated comment"); }
  this.pos = end + 2;
  if (this.options.locations) {
    lineBreakG.lastIndex = start;
    var match;
    while ((match = lineBreakG.exec(this.input)) && match.index < this.pos) {
      ++this.curLine;
      this.lineStart = match.index + match[0].length;
    }
  }
  if (this.options.onComment)
    { this.options.onComment(true, this.input.slice(start + 2, end), start, this.pos,
                           startLoc, this.curPosition()); }
};

pp$9.skipLineComment = function(startSkip) {
  var start = this.pos;
  var startLoc = this.options.onComment && this.curPosition();
  var ch = this.input.charCodeAt(this.pos += startSkip);
  while (this.pos < this.input.length && !isNewLine(ch)) {
    ch = this.input.charCodeAt(++this.pos);
  }
  if (this.options.onComment)
    { this.options.onComment(false, this.input.slice(start + startSkip, this.pos), start, this.pos,
                           startLoc, this.curPosition()); }
};

// Called at the start of the parse and after every token. Skips
// whitespace and comments, and.

pp$9.skipSpace = function() {
  loop: while (this.pos < this.input.length) {
    var ch = this.input.charCodeAt(this.pos);
    switch (ch) {
    case 32: case 160: // ' '
      ++this.pos;
      break
    case 13:
      if (this.input.charCodeAt(this.pos + 1) === 10) {
        ++this.pos;
      }
    case 10: case 8232: case 8233:
      ++this.pos;
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      break
    case 47: // '/'
      switch (this.input.charCodeAt(this.pos + 1)) {
      case 42: // '*'
        this.skipBlockComment();
        break
      case 47:
        this.skipLineComment(2);
        break
      default:
        break loop
      }
      break
    default:
      if (ch > 8 && ch < 14 || ch >= 5760 && nonASCIIwhitespace.test(String.fromCharCode(ch))) {
        ++this.pos;
      } else {
        break loop
      }
    }
  }
};

// Called at the end of every token. Sets `end`, `val`, and
// maintains `context` and `exprAllowed`, and skips the space after
// the token, so that the next one's `start` will point at the
// right position.

pp$9.finishToken = function(type, val) {
  this.end = this.pos;
  if (this.options.locations) { this.endLoc = this.curPosition(); }
  var prevType = this.type;
  this.type = type;
  this.value = val;

  this.updateContext(prevType);
};

// ### Token reading

// This is the function that is called to fetch the next token. It
// is somewhat obscure, because it works in character codes rather
// than characters, and because operator parsing has been inlined
// into it.
//
// All in the name of speed.
//
pp$9.readToken_dot = function() {
  var next = this.input.charCodeAt(this.pos + 1);
  if (next >= 48 && next <= 57) { return this.readNumber(true) }
  var next2 = this.input.charCodeAt(this.pos + 2);
  if (this.options.ecmaVersion >= 6 && next === 46 && next2 === 46) { // 46 = dot '.'
    this.pos += 3;
    return this.finishToken(types.ellipsis)
  } else {
    ++this.pos;
    return this.finishToken(types.dot)
  }
};

pp$9.readToken_slash = function() { // '/'
  var next = this.input.charCodeAt(this.pos + 1);
  if (this.exprAllowed) { ++this.pos; return this.readRegexp() }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.slash, 1)
};

pp$9.readToken_mult_modulo_exp = function(code) { // '%*'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  var tokentype = code === 42 ? types.star : types.modulo;

  // exponentiation operator ** and **=
  if (this.options.ecmaVersion >= 7 && code === 42 && next === 42) {
    ++size;
    tokentype = types.starstar;
    next = this.input.charCodeAt(this.pos + 2);
  }

  if (next === 61) { return this.finishOp(types.assign, size + 1) }
  return this.finishOp(tokentype, size)
};

pp$9.readToken_pipe_amp = function(code) { // '|&'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) { return this.finishOp(code === 124 ? types.logicalOR : types.logicalAND, 2) }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(code === 124 ? types.bitwiseOR : types.bitwiseAND, 1)
};

pp$9.readToken_caret = function() { // '^'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.bitwiseXOR, 1)
};

pp$9.readToken_plus_min = function(code) { // '+-'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === code) {
    if (next === 45 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 62 &&
        (this.lastTokEnd === 0 || lineBreak.test(this.input.slice(this.lastTokEnd, this.pos)))) {
      // A `-->` line comment
      this.skipLineComment(3);
      this.skipSpace();
      return this.nextToken()
    }
    return this.finishOp(types.incDec, 2)
  }
  if (next === 61) { return this.finishOp(types.assign, 2) }
  return this.finishOp(types.plusMin, 1)
};

pp$9.readToken_lt_gt = function(code) { // '<>'
  var next = this.input.charCodeAt(this.pos + 1);
  var size = 1;
  if (next === code) {
    size = code === 62 && this.input.charCodeAt(this.pos + 2) === 62 ? 3 : 2;
    if (this.input.charCodeAt(this.pos + size) === 61) { return this.finishOp(types.assign, size + 1) }
    return this.finishOp(types.bitShift, size)
  }
  if (next === 33 && code === 60 && !this.inModule && this.input.charCodeAt(this.pos + 2) === 45 &&
      this.input.charCodeAt(this.pos + 3) === 45) {
    // `<!--`, an XML-style comment that should be interpreted as a line comment
    this.skipLineComment(4);
    this.skipSpace();
    return this.nextToken()
  }
  if (next === 61) { size = 2; }
  return this.finishOp(types.relational, size)
};

pp$9.readToken_eq_excl = function(code) { // '=!'
  var next = this.input.charCodeAt(this.pos + 1);
  if (next === 61) { return this.finishOp(types.equality, this.input.charCodeAt(this.pos + 2) === 61 ? 3 : 2) }
  if (code === 61 && next === 62 && this.options.ecmaVersion >= 6) { // '=>'
    this.pos += 2;
    return this.finishToken(types.arrow)
  }
  return this.finishOp(code === 61 ? types.eq : types.prefix, 1)
};

pp$9.getTokenFromCode = function(code) {
  switch (code) {
  // The interpretation of a dot depends on whether it is followed
  // by a digit or another two dots.
  case 46: // '.'
    return this.readToken_dot()

  // Punctuation tokens.
  case 40: ++this.pos; return this.finishToken(types.parenL)
  case 41: ++this.pos; return this.finishToken(types.parenR)
  case 59: ++this.pos; return this.finishToken(types.semi)
  case 44: ++this.pos; return this.finishToken(types.comma)
  case 91: ++this.pos; return this.finishToken(types.bracketL)
  case 93: ++this.pos; return this.finishToken(types.bracketR)
  case 123: ++this.pos; return this.finishToken(types.braceL)
  case 125: ++this.pos; return this.finishToken(types.braceR)
  case 58: ++this.pos; return this.finishToken(types.colon)
  case 63: ++this.pos; return this.finishToken(types.question)

  case 96: // '`'
    if (this.options.ecmaVersion < 6) { break }
    ++this.pos;
    return this.finishToken(types.backQuote)

  case 48: // '0'
    var next = this.input.charCodeAt(this.pos + 1);
    if (next === 120 || next === 88) { return this.readRadixNumber(16) } // '0x', '0X' - hex number
    if (this.options.ecmaVersion >= 6) {
      if (next === 111 || next === 79) { return this.readRadixNumber(8) } // '0o', '0O' - octal number
      if (next === 98 || next === 66) { return this.readRadixNumber(2) } // '0b', '0B' - binary number
    }

  // Anything else beginning with a digit is an integer, octal
  // number, or float.
  case 49: case 50: case 51: case 52: case 53: case 54: case 55: case 56: case 57: // 1-9
    return this.readNumber(false)

  // Quotes produce strings.
  case 34: case 39: // '"', "'"
    return this.readString(code)

  // Operators are parsed inline in tiny state machines. '=' (61) is
  // often referred to. `finishOp` simply skips the amount of
  // characters it is given as second argument, and returns a token
  // of the type given by its first argument.

  case 47: // '/'
    return this.readToken_slash()

  case 37: case 42: // '%*'
    return this.readToken_mult_modulo_exp(code)

  case 124: case 38: // '|&'
    return this.readToken_pipe_amp(code)

  case 94: // '^'
    return this.readToken_caret()

  case 43: case 45: // '+-'
    return this.readToken_plus_min(code)

  case 60: case 62: // '<>'
    return this.readToken_lt_gt(code)

  case 61: case 33: // '=!'
    return this.readToken_eq_excl(code)

  case 126: // '~'
    return this.finishOp(types.prefix, 1)
  }

  this.raise(this.pos, "Unexpected character '" + codePointToString$1(code) + "'");
};

pp$9.finishOp = function(type, size) {
  var str = this.input.slice(this.pos, this.pos + size);
  this.pos += size;
  return this.finishToken(type, str)
};

pp$9.readRegexp = function() {
  var escaped, inClass, start = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(start, "Unterminated regular expression"); }
    var ch = this.input.charAt(this.pos);
    if (lineBreak.test(ch)) { this.raise(start, "Unterminated regular expression"); }
    if (!escaped) {
      if (ch === "[") { inClass = true; }
      else if (ch === "]" && inClass) { inClass = false; }
      else if (ch === "/" && !inClass) { break }
      escaped = ch === "\\";
    } else { escaped = false; }
    ++this.pos;
  }
  var pattern = this.input.slice(start, this.pos);
  ++this.pos;
  var flagsStart = this.pos;
  var flags = this.readWord1();
  if (this.containsEsc) { this.unexpected(flagsStart); }

  // Validate pattern
  var state = this.regexpState || (this.regexpState = new RegExpValidationState(this));
  state.reset(start, pattern, flags);
  this.validateRegExpFlags(state);
  this.validateRegExpPattern(state);

  // Create Literal#value property value.
  var value = null;
  try {
    value = new RegExp(pattern, flags);
  } catch (e) {
    // ESTree requires null if it failed to instantiate RegExp object.
    // https://github.com/estree/estree/blob/a27003adf4fd7bfad44de9cef372a2eacd527b1c/es5.md#regexpliteral
  }

  return this.finishToken(types.regexp, {pattern: pattern, flags: flags, value: value})
};

// Read an integer in the given radix. Return null if zero digits
// were read, the integer value otherwise. When `len` is given, this
// will return `null` unless the integer has exactly `len` digits.

pp$9.readInt = function(radix, len) {
  var start = this.pos, total = 0;
  for (var i = 0, e = len == null ? Infinity : len; i < e; ++i) {
    var code = this.input.charCodeAt(this.pos), val = (void 0);
    if (code >= 97) { val = code - 97 + 10; } // a
    else if (code >= 65) { val = code - 65 + 10; } // A
    else if (code >= 48 && code <= 57) { val = code - 48; } // 0-9
    else { val = Infinity; }
    if (val >= radix) { break }
    ++this.pos;
    total = total * radix + val;
  }
  if (this.pos === start || len != null && this.pos - start !== len) { return null }

  return total
};

pp$9.readRadixNumber = function(radix) {
  var start = this.pos;
  this.pos += 2; // 0x
  var val = this.readInt(radix);
  if (val == null) { this.raise(this.start + 2, "Expected number in radix " + radix); }
  if (this.options.ecmaVersion >= 11 && this.input.charCodeAt(this.pos) === 110) {
    val = typeof BigInt !== "undefined" ? BigInt(this.input.slice(start, this.pos)) : null;
    ++this.pos;
  } else if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
  return this.finishToken(types.num, val)
};

// Read an integer, octal integer, or floating-point number.

pp$9.readNumber = function(startsWithDot) {
  var start = this.pos;
  if (!startsWithDot && this.readInt(10) === null) { this.raise(start, "Invalid number"); }
  var octal = this.pos - start >= 2 && this.input.charCodeAt(start) === 48;
  if (octal && this.strict) { this.raise(start, "Invalid number"); }
  if (octal && /[89]/.test(this.input.slice(start, this.pos))) { octal = false; }
  var next = this.input.charCodeAt(this.pos);
  if (!octal && !startsWithDot && this.options.ecmaVersion >= 11 && next === 110) {
    var str$1 = this.input.slice(start, this.pos);
    var val$1 = typeof BigInt !== "undefined" ? BigInt(str$1) : null;
    ++this.pos;
    if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }
    return this.finishToken(types.num, val$1)
  }
  if (next === 46 && !octal) { // '.'
    ++this.pos;
    this.readInt(10);
    next = this.input.charCodeAt(this.pos);
  }
  if ((next === 69 || next === 101) && !octal) { // 'eE'
    next = this.input.charCodeAt(++this.pos);
    if (next === 43 || next === 45) { ++this.pos; } // '+-'
    if (this.readInt(10) === null) { this.raise(start, "Invalid number"); }
  }
  if (isIdentifierStart(this.fullCharCodeAtPos())) { this.raise(this.pos, "Identifier directly after number"); }

  var str = this.input.slice(start, this.pos);
  var val = octal ? parseInt(str, 8) : parseFloat(str);
  return this.finishToken(types.num, val)
};

// Read a string value, interpreting backslash-escapes.

pp$9.readCodePoint = function() {
  var ch = this.input.charCodeAt(this.pos), code;

  if (ch === 123) { // '{'
    if (this.options.ecmaVersion < 6) { this.unexpected(); }
    var codePos = ++this.pos;
    code = this.readHexChar(this.input.indexOf("}", this.pos) - this.pos);
    ++this.pos;
    if (code > 0x10FFFF) { this.invalidStringToken(codePos, "Code point out of bounds"); }
  } else {
    code = this.readHexChar(4);
  }
  return code
};

function codePointToString$1(code) {
  // UTF-16 Decoding
  if (code <= 0xFFFF) { return String.fromCharCode(code) }
  code -= 0x10000;
  return String.fromCharCode((code >> 10) + 0xD800, (code & 1023) + 0xDC00)
}

pp$9.readString = function(quote) {
  var out = "", chunkStart = ++this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated string constant"); }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === quote) { break }
    if (ch === 92) { // '\'
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(false);
      chunkStart = this.pos;
    } else {
      if (isNewLine(ch, this.options.ecmaVersion >= 10)) { this.raise(this.start, "Unterminated string constant"); }
      ++this.pos;
    }
  }
  out += this.input.slice(chunkStart, this.pos++);
  return this.finishToken(types.string, out)
};

// Reads template string tokens.

var INVALID_TEMPLATE_ESCAPE_ERROR = {};

pp$9.tryReadTemplateToken = function() {
  this.inTemplateElement = true;
  try {
    this.readTmplToken();
  } catch (err) {
    if (err === INVALID_TEMPLATE_ESCAPE_ERROR) {
      this.readInvalidTemplateToken();
    } else {
      throw err
    }
  }

  this.inTemplateElement = false;
};

pp$9.invalidStringToken = function(position, message) {
  if (this.inTemplateElement && this.options.ecmaVersion >= 9) {
    throw INVALID_TEMPLATE_ESCAPE_ERROR
  } else {
    this.raise(position, message);
  }
};

pp$9.readTmplToken = function() {
  var out = "", chunkStart = this.pos;
  for (;;) {
    if (this.pos >= this.input.length) { this.raise(this.start, "Unterminated template"); }
    var ch = this.input.charCodeAt(this.pos);
    if (ch === 96 || ch === 36 && this.input.charCodeAt(this.pos + 1) === 123) { // '`', '${'
      if (this.pos === this.start && (this.type === types.template || this.type === types.invalidTemplate)) {
        if (ch === 36) {
          this.pos += 2;
          return this.finishToken(types.dollarBraceL)
        } else {
          ++this.pos;
          return this.finishToken(types.backQuote)
        }
      }
      out += this.input.slice(chunkStart, this.pos);
      return this.finishToken(types.template, out)
    }
    if (ch === 92) { // '\'
      out += this.input.slice(chunkStart, this.pos);
      out += this.readEscapedChar(true);
      chunkStart = this.pos;
    } else if (isNewLine(ch)) {
      out += this.input.slice(chunkStart, this.pos);
      ++this.pos;
      switch (ch) {
      case 13:
        if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; }
      case 10:
        out += "\n";
        break
      default:
        out += String.fromCharCode(ch);
        break
      }
      if (this.options.locations) {
        ++this.curLine;
        this.lineStart = this.pos;
      }
      chunkStart = this.pos;
    } else {
      ++this.pos;
    }
  }
};

// Reads a template token to search for the end, without validating any escape sequences
pp$9.readInvalidTemplateToken = function() {
  for (; this.pos < this.input.length; this.pos++) {
    switch (this.input[this.pos]) {
    case "\\":
      ++this.pos;
      break

    case "$":
      if (this.input[this.pos + 1] !== "{") {
        break
      }
    // falls through

    case "`":
      return this.finishToken(types.invalidTemplate, this.input.slice(this.start, this.pos))

    // no default
    }
  }
  this.raise(this.start, "Unterminated template");
};

// Used to read escaped characters

pp$9.readEscapedChar = function(inTemplate) {
  var ch = this.input.charCodeAt(++this.pos);
  ++this.pos;
  switch (ch) {
  case 110: return "\n" // 'n' -> '\n'
  case 114: return "\r" // 'r' -> '\r'
  case 120: return String.fromCharCode(this.readHexChar(2)) // 'x'
  case 117: return codePointToString$1(this.readCodePoint()) // 'u'
  case 116: return "\t" // 't' -> '\t'
  case 98: return "\b" // 'b' -> '\b'
  case 118: return "\u000b" // 'v' -> '\u000b'
  case 102: return "\f" // 'f' -> '\f'
  case 13: if (this.input.charCodeAt(this.pos) === 10) { ++this.pos; } // '\r\n'
  case 10: // ' \n'
    if (this.options.locations) { this.lineStart = this.pos; ++this.curLine; }
    return ""
  default:
    if (ch >= 48 && ch <= 55) {
      var octalStr = this.input.substr(this.pos - 1, 3).match(/^[0-7]+/)[0];
      var octal = parseInt(octalStr, 8);
      if (octal > 255) {
        octalStr = octalStr.slice(0, -1);
        octal = parseInt(octalStr, 8);
      }
      this.pos += octalStr.length - 1;
      ch = this.input.charCodeAt(this.pos);
      if ((octalStr !== "0" || ch === 56 || ch === 57) && (this.strict || inTemplate)) {
        this.invalidStringToken(
          this.pos - 1 - octalStr.length,
          inTemplate
            ? "Octal literal in template string"
            : "Octal literal in strict mode"
        );
      }
      return String.fromCharCode(octal)
    }
    if (isNewLine(ch)) {
      // Unicode new line characters after \ get removed from output in both
      // template literals and strings
      return ""
    }
    return String.fromCharCode(ch)
  }
};

// Used to read character escape sequences ('\x', '\u', '\U').

pp$9.readHexChar = function(len) {
  var codePos = this.pos;
  var n = this.readInt(16, len);
  if (n === null) { this.invalidStringToken(codePos, "Bad character escape sequence"); }
  return n
};

// Read an identifier, and return it as a string. Sets `this.containsEsc`
// to whether the word contained a '\u' escape.
//
// Incrementally adds only escaped chars, adding other chunks as-is
// as a micro-optimization.

pp$9.readWord1 = function() {
  this.containsEsc = false;
  var word = "", first = true, chunkStart = this.pos;
  var astral = this.options.ecmaVersion >= 6;
  while (this.pos < this.input.length) {
    var ch = this.fullCharCodeAtPos();
    if (isIdentifierChar(ch, astral)) {
      this.pos += ch <= 0xffff ? 1 : 2;
    } else if (ch === 92) { // "\"
      this.containsEsc = true;
      word += this.input.slice(chunkStart, this.pos);
      var escStart = this.pos;
      if (this.input.charCodeAt(++this.pos) !== 117) // "u"
        { this.invalidStringToken(this.pos, "Expecting Unicode escape sequence \\uXXXX"); }
      ++this.pos;
      var esc = this.readCodePoint();
      if (!(first ? isIdentifierStart : isIdentifierChar)(esc, astral))
        { this.invalidStringToken(escStart, "Invalid Unicode escape"); }
      word += codePointToString$1(esc);
      chunkStart = this.pos;
    } else {
      break
    }
    first = false;
  }
  return word + this.input.slice(chunkStart, this.pos)
};

// Read an identifier or keyword token. Will check for reserved
// words when necessary.

pp$9.readWord = function() {
  var word = this.readWord1();
  var type = types.name;
  if (this.keywords.test(word)) {
    if (this.containsEsc) { this.raiseRecoverable(this.start, "Escape sequence in keyword " + word); }
    type = keywords$1[word];
  }
  return this.finishToken(type, word)
};

// Acorn is a tiny, fast JavaScript parser written in JavaScript.

var version = "7.1.0";

Parser.acorn = {
  Parser: Parser,
  version: version,
  defaultOptions: defaultOptions,
  Position: Position,
  SourceLocation: SourceLocation,
  getLineInfo: getLineInfo,
  Node: Node,
  TokenType: TokenType,
  tokTypes: types,
  keywordTypes: keywords$1,
  TokContext: TokContext,
  tokContexts: types$1,
  isIdentifierChar: isIdentifierChar,
  isIdentifierStart: isIdentifierStart,
  Token: Token,
  isNewLine: isNewLine,
  lineBreak: lineBreak,
  lineBreakG: lineBreakG,
  nonASCIIwhitespace: nonASCIIwhitespace
};

// The main exported interface (under `self.acorn` when in the
// browser) is a `parse` function that takes a code string and
// returns an abstract syntax tree as specified by [Mozilla parser
// API][api].
//
// [api]: https://developer.mozilla.org/en-US/docs/SpiderMonkey/Parser_API

function parse(input, options) {
  return Parser.parse(input, options)
}

// This function tries to parse a single expression at a given
// offset in a string. Useful for parsing mixed-language formats
// that embed JavaScript expressions.

function parseExpressionAt(input, pos, options) {
  return Parser.parseExpressionAt(input, pos, options)
}

// Acorn is organized as a tokenizer and a recursive-descent parser.
// The `tokenizer` export provides an interface to the tokenizer.

function tokenizer(input, options) {
  return Parser.tokenizer(input, options)
}




/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  IteratorPrototype[iteratorSymbol] = function () {
    return this;
  };

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
  GeneratorFunctionPrototype.constructor = GeneratorFunction;
  GeneratorFunctionPrototype[toStringTagSymbol] =
    GeneratorFunction.displayName = "GeneratorFunction";

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      prototype[method] = function(arg) {
        return this._invoke(method, arg);
      };
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      if (!(toStringTagSymbol in genFun)) {
        genFun[toStringTagSymbol] = "GeneratorFunction";
      }
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return Promise.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return Promise.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new Promise(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  AsyncIterator.prototype[asyncIteratorSymbol] = function () {
    return this;
  };
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList) {
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList)
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  Gp[toStringTagSymbol] = "Generator";

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  Gp[iteratorSymbol] = function() {
    return this;
  };

  Gp.toString = function() {
    return "[object Generator]";
  };

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : undefined
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  Function("r", "regeneratorRuntime = r")(runtime);
}


/***/ }),

/***/ "./src/Function.ts":
/*!*************************!*\
  !*** ./src/Function.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vm_1 = __webpack_require__(/*! ./vm */ "./src/vm.ts");

function default_1() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  var code = args.pop();
  return vm_1.compileFunction(code || "", args);
}

exports.default = default_1;

/***/ }),

/***/ "./src/Model/Array/index.ts":
/*!**********************************!*\
  !*** ./src/Model/Array/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _regenerator = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));

var _marked =
/*#__PURE__*/
_regenerator.default.mark(flatten);

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Iterator_1 = __webpack_require__(/*! ../Iterator */ "./src/Model/Iterator/index.ts");

function createArrayClass(Smbl) {
  /**
   * 这个是对Array的封装
   * 为什么要这么做，请看issue：https://github.com/IAIAE/estime/issues/5
   */
  // @ts-ignore
  var MyArray =
  /*#__PURE__*/
  function (_Array) {
    (0, _inheritsLoose2.default)(MyArray, _Array);

    function MyArray() {
      return _Array.apply(this, arguments) || this;
    }

    MyArray.isArray = function isArray(val) {
      return val instanceof MyArray;
    } // 一个沙箱env初始化后，会分配一个Smbl，用这个方法传给MyArray。一些实例方法(entries等)会用到
    ;

    MyArray._setSmbl = function _setSmbl(Smbl) {
      this._Smbl = Smbl;
    };

    MyArray.of = function of() {
      return MyArray.prototype.slice.call(arguments);
    };

    return MyArray;
  }((0, _wrapNativeSuper2.default)(Array));

  MyArray.from = function () {
    var toStr = Object.prototype.toString;

    var isCallable = function isCallable(fn) {
      return typeof fn === 'function' || toStr.call(fn) === '[object Function]';
    };

    var toInteger = function toInteger(value) {
      var number = Number(value);

      if (isNaN(number)) {
        return 0;
      }

      if (number === 0 || !isFinite(number)) {
        return number;
      }

      return (number > 0 ? 1 : -1) * Math.floor(Math.abs(number));
    };

    var maxSafeInteger = Math.pow(2, 53) - 1;

    var toLength = function toLength(value) {
      var len = toInteger(value);
      return Math.min(Math.max(len, 0), maxSafeInteger);
    }; // The length property of the from method is 1.


    return function from(arrayLike
    /*, mapFn, thisArg */
    ) {
      // 2. Let items be ToObject(arrayLike).
      var items = Object(arrayLike); // 3. ReturnIfAbrupt(items).

      if (arrayLike == null) {
        throw new TypeError('Array.from requires an array-like object - not null or undefined');
      } // 4. If mapfn is undefined, then let mapping be false.


      var mapFn = arguments.length > 1 ? arguments[1] : void undefined;
      var T;

      if (typeof mapFn !== 'undefined') {
        // 5. else
        // 5. a If IsCallable(mapfn) is false, throw a TypeError exception.
        if (!isCallable(mapFn)) {
          throw new TypeError('Array.from: when provided, the second argument must be a function');
        } // 5. b. If thisArg was supplied, let T be thisArg; else let T be undefined.


        if (arguments.length > 2) {
          T = arguments[2];
        }
      } // 10. Let lenValue be Get(items, "length").
      // 11. Let len be ToLength(lenValue).


      var len = toLength(items.length); // 13. If IsConstructor(C) is true, then
      // 13. a. Let A be the result of calling the [[Construct]] internal method
      // of C with an argument list containing the single item len.
      // 14. a. Else, Let A be ArrayCreate(len).

      var A = new MyArray(len); // 16. Let k be 0.

      var k = 0; // 17. Repeat, while k < len… (also steps a - h)

      var kValue;

      while (k < len) {
        kValue = items[k];

        if (mapFn) {
          A[k] = typeof T === 'undefined' ? mapFn(kValue, k) : mapFn.call(T, kValue, k);
        } else {
          A[k] = kValue;
        }

        k += 1;
      } // 18. Let putStatus be Put(A, "length", len, true).


      A.length = len; // 20. Return A.

      return A;
    };
  }();

  Object.defineProperty(MyArray.prototype, '__nativeNewFunc', {
    value: function value(name, args) {
      return Array.prototype[name].apply(this, args);
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, '__nativeFunc', {
    value: function value(name, args) {
      return Array.prototype[name].apply(this, args);
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'copyWithin', {
    value: function value() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      if (!Array.prototype.copyWithin) {
        var target = args[0];

        if (target == null || +target !== target) {
          throw new TypeError('fist param of copyWithin must be number');
        }

        target = formatStart(target, this.length);
        var start = formatStart(args[1], this.length);
        var end = formatEnd(args[2], this.length);
        if (target == this.length) return this;
        var arr = this.slice(start, end);

        for (var i = 0; i < arr.length; i++) {
          if (target + i >= this.length) break;
          this[target + i] = arr[i];
        }

        return this;
      } else {
        return this.__nativeNewFunc('copyWithin', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'fill', {
    value: function value() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      if (!Array.prototype.fill) {
        var val = args[0];
        var start = formatStart(args[1], this.length);
        var end = formatEnd(args[2], this.length);

        for (var i = start; i < end; i++) {
          this[i] = val;
        }

        return this;
      } else {
        return this.__nativeFunc('fill', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'find', {
    value: function value() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }

      if (!Array.prototype.find) {
        var func = args[0];

        if (typeof func != 'function') {
          throw new TypeError(args[0] + ' is not a function');
        }

        var res;

        for (var i = 0; i < this.length; i++) {
          if (func(this[i], i, this)) {
            res = this[i];
            break;
          }
        }

        return res;
      } else {
        return this.__nativeFunc('find', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  /**
   * 找到第一个匹配元素的下标
   * @param args
   */

  Object.defineProperty(MyArray.prototype, 'findIndex', {
    value: function value() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }

      if (!Array.prototype.findIndex) {
        var func = args[0];

        if (typeof func != 'function') {
          throw new TypeError(func + ' is not a function');
        }

        var res = -1;

        for (var i = 0; i < this.length; i++) {
          if (func(this[i], i, this)) {
            res = i;
            break;
          }
        }

        return res;
      } else {
        return this.__nativeFunc('findIndex', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  /**
   * 从后往前遍历，找到最后一个匹配元素的下标
   * @param args
   */

  Object.defineProperty(MyArray.prototype, 'lastIndexOf', {
    value: function value() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }

      if (!Array.prototype.lastIndexOf) {
        var searchElement = args[0];
        var fromIndex = args[2];

        if (+fromIndex !== fromIndex) {
          throw new TypeError(fromIndex + ' is not a number');
        }

        var len = this.length;

        if (fromIndex >= 0) {
          fromIndex = Math.min(len - 1, fromIndex);
        } else {
          fromIndex = len + fromIndex;
        }

        var res = -1;

        for (var i = fromIndex; i >= 0; i--) {
          if (this[i] === searchElement) {
            res = i;
            break;
          }
        }

        return res;
      } else {
        return this.__nativeFunc('lastIndexOf', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'reverse', {
    value: function value() {
      if (!Array.prototype.reverse) {
        var len = this.length;

        for (var i = 0; i < len - i; i++) {
          swithh(this, i, len - i);
        }

        return this;
      } else {
        this.__nativeFunc('reverse', []);

        return this;
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'includes', {
    value: function value() {
      for (var _len6 = arguments.length, args = new Array(_len6), _key6 = 0; _key6 < _len6; _key6++) {
        args[_key6] = arguments[_key6];
      }

      if (!Array.prototype.includes) {
        var target = args[0];
        var fromIndex = args[1];
        var len = this.length;
        fromIndex = fromIndex >= 0 ? fromIndex : len + fromIndex;

        for (var i = fromIndex; i < len; i++) {
          if (this[i] === target) {
            return true;
          }
        }

        return false;
      } else {
        return this.__nativeFunc('includes', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  /**
   * 对于keys的调用是没有参数的，但是沙箱内部会传入一个当前环境的Symbol构造类进来。
   * @param Smbl
   */

  Object.defineProperty(MyArray.prototype, 'keys', {
    value: function value() {
      var Smbl = MyArray._Smbl;
      var len = this.length;
      var count = 0;
      return new Iterator_1.EIterator(Smbl, {
        next: function next() {
          if (count < len) {
            return {
              done: false,
              value: count++
            };
          } else {
            return {
              done: true,
              value: count
            };
          }
        }
      });
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  /**
   * 对于entries的调用是没有参数的，但是沙箱内部会传入一个当前环境的Symbol构造类进来。
   * @param Smbl
   */

  Object.defineProperty(MyArray.prototype, 'entries', {
    value: function value() {
      var Smbl = MyArray._Smbl;
      var arr = this.map(function (_) {
        return _;
      });
      var len = this.length;
      var count = 0;
      return new Iterator_1.EIterator(Smbl, {
        next: function next() {
          if (count < len) {
            return {
              done: false,
              value: [count, arr[count++]]
            };
          } else {
            return {
              done: true,
              value: null
            };
          }
        }
      });
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'values', {
    value: function value() {
      var Smbl = MyArray._Smbl;
      var arr = this.map(function (_) {
        return _;
      });
      var len = this.length;
      var count = 0;
      return new Iterator_1.EIterator(Smbl, {
        next: function next() {
          if (count < len) {
            return {
              done: false,
              value: arr[count++]
            };
          } else {
            return {
              done: true,
              value: null
            };
          }
        }
      });
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'flat', {
    value: function value() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }

      // @ts-ignore
      if (!Array.prototype.flat) {
        var depth = args[0];

        if (depth === undefined) {
          depth = 1;
        }

        if (+depth !== depth) {
          throw new TypeError('first parameter of Array.prototype.flat must be number');
        }

        var tt = new MyArray();
        var t = [].concat(flatten(this, depth));

        for (var i = 0; i < t.length; i++) {
          tt[i] = t[i];
        }

        return tt;
      } else {
        return this.__nativeNewFunc('flat', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'flatMap', {
    value: function value() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }

      // @ts-ignore
      if (!Array.prototype.flatMap) {
        var func = args[0];

        if (typeof func != 'function') {
          throw new TypeError('first parameter of Array.prototype.flatMap must be function');
        }

        var tt = new MyArray();
        var t = [].concat(flatten(this.map(func), 1));

        for (var i = 0; i < t.length; i++) {
          tt[i] = t[i];
        }

        return tt;
      } else {
        return this.__nativeNewFunc('flatMap', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  });
  Object.defineProperty(MyArray.prototype, 'reduceRight', {
    value: function value() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }

      if (!Array.prototype.reduceRight) {
        var func = args[0];

        if (typeof func != 'function') {
          throw new TypeError('first parameter of Array.prototype.reduceRight must be function');
        }

        var initialValue = args[1];
        var startIndex = this.length - 1;

        if (initialValue === undefined) {
          if (this.length == 0) {
            throw new TypeError('calling reduceRight on an empty array without an initial value');
          }

          initialValue = this[this.length - 1];
          startIndex--;
        }

        for (var i = startIndex; i >= 0; i--) {
          initialValue = func(initialValue, this[i], i, this);
        }

        return initialValue;
      } else {
        return this.__nativeNewFunc('reduceRight', args);
      }
    },
    enumerable: false,
    configurable: true,
    writable: false
  }); // Object.defineProperty(MyArray.prototype, 'concat', {
  //     enumerable: false,
  //     value: function(...args) {
  //         return this.__nativeNewFunc('concat', args)
  //     }
  // })
  // protected pop(...args) {
  //     return this.__nativeFunc('pop', args)
  // }
  // protected push(...args) {
  //     return this.__nativeFunc('push', args)
  // }
  // protected slice(...args) {
  //     return this.__nativeNewFunc('slice', args)
  // }
  // protected shift() {
  //     return this.__nativeFunc('shift', [])
  // }
  // protected unshift() {
  //     return this.__nativeFunc('unshift', [])
  // }
  // protected sort(...args) {
  //     return this.__nativeFunc('sort', args)
  // }
  // protected splice(...args) {
  //     return this.__nativeFunc('splice', args)
  // }
  // protected indexOf(...args) {
  //     return this.__nativeFunc('indexOf', args)
  // }
  // protected join(...args) {
  //     return this.__nativeFunc('join', args)
  // }
  // protected forEach(...args) {
  //     return this.__nativeFunc('forEach', args)
  // }
  // protected filter(...args) {
  //     return this.__nativeFunc('filter', args)
  // }
  // protected map(...args) {
  //     return this.__nativeNewFunc('map', args)
  // }
  // protected every(...args) {
  //     return this.__nativeFunc('every', args)
  // }
  // protected some(...args) {
  //     return this.__nativeFunc('some', args)
  // }
  // protected reduce(...args) {
  //     return this.__nativeFunc('reduce', args)
  // }
  // protected toString() {
  //     return this.join(',')
  // }
  // protected toLocaleString() {
  //     return this.join(',')
  // }

  MyArray._setSmbl(Smbl);

  return MyArray;
}

exports.createArrayClass = createArrayClass;

function swithh(arr, i, j) {
  var t = arr[i];
  arr[i] = arr[j];
  arr[j] = t;
}

function flatten(array, depth) {
  var _iterator, _isArray, _i, _ref, item;

  return _regenerator.default.wrap(function flatten$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _iterator = array, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();

        case 1:
          if (!_isArray) {
            _context.next = 7;
            break;
          }

          if (!(_i >= _iterator.length)) {
            _context.next = 4;
            break;
          }

          return _context.abrupt("break", 20);

        case 4:
          _ref = _iterator[_i++];
          _context.next = 11;
          break;

        case 7:
          _i = _iterator.next();

          if (!_i.done) {
            _context.next = 10;
            break;
          }

          return _context.abrupt("break", 20);

        case 10:
          _ref = _i.value;

        case 11:
          item = _ref;

          if (!(Array.isArray(item) && depth > 0)) {
            _context.next = 16;
            break;
          }

          return _context.delegateYield(flatten(item, depth - 1), "t0", 14);

        case 14:
          _context.next = 18;
          break;

        case 16:
          _context.next = 18;
          return item;

        case 18:
          _context.next = 1;
          break;

        case 20:
        case "end":
          return _context.stop();
      }
    }
  }, _marked);
}

function formatStart(start, len) {
  if (+start !== start) {
    throw new TypeError('parameter must be number');
  }

  if (start == null) return 0;else if (start < 0) return Math.max(0, len + start);else return Math.min(len, start);
}

function formatEnd(end, len) {
  if (+end !== end) {
    throw new TypeError('parameter must be number');
  }

  if (end == null) return len;else if (end < 0) {
    return len + end < 0 ? len : len + end;
  } else return Math.min(len, end);
}
/**
 *  ["length", "constructor", "concat", "copyWithin", "fill", "find", "findIndex", "lastIndexOf", "pop", "push", "reverse", "shift", "unshift", "slice", "sort", "splice", "includes", "indexOf", "join", "keys", "entries", "values", "forEach", "filter", "flat", "flatMap", "map", "every", "some", "reduce", "reduceRight", "toLocaleString", "toString"]
 */

/***/ }),

/***/ "./src/Model/Closure/handler/BinaryExpression.ts":
/*!*******************************************************!*\
  !*** ./src/Model/Closure/handler/BinaryExpression.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts"); // a==b a/b


function binaryExpressionHandler(node) {
  var _this = this;

  var leftExpression = this.createClosure(node.left);
  var rightExpression = this.createClosure(node.right);
  return function () {
    var leftValue = leftExpression();
    var rightValue = rightExpression();

    switch (node.operator) {
      case "==":
        return leftValue == rightValue;

      case "!=":
        return leftValue != rightValue;

      case "===":
        return leftValue === rightValue;

      case "!==":
        return leftValue !== rightValue;

      case "<":
        return leftValue < rightValue;

      case "<=":
        return leftValue <= rightValue;

      case ">":
        return leftValue > rightValue;

      case ">=":
        return leftValue >= rightValue;

      case "<<":
        return leftValue << rightValue;

      case ">>":
        return leftValue >> rightValue;

      case ">>>":
        return leftValue >>> rightValue;

      case "+":
        return leftValue + rightValue;

      case "-":
        return leftValue - rightValue;

      case "*":
        return leftValue * rightValue;

      case "**":
        return Math.pow(leftValue, rightValue);

      case "/":
        return leftValue / rightValue;

      case "%":
        return leftValue % rightValue;

      case "|":
        return leftValue | rightValue;

      case "^":
        return leftValue ^ rightValue;

      case "&":
        return leftValue & rightValue;

      case "in":
        return leftValue in rightValue;

      case "instanceof":
        return leftValue instanceof rightValue;

      default:
        throw _this.createInternalThrowError(Message_1.Messages.BinaryOperatorSyntaxError, node.operator, node);
    }
  };
}

exports.binaryExpressionHandler = binaryExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/JSXAttributeHandler.ts":
/*!**********************************************************!*\
  !*** ./src/Model/Closure/handler/JSXAttributeHandler.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts"); // <App className="hello" />
// <App className={name} />
// <App show />


function JSXAttributeHandler(node) {
  if (node.name.type == 'JSXNamespacedName') {
    throw this.createInternalThrowError(Message_1.Messages.NormalError, 'JSXNamespacedName not support ', node);
  }

  var name = node.name.name;
  var valueClosure;

  if (!node.value) {
    valueClosure = function valueClosure() {
      return true;
    };
  } else if (node.value.type == 'JSXFragment') {
    throw this.createInternalThrowError(Message_1.Messages.NormalError, 'JSXFragment not support!', node);
  } else {
    valueClosure = this.createClosure(node.value);
  }

  return function () {
    var _ref;

    return _ref = {}, _ref[name] = valueClosure(), _ref;
  };
}

exports.JSXAttributeHandler = JSXAttributeHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/JSXElementHandler.ts":
/*!********************************************************!*\
  !*** ./src/Model/Closure/handler/JSXElementHandler.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts");

var react_1 = __webpack_require__(/*! ../../Node/react */ "./src/Model/Node/react.ts"); // <div>hello</div>


function JSXElementHandler(node) {
  var _this = this;

  var React = this.globalContext['React'];

  if (!React) {
    throw this.createInternalThrowError(Message_1.Messages.NormalError, 'to use jsx, you must set React in globalContext', node);
  }

  var tag = node.openingElement.name;
  var tagClosure;

  if (tag.type == 'JSXIdentifier') {
    var tagname = tag.name;
    tagClosure = react_1.REACT_INTRINSIC_TAG.includes(tag.name) ? // 直接返回内置标签名
    function () {
      return tagname;
    } // 找到这个变量
    : this.createClosure({
      type: 'Identifier',
      name: tagname,
      loc: tag.loc
    });
  } else if (tag.type == 'JSXMemberExpression') {
    // @ts-ignore
    tagClosure = this.createClosure(tag);
  } else if (tag.type == 'JSXNamespacedName') {
    throw this.createInternalThrowError(Message_1.Messages.NormalError, 'jsx namespacename not support. ', node);
  }

  var childrenClosure;

  if (node.openingElement.selfClosing || !node.children || !node.children.length) {
    childrenClosure = [function () {
      return null;
    }];
  } else {
    childrenClosure = node.children.map(function (item) {
      if (item.type == 'JSXElement') {
        return _this.createClosure(item);
      } else if (item.type == 'JSXExpressionContainer') {
        return _this.createClosure(item.expression);
      } else if (item.type == 'JSXText') {
        var val = item.value.trim();
        return function () {
          return val;
        };
      } else {
        // fragment和spreadChild不支持
        return function () {
          return null;
        };
      }
    });
  }

  var attrClosure;

  if (!node.openingElement.attributes || !node.openingElement.attributes.length) {
    attrClosure = [function () {
      return null;
    }];
  } else {
    attrClosure = node.openingElement.attributes.map(function (item) {
      return _this.createClosure(item);
    });
  }

  return function () {
    var tag = tagClosure();
    var attrs = attrClosure.map(function (_) {
      return _();
    }).filter(function (_) {
      return _;
    });
    var attr = attrs.length ? Object.assign.apply({}, attrs) : null;
    var childs = childrenClosure.map(function (_) {
      return _();
    }).filter(function (_) {
      return _;
    });
    return React.createElement.apply(React, [tag, attr].concat(childs));
  };
}

exports.JSXElementHandler = JSXElementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/JSXExpressionContainerHandler.ts":
/*!********************************************************************!*\
  !*** ./src/Model/Closure/handler/JSXExpressionContainerHandler.ts ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // {showView && <div />}

function JSXExpressionContainerHandler(node) {
  var closure = this.createClosure(node.expression);
  return function () {
    return closure();
  };
}

exports.JSXExpressionContainerHandler = JSXExpressionContainerHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/JSXIdentifierHandler.ts":
/*!***********************************************************!*\
  !*** ./src/Model/Closure/handler/JSXIdentifierHandler.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // <hello /> -> JSXIdentifier: hello

function JSXIdentifierHandler(node) {
  var closure = this.createClosure({
    type: "Identifier",
    name: node.name,
    loc: node.loc,
    // @ts-ignore
    start: node.start,
    // @ts-ignore
    end: node.end
  });
  return function () {
    return closure();
  };
}

exports.JSXIdentifierHandler = JSXIdentifierHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/JSXMemberExpressionHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/Model/Closure/handler/JSXMemberExpressionHandler.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts"); // <App.Panel />


function JSXMemberExpressionHandler(node) {
  var dataClosure;

  if (node.object.type == 'JSXIdentifier') {
    dataClosure = this.createClosure({
      type: 'Identifier',
      name: node.object.name
    });
  } else if (node.object.type == 'JSXMemberExpression') {
    dataClosure = this.createClosure(node.object);
  } else {
    // @ts-ignore
    throw this.createInternalThrowError(Message_1.Messages.NormalError, 'unknown jsxmember type ' + node.object.type, node);
  } // jsx中的组件名key不存在computed的情况，例如：<App[name] />
  // 只可能是<App.panel />，name不需要动态计算，所以直接返回字符串的字面量即可


  var keyClosure = function keyClosure() {
    return node.property.name;
  };

  return function () {
    var data = dataClosure();
    var key = keyClosure();
    return data[key];
  };
}

exports.JSXMemberExpressionHandler = JSXMemberExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/JSXSpreadAttributeHandler.ts":
/*!****************************************************************!*\
  !*** ./src/Model/Closure/handler/JSXSpreadAttributeHandler.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // <App {...props} />

function JSXSpreadAttributeHandler(node) {
  return this.createClosure({
    type: 'ObjectExpression',
    properties: [{
      // @ts-ignore
      type: 'SpreadElement',
      // @ts-ignore
      argument: node.argument
    }]
  });
}

exports.JSXSpreadAttributeHandler = JSXSpreadAttributeHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/JSXTextHandler.ts":
/*!*****************************************************!*\
  !*** ./src/Model/Closure/handler/JSXTextHandler.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // <div>\n   "hello" </div>  ->  JSXText: "\n    \"hello\" "

function JSXTextHandler(node) {
  var val = node.value.trim();

  var closure = function closure() {
    return val || null;
  };

  return function () {
    return closure();
  };
}

exports.JSXTextHandler = JSXTextHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/LogicalExpression.ts":
/*!********************************************************!*\
  !*** ./src/Model/Closure/handler/LogicalExpression.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts"); // a && b


function logicalExpressionHandler(node) {
  var _this = this;

  var leftExpression = this.createClosure(node.left);
  var rightExpression = this.createClosure(node.right);
  return function () {
    switch (node.operator) {
      case "||":
        return leftExpression() || rightExpression();

      case "&&":
        return leftExpression() && rightExpression();

      default:
        throw _this.createInternalThrowError(Message_1.Messages.LogicalOperatorSyntaxError, node.operator, node);
    }
  };
}

exports.logicalExpressionHandler = logicalExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/UnaryExpression.ts":
/*!******************************************************!*\
  !*** ./src/Model/Closure/handler/UnaryExpression.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts");

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts"); // typeof a !a()


function unaryExpressionHandler(node) {
  var _this = this;

  switch (node.operator) {
    case "delete":
      var objectGetter = this.createObjectGetter(node.argument);
      var nameGetter = this.createNameGetter(node.argument);
      return function () {
        // not allowed to delete root scope property
        // rootContext has move to prototype chai, so no judgment required
        // if (this.isRootScope(node.argument)) {
        // 	return false;
        // }
        var obj = objectGetter();
        var name = nameGetter();
        return delete obj[name];
      };

    default:
      var expression; // for typeof undefined var
      // typeof adf9ad

      if (node.operator === "typeof" && node.argument.type === "Identifier") {
        var _objectGetter = this.createObjectGetter(node.argument);

        var _nameGetter = this.createNameGetter(node.argument);

        expression = function expression() {
          return _objectGetter()[_nameGetter()];
        };
      } else {
        expression = this.createClosure(node.argument);
      }

      return function () {
        var value = expression();

        switch (node.operator) {
          case "-":
            return -value;

          case "+":
            return +value;

          case "!":
            return !value;

          case "~":
            return ~value;

          case "void":
            return void value;

          case "typeof":
            if (Symbols_1.isSymbol(value)) {
              return 'symbol';
            }

            return typeof value;

          default:
            throw _this.createInternalThrowError(Message_1.Messages.UnaryOperatorSyntaxError, node.operator, node);
        }
      };
  }
}

exports.unaryExpressionHandler = unaryExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/arrayExpressionHandler.ts":
/*!*************************************************************!*\
  !*** ./src/Model/Closure/handler/arrayExpressionHandler.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts"); // [1,2,3]


function arrayExpressionHandler(node) {
  var _this = this;

  //fix: [,,,1,2]
  var items = node.elements.map(function (element) {
    if (!element) return null;
    return {
      type: element.type,
      // @ts-ignore
      closure: element.type == 'SpreadElement' ? _this.createClosure(element.argument) : _this.createClosure(element)
    };
  });
  return function () {
    var MArray = _this.globalScope.data['Array'];
    var len = items.length;
    var result = new MArray();

    for (var i = 0; i < len; i++) {
      var item = items[i];

      if (!item) {
        result.push(undefined);
      } else {
        if (item.type == 'SpreadElement') {
          var arr = item.closure();

          if (!Array.isArray(arr)) {
            throw _this.createInternalThrowError(Message_1.Messages.NormalError, 'cannot spread, not an array type', node);
          }

          result = result.concat(arr);
        } else {
          result.push(item.closure());
        }
      }
    }

    return result;
  };
}

exports.arrayExpressionHandler = arrayExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/arrowFunctionExpressionHandler.ts":
/*!*********************************************************************!*\
  !*** ./src/Model/Closure/handler/arrowFunctionExpressionHandler.ts ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var util_1 = __webpack_require__(/*! ../../../util */ "./src/util/index.ts"); // var f = function() {...}
// 在es5的标准下，没有块级作用域，只会在function下会创建一个新的scope。所以这里的操作和evaluate的感觉差不多


function arrowFunctionExpressionHandler(node) {
  var _this = this;

  var source = this.source;
  var oldDeclVars = this.collectDeclVars;
  var oldDeclFuncs = this.collectDeclFuncs;
  var oldDeclLex = this.collectDeclLex; // 准备新scope的声明提升变量

  this.collectDeclVars = Object.create(null);
  this.collectDeclFuncs = Object.create(null);
  this.collectDeclLex = [];
  var name = 'anonymous_arrow_func';
  /**anonymous*/

  var paramLength = node.params.length;
  var paramsGetter = node.params.map(function (param) {
    return {
      type: param.type,
      closure: _this.createParamNameGetter(param)
    };
  });
  this.blockDeclareStart(); // set scope
  // @ts-ignore

  var bodyClosure = this.createClosure(node.expression === true ? {
    type: 'GroupStatement',
    body: [{
      type: 'ReturnStatement',
      argument: node.body
    }]
  } : node.body);
  var lexDecls = this.blockDeclareEnd(); // 这里是准备好的变量和函数声明提升

  var declVars = this.collectDeclVars;
  var declFuncs = this.collectDeclFuncs;
  var declLex = this.collectDeclLex;
  this.collectDeclVars = oldDeclVars;
  this.collectDeclFuncs = oldDeclFuncs;
  this.collectDeclLex = oldDeclLex; // 创建一个新的scope，然后返回一个函数，该函数会在新建的scope执行

  return function () {
    // bind current scope
    // 箭头函数的scope和context都是在函数声明的时候就确定了。
    var runtimeScope = _this.getCurrentScope();

    var ctx = _this.getCurrentContext();

    var func = function func() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this.callStack.push("" + name);

      var prevScope = _this.getCurrentScope(); // 函数执行时，创建新的scope，然后下一行将程序的运行指针指向新的scope


      var currentScope = Scope_1.createScope(runtimeScope, "FunctionScope(" + name + ")");
      currentScope.lexDeclared = lexDecls;

      _this.setCurrentScope(currentScope); // 将准备好的变量和函数声明赋值到新的scope


      _this.addDeclarationsToScope(declVars, declFuncs, currentScope); // var t = function(){ typeof t } // function
      // t = function(){ typeof t } // function
      // z = function tx(){ typeof tx } // function
      // but
      // d = { say: function(){ typeof say } } // undefined
      // arrow-function has no 'arguments'
      // currentScope.data["arguments"] = arguments;


      paramsGetter.forEach(function (getter, i) {
        if (getter.type === 'RestElement') {
          currentScope.data[getter.closure()] = args.slice(i);
        } else {
          currentScope.data[getter.closure()] = args[i];
        }
      }); // init this

      var prevContext = _this.getCurrentContext(); //for ThisExpression


      _this.setCurrentContext(ctx); // 执行


      var result = bodyClosure(); // 恢复

      _this.setCurrentContext(prevContext);

      _this.setCurrentScope(prevScope);

      _this.callStack.pop();

      if (result instanceof TokenClass_1.Return) {
        return result.value;
      }
    }; // todo: let foo = ()=>{}, foo.name==='foo'


    util_1.defineFunctionName(func, name); // arrow-func has no .length
    // Object.defineProperty(func, "length", {
    //     value: paramLength,
    //     writable: false,
    //     enumerable: false,
    //     configurable: true,
    // });

    Object.defineProperty(func, "toString", {
      value: function value() {
        return source.slice(node.start, node.end);
      },
      writable: true,
      configurable: true,
      enumerable: false
    });
    Object.defineProperty(func, "valueOf", {
      value: function value() {
        return source.slice(node.start, node.end);
      },
      writable: true,
      configurable: true,
      enumerable: false
    });
    return func;
  };
}

exports.arrowFunctionExpressionHandler = arrowFunctionExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/assignmentExpressionHandler.ts":
/*!******************************************************************!*\
  !*** ./src/Model/Closure/handler/assignmentExpressionHandler.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts");

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts"); // a=1 a+=2


function assignmentExpressionHandler(node) {
  var _this = this;

  // var s = function(){}
  // s.name === s
  if (node.left.type === "Identifier" && node.right.type === "FunctionExpression" && !node.right.id) {
    node.right.id = {
      type: "Identifier",
      name: node.left.name
    };
  }

  var dataGetter = this.createLeftObjectGetter(node.left);
  var nameGetter = this.createNameGetter(node.left);
  var rightValueGetter = this.createClosure(node.right);
  return function () {
    var MArray = _this.globalScope.data['Array']; // dataGetter执行时，判断如果是const且已经初始化，会报错

    var data = dataGetter();
    var name = nameGetter();
    var realName;

    if (Symbols_1.isSymbol(name)) {
      realName = Symbols_1.storeKey(name);
    } else {
      realName = name;
    }

    var rightValue = rightValueGetter();

    if (node.operator !== "=") {
      // if a is undefined
      // a += 1
      _this.assertVariable(data, name, node);
    }

    switch (node.operator) {
      case "=":
        if (Symbols_1.isSymbol(name)) {
          Object.defineProperty(data, realName, {
            value: rightValue,
            writable: true,
            enumerable: false,
            configurable: true
          });
          return rightValue;
        } else {
          return updateValue(MArray, data, realName, rightValue); // return (data[realName] = rightValue);
        }

      case "+=":
        return updateValue(MArray, data, realName, data[realName] + rightValue);
      // return (data[realName] += rightValue);

      case "-=":
        return updateValue(MArray, data, realName, data[realName] - rightValue);
      // return (data[realName] -= rightValue);

      case "*=":
        return updateValue(MArray, data, realName, data[realName] * rightValue);
      // return (data[realName] *= rightValue);
      // case "**=":
      // data[name]: Getter may be triggered
      // 	return (data[name] = Math.pow(data[name], rightValue));

      case "/=":
        return updateValue(MArray, data, realName, data[realName] / rightValue);
      // return (data[realName] /= rightValue);

      case "%=":
        return updateValue(MArray, data, realName, data[realName] % rightValue);
      // return (data[realName] %= rightValue);

      case "<<=":
        return updateValue(MArray, data, realName, data[realName] << rightValue);
      // return (data[realName] <<= rightValue);

      case ">>=":
        return updateValue(MArray, data, realName, data[realName] >> rightValue);
      // return (data[realName] >>= rightValue);

      case ">>>=":
        return updateValue(MArray, data, realName, data[realName] >>> rightValue);
      // return (data[realName] >>>= rightValue);

      case "&=":
        return updateValue(MArray, data, realName, data[realName] & rightValue);
      // return (data[realName] &= rightValue);

      case "^=":
        return updateValue(MArray, data, realName, data[realName] ^ rightValue);
      // return (data[realName] ^= rightValue);

      case "|=":
        return updateValue(MArray, data, realName, data[realName] | rightValue);
      // return (data[realName] |= rightValue);

      default:
        throw _this.createInternalThrowError(Message_1.Messages.AssignmentExpressionSyntaxError, node.type, node);
    }
  };
}

exports.assignmentExpressionHandler = assignmentExpressionHandler;

function updateValue(MArray, data, name, value) {
  return data[name] = value;
}

/***/ }),

/***/ "./src/Model/Closure/handler/breakStatementHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/breakStatementHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

function breakStatementHandler(node) {
  return function () {
    return node.label ? new TokenClass_1.BreakLabel(node.label.name) : Symbols_1.Break;
  };
}

exports.breakStatementHandler = breakStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/callExpressionHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/callExpressionHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // func()

function callExpressionHandler(node) {
  var _this = this;

  var funcGetter = this.createCallFunctionGetter(node.callee);
  var argsGetter = node.arguments.map(function (arg) {
    return {
      type: arg.type,
      closure: _this.createClosure(arg)
    };
  });
  return function () {
    var args = [];

    for (var i = 0; i < argsGetter.length; i++) {
      var arg = argsGetter[i];

      if (arg.type === 'SpreadElement') {
        args = args.concat(arg.closure());
      } else {
        args.push(arg.closure());
      }
    }

    return funcGetter().apply(void 0, args);
  };
}

exports.callExpressionHandler = callExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/classDeclarationHandler.ts":
/*!**************************************************************!*\
  !*** ./src/Model/Closure/handler/classDeclarationHandler.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts"); // class Test {...}


function classDeclarationHandler(node) {
  var _this = this;

  var className;
  var classClosure; // class的作用域是块级作用域

  if (node.id) {
    classClosure = this.classExpressionHandler(node);
    var stackTop = this.collectDeclLex[this.collectDeclLex.length - 1];
    stackTop && (stackTop[node.id.name] = {
      init: false,
      kind: 'let'
    });
    className = node.id.name;
  }

  return function () {
    if (className) {
      var scope = _this.getCurrentScope();

      scope.lexDeclared[className].init = true;
      scope.data[className] = classClosure();
    }

    return Symbols_1.EmptyStatementReturn;
  };
}

exports.classDeclarationHandler = classDeclarationHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/classExpressionHandler.ts":
/*!*************************************************************!*\
  !*** ./src/Model/Closure/handler/classExpressionHandler.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts");

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts");

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var _extendStatics = function extendStatics(d, b) {
  _extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  return _extendStatics(d, b);
};

function __extend(child, father) {
  _extendStatics(child, father);

  function __() {
    this.constructor = father;
  }

  child.prototype = father === null ? Object.create(father) : (__.prototype = father.prototype, new __());
}

;

function classExpressionHandler(node) {
  var _this2 = this;

  var className = node.id ? node.id.name : "";
  /**anonymous*/
  // @ts-ignore

  var classDecl = {
    static: [],
    fieldsArrow: [],
    fieldsProperty: [],
    method: []
  };
  var superClass = node.superClass ? this.createClosure(node.superClass) : null;
  node.body.body.forEach(function (item) {
    if (item.type === 'MethodDefinition') {
      // 关注3个属性：kind\static\computed
      if (item.kind === 'constructor') {
        classDecl.cons = _this2.createClosure(item.value);
      } else if (item.kind === 'method') {
        classDecl[item.static ? 'static' : 'method'].push({
          name: {
            computed: item.computed,
            // @ts-ignore
            value: item.computed ? _this2.createClosure(item.key) : item.key.name
          },
          value: _this2.createClosure(item.value)
        });
      } else if (item.kind === 'get' || item.kind === 'set') {
        // 类的setter和getter不支持
        throw _this2.createInternalThrowError(Message_1.Messages.NormalError, 'not support getter and setter in class', node);
      }
    } else if (item.type === 'FieldDefinition') {
      // 关注static\computed
      if (item.static) {
        classDecl.static.push({
          name: {
            computed: item.computed,
            // @ts-ignore
            value: item.computed ? _this2.createClosure(item.key) : item.key.name
          },
          value: _this2.createClosure(item.value)
        });
      } else {
        // 如果是箭头函数，需要特殊自绑定，其余的（属性或者function函数），不用做处理
        // @ts-ignore
        var t = item.value.type == 'ArrowFunctionExpression' ? 'fieldsArrow' : 'fieldsProperty';
        classDecl[t].push({
          name: {
            computed: item.computed,
            // @ts-ignore
            value: item.computed ? _this2.createClosure(item.key) : item.key.name
          },
          value: _this2.createClosure(item.value)
        });
      }
    } else {
      throw _this2.createInternalThrowError(Message_1.Messages.NormalError, 'unknown class body type ' + item.type, node.body);
    }
  });
  return function () {
    var self = _this2;

    var _super = superClass ? superClass() : null;

    var cons; // 如果存在父类，并且有显示的constructor声明时，构建构造方法的时候要注入super变量

    if (_super && classDecl.cons) {
      var newScope = Scope_1.createScope(_this2.getCurrentScope(), "FScope(constructor)", 'block');
      newScope.lexDeclared = {
        super: {
          kind: 'const',
          init: true
        }
      };
      newScope.data['super'] = _super;

      var prevScope = _this2.entryBlockScope(newScope);

      cons = classDecl.cons();

      _this2.setCurrentScope(prevScope);
    } else {
      cons = classDecl.cons ? classDecl.cons() : null;
    }

    var func = function func() {
      var _this = this;

      if (superClass && !cons) {
        _this = _super.call(_this) || _this;
      } // 先绑定field属性，再执行constructor


      classDecl.fieldsArrow.forEach(function (item) {
        // @ts-ignore
        var prev = self.getCurrentContext(); // @ts-ignore

        self.setCurrentContext(_this);
        var fn = item.value(); // @ts-ignore

        self.setCurrentContext(prev);
        setKeyVal(_this, item, fn); // _this[item.name.computed?(item.name.value as BaseClosure)():item.name.value] = fn
      });
      classDecl.fieldsProperty.forEach(function (item) {
        setKeyVal(_this, item, item.value()); // _this[item.name.computed?(item.name.value as BaseClosure)():item.name.value] = item.value()
      });

      if (cons) {
        cons.apply(_this, arguments);
      }

      return _this;
    };

    superClass && __extend(func, _super);
    classDecl.method.forEach(function (item) {
      func.prototype[item.name.computed ? item.name.value() : item.name.value] = item.value();
    });
    classDecl.static.forEach(function (item) {
      func[item.name.computed ? item.name.value() : item.name.value] = item.value();
    });

    if (className) {
      Object.defineProperty(func, "name", {
        value: className,
        writable: false,
        enumerable: false,
        configurable: true
      });
    }

    return func;
  };
}

exports.classExpressionHandler = classExpressionHandler;

function setKeyVal(_this, item, val) {
  var keyval;
  var sbl = false;

  if (item.name.computed) {
    var t = item.name.value();

    if (Symbols_1.isSymbol(t)) {
      sbl = true;
      keyval = Symbols_1.storeKey(t);
    } else {
      keyval = t;
    }
  } else {
    keyval = item.name.value;
  }

  if (sbl) {
    Object.defineProperty(_this, keyval, {
      value: val,
      writable: true,
      enumerable: false,
      configurable: true
    });
  } else {
    _this[keyval] = val;
  }
}

/***/ }),

/***/ "./src/Model/Closure/handler/conditionalExpressionHandler.ts":
/*!*******************************************************************!*\
  !*** ./src/Model/Closure/handler/conditionalExpressionHandler.ts ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // test() ? true : false

function conditionalExpressionHandler(node) {
  return this.ifStatementHandler(node);
}

exports.conditionalExpressionHandler = conditionalExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/continueStatementHandler.ts":
/*!***************************************************************!*\
  !*** ./src/Model/Closure/handler/continueStatementHandler.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

function continueStatementHandler(node) {
  return function () {
    return node.label ? new TokenClass_1.ContinueLabel(node.label.name) : Symbols_1.Continue;
  };
}

exports.continueStatementHandler = continueStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/debuggerStatementHandler.ts":
/*!***************************************************************!*\
  !*** ./src/Model/Closure/handler/debuggerStatementHandler.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

function debuggerStatementHandler(node) {
  return function () {
    debugger;
    return Symbols_1.EmptyStatementReturn;
  };
}

exports.debuggerStatementHandler = debuggerStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/doWhileStatementHandler.ts":
/*!**************************************************************!*\
  !*** ./src/Model/Closure/handler/doWhileStatementHandler.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function doWhileStatementHandler(node) {
  return this.forStatementHandler(node);
}

exports.doWhileStatementHandler = doWhileStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/emptyStatementHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/emptyStatementHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

function emptyStatementHandler(node) {
  return function () {
    return Symbols_1.EmptyStatementReturn;
  };
}

exports.emptyStatementHandler = emptyStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/expressionStatementHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/Model/Closure/handler/expressionStatementHandler.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // all expression: a+1 a&&b a() a.b ...

function expressionStatementHandler(node) {
  return this.createClosure(node.expression);
}

exports.expressionStatementHandler = expressionStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/forInStatementHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/forInStatementHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts"); // for(x in xx){}


function forInStatementHandler(node) {
  var _this = this;

  // for( k in obj) or for(o.k in obj) ...
  var left = node.left;
  var rightClosure = this.createClosure(node.right);

  var getBodyClosure = function getBodyClosure() {
    if (node.body.type == 'BlockStatement') {
      // node.body是个blockStatement，这里我们就不多此一举再去检测块作用域了。
      return {
        needBlock: null,
        closure: _this.createClosure(node.body)
      };
    } else {
      _this.blockDeclareStart();

      var closure = _this.createClosure(node.body);

      var bodyLex = _this.blockDeclareEnd();

      return {
        needBlock: bodyLex,
        closure: closure
      };
    }
  }; // for(let k in obj) {...}


  var initClosure;
  var initLexDecl;

  if (node.left.type === "VariableDeclaration") {
    this.blockDeclareStart();
    initClosure = this.createClosure(node.left);
    initLexDecl = this.blockDeclareEnd();

    if (!initLexDecl) {
      // 初始化参数是var，直接初始化即可
      initClosure();
      initClosure = null;
    } else {} // 初始化参数是let，等到执行时创建scope后再初始化
    // reset left
    // for( k in obj)


    left = node.left.declarations[0].id;
  } else {} // for-in执行流程的优化，请查看 https://github.com/IAIAE/estime/issues/1


  return function (pNode) {
    var labelName;
    var result = Symbols_1.EmptyStatementReturn;
    var x;

    if (pNode && pNode.type === "LabeledStatement") {
      labelName = pNode.label.name;
    }

    var prevScope;
    var newScope;

    if (initLexDecl) {
      newScope = Scope_1.createScope(_this.getCurrentScope(), "BScope(forin-let)", "block");
      newScope.lexDeclared = initLexDecl;
      prevScope = _this.entryBlockScope(newScope);
    }

    var data = rightClosure();

    for (x in data) {
      if (Array.isArray(data) && x == 'constructor') {
        continue;
      }

      if (initLexDecl) {
        // 将所有声明变量的初始化改为false，重新赋值
        Object.getOwnPropertyNames(newScope.lexDeclared).forEach(function (name) {
          newScope.lexDeclared[name].init = false;
        });

        _this.variableDeclarationHandler({
          type: "VariableDeclaration",
          kind: node.left.kind,
          declarations: [{
            type: "VariableDeclarator",
            id: node.left.declarations[0].id,
            init: {
              type: "Literal",
              value: x
            }
          }]
        })();
      } else {
        // assign left to scope
        // k = x
        // o.k = x
        // 对于迭代变量的赋值应该在bodyScope之外
        _this.assignmentExpressionHandler({
          type: "AssignmentExpression",
          operator: "=",
          left: left,
          right: {
            type: "Literal",
            value: x
          }
        })();
      }

      var bodyClosure = getBodyClosure();
      var bodyPrev = void 0;
      var bodyScope = void 0; // 对于for循环，每次执行body都需要绑定新的scope，这么来说确实效率会慢很多

      if (bodyClosure.needBlock) {
        bodyScope = Scope_1.createScope(_this.getCurrentScope(), 'BScope(forin-body)', 'block');
        bodyScope.lexDeclared = bodyClosure.needBlock;
        bodyPrev = _this.entryBlockScope(bodyScope);
      } // save last value


      var ret = _this.setValue(bodyClosure.closure()); // 恢复


      if (bodyClosure.needBlock) {
        _this.setCurrentScope(bodyPrev);
      } // notice: never return Break or Continue!


      if (ret === Symbols_1.EmptyStatementReturn || ret === Symbols_1.Continue) continue;

      if (ret === Symbols_1.Break) {
        break;
      }

      result = ret; // stop continue label

      if (result instanceof TokenClass_1.ContinueLabel && result.value === labelName) {
        result = Symbols_1.EmptyStatementReturn;
        continue;
      }

      if (result instanceof TokenClass_1.Return || result instanceof TokenClass_1.BreakLabel || result instanceof TokenClass_1.ContinueLabel) {
        break;
      }
    } // 恢复


    if (initLexDecl) {
      _this.setCurrentScope(prevScope);
    }

    return result;
  };
}

exports.forInStatementHandler = forInStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/forOfStatementHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/forOfStatementHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts");

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts"); // for(x of xx){}


function forOfStatementHandler(node) {
  var _this = this;

  // for( k of obj) or for(o.k of obj) ...
  var left = node.left;
  var rightClosure = this.createClosure(node.right);

  var getBodyClosure = function getBodyClosure() {
    if (node.body.type == 'BlockStatement') {
      // node.body是个blockStatement，这里我们就不多此一举再去检测块作用域了。
      return {
        needBlock: null,
        closure: _this.createClosure(node.body)
      };
    } else {
      _this.blockDeclareStart();

      var closure = _this.createClosure(node.body);

      var bodyLex = _this.blockDeclareEnd();

      return {
        needBlock: bodyLex,
        closure: closure
      };
    }
  }; // for-of的逻辑是：1、先检查有没有Symbol.iterator方法，有的话，调用获取迭代器
  // 2、如果没有检查是否是Array，是的话for循环取元素
  // 3、以上都不是，报错。例如传一个obj进来，是要报错的
  // for(let k of obj) {...}


  var initClosure;
  var initLexDecl;

  if (node.left.type === "VariableDeclaration") {
    this.blockDeclareStart();
    initClosure = this.createClosure(node.left);
    initLexDecl = this.blockDeclareEnd();

    if (!initLexDecl) {
      // 初始化参数是var，直接初始化即可
      initClosure();
      initClosure = null;
    } else {} // 初始化参数是let，等到执行时创建scope后再初始化
    // reset left


    left = node.left.declarations[0].id;
  } else {}

  return function (pNode) {
    var labelName;
    var result = Symbols_1.EmptyStatementReturn;

    if (pNode && pNode.type === "LabeledStatement") {
      labelName = pNode.label.name;
    }

    var Smbl = _this.globalScope.data['Symbol'];
    var MArray = _this.globalScope.data['Array'];
    var prevScope;
    var newScope;

    if (initLexDecl) {
      newScope = Scope_1.createScope(_this.getCurrentScope(), "BScope(forof-let)", "block");
      newScope.lexDeclared = initLexDecl;
      prevScope = _this.entryBlockScope(newScope);
    }

    var data = rightClosure();

    if (data[Symbols_1.storeKey(Smbl.iterator)] && typeof data[Symbols_1.storeKey(Smbl.iterator)] == 'function') {
      var iter = data[Symbols_1.storeKey(Smbl.iterator)]();
      var val = iter.next();

      while (val && !val.done) {
        var t = loopBody.call(_this, function (_) {
          result = _;
        }, initLexDecl, newScope, node, left, labelName, getBodyClosure, val.value);

        if (t === 'break') {
          break;
        }

        val = iter.next();
      }
    } else if (Array.isArray(data)) {
      for (var i = 0; i < data.length; i++) {
        var _t = loopBody.call(_this, function (_) {
          result = _;
        }, initLexDecl, newScope, node, left, labelName, getBodyClosure, data[i]);

        if (_t === 'break') {
          break;
        }
      }
    } else {
      throw _this.createInternalThrowError(Message_1.Messages.VariableNotIterableError, '', node);
    } // 恢复


    if (initLexDecl) {
      _this.setCurrentScope(prevScope);
    }

    return result;
  };
}

exports.forOfStatementHandler = forOfStatementHandler;

function loopBody(setResult, initLexDecl, newScope, node, left, labelName, getBodyClosure, rightVal) {
  if (initLexDecl) {
    // 将所有声明变量的初始化改为false，重新赋值
    Object.getOwnPropertyNames(newScope.lexDeclared).forEach(function (name) {
      newScope.lexDeclared[name].init = false;
    });
    this.variableDeclarationHandler({
      type: "VariableDeclaration",
      kind: node.left.kind,
      declarations: [{
        type: "VariableDeclarator",
        id: node.left.declarations[0].id,
        init: {
          type: "Literal",
          value: rightVal
        }
      }]
    })();
  } else {
    // assign left to scope
    // k = x
    // o.k = x
    // 对于迭代变量的赋值应该在bodyScope之外
    this.assignmentExpressionHandler({
      type: "AssignmentExpression",
      operator: "=",
      left: left,
      right: {
        type: "Literal",
        value: rightVal
      }
    })();
  }

  var bodyClosure = getBodyClosure();
  var bodyPrev;
  var bodyScope; // 对于for循环，每次执行body都需要绑定新的scope，这么来说确实效率会慢很多

  if (bodyClosure.needBlock) {
    bodyScope = Scope_1.createScope(this.getCurrentScope(), 'BScope(forin-body)', 'block');
    bodyScope.lexDeclared = bodyClosure.needBlock;
    bodyPrev = this.entryBlockScope(bodyScope);
  } // save last value


  var ret = this.setValue(bodyClosure.closure()); // 恢复

  if (bodyClosure.needBlock) {
    this.setCurrentScope(bodyPrev);
  } // notice: never return Break or Continue!


  if (ret === Symbols_1.EmptyStatementReturn || ret === Symbols_1.Continue) return 'continue';

  if (ret === Symbols_1.Break) {
    return 'break';
  }

  setResult(ret); // stop continue label

  if (ret instanceof TokenClass_1.ContinueLabel && ret.value === labelName) {
    setResult(Symbols_1.EmptyStatementReturn);
    return 'continue';
  }

  if (ret instanceof TokenClass_1.Return || ret instanceof TokenClass_1.BreakLabel || ret instanceof TokenClass_1.ContinueLabel) {
    return 'break';
  }

  return;
}

/***/ }),

/***/ "./src/Model/Closure/handler/forStatementHandler.ts":
/*!**********************************************************!*\
  !*** ./src/Model/Closure/handler/forStatementHandler.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(/*! ../../../util */ "./src/util/index.ts");

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts"); // for(var i = 0; i < 10; i++) {...}


function forStatementHandler(node) {
  var _this = this;

  var initClosure = util_1.noop;
  var testClosure = node.test ? this.createClosure(node.test) : function () {
    return true;
  };
  var updateClosure = util_1.noop;
  var initLexDeclared;

  var getBodyClosure = function getBodyClosure() {
    if (node.body.type == 'BlockStatement') {
      // node.body是个blockStatement，这里我们就不多此一举再去检测块作用域了。
      return {
        needBlock: null,
        closure: _this.createClosure(node.body)
      };
    } else {
      _this.blockDeclareStart();

      var closure = _this.createClosure(node.body);

      var bodyLex = _this.blockDeclareEnd();

      return {
        needBlock: bodyLex,
        closure: closure
      };
    }
  };

  if (node.type === "ForStatement") {
    if (node.init) {
      this.blockDeclareStart();
      initClosure = this.createClosure(node.init);
      initLexDeclared = this.blockDeclareEnd();
    }

    updateClosure = node.update ? this.createClosure(node.update) : util_1.noop;
  } else {// while, do-while
  }

  return function (pNode) {
    var labelName;
    var result = Symbols_1.EmptyStatementReturn;
    var shouldInitExec = node.type === "DoWhileStatement";

    if (pNode && pNode.type === "LabeledStatement") {
      labelName = pNode.label.name;
    }

    var prevScope;
    var newScope;

    if (initLexDeclared) {
      newScope = Scope_1.createScope(_this.getCurrentScope(), "BScope(for-let)", "block");
      newScope.lexDeclared = initLexDeclared;
      prevScope = _this.entryBlockScope(newScope);
    }

    for (initClosure(); shouldInitExec || testClosure(); updateClosure()) {
      shouldInitExec = false;
      var bodyClosure = getBodyClosure();
      var bodyPrev = void 0;
      var bodyScope = void 0;

      if (bodyClosure.needBlock) {
        bodyScope = Scope_1.createScope(_this.getCurrentScope(), "BScope(for-body)", "block");
        bodyScope.lexDeclared = bodyClosure.needBlock;
        bodyPrev = _this.entryBlockScope(bodyScope);
      } // save last value


      var ret = _this.setValue(bodyClosure.closure()); // 恢复作用域


      if (bodyClosure.needBlock) {
        _this.setCurrentScope(bodyPrev);
      } // notice: never return Break or Continue!


      if (ret === Symbols_1.EmptyStatementReturn || ret === Symbols_1.Continue) continue;

      if (ret === Symbols_1.Break) {
        break;
      }

      result = ret; // stop continue label

      if (result instanceof TokenClass_1.ContinueLabel && result.value === labelName) {
        result = Symbols_1.EmptyStatementReturn;
        continue;
      }

      if (result instanceof TokenClass_1.Return || result instanceof TokenClass_1.BreakLabel || result instanceof TokenClass_1.ContinueLabel) {
        break;
      }
    }

    if (initLexDeclared) {
      _this.setCurrentScope(prevScope);
    }

    return result;
  };
}

exports.forStatementHandler = forStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/functionDeclarationHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/Model/Closure/handler/functionDeclarationHandler.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts"); // function test(){}


function functionDeclarationHandler(node) {
  var _this = this;

  var functionClosure;
  var functionName;

  if (node.id) {
    functionClosure = this.functionExpressionHandler(node);
    Object.defineProperty(functionClosure, "isFunctionDeclareClosure", {
      value: true,
      writable: false,
      configurable: false,
      enumerable: false
    });
    functionName = node.id.name; // 函数编译期间，函数名提升为undefined。在声明执行时才确认函数体
    // 参见issue： https://github.com/IAIAE/estime/issues/4
    // @ts-ignore

    this.funcDeclaration(node.id.name, undefined); // this.funcDeclaration(node.id.name, functionClosure);
  }

  return function () {
    // 函数声明执行的时候再去绑定作用域，以免产生函数执行时作用域错误绑定的情况
    // https://github.com/IAIAE/estime/issues/4
    if (functionClosure) {
      if (_this._functionVarScope && (_this._functionVarScope.data[functionName] === undefined // 重复声明一个同名的函数，会覆盖的
      || typeof _this._functionVarScope.data[functionName] == 'function')) {
        var theFunc = functionClosure(_this.getCurrentScope());
        _this._functionVarScope.data[functionName] = theFunc;
      }
    }

    return Symbols_1.EmptyStatementReturn;
  };
}

exports.functionDeclarationHandler = functionDeclarationHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/functionExpressionHandler.ts":
/*!****************************************************************!*\
  !*** ./src/Model/Closure/handler/functionExpressionHandler.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var util_1 = __webpack_require__(/*! ../../../util */ "./src/util/index.ts"); // var f = function() {...}
// 在es5的标准下，没有块级作用域，只会在function下会创建一个新的scope。所以这里的操作和evaluate的感觉差不多


function functionExpressionHandler(node) {
  var _this = this;

  var self = this;
  var source = this.source;
  var oldDeclVars = this.collectDeclVars;
  var oldDeclFuncs = this.collectDeclFuncs;
  var oldDeclLex = this.collectDeclLex; // 准备新scope的声明提升变量

  this.collectDeclVars = Object.create(null);
  this.collectDeclFuncs = Object.create(null);
  this.collectDeclLex = [];
  var name = node.id ? node.id.name : "";
  /**anonymous*/
  // 可变参数不计入function.length

  var paramLength = node.params.filter(function (_) {
    return _.type != 'RestElement';
  }).length;
  var paramsGetter = node.params.map(function (param) {
    return {
      type: param.type,
      closure: _this.createParamNameGetter(param)
    };
  });
  this.blockDeclareStart(); // set scope

  var bodyClosure = this.createClosure(node.body);
  var lexDecls = this.blockDeclareEnd(); // 这里是准备好的变量和函数声明提升

  var declVars = this.collectDeclVars;
  var declFuncs = this.collectDeclFuncs;
  var declLex = this.collectDeclLex;
  this.collectDeclVars = oldDeclVars;
  this.collectDeclFuncs = oldDeclFuncs;
  this.collectDeclLex = oldDeclLex; // 创建一个新的scope，然后返回一个函数，该函数会在新建的scope执行
  // @ts-ignore

  return function (scope) {
    // bind current scope
    // 注意一个函数执行时候的作用域，并不是真正调用时候的作用域，而是声明时候代码所在地点的作用域
    // 函数名声明的作用域，等同于var functionName 声明所在的作用域
    var runtimeScope = scope || self.getCurrentScope();

    var func = function func() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      // @ts-ignore
      self.callStack.push("" + name); // @ts-ignore

      var prevScope = self.getCurrentScope(); // @ts-ignore

      var prev_functionVarScope = self._functionVarScope; // 函数执行时，创建新的scope，然后下一行将程序的运行指针指向新的scope

      var currentScope = Scope_1.createScope(runtimeScope, "FunctionScope(" + name + ")");
      currentScope.lexDeclared = lexDecls; // @ts-ignore

      self.setCurrentScope(currentScope); // console.info('the current scope is ', currentScope)
      // 将准备好的变量和函数声明赋值到新的scope
      // @ts-ignore

      self.addDeclarationsToScope(declVars, declFuncs, currentScope); // @ts-ignore

      self._functionVarScope = currentScope; // var t = function(){ typeof t } // function
      // t = function(){ typeof t } // function
      // z = function tx(){ typeof tx } // function
      // but
      // d = { say: function(){ typeof say } } // undefined

      if (name) {
        currentScope.data[name] = func;
      } // init arguments var


      currentScope.data["arguments"] = arguments;
      paramsGetter.forEach(function (getter, i) {
        if (getter.type === 'RestElement') {
          currentScope.data[getter.closure()] = args.slice(i);
        } else {
          currentScope.data[getter.closure()] = args[i];
        }
      }); // init this
      // @ts-ignore

      var prevContext = self.getCurrentContext(); //for ThisExpression
      // @ts-ignore

      self.setCurrentContext(this); // 执行

      var result = bodyClosure(); // 恢复
      // @ts-ignore

      self.setCurrentContext(prevContext); // @ts-ignore

      self.setCurrentScope(prevScope); // @ts-ignore

      self._functionVarScope = prev_functionVarScope; // @ts-ignore

      self.callStack.pop();

      if (result instanceof TokenClass_1.Return) {
        return result.value;
      }
    };

    util_1.defineFunctionName(func, name);
    Object.defineProperty(func, "length", {
      value: paramLength,
      writable: false,
      enumerable: false,
      configurable: true
    });
    Object.defineProperty(func, "toString", {
      value: function value() {
        return source.slice(node.start, node.end);
      },
      writable: true,
      configurable: true,
      enumerable: false
    });
    Object.defineProperty(func, "valueOf", {
      value: function value() {
        return source.slice(node.start, node.end);
      },
      writable: true,
      configurable: true,
      enumerable: false
    });
    return func;
  };
}

exports.functionExpressionHandler = functionExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/groupStatementHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/groupStatementHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var Symbols_2 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts"); // {...} 但是不生成blockScope，组装多个表达式一起执行时，采用这种中间形式的一种数据结构，只有编译器内部使用


function groupStatementHandler(node) {
  var _this = this;

  // const currentScope = this.getCurrentScope();
  // 块级作用域的handler初始化的时候就会遍历下级所有的body，创建closure，创建closure的时候就会完成变量声明提升的操作
  var stmtClosures = node.body.map(function (stmt) {
    // if (stmt.type === "EmptyStatement") return null;
    return _this.createClosure(stmt);
  });
  return function () {
    var result = Symbols_1.EmptyStatementReturn;
    var prevScope;
    var newScope;

    for (var i = 0; i < stmtClosures.length; i++) {
      var stmtClosure = stmtClosures[i]; // save last value

      var ret = _this.setValue(stmtClosure()); // if (!stmtClosure) continue;
      // EmptyStatement


      if (ret === Symbols_1.EmptyStatementReturn) continue;
      result = ret; // BlockStatement: break label;  continue label; for(){ break ... }
      // ReturnStatement: return xx;

      if (result instanceof TokenClass_1.Return || result instanceof TokenClass_1.BreakLabel || result instanceof TokenClass_1.ContinueLabel || result === Symbols_2.Break || result === Symbols_2.Continue) {
        break;
      }
    } // save last value


    return result;
  };
}

exports.groupStatementHandler = groupStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/identifierHandler.ts":
/*!********************************************************!*\
  !*** ./src/Model/Closure/handler/identifierHandler.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // var1 ...

function identifierHandler(node) {
  var _this = this;

  return function () {
    var currentScope = _this.getCurrentScope();

    var data = _this.getScopeDataFromName(node.name, currentScope);

    _this.assertVariable(data, node.name, node);

    return data[node.name];
  };
}

exports.identifierHandler = identifierHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/ifStatementHandler.ts":
/*!*********************************************************!*\
  !*** ./src/Model/Closure/handler/ifStatementHandler.ts ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts"); // if(true){let i = 123;}else{}


function ifStatementHandler(node) {
  var _this = this;

  this.blockDeclareStart();
  var testClosure = this.createClosure(node.test);
  var consequentClosure = this.createClosure(node.consequent);
  var alternateClosure = node.alternate ? this.createClosure(node.alternate) :
  /*!important*/
  function () {
    return Symbols_1.EmptyStatementReturn;
  };
  var lexDeclared = this.blockDeclareEnd();
  return function () {
    var prevScope;
    var newScope;

    if (lexDeclared) {
      newScope = Scope_1.createScope(_this.getCurrentScope(), "BScope(if)", "block");
      newScope.lexDeclared = lexDeclared;
      prevScope = _this.entryBlockScope(newScope);
    }

    var res = testClosure() ? consequentClosure() : alternateClosure(); // 恢复

    if (lexDeclared) {
      _this.setCurrentScope(prevScope);
    }

    return res;
  };
}

exports.ifStatementHandler = ifStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/index.ts":
/*!********************************************!*\
  !*** ./src/Model/Closure/handler/index.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function __export(m) {
  for (var p in m) {
    if (!exports.hasOwnProperty(p)) exports[p] = m[p];
  }
}

Object.defineProperty(exports, "__esModule", {
  value: true
});

__export(__webpack_require__(/*! ./BinaryExpression */ "./src/Model/Closure/handler/BinaryExpression.ts"));

__export(__webpack_require__(/*! ./LogicalExpression */ "./src/Model/Closure/handler/LogicalExpression.ts"));

__export(__webpack_require__(/*! ./UnaryExpression */ "./src/Model/Closure/handler/UnaryExpression.ts"));

__export(__webpack_require__(/*! ./objectExpressionHandler */ "./src/Model/Closure/handler/objectExpressionHandler.ts"));

__export(__webpack_require__(/*! ./updateExpressionHandler */ "./src/Model/Closure/handler/updateExpressionHandler.ts"));

__export(__webpack_require__(/*! ./arrayExpressionHandler */ "./src/Model/Closure/handler/arrayExpressionHandler.ts"));

__export(__webpack_require__(/*! ./callExpressionHandler */ "./src/Model/Closure/handler/callExpressionHandler.ts"));

__export(__webpack_require__(/*! ./newExpressionHandler */ "./src/Model/Closure/handler/newExpressionHandler.ts"));

__export(__webpack_require__(/*! ./memberExpressionHandler */ "./src/Model/Closure/handler/memberExpressionHandler.ts"));

__export(__webpack_require__(/*! ./thisExpressionHandler */ "./src/Model/Closure/handler/thisExpressionHandler.ts"));

__export(__webpack_require__(/*! ./sequenceExpressionHandler */ "./src/Model/Closure/handler/sequenceExpressionHandler.ts"));

__export(__webpack_require__(/*! ./literalHandler */ "./src/Model/Closure/handler/literalHandler.ts"));

__export(__webpack_require__(/*! ./identifierHandler */ "./src/Model/Closure/handler/identifierHandler.ts"));

__export(__webpack_require__(/*! ./assignmentExpressionHandler */ "./src/Model/Closure/handler/assignmentExpressionHandler.ts"));

__export(__webpack_require__(/*! ./functionDeclarationHandler */ "./src/Model/Closure/handler/functionDeclarationHandler.ts"));

__export(__webpack_require__(/*! ./variableDeclarationHandler */ "./src/Model/Closure/handler/variableDeclarationHandler.ts"));

__export(__webpack_require__(/*! ./programHandler */ "./src/Model/Closure/handler/programHandler.ts"));

__export(__webpack_require__(/*! ./expressionStatementHandler */ "./src/Model/Closure/handler/expressionStatementHandler.ts"));

__export(__webpack_require__(/*! ./emptyStatementHandler */ "./src/Model/Closure/handler/emptyStatementHandler.ts"));

__export(__webpack_require__(/*! ./returnStatementHandler */ "./src/Model/Closure/handler/returnStatementHandler.ts"));

__export(__webpack_require__(/*! ./functionExpressionHandler */ "./src/Model/Closure/handler/functionExpressionHandler.ts"));

__export(__webpack_require__(/*! ./ifStatementHandler */ "./src/Model/Closure/handler/ifStatementHandler.ts"));

__export(__webpack_require__(/*! ./conditionalExpressionHandler */ "./src/Model/Closure/handler/conditionalExpressionHandler.ts"));

__export(__webpack_require__(/*! ./forStatementHandler */ "./src/Model/Closure/handler/forStatementHandler.ts"));

__export(__webpack_require__(/*! ./whileStatementHandler */ "./src/Model/Closure/handler/whileStatementHandler.ts"));

__export(__webpack_require__(/*! ./doWhileStatementHandler */ "./src/Model/Closure/handler/doWhileStatementHandler.ts"));

__export(__webpack_require__(/*! ./forInStatementHandler */ "./src/Model/Closure/handler/forInStatementHandler.ts"));

__export(__webpack_require__(/*! ./withStatementHandler */ "./src/Model/Closure/handler/withStatementHandler.ts"));

__export(__webpack_require__(/*! ./throwStatementHandler */ "./src/Model/Closure/handler/throwStatementHandler.ts"));

__export(__webpack_require__(/*! ./tryStatementHandler */ "./src/Model/Closure/handler/tryStatementHandler.ts"));

__export(__webpack_require__(/*! ./continueStatementHandler */ "./src/Model/Closure/handler/continueStatementHandler.ts"));

__export(__webpack_require__(/*! ./breakStatementHandler */ "./src/Model/Closure/handler/breakStatementHandler.ts"));

__export(__webpack_require__(/*! ./switchStatementHandler */ "./src/Model/Closure/handler/switchStatementHandler.ts"));

__export(__webpack_require__(/*! ./labeledStatementHandler */ "./src/Model/Closure/handler/labeledStatementHandler.ts"));

__export(__webpack_require__(/*! ./debuggerStatementHandler */ "./src/Model/Closure/handler/debuggerStatementHandler.ts"));

__export(__webpack_require__(/*! ./groupStatementHandler */ "./src/Model/Closure/handler/groupStatementHandler.ts"));

__export(__webpack_require__(/*! ./arrowFunctionExpressionHandler */ "./src/Model/Closure/handler/arrowFunctionExpressionHandler.ts"));

__export(__webpack_require__(/*! ./objectPatternAssignHandler */ "./src/Model/Closure/handler/objectPatternAssignHandler.ts"));

__export(__webpack_require__(/*! ./spreadElementHandler */ "./src/Model/Closure/handler/spreadElementHandler.ts"));

__export(__webpack_require__(/*! ./forOfStatementHandler */ "./src/Model/Closure/handler/forOfStatementHandler.ts"));

__export(__webpack_require__(/*! ./templateLiteralHandler */ "./src/Model/Closure/handler/templateLiteralHandler.ts"));

__export(__webpack_require__(/*! ./classDeclarationHandler */ "./src/Model/Closure/handler/classDeclarationHandler.ts"));

__export(__webpack_require__(/*! ./classExpressionHandler */ "./src/Model/Closure/handler/classExpressionHandler.ts"));

__export(__webpack_require__(/*! ./JSXElementHandler */ "./src/Model/Closure/handler/JSXElementHandler.ts"));

__export(__webpack_require__(/*! ./JSXMemberExpressionHandler */ "./src/Model/Closure/handler/JSXMemberExpressionHandler.ts"));

__export(__webpack_require__(/*! ./JSXExpressionContainerHandler */ "./src/Model/Closure/handler/JSXExpressionContainerHandler.ts"));

__export(__webpack_require__(/*! ./JSXTextHandler */ "./src/Model/Closure/handler/JSXTextHandler.ts"));

__export(__webpack_require__(/*! ./JSXIdentifierHandler */ "./src/Model/Closure/handler/JSXIdentifierHandler.ts"));

__export(__webpack_require__(/*! ./JSXAttributeHandler */ "./src/Model/Closure/handler/JSXAttributeHandler.ts"));

__export(__webpack_require__(/*! ./JSXSpreadAttributeHandler */ "./src/Model/Closure/handler/JSXSpreadAttributeHandler.ts"));

__export(__webpack_require__(/*! ./superHandler */ "./src/Model/Closure/handler/superHandler.ts"));

/***/ }),

/***/ "./src/Model/Closure/handler/labeledStatementHandler.ts":
/*!**************************************************************!*\
  !*** ./src/Model/Closure/handler/labeledStatementHandler.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts"); // label: xxx


function labeledStatementHandler(node) {
  var _this = this;

  var labelName = node.label.name;
  var bodyClosure = this.createClosure(node.body);
  return function () {
    var result;

    var currentScope = _this.getCurrentScope();

    currentScope.labelStack.push(labelName);
    result = bodyClosure(node); // stop break label

    if (result instanceof TokenClass_1.BreakLabel && result.value === labelName) {
      result = Symbols_1.EmptyStatementReturn;
    }

    currentScope.labelStack.pop();
    return result;
  };
}

exports.labeledStatementHandler = labeledStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/literalHandler.ts":
/*!*****************************************************!*\
  !*** ./src/Model/Closure/handler/literalHandler.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // 1 'name'

function literalHandler(node) {
  return function () {
    if (node.regex) {
      return new RegExp(node.regex.pattern, node.regex.flags);
    }

    return node.value;
  };
}

exports.literalHandler = literalHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/memberExpressionHandler.ts":
/*!**************************************************************!*\
  !*** ./src/Model/Closure/handler/memberExpressionHandler.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts"); // a.b a['b'] arr[1]


function memberExpressionHandler(node) {
  var _this = this;

  var objectGetter = this.createClosure(node.object);
  var keyGetter = this.createMemberKeyGetter(node);
  return function () {
    var MArray = _this.globalScope.data['Array'];
    var obj = objectGetter();
    var key = keyGetter();

    if (Symbols_1.isSymbol(key)) {
      // 对于模拟的Symbol属性，实际存储在了一个特殊的key下面
      return obj[Symbols_1.storeKey(key)];
    } // arr[1]


    return obj[key];
  };
}

exports.memberExpressionHandler = memberExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/newExpressionHandler.ts":
/*!***********************************************************!*\
  !*** ./src/Model/Closure/handler/newExpressionHandler.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _construct2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/construct */ "./node_modules/@babel/runtime/helpers/construct.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts");

var main_1 = __webpack_require__(/*! ../../../interpreter/main */ "./src/interpreter/main.ts");

var util_1 = __webpack_require__(/*! ../../../util */ "./src/util/index.ts"); // new Ctrl()


function newExpressionHandler(node) {
  var _this = this;

  var source = this.source;
  var expression = this.createClosure(node.callee);
  var args = node.arguments.map(function (arg) {
    return _this.createClosure(arg);
  });
  return function () {
    var construct = expression();

    if (!util_1.isFunction(construct) || construct.__IS_EVAL_FUNC) {
      var callee = node.callee;
      var name = source.slice(callee.start, callee.end);
      throw _this.createInternalThrowError(Message_1.Messages.IsNotConstructor, name, node);
    } // new Function(...)


    if (construct.__IS_FUNCTION_FUNC) {
      return construct.apply(void 0, [new main_1.InternalInterpreterReflection(_this)].concat(args.map(function (arg) {
        return arg();
      })));
    }

    return (0, _construct2.default)(construct, args.map(function (arg) {
      return arg();
    }));
  };
}

exports.newExpressionHandler = newExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/objectExpressionHandler.ts":
/*!**************************************************************!*\
  !*** ./src/Model/Closure/handler/objectExpressionHandler.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts");

var util_1 = __webpack_require__(/*! ../../../util */ "./src/util/index.ts");

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts"); // var o = {a: 1, b: 's', get name(){}, set name(){}  ...}


function objectExpressionHandler(node) {
  var _this = this;

  var items = [];

  function getKey(keyNode) {
    if (keyNode.type === "Identifier") {
      // var o = {a:1}
      return keyNode.name;
    } else if (keyNode.type === "Literal") {
      // var o = {"a":1}
      return keyNode.value;
    } else {
      return this.throwError(Message_1.Messages.ObjectStructureSyntaxError, keyNode.type, keyNode);
    }
  } // collect value, getter, and/or setter.


  var properties = Object.create(null);
  var computedProperties = [];
  node.properties.forEach(function (property) {
    if (property.type == 'Property') {
      var kind = property.kind;

      if (!property.computed) {
        var key = getKey(property.key);

        if (!properties[key] || kind === "init") {
          properties[key] = {};
        }

        properties[key][kind] = _this.createClosure(property.value);
        items.push({
          key: key,
          property: property
        });
      } else {
        var keyClosure = _this.createClosure(property.key);

        computedProperties.push({
          keyClosure: keyClosure,
          kind: kind,
          valueClosure: _this.createClosure(property.value)
        });
      }
    } else if (property.type == 'SpreadElement') {
      // ts声明没有这个type，也是醉了
      items.push({
        // @ts-ignore
        spread: _this.createClosure(property.argument)
      });
    }
  });
  return function () {
    var result = {};
    var len = items.length;
    var MArray = _this.globalScope.data['Array']; // 非computed属性。保证顺序

    for (var i = 0; i < len; i++) {
      var item = items[i];

      if (item.key != null) {
        // named property
        var key = item.key;
        var kinds = properties[key];
        var value = kinds.init ? kinds.init() : undefined;
        var getter = kinds.get ? kinds.get() : function () {};
        var setter = kinds.set ? kinds.set() : function (a) {};

        if ("set" in kinds || "get" in kinds) {
          var descriptor = {
            configurable: true,
            enumerable: true,
            get: getter,
            set: setter
          };
          Object.defineProperty(result, key, descriptor);
        } else {
          var property = item.property;
          var kind = property.kind; // set function.name
          // var d = { test(){} }
          // var d = { test: function(){} }

          if (property.key.type === "Identifier" && property.value.type === "FunctionExpression" && kind === "init" && !property.value.id) {
            util_1.defineFunctionName(value, property.key.name);
          }

          result[key] = value;
        }
      } else {
        var _ret = function () {
          // spread object
          var targetObj = item.spread();

          if (targetObj && Array.isArray(targetObj)) {
            for (var _i = 0; _i < targetObj.length; _i++) {
              result[String(_i)] = targetObj[_i];
            }
          } else if (targetObj && typeof targetObj === 'object') {
            // 解构只解构本身的属性，且不会copy不能枚举的和setter，copy的getter也会转换为一个简单的property
            var keys = Object.getOwnPropertyNames(targetObj);
            keys.forEach(function (key) {
              result[key] = targetObj[key];
            });
          } else {
            // 试了一下，在spread element非法的情况下，会忽略而不报错
            return "continue";
          }
        }();

        if (_ret === "continue") continue;
      }
    }

    var prop = {};
    computedProperties.forEach(function (pr) {
      var key = pr.keyClosure();
      var isSb = Symbols_1.isSymbol(key);
      var name = isSb ? Symbols_1.storeKey(key) : key;

      if (!prop[name]) {
        prop[name] = {};
      }

      prop[name][pr.kind] = pr.valueClosure();
      prop[name]['symbol'] = isSb;
    });
    Object.getOwnPropertyNames(prop).forEach(function (name) {
      var item = prop[name];

      if ("set" in item || "get" in item) {
        var _descriptor = {
          configurable: true,
          enumerable: item.symbol ? false : true,
          get: item.get || function () {},
          set: item.set || function (a) {}
        };
        Object.defineProperty(result, name, _descriptor);
      } else {
        if (item.symbol) {
          Object.defineProperty(result, name, {
            value: item.init,
            writable: true,
            enumerable: false,
            configurable: true
          });
        } else {
          result[name] = item.init;
        }
      }
    });
    return result;
  };
}

exports.objectExpressionHandler = objectExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/objectPatternAssignHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/Model/Closure/handler/objectPatternAssignHandler.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts"); // let {name, ...rest} = obj
// let [first, ...rest] = arr


function objectPatternAssignHandler(node) {
  var _this = this;

  // var s = function(){}
  // s.name === s
  if (node.left.type === "Identifier" && node.right.type === "FunctionExpression" && !node.right.id) {
    node.right.id = {
      type: "Identifier",
      name: node.left.name
    };
  }

  var dataGetter = this.createLeftObjectGetter(node.left);
  var nameGetter = this.createNameGetter(node.left);
  var rightValueGetter = this.createClosure(node.right);
  var rightName = node.right.id ? node.right.id.name : 'rightValue';
  var rest = node.rest;
  var copyIndex = node.index;
  var arrRest = node.arrRest;
  return function () {
    // dataGetter执行时，判断如果是const且已经初始化，会报错
    var data = dataGetter();
    var name = nameGetter();
    var rightValue = rightValueGetter();

    if (copyIndex != null) {
      // ArrayPattern let [first, ...rest] = arr
      if (arrRest) {
        // let [...rest] = arr
        if (rightValue.slice && typeof rightValue.slice === 'function') {
          return data[name] = rightValue.slice(copyIndex);
        } else {
          throw _this.createInternalThrowError(Message_1.Messages.NormalError, rightValue + ".slice is not a function");
        }
      } else {
        // let [first, second] = arr
        return data[name] = rightValue[copyIndex];
      }
    } else {
      // ObjectPattern let {name, ...rest} = obj
      if (rest && rest.length) {
        if (!rightValue || typeof rightValue !== 'object') {
          return data[name] = {};
        }

        var res = {};
        Object.getOwnPropertyNames(rightValue).forEach(function (key) {
          if (rest.indexOf(key) == -1) {
            res[key] = rightValue[key];
          }
        });
        return data[name] = res;
      } else {
        return data[name] = rightValue[name];
      }
    }
  };
}

exports.objectPatternAssignHandler = objectPatternAssignHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/programHandler.ts":
/*!*****************************************************!*\
  !*** ./src/Model/Closure/handler/programHandler.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var Symbols_2 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts"); // {...}


function programHandler(node) {
  var _this = this;

  // const currentScope = this.getCurrentScope();
  // 记录当前块级作用域的所有词法变量的声明
  this.blockDeclareStart(); // 块级作用域的handler初始化的时候就会遍历下级所有的body，创建closure，创建closure的时候就会完成变量声明提升的操作

  var stmtClosures = node.body.map(function (stmt) {
    // if (stmt.type === "EmptyStatement") return null;
    return _this.createClosure(stmt);
  });
  var functionDecl = node.body.map(function (_, index) {
    return {
      type: _.type,
      index: index
    };
  }).filter(function (_) {
    return _.type == 'FunctionDeclaration';
  }); // 存放了块级作用域变量的列表

  var lexDeclared = this.blockDeclareEnd();
  return function () {
    var result = Symbols_1.EmptyStatementReturn;
    var prevScope;
    var newScope;

    if (lexDeclared) {
      newScope = Scope_1.createScope(_this.getCurrentScope(), "BScope", "block");
      newScope.lexDeclared = lexDeclared;
      prevScope = _this.entryBlockScope(newScope);
    } // 如果有函数声明，先执行函数声明：


    functionDecl.forEach(function (_) {
      stmtClosures[_.index](); // @ts-ignore


      stmtClosures[_.index] = null;
    });
    stmtClosures = stmtClosures.filter(function (_) {
      return _;
    });

    for (var i = 0; i < stmtClosures.length; i++) {
      var stmtClosure = stmtClosures[i]; // save last value

      var ret = _this.setValue(stmtClosure()); // if (!stmtClosure) continue;
      // EmptyStatement


      if (ret === Symbols_1.EmptyStatementReturn) continue;
      result = ret; // BlockStatement: break label;  continue label; for(){ break ... }
      // ReturnStatement: return xx;

      if (result instanceof TokenClass_1.Return || result instanceof TokenClass_1.BreakLabel || result instanceof TokenClass_1.ContinueLabel || result === Symbols_2.Break || result === Symbols_2.Continue) {
        break;
      }
    } // 恢复


    if (lexDeclared) {
      _this.setCurrentScope(prevScope);
    } // save last value


    return result;
  };
}

exports.programHandler = programHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/returnStatementHandler.ts":
/*!*************************************************************!*\
  !*** ./src/Model/Closure/handler/returnStatementHandler.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var util_1 = __webpack_require__(/*! ../../../util */ "./src/util/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts"); // return xx;


function returnStatementHandler(node) {
  var argumentClosure = node.argument ? this.createClosure(node.argument) : util_1.noop;
  return function () {
    return new TokenClass_1.Return(argumentClosure());
  };
}

exports.returnStatementHandler = returnStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/sequenceExpressionHandler.ts":
/*!****************************************************************!*\
  !*** ./src/Model/Closure/handler/sequenceExpressionHandler.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // var1,var2,...

function sequenceExpressionHandler(node) {
  var _this = this;

  var expressions = node.expressions.map(function (item) {
    return _this.createClosure(item);
  });
  return function () {
    var result;
    var len = expressions.length;

    for (var i = 0; i < len; i++) {
      var expression = expressions[i];
      result = expression();
    }

    return result;
  };
}

exports.sequenceExpressionHandler = sequenceExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/spreadElementHandler.ts":
/*!***********************************************************!*\
  !*** ./src/Model/Closure/handler/spreadElementHandler.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts"); // (...args)


function spreadElementHandler(node) {
  var _this = this;

  var closure = this.createClosure(node.argument);
  return function () {
    var data = closure();
    var MArray = _this.globalScope.data['Array'];

    if (!Array.isArray(data)) {
      throw _this.createInternalThrowError(Message_1.Messages.NormalError, "spread node type not array", node);
    }

    return data;
  };
}

exports.spreadElementHandler = spreadElementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/superHandler.ts":
/*!***************************************************!*\
  !*** ./src/Model/Closure/handler/superHandler.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // super()

function superHandler(node) {
  var _this = this;

  return function () {
    var currentScope = _this.getCurrentScope();

    var data = _this.getScopeDataFromName('super', currentScope); // todo: 其实还要验证是否是自己的super，因为作用域链向上找，可能找到上级的和自己完全不相关的super变量，这种情况不多，先暂缓修复


    _this.assertVariable(data, 'super', node);

    return data['super'];
  };
}

exports.superHandler = superHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/switchStatementHandler.ts":
/*!*************************************************************!*\
  !*** ./src/Model/Closure/handler/switchStatementHandler.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts");

function switchStatementHandler(node) {
  var _this = this;

  var discriminantClosure = this.createClosure(node.discriminant);
  this.blockDeclareStart();
  var caseClosures = node.cases.map(function (item) {
    var testClosure = item.test ? _this.createClosure(item.test) : function () {
      return Symbols_1.DefaultCase;
    };

    var bodyClosure = _this.createClosure({
      // @ts-ignore
      type: "GroupStatement",
      body: item.consequent
    });

    return function () {
      return {
        testClosure: testClosure,
        bodyClosure: bodyClosure
      };
    };
  });
  var blockLexDecl = this.blockDeclareEnd();
  return function () {
    var value = discriminantClosure();
    var match = false;
    var result;
    var ret, defaultCase; // switch执行的时候共用同一个blockscope

    var prevScope;
    var newScope;

    if (blockLexDecl) {
      newScope = Scope_1.createScope(_this.getCurrentScope(), "BScope(switch)", "block");
      newScope.lexDeclared = blockLexDecl;
      prevScope = _this.entryBlockScope(newScope);
    }

    for (var i = 0; i < caseClosures.length; i++) {
      var item = caseClosures[i]();
      var test = item.testClosure();

      if (test === Symbols_1.DefaultCase) {
        defaultCase = item;
        continue;
      }

      if (match || test === value) {
        match = true;
        ret = _this.setValue(item.bodyClosure()); // notice: never return Break!

        if (ret === Symbols_1.EmptyStatementReturn) continue;

        if (ret === Symbols_1.Break) {
          break;
        }

        result = ret;

        if (result instanceof TokenClass_1.Return || result instanceof TokenClass_1.BreakLabel || result instanceof TokenClass_1.ContinueLabel || result === Symbols_1.Continue) {
          break;
        }
      }
    }

    if (!match && defaultCase) {
      ret = _this.setValue(defaultCase.bodyClosure());
      var isEBC = ret === Symbols_1.EmptyStatementReturn || ret === Symbols_1.Break || ret === Symbols_1.Continue; // notice: never return Break or Continue!

      if (!isEBC) {
        result = ret;
      }
    }

    if (blockLexDecl) {
      _this.setCurrentScope(prevScope);
    }

    return result;
  };
}

exports.switchStatementHandler = switchStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/templateLiteralHandler.ts":
/*!*************************************************************!*\
  !*** ./src/Model/Closure/handler/templateLiteralHandler.ts ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function getString(val) {
  if (typeof val === 'string') {
    return val;
  } else if (typeof val.toString === 'function') {
    return val.toString();
  } else {
    return Object.prototype.toString.call(val);
  }
} // `hello ${estime}, test`


function templateLiteralHandler(node) {
  var _this = this;

  var vasGetters = node.expressions.map(function (_) {
    return _this.createClosure(_);
  });
  var strs = node.quasis.map(function (_) {
    return {
      value: _.value,
      tail: _.tail
    };
  });
  return function () {
    var str = '';

    for (var i = 0; i < strs.length; i++) {
      // use cooked or raw??
      str += strs[i].value.cooked + (strs[i].tail ? '' : getString(vasGetters[i]()));
    }

    return str;
  };
}

exports.templateLiteralHandler = templateLiteralHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/thisExpressionHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/thisExpressionHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // this

function thisExpressionHandler(node) {
  var _this = this;

  return function () {
    return _this.getCurrentContext();
  };
}

exports.thisExpressionHandler = thisExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/throwStatementHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/throwStatementHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function throwStatementHandler(node) {
  var _this = this;

  var argumentClosure = this.createClosure(node.argument);
  return function () {
    _this.setValue(undefined);

    throw argumentClosure();
  };
}

exports.throwStatementHandler = throwStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/tryStatementHandler.ts":
/*!**********************************************************!*\
  !*** ./src/Model/Closure/handler/tryStatementHandler.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../../TokenClass */ "./src/Model/TokenClass/index.ts");

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts");

var hasOwnProperty = Object.prototype.hasOwnProperty; // try{...}catch(e){...}finally{}

function tryStatementHandler(node) {
  var _this = this;

  this.blockDeclareStart();
  var blockClosure = this.createClosure(node.block);
  var tryLexDecl = this.blockDeclareEnd();
  var handlerClosure = node.handler ? this.catchClauseHandler(node.handler) : null;
  this.blockDeclareStart();
  var finalizerClosure = node.finalizer ? this.createClosure(node.finalizer) : null;
  var finalLexDecl = this.blockDeclareEnd();
  return function () {
    var currentScope = _this.getCurrentScope();

    var currentContext = _this.getCurrentContext();

    var labelStack = currentScope.labelStack.concat([]);

    var callStack = _this.callStack.concat([]);

    var result = Symbols_1.EmptyStatementReturn;
    var finalReturn;
    var throwError;

    var reset = function reset() {
      _this.setCurrentScope(currentScope); //reset scope


      _this.setCurrentContext(currentContext); //reset context


      currentScope.labelStack = labelStack; //reset label stack

      _this.callStack = callStack; //reset call stack
    };
    /**
     * try{...}catch(e){...}finally{...} execution sequence:
     * try stmt
     * try throw
     * catch stmt (if)
     * finally stmt
     * finally throw or finally return
     * catch throw or catch return
     * try return
     */


    try {
      var prevScope;
      var newScope;

      if (tryLexDecl) {
        newScope = Scope_1.createScope(_this.getCurrentScope(), "BScope(try)", "block");
        newScope.lexDeclared = tryLexDecl;
        prevScope = _this.entryBlockScope(newScope);
      }

      result = _this.setValue(blockClosure());

      if (tryLexDecl) {
        _this.setCurrentContext(prevScope);
      }

      if (result instanceof TokenClass_1.Return) {
        finalReturn = result;
      }
    } catch (err) {
      reset();

      if (_this.isInterruptThrow(err)) {
        throw err;
      }

      if (handlerClosure) {
        try {
          result = _this.setValue(handlerClosure(err));

          if (result instanceof TokenClass_1.Return) {
            finalReturn = result;
          }
        } catch (err) {
          reset();

          if (_this.isInterruptThrow(err)) {
            throw err;
          } // save catch throw error


          throwError = err;
        }
      }
    } // finally {


    if (finalizerClosure) {
      try {
        var _prevScope;

        var _newScope;

        if (finalLexDecl) {
          _newScope = Scope_1.createScope(_this.getCurrentScope(), "BScope(final)", "block");
          _newScope.lexDeclared = finalLexDecl;
          _prevScope = _this.entryBlockScope(_newScope);
        } //do not save finally result


        result = finalizerClosure();

        if (finalLexDecl) {
          _this.setCurrentScope(_prevScope);
        }

        if (result instanceof TokenClass_1.Return) {
          finalReturn = result;
        } // finalReturn = finalizerClosure();

      } catch (err) {
        reset();

        if (_this.isInterruptThrow(err)) {
          throw err;
        } // save finally throw error


        throwError = err;
      } // if (finalReturn instanceof Return) {
      // 	result = finalReturn;
      // }

    } // }


    if (throwError) throw throwError;

    if (finalReturn) {
      return finalReturn;
    }

    return result;
  };
}

exports.tryStatementHandler = tryStatementHandler; // ... catch(e){...}

function catchClauseHandler(node) {
  var _this2 = this;

  var paramNameGetter = this.createParamNameGetter(node.param); // catch中的代码会新开一个函数级别的作用域，
  // 但是不同的是context并没有变（函数调用的话，context会改变），

  var oldDeclVars = this.collectDeclVars;
  var oldDeclFuncs = this.collectDeclFuncs;
  var oldDeclLex = this.collectDeclLex; // 准备新scope的声明提升变量

  this.collectDeclVars = Object.create(null);
  this.collectDeclFuncs = Object.create(null);
  this.collectDeclLex = []; // set scope

  this.blockDeclareStart();
  var bodyClosure = this.createClosure(node.body);
  var lexDecl = this.blockDeclareEnd(); // 这里是准备好的变量和函数声明提升

  var declVars = this.collectDeclVars;
  var declFuncs = this.collectDeclFuncs;
  var declLex = this.collectDeclLex; // 恢复

  this.collectDeclVars = oldDeclVars;
  this.collectDeclFuncs = oldDeclFuncs;
  this.collectDeclLex = oldDeclLex;
  return function (err) {
    // get param name "e"
    var paramName = paramNameGetter();

    var prevScope = _this2.getCurrentScope();

    var currentScope = Scope_1.createScope(prevScope, "FScope(catch)");
    currentScope.lexDeclared = lexDecl;

    _this2.setCurrentScope(currentScope);

    _this2.addDeclarationsToScope(declVars, declFuncs, currentScope); // add "e" to scope


    currentScope.data[paramName] = err;
    var result; // run

    result = bodyClosure();

    _this2.setCurrentScope(prevScope);

    return result;
  };
}

exports.catchClauseHandler = catchClauseHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/updateExpressionHandler.ts":
/*!**************************************************************!*\
  !*** ./src/Model/Closure/handler/updateExpressionHandler.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts"); // ++a --a


function updateExpressionHandler(node) {
  var _this = this;

  var objectGetter = this.createLeftObjectGetter(node.argument);
  var nameGetter = this.createNameGetter(node.argument);
  return function () {
    var obj = objectGetter();
    var name = nameGetter();

    _this.assertVariable(obj, name, node);

    switch (node.operator) {
      case "++":
        return node.prefix ? ++obj[name] : obj[name]++;

      case "--":
        return node.prefix ? --obj[name] : obj[name]--;

      default:
        throw _this.createInternalThrowError(Message_1.Messages.UpdateOperatorSyntaxError, node.operator, node);
    }
  };
}

exports.updateExpressionHandler = updateExpressionHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/variableDeclarationHandler.ts":
/*!*****************************************************************!*\
  !*** ./src/Model/Closure/handler/variableDeclarationHandler.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Message_1 = __webpack_require__(/*! ../../Message */ "./src/Model/Message/index.ts");

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

function detectVaiable(node, varName, blockVariables) {
  if (node.kind == 'var') {
    /**
     * 如果var声明的scope中已经有同名的词法作用域的变量，这个var的声明需要报错：
     * Cannot redeclare block-scoped variable 'xxx'
     */
    if (this.collectDeclLex.some(function (_) {
      return _[varName];
    })) {
      throw this.createInternalThrowError(Message_1.Messages.RedeclareBlockScopeVariableError, node.type, node);
    } // 如果是var，声明提升


    this.varDeclaration(varName);
  } else {
    // 如果是let\const声明，变量名加入一个特殊的队列collectDeclLex的栈顶hash
    var stackTop = this.collectDeclLex[this.collectDeclLex.length - 1]; // collectDeclLex主要是在编译阶段收集块变量用，如果在执行阶段动态去声明一个变量，那collectDeclLex将是空数组，所以判断一下

    stackTop && (stackTop[varName] = {
      init: false,
      kind: node.kind
    });
    blockVariables.push(varName);
  }
} // var i;
// var i=1;
// let i;


function variableDeclarationHandler(node) {
  var _this = this;

  var assignmentsClosure;
  var assignments = [];
  var blockVariables = [];

  var _loop = function _loop(i) {
    var decl = node.declarations[i];

    if (decl.id.type == 'ObjectPattern') {
      if (!decl.init) {
        throw _this.createInternalThrowError(Message_1.Messages.SpreadPatternVariableNoInit, '', node);
      } // let {name, ...rest} = obj
      // 实际是声明了两个变量


      var properties = decl.id.properties;
      var alreadyVars = [];
      properties.forEach(function (item) {
        if (item.type === 'Property') {
          var varName = _this.getVariableName(item.value);

          alreadyVars.push(varName); // 检测一下是否块变量

          detectVaiable.call(_this, node, varName, blockVariables);
          assignments.push({
            type: 'ObjectPatternAssignExpression',
            left: item.value,
            right: decl.init
          });
        } else if (item.type === 'RestElement') {
          // @ts-ignore
          var _varName = item.argument.name;
          detectVaiable.call(_this, node, _varName, blockVariables);
          assignments.push({
            type: "ObjectPatternAssignExpression",
            // @ts-ignore
            left: item.argument,
            right: decl.init,
            rest: alreadyVars
          });
        } else {
          throw _this.createInternalThrowError(Message_1.Messages.UnknownVariableDeclTypeError, '', node);
        }
      });
    } else if (decl.id.type == 'ArrayPattern') {
      // let [first, ...rest] = arr;
      if (!decl.init) {
        throw _this.createInternalThrowError(Message_1.Messages.SpreadPatternVariableNoInit, '', node);
      }

      var elements = decl.id.elements;
      var _alreadyVars = [];
      elements.forEach(function (item, arr_ind) {
        if (item.type === 'Identifier') {
          var varName = item.name;

          _alreadyVars.push(varName); // 检测一下是否块变量


          detectVaiable.call(_this, node, varName, blockVariables);
          assignments.push({
            type: 'ObjectPatternAssignExpression',
            left: item,
            right: decl.init,
            index: arr_ind
          });
        } else if (item.type === 'RestElement') {
          // @ts-ignore
          var _varName2 = item.argument.name;
          detectVaiable.call(_this, node, _varName2, blockVariables);
          assignments.push({
            type: "ObjectPatternAssignExpression",
            // @ts-ignore
            left: item.argument,
            right: decl.init,
            index: arr_ind,
            arrRest: true
          });
        } else {
          throw _this.createInternalThrowError(Message_1.Messages.UnknownVariableDeclTypeError, '', node);
        }
      });
    } else {
      var variableName = _this.getVariableName(decl.id);

      detectVaiable.call(_this, node, variableName, blockVariables); // 一些情形，低于const的声明不会有init，比如for(const i in arr){}
      // 我们这里不做强校验，主动声明的const必须初始化，acorn在生成ast之前就有校验，我们信任acorn吧。另外，即使这里不初始化，之后对const的赋值也会报错，所以不会产生太大影响。
      // if(node.kind == 'const' && !decl.init){
      //     throw this.createInternalThrowError(Messages.ConstNotInitError, variableName, node)
      // }

      if (decl.init) {
        assignments.push({
          type: "AssignmentExpression",
          operator: "=",
          left: decl.id,
          right: decl.init
        });
      }
    }
  };

  for (var i = 0; i < node.declarations.length; i++) {
    _loop(i);
  }

  if (assignments.length) {
    assignmentsClosure = this.createClosure({
      // @ts-ignore
      type: "GroupStatement",
      // @ts-ignore
      body: assignments
    });
  }

  return function () {
    if (assignmentsClosure) {
      if (blockVariables.length) {
        var scope = _this.getCurrentScope(); // 确认初始化块级变量


        blockVariables.forEach(function (name) {
          if (scope.lexDeclared[name].kind === 'const') {// 对于const变量，我们只在复制运行的时候将init设为true，
            // init设为true后，之后对该变量的所有左值访问都将报错
          } else if (scope.lexDeclared[name].kind === 'let') {
            // 对于let变量，我们在这里讲init设为true就好，时机不太影响
            scope.lexDeclared[name].init = true;
          }
        });
      }

      var oldValue = _this.isVarDeclMode;
      _this.isVarDeclMode = true;
      assignmentsClosure(); // console.info('oldvalue is ', oldValue)

      _this.isVarDeclMode = oldValue;
    }

    return Symbols_1.EmptyStatementReturn;
  };
}

exports.variableDeclarationHandler = variableDeclarationHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/whileStatementHandler.ts":
/*!************************************************************!*\
  !*** ./src/Model/Closure/handler/whileStatementHandler.ts ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
}); // while(1) {...}

function whileStatementHandler(node) {
  return this.forStatementHandler(node);
}

exports.whileStatementHandler = whileStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/handler/withStatementHandler.ts":
/*!***********************************************************!*\
  !*** ./src/Model/Closure/handler/withStatementHandler.ts ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scope_1 = __webpack_require__(/*! ../../Scope */ "./src/Model/Scope/index.ts");

var Symbols_1 = __webpack_require__(/*! ../../Symbols */ "./src/Model/Symbols/index.ts");

function withStatementHandler(node) {
  var _this = this;

  var objectClosure = this.createClosure(node.object);
  var bodyClosure = this.createClosure(node.body);
  return function () {
    var data = objectClosure();

    var currentScope = _this.getCurrentScope();

    var newScope = new Scope_1.default(data, currentScope, Symbols_1.WithScopeName); // const data = objectClosure();
    // copy all properties
    // for (let k in data) {
    // 	newScope.data[k] = data[k];
    // }

    _this.setCurrentScope(newScope); // save last value


    var result = _this.setValue(bodyClosure());

    _this.setCurrentScope(currentScope);

    return result;
  };
}

exports.withStatementHandler = withStatementHandler;

/***/ }),

/***/ "./src/Model/Closure/index.ts":
/*!************************************!*\
  !*** ./src/Model/Closure/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var handler = __webpack_require__(/*! ./handler */ "./src/Model/Closure/handler/index.ts");

var ClosureHandler =
/*#__PURE__*/
function () {
  function ClosureHandler() {
    this.binaryExpressionHandler = handler.binaryExpressionHandler;
    this.logicalExpressionHandler = handler.logicalExpressionHandler;
    this.unaryExpressionHandler = handler.unaryExpressionHandler;
    this.updateExpressionHandler = handler.updateExpressionHandler;
    this.objectExpressionHandler = handler.objectExpressionHandler;
    this.arrayExpressionHandler = handler.arrayExpressionHandler;
    this.callExpressionHandler = handler.callExpressionHandler;
    this.newExpressionHandler = handler.newExpressionHandler;
    this.memberExpressionHandler = handler.memberExpressionHandler;
    this.thisExpressionHandler = handler.thisExpressionHandler;
    this.sequenceExpressionHandler = handler.sequenceExpressionHandler;
    this.literalHandler = handler.literalHandler;
    this.identifierHandler = handler.identifierHandler;
    this.assignmentExpressionHandler = handler.assignmentExpressionHandler;
    this.functionDeclarationHandler = handler.functionDeclarationHandler;
    this.variableDeclarationHandler = handler.variableDeclarationHandler;
    this.programHandler = handler.programHandler;
    this.expressionStatementHandler = handler.expressionStatementHandler;
    this.emptyStatementHandler = handler.emptyStatementHandler;
    this.returnStatementHandler = handler.returnStatementHandler;
    this.functionExpressionHandler = handler.functionExpressionHandler;
    this.ifStatementHandler = handler.ifStatementHandler;
    this.conditionalExpressionHandler = handler.conditionalExpressionHandler;
    this.forStatementHandler = handler.forStatementHandler;
    this.whileStatementHandler = handler.whileStatementHandler;
    this.doWhileStatementHandler = handler.doWhileStatementHandler;
    this.forInStatementHandler = handler.forInStatementHandler;
    this.forOfStatementHandler = handler.forOfStatementHandler;
    this.withStatementHandler = handler.withStatementHandler;
    this.throwStatementHandler = handler.throwStatementHandler;
    this.tryStatementHandler = handler.tryStatementHandler;
    this.continueStatementHandler = handler.continueStatementHandler;
    this.breakStatementHandler = handler.breakStatementHandler;
    this.switchStatementHandler = handler.switchStatementHandler;
    this.labeledStatementHandler = handler.labeledStatementHandler;
    this.debuggerStatementHandler = handler.debuggerStatementHandler;
    this.catchClauseHandler = handler.catchClauseHandler;
    this.groupStatementHandler = handler.groupStatementHandler;
    this.arrowFunctionExpressionHandler = handler.arrowFunctionExpressionHandler;
    this.objectPatternAssignHandler = handler.objectPatternAssignHandler;
    this.spreadElementHandler = handler.spreadElementHandler;
    this.templateLiteralHandler = handler.templateLiteralHandler;
    this.classDeclarationHandler = handler.classDeclarationHandler;
    this.classExpressionHandler = handler.classExpressionHandler;
    this.JSXElementHandler = handler.JSXElementHandler;
    this.JSXMemberExpressionHandler = handler.JSXMemberExpressionHandler;
    this.JSXExpressionContainerHandler = handler.JSXExpressionContainerHandler;
    this.JSXTextHandler = handler.JSXTextHandler;
    this.JSXIdentifierHandler = handler.JSXIdentifierHandler;
    this.JSXAttributeHandler = handler.JSXAttributeHandler;
    this.JSXSpreadAttributeHandler = handler.JSXSpreadAttributeHandler;
    this.superHandler = handler.superHandler;
  }

  var _proto = ClosureHandler.prototype;

  _proto.getClosure = function getClosure(node) {
    var closure = null;

    switch (node.type) {
      case 'ClassDeclaration':
        closure = this.classDeclarationHandler(node);
        break;

      case 'ClassExpression':
        closure = this.classExpressionHandler(node);
        break;

      case 'Super':
        closure = this.superHandler(node);
        break;

      case "BinaryExpression":
        closure = this.binaryExpressionHandler(node);
        break;

      case "LogicalExpression":
        closure = this.logicalExpressionHandler(node);
        break;

      case "UnaryExpression":
        closure = this.unaryExpressionHandler(node);
        break;

      case "UpdateExpression":
        closure = this.updateExpressionHandler(node);
        break;

      case "ObjectExpression":
        closure = this.objectExpressionHandler(node);
        break;

      case "ArrayExpression":
        closure = this.arrayExpressionHandler(node);
        break;

      case "CallExpression":
        closure = this.callExpressionHandler(node);
        break;

      case "NewExpression":
        closure = this.newExpressionHandler(node);
        break;

      case "MemberExpression":
        closure = this.memberExpressionHandler(node);
        break;

      case "ThisExpression":
        closure = this.thisExpressionHandler(node);
        break;

      case "SequenceExpression":
        closure = this.sequenceExpressionHandler(node);
        break;

      case "Literal":
        closure = this.literalHandler(node);
        break;

      case "Identifier":
        closure = this.identifierHandler(node);
        break;

      case "AssignmentExpression":
        closure = this.assignmentExpressionHandler(node);
        break;

      case "FunctionDeclaration":
        closure = this.functionDeclarationHandler(node);
        break;

      case 'ArrowFunctionExpression':
        closure = this.arrowFunctionExpressionHandler(node);
        break;

      case 'SpreadElement':
        closure = this.spreadElementHandler(node);
        break;

      case "VariableDeclaration":
        closure = this.variableDeclarationHandler(node);
        break;

      case 'TemplateLiteral':
        closure = this.templateLiteralHandler(node);
        break;

      case "BlockStatement":
      case "Program":
        closure = this.programHandler(node);
        break;
      // groupStatement 是为了编译需要自己加的，为了将若干表达式聚合起来一起执行，但是又不单独生成blockScope
      // @ts-ignore

      case "GroupStatement":
        closure = this.groupStatementHandler(node);
        break;
      // let {name, ...rest} = obj的赋值，写成了一个handler方便一点，要拆解开的话rest不太好实现
      // @ts-ignore

      case "ObjectPatternAssignExpression":
        closure = this.objectPatternAssignHandler(node);
        break;

      case "ExpressionStatement":
        closure = this.expressionStatementHandler(node);
        break;

      case "EmptyStatement":
        closure = this.emptyStatementHandler(node);
        break;

      case "ReturnStatement":
        closure = this.returnStatementHandler(node);
        break;

      case "FunctionExpression":
        closure = this.functionExpressionHandler(node);
        break;

      case "IfStatement":
        closure = this.ifStatementHandler(node);
        break;

      case "ConditionalExpression":
        closure = this.conditionalExpressionHandler(node);
        break;

      case "ForStatement":
        closure = this.forStatementHandler(node);
        break;

      case "WhileStatement":
        closure = this.whileStatementHandler(node);
        break;

      case "DoWhileStatement":
        closure = this.doWhileStatementHandler(node);
        break;

      case 'ForOfStatement':
        closure = this.forOfStatementHandler(node);
        break;

      case "ForInStatement":
        closure = this.forInStatementHandler(node);
        break;

      case "WithStatement":
        closure = this.withStatementHandler(node);
        break;

      case "ThrowStatement":
        closure = this.throwStatementHandler(node);
        break;

      case "TryStatement":
        closure = this.tryStatementHandler(node);
        break;

      case "ContinueStatement":
        closure = this.continueStatementHandler(node);
        break;

      case "BreakStatement":
        closure = this.breakStatementHandler(node);
        break;

      case "SwitchStatement":
        closure = this.switchStatementHandler(node);
        break;

      case "LabeledStatement":
        closure = this.labeledStatementHandler(node);
        break;

      case "DebuggerStatement":
        closure = this.debuggerStatementHandler(node);
        break;

      case "JSXElement":
        closure = this.JSXElementHandler(node);
        break;

      case "JSXExpressionContainer":
        closure = this.JSXExpressionContainerHandler(node);
        break;

      case "JSXIdentifier":
        closure = this.JSXIdentifierHandler(node);
        break;

      case "JSXAttribute":
        closure = this.JSXAttributeHandler(node);
        break;

      case "JSXSpreadAttribute":
        closure = this.JSXSpreadAttributeHandler(node);
        break;

      case "JSXMemberExpression":
        closure = this.JSXMemberExpressionHandler(node);
        break;

      case "JSXOpeningElement":
        // 在jsxelement就处理了，不可能到这里
        break;

      case "JSXText":
        closure = this.JSXTextHandler(node);
        break;

      case "JSXEmptyExpression":
        closure = function closure() {
          return null;
        };

        break;

      default:
        break;
    }

    return closure;
  };

  return ClosureHandler;
}();

exports.ClosureHandler = ClosureHandler;
applyMixins(ClosureHandler, handler);

function applyMixins(derivedCtor, father) {
  Object.getOwnPropertyNames(father).forEach(function (name) {
    derivedCtor.prototype[name] = father[name];
  });
}

/***/ }),

/***/ "./src/Model/Iterator/index.ts":
/*!*************************************!*\
  !*** ./src/Model/Iterator/index.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Symbols_1 = __webpack_require__(/*! ../Symbols */ "./src/Model/Symbols/index.ts");
/**
 * 这个类是用来在es5环境下模拟Iterator行为使用。
 * 在es5下，可迭代的对象无外乎两种，Array和Object。
 * 所以这个类是将数组形式的数据封装成Iterator，再用Iterator拓展出Map\Set等等数据结构
 * 底层的数据存储还是简单的数据[1,2,3]形式
 */


var EIterator =
/*#__PURE__*/
function () {
  function EIterator(Smbl, option) {
    var _this = this;

    Object.defineProperty(this, Symbols_1.storeKey(Smbl.iterator), {
      value: function value() {
        return _this;
      },
      writable: false,
      configurable: true,
      enumerable: false
    });
    this.option = option;
  }

  var _proto = EIterator.prototype;

  _proto.next = function next() {
    return this.option.next();
  };

  return EIterator;
}();

exports.EIterator = EIterator;

/***/ }),

/***/ "./src/Model/Message/index.ts":
/*!************************************!*\
  !*** ./src/Model/Message/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

var _wrapNativeSuper2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/wrapNativeSuper */ "./node_modules/@babel/runtime/helpers/wrapNativeSuper.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var ThrowError =
/*#__PURE__*/
function (_Error) {
  (0, _inheritsLoose2.default)(ThrowError, _Error);

  function ThrowError() {
    return _Error.apply(this, arguments) || this;
  }

  return ThrowError;
}((0, _wrapNativeSuper2.default)(Error));

exports.ThrowError = ThrowError;

var ThrowSyntaxError =
/*#__PURE__*/
function (_SyntaxError) {
  (0, _inheritsLoose2.default)(ThrowSyntaxError, _SyntaxError);

  function ThrowSyntaxError() {
    return _SyntaxError.apply(this, arguments) || this;
  }

  return ThrowSyntaxError;
}((0, _wrapNativeSuper2.default)(SyntaxError));

exports.ThrowSyntaxError = ThrowSyntaxError;

var ThrowReferenceError =
/*#__PURE__*/
function (_ReferenceError) {
  (0, _inheritsLoose2.default)(ThrowReferenceError, _ReferenceError);

  function ThrowReferenceError() {
    return _ReferenceError.apply(this, arguments) || this;
  }

  return ThrowReferenceError;
}((0, _wrapNativeSuper2.default)(ReferenceError));

exports.ThrowReferenceError = ThrowReferenceError;

var ThrowTypeError =
/*#__PURE__*/
function (_TypeError) {
  (0, _inheritsLoose2.default)(ThrowTypeError, _TypeError);

  function ThrowTypeError() {
    return _TypeError.apply(this, arguments) || this;
  }

  return ThrowTypeError;
}((0, _wrapNativeSuper2.default)(TypeError));

exports.ThrowTypeError = ThrowTypeError;

var InterruptThrowError =
/*#__PURE__*/
function (_ThrowError) {
  (0, _inheritsLoose2.default)(InterruptThrowError, _ThrowError);

  function InterruptThrowError() {
    return _ThrowError.apply(this, arguments) || this;
  }

  return InterruptThrowError;
}(ThrowError);

exports.InterruptThrowError = InterruptThrowError;

var InterruptThrowSyntaxError =
/*#__PURE__*/
function (_ThrowSyntaxError) {
  (0, _inheritsLoose2.default)(InterruptThrowSyntaxError, _ThrowSyntaxError);

  function InterruptThrowSyntaxError() {
    return _ThrowSyntaxError.apply(this, arguments) || this;
  }

  return InterruptThrowSyntaxError;
}(ThrowSyntaxError);

exports.InterruptThrowSyntaxError = InterruptThrowSyntaxError;

var InterruptThrowReferenceError =
/*#__PURE__*/
function (_ThrowReferenceError) {
  (0, _inheritsLoose2.default)(InterruptThrowReferenceError, _ThrowReferenceError);

  function InterruptThrowReferenceError() {
    return _ThrowReferenceError.apply(this, arguments) || this;
  }

  return InterruptThrowReferenceError;
}(ThrowReferenceError);

exports.InterruptThrowReferenceError = InterruptThrowReferenceError;
exports.Messages = {
  UnknownError: [3001, "%0", InterruptThrowError],
  ExecutionTimeOutError: [3002, "Script execution timed out after %0ms", InterruptThrowError],
  NodeTypeSyntaxError: [1001, "Unknown node type: %0", InterruptThrowReferenceError],
  BinaryOperatorSyntaxError: [1002, "Unknown binary operator: %0", InterruptThrowReferenceError],
  LogicalOperatorSyntaxError: [1003, "Unknown logical operator: %0", InterruptThrowReferenceError],
  UnaryOperatorSyntaxError: [1004, "Unknown unary operator: %0", InterruptThrowReferenceError],
  UpdateOperatorSyntaxError: [1005, "Unknown update operator: %0", InterruptThrowReferenceError],
  ObjectStructureSyntaxError: [1006, "Unknown object structure: %0", InterruptThrowReferenceError],
  AssignmentExpressionSyntaxError: [1007, "Unknown assignment expression: %0", InterruptThrowReferenceError],
  VariableTypeSyntaxError: [1008, "Unknown variable type: %0", InterruptThrowReferenceError],
  ParamTypeSyntaxError: [1009, "Unknown param type: %0", InterruptThrowReferenceError],
  AssignmentTypeSyntaxError: [1010, "Unknown assignment type: %0", InterruptThrowReferenceError],
  FunctionUndefinedReferenceError: [2001, "%0 is not a function", ThrowReferenceError],
  VariableUndefinedReferenceError: [2002, "%0 is not defined", ThrowReferenceError],
  IsNotConstructor: [2003, "%0 is not a constructor", ThrowTypeError],
  LetVariableUseBeforeInitReferenceError: [2004, 'Cannot access \'%0\' before initialization', ThrowReferenceError],
  RedeclareBlockScopeVariableError: [2005, 'Cannot redeclare block-scoped variable \'%0\'', ThrowReferenceError],
  ConstNotInitError: [2006, 'const \'%0\' declarations must be initialized.', InterruptThrowError],
  ConstChangeError: [2007, 'Cannot assign to \'%0\' because it is a constant.', ThrowReferenceError],
  UnknownVariableDeclTypeError: [2008, 'Unknown Vaiable Declarator type \'%0\'.', InterruptThrowReferenceError],
  SpreadPatternVariableNoInit: [2009, 'no init in Rest Pattern Variable.', InterruptThrowReferenceError],
  NormalError: [2010, '%0', ThrowReferenceError],
  VariableNotIterableError: [2011, 'variable \'%0\' not iterable.', ThrowTypeError]
};

/***/ }),

/***/ "./src/Model/Node/react.ts":
/*!*********************************!*\
  !*** ./src/Model/Node/react.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * React.js中内置的tag，即使存在同名的变量，在使用jsx的时候，也是优先使用这些内置的tag生成element
 */

exports.REACT_INTRINSIC_TAG = ['a', 'abbr', 'address', 'area', 'article', 'aside', 'audio', 'b', 'base', 'bdi', 'bdo', 'big', 'blockquote', 'body', 'br', 'button', 'canvas', 'caption', 'cite', 'code', 'col', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn', 'dialog', 'div', 'dl', 'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'hr', 'html', 'i', 'iframe', 'img', 'input', 'ins', 'kbd', 'keygen', 'label', 'legend', 'li', 'link', 'main', 'map', 'mark', 'menu', 'menuitem', 'meta', 'meter', 'nav', 'noindex', 'noscript', 'object', 'ol', 'optgroup', 'option', 'output', 'p', 'param', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's', 'samp', 'script', 'section', 'select', 'small', 'source', 'span', 'strong', 'style', 'sub', 'summary', 'sup', 'table', 'template', 'tbody', 'td', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track', 'u', 'ul', '"var', 'video', 'wbr', 'webview', 'svg', 'animate', 'animateMotion', 'animateTransform', 'circle', 'clipPath', 'defs', 'desc', 'ellipse', 'feBlend', 'feColorMatrix', 'feComponentTransfer', 'feComposite', 'feConvolveMatrix', 'feDiffuseLighting', 'feDisplacementMap', 'feDistantLight', 'feDropShadow', 'feFlood', 'feFuncA', 'feFuncB', 'feFuncG', 'feFuncR', 'feGaussianBlur', 'feImage', 'feMerge', 'feMergeNode', 'feMorphology', 'feOffset', 'fePointLight', 'feSpecularLighting', 'feSpotLight', 'feTile', 'feTurbulence', 'filter', 'foreignObject', 'g', 'image', 'line', 'linearGradient', 'marker', 'mask', 'metadata', 'mpath', 'path', 'pattern', 'polygon', 'polyline', 'radialGradient', 'rect', 'stop', 'switch', 'symbol', 'text', 'textPath', 'tspan', 'use', 'view'];

/***/ }),

/***/ "./src/Model/Scope/index.ts":
/*!**********************************!*\
  !*** ./src/Model/Scope/index.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scope = function Scope(data, parent, name, type) {
  if (parent === void 0) {
    parent = null;
  }

  if (type === void 0) {
    type = 'function';
  }

  this.name = name;
  this.parent = parent;
  this.data = data;
  this.labelStack = [];
  this.type = type;
  this.lexDeclared = Object.create(null);
};

exports.default = Scope;

function createScope(parent, name, type) {
  if (parent === void 0) {
    parent = null;
  }

  if (type === void 0) {
    type = 'function';
  }

  return new Scope(Object.create(null), parent, name, type);
}

exports.createScope = createScope;

/***/ }),

/***/ "./src/Model/Symbols/index.ts":
/*!************************************!*\
  !*** ./src/Model/Symbols/index.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Break = Symbol("Break");
exports.Continue = Symbol("Continue");
exports.DefaultCase = Symbol("DefaultCase");
exports.EmptyStatementReturn = Symbol("EmptyStatementReturn");
exports.WithScopeName = Symbol("WithScopeName");
exports.SuperScopeName = Symbol("SuperScopeName");
exports.RootScopeName = Symbol("RootScopeName");
exports.GlobalScopeName = Symbol("GlobalScopeName");

var kls_1 = __webpack_require__(/*! ./kls */ "./src/Model/Symbols/kls.ts");

exports.createSymbolFunc = kls_1.createSymbolFunc;
exports.isSymbol = kls_1.isSymbol;
exports.storeKey = kls_1.storeKey;

/***/ }),

/***/ "./src/Model/Symbols/kls.ts":
/*!**********************************!*\
  !*** ./src/Model/Symbols/kls.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function createSymbolFunc() {
  var cache = {};
  var count = {};

  function ESymbol(val) {
    if (this instanceof ESymbol) {
      throw new TypeError('cannot new a Symbol');
    }

    !count[val] && (count[val] = 0);
    count[val] += 1;
    return cache[val] ? new SymbolClass(val, {
      count: count
    }) : cache[val] = new SymbolClass(val, {
      count: count
    });
  }

  ESymbol.iterator = ESymbol('@@iterator');
  ESymbol.match = ESymbol('@@match');
  ESymbol.replace = ESymbol('@@replace');
  ESymbol.search = ESymbol('@@search');
  ESymbol.split = ESymbol('@@split');

  ESymbol.for = function (val) {
    return cache[val] || ESymbol(val);
  };

  ESymbol.keyFor = function (t) {
    if (t instanceof SymbolClass) {
      return t.val;
    } else {
      throw new TypeError('keyFor not a symbol');
    }
  };

  return ESymbol;
}

exports.createSymbolFunc = createSymbolFunc;

function isSymbol(t) {
  return typeof t == 'symbol' || t instanceof SymbolClass;
}

exports.isSymbol = isSymbol;
exports.memberKeyPrefix = '__smbl_';

function storeKey(t) {
  return "" + exports.memberKeyPrefix + t.offset + "_" + t.val;
}

exports.storeKey = storeKey;

var SymbolClass = function SymbolClass(val, env) {
  var count = env.count;
  this.val = val; // 附加一个偏移量，用于区别val一样的情形

  this.offset = count[val];
}; // console.info好像不太管用


SymbolClass.prototype.toString = SymbolClass.prototype.valueOf = function () {
  return "Symbol(" + this.val + ")";
};

/***/ }),

/***/ "./src/Model/TokenClass/index.ts":
/*!***************************************!*\
  !*** ./src/Model/TokenClass/index.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var Return = function Return(value) {
  this.value = value;
};

exports.Return = Return;

var BreakLabel = function BreakLabel(value) {
  this.value = value;
};

exports.BreakLabel = BreakLabel;

var ContinueLabel = function ContinueLabel(value) {
  this.value = value;
};

exports.ContinueLabel = ContinueLabel;

/***/ }),

/***/ "./src/evaluate.ts":
/*!*************************!*\
  !*** ./src/evaluate.ts ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var vm_1 = __webpack_require__(/*! ./vm */ "./src/vm.ts");

exports.default = function (code, ctx, options) {
  return vm_1.runInContext(code, ctx, options);
};

/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var main_1 = __webpack_require__(/*! ./interpreter/main */ "./src/interpreter/main.ts");

exports.Interpreter = main_1.Interpreter;

var vm = __webpack_require__(/*! ./vm */ "./src/vm.ts");

exports.vm = vm;

var evaluate_1 = __webpack_require__(/*! ./evaluate */ "./src/evaluate.ts");

exports.evaluate = evaluate_1.default;

var Function_1 = __webpack_require__(/*! ./Function */ "./src/Function.ts");

exports.Function = Function_1.default;

/***/ }),

/***/ "./src/interpreter/main.ts":
/*!*********************************!*\
  !*** ./src/interpreter/main.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js"));

var _inheritsLoose2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/inheritsLoose */ "./node_modules/@babel/runtime/helpers/inheritsLoose.js"));

Object.defineProperty(exports, "__esModule", {
  value: true
});

var Scope_1 = __webpack_require__(/*! ../Model/Scope */ "./src/Model/Scope/index.ts");

var acorn_1 = __webpack_require__(/*! acorn */ "./node_modules/acorn/dist/acorn.mjs");

var Message_1 = __webpack_require__(/*! ../Model/Message */ "./src/Model/Message/index.ts");

var Closure_1 = __webpack_require__(/*! ../Model/Closure */ "./src/Model/Closure/index.ts");

var Symbols_1 = __webpack_require__(/*! ../Model/Symbols */ "./src/Model/Symbols/index.ts");

var TokenClass_1 = __webpack_require__(/*! ../Model/TokenClass */ "./src/Model/TokenClass/index.ts");

var util_1 = __webpack_require__(/*! ../util */ "./src/util/index.ts");

var Array_1 = __webpack_require__(/*! ../Model/Array */ "./src/Model/Array/index.ts");

var MyParser = acorn_1.Parser.extend(__webpack_require__(/*! acorn-class-fields */ "./node_modules/acorn-class-fields/index.js"), __webpack_require__(/*! acorn-static-class-features */ "./node_modules/acorn-static-class-features/index.js"), __webpack_require__(/*! acorn-jsx */ "./node_modules/acorn-jsx/index.js")());
var version = "1.1.1";

function internalFunction(reflection) {
  if (!(reflection instanceof InternalInterpreterReflection)) {
    throw new Error("Illegal call");
  }

  var instance = reflection.generator();

  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }

  var code = params.pop();
  var interpreter = new Interpreter(instance.getGlobalScope(), instance.getOptions());
  var wrapCode = "\n\t\t    (function anonymous(" + params.join(",") + "){\n\t\t        " + code + "\n\t\t    });\n\t\t    ";
  return interpreter.evaluate(wrapCode);
}

exports.internalFunction = internalFunction;
Object.defineProperty(internalFunction, "__IS_FUNCTION_FUNC", {
  value: true,
  writable: false,
  enumerable: false,
  configurable: false
});

var InternalInterpreterReflection =
/*#__PURE__*/
function () {
  function InternalInterpreterReflection(interpreter) {
    this.interpreter = interpreter;
  }

  var _proto = InternalInterpreterReflection.prototype;

  _proto.generator = function generator() {
    var interpreter = this.interpreter;

    function getCurrentScope() {
      return this.getCurrentScope();
    }

    function getGlobalScope() {
      return this.getGlobalScope();
    }

    function getCurrentContext() {
      return this.getCurrentContext();
    }

    return {
      getOptions: interpreter.getOptions.bind(interpreter),
      getCurrentScope: getCurrentScope.bind(interpreter),
      getGlobalScope: getGlobalScope.bind(interpreter),
      getCurrentContext: getCurrentContext.bind(interpreter),
      getExecStartTime: interpreter.getExecStartTime.bind(interpreter)
    };
  };

  return InternalInterpreterReflection;
}();

exports.InternalInterpreterReflection = InternalInterpreterReflection;

function internalEval(reflection, code, useGlobalScope) {
  if (useGlobalScope === void 0) {
    useGlobalScope = true;
  }

  if (!(reflection instanceof InternalInterpreterReflection)) {
    throw new Error("Illegal call");
  }

  if (typeof code !== "string") return code;
  if (!code) return void 0;
  var instance = reflection.generator();
  var opts = instance.getOptions();
  var options = {
    timeout: opts.timeout,
    _initEnv: function _initEnv() {
      // set caller context
      if (!useGlobalScope) {
        this.setCurrentContext(instance.getCurrentContext());
      } // share timeout


      this.execStartTime = instance.getExecStartTime();
      this.execEndTime = this.execStartTime;
    }
  };
  var currentScope = useGlobalScope ? instance.getGlobalScope() : instance.getCurrentScope();
  var interpreter = new Interpreter(currentScope, options);
  return interpreter.evaluate(code);
}

Object.defineProperty(internalEval, "__IS_EVAL_FUNC", {
  value: true,
  writable: false,
  enumerable: false,
  configurable: false
});
/**
 * scope chain
 *
 * superScope
 *     ↓
 * rootScope
 *     ↓
 * globalScope
 *     ↓
 * functionScope
 *
 */

function createRootContext(data) {
  return Object.create(data);
}

var BuildInObjects = {
  NaN: NaN,
  Infinity: Infinity,
  undefined: undefined,
  // null,
  Object: Object,
  // Array类是自定义的一个包装类，为了提供新特性的支持
  // Array,
  String: String,
  Boolean: Boolean,
  Number: Number,
  Date: Date,
  RegExp: RegExp,
  Error: Error,
  URIError: URIError,
  TypeError: TypeError,
  RangeError: RangeError,
  SyntaxError: SyntaxError,
  ReferenceError: ReferenceError,
  Math: Math,
  parseInt: parseInt,
  parseFloat: parseFloat,
  isNaN: isNaN,
  isFinite: isFinite,
  decodeURI: decodeURI,
  decodeURIComponent: decodeURIComponent,
  encodeURI: encodeURI,
  encodeURIComponent: encodeURIComponent,
  escape: escape,
  unescape: unescape,
  eval: internalEval,
  Function: internalFunction
}; // ES5 Object

if (typeof JSON !== "undefined") {
  BuildInObjects.JSON = JSON;
} //ES6 Object


if (typeof Promise !== "undefined") {
  BuildInObjects.Promise = Promise;
}

if (typeof Set !== "undefined") {
  BuildInObjects.Set = Set;
}

if (typeof Map !== "undefined") {
  BuildInObjects.Map = Map;
} // if (typeof Symbol !== "undefined") {
// 	BuildInObjects.Symbol = Symbol;
// }


if (typeof Proxy !== "undefined") {
  BuildInObjects.Proxy = Proxy;
}

if (typeof WeakMap !== "undefined") {
  BuildInObjects.WeakMap = WeakMap;
}

if (typeof WeakSet !== "undefined") {
  BuildInObjects.WeakSet = WeakSet;
}

if (typeof Reflect !== "undefined") {
  BuildInObjects.Reflect = Reflect;
}

var Interpreter =
/*#__PURE__*/
function (_Closure_1$ClosureHan) {
  (0, _inheritsLoose2.default)(Interpreter, _Closure_1$ClosureHan);

  function Interpreter(context, options) {
    var _this;

    if (context === void 0) {
      context = Interpreter.global;
    }

    if (options === void 0) {
      options = {};
    }

    _this = _Closure_1$ClosureHan.call(this) || this;
    _this.sourceList = []; // 编译时存放变量提升的var和function

    _this.collectDeclVars = Object.create(null);
    _this.collectDeclFuncs = Object.create(null); // 编译时存放块级作用域的层级结构的声明，用于判断var声明时候是否非法（var的申明可以覆盖var，但是不能覆盖let等块级声明）

    _this.collectDeclLex = [];
    _this.isVarDeclMode = false;
    _this.lastExecNode = null;
    _this.isRunning = false;
    _this.options = {
      ecmaVersion: options.ecmaVersion || Interpreter.ecmaVersion,
      timeout: options.timeout || 0,
      rootContext: options.rootContext,
      globalContextInFunction: options.globalContextInFunction === undefined ? Interpreter.globalContextInFunction : options.globalContextInFunction,
      _initEnv: options._initEnv
    };
    _this.context = context || Object.create(null);
    _this.callStack = []; // console.info('this i s ', this )

    _this.initEnvironment(_this.context);

    return _this;
  }
  /**
   * 初始化全局执行环境
   * @param ctx
   */


  var _proto2 = Interpreter.prototype;

  _proto2.initEnvironment = function initEnvironment(ctx) {
    var scope; //init global scope

    if (ctx instanceof Scope_1.default) {
      scope = ctx;
    } else {
      var rootScope = null;
      var superScope = this.createSuperScope(ctx);

      if (this.options.rootContext) {
        rootScope = new Scope_1.default(createRootContext(this.options.rootContext), superScope, Symbols_1.RootScopeName);
      }

      scope = new Scope_1.default(ctx, rootScope || superScope, Symbols_1.GlobalScopeName);
    }

    this.globalScope = scope; // 顶级作用域嵌入mock的Symbol方法。

    var smbl;
    this.globalScope.data['Symbol'] = smbl = Symbols_1.createSymbolFunc();
    this.globalScope.data['Array'] = Array_1.createArrayClass(smbl);
    this.currentScope = this.globalScope; //init global context to this

    this.globalContext = scope.data;
    this.currentContext = scope.data; // collect var/function declare

    this.collectDeclVars = Object.create(null);
    this.collectDeclFuncs = Object.create(null);
    this.collectDeclLex = [];
    this.execStartTime = Date.now();
    this.execEndTime = this.execStartTime;
    var _initEnv = this.options._initEnv;

    if (_initEnv) {
      _initEnv.call(this);
    }
  }
  /**
   * 包含块级作用域的语句声明之前执行。创建一个新的hash，记录块作用域内声明的let/const变量
   */
  ;

  _proto2.blockDeclareStart = function blockDeclareStart() {
    this.collectDeclLex.push(Object.create(null));
  }
  /**
   * 包含块级作用域的语句声明之后执行，退栈，获取该块作用域声明的let/const变量
   */
  ;

  _proto2.blockDeclareEnd = function blockDeclareEnd() {
    // 准备块级作用域初始化必要参数
    var lexDeclInThisBlock = this.collectDeclLex.pop();
    var lexDeclared;
    var lexNames = Object.getOwnPropertyNames(lexDeclInThisBlock);

    if (lexNames.length) {
      lexDeclared = Object.create(null);
      lexNames.forEach(function (key) {
        lexDeclared[key] = {
          init: false,
          kind: lexDeclInThisBlock[key].kind
        };
      });
    } else {
      // 说明没有词法变量，那就不用新建作用域了
      lexDeclared = null;
    }

    return lexDeclared;
  };

  _proto2.getExecStartTime = function getExecStartTime() {
    return this.execStartTime;
  };

  _proto2.getExecutionTime = function getExecutionTime() {
    return this.execEndTime - this.execStartTime;
  };

  _proto2.setExecTimeout = function setExecTimeout(timeout) {
    if (timeout === void 0) {
      timeout = 0;
    }

    this.options.timeout = timeout;
  };

  _proto2.getOptions = function getOptions() {
    return this.options;
  };

  _proto2.getGlobalScope = function getGlobalScope() {
    return this.globalScope;
  };

  _proto2.getCurrentScope = function getCurrentScope() {
    return this.currentScope;
  };

  _proto2.getCurrentContext = function getCurrentContext() {
    return this.currentContext;
  };

  _proto2.isInterruptThrow = function isInterruptThrow(err) {
    return err instanceof Message_1.InterruptThrowError || err instanceof Message_1.InterruptThrowReferenceError || err instanceof Message_1.InterruptThrowSyntaxError;
  };

  _proto2.createSuperScope = function createSuperScope(ctx) {
    var data = (0, _extends2.default)({}, BuildInObjects);
    var buildInObjectKeys = Object.keys(data);
    buildInObjectKeys.forEach(function (key) {
      if (key in ctx) {
        delete data[key];
      }
    });
    return new Scope_1.default(data, null, Symbols_1.SuperScopeName);
  };

  _proto2.setCurrentContext = function setCurrentContext(ctx) {
    this.currentContext = ctx;
  };

  _proto2.setCurrentScope = function setCurrentScope(scope) {
    this.currentScope = scope;
  };

  _proto2.evaluate = function evaluate(code) {
    if (code === void 0) {
      code = "";
    }

    var node;
    if (!code) return;
    node = MyParser.parse(code, {
      ranges: true,
      locations: true,
      ecmaVersion: this.options.ecmaVersion || Interpreter.ecmaVersion
    });
    return this.evaluateNode(node, code);
  };

  _proto2.appendCode = function appendCode(code) {
    return this.evaluate(code);
  };

  _proto2.evaluateNode = function evaluateNode(node, source) {
    var _this2 = this;

    if (source === void 0) {
      source = "";
    }

    this.value = void 0;
    this.source = source;
    this.sourceList.push(source);
    this.isRunning = true; //reset timeout

    this.execStartTime = Date.now();
    this.execEndTime = this.execStartTime; // reset

    this.collectDeclVars = Object.create(null);
    this.collectDeclFuncs = Object.create(null);
    this.collectDeclLex = [];
    var currentScope = this.getCurrentScope();
    var currentContext = this.getCurrentContext();
    var labelStack = currentScope.labelStack.concat([]);
    var callStack = this.callStack.concat([]);

    var reset = function reset() {
      _this2.setCurrentScope(currentScope); //reset scope


      _this2.setCurrentContext(currentContext); //reset context


      currentScope.labelStack = labelStack; //reset label stack

      _this2.callStack = callStack; //reset call stack
    }; // start run


    try {
      var bodyClosure = this.createClosure(node); // add declares to data

      this.addDeclarationsToScope(this.collectDeclVars, this.collectDeclFuncs, this.getCurrentScope());
      var currScope = this.getCurrentScope();
      this._functionVarScope = currScope;
      bodyClosure();
    } catch (e) {
      throw e;
    } finally {
      reset();
      this.execEndTime = Date.now();
    }

    this.isRunning = false;
    return this.getValue();
  };

  _proto2.createErrorMessage = function createErrorMessage(msg, value, node) {
    var message = msg[1].replace("%0", String(value));

    if (node !== null) {
      message += this.getNodePosition(node || this.lastExecNode);
    }

    return message;
  };

  _proto2.createError = function createError(message, error) {
    return new error(message);
  };

  _proto2.createThrowError = function createThrowError(message, error) {
    return this.createError(message, error);
  };

  _proto2.createInternalThrowError = function createInternalThrowError(msg, value, node) {
    return this.createError(this.createErrorMessage(msg, value, node), msg[2]);
  };

  _proto2.checkTimeout = function checkTimeout() {
    if (!this.isRunning) return false;
    var timeout = this.options.timeout || 0;
    var now = Date.now();

    if (now - this.execStartTime > timeout) {
      return true;
    }

    return false;
  };

  _proto2.getNodePosition = function getNodePosition(node) {
    if (node) {
      var errorCode = ""; //this.source.slice(node.start, node.end);

      return node.loc ? " [" + node.loc.start.line + ":" + node.loc.start.column + "]" + errorCode : "";
    }

    return "";
  };

  _proto2.createClosure = function createClosure(node) {
    var _this3 = this;

    var closure = this.getClosure(node);

    if (!closure) {
      console.info('====> ', node);
      throw this.createInternalThrowError(Message_1.Messages.NodeTypeSyntaxError, node.type, node);
    }

    return function () {
      var timeout = _this3.options.timeout;

      if (timeout && timeout > 0 && _this3.checkTimeout()) {
        throw _this3.createInternalThrowError(Message_1.Messages.ExecutionTimeOutError, timeout, null);
      }

      _this3.lastExecNode = node;
      return closure.apply(void 0, arguments);
    };
  } // protected isRootScope(node: ESTree.Expression | ESTree.Pattern): boolean {
  // 	if (node.type === "Identifier") {
  // 		const scope = this.getScopeFromName(node.name, this.getCurrentScope());
  // 		return scope.name === "rootScope";
  // 	}
  // 	return false;
  // }
  ;

  _proto2.safeObjectGet = function safeObjectGet(obj, key, node) {
    if (Symbols_1.isSymbol(key)) {
      // 对于模拟的Symbol属性，实际存储在了一个特殊的key下面
      return obj[Symbols_1.storeKey(key)];
    }

    return obj[key];
  }
  /**
   * @param node
   */
  ;

  _proto2.createCallFunctionGetter = function createCallFunctionGetter(node) {
    var _this4 = this;

    switch (node.type) {
      case "MemberExpression":
        var objectGetter = this.createClosure(node.object);
        var keyGetter = this.createMemberKeyGetter(node);
        var source = this.source;
        return function () {
          var obj = objectGetter();
          var key = keyGetter();

          var func = _this4.safeObjectGet(obj, key, node);

          if (!func || !util_1.isFunction(func)) {
            var name = source.slice(node.start, node.end);
            throw _this4.createInternalThrowError(Message_1.Messages.FunctionUndefinedReferenceError, name, node);
          } // obj.eval = eval
          // obj.eval(...)


          if (func.__IS_EVAL_FUNC) {
            return function (code) {
              return func(new InternalInterpreterReflection(_this4), code, true);
            };
          } // obj.func = Function
          // obj.func(...)


          if (func.__IS_FUNCTION_FUNC) {
            return function () {
              for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
                args[_key2] = arguments[_key2];
              }

              return func.apply(void 0, [new InternalInterpreterReflection(_this4)].concat(args));
            };
          } // method call
          // eg：obj.say(...)
          // eg: obj.say.call(...)
          // eg: obj.say.apply(...)
          // ======================
          // obj.func(...)
          // func = func.bind(obj)
          // tips:
          // func(...) -> func.bind(obj)(...)
          // func.call(...) -> obj.func.call.bind(obj.func)(...)
          // func.apply(...) -> obj.func.apply.bind(obj.func)(...)
          // ...others


          return func.bind(obj);
        };

      default:
        // test() or (0,test)() or a[1]() ...
        var closure = this.createClosure(node);
        return function () {
          var name = "";

          if (node.type === "Identifier") {
            name = node.name;
          } // console.info('the scope is ', this.getCurrentScope())
          // const name: string = (<ESTree.Identifier>node).name;


          var func = closure();

          if (!func || !util_1.isFunction(func)) {
            throw _this4.createInternalThrowError(Message_1.Messages.FunctionUndefinedReferenceError, name, node);
          } // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval
          // var eval = eval;
          // function test(){
          //    eval(...); //note: use local scope in eval5，but in Browser is use global scope
          // }


          if (node.type === "Identifier" && func.__IS_EVAL_FUNC && name === "eval") {
            return function (code) {
              var scope = _this4.getScopeFromName(name, _this4.getCurrentScope());

              var useGlobalScope = scope.name === Symbols_1.SuperScopeName || // !scope.parent || // super scope
              scope.name === Symbols_1.GlobalScopeName || // this.globalScope === scope ||
              scope.name === Symbols_1.RootScopeName; // use local scope if calling eval in super scope

              return func(new InternalInterpreterReflection(_this4), code, !useGlobalScope);
            };
          } // use global scope
          // var g_eval = eval;
          // g_eval("a+1");
          //(0,eval)(...) ...eval alias


          if (func.__IS_EVAL_FUNC) {
            return function (code) {
              return func(new InternalInterpreterReflection(_this4), code, true);
            };
          } // Function('a', 'b', 'return a+b')


          if (func.__IS_FUNCTION_FUNC) {
            return function () {
              for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
                args[_key3] = arguments[_key3];
              }

              return func.apply(void 0, [new InternalInterpreterReflection(_this4)].concat(args));
            };
          }

          var ctx = _this4.options.globalContextInFunction; // with(obj) {
          //     test() // test.call(obj, ...)
          // }

          if (node.type === "Identifier") {
            var scope = _this4.getIdentifierScope(node);

            if (scope.name === Symbols_1.WithScopeName) {
              ctx = scope.data;
            }
          } // function call
          // this = undefined
          // tips:
          // test(...) === test.call(undefined, ...)
          // fix: alert.call({}, ...) Illegal invocation


          return func.bind(ctx);
        };
    }
  };

  _proto2.getIdentifierScope = function getIdentifierScope(node) {
    var currentScope = this.getCurrentScope();
    var scope = this.getScopeFromName(node.name, currentScope);
    return scope;
  };

  _proto2.getVariableName = function getVariableName(node) {
    if (node.type === "Identifier") {
      return node.name;
    } else {
      throw this.createInternalThrowError(Message_1.Messages.VariableTypeSyntaxError, node.type, node);
    }
  }
  /**
   * 保证变量的访问只能在沙箱内部的。如果一个变量没有找到，会默认返回globalScope。
   * 那么如果globalScope如果不存在name的变量，就throw Error
   * @param data 作用域data
   * @param name Identifier标识符
   * @param node AST: Identifier Node
   */
  ;

  _proto2.assertVariable = function assertVariable(data, name, node) {
    if (data === this.globalScope.data && !(name in data)) {
      throw this.createInternalThrowError(Message_1.Messages.VariableUndefinedReferenceError, name, node);
    }
  } // get es3/5 param name
  ;

  _proto2.createParamNameGetter = function createParamNameGetter(node) {
    if (node.type === "Identifier") {
      return function () {
        return node.name;
      };
    } else if (node.type === 'RestElement') {
      return this.createParamNameGetter(node.argument);
    } else {
      throw this.createInternalThrowError(Message_1.Messages.ParamTypeSyntaxError, node.type, node);
    }
  };

  _proto2.createObjectKeyGetter = function createObjectKeyGetter(node) {
    var getter; // var obj = { title: "" }

    if (node.type === "Identifier") {
      getter = function getter() {
        return node.name;
      };
    } else {
      // Literal or ...
      // var obj = { "title": "" } or others...
      getter = this.createClosure(node);
    }

    return function () {
      return getter();
    };
  };

  _proto2.createMemberKeyGetter = function createMemberKeyGetter(node) {
    // s['a'];  node.computed = true
    // s.foo;  node.computed = false
    return node.computed ? this.createClosure(node.property) : this.createObjectKeyGetter(node.property);
  }
  /**
   * 如果一个变量作为左值调用，用这个Getter，主要是判断了const
   * 不是作为左值调用，用createObjectGetter即可
   * @param node
   */
  ;

  _proto2.createLeftObjectGetter = function createLeftObjectGetter(node) {
    var _this5 = this;

    switch (node.type) {
      case 'Identifier':
        return function () {
          var name = node.name;

          var scope = _this5.getScopeFromName(name, _this5.getCurrentScope(), true);

          if (scope.lexDeclared && scope.lexDeclared[name] && scope.lexDeclared[name].kind == 'const') {
            if (scope.lexDeclared[name].init === false) {
              scope.lexDeclared[name].init = true;
            } else {
              // console.info('node ====> ', node, scope)
              throw _this5.createInternalThrowError(Message_1.Messages.ConstChangeError, name, node);
            }
          }

          return scope.data;
        };

      case "MemberExpression":
        return this.createClosure(node.object);

      default:
        throw this.createInternalThrowError(Message_1.Messages.AssignmentTypeSyntaxError, node.type, node);
    }
  } // for UnaryExpression UpdateExpression AssignmentExpression
  ;

  _proto2.createObjectGetter = function createObjectGetter(node) {
    var _this6 = this;

    switch (node.type) {
      case "Identifier":
        return function () {
          return _this6.getScopeDataFromName(node.name, _this6.getCurrentScope());
        };

      case "MemberExpression":
        return this.createClosure(node.object);

      default:
        throw this.createInternalThrowError(Message_1.Messages.AssignmentTypeSyntaxError, node.type, node);
    }
  } // for UnaryExpression UpdateExpression AssignmentExpression
  ;

  _proto2.createNameGetter = function createNameGetter(node) {
    switch (node.type) {
      case "Identifier":
        return function () {
          return node.name;
        };

      case "MemberExpression":
        return this.createMemberKeyGetter(node);

      default:
        throw this.createInternalThrowError(Message_1.Messages.AssignmentTypeSyntaxError, node.type, node);
    }
  } // 创建closure的时候就会注册变量，等于是完成了变量和函数声明的提前操作
  ;

  _proto2.varDeclaration = function varDeclaration(name) {
    var context = this.collectDeclVars;
    context[name] = undefined;
  };

  _proto2.funcDeclaration = function funcDeclaration(name, func) {
    var context = this.collectDeclFuncs;
    context[name] = func;
  }
  /**
   * 在当前词法作用域下声明一个词法变量。这里的声明在词法作用域下是提升的，为的是鉴别未初始化之前对词法变量的访问。
   * 如果一个词法变量init:false,说明这个词法变量在该作用域内是存在的，但是还未初始化，访问它就是非法的。
   * @param name
   */
  // protected lextDeclaration(name: string): void {
  // 	// 声明的时候只可能出现在一个块级作用域的初始状态
  // 	let blockContext = this.lexContext[this.lexContext.length - 1]
  // 	blockContext[name] = {
  // 		init: false,
  // 		val: void 0,
  // 	}
  // }

  /**
   * 将实现扫描得到的变量声明和函数申明提前放到scope.data中
   * 注意变量的声明放进去的值只是undefined
   * @param declVars
   * @param declFuncs
   * @param scope
   */
  ;

  _proto2.addDeclarationsToScope = function addDeclarationsToScope(declVars, declFuncs, scope) {
    var scopeData = scope.data;

    for (var key in declFuncs) {
      var value = declFuncs[key];
      scopeData[key] = value ? value() : value;
    }

    for (var _key4 in declVars) {
      if (!(_key4 in scopeData)) {
        scopeData[_key4] = void 0;
      }
    }
  };

  _proto2.getScopeValue = function getScopeValue(name, startScope) {
    var scope = this.getScopeFromName(name, startScope);
    return scope.data[name];
  };

  _proto2.getScopeDataFromName = function getScopeDataFromName(name, startScope) {
    return this.getScopeFromName(name, startScope).data;
  }
  /**
   * 从当前scope从下往上找，如果当前scope.type=='block'，
   * 先确保scope.lexDeclared[name]是否为false，
   * 如果为false，说明这个块变量没有初始化，直接报错就行了
   * 如果为true，再去scope.data里面找
   * 如果scope.type=='function'，直接去scope.data里面找。
   * @param name
   * @param startScope
   */
  ;

  _proto2.getScopeFromName = function getScopeFromName(name, startScope, constInit) {
    var scope = startScope;

    do {
      if (scope.type == 'block') {
        if (!scope.lexDeclared[name]) {
          // 按理说，一个blockscope上的所有变量都标记在lexDeclared中，也有例外情况，
          // 比如catch(e){}中，变量e会零时插入，且lexDeclared上也不会有标记
          if (name in scope.data) {
            return scope;
          } // 否则向上找

        } else {
          if (scope.lexDeclared[name].init === false) {
            if (constInit && scope.lexDeclared[name].kind == 'const') {
              // const变量初始化的时候这个校验位还没有置为true，放行
              return scope;
            }

            throw this.createInternalThrowError(Message_1.Messages.LetVariableUseBeforeInitReferenceError, name);
          } else if (scope.lexDeclared[name].init === true) {
            return scope;
          } // 否则向上找

        }
      } else {
        // function scope
        // 函数级别的作用域也可能有lexDeclared
        if (scope.lexDeclared && scope.lexDeclared[name] && scope.lexDeclared[name].init === false) {
          throw this.createInternalThrowError(Message_1.Messages.LetVariableUseBeforeInitReferenceError, name);
        }

        if (name in scope.data) {
          //if (hasOwnProperty.call(scope.data, name)) {
          return scope;
        } // 否则向上找

      }
    } while (scope = scope.parent);

    return this.globalScope;
  };

  _proto2.entryBlockScope = function entryBlockScope(newScope) {
    var prevScope = this.getCurrentScope(); // 函数执行时，创建新的scope，然后下一行将程序的运行指针指向新的scope

    this.setCurrentScope(newScope); // blockScope不用赋值新的提升变量
    // self.addDeclarationsToScope(declVars, declFuncs, currentScope);

    return prevScope;
  };

  _proto2.setValue = function setValue(value) {
    var isFunctionCall = this.callStack.length;

    if (this.isVarDeclMode || isFunctionCall || value === Symbols_1.EmptyStatementReturn || value === Symbols_1.Break || value === Symbols_1.Continue || value instanceof TokenClass_1.BreakLabel || value instanceof TokenClass_1.ContinueLabel) {
      return value;
    }

    this.value = value instanceof TokenClass_1.Return ? value.value : value;
    return value;
  };

  _proto2.getValue = function getValue() {
    return this.value;
  };

  return Interpreter;
}(Closure_1.ClosureHandler);

exports.Interpreter = Interpreter;
Interpreter.version = version;
Interpreter.eval = internalEval;
Interpreter.Function = internalFunction; // 默认切换到2018，支持解构

Interpreter.ecmaVersion = 2018; // alert.call(globalContextInFunction, 1);
// fix: alert.call({}, 1); // Illegal invocation
// function func(){
//     this;// Interpreter.globalContextInFunction
// }
// func()

Interpreter.globalContextInFunction = void 0;
Interpreter.global = Object.create(null);

/***/ }),

/***/ "./src/util/index.ts":
/*!***************************!*\
  !*** ./src/util/index.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

function defineFunctionName(func, name) {
  Object.defineProperty(func, "name", {
    value: name,
    writable: false,
    enumerable: false,
    configurable: true
  });
}

exports.defineFunctionName = defineFunctionName;

function isFunction(func) {
  return typeof func === "function";
}

exports.isFunction = isFunction;

function noop() {}

exports.noop = noop;

/***/ }),

/***/ "./src/vm.ts":
/*!*******************!*\
  !*** ./src/vm.ts ***!
  \*******************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var main_1 = __webpack_require__(/*! ./interpreter/main */ "./src/interpreter/main.ts"); // TODO:
// add tests


function createContext(ctx) {
  if (ctx === void 0) {
    ctx = Object.create(null);
  }

  return ctx;
}

exports.createContext = createContext;

function compileFunction(code, params, options) {
  if (params === void 0) {
    params = [];
  }

  if (options === void 0) {
    options = {};
  }

  var ctx = options.parsingContext;
  var timeout = options.timeout === undefined ? 0 : options.timeout;
  var wrapCode = "\n    (function anonymous(" + params.join(",") + "){\n         " + code + "\n    });\n    ";
  var interpreter = new main_1.Interpreter(ctx, {
    ecmaVersion: options.ecmaVersion,
    timeout: timeout,
    rootContext: options.rootContext,
    globalContextInFunction: options.globalContextInFunction
  });
  return interpreter.evaluate(wrapCode);
}

exports.compileFunction = compileFunction;

function _runInContext(code, ctx, options) {
  var interpreter = new main_1.Interpreter(ctx, options);
  return interpreter.evaluate(code);
}

exports.runInContext = _runInContext;
exports.runInNewContext = _runInContext;

var Script =
/*#__PURE__*/
function () {
  function Script(code) {
    this._code = code;
  }

  var _proto = Script.prototype;

  _proto.runInContext = function runInContext(ctx) {
    return _runInContext(this._code, ctx);
  };

  _proto.runInNewContext = function runInNewContext(ctx) {
    return _runInContext(this._code, ctx);
  };

  return Script;
}();

exports.Script = Script;

/***/ }),

/***/ 0:
/*!****************************!*\
  !*** multi ./src/index.ts ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/index.ts */"./src/index.ts");


/***/ })

/******/ });
});
//# sourceMappingURL=estime.js.map