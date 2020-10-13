import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClubCard from '../components/clubCard';
import { CLUB } from '../constants';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';

interface urlParams {
    Region: string;
    Sport: string;
}

const ClubPage = () => {
    const urlParams = useParams<urlParams>();
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(CLUB));
        }
      });

    const listContent = reduxState.club.clubs.map((entry) => {
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
