import React from 'react';
import {
    setQuestionsActionCreator,
    setRecommendatationsActionCreator,
    SET_QUESTIONS,
    SET_RECOMMENDATIONS,
} from '../../store/pages/questionnaire/questionnaireActions';

describe('Actions', () => {
    test('Should create an empty setQuestionsAction', () => {
        const expected = {
            type: SET_QUESTIONS,
            payload: [],
        };

        expect(setQuestionsActionCreator([{ id: 3334 }])).toStrictEqual(expected);
    });

    test('Should create a setQuestionsAction', () => {
        const data = [
            {
                id: '1',
                text: 'Team A',
                left: 'lol',
                right: 'aha',
            },
        ];

        const expected = {
            type: SET_QUESTIONS,
            payload: data,
        };

        expect(setQuestionsActionCreator(data)).toStrictEqual(expected);
    });

    test('Should create an empty setRecommendationsAction', () => {
        const expected = {
            type: SET_RECOMMENDATIONS,
            payload: [],
        };

        expect(setRecommendatationsActionCreator([{ id: 34 }])).toStrictEqual(expected);
    });

    test('Should create a setRecommendationsAction', () => {
        const data = [
            {
                id: 0,
                name: 'test',
                score: 93,
            },
        ];
        const expected = {
            type: SET_RECOMMENDATIONS,
            payload: data,
        };

        expect(setRecommendatationsActionCreator(data)).toStrictEqual(expected);
    });
});
