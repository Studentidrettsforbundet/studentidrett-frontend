import React, { useEffect, useState } from 'react';
import { Form, Field } from 'react-final-form';
import QuestionnaireItem, { QuestionnaireItemProps } from '../components/QuestionnaireItem/questionnaireItem';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { fetchData, handleQuestionsThunk } from '../services/api';
import { Spinner } from 'react-bootstrap';
import FetchError from '../components/fetchError';
import { useDispatch, useSelector } from 'react-redux';
import { combinedStateInterface } from '../store/store';

const QuestionnairePage = () => {
    const dispatch = useDispatch();
    const reduxState = useSelector((state: combinedStateInterface) => state);

    useEffect(() => {
        if (
            !reduxState.thunk.fetch_in_progress &&
            reduxState.thunk.fetch_failed_count < 3 &&
            !reduxState.thunk.fetch_success
        ) {
            dispatch(handleQuestionsThunk());
        }
    });

    const listItems = reduxState.questionnaire.questions.map((question) => (
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

        if (
            !reduxState.thunk.post_in_progress &&
            reduxState.thunk.post_failed_count < 3 &&
            !reduxState.thunk.post_success
        ) {
            dispatch(handleQuestionsThunk(false, requestBody));
        }
    };

    return (
        <div style={{ textAlign: 'center' }} className="overview">
            <h1>Questionnaire</h1>
            <Form
                onSubmit={onSubmit}
                validate={(values: any) => {
                    const errors: any = {};

                    const questionIds = reduxState.questionnaire.questions.map(({ id }) => id);

                    questionIds.map((id) => {
                        if (!values[`${'name_' + id}`]) {
                            errors[`${'name_' + id}`] = 'Required';
                        }
                    });

                    return errors;
                }}
                render={({ handleSubmit, submitting }) => (
                    <>
                        {reduxState.thunk.fetch_in_progress ? (
                            <div className="center_container">
                                <Spinner animation="border" />
                            </div>
                        ) : (
                            <>
                                {reduxState.thunk.fetch_failed ? (
                                    <>
                                        <FetchError />
                                    </>
                                ) : (
                                    <form onSubmit={handleSubmit}>
                                        {listItems}
                                        {reduxState.thunk.post_in_progress ? (
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
            {reduxState.thunk.post_success && <Redirect to={{ pathname: 'questionnaire/result' }} />}
        </div>
    );
};
export default withRouter(QuestionnairePage);
