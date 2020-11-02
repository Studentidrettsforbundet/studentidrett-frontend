import { questionnaireItem, recommendations } from '../../../interfaces';
import { questionActionTypes, SET_QUESTIONS, SET_RECOMMENDATIONS } from './questionnaireActions';

export interface questionnaireState {
    questions: questionnaireItem[];
    recommendations: recommendations[];
}

export const questionInitialState: questionnaireState = {
    questions: [],
    recommendations: [],
};

export const questionnaireReducer = (state = questionInitialState, action: questionActionTypes): questionnaireState => {
    switch (action.type) {
        case SET_QUESTIONS: {
            return {
                ...state,
                questions: action.payload,
            };
        }
        case SET_RECOMMENDATIONS: {
            return {
                ...state,
                recommendations: action.payload,
            };
        }

        default: {
            return state;
        }
    }
};
