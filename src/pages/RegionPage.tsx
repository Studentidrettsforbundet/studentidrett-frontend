import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/regionCard';
import { REGION, SPORT } from '../constants';
import { simpleSearch } from '../services/api';

import { fetchDataThunk } from '../store/thunks/thunkActions';

const RegionPage = () => {
    const regions = useSelector((state: combinedStateInterface) => state.region);
    const apiStatus = useSelector((state: combinedStateInterface) => state.thunk);
    const dispatch = useDispatch();

    const listContent = regions.regions.map((entry) => {
        return RegionCard({ id: entry.id, name: entry.name });
    });

    if (!apiStatus.fetch_in_progress && !apiStatus.fetch_failed && !apiStatus.fetch_success) {
        dispatch(fetchDataThunk(REGION));
    }



    return (
        <div className="container">
            <h1>Regions</h1>
            <p>Choose a region </p>
            {listContent}
        </div>
    );
};

export default RegionPage;
