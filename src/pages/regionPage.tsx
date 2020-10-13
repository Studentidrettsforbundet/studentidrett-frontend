import React from 'react';
import { useSelector } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/regionCard';

/* TODO
 * Show list of cities categorized by region.
 * RegionCard should contain cityCards.
 * CityCards should link to "/:City"
 */

const RegionPage = () => {
    const regions = useSelector((state: combinedStateInterface) => state.region);

    const listContent = regions.regions.map((entry) => {
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
