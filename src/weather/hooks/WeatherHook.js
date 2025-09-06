/**
 * Metodo para obtner la geolocalizacion 
 * port nombre de ciudad
 * 
 * @param {*} city nombre de la ciudad
 * @returns 
 */
export const GeoHook = async ( city ) => {
    const { REACT_APP_GEO_ENDPOINT, REACT_APP_API_KEY } = process.env

    try {
        const geo = await fetch(`${REACT_APP_GEO_ENDPOINT}?q=${city}&limit=5&appid=${REACT_APP_API_KEY}`)
        return await geo.json()
    } catch(error) {
        console.log(error)
        return false
    }
}

/**
 * Metodo para obtener el clima de la ciudad 
 * seleccionada por medio de su latitud y longitud
 * 
 * @param {*} lat latitud
 * @param {*} lon longitud
 * @returns 
 */
export const WeatherHook = async ( lat, lon ) => {
    const {
        REACT_APP_API_ENDPOINT,
        REACT_APP_API_KEY
    } = process.env

    try {
        const weather = await fetch(`${REACT_APP_API_ENDPOINT}?lat=${lat}&lon=${lon}&units=metric&exclude=hourly,daily&appid=${REACT_APP_API_KEY}&lang=es`)
        return await weather.json();
    } catch (error) {
        console.log(error)
        return false
    }
}