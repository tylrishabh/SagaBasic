import { SET_USERS } from "../action/actions"

const initialState = {
  users: []
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS: {
      return { ...state, users: action.users }
    }
    default:
      return state
  }
}
// add 3 seperate actions.
export default userReducer