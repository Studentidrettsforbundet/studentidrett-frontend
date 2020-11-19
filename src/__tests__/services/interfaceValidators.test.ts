import React from 'react';
import {
    instanceOfCity,
    instanceOfClub,
    instanceOfGroup,
    instanceOfRegion,
    instanceOfSport,
    instanceOfTeam,
} from '../../services/interfaceValidators';
import { singleCity, singleClub, singleGroup, singleRegion, singleSport, singleTeam } from '../../assets/testMock';

describe('instanceOfRegion', () => {
    test('Should return true', () => {
        expect(instanceOfRegion(singleRegion)).toBe(true);
    });

    test('Should return false if too many', () => {
        const case1 = { id: 0, name: 'Midtnorge', skog: 'stor skog' };
        expect(instanceOfRegion(case1)).toBe(false);
    });

    test('Should return false if empty', () => {
        const case1 = {};
        expect(instanceOfRegion(case1)).toBe(false);
    });
});

describe('instanceOfTeam', () => {
    test('Should return true', () => {
        expect(instanceOfTeam(singleTeam)).toBe(true);
    });

    test('Should return false if too few', () => {
        const case1 = { id: 0, name: 'Midtnorge', skog: 'stor skog' };
        expect(instanceOfRegion(case1)).toBe(false);
    });

    test('Should return false if empty', () => {
        const case1 = {};
        expect(instanceOfRegion(case1)).toBe(false);
    });
});

describe('instanceOfGroup', () => {
    test('Should return true', () => {
        expect(instanceOfGroup(singleGroup)).toBe(true);
    });

    test('Should return false if too few', () => {
        const case1 = { id: 0, name: 'Midtnorge', skog: 'stor skog' };
        expect(instanceOfGroup(case1)).toBe(false);
    });

    test('Should return false if empty', () => {
        const case1 = {};
        expect(instanceOfGroup(case1)).toBe(false);
    });
});

describe('instanceOfSport', () => {
    test('Should return true', () => {
        expect(instanceOfSport(singleSport)).toBe(true);
    });

    test('Should return false if too ,amy', () => {
        const case1 = { id: 0, name: 'Midtnorge', skog: 'stor skog' };
        expect(instanceOfSport(case1)).toBe(false);
    });

    test('Should return false if empty', () => {
        const case1 = {};
        expect(instanceOfSport(case1)).toBe(false);
    });
});

describe('instanceOfClub', () => {
    test('Should return true', () => {
        expect(instanceOfClub(singleClub)).toBe(true);
    });

    test('Should return false if too ,amy', () => {
        const case1 = { id: 0, name: 'Midtnorge', skog: 'stor skog' };
        expect(instanceOfClub(case1)).toBe(false);
    });

    test('Should return false if empty', () => {
        const case1 = {};
        expect(instanceOfClub(case1)).toBe(false);
    });
});

describe('instanceOfCity', () => {
    test('Should return true', () => {
        expect(instanceOfCity(singleCity)).toBe(true);
    });

    test('Should return false if too ,amy', () => {
        const case1 = { id: 0, name: 'Midtnorge', skog: 'stor skog' };
        expect(instanceOfCity(case1)).toBe(false);
    });

    test('Should return false if empty', () => {
        const case1 = {};
        expect(instanceOfCity(case1)).toBe(false);
    });
});
