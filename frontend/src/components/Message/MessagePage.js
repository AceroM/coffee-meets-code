import React, { Component } from 'react';
import './index.scss';
import UserHeader from './UserHeader';
import RoomHeader from './RoomHeader/RoomHeader';
import RoomList from './RoomList/RoomList'
import EmptyChat from './EmptyChat/EmptyChat';
import CreateMessageForm from './CreateMessageForm/CreateMessageForm';
import MessageList from './MessageList/MessageList';
import { connect } from 'react-redux';
import axios from 'axios';
import { changeConvo } from '../../store';
import socketIOClient from 'socket.io-client';

class MessagePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            lonely: false,
        }
    }
       /**
    //In render
    fetch again to check if matched?
    **/
    componentDidMount() {
    }
    
    render() {
        const { talkingTo } = this.props;
        return (
            <main className="messageBody">
                <aside>
                    <UserHeader/>
                    { this.state.lonely ? (
                        <RoomList/>
                    ) : (
                        <RoomList/>
                    )}
                </aside>
                <section>
                    <RoomHeader roomName={talkingTo}/>
                    {talkingTo ? (
                        <row->
                            <col->
                                <MessageList/>
                                <CreateMessageForm/>
                            </col->
                        </row->
                    ) : (
                        <EmptyChat/>
                    )}
                </section>
            </main>
        );
    }
}

const mapState = state => {
    console.log(state.user.data)
    return {
        isLoggedIn: state.user.data.isLoggedIn,
        talkingTo: state.user.data.talkingTo,
        matched: state.user.data.matched,
        matches: state.user.data.matches,
        username: state.user.data.username,
        firstName: state.user.data.firstName
    }
}

const mapDispatch = dispatch => {
    return {
        loadChat(matches) {
            dispatch(changeConvo(matches))
        }
    }
}

export default connect(mapState, mapDispatch)(MessagePage)