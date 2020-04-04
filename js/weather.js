const api_url = "http://api.openweathermap.org/data/2.5/forecast?";
const api_key = "6fc5719319c59bba39b02ad8f550424f";
let api_link;
let lat;
let lon;

getLocation();

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(locationSuccess);
    }
}

function locationSuccess(position) {
    document.getElementById('city').innerHTML = position.coords.latitude;
    lat = position.coords.latitude;
    lon = position.coords.longitude;
    updateAPILink(lat, lon);
}

function updateAPILink(x, y) {
    api_link = `${api_url}lat=${x}&lon=${y}&APPID=${api_key}`;
    console.log(api_link);
}

// api_link = `${api_url}lat=${lat}&lon=${lon}&APPID=${api_key}`;
console.log(api_link);
