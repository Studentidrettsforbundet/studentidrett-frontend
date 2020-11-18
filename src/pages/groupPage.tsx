import React, { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/searchBar';
import TeamCard from '../components/TeamCard/teamCard';
import { GROUP, TEAM } from '../constants';
import { fetchDataThunk, fetchDetailThunk, handleInterestThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import GroupInfo from '../components/GroupInfo/groupInfo';
import { urlBuilderFilterData } from '../services/urlBuilders';
import EmptyResult from '../components/EmptyResult/emptyResult';
import FetchError from '../components/fetchError';
import { cardList } from '../styles/card';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import {toggleSearchBarActionCreator} from "../store/searchBar/searchBarActions";

interface urlParams {
    id: string;
}

const GroupPage = (): JSX.Element => {
    const urlParams = useParams<urlParams>();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

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
            if (
                !reduxState.interest.interests.includes(urlParams.id) &&
                reduxState.interest.sessionID &&
                !reduxState.thunk.post_in_progress &&
                reduxState.thunk.post_failed_count < 3 &&
                !reduxState.thunk.post_success
            ) {
                dispatch(handleInterestThunk(urlParams.id, reduxState.interest.sessionID));
            }
        }
    });

    useEffect(() => {
        // cleanup
        return () => {
            dispatch(toggleSearchBarActionCreator(false));
            dispatch(resetFetchStatusesActionCreator());
        };
    }, []);

    const listContent = reduxState.team.teams.map((entry) => {
        return <TeamCard {...entry} key={entry.id} />;
    });

    const selectedGroup = reduxState.group.group;

    return (
        <React.Fragment>
            <SearchBar />
            {reduxState.thunk.fetch_in_progress ? (
                <div className="spinner">
                    <Spinner animation="border" />
                </div>
            ) : (
                <>
                    {reduxState.thunk.fetch_failed ? (
                        <React.Fragment>
                            <FetchError />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {selectedGroup && (
                                <GroupInfo title={selectedGroup.name} description={selectedGroup.description} />
                            )}
                            <h3>Våre lag</h3>
                            {listContent.length === 0 ? <EmptyResult /> : <div className={cardList}>{listContent}</div>}
                        </React.Fragment>
                    )}
                </>
            )}
        </React.Fragment>
    );
};
export default GroupPage;
