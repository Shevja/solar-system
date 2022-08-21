import React from "react";

const planetInfo = props => {
    switch (props.planetName) {
        case 'mercury':
            return (
                <div className="info-panel__main-info">
                    <p>
                        <b>Меркурий</b> располагается к Солнцу ближе всего.
                        В связи с этим он освещается и нагревается в семь раз больше Земли.
                        Дневная половина Меркурия очень жаркая, там постоянное пекло.
                        Расчёты говорят, что температура может достигать более 400 градусов Цельсия.
                        А вот на ночной стороне очень сильные морозы, которые предположительно
                        могут опускать менее 200 градусов Цельсия.<br /><br />

                        Меркурий представляет собой пустынное царство. 
                        Одна сторона планеты — это раскаленная каменная пустыня, а другая ледяная, 
                        возможно, покрытая замерзшими газами. В составе сильно разреженой атмосферы 
                        этой планеты находятся He, Ne, Ar. Меркурий своей поверхностью напоминает луну. 
                        В моменты, когда он находится максимально далеко от солнца его можно даже 
                        разглядеть низко над горизонтом, но на темном небе его разглядеть не получиться. 
                        Лучше всего для наблюдения за планетой подойдёт вечер или рассвет осенью.<br /><br />

                        Меркурий не имеет спутников, а 80% его массы находится в железном ядре. 
                        Давление на его поверхности почти в 500 миллиардов раз меньше, чем на Земле. 
                        Также считается, что Меркурий наделён слабым магнитным полем, сила которого 
                        составляется примерно 0,7% земного. Меркурий относится к той же группе планет, 
                        что и земля. В Древнем Риме Меркурием называли божество торговли.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>87.97 земных дней</li>
                            </ul>
                        </li><br />
                        <li><b>Скорость вращения вокруг оси:</b>
                            <ul>
                                <li>58 дней 15 часов 30 минут</li>
                            </ul>
                        </li><br />
                        <li><b>Расстояние до солнца:</b>
                            <ul>
                                <li>58 000 000 км</li>
                            </ul>
                        </li><br />
                        <li><b>Радиус:</b>
                            <ul>
                                <li>2 439 км</li>
                            </ul>
                        </li><br />
                        <li><b>Масса:</b>
                            <ul>
                                <li>33 656 832 кг</li>
                            </ul>
                        </li><br />
                        <li><b>Спутники:</b>
                            <ul>
                                <li>Нет</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        case 'venus':
            return (
                <div className="info-panel__main-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>225 дней</li>
                            </ul>
                        </li><br />
                        <li><b>Скорость вращения вокруг оси:</b>
                            <ul>
                                <li>116 д 18 ч 0 мин</li>
                            </ul>
                        </li><br />
                        <li><b>Расстояние до солнца:</b>
                            <ul>
                                <li>108 000 000 км</li>
                            </ul>
                        </li><br />
                        <li><b>Радиус:</b>
                            <ul>
                                <li>6 052 км</li>
                            </ul>
                        </li><br />
                        <li><b>Масса:</b>
                            <ul>
                                <li>480 000 000 000 000 000 000 кг(480 квинтилионов кг)</li>
                            </ul>
                        </li><br />
                        <li><b>Спутники:</b>
                            <ul>
                                <li>Нет</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        case 'earth':
            return (
                <div className="info-panel__main-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>365 суток и 6 часов</li>
                            </ul>
                        </li><br />
                        <li><b>Скорость вращения вокруг оси:</b>
                            <ul>
                                <li>23 часа 56 минут 4 секунды</li>
                            </ul>
                        </li><br />
                        <li><b>Расстояние до солнца:</b>
                            <ul>
                                <li>149 600 000 км</li>
                            </ul>
                        </li><br />
                        <li><b>Радиус:</b>
                            <ul>
                                <li>6 371 км</li>
                            </ul>
                        </li><br />
                        <li><b>Масса:</b>
                            <ul>
                                <li>5 972 600 000 000 000 000 000 000 кг(5,972 септилиона кг)</li>
                            </ul>
                        </li><br />
                        <li><b>Спутники:</b>
                            <ul>
                                <li>Луна</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        case 'mars':
            return (
                <div className="info-panel__main-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>687 земным суткам</li>
                            </ul>
                        </li><br />
                        <li><b>Скорость вращения вокруг оси:</b>
                            <ul>
                                <li>24 часа 37 мин</li>
                            </ul>
                        </li><br />
                        <li><b>Расстояние до солнца:</b>
                            <ul>
                                <li>228 000 000 км</li>
                            </ul>
                        </li><br />
                        <li><b>Радиус:</b>
                            <ul>
                                <li>3 389,5 км</li>
                            </ul>
                        </li><br />
                        <li><b>Масса:</b>
                            <ul>
                                <li>641 710 000 000 000 000 000 000 кг(641,71 секстилиона кг)</li>
                            </ul>
                        </li><br />
                        <li><b>Спутники:</b>
                            <ul>
                                <li>Фобос, Деймос</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        case 'jupiter':
            return (
                <div className="info-panel__main-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>12 лет</li>
                            </ul>
                        </li><br />
                        <li><b>Скорость вращения вокруг оси:</b>
                            <ul>
                                <li>9 часов 56 мин</li>
                            </ul>
                        </li><br />
                        <li><b>Расстояние до солнца:</b>
                            <ul>
                                <li>228 000 000 км</li>
                            </ul>
                        </li><br />
                        <li><b>Радиус:</b>
                            <ul>
                                <li>69 911 км</li>
                            </ul>
                        </li><br />
                        <li><b>Масса:</b>
                            <ul>
                                <li>1 898 600 000 000 000 000 000 000 000(1,898 октилиона кг)</li>
                            </ul>
                        </li><br />
                        <li><b>Спутники:</b>
                            <ul>
                                <li>Европа, Ганимед, Ио, Каллисто, Амальтея, Адрастея, и еще 73 спутника</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        case 'saturn':
            return (
                <div className="info-panel__main-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>29,5 лет</li>
                            </ul>
                        </li><br />
                        <li><b>Скорость вращения вокруг оси:</b>
                            <ul>
                                <li>10 часов, 34 минуты и 13 секунд</li>
                            </ul>
                        </li><br />
                        <li><b>Расстояние до солнца:</b>
                            <ul>
                                <li>1 430 000 000 км</li>
                            </ul>
                        </li><br />
                        <li><b>Радиус:</b>
                            <ul>
                                <li>58 232 км</li>
                            </ul>
                        </li><br />
                        <li><b>Масса:</b>
                            <ul>
                                <li>568 300 000 000 000 000 000 000 000(568,3 септилиона кг)</li>
                            </ul>
                        </li><br />
                        <li><b>Спутники:</b>
                            <ul>
                                <li>Титан, Энцелад, Мимас, Диона, Тефия, Япет, и еще 21 спутник</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        case 'uranus':
            return (
                <div className="info-panel__main-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>84 года</li>
                            </ul>
                        </li><br />
                        <li><b>Скорость вращения вокруг оси:</b>
                            <ul>
                                <li>17 часов 14 мин 24 с</li>
                            </ul>
                        </li><br />
                        <li><b>Расстояние до солнца:</b>
                            <ul>
                                <li>2 800 000 000 км</li>
                            </ul>
                        </li><br />
                        <li><b>Радиус:</b>
                            <ul>
                                <li>25 362 км</li>
                            </ul>
                        </li><br />
                        <li><b>Масса:</b>
                            <ul>
                                <li>86 810 000 000 000 000 000 000 000(86,81 септилиона кг)</li>
                            </ul>
                        </li><br />
                        <li><b>Спутники:</b>
                            <ul>
                                <li>Титания, Оберон, Умбриэль, Миранда, Ариэль, Пак, и еще 76 спутников</li>
                            </ul>
                        </li>
                    </ul>
                </div>
            );
        case 'neptune':
            return (
                <div className="info-panel__main-info">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
                        id est laborum.
                    </p>
                    <ul>
                        <li><b>Скорость вращения вокруг солнца:</b>
                            <ul>
                                <li>165 лет</li>
                            </ul>
                        </li><br />
                        <li><b>Скорость вращения вокруг оси:</b>
                            <ul>
                                <li>16 часов</li>
                            </ul>
                        </li><br />
                        <li><b>Расстояние до солнца:</b>
                            <ul>
                                <li>4 550 000 000 км</li>
                            </ul>
                        </li><br />
                        <li><b>Радиус:</b>
                            <ul>
                                <li>24 622 км</li>
                            </ul>
                        </li><br />
                        <li><b>Масса:</b>
                            <ul>
                                <li>102 400 000 000 000 000 000 000 000(102,4 септилиона кг)</li>
                            </ul>
                        </li><br />
                        <li><b>Спутники:</b>
                            <ul>
                                <li>Тритон, Таласса, Гиппокамп, Несо, Нереида, Деспина, и еще 14 спутников</li>
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