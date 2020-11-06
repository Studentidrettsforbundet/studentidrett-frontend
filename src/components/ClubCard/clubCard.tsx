import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { clubInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
import { card, cardBody, cardTitle, cardImg, imgContainer } from '../../styles/card';
import {toggleSearchBarActionCreator} from "../../store/searchBar/searchBarActions";

const ClubCard = (club: clubInterface): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/clubs/${club.id}`}
            key={club.id}
            className={'unstyled_link'}
            onClick={() => {
                dispatch(toggleSearchBarActionCreator(false));
                dispatch(resetFetchStatusesActionCreator());
            }}
        >
            <div className={card}>
                <div className={imgContainer}>
                    <img className={cardImg} src={image} alt="Club" />
                </div>
                <div className={cardBody}>
                    <h5 className={cardTitle}>{club.name}</h5>
                    <p>{club.description.length > 115 ? club.description.slice(0, 115) + '...' : club.description}</p>
                </div>
            </div>
        </Link>
    );
};

export default ClubCard;
