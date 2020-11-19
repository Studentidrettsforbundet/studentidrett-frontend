import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import { cityInterface } from '../../interfaces';
import { secondaryCard } from './styles';

const CityCard = ({ id, name, region, clubs }: cityInterface): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/cities/${id}`}
            key={id}
            className={'unstyled_link'}
            onClick={() => {
                dispatch(resetFetchStatusesActionCreator());
            }}
        >
            <div className={secondaryCard}>
                <h5>{name}</h5>
            </div>
        </Link>
    );
};

export default CityCard;
