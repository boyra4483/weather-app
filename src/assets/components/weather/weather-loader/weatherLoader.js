export default function loader({ request }) {
  if (!localStorage.length) {
    localStorage.setItem("weatherData", JSON.stringify({}));
  }

  const url = new URL(request.url);
  const searchCity = url.searchParams.get("title");
  return searchCity;
}
