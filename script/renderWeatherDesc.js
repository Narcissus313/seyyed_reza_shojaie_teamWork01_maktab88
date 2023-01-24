const renderWeatherDesc = function (weatherObj) {
  if (weatherObj) {
    let icon = weatherObj.weather[0].icon;
    return `<img
              src="http://openweathermap.org/img/wn/${icon}@2x.png"
              alt=""
              class="weather-icon"
            />
            <div class="container text-dark">
              <div class="row border-bottom border-dark pb-3 text-sm-start">
                <div class="col">Wind Speed: ${weatherObj.wind.speed}m/s</div>
                <div class="col">Temperature:${Math.floor(
                  weatherObj.main.temp - 273.15
                )}°C</div>
              </div>
              <div class="row text-sm-start mt-3">
                <div class="col">Humidity: ${weatherObj.main.humidity}%</div>
                <div class="col">Visibility: ${weatherObj.visibility}m</div>
              </div>
            </div>`;
  } else {
    return `<img
              src="https://cdn-icons-png.flaticon.com/512/960/960689.png"
              alt=""
              class="weather-icon"
            />
            <div class="container text-dark">
              <div class="row border-bottom border-dark pb-3 text-sm-start">
                <div class="col">Wind Speed: no info</div>
                <div class="col">Temperature: no info</div>
              </div>
              <div class="row text-sm-start mt-3">
                <div class="col">Humidity: no info</div>
                <div class="col">Visibility: no info</div>
              </div>
            </div>`;
  }
};
