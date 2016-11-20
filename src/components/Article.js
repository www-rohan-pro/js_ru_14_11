import React, { Component } from 'react'
import CommentList from './CommentList'

class Article extends Component {

    constructor() {
        super()
        this.state = {
            isOpen: false,
            obj: { foo: 'bar' }
        }
    }

    render() {
        const { article } = this.props
        const text = <p>{article.text}</p>
        const comments = 'comments' in article ? <CommentList comments = {article.comments} /> : null
        const body = this.state.isOpen ? <div>{text}{comments}</div> : null

        return (
            <section>
                <h3 onClick = {this.handleClick}>{article.title}</h3>
                {body}
            </section>
        )
    }

    handleClick = ev => {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
}

export default Article