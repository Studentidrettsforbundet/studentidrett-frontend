import React, { useState } from 'react';
import { regionInterface } from '../../interfaces';
import CityCard from '../CityCard/cityCard';
import { regionCard } from './styles';

const RegionCard = ({ id, name, cities }: regionInterface): JSX.Element => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={regionCard} key={id} onClick={() => toggleExpanded()}>
            <div>
                <h5 className="boldText">{name}</h5>
                {expanded ? (
                    cities.map((entry) => {
                        return (
                            <CityCard
                                id={entry.id}
                                name={entry.name}
                                region={entry.region}
                                clubs={entry.clubs}
                                key={entry.id}
                            />
                        );
                    })
                ) : (
                    <div></div>
                )}
            </div>
        </div>
    );
};

export default RegionCard;
