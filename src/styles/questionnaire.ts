import { style } from 'typestyle';
import colors from './colors';

export const questionnaire = style({
    color: 'rgba(38, 54, 111, 1)',
    $nest: {
        span: {
            fontWeight: 700,
        },
    },
});

export const button = style({
    margin: '14px 0',
    alignSelf: 'flex-end',
    color: 'white',
    backgroundColor: colors.orange,
    borderColor: colors.orange,
    $nest: {
        '&:disabled': {
            color: 'white',
            backgroundColor: colors.orange,
            borderColor: colors.orange,
        },
    },
});
