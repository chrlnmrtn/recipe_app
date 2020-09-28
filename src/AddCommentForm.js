import React, { useState } from "react";


export default function AddCommentForm({ onNewColor = f => f}) {
    const [userName, setUserName] = useState("");
    const [comment, setComment] = useState("");  
    const [rating, setRating] = useState("");
    const submit = e => { e.preventDefault();
    onNewColor(userName, comment,rating);
    setUserName("");
    setComment(""); 
    setRating("");}	


    return (
        <div>
        <form onSubmit={submit}>
        <h4>Add a Comment:</h4>
        <p>
        <input
        value={userName}
        onChange={event => setUserName(event.target.value)}
        type="text"
        maxLength="15"
        placeholder="Username"
        required
        /></p>

        <div>
        <p>
        <textarea
        rows="5" cols="60" 
        className="handleComment"
        value={comment}
        onChange={event => setComment(event.target.value)}
        type="text"
        maxLength="140"
        placeholder="Comment"
        required
        /></p>
        </div>
        

        <label >Rating:</label>
        <select id="rating" name="rating"
        value={rating}
        onChange={event => setRating(event.target.value)}
        required>
        <option value="">rate</option>
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        </select> 
        <button>ADD</button>      
        </form>
        </div>

        )
}