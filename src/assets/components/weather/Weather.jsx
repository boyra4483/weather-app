import getWeather from "../../api/api";

import WeatherHeader from "../weather-header/WeatherHeader";
import WeatherContent from "../weather-сontent/WeatherContent";

import WeatherDetail from "../weather-detail/WeatherDetail";
import classes from "./Weather.module.css";

export default function Weather() {
  return (
    <section className={classes["weather"]}>
      <WeatherHeader />
      <WeatherContent />
      <WeatherDetail />
    </section>
  );
}
