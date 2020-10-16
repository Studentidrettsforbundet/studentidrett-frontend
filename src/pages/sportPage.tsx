import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
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
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(SPORT));
        }
      });

    const listContent = reduxState.sport.sports.map((entry) => {
        return SportCard({ id: entry.id, name: entry.name });
    });

    return (
        <div className="container">
            <h1>Sports</h1>
            <p>Viser klubber i {city.City}: </p>
            {listContent}
        </div>
    );
};

export default SportPage;
