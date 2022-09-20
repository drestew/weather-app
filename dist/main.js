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
  localeCity = `${localeCity.charAt(0).toUpperCase()}${localeCity.slice(1)}`;

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
/* harmony export */   "hourlyForecast": () => (/* binding */ hourlyForecast),
/* harmony export */   "todayForecast": () => (/* binding */ todayForecast)
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
    const results = document.querySelector(".forecast");

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

const todayDataEls = function () {
  const dataContainer = document.createElement("div");
  dataContainer.classList.add("forecast-results");
  const date = document.createElement("span");
  date.classList.add("today-date", "block");
  const sunrise = document.createElement("span");
  sunrise.classList.add("today-sunrise", "block");
  const sunset = document.createElement("span");
  sunset.classList.add("today-sunset", "block");
  const temp = document.createElement("span");
  temp.classList.add("today-temp", "block");
  const humidity = document.createElement("span");
  humidity.classList.add("today-humidity", "block");
  const weather = document.createElement("span");
  weather.classList.add("today-weather", "block");

  dataContainer.appendChild(date);
  dataContainer.appendChild(sunrise);
  dataContainer.appendChild(sunset);
  dataContainer.appendChild(temp);
  dataContainer.appendChild(humidity);
  dataContainer.appendChild(weather);

  const dateEl = dataContainer.querySelector(".today-date");
  const sunriseEl = dataContainer.querySelector(".today-sunrise");
  const sunsetEl = dataContainer.querySelector(".today-sunset");
  const tempEl = dataContainer.querySelector(".today-temp");
  const humidityEl = dataContainer.querySelector(".today-humidity");
  const weatherEl = dataContainer.querySelector(".today-weather");

  return {
    dataContainer,
    dateEl,
    sunriseEl,
    sunsetEl,
    tempEl,
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
    let day = new Date(curDay.dt * 1000).toDateString();
    day = day.slice(0, 3);
    newEl.dateEl.textContent = day;
    newEl.tempLowEl.textContent = curDay.temp.min;
    newEl.tempHighEl.textContent = curDay.temp.max;
    newEl.humidityEl.textContent = curDay.humidity;
    newEl.weatherEl.textContent = curDay.weather[0].main;
    const results = document.querySelector(".forecast");
    console.log(curDay);
    results.appendChild(newEl.dataContainer);
  });
};

