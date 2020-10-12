import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TeamCard from '../components/teamCard';
import { combinedStateInterface } from '../store/store';


interface urlParams {
    Region: string;
    Sport: string;
    Club: string;
}

const TeamPage = () => {
    const urlParams = useParams<urlParams>();

    const team = useSelector((state: combinedStateInterface) => state.team);

    const listContent = team.teams.map((entry) => {
        return TeamCard({
            id: entry.id,
            name: entry.name,
            full_capacity: entry.full_capacity,
            short_description: entry.short_description,
            long_description: entry.long_description,
            tryouts: entry.tryouts,
            registration_open: entry.registration_open,
            group: entry.group,
        });
    });

    return (
        <div className="container">
            <h1>{urlParams.Club}</h1>
            {listContent}
        </div>
    );
};
export default TeamPage;
