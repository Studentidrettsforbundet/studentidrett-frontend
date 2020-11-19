import { style, classes } from 'typestyle';
import colors from '../../styles/colors';

export const groupCard = style({
    padding: 0,
    width: '240px',
    margin: '10px',
});

export const cardHeader = style({
    color: colors.cardHeader,
    fontSize: '19px',
    fontFamily: 'ArchivoSemiBold',
    textAlign: 'left',
    marginBottom: '10px',
});

export const cardBody = style({
    backgroundColor: 'inherit',
    color: colors.cardBodyText,
    padding: '15px',
    fontSize: '16px',
    textAlign: 'left',
});

export const scrollContainer = style({
    justifyContent: 'center',
    textAlign: 'center',
    width: '80%',
    margin: 'auto',
});

export const scrollCardHeader = style({
    color: colors.orange,
    fontSize: '13px',
    fontFamily: 'ArchivoSemiBold',
    textAlign: 'left',
    marginBottom: '12px',
});

export const scrollCardBody = style({
    backgroundColor: 'inherit',
    color: colors.cardBodyText,
    padding: '10px',
    margin: '5px',
});

export const scrollCardParagraph = style({
    margin: '5px 0',
    lineHeight: '17px',
    maxHeight: '34px',
    fontSize: '10px',
    textAlign: 'left',
    overflow: 'hidden',
});
