import { style } from 'typestyle';
import colors from './colors';

export const questionnaire = style({
    color: colors.secondary,
    $nest: {
        span: {
            fontWeight: 700,
        },
    },
});

export const button = style({
    margin: '14px 0',
    alignSelf: 'flex-end',
});
