import React from 'react';

const NumbersItem = (props) => {
    return (
        <article className="number">
            <i className={props.icon} />
            <p>{props.number}</p>
            <h3>{props.type}</h3>
        </article>
    )
}

export default NumbersItem;
