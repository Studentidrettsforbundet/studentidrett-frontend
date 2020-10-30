import { questionnaireItem } from '../../../interfaces';

export const SET_QUESTIONS = 'SET_QUESTIONS';

interface setQuestionsAction {
    type: typeof SET_QUESTIONS;
    payload: questionnaireItem[];
}

export type questionActionTypes = setQuestionsAction;

export const setQuestionsActionCreator = (data: questionnaireItem[]): setQuestionsAction => {
    // TODO: add validation
    return {
        type: SET_QUESTIONS,
        payload: data,
    };
};
