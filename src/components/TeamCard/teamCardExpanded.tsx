import React from 'react';
import { getLinkIcon } from '../../services/iconCreator';

export interface teamCardInterface {
    long_description?: string;
    gender?: string;
    skill_level?: string;
    availability?: string;
    facebook_link?: string;
    instagram_link?: string;
    webpage?: string;
}

const TeamCardExpanded = ({
    long_description,
    gender,
    skill_level,
    availability,
    facebook_link,
    instagram_link,
    webpage,
}: teamCardInterface): JSX.Element => {
    const a = 'http://www.facebook.com/';
    const renderLinks = () => {
        const links = [
            { site: a, text: 'Facebook' },
            { site: a, text: 'Instagram' },
            { site: a, text: 'Hjemmeside' },
        ];
        if (a || instagram_link || webpage) {
            return (
                <div className="list">
                    {links.map((link, i) => {
                        if (link.site) {
                            return (
                                <a className="primary link-item" key={i} href={link.site}>
                                    <div className="icon">{getLinkIcon(link.text)}</div>
                                    <div className="link-text">{link.text}</div>
                                </a>
                            );
                        }
                    })}
                </div>
            );
        }
    };
    return (
        <div>
            <p>{long_description}</p>
            {renderLinks()}
        </div>
    );
};

export default TeamCardExpanded;
