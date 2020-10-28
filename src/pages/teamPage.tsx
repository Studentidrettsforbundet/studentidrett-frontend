import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SearchBar from '../components/SearchBar/searchBar';
import SearchIcon from '../components/SearchBar/searchIcon';
import TeamCard from '../components/TeamCard/teamCard';
import { TEAM } from '../constants';
import { toggleSearchBarActionCreator } from '../store/searchBar/searchBarActions';
import { combinedStateInterface } from '../store/store';

interface urlParams {
    Region: string;
    Sport: string;
    Club: string;
}

const TeamPage = () => {
    const urlParams = useParams<urlParams>();
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    const listContent = reduxState.team.teams.map((entry) => {
        return TeamCard({
            id: entry.id,
            name: entry.name,
            full_capacity: entry.full_capacity,
            short_description: entry.short_description,
            long_description: entry.long_description,
            tryouts: entry.tryouts,
            registration_open: entry.registration_open,
            group: entry.group,
        });
    });

    return (
        <div className="container">
            <div className="row">
                <div className="col">
                    <h1>{urlParams.Club}</h1>
                </div>
                <div className="col search_icon-container">
                    <SearchIcon />
                </div>
            </div>
            <SearchBar typeOfSearch={TEAM} />
            <p>The sport has clubs in these cities: </p>
            {listContent}
        </div>
    );
};
export default TeamPage;
