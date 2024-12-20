import { Link, useSubmit } from "react-router-dom";

import { getCityNames } from "../../storage/storage";
import classes from "./WeatherHeader.module.css";

export default function WeatherHeader({ cityName }) {
  const cityNames = getCityNames();
  const listItems = getListItems(cityNames, cityName);
  return (
    <div className={classes["weather-header"]}>
      <Link to="/locations" className={classes["cross"]}></Link>
      <section className={classes["cities"]}>
        <div className={classes["cities__name"]}>{cityName}</div>
        <ul className={classes["navigation"]}>{listItems}</ul>
      </section>
    </div>
  );
}

function getListItems(names, currentName) {
  const submit = useSubmit();
  return names.slice(1).map((name, index) => (
    <li
      data-active={name == currentName ? "true" : "false"}
      key={index}
      onClick={(e) => {
        isActive(e.target);

        const searchParams = new URLSearchParams();
        searchParams.append("title", name);

        return submit(searchParams);
      }}
      className={classes["navigation__city"]}
    ></li>
  ));
}

function isActive(target) {
  target.dataset.active == "false"
    ? (target.dataset.active = "true")
    : (target.dataset.active = "false");

  if (!getStatus(target.parentElement.children).includes("active"))
    target.dataset.active = "true";

  if (target.dataset.active == "true") {
    for (let li of target.parentElement.children) {
      if (li == target) continue;
      li.dataset.active = "false";
    }
  }
}

function getStatus(listItems) {
  return Array.from(listItems).map((item) => item.dataset.active);
}
