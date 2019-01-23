import React, { Component } from 'react';
import './index.scss';
import UserHeader from './UserHeader';
import RoomHeader from './RoomHeader/RoomHeader';
import RoomList from './RoomList/RoomList'
import EmptyChat from './EmptyChat/EmptyChat';
import CreateMessageForm from './CreateMessageForm/CreateMessageForm';
import MessageList from './MessageList/MessageList';
import { connect } from 'react-redux';

class MessagePage extends Component {
    state = {
        talkingTo: "Miguel",
        messages: [],
        talkedTo: true
    }
    
    render() {
        const dummyData = {
            username: "kaizenc",
            name: "Kaizen Castanos",
            firstName: "Kaizen",
            lastName: "Castanos",
            imageUrl: "https://avatars0.githubusercontent.com/u/8743619?s=460&v=4",
        }
        const { talkingTo } = this.props;
        return (
            <main className="messageBody">
                {/* This is the message page { username } */}
                <aside>
                    <UserHeader data={dummyData}/>
                    <RoomList matches={{}}/>
                </aside>
                <section>
                    <RoomHeader roomName={talkingTo}/>
                    {talkingTo ? (
                        <row->
                            <col->
                                <MessageList/>
                                <CreateMessageForm/>>
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
    return {
        talkingTo: state.user.data.talkingTo
    }
}

export default connect(mapState)(MessagePage)