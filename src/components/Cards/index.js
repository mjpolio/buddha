import React from 'react';

import './styles.scss';
import CardItem from '../CardItem';

import breakfastImg from '../../img/breakfast.jpg';
import lunchImg from '../../img/lunch.jpg';
import dinnerImg from '../../img/dinner.jpg';


const Cards = () => {
    return (
       <section className="cards">
           <div>
               <h2 className="heading-primary gradient">Food Fusion</h2>
           </div>
           <div className="cards__container">
               <CardItem 
                    imgSrc={breakfastImg}
                    meal={"Breakfast"}
                    cost={"25"}
               />
               <CardItem 
                    imgSrc={lunchImg}
                    meal={"Lunch"}
                    cost={"35"}
               />
               <CardItem 
                    imgSrc={dinnerImg}
                    meal={"Dinner"}
                    cost={"45"}
               />
           </div>
       </section>
    )
}

export default Cards;
