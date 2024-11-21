import "./WeatherHeader.css";

export default function WeatherHeader() {
  return (
    <div className="weather-header">
      <a href="$" className="cross"></a>
      <section className="cities">
        <div className="cities__name">London</div>
        <div className="navigation">
          <div className="navigation__city"></div>
        </div>
      </section>
    </div>
  );
}
