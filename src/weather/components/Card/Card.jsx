import { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import styles from './Card.module.css'
import CardBody from './components/CardBody/CardBody'
import ErrorMessage from '../../../shared/components/ErrorMessage/ErrorMessage'
import CardTitle from './components/CardTitle/CardTitle'
import CardFooter from './components/CardFooter/CardFooter'

/**
 * Renderiza tarjeta con la informacion de la 
 * ciudad, hora y clima, más un boton para refrescar
 * 
 * @param {*} param0 
 * @returns 
 */
const Card = ({ setWeather }) => {
    const weather = useContext(WeatherContext)
    
    return (
        <div className={styles.card}>
            {weather?.city === '' && <ErrorMessage message="Aún no hay datos para mostrar" /> /* en caso de error o que no halla valor en el filtro*/} 
            {weather.error !== '' && <ErrorMessage message={weather.error} /> }
            {weather?.city !== '' && weather?.error === '' && 
                <>
                    <CardTitle city={weather?.city} country={weather?.country} />
                    <CardBody weather={weather} />
                    <CardFooter city={weather?.city} setWeather={setWeather}/>
                </>
            }
        </div>
    )
}

export default Card