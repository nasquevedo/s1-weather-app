import styles from './CardBody.module.css'

/**
 * Renderiza en el cuerpo de la tarjeta
 * la temperatura actual, día, hora e icono
 *  
 * @param {*} param0 
 * @returns 
 */
const CardBody = ({ weather }) => {   
    const { REACT_APP_WEATHER_IMG_URL } = process.env 

    const d = new Date()
    const localTime = d.getTime()
    const localOffset = d.getTimezoneOffset() * 60000
    const utc = localTime + localOffset
    var cityDate = utc + (1000 * weather?.time?.timezone)
    const newDate = new Date(cityDate)

    return (
        <div>
            <div className={styles.main}>
                <div className={styles.grades}>
                    <h1>{Math.round(weather?.main?.temp)}°</h1>
                </div>
                <div className={styles.info}>
                    <p>{newDate.toLocaleDateString('es-ES', { weekday: 'long' })}, {newDate.getHours()} : {newDate.getMinutes() < 10 ? `0${newDate.getMinutes()}`: newDate.getMinutes()}</p>
                    <p>{weather?.description}</p>
                    <img src={`${REACT_APP_WEATHER_IMG_URL}${weather?.icon}@2x.png`} alt="Weather Icon" />
                </div>
            </div>
            <div className={styles.additional}>
                <div className={styles.min}>
                    <span>Temp. Minima</span>
                    <p>{Math.round(weather?.main?.temp_min)}°</p>
                </div>
                <div className={styles.max}>
                    <span> Temp. Maxima</span>
                    <p>{Math.round(weather?.main?.temp_max)}°</p>
                </div>
                <div className={styles.hum}>
                    <span>Humedad</span>
                    <p>{weather?.main?.humidity}%</p>
                </div>
            </div>
        </div>
    )
}

export default CardBody