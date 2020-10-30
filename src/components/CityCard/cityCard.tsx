import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { cityInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import { secondaryCard } from '../../styles/card';

const CityCard = ({ id, name, region, clubs }: cityInterface) => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/cities/${id}`}
            key={id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
            <div className={secondaryCard}>
                <div>
                    <h5>{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default CityCard;
