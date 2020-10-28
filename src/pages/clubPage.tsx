import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GroupCard from '../components/groupCard';
import { CLUB, GROUP } from '../constants';
import SearchBar from '../components/searchBar';
import SearchIcon from '../components/searchIcon';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import { Spinner } from 'react-bootstrap';

interface urlParams {
    Region: string;
    Sport: string;
    Club: string;
}

const ClubPage = () => {
    const urlParams = useParams<urlParams>();
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(GROUP));
        }
    });

    const listContent = reduxState.group.groups.map((entry) => {
        return (
            <GroupCard
                {...{
                    id: entry.id,
                    name: entry.name,
                    description: entry.description,
                    cover_photo: entry.cover_photo,
                    sports: entry.sports,
                    club: entry.club,
                    city: entry.city,
                    contact_email: entry.contact_email,
                }}
                key={entry.id}
            />
        );
    });

    return (
        <div className="container body">
            <div className="row">
                <div className="col">
                    <h1>{urlParams.Club}</h1>
                </div>
                <div className="col search_icon-container">
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={CLUB} />
            {reduxState.thunk.fetch_in_progress ? (
                <div className="center_container">
                    <Spinner animation="border" />
                </div>
            ) : (
                <div className="card-columns">{listContent}</div>
            )}
        </div>
    );
};
export default ClubPage;
