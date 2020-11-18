import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/searchBar';
import { GROUP, SPORT } from '../constants';
import { fetchDataThunk, fetchDetailThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import { urlBuilderFilterData } from '../services/urlBuilders';
import EmptyResult from '../components/EmptyResult/emptyResult';
import FetchError from '../components/fetchError';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import Breadcrumbs from '../components/Breadcrumbs/breadcrumbs';
import { toggleSearchBarActionCreator } from '../store/searchBar/searchBarActions';
import GroupCard from '../components/GroupCard/groupCard';
import { cardList } from '../styles/card';

interface urlParams {
    id: string;
}

const SportPage = (): JSX.Element => {
    const sport = useParams<urlParams>();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(GROUP, urlBuilderFilterData(GROUP, [{ cardType: 'sport', id_or_name: sport.id }])));
            dispatch(fetchDetailThunk(SPORT, sport.id));
        }
    });

    useEffect(() => {
        return () => {
            dispatch(toggleSearchBarActionCreator(false));
            dispatch(resetFetchStatusesActionCreator());
        };
    }, [dispatch]);

    const listContent = reduxState.group.groups.map((entry) => {
        return <GroupCard {...entry} key={entry.id} />;
    });

    const sportInfo = reduxState.sport.sport;

    return (
        <React.Fragment>
            <SearchBar />
            <Breadcrumbs key="breadcrumbsSport" state={reduxState} />
            <div className="row">
                <div className="col">
                    {sportInfo && (
                        <div>
                            <h1>{sportInfo.name}</h1>
                        </div>
                    )}
                    <p>Klubber som driver med idretten: </p>
                </div>
            </div>
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
                            {listContent.length === 0 ? <EmptyResult /> : <div className={cardList}>{listContent}</div>}
                        </>
                    )}
                </>
                )}
        </React.Fragment>
    );
};

export default SportPage;
