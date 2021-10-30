/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"main": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/js/index.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/modules/footer/footer.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/footer/footer.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/blocks/modules/header/header.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/header/header.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var menuButton = document.querySelector(".header__menu-button");
var menuButtonClose = document.querySelector(".header__menu-close");
var mobileMenu = document.querySelector(".header__menu");
var headerMenuOverlay = document.querySelector(".header__menu-overlay");
var headerArray = [headerMenuOverlay, mobileMenu];

if (headerArray.length) {
  menuButton.addEventListener("click", function () {
    headerArray.forEach(function (elem) {
      elem.classList.toggle("_active");
    });
  });
  menuButtonClose.addEventListener("click", function () {
    headerArray.forEach(function (elem) {
      elem.classList.toggle("_active");
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/lesson-consist-1/lesson-consist-1.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/lesson-consist-1/lesson-consist-1.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var lessonConsistControl = document.querySelector('.lesson-consist__control');
var lessonConsistPlayer = document.querySelector('.lesson-consist__video video');
var lessonConsistTimeline = document.querySelectorAll('.lesson-consist__timeline img');
var lessonConsistVolume = document.querySelectorAll('.lesson-consist__volume img');
var lessonConsistScreenSize = document.querySelector('.lesson-consist__screensize');

if (lessonConsistControl) {
  lessonConsistPlayer.controls = false;
  lessonConsistPlayer.muted = true;
  var playerFlagPlay = true;
  var playerFlagVolume = true;
  lessonConsistScreenSize.addEventListener('click', function () {
    lessonConsistPlayer.requestFullscreen();
  });
  lessonConsistTimeline.forEach(function (el, i, arr) {
    el.addEventListener('click', function () {
      toggleShowElem(arr);

      if (playerFlagPlay) {
        lessonConsistPlayer.pause();
        playerFlagPlay = false;
      } else {
        lessonConsistPlayer.play();
        playerFlagPlay = true;
      }
    });
  });
  lessonConsistVolume.forEach(function (el, i, arr) {
    el.addEventListener('click', function () {
      toggleShowElem(arr);

      if (playerFlagVolume) {
        lessonConsistPlayer.muted = false;
        playerFlagVolume = false;
      } else {
        lessonConsistPlayer.muted = true;
        playerFlagVolume = true;
      }
    });
  });
}

function toggleShowElem(arr) {
  arr.forEach(function (el) {
    el.classList.contains('hide-elem') ? el.classList.remove('hide-elem') : el.classList.add('hide-elem');
  });
}

/***/ }),

/***/ "./src/blocks/modules/lesson-consist-3/lesson-consist-3.js":
/*!*****************************************************************!*\
  !*** ./src/blocks/modules/lesson-consist-3/lesson-consist-3.js ***!
  \*****************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle */ "./node_modules/swiper/swiper-bundle.js");
/* harmony import */ var swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__);

var lessonConsist = new swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default.a(".lesson-consist__carousel", {
  grabCursor: true,
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 20,
  loop: true,
  breakpoints: {
    360: {
      slidesPerView: 1,
      spaceBetween: 30,
      centeredSlides: true
    },
    991: {
      spaceBetween: 50
    }
  }
});

/***/ }),

