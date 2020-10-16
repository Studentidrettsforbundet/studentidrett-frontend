import React, { useState, useEffect } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/searchBar.css';
import { cardType, SPORT } from '../constants';
import { simpleSearch } from '../services/api';

interface searchBarProps {
    typeOfSearch: cardType;
}

const SearchBar = ({ typeOfSearch }: searchBarProps) => {
    const handleSearch = () => {};

    return (
        <div className="searchBar">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="searchField">
                        <Form.Control type="string" placeholder="Search..." />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Col>
                        <Button variant="primary" type="submit">
                            Show results
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export default SearchBar;
