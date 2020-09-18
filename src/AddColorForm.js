import React, { useState } from "react";


export default function AddColorForm({ onNewColor = f => f }) {
    const [title, setTitle] = useState("");
    const [color, setColor] = useState("#000000");
    const submit = e => { e.preventDefault();
    onNewColor(title, color);
    setTitle("");
    setColor(""); }


    return (
        <div className="form-comment">
        <h6>Comments:</h6>
        <form onSubmit={submit}>
        <input
        value={title}
        onChange={event => setTitle(event.target.value)}
        type="text"
        placeholder="comment..."
        required
        />
        <input
        value={color}
        onChange={event => setColor(event.target.value)}
        type="color"
        required
        />
        <button>ADD</button>
        </form>
        </div>
        )
}