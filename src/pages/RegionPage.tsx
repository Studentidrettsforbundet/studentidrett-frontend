import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { combinedState } from '../store/store';
import RegionCard from '../components/regionCard';

const RegionPage = () => {
    const regions = useSelector((state: combinedState) => state.region);

    let listContent = regions.regions.map((entry) => {
        return RegionCard({ id: entry.id, name: entry.name });
    });

    return (
        <div className="container">
            <h1>Regions</h1>
            <p>Choose a region </p>
            {listContent}
        </div>
    );
};

export default RegionPage;
