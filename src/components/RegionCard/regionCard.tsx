import React, { useState } from 'react';
import { Card } from 'react-bootstrap'
import CityCard from '../CityCard/cityCard';
import { regionInterface } from '../../interfaces';
import {regionCard} from './styles'

// See: https://getbootstrap.com/docs/4.0/components/card/

const RegionCard = ({ id, name, cities }: regionInterface) => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (

        <Card className={regionCard} key={id} onClick={() => toggleExpanded()}>
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
                ) : ( <React.Fragment/>
                )}
        </Card>
    );
};

export default RegionCard;
