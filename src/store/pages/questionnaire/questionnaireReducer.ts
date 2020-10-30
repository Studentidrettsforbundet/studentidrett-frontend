import { questionnaireItem } from '../../../interfaces';
import { questionActionTypes, SET_QUESTIONS } from './questionnaireActions';

export interface questionnaireState {
    questions: questionnaireItem[];
}

export const questionInitialState: questionnaireState = {
    questions: [],
};

export const questionnaireReducer = (state = questionInitialState, action: questionActionTypes): questionnaireState => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {
                ...state,
                questions: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
