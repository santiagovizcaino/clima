const axios = require('axios');

const getClima = async(lat, long) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=4645dc5c0f55f44b894afc86f2815ca6&units=metric`);
    return resp.data.main.temp;
}

module.exports = {
    getClima
}