import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import '../styles/searchBar.css';
import { cardType, CITY, CLUB, SPORT } from '../constants';
import { fetchDataThunk } from '../services/api';
import { Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { urlBuilderSimpleSearch } from '../services/urlBuilders';

interface searchBarProps {
    typeOfSearch: cardType;
}

const SearchBar = (searchBarProps: searchBarProps) => {
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();
    
    const onSubmit = async (data :any) => {
        dispatch(fetchDataThunk(searchBarProps.typeOfSearch, urlBuilderSimpleSearch(searchBarProps.typeOfSearch, data.searchString), true));
    }

    return (
        <div className="searchBar container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <Row>
                    <Col>
                        <input name="searchString" className={'form-control'} placeholder="Search..." ref={register}/>
                    </Col>
                </Row>
                <Row className={'row'}>
                    <Col className={'col'}>
                        <Button variant="primary" type="submit">
                            Show results
                        </Button>
                    </Col>
                </Row>
            </form>
        </div>
    );
};

export default SearchBar;
