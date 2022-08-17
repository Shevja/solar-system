import React from "react";

const planetNameTranslationRu = props => {
    switch (props.planetName) {
        case 'mercury':
            return (
                <p>Меркурий</p>
            );
        case 'venus':
            return (
                <p>Венера</p>
            );
        case 'earth':
            return (
                <p>Земля</p>
            );
        case 'mars':
            return (
                <p>Марс</p>
            );
        case 'jupiter':
            return (
                <p>Юпитер</p>
            );
        case 'saturn':
            return (
                <p>Сатурн</p>
            );
        case 'uranus':
            return (
                <p>Уран</p>
            );
        case 'neptune':
            return (
                <p>Нептун</p>
            );
        default:
            break;
    }
}

export default planetNameTranslationRu;