import React from 'react';
import style from './index.module.scss';
import Message from './Message/Message';
//import socketIOClient from 'socket.io-client';

/**
 * Message List component
 */

const emptyList = (
    <div className={style.empty}>
        <span role="img" aria-label="post">
            📝
        </span>
        <h2>No Messages Yet</h2>
        <p>Be the first to post in this room or invite someone to join the room</p>
    </div>
)

const MessageList = ({ messages = []}) => {
    /**
    //In render
    const socket = socketIOClient("localhost:8000");
    socket.on('pm'+my_name, (msg, name) => {
        //add msg and name based on the thing
        //change state/re-render
    })

    **/
    const dummy = {
        "name": "Miguel Acero",
        "imageUrl": "https://www.argentum.org/wp-content/uploads/2018/12/blank-profile-picture-973460_6404.png",
        "message": "What's good cuzzz",
        "createdAt": "13:29"
    }
    return (
        <ul id="messages" className={style.component}>
            <wrapper->
                <Message 
                    name={dummy.name}
                    imageUrl={dummy.imageUrl}
                    message={dummy.message}
                />
            </wrapper->
        </ul>
    );
};

export default MessageList;