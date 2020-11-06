import React, { useState } from 'react';
import { card } from '../../styles/card';
import { cardType, CITY, CLUB, GROUP, SPORT, TEAM } from '../../constants';
import { searchInterface } from '../../interfaces';
import { Link } from 'react-router-dom';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import { useDispatch } from 'react-redux';

interface searchCardInterface {
    label: string;
}

const translations: { [index: string]: string } = {
    [CITY]: 'By',
    [SPORT]: 'Sport',
    [GROUP]: 'Gruppe',
    [TEAM]: 'Idrettslag',
    [CLUB]: 'Idrettsklubb',
};

const SearchCard = ({ label, name, id }: searchCardInterface & searchInterface) => {
    const dispatch = useDispatch();
    return (
        <React.Fragment>
            <Link
                to={`/${label}/${id}`}
                key={'label' + id}
                className={'unstyled_link'}
                onClick={() => dispatch(resetFetchStatusesActionCreator())}
            >
                <div className={card}>
                    <h5>{name}</h5>
                    {translations[label]}
                </div>
            </Link>
        </React.Fragment>
    );
};

export default SearchCard;
