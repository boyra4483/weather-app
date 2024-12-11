export const indicators = {
  clear: "src/assets/img/icons/forecast-indicators/clear.svg",
  clouds: "src/assets/img/icons/forecast-indicators/clouds.svg",
  drizzle: "src/assets/img/icons/forecast-indicators/drizzle.svg",
  rain: "src/assets/img/icons/forecast-indicators/rain.svg",
  snow: "src/assets/img/icons/forecast-indicators/snow.svg",
  thunderstorm: "src/assets/img/icons/forecast-indicators/thunderstorm.svg",
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
  temperature: "src/assets/img/icons/forecast-indicators/temperature.svg",
  water: "src/assets/img/icons/forecast-indicators/water.svg",
  locationCurrent: "src/assets/img/icons/common-icons/location-current.svg",
};

export const getIndicator = (weather) =>
  "weather" in weather
    ? indicators[weather.weather[0].main.toLowerCase()]
    : bigindIcators[weather.shortForecast];
