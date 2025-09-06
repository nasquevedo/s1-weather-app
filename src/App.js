import './App.css';
import WeatherPage from './weather/pages/WeatherPage';
import Nav from './shared/components/Nav/Nav';

/**
 * Se inicializa la pagina principal
 * y la barra de navegacion
 * @returns 
 */
function App() {
  return (
    <div>
      <Nav />
      <WeatherPage />
    </div>
  );
}

export default App;
