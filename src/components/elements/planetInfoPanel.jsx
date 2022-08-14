import React from "react";
import '../assets/planetInfoPanel.css'

const PlanetInfoPanel = () => {
    return (
        <div id="mercury-info" className="info-panel hidden">
            <div className="info-panel-image">
            </div>
            <div className="info-panel-title">
                <p>Меркурий</p>
                <button id="info-panel-close-button" onClick={() => {
                    document.getElementById('mercury-info').classList.add('hidden');
                }}>x</button>
            </div>
            <div className="info-panel-main-info">
                About planet
            </div>
        </div>
    );
}

export default PlanetInfoPanel;