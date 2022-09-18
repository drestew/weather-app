import { stateCode } from "./geoCodes";
import { locationCityState } from "./location";
import { forecastCityState } from "./ui";

const coordinates = async function () {
  const location = locationCityState();
  const localeCity = location.localeCity;
  const localeState = location.localeState;
  const stateGeoCode = stateCode[localeState];
  const country = "840";
  const data = await fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${localeCity},${stateGeoCode},${country}&limit=5&appid=${process.env.secret}`,
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
    `https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${process.env.secret}`
  );
  return await data.json();
};

export { weatherData };
