import axios from 'axios';

const initialState = {
    users: [],
    currentUser: []
}

const GET_USERS = "GET_USERS"
const CURRENT_USER = "CURRENT_USER"

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case GET_USERS + "_PENDING":
            return Object.assign({}, state, { loading: true, error: false })
        case GET_USERS + "_REJECTED":
            return Object.assign({}, state, { loading: false, error: true })
        case GET_USERS + "_FULFILLED":
            return Object.assign({}, state, {features: action.payload })
        case CURRENT_USER:
            return Object.assign({}, state, {currentUser: action.payload})

        default: return state
    }
}

export function getAllUsers() {
    const url = '/api/all-users'
    const promise = axios.get(url).then(response => response.data);
    return {
        type: GET_USERS,
        payload: promise
    }
}

export function getOneUser() {
    const url = '/api/all-users'
    const promise = axios.get(url).then(response => response.data);
    return {
        type: GET_USERS,
        payload: promise
    }
}

export function getUserInfo(id){
    const url= `/api/user/${id}`
}

export function setUser(user){
    return{
        type: CURRENT_USER,
        payload: user
    }
}