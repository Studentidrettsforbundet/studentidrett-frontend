import React from 'react';
import { Card } from 'react-bootstrap';

const EmptyResult = (): JSX.Element => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Søket gav ingen resultater</Card.Title>
                <img src={require('../assets/sadFace.svg')} alt="unhappy icon" className={'unhappy_icon'} />
            </Card.Body>
        </Card>
    );
};

export default EmptyResult;
