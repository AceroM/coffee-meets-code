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
        this.state = {
            messages: []
        }
    }
    
    componentDidMount(){
        if (!this.props.matches[this.props.talkingTo]) {
            axios.get(`/api/hackers/matched/${this.props.username}`)
            .then(res => {
                let data = res.data;
                this.props.handleMessage(data);
            })
        } else {
            let messages = this.props.matches[this.props.talkingTo]['messages'];
            this.setState({ messages });
            console.log(this.props)
        }
    }
    render() {
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
                </wrapper->>
            </ul>
        );
    }
};
    
const mapState = state => {
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