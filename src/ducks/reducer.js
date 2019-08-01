import axios from 'axios';

const initialState = {
    users: [],
}

const GET_USERS = "GET_USERS"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS + "_PENDING":
            return Object.assign({}, state, { loading: true, error: false })
        case GET_USERS + "_REJECTED":
            return Object.assign({}, state, { loading: false, error: true })
        case GET_USERS + "_FULFILLED":
            return Object.assign({}, state, {features: action.payload })

        default: return state
    }
}

export function getAllUsers() {
    return {
        type: GET_USERS,
        payload: ["cake"]
    }
}