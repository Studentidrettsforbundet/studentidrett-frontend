import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import '../styles/searchBar.css';
import { CLUB, SPORT } from '../constants';
import { simpleSearch } from '../services/api';

type Inputs = {
    searchField: string;
    Location: string;
    Skill: String;
    Gender: String;
};

/*
    USES: 
    https://react-bootstrap.github.io/components/DropdownButton/
    https://react-bootstrap.github.io/components/dropdowns/
    https://react-bootstrap.github.io/components/forms/
    https://react-bootstrap.github.io/components/buttons/
    https://react-bootstrap.github.io/components/forms/
    
*/

const SearchBar = () => {
    const [dropdownLocation, setDropdownLocation] = useState('Location');
    const [dropdownSkill, setDropdownSkill] = useState('All skill');
    const [dropdownGender, setDropdownGender] = useState('All gender');

    useEffect(() => {
        simpleSearch('', SPORT).then((result) => console.log(result));
    }, []);

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
