const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=9aa2aa58bf8caa45d18b53fd0c32397b&query=-23.4199,-51.4254';

request({ url, json: true }, (error, response) => {
    const currentWeather = response.body.current;
    console.log(`${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`);
});