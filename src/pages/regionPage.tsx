import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/regionCard';
import {  REGION } from '../constants';
import { fetchDataThunk } from '../services/api';
import SearchBar from '../components/searchBar';

/* TODO
 * Show list of cities categorized by region.
 * RegionCard should contain cityCards.
 * CityCards should link to "/:City"
 */

const RegionPage = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();
    const [showSearch, toggleSearch] = useState(false)

  /*
    useEffect(() => {
        console.log("Loading")
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(REGION));
        }
    });
*/
      const listContent = reduxState.region.regions.map((entry) => {
        return RegionCard({ id: entry.id, name: entry.name });
    });

    return (

        <div className="container">
            <div className="row">
                <div className="col">
                <h1>Regions</h1>
                    </div>
                <div className="col search_icon-container">
                    <img src={require('../assets/search.svg')} alt="Search icon" className={'search_icon'} onClick={()=>toggleSearch(!showSearch)}/>
                </div>
            </div>
            {showSearch 
            ? <SearchBar typeOfSearch={REGION} />
            : null
            }
            {listContent}
            
        </div>
    );
};

export default RegionPage;
