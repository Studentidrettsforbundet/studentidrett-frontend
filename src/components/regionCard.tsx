import React from 'react';
import { Link } from 'react-router-dom';
import { regionInterface } from '../interfaces';

// See: https://getbootstrap.com/docs/4.0/components/card/

const RegionCard = ({ id, name }: regionInterface) => {
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
