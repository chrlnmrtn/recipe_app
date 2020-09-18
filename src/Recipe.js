import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ColorList from "./ColorList"
import colorData from "./color-data.json";
import AddColorForm from './AddColorForm';
  

export default function Recipe({ nameID, ingredients, steps, logo }) {
  const [colors] = useState(colorData);

    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);
    
    return (

    <div className="grid-item">
    <section id={nameID.toLowerCase().replace(/ /g, "-")}>
        <>{logo}</>
        <h4 className="recipe_name">{nameID}</h4>
    </section>

    <Button color="info" onClick={toggle} >Recipe</Button>

    <Modal isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle}>{nameID}</ModalHeader>
        <ModalBody>
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

        <AddColorForm />
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      
      
      <ColorList
      colors={colors} />
      </div>
        );
        }