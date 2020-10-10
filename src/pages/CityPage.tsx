import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CityCard from '../components/cityCard';
import { CITY } from '../constants';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';

const CityPage = () => {
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    useEffect(() => {
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(CITY));
        }
      });

    const listContent = reduxState.city.cities.map((entry) => {
        return CityCard({ id: entry.id, name: entry.name });
    });

    return (
        <div className="container">
            <h1>Cities</h1>
            <p>The sport has clubs in these cities: </p>
            {listContent}
        </div>
    );
};

export default CityPage;
