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
        // dateTime={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
        className="data"
      >
        <span>sunday</span>
        {/* {date.toLocaleString("en-US", { month: "short" })} {date.getDate()} */}
      </time>
      <div className={classes["weather-forecast"]}>
        <p>24</p>
        <p>heavy rain</p>
      </div>
    </div>
  );
}
