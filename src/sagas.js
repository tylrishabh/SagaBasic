import { call, put, takeLatest } from 'redux-saga/effects'
import { GET_USERS_FETCH, GET_USERS_SUCCESS } from './actions'

function userFetch() {
    console.log('INside User fetch')
    return fetch('https://jsonplaceholder.typicode.com/users').then(response => response.json())
}

function* workGetUserFetch() {
    console.log('inside generator')
    const users = yield call(userFetch)
    yield put({ type: GET_USERS_FETCH, users })
}

function* mySaga() {
    yield takeLatest(GET_USERS_FETCH, workGetUserFetch)
}

export default mySaga