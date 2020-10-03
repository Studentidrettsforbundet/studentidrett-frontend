import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ClubCard from '../components/clubCard';
import { combinedState } from '../store/store';
import '../styles/ClubOverview.css';

const ClubPage = () => {
    const dispatch = useDispatch();
    const club = useSelector((state: combinedState) => state.club);
    const sport = useSelector((state: combinedState) => state.sport);

    let listContent = club.clubs.map((entry) => {
        return ClubCard({
            id: entry.id,
            city: entry.city,
            name: entry.name,
            description: entry.description,
            contact_email: entry.contact_email,
            pricing: entry.pricing,
            register_info: entry.register_info,
        });
    });

    return (
        <div className="container">
            <h1>{sport.selectedSport.name}</h1>
            <h2>Select club:</h2>
            {listContent}
        </div>
    );
};
export default ClubPage;
