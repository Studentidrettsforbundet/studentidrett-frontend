import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/regionCard';
import { REGION, SPORT } from '../constants';
import { simpleSearch } from '../services/api';
import { fetchAndUpdate } from '../services/services';

const RegionPage = () => {
    const regions = useSelector((state: combinedStateInterface) => state.region);

    const listContent = regions.regions.map((entry) => {
        return RegionCard({ id: entry.id, name: entry.name });
    });
    let fetchData = null;

    fetchAndUpdate(REGION);

    return (
        <div className="container">
            <h1>Regions</h1>
            <p>Choose a region </p>
            {listContent}
        </div>
    );
};

export default RegionPage;
