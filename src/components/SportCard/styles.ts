import { style, classes } from 'typestyle';
import colors from '../../styles/colors';

export const sportCard = classes(
    style({
        margin: '10px',
        backgroundColor: colors.white,
        filter: 'drop-shadow(0px 1px 1px rgba(0, 0, 0, 0.25))',
        borderRadius: '5px',
    }),
);
