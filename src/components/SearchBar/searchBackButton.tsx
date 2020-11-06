import React from 'react';
import { useHistory } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import './styles.css';

const SearchBackButton = (props: { noOfSearches: number }) => {
    const history = useHistory();
    const buttonClick = () => {
        history.go(-props.noOfSearches);
    };
    return (
        <Button className="button" onClick={buttonClick}>
            {' '}
            &larr; Tilbake{' '}
        </Button>
    );
};

export default SearchBackButton;
