import React, { useState } from 'react';
import { card } from '../../styles/card';
import { cardType, CITY, CLUB, GROUP, SPORT, TEAM } from '../../constants';
import { searchInterface } from '../../interfaces';
import { Link } from 'react-router-dom';
import { resetFetchStatusesActionCreator } from '../../store/thunks/thunkActions';
import { useDispatch } from 'react-redux';
import {searchCard} from './styles';

interface searchCardInterface {
    label: string;
}

const translations: { [index: string]: string } = {
    [CITY]: 'By',
    [SPORT]: 'Idrett',
    [GROUP]: 'Gruppe',
    [TEAM]: 'Idrettslag',
    [CLUB]: 'Idrettsklubb',
};

const SearchCard = ({ label, name, id }: searchCardInterface & searchInterface) => {
    const dispatch = useDispatch();
    return (
        <div>
            <Link
                to={`/${label}/${id}`}
                key={'label' + id}
                className={'unstyled_link'}
                onClick={() => dispatch(resetFetchStatusesActionCreator())}
            >
                <div className={searchCard}>
                    <h5 className="boldText">{name}</h5>
                    <span>{translations[label]}</span>
                </div>
            </Link>
        </div>
    );
};

export default SearchCard;
