import React, { useState, useEffect } from 'react';
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


    useEffect(() => {
        fetch(
          `http://localhost:8000/clubs/`,
          {
            method: "GET",
            headers: new Headers({
                Accept: "application/json"
             })
        
          }
        )
          .then(res =>res.json())
          .then((result)=> console.log(result))
          
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
                        <Button variant="primary" type="submit" >
                            Show results
                        </Button>
                    </Col>
                </Form.Row>
            </Form>
        </div>
    );
};

export default SearchBar;
