import React from 'react';
import { makeInputSafe, stringNormalization, trimWhiteSpaces, urlEncoding } from '../../services/stringValidation';

describe('MakeInputSafe', () => {
    test('Should make sentence safe and normalized', () => {
        const case1 =
            'Hello\u002C\u0020I\u0020\u0061\u006D\u0020' + 'a\u0020\u0070\u0072\u006F\u0067\u0072\u0061m\u006D\u0065r';

        expect(makeInputSafe(case1, 25)).toBe('Hello%2C%20I%20am%20a%20programmer');
    });

    test('Should make sentence with whitespace safe and normalized', () => {
        const case1 =
            '        Hello\u002C\u0020I\u0020\u0061\u006D\u0020                 ' +
            'a\u0020\u0070\u0072\u006F\u0067\u0072\u0061m\u006D\u0065r             ';

        expect(makeInputSafe(case1, 25)).toBe('Hello%2C%20I%20am%20a%20programmer');
    });
});

describe('stringNormalization', () => {
    test('Should normalize simple characters', () => {
        const case1 = '\u004B';
        const case2 = '\u004B\u0026\u00FF';
        expect(stringNormalization(case1)).toBe('K');
        expect(stringNormalization(case2)).toBe('K&ÿ');
    });

    test('Should normalize full sentence', () => {
        const case1 =
            '\u0048\u0065\u006C\u006C\u006F\u002C\u0020\u0049\u0020\u0061\u006D\u0020' +
            '\u0061\u0020\u0070\u0072\u006F\u0067\u0072\u0061\u006D\u006D\u0065\u0072';

        expect(stringNormalization(case1)).toBe('Hello, I am a programmer');
    });

    test('Should normalize an empty sentence', () => {
        const case1 = '';

        expect(stringNormalization(case1)).toBe('');
    });
});

describe('trimWhitespaces', () => {
    test('Should do nothing, single word', () => {
        const case1 = 'Test';
        expect(trimWhiteSpaces(case1)).toBe(case1);
    });

    test('Should do nothing, sentence', () => {
        const case1 = 'Test this code please';
        expect(trimWhiteSpaces(case1)).toBe(case1);
    });

    test('Should remove extra internal spaces', () => {
        const case1 = 'Test  this  code  please';
        expect(trimWhiteSpaces(case1)).toBe('Test this code please');
    });

    test('Should remove extra external spaces', () => {
        const case1 = ' Test this code please ';
        const case2 = '     Test this code please               ';
        expect(trimWhiteSpaces(case1)).toBe('Test this code please');
        expect(trimWhiteSpaces(case2)).toBe('Test this code please');
    });

    test('Should remove extra external and internal spaces', () => {
        const case1 = '     Test      this       code please               ';
        expect(trimWhiteSpaces(case1)).toBe('Test this code please');
    });

    test('Should handle empty input', () => {
        const case1 = '';
        expect(trimWhiteSpaces(case1)).toBe('');
    });

    test('Should handle only spaces', () => {
        const case1 = '                                                  ';
        expect(trimWhiteSpaces(case1)).toBe('');
    });
});

describe('urlEncoding', () => {
    test('Should do nothing', () => {
        const case1 = 'Kristoffer';
        const case2 = 'ProgrammingIsSuperCool';
        const case3 = '';

        expect(urlEncoding(case1)).toBe('Kristoffer');
        expect(urlEncoding(case2)).toBe('ProgrammingIsSuperCool');
        expect(urlEncoding(case3)).toBe('');
    });

    test('Should replace spaces', () => {
        const case1 = 'I ';
        const case2 = 'I am';
        const case3 = 'I am super cool';
        expect(urlEncoding(case1)).toBe('I%20');
        expect(urlEncoding(case2)).toBe('I%20am');
        expect(urlEncoding(case3)).toBe('I%20am%20super%20cool');
    });

    test('Should replace special characters', () => {
        const case1 = '=';
        const case2 = '¤&&//(()';
        const case3 = '^*:;:';
        expect(urlEncoding(case1)).toBe('%3D');
        expect(urlEncoding(case2)).toBe('%C2%A4%26%26%2F%2F(()');
        expect(urlEncoding(case3)).toBe('%5E*%3A%3B%3A');
    });
});
