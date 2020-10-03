import React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import SportCard from '../components/sportCard';
import { combinedState } from '../store/store';

const SportPage = () => {
    const sport = useSelector((state: combinedState) => state.sport);

    let listContent = sport.sports.map((entry) => {
        return SportCard({ id: entry.id, name: entry.name });
    });

    return (
        <div className="container">
            <h1>Sports</h1>
            <p>Chose sport: {useLocation().state} </p>
            {listContent}
        </div>
    );
};

export default SportPage;
