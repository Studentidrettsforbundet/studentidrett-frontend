import React from 'react';
import image from '../../assets/placeholder.png';
import { card, cardBody, imgContainer, cardImg, cardTitle } from '../../styles/card';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { InfoList } from '../TeamInfo/infoList';
import { teamInterface } from '../../interfaces';

const TeamCard = ({ id, name, short_description, gender, availability, skill_level }: teamInterface): JSX.Element => {
    const dispatch = useDispatch();

    return (
        <Link
            to={`/teams/${id}`}
            key={id}
            className={'unstyled_link'}
            onClick={() => {
                dispatch(resetFetchStatusesActionCreator());
            }}
        >
            <div className={card} key={id}>
                <div className={imgContainer}>
                    <img className={cardImg} src={image} alt="Team"></img>
                </div>
                <div className={cardBody}>
                    <h5 className={cardTitle}>{name}</h5>
                    <InfoList availability={availability} gender={gender} skill_level={skill_level} />
                    <p>{short_description}</p>
                </div>
            </div>
        </Link>
    );
};

export default TeamCard;
