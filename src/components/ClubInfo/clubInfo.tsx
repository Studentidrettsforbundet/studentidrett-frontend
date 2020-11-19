import React from 'react';

interface IClubInfo {
    title: string;
    contact_email: string;
    price: string;
    register_info: string;
    description: string;
}

const ClubInfo = (props: IClubInfo): JSX.Element => {
    return (
        <React.Fragment>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>
                    <span className="boldText">Kontakt: </span>
                    <a href={`mailto: ${props.contact_email}`}>{props.contact_email}</a>
                    <br />
                    <span className="boldText">Medlemskontigent: </span>
                    {props.price}
                    <br />
                    <span className="boldText">Meld deg inn: </span>
                    {props.register_info}
                </p>
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </React.Fragment>
    );
};

export default ClubInfo;
