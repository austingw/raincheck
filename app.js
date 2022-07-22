//const btn = document.getElementById("btn");

async function getWeather() {
  const response = await fetch(
    "https://api.openweathermap.org/data/2.5/weather?q=23320&APPID=400ad950e4bd6409fef17da6c80067a2",
    { mode: "cors" }
  );
  const weatherData = await response.json();
  console.log(weatherData);
}

//btn.addEventListener("click", (e) => {
//getWeather();
//});

getWeather();
