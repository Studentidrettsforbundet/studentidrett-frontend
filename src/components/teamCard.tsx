import React from 'react';
import { teamInterface } from '../interfaces';
import image from './placeholder.png';

const TeamCard = (team: teamInterface) => {
    return (
        <div className="card Region" key={team.id}>
            <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <img className="card-img-top" src={image} alt="Team"></img>
                <p>{team.short_description}</p>
            </div>
        </div>
    );
};

export default TeamCard;
