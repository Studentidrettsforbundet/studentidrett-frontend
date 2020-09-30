import React, { useState } from 'react';
import List from '../components/list';
import MockupDB, { IMockupDB, } from '../services/MockupDB';
import { useLocation } from 'react-router-dom';

const RegionPage = () => {
    var [Database, setDatabase] = useState(MockupDB);
    return (
        <div className="container">
            <h1>Regions</h1>
            <p>Choose a region </p>
            <List key="RegionList" listContent={Database.Regions}/>
        </div>
    );
}

export default RegionPage;