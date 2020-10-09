import React from 'react';
import { Form, Field } from 'react-final-form';
import QuestionnaireItem, { QuestionnaireItemProps } from '../components/questionnaireItem';

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
};

let responseData;
fetch('<URL to backend>')
    .then((response) => response.json())
    .then((data) => {
        responseData = data;
    });

const questions: QuestionnaireItemProps[] = [
    { item: { id: 'id1', question: 'question 1', leftItem: 'left 1', rightItem: 'right 1' } },
    { item: { id: 'id2', question: 'question 2', leftItem: 'left 2', rightItem: 'right 2' } },
    { item: { id: 'id3', question: 'question 3', leftItem: 'left 3', rightItem: 'right 3' } },
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

const QuestionnairePage = () => {
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
        </div>
    );
};
export default QuestionnairePage;
