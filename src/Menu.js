import React from 'react'
import Recipe from './Recipe';
import './index'

export default function Menu({ title, recipes }) {
    return (

        <article>
            
            <header>
            <h1 className="title">{title}</h1>
            </header>

            <div className="recipes">
            {recipes.map((recipe, i) => (
            <Recipe key={i} {...recipe} />
            ))}
            </div>
        
        </article>
        );
        }