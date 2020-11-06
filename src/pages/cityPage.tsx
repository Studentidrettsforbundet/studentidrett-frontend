import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Button, Spinner, Container, Row, Col } from 'react-bootstrap';
import ClubCard from '../components/ClubCard/clubCard';
import SportCard from '../components/SportCard/sportCard';
import { fetchDataThunk } from '../services/api';
import { combinedStateInterface } from '../store/store';
import SearchBar from '../components/SearchBar/searchBar';
<<<<<<< HEAD
import { Button, Spinner } from 'react-bootstrap';
=======
>>>>>>> Refactor div elements and react-bootstrap elements
import { urlBuilderFilterData } from '../services/urlBuilders';
import EmptyResult from '../components/EmptyResult/emptyResult';
import FetchError from '../components/fetchError';
<<<<<<< HEAD
import { cardList } from '../styles/card';
import colors from '../styles/colors'
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import {toggleSearchBarActionCreator} from "../store/searchBar/searchBarActions";
=======
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';
import { cardList } from '../styles/card';
import { CLUB, SPORT } from '../constants';
>>>>>>> Refactor div elements and react-bootstrap elements

interface urlParams {
    id: string;
}

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
            dispatch(
                fetchDataThunk(SPORT, urlBuilderFilterData(SPORT, [{ cardType: 'city', id_or_name: urlParams.id }])),
            );
        }
    });

    useEffect(() => {
        // cleanup
        return () => {
            dispatch(toggleSearchBarActionCreator(false));
            dispatch(resetFetchStatusesActionCreator());
        };
    }, []);

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
<<<<<<< HEAD
        <div className="container body">

            <SearchBar />
            <div className="container">
                <div className="row">
                    <div className="col Tabs">
=======
        <Container className="body">
                <Row>
                    <Col className="Tabs">
>>>>>>> Refactor div elements and react-bootstrap elements
                        <Button
                            onClick={() => toggleshowClubs(true)}
                            style={
                                showClubs
                                    ? { color: colors.secondary, backgroundColor: colors.primary, borderColor: colors.primary }
                                    : { color: colors.secondary, backgroundColor: colors.white, borderColor: colors.primary }
                            }
                        >
                            Klubber
                        </Button>
                        <Button
                            onClick={() => toggleshowClubs(false)}
                            style={
                                !showClubs
                                    ? { color: colors.secondary, backgroundColor: colors.primary, borderColor: colors.primary }
                                    : { color: colors.secondary, backgroundColor: colors.white, borderColor: colors.primary }
                                }
                        >
                            Idretter
                        </Button>
                    </Col>
                </Row>
            {reduxState.thunk.fetch_in_progress ? (
                <Container className="center_container">
                    <Spinner animation="border" />
                </Container>
            ) : (
                <React.Fragment>
                    {reduxState.thunk.fetch_failed ? (
                        <React.Fragment>
                            <FetchError />
                        </React.Fragment>
                    ) : (
                        <React.Fragment>
                            {showClubs ? (
<<<<<<< HEAD
                                <div>
                                    <h1>Klubber</h1>
=======
                                <React.Fragment>
                                    <SearchBar />
>>>>>>> Refactor div elements and react-bootstrap elements
                                    {listClubContent.length === 0 ? (
                                        <EmptyResult />
                                    ) : (
                                        <div className={cardList}>{listClubContent}</div>
                                    )}
                                </React.Fragment>
                            ) : (
<<<<<<< HEAD
                                <div>
                                    <h1>Idretter</h1>
=======
                                <React.Fragment>
                                    <SearchBar />
>>>>>>> Refactor div elements and react-bootstrap elements
                                    {listSportContent.length === 0 ? (
                                        <EmptyResult />
                                    ) : (
                                        <div className={cardList}>{listSportContent}</div>
                                    )}
                                </React.Fragment>
                            )}
                        </React.Fragment>
                    )}
                </React.Fragment>
            )}
        </Container>
    );
};

export default CityPage;
