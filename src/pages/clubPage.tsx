import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClubCard from '../components/clubCard';
import SearchBar from '../components/searchBar';
import SearchIcon from '../components/searchIcon';
import { CLUB } from '../constants';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';

/* TODO
 * Make clubs with only one group redirect to "/:City/:Club/:Group" immediately
 * Add in option for subgroups
 * Add GroupCard to link to Groups under a club
 * GroupCard should link to "/:City/:Club/:Group"
 */

interface urlParams {
    Region: string;
    Sport: string;
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
            dispatch(fetchDataThunk(CLUB, ''));
        }
    });

    const listContent = reduxState.club.clubs.map((entry) => {
        return (
            <ClubCard
                {...{
                    id: entry.id,
                    city: entry.city,
                    name: entry.name,
                    description: entry.description,
                    contact_email: entry.contact_email,
                    membership_fee: entry.membership_fee,
                    register_info: entry.register_info,
                }}
                key={entry.id}
            />
        );
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>Cities</h1>
                </div>
                <div className="col search_icon-container">
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={CLUB} />
            <p>Select club</p>
            {listContent}
        </div>
    );
};
export default ClubPage;
