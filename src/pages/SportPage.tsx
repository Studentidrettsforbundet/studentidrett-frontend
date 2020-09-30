import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import List from '../components/list';
import MockupDB, { IMockupDB, } from '../services/MockupDB';

const SportPage = () => {
    var [Database, setDatabase] = useState(MockupDB);
    return (
        <div className="container">
            <h1>Sports</h1>
            <p>Chose region: {useLocation().state} </p>
            <List key="SportList" listContent={Database.Sports}/>
        </div>
    );
}

export default SportPage;