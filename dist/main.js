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

/***/ "./src/location.js":
/*!*************************!*\
  !*** ./src/location.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "locationCityState": () => (/* binding */ locationCityState)
/* harmony export */ });
const locationCityState = function () {
  const cityInput = document.querySelector("#city-input").value;
  const localeState = document.querySelector("#state-input").value;

  let localeCity = cityInput.toLowerCase();
  localeCity = `${localeCity.charAt(0).toUpperCase()} ${localeCity.slice(1)}`;

  return { localeCity, localeState };
};




/***/ }),

/***/ "./src/ui.js":
/*!*******************!*\
  !*** ./src/ui.js ***!
  \*******************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dailyForecast": () => (/* binding */ dailyForecast),
/* harmony export */   "forecastCityState": () => (/* binding */ forecastCityState),
/* harmony export */   "forecastType": () => (/* binding */ forecastType),
/* harmony export */   "hourlyForecast": () => (/* binding */ hourlyForecast)
/* harmony export */ });
/* harmony import */ var _weatherData__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./weatherData */ "./src/weatherData.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/location.js");



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

const forecastType = function () {
  const forecastBtns = document.querySelector(".forecast-btns");

  forecastBtns.addEventListener("click", function (e) {
    clearWeatherData();
    if (e.target.classList.contains("hourly")) {
      return hourlyForecast();
    }
    return dailyForecast();
  });
};

const clearWeatherData = function () {
  const dataContainer = document.querySelector(".forecast-results");
  while (dataContainer.firstChild) {
    dataContainer.removeChild(dataContainer.firstChild);
  }
};

const forecastCityState = function () {
  const forecastHeader = document.querySelector(".forecast-type-header");
  const cityState = (0,_location__WEBPACK_IMPORTED_MODULE_1__.locationCityState)();

  return (forecastHeader.textContent = `Forecast - ${cityState.localeCity}, ${cityState.localeState}`);
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
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/location.js");
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ui */ "./src/ui.js");




const coordinates = async function () {
  const location = (0,_location__WEBPACK_IMPORTED_MODULE_1__.locationCityState)();
  const localeCity = location.localeCity;
  const localeState = location.localeState;
  const stateGeoCode = _geoCodes__WEBPACK_IMPORTED_MODULE_0__.stateCode[localeState];
  const country = "840";
  const data = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${localeCity},${stateGeoCode},${country}&limit=5&appid=${"5b58e96921e508b235d970ab31d89fe8"}`,
    { mode: "cors" }
  );
  const resp = await data.json();
  const locationLatLon = resp[0];

  return { lat: locationLatLon.lat, lon: locationLatLon.lon };
};

const weatherData = async function () {
  const cityCoordinates = await coordinates();
  const lat = cityCoordinates.lat;
  const lon = cityCoordinates.lon;

  const data = await fetch(
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${"5b58e96921e508b235d970ab31d89fe8"}`
  );
  return await data.json();
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
/* harmony import */ var _ui__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ui */ "./src/ui.js");
/* harmony import */ var _location__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./location */ "./src/location.js");



