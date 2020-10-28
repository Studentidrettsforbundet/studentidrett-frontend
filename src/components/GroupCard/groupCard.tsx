import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import { groupInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
import { card, cardBody, cardImg, cardTitle } from '../../styles/card';

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
            <div className={card}>
                <div className={cardBody}>
                    <img className={cardImg} src={image} alt="Club"></img>
                    <h5 className={cardTitle}>{group.name}</h5>
                    <div>
                        <p>{group.description}</p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default GroupCard;