/***/ "./src/blocks/modules/mainblock/mainblock.js":
/*!***************************************************!*\
  !*** ./src/blocks/modules/mainblock/mainblock.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var $firstblockButton = document.querySelector('.firstblock__button');
var $firstblockPlayer = document.querySelector('.firstblock__middle video');
var $firstblockMiddle = document.querySelector('.firstblock__middle');
var $arrowLeftWrap = document.querySelector('.arrow-left-wrap');
var $firstblockMiddleClose = document.querySelector('.firstblock__middle--close');
var $firstblockMiddleCap = document.querySelector('.firstblock__middle--cap');
var $firstblockItemArray = [$firstblockButton, $firstblockMiddle];

if ($firstblockItemArray.length) {
  var addFixedElemOnWindow = function addFixedElemOnWindow(positionElem, elem) {
    var positionWindow = window.pageYOffset;

    if (positionElem <= positionWindow) {
      elem.classList.add('elem-fixed');
      $arrowLeftWrap.classList.add('hide-elem');

      if (elem === $firstblockMiddle) {
        $firstblockMiddleCap.classList.add('elem-fixed');
      }
    } else {
      elem.classList.remove('elem-fixed');
      $arrowLeftWrap.classList.remove('hide-elem');

      if (elem === $firstblockMiddle) {
        $firstblockMiddleCap.classList.remove('elem-fixed');
      }
    }
  };

  var elemsTopArray = [];
  var $firstblockMiddleFlug = true;
  $firstblockItemArray.forEach(function (elem) {
    var elemTop = window.pageYOffset + elem.getBoundingClientRect().top;
    elemsTopArray.push(elemTop);
  });
  addFixedElemOnWindow(elemsTopArray[0], $firstblockButton);
  if ($firstblockMiddleFlug) addFixedElemOnWindow(elemsTopArray[1], $firstblockMiddle);
  window.addEventListener('scroll', function () {
    addFixedElemOnWindow(elemsTopArray[0], $firstblockButton);
    if ($firstblockMiddleFlug) addFixedElemOnWindow(elemsTopArray[1], $firstblockMiddle);
  });
  $firstblockMiddleClose.addEventListener('click', function () {
    $firstblockMiddle.classList.remove('elem-fixed');
    $firstblockMiddleCap.classList.remove('elem-fixed');
    $firstblockPlayer.pause();
    $firstblockMiddleFlug = false;
  });
}

/***/ }),

/***/ "./src/blocks/modules/modals/modals.js":
/*!*********************************************!*\
  !*** ./src/blocks/modules/modals/modals.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var micromodal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! micromodal */ "./node_modules/micromodal/dist/micromodal.es.js");
// https://micromodal.vercel.app/

document.addEventListener("DOMContentLoaded", function () {
  micromodal__WEBPACK_IMPORTED_MODULE_0__["default"].init({
    awaitCloseAnimation: true,
    // set to false, to remove close animation
    onShow: function onShow(modal) {
      console.log("micromodal open");
    },
    onClose: function onClose(modal) {
      console.log("micromodal close");

      if (modal.id = "modal-review-video") {
        document.querySelector("#modal-review-video .youtube-player").contentWindow.postMessage(JSON.stringify({
          "event": "command",
          "func": "stopVideo",
          "args": []
        }), "*");
      }
    }
  });
});

/***/ }),

/***/ "./src/blocks/modules/reviews/reviews.js":
/*!***********************************************!*\
  !*** ./src/blocks/modules/reviews/reviews.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var sectionReviewsReview = document.querySelectorAll(".section-reviews__review");
var sectionReviewsWrapper = document.querySelector(".section-reviews__wrapper");
var sectionReviewsItemText = sectionReviewsWrapper.querySelectorAll(".section-reviews__item--text");
var sectionReviewsWrapViseo = sectionReviewsWrapper.querySelectorAll(".section-reviews__item--wrap-video");
var sectionReviewsItemArray = [].concat(_toConsumableArray(sectionReviewsItemText), _toConsumableArray(sectionReviewsWrapViseo));

if (sectionReviewsReview) {
  sectionReviewsReview.forEach(function (elem, i) {
    var text = elem.innerHTML.trim();
    var limit = 200;
    if (text.length <= limit) return text;
    text = text.slice(0, limit);
    elem.innerHTML = text.trim() + "...";
  });
}

if (sectionReviewsItemArray.length) {
  sectionReviewsItemArray.forEach(function (elem) {
    if (!elem.innerHTML) elem.classList.add("hide-elem");
  });
}

var videoPopupTrigger = document.querySelector("a.section-reviews__item--video");

if (videoPopupTrigger) {
  videoPopupTrigger.addEventListener("click", function (e) {
    var videoLink = videoPopupTrigger.dataset.video;
    var modalReviewVideoFrame = document.querySelector("#modal-review-video .youtube-player");
    modalReviewVideoFrame.src = "https://www.youtube.com/embed/".concat(videoLink, "?wmode=opaque&autohide=1&autoplay=1&muted=1&enablejsapi=1");
  });
}

var getHiddenReviews = function getHiddenReviews() {
  return Array.from(document.querySelectorAll(".section-reviews__item")).filter(function (el) {
    return el.style.display === "none";
  });
};

document.querySelector(".section-reviews__more-btn").addEventListener("click", function (e) {
  e.preventDefault();
  getHiddenReviews().slice(0, 3).forEach(function (el) {
    return el.style.display = "block";
  });
  if (getHiddenReviews().length < 1) e.target.style.display = "none";
});

/***/ }),

