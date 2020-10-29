import React from 'react';
import { Alert } from 'react-bootstrap';

const FetchError = () => {
    return (
        <Alert variant="danger" className="error_alert">
            <Alert.Heading>Noe har gått galt!</Alert.Heading>
            <img src={require('../assets/wrench.svg')} alt="error icon" className={'error_icon'} />
        </Alert>
    );
};

export default FetchError;
