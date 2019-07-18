const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: 'Dirección de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');

//lugar.getLugarLatLon(argv.direccion).then(console.log);

//clima.getClima(21.879999, -102.300003).then(console.log).catch(console.log);

const getInfo = async(direccion) => {
    try {
        const coord = await lugar.getLugarLatLon(direccion);
        const temp = await clima.getClima(coord.lat, coord.lon);
        return `El clima de ${coord.direccion} es de ${temp}`;
    } catch (e) {
        console.log(`No se pudo determinarl el clima de ${direccion}`);
    }
}

getInfo(argv.direccion).then(console.log).catch(console.log);