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

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "hourlyForecast": () => (/* binding */ hourlyForecast)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/weatherData.js");


const forecastDataEls = function () {
  const dataContainer = document.createElement("div");
  const date = document.createElement("span");
  date.classList.add("hourly-date");
  const temp = document.createElement("span");
  temp.classList.add("hourly-temp");
  const weather = document.createElement("span");
  weather.classList.add("hourly-weather");

  dataContainer.appendChild(date);
  dataContainer.appendChild(temp);
  dataContainer.appendChild(weather);

  return dataContainer;
};

const hourlyForecast = async function () {
  const container = document.querySelector(".forecast-results");
  const dataContainer = forecastDataEls();
  const dateEl = dataContainer.querySelector(".hourly-date");
  const tempEl = dataContainer.querySelector(".hourly-temp");
  const weatherEl = dataContainer.querySelector(".hourly-weather");

  const data = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.weatherData)();
  const hourlyData = data.hourly;
  const hourlyDataArr = new Array(12).fill("");
  console.log(hourlyDataArr);
  hourlyDataArr.forEach((item, i) => {
    const curHour = hourlyData[i];
    dateEl.textContent = new Date(curHour.dt * 1000).toLocaleTimeString();
    console.log(dateEl.textContent);
  });
  //TODO move elements into first function
  //TODO add rest of data after the date
};




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
  const city = "columbus";
  const state = _geoCodes__WEBPACK_IMPORTED_MODULE_0__.stateCode.Ohio;
  const country = "840";
  const data = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${city},${state},${country}&limit=5&appid=${"5b58e96921e508b235d970ab31d89fe8"}`,
    { mode: "cors" }
  );
  const resp = await data.json();
  const location = resp[0];

  return { lat: location.lat, lon: location.lon };
};

const weatherData = async function () {
  const cityCoordinates = await coordinates();
  const lat = cityCoordinates.lat;
  const lon = cityCoordinates.lon;

  const data = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${"5b58e96921e508b235d970ab31d89fe8"}`
  );
  const resp = await data.json();
  console.log(resp);
  return resp;
};




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
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ui */ "./src/ui.js");



