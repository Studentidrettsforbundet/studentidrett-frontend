import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/searchBar';
import SearchIcon from '../components/SearchBar/searchIcon';
import TeamCard from '../components/TeamCard/teamCard';
import { GROUP, TEAM } from '../constants';
import { fetchDataThunk, fetchDetailThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import GroupInfo from '../components/GroupInfo/groupInfo';
import { urlBuilderFilterData } from '../services/urlBuilders';
import EmptyResult from '../components/emptyResult';
import FetchError from '../components/fetchError';
import { cardList } from '../styles/card';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';

interface urlParams {
    id: string;
}

const GroupPage = (): JSX.Element => {
    const urlParams = useParams<urlParams>();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const location = useLocation();

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(
                fetchDataThunk(TEAM, urlBuilderFilterData(TEAM, [{ cardType: 'group', id_or_name: urlParams.id }])),
            );
            dispatch(fetchDetailThunk(GROUP, urlParams.id));
        }
    });

    useEffect(() => {
        return () => {
            dispatch(resetFetchStatusesActionCreator());
        };
    }, []);

    const listContent = reduxState.team.teams.map((entry) => {
        return <TeamCard {...entry} key={entry.id} />;
    });

    const selectedGroup = reduxState.group.group;

    return (
        <div className="container body">
            <div className="row">
                <div className="searchIconContainer">
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={GROUP} />
            {reduxState.thunk.fetch_in_progress ? (
                <div className="center_container">
                    <Spinner animation="border" />
                </div>
            ) : (
                <>
                    {reduxState.thunk.fetch_failed ? (
                        <div>
                            <FetchError />
                        </div>
                    ) : (
                        <div>
                            {selectedGroup && (
                                <GroupInfo title={selectedGroup.name} description={selectedGroup.description} />
                            )}
                            <h3>Våre lag</h3>
                            {listContent.length === 0 ? <EmptyResult /> : <div className={cardList}>{listContent}</div>}
                        </div>
                    )}
                </>
            )}
        </div>
    );
};
export default GroupPage;
