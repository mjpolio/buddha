import React from 'react';

import './styles.scss';
import Logo from '../../img/logo-small.png';

const Header = () => {
    return (
        <div>
            <header className="header">
                <div className="header__hero">
                    <img src={Logo} alt="" className="header__logo"/>
                    <h1 className="header__title">
                        The Zen Cafe
                        <div className='underline'></div>
                    </h1>
				    
                    <h1 className="header__subtitle">Food for your Soul</h1>
                    <a href="#" className="header__button pulsate">Book a Table</a>
                </div>

            </header>
        </div>
    )
}

export default Header;
