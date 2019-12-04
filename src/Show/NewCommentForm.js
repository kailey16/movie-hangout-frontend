import React from 'react';

const NewCommentForm = () => {

    return (
      <div className="commentFormCon">
        <p>Leave comments for the movie</p>
        <div className="NewCommentForm ui form">
          <div className="field">
            <textarea rows="2"></textarea>
          </div>
        </div>
      </div>
    )

}

export default NewCommentForm