import LocationItem from "../location-item/LocationItem";

import { getIndicator } from "../../../storage/storage";
import classes from "./LocationTable.module.css";

export default function LocationTable({ cities, inputText }) {
  if (!Object.keys(cities).length)
    return (
      <div className={classes["empty-list"]}>
        The list of cities is empty. Type and press the enter to add new
        location
      </div>
    );

  const formatedCities = GetFormatedCities(cities);
  const locationItems = getLocationItems(formatedCities, inputText);

  return (
    <section className={classes["location-table"]}>
      <ul>{locationItems}</ul>
    </section>
  );
}

function GetFormatedCities(cities) {
  return Object.entries(
    Object.entries(cities).reduce(
      (cities, [cityName, weather]) => ({
        ...cities,
        [cityName.toLowerCase()]: weather,
      }),
      {}
    )
  );
}

function getLocationItems(cities, inputText) {
  return cities.map(([cityName, weather]) => {
    if (cityName.includes(inputText.toLowerCase())) {
      return (
        <LocationItem
          key={weather.id}
          cityName={cityName}
          temp={weather.main.temp}
          feelsLike={weather.main.feels_like}
          indicator={getIndicator(weather)}
          weatherCondition={weather.weather[0].description}
          weatherData={weather}
        />
      );
    } else {
      return null;
    }
  });
}
