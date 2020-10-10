import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SportCard from '../components/sportCard';
import { SPORT } from '../constants';
import { combinedStateInterface } from '../store/store';
import { fetchDataThunk } from '../store/thunks/thunkActions';

// See: https://getbootstrap.com/docs/4.0/components/card/

interface urlParams {
    Region: string;
}

const SportPage = () => {
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    useEffect(() => {
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(SPORT));
        }
      });

    const regions = useParams<urlParams>();

    const listContent = reduxState.sport.sports.map((entry) => {
        return SportCard({ id: entry.id, name: entry.name });
    });

    return (
        <div className="container">
            <h1>Sports</h1>
            <p>Chose sport in {regions.Region}: </p>
            {listContent}
        </div>
    );
};

export default SportPage;
