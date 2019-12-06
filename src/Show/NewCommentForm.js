import React from 'react';
import Swal from 'sweetalert2'

class NewCommentForm extends React.Component {

  state = {
    commentContent: ""
  }

  commentContentChange = (e) => { 
    this.setState({commentContent: e.target.value})
  }

  newCommentSubmit = (e) => {
    e.preventDefault();
    let content = e.target.content.value

    fetch("http://localhost:3001/comments", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'Authorization' : `Bearer ${localStorage.getItem('jwt')}`
      },
      body: JSON.stringify({
        movie: this.props.movie,
        content: content
      })
    })
    .then(res => res.json())
    .then(newComment => {
      if (newComment.message) {
        Swal.fire({
          icon: 'error',
          title: 'Unable to Add',
          text: `${newComment.message}`,
        })
      } else  {
        console.log(newComment)
        this.props.newCommnetAdded(newComment)
        this.props.addComment(newComment)
      }
    })

    this.setState({commentContent: ""})
  }

  render() {
    return (
      <div className="commentFormCon">
        <p className="formLabel">What did you think about this movie?</p>
        <form id="NewCommentForm" className="ui form" onSubmit={this.newCommentSubmit}>
          <div className="field">
            <textarea rows="2" name="content" form="NewCommentForm" onChange={this.commentContentChange} value={this.state.commentContent}></textarea>
          </div>
          <button className="ui inverted basic button" type="submit">Submit</button>
        </form>
      </div>
    )
  }

}

export default NewCommentForm