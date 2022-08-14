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
                        id={ planet + "-orbit" }
                        className="planet-orbit"
                        onClick={() => {
                            document.getElementById(planet + "-info").classList.remove('hidden')
                        }}
                    >
                        <div id={planet} className="planet"></div>
                    </button>
                );
            })}

            {/* <button
                id="neptune-orbit"
                className="planet-orbit"
                onClick={() => {
                    document.getElementById('neptune-info').classList.remove('hidden')
                }}
            >
                <div id="neptune" className="planet"></div>
            </button> */}




            {/* <button
                id="uranus-orbit"
                className="planet-orbit"
                onClick={() => {
                    document.getElementById('uranus-info').classList.remove('hidden')
                }}
            >
                <div id="uranus" className="planet"></div>
            </button>
            <button
                id="saturn-orbit"
                className="planet-orbit"
                onClick={() => {
                    document.getElementById('saturn-info').classList.remove('hidden')
                }}
            >
                <div id="saturn" className="planet"></div>
            </button>
            <button
                id="jupiter-orbit"
                className="planet-orbit"
                onClick={() => {
                    document.getElementById('jupiter-info').classList.remove('hidden')
                }}
            >
                <div id="jupiter" className="planet"></div>
            </button>
            <button
                id="mars-orbit"
                className="planet-orbit"
                onClick={() => {
                    document.getElementById('mars-info').classList.remove('hidden')
                }}
            >
                <div id="mars" className="planet"></div>
            </button>
            <button
                id="earth-orbit"
                className="planet-orbit"
                onClick={() => {
                    document.getElementById('earth-info').classList.remove('hidden')
                }}
            >
                <div id="earth" className="planet"></div>
            </button>
            <button
                id="venus-orbit"
                className="planet-orbit"
                onClick={() => {
                    document.getElementById('venus-info').classList.remove('hidden')
                }}
            >
                <div id="venus" className="planet"></div>
            </button>
            <button
                id="mercury-orbit"
                className="planet-orbit"
                onClick={() => {
                    document.getElementById('mercury-info').classList.remove('hidden')
                }}
            >
                <div id="mercury" className="planet"></div>
            </button> */}
            <button
                id="sun"
                className="planet"
                onClick={() => {
                    document.getElementById('sun-info').classList.remove('hidden')
                }}
            ></button>
        </div>
    );
}

export default SolarSystemModulationContainer;