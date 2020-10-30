import React from 'react';
import { infoStyle } from '../../styles/card';

//TODO: make some of these not-required
interface IClubInfo {
    title: string;
    contact_email: string;
    price: string;
    register_info: string;
    description: string;
}

const ClubInfo = (props: IClubInfo) => {
    return (
        <div className={infoStyle}>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>
                    <b>Kontakt: </b>
                    {props.contact_email}
                </p>
                <p>
                    <b>Medlemskontigent: </b>
                    {props.price}
                </p>
                <p>
                    <b>Meld deg inn: </b>
                    {props.register_info}
                </p>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
    );
};

export default ClubInfo;
