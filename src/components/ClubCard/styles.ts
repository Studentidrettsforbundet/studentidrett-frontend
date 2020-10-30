import { style, classes } from 'typestyle';
import colors from '../../styles/colors';


export const clubCard = style({
        padding: 0,
    
});

export const cardHeader = style({
    color: colors.cardHeader,
    fontSize: '19px',
    fontFamily: 'ArchivoSemiBold',
    textAlign: 'left',
    marginBottom: '10px'

});

export const cardBody = style({
    backgroundColor: 'inherit',
    color: colors.cardBodyText,
    padding: '15px',
    fontSize: '16px',
    textAlign: 'left',

});