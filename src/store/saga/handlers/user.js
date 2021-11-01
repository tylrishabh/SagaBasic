import { call, put } from 'redux-saga/effects'
import requestGetUsers from '../requests/user'
import { setUsers } from '../../action/actions'

export function* handleGetUser() {
  try {
    const resp = yield call(requestGetUsers)
    yield put(setUsers(resp))
  } catch (error) {
    console.log(Error)
  }
}