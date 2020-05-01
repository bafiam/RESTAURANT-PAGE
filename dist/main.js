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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nvar ___CSS_LOADER_GET_URL_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\nvar ___CSS_LOADER_URL_IMPORT_0___ = __webpack_require__(/*! ../src/imgs/newback1.jpg */ \"./src/imgs/newback1.jpg\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);\n// Module\nexports.push([module.i, \"html,\\nbody,\\ndiv,\\nh1,\\nh2,\\nh3,\\nh4,\\nh5,\\nh6,\\np {\\n  padding: 0;\\n  border: 0;\\n  font-size: 100%;\\n  font: inherit;\\n  vertical-align: baseline;\\n  outline: none;\\n  -webkit-box-sizing: border-box;\\n  -moz-box-sizing: border-box;\\n  box-sizing: border-box;\\n}\\n\\n.headerDiv {\\n  padding: 50px;\\n  text-align: center;\\n  background: #1abc9c;\\n  color: white;\\n  font-size: 30px;\\n}\\n\\n.history {\\n  margin-right: 340px;\\n  margin-left: 340px;\\n  margin-top: 30px;\\n  margin-bottom: 30px;\\n  font-family:\\n    \\\"Lucida Sans\\\",\\n    \\\"Lucida Sans Regular\\\",\\n    \\\"Lucida Grande\\\",\\n    \\\"Lucida Sans Unicode\\\",\\n    Geneva,\\n    Verdana,\\n    sans-serif;\\n  font-style: normal;\\n  font-size: medium;\\n  line-height: 40px;\\n  background: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n}\\n\\n.p-title {\\n  text-align: center;\\n}\\n\\n.contentDiv {\\n  display: flex;\\n  margin-bottom: 10px;\\n  background: white;\\n  box-shadow: 3px 3px 7px rgba(66, 65, 65, 0.4);\\n  width: 80%;\\n  margin-left: 45px;\\n  margin-top: 10px;\\n}\\n\\n.imgDiv img {\\n  width: 180px;\\n  height: 120px;\\n  padding: 10px;\\n}\\n\\n.textDiv {\\n}\\n\\n.tab {\\n  overflow: hidden;\\n  border: 1px solid #ccc;\\n  background-color: #f1f1f1;\\n}\\n\\n.tab button {\\n  background-color: inherit;\\n  float: left;\\n  border: none;\\n  outline: none;\\n  cursor: pointer;\\n  padding: 14px 16px;\\n  transition: 0.3s;\\n  font-size: 17px;\\n}\\n\\n#tabcontent1,\\n#tabcontent2 {\\n  padding: 100px 12px;\\n  border: 1px solid #ccc;\\n  border-top: none;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.active {\\n  background-color: #666363;\\n}\\n\\n.d-block {\\n  display: block;\\n}\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/style.css?./node_modules/css-loader/dist/cjs.js");

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

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/getUrl.js?");

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

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Contact {\n  static loadContact() {\n    const getContent = document.getElementById('content');\n\n\n    const contentDiv = document.createElement('div');\n\n\n    contentDiv.setAttribute('id', 'tabcontent1');\n    contentDiv.setAttribute('class', 'hide');\n\n\n    const contentH3 = document.createElement('h3');\n    contentH3.textContent = 'Contacts';\n\n    const contentP = document.createElement('p');\n    contentP.textContent = 'Elit incididunt nisi cupidatat eu proident laboris esse et aliqua qui anim ullamco. Magna non aliquip ullamco pariatur incididunt aute sunt exercitation irure nulla consequat commodo nulla laboris. Aliqua eiusmod ullamco ipsum labore officia est. Lorem mollit do fugiat fugiat eu enim mollit qui adipisicing eu proident nulla irure. Ipsum Lorem consectetur occaecat eu elit occaecat pariatur. Deserunt adipisicing adipisicing consectetur Lorem mollit aliquip elit non tempor eiusmod deserunt. Magna qui nostrud laborum adipisicing irure officia.';\n\n\n    contentDiv.append(contentH3, contentP)\n    getContent.append(contentDiv);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Contact);\n\n//# sourceURL=webpack:///./src/contact.js?");

/***/ }),

