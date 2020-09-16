import React, { useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import "./index.css"

import Navigation from "./Navigation"
import Breakfast from './Breakfast'
import LunchAndDinner from './LunchAndDinner'
import Sweets from './Sweets'
import FrozenTreats from './FrozenTreats'
import Home from './Home'
import Tacos from './Tacos'
import Drinks from './Drinks'
import FortheDog from './FortheDog'
import MakeitYourself from './MakeitYourself'


export default function App() {
    const [selectedTab, setSelectedTab] = useState("");
 

    const handleSelectTab = (tab) => {
        console.log(tab);
        setSelectedTab(tab);
      };

    
    return (
        <div className="container">
            <div className="header">
            <div>Whip <u>IT</u> Up!</div>
            <div><h3>OVER 75, FAST, FUN AND EASY RECIPES</h3></div>
            </div>

            
        <Navigation selectedTab={selectedTab} onSelectTab={handleSelectTab} />

        <Switch>

            <Route
                path="/Home"
                render={() => (
                <Home />
                )}></Route>

            <Route
                path="/Breakfast"
                render={() => (
                <Breakfast />
                )}></Route>

            <Route
                path="/LunchAndDinner"
                render={() => (
                <LunchAndDinner />
                )}></Route>

            <Route
                path="/Tacos"
                render={() => (
                <Tacos />
                )}></Route>

            <Route
                path="/Sweets"
                render={() => (
                <Sweets />
                )}></Route>

            <Route
                path="/FrozenTreats"
                render={() => (
                <FrozenTreats />
                )}></Route>

            <Route
                path="/Drinks"
                render={() => (
                <Drinks />
                )}></Route>
            
            <Route
                path="/FortheDog"
                render={() => (
                <FortheDog />
                )}></Route>

            <Route
                path="/MakeitYourself"
                render={() => (
                <MakeitYourself />
                )}></Route>

            <Redirect to="/Home" />
        </Switch>

            
           
       </div>
    )
}
