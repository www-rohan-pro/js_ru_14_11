import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { addComment } from '../AC/comments'
import { loadArticleComments } from '../AC/articles'
import Comment from './Comment'
import Loader from './Loader'
import toggleOpen from '../decorators/toggleOpen'
import NewCommentForm from './NewCommentForm'

class CommentList extends Component {
    static propTypes = {
        //commentIds: PropTypes.array.isRequired,
        //from connect
        //comments: PropTypes.array.isRequired,
        //from toggleOpen decorator
        isOpen: PropTypes.bool.isRequired,
        toggleOpen: PropTypes.func.isRequired
    }

    static defaultProps = {
        comments: []
    }

    componentWillReceiveProps(nextProps){
        //if (nextProps.isOpen && !this.props.isOpen && !nextProps.article.text)
        if (nextProps.isOpen && !this.props.isOpen && !this.props.comments.every(comment => comment.user))
            this.props.loadArticleComments(this.props.article.id)
    }

    render() {
        return (
            <div>
                {this.getButton()}
                {this.getBody()}
            </div>
        )
    }


    getButton() {
        const { comments, isOpen, toggleOpen } = this.props
        if ( !comments.length) return <span>No comments yet</span>
        return <a href="#" onClick = {toggleOpen}>{isOpen ? 'hide' : 'show'} comments</a>
    }

    getBody() {
        const { article, comments, isOpen, addComment } = this.props
        if(article.loadingComments/* || !this.props.comments.every(comment => comment.user)*/) return <Loader />
        const commentForm = <NewCommentForm articleId = {article.id} addComment = {addComment} />
        if (!isOpen || !comments.length) return <div>{commentForm}</div>
        const commentItems = comments.map(comment => <li key = {comment.id}><Comment comment = {comment} /></li>)
        return <div><ul>{commentItems}</ul>{commentForm}</div>
    }
}

export default connect((state, props) => ({
    comments: props.article.comments.map(id => state.comments.get(id) || id)
}), { addComment, loadArticleComments })(toggleOpen(CommentList))