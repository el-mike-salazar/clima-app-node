const axios = require('axios');
var tuc = require('temp-units-conv');

module.exports.getClima = async(lat, lon) => {
    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=10080c685e28d4c418a6dfb5f10c49f1`);
    return tuc.k2c(resp.data.main.temp);
}