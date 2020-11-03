import React, { useState } from 'react';
import { teamInterface } from '../../interfaces';
import image from '../../assets/placeholder.png';
import { card,cardFooter, cardImg,  } from '../../styles/card';
import { clubCard, cardHeader, cardBody } from '../ClubCard/styles'
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import {classes} from 'typestyle';

interface teamCardInterface {
    id: number;
    name: string;
    short_description: string | null;
    gender: string;
    skill_level: string;
    availability: string;
}

const TeamCard = ({ id, name, short_description, gender, availability, skill_level }: teamCardInterface) => {
    const [expanded, setExpanded] = useState(false);
    const dispatch = useDispatch();

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Link
            to={`/teams/${id}`}
            key={id}
            className={'unstyled_link'}
            onClick={() => dispatch(resetFetchStatusesActionCreator())}
        >
            <div className={classes(card, clubCard)}>
                <img className={cardImg} src={image} alt="Team" />
                <div className={cardBody}>
                    <div className={cardHeader}>
                        {name}
                    </div>
                    <p>
                        <span className="boldText">Nivå: </span>
                        <span>{skill_level}</span>
                        <br/>
                        <span className="boldText">Åpent/Opptakk: </span>
                        <span>{availability} </span>
                        <br/>
                        <span className="boldText">Kjønn: </span>
                        <span>{gender}</span>
                    </p>
                    <p>{short_description}</p>
                </div>
            </div>
        </Link>
    );
};

export default TeamCard;
