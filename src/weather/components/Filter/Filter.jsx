import { GetWeather } from '../../../shared/services/WeatherService'
import styles from './Filter.module.css'

/**
 * Renderiza filtro para seleccionar
 * la ciudad a consultar
 * 
 * @param {*} param0 
 * @returns 
 */
const Filter = ({ setWeather }) => {
    const handleWeather = async (event) => {
        const { value } = event.target

        if (value === '') {
            setWeather({ 
                main: {},
                city: '',
                country: '',
                icon: '',
                description: '',
                time: {}
            }) // se setea el valor inicial del estado global
            return false
        }
        const data = await GetWeather(value)

        setWeather({
            main: data?.main,
            city: value,
            country: data?.sys?.country,
            icon: data?.weather[0]?.icon,
            description: data?.weather[0]?.description,
            time: { timezone: data?.timezone, dT: data?.dt }
        }) // Se setea la informacion del clima necesaria para mostrar en pantalla
    }

    return (
        <div className={styles.filter}>
            <form>
                <div>
                    <select onChange={handleWeather}>
                        <option value="">-- Seleccionar una Ciudad -- </option>
                        <option value="Bogota">Bogotá</option>
                        <option value="Buenos Aires">Buenos Aires</option>
                        <option value="New York">New York</option>
                        <option value="Paris">Paris</option>
                        <option value="London">London</option>
                    </select>
                </div>
            </form>
        </div>
    )
}

export default Filter