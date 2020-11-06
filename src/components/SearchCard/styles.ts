import { style, classes } from 'typestyle';
import colors from '../../styles/colors';



export const searchCard = classes(
    style({
        cursor: 'pointer',
        margin: '0 auto 16px',
        padding: '10px',
        maxWidth: '500px',
        backgroundColor: colors.white,
        filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
        borderRadius: '5px',
        $nest: {
            '& span': {
                color: colors.secondary,
                textAlign: 'center',
                marginTop: 'auto',
                marginBottom: 'auto'
            },
            '& h5': {
                color: colors.orange,
            }
        },
    }),
);