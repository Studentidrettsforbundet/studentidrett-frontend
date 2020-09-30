import React from 'react'
import RegionListElement from './regionListElement'
import SportListElement from './sportListElement'
import CityListElement from './cityListElement'
import ClubListElement from './clubListElement'
import TeamListElement from './teamListElement'
import { Region, Sport, City, Club, Team } from '../services/MockupDB'

type ListProps = {
    listContent: Array<Region | Sport | City | Club | Team>,
}

function isRegion(object: any): object is Region {
    return true;
}
function isSport(object: any): object is Sport {
    return true;
}

function isCity(object: any): object is City {
    return true;
}
function isClub(object: any): object is Club {
    return true;
}
function isTeam(object: any): object is Team {
    return true;
}

/**
 * List takes in an array of database objects to be rendered and their type.
 * */
const List = (props: ListProps) => {  
    let listContent = props.listContent.map(entry => {
        if (isRegion(entry)) {
            return RegionListElement({ region: entry })
        } else if (isCity(entry)) {
            return CityListElement({ city: entry })
        } else if (isSport(entry)) {
            return SportListElement({ sport: entry })
        } else if (isClub(entry)) {
            return ClubListElement({ club: entry })
        } else if (isTeam(entry)) {
            return TeamListElement({ team: entry })
        } else {
            return <div>empty </div>
        }
    }); 
    return (
        <div key='list' className="List">
            <ul> {listContent} </ul>

        </div>
    );
}

export default List;