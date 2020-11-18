import { style } from 'typestyle';
import colors from '../../styles/colors';

export const searchBar = style({
    backgroundColor: colors.white,
    padding: '16px',
    margin: '0',
    marginBottom: '20px',
});

export const searchIconContainer = style({
    display: 'flex',
    alignItems: 'center',
});

export const searchBarButton = style({
    marginTop: '16px',
});

export const searchFilterButton = style({
    color: colors.primary,
    $nest: {
        '&:not(:last-child)': {
            marginRight: '5px',
        },
    },
});

export const filterButtonContainer = style({
    overflow: 'auto',
    display: 'flex',
    paddingBottom: '10px',
    marginTop: '-15px',
});

export const filterButton = style({
    fontSize: '12px',
    width: 'inherit',
});
