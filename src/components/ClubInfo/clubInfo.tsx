import React from 'react';

//TODO: make some of these not-required
interface IClubInfo {
    title: string;
    contact_email: string;
    price: string;
    webpage: string;
    description: string;
}

const ClubInfo = (props: IClubInfo) => {
    return (
        <React.Fragment>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <span>
                    <strong>Kontakt:</strong>
                    {props.contact_email}
                </span>
                <span>
                    <strong>Medlemskontigent:</strong>
                    {props.price}
                </span>
                <span>
                    <strong>Meld deg inn her:</strong>
                    {props.webpage}
                </span>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </React.Fragment>
    );
};

export default ClubInfo;
