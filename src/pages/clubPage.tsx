import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import GroupCard from '../components/GroupCard/groupCard';
import { CLUB, GROUP } from '../constants';
import SearchBar from '../components/SearchBar/searchBar';
import SearchIcon from '../components/SearchBar/searchIcon';
import { fetchDataThunk, fetchDetailThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import ClubInfo from '../components/ClubInfo/clubInfo';
import { urlBuilderFilterData } from '../services/urlBuilders';
import { Col, Spinner } from 'react-bootstrap';
import EmptyResult from '../components/emptyResult';
import FetchError from '../components/fetchError';
import { cardList } from '../styles/card';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';

interface urlParams {
    id: string;
}

const ClubPage = (): JSX.Element => {
    const urlParams = useParams<urlParams>();
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();
    const location = useLocation();

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(
                fetchDataThunk(GROUP, urlBuilderFilterData(GROUP, [{ cardType: 'club', id_or_name: urlParams.id }])),
            );
            dispatch(fetchDetailThunk(CLUB, urlParams.id));
        }
    });

    useEffect(() => {
        return () => {
            dispatch(resetFetchStatusesActionCreator());
        };
    }, []);

    const listContent = reduxState.group.groups.map((entry) => {
        return (
            <GroupCard
                {...{
                    id: entry.id,
                    name: entry.name,
                    description: entry.description,
                    cover_photo: entry.cover_photo,
                    sports: entry.sports,
                    club: entry.club,
                    city: entry.city,
                    contact_email: entry.contact_email,
                }}
                key={entry.id}
            />
        );
    });

    const selectedClub = reduxState.club.club;

    return (
        <div className="container body">
            <div className="row">
                <div className="searchIconContainer">
                    <SearchIcon />
                </div>
            </div>
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
                        <div>
                            {selectedClub && (
                                <ClubInfo
                                    title={selectedClub.name}
                                    contact_email={selectedClub.contact_email}
                                    price={selectedClub.membership_fee}
                                    register_info={selectedClub.register_info}
                                    description={selectedClub.description}
                                />
                            )}
                            <h3>Våre grupper</h3>
                            {listContent.length === 0 ? <EmptyResult /> : <div className={cardList}>{listContent}</div>}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default ClubPage;