/***/ "./src/blocks/modules/section-smi/section-smi.js":
/*!*******************************************************!*\
  !*** ./src/blocks/modules/section-smi/section-smi.js ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/swiper/swiper-bundle */ "./node_modules/swiper/swiper-bundle.js");
/* harmony import */ var _node_modules_swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__);


(function () {
  "use strict"; // Todo не срабатывает проверка https://codepen.io/aaronkahlhamer/pen/GveaXP

  var breakpoint = window.matchMedia("(min-width: 768px)");
  var mySwiper;

  var breakpointChecker = function breakpointChecker() {
    // if larger viewport and multi-row layout needed
    if (breakpoint.matches === true) {
      // clean up old instances and inline styles when available
      if (mySwiper !== undefined) mySwiper.destroy(true, true); // or/and do nothing

      return; // else if a small viewport and single column layout needed
    } else if (breakpoint.matches === false) {
      // fire small viewport version of swiper
      return enableSwiper();
    }
  };

  var enableSwiper = function enableSwiper() {
    mySwiper = new _node_modules_swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default.a(".section-smi__wrapper", {
      loop: true,
      slidesPerView: "auto",
      centeredSlides: true,
      a11y: true,
      keyboardControl: true,
      grabCursor: true
    });
  }; // keep an eye on viewport size changes


  breakpoint.addEventListener("change", breakpointChecker); // kickstart

  breakpointChecker();
})();
/* IIFE end */

/***/ }),

/***/ "./src/blocks/modules/section-tariffs/section-tariffs.js":
/*!***************************************************************!*\
  !*** ./src/blocks/modules/section-tariffs/section-tariffs.js ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/swiper/swiper-bundle */ "./node_modules/swiper/swiper-bundle.js");
/* harmony import */ var _node_modules_swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__);

var tarifs = new _node_modules_swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default.a(".section-tariffs__wrapper", {
  grabCursor: true,
  slidesPerView: "auto",
  spaceBetween: 20,
  resistance: true,
  resistanceRatio: 0,
  breakpoints: {
    360: {
      spaceBetween: 36
    },
    991: {
      spaceBetween: 20
    }
  }
});
var tarifButtons = document.querySelectorAll(".section-tariffs__item-button");

if (tarifButtons.length > 0) {
  tarifButtons.forEach(function (button) {
    button.addEventListener("click", function (e) {
      var modal = document.querySelector("#modal-form"),
          packageName = e.target.dataset.package;
      modal.querySelector("input[name=\"package-name\"]").value = packageName;
      console.log(modal, packageName, modal.querySelector("input[name=\"package-name\"]"));
    });
  });
}

/***/ }),

/***/ "./src/blocks/modules/teachers/teachers.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/teachers/teachers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var sectionTeachersItem = document.querySelector('.section-teachers__item');
var sectionTeachersItemVideo = document.querySelector('.section-teachers__item--video');
var sectionTeachersSubItemVideo = document.querySelector('.section-teachers__sub-item--video');
var sectionTeachersItemMask = document.querySelector('.section-teachers__item--mask');
var sectionTeachersSubItemMask = document.querySelector('.section-teachers__sub-item--mask');

