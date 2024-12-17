import { useState } from "react";

import { useLoaderData } from "react-router-dom";
import LocationTable from "./location-table/LocationTable";

import LocationHeader from "./location-header/LocationHeader";
import classes from "./locationPage.module.css";

export default function LocationPage() {
  const [inputText, setInputText] = useState("");
  const weatherData = useLoaderData();

  function handleInputTextChange(inputText) {
    setInputText(inputText);
  }
  return (
    <div className={classes["location"]}>
      <LocationHeader
        inputText={inputText}
        onInputTextChange={handleInputTextChange}
      />
      <LocationTable cities={weatherData} inputText={inputText} />
    </div>
  );
}
