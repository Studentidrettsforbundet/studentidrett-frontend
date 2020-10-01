import React from 'react';
import RegionListElement from './regionListElement';
import SportListElement from './sportListElement';
import CityListElement from './cityListElement';
import ClubListElement from './clubListElement';
import TeamListElement from './teamListElement';
import { Region, Sport, City, Club, Team } from '../services/MockupDB';

type ListProps = {
    listContent: Array<Region | Sport | City | Club | Team>;
};

/**
 * List takes in an array of database objects to be rendered and their type.
 * */
const List = (props: ListProps) => {
    let listContent = props.listContent.map((entry) => {
        if (entry.type === 'REGION') {
            console.log(entry.type);
            return RegionListElement({ region: entry });
        } else if (entry.type === 'CITY') {
            return CityListElement({ city: entry });
        } else if (entry.type === 'SPORT') {
            return SportListElement({ sport: entry });
        } else if (entry.type === 'CLUB') {
            return ClubListElement({ club: entry });
        } else if (entry.type === 'TEAM') {
            return TeamListElement({ team: entry });
        } else {
            return <div>empty </div>;
        }
    });
    return (
        <div key="list" className="List">
            <ul> {listContent} </ul>
        </div>
    );
};

export default List;
