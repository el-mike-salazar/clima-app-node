const axios = require('axios');

module.exports.getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=10080c685e28d4c418a6dfb5f10c49f1`);
    return resp.data.main.temp;
}