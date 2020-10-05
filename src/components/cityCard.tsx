import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { regionInterface } from '../interfaces';

const CityCard = ({ id, name }: regionInterface) => {
    const location = useLocation();
    return (
        <Link to={location.pathname + '/' + name} key={id} className={'unstyled_link'}>
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default CityCard;
