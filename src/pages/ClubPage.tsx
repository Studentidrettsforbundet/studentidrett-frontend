import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router';
import List from '../components/oldList';
import MockupDB from '../services/MockupDB';
import '../styles/ClubOverview.css';

const ClubPage = () => {
    const params = useParams() as { clubSlug: string };
    const clubSlug = params.clubSlug;
    var [Database, setDatabase] = useState(MockupDB);
    const dispatch = useDispatch();
    return <div></div>;
    /** 
    return (
        <div className="overview">
            <h1>{`Club 1 with slug: ${clubSlug}`}</h1>
            <List key="teamList" listContent={Database.Teams} />
        </div>
    );
    */
};
export default ClubPage;
