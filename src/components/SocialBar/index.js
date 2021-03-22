import React from 'react';

import './styles.scss';

const SocialBar = () => {
    return (
        <section className="social-icons">
            <a href="#"><i className="fab fa-facebook facebook"/></a>
            <a href="#"><i className="fab fa-twitter twitter"/></a>
            <a href="#"><i className="fab fa-instagram instagram"/></a>
            <a href="#"><i className="fab fa-google-plus plus"/></a>
        </section>
    )
}

export default SocialBar;
