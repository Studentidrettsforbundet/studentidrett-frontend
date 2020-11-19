import { style } from 'typestyle';

export const questionnaireItem = style({
    display: 'flex',
    flexDirection: 'column',
    color: 'rgba(38, 54, 111, 1)',
    background: 'white',
    borderRadius: 4,
    padding: '12px',
    alignItems: 'center',
    textAlign: 'center',
    $nest: {
        span: {
            fontWeight: 700,
        },
    },
    marginBottom: '4px',
    maxWidth: '700px',
});

export const radioButton = style({
    marginTop: '5px',
    $nest: {
        input: {
            display: 'none',
        },
        'input + label': {
            margin: '0',
            height: '0',
        },
        'input + label span': {
            display: 'inline-block',
            border: '3px solid rgba(255, 171, 64, 1)',
            borderRadius: 100,
            cursor: 'pointer',
        },
        '.controller2': {
            height: '24px',
            width: '24px',
        },
        '.controller1, .controller3': {
            height: '26px',
            width: '26px',
        },
        '.controller0, .controller4': {
            height: '32px',
            width: '32px',
        },
        'input:checked + label span': {
            background: 'radial-gradient(rgba(255, 171, 64, 1) 50%, rgba(255, 0, 0, 0) 51%)',
        },
    },
});

export const questionText = style({
    fontSize: '16px',
    fontWeight: 700,
    color: 'black',
    textAlign: 'center',
    marginBottom: '12px',
});

export const labelContainer = style({
    display: 'flex',
    minWidth: '280px',
    justifyContent: 'space-between',
    fontSize: '14px',
    color: '#777777',
    marginBottom: '6px',
});

export const buttonContainer = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    minWidth: '280px',
});
