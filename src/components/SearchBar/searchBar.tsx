import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Button from 'react-bootstrap/Button';
import { cardType } from '../../constants';
import { Link } from 'react-router-dom';
import { fetchDataThunk } from '../../services/api';
import { Card, Col, Row } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { urlBuilderSimpleSearch } from '../../services/urlBuilders';
import { combinedStateInterface } from '../../store/store';
import { searchBar } from './styles';

interface searchBarProps {
    typeOfSearch: cardType;
}

const SearchBar = (searchBarProps: searchBarProps) => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const { handleSubmit, register } = useForm();
    const [text, updateText] = useState('');
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
                <Card className={searchBar}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Row>
                            <Col>
                                <input
                                    name="searchString"
                                    className={'form-control'}
                                    placeholder="Search..."
                                    value={text}
                                    onChange={(e) => updateText(e.target.value)}
                                    ref={register}
                                />
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Link to={`/search?q=${text}`}>
                                    <Button variant="primary" type="submit" className={'searchBar_button'}>
                                        Search
                                    </Button>
                                </Link>
                            </Col>
                        </Row>
                    </form>
                </Card>
            ) : null}
        </div>
    );
};

export default SearchBar;
