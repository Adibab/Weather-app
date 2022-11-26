const text = document.querySelector(".pre-text");
const id = "993c603ee072429a934131212221411";

window.addEventListener("load", getLocation)

function getLocation(){
  
    if( navigator.geolocation){
        navigator.geolocation.getCurrentPosition(ShowPosition);
    } else {
text.textContent = `Geolocation is not supported by this browser.`;
    }
}
function ShowPosition(position){
      let long;
    let lat;
long = position.coords.latitude
lat = position.coords.longitude;
    // console.log(long)
    // console.log(lat)
    const api = `https://api.weatherapi.com/v1/current.json?key=${id}&q=${long}`;
    fetch(api)
    .then(
      (res) => res.json()
      // console.log(res.json())
    )
    .then((data) => {
       console.log(data);
    //    generateHtmlTemplate(data);
      // data.current.temp_c
    });

}