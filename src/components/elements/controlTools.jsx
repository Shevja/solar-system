import React from "react";
import '../assets/controlTools.css'
import playIcon from '../assets/icons/play.png'
import pauseIcon from '../assets/icons/pause.png'
import AboutAppPanel from "./aboutAppPanel";

const ControlTools = () => {
    return (
        <div className="control-tool">
            <button id="settings" onClick={ () => {
                document.getElementById("about-app-panel").classList.remove('hidden')
            }}>
                О сайте
            </button>
            <div className="modulation-modifier">
                <div style={{ display: 'flex', color: 'white' }}>
                    <p>Скорость анимации</p>
                    <button onClick={() => {
                        const orbits = document.getElementsByClassName('planet-orbit');        
                        for (let index = 0; index < orbits.length; index++) {
                            orbits[index].getAnimations()[0].playbackRate = 1 
                        }
                    }}
                    >
                        x1
                    </button>
                    <button onClick={() => {
                        const orbits = document.getElementsByClassName('planet-orbit');         
                        for (let index = 0; index < orbits.length; index++) {
                            orbits[index].getAnimations()[0].playbackRate = 4 
                        }
                    }}
                    >
                        x4
                    </button>
                    <button onClick={() => {
                        const orbits = document.getElementsByClassName('planet-orbit');         
                        for (let index = 0; index < orbits.length; index++) {
                            orbits[index].getAnimations()[0].playbackRate = 8 
                        }
                    }}
                    >
                        x8
                    </button>
                    <button onClick={() => {
                        const orbits = document.getElementsByClassName('planet-orbit');         
                        for (let index = 0; index < orbits.length; index++) {
                            orbits[index].getAnimations()[0].playbackRate = 16 
                        }
                    }}
                    >
                        x16
                    </button>
                </div>
            </div>
            <div className="modulation-control">
                <button onClick={() => {
                    const orbits = document.getElementsByClassName('planet-orbit')
                    for (let index = 0; index < orbits.length; index++) {
                        orbits[index].classList.remove('planet-orbit-animation-paused')
                    }
                }}><img src={playIcon} alt="Продолжить" /></button>
                <button onClick={() => {
                    const orbits = document.getElementsByClassName('planet-orbit')
                    for (let index = 0; index < orbits.length; index++) {
                        orbits[index].classList.add('planet-orbit-animation-paused')
                    }
                }}><img src={pauseIcon} alt="Пауза" /></button>
            </div>
        </div>
    );
}

export default ControlTools;