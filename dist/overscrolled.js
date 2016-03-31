(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["overscrolled"] = factory();
	else
		root["overscrolled"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (window, options) {
	  var _ref = options || {};

	  var _ref$prevent_pullToRe = _ref.prevent_pullToRefresh;
	  var prevent_pullToRefresh = _ref$prevent_pullToRe === undefined ? true : _ref$prevent_pullToRe;
	  var _ref$prevent_overscro = _ref.prevent_overscrollGlow;
	  var prevent_overscrollGlow = _ref$prevent_overscro === undefined ? true : _ref$prevent_overscro;

	  var document = window.document;
	  var is_pullToRefresh_begin = false;
	  var is_window_scrolled = void 0;
	  var lastTouchY = 0;

	  function touchstartHandler(e) {
	    if (e.touches.length != 1) {
	      return;
	    }

	    // If "overflow:hidden" already presents on body, there will be no fancy behaviour.
	    is_window_scrolled = window.getComputedStyle(document.body).getPropertyValue('overflow-y') !== 'hidden';

	    lastTouchY = e.touches[0].clientY;
	    // Pull-to-refresh will only trigger if the scroll begins when the
	    // document's Y offset is zero.
	    is_pullToRefresh_begin = prevent_pullToRefresh && window.pageYOffset == 0;
	  }

	  function touchmoveHandler(e) {

	    if (!is_window_scrolled) {
	      return;
	    }

	    var touchY = e.touches[0].clientY;
	    var touchYDelta = touchY - lastTouchY;
	    lastTouchY = touchY;

	    if (is_pullToRefresh_begin) {
	      // To suppress pull-to-refresh it is sufficient to preventDefault the
	      // first overscrolling touchmove.
	      is_pullToRefresh_begin = false;
	      if (touchYDelta > 0) {
	        e.preventDefault();
	        return;
	      }
	    }

	    if (prevent_overscrollGlow) {
	      if (window.pageYOffset == 0 && touchYDelta > 0) {
	        e.preventDefault();
	        return;
	      }
	    }
	  }

	  document.addEventListener('touchstart', touchstartHandler, false);
	  document.addEventListener('touchmove', touchmoveHandler, false);
	  return {
	    destroy: function destroy() {
	      document.removeEventListener('touchstart', touchstartHandler);
	      document.removeEventListener('touchmove', touchmoveHandler);
	    }
	  };
	};

	module.exports = exports['default']; /**
	                                      * @name overscrolled
	                                      * @function
	                                      * @param {Object} options Accepts following configurations:
	                                      * @param {Boolean} options.prevent_pullToRefresh Prevent the "pull-to-refresh" behaviour 
	                                      * @param {Boolean} options.prevent_overscrollGlow Prevent the elastic bouncing/glow effect when page is over-scrolled  
	                                      */

/***/ }
/******/ ])
});
;