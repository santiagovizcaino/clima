const axios = require('axios');

const getCiudadLation = async(nombre) => {
    const ciudad = encodeURI(nombre);
    //configurar los headers
    const instance = axios.create({
        baseURL: `https://devru-latitude-longitude-find-v1.p.rapidapi.com/latlon.php?location=${ciudad}`,
        headers: { 'X-RapidAPI-Key': '4630e05840msh5c54c790f10a856p17189djsnce89d0411fe2' }
    });
    const resp = await instance.get();
    if (resp.data.Results.length === 0) {
        throw new Error(`No existe resultados para ${nombre}`)
    }
    const data = resp.data.Results[0];
    const name = data.name;
    const lat = data.lat;
    const lon = data.lon;
    return {
        name,
        lat,
        lon
    }
    // instance.get()
    //     .then(resp => {
    //         console.log(resp);
    //     }).catch(err => {
    //         console.log("ERROR", err);
    //     })
}

module.exports = {
    getCiudadLation
}