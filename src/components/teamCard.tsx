import React, { useState } from 'react';
import { teamInterface } from '../interfaces';
import image from './placeholder.png';
import TeamCardExpanded from './teamCardExpanded';

const TeamCard = (team: teamInterface) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="card Region" key={team.id} onClick={() => toggleExpanded()}>
            <div className="card-body">
                <h5 className="card-title">{team.name}</h5>
                <img className="card-img-top" src={image} alt="Team"></img>
                {expanded ? (
                    <TeamCardExpanded
                        long_description={team.long_description}
                        full_capacity={team.full_capacity}
                        tryouts={team.tryouts}
                        registration_open={team.registration_open}
                    />
                ) : (
                    <p className="text-center">{team.short_description}</p>
                )}
            </div>
        </div>
    );
};

export default TeamCard;
