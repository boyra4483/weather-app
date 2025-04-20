import clearSvg from "src/assets/img/icons/forecast-indicators/clear.svg";
import cloudsSvg from "src/assets/img/icons/forecast-indicators/clouds.svg";
import drizzleSvg from "src/assets/img/icons/forecast-indicators/drizzle.svg";
import feelsLikeSvg from "src/assets/img/icons/forecast-indicators/feels-like.svg";
import rainSvg from "src/assets/img/icons/forecast-indicators/rain.svg";
import snowSvg from "src/assets/img/icons/forecast-indicators/snow.svg";
import thunderstormSvg from "src/assets/img/icons/forecast-indicators/thunderstorm.svg";
import temperatureSvg from "src/assets/img/icons/forecast-indicators/temperature.svg";
import waterSvg from "src/assets/img/icons/forecast-indicators/water.svg";

import bigClearSvg from "src/assets/img/icons/big-forecast-indicators/clear.svg";
import bigCloudsSvg from "src/assets/img/icons/big-forecast-indicators/clouds.svg";
import bigDrizzleSvg from "src/assets/img/icons/big-forecast-indicators/drizzle.svg";
import bigRainSvg from "src/assets/img/icons/big-forecast-indicators/rain.svg";
import bigSnowSvg from "src/assets/img/icons/big-forecast-indicators/snow.svg";
import bigThunderstormSvg from "src/assets/img/icons/big-forecast-indicators/thunderstorm.svg";

import arrowLeftSvg from "src/assets/img/icons/common-icons/arrow-left.svg";
import locationCurrentSvg from "src/assets/img/icons/common-icons/location-current.svg";
import magnifyingGlassSvg from "src/assets/img/icons/common-icons/magnifying-glass.svg";

export const indicators = {
  clear: clearSvg,
  clouds: cloudsSvg,
  drizzle: drizzleSvg,
  feelsLike: feelsLikeSvg,
  rain: rainSvg,
  snow: snowSvg,
  thunderstorm: thunderstormSvg,
  temperature: temperatureSvg,
  water: waterSvg,
};

export const bigindIcators = {
  clear: bigClearSvg,
  clouds: bigCloudsSvg,
  drizzle: bigDrizzleSvg,
  rain: bigRainSvg,
  snow: bigSnowSvg,
  thunderstorm: bigThunderstormSvg,
};

export const commonIndicators = {
  arrowLeft: arrowLeftSvg,
  locationCurrent: locationCurrentSvg,
  magnifyingGlass: magnifyingGlassSvg,
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

export const getLocalStorage = () =>
  JSON.parse(localStorage.getItem("weatherData"));

export const setCityName = (name) => {
  const weatherData = JSON.parse(localStorage.getItem("additionalWeatherData"));
  if (weatherData.length < 4) {
    return localStorage.setItem(
      "additionalWeatherData",
      JSON.stringify(Array.from(new Set([...weatherData, name])))
    );
  }
  let counter = +weatherData[0];
  if (!weatherData.includes(name)) {
    weatherData.splice(counter, 1, name);
    counter++;
  }

  counter = counter == 4 ? (weatherData[0] = 1) : (weatherData[0] = counter);
  localStorage.setItem(
    "additionalWeatherData",
    JSON.stringify(Array.from(new Set([...weatherData, name])))
  );
};

export const getCityNames = () =>
  JSON.parse(localStorage.getItem("additionalWeatherData"));
