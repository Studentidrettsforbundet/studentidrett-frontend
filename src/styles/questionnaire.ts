import { borderColor } from 'csx';
import { style } from 'typestyle';
import colors from './colors';

export const questionnaire = style({

    color: colors.secondary,
    margin: '0 auto',
    maxWidth: '650px',
    $nest: {
        span: {
            fontWeight: 700,
        },
    },
});

export const button = style({
    margin: '14px 0',
    alignSelf: 'flex-end',
    color: colors.secondary ,
    backgroundColor: colors.primary,
    borderColor: colors.primary
});
