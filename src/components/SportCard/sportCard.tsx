import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import { sportCard } from './styles'
import { cardBody, cardTitle } from '../../styles/card';
import { sportInterface } from '../../interfaces';


const SportCard = ({ id, name }: sportInterface): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/sports/${id}`}
            key={id}
            className={'unstyled_link'}
            onClick={() => {
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
