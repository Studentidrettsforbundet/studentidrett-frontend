import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { regionInterface } from '../interfaces';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';

// See: https://getbootstrap.com/docs/4.0/components/card/

const RegionCard = ({ id, name, cities }: regionInterface) => {
    const dispatch = useDispatch();
    return (
        <Link to={name} key={id} className={'unstyled_link'} onClick={()=>dispatch(resetFetchStatusesActionCreator())}>
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title ">{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default RegionCard;
