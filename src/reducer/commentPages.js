import { ADD_COMMENT_PAGE, LOAD_COMMENT_PAGE, SUCCESS } from '../constants'
import { arrayToMap, ReducerState } from '../utils'
import { Record, Map } from 'immutable'

const CommentModel = Record({
    id: null,
    text: null,
    user: null
})
const defaultState = new ReducerState({
    entities: new Map({})
})

export default (comments = defaultState, action) => {
    const { type, payload, response, error, generatedId } = action

    switch (type) {
        case ADD_COMMENT_PAGE:
            return comments.set(generatedId, {...payload.comment, id: generatedId})

        case LOAD_COMMENT_PAGE + SUCCESS:
            return comments.mergeIn(['entities'], arrayToMap(response, CommentModel))
    }

    return comments
}