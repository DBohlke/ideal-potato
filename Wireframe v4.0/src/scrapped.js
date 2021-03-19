function convertToFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 39 + "°F";
}

function convertToCelsius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = 4 + "°C";
}

let fahrenheitLink = document.querySelector("#fahrenheit-link");
fahrenheitLink.addEventListener("click", convertToFahrenheit);

let celsiusLink = document.querySelector("#celsius-link");
celsiusLink.addEventListener("click", convertToCelsius);






function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityState = document.querySelector("#city-state");
  cityState.innerHTML = `${searchInput.value}`;
}

let form = document.querySelector("#search-input");
form.addEventListener("submit", search);





let searchButton = document.querySelector("#search-button");
searchButton.addEventListener("submit", showSearchedPosition);




function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let cityState = document.querySelector("#city-state");
  cityState.innerHTML = `${searchInput.value}`;
  let apiKey = "18646baba3751e0ddacc065cb85e47a6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityState}&appid=${apiKey}&&units=metric`;
  axios.get(apiUrl).then(showTemperature);
}

let button = document.querySelector("#search-button");
button.addEventListener("click", search);

function showTemperature(response) {
  let temperature = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = `${temperature}°C`;
}