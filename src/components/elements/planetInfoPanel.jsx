import React from "react";
import '../assets/planetInfoPanel.css'
import PlanetNameTranslationRu from "../functions/planetNameTranslationRu";
import PlanetInfo from "../functions/planetInfo"

const PlanetInfoPanel = () => {
    const planetsList = [
        'neptune',
        'uranus',
        'saturn',
        'jupiter',
        'mars',
        'earth',
        'venus',
        'mercury',
        'sun'
    ];

    const planetInfoOff = planet => {
        const modulationContainer = document.getElementById('modulation-container');
        const planetOrbitClone = document.getElementById('clone-orbit');
        
        modulationContainer.removeChild(planetOrbitClone);

        document.getElementById('wrapper-info-panel').classList.add('hidden');
        document.getElementById(planet + '-info').classList.add('hidden');
    }

    return (
        <div id="wrapper-info-panel" className="hidden">
            {planetsList.map((planet) => {
                return (
                    <div id={ planet + "-info" } className="info-panel hidden">
                        <div className="info-panel-image">
                        </div>
                        <div className="info-panel-title">
                            <PlanetNameTranslationRu planetName={ planet }/>
                            <button id="info-panel-close-button" onClick={() => { planetInfoOff(planet) }}>ᐯ</button>
                        </div>
                        <PlanetInfo planetName={ planet }/>
                    </div>
                );
            })}
        </div>
    );
}

export default PlanetInfoPanel;