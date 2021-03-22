import React from 'react';

import './styles.scss';

const Menu = () => {
    return (
        <section className="menu" id="menu">
            <article className="menu__image"></article>
            <article className="menu__text">
                <div className="menu__text-center">
                    <h1 className="menu__title">Our Menu</h1>
                    <p className="menu__description">
                    Our diverse menu is made up of contemporary California cuisine and Asian inspired flavors... ranging from salads and sandwiches to wholesome grain bowls, and organic house-made desserts.  We have many organic options for conscious meat eaters, vegetarians and vegans alike. 
                    </p>
                    <a href="#" className="menu__button">See Full Menu</a>
                </div>
            </article>
        </section>
    )
}

export default Menu;
