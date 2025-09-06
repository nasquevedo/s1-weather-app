import styles from './CardTitle.module.css'

/**
 * Renderiza el titulo de la tarjeta (Nombre de la ciudad, Pais y Clima)
 * 
 * @param {*} param0 
 * @returns 
 */
const CardTitle = ({ city, country}) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.title}>
                <p>{city}, {country}</p>
            </div>
            <div className={styles.weather}>
                <p>Clima</p>
            </div>
        </div>
    )
}

export default CardTitle