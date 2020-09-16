import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './searchBar.css';

type Inputs = {
    searchField: string;
    Location: string;
};

/*
    USES: 
    https://react-bootstrap.github.io/components/DropdownButton/
    https://react-bootstrap.github.io/components/Dropdown/
    https://react-bootstrap.github.io/components/forms/
    https://react-bootstrap.github.io/components/buttons/

    
*/

enum locations {
    'Oslo/Viken' = '#/action-1',
    'Trønderlag' = '#/action-2',
    'North Norway' = '#/action-3',
    'West Norway' = '#/action-4',
    'South Norway' = '#/action-5',
}

const SearchBar = () => {
    const [dropdownLocation, setDropdownLocation] = useState('Location');
    return (
        <div className="searchBar">
            <Form>
                <Form.Group controlId="searchField">
                    <Form.Control type="string" placeholder="Search..." />
                </Form.Group>

                <DropdownButton
                    id="dropdown-location"
                    title={dropdownLocation}
                    className="dropdown-location"
                    onSelect={(selected) => {
                        if (selected) {
                            setDropdownLocation(selected);
                        }
                    }}
                >
                    <Dropdown.Item eventKey="Northern Norway">Northern Norway</Dropdown.Item>
                    <Dropdown.Item eventKey="Central Norway">Eastern Norway</Dropdown.Item>
                    <Dropdown.Item eventKey="Western Norway">Western Norway</Dropdown.Item>
                    <Dropdown.Item eventKey="Southern Norway">Southern Norway</Dropdown.Item>
                    <Dropdown.Item eventKey="Eastern Norway">Eastern Norway</Dropdown.Item>
                </DropdownButton>

                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    );
};

export default SearchBar;
