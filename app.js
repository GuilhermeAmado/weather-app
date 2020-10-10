const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=9aa2aa58bf8caa45d18b53fd0c32397b&query=-23.4199,-51.4254';

request({ url, json: true }, (error, response) => {
    const currentWeather = response.body.current;
    console.log(`${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`);
});

// Geocoding
const geocodeURL = `https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYW1hZG9ndWkiLCJhIjoiY2tnMmxtN3J4MDE4czJyanQ2N20wemswMCJ9.zlJ_1rSVl2qQIZPMlMPYJQ&limit=1`;

request({ url: geocodeURL, json: true }, (error, response) => {
    const latitude = response.body.features[0].center[1];
    const longitude = response.body.features[0].center[0];
    console.log(latitude, longitude);
});