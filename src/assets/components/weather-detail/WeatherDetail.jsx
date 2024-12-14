import classes from "./WeatherDetail.module.css";
import { commonIndicators } from "../../storage/storage";

import { indicators } from "../../storage/storage";
import DetailInfo from "../detail-info/DetailInfo";

export default function WeatherDetail({ weather }) {
  return (
    <div className={[classes["weather-details"]]}>
      <div className={classes["wrapper"]}>
        <DetailInfo
          indicator={commonIndicators.locationCurrent}
          alt="current location icon"
          forecastedElement="wind"
          forecast={weather.wind.speed}
          style={{
            padding: "4px",
          }}
        />
        <DetailInfo
          indicator={indicators.feelsLike}
          alt={"a thermometer and outline user icon"}
          forecastedElement="feels like"
          forecast={weather.feelsLike}
          style={{ padding: "5px 3px" }}
        />
      </div>
      <div className={classes["wrapper"]}>
        <DetailInfo
          indicator={indicators.temperature}
          alt="temperature icon"
          forecastedElement="pressure"
          forecast={weather.pressure}
          style={{
            padding: "2.5px 9.25px",
          }}
        />
        <DetailInfo
          indicator={indicators.water}
          alt="a drop icon"
          forecastedElement="humadity"
          forecast={weather.humadity}
          style={{
            boxSizing: "content-box",
            padding: "3px 7px",
          }}
        />
      </div>
    </div>
  );
}
