const api_url = "http://api.openweathermap.org/data/2.5/forecast?&cnt=1";
const api_key = "6fc5719319c59bba39b02ad8f550424f";
let api_link;
let user_location;
let coords;

const city_label = document.getElementById('city');
const cTemp_label = document.getElementById('currentTemp');
const feel_label = document.getElementById('feelsLike');
const hTemp_label = document.getElementById('highTemp');
const lTemp_label = document.getElementById('lowTemp');


saveLocation();
coords = JSON.parse(sessionStorage.getItem("geo_location"));
api_link = updateAPILink(coords.lat, coords.lon);
getWeather(api_link);


function saveLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {
            let x = position.coords.latitude;
            let y = position.coords.longitude;
            let user_location = {
                lat: x,
                lon: y
            }
            sessionStorage.setItem("geo_location", JSON.stringify(user_location));
        });
    }
}

function updateAPILink(x, y) {
    api_link = `${api_url}&lat=${x}&lon=${y}&units=imperial&APPID=${api_key}`;
    return api_link;
}

async function getWeather(link) {
    const response = await fetch(link);
    const data = await response.json();
    console.log(data);

    city_label.innerHTML = data.city.name;
    cTemp_label.innerHTML = data.list[0].main.temp;
    feel_label.innerHTML = 
    lTemp_label.innerHTML = 
    hTemp_label.innerHTML = 
}