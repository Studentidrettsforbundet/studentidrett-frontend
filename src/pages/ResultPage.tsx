import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ResultPage = (props: any) => {
    const resultList = props.location.state;
    const listItems = resultList.map((result: any) => {
        return (
            <p>
                <Link to={`/Midtnorge/${result.slug}`}>{result.name}</Link>
            </p>
        );
    });

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
