const api_url = "http://api.openweathermap.org/data/2.5/forecast?";
const api_key = "6fc5719319c59bba39b02ad8f550424f";
let api_link;
let user_location;
let coords;


getLocation();

coords = JSON.parse(sessionStorage.getItem("current_location"));

api_link = updateAPILink(coords.lat, coords.lon);

function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition((position) => {

            let x = position.coords.latitude;
            let y = position.coords.longitude;
            let user_location = {
                lat: x,
                lon: y
            }
            sessionStorage.setItem("current_location", JSON.stringify(user_location));
        });
    }
}

function updateAPILink(x, y) {
    api_link = `${api_url}lat=${x}&lon=${y}&APPID=${api_key}`;
    return api_link;
}

console.log(api_link);
