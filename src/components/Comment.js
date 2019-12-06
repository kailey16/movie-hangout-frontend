import React from 'react';

const Comment = (props) => {
    return (
      <div className="Comment">
        {props.mycomments ? <p className="commentMovieTitle">{props.comment.movie_title}<p className="commentContent">{props.comment.content}</p></p> : props.comment.content}
        <i className="comDeleteButton window close outline icon" onClick={() => props.deleteComment(props.comment)}></i>
      </div>
    )

}

export default Comment