/***/ "./src/dashboard.js":
/*!**************************!*\
  !*** ./src/dashboard.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n\nclass Dashboard {\n  static loadDashboard() {\n    const data = [\n      { image: '../src/imgs/front-about.jpg', title: 'spiced food', cost: '$1234' },\n      { image: '../src/imgs/front-about2.jpg', title: 'spiced food', cost: '$1234' },\n      { image: '../src/imgs/Talisman_web_0025.jpg', title: 'spiced food', cost: '$1234' },\n      { image: '../src/imgs/Talisman_web_0033.jpg', title: 'spiced food', cost: '$1234' },\n      { image: '../src/imgs/Talisman_web_0067-400x400.jpg', title: 'spiced food', cost: '$1234' },\n      { image: '../src/imgs/Talisman_web_0073-400x400.jpg', title: 'spiced food', cost: '$1234' },\n    ];\n\n    const getContent = document.getElementById('content');\n\n    const parentDiv = document.createElement('div');\n    parentDiv.setAttribute('class', 'hide');\n    parentDiv.setAttribute('id', 'tabcontent3')\n    data.forEach(element => {\n      const contentDiv = document.createElement('div');\n      contentDiv.setAttribute('class', 'contentDiv');\n      const imgDiv = document.createElement('div');\n      imgDiv.setAttribute('class', 'imgDiv');\n      const contentImg = document.createElement('img');\n      contentImg.src = element.image;\n      const textDiv = document.createElement('div');\n      textDiv.setAttribute('class', 'textDiv');\n      const contentTitle = document.createElement('h4');\n      contentTitle.textContent = element.title;\n      const contentPrice = document.createElement('h5');\n      contentPrice.textContent = element.cost;\n\n\n      imgDiv.appendChild(contentImg);\n      contentDiv.appendChild(imgDiv);\n\n      textDiv.appendChild(contentTitle);\n      textDiv.appendChild(contentPrice);\n      contentDiv.appendChild(textDiv);\n\n\n      parentDiv.appendChild(contentDiv);\n    });\n\n    getContent.appendChild(parentDiv);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Dashboard);\n\n//# sourceURL=webpack:///./src/dashboard.js?");

/***/ }),

/***/ "./src/header.js":
/*!***********************!*\
  !*** ./src/header.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_imgs_newback1_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../src/imgs/newback1.jpg */ \"./src/imgs/newback1.jpg\");\n\n\nclass Header {\n  static loadHeader() {\n    const getContent = document.getElementById('content');\n\n    const headerDiv = document.createElement('div');\n    headerDiv.textContent = 'WELCOME TO THE TALISMAN HOTEL';\n    headerDiv.setAttribute('class', 'headerDiv');\n    getContent.appendChild(headerDiv);\n\n    const desciption = 'From the humble beginnings back in the 90’s, The Talisman started as a small old house in Karen originally occupied by the famous wildlife photographer and author Alan Root in their youth. The Talisman has since grown into a household name with one of the best cuisines in the country. Come experience fine dining in a whole different setting. An environmental friendly place with an organic garden and  highly rated and awarded on International restaurant platforms.';\n\n\n    const spanHead = document.createElement('h3');\n    spanHead.textContent = 'THE TALISMAN STORY';\n    spanHead.setAttribute('class', 'p-title');\n    getContent.appendChild(spanHead);\n\n    const span = document.createElement('p');\n    span.textContent = desciption;\n    span.setAttribute('class', 'history');\n    const myIcon = new Image();\n    myIcon.src = _src_imgs_newback1_jpg__WEBPACK_IMPORTED_MODULE_0__[\"imageOne\"];\n    span.appendChild(myIcon);\n    getContent.appendChild(span);\n  }\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Header);\n\n//# sourceURL=webpack:///./src/header.js?");

/***/ }),

