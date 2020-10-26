import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { groupInterface } from '../interfaces';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import image from './placeholder.png';

const GroupCard = (group: groupInterface) => {
    const location = useLocation();
    const dispatch = useDispatch();
    return (
        <Link
            to={location.pathname + '/' + group.name}
            key={group.id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title card-header">{group.name}</h5>
                    <img className="card-img-top" src={image} alt="Club"></img>
                </div>
            </div>
        </Link>
    );
};

export default GroupCard;
