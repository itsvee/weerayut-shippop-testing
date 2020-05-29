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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _script_linear__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./script/linear */ "./src/script/linear.js");
/* harmony import */ var _script_binary__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./script/binary */ "./src/script/binary.js");
/* harmony import */ var _script_bubble__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./script/bubble */ "./src/script/bubble.js");



document.querySelector('#searchBtn').addEventListener('click', function (e) {
  var list = document.getElementById('listNumber');
  var numberToFind = document.getElementById('numberToFind');
  var typeToFind = document.getElementById('typeOfSearch');
  var list_arr = convertToArray(list);

  if (list_arr) {
    if (numberToFind.value.length !== 0) {
      switch (typeToFind.value) {
        case 'linear':
          Object(_script_linear__WEBPACK_IMPORTED_MODULE_0__["searchByLinear"])(list_arr, parseInt(numberToFind.value));
          break;

        case 'binary':
          Object(_script_binary__WEBPACK_IMPORTED_MODULE_1__["searchByBinary"])(list_arr, parseInt(numberToFind.value));
          break;

        case 'bubble':
          Object(_script_bubble__WEBPACK_IMPORTED_MODULE_2__["searchByBubble"])(list_arr, parseInt(numberToFind.value));
          break;
      }
    } else {
      alert('กรุณาใส่ตัวเลขที่ต้องการค้นหา');
    }
  } else {
    alert('กรุณาใส่ list ตัวเลข');
  }
});

function convertToArray(ele) {
  if (ele.value.length !== 0) {
    return ele.value.split(',').map(Number);
  } else {
    return false;
  }
}

/***/ }),

/***/ "./src/app.scss":
/*!**********************!*\
  !*** ./src/app.scss ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/script/binary.js":
/*!******************************!*\
  !*** ./src/script/binary.js ***!
  \******************************/
/*! exports provided: searchByBinary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchByBinary", function() { return searchByBinary; });
function searchByBinary(numArr, numToFind) {
  // Clear result textarea
  document.getElementById('searchResult').value = '';
  var html = 'List : [ ' + numArr.toString() + ' ] \n';
  var sortArr = numArr.sort(function (a, b) {
    return a - b;
  });
  html += 'List sort : [ ' + sortArr.toString() + ' ] \n';
  html += 'Search : ' + numToFind + '\n';
  html += 'Result ::: \n';
  document.getElementById('searchResult').value = html;
  var min = 0;
  var max = sortArr.length - 1;
  var mid = 0;
  var round = 1;

  while (min <= max) {
    mid = Math.floor((min + max) / 2);

    if (sortArr[mid] === numToFind) {
      var _output = 'Round : ' + round + ' ===> ' + numToFind + ' == ' + sortArr[mid] + '  ( Min: ' + sortArr[min] + ' | Mid: ' + sortArr[mid] + ' | Max: ' + sortArr[max] + ' )\n';

      _output += 'Found your number!!';
      document.getElementById('searchResult').value += _output;
      return numToFind;
    } else if (sortArr[mid] < numToFind) {
      var _output2 = 'Round : ' + round + ' ===> ' + numToFind + ' > ' + sortArr[mid] + '  ( Min: ' + sortArr[min] + ' | Mid: ' + sortArr[mid] + ' | Max: ' + sortArr[max] + ' )\n';

      document.getElementById('searchResult').value += _output2;
      min = mid + 1;
    } else {
      var _output3 = 'Round : ' + round + ' ===> ' + numToFind + ' < ' + sortArr[mid] + '  ( Min: ' + sortArr[min] + ' | Mid: ' + sortArr[mid] + ' | Max: ' + sortArr[max] + ' )\n';

      document.getElementById('searchResult').value += _output3;
      max = mid - 1;
    }

    round++;
  }

  var output = 'Not found your number !!';
  document.getElementById('searchResult').value += output;
  return false;
}

/***/ }),

/***/ "./src/script/bubble.js":
/*!******************************!*\
  !*** ./src/script/bubble.js ***!
  \******************************/
/*! exports provided: searchByBubble */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchByBubble", function() { return searchByBubble; });
function searchByBubble(numArr, numToFind) {
  // Clear result textarea
  document.getElementById('searchResult').value = '';
  var html = 'List : [ ' + numArr.toString() + ' ] \n';
  var sortArr = numArr.sort(function (a, b) {
    return a - b;
  });
  html += 'Search : ' + numToFind + '\n';
  html += 'Result ::: \n';
  document.getElementById('searchResult').value = html;
}

/***/ }),

/***/ "./src/script/linear.js":
/*!******************************!*\
  !*** ./src/script/linear.js ***!
  \******************************/
/*! exports provided: searchByLinear */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchByLinear", function() { return searchByLinear; });
function searchByLinear(numArr, numToFind) {
  // Clear result textarea
  document.getElementById('searchResult').value = '';
  var html = 'List : [ ' + numArr.toString() + ' ] \n';
  html += 'Search : ' + numToFind + '\n';
  html += 'Result ::: \n';
  document.getElementById('searchResult').value = html;

  for (var i = 0; i < numArr.length; i++) {
    if (numArr[i] === numToFind) {
      var output = 'Round : ' + i + ' ===> ' + numToFind + ' = ' + numArr[i] + ' found !!';
      document.getElementById('searchResult').value += output;
      return false;
    } else {
      var _output = 'Round : ' + i + ' ===> ' + numToFind + ' != ' + numArr[i] + '\n';

      document.getElementById('searchResult').value += _output;
    }

    if (i === numArr.length - 1) {
      var _output2 = 'Not Found !!';
      document.getElementById('searchResult').value += _output2;
    }
  }
}

function setDelay(i) {
  setTimeout(function () {
    console.log(i);
  }, 1000);
}

/***/ }),

/***/ 0:
/*!*****************************************!*\
  !*** multi ./src/app.js ./src/app.scss ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/vvkhxng/Documents/DevArea/shippop/test/test-1/src/app.js */"./src/app.js");
module.exports = __webpack_require__(/*! /Users/vvkhxng/Documents/DevArea/shippop/test/test-1/src/app.scss */"./src/app.scss");


/***/ })

/******/ });