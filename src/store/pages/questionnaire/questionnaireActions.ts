import { questionnaireItem, recommendations } from '../../../interfaces';

export const SET_QUESTIONS = 'SET_QUESTIONS';
export const SET_QUESTION_RESULT = 'SET_QUESTION_RESULT';

interface setQuestionsAction {
    type: typeof SET_QUESTIONS;
    payload: questionnaireItem[];
}

interface setQuestionResultAction {
    type: typeof SET_QUESTION_RESULT;
    payload: recommendations[];
}
export type questionActionTypes = setQuestionsAction | setQuestionResultAction;

export const setQuestionsActionCreator = (data: questionnaireItem[]): setQuestionsAction => {
    // TODO: add validation
    return {
        type: SET_QUESTIONS,
        payload: data,
    };
};

export const setQuestionResultActionCreator = (data: recommendations[]): setQuestionResultAction => {
    // TODO: add validation
    return {
        type: SET_QUESTION_RESULT,
        payload: data,
    };
};
