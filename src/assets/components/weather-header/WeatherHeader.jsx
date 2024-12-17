import { Link } from "react-router-dom";
import classes from "./WeatherHeader.module.css";

export default function WeatherHeader({ cityName }) {
  return (
    <div className={classes["weather-header"]}>
      <Link to="/locations" className={classes["cross"]}></Link>
      <section className={classes["cities"]}>
        <div className={classes["cities__name"]}>{cityName}</div>
        <ul className={classes["navigation"]}>
          <div className={classes["navigation__city"]}></div>
        </ul>
      </section>
    </div>
  );
}
