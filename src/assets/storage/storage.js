export const indicators = {
  clear: "src/assets/img/icons/forecast-indicators/clear.svg",
  clouds: "src/assets/img/icons/forecast-indicators/clouds.svg",
  drizzle: "src/assets/img/icons/forecast-indicators/drizzle.svg",
  feelsLike: "src/assets/img/icons/forecast-indicators/feels-like.svg",
  rain: "src/assets/img/icons/forecast-indicators/rain.svg",
  snow: "src/assets/img/icons/forecast-indicators/snow.svg",
  thunderstorm: "src/assets/img/icons/forecast-indicators/thunderstorm.svg",
  temperature: "src/assets/img/icons/forecast-indicators/temperature.svg",
  water: "src/assets/img/icons/forecast-indicators/water.svg",
};

export const bigindIcators = {
  clear: "src/assets/img/icons/big-forecast-indicators/clear.svg",
  clouds: "src/assets/img/icons/big-forecast-indicators/clouds.svg",
  drizzle: "src/assets/img/icons/big-forecast-indicators/drizzle.svg",
  rain: "src/assets/img/icons/big-forecast-indicators/rain.svg",
  snow: "src/assets/img/icons/big-forecast-indicators/snow.svg",
  thunderstorm: "src/assets/img/icons/big-forecast-indicators/thunderstorm.svg",
};

export const commonIndicators = {
  arrowLeft: "src/assets/img/icons/common-icons/arrow-left.svg",
  locationCurrent: "src/assets/img/icons/common-icons/location-current.svg",
  magnifyingGlass: "src/assets/img/icons/common-icons/magnifying-glass.svg",
};

export const getIndicator = (weather) =>
  "weather" in weather
    ? indicators[weather.weather[0].main.toLowerCase()]
    : bigindIcators[weather.shortForecast];

export const setLocalStorage = (nameCity, data) =>
  localStorage.setItem(
    "weatherData",
    JSON.stringify({
      ...JSON.parse(localStorage.getItem("weatherData")),
      [nameCity]: data,
    })
  );
