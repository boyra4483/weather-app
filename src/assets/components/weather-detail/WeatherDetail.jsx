import "./WeatherDetail.css";
import DetailInfo from "../detail-info/DetailInfo";

export default function WeatherDetail(details) {
  return (
    <div className="weather-details">
      <div className="wrapper">
        <DetailInfo {...details} />
        <DetailInfo {...details} />
      </div>
      <div className="wrapper">
        <DetailInfo {...details} />
        <DetailInfo {...details} />
      </div>
    </div>
  );
}
