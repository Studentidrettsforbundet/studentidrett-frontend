import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { cardType, CITY, CLUB, REGION, SPORT, TEAM } from '../constants';
import { setCitiesActionCreator } from '../store/pages/city/cityActions';
import { setClubsActionCreator } from '../store/pages/club/clubActions';
import { setRegionsActionCreator } from '../store/pages/region/regionActions';
import { setSportsActionCreator } from '../store/pages/sport/sportActions';
import { setTeamsActionCreator } from '../store/pages/team/teamActions';
import { combinedStateInterface } from '../store/store';
import { fetchInProgressActionCreator, fetchFailedActionCreator, fetchSuccessActionCreator } from '../store/thunks/thunkActions';
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
    dataType: cardType
): ThunkAction<void, combinedStateInterface, unknown, Action<string>> => async dispatch => {
    dispatch(fetchInProgressActionCreator());
    const asyncResp = await fetchData(dataType);
     //TODO: ADD VALIDATION before dispatch
    if (asyncResp === 'Something went wrong' || asyncResp === 'Connection error') {
        dispatch(fetchFailedActionCreator());
    }
    else {
        dispatch(fetchSuccessActionCreator());
         //TODO: ADD VALIDATION before dispatch
        switch (dataType) {
            case REGION: {
                dispatch(
                    setRegionsActionCreator(asyncResp.results)
                )
                break;
            }
            case SPORT: {
                dispatch(
                    setSportsActionCreator(asyncResp.results)
                )
                break;
            }
            case CLUB: {
                dispatch(
                    setClubsActionCreator(asyncResp.results)
                )
                break;
            }
            case TEAM: {
                dispatch(
                    setTeamsActionCreator(asyncResp.results)
                )
                break;
            }
            case CITY: {
                dispatch(
                    setCitiesActionCreator(asyncResp.results)
                )
                break;
            }
            default: {
                return;
                //TODO: add error
            }

        }
    }
}