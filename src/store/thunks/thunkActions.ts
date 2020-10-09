import { Action } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { cardType, CITY, CLUB, REGION, SPORT, TEAM } from '../../constants';
import { fetchData } from '../../services/api';
import { setRegionsActionCreator } from '../pages/region/regionActions';
import { setSportsActionCreator } from '../pages/sport/sportActions';
import { setTeamsActionCreator } from '../pages/team/teamActions';
import { setClubsActionCreator } from '../pages/club/clubActions'
import { combinedStateInterface } from '../store';
import { setCitiesActionCreator } from '../pages/city/cityActions';


export const fetchDataThunk = (
    dataType: cardType
): ThunkAction<void, combinedStateInterface, unknown, Action<string>> => async dispatch => {
    dispatch(fetchInProgressActionCreator());
    const asyncResp = await fetchData(dataType);
    console.log(asyncResp)

    if (asyncResp) {
        dispatch(fetchSuccessActionCreator());
    }
    else {
        dispatch(fetchFailedActionCreator());
    }
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



export const FETCH_IN_PROGRESS = 'FETCH_IN_PROGRESS';
export const FETCH_FAILED = 'FETCH_FAILED';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';

interface fetchInProgressAction {
    type: typeof FETCH_IN_PROGRESS;
}

interface fetchFailedAction {
    type: typeof FETCH_FAILED;
}

interface fetchSuccessAction {
    type: typeof FETCH_SUCCESS;
}

export type thunkActionTypes = fetchInProgressAction | fetchFailedAction | fetchSuccessAction;

export const fetchInProgressActionCreator = (): fetchInProgressAction => {
    return {
        type: FETCH_IN_PROGRESS,
    };
};

export const fetchFailedActionCreator = (): fetchFailedAction => {
    return {
        type: FETCH_FAILED,
    };
};

export const fetchSuccessActionCreator = (): fetchSuccessAction => {
    console.log("FETHC IN PROGRESS CREATOR")
    return {
        type: FETCH_SUCCESS,
    };
};
