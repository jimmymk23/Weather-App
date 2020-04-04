const api_url = "http://api.openweathermap.org/data/2.5/forecast?";
const api_key = "&APPID=6fc5719319c59bba39b02ad8f550424f";

const api_link = api_url + "zip=47403" + api_key;
console.log(api_link);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(setCoordinates);
    } else {
        console.log("Could not find location.")
    }
}

function setCoordinates(location) {
    var lat = location.coords.latitude;
    var lon = location.coords.longitude;
}

getLocation();

