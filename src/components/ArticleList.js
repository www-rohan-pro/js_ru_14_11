import React, { Component, PropTypes }  from 'react'
import Article from './Article'
import accordeon from '../decorators/accordeon'

class ArticleList extends Component {
    render() {
        const { articles, openArticle, openArticleId } = this.props

        const articleItems = articles.map(article => (
            <li key = {article.id}>
                <Article
                    article = {article}
                    isOpen = {article.id == openArticleId}
                    openArticle = {openArticle(article.id)}
                />
            </li>
        ))

        return (
            <ul>
                {articleItems}
            </ul>
        )
    }
}

ArticleList.propTypes = {
    articles: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.oneOfType([
                PropTypes.number,
                PropTypes.string
            ]).isRequired,
            title: PropTypes.string.isRequired,
            comments: PropTypes.array,
            text: PropTypes.string
        })
    ).isRequired
}

export default accordeon(ArticleList)