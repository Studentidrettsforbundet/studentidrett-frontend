import React from 'react';
import { useDispatch } from 'react-redux';
import { toggleSearchBarActionCreator } from '../../store/searchBar/searchBarActions';
import './styles.css';

const SearchIcon = (props: { currentState: boolean }): JSX.Element => {
    const dispatch = useDispatch();
    return (
        <img
            src={require('../../assets/search.svg')}
            alt="Search icon"
            className={'search_icon'}
            onClick={() => {
                dispatch(toggleSearchBarActionCreator(!props.currentState));
            }}
        />
    );
};

export default SearchIcon;
