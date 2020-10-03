import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { regionInterface, sportInterface } from '../interfaces';
import { regionInitialState } from '../store/pages/region/regionReducer';
import { setSelectedSportActionCreator } from '../store/pages/sport/sportActions';
import { combinedState } from '../store/store';

const SportCard = ({ id, name }: sportInterface) => {
    const location = useSelector((state: combinedState) => state.region.selectedRegion);

    const dispatch = useDispatch();
    return (
        <Link
            to={location.name + '/' + name}
            key={id}
            onClick={() => dispatch(setSelectedSportActionCreator({ id, name }))}
        >
            <div className="card Sport">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default SportCard;
