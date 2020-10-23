import React from 'react';

export interface teamCardInterface {
    long_description: string;
    full_capacity: boolean;
    tryouts: boolean;
    registration_open: boolean;
}

const TeamCardExpanded = (team: teamCardInterface) => {
    return (
        <>
            <p>{team.long_description}</p>
            {team.full_capacity ? <p>This team is full</p> : <p>This team has available positions</p>}
            {team.tryouts ? <p>This requires tryouts</p> : <p>This team is open for anyone</p>}
            {team.registration_open ? (
                <p>This team is open for registrations</p>
            ) : (
                <p>This team is not open for registration</p>
            )}
        </>
    );
};

export default TeamCardExpanded;
