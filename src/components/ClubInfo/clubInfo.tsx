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
            <h1>{props.title}</h1>
            <p>
                <span className="boldText">Kontakt: </span>
                <a href="mailto: "{...props.contact_email}>{props.contact_email}</a>
                <br/>
                <span className="boldText">Medlemskontigent: </span>
                {props.price}
                <br/>
                <span className="boldText">Meld deg inn: </span>
                <a href="">{props.register_info}</a>
            </p>
            <p>{props.description}</p>
        </React.Fragment>
    );
};

export default ClubInfo;
