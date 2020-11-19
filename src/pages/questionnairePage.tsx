import React, { useEffect } from 'react';
import { Form, Field } from 'react-final-form';
import QuestionnaireItem from '../components/QuestionnaireItem/questionnaireItem';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';
import { handleQuestionsThunk } from '../services/api';
import { Button, Spinner } from 'react-bootstrap';
import FetchError from '../components/fetchError';
import { useDispatch, useSelector } from 'react-redux';
import { combinedStateInterface } from '../store/store';
import { questionnaire, button } from '../styles/questionnaire';

const QuestionnairePage = (): JSX.Element => {
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
        <div className={questionnaire}>
            <h1>Idrettsvalgomat</h1>
            <p>
                <span>Velkommen til NSIs idrettsvalgomat!</span>
                <br />
                <br />
                Du vil bli stilt noen spørsmål om hvilke egenskaper du foretrekker foran i en idrett. Dersom du velger
                det midterste punktet betyr det at du ikke foretrekker den ene over den andre.
                <br />
                <br />
                Lykke til!
            </p>

            <Form
                onSubmit={onSubmit}
                validate={(values: any) => {
                    const errors: any = {};

                    const questionIds = reduxState.questionnaire.questions.map(({ id }) => id);

                    questionIds.map((id) => {
                        if (!values[`${'name_' + id}`]) {
                            errors[`${'name_' + id}`] = 'Ikke besvart';
                        }
                        return <></>;
                    });

                    return errors;
                }}
                render={({ handleSubmit }) => (
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
                                    <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column' }}>
                                        {listItems}

                                        <Button
                                            className={button}
                                            variant="warning"
                                            type="submit"
                                            disabled={reduxState.thunk.post_in_progress}
                                        >
                                            {!reduxState.thunk.post_in_progress ? 'Send inn' : 'Sender...'}
                                        </Button>
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
