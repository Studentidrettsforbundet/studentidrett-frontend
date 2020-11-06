import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { CITY, CLUB, GROUP, SPORT, TEAM } from '../../constants';
import { Link, useLocation, withRouter } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import './styles.css';
import { useSelector } from 'react-redux';
import { combinedStateInterface } from '../../store/store';
import { filterButton, filterButtonContainer, searchBar, searchFilterButton } from './styles';
import { RouterProps } from 'react-router';

const filters = [CITY, CLUB, GROUP, TEAM, SPORT];
const translations = ['By', 'Klubb', 'Gruppe', 'Lag', 'Idrett'];

const SearchBar = (props: RouterProps): JSX.Element => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const [text, updateText] = useState('');
    const [filter, updateFilter] = useState('');
    const searchPage = useLocation().pathname.match(/\bsearch\b/);

    const radioClick = (event: any) => {
        if (event === filter) {
            updateFilter('');
        } else {
            updateFilter(event);
        }
    };

    const isEnter = (event: any) => {
        if (event.key === 'Enter' && text !== '') {
            props.history.push(`/search/?q=${(filter !== '' ? filter + '/' : '') + text}`);
        }
    };

    const radioGroup = filters.map((it, i) => (
        <div key={it} className={searchFilterButton}>
            <Button
                key={it}
                variant="secondary outlined"
                className={filterButton}
                style={
                    filter === it
                        ? { color: 'white', backgroundColor: '#007BFF' }
                        : { color: 'black', backgroundColor: 'white' }
                }
                value={it}
                onClick={() => radioClick(it)}
            >
                {translations[i]}
            </Button>
        </div>
    ));

    return (
        <div>
            {reduxState.searchBar.showSearchBar || searchPage ? (
                <Card className={searchBar}>
                    <div style={{ display: 'flex' }}>
                        <input
                            name="searchString"
                            className={'form-control'}
                            placeholder="Søk..."
                            value={text}
                            onChange={(e) => updateText(e.target.value)}
                            onKeyPress={(e) => isEnter(e)}
                        />
                        <Link to={`/search/?q=${(filter !== '' ? filter + '/' : '') + text}`}>
                            <Button
                                variant="primary"
                                type="submit"
                                disabled={text === ''}
                                style={
                                    text === ''
                                        ? { color: '#808080', backgroundColor: 'white', borderColor: '#808080' }
                                        : { color: 'white', backgroundColor: '#00BC00', borderColor: '#00BC00' }
                                }
                            >
                                Søk
                            </Button>
                        </Link>
                    </div>
                    <p style={{ textAlign: 'left' }}> Søkefiltre: </p>
                    <div className={filterButtonContainer}>{radioGroup}</div>
                </Card>
            ) : null}
        </div>
    );
};

export default withRouter(SearchBar);
