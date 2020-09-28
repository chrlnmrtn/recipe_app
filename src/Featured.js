import React from 'react'
import { Media } from 'reactstrap';
  

export default function Featured({ nameID, ingredients, steps, logo }) {

  
  return (
    <div>
      <Media>
      <Media left href="#">
        {logo}
      </Media>
      <Media body>
        <Media heading className="featured-header">
        <section id={nameID.toLowerCase().replace(/ /g, "-")}>
        <h4 className="recipe_name">{nameID}</h4>
        </section> 
        </Media>
        <div className="featured-content">
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
          </div>
      </Media>
    </Media>
      
      </div>
        );
        }