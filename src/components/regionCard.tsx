import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { SPORT } from '../constants';
import { regionInterface } from '../interfaces';
import { simpleSearch } from '../services/api';

// See: https://getbootstrap.com/docs/4.0/components/card/

const RegionCard = ({ id, name }: regionInterface) => {
    useEffect(() => {
        simpleSearch('', SPORT).then((result) => console.log(result));
    }, []);

    return (
        <Link to={name} key={id} className={'unstyled_link'}>
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title ">{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default RegionCard;
