const API_WEATHER = "1d874edece1009815b0e7de8c6faf375";

const URL_WEATHER = `https://api.openweathermap.org/data/2.5/weather?&units=metric&appid=${API_WEATHER}`;
const URL_GEOCODER = `http://api.openweathermap.org/geo/1.0/direct?limit=1&appid=${API_WEATHER}`;

async function getWeather(urlWeather, urlGeocoder, name) {
  const geocoderResponse = await fetch(`${urlGeocoder}&q=${name}`);
  const coord = await geocoderResponse.json();

  const weatherResponse = await fetch(
    `${urlWeather}&lat=${coord[0].lat}&lon=${coord[0].lon}`
  );
  return await weatherResponse.json();
}

getWeather = getWeather.bind(null, URL_WEATHER, URL_GEOCODER);

export default getWeather;
