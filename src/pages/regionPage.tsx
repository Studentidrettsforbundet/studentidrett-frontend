import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/regionCard';
import { CITY, NORDNORGE, MIDTNORGE, VESTLANDET, OSTLANDET, SORLANDET } from '../constants';
import { fetchDataThunk } from '../services/api';
import { regionInterface } from '../interfaces';

/* TODO
 * Show list of cities categorized by region.
 * RegionCard should contain cityCards.
 * CityCards should link to "/:City"
 */

const RegionPage = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();

    let Nord: regionInterface = { id: 0, name: NORDNORGE, cities: [] };
    let Midt: regionInterface = { id: 0, name: MIDTNORGE, cities: [] };
    let Vest: regionInterface = { id: 0, name: VESTLANDET, cities: [] };
    let Sor: regionInterface = { id: 0, name: "Sorlandet", cities: [] };
    let Ost: regionInterface = { id: 0, name: "Ostlandet", cities: [] };
    let regions: regionInterface[] = [Nord, Midt, Vest, Sor, Ost];

    useEffect(() => {
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(CITY));
        }
    });


    const sortCities = reduxState.city.cities.map((entry) => {
        if (entry.region === NORDNORGE) {
            regions[0].cities.push(entry);
        } else if (entry.region === MIDTNORGE) {
            regions[1].cities.push(entry);
        } else if (entry.region === VESTLANDET) {
            regions[2].cities.push(entry);
        } else if (entry.region === OSTLANDET) {
            regions[4].cities.push(entry);
        } else {
            regions[3].cities.push(entry);
        }
        return <a/>
    });

    const listContent = regions.map((entry) => {
        return (<RegionCard id={entry.id} name={entry.name} cities={entry.cities}></RegionCard>);
    });

    

    return (
        <div className="container">
            <h1>Regions</h1>
            <p>Choose a region </p>
            {sortCities}
            {listContent}
        </div>
    );
};

export default RegionPage;
