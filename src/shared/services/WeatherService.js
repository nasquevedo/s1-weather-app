import { GeoHook, WeatherHook} from '../../weather/hooks/WeatherHook'

export const GetWeather = async (city) => {
    const geo = await GeoHook(city)
    const { lat, lon } = geo[0]
    return await WeatherHook(lat, lon)
}