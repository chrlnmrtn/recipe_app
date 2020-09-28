import React from "react";
import './index'
import Featured from "./Featured";

export default function HomeMenu({ title, recipes }) {   
    
    return (

        <article>
            
            <header>
            <span className="homeTitle">{title}</span>
            </header>


            <div className="grid-featured">
            {recipes.slice(0,1).map((recipe, i) => (
            <Featured key={i} {...recipe} />
            ))}
            </div>
        
        </article>
        );
        }