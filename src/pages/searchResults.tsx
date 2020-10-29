import React from 'react';
import { useLocation } from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";
import {combinedStateInterface} from "../store/store";

const SearchResults = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    const dispatch = useDispatch();
    const location = useLocation().search.split('=')[1];
    return (
        <React.Fragment>
            <div>
                {location}
            </div>
        </React.Fragment>);
};

export default SearchResults;