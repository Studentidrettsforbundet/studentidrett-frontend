import { classes, media, style } from 'typestyle';
import colors from './colors';

export const cardList = style(
    {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    media({ minWidth: 0, maxWidth: 767 }, { justifyContent: 'center' }),
);

export const card = style({
    maxWidth: '315px',
    backgroundColor: colors.white,
    boxShadow: '0 0 4px 4px ' + colors.shadowColor,
    borderRadius: '5px',
    textAlign: 'left',
    fontFamily: 'Arial',
    color: colors.secondary,
    $nest: {
        '&:not(last-child)': {
            margin: '0px 8px 16px',
        },
    },
});

export const cardHeader = style({
    padding: '4px',
});

export const cardBody = style({
    backgroundColor: 'inherit',
    padding: '5px 10px',
    borderRadius: '5px',
});

export const cardFooter = style({
    backgroundColor: colors.white,
});

export const imgContainer = style({
    textAlign: 'center',
    maxWidth: '315px',
});

export const cardImg = style({
    borderRadius: '5px',
    width: '100%',
    height: 'auto',
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
    color: colors.primary,
    paddingTop: '5px',
});

export const regionCard = classes(
    style({
        backgroundColor: colors.cardHeader,
        $nest: {
            '& div > h5': {
                fontWeight: 800,
                color: colors.secondary,
                textAlign: 'center',
            },
        },
    }),

    card,
);

export const infoStyle = style({
    color: colors.secondary,
});
