import axios from 'axios'

/**
 * Action Types
 */

const GET_USER = 'GET_USER';

/**
 * Initial State
 */

const initialUser = {
    data: {
        isLoggedIn: false,
        username: "",
        password: "",
        error: ""
    }
};

/**
 * Action Creators
 */

export const getUser = user => ({type: GET_USER, user})

export const auth = (username, password) => async dispatch => {
    let res;
    try {
        res = await axios.post('api/hackers/login', {username, password});
    } catch(authError) {
        console.error(authError)
        return dispatch(getUser({
            data: {
                isLoggedIn: false,
                username: "",
                error: {
                    response: "Invalid credentials please try again"
                }
            }
        }))
    }
    try {
        dispatch(getUser(res.data))
    } catch(err) {
        console.error(err)
    }
}

/**
 * REDUCERS
 */

export default function(state = initialUser, action) {
    switch(action.type) {
        case GET_USER:
            console.log(action.user)
            return action.user
        default:
            return state
    }
}