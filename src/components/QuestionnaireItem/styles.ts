import { style } from 'typestyle';

export const questionnaireItem = style({
    color: 'rgba(38, 54, 111, 1)',
    background: 'white',
    borderRadius: 4,
    padding: '12px',
    alignContent: 'center',
    textAlign: 'center',
    $nest: {
        span: {
            fontWeight: 700,
        },
    },
});

export const radioButton = style({
    $nest: {
        input: {
            display: 'none',
        },
        'input + label span': {
            margin: '5px 5px 0 0',
            display: 'inline-block',
            border: '3px solid rgba(255, 171, 64, 1)',
            borderRadius: 100,
            height: '25px',
            width: '25px',
            cursor: 'pointer',
        },
        'input:checked + label span': {
            background: 'radial-gradient(rgba(255, 171, 64, 1) 50%, rgba(255, 0, 0, 0) 51%)',
        },
    },
});

export const questionText = style({
    fontSize: '14px',
    fontWeight: 700,
    color: 'black',
    textAlign: 'center',
});

export const radioLabels = style({
    fontSize: '12px',
    color: '#777777',
});
