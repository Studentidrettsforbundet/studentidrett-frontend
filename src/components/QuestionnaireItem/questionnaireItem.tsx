import React from 'react';
import { questionnaireItem, radioButton, questionText, labelContainer, buttonContainer } from './styles';

export type QuestionnaireItemProps = {
    id: string;
    text: string;
    left: string;
    right: string;
};

const QuestionnaireItem = (props: { item: QuestionnaireItemProps } & { onChange: any; error: string }): JSX.Element => {
    const handleChange = (event: any) => {
        props.onChange(event.target.value);
    };

    const radioButtons = Array.from(Array(5).keys()).map((number) => {
        return (
            <span key={`${props.item.id}-${number}`} className={radioButton}>
                <input
                    className={radioButton}
                    id={`${props.item.id}-${number}`}
                    type="radio"
                    onChange={handleChange}
                    name={`${props.item.id}`}
                    value={number}
                    data-testid={`${props.item.id}-${number}`}
                />
                <label htmlFor={`${props.item.id}-${number}`}>
                    <span className={`controller${number}`} />
                </label>
            </span>
        );
    });

    return (
        <div className={questionnaireItem} key="PLACEHOLDER">
            <span className={questionText}>{props.item.text}</span>
            <div className={buttonContainer}>{radioButtons}</div>
            <div className={labelContainer}>
                <span>{props.item.left}</span>
                <span>{props.item.right}</span>
            </div>
            {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
        </div>
    );
};

export default QuestionnaireItem;
