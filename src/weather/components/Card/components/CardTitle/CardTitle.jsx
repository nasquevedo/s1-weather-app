import styles from './CardTitle.module.css'

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