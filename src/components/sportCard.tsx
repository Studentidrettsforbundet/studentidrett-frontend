import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { sportInterface } from '../interfaces';
import image from './placeholder.png';

const SportCard = ({ id, name }: sportInterface) => {
    const location = useLocation();
    return (
        <Link to={location.pathname + '/' + name} key={id} className={'unstyled_link'}>
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
