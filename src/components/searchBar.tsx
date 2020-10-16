import React from 'react';
import { useForm } from "react-hook-form";
import Button from 'react-bootstrap/Button';
import '../styles/searchBar.css';
import { cardType, CITY, CLUB, SPORT } from '../constants';
import { simpleSearch } from '../services/api';

interface searchBarProps {
    typeOfSearch: cardType;
}

const SearchBar = ({ typeOfSearch }: searchBarProps) => {
    const { handleSubmit, register } = useForm();
    
    const onSubmit = async (data :any) => {
        const answer = await simpleSearch(data.searchString, CITY);
        console.log(answer);
    }

    return (
        <div className="searchBar container">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={'row'}>
                    <div className={'col'}>
                        <input name="searchString" className={'form-control'} placeholder="Search..." ref={register}/>
                    </div>
                </div>
                <div className={'row'}>
                    <div className={'col'}>
                        <Button variant="primary" type="submit">
                            Show results
                        </Button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default SearchBar;
