import React from 'react';
import './footer.css';

const Footer = (): JSX.Element => (
    <div className="footer">
        <div className="container footerContainer">
            <section className="footerSection">
                <span className="footerLead">Telefon</span>
                <br />
                <a href="tel:+47 976 18 966" data-content="+47 976 18 966" data-type="phone">
                    976 18 966
                </a>
            </section>
            <section className="footerSection">
                <span className="footerLead">E-mail</span>
                <br />
                <a href="mailto:nsi@studentidrett.no">nsi@studentidrett.no</a>
            </section>
            <section className="footerSection">
                <span className="footerLead">Addresse</span>
                <br />
                Idrettens Hus Sognsveien 73
                <br />
                0840 Oslo
            </section>
        </div>
    </div>
);

export default Footer;
