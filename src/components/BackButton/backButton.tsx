import React from 'react'
import { useHistory } from 'react-router-dom'
import { Button } from 'react-bootstrap';
import './style.css'

const BackButton = () => {
    const history = useHistory();
    const buttonClick = () => {
        history.go(-1);
    }
    return (<Button className='button' onClick={buttonClick}> Tilbake </Button>)

}

export default BackButton;