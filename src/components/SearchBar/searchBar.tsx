import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { cardType } from '../../constants';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import './styles.css';
import { useSelector } from 'react-redux';
import { combinedStateInterface } from '../../store/store';

interface searchBarProps {
    typeOfSearch?: cardType;
}

const SearchBar = (searchBarProps: searchBarProps) => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const [text, updateText] = useState('');

    return (
        <div>
            {reduxState.searchBar.showSearchBar ? (
                <Card className="searchBar">
                    <Row>
                        <Col>
                            <input
                                name="searchString"
                                className={'form-control'}
                                placeholder="Søk..."
                                value={text}
                                onChange={(e) => updateText(e.target.value)}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Link
                                to={`/search/?q=${
                                    (searchBarProps.typeOfSearch ? searchBarProps.typeOfSearch + '/' : '') + text
                                }`}
                            >
                                <Button variant="primary" type="submit" className={'searchBar_button'}>
                                    Søk
                                </Button>
                            </Link>
                        </Col>
                    </Row>
                </Card>
            ) : null}
        </div>
    );
};

export default SearchBar;
