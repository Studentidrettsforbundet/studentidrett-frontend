import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/searchBar';
import SearchIcon from '../components/SearchBar/searchIcon';
import SportCard from '../components/SportCard/sportCard';
import { CLUB, SPORT } from '../constants';
import { fetchDataThunk, fetchDetailThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import { urlBuilderFilterData } from '../services/urlBuilders';
import ClubCard from '../components/ClubCard/clubCard';
import EmptyResult from '../components/emptyResult';
import FetchError from '../components/fetchError';

// See: https://getbootstrap.com/docs/4.0/components/card/

interface urlParams {
    id: string;
}

const SportPage = () => {
    const sport = useParams<urlParams>();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(CLUB, urlBuilderFilterData(CLUB, [{ cardType: 'sport', id_or_name: sport.id }])));
            dispatch(fetchDetailThunk(SPORT, sport.id));
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

    const sportInfo = reduxState.sport_detail.sport;

    return (
        <div className="container body">
            <div className="row">
                <div className="col">
                    {sportInfo && (
                        <div>
                            <h1>{sportInfo.name}</h1>
                        </div>
                    )}
                    <p>Klubber som driver med idretten: </p>
                </div>
                <div className="col search_icon-container">
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={SPORT} />
            {reduxState.thunk.fetch_in_progress ? (
                <div className="center_container">
                    <Spinner animation="border" />
                </div>
            ) : (
                <>
                    {reduxState.thunk.fetch_failed ? (
                        <>
                            <FetchError />
                        </>
                    ) : (
                        <>
                            {reduxState.sport.sports.length === 0 ? (
                                <EmptyResult />
                            ) : (
                                <div className="card-deck">{listContent}</div>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default SportPage;
