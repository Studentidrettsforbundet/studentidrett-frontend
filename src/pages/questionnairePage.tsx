import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import QuestionnaireItem, { QuestionnaireItemProps } from '../components/QuestionnaireItem/questionnaireItem';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { fetchData } from '../services/api';
import { Spinner } from 'react-bootstrap';
import FetchError from '../components/fetchError';

const QuestionnairePage = () => {
    const [fetchInProgress, setFetchInProgress] = useState(true);
    const [fetched, setFetched] = useState(false);
    const [responseBody, setResponseBody] = useState({});
    const [questions, setQuestions] = useState([] as QuestionnaireItemProps[]);
    const [sendInProgress, setsendInProgress] = useState(false);
    const [fetchFailed, setFetchFailed] = useState(false);

    useEffect(() => {
        async function fetch() {
            setFetchInProgress(true);
            fetchData('https://kundestyrt-nsi-backend.azurewebsites.net/questions').then((data) => {
                setFetchInProgress(false);
                setFetchFailed(false);
                if (data === 'Something went wrong' || data === 'Connection error') {
                    setFetchFailed(true);
                    console.error(data);
                    return;
                }
                setQuestions(data);
            });
        }
        fetch();
    }, []);

    const listItems = questions.map((question) => (
        <Field
            key={'key_' + question.id}
            name={'name_' + question.id}
            component={({ input, meta }) => (
                <div>
                    <QuestionnaireItem
                        item={question}
                        onChange={(event: any) => {
                            input.onChange(event);
                        }}
                        error={meta.error && meta.touched ? meta.error : ''}
                    />
                </div>
            )}
        />
    ));

    const onSubmit = async (values: any) => {
        const requestBody = Object.keys(values).map((key) => ({
            qid: key.replace('name_', ''),
            answer: values[key],
        }));
        setsendInProgress(true);
        fetch('https://kundestyrt-nsi-backend.azurewebsites.net/questionnaire/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(requestBody),
        })
            .then((response) => {
                if (response.ok) {
                    return response.json();
                } else {
                    throw new Error();
                }
            })
            .then((data) => {
                setResponseBody(data);
                setFetched(true);
            })
            .catch(() => {
                console.error('Something went wrong posting answers');
            });
    };

    return (
        <div style={{ textAlign: 'center' }} className="overview">
            <h1>Idrettsvalgomat</h1>
            <Form
                onSubmit={onSubmit}
                validate={(values: any) => {
                    const errors: any = {};

                    const questionIds = questions.map(({ id }) => id);

                    questionIds.map((id) => {
                        if (!values[`${'name_' + id}`]) {
                            errors[`${'name_' + id}`] = 'Ikke besvart';
                        }
                    });

                    return errors;
                }}
                render={({ handleSubmit, submitting }) => (
                    <>
                        {fetchInProgress ? (
                            <div className="center_container">
                                <Spinner animation="border" />
                            </div>
                        ) : (
                            <>
                                {fetchFailed ? (
                                    <>
                                        <FetchError />
                                    </>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        {listItems}
                                        {sendInProgress ? (
                                            <button type="submit" disabled={submitting}>
                                                <Spinner
                                                    as="span"
                                                    animation="grow"
                                                    size="sm"
                                                    role="status"
                                                    aria-hidden="true"
                                                />
                                                Send
                                            </button>
                                        ) : (
                                            <button type="submit" disabled={submitting}>
                                                Send
                                            </button>
                                        )}
                                    </form>
                                )}
                            </>
                        )}
                    </>
                )}
            />
            {fetched && <Redirect to={{ pathname: 'questionnaire/result', state: responseBody }} />}
        </div>
    );
};
export default withRouter(QuestionnairePage);
