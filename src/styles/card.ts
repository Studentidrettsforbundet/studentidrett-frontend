import { media, style } from 'typestyle';
import colors from './colors';

export const cardList = style(
    {
        $debugName: 'cardList',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    media({ minWidth: 0, maxWidth: 767 }, { justifyContent: 'center' }),
);

export const card = style({
    $debugName: 'card',
    margin: '0px 8px 16px 8px',
    width: '100%',
    maxWidth: '315px',
    backgroundColor: colors.white,
    filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))',
    borderRadius: '10px',
    textAlign: 'left',
    color: colors.cardBodyText,
    $nest: {
        '&:not(last-child)': {
            margin: '0px 8px 16px 8px',
        },
    },
});

export const cardHeader = style({
    $debugName: 'cardHeader',
    margin: '2px 4px',
    color: colors.cardHeader,
    fontSize: '19px',
    fontFamily: 'ArchivoSemiBold',
    textAlign: 'left',
});

export const cardBody = style({
    $debugName: 'cardBody',
    backgroundColor: 'inherit',
    margin: '2px 4px',
    padding: '5px 10px',
    borderRadius: '5px',
});

export const cardFooter = style({
    $debugName: 'cardFooter',
    backgroundColor: colors.white,
});

export const imgContainer = style({
    $debugName: 'imgContainer',
    textAlign: 'center',
    maxWidth: '315px',
    display: 'block',
    marginLeft: 'auto',
    marginRight: 'auto',
});

export const cardImg = style({
    $debugName: 'cardImg',
    borderRadius: '5px',
    width: '100%',
    height: 'auto',
});

export const cardTitle = style({
    $debugName: 'cardTitle',
    color: colors.primary,
    paddingTop: '5px',
    fontFamily: 'ArchivoSemiBold, sans-serif',
});

export const infoStyle = style({
    $debugName: 'inforStyle',
    color: colors.secondary,
});
