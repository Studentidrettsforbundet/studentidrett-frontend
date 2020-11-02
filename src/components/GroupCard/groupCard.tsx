import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { groupInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
import { card, cardImg } from '../../styles/card';
import { groupCard, scrollCardHeader, scrollCardBody, scrollCardParagraph} from './styles';
import {classes} from 'typestyle';

const GroupCard = (group: groupInterface) => {
    const location = useLocation();
    const dispatch = useDispatch();
    return (
        <Link
            to={`/groups/${group.id}`}
            key={group.id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
            <div className={classes(card, groupCard)}>
                    <img className={cardImg} src={image} alt="Club"></img>
                <div className={scrollCardBody}>
                    <div className={scrollCardHeader}>
                        {group.name}
                    </div>
                    <div className={scrollCardParagraph}>
                        {group.description.slice(0,75)} ...
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GroupCard;
