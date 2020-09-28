import React, { useState } from 'react'
import List from '../components/List'
import MockupDB, { IMockupDB, } from '../services/MockupDB'

const SportPage = () => {
    var [Database, setDatabase] = useState(MockupDB);
    return (

        <div className="container">
            <h1>Sports</h1>
            <List key="SportList" listContent={Database.Sports} type="Sport"/>

        </div>
    );
}


export default SportPage;