import getWeather from "../../../api/api";
import { getLocalStorage, setLocalStorage } from "../../../storage/storage";

export default async function loader({ request }) {
  if (!getUrlTitle(request.url)) return getLocalStorage();
  const title = getUrlTitle(request.url);
  let weather;

  try {
    weather = await getWeather(title);

    if (weather.name.toLowerCase() !== title.toLocaleLowerCase())
      throw new Error("not found");
  } catch (error) {
    return getLocalStorage();
  }

  setLocalStorage(weather.name, weather);
  return getLocalStorage();
}

function getUrlTitle(requsetUrl) {
  const url = new URL(requsetUrl);
  return url.searchParams.get("title");
}
