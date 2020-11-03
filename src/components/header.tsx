import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/header.css';

const Header = () => (
    <div className="header">
        <section className="headerLink">
            <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                <section className="headerContent">
                    <img src={require('../assets/logo.png')} alt="logo" />
                    <div className="textContent">
                        Norges
                        <br />
                        Studentidrettsforbund
                    </div>
                </section>
            </Link>
        </section>
    </div>
);

export default Header;
