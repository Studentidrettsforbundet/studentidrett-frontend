import React from 'react';
import { Card } from 'react-bootstrap';

const FetchError = () => {
    return (
        <Card>
            <Card.Body>
                <Card.Title>Noe har gått galt</Card.Title>
                <img src={require('../assets/wrench.svg')} alt="error icon" className={'error_icon'} />
            </Card.Body>
        </Card>
    );
};

export default FetchError;
