import React, { useState } from 'react';
import { regionInterface } from '../../interfaces';
import CityCard from '../CityCard/cityCard';
import { cardBody, cardTitle,  } from '../../styles/card';
import {regionCard} from './styles'

// See: https://getbootstrap.com/docs/4.0/components/card/

const RegionCard = ({ id, name, cities }: regionInterface) => {
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
                            />
                        );
                    })
                ) : (<div></div>
                )}
            </div>
        </div>
    );
};

export default RegionCard;
