import "./WeatherContent.css";

export default function WeatherContent({
  weatherImg,
  alt,
  date,
  weatherForecast,
}) {
  return (
    <div className="weather-content">
      <img src={weatherImg} alt={alt} className="weather-img" />
      <time
        // dateTime={`${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`}
        className="data"
      >
        <span>sunday</span>
        {/* {date.toLocaleString("en-US", { month: "short" })} {date.getDate()} */}
      </time>
      <div className="weather-forecast">
        <p>24</p>
        <p>heavy rain</p>
      </div>
    </div>
  );
}
