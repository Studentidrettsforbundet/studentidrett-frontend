import React from 'react';
import { emptyResult} from './styles';


const EmptyResult = (): JSX.Element => {
    return <div className={emptyResult}>Ingen resultater.</div>;
};

export default EmptyResult;