window.addEventListener("load", function () {
  (0,_ui__WEBPACK_IMPORTED_MODULE_0__.forecastType)();
  const search = document.querySelector(".submit-search");
  search.addEventListener("click", function () {
    (0,_location__WEBPACK_IMPORTED_MODULE_1__.locationCityState)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.forecastCityState)();
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNsQkE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLG9DQUFvQyxFQUFFLG9CQUFvQjs7QUFFNUUsV0FBVztBQUNYOztBQUU2Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNWZTtBQUNHOztBQUUvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsV0FBVztBQUNYOztBQUVBO0FBQ0EscUJBQXFCLHlEQUFXO0FBQ2hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIseURBQVc7QUFDaEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxvQkFBb0IsNERBQWlCOztBQUVyQyxxREFBcUQscUJBQXFCLElBQUksc0JBQXNCO0FBQ3BHOztBQUUwRTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEhuQztBQUNRO0FBQ047O0FBRXpDO0FBQ0EsbUJBQW1CLDREQUFpQjtBQUNwQztBQUNBO0FBQ0EsdUJBQXVCLGdEQUFTO0FBQ2hDO0FBQ0E7QUFDQSxzREFBc0QsV0FBVyxHQUFHLGFBQWEsR0FBRyxRQUFRLGlCQUFpQixrQ0FBa0IsQ0FBQztBQUNoSSxNQUFNO0FBQ047QUFDQTtBQUNBOztBQUVBLFdBQVc7QUFDWDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJEQUEyRCxJQUFJLE9BQU8sSUFBSSxTQUFTLGtDQUFrQixDQUFDO0FBQ3RHO0FBQ0E7QUFDQTs7QUFFdUI7Ozs7Ozs7VUMvQnZCO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDRGM7QUFDaUM7O0FBRS9DO0FBQ0EsRUFBRSxpREFBWTtBQUNkO0FBQ0E7QUFDQSxJQUFJLDREQUFpQjtBQUNyQixJQUFJLHNEQUFpQjtBQUNyQixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dlb0NvZGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RhdGVDb2RlID0ge1xyXG4gICAgQWxhYmFtYTogJ1VTLUFMJyxcclxuICAgIEFsYXNrYTogJ1VTLUFLJyxcclxuICAgIEFyaXpvbmE6ICdVUy1BWicsXHJcbiAgICBBcmthbnNhczogJ1VTLUFSJyxcclxuICAgIENhbGlmb3JuaWE6ICdVUy1DQScsXHJcbiAgICBDb2xvcmFkbzogJ1VTLUNPJyxcclxuICAgIE9oaW86ICdVUy1PSCcsXHJcbn1cclxuXHJcbmNvbnN0IGNvdW50cnlDb2RlID0ge1xyXG4gICAgQ3VyYWNhbzogJzUyMScsXHJcbiAgICBEb21pbmljYW5SZXB1YmxpYzogJzIxNCcsXHJcbiAgICBJbmRpYTogJzM1NicsXHJcbiAgICBNZXhpY286ICc0ODQnLFxyXG4gICAgVW5pdGVkS2luZ2RvbTogJzgyNicsXHJcbiAgICBVbml0ZWRTdGF0ZXM6ICc4NDAnLFxyXG59XHJcblxyXG5leHBvcnQge3N0YXRlQ29kZX0iLCJjb25zdCBsb2NhdGlvbkNpdHlTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5LWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBsb2NhbGVTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdGUtaW5wdXRcIikudmFsdWU7XG5cbiAgbGV0IGxvY2FsZUNpdHkgPSBjaXR5SW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgbG9jYWxlQ2l0eSA9IGAke2xvY2FsZUNpdHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9ICR7bG9jYWxlQ2l0eS5zbGljZSgxKX1gO1xuXG4gIHJldHVybiB7IGxvY2FsZUNpdHksIGxvY2FsZVN0YXRlIH07XG59O1xuXG5leHBvcnQgeyBsb2NhdGlvbkNpdHlTdGF0ZSB9O1xuIiwiaW1wb3J0IHsgd2VhdGhlckRhdGEgfSBmcm9tIFwiLi93ZWF0aGVyRGF0YVwiO1xuaW1wb3J0IHsgbG9jYXRpb25DaXR5U3RhdGUgfSBmcm9tIFwiLi9sb2NhdGlvblwiO1xuXG5jb25zdCBob3VybHlEYXRhRWxzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJob3VybHktZGF0ZVwiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJob3VybHktdGVtcFwiKTtcbiAgY29uc3Qgd2VhdGhlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB3ZWF0aGVyLmNsYXNzTGlzdC5hZGQoXCJob3VybHktd2VhdGhlclwiKTtcblxuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXApO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gIGNvbnN0IGRhdGVFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ob3VybHktZGF0ZVwiKTtcbiAgY29uc3QgdGVtcEVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseS10ZW1wXCIpO1xuICBjb25zdCB3ZWF0aGVyRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5LXdlYXRoZXJcIik7XG5cbiAgcmV0dXJuIHsgZGF0YUNvbnRhaW5lciwgZGF0ZUVsLCB0ZW1wRWwsIHdlYXRoZXJFbCB9O1xufTtcblxuY29uc3QgaG91cmx5Rm9yZWNhc3QgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCB3ZWF0aGVyRGF0YSgpO1xuICBjb25zdCBob3VybHlEYXRhID0gZGF0YS5ob3VybHk7XG4gIGNvbnN0IGhvdXJseURhdGFBcnIgPSBuZXcgQXJyYXkoMTIpLmZpbGwoXCJcIik7XG5cbiAgaG91cmx5RGF0YUFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbmV3RWwgPSBob3VybHlEYXRhRWxzKCk7XG4gICAgY29uc3QgY3VySG91ciA9IGhvdXJseURhdGFbaV07XG4gICAgbmV3RWwuZGF0ZUVsLnRleHRDb250ZW50ID0gbmV3IERhdGUoY3VySG91ci5kdCAqIDEwMDApLnRvTG9jYWxlVGltZVN0cmluZygpO1xuICAgIG5ld0VsLnRlbXBFbC50ZXh0Q29udGVudCA9IGN1ckhvdXIudGVtcDtcbiAgICBuZXdFbC53ZWF0aGVyRWwudGV4dENvbnRlbnQgPSBjdXJIb3VyLndlYXRoZXJbMF0ubWFpbjtcbiAgICBjb25zdCByZXN1bHRzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdC1yZXN1bHRzXCIpO1xuXG4gICAgcmVzdWx0cy5hcHBlbmRDaGlsZChuZXdFbC5kYXRhQ29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkYWlseURhdGFFbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhaWx5LWRhdGVcIik7XG4gIGNvbnN0IHRlbXBIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbXBIaWdoLmNsYXNzTGlzdC5hZGQoXCJkYWlseS10ZW1wSGlnaFwiKTtcbiAgY29uc3QgdGVtcExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZW1wTG93LmNsYXNzTGlzdC5hZGQoXCJkYWlseS10ZW1wTG93XCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiZGFpbHktaHVtaWRpdHlcIik7XG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgd2VhdGhlci5jbGFzc0xpc3QuYWRkKFwiZGFpbHktd2VhdGhlclwiKTtcblxuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBIaWdoKTtcbiAgZGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wTG93KTtcbiAgZGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgY29uc3QgZGF0ZUVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWRhdGVcIik7XG4gIGNvbnN0IHRlbXBIaWdoRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktdGVtcEhpZ2hcIik7XG4gIGNvbnN0IHRlbXBMb3dFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYWlseS10ZW1wTG93XCIpO1xuICBjb25zdCBodW1pZGl0eUVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWh1bWlkaXR5XCIpO1xuICBjb25zdCB3ZWF0aGVyRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktd2VhdGhlclwiKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGFDb250YWluZXIsXG4gICAgZGF0ZUVsLFxuICAgIHRlbXBIaWdoRWwsXG4gICAgdGVtcExvd0VsLFxuICAgIGh1bWlkaXR5RWwsXG4gICAgd2VhdGhlckVsLFxuICB9O1xufTtcblxuY29uc3QgZGFpbHlGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhKCk7XG4gIGNvbnN0IGRhaWx5RGF0YSA9IGRhdGEuZGFpbHk7XG4gIGNvbnN0IGRhaWx5RGF0YUFyciA9IG5ldyBBcnJheSg3KS5maWxsKFwiXCIpO1xuXG4gIGRhaWx5RGF0YUFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbmV3RWwgPSBkYWlseURhdGFFbHMoKTtcbiAgICBjb25zdCBjdXJEYXkgPSBkYWlseURhdGFbaV07XG4gICAgbmV3RWwuZGF0ZUVsLnRleHRDb250ZW50ID0gbmV3IERhdGUoY3VyRGF5LmR0ICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgbmV3RWwudGVtcExvd0VsLnRleHRDb250ZW50ID0gY3VyRGF5LnRlbXAubWluO1xuICAgIG5ld0VsLnRlbXBIaWdoRWwudGV4dENvbnRlbnQgPSBjdXJEYXkudGVtcC5tYXg7XG4gICAgbmV3RWwuaHVtaWRpdHlFbC50ZXh0Q29udGVudCA9IGN1ckRheS5odW1pZGl0eTtcbiAgICBuZXdFbC53ZWF0aGVyRWwudGV4dENvbnRlbnQgPSBjdXJEYXkud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0LXJlc3VsdHNcIik7XG5cbiAgICByZXN1bHRzLmFwcGVuZENoaWxkKG5ld0VsLmRhdGFDb250YWluZXIpO1xuICB9KTtcbn07XG5cbmNvbnN0IGZvcmVjYXN0VHlwZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZm9yZWNhc3RCdG5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdC1idG5zXCIpO1xuXG4gIGZvcmVjYXN0QnRucy5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKGUpIHtcbiAgICBjbGVhcldlYXRoZXJEYXRhKCk7XG4gICAgaWYgKGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucyhcImhvdXJseVwiKSkge1xuICAgICAgcmV0dXJuIGhvdXJseUZvcmVjYXN0KCk7XG4gICAgfVxuICAgIHJldHVybiBkYWlseUZvcmVjYXN0KCk7XG4gIH0pO1xufTtcblxuY29uc3QgY2xlYXJXZWF0aGVyRGF0YSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YUNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3QtcmVzdWx0c1wiKTtcbiAgd2hpbGUgKGRhdGFDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIGRhdGFDb250YWluZXIucmVtb3ZlQ2hpbGQoZGF0YUNvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxufTtcblxuY29uc3QgZm9yZWNhc3RDaXR5U3RhdGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcmVjYXN0SGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5mb3JlY2FzdC10eXBlLWhlYWRlclwiKTtcbiAgY29uc3QgY2l0eVN0YXRlID0gbG9jYXRpb25DaXR5U3RhdGUoKTtcblxuICByZXR1cm4gKGZvcmVjYXN0SGVhZGVyLnRleHRDb250ZW50ID0gYEZvcmVjYXN0IC0gJHtjaXR5U3RhdGUubG9jYWxlQ2l0eX0sICR7Y2l0eVN0YXRlLmxvY2FsZVN0YXRlfWApO1xufTtcblxuZXhwb3J0IHsgaG91cmx5Rm9yZWNhc3QsIGRhaWx5Rm9yZWNhc3QsIGZvcmVjYXN0VHlwZSwgZm9yZWNhc3RDaXR5U3RhdGUgfTtcbiIsImltcG9ydCB7IHN0YXRlQ29kZSB9IGZyb20gXCIuL2dlb0NvZGVzXCI7XG5pbXBvcnQgeyBsb2NhdGlvbkNpdHlTdGF0ZSB9IGZyb20gXCIuL2xvY2F0aW9uXCI7XG5pbXBvcnQgeyBmb3JlY2FzdENpdHlTdGF0ZSB9IGZyb20gXCIuL3VpXCI7XG5cbmNvbnN0IGNvb3JkaW5hdGVzID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBsb2NhdGlvbiA9IGxvY2F0aW9uQ2l0eVN0YXRlKCk7XG4gIGNvbnN0IGxvY2FsZUNpdHkgPSBsb2NhdGlvbi5sb2NhbGVDaXR5O1xuICBjb25zdCBsb2NhbGVTdGF0ZSA9IGxvY2F0aW9uLmxvY2FsZVN0YXRlO1xuICBjb25zdCBzdGF0ZUdlb0NvZGUgPSBzdGF0ZUNvZGVbbG9jYWxlU3RhdGVdO1xuICBjb25zdCBjb3VudHJ5ID0gXCI4NDBcIjtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoKFxuICAgIGBodHRwOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9nZW8vMS4wL2RpcmVjdD9xPSR7bG9jYWxlQ2l0eX0sJHtzdGF0ZUdlb0NvZGV9LCR7Y291bnRyeX0mbGltaXQ9NSZhcHBpZD0ke3Byb2Nlc3MuZW52LnNlY3JldH1gLFxuICAgIHsgbW9kZTogXCJjb3JzXCIgfVxuICApO1xuICBjb25zdCByZXNwID0gYXdhaXQgZGF0YS5qc29uKCk7XG4gIGNvbnN0IGxvY2F0aW9uTGF0TG9uID0gcmVzcFswXTtcblxuICByZXR1cm4geyBsYXQ6IGxvY2F0aW9uTGF0TG9uLmxhdCwgbG9uOiBsb2NhdGlvbkxhdExvbi5sb24gfTtcbn07XG5cbmNvbnN0IHdlYXRoZXJEYXRhID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBjaXR5Q29vcmRpbmF0ZXMgPSBhd2FpdCBjb29yZGluYXRlcygpO1xuICBjb25zdCBsYXQgPSBjaXR5Q29vcmRpbmF0ZXMubGF0O1xuICBjb25zdCBsb24gPSBjaXR5Q29vcmRpbmF0ZXMubG9uO1xuXG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cHM6Ly9hcGkub3BlbndlYXRoZXJtYXAub3JnL2RhdGEvMy4wL29uZWNhbGw/bGF0PSR7bGF0fSZsb249JHtsb259JmFwcGlkPSR7cHJvY2Vzcy5lbnYuc2VjcmV0fWBcbiAgKTtcbiAgcmV0dXJuIGF3YWl0IGRhdGEuanNvbigpO1xufTtcblxuZXhwb3J0IHsgd2VhdGhlckRhdGEgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0IHtcbiAgZGFpbHlGb3JlY2FzdCxcbiAgaG91cmx5Rm9yZWNhc3QsXG4gIGZvcmVjYXN0VHlwZSxcbiAgZm9yZWNhc3RDaXR5U3RhdGUsXG59IGZyb20gXCIuL3VpXCI7XG5pbXBvcnQgeyBsb2NhdGlvbkNpdHlTdGF0ZSB9IGZyb20gXCIuL2xvY2F0aW9uXCI7XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIGZvcmVjYXN0VHlwZSgpO1xuICBjb25zdCBzZWFyY2ggPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnN1Ym1pdC1zZWFyY2hcIik7XG4gIHNlYXJjaC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgIGxvY2F0aW9uQ2l0eVN0YXRlKCk7XG4gICAgZm9yZWNhc3RDaXR5U3RhdGUoKTtcbiAgfSk7XG59KTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==