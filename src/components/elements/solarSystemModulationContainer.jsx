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

    const PlanetInfoOn = planet => {
        console.log(planet)
        const modulationContainer = document.getElementById('modulation-container');
        const planetOrbitClone = document.getElementById(planet + '-orbit').cloneNode(true);
        
        planetOrbitClone.setAttribute('id', 'clone-orbit')
        modulationContainer.appendChild(planetOrbitClone);
        
        planetOrbitClone.classList.remove('animation_rotation');
        planetOrbitClone.classList.add('animation-slide__left');
    
    
        planetOrbitClone.children.namedItem(planet).classList.add('animation-zoom');
        planetOrbitClone.children.namedItem(planet).setAttribute('disabled', 'disabled');
    
        document.getElementById("wrapper-info-panel").classList.remove('hidden');
        document.getElementById(planet + "-info").classList.remove('hidden');
    }

    return (
        <div id="modulation-container">
            {planetsList.map((planet) => {
                return (
                    <button id={planet + "-orbit"} className="planet-orbit animation_rotation" onClick={() => { PlanetInfoOn(planet) }}>
                        <div id={planet} className="planet">
                            {/* { if(planet === 'saturn') } */}
                            {/* <div id={planet + "-tail"}></div> */}
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
            <div className="dev-comment">
                Важное замечание! <br />
                Размеры и формы орбит, а также скорость <br />
                вращения планет вокруг солнца не отражает реальной действительности! 
            </div>
        </div>
    );
}

export default SolarSystemModulationContainer;