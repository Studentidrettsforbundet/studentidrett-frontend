import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
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

export const fetchData = async (url: string) => {
    try {
        const res = await fetch(url, {
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

export const checkForErrorCodes = (result: any): boolean => {
    return result.status !== 200;
};

export const fetchDataThunk = (
    dataType: cardType,
    url: string = '',
): ThunkAction<void, combinedStateInterface, unknown, Action<string>> => async (dispatch) => {
    dispatch(fetchInProgressActionCreator());

    let asyncResp;

    if (url.length > 0) {
        //Fetch next data (scrolling)
        asyncResp = await fetchData(url);
    } else {
        //Fetch based on cardType
        asyncResp = await fetchData(urlBuilderFetchData(dataType));
    }

    let result = [];

    if (asyncResp === 'Something went wrong' || asyncResp === 'Connection error') {
        dispatch(fetchFailedActionCreator());
    } else {
        dispatch(fetchSuccessActionCreator({ next: asyncResp.next, previous: asyncResp.previous }));
        result = asyncResp.results;
    }

    switch (dataType) {
        case REGION: {
            dispatch(setRegionsActionCreator(result));
            break;
        }
        case SPORT: {
            dispatch(setSportsActionCreator(result));
            break;
        }
        case CLUB: {
            dispatch(setClubsActionCreator(result));
            break;
        }
        case TEAM: {
            dispatch(setTeamsActionCreator(result));
            break;
        }
        case CITY: {
            dispatch(setCitiesActionCreator(result));
            break;
        }
        case GROUP: {
            dispatch(setGroupsActionCreator(result));
            break;
        }
        default: {
            return;
            //TODO: add error
        }
    }
};
