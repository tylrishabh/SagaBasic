export const GET_USERS = 'GET_USERS'
export const SET_USERS = 'SET_USERS'

export const getUsers = () => ({
    type: GET_USERS
})

export const setUsers = (users) => ({
    type: SET_USERS,
    users
})