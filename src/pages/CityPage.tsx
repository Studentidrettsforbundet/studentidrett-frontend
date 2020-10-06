import React from 'react';
import { useSelector } from 'react-redux';
import CityCard from '../components/cityCard';
import { combinedStateInterface } from '../store/store';

const CityPage = () => {
    const city = useSelector((state: combinedStateInterface) => state.city);

    const listContent = city.cities.map((entry) => {
        return CityCard({ id: entry.id, name: entry.name });
    });

    return (
        <div className="container">
            <h1>Cities</h1>
            <p>The sport has clubs in these cities: </p>
            {listContent}
        </div>
    );
};

export default CityPage;
