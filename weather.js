const id = "993c603ee072429a934131212221411";
const formEl = document.querySelector("form");
const details = document.querySelector(".details");
const btn = document.querySelector("#btn-submit");
const inputData = document.querySelector("#inputData");
// console.log(inputData)

btn.addEventListener("click", (e) => {
  e.preventDefault();
  details.innerHTML = `<h1> Loading .....</h1>`;
  // console.log(details)
  const locationData = inputData.value;
  // console.log(locationData);
  WeatherApp(locationData);
});

function WeatherApp(locationData) {
  fetchWeatherApi(locationData);
}
function fetchWeatherApi(locationData) {
  fetch(
    `https://api.weatherapi.com/v1/current.json?key=${id}&q=${locationData}`
  )
    .then(
      (res) => res.json()
      // console.log(res.json())
    )
    .then((data) => {
       console.log(data);
       generateHtmlTemplate(data);
      // data.current.temp_c
    });
}

function generateHtmlTemplate(data) {
  const {temp_c, humidity, wind_dir, wind_kph, pressure_mb} = data.current;
  const {name, country} = data.location
  const html = `
  <h1 class="temp"> ${temp_c}°c</h1>
          <h1 class="status">${data.current.condition.text}</h1>
          <div class="more-info">
     <p>Humidity- ${humidity}%</p>
    <p>Wind Speed- ${wind_kph}km/h</p>
    <p> Wind Dir- ${wind_dir} </p>
    <p>Pressure- ${pressure_mb}MB</p>
    <p> ${name}, ${country}</p>
          </div> `;
  details.innerHTML = html;

}
// generateHtmlTemplate()

//  fetchWeatherApi();

//  Notes

//1. to stop form auto sending need to grab the e(event)
//  e.preventDefault();

//2.
//  formEl.addEventListener("submit", (e) => {
//   e.preventDefault();
//   details.innerHTML = "<h1>Loading...</h1>";
//   //  e means event like the text of input field that s been targeted , now the name of the input field is location so e.target.location. WE need the value so .value has been added with e.target.location.value
//   const location = e.target.location.value;
//   console.log(location);
//   // weatherApp(location);
// fetchApi(location)
//   // formEl.reset();
// });

// function fetchApi (location) {

//   fetch(
//     `https://api.weatherapi.com/v1/current.json?key=${id}&q=${location}`
//   )
//     .then((res) => res.json())
//     .then((data) => {
//       console.log(data);
//     });
//   }
