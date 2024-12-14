import classes from "./LocationItem.module.css";
import { useNavigate } from "react-router-dom";

export default function LocationItem({
  cityName,
  temp,
  feelsLike,
  indicator,
  weatherCondition,
  weatherData,
}) {
  const navigate = useNavigate();

  return (
    <li
      onClick={() => navigate("/")}
      className={classes["weather-card"]}
      style={{
        textDecoration: "none",
        cursor: "pointer",
      }}
    >
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
  );
}
