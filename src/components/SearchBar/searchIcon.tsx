import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSearchBarActionCreator } from '../../store/searchBar/searchBarActions';

const SearchIcon = () => {
    const dispatch = useDispatch();
    return (
        <img
            src={require('../../assets/search.svg')}
            alt="Search icon"
            className={'search_icon'}
            onClick={() => dispatch(toggleSearchBarActionCreator())}
        />
    );
};

export default SearchIcon;
