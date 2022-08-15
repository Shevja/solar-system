import React from "react";
import '../assets/solarSystemModulationContainer.css'
import '../assets/planet.css'

const SolarSystemModulationContainer = () => {
    const planetsList = [
        'neptune',
        'uranus',
        'saturn',
        'jupiter',
        'mars',
        'earth',
        'venus',
        'mercury'
    ];

    return (
        <div id="modulation-container">
            {planetsList.map((planet) => {
                return (
                    <button
                        id={planet + "-orbit"}
                        className="planet-orbit animation_rotation"
                        onClick={() => {
                            // document.getElementById(planet + "-orbit").style.animationDuration = '0.5s'
                            // document.getElementById(planet + "-orbit").classList.remove('animation_rotation')
                            // document.getElementById(planet).classList.add('planet-zoom')

                            document.getElementById("wrapper-info-panel").classList.remove('hidden')
                            document.getElementById(planet + "-info").classList.remove('hidden')
                        }}
                    >
                        <div id={planet} className="planet">
                            {/* { if(planet === 'saturn') } */}
                            <div id={planet + "-tail"}></div>
                        </div>
                    </button>
                );
            })}

            <button
                id="sun"
                className="planet"
                onClick={() => {
                    document.getElementById("wrapper-info-panel").classList.remove('hidden')
                    document.getElementById('sun-info').classList.remove('hidden')
                }}
            ></button>
        </div>
    );
}

export default SolarSystemModulationContainer;