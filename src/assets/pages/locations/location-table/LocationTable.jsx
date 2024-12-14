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

  const sortedCities = GetSortedCities(cities);
  const locationItems = getLocationItems(sortedCities, inputText);

  return (
    <section className={classes["location-table"]}>
      <ul>{locationItems}</ul>
    </section>
  );
}

function GetSortedCities(cities) {
  return Object.values(
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
  return cities.map((weather) => {
    if (weather.name.toLowerCase().includes(inputText.toLowerCase())) {
      return (
        <LocationItem
          key={weather.id}
          cityName={weather.name}
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
