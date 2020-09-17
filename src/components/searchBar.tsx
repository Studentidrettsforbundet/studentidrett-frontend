import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import './searchBar.css';

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

    return (
        <div className="searchBar">
            <Form>
                <Form.Row>
                    <Form.Group as={Col} controlId="searchField">
                        <Form.Control type="string" placeholder="Search..." />
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="locationField">
                        <Form.Control as="select" placeholder="Location">
                            <option>Northern Norway</option>
                            <option>Eastern Norway</option>
                            <option>Western Norway</option>
                            <option>Southern Norway</option>
                            <option>Oslo/Viken Norway</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Form.Group as={Col} controlId="SkillField">
                        <Form.Control as="select" placeholder="Skill level">
                            <option>Beginner</option>
                            <option>Skilled</option>
                            <option>Professional</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group as={Col} controlId="GenderField">
                        <Form.Control as="select" placeholder="Skill level">
                            <option>Woman's team</option>
                            <option>Men's team</option>
                            <option>Mixed team</option>
                        </Form.Control>
                    </Form.Group>
                </Form.Row>
                <Form.Row>
                    <Button variant="primary" type="submit">
                        Show results
                    </Button>
                </Form.Row>
            </Form>
        </div>
    );
};

export default SearchBar;
