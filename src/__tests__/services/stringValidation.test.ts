import React from 'react';
import {
    makeInputSafe,
    stringNormalization,
    stringWhitelisting,
    trimWhiteSpaces,
    urlEncoding,
    validateString,
} from '../../services/stringValidation';

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
});

describe('TrimWhitespaces', () => {
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
});

describe('Whitelisting', () => {
    test('Empty text', () => {
        const case1 = '';
        const case2 = ' ';
        const case3 = '                   ';
        expect(stringWhitelisting(case1)).toBe(false);
        expect(stringWhitelisting(case2)).toBe(true);
        expect(stringWhitelisting(case3)).toBe(true);
    });

    test('Should allow all legal Characters', () => {
        const case1 = 'abcdefghijklmnopqrstuvwxyz';
        const case2 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        const case3 = 'ÄäÖö';
        const case4 = ",.-_ '";
        expect(stringWhitelisting(case1)).toBe(true);
        expect(stringWhitelisting(case2)).toBe(true);
        expect(stringWhitelisting(case3)).toBe(true);
        expect(stringWhitelisting(case4)).toBe(true);
    });

    test('Should allow random sentences with legal characters', () => {
        const case1 = "W'w.t_ÄKmm'bL  CQRiBdZjaZel'FEtz";
        const case2 = 'ÖJMk SHmoSrhtUVolyfGÖGBv-FTgGtYf';
        const case3 = "'RJUlPuWöwV'yFciNHfNxlVöVjdGt,JM";
        const case4 = "tO,TIät'zvI WXkCnA-ITfe,rxWäx__h";
        const case5 = "ul-v.wwy'öcäHlQsjU ÖwDakKX. nkaÖrfQX'JJoISäYKH.skI";
        expect(stringWhitelisting(case1)).toBe(true);
        expect(stringWhitelisting(case2)).toBe(true);
        expect(stringWhitelisting(case3)).toBe(true);
        expect(stringWhitelisting(case4)).toBe(true);
        expect(stringWhitelisting(case5)).toBe(true);
    });

    test('Should block dangerous characters', () => {
        const case1 = '/=()[]*';
        const case2 = "Röu[m(Fgj Z* LBpHY*l)/[rÄc'AYX/*";
        const case3 = '-Wqzkf]tKSVdsdfUfIO/I)vdXäb-YXJ.';
        expect(stringWhitelisting(case1)).toBe(false);
        expect(stringWhitelisting(case2)).toBe(false);
        expect(stringWhitelisting(case3)).toBe(false);
    });
});

describe('validateString', () => {
    test('Should block too long strings', () => {
        const case1 = 'jteazvxrfxenmkfanwon';
        expect(validateString(case1, 20)[0]).toBe(true);
        expect(validateString(case1, 20)[1]).toBe('');
        expect(validateString(case1, 19)[0]).toBe(false);
        expect(validateString(case1, 19)[1]).toBe('Too Long ');
    });

    test('Should be blocked by regex', () => {
        //Note, this is tested above, in test whitelist.
        //Here we only test the feedback string
        const case1 = '/=()[]*';
        expect(validateString(case1, 20)[0]).toBe(false);
        expect(validateString(case1, 20)[1]).toBe('Illegal Characters');
    });

    test('Should be blocked by regex and length', () => {
        //Note, this is tested above, in test whitelist.
        //Here we only test the feedback string
        const case1 = '/=()[]*';
        expect(validateString(case1, 3)[0]).toBe(false);
        expect(validateString(case1, 3)[1]).toBe('Too Long Illegal Characters');
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
