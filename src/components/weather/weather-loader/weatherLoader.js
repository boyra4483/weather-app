export default function loader({ request }) {
  if (!localStorage.length) {
    localStorage.setItem("weatherData", JSON.stringify({}));
    localStorage.setItem("additionalWeatherData", JSON.stringify([1]));
  }

  const url = new URL(request.url);
  const searchCity = url.searchParams.get("title");
  return searchCity;
}
