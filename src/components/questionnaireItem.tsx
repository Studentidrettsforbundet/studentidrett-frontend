import React from 'react';

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

    const radioButtons = Array.from(Array(5).keys()).map((number) => (
        <input
            style={{ margin: '2px' }}
            key={`${props.item.id}-${number}`}
            type="radio"
            onChange={handleChange}
            name={`${props.item.id}`}
            value={number}
            data-testid={`${props.item.id}-${number}`}
        />
    ));

    return (
        <div style={{ padding: '12px', alignContent: 'center' }} className="item" key="PLACEHOLDER">
            <label>
                <h4>{props.item.text}</h4>
                <div>
                    {props.item.left}
                    <span style={{ padding: '0px 12px' }}>{radioButtons}</span>
                    {props.item.right}
                </div>
                {props.error && <span style={{ color: 'red' }}>{props.error}</span>}
            </label>
        </div>
    );
};

export default QuestionnaireItem;
