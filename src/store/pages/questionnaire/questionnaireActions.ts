import { questionnaireItem, recommendations } from '../../../interfaces';
import { instanceOfQuestion, instanceOfRecommendations } from '../../../services/interfaceValidators';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_RECOMMENDATIONS = 'SET_RECOMMENDATIONS';

interface setQuestionsAction {
    type: typeof SET_QUESTIONS;
    payload: questionnaireItem[];
}

interface setRecommendationsAction {
    type: typeof SET_RECOMMENDATIONS;
    payload: recommendations[];
}
export type questionActionTypes = setQuestionsAction | setRecommendationsAction;

export const setQuestionsActionCreator = (data: questionnaireItem[]): setQuestionsAction => {
    if (data.every(instanceOfQuestion)) {
        return {
            type: SET_QUESTIONS,
            payload: data,
        };
    } else {
        return {
            type: SET_QUESTIONS,
            payload: [],
        };
    }
};

export const setRecommendatationsActionCreator = (data: recommendations[]): setRecommendationsAction => {
    if (data.every(instanceOfRecommendations)) {
        return {
            type: SET_RECOMMENDATIONS,
            payload: data,
        };
    } else {
        return {
            type: SET_RECOMMENDATIONS,
            payload: [],
        };
    }
};
