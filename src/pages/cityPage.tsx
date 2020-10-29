import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClubCard from '../components/ClubCard/clubCard';
import SportCard from '../components/SportCard/sportCard';
import { CLUB, SPORT } from '../constants';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import SearchBar from '../components/SearchBar/searchBar';
import SearchIcon from '../components/SearchBar/searchIcon';
import { Button } from 'react-bootstrap';
import { searchIconContainer } from '../components/SearchBar/styles';
import { urlBuilderFilterData } from '../services/urlBuilders';

interface urlParams {
    id: string;
}

/* TODO: When filtering sports based on city works in backend, uncomment change SPORT-dispatch to:
    fetchDataThunk(SPORT, urlBuilderFilterData(SPORT, [{ cardType: 'city', id_or_name: urlParams.id }])),*/


const CityPage = () => {
    const [showClubs, setshowClubs] = useState(true);
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();
    const urlParams = useParams<urlParams>();

    const toggleshowClubs = (clubs: boolean) => {
        setshowClubs(clubs);
    };

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(
                fetchDataThunk(CLUB, urlBuilderFilterData(CLUB, [{ cardType: 'city', id_or_name: urlParams.id }])),
            );
            dispatch(fetchDataThunk(SPORT));
        }
    });

    const listSportContent = reduxState.sport.sports.map((entry) => {
        return SportCard({ id: entry.id, name: entry.name, labels: entry.labels });
    });

    const listClubContent = reduxState.club.clubs.map((entry) => {
        return (
            <ClubCard
                {...{
                    id: entry.id,
                    city: entry.city,
                    name: entry.name,
                    description: entry.description,
                    contact_email: entry.contact_email,
                    membership_fee: entry.membership_fee,
                    register_info: entry.register_info,
                }}
                key={entry.id}
            />
        );
    });

    return (
        <div className="container body">
            <h1>{urlParams.id}</h1>
            <div className="container">
                <div className="row">
                    <div className="col Tabs">
                        <Button onClick={() => toggleshowClubs(true)}>Clubs</Button>
                        <Button onClick={() => toggleshowClubs(false)}>Sports</Button>
                    </div>

                    <div className={searchIconContainer}>
                        <SearchIcon />
                    </div>
                </div>
            </div>
            {showClubs ? (
                <div>
                    <SearchBar typeOfSearch={CLUB} />
                    {listClubContent}
                </div>
            ) : (
                <div>
                    <SearchBar typeOfSearch={SPORT} />
                    {listSportContent}
                </div>
            )}
        </div>
    );
};

export default CityPage;
