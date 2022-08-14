import './App.css';
import ControlTools from './components/elements/controlTools';
import SolarSystemModulationContainer from './components/elements/solarSystemModulationContainer';
import PlanetInfoPanel from './components/elements/planetInfoPanel';

function App() {
  return (
    <div className="App">
      <div>
        <ControlTools />
        <SolarSystemModulationContainer />
        <PlanetInfoPanel />
      </div>
    </div>
  );
}

export default App;
