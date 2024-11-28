import { Link } from "react-router-dom";
import classes from "./WeatherHeader.module.css";

export default function WeatherHeader() {
  return (
    <div className={classes["weather-header"]}>
      <Link to="/locations" className={classes["cross"]}></Link>
      <section className={classes["cities"]}>
        <div className={classes["cities__name"]}>London</div>
        <div className={classes["navigation"]}>
          <div className={classes["navigation__city"]}></div>
        </div>
      </section>
    </div>
  );
}
