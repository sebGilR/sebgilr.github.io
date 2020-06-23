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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"* {\\n  margin: 0;\\n  padding: 0;\\n  border: 0;\\n  text-decoration: none;\\n  box-sizing: border-box;\\n  list-style: none; }\\n\\nhtml {\\n  scroll-behavior: smooth; }\\n\\nh1, h2, h3 {\\n  font-family: 'Oswald', sans-serif; }\\n\\nbody {\\n  font-family: 'Jost', sans-serif;\\n  background-color: #1f1e1e; }\\n\\nh1 {\\n  font-size: 1.5em; }\\n\\n.nav {\\n  background-color: #1f1e1e;\\n  color: #ebe9e9;\\n  position: fixed;\\n  left: 0;\\n  top: 0;\\n  bottom: 0;\\n  padding: 10px 0;\\n  width: 60px;\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  box-shadow: 0px 0px 5px #1f1e1e;\\n  z-index: 3; }\\n  @media (min-width: 768px) {\\n    .nav {\\n      padding: 30px 0;\\n      width: 180px;\\n      letter-spacing: 1px; } }\\n  @media (min-width: 1445px) {\\n    .nav {\\n      width: 230px; } }\\n  @media (min-width: 2100px) {\\n    .nav {\\n      width: 320px;\\n      font-size: 1.2em; } }\\n  .nav a {\\n    color: #ebe9e9;\\n    font-size: 1em; }\\n  .nav_menu {\\n    display: none; }\\n    @media (min-width: 768px) {\\n      .nav_menu {\\n        display: flex;\\n        flex-direction: column;\\n        align-items: center; }\\n        .nav_menu a {\\n          display: block;\\n          margin: 15px 0;\\n          border-bottom: #64c064 2px solid;\\n          transition: ease-in-out .2s; }\\n          .nav_menu a:hover {\\n            letter-spacing: 2px;\\n            color: #64c064;\\n            transition: ease-in-out .2s; } }\\n  .nav_icons {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; }\\n    .nav_icons a {\\n      font-size: 2em;\\n      margin-top: 30px; }\\n      .nav_icons a:hover {\\n        font-size: 2.5em; }\\n    @media (min-width: 768px) {\\n      .nav_icons {\\n        display: none; } }\\n  .nav_title {\\n    display: none; }\\n    @media (min-width: 768px) {\\n      .nav_title {\\n        display: inline-block;\\n        font-size: 1.5em;\\n        margin-bottom: 50px;\\n        text-align: center; } }\\n  .nav_network {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center; }\\n    @media (min-width: 768px) {\\n      .nav_network {\\n        flex-direction: row;\\n        justify-content: space-evenly;\\n        margin-top: 50px; } }\\n    .nav_network a {\\n      font-size: 2em;\\n      margin-top: 30px;\\n      transition: .2s ease-in-out; }\\n      .nav_network a:hover {\\n        font-size: 2.5em;\\n        transition: .2s ease-in-out; }\\n      @media (min-width: 768px) {\\n        .nav_network a {\\n          font-size: 2em; }\\n          .nav_network a:hover {\\n            font-size: 2.5em; } }\\n  .nav #progress {\\n    width: 2px;\\n    height: 100%;\\n    position: absolute;\\n    right: 0;\\n    top: 0;\\n    background-color: #64c064; }\\n\\nmain {\\n  background-color: #ebe9e9;\\n  color: #1f1e1e;\\n  position: absolute;\\n  right: 0;\\n  top: 0;\\n  left: 60px;\\n  letter-spacing: 1px; }\\n  main h1, main h3, main span, main strong {\\n    color: #64c064;\\n    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.219);\\n    font-weight: bold; }\\n  main h2 {\\n    text-align: center;\\n    margin: 20px 0; }\\n  @media (min-width: 1445px) {\\n    main {\\n      padding-right: 10%;\\n      padding-left: 10%;\\n      font-size: 110%; } }\\n  @media (min-width: 2100px) {\\n    main {\\n      padding-right: 20%;\\n      padding-left: 20%; } }\\n  main .about {\\n    height: 40vh;\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    justify-content: space-evenly;\\n    padding: 50px;\\n    color: #ebe9e9;\\n    text-shadow: 0 0 7px #1f1e1e;\\n    background-color: #1f1e1e;\\n    font-size: 1.2em; }\\n    @media (min-width: 2100px) {\\n      main .about {\\n        border-radius: 10px;\\n        margin: 20px; } }\\n  main .projects_project {\\n    padding: 40px 20px;\\n    display: flex;\\n    flex-direction: column;\\n    justify-items: center;\\n    align-items: center;\\n    border-bottom: 3px double #64c064; }\\n    main .projects_project h3 {\\n      color: rgba(43, 115, 43, 0.842); }\\n    @media (min-width: 1024px) {\\n      main .projects_project {\\n        display: grid;\\n        grid-template-columns: 60% calc(40% - 50px);\\n        grid-template-rows: auto 30px;\\n        padding: 50px;\\n        grid-gap: 50px;\\n        align-items: start; } }\\n    main .projects_project .col {\\n      width: 100%;\\n      display: flex;\\n      flex-direction: column;\\n      align-items: center; }\\n      main .projects_project .col .small {\\n        margin: 15px 0; }\\n        @media (min-width: 1024px) {\\n          main .projects_project .col .small {\\n            display: none; } }\\n      main .projects_project .col .big {\\n        display: none; }\\n        @media (min-width: 1024px) {\\n          main .projects_project .col .big {\\n            display: inline-block; } }\\n    main .projects_project .browser-frame {\\n      position: relative;\\n      border-radius: 5px;\\n      background-color: rgba(230, 230, 230, 0.7);\\n      border-top: 2em solid rgba(230, 230, 230, 0.7);\\n      box-shadow: 0 0.1em 1em 0 rgba(0, 0, 0, 0.4);\\n      height: auto;\\n      max-width: 400px; }\\n      @media (min-width: 1024px) {\\n        main .projects_project .browser-frame {\\n          max-width: 500px; } }\\n      main .projects_project .browser-frame::before {\\n        display: block;\\n        position: absolute;\\n        content: '';\\n        top: -1.25em;\\n        left: 1em;\\n        width: 0.5em;\\n        height: 0.5em;\\n        border-radius: 50%;\\n        background-color: #f44;\\n        box-shadow: 0 0 0 2px #f44, 1.5em 0 0 2px #9b3, 3em 0 0 2px #fb5; }\\n      main .projects_project .browser-frame img {\\n        display: inline-block;\\n        width: 100%;\\n        height: auto; }\\n    main .projects_project .actions {\\n      text-align: center;\\n      margin: 20px 0; }\\n      @media (min-width: 768px) {\\n        main .projects_project .actions {\\n          margin-top: 15px; } }\\n      main .projects_project .actions a {\\n        font-weight: bold;\\n        color: #1f1e1e;\\n        background-color: #64c064;\\n        display: inline-block;\\n        box-shadow: 0 0.3em 0.5em 0 rgba(0, 0, 0, 0.5);\\n        padding: 7px;\\n        border-radius: 5px;\\n        transition: ease-in .3s; }\\n        main .projects_project .actions a:hover {\\n          color: #64c064;\\n          text-shadow: 0 0 7px #1f1e1e;\\n          background-color: #1f1e1e;\\n          transition: ease-out  .3s;\\n          padding-right: 15px;\\n          padding-left: 15px; }\\n    main .projects_project_description {\\n      margin: 20px 0 30px 0; }\\n      main .projects_project_description a {\\n        font-weight: bold;\\n        color: #1f1e1e;\\n        display: inline-block;\\n        border-bottom: 2px solid #64c064; }\\n        main .projects_project_description a:hover {\\n          color: #64c064; }\\n    main .projects_project .stack {\\n      height: auto;\\n      width: 100%; }\\n      @media (min-width: 768px) {\\n        main .projects_project .stack {\\n          grid-column: 1 / 3; } }\\n      main .projects_project .stack ul {\\n        width: 100%;\\n        display: flex;\\n        justify-content: center;\\n        flex-wrap: wrap; }\\n        @media (min-width: 768px) {\\n          main .projects_project .stack ul {\\n            height: 30px; } }\\n        main .projects_project .stack ul li:not(:last-child) {\\n          margin-right: 30px; }\\n        main .projects_project .stack ul svg {\\n          height: 30px;\\n          width: auto; }\\n  main .publications {\\n    width: 100%;\\n    display: flex;\\n    flex-direction: column; }\\n    main .publications .visit {\\n      color: #1f1e1e; }\\n    main .publications strong {\\n      color: rgba(43, 115, 43, 0.842); }\\n    main .publications_publication {\\n      display: flex;\\n      flex-direction: column;\\n      justify-content: center;\\n      align-items: center;\\n      padding: 20px; }\\n      @media (min-width: 768px) {\\n        main .publications_publication {\\n          flex-direction: row; } }\\n      main .publications_publication img {\\n        width: 220px;\\n        height: auto;\\n        margin-bottom: 20px; }\\n        @media (min-width: 768px) {\\n          main .publications_publication img {\\n            width: 180px;\\n            margin-bottom: 0; } }\\n      main .publications_publication p {\\n        margin-left: 20px; }\\n  @media (min-width: 768px) {\\n    main {\\n      left: 180px; } }\\n  @media (min-width: 1445px) {\\n    main {\\n      left: 230px; } }\\n\\n#tracker_img {\\n  max-height: 350px;\\n  width: auto; }\\n\\n@media (min-width: 1024px) {\\n  #tracker {\\n    grid-template-columns: 40% calc(60% - 50px);\\n    grid-template-rows: auto 30px; } }\\n\\nfooter {\\n  background-color: #1f1e1e;\\n  color: #ebe9e9;\\n  padding: 0.5em;\\n  text-align: center;\\n  line-height: 2em;\\n  margin-top: 3em; }\\n  footer a {\\n    color: #64c064; }\\n    footer a:hover {\\n      color: #ebe9e9; }\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot || '').concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_scss__WEBPACK_IMPORTED_MODULE_0__);\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.scss?");

/***/ })

/******/ });