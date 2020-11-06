import React from 'react';
import { Card } from 'react-bootstrap';
import { emptyResult} from './styles';

const EmptyResult = () => {
    return (
        <div className={emptyResult}>
            Ingen resultater.
        </div>
    );
};

export default EmptyResult;
