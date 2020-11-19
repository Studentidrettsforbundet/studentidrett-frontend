import React from 'react';
import { getLinkIcon } from './iconCreator';
import { icon, list, linkItem } from './styles';

interface LinkListProps {
    facebook_link: string | null;
    instagram_link: string | null;
    webpage: string | null;
}

export const LinkList = ({ facebook_link, instagram_link, webpage }: LinkListProps): JSX.Element | null => {
    const links = [
        { site: facebook_link, text: 'Facebook' },
        { site: instagram_link, text: 'Instagram' },
        { site: webpage, text: 'Hjemmeside' },
    ];

    const renderedLinks = links.map((link, i) => {
        if (link.site) {
            return (
                <a className={linkItem} key={i} href={link.site}>
                    <div className={icon}>{getLinkIcon(link.text)}</div>
                    {link.text}
                </a>
            );
        }
        return <React.Fragment key={i} />;
    });

    return renderedLinks ? <div className={list}>{renderedLinks}</div> : null;
};
