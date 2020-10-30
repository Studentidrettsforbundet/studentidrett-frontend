import React from 'react';
import image from '../../assets/placeholder.png';
import { cardImg, infoStyle } from '../../styles/card';

//TODO: make some of these not-required
interface IClubInfo {
    title: string;
    cover_photo?: string;
    description: string;
}

const GroupInfo = (props: IClubInfo): JSX.Element => {
    return (
        <div className={infoStyle}>
            <div>
                <img className={cardImg} alt={props.title} src={image} />
            </div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default GroupInfo;
