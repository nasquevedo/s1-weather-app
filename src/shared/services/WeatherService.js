import { GeoHook, WeatherHook} from '../../weather/hooks/WeatherHook'

/**
 * Servicio que obtiene la geolocalicaion de la
 * ciudad para obtener la informacion del clima
 * y timezone
 * 
 * @param {*} city 
 * @returns 
 */
export const GetWeather = async (city) => {
    const geo = await GeoHook(city)


    if (!geo.success) {
        return {
            error: geo.error,
            message: geo.message
        }
    }

    const { lat, lon } = geo?.data[0]

    const weather = await WeatherHook(lat, lon)

    if (!weather.success) {
        return {
            success: weather.success,
            error: weather.error,
            message: weather.message,
            data: {}
        }
    }
    

    return {
        success: true,
        data: weather.data
    };
}