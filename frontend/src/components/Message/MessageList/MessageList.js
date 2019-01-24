import React from 'react';
import style from './index.module.scss';
import Message from './Message/Message';
import { populateMessages } from '../../../store';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

/**
 * Message List component
 */

class MessageList extends React.Component {
    render() {
        const { matches, talkingTo, firstName } = this.props;
        // const socket = socketIOClient("localhost:5000");
        // socket.on('pm'+firstName, (msg, name) => {
        //     console.log('did I really recieve it though?')
        // })
        const messages = matches[talkingTo];
        return (
            <ul id="messages" className={style.component}>
                <wrapper->
                    { messages ? (
                        messages.map(message => (
                            <Message 
                                name={message.name}
                                imageUrl={message.imageUrl}
                                message={message.message}
                            />
                        ))
                    ) : (
                        <p>{JSON.stringify(matches)}</p>
                    )}
                </wrapper->
            </ul>
        );
    }
};
    
const mapState = state => {
    console.log(state)
    return {
        username: state.user.data.username,
        firstName: state.user.data.firstName,
        matches: state.user.data.matches,
        talkingTo: state.user.data.talkingTo
    }
}

const mapDispatch = dispatch => {
    return {
        handleMessage(match) {
            dispatch(populateMessages(match));
        }
    }
}

export default connect(mapState, mapDispatch)(MessageList);