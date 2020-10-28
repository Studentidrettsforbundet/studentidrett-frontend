import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/regionCard';
import { CITY, NORDNORGE, MIDTNORGE, VESTLANDET, OSTLANDET, SORLANDET } from '../constants';
import { fetchDataThunk } from '../services/api';
import { regionInterface } from '../interfaces';
import SearchIcon from '../components/searchIcon';
import SearchBar from '../components/searchBar';
import { Spinner } from 'react-bootstrap';
import EmptyResult from '../components/emptyResult';
import FetchError from '../components/fetchError';

const RegionPage = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();

    let Nord: regionInterface = { id: 0, name: NORDNORGE, cities: [] };
    let Midt: regionInterface = { id: 1, name: MIDTNORGE, cities: [] };
    let Vest: regionInterface = { id: 2, name: VESTLANDET, cities: [] };
    let Sor: regionInterface = { id: 3, name: SORLANDET, cities: [] };
    let Ost: regionInterface = { id: 4, name: OSTLANDET, cities: [] };
    let regions: regionInterface[] = [Nord, Midt, Vest, Sor, Ost];

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(CITY));
        }
    });

    const sortCities = reduxState.city.cities.map((entry) => {
        if (entry.region === 'nord') {
            regions[0].cities.push(entry);
        } else if (entry.region === 'midt') {
            regions[1].cities.push(entry);
        } else if (entry.region === 'vest') {
            regions[2].cities.push(entry);
        } else if (entry.region === 'sor') {
            regions[3].cities.push(entry);
        } else {
            regions[4].cities.push(entry);
        }
        return <a />;
    });

    const listContent = regions.map((entry) => {
        return <RegionCard {...{ id: entry.id, name: entry.name, cities: entry.cities }} key={entry.id} />;
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
            <SearchBar typeOfSearch={CITY} />
            {reduxState.thunk.fetch_in_progress ? (
                <div className="center_container">
                    <Spinner animation="border" />
                </div>
            ) : (
                <>
                    {reduxState.thunk.fetch_failed ? (
                        <>
                            <FetchError />
                        </>
                    ) : (
                        <>
                            {reduxState.city.cities.length === 0 ? (
                                <>
                                    <EmptyResult />
                                </>
                            ) : (
                                <>
                                    {listContent}
                                    {sortCities}
                                </>
                            )}
                        </>
                    )}
                </>
            )}
        </div>
    );
};

export default RegionPage;
