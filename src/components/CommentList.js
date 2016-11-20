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

        let commentItem = null
        if(this.state.isOpen){
            const { comments } = this.props
            //тут ок, но вообще я б не советовал писать код в JSX - быстро становится нечитабельным
            commentItem = <ul>{comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)}</ul>
        }

        return (
            <div>
                <p>
                    {commentMore}
                </p>
                {commentItem}
            </div>
        )
    }

    handleClick = ev => {
        ev.preventDefault()
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

}

export default CommentList
