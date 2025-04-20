import { Form } from "react-router-dom";
import { commonIndicators } from "../../../storage/storage";
import { useNavigate } from "react-router-dom";
import classes from "./LocationHeader.module.css";

export default function LocationHeader({ inputText, onInputTextChange }) {
  const navigate = useNavigate();
  return (
    <>
      <section className={classes["navigation"]}>
        <div className={classes["wrapper"]}>
          <div
            style={{ cursor: "pointer" }}
            onClick={() => navigate(-1)}
            className={classes["navigation__icon"]}
          >
            <img src={commonIndicators.arrowLeft} alt="arrow-left" />
          </div>
          <h1 className={classes["navigation__title"]}>Manage location</h1>
        </div>

        <Form name="nav-form" className={classes["navigation-form"]}>
          <input
            onChange={(event) => onInputTextChange(event.target.value)}
            value={inputText}
            placeholder="Search Your City"
            name="title"
            className={classes["form-search"]}
          />
        </Form>
      </section>
    </>
  );
}
