import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { groupInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
<<<<<<< HEAD
import { card, cardFooter, cardImg } from '../../styles/card';
import { cardHeader, cardBody, } from './styles';
import { clubCard } from '../ClubCard/styles';
import {classes} from 'typestyle';
=======
import { card, cardBody, imgContainer, cardImg, cardTitle } from '../../styles/card';
>>>>>>> 33da53954e88e925d7bf533bdc2cb2487aa189ed

const GroupCard = (group: groupInterface): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/groups/${group.id}`}
            key={group.id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
<<<<<<< HEAD
            <div className={classes(card, clubCard)}>
                    <img className={cardImg} src={image} alt="Club"></img>
                <div className={cardBody}>
                    <div className={cardHeader}>
                        {group.name}
                    </div>
                    <p>{group.description.slice(0,115)} ...</p>
=======
            <div className={card}>
                <div className={imgContainer}>
                    <img className={cardImg} src={image} alt="Group"></img>
                </div>
                <div className={cardBody}>
                    <h5 className={cardTitle}>{group.name}</h5>
                    <p>
                        {group.description.length > 115 ? group.description.slice(0, 115) + '...' : group.description}
                    </p>
>>>>>>> 33da53954e88e925d7bf533bdc2cb2487aa189ed
                </div>
            </div>
        </Link>
    );
};

export default GroupCard;
