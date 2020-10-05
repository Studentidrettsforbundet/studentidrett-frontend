import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import SportCard from '../components/sportCard';
import { combinedState } from '../store/store';

// See: https://getbootstrap.com/docs/4.0/components/card/

interface urlParams {
    Region: string;
}

const SportPage = () => {
    const sport = useSelector((state: combinedState) => state.sport);

    const regions = useParams<urlParams>();

    const listContent = sport.sports.map((entry) => {
        return SportCard({ id: entry.id, name: entry.name });
    });

    return (
        <div className="container">
            <h1>Sports</h1>
            <p>Chose sport in {regions.Region}: </p>
            {listContent}
        </div>
    );
};

export default SportPage;
