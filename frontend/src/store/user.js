import axios from 'axios'

/**
 * Action Types
 */

const GET_USER = 'GET_USER';
const LOGOUT_USER = 'LOGOUT_USER';
const POPULATE_MESSAGES = 'POPULATE_MESSAGES';
const CHANGE_TALKINGTO = 'CHANGE_TALKINGTO';
const CHANGE_CONVO = 'CHANGE_CONVO';
const ADD_HACKATHON = 'ADD_HACKATHON';

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
        firstName: "",
        lastName: "",
        username: "",
        password: "",
        error: "",
        hackathons: [],
        githubUrl: "",
        description: "",
        age: 69,
        imageUrl: "",
        likesMe: [],
        matched: [],
        used: [],
        matches: {},
        talkingTo: "Mark"
    }
};


/**
 * Action Creators
 */
export const getUser = user => ({type: GET_USER, user});
export const logoutUser = user => ({type: LOGOUT_USER, user});
export const populateMessages = user => ({type: POPULATE_MESSAGES, user});
export const changeTalkingto = user => ({type: CHANGE_TALKINGTO, user});
export const changeConvo = user => ({type: CHANGE_CONVO, user});
export const addHackathon = user => ({type: ADD_HACKATHON, user});

export const addMessage = (fromImageUrl, from, to, matches, message) => dispatch => {
    const msg = {
        message, 
        imageUrl: fromImageUrl,
        name: from 
    }
    console.log('msg')
    console.log(msg)
    console.log('matches')
    console.log(matches)
    console.log('to')
    console.log(to)
    let msgArr = matches[to];
    msgArr.unshift(msg)
    matches[to] = msgArr;
    dispatch(changeConvo(matches))
}

export const appendHackathon = (username, name) => async dispatch => {
    let res;
    try {
        res = await axios.post('api/hackers/hackathon/add', {username, hackathonName: name.trim()})
    } catch (hackErr) {
        console.error(hackErr)
    }
    try {
        dispatch(addHackathon(res.data))
    } catch (hackErr) {
        console.error(hackErr)
    }
}

export const auth = (username, password) => async dispatch => {
    let res;
    try {
        res = await axios.post('api/hackers/login', {username, password});
    } catch(authError) {
        console.error(authError)
        return dispatch(logoutUser({
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

export const registerUser = (username, password) => async dispatch => {
    let res;
    try {
        res = await axios.post('api/hackers/register', {username, password});
    } catch(authError) {
        console.error(authError)
        return dispatch(logoutUser({
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
    var data = state
    switch(action.type) {
        case GET_USER:
        console.log(data)
        console.log({
            ...data,
            data: action.user
        })
            return action.user
        case LOGOUT_USER:
            console.log(action.user)
            return action.user
        case POPULATE_MESSAGES:
            data.data.matches=action.user;
            return {
                ...data,
            }
        case CHANGE_TALKINGTO:
            data.data.talkingTo=action.user;
            return {
                ...data,
            }
        case CHANGE_CONVO:
            data.data.matches=action.user;
            return {
                ...data
            }
        case ADD_HACKATHON:
            console.log(data.data)
            data.data.hackathons=action.user;
            return {
                ...data
            }
        default:
            return state
    }
}