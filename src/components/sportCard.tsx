import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { sportInterface } from '../interfaces';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import image from './placeholder.png';

const SportCard = ({ id, name }: sportInterface) => {
    const location = useLocation();
    const dispatch = useDispatch();
    return (
        <Link to={location.pathname + '/' + name} key={id} className={'unstyled_link'} onClick={()=>dispatch(resetFetchStatusesActionCreator())}>
            <div className="card Sport">
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <img className="card-img-top" src={image} alt="Sport"></img>
                </div>
            </div>
        </Link>
    );
};

export default SportCard;
