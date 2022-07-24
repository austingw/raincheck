const btn = document.getElementById("formBtn");
let units = "imperial";
const unitSwitch = document.querySelector("#current-weather");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const locationInput = document.querySelector("#location").value;

  getWeather(locationInput);
});

unitSwitch.addEventListener("click", (e) => {
  if (units === "imperial") {
    units = "metric";
  } else if (units === "metric") {
    units = "imperial";
  }
  refreshWeather();
});

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=400ad950e4bd6409fef17da6c80067a2&units=${units}`,
      { mode: "cors" }
    );
    const weatherData = await response.json();

    console.log(weatherData);
    parseWeatherData(weatherData);
    return weatherData;
  } catch (e) {
    console.log(e);
  }
}

function parseWeatherData(weatherData) {
  let tempUnit = "°F";
  let windUnit = "MPH";

  if (units === "metric") {
    tempUnit = "°C";
    windUnit = "km/h";
  } else if (units === "imperial") {
    tempUnit = "°F";
    windUnit = "MPH";
  }

  const cloudiness = document.querySelector("#cloudiness");
  const location = document.querySelector("#location-title");
  const temp = document.querySelector("#current-weather");
  const feelsLike = document.querySelector("#feels-like");
  const humidity = document.querySelector("#humidity");
  const wind = document.querySelector("#wind-speed");

  cloudiness.textContent = `${weatherData.weather[0].description}`;
  location.textContent = `${weatherData.name}, ${weatherData.sys.country}`;
  temp.textContent = `${Math.round(weatherData.main.temp)} ${tempUnit}`;
  feelsLike.textContent = `Feels like: ${Math.round(
    weatherData.main.feels_like
  )} ${tempUnit}`;
  humidity.textContent = `Humidity: ${weatherData.main.humidity}%`;
  wind.textContent = `Wind Speed: ${Math.round(
    weatherData.wind.speed
  )} ${windUnit}`;
}

function refreshWeather() {
  let currentWeather = document.querySelector("#location-title").textContent;
  getWeather(currentWeather);
}

getWeather("Virginia Beach");
