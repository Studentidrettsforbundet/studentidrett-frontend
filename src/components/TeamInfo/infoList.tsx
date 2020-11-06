import React from 'react';
import { getTeamGender, getTeamSkill, getTeamAvailability } from './readableData';
import { getAvailabilityIcon, getGenderIcon, getSkillIcon } from './iconCreator';
import { icon, list, listItem } from './styles';

interface InfoListProps {
    availability: string | null;
    gender: string | null;
    skill_level: string | null;
}

export const InfoList = ({ availability, gender, skill_level }: InfoListProps): JSX.Element | null => {
    const items = [
        { item: 'Status', text: getTeamAvailability(availability), icon: getAvailabilityIcon(availability) },
        { item: 'Kjønn', text: getTeamGender(gender), icon: getGenderIcon(gender) },
        { item: 'Nivå', text: getTeamSkill(skill_level), icon: getSkillIcon(skill_level) },
    ];

    const renderedList = items.map((obj, i) => {
        if (obj.text) {
            return (
                <div className={listItem} key={i}>
                    <b>{obj.item}:</b> {obj.text}
                    <div className={icon}>{obj.icon}</div>
                </div>
            );
        }
    });
    return renderedList ? (
        <div className={list}>
            {renderedList}
            <hr />
        </div>
    ) : null;
};
