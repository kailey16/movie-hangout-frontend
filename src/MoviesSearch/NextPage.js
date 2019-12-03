import React from "react"

class NextPage extends React.Component{

    render(){
        return (
            <div className="next-page-container">
            <i onClick={() => this.props.previousPage()}
            className="arrow left icon"></i>

             <span className="page-text">Page: {this.props.page}</span>

            <i onClick={() => this.props.nextPage()}
            className="arrow right icon"></i>
            </div>
        )
    }
}

export default NextPage