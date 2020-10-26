import React from 'react';
import {
    instanceOfCity,
    instanceOfClub,
    instanceOfGroup,
    instanceOfRegion,
    instanceOfSport,
    instanceOfTeam,
} from '../../services/interfaceValidators';

describe('instanceOfRegion', () => {
    test('Should return true', () => {
        const case1 = { id: 0, name: 'Midtnorge' };
        expect(instanceOfRegion(case1)).toBe(true);
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
        const case1 = {
            id: 0,
            name: 'Men A',
            full_capacity: true,
            short_description: 'Elite team men',
            long_description:
                'The elite male football team at NTNUI. We exercise 4 times a week and play 2 matches a week',
            tryouts: true,
            registration_open: false,
            group: 0,
        };
        expect(instanceOfTeam(case1)).toBe(true);
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
        const case1 = {
            id: 0,
            name: 'ntnui football',
            description: 'A football group at NTNUI',
            cover_photo: 'photo',
            club: 0,
            city: 0,
            contact_email: 'football@ntnui.no',
            sports: [],
        };
        expect(instanceOfGroup(case1)).toBe(true);
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
        const case1 = { id: 0, name: 'Football', labels: [] };
        expect(instanceOfSport(case1)).toBe(true);
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
        const case1 = {
            id: 0,
            city: 0,
            name: 'NTNUI football',
            description: '',
            contact_email: 'info@ntnui.no',
            membership_fee: '200 kr',
            register_info: 'Register at ntnui.no/register',
        };
        expect(instanceOfClub(case1)).toBe(true);
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
        const case1 = { id: 0, name: 'Trondheim', region: 'Midtnorge', clubs: [] };

        expect(instanceOfCity(case1)).toBe(true);
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
