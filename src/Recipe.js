import React, { useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import CommentList from "./CommentList"
import AddCommentForm from './AddCommentForm';
import { v4 } from "uuid";
  

export default function Recipe({ nameID, ingredients, steps, logo }) {
  const [comments, setComments] = useState("");
  const [modal, setModal] = useState(false);

  
  const toggle = () => setModal(!modal);

  
  return (
    <div className="grid-item">
    <section id={nameID.toLowerCase().replace(/ /g, "-")}>
        <>{logo}</>
        <h4 className="recipe_name">{nameID}</h4>
    </section>


    <Button color="info" onClick={toggle} >Recipe</Button>

    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>{nameID}</ModalHeader>
        <ModalBody >
        <>{logo}</>
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


      <h4>Comments: </h4>            
      <div className="comment-list">
      <CommentList
      comments={comments}
      
      />

    </div>
    <div className="addcommentform">
    <AddCommentForm
        onNewColor={(userName, comment, rating) => {
        const newComment = [
        ...comments,
        {
        id: v4(),
        rating,
        userName,
        comment
        }
        ];
        setComments(newComment);
        }}/>
        
    </div>

        
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggle}>Close</Button>
        </ModalFooter>
      </Modal>
      
      </div>
        );
        }