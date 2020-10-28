import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import QuestionnaireItem, { QuestionnaireItemProps } from '../components/QuestionnaireItem/questionnaireItem';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { fetchData } from '../services/api';

const QuestionnairePage = () => {
    const [fetched, setFetched] = useState(false);
    const [responseBody, setResponseBody] = useState({});
    const [questions, setQuestions] = useState([] as QuestionnaireItemProps[]);

    useEffect(() => {
        async function fetch() {
            fetchData('https://kundestyrt-nsi-backend.azurewebsites.net/questions').then((data) => {
                if (data === 'Something went wrong' || data === 'Connection error') {
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
            <h1>Questionnaire</h1>
            <Form
                onSubmit={onSubmit}
                validate={(values: any) => {
                    const errors: any = {};

                    const questionIds = questions.map(({ id }) => id);

                    questionIds.map((id) => {
                        if (!values[`${'name_' + id}`]) {
                            errors[`${'name_' + id}`] = 'Required';
                        }
                    });

                    return errors;
                }}
                render={({ handleSubmit, submitting }) => (
                    <form onSubmit={handleSubmit}>
                        {listItems}
                        <button type="submit" disabled={submitting}>
                            Send
                        </button>
                    </form>
                )}
            />
            {fetched && <Redirect to={{ pathname: 'questionnaire/result', state: responseBody }} />}
        </div>
    );
};
export default withRouter(QuestionnairePage);
