import { Link } from "react-router-dom";
import classes from "./NotFoundPage.module.css";

export default function NotFoundPage() {
  document.getElementById("root").className = classes.root;
  return (
    <div className={[classes["error"]]}>
      <p className={classes["error__name"]}>Not found page</p>
      <Link to="/" className={classes["error__home-link"]}>
        Home
      </Link>
    </div>
  );
}
