import React from 'react';
import style from './index.module.scss'
//import socketIOClient from 'socket.io-client';

// const CreateMessageForm = (data, person) => {
const CreateMessageForm = () => {
    /**
    //On Button Click
    const socket = socketIOClient("localhost:8000");
    socket.emit('pm', msg, my_name, receiver);
    **/
    return (
        <form
            className={style.component}
            onSubmit={e=> {
                e.preventDefault()
                const message = e.target[0].value.trim()
                if (message.length === 0) {
                    return
                }
                e.target[0].value = ''
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

export default CreateMessageForm;