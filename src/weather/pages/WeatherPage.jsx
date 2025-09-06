import { useState } from "react"
import { WeatherContext } from "../context/WeatherContext"
import Container from "../../shared/components/Container/Container"
import Card from "../components/Card/Card"
import Filter from "../components/Filter/Filter"

/**
 * Pagina para mostrar filtro y estado del clima
 * de la ciudad seleccionada
 * @returns 
 */
const WeatherPage = () => {
    const [ weather, setWeather ] = useState({
        main: {},
        city: '',
        country: '',
        icon: '',
        description: '',
        time: {}
    }) // Estado inicial de los datos a mostrar en pantalla

    return (
        <WeatherContext.Provider value={weather}>
            <Filter setWeather={setWeather} />
            <Container>
                <Card setWeather={setWeather}/>
            </Container> 
        </WeatherContext.Provider>
    )
}

export default WeatherPage