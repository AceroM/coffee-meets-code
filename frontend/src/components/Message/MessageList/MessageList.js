import React from 'react';
import style from './index.module.scss';
import Message from './Message/Message';
import axios from 'axios';
import { populateMessages } from '../../../store';
import { connect } from 'react-redux';
import socketIOClient from 'socket.io-client';

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

class MessageList extends React.Component {
    constructor(props) {
        super(props);
    }
    componentDidMount(){
    }
    render() {
        const { matches, talkingTo, firstName } = this.props;
        // const socket = socketIOClient("localhost:5000");
        // socket.on('pm'+firstName, (msg, name) => {
        //     console.log('did I really recieve it though?')
        // })
        return (
            <ul id="messages" className={style.component}>
                <wrapper->
                    { matches ? (
                        Object.entries(matches).map(message => (
                            <Message 
                                name={message[0]}
                                imageUrl={message[1].imageUrl}
                                message={message[1].message}
                            />
                        ))
                    ) : (
                        <p> {JSON.stringify(talkingTo)} <br/> {JSON.stringify(matches)}</p>
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
