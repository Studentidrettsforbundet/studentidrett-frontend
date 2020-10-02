import React from 'react';
import { Link, useLocation, matchPath } from 'react-router-dom';
import { regionInterface } from '../interfaces';

const RegionListElement = (props: regionInterface) => {
    return (
        <div className="Region" key={props.name}>
            <Link to={{ pathname: `/${props.name}`, state: props.name }}>{props.name}</Link>
        </div>
    );
};

export default RegionListElement;
