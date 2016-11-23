import React, { Component, PropTypes } from 'react'
import Comment from './Comment'
import toggleOpen from '../decorators/toggleOpen'

class CommentList extends Component {
    render() {
        return (
            <div>
                {this.getButton()}
                {this.getList()}
            </div>
        )
    }

    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments || !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getList() {
        const { comments, isOpen } = this.props
        if (!isOpen || !comments || !comments.length) return null
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <ul>{commentItems}</ul>
    }
}

CommentList.propTypes = {
    comments: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]).isRequired,
            title: PropTypes.string,
            text: PropTypes.string.isRequired,
            user: PropTypes.string.isRequired
        })
    )
}

export default toggleOpen(CommentList)