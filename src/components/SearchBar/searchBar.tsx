import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import { cardType } from '../../constants';
import { Link } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';
import { searchBar } from './styles';

interface searchBarProps {
    typeOfSearch?: cardType;
}

const SearchBar = (searchBarProps: searchBarProps) => {
    const [text, updateText] = useState('');

    return (
        <div>
            <Card className={searchBar}>
                <Row>
                    <Col>
                        <input
                            name="searchString"
                            className={'form-control'}
                            placeholder="Search..."
                            value={text}
                            onChange={(e) => updateText(e.target.value)}
                        />
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Link to={`/search/?q=${(searchBarProps.typeOfSearch ? searchBarProps.typeOfSearch + '/' : '') + text}`}>
                            <Button variant="primary" type="submit" className={'searchBar_button'}>
                                Search
                            </Button>
                        </Link>
                    </Col>
                </Row>
            </Card>
        </div>
    );
};

export default SearchBar;
