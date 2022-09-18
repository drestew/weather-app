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
/* harmony export */   "dailyForecast": () => (/* binding */ dailyForecast),
/* harmony export */   "hourlyForecast": () => (/* binding */ hourlyForecast)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/weatherData.js");


const hourlyDataEls = function () {
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

  const dateEl = dataContainer.querySelector(".hourly-date");
  const tempEl = dataContainer.querySelector(".hourly-temp");
  const weatherEl = dataContainer.querySelector(".hourly-weather");

  return { dataContainer, dateEl, tempEl, weatherEl };
};

const hourlyForecast = async function () {
  const data = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.weatherData)();
  const hourlyData = data.hourly;
  const hourlyDataArr = new Array(12).fill("");

  hourlyDataArr.forEach((item, i) => {
    const newEl = hourlyDataEls();
    const curHour = hourlyData[i];
    newEl.dateEl.textContent = new Date(curHour.dt * 1000).toLocaleTimeString();
    newEl.tempEl.textContent = curHour.temp;
    newEl.weatherEl.textContent = curHour.weather[0].main;
    const results = document.querySelector(".forecast-results");

    results.appendChild(newEl.dataContainer);
  });
};

const dailyDataEls = function () {
  const dataContainer = document.createElement("div");
  const date = document.createElement("span");
  date.classList.add("daily-date");
  const tempHigh = document.createElement("span");
  tempHigh.classList.add("daily-tempHigh");
  const tempLow = document.createElement("span");
  tempLow.classList.add("daily-tempLow");
  const humidity = document.createElement("span");
  humidity.classList.add("daily-humidity");
  const weather = document.createElement("span");
  weather.classList.add("daily-weather");

  dataContainer.appendChild(date);
  dataContainer.appendChild(tempHigh);
  dataContainer.appendChild(tempLow);
  dataContainer.appendChild(humidity);
  dataContainer.appendChild(weather);

  const dateEl = dataContainer.querySelector(".daily-date");
  const tempHighEl = dataContainer.querySelector(".daily-tempHigh");
  const tempLowEl = dataContainer.querySelector(".daily-tempLow");
  const humidityEl = dataContainer.querySelector(".daily-humidity");
  const weatherEl = dataContainer.querySelector(".daily-weather");

  return {
    dataContainer,
    dateEl,
    tempHighEl,
    tempLowEl,
    humidityEl,
    weatherEl,
  };
};

const dailyForecast = async function () {
  const data = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.weatherData)();
  const dailyData = data.daily;
  const dailyDataArr = new Array(7).fill("");

  dailyDataArr.forEach((item, i) => {
    const newEl = dailyDataEls();
    const curDay = dailyData[i];
    newEl.dateEl.textContent = new Date(curDay.dt * 1000).toLocaleTimeString();
    newEl.tempLowEl.textContent = curDay.temp.min;
    newEl.tempHighEl.textContent = curDay.temp.max;
    newEl.humidityEl.textContent = curDay.humidity;
    newEl.weatherEl.textContent = curDay.weather[0].main;
    const results = document.querySelector(".forecast-results");

    results.appendChild(newEl.dataContainer);
  });
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



