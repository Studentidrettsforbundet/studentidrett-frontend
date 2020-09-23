import React, { useState, Props } from 'react'
import AreaList from '../components/AreaList'
import MockupDB, { IMockupDB } from '../services/MockupDB'
import { Area } from '../services/MockupDB'
import { City } from '../services/MockupDB'
import ClubList from '../components/ClubList'
import { useLocation } from 'react-router-dom'



function ClubPage() {

    let location = useLocation();
    console.log(location);

    var [currentClubPage, setClubPage] = useState(location.state);
    const clubs = MockupDB.Filters.City.Clubs

    function changeClubPage(club: string) {
        console.log(club);
        setClubPage(club);
    } 

    return (
        <div className="container">
            <h1>Clubpage</h1>
            <p> Current club page is: {currentClubPage}</p>
            <p> infor of club is: </p>
            <ClubList key={'clubList'} clubs={clubs} changeClubFunction={changeClubPage} />

        </div>
    );
}

export default ClubPage;
