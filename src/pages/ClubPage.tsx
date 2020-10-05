import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClubCard from '../components/clubCard';
import { combinedState } from '../store/store';
import image from './placeholder.png';

interface urlParams {
    Region: string;
    Sport: string;
}

const ClubPage = () => {
    const urlParams = useParams<urlParams>();

    const club = useSelector((state: combinedState) => state.club);

    const listContent = club.clubs.map((entry) => {
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
            <h1>{urlParams.Sport}</h1>
            <p>Select club</p>
            {listContent}
        </div>
    );
};
export default ClubPage;
