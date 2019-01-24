import React from 'react';
import style from './index.module.scss'
import { connect } from 'react-redux';
import { addMessage } from '../../../store';
import socketIOClient from 'socket.io-client';

// const CreateMessageForm = (data, person) => {
const CreateMessageForm = ({firstName, imageUrl, username, matches, talkingTo, handleSubmit }) => {
    const socket = socketIOClient(window.location.hostname);
    socket.on('pm'+username, (msg, name, matches) => {
        handleSubmit(imageUrl, username, name, matches, msg)
    })
    return (
        <form
            className={style.component}
            onSubmit={e=> {
                e.preventDefault()
                const message = e.target[0].value.trim()
                if (message.length === 0) {
                    return
                }
                e.target[0].value = '';                
                // this emits a pm
                socket.emit('pm', message, username, talkingTo, matches);
                handleSubmit(imageUrl, username, talkingTo, matches, message)
            }}
        >
            {/* <input placeholder="Type a message.." onInput={e => data.isTypingWith(person)}/> */}
            <input placeholder="Type a message.."/>
            <button type="submit">
            <svg id="send" viewBox="0 0 24 24">
                <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"></path>
                <path d="M0 0h24v24H0z" fill="none"></path>
            </svg>
            </button>
        </form>
    );
};

const mapState = state => {
    return {
        imageUrl: state.user.data.imageUrl,
        username: state.user.data.username,
        firstName: state.user.data.firstName,
        matches: state.user.data.matches,
        talkingTo: state.user.data.talkingTo
    }
}

const mapDispatch = dispatch => {
    return {
        handleSubmit(imageUrl, username, talkingTo, matches, message) {
            dispatch(addMessage(imageUrl, username, talkingTo, matches, message))
        }
    }
}

export default connect(mapState, mapDispatch)(CreateMessageForm);