import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './header.css';
import SearchIcon from '../SearchBar/searchIcon';
import '../SearchBar/styles.css';
import { useSelector } from 'react-redux';
import { combinedStateInterface } from '../../store/store';

const Header = (): JSX.Element => {
    const location = useLocation();
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const pathnameRegex = /\bquestionnaire\b|\bresult\b|\bsearch\b/;
    const isLandingOrQuestionnaire = location.pathname.match(pathnameRegex) || location.pathname === '/';

    return (
        <div className="container headerContainer">
            <section className="headerLink">
                <Link to="/" style={{ textDecoration: 'none', color: 'black' }}>
                    <section className="headerContent">
                        <img src={require('../../assets/logo.png')} alt="logo" />
                        <div className="textContent">
                            Norges
                            <br />
                            Studentidrettsforbund
                        </div>
                    </section>
                </Link>
            </section>
            {!isLandingOrQuestionnaire ? (
                <div className="search_icon-container">
                    <SearchIcon {...{ currentState: reduxState.searchBar.showSearchBar }} />
                </div>
            ) : (
                <Link to={'/search'} className="search_icon-container">
                    <SearchIcon {...{ currentState: false }} />
                </Link>
            )}
        </div>
    );
};

export default Header;
