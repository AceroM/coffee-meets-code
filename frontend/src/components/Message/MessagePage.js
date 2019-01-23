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
            matches: {}
        }
    }
       /**
    //In render
    
    **/
    componentDidMount() {
        const { isLoggedIn, username, firstName } = this.props;
        let hostname = "http://localhost:5000/"; //window.location.hostname; 
        console.log(hostname)
        console.log(isLoggedIn)
        if (isLoggedIn) {
            const socket = socketIOClient(hostname);
            socket.emit('user_connect', firstName.toLowerCase()); 
        }
        const {matches, matched, talkingTo, loadChat} = this.props;
        if ( Object.keys(matches).length == 0) {
            if ( matched.length > 0) {
                matched.forEach(name => {
                    if (name === 'mark')
                        matches[name] = [{name: 'mark', message: 'hey ;)', imageUrl: 'https://www.biography.com/.image/ar_1:1%2Cc_fill%2Ccs_srgb%2Cg_face%2Cq_auto:good%2Cw_300/MTQyMDA0NDgwMzUzNzcyNjA2/mark-zuckerberg_gettyimages-512304736jpg.jpg'}]
                    else
                        matches[name] = [{name: 'jenny', message: 'i love you', imageUrl: 'https://pbs.twimg.com/media/DxFPW9hV4AAqwcS.jpg'}]
                })
                this.setState({ matches })
                loadChat(matches)
            } else {
                this.setState({ lonely: true })
            }
        } else {
            console.log(matches)
        }
        // if (this.props.matches[this.props.talkingTo]) {
        //     axios.get(`/api/hackers/matched/${this.props.username}`)
        //     .then(res => {
        //         let data = res.data;
        //         this.props.handleMessage(data);
        //     })
        // } else {
        //     let messages = this.props.matches[this.props.talkingTo]['messages'];
        //     this.setState({ messages });
        // }
    }
    
    render() {
        const dummyData = {
            username: "kaizenc",
            name: "Kaizen Castanos",
            firstName: "Kaizen",
            lastName: "Castanos",
            imageUrl: "https://avatars0.githubusercontent.com/u/8743619?s=460&v=4",
        }
        const { talkingTo, matched } = this.props;
        return (
            <main className="messageBody">
                <aside>
                    <UserHeader/>
                    { this.state.lonely ? (
                        <RoomList matches={{}}/>
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