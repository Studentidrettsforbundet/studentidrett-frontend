import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import GroupCard from '../components/GroupCard/groupCard';
import { CLUB, GROUP } from '../constants';
import SearchBar from '../components/SearchBar/searchBar';
import SearchIcon from '../components/SearchBar/searchIcon';
import { fetchDataThunk, fetchDetailThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import { searchIconContainer } from '../components/SearchBar/styles';
import ClubInfo from '../components/ClubInfo/clubInfo';
import { card } from '../styles/card';
import { urlBuilderFilterData } from '../services/urlBuilders';
import { Spinner } from 'react-bootstrap';
import EmptyResult from '../components/emptyResult';
import FetchError from '../components/fetchError';

interface urlParams {
    id: string;
}

const ClubPage = () => {
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

    const selectedClub = reduxState.club_detail.club;

    return (
        <div>
            <div className="row">
                <div className="col">
                    <h1>HEADER</h1>
                </div>
                <div className={searchIconContainer}>
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={GROUP} />
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
                            {reduxState.group.groups.length === 0 ? (
                                <EmptyResult />
                            ) : (
                                <div className="HEEER">
                                    {selectedClub && (
                                        <ClubInfo
                                            title={selectedClub.name}
                                            contact_email={selectedClub.contact_email}
                                            price={selectedClub.membership_fee}
                                            register_info={selectedClub.register_info}
                                            description={selectedClub.description}
                                        />
                                    )}
                                    <h2>Våre grupper</h2>
                                    <div>{listContent}</div>
                                </div>
                                )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
export default ClubPage;
