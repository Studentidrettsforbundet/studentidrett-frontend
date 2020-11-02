import React from 'react';
import { questionnaireItem, radioButton, questionText, radioLabels } from './styles';
//import './questionnaireItem.css';

export type QuestionnaireItemProps = {
    id: string;
    text: string;
    left: string;
    right: string;
};

const QuestionnaireItem = (props: { item: QuestionnaireItemProps } & { onChange: any; error: string }) => {
    const handleChange = (event: any) => {
        props.onChange(event.target.value);
    };

    const radioButtons = Array.from(Array(5).keys()).map((number) => {
        return (
            <span key={`${props.item.id}-${number}`} className={radioButton}>
                <input
                    id={`${props.item.id}-${number}`}
                    type="radio"
                    onChange={handleChange}
                    name={`${props.item.id}`}
                    value={number}
                    data-testid={`${props.item.id}-${number}`}
                />
                <label htmlFor={`${props.item.id}-${number}`}>
                    <span />
                </label>
            </span>
        );
    });

    return (
        <div className={questionnaireItem} key="PLACEHOLDER">
            <span className={questionText}>{props.item.text}</span>
            <div className={radioLabels}>
                {props.item.left}
                <span style={{ padding: '0px 12px' }}>{radioButtons}</span>
                {props.item.right}
            </div>
            {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
        </div>
    );
};

export default QuestionnaireItem;
