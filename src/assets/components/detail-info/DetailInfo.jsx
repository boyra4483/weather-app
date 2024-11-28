import classes from "./DetailInfo.module.css";

export default function DetailInfo({ indicator, unit, alt, weatherCondition }) {
  return (
    <div className={classes["detail-info"]}>
      <img
        src={indicator}
        alt={alt}
        className={classes["detail-info__indicator"]}
      />
      <div className={classes["detail-info__text"]}>
        <div className={classes["detail-info__unit"]}>{unit}</div>
        <div className={classes["detail-info__condition"]}>
          {weatherCondition} {unit}
        </div>
      </div>
    </div>
  );
}
