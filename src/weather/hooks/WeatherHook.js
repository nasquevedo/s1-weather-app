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