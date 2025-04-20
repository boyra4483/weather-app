import getWeather from "../../../api/api";
import { getLocalStorage, setLocalStorage } from "../../../storage/storage";

export default async function loader({ request }) {
  if (!getUrlTitle(request.url)) return getLocalStorage();

  const title = getUrlTitle(request.url);
  const weather = await getWeather(title);

  setLocalStorage(title, weather);
  return getLocalStorage();
}

function getUrlTitle(requsetUrl) {
  const url = new URL(requsetUrl);
  return url.searchParams.get("title");
}
