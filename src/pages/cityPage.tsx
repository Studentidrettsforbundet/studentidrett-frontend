import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import ClubCard from '../components/ClubCard/clubCard';
import SportCard from '../components/SportCard/sportCard';
import { CLUB, SPORT } from '../constants';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import SearchBar from '../components/SearchBar/searchBar';
import { Button, Spinner } from 'react-bootstrap';
import { urlBuilderFilterData } from '../services/urlBuilders';
import EmptyResult from '../components/emptyResult';
import FetchError from '../components/fetchError';
import { cardList } from '../styles/card';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';

interface urlParams {
    id: string;
}

const CityPage = (): JSX.Element => {
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
            dispatch(
                fetchDataThunk(SPORT, urlBuilderFilterData(SPORT, [{ cardType: 'city', id_or_name: urlParams.id }])),
            );
        }
    });

    useEffect(() => {
        return () => {
            dispatch(resetFetchStatusesActionCreator());
        };
    }, [dispatch]);

    const listSportContent = reduxState.sport.sports.map((entry) => {
        return <SportCard {...{ id: entry.id, name: entry.name, labels: entry.labels }} key={entry.id} />;
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
            <div className="container">
                <div className="row">
                    <div className="col Tabs">
                        <Button
                            onClick={() => toggleshowClubs(true)}
                            style={
                                showClubs
                                    ? { color: 'white', backgroundColor: '#007BFF' }
                                    : { color: 'black', backgroundColor: 'white' }
                            }
                        >
                            Klubber
                        </Button>
                        <Button
                            onClick={() => toggleshowClubs(false)}
                            style={
                                !showClubs
                                    ? { color: 'white', backgroundColor: '#007BFF' }
                                    : { color: 'black', backgroundColor: 'white' }
                            }
                        >
                            Sport
                        </Button>
                    </div>
                </div>
            </div>
            {reduxState.thunk.fetch_in_progress ? (
                <div className="center_container">
                    <Spinner animation="border" />
                </div>
            ) : (
                <div>
                    {reduxState.thunk.fetch_failed ? (
                        <div>
                            <FetchError />
                        </div>
                    ) : (
                        <div>
                            {showClubs ? (
                                <div>
                                    <SearchBar />
                                    <h1>Klubber</h1>
                                    {listClubContent.length === 0 ? (
                                        <EmptyResult />
                                    ) : (
                                        <div className={cardList}>{listClubContent}</div>
                                    )}
                                </div>
                            ) : (
                                <div>
                                    <SearchBar />
                                    {listSportContent.length === 0 ? (
                                        <EmptyResult />
                                    ) : (
                                        <div className={cardList}>{listSportContent}</div>
                                    )}
                                </div>
                            )}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default CityPage;
