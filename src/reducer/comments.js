import { ADD_COMMENT, LOAD_ARTICLE_COMMENTS, SUCCESS } from '../constants'
import { arrayToMap } from '../utils'
import { Record } from 'immutable'

const CommentModel = Record({
    id: null,
    user: null,
    text: null
})

const defaultComments = arrayToMap([], CommentModel)

export default (comments = defaultComments, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT:
            return comments.set(generatedId, {...payload.comment, id: generatedId})

        case LOAD_ARTICLE_COMMENTS + SUCCESS:
            console.log(LOAD_ARTICLE_COMMENTS + SUCCESS, payload)
            return comments
                .merge(arrayToMap(payload.comments, CommentModel))
    }

    return comments
}