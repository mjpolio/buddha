import React from 'react';

const AboutItem = (props) => {
    return (
        <article className="about__article">
            
            <div className="about__text">
            <div className="about__icon">
                <i className={props.icon} />
            </div>
                <h2 className="about__subtitle">{props.header}</h2>
                <p className="about__info">{props.details}</p>
            </div>
        </article>
    )
}

export default AboutItem;
