import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { regionInterface } from '../interfaces';
import { setSelectedRegionActionCreator } from '../store/pages/region/regionActions';

const CityCard = ({ id, name }: regionInterface) => {
    const dispatch = useDispatch();
    return (
        <Link to={'/' + name} key={id} onClick={() => dispatch(setSelectedRegionActionCreator({ id, name }))}>
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default CityCard;
