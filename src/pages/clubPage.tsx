import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GroupCard from '../components/GroupCard/groupCard';
import { CLUB, GROUP } from '../constants';
import SearchBar from '../components/SearchBar/searchBar';
import SearchIcon from '../components/SearchBar/searchIcon';
import { fetchDataThunk, fetchDetailThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import { searchIconContainer } from '../components/SearchBar/styles';
import ClubInfo from '../components/ClubInfo/clubInfo';
import { card } from '../styles/card';
import { cityReducer } from '../store/pages/city/cityReducer';

interface urlParams {
    id: string;
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
            dispatch(fetchDetailThunk(CLUB, urlParams.id));
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

    const selectedClub = reduxState.club_detail.club;

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>HEADER</h1>
                </div>
                <div className={searchIconContainer}>
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={CLUB} />
            {selectedClub && (
                <ClubInfo
                    title={selectedClub.name}
                    contact_email={selectedClub.contact_email}
                    price={selectedClub.membership_fee}
                    register_info={selectedClub.register_info}
                    description={selectedClub.description}
                />
            )}
            <div className={card}>{listContent}</div>
        </div>
    );
};
export default ClubPage;
