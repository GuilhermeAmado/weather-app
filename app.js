const geocode = require('./utils/geocode');
const forecast = require('./utils/forecast');

geocode('Londrina', (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data);
});

forecast(-23.40825, -51.44027, (error, data) => {
    console.log('Error:', error);
    console.log('Data:', data);
});