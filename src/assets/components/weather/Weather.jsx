import WeatherHeader from "../weather-header/WeatherHeader";
import WeatherContent from "../weather-сontent/WeatherContent";

import WeatherDetail from "../weather-detail/WeatherDetail";
import classes from "./Weather.module.css";

export default function Weather() {
  console.log(getWeatherData());
  return (
    <section className={classes["weather"]}>
      <WeatherHeader />
      <WeatherContent />
      <WeatherDetail />
    </section>
  );
}

function getWeatherData() {
  const weather = JSON.parse(localStorage.getItem("weather"));
  const date = Date.now();
  console.log(weather);
  const formatedDate = new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "short",
    day: "numeric",
  }).format(date);
  const weatherData = {
    name: weather.name,
    temp: weather.main.temp,
    forecast: weather.weather[0].description,
    wind: {
      speed: `${weather.wind.speed}km/h`,
    },
    pressure: `${weather.main.pressure}mbar`,
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
