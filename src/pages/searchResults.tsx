import React from 'react';
import { useLocation } from 'react-router-dom';

const SearchResults = () => {
    const location = useLocation().search.split('=')[1];
    return (
        <React.Fragment>
            <div>
                {location}
            </div>
        </React.Fragment>);
};

export default SearchResults;