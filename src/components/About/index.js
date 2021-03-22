import React from 'react';

import './styles.scss';
import AboutItem from '../AboutItem';
const About = () => {
    return (
        <section className="about" id="about">
            <div>
                <h2 className="heading-primary">
                    About Us
                </h2>
            </div>
            <div className="about__center">
                <AboutItem 
                    icon={"fas fa-mug-hot"} 
                    header={"Drinks"} 
                    details={"Enjoy some of our delicious drinks"} />
                <AboutItem 
                    icon={"fas fa-utensils"} 
                    header={"Healthy Food"} 
                    details={"Simple, healthy, food is our specialty"} />
                <AboutItem 
                    icon={"fas fa-mortar-pestle"} 
                    header={"Organic Food"} 
                    details={"All of our ingredients are local, sustainable, and organic"} />
                <AboutItem 
                    icon={"fas fa-carrot"} 
                    header={"Vegetarian Dishes"} 
                    details={"The largest selection of vegetarian dishes in Seattle!"} />
                <AboutItem 
                    icon={"fas fa-fish"} 
                    header={"Seafood"} 
                    details={"All of our seafood comes from the PNW"} />
                <AboutItem 
                    icon={"fas fa-pepper-hot"} 
                    header={"Hot & Spicy"} 
                    details={"Feeling spicy? We've got you covered!"} />
            </div>
        </section>
    )
}

export default About;
