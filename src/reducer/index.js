import { combineReducers } from 'redux'
import articleReducer from './articles'
import comments from './comments'
import commentPagesReducer from './commentPages'
import counterReducer from './counter'
import filters from './filters'

export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    commentPages: commentPagesReducer,
    filters, comments
})