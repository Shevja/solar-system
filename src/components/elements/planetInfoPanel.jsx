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


        // <div id="wrapper-info-panel" className="hidden">
        // <div id="mercury-info" className="info-panel hidden">
        //     <div className="info-panel-image">
        //     </div>
        //     <div className="info-panel-title">
        //         <p>Меркурий</p>
        //         <button id="info-panel-close-button" onClick={() => {
        //             document.getElementById('mercury-info').classList.add('hidden');
        //             document.getElementById('wrapper-info-panel').classList.add('hidden');
        //         }}>ᐯ</button>
        //     </div>
        //     <div className="info-panel-main-info">
        //         About planet
        //     </div>
        // </div>
        //     <div id="venus-info" className="info-panel hidden">
        //         <div className="info-panel-image">
        //         </div>
        //         <div className="info-panel-title">
        //             <p>Венера</p>
        //             <button id="info-panel-close-button" onClick={() => {
        //                 document.getElementById('venus-info').classList.add('hidden');
        //                 document.getElementById('wrapper-info-panel').classList.add('hidden');
        //             }}>ᐯ</button>
        //         </div>
        //         <div className="info-panel-main-info">
        //             About planet
        //         </div>
        //     </div>
        //     <div id="earth-info" className="info-panel hidden">
        //         <div className="info-panel-image">
        //         </div>
        //         <div className="info-panel-title">
        //             <p>Земля</p>
        //             <button id="info-panel-close-button" onClick={() => {
        //                 document.getElementById('earth-info').classList.add('hidden');
        //                 document.getElementById('wrapper-info-panel').classList.add('hidden');
        //             }}>ᐯ</button>
        //         </div>
        //         <div className="info-panel-main-info">
        //             About planet
        //         </div>
        //     </div>
        //     <div id="mars-info" className="info-panel hidden">
        //         <div className="info-panel-image">
        //         </div>
        //         <div className="info-panel-title">
        //             <p>Марс</p>
        //             <button id="info-panel-close-button" onClick={() => {
        //                 document.getElementById('mars-info').classList.add('hidden');
        //                 document.getElementById('wrapper-info-panel').classList.add('hidden');
        //             }}>ᐯ</button>
        //         </div>
        //         <div className="info-panel-main-info">
        //             About planet
        //         </div>
        //     </div>
        //     <div id="jupiter-info" className="info-panel hidden">
        //         <div className="info-panel-image">
        //         </div>
        //         <div className="info-panel-title">
        //             <p>Юпитер</p>
        //             <button id="info-panel-close-button" onClick={() => {
        //                 document.getElementById('jupiter-info').classList.add('hidden');
        //                 document.getElementById('wrapper-info-panel').classList.add('hidden');
        //             }}>ᐯ</button>
        //         </div>
        //         <div className="info-panel-main-info">
        //             About planet
        //         </div>
        //     </div>
        //     <div id="saturn-info" className="info-panel hidden">
        //         <div className="info-panel-image">
        //         </div>
        //         <div className="info-panel-title">
        //             <p>Сатурн</p>
        //             <button id="info-panel-close-button" onClick={() => {
        //                 document.getElementById('saturn-info').classList.add('hidden');
        //                 document.getElementById('wrapper-info-panel').classList.add('hidden');
        //             }}>ᐯ</button>
        //         </div>
        //         <div className="info-panel-main-info">
        //             About planet
        //         </div>
        //     </div>
        //     <div id="uranus-info" className="info-panel hidden">
        //         <div className="info-panel-image">
        //         </div>
        //         <div className="info-panel-title">
        //             <p>Уран</p>
        //             <button id="info-panel-close-button" onClick={() => {
        //                 document.getElementById('uranus-info').classList.add('hidden');
        //                 document.getElementById('wrapper-info-panel').classList.add('hidden');
        //             }}>ᐯ</button>
        //         </div>
        //         <div className="info-panel-main-info">
        //             About planet
        //         </div>
        //     </div>
        //     <div id="neptune-info" className="info-panel hidden">
        //         <div className="info-panel-image">
        //         </div>
        //         <div className="info-panel-title">
        //             <p>Нептун</p>
        //             <button id="info-panel-close-button" onClick={() => {
        //                 document.getElementById('neptune-info').classList.add('hidden');
        //                 document.getElementById('wrapper-info-panel').classList.add('hidden');
        //             }}>ᐯ</button>
        //         </div>
        //         <div className="info-panel-main-info">
        //             About planet
        //         </div>
        //     </div>
        // </div>
    );
}

export default PlanetInfoPanel;