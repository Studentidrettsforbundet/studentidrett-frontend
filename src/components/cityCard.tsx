import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { regionInterface } from '../interfaces';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import image from './placeholder.png';

const CityCard = ({ id, name }: regionInterface) => {
    const location = useLocation();
    const dispatch = useDispatch();
    return (
        <Link to={location.pathname + '/' + name} key={id} className={'unstyled_link'} onClick={()=>dispatch(resetFetchStatusesActionCreator())}>
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default CityCard;
