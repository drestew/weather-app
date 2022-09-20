import { weatherData } from "./weatherData";
import { locationCityState } from "./location";

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
  const data = await weatherData();
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
  const data = await weatherData();
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
  const data = await weatherData();
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
  const cityState = locationCityState();

  return (forecastHeader.textContent = `Forecast - ${cityState.localeCity}, ${cityState.localeState}`);
};

export {
  hourlyForecast,
  dailyForecast,
  todayForecast,
  forecastType,
  forecastCityState,
};
