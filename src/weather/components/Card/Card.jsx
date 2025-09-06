import { useContext } from 'react'
import { WeatherContext } from '../../context/WeatherContext'
import styles from './Card.module.css'
import CardBody from './components/CardBody/CardBody'
import ErrorMessage from '../../../shared/components/ErrorMessage/ErrorMessage'
import CardTitle from './components/CardTitle/CardTitle'
import CardFooter from './components/CardFooter/CardFooter'

const Card = ({ setWeather }) => {
    const weather = useContext(WeatherContext)

    return (
        <div className={styles.card}>
            {weather?.city !== '' && 
                <>
                    <CardTitle city={weather?.city} country={weather?.country} />
                    <CardBody weather={weather} />
                    <CardFooter city={weather?.city} setWeather={setWeather}/>
                </>
            }
            {weather?.city === '' && <ErrorMessage message="Aún no hay datos para mostrar" />}
        </div>
    )
}

export default Card