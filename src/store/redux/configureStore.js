import { combineReducers, createStore, applyMiddleware } from 'redux'
import userReducer from '../reducer/reducers'
import createSagaMiddleware from '@redux-saga/core';
import watcherSaga from '../saga/sagas'

const reducer = combineReducers({
    user: userReducer
})

const sagaMiddleware = createSagaMiddleware()
const middleware = [sagaMiddleware]

const store = createStore(reducer, {}, applyMiddleware(...middleware)) // {} = enhancers
sagaMiddleware.run(watcherSaga)

export default store