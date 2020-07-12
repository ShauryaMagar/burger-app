import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredients from "./BurgerIngredients/BurgerIngredients";
const Burger = (props) => {
    const transformedIngredients = [];
    for (let key in props.ingredients)
        for (let i = 0; i < props.ingredients[key]; i++)
            transformedIngredients.push(<BurgerIngredients key={key + i} type={key} />)
            
        
    
    return (
        <div className={classes.Burger} >
            <BurgerIngredients type="bread-top" />
            {transformedIngredients}
            <BurgerIngredients type="bread-bottom" />
        </div>
    );
};


export default Burger;