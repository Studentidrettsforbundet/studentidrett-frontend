import {classes, media, style} from 'typestyle';
import colors from './colors';

export const card = style({
    backgroundColor: colors.white,
    //boxShadow: '0 0 4px 4px ' + colors.shadowColor,
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    padding: '6px 4px 2px 6px',
    borderRadius: '4px',
    textAlign: 'left',
    //fontFamily: 'Arial',
    color: colors.cardBodyText,
    $nest: {
        '&:not(last-child)': {
            marginBottom: '16px',
        },
    },
    
});

export const cardHeader = style({
    margin: '2px 4px' ,
    color: colors.cardHeader,
    fontSize: '19px',
    fontFamily: 'ArchivoSemiBold',
    textAlign: 'left',
});

export const cardBody = style({
    backgroundColor: 'inherit',
    color: colors.cardBodyText,
    margin: '2px 4px',
    fontSize: '16px',
    textAlign: 'left',
});

export const cardFooter = style({
    backgroundColor: colors.white,
});

export const cardImg = style({
    // maxHeight: '250px',
    // maxWidth: '300px',
    maxHeight: '100%',
    maxWidth: '100%'
});

export const secondaryCard = style({
    backgroundColor: 'rgb(236,236,236,1)',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
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
