import React from 'react';
import { cityInterface, regionInterface } from '../interfaces';
import RegionCard from './regionCard';

type listProps = regionInterface[] | cityInterface[];

const List = (props: listProps) => {
    return (
        <div>
            <RegionCard id={props[0].id} name={props[0].name} />
        </div>
    );
};

export default List;
