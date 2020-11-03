import React from 'react';
import image from '../../assets/placeholder.png';
import {dateInterface} from "../../interfaces";
import {coverImage} from '../GroupInfo/styles'

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

const TeamInfo = (props: ITeamInfo) => {
    return (
        <React.Fragment>
            <h1>{props.name}</h1>
            <div>
                <img className={coverImage} alt={props.name} src={image} />
            </div>
            <br/>
            <p>{props.long_description}</p>
        </React.Fragment>
    );
};

export default TeamInfo;
