import React from 'react';
import image from '../../assets/placeholder.png';
import { dateInterface } from '../../interfaces';

import { cardBody, cardImg } from '../../styles/card';
import { teamInfo } from './styles';
import { InfoList } from './infoList';
import { LinkList } from './linkList';

//TODO: make some of these not-required
interface ITeamInfo {
    availability: string;
    cost: string | null;
    equipment: string | null;
    facebook_link: string | null;
    gender: string;
    image: string | null;
    instagram_link: string | null;
    long_description: string;
    name: string;
    schedule: dateInterface[];
    tryout_dates: dateInterface[];
    webpage: string | null;
    season: string | null;
    short_description: string | null;
    skill_level: string;
}

const TeamInfo = ({
    name,
    availability,
    gender,
    skill_level,
    long_description,
    facebook_link,
    instagram_link,
    webpage,
}: ITeamInfo): JSX.Element => {
    return (
        <div className={teamInfo}>
            <div className={cardBody}>
                <img className={cardImg} alt={name} src={image} />
            </div>
            <div>
                <h1>{name}</h1>
            </div>
            <div>
                <InfoList availability={availability} gender={gender} skill_level={skill_level} />
                <p>{long_description}</p>
                <LinkList facebook_link={facebook_link} instagram_link={instagram_link} webpage={webpage} />
            </div>
        </div>
    );
};

export default TeamInfo;
