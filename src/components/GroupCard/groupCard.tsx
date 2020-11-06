import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { groupInterface } from '../../interfaces';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import image from '../../assets/placeholder.png';
import { card, cardBody, imgContainer, cardImg, cardTitle } from '../../styles/card';
import {toggleSearchBarActionCreator} from "../../store/searchBar/searchBarActions";

const GroupCard = (group: groupInterface): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <Link
            to={`/groups/${group.id}`}
            key={group.id}
            className={'unstyled_link'}
            onClick={() => {
                dispatch(toggleSearchBarActionCreator(false));
                dispatch(resetFetchStatusesActionCreator());
            }}
        >
            <div className={card}>
                <div className={imgContainer}>
                    <img className={cardImg} src={image} alt="Group"></img>
                </div>
                <div className={cardBody}>
                    <h5 className={cardTitle}>{group.name}</h5>
                    <p>
                        {group.description.length > 115 ? group.description.slice(0, 115) + '...' : group.description}
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default GroupCard;
