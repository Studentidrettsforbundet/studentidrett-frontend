import { style, classes } from 'typestyle';
import colors from '../../styles/colors';
import {card} from '../../styles/card'

export const regionCard = classes(
    style({
        marginLeft: 'auto',
        marginRight: 'auto',
        padding: '10px',
        width: '100%',
        backgroundColor: colors.cardHeader,
        $nest: {
            '& div > h5': {
                fontWeight: 800,
                color: colors.secondary,
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto'
            },
        },
    }),
    card,
);