import React, { useState } from 'react';
import List from '../components/list';
import MockupDB, { IMockupDB } from '../services/MockupDB';
import { useDispatch } from 'react-redux';
import { setRegionActionCreator } from '../store/pages/region/regionActions';

const RegionPage = () => {
    const dispatch = useDispatch();
    var [Database, setDatabase] = useState(MockupDB);
    return (
        <div className="container">
            <h1>Regions</h1>
            <p>Choose a region </p>
            <List key="RegionList" listContent={Database.Regions} />
            <button onClick={() => dispatch(setRegionActionCreator([{ id: 1, name: 'Trondheim' }]))}>Regions</button>
        </div>
    );
};

export default RegionPage;
