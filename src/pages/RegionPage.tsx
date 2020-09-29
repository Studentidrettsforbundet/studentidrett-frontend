import React, { useState } from 'react'
import List from '../components/List'
import MockupDB, { IMockupDB, } from '../services/MockupDB'

const RegionPage = ({ match }:any) => {
    var [Database, setDatabase] = useState(MockupDB);
    console.log(match);

    return (
        <div className="container">
            <h1>Regions</h1>
            <List key="RegionList" listContent={Database.Locations} type="Location"/>
        </div>
    );
}

export default RegionPage;