import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cityInterface } from '../interfaces';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';

const CityCard = ({ id, name, region, clubs }: cityInterface) => {
    const dispatch = useDispatch();
    return (
        <Link
            to={'/' + name}
            key={id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
            <div className="card city">
                <div className="card-body secondary_card">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default CityCard;
