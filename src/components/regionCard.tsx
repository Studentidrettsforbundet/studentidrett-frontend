import React from 'react';
import { Link } from 'react-router-dom';
import { regionInterface } from '../interfaces';

const RegionCard = ({ id, name }: regionInterface) => {
    return (
        <Link to={'/' + name}>
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default RegionCard;
