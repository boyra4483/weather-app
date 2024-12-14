import classes from "./DetailInfo.module.css";

export default function DetailInfo({
  indicator,
  alt,
  forecast,
  forecastedElement,
  style,
}) {
  return (
    <div className={classes["detail-info"]}>
      <img
        src={indicator}
        alt={alt}
        className={classes["detail-info__indicator"]}
        style={style}
      />
      <div className={classes["detail-info__text"]}>
        <div className={classes["detail-info__forecast"]}>
          {forecast}
          {forecastedElement == "feels like" ? (
            <span className={classes["degree-symbol"]}>&deg;</span>
          ) : null}
        </div>
        <p className={classes["detail-info__forecastedElement"]}>
          {forecastedElement}
        </p>
      </div>
    </div>
  );
}
