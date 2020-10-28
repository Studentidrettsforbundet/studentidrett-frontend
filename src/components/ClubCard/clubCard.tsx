import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { clubInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
import { card, cardBody, cardHeader, cardImg } from '../../styles/card';

const ClubCard = (club: clubInterface) => {
    const location = useLocation();
    const dispatch = useDispatch();
    return (
        <Link
            to={location.pathname + '/' + club.name}
            key={club.id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
            <div className={card}>
                <div>
                    <img className={cardImg} src={image} alt="Club" />
                </div>
                <div className={cardBody}>
                    <div className={cardHeader}>
                        <h3>{club.name}</h3>
                    </div>
                    <p>{club.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ClubCard;
