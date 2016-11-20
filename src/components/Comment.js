import React from 'react'

function Comment(props) {
    const { comment } = props

    const commentTitle = 'title' in comment ? <h5>{comment.title}</h5> : null

    return (
        <section>
            <h4>{comment.user}</h4>
            <section>
                {commentTitle}
                <div>{comment.text}</div>
            </section>
        </section>
    )
}

export default Comment