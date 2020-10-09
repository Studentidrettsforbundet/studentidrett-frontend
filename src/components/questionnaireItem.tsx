import React from 'react';

export type QuestionnaireItemProps = {
    item: { id: string; question: string; leftItem: string; rightItem: string };
};

const QuestionnaireItem = (props: QuestionnaireItemProps & { onChange: any; error: string }) => {
    const handleChange = (event: any) => {
        props.onChange(event.target.value);
    };

    const radioButtons = Array.from(Array(5).keys()).map((number) => (
        <input
            key={`${props.item.id}-${number}`}
            type="radio"
            onChange={handleChange}
            name={props.item.leftItem + props.item.rightItem}
            value={number}
        />
    ));

    return (
        <div className="item" key="PLACEHOLDER">
            <h3> {props.item.question} </h3>
            {props.item.leftItem}
            {radioButtons}
            {props.item.rightItem}
            <br />
            {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
        </div>
    );
};

export default QuestionnaireItem;
