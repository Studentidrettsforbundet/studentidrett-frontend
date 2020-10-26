import React, { useState } from 'react';
import { teamInterface } from '../interfaces';
import image from './placeholder.png';
import TeamCardExpanded from './teamCardExpanded';

const TeamCard = ({
    id,
    name,
    short_description,
    full_capacity,
    group,
    long_description,
    registration_open,
    tryouts,
}: teamInterface) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="card Region" key={id} onClick={() => toggleExpanded()}>
            <h5 className="card-header card-title">{name}</h5>
            <div className="card-body">
                <img className="card-img" src={image} alt="Team"></img>
            </div>
            <div className="card-footer">
                {expanded ? (
                    <TeamCardExpanded
                        long_description={long_description}
                        full_capacity={full_capacity}
                        tryouts={tryouts}
                        registration_open={registration_open}
                    />
                ) : (
                    <p>{short_description}</p>
                )}
            </div>
        </div>
    );
};

export default TeamCard;
