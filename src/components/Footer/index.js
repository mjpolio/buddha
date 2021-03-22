import React from 'react';

import './styles.scss';
import Copyright from './Copyright';
import Logo from '../../img/logo-small.png';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <img src={Logo} alt="" className="footer__logo" />

            <div className="footer__container">
                <div className="footer__container-left">
                    <div className="footer__contact">
                        <h2 className="footer__heading">Location</h2>
                        <div className="footer__contact-address">
                            <p className="footer__contact-street">915 Lorem Ipsum St,</p>
                            <p className="footer__contact-street">Seattle, WA 98122</p>
                        </div>
                        <p className="footer__contact-phone">(555) 666-7777</p>
                    </div>
                </div>

                <div className="footer__container-right">
                    <div className="footer__hours">
                        <h2 className="footer__heading">Hours</h2>
                        <p className="footer__hours-title">OPEN EVERY DAY</p> 
                        <p className="footer__hours-info"> Dinner: 5pm - 10pm</p> 
                        <p className="footer__hours-info">Happy Hour: 4pm - 6pm</p> 
                    </div>
                </div>
            </div>
                
          
            <Copyright />
        </footer>
    )
}

export default Footer;
