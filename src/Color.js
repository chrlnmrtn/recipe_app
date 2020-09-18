import React from "react";

import StarRating from "./StarRating";

export default function Color({id, rating,
  onRemove = f => f,
  onRate = f => f}) {
  
    return (
      <section>
  
      <StarRating
      selectedStars={rating}
      onRate={rating => onRate(id, rating)}
      />
  </section>
  );
  }