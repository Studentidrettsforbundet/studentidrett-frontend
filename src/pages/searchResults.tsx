import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import { fetchDataThunk } from '../services/api';
import { CITY, CLUB, GROUP, SEARCH, SPORT, TEAM } from '../constants';
import { urlBuilderSimpleSearch } from '../services/urlBuilders';
import SearchBar from '../components/SearchBar/searchBar';
import {
    instanceOfClub,
    instanceOfGroup,
    instanceOfCity,
    instanceOfSport,
    instanceOfTeam,
} from '../services/interfaceValidators';
import SearchCard from '../components/SearchCard/searchCard';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import { Spinner } from 'react-bootstrap';
import FetchError from '../components/fetchError';

const SearchResults = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();
    const location = useLocation().search.split('=')[1];
    const instanceList = [instanceOfSport, instanceOfCity, instanceOfGroup, instanceOfClub, instanceOfTeam];
    const labelList = [SPORT, CITY, GROUP, CLUB, TEAM];

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(SEARCH, urlBuilderSimpleSearch(location)));
        }
    }, [reduxState.thunk.fetch_success]);

    useEffect(() => {
        dispatch(resetFetchStatusesActionCreator());
    }, [location]);

    const results = reduxState.search_results.results.map((entry) => {
        for (let i = 0; i < instanceList.length; i++) {
            if (instanceList[i](entry)) {
                return <SearchCard label={labelList[i]} {...entry} />;
            }
        }
    });

    return (
        <React.Fragment>
            <SearchBar />
            {reduxState.thunk.fetch_in_progress ? (
                <div className="center_container">
                    <Spinner animation="border" />
                </div>
            ) : (
                <div>
                    {reduxState.thunk.fetch_failed ? (
                        <div>
                            <FetchError />
                        </div>
                    ) : (
                        <div>{results}</div>
                    )}
                </div>
            )}
        </React.Fragment>
    );
};

export default SearchResults;
