import WeatherHeader from "../weather-header/WeatherHeader";
import { getIndicator } from "../../storage/storage";

import NoLocations from "./no-locations/NoLocations";
import WeatherContent from "../weather-сontent/WeatherContent";

import WeatherDetail from "../weather-detail/WeatherDetail";
import classes from "./Weather.module.css";

export default function Weather() {
  if (!localStorage.length) return <NoLocations />;
  const weather = getWeatherData();
  return (
    <section className={classes["weather"]}>
      <WeatherHeader cityName={weather.name} />
      <WeatherContent
        weatherImg={getIndicator(weather)}
        alt={"forecast-icon"}
        date={weather.date}
        weatherForecast={weather}
      />
      <WeatherDetail weather={weather} />
    </section>
  );
}

function getWeatherData() {
  const weather = Object.values(
    JSON.parse(localStorage.getItem("weatherData"))
  ).at(-1);
  const date = Date.now();

  const formatedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
  const weatherData = {
    shortForecast: weather.weather[0].main.toLowerCase(),
    name: weather.name,
    temp: weather.main.temp,
    forecast: weather.weather[0].description,
    wind: {
      speed: `${weather.wind.speed} km/h`,
    },
    pressure: `${weather.main.pressure} mbar`,
    feelsLike: weather.main.feels_like,
    humadity: `${weather.main.humidity}%`,
    date: {
      year: formatedDate.split(", ")[2],
      month: formatedDate.split(", ")[1].split(" ")[0],
      day: formatedDate.split(", ")[1].split(" ")[1],
      weekday: formatedDate.split(", ")[0],
      fullNumDate: new Intl.DateTimeFormat().format(),
    },
  };

  return weatherData;
}
