import React, { useState } from 'react';
import { teamInterface } from '../../interfaces';
import image from '../../assets/placeholder.png';
import {card, cardBody, cardFooter, cardImg, cardTitle} from '../../styles/card';

interface teamCardInterface {
    id: number;
    name: string;
    short_description: string|null;
    gender: string;
    skill_level: string;
    availability: string;
}

const TeamCard = ({ id, name, short_description, gender, availability, skill_level }: teamCardInterface) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={card} key={id} onClick={() => toggleExpanded()}>
            <h5 className={cardTitle}>{name}</h5>
            <div className={cardBody}>
                <img className={cardImg} src={image} alt="Team"></img>
            </div>
            <div className={cardFooter}>
                <p>Nivå: {skill_level}</p>
                <p>Åpent/opptak: {availability} </p>
                <p>Kjønn: {gender}</p>
                <p>{short_description}</p>
            </div>
        </div>
    );
};

export default TeamCard;
