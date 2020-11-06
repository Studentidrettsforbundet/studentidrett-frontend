import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Spinner, Container, Col, Row } from 'react-bootstrap';
import { combinedStateInterface } from '../store/store';
import RegionCard from '../components/RegionCard/regionCard';
import { CITY, NORDNORGE, MIDTNORGE, VESTLANDET, OSTLANDET, SORLANDET } from '../constants';
import { fetchDataThunk } from '../services/api';
import { regionInterface } from '../interfaces';
import SearchBar from '../components/SearchBar/searchBar';
import EmptyResult from '../components/emptyResult';
import FetchError from '../components/fetchError';
import { resetFetchStatusesActionCreator } from '../store/thunks/thunkActions';

const RegionPage = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();

    const Nord: regionInterface = { id: 0, name: NORDNORGE, cities: [] };
    const Midt: regionInterface = { id: 1, name: MIDTNORGE, cities: [] };
    const Vest: regionInterface = { id: 2, name: VESTLANDET, cities: [] };
    const Sor: regionInterface = { id: 3, name: SORLANDET, cities: [] };
    const Ost: regionInterface = { id: 4, name: OSTLANDET, cities: [] };
    const regions: regionInterface[] = [Nord, Midt, Vest, Sor, Ost];

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(fetchDataThunk(CITY));
        }
    });

    useEffect(() => {
        return () => {
            dispatch(resetFetchStatusesActionCreator());
        };
    }, []);

    const sortCities = reduxState.city.cities.map((entry) => {
        if (entry.region === 'nord') {
            regions[0].cities.push(entry);
        } else if (entry.region === 'midt') {
            regions[1].cities.push(entry);
        } else if (entry.region === 'vest') {
            regions[2].cities.push(entry);
        } else if (entry.region === 'sor') {
            regions[3].cities.push(entry);
        } else {
            regions[4].cities.push(entry);
        }
        return;
    });

    const listContent = regions.map((entry) => {
        return <RegionCard {...{ id: entry.id, name: entry.name, cities: entry.cities }} key={entry.id} />;
    });

    return (
        <Container className="body">
            <Row className="page_header">
                <Col>
                    <h1>Regioner</h1>
                </Col>
            </Row>
            <SearchBar />
            {reduxState.thunk.fetch_in_progress ? (
                <Container className="center">
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
                    {reduxState.city.cities.length === 0 ? (
                        <EmptyResult />
                    ) : (
                        <React.Fragment>
                            {sortCities}
                            {listContent}
                        </React.Fragment>
                    )}
                    </React.Fragment>
                )}
                </React.Fragment>
            )}
        </Container>
    );
};

export default RegionPage;
