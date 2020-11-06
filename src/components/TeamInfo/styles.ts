import { classes, style } from 'typestyle';
import colors from '../../styles/colors';
import { infoStyle } from '../../styles/card';


export const icon = style({ height: '18px', width: '18px' });

export const list = style({ marginBottom: '10px', padding: 0 });

export const listItem = style({ display: 'flex', justifyContent: 'space-between' });

export const linkItem = classes(
    listItem,
    style({
        justifyContent: 'flex-start',
        color: colors.primary,
        $nest: {
            '&:hover': {
                color: colors.secondary,
            },
            '&>div': {
                marginRight: '10px',
            },
        },
    }),
);

export const teamInfo = classes(
    style({
        maxWidth: '550px',
        margin: 'auto',
    }),
    infoStyle,
);
