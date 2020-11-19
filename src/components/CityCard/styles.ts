import { style } from 'typestyle';

export const secondaryCard = style({
    $debugName: 'SecondaryCard',
    maxWidth: '400px',
    backgroundColor: 'rgb(236,236,236,1)',
    filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
    borderRadius: '6px',
    textAlign: 'center',
    padding: '5px',
    margin: '5px auto 0',
    $nest: {
        '&:not(last-child)': {
            marginBottom: '16px',
        },
    },
});