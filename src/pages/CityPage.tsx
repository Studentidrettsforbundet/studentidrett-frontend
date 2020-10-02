import React, { useState, Props } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import List from '../components/oldList';
import MockupDB from '../services/MockupDB';

const CityPage = () => {
    let location = useLocation();
    var [Database, setDatabase] = useState(MockupDB.Cities);
    const dispatch = useDispatch();
    return <div></div>;
    /** 
    return (
        <div className="container">
            <h1>Cities</h1>
            <p> you filtered for: {location.state}</p>
            <p> available clubs are: </p>
            <List key="cityList" listContent={Database} />
        </div>
    );
    */
};

export default CityPage;
