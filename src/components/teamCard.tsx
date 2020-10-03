import React from 'react';
import { teamInterface } from '../interfaces';
import { combinedState } from '../store/store';

const TeamCard = (team: teamInterface) => {
    return (
        <div className="card Region" key={team.id}>
            <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
            </div>
        </div>
    );
};

export default TeamCard;
