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

let now = new Date();

let date = document.querySelector("#date");
let time = document.querySelector("#time");

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

let months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

let currentDay = days[now.getDay()];
let currentMonth = months[now.getMonth()];
let currentDate = now.getDate();
let hours = now.getHours();
let minutes = now.getMinutes();
let ampm = now.get;

date.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}`;
time.innerHTML = `${hours}:${minutes}`;
