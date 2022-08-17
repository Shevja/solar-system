import React from "react";

const planetInfo = props => {
    switch (props.planetName) {
        case 'mercury':
            return (
                <div className="info-panel__main-info">
                    <p>
                        <b>Меркурий</b> — наименьшая планета Солнечной системы и самая близкая к Солнцу.
                        Названа в честь древнеримского бога торговли — быстрого Меркурия,
                        поскольку она движется по небу быстрее других планет. Её период обращения
                        вокруг Солнца составляет всего 87,97 земных суток — самый короткий среди
                        всех планет Солнечной системы.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>87.97 земных дней</li>
                            </ul> 
                        </li>
                    </ul>
                </div>
            );

        default:
            break;
    }
}

export default planetInfo;