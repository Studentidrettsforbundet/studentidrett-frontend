import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/regionCard';
import { REGION } from '../constants';
import { fetchDataThunk } from '../services/api';
import SearchBar from '../components/searchBar';
import SearchIcon from '../components/searchIcon';

/* TODO
 * Show list of cities categorized by region.
 * RegionCard should contain cityCards.
 * CityCards should link to "/:City"
 */

const RegionPage = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            //dispatch(fetchDataThunk(REGION));
        }
    });

    const listContent = reduxState.region.regions.map((entry) => {
        return <RegionCard {...{ id: entry.id, name: entry.name }} key={entry.id} />;
    });

    return (
        <div className="container body">
            <div className="row">
                <div className="col">
                    <h1>Regions</h1>
                </div>
                <div className="col search_icon-container">
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={REGION} />
            {listContent}
        </div>
    );
};

export default RegionPage;
