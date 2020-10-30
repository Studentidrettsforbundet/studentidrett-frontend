import React, { useState } from 'react';
import { regionInterface } from '../../interfaces';
import CityCard from '../CityCard/cityCard';
import { cardBody, cardTitle, regionCard } from '../../styles/card';

// See: https://getbootstrap.com/docs/4.0/components/card/

const RegionCard = ({ id, name, cities }: regionInterface) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <div className={regionCard} key={id} onClick={() => toggleExpanded()}>
            <div className={cardBody}>
                <h5 className={cardTitle}>{name}</h5>
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
