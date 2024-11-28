import classes from "./WeatherDetail.module.css";
import DetailInfo from "../detail-info/DetailInfo";

export default function WeatherDetail(details) {
  return (
    <div className={[classes["weather-details"]]}>
      <div className={classes["wrapper"]}>
        <DetailInfo {...details} />
        <DetailInfo {...details} />
      </div>
      <div className={classes["wrapper"]}>
        <DetailInfo {...details} />
        <DetailInfo {...details} />
      </div>
    </div>
  );
}
