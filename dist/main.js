/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/geoCodes.js":
/*!*************************!*\
  !*** ./src/geoCodes.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "stateCode": () => (/* binding */ stateCode)
/* harmony export */ });
const stateCode = {
    Alabama: 'US-AL',
    Alaska: 'US-AK',
    Arizona: 'US-AZ',
    Arkansas: 'US-AR',
    California: 'US-CA',
    Colorado: 'US-CO',
    Ohio: 'US-OH',
}

const countryCode = {
    Curacao: '521',
    DominicanRepublic: '214',
    India: '356',
    Mexico: '484',
    UnitedKingdom: '826',
    UnitedStates: '840',
}



/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _geoCodes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./geoCodes */ "./src/geoCodes.js");


const coordinates = async function () {
    const city = 'columbus'
    const state = _geoCodes__WEBPACK_IMPORTED_MODULE_0__.stateCode.Ohio
    const country = '840'
    const data = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=${"5b58e96921e508b235d970ab31d89fe8"}`,
        {mode: 'cors'})
    const resp = await data.json()
    const location = resp[0]

    return {lat: location.lat, lon: location.lon}
}

const weatherData = async function () {
    const cityCoordinates = await coordinates()
    const lat = cityCoordinates.lat
    const lon = cityCoordinates.lon

    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${"5b58e96921e508b235d970ab31d89fe8"}`)
    const resp = await data.json()

    console.log(resp)
}

weatherData()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDbEJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLHFEQUFjO0FBQ2hDO0FBQ0E7QUFDQSwwREFBMEQsS0FBSyxHQUFHLE1BQU0sR0FBRyxRQUFRLGlCQUFpQixrQ0FBa0IsQ0FBQztBQUN2SCxTQUFTLGFBQWE7QUFDdEI7QUFDQTtBQUNBO0FBQ0EsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0ZBQW9GLElBQUksT0FBTyxJQUFJLFNBQVMsa0NBQWtCLENBQUM7QUFDL0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW9Db2Rlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0YXRlQ29kZSA9IHtcclxuICAgIEFsYWJhbWE6ICdVUy1BTCcsXHJcbiAgICBBbGFza2E6ICdVUy1BSycsXHJcbiAgICBBcml6b25hOiAnVVMtQVonLFxyXG4gICAgQXJrYW5zYXM6ICdVUy1BUicsXHJcbiAgICBDYWxpZm9ybmlhOiAnVVMtQ0EnLFxyXG4gICAgQ29sb3JhZG86ICdVUy1DTycsXHJcbiAgICBPaGlvOiAnVVMtT0gnLFxyXG59XHJcblxyXG5jb25zdCBjb3VudHJ5Q29kZSA9IHtcclxuICAgIEN1cmFjYW86ICc1MjEnLFxyXG4gICAgRG9taW5pY2FuUmVwdWJsaWM6ICcyMTQnLFxyXG4gICAgSW5kaWE6ICczNTYnLFxyXG4gICAgTWV4aWNvOiAnNDg0JyxcclxuICAgIFVuaXRlZEtpbmdkb206ICc4MjYnLFxyXG4gICAgVW5pdGVkU3RhdGVzOiAnODQwJyxcclxufVxyXG5cclxuZXhwb3J0IHtzdGF0ZUNvZGV9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3N0YXRlQ29kZX0gZnJvbSBcIi4vZ2VvQ29kZXNcIjtcclxuXHJcbmNvbnN0IGNvb3JkaW5hdGVzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2l0eSA9ICdjb2x1bWJ1cydcclxuICAgIGNvbnN0IHN0YXRlID0gc3RhdGVDb2RlLk9oaW9cclxuICAgIGNvbnN0IGNvdW50cnkgPSAnODQwJ1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxyXG4gICAgICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0sJHtzdGF0ZX0sJHtjb3VudHJ5fSZsaW1pdD01JmFwcGlkPSR7cHJvY2Vzcy5lbnYuc2VjcmV0fWAsXHJcbiAgICAgICAge21vZGU6ICdjb3JzJ30pXHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZGF0YS5qc29uKClcclxuICAgIGNvbnN0IGxvY2F0aW9uID0gcmVzcFswXVxyXG5cclxuICAgIHJldHVybiB7bGF0OiBsb2NhdGlvbi5sYXQsIGxvbjogbG9jYXRpb24ubG9ufVxyXG59XHJcblxyXG5jb25zdCB3ZWF0aGVyRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcclxuICAgIGNvbnN0IGNpdHlDb29yZGluYXRlcyA9IGF3YWl0IGNvb3JkaW5hdGVzKClcclxuICAgIGNvbnN0IGxhdCA9IGNpdHlDb29yZGluYXRlcy5sYXRcclxuICAgIGNvbnN0IGxvbiA9IGNpdHlDb29yZGluYXRlcy5sb25cclxuXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke3Byb2Nlc3MuZW52LnNlY3JldH1gKVxyXG4gICAgY29uc3QgcmVzcCA9IGF3YWl0IGRhdGEuanNvbigpXHJcblxyXG4gICAgY29uc29sZS5sb2cocmVzcClcclxufVxyXG5cclxud2VhdGhlckRhdGEoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==