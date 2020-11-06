import React from 'react';
import image from '../../assets/placeholder.png';
import {coverImage, } from './styles'

//TODO: make some of these not-required
interface IClubInfo {
    title: string;
    cover_photo?: string;
    description: string;
}

const GroupInfo = (props: IClubInfo) => {
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            <img className={coverImage} alt={props.title} src={image}/>
            <br/>
            <p>{props.description}</p> 
        </React.Fragment>
    );
};

export default GroupInfo;
