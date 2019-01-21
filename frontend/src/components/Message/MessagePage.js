import React, { Component } from 'react';
import './index.scss';
import UserHeader from './UserHeader';
import RoomHeader from './RoomHeader/RoomHeader';
import EmptyChat from './EmptyChat/EmptyChat';
import CreateMessageForm from './CreateMessageForm/CreateMessageForm';

class MessagePage extends Component {
    state = {
        talkingTo: "Miguel",
        messages: [],
        talkedTo: true
    }
    render() {
        const { username } = this.props;
        const dummyData = {
            username: "kaizenc",
            name: "Kaizen Castanos",
            firstName: "Kaizen",
            lastName: "Castanos",
            imageUrl: "https://avatars0.githubusercontent.com/u/8743619?s=460&v=4",
        }
        return (
            <main className="messageBody">
                {/* This is the message page { username } */}
                <aside>
                    <UserHeader data={dummyData}/>
                </aside>
                <section>
                    <RoomHeader roomName={"Miguel"}/>
                    {this.state.talkedTo ? (
                        <row->
                            <col->
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

export default MessagePage;