const todayForecast = async function () {
  const data = await (0,_weatherData__WEBPACK_IMPORTED_MODULE_0__.weatherData)();
  const todayData = data.current;
  const newEl = todayDataEls();

  let todayDate = new Date(todayData.dt * 1000).toDateString();
  // todayDate = todayDate.slice(0, 3);
  newEl.dateEl.textContent = todayDate;
  let sunrise = new Date(todayData.sunrise * 1000).toTimeString();
  newEl.sunriseEl.textContent = `Sunrise - ${sunrise}`;
  let sunset = new Date(todayData.sunrise * 1000).toTimeString();
  newEl.sunsetEl.textContent = `Sunset - ${sunset}`;
  newEl.tempEl.textContent = todayData.temp;
  newEl.humidityEl.textContent = todayData.humidity;

  const results = document.querySelector(".forecast");

  results.appendChild(newEl.dataContainer);
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
  const dataContainer = document.querySelector(".forecast");
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
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.todayForecast)();
    (0,_ui__WEBPACK_IMPORTED_MODULE_0__.forecastCityState)();
  });
});

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SUFBSSw0REFBaUI7QUFDckIsSUFBSSxrREFBYTtBQUNqQixJQUFJLHNEQUFpQjtBQUNyQixHQUFHO0FBQ0gsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2dlb0NvZGVzLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL2xvY2F0aW9uLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3VpLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwLy4vc3JjL3dlYXRoZXJEYXRhLmpzIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly93ZWF0aGVyLWFwcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3dlYXRoZXItYXBwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VhdGhlci1hcHAvLi9zcmMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3Qgc3RhdGVDb2RlID0ge1xyXG4gICAgQWxhYmFtYTogJ1VTLUFMJyxcclxuICAgIEFsYXNrYTogJ1VTLUFLJyxcclxuICAgIEFyaXpvbmE6ICdVUy1BWicsXHJcbiAgICBBcmthbnNhczogJ1VTLUFSJyxcclxuICAgIENhbGlmb3JuaWE6ICdVUy1DQScsXHJcbiAgICBDb2xvcmFkbzogJ1VTLUNPJyxcclxuICAgIE9oaW86ICdVUy1PSCcsXHJcbn1cclxuXHJcbmNvbnN0IGNvdW50cnlDb2RlID0ge1xyXG4gICAgQ3VyYWNhbzogJzUyMScsXHJcbiAgICBEb21pbmljYW5SZXB1YmxpYzogJzIxNCcsXHJcbiAgICBJbmRpYTogJzM1NicsXHJcbiAgICBNZXhpY286ICc0ODQnLFxyXG4gICAgVW5pdGVkS2luZ2RvbTogJzgyNicsXHJcbiAgICBVbml0ZWRTdGF0ZXM6ICc4NDAnLFxyXG59XHJcblxyXG5leHBvcnQge3N0YXRlQ29kZX0iLCJjb25zdCBsb2NhdGlvbkNpdHlTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2l0eUlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjaXR5LWlucHV0XCIpLnZhbHVlO1xuICBjb25zdCBsb2NhbGVTdGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjc3RhdGUtaW5wdXRcIikudmFsdWU7XG5cbiAgbGV0IGxvY2FsZUNpdHkgPSBjaXR5SW5wdXQudG9Mb3dlckNhc2UoKTtcbiAgbG9jYWxlQ2l0eSA9IGAke2xvY2FsZUNpdHkuY2hhckF0KDApLnRvVXBwZXJDYXNlKCl9JHtsb2NhbGVDaXR5LnNsaWNlKDEpfWA7XG5cbiAgcmV0dXJuIHsgbG9jYWxlQ2l0eSwgbG9jYWxlU3RhdGUgfTtcbn07XG5cbmV4cG9ydCB7IGxvY2F0aW9uQ2l0eVN0YXRlIH07XG4iLCJpbXBvcnQgeyB3ZWF0aGVyRGF0YSB9IGZyb20gXCIuL3dlYXRoZXJEYXRhXCI7XG5pbXBvcnQgeyBsb2NhdGlvbkNpdHlTdGF0ZSB9IGZyb20gXCIuL2xvY2F0aW9uXCI7XG5cbmNvbnN0IGhvdXJseURhdGFFbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImhvdXJseS1kYXRlXCIpO1xuICBjb25zdCB0ZW1wID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbXAuY2xhc3NMaXN0LmFkZChcImhvdXJseS10ZW1wXCIpO1xuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHdlYXRoZXIuY2xhc3NMaXN0LmFkZChcImhvdXJseS13ZWF0aGVyXCIpO1xuXG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoZGF0ZSk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcCk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgY29uc3QgZGF0ZUVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmhvdXJseS1kYXRlXCIpO1xuICBjb25zdCB0ZW1wRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuaG91cmx5LXRlbXBcIik7XG4gIGNvbnN0IHdlYXRoZXJFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5ob3VybHktd2VhdGhlclwiKTtcblxuICByZXR1cm4geyBkYXRhQ29udGFpbmVyLCBkYXRlRWwsIHRlbXBFbCwgd2VhdGhlckVsIH07XG59O1xuXG5jb25zdCBob3VybHlGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhKCk7XG4gIGNvbnN0IGhvdXJseURhdGEgPSBkYXRhLmhvdXJseTtcbiAgY29uc3QgaG91cmx5RGF0YUFyciA9IG5ldyBBcnJheSgxMikuZmlsbChcIlwiKTtcblxuICBob3VybHlEYXRhQXJyLmZvckVhY2goKGl0ZW0sIGkpID0+IHtcbiAgICBjb25zdCBuZXdFbCA9IGhvdXJseURhdGFFbHMoKTtcbiAgICBjb25zdCBjdXJIb3VyID0gaG91cmx5RGF0YVtpXTtcbiAgICBuZXdFbC5kYXRlRWwudGV4dENvbnRlbnQgPSBuZXcgRGF0ZShjdXJIb3VyLmR0ICogMTAwMCkudG9Mb2NhbGVUaW1lU3RyaW5nKCk7XG4gICAgbmV3RWwudGVtcEVsLnRleHRDb250ZW50ID0gY3VySG91ci50ZW1wO1xuICAgIG5ld0VsLndlYXRoZXJFbC50ZXh0Q29udGVudCA9IGN1ckhvdXIud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXG4gICAgcmVzdWx0cy5hcHBlbmRDaGlsZChuZXdFbC5kYXRhQ29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5jb25zdCBkYWlseURhdGFFbHMgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICBjb25zdCBkYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGRhdGUuY2xhc3NMaXN0LmFkZChcImRhaWx5LWRhdGVcIik7XG4gIGNvbnN0IHRlbXBIaWdoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHRlbXBIaWdoLmNsYXNzTGlzdC5hZGQoXCJkYWlseS10ZW1wSGlnaFwiKTtcbiAgY29uc3QgdGVtcExvdyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZW1wTG93LmNsYXNzTGlzdC5hZGQoXCJkYWlseS10ZW1wTG93XCIpO1xuICBjb25zdCBodW1pZGl0eSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBodW1pZGl0eS5jbGFzc0xpc3QuYWRkKFwiZGFpbHktaHVtaWRpdHlcIik7XG4gIGNvbnN0IHdlYXRoZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgd2VhdGhlci5jbGFzc0xpc3QuYWRkKFwiZGFpbHktd2VhdGhlclwiKTtcblxuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHRlbXBIaWdoKTtcbiAgZGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZCh0ZW1wTG93KTtcbiAgZGF0YUNvbnRhaW5lci5hcHBlbmRDaGlsZChodW1pZGl0eSk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQod2VhdGhlcik7XG5cbiAgY29uc3QgZGF0ZUVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWRhdGVcIik7XG4gIGNvbnN0IHRlbXBIaWdoRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktdGVtcEhpZ2hcIik7XG4gIGNvbnN0IHRlbXBMb3dFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi5kYWlseS10ZW1wTG93XCIpO1xuICBjb25zdCBodW1pZGl0eUVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLmRhaWx5LWh1bWlkaXR5XCIpO1xuICBjb25zdCB3ZWF0aGVyRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIuZGFpbHktd2VhdGhlclwiKTtcblxuICByZXR1cm4ge1xuICAgIGRhdGFDb250YWluZXIsXG4gICAgZGF0ZUVsLFxuICAgIHRlbXBIaWdoRWwsXG4gICAgdGVtcExvd0VsLFxuICAgIGh1bWlkaXR5RWwsXG4gICAgd2VhdGhlckVsLFxuICB9O1xufTtcblxuY29uc3QgdG9kYXlEYXRhRWxzID0gZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgZGF0YUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKFwiZm9yZWNhc3QtcmVzdWx0c1wiKTtcbiAgY29uc3QgZGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICBkYXRlLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1kYXRlXCIsIFwiYmxvY2tcIik7XG4gIGNvbnN0IHN1bnJpc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3VucmlzZS5jbGFzc0xpc3QuYWRkKFwidG9kYXktc3VucmlzZVwiLCBcImJsb2NrXCIpO1xuICBjb25zdCBzdW5zZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3BhblwiKTtcbiAgc3Vuc2V0LmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1zdW5zZXRcIiwgXCJibG9ja1wiKTtcbiAgY29uc3QgdGVtcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzcGFuXCIpO1xuICB0ZW1wLmNsYXNzTGlzdC5hZGQoXCJ0b2RheS10ZW1wXCIsIFwiYmxvY2tcIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIGh1bWlkaXR5LmNsYXNzTGlzdC5hZGQoXCJ0b2RheS1odW1pZGl0eVwiLCBcImJsb2NrXCIpO1xuICBjb25zdCB3ZWF0aGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInNwYW5cIik7XG4gIHdlYXRoZXIuY2xhc3NMaXN0LmFkZChcInRvZGF5LXdlYXRoZXJcIiwgXCJibG9ja1wiKTtcblxuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKGRhdGUpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1bnJpc2UpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHN1bnNldCk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQodGVtcCk7XG4gIGRhdGFDb250YWluZXIuYXBwZW5kQ2hpbGQoaHVtaWRpdHkpO1xuICBkYXRhQ29udGFpbmVyLmFwcGVuZENoaWxkKHdlYXRoZXIpO1xuXG4gIGNvbnN0IGRhdGVFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50b2RheS1kYXRlXCIpO1xuICBjb25zdCBzdW5yaXNlRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktc3VucmlzZVwiKTtcbiAgY29uc3Qgc3Vuc2V0RWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktc3Vuc2V0XCIpO1xuICBjb25zdCB0ZW1wRWwgPSBkYXRhQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoXCIudG9kYXktdGVtcFwiKTtcbiAgY29uc3QgaHVtaWRpdHlFbCA9IGRhdGFDb250YWluZXIucXVlcnlTZWxlY3RvcihcIi50b2RheS1odW1pZGl0eVwiKTtcbiAgY29uc3Qgd2VhdGhlckVsID0gZGF0YUNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKFwiLnRvZGF5LXdlYXRoZXJcIik7XG5cbiAgcmV0dXJuIHtcbiAgICBkYXRhQ29udGFpbmVyLFxuICAgIGRhdGVFbCxcbiAgICBzdW5yaXNlRWwsXG4gICAgc3Vuc2V0RWwsXG4gICAgdGVtcEVsLFxuICAgIGh1bWlkaXR5RWwsXG4gICAgd2VhdGhlckVsLFxuICB9O1xufTtcblxuY29uc3QgZGFpbHlGb3JlY2FzdCA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZGF0YSA9IGF3YWl0IHdlYXRoZXJEYXRhKCk7XG4gIGNvbnN0IGRhaWx5RGF0YSA9IGRhdGEuZGFpbHk7XG4gIGNvbnN0IGRhaWx5RGF0YUFyciA9IG5ldyBBcnJheSg3KS5maWxsKFwiXCIpO1xuXG4gIGRhaWx5RGF0YUFyci5mb3JFYWNoKChpdGVtLCBpKSA9PiB7XG4gICAgY29uc3QgbmV3RWwgPSBkYWlseURhdGFFbHMoKTtcbiAgICBjb25zdCBjdXJEYXkgPSBkYWlseURhdGFbaV07XG4gICAgbGV0IGRheSA9IG5ldyBEYXRlKGN1ckRheS5kdCAqIDEwMDApLnRvRGF0ZVN0cmluZygpO1xuICAgIGRheSA9IGRheS5zbGljZSgwLCAzKTtcbiAgICBuZXdFbC5kYXRlRWwudGV4dENvbnRlbnQgPSBkYXk7XG4gICAgbmV3RWwudGVtcExvd0VsLnRleHRDb250ZW50ID0gY3VyRGF5LnRlbXAubWluO1xuICAgIG5ld0VsLnRlbXBIaWdoRWwudGV4dENvbnRlbnQgPSBjdXJEYXkudGVtcC5tYXg7XG4gICAgbmV3RWwuaHVtaWRpdHlFbC50ZXh0Q29udGVudCA9IGN1ckRheS5odW1pZGl0eTtcbiAgICBuZXdFbC53ZWF0aGVyRWwudGV4dENvbnRlbnQgPSBjdXJEYXkud2VhdGhlclswXS5tYWluO1xuICAgIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuICAgIGNvbnNvbGUubG9nKGN1ckRheSk7XG4gICAgcmVzdWx0cy5hcHBlbmRDaGlsZChuZXdFbC5kYXRhQ29udGFpbmVyKTtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2RheUZvcmVjYXN0ID0gYXN5bmMgZnVuY3Rpb24gKCkge1xuICBjb25zdCBkYXRhID0gYXdhaXQgd2VhdGhlckRhdGEoKTtcbiAgY29uc3QgdG9kYXlEYXRhID0gZGF0YS5jdXJyZW50O1xuICBjb25zdCBuZXdFbCA9IHRvZGF5RGF0YUVscygpO1xuXG4gIGxldCB0b2RheURhdGUgPSBuZXcgRGF0ZSh0b2RheURhdGEuZHQgKiAxMDAwKS50b0RhdGVTdHJpbmcoKTtcbiAgLy8gdG9kYXlEYXRlID0gdG9kYXlEYXRlLnNsaWNlKDAsIDMpO1xuICBuZXdFbC5kYXRlRWwudGV4dENvbnRlbnQgPSB0b2RheURhdGU7XG4gIGxldCBzdW5yaXNlID0gbmV3IERhdGUodG9kYXlEYXRhLnN1bnJpc2UgKiAxMDAwKS50b1RpbWVTdHJpbmcoKTtcbiAgbmV3RWwuc3VucmlzZUVsLnRleHRDb250ZW50ID0gYFN1bnJpc2UgLSAke3N1bnJpc2V9YDtcbiAgbGV0IHN1bnNldCA9IG5ldyBEYXRlKHRvZGF5RGF0YS5zdW5yaXNlICogMTAwMCkudG9UaW1lU3RyaW5nKCk7XG4gIG5ld0VsLnN1bnNldEVsLnRleHRDb250ZW50ID0gYFN1bnNldCAtICR7c3Vuc2V0fWA7XG4gIG5ld0VsLnRlbXBFbC50ZXh0Q29udGVudCA9IHRvZGF5RGF0YS50ZW1wO1xuICBuZXdFbC5odW1pZGl0eUVsLnRleHRDb250ZW50ID0gdG9kYXlEYXRhLmh1bWlkaXR5O1xuXG4gIGNvbnN0IHJlc3VsdHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuXG4gIHJlc3VsdHMuYXBwZW5kQ2hpbGQobmV3RWwuZGF0YUNvbnRhaW5lcik7XG59O1xuXG5jb25zdCBmb3JlY2FzdFR5cGUgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGZvcmVjYXN0QnRucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuZm9yZWNhc3QtYnRuc1wiKTtcblxuICBmb3JlY2FzdEJ0bnMuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uIChlKSB7XG4gICAgY2xlYXJXZWF0aGVyRGF0YSgpO1xuICAgIGlmIChlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJob3VybHlcIikpIHtcbiAgICAgIHJldHVybiBob3VybHlGb3JlY2FzdCgpO1xuICAgIH1cbiAgICByZXR1cm4gZGFpbHlGb3JlY2FzdCgpO1xuICB9KTtcbn07XG5cbmNvbnN0IGNsZWFyV2VhdGhlckRhdGEgPSBmdW5jdGlvbiAoKSB7XG4gIGNvbnN0IGRhdGFDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0XCIpO1xuICB3aGlsZSAoZGF0YUNvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgZGF0YUNvbnRhaW5lci5yZW1vdmVDaGlsZChkYXRhQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG59O1xuXG5jb25zdCBmb3JlY2FzdENpdHlTdGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgZm9yZWNhc3RIZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmZvcmVjYXN0LXR5cGUtaGVhZGVyXCIpO1xuICBjb25zdCBjaXR5U3RhdGUgPSBsb2NhdGlvbkNpdHlTdGF0ZSgpO1xuXG4gIHJldHVybiAoZm9yZWNhc3RIZWFkZXIudGV4dENvbnRlbnQgPSBgRm9yZWNhc3QgLSAke2NpdHlTdGF0ZS5sb2NhbGVDaXR5fSwgJHtjaXR5U3RhdGUubG9jYWxlU3RhdGV9YCk7XG59O1xuXG5leHBvcnQge1xuICBob3VybHlGb3JlY2FzdCxcbiAgZGFpbHlGb3JlY2FzdCxcbiAgdG9kYXlGb3JlY2FzdCxcbiAgZm9yZWNhc3RUeXBlLFxuICBmb3JlY2FzdENpdHlTdGF0ZSxcbn07XG4iLCJpbXBvcnQgeyBzdGF0ZUNvZGUgfSBmcm9tIFwiLi9nZW9Db2Rlc1wiO1xuaW1wb3J0IHsgbG9jYXRpb25DaXR5U3RhdGUgfSBmcm9tIFwiLi9sb2NhdGlvblwiO1xuXG5jb25zdCBjb29yZGluYXRlcyA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgbG9jYXRpb24gPSBsb2NhdGlvbkNpdHlTdGF0ZSgpO1xuICBjb25zdCBsb2NhbGVDaXR5ID0gbG9jYXRpb24ubG9jYWxlQ2l0eTtcbiAgY29uc3QgbG9jYWxlU3RhdGUgPSBsb2NhdGlvbi5sb2NhbGVTdGF0ZTtcbiAgY29uc3Qgc3RhdGVHZW9Db2RlID0gc3RhdGVDb2RlW2xvY2FsZVN0YXRlXTtcbiAgY29uc3QgY291bnRyeSA9IFwiODQwXCI7XG4gIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaChcbiAgICBgaHR0cDovL2FwaS5vcGVud2VhdGhlcm1hcC5vcmcvZ2VvLzEuMC9kaXJlY3Q/cT0ke2xvY2FsZUNpdHl9LCR7c3RhdGVHZW9Db2RlfSwke2NvdW50cnl9JmxpbWl0PTUmYXBwaWQ9JHtwcm9jZXNzLmVudi5zZWNyZXR9YCxcbiAgICB7IG1vZGU6IFwiY29yc1wiIH1cbiAgKTtcbiAgY29uc3QgcmVzcCA9IGF3YWl0IGRhdGEuanNvbigpO1xuICBjb25zdCBsb2NhdGlvbkxhdExvbiA9IHJlc3BbMF07XG5cbiAgcmV0dXJuIHsgbGF0OiBsb2NhdGlvbkxhdExvbi5sYXQsIGxvbjogbG9jYXRpb25MYXRMb24ubG9uIH07XG59O1xuXG5jb25zdCB3ZWF0aGVyRGF0YSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgY29uc3QgY2l0eUNvb3JkaW5hdGVzID0gYXdhaXQgY29vcmRpbmF0ZXMoKTtcbiAgY29uc3QgbGF0ID0gY2l0eUNvb3JkaW5hdGVzLmxhdDtcbiAgY29uc3QgbG9uID0gY2l0eUNvb3JkaW5hdGVzLmxvbjtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzMuMC9vbmVjYWxsP2xhdD0ke2xhdH0mbG9uPSR7bG9ufSZhcHBpZD0ke3Byb2Nlc3MuZW52LnNlY3JldH1gXG4gICk7XG4gIHJldHVybiBhd2FpdCBkYXRhLmpzb24oKTtcbn07XG5cbmV4cG9ydCB7IHdlYXRoZXJEYXRhIH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCB7IHRvZGF5Rm9yZWNhc3QsIGZvcmVjYXN0VHlwZSwgZm9yZWNhc3RDaXR5U3RhdGUgfSBmcm9tIFwiLi91aVwiO1xuaW1wb3J0IHsgbG9jYXRpb25DaXR5U3RhdGUgfSBmcm9tIFwiLi9sb2NhdGlvblwiO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICBmb3JlY2FzdFR5cGUoKTtcbiAgY29uc3Qgc2VhcmNoID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5zdWJtaXQtc2VhcmNoXCIpO1xuICBzZWFyY2guYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICBsb2NhdGlvbkNpdHlTdGF0ZSgpO1xuICAgIHRvZGF5Rm9yZWNhc3QoKTtcbiAgICBmb3JlY2FzdENpdHlTdGF0ZSgpO1xuICB9KTtcbn0pO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9