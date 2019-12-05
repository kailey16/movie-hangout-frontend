import React from 'react';
import Comment from './Comment'

const CommentRating = (props) => {

    return (
      <div className="CommentRating">
        {props.movieComments && props.movieComments.map(comm => <Comment key={comm.id} comment={comm} deleteComment={props.deleteComment}/>)}
      </div>
    ) 

}

export default CommentRating