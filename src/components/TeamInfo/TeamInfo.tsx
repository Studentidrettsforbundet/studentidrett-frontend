import React, { useState } from 'react';
import './TeamInfo.css';

const ClubInfo = (props: { name: string; img: string; text: string, showInfo: Function }) => {
    
    var [showInfo, setShowInfo] = useState(false);

    if (showInfo == true) {
        return (
            <div className="info">
                <h1>{props.name}</h1>
                <img className="teamImg" src={require(`../../assets/${props.img}.png`)} alt="team img" />
                <p>{props.text}</p>
                <button onClick={() => setShowInfo(false)}> show less </button>
            </div>);
        }
    return (
        <div className="info">
            <h1>{props.name}</h1>
            <img className="teamImg" src={require(`../../assets/${props.img}.png`)} alt="team img" />
            <button onClick={() => setShowInfo(true)}> show more </button>
        </div>
    );
};
export default ClubInfo;
