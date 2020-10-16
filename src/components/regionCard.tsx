import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { regionInterface } from '../interfaces';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import CityCard from './cityCard';

// See: https://getbootstrap.com/docs/4.0/components/card/

const RegionCard = ({ id, name, cities }: regionInterface) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const dispatch = useDispatch();
    return (
        <div className="card Region" key={id} onClick={() => toggleExpanded()}>
            <div className="card-body">
                <h5 className="card-title ">{name}</h5>
                {expanded ? (cities.map((entry) => {
                    return <CityCard id={entry.id} name={entry.name} region={entry.region} clubs={entry.clubs}>);
                )
                ) : ( <p/>
                    )}
            </div>
        </div>
    );
};

export default RegionCard;
