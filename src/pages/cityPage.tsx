import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import CityCard from '../components/cityCard';
import SearchBar from '../components/searchBar';
import { CITY } from '../constants';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';

/* TODO
 * combine sportpage and clubpage into this page.
 * Sportcards should link to "/:City/Sport/:Sport"
 * ClubCards should link to "/:City/:Club"
 */

const CityPage = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const [showSearch, toggleSearch] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(CITY));
        }
    });

    const listContent = reduxState.city.cities.map((entry) => {
        return <CityCard {...{ id: entry.id, name: entry.name }} key={entry.id} />;
    });

    return (
        <div className="container">
            <h1>Cities</h1>
            <img
                src={require('../assets/search.svg')}
                alt="Search icon"
                className={'search_icon'}
                onClick={() => toggleSearch(!showSearch)}
            />
            {showSearch ? <SearchBar typeOfSearch={CITY} /> : null}
            <p>The sport has clubs in these cities: </p>
            {listContent}
        </div>
    );
};

export default CityPage;
