const location = require('./controlador/ubicacion');
const axios = require('axios');

const clima = require('./controlador/clima');


const argv = require('yargs').options({
    nombre: {
        alias: 'n',
        desc: 'nombre de la ciudad',
        demand: true
    }
}).argv;


// location.getCiudadLation(argv.nombre)
//     .then(console.log);


clima.getClima(-0.19, -78.5).then(console.log);