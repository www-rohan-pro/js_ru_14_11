import React from 'react'

export default (Component) => class WrappedComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            openArticleId: null
        }
    }

    render() {
        return <Component {...this.props} {...this.state} openArticle = {this.openArticle}/>
    }

    openArticle = id => ev => {
        this.setState({
            openArticleId: id == this.state.openArticleId ? null : id
        })
    }

}