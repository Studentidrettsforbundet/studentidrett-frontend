import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { clubInterface } from '../interfaces';
import image from './placeholder.png';

const ClubCard = (club: clubInterface) => {
    const location = useLocation();
    return (
        <Link to={location.pathname + '/' + club.name} key={club.id} className={'unstyled_link'}>
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title">{club.name}</h5>
                    <img className="card-img-top" src={image} alt="Club image"></img>
                </div>
            </div>
        </Link>
    );
};

export default ClubCard;
