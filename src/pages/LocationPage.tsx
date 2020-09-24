import React, { useState } from 'react'
import List from '../components/List'
import MockupDB, { IMockupDB, } from '../services/MockupDB'


function LocationPage({ match }:any) {
    var [Database, setDatabase] = useState(MockupDB);
    console.log(match);

    return (

        <div className="container">
            <h1>Locations</h1>
            <List key="LocationList" listContent={Database.Locations} type="Location"/>

        </div>
    );
}


export default LocationPage;