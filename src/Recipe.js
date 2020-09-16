import React, { useState } from 'react'
import {
    Card, CardBody, Button, Collapse
  } from 'reactstrap';
  

export default function Recipe({ name, ingredients, steps, logo }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);
    
    return (

<div className="recipe_container">
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <>{logo}</>
        <h1 className="recipe_name">{name}</h1>
    </section>

    <Button color="info" onClick={toggle} >Recipe</Button>  
            <Collapse isOpen={isOpen}>
                <Card>
                <CardBody>
                <h2>Ingredients</h2>
                <ul className="ingredients">
                {ingredients.map((ingredient, i) => (
                <li key={i}>{ingredient.name}</li>))}
                </ul>
                
                <section className="instructions">
                <h2>Cooking Instructions</h2>
                {steps.map((step, i) => (
                <p key={i}>{step}</p>))}
                </section>
                </CardBody>
                </Card>
            </Collapse>
</div>
        );
        }