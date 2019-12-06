import React from 'react';
import Comment from './Comment'

const CommentRating = (props) => {
  
    return (
      <div className={props.classes}>
        {props.mycomments ? <div className="myCommentsTitle">MY COMMENTS</div> : null}
        {(props.movieComments.length > 0) && props.movieComments.map(comm => <Comment key={comm.id} comment={comm} deleteComment={props.deleteComment} mycomments={props.mycomments} />)}
      </div>
    ) 

}

export default CommentRating