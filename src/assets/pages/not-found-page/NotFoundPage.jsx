import { Link } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  document.body.style.backgroundImage = "none";
  return (
    <div className="error">
      <p className="error__name">Not found page</p>
      <Link to="/" className="error__home-link">
        Home
      </Link>
    </div>
  );
}
