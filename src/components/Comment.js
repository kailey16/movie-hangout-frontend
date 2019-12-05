import React from 'react';

const Comment = (props) => {

    return (
      <div className="Comment">
        {props.comment.content}  
        <i className="comDeleteButton window close outline icon" onClick={() => props.deleteComment(props.comment)}></i>
      </div>
    )

}

export default Comment  