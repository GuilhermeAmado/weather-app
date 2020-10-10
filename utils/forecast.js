const request = require('postman-request');

const forecast = (latitude, longitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=9aa2aa58bf8caa45d18b53fd0c32397b&query=${latitude},${longitude}`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to weather services.', undefined);
        } else if (response.body.error) {
            callback('Unable to find location', undefined);
        } else {
            callback(undefined, response.body.current);
            const currentWeather = response.body.current;
            console.log(`${currentWeather.weather_descriptions[0]}. It is currently ${currentWeather.temperature} degrees out. It feels like ${currentWeather.feelslike} degrees out.`);
        }
    });
}

module.exports = forecast;