/***/ "./src/imgs/newback1.jpg":
/*!*******************************!*\
  !*** ./src/imgs/newback1.jpg ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (__webpack_require__.p + \"fbf5ad26ba1931682024d115e6b03dcf.jpg\");\n\n//# sourceURL=webpack:///./src/imgs/newback1.jpg?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ \"./src/header.js\");\n/* harmony import */ var _dashboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard */ \"./src/dashboard.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_style_css__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\n\nconst openContact = () => {\n  const getContact = document.getElementById('tabcontent1');\n  const getMenu = document.getElementById('tabcontent2');\n  const getDash = document.getElementById('tabcontent3');\n  if (getMenu.classList.contains('d-block')|| getDash.classList.contains('d-block')) {\n    getMenu.classList.replace('d-block', 'hide');\n    getDash.classList.replace('d-block', \"hide\");\n  }\n\n  getContact.classList.replace('hide', 'd-block');\n};\n\nconst openMenu = () => {\n  const getMenu = document.getElementById('tabcontent2');\n  const getContact = document.getElementById('tabcontent1');\n  const getDash = document.getElementById('tabcontent3');\n  if (getContact.classList.contains('d-block') || getDash.classList.contains('d-block')) {\n    getContact.classList.replace('d-block', \"hide\");\n    getDash.classList.replace('d-block', \"hide\");\n  }\n\n  getMenu.classList.replace('hide', \"d-block\");\n};\nconst openDash = () => {\n  const getMenu = document.getElementById('tabcontent2');\n  const getContact = document.getElementById('tabcontent1');\n  const getDash = document.getElementById('tabcontent3');\n  if (getContact.classList.contains('d-block') || getMenu.classList.contains('d-block')) {\n    getContact.classList.replace('d-block', \"hide\");\n    getMenu.classList.replace('d-block', \"hide\");\n  }\n\n  getDash.classList.replace('hide', \"d-block\");\n};\n\n\nclass Navigate {\n  static loadNavigate() {\n    const getContent = document.getElementById('content');\n    const navigateDiv = document.createElement('div');\n    navigateDiv.setAttribute('class', 'tab');\n\n    const dashBtn = document.createElement('button');\n    dashBtn.textContent = 'Menu';\n    dashBtn.setAttribute('class', 'dashbtn');\n    dashBtn.addEventListener('click', () => {\n      openDash();\n    });\n\n    const contactBtn = document.createElement('button');\n    contactBtn.textContent = 'Contact';\n    contactBtn.setAttribute('class', 'contactbtn');\n    contactBtn.addEventListener('click', () => {\n      openContact();\n    });\n\n\n    const menuBtn = document.createElement('button');\n    menuBtn.textContent = 'Home';\n    menuBtn.setAttribute('class', 'menubtn');\n    menuBtn.addEventListener('click', () => {\n      openMenu();\n    });\n\n\n    navigateDiv.append(menuBtn,contactBtn, dashBtn);\n    getContent.appendChild(navigateDiv);\n  }\n}\n\n\n_header__WEBPACK_IMPORTED_MODULE_0__[\"default\"].loadHeader();\nNavigate.loadNavigate();\n_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"].loadContact();\n_menu__WEBPACK_IMPORTED_MODULE_3__[\"default\"].loadMenu();\n_dashboard__WEBPACK_IMPORTED_MODULE_1__[\"default\"].loadDashboard();\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Menu {\n  static loadMenu() {\n    const getContent = document.getElementById('content');\n\n\n    const contentDiv = document.createElement('div');\n    contentDiv.setAttribute('id', 'tabcontent2');\n    contentDiv.setAttribute('class', 'd-block');\n\n    const contentH3 = document.createElement('h3');\n    contentH3.textContent = 'Home';\n    const contentP = document.createElement('p');\n    contentP.textContent = 'Mollit reprehenderit quis et cupidatat duis commodo magna non voluptate occaecat fugiat. Amet tempor adipisicing voluptate in veniam irure excepteur est elit sint. Culpa commodo irure deserunt occaecat irure fugiat duis do duis. Duis adipisicing voluptate incididunt sint sint anim mollit fugiat ea aliqua ea cupidatat occaecat. Consectetur deserunt dolore nulla deserunt nostrud Lorem sunt eiusmod nostrud. Culpa consectetur anim ex irure dolore est amet et cillum amet fugiat sint anim veniam. Minim nostrud ex voluptate aliquip. Aute proident mollit eu ea veniam pariatur fugiat aliqua ipsum mollit deserunt tempor est id. Voluptate enim ipsum non commodo. Aute labore quis voluptate sunt ea et id enim pariatur et cillum id nostrud tempor. Do enim ullamco deserunt veniam reprehenderit eiusmod et aliqua Lorem qui cillum aliqua aliqua mollit.Excepteur ex incididunt et qui cillum commodo aute commodo reprehenderit anim velit proident esse pariatur. Consectetur est veniam et sint cupidatat do labore consequat qui nostrud Lorem. Laboris ex sit nisi culpa.';\n\n\n    \n    contentDiv.append(contentH3,contentP);\n    getContent.append(contentDiv);\n  }\n}\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Menu);\n\n//# sourceURL=webpack:///./src/menu.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(content, options);\n\n\n\nmodule.exports = content.locals || {};\n\n//# sourceURL=webpack:///./src/style.css?");

/***/ })

/******/ });