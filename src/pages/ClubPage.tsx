import React, { useState, Props } from 'react'
import AreaList from '../components/AreaList'
import MockupDBONS, { IMockupDB } from '../services/MockupDBONS'
import { Area } from '../services/MockupDBONS'
import { City } from '../services/MockupDBONS'
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
            <p> Current club page is: {currentClubPage}</p>
            <p> infor of club is: </p>
            <ClubList key={'clubList'} clubs={clubs} changeClubFunction={changeClubPage} />

        </div>
    );
}

export default ClubPage;
