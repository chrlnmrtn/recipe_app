import React from "react";

import StarRating from "./StarRating";

export default function Comment({id, userName, comment, rating,
  onRate = f => f}) {
  
    return (
      <section className="comment-user">
     <h5>{userName}</h5>
      <div className="handleComment">{comment}</div>
  
      <StarRating
      selectedStars={rating}
      onRate={rating => onRate(id, rating)}
      />
  </section>
  );
  }