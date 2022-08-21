import React from "react";
import '../assets/aboutAppPanel.css'

const AboutAppPanel = () => {
    return (
        <div id="about-app-panel" className="hidden">
            <div className="about-app-panel__description">
                <h3>Описание</h3>
                Приложение предоставляет информацию о небесных телах солнечной системы.
                Приложение разработано исключительно в ознакомительных целях.<br />
                <b>Не является коммерческим проектом.</b>
            </div>
            <div className="about-app-panel__remark">
                <h3>Замечание</h3>
                Порядок расположения планет солнечной системы соблюден. <br />
                <b> Однако: Размеры и формы орбит, а также скорость
                    вращения планет вокруг солнца не отражает реальной действительности!</b>
            </div>
            <div className="about-app-panel__sources">
                <h3>Источники</h3>
                <p>Информация взята из следующих источников:</p>
                <ul>
                    <li>
                        <a href="https://cosmos-online.ru/">Космос онлайн</a>
                    </li>
                    <li>
                        <a href="https://ru.wikipedia.org/wiki/">Википедия</a>
                    </li>
                </ul>
            </div>
            <button className="about-app-panel__close-button" onClick={() => {
                document.getElementById("about-app-panel").classList.add("hidden")
            }}>
                X
            </button>
        </div>
    );
}

export default AboutAppPanel;