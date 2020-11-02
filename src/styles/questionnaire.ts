import { style } from 'typestyle';

export const questionnaire = style({
    color: 'rgba(38, 54, 111, 1)',
    $nest: {
        span: {
            fontWeight: 700,
        },
    },
});

export const questionnaireContent = style({
    padding: '4px',
});
