import axios from 'axios'

/**
 * Action Types
 */

const GET_USER = 'GET_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const GET_HACKATHON = 'GET_HACKATHON';
const GET_CHAT = 'GET_CHAT';
const CREATE_CHAT = 'CREATE_CHAT';

/**
 * Initial State
 */

 /** Hackathon Object {
  *     endDate: "YYYY-MM-DD",
  *     imageUrl: "...png",
  *     isHighschool: false,
  *     location: "Toronto, ON",
  *     name: "Hack the 6ix 2018",
  *     startDate: "2018-08-24",
  *     url: "http://hackthe6ix.com/"
  * }
  */
 
const initialUser = {
    data: {
        isLoggedIn: false,
        username: "",
        password: "",
        error: "",
        hackathons: [{
            "endDate": "YYYY-MM-DD",
            "imageUrl": "...png",
            "isHighschool": false,
            "location": "Toronto, ON",
            "name": "Hack the 6ix 2018",
            "startDate": "2018-08-24",
            "url": "http://hackthe6ix.com/"
        }],
        githubUrl: ""
    },
    rooms: [],
    matches: []
};

/**
 * Action Creators
 */
export const getUser = user => ({type: GET_USER, user});
export const logoutUser = user => ({type: LOGOUT_USER, user});
export const getHackathon = hackathon => ({type: GET_HACKATHON});

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
        case LOGOUT_USER:
            console.log(action.user)
            return action.user
        case GET_HACKATHON:
            console.log(action)
            return action.hackathon
        default:
            return state
    }
}