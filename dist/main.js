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



/***/ }),

/***/ "./src/weatherData.js":
/*!****************************!*\
  !*** ./src/weatherData.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "weatherData": () => (/* binding */ weatherData)
/* harmony export */ });
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

    const data = await fetch(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${"5b58e96921e508b235d970ab31d89fe8"}`)
    const resp = await data.json()

    console.log(resp)
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
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/weatherData.js");


(0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.weatherData)()
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEJxQztBQUNyQztBQUNBO0FBQ0E7QUFDQSxrQkFBa0IscURBQWM7QUFDaEM7QUFDQTtBQUNBLDBEQUEwRCxLQUFLLEdBQUcsTUFBTSxHQUFHLFFBQVEsaUJBQWlCLGtDQUFrQixDQUFDO0FBQ3ZILFNBQVMsYUFBYTtBQUN0QjtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvRkFBb0YsSUFBSSxPQUFPLElBQUksU0FBUyxrQ0FBa0IsQ0FBQztBQUMvSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7O1VDekJBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOMEM7QUFDMUM7QUFDQSx5REFBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvZ2VvQ29kZXMuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvd2VhdGhlckRhdGEuanMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBzdGF0ZUNvZGUgPSB7XHJcbiAgICBBbGFiYW1hOiAnVVMtQUwnLFxyXG4gICAgQWxhc2thOiAnVVMtQUsnLFxyXG4gICAgQXJpem9uYTogJ1VTLUFaJyxcclxuICAgIEFya2Fuc2FzOiAnVVMtQVInLFxyXG4gICAgQ2FsaWZvcm5pYTogJ1VTLUNBJyxcclxuICAgIENvbG9yYWRvOiAnVVMtQ08nLFxyXG4gICAgT2hpbzogJ1VTLU9IJyxcclxufVxyXG5cclxuY29uc3QgY291bnRyeUNvZGUgPSB7XHJcbiAgICBDdXJhY2FvOiAnNTIxJyxcclxuICAgIERvbWluaWNhblJlcHVibGljOiAnMjE0JyxcclxuICAgIEluZGlhOiAnMzU2JyxcclxuICAgIE1leGljbzogJzQ4NCcsXHJcbiAgICBVbml0ZWRLaW5nZG9tOiAnODI2JyxcclxuICAgIFVuaXRlZFN0YXRlczogJzg0MCcsXHJcbn1cclxuXHJcbmV4cG9ydCB7c3RhdGVDb2RlfSIsImltcG9ydCB7c3RhdGVDb2RlfSBmcm9tIFwiLi9nZW9Db2Rlc1wiO1xyXG5cclxuY29uc3QgY29vcmRpbmF0ZXMgPSBhc3luYyBmdW5jdGlvbiAoKSB7XHJcbiAgICBjb25zdCBjaXR5ID0gJ2NvbHVtYnVzJ1xyXG4gICAgY29uc3Qgc3RhdGUgPSBzdGF0ZUNvZGUuT2hpb1xyXG4gICAgY29uc3QgY291bnRyeSA9ICc4NDAnXHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXHJcbiAgICAgICAgYGh0dHA6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2dlby8xLjAvZGlyZWN0P3E9JHtjaXR5fSwke3N0YXRlfSwke2NvdW50cnl9JmxpbWl0PTUmYXBwaWQ9JHtwcm9jZXNzLmVudi5zZWNyZXR9YCxcclxuICAgICAgICB7bW9kZTogJ2NvcnMnfSlcclxuICAgIGNvbnN0IHJlc3AgPSBhd2FpdCBkYXRhLmpzb24oKVxyXG4gICAgY29uc3QgbG9jYXRpb24gPSByZXNwWzBdXHJcblxyXG4gICAgcmV0dXJuIHtsYXQ6IGxvY2F0aW9uLmxhdCwgbG9uOiBsb2NhdGlvbi5sb259XHJcbn1cclxuXHJcbmNvbnN0IHdlYXRoZXJEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xyXG4gICAgY29uc3QgY2l0eUNvb3JkaW5hdGVzID0gYXdhaXQgY29vcmRpbmF0ZXMoKVxyXG4gICAgY29uc3QgbGF0ID0gY2l0eUNvb3JkaW5hdGVzLmxhdFxyXG4gICAgY29uc3QgbG9uID0gY2l0eUNvb3JkaW5hdGVzLmxvblxyXG5cclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7cHJvY2Vzcy5lbnYuc2VjcmV0fWApXHJcbiAgICBjb25zdCByZXNwID0gYXdhaXQgZGF0YS5qc29uKClcclxuXHJcbiAgICBjb25zb2xlLmxvZyhyZXNwKVxyXG59XHJcblxyXG5leHBvcnQgeyB3ZWF0aGVyRGF0YSB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQge3dlYXRoZXJEYXRhfSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xyXG5cclxud2VhdGhlckRhdGEoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==