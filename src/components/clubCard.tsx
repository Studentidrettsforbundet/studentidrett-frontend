import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { clubInterface } from '../interfaces';
import { setSelectedClubActionCreator } from '../store/pages/club/clubActions';
import { combinedState } from '../store/store';

const ClubCard = (club: clubInterface) => {
    const dispatch = useDispatch();
    const state = useSelector((state: combinedState) => state);

    return (
        <Link
            to={state.sport.selectedSport.name + '/' + club.name}
            key={club.id}
            onClick={() => dispatch(setSelectedClubActionCreator({ id: club.id, name: club.name }))}
            className={'unstyled_link'}
        >
            <div className="card Region">
                <div className="card-body">
                    <h5 className="card-title">{club.name}</h5>
                </div>
            </div>
        </Link>
    );
};

export default ClubCard;
