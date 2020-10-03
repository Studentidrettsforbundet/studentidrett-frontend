import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TeamCard from '../components/teamCard';
import { combinedState } from '../store/store';
import '../styles/ClubOverview.css';

const TeamPage = () => {
    const team = useSelector((state: combinedState) => state.team);
    const club = useSelector((state: combinedState) => state.club);

    let listContent = team.teams.map((entry) => {
        return TeamCard({
            id: entry.id,
            name: entry.name,
            full_capacity: entry.full_capacity,
            tryouts: entry.tryouts,
            registration_open: entry.registration_open,
            group: entry.group,
        });
    });

    return (
        <div className="container">
            <h1>{club.selectedClub.name}</h1>
            {listContent}
        </div>
    );
};
export default TeamPage;