(0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.weatherData)();
(0,_ui__WEBPACK_IMPORTED_MODULE_1__.hourlyForecast)();

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCNEM7O0FBRTVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxXQUFXO0FBQ1g7O0FBRUE7QUFDQSxxQkFBcUIseURBQVc7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQix5REFBVztBQUNoQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLEdBQUc7QUFDSDs7QUFFeUM7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3RkY7O0FBRXZDO0FBQ0E7QUFDQSxnQkFBZ0IscURBQWM7QUFDOUI7QUFDQTtBQUNBLHNEQUFzRCxLQUFLLEdBQUcsTUFBTSxHQUFHLFFBQVEsaUJBQWlCLGtDQUFrQixDQUFDO0FBQ25ILE1BQU07QUFDTjtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkRBQTJELElBQUksT0FBTyxJQUFJLFNBQVMsa0NBQWtCLENBQUM7QUFDdEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7VUM3QnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTjRDO0FBQ047O0FBRXRDLHlEQUFXO0FBQ1gsbURBQWMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy9nZW9Db2Rlcy5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy91aS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC8uL3NyYy93ZWF0aGVyRGF0YS5qcyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHN0YXRlQ29kZSA9IHtcclxuICAgIEFsYWJhbWE6ICdVUy1BTCcsXHJcbiAgICBBbGFza2E6ICdVUy1BSycsXHJcbiAgICBBcml6b25hOiAnVVMtQVonLFxyXG4gICAgQXJrYW5zYXM6ICdVUy1BUicsXHJcbiAgICBDYWxpZm9ybmlhOiAnVVMtQ0EnLFxyXG4gICAgQ29sb3JhZG86ICdVUy1DTycsXHJcbiAgICBPaGlvOiAnVVMtT0gnLFxyXG59XHJcblxyXG5jb25zdCBjb3VudHJ5Q29kZSA9IHtcclxuICAgIEN1cmFjYW86ICc1MjEnLFxyXG4gICAgRG9taW5pY2FuUmVwdWJsaWM6ICcyMTQnLFxyXG4gICAgSW5kaWE6ICczNTYnLFxyXG4gICAgTWV4aWNvOiAnNDg0JyxcclxuICAgIFVuaXRlZEtpbmdkb206ICc4MjYnLFxyXG4gICAgVW5pdGVkU3RhdGVzOiAnODQwJyxcclxufVxyXG5cclxuZXhwb3J0IHtzdGF0ZUNvZGV9IiwiaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuXG5jb25zdCBob3VybHlEYXRhRWxzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJob3VybHktZGF0ZVwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJob3VybHktdGVtcFwiKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoXCJob3VybHktd2VhdGhlclwiKTtcblxuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gIGNvbnN0IGRhdGVFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ob3VybHktZGF0ZVwiKTtcbiAgY29uc3QgdGVtcEVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseS10ZW1wXCIpO1xuICBjb25zdCB3ZWF0aGVyRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5LXdlYXRoZXJcIik7XG5cbiAgcmV0dXJuIHsgZGF0YUNvbnRhaW5lciwgZGF0ZUVsLCB0ZW1wRWwsIHdlYXRoZXJFbCB9O1xufTtcblxuY29uc3QgaG91cmx5Rm9yZWNhc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyRGF0YSgpO1xuICBjb25zdCBob3VybHlEYXRhID0gZGF0YS5ob3VybHk7XG4gIGNvbnN0IGhvdXJseURhdGFBcnIgPSBuZXcgQXJyYXkoMTIpLmZpbGwoXCJcIik7XG5cbiAgaG91cmx5RGF0YUFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbmV3RWwgPSBob3VybHlEYXRhRWxzKCk7XG4gICAgY29uc3QgY3VySG91ciA9IGhvdXJseURhdGFbaV07XG4gICAgbmV3RWwuZGF0ZUVsLnRleHRDb250ZW50ID0gbmV3IERhdGUoY3VySG91ci5kdCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIG5ld0VsLnRlbXBFbC50ZXh0Q29udGVudCA9IGN1ckhvdXIudGVtcDtcbiAgICBuZXdFbC53ZWF0aGVyRWwudGV4dENvbnRlbnQgPSBjdXJIb3VyLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdC1yZXN1bHRzXCIpO1xuXG4gICAgcmVzdWx0cy5hcHBlbmRDaGlsZChuZXdFbC5kYXRhQ29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkYWlseURhdGFFbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhaWx5LWRhdGVcIik7XG4gIGNvbnN0IHRlbXBIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbXBIaWdoLmNsYXNzTGlzdC5hZGQoXCJkYWlseS10ZW1wSGlnaFwiKTtcbiAgY29uc3QgdGVtcExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZW1wTG93LmNsYXNzTGlzdC5hZGQoXCJkYWlseS10ZW1wTG93XCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiZGFpbHktaHVtaWRpdHlcIik7XG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgd2VhdGhlci5jbGFzc0xpc3QuYWRkKFwiZGFpbHktd2VhdGhlclwiKTtcblxuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBIaWdoKTtcbiAgZGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wTG93KTtcbiAgZGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgY29uc3QgZGF0ZUVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWRhdGVcIik7XG4gIGNvbnN0IHRlbXBIaWdoRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktdGVtcEhpZ2hcIik7XG4gIGNvbnN0IHRlbXBMb3dFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYWlseS10ZW1wTG93XCIpO1xuICBjb25zdCBodW1pZGl0eUVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWh1bWlkaXR5XCIpO1xuICBjb25zdCB3ZWF0aGVyRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktd2VhdGhlclwiKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGFDb250YWluZXIsXG4gICAgZGF0ZUVsLFxuICAgIHRlbXBIaWdoRWwsXG4gICAgdGVtcExvd0VsLFxuICAgIGh1bWlkaXR5RWwsXG4gICAgd2VhdGhlckVsLFxuICB9O1xufTtcblxuY29uc3QgZGFpbHlGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhKCk7XG4gIGNvbnN0IGRhaWx5RGF0YSA9IGRhdGEuZGFpbHk7XG4gIGNvbnN0IGRhaWx5RGF0YUFyciA9IG5ldyBBcnJheSg3KS5maWxsKFwiXCIpO1xuXG4gIGRhaWx5RGF0YUFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbmV3RWwgPSBkYWlseURhdGFFbHMoKTtcbiAgICBjb25zdCBjdXJEYXkgPSBkYWlseURhdGFbaV07XG4gICAgbmV3RWwuZGF0ZUVsLnRleHRDb250ZW50ID0gbmV3IERhdGUoY3VyRGF5LmR0ICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgbmV3RWwudGVtcExvd0VsLnRleHRDb250ZW50ID0gY3VyRGF5LnRlbXAubWluO1xuICAgIG5ld0VsLnRlbXBIaWdoRWwudGV4dENvbnRlbnQgPSBjdXJEYXkudGVtcC5tYXg7XG4gICAgbmV3RWwuaHVtaWRpdHlFbC50ZXh0Q29udGVudCA9IGN1ckRheS5odW1pZGl0eTtcbiAgICBuZXdFbC53ZWF0aGVyRWwudGV4dENvbnRlbnQgPSBjdXJEYXkud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0LXJlc3VsdHNcIik7XG5cbiAgICByZXN1bHRzLmFwcGVuZENoaWxkKG5ld0VsLmRhdGFDb250YWluZXIpO1xuICB9KTtcbn07XG5cbmV4cG9ydCB7IGhvdXJseUZvcmVjYXN0LCBkYWlseUZvcmVjYXN0IH07XG4iLCJpbXBvcnQgeyBzdGF0ZUNvZGUgfSBmcm9tIFwiLi9nZW9Db2Rlc1wiO1xuXG5jb25zdCBjb29yZGluYXRlcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2l0eSA9IFwiY29sdW1idXNcIjtcbiAgY29uc3Qgc3RhdGUgPSBzdGF0ZUNvZGUuT2hpbztcbiAgY29uc3QgY291bnRyeSA9IFwiODQwXCI7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2NpdHl9LCR7c3RhdGV9LCR7Y291bnRyeX0mbGltaXQ9NSZhcHBpZD0ke3Byb2Nlc3MuZW52LnNlY3JldH1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBjb25zdCByZXNwID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIGNvbnN0IGxvY2F0aW9uID0gcmVzcFswXTtcblxuICByZXR1cm4geyBsYXQ6IGxvY2F0aW9uLmxhdCwgbG9uOiBsb2NhdGlvbi5sb24gfTtcbn07XG5cbmNvbnN0IHdlYXRoZXJEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjaXR5Q29vcmRpbmF0ZXMgPSBhd2FpdCBjb29yZGluYXRlcygpO1xuICBjb25zdCBsYXQgPSBjaXR5Q29vcmRpbmF0ZXMubGF0O1xuICBjb25zdCBsb24gPSBjaXR5Q29vcmRpbmF0ZXMubG9uO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7cHJvY2Vzcy5lbnYuc2VjcmV0fWBcbiAgKTtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBjb25zb2xlLmxvZyhyZXNwKTtcbiAgcmV0dXJuIHJlc3A7XG59O1xuXG5leHBvcnQgeyB3ZWF0aGVyRGF0YSB9O1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyB3ZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJEYXRhXCI7XG5pbXBvcnQgeyBob3VybHlGb3JlY2FzdCB9IGZyb20gXCIuL3VpXCI7XG5cbndlYXRoZXJEYXRhKCk7XG5ob3VybHlGb3JlY2FzdCgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9