import React from 'react';
import './TeamInfo.css';

const ClubInfo = (props: { name: string; img: string; text: string }) => {
    return (
        <div className="info">
            <h1>{props.name}</h1>
            <img className="teamImg" src={require(`../../assets/${props.img}.png`)} alt="team img" />
            <p>{props.text}</p>
        </div>
    );
};
export default ClubInfo;
