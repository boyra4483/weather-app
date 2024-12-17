import getWeather from "../../../api/api";
import { setLocalStorage } from "../../../storage/storage";

export default async function loader({ request }) {
  if (!localStorage.length) {
    localStorage.setItem("weatherData", JSON.stringify({}));
    return JSON.parse(localStorage.getItem("weatherData"));
  }
  if (!getUrlTitle(request.url))
    return JSON.parse(localStorage.getItem("weatherData"));

  const title = getUrlTitle(request.url);
  const weather = await getWeather(title);

  setLocalStorage(title, weather);
  return JSON.parse(localStorage.getItem("weatherData"));
}

function getUrlTitle(requsetUrl) {
  const url = new URL(requsetUrl);
  return url.searchParams.get("title");
}
