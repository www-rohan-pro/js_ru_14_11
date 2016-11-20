import React, { Component } from 'react'
import Comment from './Comment'

class CommentList extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false
        }
    }

    render() {
        const commentMore = <a href = "#" onClick = {this.handleClick}>{ this.state.isOpen ? 'hide' : 'show' }</a>
        if(this.state.isOpen){
            const { comments } = this.props
            const commentItem = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)

            return (
                <div>
                    <p>
                        {commentMore}
                    </p>
                    <ul>
                        {commentItem}
                    </ul>
                </div>
            )
        } else {
            return (
                <div>
                    <p>
                        {commentMore}
                    </p>
                </div>
            )
        }
    }

    handleClick = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default CommentList