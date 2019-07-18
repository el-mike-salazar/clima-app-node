const axios = require('axios');

module.exports.getLugarLatLon = async(lugar) => {

    const encodedUrl = encodeURI(lugar);
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${encodedUrl}`,
        headers: { 'X-RapidAPI-Key': '8f77c2b6fcmsha4afbb497c07711p16d78bjsn6a4d55995adb' }
    });

    const resp = await (instance.get());

    if (resp.data.Results.length === 0) {
        throw new Error(`No hay resultados para ${lugar}`);
    }

    const data = resp.data.Results[0];
    const direccion = data.name;
    const lat = data.lat;
    const lon = data.lon;

    return {
        direccion,
        lat,
        lon
    }

}