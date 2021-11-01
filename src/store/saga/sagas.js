import { takeLatest } from 'redux-saga/effects'
import { GET_USERS } from '../action/actions'
import { handleGetUser } from '../saga/handlers/user'

export function* watcherSaga() {
    yield takeLatest(GET_USERS, handleGetUser)
}

export default watcherSaga
