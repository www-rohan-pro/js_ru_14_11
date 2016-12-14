import React, { Component, PropTypes } from 'react'
import CommentListByPage from '../components/CommentListByPage'

class CommentRoot extends Component {
  static propTypes = {

  };

  render() {
    return (
      <div>
        <CommentListByPage />
        {this.props.children}
      </div>
    )
  }
}

export default CommentRoot