import React, { useState, Props } from 'react';
import { useLocation } from 'react-router-dom';
import MockupDB from '../services/MockupDB';
import List from '../components/list';

const CityPage = () => {

    let location = useLocation();
    var [Database, setDatabase] = useState(MockupDB.Cities)

    return (
        <div className="container">
            <h1>Cities</h1>
            <p> you filtered for: {location.state}</p>
            <p> available clubs are: </p>
            <List key='cityList' listContent={Database} />

        </div>
    );
}

export default CityPage;
