import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import TeamCard from '../components/teamCard';
import { TEAM } from '../constants';
import { fetchDataThunk } from '../services/api';
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

    useEffect(() => {
        if (!reduxState.thunk.fetch_in_progress && reduxState.thunk.fetch_failed_count < 3 && !reduxState.thunk.fetch_success) {
            dispatch(fetchDataThunk(TEAM));
        }
      });

    

    const listContent = reduxState.team.teams.map((entry) => {
        return (<TeamCard id={entry.id} name={entry.name}
            full_capacity={ entry.full_capacity} 
            short_description = {entry.short_description}
            long_description = {entry.long_description}
            tryouts= {entry.tryouts}
            registration_open={entry.registration_open}
            group={entry.group} key={entry.id}/>)
        });
       
   

    return (
        <div className="container">
            <h1>{urlParams.Club}</h1>
            {listContent}
        </div>
    );
};
export default TeamPage;
