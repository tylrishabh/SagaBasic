import { GET_USERS_SUCCESS, GET_USERS_FETCH } from "./actions"

const myFirstReducer = (state = { users: [] }, action) => {
  switch (action.type) {
    case GET_USERS_FETCH: {
      return { ...state, users: action.users }
    }
    default:
      return state
  }
}

export default myFirstReducer