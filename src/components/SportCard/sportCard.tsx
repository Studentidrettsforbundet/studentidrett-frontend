import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { sportInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
import { card, cardImg } from '../../styles/card';
import {clubCard, cardHeader, cardBody} from '../ClubCard/styles'
import {classes} from 'typestyle'

const SportCard = ({ id, name }: sportInterface) => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/sports/${id}`}
            key={id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
            <div className={classes(card, clubCard)}>
                <div className={cardBody}>
                    <div className={cardHeader}>{name}</div>
                </div>
            </div>
        </Link>
    );
};

export default SportCard;
