import React from 'react';
import '../styles/header.css';

const Header = () => (
    <div className="header">
        <img src={require('../assets/logo.png')} alt="logo" />
        <div className="textContent">
            Norges
            <br />
            Studentidrettsforbund
        </div>
    </div>
);

export default Header;
