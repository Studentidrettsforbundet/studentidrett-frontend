import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { resultsInterface } from '../interfaces';
import { cardType, CITY, CLUB, GROUP, REGION, SPORT, TEAM } from '../constants';
import { setCitiesActionCreator } from '../store/pages/city/cityActions';
import { setClubsActionCreator } from '../store/pages/club/clubActions';
import { setGroupsActionCreator } from '../store/pages/group/groupActions';
import { setRegionsActionCreator } from '../store/pages/region/regionActions';
import { setSportsActionCreator } from '../store/pages/sport/sportActions';
import { setTeamsActionCreator } from '../store/pages/team/teamActions';
import { combinedStateInterface } from '../store/store';
import {
    fetchInProgressActionCreator,
    fetchFailedActionCreator,
    fetchSuccessActionCreator,
} from '../store/thunks/thunkActions';
import { urlBuilderFetchData, urlBuilderSimpleSearch } from './urlBuilders';

export const simpleSearch = async (queryUrl: string, cardType: cardType) => {
    try {
        const res = await fetch(urlBuilderSimpleSearch(cardType, queryUrl), {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
            }),
        });
        if (checkForErrorCodes(res)) {
            return 'Something went wrong';
        } else {
            return res.json();
        }
    } catch (error) {
        return 'Connection error';
    }
};

export const fetchData = async (cardType: cardType) => {
    try {
        const res = await fetch(urlBuilderFetchData(cardType), {
            method: 'GET',
            headers: new Headers({
                Accept: 'application/json',
            }),
        });
        if (checkForErrorCodes(res)) {
            return 'Something went wrong';
        } else {
            return res.json();
        }
    } catch (error) {
        return 'Connection error';
    }
};

const checkForErrorCodes = (result: any): boolean => {
    return result.status !== 200;
};

export const fetchDataThunk = (
    dataType: cardType,
): ThunkAction<void, combinedStateInterface, unknown, Action<string>> => async (dispatch) => {
    dispatch(fetchInProgressActionCreator());
    const asyncResp = await fetchData(dataType);
    let results = [];

    if (asyncResp === 'Something went wrong' || asyncResp === 'Connection error') {
        dispatch(fetchFailedActionCreator());
    } else {
        dispatch(fetchSuccessActionCreator({ next: asyncResp.next, previous: asyncResp.previous }));
        results = asyncResp.result;
    }

    switch (dataType) {
        case REGION: {
            dispatch(setRegionsActionCreator(results));
            break;
        }
        case SPORT: {
            dispatch(setSportsActionCreator(results));
            break;
        }
        case CLUB: {
            dispatch(setClubsActionCreator(results));
            break;
        }
        case TEAM: {
            dispatch(setTeamsActionCreator(results));
            break;
        }
        case CITY: {
            dispatch(setCitiesActionCreator(results));
            break;
        }
        case GROUP: {
            dispatch(setGroupsActionCreator(results));
            break;
        }
        default: {
            return;
            //TODO: add error
        }
    }
};
