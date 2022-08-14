import React from "react";
import '../assets/controlTools.css'

const ControlTools = () => {
    return (
        <div className="controlTool">
            <button id="settings">Настройки</button>
            <div className="modulation-control">
                <button>Модуляция</button>
                <input type="number" min={1} max={2} />
                <button>Модуляция</button>
            </div>
        </div>
    );
}

export default ControlTools;