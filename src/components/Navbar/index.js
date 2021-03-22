import React, { useState, useEffect, useRef } from 'react';

import './styles.scss';

const Navbar = () => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);

    const handleClick = () => setMobileNav(!mobileNav);
  	const closeMobileMenu = () => setMobileNav(false);

    const changeBackground = () => {
        if(window.scrollY > 80) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    }

    window.addEventListener('scroll', changeBackground);

    // const ref = useRef();
    // const [scrolled, setScrolled] = useState(false);

    // const options = {};

    // const observer = new IntersectionObserver(([entry]) => {
    //     setScrolled(!entry.isIntersecting);
    // }, options);

    // observer.observe(ref);
    // // Custom Hook
    // const useOnScreen = (options) => {
    //     const ref = useRef();
    //     const [scrolled, setScrolled] = useState(false);

    //     useEffect(() => {
    //         const observer = new IntersectionObserver(([entry]) => {
    //             setScrolled(!entry.isIntersecting);
    //         }, options);

    //         if(ref.current) {
    //             observer.observe(ref.current);
            //     // if(ref.className == "navbar scrolled") {
            //     //     observer.unobserve(ref);
            //     // }
            // }
            // // observer.observe(ref);

    //         return () => {
    //             if(ref.current) {
    //                 observer.unobserve(ref.current);
    //             }
    //         };
    //     }, [ref, options]);

    //     return [ref, scrolled];
    // }

    // const [ref, scrolled] = useOnScreen({rootMargin: "20px"});


    // OG Nav Sidebar

    // const [change, setChange] = useState(false);
    // // const [changeBtn, setChangeBtn] = useState(false);

    // const onClickMenu = () => {
    //     setChange(!change);
    //     // setChangeBtn(!changeBtn);
    //     // console.log(change);
    //     // console.log(changeBtn);
    // }

    return (
        <div>
            <nav class={mobileNav ? "navbar mobile" : (scrolled ? "navbar scrolled" : "navbar")}>
                <ul class="navbar__list">
                    <li class="navbar__list-item" onClick={closeMobileMenu}>
                        <a href="#" className={scrolled ? "navbar__link scrolled" : "navbar__link"}>Home</a>
                    </li>
                    <li class="navbar__list-item" onClick={closeMobileMenu}>
                        <a href="#about" className={scrolled ? "navbar__link scrolled" : "navbar__link"}>About Us</a>
                    </li>
                    <li class="navbar__list-item" onClick={closeMobileMenu}>
                        <a href="#menu" className={scrolled ? "navbar__link scrolled" : "navbar__link"}>Menu</a>
                    </li>
                    <li class="navbar__list-item" onClick={closeMobileMenu}>
                        <a href="#gallery" className={scrolled ? "navbar__link scrolled" : "navbar__link"}>Photo Gallery</a>
                    </li>
                    <li class="navbar__list-item" onClick={closeMobileMenu}>
                        <a href="#contact" className={scrolled ? "navbar__link scrolled" : "navbar__link"}>Contact</a>
                    </li>
                </ul>
            </nav>
            <div className="navbar__toggle" onClick={handleClick}>
				<i className={mobileNav ? "fas fa-times" : "fas fa-bars" }></i>
		    </div>
        </div>

        
    )
}

export default Navbar;

{/* // OG Nav Sidebar
        // <div className="nav-menu">
        //     <div className={change ? "change nav-menu-bar" : "nav-menu-bar"} onClick={onClickMenu}>
        //     {/* <div className="nav-menu-bar" onClick={onClickMenu}> */}
        //         {/* <div id={change ? "change bar1" : "bar1"} className="bar"></div>
        //         <div id={change ? "change bar2" : "bar2"} className="bar"></div>
        //         <div id={change ? "change bar3" : "bar3"} className="bar"></div> */}
        {/* //         <div id="bar1" className="bar"></div>
        //         <div id="bar2" className="bar"></div>
        //         <div id="bar3" className="bar"></div>
        //         <ul className={change ? "change-btn" : "nav"} id="nav">
        //             <li className="nav-menu__item"><a href="/" className="nav-menu__link">Home</a></li>
        //             <li className="nav-menu__item"><a href="#about" className="nav-menu__link">About</a></li>
        //             <li className="nav-menu__item"><a href="#menu" className="nav-menu__link">Menu</a></li>
        //             <li className="nav-menu__item"><a href="#" className="nav-menu__link">Contact</a></li>
        //         </ul>
        //     </div> */}
        // </div> */}