//weatherData();
//hourlyForecast();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbEI0Qzs7QUFFNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEscUJBQXFCLHlEQUFXO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFMEI7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0Q2E7O0FBRXZDO0FBQ0E7QUFDQSxnQkFBZ0IscURBQWM7QUFDOUI7QUFDQTtBQUNBLHNEQUFzRCxLQUFLLEdBQUcsTUFBTSxHQUFHLFFBQVEsaUJBQWlCLGtDQUFrQixDQUFDO0FBQ25ILE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJELElBQUksT0FBTyxJQUFJLFNBQVMsa0NBQWtCLENBQUM7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7VUM3QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ047O0FBRXRDO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW9Db2Rlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0YXRlQ29kZSA9IHtcclxuICAgIEFsYWJhbWE6ICdVUy1BTCcsXHJcbiAgICBBbGFza2E6ICdVUy1BSycsXHJcbiAgICBBcml6b25hOiAnVVMtQVonLFxyXG4gICAgQXJrYW5zYXM6ICdVUy1BUicsXHJcbiAgICBDYWxpZm9ybmlhOiAnVVMtQ0EnLFxyXG4gICAgQ29sb3JhZG86ICdVUy1DTycsXHJcbiAgICBPaGlvOiAnVVMtT0gnLFxyXG59XHJcblxyXG5jb25zdCBjb3VudHJ5Q29kZSA9IHtcclxuICAgIEN1cmFjYW86ICc1MjEnLFxyXG4gICAgRG9taW5pY2FuUmVwdWJsaWM6ICcyMTQnLFxyXG4gICAgSW5kaWE6ICczNTYnLFxyXG4gICAgTWV4aWNvOiAnNDg0JyxcclxuICAgIFVuaXRlZEtpbmdkb206ICc4MjYnLFxyXG4gICAgVW5pdGVkU3RhdGVzOiAnODQwJyxcclxufVxyXG5cclxuZXhwb3J0IHtzdGF0ZUNvZGV9IiwiaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuXG5jb25zdCBmb3JlY2FzdERhdGFFbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImhvdXJseS1kYXRlXCIpO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbXAuY2xhc3NMaXN0LmFkZChcImhvdXJseS10ZW1wXCIpO1xuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHdlYXRoZXIuY2xhc3NMaXN0LmFkZChcImhvdXJseS13ZWF0aGVyXCIpO1xuXG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcCk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgcmV0dXJuIGRhdGFDb250YWluZXI7XG59O1xuXG5jb25zdCBob3VybHlGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdC1yZXN1bHRzXCIpO1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gZm9yZWNhc3REYXRhRWxzKCk7XG4gIGNvbnN0IGRhdGVFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ob3VybHktZGF0ZVwiKTtcbiAgY29uc3QgdGVtcEVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseS10ZW1wXCIpO1xuICBjb25zdCB3ZWF0aGVyRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5LXdlYXRoZXJcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhKCk7XG4gIGNvbnN0IGhvdXJseURhdGEgPSBkYXRhLmhvdXJseTtcbiAgY29uc3QgaG91cmx5RGF0YUFyciA9IG5ldyBBcnJheSgxMikuZmlsbChcIlwiKTtcbiAgY29uc29sZS5sb2coaG91cmx5RGF0YUFycik7XG4gIGhvdXJseURhdGFBcnIuZm9yRWFjaCgoaXRlbSwgaSkgPT4ge1xuICAgIGNvbnN0IGN1ckhvdXIgPSBob3VybHlEYXRhW2ldO1xuICAgIGRhdGVFbC50ZXh0Q29udGVudCA9IG5ldyBEYXRlKGN1ckhvdXIuZHQgKiAxMDAwKS50b0xvY2FsZVRpbWVTdHJpbmcoKTtcbiAgICBjb25zb2xlLmxvZyhkYXRlRWwudGV4dENvbnRlbnQpO1xuICB9KTtcbiAgLy9UT0RPIG1vdmUgZWxlbWVudHMgaW50byBmaXJzdCBmdW5jdGlvblxuICAvL1RPRE8gYWRkIHJlc3Qgb2YgZGF0YSBhZnRlciB0aGUgZGF0ZVxufTtcblxuZXhwb3J0IHsgaG91cmx5Rm9yZWNhc3QgfTtcbiIsImltcG9ydCB7IHN0YXRlQ29kZSB9IGZyb20gXCIuL2dlb0NvZGVzXCI7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjaXR5ID0gXCJjb2x1bWJ1c1wiO1xuICBjb25zdCBzdGF0ZSA9IHN0YXRlQ29kZS5PaGlvO1xuICBjb25zdCBjb3VudHJ5ID0gXCI4NDBcIjtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7Y2l0eX0sJHtzdGF0ZX0sJHtjb3VudHJ5fSZsaW1pdD01JmFwcGlkPSR7cHJvY2Vzcy5lbnYuc2VjcmV0fWAsXG4gICAgeyBtb2RlOiBcImNvcnNcIiB9XG4gICk7XG4gIGNvbnN0IHJlc3AgPSBhd2FpdCBkYXRhLmpzb24oKTtcbiAgY29uc3QgbG9jYXRpb24gPSByZXNwWzBdO1xuXG4gIHJldHVybiB7IGxhdDogbG9jYXRpb24ubGF0LCBsb246IGxvY2F0aW9uLmxvbiB9O1xufTtcblxuY29uc3Qgd2VhdGhlckRhdGEgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGNpdHlDb29yZGluYXRlcyA9IGF3YWl0IGNvb3JkaW5hdGVzKCk7XG4gIGNvbnN0IGxhdCA9IGNpdHlDb29yZGluYXRlcy5sYXQ7XG4gIGNvbnN0IGxvbiA9IGNpdHlDb29yZGluYXRlcy5sb247XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwczovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZGF0YS8zLjAvb25lY2FsbD9sYXQ9JHtsYXR9Jmxvbj0ke2xvbn0mYXBwaWQ9JHtwcm9jZXNzLmVudi5zZWNyZXR9YFxuICApO1xuICBjb25zdCByZXNwID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIGNvbnNvbGUubG9nKHJlc3ApO1xuICByZXR1cm4gcmVzcDtcbn07XG5cbmV4cG9ydCB7IHdlYXRoZXJEYXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHdlYXRoZXJEYXRhIH0gZnJvbSBcIi4vd2VhdGhlckRhdGFcIjtcbmltcG9ydCB7IGhvdXJseUZvcmVjYXN0IH0gZnJvbSBcIi4vdWlcIjtcblxuLy93ZWF0aGVyRGF0YSgpO1xuLy9ob3VybHlGb3JlY2FzdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9