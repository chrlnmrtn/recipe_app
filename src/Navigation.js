import React from "react";
import { NavLink } from "react-router-dom";
import { Nav, NavItem} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Navigation(props) {
  return (
    <div>

        <Nav fill variant="tabs" defaultActiveKey="/Home" className="navigation">
        
        <NavItem>
        <NavLink
          activeClassName="active-tab"
          to="/Home"
        >Home 
        </NavLink>
        </NavItem>

        <NavItem>
        <NavLink
          activeClassName="active-tab"
          to="/Breakfast"
        >Breakfast 
        </NavLink>
        </NavItem>
      
        <NavItem>
        <NavLink 
        activeClassName="active-tab"
        to="/LunchAndDinner"
        >Lunch and Dinner 
        </NavLink>
        </NavItem>
      
        <NavItem>
        <NavLink 
        activeClassName="active-tab"
        to="/Tacos"
        >Tacos 
        </NavLink>
        </NavItem>
      
        <NavItem>
        <NavLink 
        activeClassName="active-tab"
        to="/Sweets"
        >Sweets
        </NavLink>
        </NavItem>
      
        <NavItem>
        <NavLink 
        activeClassName="active-tab"
        to="/FrozenTreats"
        >Frozen Treats
        </NavLink>
        </NavItem>
      
        <NavItem>
        <NavLink 
        activeClassName="active-tab"
        to="Drinks"
        >Drinks
        </NavLink>
        </NavItem>
      
        <NavItem>
        <NavLink 
        activeClassName="active-tab"
        to="/FortheDog"
        >For The Dog
        </NavLink>
        </NavItem>
      
        <NavItem>
        <NavLink 
        activeClassName="active-tab"
        to="/MakeitYourself"
        >Make it Yourself 
        </NavLink>
        </NavItem>

</Nav>

</div>
  );
}