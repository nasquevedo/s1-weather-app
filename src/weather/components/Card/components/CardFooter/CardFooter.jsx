import { GetWeather } from '../../../../../shared/services/WeatherService'
import styles from './CardFooter.module.css'

/**
 * Renderiza en el footer un boton
 * para refrescar la informacion
 * @param {*} param0 
 * @returns 
 */
const CardFooter = ({ city, setWeather }) => {
    const refresh = async () => {
        const data = await GetWeather(city)
        setWeather({
            main: data?.main,
            city,
            country: data?.sys?.country,
            icon: data?.weather[0]?.icon,
            description: data?.weather[0]?.description,
            time: { timezone: data?.timezone, dT: data?.dt }
        }) // se setea al estado global la informacion actualizada
    }

    return (
        <div className={styles.footer}>
            <button type="button" onClick={refresh}>Refrescar</button>
        </div>
    )
}

export default CardFooter