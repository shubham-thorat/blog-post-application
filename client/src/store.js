import DataReducer from './redux/PostDataReducer'
import thunk from 'redux-thunk'
import { createStore ,combineReducers,applyMiddleware} from 'redux'
import logger from 'redux-logger'

const rootReducer = combineReducers({
    post : DataReducer
})

const store = createStore(rootReducer,applyMiddleware(logger,thunk))
export default store