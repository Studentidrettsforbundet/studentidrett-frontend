import { style, classes } from 'typestyle';
import colors from '../../styles/colors';

export const regionCard = classes(
    style({
        cursor: 'pointer',
        margin: '0 auto 16px',
        padding: '10px',
        maxWidth: '500px',
        backgroundColor: colors.cardHeader,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '5px',
        $nest: {
            '& div > h5': {
                color: colors.secondary,
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto',
            },
        },
    }),
);
