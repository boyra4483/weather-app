import classes from "./LocationItem.module.css";
import { Link } from "react-router-dom";

export default function LocationItem({
  cityName,
  temp,
  feelsLike,
  indicator,
  weatherCondition,
}) {
  return (
    <Link to="/" style={{ textDecoration: "none", marginBottom: "16px" }}>
      <li className={classes["weather-card"]}>
        <div className={classes["forecast"]}>
          <p className={classes["forecast__city"]}>{cityName}</p>
          <p className={classes.units}>
            <span className={classes["forecast__temp"]}>{temp}</span>
            <span className={classes["temp-feels-like"]}>/{feelsLike}</span>
          </p>
        </div>
        <figure className={classes["weather-condition"]}>
          <img src={indicator} className={classes["weather-indicator"]}></img>
          <figcaption className={classes["weather-caption"]}>
            {weatherCondition}
          </figcaption>
        </figure>
      </li>
    </Link>
  );
}
