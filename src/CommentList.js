import React from "react";

import Comment from "./Comment";

export default function CommentList({ comments = [], onRemoveComment= f => f, onRateColor = f => f
}) { 

  if (!comments.length) 
    return <div> No Comments Listed. (Add a Comment) </div>;

  return (
    comments.map(comment => (
      <Comment key={comment.id} {...comment}
      onRemove={onRemoveComment}
      onRate={onRateColor} />
  )));
    }

