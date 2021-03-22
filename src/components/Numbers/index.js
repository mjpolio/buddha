import React from 'react';

import './styles.scss';
import NumbersItem from '../NumbersItem';

const Numbers = () => {
    return (
        <section className="numbers">
            <NumbersItem
                icon={"fas fa-cloud-meatball"}
                number={"50"}
                type={"Meat Dishes"}
            />
            <NumbersItem
                icon={"fas fa-cheese"}
                number={"35"}
                type={"Cheese Dishes"}
            />
            <NumbersItem
                icon={"fas fa-pizza-slice"}
                number={"25"}
                type={"Pizzas"}
            />
            <NumbersItem
                icon={"fas fa-ice-cream"}
                number={"50"}
                type={"Desserts"}
            />
        </section>
    )
}

export default Numbers;
