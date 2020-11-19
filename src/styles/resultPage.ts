import { style } from 'typestyle';
import colors from '../styles/colors';

export const resultPage = style({
    display: 'flex',
    flexDirection: 'column',
    margin: '0 auto',
    maxWidth: '650px',
});

export const button = style({
    alignSelf: 'flex-end',
    color: 'rgb(38, 54, 111) !important',
    backgroundColor: colors.primary,
    borderColor: colors.primary,
});
