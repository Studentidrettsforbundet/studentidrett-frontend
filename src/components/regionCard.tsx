import React, { useState } from 'react';
import { regionInterface } from '../interfaces';
import CityCard from './cityCard';

// See: https://getbootstrap.com/docs/4.0/components/card/

const RegionCard = ({ id, name, cities }: regionInterface) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className="card Region" key={id} onClick={() => toggleExpanded()}>
            <div className="card-body">
                <h5 className="card-title ">{name}</h5>
                {expanded ? (
                    cities.map((entry) => {
                        return (
                            <CityCard
                                id={entry.id}
                                name={entry.name}
                                region={entry.region}
                                clubs={entry.clubs}
                            ></CityCard>
                        );
                    })
                ) : (
                    <p />
                )}
            </div>
        </div>
    );
};

export default RegionCard;
