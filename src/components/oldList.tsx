import React from 'react';
import RegionListElement from './regionListElement';
import SportListElement from './sportListElement';
import CityListElement from './cityListElement';
import ClubListElement from './clubListElement';
import TeamListElement from './teamListElement';
import { cityInterface, clubInterface, regionInterface, sportInterface, teamInterface } from '../interfaces';

/**
 * List takes in an array of database objects to be rendered and their type.
 * */
const OldList = (props: any) => {
    const listContent = 'Hello';
    return (
        <div key="list" className="List">
            <ul> {listContent} </ul>
        </div>
    );
};

export default OldList;

/**
 * const List = (props: ListProps) => {
    let listContent = props.listContent.map((entry) => {
        switch (entry.type) {
            case 'REGION': {
                return RegionListElement({ region: entry });
            }
            case 'CITY': {
                return CityListElement({ city: entry });
            }
            case 'SPORT': {
                return SportListElement({ sport: entry });
            }
            case 'CLUB': {
                return ClubListElement({ club: entry });
            }
            case 'TEAM': {
                return TeamListElement({ team: entry });
            }
            default: {
                return <div>empty </div>;
            }
        }
    });
    return (
        <div key="list" className="List">
            <ul> {listContent} </ul>
        </div>
    );
};
 */
