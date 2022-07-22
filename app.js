const btn = document.getElementById("formBtn");

btn.addEventListener("click", (e) => {
  e.preventDefault();

  const locationInput = document.querySelector("#location").value;

  getWeather(locationInput);
});

async function getWeather(location) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=400ad950e4bd6409fef17da6c80067a2`,
      { mode: "cors" }
    );
    const weatherData = await response.json();
    console.log(weatherData);
  } catch (e) {
    console.log(e);
  }
}
