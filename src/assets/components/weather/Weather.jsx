import getWeather from "../../api/api";

import WeatherHeader from "../weather-header/WeatherHeader";
import WeatherContent from "../weather-сontent/WeatherContent";

import WeatherDetail from "../weather-detail/WeatherDetail";
import "./Weather.css";

export default function Weather() {
  document.body.style.backgroundImage =
    "linear-gradient(180deg, #62b8f6 0%, #2c79c1 77.96%)";
  return (
    <section className="weather">
      <WeatherHeader />
      <WeatherContent />
      <WeatherDetail />
    </section>
  );
}
