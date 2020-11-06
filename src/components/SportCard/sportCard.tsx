import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { sportInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
import { card, cardBody, imgContainer, cardImg, cardTitle } from '../../styles/card';
import {sportCard} from './styles'
import {toggleSearchBarActionCreator} from "../../store/searchBar/searchBarActions";

const SportCard = ({ id, name }: sportInterface): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/sports/${id}`}
            key={id}
            className={'unstyled_link'}
            onClick={() => {
                dispatch(toggleSearchBarActionCreator(false));
                dispatch(resetFetchStatusesActionCreator());
            }}
        >
            <div className={sportCard} key={id}>
                <div className={cardBody}>
                    <h5 className={cardTitle}>{name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default SportCard;
