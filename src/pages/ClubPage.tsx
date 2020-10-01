import React, { useState } from 'react';
import { useParams } from 'react-router';
import MockupDB from '../services/MockupDB';
import List from '../components/list';
import '../styles/ClubOverview.css';

const ClubPage = () => {
    const params = useParams() as { clubSlug: string };
    const clubSlug = params.clubSlug;
    var [Database, setDatabase] = useState(MockupDB);

    return (
        <div className="overview">
            <h1>{`Club 1 with slug: ${clubSlug}`}</h1>
            <List key="teamList" listContent={Database.Teams}/>
        </div>
    );
};
export default ClubPage;