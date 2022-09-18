import {
  dailyForecast,
  hourlyForecast,
  forecastType,
  forecastCityState,
} from "./ui";
import { locationCityState } from "./location";

window.addEventListener("load", function () {
  forecastType();
  const search = document.querySelector(".submit-search");
  search.addEventListener("click", function () {
    locationCityState();
    forecastCityState();
  });
});
