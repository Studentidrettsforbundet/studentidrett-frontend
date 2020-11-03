import React from 'react';

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
        <React.Fragment>
            <div>
                <h1>{props.title}</h1>
            </div>
            <div>
                <p>
                    <strong>Kontakt:</strong>
                    {props.contact_email}
                </p>
                <p>
                    <strong>Medlemskontigent:</strong>
                    {props.price}
                </p>
                <p>
                    <strong>Meld deg inn:</strong>
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
