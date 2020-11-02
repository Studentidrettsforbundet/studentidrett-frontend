import React from 'react';
import { Button } from 'react-bootstrap';
import SportCard from '../components/SportCard/sportCard';
import { button, resultPage } from '../styles/resultPage';
const ResultPage = (props: any) => {
    const results = props.location.state;
    const listItems = results.recommendation.map((result: any) => {
        return <SportCard key={result.id} id={result.id} name={result.name} labels={[]} />;
    });

    return (
        <div className={resultPage}>
            <h1>Idrettsvalgomat</h1>
            <p>Dine topp 3 resultater er:</p>
            {listItems}
            <br />
            <Button href="/questionnaire" className={button}>
                Ta valgomaten igjen
            </Button>
        </div>
    );
};

export default ResultPage;
