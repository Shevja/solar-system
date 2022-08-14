import React from "react";
import './assets/solarSystemModulationContainer.css'
import './assets/planet.css'

const SolarSystemModulationContainer = () => {
    return (
        <div className="modulation-container">
            <button id="neptune-orbit" className="planet-orbit">
                <div id="neptune" className="planet"></div>
            </button>
            <button id="uranus-orbit" className="planet-orbit">
                <div id="uranus" className="planet"></div>
            </button>
            <button id="saturn-orbit" className="planet-orbit">
                <div id="saturn" className="planet"></div>
            </button>
            <button id="jupiter-orbit" className="planet-orbit">
                <div id="jupiter" className="planet"></div>
            </button>
            <button id="mars-orbit" className="planet-orbit">
                <div id="mars" className="planet"></div>
            </button>
            <button id="earth-orbit" className="planet-orbit">
                <div id="earth" className="planet"></div>
            </button>
            <button id="venus-orbit" className="planet-orbit">
                <div id="venus" className="planet"></div>
            </button>
            <button id="mercury-orbit" className="planet-orbit">
                <div id="mercury" className="planet"></div>
            </button>
            <div id="sun"></div>
        </div>
    );
}

export default SolarSystemModulationContainer;