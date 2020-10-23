import React from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import '../styles/searchBar.css';
import { cardType } from '../constants';
import { fetchDataThunk } from '../services/api';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { urlBuilderSimpleSearch } from '../services/urlBuilders';
import { combinedStateInterface } from '../store/store';

interface searchBarProps {
    typeOfSearch: cardType;
}

const SearchBar = (searchBarProps: searchBarProps) => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const { handleSubmit, register } = useForm();
    const dispatch = useDispatch();

    const onSubmit = async (data: any) => {
        dispatch(
            fetchDataThunk(
                searchBarProps.typeOfSearch,
                urlBuilderSimpleSearch(searchBarProps.typeOfSearch, data.searchString),
            ),
        );
    };

    return (
        <div>
            {reduxState.searchBar.showSearchBar ? (
                <Card className="searchBar container">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <input
                                    name="searchString"
                                    className={'form-control'}
                                    placeholder="Search..."
                                    ref={register}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Button variant="primary" type="submit" className={'searchBar_button'}>
                                    Search
                                </Button>
                            </Col>
                        </Row>
                    </form>
                </Card>
            ) : null}
        </div>
    );
};

export default SearchBar;
