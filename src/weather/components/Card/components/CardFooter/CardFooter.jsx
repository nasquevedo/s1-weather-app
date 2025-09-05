import { GetWeather } from '../../../../../shared/services/WeatherService'
import styles from './CardFooter.module.css'

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
        })
    }

    return (
        <div className={styles.footer}>
            <button type="button" onClick={refresh}>Refrescar</button>
        </div>
    )
}

export default CardFooter