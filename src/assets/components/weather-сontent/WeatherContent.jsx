import classes from "./WeatherContent.module.css";

export default function WeatherContent({
  weatherImg,
  alt,
  date,
  weatherForecast,
}) {
  return (
    <div className={classes["weather-content"]}>
      <img src={weatherImg} alt={alt} className={classes["weather-img"]} />
      <time
        dateTime={date.fullNumDate.replaceAll("/", "-")}
        className={classes["data"]}
      >
        <span className={classes["week-day"]}>{date.weekday}</span>
        {date.month} {date.day}
      </time>
      <div className={classes["weather-forecast"]}>
        <p>{weatherForecast.temp}</p>
        <p>{weatherForecast.forecast}</p>
      </div>
    </div>
  );
}
