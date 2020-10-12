import React, { useState } from 'react';
import { Form, Field } from 'react-final-form';
import QuestionnaireItem, { QuestionnaireItemProps } from '../components/questionnaireItem';
import { Redirect } from 'react-router';
import { withRouter } from 'react-router-dom';

let responseData;
fetch('<URL to backend>')
    .then((response) => response.json())
    .then((data) => {
        responseData = data;
    });

const questions: QuestionnaireItemProps[] = [
    {
        item: {
            id: 'id1',
            question: 'Do you prefer indoor or outdoor activities?',
            leftItem: 'Indoor',
            rightItem: 'Outdoor',
        },
    },
    {
        item: {
            id: 'id2',
            question: 'Do you prefer summer og winter activities?',
            leftItem: 'Summer',
            rightItem: 'Winter',
        },
    },
    {
        item: {
            id: 'id3',
            question: 'Do you prefer individual or team sports?',
            leftItem: 'Individual',
            rightItem: 'Team',
        },
    },
];
const listItems = questions.map((question) => (
    <Field
        name={question.item.id}
        component={({ input, meta }) => (
            <div>
                <QuestionnaireItem
                    item={question.item}
                    onChange={(event: any) => {
                        input.onChange(event);
                    }}
                    error={meta.error && meta.touched ? meta.error : ''}
                />
            </div>
        )}
    />
));

const dataResponse: any = [
    {
        name: 'Football',
        slug: 'Football',
    },
    { name: 'Basketball', slug: 'Basketball' },
    {
        name: 'Handball',
        slug: 'Handball',
    },
];

const QuestionnairePage = () => {
    const [fetched, setFetched] = useState(false);

    const onSubmit = async (values: unknown) => {
        fetch('https://www.example.com', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(values),
        }).then((data) => {
            console.log(data);
        });

        window.alert(JSON.stringify(values));
        setFetched(true);
    };

    return (
        <div className="overview">
            <h1>Questionnaire</h1>
            <Form
                onSubmit={onSubmit}
                validate={(values: any) => {
                    const errors: any = {};

                    const questionIds = questions.map(({ item }) => item.id);

                    questionIds.map((id) => {
                        if (!values[id]) {
                            errors[id] = 'Required';
                        }
                    });

                    return errors;
                }}
                render={({ handleSubmit, form, submitting, values }) => (
                    <form onSubmit={handleSubmit}>
                        {listItems}
                        <button type="submit" disabled={submitting}>
                            Send
                        </button>
                    </form>
                )}
            />
            {fetched && <Redirect to={{ pathname: 'questionnaire/result', state: dataResponse }} />}
        </div>
    );
};
export default withRouter(QuestionnairePage);
