import React from "react";
import './assets/solarSystemModulationContainer.css'
import './assets/planet.css'

const SolarSystemModulationContainer = () => {
    return (
        <div className="modulation-container">
            <div id="sun"></div>
            <div id="mercury-orbit" className="planet-orbit">
                <div id="mercury" className="planet"></div>
            </div>
            <div id="venus-orbit" className="planet-orbit">
                <div id="venus" className="planet"></div>
            </div>
            <div id="earth-orbit" className="planet-orbit">
                <div id="earth" className="planet"></div>
            </div>
            <div id="mars-orbit" className="planet-orbit">
                <div id="mars" className="planet"></div>
            </div>
            <div id="jupiter-orbit" className="planet-orbit">
                <div id="jupiter" className="planet"></div>
            </div>
            <div id="saturn-orbit" className="planet-orbit">
                <div id="saturn" className="planet"></div>
            </div>
            <div id="uranus-orbit" className="planet-orbit">
                <div id="uranus" className="planet"></div>
            </div>
            <div id="neptune-orbit" className="planet-orbit">
                <div id="neptune" className="planet"></div>
            </div>
        </div>
    );
}

export default SolarSystemModulationContainer;