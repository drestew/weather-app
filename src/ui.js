import { weatherData } from "./weatherData";

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
  const data = await weatherData();
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

export { hourlyForecast, dailyForecast };
