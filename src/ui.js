import { weatherData } from "./weatherData";

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

  const data = await weatherData();
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

export { hourlyForecast };
