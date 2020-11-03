import React from 'react';
import { teamReducer } from '../../store/pages/team/teamReducer';
import { questionInitialState, questionnaireReducer } from '../../store/pages/questionnaire/questionnaireReducer';
import { SET_QUESTIONS, SET_RECOMMENDATIONS } from '../../store/pages/questionnaire/questionnaireActions';

describe('Questionnaire reducer', () => {
    it('Should return the initial state', () => {
        const initialState = questionInitialState;
        expect(questionnaireReducer(undefined, {})).toEqual(initialState);
    });

    it('Should handle SET_QUESTIONS', () => {
        const data = [
            {
                id: '1',
                text: 'test1',
                left: 'hallo',
                right: 'heisann',
            },
            {
                id: '2',
                text: 'test2',
                left: 'hall3o',
                right: 'heis3ann',
            },
        ];

        expect(
            questionnaireReducer(undefined, {
                type: SET_QUESTIONS,
                payload: data,
            }),
        ).toEqual({ questions: data, recommendations: [] });
    });

    it('Should handle SET_QUESTIONS with initialState', () => {
        const initialState = [
            {
                id: '4545',
                text: 't45est1',
                left: 'ha55llo',
                right: 'h55eisann',
            },
        ];
        const data = [
            {
                id: '1',
                text: 'test1',
                left: 'hallo',
                right: 'heisann',
            },
            {
                id: '2',
                text: 'test2',
                left: 'hall3o',
                right: 'heis3ann',
            },
        ];

        expect(
            questionnaireReducer(
                { questions: initialState, recommendations: [] },
                {
                    type: SET_QUESTIONS,
                    payload: data,
                },
            ),
        ).toEqual({ questions: data, recommendations: [] });
    });

    it('Should handle SET_RECOMMENDATIONS', () => {
        const data = [
            {
                id: 1,
                name: 'test1',
                score: 34,
            },
            {
                id: 2,
                name: 'te34344st1',
                score: 344545,
            },
        ];

        expect(
            questionnaireReducer(undefined, {
                type: SET_RECOMMENDATIONS,
                payload: data,
            }),
        ).toEqual({ questions: [], recommendations: data });
    });

    it('Should handle SET_RECOMMENDATIONS with initialState', () => {
        const initialState1 = [
            {
                id: '4545',
                text: 't45est1',
                left: 'ha55llo',
                right: 'h55eisann',
            },
        ];
        const initialState2 = [
            {
                id: 4545,
                name: 't45est1',
                score: 5,
            },
        ];

        const data = [
            {
                id: 1,
                name: 'test1',
                score: 34,
            },
            {
                id: 2,
                name: 'te34344st1',
                score: 344545,
            },
        ];

        expect(
            questionnaireReducer(
                { questions: initialState1, recommendations: initialState2 },
                {
                    type: SET_RECOMMENDATIONS,
                    payload: data,
                },
            ),
        ).toEqual({ questions: initialState1, recommendations: data });
    });
});
