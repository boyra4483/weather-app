import "./DetailInfo.css";

export default function DetailInfo({ indicator, unit, alt, weatherCondition }) {
  return (
    <div className="detail-info">
      <img src={indicator} alt={alt} className="detail-info__indicator" />
      <div className="detail-info__text">
        <div className="detail-info__unit">{unit}</div>
        <div className="detail-info__condition">
          {weatherCondition} {unit}
        </div>
      </div>
    </div>
  );
}
