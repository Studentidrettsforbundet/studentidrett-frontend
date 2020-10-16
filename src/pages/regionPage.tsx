import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/regionCard';
import { CITY, NORDNORGE, MIDTNORGE, VESTLANDET, OSTLANDET, SORLANDET } from '../constants';
import { fetchDataThunk } from '../services/api';

/* TODO
 * Show list of cities categorized by region.
 * RegionCard should contain cityCards.
 * CityCards should link to "/:City"
 */

const RegionPage = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(CITY));
        }
    });

    const listCities = reduxState.city.cities.map((entry) => {
        return RegionCard({ id: entry.id, name: entry.name, cities: [entry]});
    });

    const listContent = reduxState.region.regions.map((entry) => {
        return RegionCard({ id: entry.id, name: entry.name });
    });

    return (
        <div className="container">
            <h1>Regions</h1>
            <p>Choose a region </p>
            {listContent}
        </div>
    );
};

export default RegionPage;
