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
import colors from '../../styles/colors';

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
                        ? { color: colors.secondary, backgroundColor: colors.primary, borderColor: colors.primary }
                        : { color: colors.secondary, backgroundColor: colors.white, borderColor: colors.primary }
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
                    <div className="row">
                        {/* <div style={{ display: 'flex' , justifyContent: 'space-around'}}> */}
                        <div className="col Tabs">
                            <input
                                name="searchString"
                                className={'form-control'}
                                placeholder="Søk..."
                                value={text}
                                onChange={(e) => updateText(e.target.value)}
                                onKeyPress={(e) => isEnter(e)}
                                style={{ marginRight: '1%' }}
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
                    </div>
                    <p style={{ textAlign: 'left', marginTop: '2px' }}> Søkefilter: </p>
                    <div className={filterButtonContainer}>{radioGroup}</div>
                </Card>
            ) : null}
        </div>
    );
};

export default withRouter(SearchBar);
