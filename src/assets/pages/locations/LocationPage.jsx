import { useState } from "react";

import LocationTable from "./location-table/LocationTable";
import getWeather from "../../api/api";

import LocationHeader from "./location-header/LocationHeader";
import classes from "./locationPage.module.css";

export default function LocationPage() {
  const [inputText, setInputText] = useState("");
  const [cities, setCities] = useState({});

  async function handleSubmit(event) {
    event.preventDefault();
    const weather = await getWeather(inputText);

    setCities({ ...cities, [inputText]: weather });
  }
  function handleInputTextChange(inputText) {
    setInputText(inputText);
  }

  return (
    <div className={classes["location"]}>
      <LocationHeader
        inputText={inputText}
        onInputTextChange={handleInputTextChange}
        onSubmit={handleSubmit}
      />
      <LocationTable cities={cities} inputText={inputText} />
    </div>
  );
}
