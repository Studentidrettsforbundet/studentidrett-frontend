import React from 'react';
import { CLUB, SPORT } from '../../constants';
import { simpleSearch } from '../../services/api';

describe('simpleSearch', () => {
    test('Should give empty result', () => {
        async () => {
            await simpleSearch('dæfolgjdfælbkjdfblkjdfbkljsdfsdf', SPORT).then((data) => {
                expect(data.count).toBe(0);
                expect(data.next).toBe(null);
                expect(data.previous).toBe(null);
                expect(data.results).toBe([]);
            });
        };
    });
});
