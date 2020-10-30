import React, { useState } from 'react';
import { teamInterface } from '../interfaces';
import image from './placeholder.png';
import TeamCardExpanded from './teamCardExpanded';
import '../styles/team.css';
import { getTeamGender, getTeamSkill, getTeamAvailability } from '../services/readableData';
import { getAvailabilityIcon, getGenderIcon, getSkillIcon } from '../services/iconCreator';

const TeamCard = ({
    id,
    name,
    long_description,
    short_description,
    gender,
    skill_level,
    availability,
}: teamInterface): JSX.Element => {
    const [expanded, setExpanded] = useState(false);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    const renderTopList = () => {
        const items = [
            { item: 'Status', text: getTeamAvailability(availability), icon: getAvailabilityIcon(availability) },
            { item: 'Kjønn', text: getTeamGender(gender), icon: getGenderIcon(gender) },
            { item: 'Nivå', text: getTeamSkill(skill_level), icon: getSkillIcon(skill_level) },
        ];
        return items.map((obj, i) => {
            if (obj.text) {
                return (
                    <div className="list-item" key={i}>
                        <div>
                            <b>{obj.item}:</b> {obj.text}
                        </div>
                        <div className="icon">{obj.icon}</div>
                    </div>
                );
            }
        });
    };

    return (
        <div className="card Region" key={id} onClick={() => toggleExpanded()}>
            <h5 className="card-header card-title primary">{name}</h5>
            <div className="card-body secondary">
                <img className="card-img" src={image} alt="Team"></img>
            </div>
            <div className="card-footer secondary">
                <div>
                    {renderTopList()}
                    <hr />
                </div>
                {expanded ? (
                    <TeamCardExpanded
                        long_description={long_description}
                        gender={gender}
                        skill_level={skill_level}
                        availability={availability}
                    />
                ) : (
                    <div>{short_description}</div>
                )}
            </div>
        </div>
    );
};

export default TeamCard;
