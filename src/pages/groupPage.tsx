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
import { urlBuilderFilterData } from '../services/urlBuilders';

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
            dispatch(fetchDataThunk(TEAM, urlBuilderFilterData(TEAM, [{ cardType: GROUP, id_or_name: urlParams.id }])));
            dispatch(fetchDetailThunk(GROUP, urlParams.id));
        }
    });

    const listContent = reduxState.team.teams.map((entry) => {
        return (
            <TeamCard
                {...{
                    id: entry.id,
                    name: entry.name,
                    short_description: entry.short_description,
                    gender: entry.gender,
                    skill_level: entry.skill_level,
                    availability: entry.availability,
                }}
                key={entry.id}
            />
        );
    });

    const selectedGroup = reduxState.group_detail.group;

    console.log(listContent);

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
