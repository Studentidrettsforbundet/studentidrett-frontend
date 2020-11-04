import { important } from 'csx';
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
    margin: '0px 0px 0px 0px',
    width: '100%',
    maxWidth: '315px',
    backgroundColor: colors.white,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '5px',
    textAlign: 'left',
    color: colors.cardBodyText,
    $nest: {
        '&:not(last-child)': {
            margin: '0px 8px 16px',
        },
    },
});

export const cardHeader = style({
    margin: '2px 4px',
    color: colors.cardHeader,
    fontSize: '19px',
    fontFamily: 'ArchivoSemiBold',
    textAlign: 'left',
});

export const cardBody = style({
    backgroundColor: 'inherit',
    margin: '2px 4px',
    padding: '5px 10px',
    borderRadius: '5px',
});

export const cardFooter = style({
    backgroundColor: colors.white,
});

export const imgContainer = style({
    textAlign: 'center',
    maxWidth: '315px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
});

export const cardImg = style({
    borderRadius: '5px',
    width: '100%',
    height: 'auto',
});

export const secondaryCard = style({
    maxWidth: '400px',
    backgroundColor: 'rgb(236,236,236,1)',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '6px',
    textAlign: 'center',
    padding: '5px',
    margin: '5px auto 0',
    $nest: {
        '&:not(last-child)': {
            marginBottom: '8px',
        },
    },
});

export const cardTitle = style({
    color: colors.primary,
    paddingTop: '5px',
    fontFamily: 'ArchivoSemiBold, sans-serif',
});

export const infoStyle = style({
    color: colors.secondary,
});
