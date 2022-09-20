const locationCityState = function () {
  const cityInput = document.querySelector("#city-input").value;
  const localeState = document.querySelector("#state-input").value;

  let localeCity = cityInput.toLowerCase();
  localeCity = `${localeCity.charAt(0).toUpperCase()}${localeCity.slice(1)}`;

  return { localeCity, localeState };
};

export { locationCityState };
