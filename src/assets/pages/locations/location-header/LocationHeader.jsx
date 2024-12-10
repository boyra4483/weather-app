import { useNavigate } from "react-router-dom";
import classes from "./LocationHeader.module.css";

export default function LocationHeader({
  inputText,
  onInputTextChange,
  onSubmit,
}) {
  const navigate = useNavigate();
  return (
    <>
      <section className={classes["navigation"]}>
        <div className={classes["wrapper"]}>
          <div
            onClick={() => navigate("/")}
            className={classes["navigation__icon"]}
          >
            <img
              src="src/assets/img/icons/common-icons/arrow-left.svg"
              alt="arrow-left"
            />
          </div>
          <h1 className={classes["navigation__title"]}>Manage location</h1>
        </div>

        <form
          name="nav-form"
          className={classes["navigation-form"]}
          onSubmit={(event) => onSubmit(event)}
        >
          <input
            onChange={(event) => onInputTextChange(event.target.value)}
            value={inputText}
            type="Search Your City"
            placeholder="Search Your City"
            name="city-search"
            className={classes["form-search"]}
          />
        </form>
      </section>
    </>
  );
}
