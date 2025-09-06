import './App.css';
import WeatherPage from './weather/pages/WeatherPage';
import Nav from './shared/components/Nav/Nav';

function App() {
  return (
    <div>
      <Nav />
      <WeatherPage />
    </div>
  );
}

export default App;
