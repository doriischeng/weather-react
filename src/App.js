import "./App.css";

export default function Weather() {
  let weatherData = {
    city: "Hong Kong",
    temperature: 29,
    date: "Tuesday 10:00",
    description: "Overcast Clouds",
    imgUrl:
      "http://openweathermap.org/img/wn/10d@2x.png",
    humidity: 90,
    wind: 20,
  };

  return (
    <div className="Weather">
      <div className="container weather-app">
        <form id="searchCity">
          <div className="row">
            <div className="col-9">
              <input
                type="text"
                placeholder="Search a city..."
                className="form-control"
                id="cityInput"
                autocomplete="off"
              />
            </div>

            <div className="col-3">
              <button
                type="search"
                className="btn btn-dark w-100"
              >
                Search
              </button>
            </div>
          </div>
        </form>
        <h1 className="city">
          {weatherData.city}
        </h1>
        <div className="row">
          <div className="col-6">
            <ul>
              <li>
                {weatherData.date}
                <span id="date"></span>
              </li>
              <li id="description">
                {weatherData.description}
              </li>
              <li>
                Humidity:
                <span id="humidity">
                  {weatherData.humidity}
                </span>
                %, Wind:
                <span id="wind">
                  {weatherData.wind}
                </span>
                km/h
              </li>
            </ul>
          </div>

          <div className="col-6">
            <div className="d-flex weather-temperature">
              <img
                src={weatherData.imgUrl}
                alt="cloudy"
                id="icon"
              />
              <div>
                <span id="temperature">
                  {weatherData.temperature}
                </span>
                <span className="units">
                  <a
                    href="https://weather.com/weather/today/l/22.28,114.17?par=google"
                    id="celsius-link"
                    className="active"
                  >
                    °C
                  </a>
                  |
                  <a
                    href="https://weather.com/weather/today/l/22.28,114.17?par=google"
                    id="fahrenheit-link"
                  >
                    °F
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div
          className="weather-forecast"
          id="forecast"
        ></div>
      </div>
    </div>
  );
}
