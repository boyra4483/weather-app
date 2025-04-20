import { Link } from "react-router-dom";
import classes from "./NoLocations.module.css";

export default function NoLocations() {
  return (
    <article className={classes["no-locations"]}>
      <Link to="/weather-app/locations" className={classes["cross"]}></Link>
      <h1 className={classes["no-locations__title"]}>there is no locations</h1>
      <p className={classes["no-locations__description"]}>
        to add a new location click the plus icon
      </p>
    </article>
  );
}
