const request = require('postman-request');

const geocode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(address)}.json?access_token=pk.eyJ1IjoiYW1hZG9ndWkiLCJhIjoiY2tnMmxtN3J4MDE4czJyanQ2N20wemswMCJ9.zlJ_1rSVl2qQIZPMlMPYJQ&limit=1`;

    request({ url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services.', undefined);
        } else if (response.body.features.length === 0) {
            callback('Unable to find location.', undefined)
        } else {
            const data = {
                latitude: response.body.features[0].center[0],
                longitude: response.body.features[0].center[1],
                location: response.body.features[0].place_name
            }
            callback(undefined, data);
        }
    });
}

module.exports = geocode;