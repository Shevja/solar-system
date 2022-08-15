import React from "react";
import '../assets/controlTools.css'

const ControlTools = () => {
    return (
        <div className="control-tool">
            <button id="settings">Настройки</button>
            <div className="modulation-modifier">
                <button onClick={() => {
                    console.log('sadqa')
                }}>
                    Модуляция в реальном времени
                </button>
                <div style={{display: 'flex', justifyContent: 'space-between', color: 'white'}}>
                    <p>Скорость анимации</p>
                    <input type="number" min={1} max={2} />
                </div>
            </div>
            <div className="modulation-control">
                <button onClick={() => {
                    const orbits = document.getElementsByClassName('planet-orbit')
                    for (let index = 0; index < orbits.length; index++) {
                        orbits[index].classList.remove('planet-orbit-animation-paused')
                    }
                }}> Прод </button>
                <button onClick={() => {
                    const orbits = document.getElementsByClassName('planet-orbit')
                    for (let index = 0; index < orbits.length; index++) {
                        orbits[index].classList.add('planet-orbit-animation-paused')
                    }
                }}>Стоп</button>
            </div>
        </div>
    );
}

export default ControlTools;