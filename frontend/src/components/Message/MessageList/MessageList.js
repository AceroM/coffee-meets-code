import React from 'react';
import style from './index.module.scss';
import Message from './Message/Message';
import axios from 'axios';
import { populateMessages } from '../../../store';
import { connect } from 'react-redux';


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
        const { matches, talkingTo } = this.props;
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
                </wrapper->>
            </ul>
        );
    }
};
    
const mapState = state => {
    console.log(state)
    return {
        username: state.user.data.username,
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