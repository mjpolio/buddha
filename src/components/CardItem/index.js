import React from 'react';

const CardItem = (props) => {
    return (
        <article className="card">
            <img src={props.imgSrc} alt="" className="card__img"/>
            <div className="card__text">
                <h1>{props.meal}</h1>
            </div>
            <div className="card__footer">
                <div className="card__footer-text">
                    <h2 className="card__footer-price">
                        <i className="fas fa-dollar-sign" />
                        {props.cost}
                    </h2>
                </div>
                <div className="card__footer-btn">
                    <button type="button" className="card__footer-btn-btn">Order Now</button>
                </div>
            </div>
        </article>
    )
}

export default CardItem;
