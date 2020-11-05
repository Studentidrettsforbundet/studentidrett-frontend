import React from 'react';
import {
    setSessionIDActionCreator,
    addInterestActionCreator,
    SET_SESSIONID,
    ADD_INTEREST,
} from '../../store/pages/interest/interestActions';

describe('Interest Actions', () => {
    test('Should be of type SET_SESSIONID', () => {
        expect(setSessionIDActionCreator().type).toStrictEqual(SET_SESSIONID);
    });

    test('Should generate a string sessionID', () => {
        expect(typeof setSessionIDActionCreator().payload).toBe('string');
    });

    test('Should generate a 16 charachter sessionID', () => {
        expect(setSessionIDActionCreator().payload.length).toBe(16);
    });

    test('Should create addInterest action', () => {
        const data = '1';
        const expected = {
            type: ADD_INTEREST,
            payload: data,
        };
        expect(addInterestActionCreator(data)).toStrictEqual(expected);
    });
});
