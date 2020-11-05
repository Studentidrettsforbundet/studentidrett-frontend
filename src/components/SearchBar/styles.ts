import { style } from 'typestyle';
import colors from '../../styles/colors';

export const searchBar = style({
    backgroundColor: colors.white,
    padding: '16px',
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
    $nest: {
        '&:not(:last-child)': {
            marginRight: '4px',
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
