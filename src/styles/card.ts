import {classes, media, style} from 'typestyle';
import colors from './colors';

export const card = style({
    backgroundColor: colors.white,
    boxShadow: '0 0 4px 4px ' + colors.shadowColor,
    padding: '6px 4px 2px 6px',
    borderRadius: '10px',
    textAlign: 'left',
    fontFamily: 'Arial',
    color: colors.black,
    $nest: {
        '&:not(last-child)': {
            marginBottom: '16px',
        },
    },
});

export const cardHeader = style({
    padding: '4px',
});

export const cardBody = style({
    backgroundColor: 'inherit',
});

export const cardFooter = style({
    backgroundColor: colors.white,
});

export const cardImg = style({
    maxHeight: '250px',
    maxWidth: '300px',
});

export const secondaryCard = style({
    backgroundColor: colors.secondaryCardColor,
    borderRadius: '6px',
    textAlign: 'center',
    padding: '5px',
    $nest: {
        '&:not(last-child)': {
            marginBottom: '8px',
        },
    },
});

export const cardTitle = style({
    fontWeight: 800,
});

export const regionCard = classes(
    style({
        backgroundColor: colors.cardHeader,
    }),
    card,
);
