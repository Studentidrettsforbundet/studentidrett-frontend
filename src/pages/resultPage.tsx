import React from 'react';
import { Button } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { combinedStateInterface } from '../store/store';

const ResultPage = () => {
    const reduxState = useSelector((state: combinedStateInterface) => state);
    let listItems = [<></>];

    if (reduxState.questionnaire.recommendations) {
        listItems = reduxState.questionnaire.recommendations.map((result: any) => {
            //TODO Set correct redirect
            return (
                <p key={result.id}>
                    <Link to={`/Trondheim/${result.name}`}>{result.name}</Link>
                </p>
            );
        });
    }

    return (
        <div className="container">
            <h1>Result</h1>
            {listItems}
            <br />
            <Button href="/questionnaire">Take the test again</Button>
        </div>
    );
};

export default ResultPage;
