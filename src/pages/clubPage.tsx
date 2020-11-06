import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {  useParams } from 'react-router-dom';
import { Spinner, Container } from 'react-bootstrap';
import GroupCard from '../components/GroupCard/groupCard';
import SearchBar from '../components/SearchBar/searchBar';
import EmptyResult from '../components/emptyResult';
import FetchError from '../components/fetchError';
import ClubInfo from '../components/ClubInfo/clubInfo';
import { urlBuilderFilterData } from '../services/urlBuilders';
import { fetchDataThunk, fetchDetailThunk } from '../services/api';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import { combinedStateInterface } from '../store/store';
import { cardList } from '../styles/card';
import { CLUB, GROUP } from '../constants';

interface urlParams {
    id: string;
}

const ClubPage = (): JSX.Element => {
    const urlParams = useParams<urlParams>();
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();

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
        <Container className="body">
            <SearchBar />
            {reduxState.thunk.fetch_in_progress ? (
                <Container className="Spinner">
                    <Spinner animation="border" />
                </Container>
            ) : (
                <React.Fragment>
                    {reduxState.thunk.fetch_failed ? (
                        <React.Fragment>
                            <FetchError />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
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
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </Container>
    );
};
export default ClubPage;
