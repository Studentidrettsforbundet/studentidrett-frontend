import React, { useState } from 'react';
import { useParams } from 'react-router';
import TeamListElement from '../components/teamListElement';
import '../styles/ClubOverview.css';
import MockupDB from '../services/MockupDB';
import List from '../components/list';

const ClubPage = () => {
    const params = useParams() as { clubSlug: string };
    const clubSlug = params.clubSlug;
    var [Database, setDatabase] = useState(MockupDB);

    return (
        <div className="overview">
            <h1>{`Club 1 with slug: ${clubSlug}`}</h1>
            <p>{ }</p>
            <List key="clubList" listContent={Database.Teams}/>
        </div>
    );
};
export default ClubPage;