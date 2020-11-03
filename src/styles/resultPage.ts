import { style } from 'typestyle';
import colors from './colors';

export const resultPage = style({
    display: 'flex',
    flexDirection: 'column',
});

export const button = style({
    alignSelf: 'flex-end',
    backgroundColor: colors.orange,
    borderColor: colors.orange,
});
