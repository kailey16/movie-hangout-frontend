import React from 'react';

const Comment = (props) => {
    return (
      <div className="Comment">
        {props.mycomments ? <p className="commentMovieTitle">{props.comment.movie_title}<p className="commentContent">{props.comment.content}</p></p> : props.comment.content}
        {props.user.id === props.comment.user_id ? <i className="comDeleteButton window close outline icon" onClick={() => props.deleteComment(props.comment)}></i> : null}
      </div>
    )

}

export default Comment