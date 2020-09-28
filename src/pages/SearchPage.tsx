import React, { useState } from 'react'
import AreaList from '../components/AreaList'
import MockupDB, { IMockupDB, Area, City } from '../services/MockupDB'
import ClubList from '../components/ClubList'
import CityList from '../components/CityList';


const SearchPage = () => {
    var [Database, setDatabase] = useState(MockupDB);
    var [area, setAreaName] = useState(Database.Filters.Area);
 
    function changeArea(area: Area) {
        console.log(area);
        setAreaName(area);
    } 

    return (

        <div className="container">
            <h1>searchpage</h1>
            <p> you filtered for {area.Name}</p>
            <AreaList key="areaList" Areas={Database.Areas} changeAreaNameFunction={changeArea} />
            <CityList key="cityList" cities={area.Cities} />


        </div>
    );
}


export default SearchPage;
//<ClubList {...clubs} />