import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import SportCard from '../components/SportCard/sportCard';
import { button, resultPage } from '../styles/resultPage';

const ResultPage = (): JSX.Element => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    let listItems = [<></>];

    if (reduxState.questionnaire.recommendations) {
        listItems = reduxState.questionnaire.recommendations.map((result: any) => {
            //TODO Set correct redirect
            return <SportCard key={result.id} id={result.id} name={result.name} labels={[]} />;
        });
    }

    return (
        <div className={resultPage}>
            <h1>Idrettsvalgomat</h1>
            <p>Dine topp 3 resultater er:</p>
            {listItems}
            <br />
            <Button href="/questionnaire" className={button} variant="warning">
                Ta valgomaten igjen
            </Button>
        </div>
    );
};

export default ResultPage;
