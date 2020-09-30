import React, { useState } from 'react';
import '../styles/TeamInfo.css';
import { Team } from '../services/MockupDB';

type TeamListElementProps = {
    team: Team,
}

const TeamListElement = (teamProps: TeamListElementProps) => {
    
    var [showInfo, setShowInfo] = useState(false);

    return (
        <div className="info">
            <h1>{teamProps.team.Name}</h1>
            <img className="teamImg" src={require(`../assets/${teamProps.team.Img}.png`)} alt="team img" />
            {showInfo
                ? <><p>{teamProps.team.Text}</p>
                    <button onClick={() => setShowInfo(false)}> show less </button>
                </>
                : <button onClick={() => setShowInfo(true)}> show more </button>
            }
        </div>
    );
};
export default TeamListElement;
