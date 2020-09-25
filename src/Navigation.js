import React from "react";
import { NavLink } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation(props) {

  return (
    <ul className="navigation">
    <li>
        
        <NavLink className="navigation-button"
          activeClassName="active-tab"
          to="/Home"
        >Home 
        </NavLink>
      </li>

      <li>
        <NavLink className="navigation-button"
          activeClassName="active-tab"
          to="/Breakfast"
        >Breakfast 
        </NavLink>
        </li>

      <li>
        <NavLink  className="navigation-button"
        activeClassName="active-tab"
        to="/LunchAndDinner"
        >Lunch and Dinner 
        </NavLink>
        </li>

      <li>
        <NavLink  className="navigation-button"
        activeClassName="active-tab"
        to="/Tacos"
        >Tacos 
        </NavLink>
        </li>

      <li>
        <NavLink  className="navigation-button"
        activeClassName="active-tab"
        to="/Sweets"
        >Sweets
        </NavLink>
        </li>

      <li>
        <NavLink  className="navigation-button"
        activeClassName="active-tab"
        to="/FrozenTreats"
        >Frozen Treats
        </NavLink>
        </li>

      <li>
        <NavLink  className="navigation-button"
        activeClassName="active-tab"
        to="Drinks"
        >Drinks
        </NavLink>
        </li>

        <li>
        <NavLink  className="navigation-button"
        activeClassName="active-tab"
        to="/MakeyourOwn"
        >Make Your Own
        </NavLink>
        </li>
        
        </ul>
  );
}