if (sectionTeachersItem) {
  sectionTeachersSubItemMask.addEventListener('click', function () {
    var sectionTeachersItemVideoPlayer = document.querySelector('.section-teachers__item--video video');
    var sectionTeachersSubItemVideoPlayer = document.querySelector('.section-teachers__sub-item--video video');
    var firstElem = sectionTeachersItemMask.nextElementSibling;
    var LastElem = sectionTeachersSubItemMask.nextElementSibling;
    sectionTeachersItemVideo.appendChild(LastElem);
    sectionTeachersSubItemVideo.appendChild(firstElem);
    sectionTeachersItemVideoPlayer.pause();
    sectionTeachersItemVideoPlayer.id = 'video-main';
    sectionTeachersSubItemVideoPlayer.play();
    sectionTeachersSubItemVideoPlayer.id = 'video-main';
  });
}

/***/ }),

/***/ "./src/blocks/modules/ticker-1/ticker-1.js":
/*!*************************************************!*\
  !*** ./src/blocks/modules/ticker-1/ticker-1.js ***!
  \*************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! swiper/swiper-bundle */ "./node_modules/swiper/swiper-bundle.js");
/* harmony import */ var swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0__);

document.querySelectorAll(".ticker .swiper-container").forEach(function (el) {
  var swiper = new swiper_swiper_bundle__WEBPACK_IMPORTED_MODULE_0___default.a(el, {
    spaceBetween: 20,
    centeredSlides: true,
    speed: 7000,
    autoplay: {
      delay: 0
    },
    loop: true,
    loopedSlides: 4,
    slidesPerView: "auto",
    allowTouchMove: false,
    disableOnInteraction: false
  });
});

/***/ }),

/***/ "./src/js/import/components.js":
/*!*************************************!*\
  !*** ./src/js/import/components.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/import/modules.js":
/*!**********************************!*\
  !*** ./src/js/import/modules.js ***!
  \**********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! %modules%/header/header */ "./src/blocks/modules/header/header.js");
/* harmony import */ var _modules_header_header__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_header_header__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! %modules%/footer/footer */ "./src/blocks/modules/footer/footer.js");
/* harmony import */ var _modules_footer_footer__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_modules_footer_footer__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _modules_section_tariffs_section_tariffs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! %modules%/section-tariffs/section-tariffs */ "./src/blocks/modules/section-tariffs/section-tariffs.js");
/* harmony import */ var _modules_ticker_1_ticker_1__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! %modules%/ticker-1/ticker-1 */ "./src/blocks/modules/ticker-1/ticker-1.js");
/* harmony import */ var _modules_lesson_consist_3_lesson_consist_3__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! %modules%/lesson-consist-3/lesson-consist-3 */ "./src/blocks/modules/lesson-consist-3/lesson-consist-3.js");
/* harmony import */ var _modules_lesson_consist_1_lesson_consist_1__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! %modules%/lesson-consist-1/lesson-consist-1 */ "./src/blocks/modules/lesson-consist-1/lesson-consist-1.js");
/* harmony import */ var _modules_lesson_consist_1_lesson_consist_1__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_modules_lesson_consist_1_lesson_consist_1__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _modules_modals_modals__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! %modules%/modals/modals */ "./src/blocks/modules/modals/modals.js");
/* harmony import */ var _modules_mainblock_mainblock_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! %modules%/mainblock/mainblock.js */ "./src/blocks/modules/mainblock/mainblock.js");
/* harmony import */ var _modules_mainblock_mainblock_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_modules_mainblock_mainblock_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! %modules%/reviews/reviews */ "./src/blocks/modules/reviews/reviews.js");
/* harmony import */ var _modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_modules_reviews_reviews__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _modules_teachers_teachers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! %modules%/teachers/teachers */ "./src/blocks/modules/teachers/teachers.js");
/* harmony import */ var _modules_teachers_teachers__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_modules_teachers_teachers__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _modules_section_smi_section_smi__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! %modules%/section-smi/section-smi */ "./src/blocks/modules/section-smi/section-smi.js");












/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _import_modules__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./import/modules */ "./src/js/import/modules.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./import/components */ "./src/js/import/components.js");
/* harmony import */ var _import_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_import_components__WEBPACK_IMPORTED_MODULE_1__);



/***/ })

/******/ });
//# sourceMappingURL=main.js.map