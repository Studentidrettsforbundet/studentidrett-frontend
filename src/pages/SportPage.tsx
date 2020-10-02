import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import List from '../components/list';
import MockupDB from '../services/MockupDB';

const SportPage = () => {
    var [Database, setDatabase] = useState(MockupDB);
    const dispatch = useDispatch();
    return (
        <div className="container">
            <h1>Sports</h1>
            <p>Chose region: {useLocation().state} </p>
            <List key="SportList" listContent={Database.Sports} />
        </div>
    );
};

export default SportPage;
