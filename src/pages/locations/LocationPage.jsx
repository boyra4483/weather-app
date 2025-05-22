import { useState } from "react";
import Gratitude from "../../components/gratitude/Gratitude";

import { useLoaderData } from "react-router-dom";
import LocationTable from "./location-table/LocationTable";

import LocationHeader from "./location-header/LocationHeader";
import classes from "./locationPage.module.css";

export default function LocationPage() {
  const [inputText, setInputText] = useState("");
  const weatherData = useLoaderData();

  function handleInputChange(inputText) {
    setInputText(inputText);
  }

  return (
    <div className={classes["location"]}>
      <LocationHeader
        inputText={inputText}
        onInputTextChange={handleInputChange}
      />
      <LocationTable cities={weatherData} inputText={inputText} />
      <Gratitude />
    </div>
  );
}
