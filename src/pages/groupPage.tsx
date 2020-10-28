import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/searchBar';
import SearchIcon from '../components/SearchBar/searchIcon';
import TeamCard from '../components/TeamCard/teamCard';
import { GROUP, TEAM } from '../constants';
import { fetchDataThunk, fetchDetailThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import GroupInfo from '../components/GroupInfo/groupInfo';

interface urlParams {
    id: string;
}

const GroupPage = () => {
    const urlParams = useParams<urlParams>();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(TEAM));
            dispatch(fetchDetailThunk(GROUP, urlParams.id));
        }
    });

    const listContent = reduxState.team.teams.map((entry) => {
        return (
            <TeamCard
                {...{
                    id: entry.id,
                    name: entry.name,
                    full_capacity: entry.full_capacity,
                    short_description: entry.short_description,
                    long_description: entry.long_description,
                    tryouts: entry.tryouts,
                    registration_open: entry.registration_open,
                    group: entry.group,
                }}
                key={entry.id}
            />
        );
    });

    const selectedGroup = reduxState.group_detail.group;

    return (
        <div className="container body">
            <div className="row">
                <div className="col">
                    <h1>HEADER</h1>
                </div>
                <div className="col search_icon-container">
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={GROUP} />
            {selectedGroup && <GroupInfo title={selectedGroup.name} description={selectedGroup.description} />}
            <div className="card-columns">{listContent}</div>
        </div>
    );
};
export default GroupPage;
