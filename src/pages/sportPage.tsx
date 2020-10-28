import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import EmptyResult from '../components/emptyResult';
import SearchBar from '../components/searchBar';
import SearchIcon from '../components/searchIcon';
import SportCard from '../components/sportCard';
import { SPORT } from '../constants';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';

// See: https://getbootstrap.com/docs/4.0/components/card/

/* TODO
 * Uses ClubCard NOT SportCard
 * make ClubCards redirect to "/:City/:Club" instead of "/:City/:Sport/:Club"
 */

interface urlParams {
    City: string;
}

const SportPage = () => {
    const city = useParams<urlParams>();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(SPORT));
        }
    });

    const listContent = reduxState.sport.sports.map((entry) => {
        return <SportCard {...{ id: entry.id, name: entry.name, labels: entry.labels }} key={entry.id} />;
    });

    return (
        <div className="container body">
            <div className="row">
                <div className="col">
                    <h1>Sports</h1>
                    <p>Viser klubber i {city.City}: </p>
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
                <>{listContent.length === 0 ? <EmptyResult /> : <div className="card-deck">{listContent}</div>}</>
            )}
        </div>
    );
};

export default SportPage;
