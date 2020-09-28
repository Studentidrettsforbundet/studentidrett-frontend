import React, { useState, Props } from 'react'
import AreaList from '../components/AreaList'
import MockupDBONS, { IMockupDB } from '../services/MockupDB'
import { Area } from '../services/MockupDB'
import { City } from '../services/MockupDB'
import ClubList from '../components/ClubList'
import { useLocation } from 'react-router-dom'



function ClubPage() {

    let location = useLocation();
    console.log(location);

    var [currentClubPage, setClubPage] = useState(location.state);
    const clubs = MockupDBONS.Filters.City.Clubs

    function changeClubPage(club: string) {
        console.log(club);
        setClubPage(club);
    } 

    return (
        <div className="container">
            <h1>Clubpage</h1>
            <p> you filtered for: {currentClubPage}</p>
            <p> available clubs are: </p>
            <ClubList key={'clubList'} clubs={clubs} changeClubFunction={changeClubPage} />

        </div>
    );
}

export default ClubPage;
