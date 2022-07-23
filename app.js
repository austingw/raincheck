const btn = document.getElementById("formBtn");
let units = "imperial";

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const locationInput = document.querySelector("#location").value;

  getWeather(locationInput);
});

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=400ad950e4bd6409fef17da6c80067a2&units=${units}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();

    //console.log(weatherData);
    parseWeatherData(weatherData);
  } catch (e) {
    console.log(e);
  }
}

function parseWeatherData(weatherData) {
  let tempUnit = "°F";

  //if (units === "metric") {
  //  tempUnit = "°C";
  // }

  const location = document.querySelector("#location-title");
  location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;

  const temp = document.querySelector("#current-weather");
  const tempMax = document.querySelector("#hi-temp");
  const tempMin = document.querySelector("#lo-temp");
  const feelsLike = document.querySelector("#feels-like");

  temp.textContent = `${Math.round(weatherData.main.temp)} ${tempUnit}`;

  feelsLike.textContent = `Feels like: ${Math.round(
    weatherData.main.feels_like
  )} ${tempUnit}`;
  /*tempMax.textContent = `H: ${Math.round(
    weatherData.daily.temp.max
  )} ${tempUnit}`;
  tempMin.textContent = `L: ${Math.round(
    weatherData.main.temp_min
  )} ${tempUnit}`;

  let humidity = weatherData.main.humidity;*/
}

//default location*/
getWeather("Chesapeake");
