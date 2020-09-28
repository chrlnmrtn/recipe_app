import React, { useState } from 'react'
import Recipe from './Recipe';
import './index'

export default function Menu({ title, recipes }) {
    const [searchText, setSearchText] = useState("");
    
  const [recipe, setRecipe] = useState(recipes);


    const handleChange = value => {
        setSearchText(value);
        filterData(value);
      };

      const excludeColumns = ["id"];

      const filterData = (value) => {
        const lowercasedValue = value.toLowerCase().trim();
        if (lowercasedValue === "") setRecipe(recipes);
        else {
          const filteredData = recipes.filter(item => {
            return Object.keys(item).some(key =>
              excludeColumns.includes(key) ? false : item[key].toString().toLowerCase().includes(lowercasedValue)
            );
          });
          setRecipe(filteredData);
        }
      }
    
    return (

        <article>
             <div className="searchFormContainer">
            <div className="searchFormContainerItem"><h1 className="title">{title}</h1></div>
            <div className="searchFormContainerItem">
                <form className="inputSearch">
                    Search: <input
                    type="text"
                    placeholder="Recipe or Ingredients..."
                    value={searchText}
                    onChange={e => handleChange(e.target.value)}/>
                </form>
              </div>
            </div>

            <div className="grid-container">
            {recipe.map((recipe, i) => (
            <Recipe key={i} {...recipe} />
            ))}
            </div>
        
        </article>
        );
        }