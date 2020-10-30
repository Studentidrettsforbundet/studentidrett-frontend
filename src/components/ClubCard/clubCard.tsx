import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { clubInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
import { card, cardImg } from '../../styles/card';
import { clubCard, cardHeader, cardBody} from './styles';
import {classes} from 'typestyle';

const ClubCard = (club: clubInterface) => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/clubs/${club.id}`}
            key={club.id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
            <div className={classes(card, clubCard)}>
                    <img className={cardImg} src={image} alt="Club" />
                <div className={cardBody}>
                    <div className={cardHeader}>
                        {club.name}
                    </div>
                    <p>{club.description.slice(0,115)} ...</p>
                </div>
            </div>
        </Link>
    );
};

export default ClubCard;
