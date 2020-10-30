import React from 'react';
import image from '../../assets/placeholder.png';

//TODO: make some of these not-required
interface IClubInfo {
    title: string;
    cover_photo?: string;
    description: string;
}

const GroupInfo = (props: IClubInfo) => {
    return (
        <React.Fragment>
            <div>
                <img alt={props.title} src={image}/>
            </div>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </React.Fragment>
    );
};

export default GroupInfo;
